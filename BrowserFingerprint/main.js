
function obtenerHuella(){
	Fingerprint2.getV18(function (result, components) {
      $( "#results" ).empty().append( '<tr><td><b>Su identificador único (hash) es: </b></td><td>' + result + '</td></tr>');
      var info;
      components.forEach((item, i) => {
        if (i != 16 && i != 17) {
          info = '<tr><td><b>' + item.key + ': </b></td><td>' + item.value + '</td></tr>';
        }
        if (i == 16){
          info = '<tr><td><b>' + item.key + ': </b></td><td>' + "<img id = 'canvasfp' src =" + item.value.split("canvas fp:")[1] + "></td></tr>";
        }
        if (i == 17){
          info = '<tr><td><b>' + item.key + ': </b></td><td>' +"<img id = 'webGL' src =" + item.value.split('~')[0] + "></td></tr>";
          /*info = '<li><span>' + item.key + ': ' + item.value.split('~')[0] + '</span></li>';*/
        }
        $( "#results" ).append(info);
      });
		});
  return false;
}


$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active')
    $('.tabs-container article').hide();
    $('.tabs-container article:first').show();
    $('.results li a').hide();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        var activeTab = $(this).attr('href');
        $('.tabs-container article').hide();
        $(activeTab).show();
        return false;
    });

    $('.nextbutton').click(function(){
      var nextTab = $(this).attr('value');
      $(nextTab).click();
      return false;
    });

    $('.obtenerHuella').click(function(){
      obtenerHuella();
      return false;
    });


});
