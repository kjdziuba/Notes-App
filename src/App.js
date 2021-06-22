// index.js
// This is the main entry point of our application
import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <h1>Hello, Notedly</h1>
            <p>Welcome to Notedly app</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));