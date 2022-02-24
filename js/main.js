AOS.init();
let button= document.getElementById('dark');
let body = document.querySelector('body');
let img1 =document.getElementById('img1 ') ;
let img2 =document.getElementById('img2 ') ;

button.onclick = function(){
    if(body.classList.toggle('dark-mood')){
        body.classList.add('dark-mood')
        this.innerText = "Light-Mood"
        button.style.background = "white"
        button.style.color = "black"
    }else{
        body.classList.remove('dark-mood')
        this.innerText = "Dark-Mood"
        button.style.background = "black"
        button.style.color = "white"
    }
    // if(body.classList.toggle('dark-mood')){
    //     img2.classList.contains('none1')
    // }
}
