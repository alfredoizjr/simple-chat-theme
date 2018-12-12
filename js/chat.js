
$(document).ready(function () {

  /*
  *If localstorage have theme set alredy
  */
  if (localStorage.getItem('theme')) {
    $("head link#theme").attr("href", "css/" + localStorage.getItem('theme'));
    if (localStorage.getItem('theme') === 'style.css') {
      $('.badge-ligth').addClass('border-select');
      // $('#dark').removeClass('border-select');
    } else if(localStorage.getItem('theme') === 'dark.css'){
      $('.badge-dark').addClass('border-select');
      // $('#ligth').removeClass('border-select');
    } else if(localStorage.getItem('theme') === 'hot.css') {
      $('.badge-hot').addClass('border-select');
    }
  } else {
    $("head link#theme").attr("href", 'css/style.css');
  }

  // Elements

  var btnHide = $('#hide-contact');
  var btnShow = $('#show-contact');
  var listContact = $('.list-contact');
  var chatDiv = $("#message-container");

  btnShow.on('click', function () {

    listContact.addClass('show');

  });

  btnHide.on('click', function () {

    listContact.removeClass('show');
  });

  var h = $("#message-container").height();

  // scroll
  chatDiv.animate({ scrollTop: h + 300 });


  //set theme and save in localstorage
  //# ligth  
  $('#dark').on('click', function () {
    $("head link#theme").attr("href", 'css/dark.css');
    $('.badge-dark').addClass('border-select');
    $('.badge-ligth').removeClass('border-select');
    $('.badge-hot').removeClass('border-select');
    localStorage.setItem('theme', 'dark.css');
   
  });
//#dark
  $('#ligth').on('click', function () {
    $("head link#theme").attr("href", 'css/style.css');
    $('.badge-dark').removeClass('border-select');
    $('.badge-hot').removeClass('border-select');
    localStorage.setItem('theme', 'style.css');
    $('.badge-ligth').addClass('border-select');
  
  });
//#hot
  $('#hot').on('click', function () {
    $("head link#theme").attr("href", 'css/hot.css');
    $('.badge-dark').removeClass('border-select');
    $('.badge-ligth').removeClass('border-select');
    localStorage.setItem('theme', 'hot.css');
    $('.badge-hot').addClass('border-select');
  
  });

  // if we click outside the dropmenu hide it
  $(window).click(function () {
    $('#drop-menu').hide();
  });

// on click event show dropmenu  

  $('#dropmenu-custom').on('click', function (e) {
    $('#drop-menu').slideToggle( "fast" );
    e.stopPropagation();
  });

});

