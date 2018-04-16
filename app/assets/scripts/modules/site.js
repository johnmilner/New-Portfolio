import S from 'skylake'

  
  
    
  //   console.log('clicked!');
  //   if (burger.className = 'oh active') {
  //     burger.addEventListener('click', function() {

  //       tl.play({reverse: true})
  //       burger.className = 'oh'

  
  //     })
  //   } 
  // });

/*
  Menu Overlay
*/
var app = {};
app.menuVisible = false;
app.keyCodeESC = 27;
// const elmOverlay = document.querySelector('.shape-overlays');
// const overlay = new ShapeOverlays(elmOverlay);

$(function() {
  if ($("body").hasClass("body-content-wrapper") || $("body").hasClass("single-page")) app.loadAndFadeInCaseImages();

  // Top menu
  $('#burger').click(function(e) {
    e.preventDefault();
    !app.menuVisible ? app.revealMenu() : app.hideMenu();
  });

  // Hide nav if clicked outside of a menu alternative
  $('#burger-menu').click(function(e) {
    app.hideMenu();
  });
  // Make sure that links don't close the menu
  // $('.nav a').click(function(e) {
  //   e.stopPropagation();
  // });

  // Listen to ESC, close menu if visible
  $(document).keyup(function(e) {
    if (e.keyCode == app.keyCodeESC) app.handleESCKey();
  });

  
});


// app.loadAndFadeInCaseImages = function() {
//   // Load background images
//   $("[data-image]").each(function(i, elem) {
//     var $elem = $(elem),
//     url = "/images/portfolio/" + $elem.attr('data-image');
//     if (url == null || url.length <= 0 ) { return; }

//     $elem.addClass('image-loading');
//     $('<img/>').attr('src', url).load(function() {
//       $(this).remove();
//       $bg = $('<div class="case-item-bg"/>');
//       $bg.css( 'background-image', 'url(' + url + ')');

//       $elem.prepend($bg);
//       $elem
//         .removeClass('image-loading')
//         .addClass('image-ready');
//     });
//   });
// }

app.handleESCKey = function() {
  $(document).trigger("pressed:ESC");
  if (app.menuVisible) app.hideMenu();
}

app.toggleMenuStates = function() {
  //$('body').toggleClass('no-scroll');
  $('#burger').toggleClass('active');
  $('#burger-menu').toggleClass('active');
}

app.revealMenu = function() {
  app.menuVisible = true;
  //overlay.toggle();
  app.toggleMenuStates();
  
  // const burger = document.querySelector('#burger');
  // burger.addEventListener('click', function() {
    
    const tl = new S.Timeline()
    const isObj = S.Is.object(tl)
    tl.from({el: '#burger-menu-sail-l', p: {y: [0, 100]}, d: 2500, e: 'Power4InOut'})
    tl.from({el: '#burger-menu-sail-r', p: {y: [0, 100]}, d: 2500, e: 'Power4InOut', delay: 50})
    tl.from({el: '#burger-menu-list', p: {y: [0, 225]}, d: 2500, e: 'Power4InOut'})
    tl.from({el: '.burger-menu-link', p: {y: [-100, 0]}, d: 1600, e: 'ExpoOut', delay: 1800})
    tl.from({el: '.burger-menu-share', p: {y: [100, 0]}, d: 1600, e: 'ExpoOut', delay: 800})
    
    tl.from({el: '.burger-close', p: {y: [-108, 0]}, d: 1600, e: 'Power4InOut', delay: 400})
    tl.from({el: '#burger-border-wrap', p: {opacity: [0, .5]}, d: 1600, e: 'Power4InOut'})

    burger.className = 'oh active';


    tl.play()
  

}

app.hideMenu = function() {
  app.menuVisible = false;
  app.toggleMenuStates();
  //overlay.toggle();
  $(document).trigger("app:menuWillHide");

  // $(".header").css({
  //   "overflow": "hidden"
  // });
  // $("#body-content-wrapper").css({
  //   "overflow": "hidden"
  // });
  const tl = new S.Timeline()
  const isObj = S.Is.object(tl)
  tl.from({el: '.burger-close', p: {y: [0, -108]}, d: 1600, e: 'Power4InOut', delay: 400})
  tl.from({el: '#burger-border-wrap', p: {opacity: [.5, 0]}, d: 1600, e: 'Power4InOut'})
  tl.from({el: '.burger-menu-share', p: {y: [0, 100]}, d: 1600, e: 'ExpoOut', delay: 800})

  tl.from({el: '#burger-menu-sail-l', p: {y: [100, 0]}, d: 2500, e: 'Power4InOut'})
  tl.from({el: '#burger-menu-sail-r', p: {y: [100, 0]}, d: 2500, e: 'Power4InOut', delay: 50})
  tl.from({el: '#burger-menu-list', p: {y: [225, 0]}, d: 2500, e: 'Power4InOut'})
  tl.from({el: '.burger-menu-link', p: {y: [0, -100]}, d: 1600, e: 'ExpoOut', delay: 1800})
  
  tl.play()
  
}

// Typically called by views that want to display something in the same 
// position of the menu icon
// app.hideMenuIcon = function() {
//   $(".menu").hide();
// }

// app.showMenuIcon = function() {
//   $(".menu").show();  
// }


const elmHamburger = document.querySelector('#burger');
const navItems = document.querySelectorAll('.burger-menu-bg');
//const subNavItems = document.querySelectorAll('.nav-sublink');

  // //remove global menu items
  // function removeGlobalMenu() {
  //   for (var i = 0; i < navItems.length; i++) {
  //     navItems[i].classList.remove('js-nav-animate');
  //   }
  // }

//loop thru nav_sublinks listening for click, onclick close overlay, close hamburger menu
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function(){
    //console.log('clicked!!');
    if (burger.className === 'active') {
      return false;
    }
    app.hideMenu();   
  });
  
};

// for (var i = 0; i < subNavItems.length; i++) {
//   subNavItems[i].addEventListener('click', function(){
//     //console.log('clicked!!');
//     if (burger.className === 'active') {
//       return false;
//     }
//     app.hideMenu();   
//   });


/* 
Menu Overlay End 
*/

 

  