let picture=document.getElementById("pictureSearch");
let perPage=12;
let firstImg=document.createElement("img")
let secondImg=document.createElement("img")
let thirdImg=document.createElement("img")
let forthImg=document.createElement("img")
let fifthImg=document.createElement("img")
let sixthImg=document.createElement("img")
let seventhImg=document.createElement("img")
let eighthImg=document.createElement("img")
let ninethImg=document.createElement("img")
let tenthImg=document.createElement("img")
let eleventhImg=document.createElement("img")
let tewethImg=document.createElement("img")
let div =document.getElementById("div");
firstImg.ondblclick=()=>{
    if(firstImg.classList.contains('zoomed')){
        firstImg.classList.remove('zoomed')
    }
    else{
        firstImg.classList.add('zoomed')
    }
}
secondImg.ondblclick=()=>{
    if(secondImg.classList.contains('zoomed')){
        secondImg.classList.remove('zoomed')
    }
    else{
        secondImg.classList.add('zoomed')
    }
}
thirdImg.ondblclick=()=>{
    if(thirdImg.classList.contains('zoomed')){
        thirdImg.classList.remove('zoomed')
    }
    else{
        thirdImg.classList.add('zoomed')
    }
}
forthImg.ondblclick=()=>{
    if(forthImg.classList.contains('zoomed')){
        forthImg.classList.remove('zoomed')
    }
    else{
        forthImg.classList.add('zoomed')
    }
}
fifthImg.ondblclick=()=>{
    if(fifthImg.classList.contains('zoomed')){
        fifthImg.classList.remove('zoomed')
    }
    else{
        fifthImg.classList.add('zoomed')
    }
}
sixthImg.ondblclick=()=>{
    if(sixthImg.classList.contains('zoomed')){
        sixthImg.classList.remove('zoomed')
    }
    else{
        sixthImg.classList.add('zoomed')
    }
}
seventhImg.ondblclick=()=>{
    if(seventhImg.classList.contains('zoomed')){
        seventhImg.classList.remove('zoomed')
    }
    else{
        seventhImg.classList.add('zoomed')
    }
}
eighthImg.ondblclick=()=>{
    if(eighthImg.classList.contains('zoomed')){
        eighthImg.classList.remove('zoomed')
    }
    else{
        eighthImg.classList.add('zoomed')
    }
}
ninethImg.ondblclick=()=>{
    if(ninethImg.classList.contains('zoomed')){
        ninethImg.classList.remove('zoomed')
    }
    else{
        ninethImg.classList.add('zoomed')
    }
}
tenthImg.ondblclick=()=>{
    if(tenthImg.classList.contains('zoomed')){
        tenthImg.classList.remove('zoomed')
    }
    else{
        tenthImg.classList.add('zoomed')
    }
}
eleventhImg.ondblclick=()=>{
    if(eleventhImg.classList.contains('zoomed')){
        eleventhImg.classList.remove('zoomed')
    }
    else{
        eleventhImg.classList.add('zoomed')
    }
}
tewethImg.ondblclick=()=>{
    if(tewethImg.classList.contains('zoomed')){
        tewethImg.classList.remove('zoomed')
    }
    else{
        tewethImg.classList.add('zoomed')
    }
}
function searchPicture(){
    fetch(`https://api.unsplash.com/search/photos?query=${picture.value}&per_page=${perPage}&client_id=bUt4YHbchnID8kRrAYSUM10HmSBjFua9STqY491FAV0`)
    .then((response)=>{
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        firstImg.src=data.results[0].urls.full
        secondImg.src=data.results[1].urls.full
        thirdImg.src=data.results[2].urls.full
        forthImg.src=data.results[3].urls.full
        fifthImg.src=data.results[4].urls.full
        sixthImg.src=data.results[5].urls.full
        seventhImg.src=data.results[6].urls.full
        eighthImg.src=data.results[7].urls.full
        tenthImg.src=data.results[8].urls.full
        ninethImg.src=data.results[9].urls.full
        eleventhImg.src=data.results[10].urls.full
        tewethImg.src=data.results[11].urls.full
        div.append(firstImg,secondImg,thirdImg,forthImg,fifthImg,sixthImg,seventhImg,eighthImg,ninethImg,tenthImg,eleventhImg,tewethImg);
    })
    .catch(error=>console.log("Error",error))
    // picture.value=""
}
// searchPicture()