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
            
        }
    });
}