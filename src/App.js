import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import QRCodeCard from "./main/components/challenge 1/QRCodeCard";
import NFTpreviewCard from "./main/components/challenge 2/NFTpreviewCard";
import OrderSummaryComponent from "./main/components/challenge 3/OrderSummaryComponent";
import ProfileCardComponent from "./main/components/challenge 4/ProfileCardComponent";
import NavigationBar from "./main/components/NavigationBar";
import SkilledElearningLandingPage from "./main/components/challenge 5/SkilledElearningLandingPage";
import ArtGallery from "./main/components/challenge 6/ArtGallery";
import EqualizerLandingPage from "./main/components/challenge 7/EqualizerLandingPage";
import TypemasterLandingPage from "./main/components/challenge 8/TypemasterLandingPage";
import FourCardFeatureSection from "./main/components/challenge 9/FourCardFeatureSection";
import FyloLandingPage from "./main/components/challenge 10/FyloLandingPage";
import Calculator from "./main/components/challenge 11/Calculator";
import TicTacToe from "./main/components/challenge 12/TicTacToe";
import FAQAccordionCard from "./main/components/challenge 13/FAQAccordionCard";
import InteractivePricing from "./main/components/challenge 14/InteractivePricing";

export default function App() {
    return (
        <>
            <div className="App">
                <ChakraProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path={""} element={<NavigationBar/>}></Route>
                            <Route path={"/qrcodecard"} element={<QRCodeCard/>}></Route>
                            <Route path={"/nftpreviewcard"} element={<NFTpreviewCard/>}></Route>
                            <Route path={"/ordersummarycard"} element={<OrderSummaryComponent/>}></Route>
                            <Route path={"/profilecard"} element={<ProfileCardComponent/>}></Route>
                            <Route path={"/skilledelearninglandingpage"} element={<SkilledElearningLandingPage/>}></Route>
                            <Route path={"/artgallery"} element={<ArtGallery/>}></Route>
                            <Route path={"/equalizerlandingpage"} element={<EqualizerLandingPage/>}></Route>
                            <Route path={"/typemasterprelaunchlandingpage"} element={<TypemasterLandingPage/>}></Route>
                            <Route path={"/fourCardFeatureSection"} element={<FourCardFeatureSection/>}></Route>
                            <Route path={"/fylolandingpage"} element={<FyloLandingPage/>}></Route>
                            <Route path={"/Calculator"} element={<Calculator/>}></Route>
                            <Route path={"/tictactoe"} element={<TicTacToe/>}></Route>
                            <Route path={"/faqaccordioncard"} element={<FAQAccordionCard/>}></Route>
                            <Route path={"/interactivepricing"} element={<InteractivePricing/>}></Route>
                        </Routes>
                    </BrowserRouter>
                </ChakraProvider>
            </div>
        </>
    );
}