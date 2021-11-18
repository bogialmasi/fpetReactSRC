import React from 'react';
import { Modal } from "semantic-ui-react";

const Field= ({label, placeholder}) =>{
    return(
        <div className="field">
        <label>{label}</label>
        <input required type="text" placeholder={placeholder}/>
        </div>
    )
}

export function TrackForm({onOpen, onClose, open}){
    return (
        
        <Modal open={open} onClose={onClose} onOpen={Open} className="ui modal">
        <i className="close icon" onClick={onClose}></i>
        <div className="header">Add new Track</div>
        <div className="image content">
            <div className="description">
                <form className="ui form">
                    <div className="three fields">
                    <Field label="Author" placeholder="John Doe"/>
                    <Field label="Track Name" placeholder="Song name"/>
                    <Field label="Length" placeholder="3:00"/>
                        <div className="field">
                            <div className="three fields">
                            <Field label="Spotify URL" placeholder="https://"/>
                            <Field label="Lyrics URL" placeholder="https://"/>
                            <Field label="Guitar URL" placeholder="https://"/>
                                <div className="field">
                                    <label>Spotify URL</label>
                                    <input type="text" placeholder="https://"/>
                                    </div>
                                    <div className="field">
                                        <label>Lyrics URL</label>
                                        <input type="text" placeholder="https://"/>
                                        </div>
                                        <div className="field">
                                            <label>Guitar tab URL</label>
                                            <input type="text" placeholder="https://"/>
                                            </div>
                                            </div></div></div></form></div></div>
                            <div className="actions">
                                <button onClick={onClose} className="ui black deny button">
                                    Cancel
                                    </button>
                                <button className="ui positive right labeled icon button">
                                    Add
                                    <i className="plus icon"></i>
                                </button>
                            </div>
                        </Modal>

    )
}