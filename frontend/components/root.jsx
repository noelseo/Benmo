// benmo.jsx

import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";

const Root = ({ store }) => (
    <Provider store={store}> 
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;

// The <Provider /> makes the Redux store available to any nested components 
// that have been wrapped in the connect() function.

//<HashRouter> uses the hash in the URL to render the component.
// It uses URL hash, it puts no limitations on supported browsers or web server. 
// Server-side routing is independent from client-side routing.


// App.jsx