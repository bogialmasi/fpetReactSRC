import React from 'react';
import { Modal } from "semantic-ui-react";

const Field= ({label, placeholder, value, name, onChange, ...attrs}) =>{
    return(
        <div className="field">
        <label>{label}</label>
        <input name={name} type="text" placeholder={placeholder} value={value} onChange={onChange} {...attrs} />
        </div>
    )
}

const defaultFormState = {
        artist: "",
        title: "",
        length: "",
        thumbnailURL: "",
        spotifyURL: "",
        chordsURL: "",
        lyricsURL: ""
    
}

export function TrackForm({open, onClose, onSubmit}){
const [formState, setFormState] = useState(defaultFormState)

const resetFormState =(state) =>{setFormState(state)}
useEffect(() =>{
    if(open) resetFormState({...defaultFormState,...track})
}, [open, tracj])

const handleChange = e => {
    const {name, value} = e.target
    setFormState({...formState, [name]:value})
}

const handleSubmit = () => {
    e.preventDefault()
    onSubmit(formState)
    onClose()
}
    return (
        <Modal as="form" open={open} onClose={onClose} onOpen={Open} onSubmit={handleSubmit} className="ui modal">
        <i className="close icon" onClick={onClose}></i>
        <div className="header">Add new Track</div>
        <div className="image content">
            <div className="description">
                <form className="ui form">
                    <div className="three fields">
                    <Field name="artist" value={formState.artist} onChange={handleChange} label="Author" placeholder="John Doe"/>
                    <Field name="title" value={formState.name} onChange={handleChange} label="Title" placeholder="Song name"/>
                    <Field name="length" value={formState.length} onChange={handleChange} label="Length" placeholder="3:00"/>
                        <div className="field">
                            <div className="three fields">
                            <Field name="spotifyURL" value={formState.spotifyURL} onChange={handleChange} label="Spotify" placeholder="https://"/>
                            <Field name="lyricsURL" value={formState.lyricsURL} onChange={handleChange} label="Lyrics" placeholder="https://"/>
                            <Field name="chordsURL" value={formState.chordsURL} onChange={handleChange} label="Chords" placeholder="https://"/>
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