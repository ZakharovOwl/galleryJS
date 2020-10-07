let galleryImages = document.querySelectorAll('.gallery-img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages){
    galleryImages.forEach(function(i, index){
        i.onclick = function(){
            let getElementCss = window.getComputedStyle(i);
            /*console.log(getElementCss);*/
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            /*console.log(getFullImgUrl);*/
            let getImgUrlPos = getFullImgUrl.split("/preview/");
            /*console.log(getImgUrlPos);*/
            let setNewImgUrl = getImgUrlPos[1].replace(`")`, ``);
            console.log(setNewImgUrl);
            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window')
            newImgWindow.setAttribute('onclick','closeImg()')

            let newImg = document.createElement('img')
            newImgWindow.appendChild(newImg);
            newImg.setAttribute('src',`/assets/img/${setNewImgUrl}`)

            newImg.onload = function(){
            let imgWidth = this.width;
            let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80 ;

            //btn next
            let newNextBtn = document.createElement('a')
            let btnNextText = document.createTextNode('Next')
            newNextBtn.appendChild(btnNextText)
            container.appendChild(newNextBtn)
            newNextBtn.setAttribute('class', 'img-btn-next')
            newNextBtn.setAttribute('onclick', 'changeImg()')
            newNextBtn.style.cssText = `right:${calcImgToEdge}px`
            //btn back
            let newPrevBtn = document.createElement('a')
            let btnPrevText = document.createTextNode('Back')
            newPrevBtn.appendChild(btnPrevText)
            container.appendChild(newPrevBtn)
            newPrevBtn.setAttribute('class', 'img-btn-prev')
            newPrevBtn.setAttribute('onclick', 'changeImg()')
            newPrevBtn.style.cssText = `left:${calcImgToEdge}px`
            }
        }
    });
}
/*check*/ 
function closeImg(){
    document.querySelector('.img-window').remove()
    document.querySelector('.img-btn-next').remove()
    document.querySelector('.img-btn-prev').remove()
}