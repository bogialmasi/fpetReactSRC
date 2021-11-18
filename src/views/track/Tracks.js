import React from 'react';
import { exampleTracks } from "../../domain/track";
import { TrackForm } from './TrackForm';

export function Tracks() {
    const[open, setOpen] = useState(false);
    const handleOpen = useState(true);
    const handleClose = useState(false);
    return (
        <>

            <div className="ui container">
                <button onClick={handleOpen} className="ui right floated green button" id="newModal">
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
                            exampleTracks.map(track => 
                                <Track track={track} key={track.id}/>)
                        }
      </tbody>
    </table>
  </div>
<TrackForm open={open} onOpen={HandleOpen} onClose={HandleClose}/>
        </>
    )
}