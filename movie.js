const form = document.querySelector('form');
const container = document.querySelector('.image-container');
const btn = form.querySelector('input');

form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    let query = form.querySelector('input').value;
//   if(query==''){
//     query="";
//     alert('plz enter the name of movie');
// }

    tvmazeapi(query);
    btn.value='';

})
  async function tvmazeapi(query){
    const req =await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
   const movies =await req.json();
   console.log(movies)
    makelmage(movies);

 }
 function makelmage(movies){
  container.textContent = '';
    for(let movie of movies){
        let src = movie.show.image !== null ? movie.show.image.medium : '';
        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
    }
 }

