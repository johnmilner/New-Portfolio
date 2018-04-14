import S from 'skylake'

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
    tl.from({el: '#burger-menu-sail-l', p: {y: [0, 100, 'vh']}, d: 2500, e: 'Power4InOut'})
    tl.from({el: '#burger-menu-sail-r', p: {y: [0, 100, 'vh']}, d: 2500, e: 'Power4InOut', delay: 50})
    tl.play()
    
    console.log('clicked!');
  });

  