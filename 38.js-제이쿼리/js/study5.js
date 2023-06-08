$(document).ready(function(){
    
    $(".box").animate({width:400},1000)
    $(".box").animate({height:400},1000)
    $(".box").animate({marginLeft:200},1000)
    $(".box").clearQueue()
    
    
    

    // $(".box").animate({width:400},1000).animate({height:400},1000).animate({marginLeft:200},1000)

    // $(".box").animate({width:400},1000).animate({height:400},1000).clearQueue()
    // $(".box").animate({width:400},1000).animate({height:400},1000).stop()
    // $(".box").delay(1000).animate({width:400},1000).animate({height:400},1000)

    let b1top = $(".b1").offset().top
    console.log(b1top)
    // let b2top = $(".b2").offset().top
    // $("html,body").animate({scrollTop:b2top},500)

    
});