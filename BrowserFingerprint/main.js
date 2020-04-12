function obtenerHuella(){
  Fingerprint2.getV18
	Fingerprint2.getV18(function (result, components) {
      var values = components.map(function (component) { return '<br><b>' + component.key +':</b> ' + component.value })
      $( "#results" ).empty().append( 'El hash de su huella digital es: ' + result + '-' + values);
      $( "#canvasfp" ).attr("src", components[16].value.split("canvas fp:")[1]);
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
