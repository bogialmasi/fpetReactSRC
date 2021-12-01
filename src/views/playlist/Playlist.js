import React, { useContext, useState } from 'react';
import { PlaylistForm } from './PlaylistForm';
import { PlaylistList } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { TrackList } from './TrackList';

//Playlisteket tartalmazó fájl importálása
import { examplePlaylists } from '../../domain/playlist';
//Trackeket tartalmazó fájl importálása
import { exampleTracks } from '../../domain/track'
import { PlaylistsContext } from '../state/PlaylistsService';
import { useParams } from 'react-router';

export function Playlist() {


    console.log(useParams);
    const {playlistId: selectedPlaylistId, trackId: selectedTrackId} = useParams();
    //a ":" utáni név az új neve 

    //Aktuálisan kiválasztott playlist id. Kezdetben a kiválasztott id az 1 [lsd. useState(1)].
    //const [selectedPlaylistId, setSelectedPlaylistId] = useState('1');
    //Aktuálisan kiválasztott track id. Kezdetben a kiválasztott id az 1 [lsd. useState(1)].
    const [selectedTackId, setSelectedTrackId] = useState('1');

    const { playlist, addNewPlaylist } = useContext(PlaylistsContext)

    const playlistsWithTracks = playlist.map(pl => ({
        ...pl,
        tracks: pl.tracks.map(trackId => exampleTracks.find(track => track.id === trackId))
    }))

    console.log(playlistsWithTracks)

    const playList = playlistsWithTracks.find(playl => playl.pl.id === selectedPlaylistId)

    const track = exampleTracks.find(tr => tr.id === selectedTackId)

function handlePlaylistChange(id) {
    setSelectedPlaylistId(id)
    setSelectedTrackId(null)
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
                <PlaylistList playlist={playlistsWithTracks} selectedPlaylistId={selectedPlaylistId} onSelect={handlePlaylistChange} />
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