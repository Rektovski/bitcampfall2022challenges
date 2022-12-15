import "../../styles/challenge 6/footerStyle.css";
import social1 from "../../images/challenge 6/icon-facebook.svg";
import social2 from "../../images/challenge 6/icon-instagram.svg";
import social3 from "../../images/challenge 6/icon-twitter.svg";

export default function Footer() {
    return (
        <>
            <div className={'ArtFooter'}>
                <div className={'ArtFooterLastPart'}>
                    <div className={'ArtFooterLeft'}>MODERN ART GALLERY</div>
                    <div className={'ArtFooterMiddle'}>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find
                        us at 99 King Street, Newport, USA.
                    </div>
                    <div>
                        <img className={'ArtFooterSocialIcon'} src={social1} alt={"social1"}/>
                        <img className={'ArtFooterSocialIcon'} src={social2} alt={"social2"}/>
                        <img className={'ArtFooterSocialIcon'} src={social3} alt={"social3"}/>
                    </div>
                </div>
            </div>
        </>
    )
}