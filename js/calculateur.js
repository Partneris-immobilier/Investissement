/* ============================================================
   Partneris Immobilier — Panneau pays + calculateur de rendement
   ============================================================ */

(function () {
  "use strict";

  var panelEmpty = document.getElementById("panel-empty");
  var panelData = document.getElementById("panel-data");
  var elName = document.getElementById("p-name");
  var elRegion = document.getElementById("p-region");
  var elYield = document.getElementById("p-yield");
  var elVerdict = document.getElementById("p-verdict");
  var elNote = document.getElementById("p-note");
  var elLegalLink = document.getElementById("p-legal-link");

  var inBudget = document.getElementById("in-budget");
  var inApport = document.getElementById("in-apport");
  var inTaux = document.getElementById("in-taux");
  var inCharges = document.getElementById("in-charges");

  var outLoyer = document.getElementById("out-loyer");
  var outCharges = document.getElementById("out-charges");
  var outApportCHF = document.getElementById("out-apport-chf");
  var outCredit = document.getElementById("out-credit");
  var outInterets = document.getElementById("out-interets");
  var outCashflow = document.getElementById("out-cashflow");
  var outRendementNet = document.getElementById("out-rendement-net");
  var calcVerdict = document.getElementById("calc-verdict");

  var currentPays = null;

  // Chaînes i18n : un fichier js/strings.<lang>.js chargé AVANT ce script
  // peut définir window.CALC_STRINGS pour surcharger ces valeurs par défaut (FR).
  var S = window.CALC_STRINGS || {
    locale: "fr-CH",
    currency: "CHF",
    verdictExcellent: "Excellent potentiel sur fonds propres, à confirmer avec une étude de marché locale.",
    verdictCorrect: "Rendement net correct sur fonds propres — projet à approfondir.",
    verdictModest: "Rendement net modeste : la valorisation à long terme doit compenser le rendement.",
    verdictNegative: "Cash-flow négatif avec ces paramètres : un effort d'épargne mensuel serait nécessaire."
  };

  function fmtCHF(n) {
    if (!isFinite(n)) return "—";
    return Math.round(n).toLocaleString(S.locale) + " " + S.currency;
  }
  function fmtPct(n) {
    if (!isFinite(n)) return "—";
    return n.toFixed(2).replace(".", ".") + " %";
  }

  function renderPays(pays) {
    currentPays = pays;
    panelEmpty.style.display = "none";
    panelData.style.display = "block";
    elName.textContent = pays.name;
    elRegion.textContent = pays.region;
    elYield.textContent = pays.yield.toFixed(2) + " %";
    var v = verdictPourRendement(pays.yield);
    elVerdict.className = "pill " + v.cls;
    elVerdict.textContent = v.label;
    elNote.textContent = pays.note;
    elLegalLink.href = "droit-investissement.html?pays=" + pays.id;
    compute();
  }

  function compute() {
    if (!currentPays) return;
    var budget = parseFloat(inBudget.value) || 0;
    var apportPct = parseFloat(inApport.value) || 0;
    var tauxPct = parseFloat(inTaux.value) || 0;
    var chargesPct = parseFloat(inCharges.value) || 0;

    var loyerBrutAnnuel = budget * (currentPays.yield / 100);
    var chargesEstimees = loyerBrutAnnuel * (chargesPct / 100);
    var loyerNet = loyerBrutAnnuel - chargesEstimees;
    var apportCHF = budget * (apportPct / 100);
    var creditCHF = budget - apportCHF;
    var interetsAnnuels = creditCHF * (tauxPct / 100);
    var cashflowNetAnnuel = loyerNet - interetsAnnuels;
    var rendementNetFondsPropres = apportCHF > 0 ? (cashflowNetAnnuel / apportCHF) * 100 : NaN;

    outLoyer.textContent = fmtCHF(loyerBrutAnnuel);
    outCharges.textContent = "-" + fmtCHF(chargesEstimees);
    outApportCHF.textContent = fmtCHF(apportCHF);
    outCredit.textContent = fmtCHF(creditCHF);
    outInterets.textContent = "-" + fmtCHF(interetsAnnuels);
    outCashflow.textContent = (cashflowNetAnnuel >= 0 ? "+" : "") + fmtCHF(cashflowNetAnnuel);
    outCashflow.style.color = cashflowNetAnnuel >= 0 ? "var(--green)" : "var(--red)";
    outRendementNet.textContent = fmtPct(rendementNetFondsPropres);

    var msg, cls;
    if (rendementNetFondsPropres >= 8) {
      msg = S.verdictExcellent;
      cls = "pill-green";
    } else if (rendementNetFondsPropres >= 4) {
      msg = S.verdictCorrect;
      cls = "pill-gold";
    } else if (rendementNetFondsPropres >= 0) {
      msg = S.verdictModest;
      cls = "pill-amber";
    } else {
      msg = S.verdictNegative;
      cls = "pill-red";
    }
    calcVerdict.className = "pill " + cls;
    calcVerdict.textContent = msg;
  }

  [inBudget, inApport, inTaux, inCharges].forEach(function (el) {
    if (el) el.addEventListener("input", compute);
  });

  window.addEventListener("pays-select", function (e) {
    renderPays(e.detail);
    var panel = document.getElementById("side-panel");
    if (panel && window.innerWidth < 900) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ---------- Recherche / liste de pays (accès sans clic sur le globe) ----------
  var searchInput = document.getElementById("pays-search");
  var searchResults = document.getElementById("pays-search-results");

  function renderList(filter) {
    var f = (filter || "").toLowerCase();
    var list = (window.PAYS_DATA || [])
      .filter(function (p) { return p.name.toLowerCase().indexOf(f) !== -1; })
      .sort(function (a, b) { return b.yield - a.yield; });
    searchResults.innerHTML = "";
    list.slice(0, 40).forEach(function (p) {
      var div = document.createElement("div");
      div.className = "search-row";
      div.innerHTML =
        '<span>' + p.name + '</span><span class="sr-yield">' + p.yield.toFixed(2) + " %</span>";
      div.addEventListener("click", function () {
        window.selectPaysOnGlobe(p.id);
        searchResults.style.display = "none";
        searchInput.value = p.name;
      });
      searchResults.appendChild(div);
    });
    searchResults.style.display = list.length ? "block" : "none";
  }

  if (searchInput) {
    searchInput.addEventListener("focus", function () { renderList(searchInput.value); });
    searchInput.addEventListener("input", function () { renderList(searchInput.value); });
    document.addEventListener("click", function (e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = "none";
      }
    });
  }

  // Liste complète triée par rendement (tableau sous le globe)
  var fullTableBody = document.getElementById("full-table-body");
  if (fullTableBody) {
    var sorted = (window.PAYS_DATA || []).slice().sort(function (a, b) { return b.yield - a.yield; });
    sorted.forEach(function (p) {
      var v = verdictPourRendement(p.yield);
      var tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.innerHTML =
        "<td><strong>" + p.name + "</strong></td>" +
        "<td>" + p.region + "</td>" +
        "<td>" + p.yield.toFixed(2) + " %</td>" +
        '<td><span class="pill ' + v.cls + '">' + v.label + "</span></td>";
      tr.addEventListener("click", function () {
        window.selectPaysOnGlobe(p.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      fullTableBody.appendChild(tr);
    });
  }
})();
