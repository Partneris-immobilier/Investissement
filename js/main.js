// Partneris Immobilier — comportements partagés (nav mobile, accordéons, animations)
document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      toggle.textContent = links.classList.contains("open") ? "✕" : "☰";
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.textContent = "☰";
      });
    });
  }

  // Marquer le lien de nav actif
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here) a.classList.add("active");
  });

  // Accordéons
  document.querySelectorAll(".accordion-head").forEach(function (head) {
    head.addEventListener("click", function () {
      var item = head.closest(".accordion-item");
      var body = item.querySelector(".accordion-body");
      var open = item.classList.contains("open");
      // fermer les autres du même groupe si demandé
      item.classList.toggle("open", !open);
      body.style.maxHeight = !open ? body.scrollHeight + "px" : 0;
    });
  });

  // Onglets simples (data-tab-group / data-tab-target)
  document.querySelectorAll("[data-tab-group]").forEach(function (group) {
    var groupName = group.getAttribute("data-tab-group");
    group.querySelectorAll(".tab-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        group.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var target = btn.getAttribute("data-tab-target");
        document.querySelectorAll('[data-tab-panel][data-tab-group-of="' + groupName + '"]').forEach(function (panel) {
          panel.style.display = panel.getAttribute("data-tab-panel") === target ? "" : "none";
        });
      });
    });
  });

  // Animation d'apparition au scroll
  var faders = document.querySelectorAll(".scroll-fade");
  if ("IntersectionObserver" in window && faders.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -5% 0px" });
    faders.forEach(function (el) { io.observe(el); });
  }
  // Filet de sécurité : si l'observateur ne s'est pas déclenché
  // (timing, capture d'écran plein format, etc.), on force l'affichage.
  setTimeout(function () {
    document.querySelectorAll(".scroll-fade:not(.in)").forEach(function (el) {
      el.classList.add("in");
    });
  }, 900);

  // Année dans le footer
  document.querySelectorAll(".current-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
