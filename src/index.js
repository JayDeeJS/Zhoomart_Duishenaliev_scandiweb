import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateProvider} from "./StateProvider";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import reducer, {initialState} from "./reducer";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    client: {
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                },
            },
        },
    }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App/>
            </StateProvider>
        </BrowserRouter>
    </React.StrictMode>
);
