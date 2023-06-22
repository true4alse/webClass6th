$(document).ready(function(){
    
    // 마우스를 움직이면 cursor클래스가 따라다니도록
    $(document).mousemove(function(event){
        let posX = event.clientX-15
        let posY = event.clientY-15
        console.log(posX,posY)
        $(".cursor").css("left",posX+"px")
        $(".cursor").css("top",posY+"px")
        $(".cursor").addClass("on")
    })

    $(".slider").mouseover(function(){
        $(".cursor").addClass("big")
    })

    $(".slider").mouseout(function(){
        $(".cursor").removeClass("big")
    })
    

})