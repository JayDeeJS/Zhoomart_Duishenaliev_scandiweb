import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {client} from "./index";
import PLPHeader from "./PLPHeader/PLPHeader";
import PLPTech from "./PLPTech/PLPTech";
import PLPClothes from "./PLPClothes/PLPClothes";
import PLPAll from "./PLPAll/PLPAll";
import PDP from "./PDP/PDP";

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="PLP__container">
                <div className="PLP__subContainer">
                    <PLPHeader/>
                    <Routes>
                        <Route path="/" element={<PLPAll/>}/>
                        <Route path="/clothes" element={<PLPClothes/>}/>
                        <Route path="/tech" element={<PLPTech/>}/>
                        <Route path="/pdp/:id/:name/:price/:symbol" element={<PDP/>}/>
                    </Routes>
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;
