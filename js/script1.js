// var map = L.map( 'map', {
//     center: [20.0, 5.0],
//     minZoom: 2,
//     zoom: 2
// });
//
L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
}).addTo( map );

L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
}).addTo( map );


var myURL = jQuery( 'script[src$="script1.js"]' ).attr( 'src' ).replace( 'script1.js', '' );

var myIcon = L.icon({
    iconUrl: myURL + 'images/pin-green.png',
    iconRetinaUrl: myURL + 'images/pin-green.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

for ( var i=0; i < plants.length; ++i )
{
   L.plant( [plants[i].lat, plants[i].lng] )
      .bindPopup( '<a href="' + plants[i].url + '" target="_blank">' + plants[i].name + '</a>' )
      .addTo( map );
}
