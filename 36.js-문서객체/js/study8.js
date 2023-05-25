window.onload = function(){

    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription = [
        `<h3>title1</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos at dignissimos temporibus voluptate, praesentium laudantium, odio architecto nihil sit minus quae obcaecati doloribus facere tenetur esse ut est corporis?</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos at dignissimos temporibus voluptate, praesentium laudantium, odio architecto nihil sit minus quae obcaecati doloribus facere tenetur esse ut est corporis?</p>`,
    `<h3>title3</h3>
    <ul>
        <li>des1</li>
        <li>des2</li>
        <li>des3</li>
        <li>des4</li>
    </ul>`
]

    for(let i=0 ; i<tabTitles.length ; i++){
        tabTitles[i].addEventListener("click",function(e){
            
            for(let j=0 ; j<tabTitles.length ; j++){
                tabTitles[j].classList.remove("on")
            }
            this.classList.add("on")
            tabDes.innerHTML = tabDescription[i]
        })
    }

    

}