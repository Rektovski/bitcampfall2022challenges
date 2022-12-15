import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Location from "./Location";
import {useState} from "react";

export default function ArtGallery() {
    const [location, setLocation] = useState(false);

    const changeLocation = () => {
        setLocation(!location);
    }

    return (
        <>
            {
                location ?
                    <Location changeLocation={changeLocation}/>
                    :
                    <>
                        <Header changeLocation={changeLocation}/>
                        <Body/>
                        <Footer/>
                    </>
            }
        </>
    )
}