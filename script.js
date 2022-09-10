const imageContainerEl = document.querySelector(".image-container")

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
    ImgNum = 10
AddnewImage()
})
function AddnewImage(){
    for (let index = 0; index < ImgNum; index++) {
        
        const newImage = document.createElement("img");
        newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    
        imageContainerEl.appendChild(newImage)
    }
   
}