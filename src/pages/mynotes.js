import React, { useEffect } from 'react';
const MyNotes = () => {
    useEffect(
        () =>{
            document.title = 'My notes';
        }          
    );

    return (
        <div>
            <h1>Notes App</h1>
            <p>These are my notes</p>
        </div>
    );
};

export default MyNotes;
