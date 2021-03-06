import React from 'react';

export function TrackDetails({track}){
    return(
      !track ? null :
        <div className="ui segment">
          <div className="ui items">
            <div className="item">
              <div className="image">
                <img src={track.thumbnailURL} />
              </div>
              <div className="content">
                <a className="header">{track.title}</a>
                <div className="meta"><span>{track.artist}</span><span>{track.length}</span></div>
                <div className="extra">
                  {track.spotifyURL ?
                    <a 
                      href={track.spotifyURL} 
                      className="ui button tiny green button" target="_blank"
                    >
                      <i className="spotify icon"></i>
                      Listen on Spotify
                    </a>

                    : null
                  }
                  {
                    track.lyricsURL &&
                    <a 
                      href={track.lyricsURL} 
                      className="ui button tiny orange button" target="_blank"
                    >
                      <i className="guitar icon"></i>
                      Show chords
                    </a>
                  }

                  {
                    track.chordsURL && 
                    <a 
                      href={track.chordsURL} 
                      className="ui button tiny teal button" target="_blank"
                    >
                      <i className="microphone icon"></i>
                      Show lyrics
                    </a>
                  }
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}