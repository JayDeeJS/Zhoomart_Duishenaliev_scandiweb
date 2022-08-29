import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {client} from "./index";
import {useStateValue} from "./StateProvider";
import PLPHeader from "./PLPHeader/PLPHeader";
import PLPTech from "./PLPTech/PLPTech";
import PLPClothes from "./PLPClothes/PLPClothes";
import PLPAll from "./PLPAll/PLPAll";
import PDPNike from "./PDP/PDPNike/PDPNike";
import PDPJacket from "./PDP/PDPJacket/PDPJacket";

function App() {
    const [{
        clothesNike, clothesJacket,
        techPS5, techXbox,
        techiMac, techiPhone,
        techAirpods, techAirtag
    }] = useStateValue();

    return (
        <ApolloProvider client={client}>
            <div className="PLP__container">
                <div className="PLP__subContainer">
                    <PLPHeader/>
                    <Routes>
                        <Route path="/" element={<PLPAll/>}/>
                        <Route path="/clothes" element={<PLPClothes/>}/>
                        <Route path="/tech" element={<PLPTech/>}/>
                        <Route path={`/pdp/${clothesNike.id}`} element={<PDPNike/>}/>
                        <Route path={`/clothes/pdp/${clothesNike.id}`} element={<PDPNike/>}/>
                        <Route path={`/pdp/${clothesJacket.id}`} element={<PDPJacket/>}/>
                        <Route path={`/clothes/pdp/${clothesJacket.id}`} element={<PDPJacket/>}/>
                    </Routes>
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;
