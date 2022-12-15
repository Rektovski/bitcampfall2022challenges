import "../../design/challenge 7/footerStyle.css";
import footerLogo from "../../assets/challenge 7/logo.svg";
import facebook from "../../assets/challenge 7/icon-facebook.svg";
import instagram from "../../assets/challenge 7/icon-instagram.svg";
import twitter from "../../assets/challenge 7/icon-twitter.svg";

export default function Footer() {
    return (
        <>
            <div className={'footerSpace'}>
                <img className={'footerLogo'} src={footerLogo} alt={'footerLogo'}/>
                <div className={'footerMiddle'}>
                    All rights reserved © Equalizer 2021
                    Have any problems? Contact us via social media or email us at equalizer@example.com
                </div>
                <div className={'socialIconSpace'}>
                    <img className={'socialIcon'} src={facebook} alt={'socialIcon'}/>
                    <img className={'socialIcon'} src={instagram} alt={'socialIcon'}/>
                    <img className={'socialIcon'} src={twitter} alt={'socialIcon'}/>
                </div>
            </div>
        </>
    )
}