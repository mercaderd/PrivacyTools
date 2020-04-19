
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

});
