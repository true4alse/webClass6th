$(document).ready(function(){

    $(window).scroll(function(){
        let winst = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        

        $("h1").each(function(){
            if(winst>$(this).offset().top){
                $(this).addClass("on")
            }
        })

    })

})