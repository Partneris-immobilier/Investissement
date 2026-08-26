/* ============================================================
   Partneris Immobilier — Globe 3D interactif
   Three.js (chargé en CDN dans carte-mondiale.html)
   ============================================================ */

(function () {
  "use strict";

  var container = document.getElementById("globe-canvas");
  if (!container || typeof THREE === "undefined") return;

  var R = 2; // rayon du globe

  // ---------- Scène ----------
  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5.6);

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // ---------- Lumières ----------
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  var sun = new THREE.DirectionalLight(0xffffff, 0.65);
  sun.position.set(5, 3, 5);
  scene.add(sun);

  // ---------- Globe ----------
  var globeGroup = new THREE.Group();
  scene.add(globeGroup);

  var loader = new THREE.TextureLoader();
  var earthTexture = loader.load("assets/earth-texture.jpg");
  earthTexture.colorSpace = THREE.SRGBColorSpace || earthTexture.colorSpace;

  var globeMat = new THREE.MeshPhongMaterial({
    map: earthTexture,
    shininess: 6,
  });
  var globeGeo = new THREE.SphereGeometry(R, 64, 64);
  var globeMesh = new THREE.Mesh(globeGeo, globeMat);
  globeGroup.add(globeMesh);

  // légère atmosphère
  var atmoGeo = new THREE.SphereGeometry(R * 1.015, 64, 64);
  var atmoMat = new THREE.MeshBasicMaterial({
    color: 0x6fa8ff,
    transparent: true,
    opacity: 0.06,
    side: THREE.BackSide,
  });
  globeGroup.add(new THREE.Mesh(atmoGeo, atmoMat));

  // halo extérieur
  var haloGeo = new THREE.SphereGeometry(R * 1.09, 48, 48);
  var haloMat = new THREE.MeshBasicMaterial({
    color: 0xd8c685,
    transparent: true,
    opacity: 0.035,
    side: THREE.BackSide,
  });
  globeGroup.add(new THREE.Mesh(haloGeo, haloMat));

  // ---------- Conversion lat/lon -> position 3D ----------
  function latLonToVector3(lat, lon, radius) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);
    var x = -radius * Math.sin(phi) * Math.cos(theta);
    var y = radius * Math.cos(phi);
    var z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
  }

  // ---------- Marqueurs pays ----------
  var markers = []; // { mesh, data }
  var markerHitGeo = new THREE.SphereGeometry(0.05, 10, 10);

  function colorForYield(y) {
    if (y >= 6.5) return 0x8ba37f; // vert sauge
    if (y >= 4.5) return 0xd8c685; // butter
    if (y >= 3.0) return 0xc79a5e; // ambre
    return 0xb2604a; // terracotta
  }

  (window.PAYS_DATA || []).forEach(function (pays) {
    var pos = latLonToVector3(pays.lat, pays.lon, R * 1.012);
    var mat = new THREE.MeshBasicMaterial({ color: colorForYield(pays.yield) });
    var mesh = new THREE.Mesh(markerHitGeo, mat);
    mesh.position.copy(pos);
    mesh.userData.pays = pays;
    globeGroup.add(mesh);
    markers.push({ mesh: mesh, data: pays });

    // halo pulsant discret
    var ringGeo = new THREE.RingGeometry(0.06, 0.09, 16);
    var ringMat = new THREE.MeshBasicMaterial({
      color: mat.color,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    });
    var ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(pos);
    ring.lookAt(pos.clone().multiplyScalar(2));
    globeGroup.add(ring);
  });

  // ---------- Interaction : rotation à la souris / tactile ----------
  var isDragging = false;
  var prev = { x: 0, y: 0 };
  var rotation = { x: 0.15, y: -0.4 };
  var targetRotation = { x: 0.15, y: -0.4 };
  var autoRotate = true;
  var dragDistance = 0;

  function onPointerDown(e) {
    isDragging = true;
    autoRotate = false;
    dragDistance = 0;
    var p = getPoint(e);
    prev.x = p.x;
    prev.y = p.y;
  }
  function onPointerMove(e) {
    if (!isDragging) return;
    var p = getPoint(e);
    var dx = p.x - prev.x;
    var dy = p.y - prev.y;
    dragDistance += Math.abs(dx) + Math.abs(dy);
    targetRotation.y += dx * 0.005;
    targetRotation.x += dy * 0.005;
    targetRotation.x = Math.max(-1.3, Math.min(1.3, targetRotation.x));
    prev.x = p.x;
    prev.y = p.y;
  }
  function onPointerUp(e) {
    isDragging = false;
    if (dragDistance < 6) handleClick(e);
    setTimeout(function () { autoRotate = true; }, 4000);
  }
  function getPoint(e) {
    if (e.touches && e.touches.length) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  }

  renderer.domElement.addEventListener("mousedown", onPointerDown);
  renderer.domElement.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);
  renderer.domElement.addEventListener("touchstart", onPointerDown, { passive: true });
  renderer.domElement.addEventListener("touchmove", onPointerMove, { passive: true });
  renderer.domElement.addEventListener("touchend", onPointerUp);

  // zoom molette
  var zoom = 5.6;
  renderer.domElement.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
      zoom += e.deltaY * 0.0025;
      zoom = Math.max(3.4, Math.min(9, zoom));
    },
    { passive: false }
  );

  // ---------- Raycasting / clic pays ----------
  var raycaster = new THREE.Raycaster();
  raycaster.params.Points = raycaster.params.Points || {};
  var mouseNDC = new THREE.Vector2();

  function handleClick(e) {
    var rect = renderer.domElement.getBoundingClientRect();
    var p = getPoint(e);
    mouseNDC.x = ((p.x - rect.left) / rect.width) * 2 - 1;
    mouseNDC.y = -((p.y - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouseNDC, camera);
    var hits = raycaster.intersectObjects(markers.map(function (m) { return m.mesh; }));
    if (hits.length) {
      var pays = hits[0].object.userData.pays;
      window.dispatchEvent(new CustomEvent("pays-select", { detail: pays }));
      highlightMarker(hits[0].object);
    }
  }

  var lastHighlighted = null;
  function highlightMarker(mesh) {
    if (lastHighlighted) lastHighlighted.scale.set(1, 1, 1);
    mesh.scale.set(1.8, 1.8, 1.8);
    lastHighlighted = mesh;
  }

  // permet à l'UI externe (recherche/liste) de sélectionner un marqueur
  window.selectPaysOnGlobe = function (id) {
    var found = markers.find(function (m) { return m.data.id === id; });
    if (!found) return;
    window.dispatchEvent(new CustomEvent("pays-select", { detail: found.data }));
    highlightMarker(found.mesh);
    // orienter le globe vers le pays sélectionné
    var lat = found.data.lat, lon = found.data.lon;
    targetRotation.y = -((lon + 180) * (Math.PI / 180)) - Math.PI / 2 + Math.PI;
    targetRotation.x = (lat * Math.PI) / 180 * -1 * 0.6;
    autoRotate = false;
  };

  // ---------- Boucle de rendu ----------
  function animate() {
    requestAnimationFrame(animate);
    if (autoRotate) targetRotation.y += 0.0016;
    rotation.x += (targetRotation.x - rotation.x) * 0.08;
    rotation.y += (targetRotation.y - rotation.y) * 0.08;
    globeGroup.rotation.x = rotation.x;
    globeGroup.rotation.y = rotation.y;
    camera.position.z += (zoom - camera.position.z) * 0.08;
    renderer.render(scene, camera);
  }
  animate();

  // ---------- Redimensionnement ----------
  window.addEventListener("resize", function () {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
})();
