window.onload = function(){

    let dtList = document.querySelectorAll(".tabMenu>dt")
    // let ddList = document.querySelectorAll(".tabMenu>dd")


    for(let i=0 ; i<dtList.length ; i++){
        dtList[i].addEventListener("click",function(){
            for(let j=0 ; j<dtList.length ; j++){
                dtList[j].classList.remove("on")
                // ddList[j].classList.remove("on")
            }
            this.classList.add("on")
            // this.nextElementSibling.classList.add("on")
            // 클릭하는 맥락안에서 클릭한 태그를 this로 표현할 수 있다.
        })
    }

}