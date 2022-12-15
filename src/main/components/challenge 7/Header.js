import "../../design/challenge 7/headerStyle.css";
import mainBackgroundBall from "../../assets/challenge 7/bg-main-desktop.png";
import topRightImage from "../../assets/challenge 7/bg-pattern-1.svg";
import equalizerLogo from "../../assets/challenge 7/logo.svg";

export default function Header() {
    return (
        <>
            <div>
                <img className={'mainBackgroundBall'} src={mainBackgroundBall} alt={"mainBackgroundBall"}/>
                <img className={'topRightImage'} src={topRightImage} alt={'topRightImage'}/>
                <img className={'equalizerLogo'} src={equalizerLogo} alt={'equalizerLogo'}/>
                <div className={'HeaderText'}>
                    We make your music sound extraordinary.
                </div>
                <div className={'HeaderBody'}>
                    A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music
                    sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain
                    control, reverb, and more!
                </div>
            </div>
        </>
    )
}