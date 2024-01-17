var tl = gsap.timeline();

tl
    .from(".nav-1",{
        delay:1,
        opacity:0,
        y:10,
        duration:1
    })
    .from(".nav-2",{
        opacity:0,
        y:10,
        duration:1
    })
    .from(".center h1",{
        opacity:0,
        scale:1.3,
        duration:1,
    })
    .from(".center button",{
        opacity:0,
        y:10,
        duration:1
    })
    .from(".center i",{
        opacity:0,
        y:10,
        duration:1
    })
    .from(".first-container #one",{
        opacity:0,
        scale:1.5,
        x:-20,
        duration:1
    })
    .from(".second-container #two",{
        opacity:0,
        scale:1.5,
        x:20,
        duration:1
    })
    .from(".first-container #first",{
        opacity:0,
        scale:1.5,
        x:-20,
        duration:1
    })
    .from(".second-container #second",{
        opacity:0,
        scale:1.5,
        x:20,
        duration:1
    })