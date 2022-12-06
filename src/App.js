import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./main/components/Navbar";
import QRCode from "./main/components/QRCode";

export default function App() {
    return (
        <div className="App">
            {/*<Navbar/>*/}
            <QRCode/>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route >*/}

            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}