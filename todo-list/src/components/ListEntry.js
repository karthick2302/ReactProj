import React, { useState } from "react";

const ListEntry = (props) => {
    const [inputText, setInputText] = useState(props.editTask)
    const handleSubmit = (event) => {
        document.getElementById('editError').innerText = ''
        props.onSubmit(inputText)
        setInputText('')
        props.setEditTask('')
    }

    return (
        <form>
            <input
                style={{}}
                className="text-inputs"
                id="listInput"
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