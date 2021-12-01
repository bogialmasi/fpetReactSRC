import React from 'react';
import { exampleTracks } from "../../domain/track";

export function Track({track, onEdit, onDelete}){
    const [open, setOpen] = useState(false);
    cosnt {playlist, addTrackToPlaylist} = useContext(PlaylistContext)

    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        if(e && e.target && e.target.matches('.dropdown *:not(.icon)')) return;
        setOpen(false);
    }
    return(<>
        <td><i className="user icon"></i>{track.artist}</td>
        <td><i className="music icon"></i>{track.title}</td>
        <td className="right aligned collapsing">
            <Dropdown onOpen={handleOpen} onClose={handleClose} open={open} icon="plus" className="ui icon top right pointing dropdown button">
                <Dropdown.Menu className="menu">
                    <div className="header">Add to playlist</div>
                    <div className="ui search icon input">
                        <i className="search icon"></i>
                        <input type="text" name="search" placeholder="Search playlists..."/>
</div>
                    {playlist.map(pl => 
                        <div key={pl.id} className="item">{pl.title}</div>)}
                        <div className="item">Heavy Metal</div>
                        <div className="item">Classics</div>
                        <div className="item">Movie Soundtracks</div>
                    </Dropdown.Menu>
                </Dropdown>
                <button className="ui icon button" onClick={onEdit}><i className="edit icon"></i></button>
                <button className="ui icon button red" onClick={onDelete}><i className="trash icon"></i></button>
</td></>

    )
}