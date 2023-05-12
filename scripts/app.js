//a9375401a21cebf1bf1440e11c5c693f

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a9375401a21cebf1bf1440e11c5c693f&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=a9375401a21cebf1bf1440e11c5c693f&query="';


const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovies(APILINK);
function returnMovies(url){
  fetch(url).then(res=>res.json())
    .then(function(data){
      console.log(data.results);
      data.results.forEach(element=>{
        const div_card = document.createElement('div');
        div_card.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('thumbnail');

        const title = document.createElement('div');
        title.classList.add('title');

        const center = document.createElement('div');

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;

        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
       
        

        main.appendChild(div_card);
      })
    });
}


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  main.innerHTML='';

  const searchItem = search.value;

  if(searchItem){
    returnMovies(SEARCHAPI + searchItem);
    search.value='';
  }
});
