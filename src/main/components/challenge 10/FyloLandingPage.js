import "../../design/challenge 10/fyloLandingPageStyle.css";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function FyloLandingPage() {
    return (
        <>
            <div className={'fyloLandingPage'}>
                <NavigationBar/>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </>
    )
}