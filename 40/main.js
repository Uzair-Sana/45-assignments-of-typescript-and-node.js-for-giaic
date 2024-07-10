"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Talha Anjum", "Open Letter"));
console.log(make_album("Umair", "Rockstar Without A Guitar"));
console.log(make_album("Divine", "Gunehgar", 16));
