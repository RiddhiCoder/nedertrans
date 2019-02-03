var nederTransCoordinates = [47.172374, 23.052833];
var map = tomtom.L.map("map", {
  key: "sHtICE5F5AAoi63MkUHkFA3usWntqblG",
  basePath: "sdk",
  center: nederTransCoordinates,
  zoom: 16
});
var marker = tomtom.L.marker(nederTransCoordinates, {
  icon: tomtom.L.icon({
    iconUrl: "img/neder.png",
    iconSize: [50, 50],
    iconAnchor: [10, 35],
    popupAnchor: [12, -40]
  })
}).addTo(map);

var customPopup =
  '<p style="display:inline">' +
  '<img src="img/logo.png"' +
  'alt="nedertrans" style="width:30%;float:right;padding-top:10px">' +
  '<div style="width:70%; height:100%; padding-top:10px">' +
  '<span style="font-size:18px; color:darkgreen">Neder Trans srl</span></br>' +
  '<div><span style="color:grey">' +
  "Materiale de construcții și izolații, vopsele, soluții pentru acoperiș</span></div><br/>" +
  "<span>str. 22 Decembrie 1989 nr.79<br/>450031 Zalău, jud.Sălaj</span></br>" +
  "</p>";
marker.bindPopup(customPopup).openPopup();
