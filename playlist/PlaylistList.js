import classNames from 'classnames';
import React from 'react';

export function PlaylistList({playlist, selectedPlaylistId, onSelect}){

    return(
        <div className="ui very relaxed selection list">
            {
            playlist.map(pl =>  
                <div className={classNames('item',{ active: selectedPlaylistId === pl.id})} onClick={() => onSelect(pl.id)} key={pl.id}>
                    <i className="large compact disc middle aligned icon"></i>
                    <div className="content">
                        <a className="header">{pl.title}</a>
                        <div className="description">{pl.tracks.length} songs</div>
                    </div>
                </div>
            )
            }
           
            
        </div>
    )
}