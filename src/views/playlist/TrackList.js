import classNames from 'classnames';
import React from 'react';


export function TrackList({playlist, selectedTrackId}){
    return (
        !playlist ? null : 
        <>
        <h3>{playlist.title}</h3>
        <div className="ui very relaxed selection list">
            {
                playlist.tracks.map(track => 
                    <Link to={`/playlist/${playl.pl.id}/${track.id}`} className={classNames('item', {active: track.id == selectedTrackId})}>
                        <i className="large music middle aligned icon"></i>
                        <div className="content">
                            <a className="header">{track.title}</a>
                            <div className="description">{track.artist}</div>
                        </div>
                    </Link>
                )
            }
        </div>
    </>
    )
}