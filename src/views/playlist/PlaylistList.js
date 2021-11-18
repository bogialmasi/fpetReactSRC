import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

export function PlaylistList({playlist, selectedPlaylistId, onSelect}){
    return(
        <div className="ui very relaxed selection list">
            {
            playlist.map(playl =>  
                <Link to = {`/playlist/${playl.pl.id}`} className={classNames('item',{ active: selectedPlaylistId == playl.pl.id})} onClick={() => onSelect(playl.pl.id)} key={playl.pl.id}>
                    <i className="large compact disc middle aligned icon"></i>
                    <div className="content">
                        <a className="header">{playl.pl.title}</a>
                        <div className="description">{playl.tracks.length} songs</div>
                    </div>
                </Link>

            )
            }
        </div>
    )
}
