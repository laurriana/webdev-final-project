function showGames() {
    var games = document.querySelector('#gamesContainer');

    if (getComputedStyle(games).visibility === 'hidden') {
        
        games.style.opacity = '1';
        games.style.visibility = 'visible';
        games.style.maxHeight = '1000px';
     
    } else {
        
        games.style.opacity = '0';
        games.style.visibility = 'hidden';
        games.style.maxHeight = '0';
    }
}