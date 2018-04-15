import S from 'skylake'

  
  const burger = document.querySelector('#burger');
  burger.addEventListener('click', function() {
    
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
    
    console.log('clicked!');
    if (burger.className = 'oh active') {
      burger.addEventListener('click', function() {

        tl.play({reverse: true})
        burger.className = 'oh'

  
      })
    } 
  });

 

  