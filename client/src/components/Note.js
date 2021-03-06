import React, { useState } from "react";
import classNames from "classnames";

function Note() {
    const [showModal, setShowModal] = useState(true);
    return (
        <div
            className={classNames("alert", "alert-warning", "alert-dismissible", "fade", "fixed-bottom", "position-fixed", {
                show: showModal,
            })}
            role="alert"
        >
            <strong>Note!</strong> This page isn't hosted by{" "}
            <a href="https://traversymedia.com" target="_blank" rel="noreferrer">
                Traversy Media
            </a>{" "}
            anymore, it is a modified version of Brad's React GraphQL{" "}
            <a href="https://www.youtube.com/playlist?list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx" target="_blank" rel="noreferrer">
                course
            </a>
            . If you (Brad) do not like this idea, please contact me on{" "}
            <a href="https://twitter.com/jvliix" target="_blank" rel="noreferrer">
                Twitter
            </a>
            .
            <button type="button" className="close" onClick={() => setShowModal(false)} data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Note;
