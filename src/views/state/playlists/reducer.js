import {
    examplePlaylists
} from "../../../domain/playlist";

const initialState = examplePlaylists

export const playlistReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = actions
    return state;
}