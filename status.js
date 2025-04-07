//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/play.constellationmc.tk/25506";

$.getJSON(url, function(r) {
 if(r.error){
    $('#rest').html('Server Offline');
    $('#favi').attr('src', './images/offline.png');
   return false;
 } 
  var pl = '';
  if(r.players.sample.length > 0 ) { 
      pl = '<br>OP: '+r.players.sample[0].name;
  } 
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online+pl + '<br><b>Version:</b> ' +r.version.name);
  $('#favicon').attr('src', r.favicon);
  $('#favi').attr('src', './images/online.png');      
});