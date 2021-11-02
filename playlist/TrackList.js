import classNames from 'classnames';
import React from 'react';


export function TrackList({playlist, selectedTrackId, onSelect}){
    return (
       
        <>
        <h3>{playlist.title}</h3>
        <div className="ui very relaxed selection list">
            {
                playlist.tracks.map(track => 
                    <div className={classNames('item', {active: track.id === selectedTrackId})} onClick={() => onSelect(track.id)} key={track.id}>
                        <i className="large music middle aligned icon"></i>
                        <div className="content">
                            <a className="header">{track.title}</a>
                            <div className="description">{track.artist}</div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
    )
}