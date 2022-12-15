import "../../design/challenge 7/bodyStyle.scss";
import {Container} from "react-bootstrap";
import secondPattern from "../../assets/challenge 7/bg-pattern-2.svg";
import mobileImage from "../../assets/challenge 7/illustration-app.png";
import appleIcon from "../../assets/challenge 7/icon-apple.svg";
import androidIcon from "../../assets/challenge 7/icon-android.svg";

export default function Body() {
    return (
        <>
            <div>
                <Container>
                    <figure className={'rectangleEqualizer'}></figure>
                    <img className={'secondPattern'} src={secondPattern} alt={'secondPattern'}/>
                    <img className={'mobilePattern'} src={mobileImage} alt={'mobileImage'}/>
                    <div className={'bodyCard'}>
                        <div className={'bodyHeader'}>Premium EQ</div>
                        <div className={'bodyBody'}>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take
                            your listening experience to a whole new level and access all our incredible features!
                        </div>
                        <div className={'bodyCost'}>
                            <div className={'bodyDollar'}>$4</div>
                            <div className={'bodyMonth'}>/ month</div>
                        </div>
                        <div className={'iosPlace'}>
                            <img className={'appleIcon'} src={appleIcon} alt={'appleIcon'}/>
                            <div className={'iosBody'}>iOS Download</div>
                        </div>
                        <div className={'androidSpace'}>
                            <img className={'androidIcon'} src={androidIcon} alt={'androidIcon'}/>
                            <div className={'androidBody'}>Android Download</div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}