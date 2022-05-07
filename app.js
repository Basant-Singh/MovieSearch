const frm = document.querySelector('form');
const btn = document.querySelector('button');
const scn = document.querySelector('section');



btn.addEventListener('click', (e) => {
    e.preventDefault();
    scn.innerHTML = '';
    let query = frm.elements.inp;
    appendItems(query.value);
    query.value = '';
})



async function getMovies(query){
const config = { params: {q: query}};
const res = await axios.get('https://api.tvmaze.com/search/shows',config);
return res.data;
}


async function appendItems(query){
    const movies = await getMovies(query);
    // console.log(movies)
    let i= 0;
    for(let movie of movies){
        setTimeout(() => {
            if(movie.show.image){
                let link = movie.show.image.medium;
                let image = document.createElement('img');
                let anc = document.createElement('a');
                anc.href = movie.show.url;
                anc.target = '_blank';
                image.src = link;
                anc.append(image);
                scn.append(anc);
            }

        },i += 30)
    }
}


getMovies('chicken');