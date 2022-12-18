import "../../design/challenge 8/typemasterLandingPageStyle.css";
import Header from "./Header";
import Body from "./Body";
import BodyCards from "./BodyCards";
import Footer from "./Footer";

export default function TypemasterLandingPage() {
    return (
        <>
            <div className={'typemasterLandingPage'}>
                <Header/>
                <Body/>
                <BodyCards/>
                <Footer/>
            </div>
        </>
    )
}