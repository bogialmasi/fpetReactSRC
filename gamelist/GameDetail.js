import React from "react";

export class GameDetail extends React.Component{
    render(){
        const game = this.props.selectedGame;
        return(
            !game ? null : 
            <div className="ui segment">
                <div className="ui items">
                <div className="item">
                    <div className="image">
                    <img src={game.thumbnailURL} />
                    </div>
                    <div className="content">
                    <a className="header">{game.title}</a>
                    <div className="meta"><span>{game.publisher}</span><span>{game.release}</span></div>
                    <div className="extra">
                        <a 
                        href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" 
                        className="ui button tiny blue button" target="_blank"
                        >
                        <i className="steam icon"></i>
                        Open on Steam
                        </a>
                        <a 
                        href="https://rockstargames.com/V/"
                        className="ui button tiny teal button" target="_blank"
                        >
                        <i className="globe icon"></i>
                        Open official website
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}