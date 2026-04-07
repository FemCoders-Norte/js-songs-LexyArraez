import {songs} from "./data.js";
//Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
    let result = array.map((song) => song.artist);
  
    console.log(result);
    return result;
};
getAllArtists(songs);


// //Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
    let result = array.filter(item => item.artist === artist);
    console.log(result);
    return result;

};
getSongsFromArtist(songs, "Adele");

// //Exercise 3: Alphabetic order by title
function orderAlphabetically(array) {
    let result = array.map((song) => song.title).sort().slice(0, 10); 
    console.log(result);
    return result;      
};
orderAlphabetically(songs);

//Exercise 4: Order by year, ascending

    function orderByYear(array) {
    let result = [...array].sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a.title.localeCompare(b.title);
    });
    console.log(result);
    return result;
};
orderByYear(songs)

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    if (!genre) return [];
    let result = array.filter(song => song.genre.includes(genre));
    console.log(result);
    return result;
}

songsByGenre(songs, "Pop");


//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong() {
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function

export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };


