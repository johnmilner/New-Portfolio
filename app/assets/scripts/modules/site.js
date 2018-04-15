﻿import S from 'skylake'

// (function () {
//   const tl = new S.Timeline()
//   const isObj = S.Is.object(tl)
//     tl.from({el: '#burger-menu-sail-l', p: {y: [0, 100, 'vh']}, d: 5000, e: 'linear'})
//     tl.from({el: '#burger-menu-sail-r', p: {y: [0, 100, 'vh']}, d: 5000, e: 'linear', delay: 300})
    
//     tl.pause()
    
//   })();

  
  const burger = document.querySelector('#burger');
  burger.addEventListener('click', function() {
    // const animation = new S.Merom({el: '#burger-menu-sail-l', p: {y: [0, -100, 'vh']}, d: 10000, e: 'Power4InOut'})
    // animation.play()
    // animation.play({p: {y: {newEnd: -100}}, reverse: true})
    const tl = new S.Timeline()
    const isObj = S.Is.object(tl)
    tl.from({el: '#burger-menu-sail-l', p: {y: [0, 100]}, d: 2500, e: 'Power4InOut'})
    tl.from({el: '#burger-menu-sail-r', p: {y: [0, 100]}, d: 2500, e: 'Power4InOut', delay: 50})
    tl.from({el: '#burger-menu-list', p: {y: [0, 225]}, d: 2500, e: 'Power4InOut'})
    tl.from({el: '.burger-menu-link', p: {y: [-100, 0]}, d: 1600, e: 'ExpoOut', delay: 1800})
    tl.from({el: '.burger-menu-share', p: {y: [100, 0]}, d: 1600, e: 'ExpoOut', delay: 800})

    burger.classList.add('active')

    //tl.from('.burger-menu-link', p: {y: [0, 0]}, 1600, "ExpoOut", { delay: 800 })
    //tl.from({el: '#burger-menu-link-0', p: {y: [0, 0]}, d: 2500, e: 'Power4InOut', delay: 3350})

    tl.play()
    
    console.log('clicked!');
  });

  