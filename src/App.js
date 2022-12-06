import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./main/components/Navbar";
import QRCode from "./main/components/challenge 1/QRCode";
import NFTpreviewCard from "./main/components/challenge 2/NFTpreviewCard";

export default function App() {
    return (
        <div className="App">
            {/*<Navbar/>*/}
            {/*<QRCode/>*/}
            <NFTpreviewCard/>







            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route >*/}

            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}