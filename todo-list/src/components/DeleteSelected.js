import React from "react";

const DeleteSelected = (props) => {

    return (
        <>
            <button className="delete-button" onClick={props.deleteSelected} style={{ float: "right" }}>Delete selected</button>
        </>
    )
}

export default DeleteSelected