import React from 'react';
import ReactDOM from 'react-dom';
import { playlistsStorage } from './api/PlaylistsStorage';
import { App } from './App';
import { BlackAndWhite } from './BlackAndWhite';
import { examplePlaylists } from './domain/playlist';
import  {Game}  from './Game';
import { PlaylistsProvider } from './views/state/PlaylistsService';

const render = () =>
  ReactDOM.render(
    <TracksProvider>
      <PlaylistsProvider>
        <App />
      </PlaylistsProvider>
      </TracksProvider>,
    document.getElementById('root')
  );

const start = async () =>{
  const newPlaylist = await playlistsStorage.fill(examplePlaylists)
  const newTrack = await tracksStorage.fill(exampleTracks)
  render()
} 
start()
