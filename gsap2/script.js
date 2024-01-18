var tl = gsap.timeline();

tl  
    .from("#lowest",{
        onStart: function(){
            $('#lowest').textillate({ 
                in: {
                    effect: 'fadeInUp',
                    callback: function(){
                        $('#lowest').textillate('out')
                    }
                },
                out: {
                    effect: 'fadeOutUp'
                }
            });
        }
    })
    .from("#second-lowest",{
        opacity:0,
        delay:1,
        onStart: function(){
            $('#second-lowest').textillate({ 
                in: {
                    effect: 'fadeInUp',
                    callback: function(){
                        $('#second-lowest').textillate('out')
                    }
                },
                out: {
                    effect: 'fadeOutUp'
                }
            });
        }
    })
    .from("#second-top",{
        opacity:0,
        delay:1,
        onStart: function(){
            $('#second-top').textillate({ 
                in: {
                    effect: 'fadeInUp',
                    callback: function(){
                        $('#second-top').textillate('out')
                    }
                },
                out: {
                    effect: 'fadeOutUp'
                }
            });
        }
    })
    .from("#top",{
        opacity:0,
        delay:1,
        onStart: function(){
            $('#top').textillate({ 
                in: {
                    effect: 'fadeInUp',
                }
            });
        }
    })
    .to("#top-screen",{
        y:"-100%",
        delay:1,
        duration:1.2,
        ease:"Power2.easeOut"
    })
    .from("#center h1",{
        opacity:0,
        onStart: function(){
            $('#center h1').textillate({ in: { effect: 'rollIn' } });
        }
    })