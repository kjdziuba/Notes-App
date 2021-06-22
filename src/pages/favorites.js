import React, { useEffect } from 'react';

const Favorites = () =>{
    useEffect( 
        () => {
            document.title = 'Favorites'
        }
    );
};

return (
    <div>
        <h1>Notes App </h1>
        <p>These are my Favorites</p>
    </div>
);

export default Favorites;