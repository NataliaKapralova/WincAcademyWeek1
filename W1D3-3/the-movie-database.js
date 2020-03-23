const myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

printMovie = function (movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('The best actor is ' + movie.stars[1]);
}
printMovie(myFavMovie);