var tl = gsap.timeline();

tl
    .from(".nav img, .nav .links, .nav  h3, .nav button ",{
        y:-100,
        stagger:0.4,
        opacity:0,
    })
    .from(".containt h1",{
        y:100,
        opacity:0,
        stagger:0.4
    })
    .from(".containt img",{
        opacity:0,
        scale:1.4,
        duration:0.4
    })