import React from 'react';
import { exampleTracks } from "../../domain/track";
import { TrackForm } from './TrackForm';

export function Tracks() {
    const[open, setOpen] = useState(false);
    const[tracks, setTracks] = useState(exampleTracks)
    const [editTrack, setEditTrack] = useState({})

    const {deleteTrackFromMultiplePlaylist} = useContext(PlaylistContext)
    
    const handleOpen = () => useState(true);
    const handleClose = () => useState(false);


const handleTrack = track => {
    if(!track.id)
        setTracks([...tracks, {...track, id: Date.now().toString()}]);
    else
        setTracks(tracks.map(tr => tr.id!= track.id? tr: track));
}

const handleNew = () => {
    setEditTrack({})
    handleOpen();
}

const handleEdit = track => {
    setEditTrack(track)
    handleOpen();
}

const handleDelete = track => {
    setTracks(tracks.filter(tr => tr.id !== track.id))
    deleteTrackFromMultiplePlaylist(track.id)
}

    return (
        <>
            <div className="ui container">
                <button onClick={handleNew} className="ui right floated green button" id="newModal">
                    <i className="plus icon"></i>
                    New track
                    </button>
                <h1>Tracks</h1>
                <table className="ui celled striped table">
                    <thead>
                        <tr>
                            <th>Artist</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        track.map(track => 
                        <Track onEdit={() => handleEdit(track)} track={track} key={track.id} onDelete={() => handleDelete(track)}/>)
                        }
      </tbody>
    </table>
  </div>
<TrackForm open={open} onOpen={handleOpen} onClose={handleClose} onSubmit={handleTrack} track={editTrack}/>
        </>
    )
}