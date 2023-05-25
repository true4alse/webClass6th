window.onload = function(){

    let station1 = new Swiper(".station1",{
        loop:true,
        direction:"horizontal",
        slidesPerView:3.2, //슬라이드 개수의 반만큼 최대 적용 가능
        spaceBetween:40,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable : true
        },
        navigation: {
            nextEl: ".csNextBtn",
            prevEl: ".csPrevBtn",
        },
        autoplay:true
    })
   
    

}