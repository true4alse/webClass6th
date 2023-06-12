// let a= `100`
// let b=100
// let c={name:"정현진",age:38}
// c.name
// c.age
// a["name"]
// c["age"]
// let d=["정현진",38]
// d[0]
// d[1]
// ["정현진",38][0]
// ["정현진",38][1]


$(document).ready(function(){

    $(".list>li").each(function(){
        let red = Math.random()*255;
        let green = Math.random()*255;
        let blue = Math.random()*255;
        $(this).css("background","rgb("+red+","+green+","+blue+")")

        let tagTop = $(this).offset().top
        // let tagTop = {left:0,top:0}
        $(this).text("저는 전체문서기준 위에서 "+tagTop+" 떨어진 곳에 있습니다.")


        $(this).addClass("on")
    })
    $(".list>li").addClass("on")


})