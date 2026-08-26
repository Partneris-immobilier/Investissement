/* ============================================================
   Partneris Immobilier — Page "Cadre légal" : rendu des fiches pays
   ============================================================ */

(function () {
  "use strict";

  var grid = document.getElementById("droit-grid");
  if (!grid || typeof DROIT_DATA === "undefined") return;

  // Chaînes i18n : un fichier js/strings.<lang>.js chargé AVANT ce script
  // peut définir window.DROIT_STRINGS pour surcharger ces valeurs par défaut (FR).
  var S = window.DROIT_STRINGS || {
    accessOpen: "Accès ouvert",
    accessRestricted: "Accès restreint",
    labelAcces: "Accès à la propriété",
    labelNationalite: "Conditions de nationalité",
    labelStructure: "Structure recommandée",
    labelVisa: "Visa / résidence par investissement",
    labelNotes: "À noter"
  };

  var accessLabel = {
    ouvert: { txt: S.accessOpen, cls: "pill-green" },
    restreint: { txt: S.accessRestricted, cls: "pill-amber" },
  };

  function cardHTML(d) {
    var acc = accessLabel[d.accesNiveau] || accessLabel.restreint;
    return (
      '<div class="country-card scroll-fade" data-region="' + d.region + '" id="pays-' + d.id + '">' +
      '<div class="cc-head"><h4>' + d.name + "</h4>" +
      '<span class="pill ' + acc.cls + '">' + acc.txt + "</span></div>" +
      "<dl>" +
      "<dt>" + S.labelAcces + "</dt><dd>" + d.acces + "</dd>" +
      "<dt>" + S.labelNationalite + "</dt><dd>" + d.nationalite + "</dd>" +
      "<dt>" + S.labelStructure + "</dt><dd>" + d.structure + "</dd>" +
      "<dt>" + S.labelVisa + "</dt><dd>" + d.visa + "</dd>" +
      "<dt>" + S.labelNotes + "</dt><dd>" + d.notes + "</dd>" +
      "</dl></div>"
    );
  }

  DROIT_DATA.forEach(function (d) {
    grid.insertAdjacentHTML("beforeend", cardHTML(d));
  });

  // ré-observer les nouvelles cartes pour l'animation scroll-fade
  var faders = grid.querySelectorAll(".scroll-fade");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    faders.forEach(function (el) { io.observe(el); });
  } else {
    faders.forEach(function (el) { el.classList.add("in"); });
  }

  // Onglets région
  var tabs = document.querySelectorAll(".region-tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var region = tab.getAttribute("data-region");
      grid.querySelectorAll(".country-card").forEach(function (card) {
        var show = region === "all" || card.getAttribute("data-region") === region;
        card.style.display = show ? "" : "none";
      });
    });
  });

  // Recherche pays
  var search = document.getElementById("droit-search");
  if (search) {
    search.addEventListener("input", function () {
      var q = search.value.toLowerCase();
      tabs.forEach(function (t) { t.classList.remove("active"); });
      var allTab = document.querySelector('.region-tab[data-region="all"]');
      if (allTab) allTab.classList.add("active");
      grid.querySelectorAll(".country-card").forEach(function (card) {
        var name = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = name.indexOf(q) !== -1 ? "" : "none";
      });
    });
  }

  // Sélection via ?pays=ID (venant de la carte mondiale)
  var params = new URLSearchParams(window.location.search);
  var target = params.get("pays");
  if (target) {
    var card = document.getElementById("pays-" + target);
    if (card) {
      card.classList.add("in");
      card.style.outline = "2px solid var(--gold)";
      card.style.outlineOffset = "3px";
      setTimeout(function () {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }
})();
