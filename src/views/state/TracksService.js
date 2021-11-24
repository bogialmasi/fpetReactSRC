import React, { useEffect, useState } from 'react'
import { tracksStorage } from '../../api/TrackStorage'

const useTracksService = () => {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        const getAll = async () => setTracks(await tracksStorage.getAll())
        getAll()
    }, [])


    const addNewTrack = async track => {
        const newTrack = await tracksStorage.create(track)
        setTracks([...tracks, newTrack])
    }

    const editTrack = async track => {
        const updatedTrack = await tracksStorage.update(track)
        setTracks(tracks.map(tr => tr.id !== track.id ? tr : updatedTrack)) 
    }

    const deleteTrack = async track => {
        await tracksStorage.delete(track.id)
        setTracks(tracks.filter(tr => tr.id !== track.id))
    }

    const tracksService = { trcks, addNewTrack, editTrack, deleteTrack }
    return tracksService
}

export const TracksContext = React.createContext();
export const TracksProvider = ({ children }) => {
    const tracksService = usePlaylistsService()
    return <TracksContext.Provider value={tracksService}>{children}</TracksContext.Provider>
}