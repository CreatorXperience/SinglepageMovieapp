const myCard   = document.querySelector("#mycard");
let popularMovies = `https://imdb-api.com/en/API/MostPopularMovies/k_t1t6tfzz`
const movieCont = document.querySelector(".container2")
let  url = `https://imdb-api.com/en/API/ComingSoon/k_t1t6tfzz`;
let link = `https://imdb-api.com/en/API/MostPopularMovies/k_5bi3tgd3`
fetch(url)
.then(response =>  response.json())
.then(data => { 
    
console.log(data);
let {items} = data;
console.log(items)

let AllMovies = items.forEach((item,index) => {

    if(index <  12){
  let title = items[index].fullTitle
 let image =  items[index].image
 let stars=  items[index].stars
 let year = items[index].year


         let newElement = document.createElement("div")
         newElement.setAttribute("id", myCard)
         newElement.classList.add("card")
         let markup = `<img src=${image}> 
         <div id ="desc"> 
             <h1 id ="movie-title"> ${title} </h1>
             <p id ="movie-desc"> Movie by ${stars} created on ${year} </p> 
     
         </div> `

         newElement.innerHTML = markup;
         movieCont.appendChild(newElement);

        }


})

});
const imageSlides = document.querySelectorAll(".med-cont")
imageSlides.forEach((image, index)=> {
    image.style.transform = `translateX(${index * 100}%)`
})

let counter = 0
function autoMove(){
if(counter < imageSlides.length){
    counter++ 
}
    else{
counter = 0
    }

imageSlides.forEach((image,index) => {
    image.style.transform= `translateX(${100 * (index-counter)})`

}) 

}



const next = document.querySelector("#next-btn")
const prev= document.querySelector("#prev-btn")

next.addEventListener("click", function(){
     
    
    if(counter < imageSlides.length-1){
        counter++ 
    }
    else{
        counter = 0
    }
    imageSlides.forEach((image,index) => {
        image.style.transform= `translateX(${100 * (index-counter)}%)`
    
    }) 
    
    }
)
prev.addEventListener("click" , function(){
    if(counter < 0){
        counter  = imageSlides.length-1
    }
    else{
        counter--
    }
    imageSlides.forEach((image,index) => {
        image.style.transform= `translateX(${100 * (index-counter)}%)`
    
    }) 
})

fetch(popularMovies)
.then(response => response.json())
.then(data => {console.log(data)
let {items} = data;
console.log(items)
items.forEach((item ,index)=> {
    if(index < 20){
    let movieName = data.items[index].fullTitle
    let imagez = data.items[index].image
    let yearz = data.items[index].year
    let crew = data.items[index].crew
let newElement = document.createElement("div")
newElement.setAttribute("id", myCard)
newElement.classList.add("card")
let markup = ` <img src=${imagez}> 
        <div id ="desc"> 
             <h1 id ="movie-title"> ${movieName} </h1>
            <p id ="movie-desc"> Movie by ${crew} created on ${yearz} </p> 
              </div> ` 

              newElement.innerHTML = markup
            let lastcont  = document.querySelector(".container3")
            lastcont.appendChild(newElement)
    }
})
}
)


