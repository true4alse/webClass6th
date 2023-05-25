window.onload = function(){
    let btn1 = document.querySelector(".btnClick")
    btn1.addEventListener("click",function(){
        document.querySelector(".txtbox").style.color = "black"
    })

    let btnOpen = document.querySelector(".btnPopup")
    btnOpen.addEventListener("click",function(){
        document.querySelector(".hiddenPopup").classList.add("show")
    })

    let btnClose = document.querySelector(".btnPopupClose")
    btnClose.addEventListener("click",function(){
        document.querySelector(".hiddenPopup").classList.remove("show")
    })




}





