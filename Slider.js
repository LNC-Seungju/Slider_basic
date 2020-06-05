//불러와야하는게 1. 컨테이너 2.자식들 3.현재위치
var containerL = document.getElementsByClassName('container_L'),
    containerM = document.getElementsByClassName('container_M'),
    slides = document.getElementsByClassName('slide'),
    btnPrev = document.getElementById('prev'),
    btnNext = document.getElementById('next'),
    count = slides.length,
    current = 0;

console.log(containerM);
//가로배열 > COUNT를 이용할 것 같다,  변수 1개(X,Y,I,J etc.)가 필요할 것 같다
for(var i=0; i<count; i++){
    slides[i].style.left = i*100 +'%';
}

function moveSlide(i){
    containerM[0].style.left = i*-100+'%';
    containerM[0].classList.add('active');
    current = i;
}

btnPrev.addEventListener('click', function(e){
    e.preventDefault();
    if(current>0){
        moveSlide(current-1);
    }else{
        moveSlide(count-1);
    }
    
});

btnNext.addEventListener('click', function(e){
    e.preventDefault();
    if(current<count-1){
        moveSlide(current+1);
    }else{
        moveSlide(0);
    }
});
