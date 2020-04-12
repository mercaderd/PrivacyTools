function calculaSeveridad(){
  var datosbasicos = parseFloat($("input[name='datosbasicos']:checked").val());
  var datosbasicos2 = parseFloat($("input[name='datosbasicos2']:checked").val());
  var datoscomportamiento = parseFloat($("input[name='datoscomportamiento']:checked").val());
  var datoscomportamiento2 = parseFloat($("input[name='datoscomportamiento2']:checked").val());
  var datosfinancieros = parseFloat($("input[name='datosfinancieros']:checked").val());
  var datosfinancieros2 = parseFloat($("input[name='datosfinancieros2']:checked").val());
  var datosespeciales = parseFloat($("input[name='datosespeciales']:checked").val());
  var datosespeciales2 = parseFloat($("input[name='datosespeciales2']:checked").val());
  var facilidad = parseFloat($("input[name='facilidad']:checked").val());
  var intencionalidad = parseFloat($("input[name='intencionalidad']:checked").val());
  var afectados = parseFloat($("input[name='afectados']:checked").val());
  var cifrados = parseFloat($("input[name='cifrados']:checked").val());
  var confidencialidad = parseFloat($("input[name='confidencialidad']:checked").val());
  var confidencialidad2 = parseFloat($("input[name='confidencialidad2']:checked").val());
  var integridad = parseFloat($("input[name='integridad']:checked").val());
  var integridad2 = parseFloat($("input[name='integridad2']:checked").val());
  var disponibilidad = parseFloat($("input[name='disponibilidad']:checked").val());
  var disponibilidad2 = parseFloat($("input[name='disponibilidad2']:checked").val());

  var db = datosbasicos * datosbasicos2;
  var dc = datoscomportamiento * datoscomportamiento2;
  var df = datosfinancieros * datosfinancieros2;
  var de = datosespeciales * datosespeciales2;

  var datos = Math.max(db,dc,df,de);
  var factores = facilidad + intencionalidad;
  var circunstancias = confidencialidad * confidencialidad2 + integridad * integridad2 + disponibilidad * disponibilidad2;

  var severidad = 0;

  if ((confidencialidad + integridad + disponibilidad) > 0 &&
      (datosbasicos + datoscomportamiento + datosfinancieros + datosespeciales) > 0) {
     severidad = datos + factores + circunstancias;
  }


  $('.results li a').hide();
  if (severidad < 2) {
    $('.results li.baja a').show();
  } else if (severidad >= 2 && severidad < 3) {
    $('.results li.media a').show();
  } else if (severidad >= 3 && severidad < 4) {
    $('.results li.alta a').show();
  } else {
    $('.results li.muyalta a').show();
  }

  $( "#results" ).empty().append( 'Por los datos afectados: '+ datos +
      '<br>Por otros factores: '+ factores +
      '<br>Por las circunstancias: '+ circunstancias +
      '<br><b>Severidad obtenida: '+ severidad +'</b>' );
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
        calculaSeveridad();
        var activeTab = $(this).attr('href');
        $('.tabs-container article').hide();
        $(activeTab).show();
        return false;
    });

    $('.nextbutton').click(function(){
      var nextTab = $(this).attr('value');
      $(nextTab).click();
      calculaSeveridad();
      return false;
    });

    $("input[name='datosbasicos']").change(function(){
        var value = $("input[name='datosbasicos']:checked").val();
        if (value == 1) {
          $("#q_2").show();
        } else {
          $("#q_2").hide();
        }
        return false;
    });

    $("input[name='datoscomportamiento']").change(function(){
        var value = $("input[name='datoscomportamiento']:checked").val();
        if (value == 1) {
          $("#q_4").show();
        } else {
          $("#q_4").hide();
        }
        return false;
    });

    $("input[name='datosfinancieros']").change(function(){
        var value = $("input[name='datosfinancieros']:checked").val();
        if (value == 1) {
          $("#q_6").show();
        } else {
          $("#q_6").hide();
        }
        return false;
    });

    $("input[name='datosespeciales']").change(function(){
        var value = $("input[name='datosespeciales']:checked").val();
        if (value == 1) {
          $("#q_8").show();
        } else {
          $("#q_8").hide();
        }
        return false;
    });

    $("input[name='confidencialidad']").change(function(){
        var value = $("input[name='confidencialidad']:checked").val();
        if (value == 1) {
          $("#q_14").show();
        } else {
          $("#q_14").hide();
        }
        return false;
    });

    $("input[name='integridad']").change(function(){
        var value = $("input[name='integridad']:checked").val();
        if (value == 1) {
          $("#q_16").show();
        } else {
          $("#q_16").hide();
        }
        return false;
    });

    $("input[name='disponibilidad']").change(function(){
        var value = $("input[name='disponibilidad']:checked").val();
        if (value == 1) {
          $("#q_18").show();
        } else {
          $("#q_18").hide();
        }
        return false;
    });

});
