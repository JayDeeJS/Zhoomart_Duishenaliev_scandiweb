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
import PDPPS5 from "./PDP/PDPPS5/PDPPS5";
import PDPXbox from "./PDP/PDPXbox/PDPXbox";
import PDPiMac from "./PDP/PDPiMac/PDPiMac";
import PDPiPhone from "./PDP/PDPiPhone/PDPiPhone";
import PDPAirPods from "./PDP/PDPAirPods/PDPAirPods";
import PDPAirTag from "./PDP/PDPAirTag/PDPAirTag";
import Cart from "./Cart/Cart";

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
                        <Route path={`/pdp/${techPS5.id}`} element={<PDPPS5/>}/>
                        <Route path={`/tech/pdp/${techPS5.id}`} element={<PDPPS5/>}/>
                        <Route path={`/pdp/${techXbox.id}`} element={<PDPXbox/>}/>
                        <Route path={`/tech/pdp/${techXbox.id}`} element={<PDPXbox/>}/>
                        <Route path={`/pdp/${techiMac.id}`} element={<PDPiMac/>}/>
                        <Route path={`/tech/pdp/${techiMac.id}`} element={<PDPiMac/>}/>
                        <Route path={`/pdp/${techiPhone.id}`} element={<PDPiPhone/>}/>
                        <Route path={`/tech/pdp/${techiPhone.id}`} element={<PDPiPhone/>}/>
                        <Route path={`/pdp/${techAirpods.id}`} element={<PDPAirPods/>}/>
                        <Route path={`/tech/pdp/${techAirpods.id}`} element={<PDPAirPods/>}/>
                        <Route path={`/pdp/${techAirtag.id}`} element={<PDPAirTag/>}/>
                        <Route path={`/tech/pdp/${techAirtag.id}`} element={<PDPAirTag/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;
