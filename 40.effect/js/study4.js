$(document).ready(function(){

    let result=""
    for(let i=1 ; i<=20 ; i++){
        result+=`<li>
        <img class="small" src="./img/s`+i+`.jpg" alt="작은이미지${i}">
        <img class="big" src="./img/pic${i}.jpg" alt="큰이미지${i}">
        <h2 class="title">art work ${i}</h2>
        <p>Artwork description comes here.<br>2023.06.20</p>
        <span class="btnClose">close</span>
    </li>`
    }
    $(".train").html(result)

})

// let a = 4
// a=a+2
// a+=2
// b=b-2
// b-=2