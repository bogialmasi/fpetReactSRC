import {
    combineReducers
} from "redux";
import {
    examplePlaylists
} from "../../domain/playlist";
import {
    exampleTracks
} from "../../domain/track";

const initialState = {
    playlist: examplePlaylists,
    tracks: exampleTracks
}

const rootReducer = combineReducers({
    tracks: tracksReducer,
    playlists: playlistsReducer,
})

const logger = createLogger({
    collapsed: true
})

export const configureStore = () => {
    return createStore(rootReducer)
}