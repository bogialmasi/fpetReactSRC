import React from 'react';
import ReactDOM from 'react-dom';
import { playlistsStorage } from './api/PlaylistsStorage';
import { tracksStorage } from './api/TrackStorage';
import { App } from './App';
import { BlackAndWhite } from './BlackAndWhite';
import { examplePlaylists } from './domain/playlist';
import { exampleTracks } from './domain/track';
import { Game } from './Game';
import { PlaylistsProvider } from './views/state/PlaylistsService';
import { configureStore } from './views/state/store';
import { TracksProvider } from './views/state/TracksService';

const store = configureStore();
store.dispatch({
  type: "ADD_TRACK",
  payload: {title:"q", artist:"w"},
});

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
          <TracksProvider>
      <PlaylistsProvider>
        <App />
      </PlaylistsProvider>
    </TracksProvider>
    </Provider>,
    document.getElementById('root')
  );

const start = async () => {
  const newPlaylists = await playlistsStorage.fill(examplePlaylists)
  const newTracks = await tracksStorage.fill(exampleTracks) 

  render()
}
start()
