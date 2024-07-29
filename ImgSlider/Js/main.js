

var ImgList= Array.from(document.querySelectorAll(".imgClass img"));
var LightboxItem=document.querySelector(".LightboxItem");
var lightboxdiv=document.querySelector(".lightboxdiv");
var NextButton=document.getElementById("next");
var PrevButton=document.getElementById("prev");
var closeButton=document.getElementById("Close");

console.log(ImgList);
var currentSlideIndex=0;
for(var i=0;i<ImgList.length;i++){
    ImgList[i].addEventListener("click",function(e){
    var imgItem= e.target.getAttribute("src")
    currentSlideIndex=ImgList.indexOf(e.target)
    lightboxdiv.style.backgroundImage=`url(${imgItem})`
    LightboxItem.classList.replace("d-none","d-flex")
    })
}

function nextSlide(){
    currentSlideIndex++;
    if(currentSlideIndex==ImgList.length){
        currentSlideIndex=0;
    }
    var imgSrc=ImgList[currentSlideIndex].getAttribute('src');
    lightboxdiv.style.backgroundImage=`url(${imgSrc})`

}
function PrevSlide(){
    currentSlideIndex--;
    if(currentSlideIndex<0){
        currentSlideIndex=ImgList.length-1;
    }
    var imgSrc=ImgList[currentSlideIndex].getAttribute('src');
    lightboxdiv.style.backgroundImage=`url(${imgSrc})`
}


NextButton.addEventListener("click",nextSlide);
PrevButton.addEventListener("click",PrevSlide);

closeButton.addEventListener("click",function(){
    LightboxItem.classList.replace("d-flex","d-none")
})