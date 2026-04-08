import { songs } from "./data.js";


//Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
    let result = array.map((song) => song.artist);

    //console.log("Exercise 1 ->", result);
    return result;
};
getAllArtists(songs);


// //Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
    let result = array.filter(song => song.artist === artist);
    //console.log("Exercise 2 ->", result);
    return result;

};
getSongsFromArtist(songs, "Adele");

// //Exercise 3: Alphabetic order by title
function orderAlphabetically(array) {
    let result = array.map((song) => song.title).sort().slice(0, 10);
    //console.log("Exercise 3 ->", result);
    return result;
};
orderAlphabetically(songs);

//Exercise 4: Order by year, ascending

function orderByYear(array) {
    let result = [...array].sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a.title.localeCompare(b.title);
    });
    //console.log("Exercise 4 ->", result);
    return result;
};
orderByYear(songs)

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    if (!genre) return [];
    let result = array.filter(song => song.genre.includes(genre));
    // console.log("Exercise 5 ->", result);
    return result;
}
songsByGenre(songs, "Pop");


//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
    let result = array.map((song) => {
        let [minutes, seconds] = song.duration.split(" ");
        return { ...song, duration: parseInt(minutes) * 60 + parseInt(seconds) };
    });

    //   console.log("Exercise 6 ->", result);
    return result;
}

minutsToSeconds(songs);

//Exercise 7: Get the longest song
function getLongestSong() {
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function

export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };


