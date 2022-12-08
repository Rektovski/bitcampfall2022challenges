import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./main/components/Navbar";
import QRCode from "./main/components/challenge 1/QRCode";
import NFTpreviewCard from "./main/components/challenge 2/NFTpreviewCard";
import OrderSummaryComponent from "./main/components/challenge 3/OrderSummaryComponent";
import ProfileCardComponent from "./main/components/challenge 4/ProfileCardComponent";

export default function App() {
    return (
        <div className="App">
            {/*<Navbar/>*/}

            {/*Challenge 1*/}
            {/*<QRCode/>*/}

            {/*Challenge 2*/}
            {/*<NFTpreviewCard/>*/}

            {/*Challenge 3*/}
            {/*<OrderSummaryComponent/>*/}

            {/*Challenge 4*/}
            <ProfileCardComponent/>






            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route >*/}

            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}