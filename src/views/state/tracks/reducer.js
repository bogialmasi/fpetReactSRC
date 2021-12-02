import { exampleTracks } from "../../../domain/track"
import { ADD_TRACK } from "./actions";
import { UPDATE_TRACK } from "./actions";
import { DELETE_TRACK } from "./actions";

const initialState = exampleTracks

export const tracksReducer = (state = initialState, action) =>{
    const {type, payload} = action

    if (type === ADD_TRACK){
        const tracks = state
        const track = payload
        
        return [...tracks, track]
    }

    if (type === UPDATE_TRACK){
        const tracks = state
        const track = payload

        return tracks.map(tr => tr.id !== track.id ? tr : track)
    }

    if (type === DELETE){
        const tracks = state
        const track = payload

        return tracks.filter((tr) => tr.id != track.id);
    }
}