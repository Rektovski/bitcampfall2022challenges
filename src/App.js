import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import QRCodeCard from "./main/components/challenge 1/QRCodeCard";
import NFTpreviewCard from "./main/components/challenge 2/NFTpreviewCard";
import OrderSummaryComponent from "./main/components/challenge 3/OrderSummaryComponent";
import ProfileCardComponent from "./main/components/challenge 4/ProfileCardComponent";
import NavigationBar from "./main/components/NavigationBar";
import SkilledElearningLandingPage from "./main/components/challenge 5/SkilledElearningLandingPage";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    <Route path={""} element={<NavigationBar/>}></Route>
                    <Route path={"/qrcodecard"} element={<QRCodeCard/>}></Route>
                    <Route path={"/nftpreviewcard"} element={<NFTpreviewCard/>}></Route>
                    <Route path={"/ordersummarycard"} element={<OrderSummaryComponent/>}></Route>
                    <Route path={"/profilecard"} element={<ProfileCardComponent/>}></Route>
                    <Route path={"/skilledelearninglandingpage"} element={<SkilledElearningLandingPage/>}></Route>
                </Routes>
            </BrowserRouter>



        </div>
    );
}