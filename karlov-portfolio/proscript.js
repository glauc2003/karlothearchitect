jQuery("#why-bg").vegas({
    cover: true,
    slides: [
        {   src: 'https://www.skubana.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-30-at-8.26.41-AM.png',
            video: {
                src: [
                    'https://www.skubana.com/wp-content/uploads/2016/11/343378693.mp4'
                ],
                loop: true,
                mute: true
            }
        }
    ],
  overlay: '/'
});
$(document).ready(function() {
  $('#multiscroll').multiscroll({
    verticalCentered: true,
    scrollingSpeed: 1000,
    easing: 'easeInQuart',
    menu: false,
    sectionsColor: [],
    navigation: true,
    navigationPosition: 'right',
    navigationColor: '#999',
    navigationTooltips: [],
    loopBottom: true,
    loopTop: true,
    css3: false,
    normalScrollElements: null,
    keyboardScrolling: true,
    touchSensitivity: 5,

    // Custom selectors
    sectionSelector: '.ms-section',
    leftSelector: '.ms-left',
    rightSelector: '.ms-right',

    //events
    onLeave: function(index, nextIndex, direction) {},
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {},
    afterResize: function() {},
  });
});
$(".updown-navigation ul .up").on("click", function() {
  $("#main-container").multiscroll.moveSectionUp()
});
$(".updown-navigation ul .down").on("click", function() {
  $("#main-container").multiscroll.moveSectionDown()
});
$(".updown-navigation1 ul .up").on("click", function() {
  $("#main-container").multiscroll.moveSectionUp()
});
$(".updown-navigation1 ul .down").on("click", function() {
  $("#main-container").multiscroll.moveSectionDown()
});

$(document).ready(function(){
  $("#imgleftone, #imglefttwo, #imgleftthree, #imgleftfour").click(function(){
      $("#divimgleftone,#divimglefttwo,#divimgleftthree,#divimgleftfour").toggleClass("fullimg");
  });
});



$(document).ready(function(){
  $("#imgrightone, #imgrighttwo, #imgrightthree, #imgrightfour").click(function(){
    $("#divimgrightone, #divimgrighttwo, #divimgrightthree, #divimgrightfour").toggleClass("fullimg");
  });
});



$(document).ready(function(){
  $("#imgleftone, #imglefttwo, #imgleftthree, #imgleftfour").click(function(){
      $(".ms-left").toggleClass("fullscreen");
  });
});

$(document).ready(function(){
  $("#imgleftone, #imglefttwo, #imgleftthree, #imgleftfour").click(function(){
      $(".ms-right").toggleClass("noscreen");
  });
});


$(document).ready(function(){
  $("#imgleftone, #imglefttwo, #imgleftthree, #imgleftfour").click(function(){
      $("#multiscroll-nav").toggleClass("fulldotleft");
  });
});

$(document).ready(function(){
  $("#imgrightone, #imgrighttwo, #imgrightthree, #imgrightfour").click(function(){
      $("#multiscroll-nav").toggleClass("fulldotright");
  });
});



$(document).ready(function(){
  $("#imgrightone, #imgrighttwo, #imgrightthree, #imgrightfour").click(function(){
      $("#multiscroll-nav").toggleClass("fulldotright");
  });
});



$(document).ready(function(){
  $("#imgrightone, #imgrighttwo, #imgrightthree, #imgrightfour").click(function(){
      $(".fa-angle-up").toggleClass("invert");
  });
});



$(document).ready(function(){
  $("#imgleftone, #imglefttwo, #imgleftthree, #imgleftfour").click(function(){
      $(".fa-angle-down").toggleClass("invert");
  });
});





$(document).ready(function(){
  $("#imgrightone, #imgrighttwo, #imgrightthree, #imgrightfour").click(function(){
      $(".ms-right").toggleClass("fullscreen");
  });
});


$(document).ready(function(){
  $("#imgrightone, #imgrighttwo, #imgrightthree, #imgrightfour").click(function(){
      $(".ms-right").toggleClass("fullscreenalt");
  });
});

$(document).ready(function(){
  $("#imgrightone, #imgrighttwo, #imgrightthree, #imgrightfour").click(function(){
      $(".ms-left").toggleClass("noscreen");
  });
});


$(document).ready(function(){
  $("#imgrightone, #imgrighttwo, #imgrightthree, #imgrightfour").click(function(){
    $("#divimgleftone, #divimglefttwo, #divimgleftthree, #divimgleftfour").toggleClass("vanish-left");
  });
});


$(document).ready(function(){
  $("#imgleftone, #imglefttwo, #imgleftthree, #imgleftfour").click(function(){
    $("#divimgrightone, #divimgrighttwo, #divimgrightthree, #divimgrightfour").toggleClass("vanish-right");
  });
});

$(document).ready(function(){
  $("#imgleftone, #imglefttwo, #imgleftthree, #imgleftfour").click(function(){
    $("#multiscroll-nav li .active span").toggleClass("blackdot");
  });
});

$(document).ready(function(){
  $("#imgrighttone, #imgrighttwo, #imgrightthree, #imgtightfour").click(function(){
    $("#menuToggle span").toggleClass("colornav");
  });
});

$(document).ready(function(){
  $("#imgleftone, #imglefttwo, #imgleftthree, #imgleftfour").click(function(){
    $("#navline").toggleClass("colortoggle");
  });
});


$(document).ready(function(){
  $(".plus").click(function(){
    $("#navline").toggleClass("colortoggle");
  });
});





