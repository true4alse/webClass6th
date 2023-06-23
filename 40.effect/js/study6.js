$(document).ready(function(){

    textAni(".t1",{
        textSize:"1em",
        aniDelay:0.1,
        aniSpeed:0.5,
        effect:"moveTopToBottom"
    })
    textAni(".t2",{
        textSize:"1em",
        aniDelay:0.1,
        aniSpeed:0.5,
        effect:"moveTopToBottom"
    })
    textAni(".t3",{
        textSize:"0.1em",
        aniDelay:0.1,
        aniSpeed:0.5,
        effect:"moveTopToBottom"
    })

    let winHeight = $(window).height() // 브라우저의 높이
    let fixedDiv = $(".fixedEffect") // 태그를 선택하여 변수에 저장
    let fixedDivTop = fixedDiv.offset().top // fixedEffect클래스 태그가 전체문서를 기준으로 했을 때 위에서 부터 떨어져있는 거리를 픽셀로 계산
    let movingStation = $(".movingStation")
    let movingStationHeight = movingStation.height()
    // console.log(movingStationHeight)

    $(window).scroll(function(){
        let wstop = $(window).scrollTop()
        let scrollDistance = wstop-fixedDivTop

        if(scrollDistance<0){
            movingStation.css("position","relative")
            movingStation.css("top","0")
        }
        if(scrollDistance>=0 && scrollDistance<=7200){
            //애니메이션 진행 구간
            
            let count = Math.floor(scrollDistance/1800)
            let percent = (scrollDistance/1800)-count
            console.log(count,percent)
            movingStation.css("position","fixed")
            movingStation.css("top","0")
            moveSlider(count)
            moveTextSlider(count,percent*200)
            opacitySlider(count,percent)
            scaleImg(count,percent*0.5)
        }
        if(scrollDistance > 7200){
            movingStation.css("position","relative")
            movingStation.css("top","7200px")
        }
        // console.log(wstop)
    })

    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-25*idx)+"%)")
    }
    function moveTextSlider(idx,per){
        $(".train>li").eq(idx).children(".txt").css("transform","translateY(-"+per+"px)")
    }
    function opacitySlider(idx,per){
        $(".train>li").eq(idx).children(".txt").css("opacity",per)
    }
    function scaleImg(idx,per){
        $(".train>li").eq(idx).children("img").css("transform","scale("+(1+per)+")")
    }

})