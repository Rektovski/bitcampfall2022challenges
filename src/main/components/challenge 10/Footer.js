import "../../design/challenge 10/footerStyle.css";
import {Container} from "react-bootstrap";
import fyloLogo from "../../assets/challenge 10/logo.svg";
import fyloFooterFirstIcon1 from "../../assets/challenge 10/icon-phone.svg";
import fyloFooterFirstIcon2 from "../../assets/challenge 10/icon-email.svg";
import fyloSocialIcon1 from "../../assets/challenge 10/icon-facebook.svg";
import fyloSocialIcon2 from "../../assets/challenge 10/icon-instagram.svg";
import fyloSocialIcon3 from "../../assets/challenge 10/icon-twitter.svg";

export default function Footer() {
    return (
        <>
            <div id={'fyloFooter'} className={'fyloFooter'}>
                <Container>
                    <div className={'fyloFooterSpace'}>
                        <div>
                            <div className={'fyloFooterLogoSpace'}>
                                <img className={'fyloFooterLogo'} src={fyloLogo} alt={'fyloLogo'}/>
                            </div>
                            <div className={'fyloFooterFirstBody'}>
                                <img className={'fyloFooterFirstIcon'} src={fyloFooterFirstIcon1} alt={'fyloFooterFirstIcon'}/>
                                <div className={'fyloFooterFirstText'}>
                                    Phone: +1-543-123-4567
                                </div>
                            </div>
                            <div className={'fyloFooterFirstBody'}>
                                <img className={'fyloFooterFirstIcon'} src={fyloFooterFirstIcon2} alt={'fyloFooterFirstIcon'}/>
                                <div className={'fyloFooterFirstText'}>
                                    example@fylo.com
                                </div>
                            </div>
                        </div>

                        <div className={'fyloFooterRightMargin'}>
                            <div className={'fyloFooterLinks'}>About Us</div>
                            <div className={'fyloFooterLinks'}>Jobs</div>
                            <div className={'fyloFooterLinks'}>Press</div>
                            <div className={'fyloFooterLinks'}>Blog</div>
                        </div>
                        <div className={'fyloFooterRightMargin'}>
                            <div className={'fyloFooterLinks'}>Contact Us</div>
                            <div className={'fyloFooterLinks'}>Terms</div>
                            <div className={'fyloFooterLinks'}>Privacy</div>
                        </div>
                        <div className={'fyloFooterRightMargin fyloFooterRightMarginSocialSpace'}>
                            <img className={'fyloSocialIcon'} src={fyloSocialIcon1} alt={'fyloSocialIcon'}/>
                            <img className={'fyloSocialIcon'} src={fyloSocialIcon2} alt={'fyloSocialIcon'}/>
                            <img className={'fyloSocialIcon'} src={fyloSocialIcon3} alt={'fyloSocialIcon'}/>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}