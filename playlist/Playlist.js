import React, { useState } from 'react';
import { PlaylistForm } from './PlaylistForm';
import { PlaylistList } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { TrackList } from './TrackList';

//Playlisteket tartalmazó fájl importálása
import { examplePlaylists } from '../../domain/playlist';
//Trackeket tartalmazó fájl importálása
import { exampleTracks } from '../../domain/track'

export function Playlist() {
    /*
      Horgok (Hooks)
        Mi a horog? - A horog egy speciális függvény, aminek köszönhetően állapotot adhatunk a függvénykomponenseknek.
        Mikor használjuk a horgokat? - Ha egy függvénykomponenshez állapotot szeretnénk adni. (Régebben az állapotok csak az osztállyá konvertálás után volt lehetséges)
        Hogyan használhatjuk a Horgokat? - A horgok használata a useState függvény segítségével történik.
        Mi a useState függvény? - A useState függvény egy párt ad vissza, ahol az első paraméter a jelenlegi állapotérték, a második paraméter egy függvény, amivel frissíteni tudjuk az állapotértéket. Egyetlen argumentuma az állapot kezdeti értéke.
        Honnan lehet meghívni a useState függvényt? - A függvény meghívható egy eseménykezelőből vagy máshonnan.
        !!!FONTOS!!! - A useState nem egyesíti a régi és az új állapotokat.
  
        Szabályok a horgok használatára:
          - Horgokat csak a legfelsőbb szinten hívj meg. Ne történjen hívás ciklusokban, egymásba ágyazott függvényekben vagy feltételes ágakban.
          - Horgokat csak React függvénykomponensből(!!!) hívj meg. 
    
        useState:
          - Egy állapotváltozót deklarál. Ennek segítségével az értékek megőrzésre kerülnek a függvényhívások között.
          - Argumentuma a horog kezdeti állapota. (Ez lehet objektum, egy sima string vagy szám)
          - A useState két értéket ad vissza, amit tömb lebontó szintaxis segítségével különféle neveket adhatunk az adott értékeknek. A visszaadott értékekek közül az első a jelenlegi állapotérték a második egy függvény, amivel frissíthetjük az állapotértéket.
  
    */

    //Aktuálisan kiválasztott playlist id. Kezdetben a kiválasztott id az 1 [lsd. useState(1)].
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(1);
    //Aktuálisan kiválasztott track id. Kezdetben a kiválasztott id az 1 [lsd. useState(1)].
    const [selectedTackId, setSelectedTrackId] = useState(1);

    //Playlist objektum. Kezdetben a playlist.js fájlban található playlist objektumok találhatóak benne [lsd. useState(examplePlaylists)].
    const [playlist, setPlaylist] = useState(examplePlaylists)
    //A kiválasztott playlist megkeresése a playlistekeket tartalmazó objektumból.
    const playList = playlist.find(pl => pl.id === selectedPlaylistId)
    //A kiválasztott track megkeresése a trackeket tartalmazó objektumból.
    const track = exampleTracks.find(tr => tr.id === selectedTackId)

    function handlePlaylistChange(id) {
        setSelectedPlaylistId(id)
        setSelectedTrackId(null)
    }

    /*
      Új playlist létrehozásához szükséges függvény.
      A függvény egy argomentumot tartalmaz, ami a hozzáadni kívánt playlist neve.
      A függvény törzsében kerül kiszámításra:
        - az új playlist id-ja. Az id a reduce függvénnyel kerül meghatározására. (A reduce függvényről bővebb információ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
        - az új playlist hozzáadása a playlisteket tartalmazó objektumhoz.
    */
    const addNewPlaylist = title => {
        const id = playlist.reduce((maxId, pl) => Math.max(maxId, pl.id), 0) + 1
        setPlaylist([...playlist, { id, title, tracks: [] }]) //A régi elemek átmásolása az új objektumba spread szintaxissal történt. További információ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    }


    return (
        <div className="ui container">
            <h1>My Playlists</h1>
            <div className="ui stackable two column grid">
                <div className="ui six wide column">
                    <h3>Playlists</h3>
                    {/*PlaylistForm komponens felel az új playlist-et felvevő form kezelésért. A komponensnek átadásra került  */}
                    <PlaylistForm onSubmit={addNewPlaylist} />
                    {/*PlaylistList komponens felel a playlistek-kel kapcsolatos műveletekre és megjelenítésekre. A komponensnek átadásra került a playlisteket tartalmazó objektum (playlist), az akutálisan kiválasztott playlist id-ja (selectedPlaylistId), továbbá még átadásra került az a függvény, aminek segítségével a kiválasztás inerakció kezelésre kerül (onSelect). */}
                    <PlaylistList playlist={playlist} selectedPlaylistId={selectedPlaylistId} onSelect={handlePlaylistChange} />
                </div>
                <div className="ui ten wide column">
                    {/*TrackList komponens felel a track-kekkel kapcsolatos műveletekre és megjelenítésekre. A komponensnek átadásra került az aktuálisan kiválasztott playlistet tartalmazó objektum (playlist), az akutálisan kiválasztott track id-ja (selectedTrackId), továbbá még átadásra került az a függvény, aminek segítségével a kiválasztás inerakció kezelésre kerül (onSelect).  */}
                    <TrackList playlist={playList} selectedTrackId={selectedTackId} onSelect={setSelectedTrackId} />
                </div>
            </div>
            <div className="ui divider"></div>
            {/*TrackDetails komponens felel a kiválasztott track részletes adatainak megjelenítésért. A komponensnek átadásra került a kiválasztott track. */}
            <TrackDetails track={track} />
        </div>
    );
}