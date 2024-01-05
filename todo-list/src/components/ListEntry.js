import React, { useState } from "react";

const ListEntry = ({ onSubmit }) => {
    const [inputText, setInputText] = useState('')

    const handleSubmit = (event) => {
        // event.perventDefault();
        onSubmit(inputText)
        setInputText('')
    }

    return (
        <form>
            <input
                style={{}}
                className="text-inputs"
                type="text"
                value={inputText}
                onChange={event => setInputText(event.target.value)}
                placeholder="enter here"
                required
            />
            <button type="submit" className="form-button" onClick={handleSubmit}>Add to list</button>
        </form>

    )
}

export default ListEntry