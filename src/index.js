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
      <PlaylistsProvider>
        <App />
      </PlaylistsProvider>,
    document.getElementById('root')
  );

const start = async () =>{
  const newPlaylist = await playlistsStorage.fill(examplePlaylists)
  //console.log(examplePlaylists)
  //console.log(newPlaylist)
  render()
} 
start()
