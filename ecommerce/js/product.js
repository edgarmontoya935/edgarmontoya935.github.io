const productImg = document.querySelector("#productImg");
const smallImg = document.querySelectorAll(".small-img");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}