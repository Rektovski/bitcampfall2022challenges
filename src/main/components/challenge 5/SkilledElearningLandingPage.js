import "../../design/challenge 5/skilledElearningLandingPageStyle.css";
import {Col, Container, Row} from "react-bootstrap";
import logoDark from "../../assets/challenge 5/logo-dark.svg";
import logoLight from "../../assets/challenge 5/logo-light.svg";
import imageHero from "../../assets/challenge 5/image-hero-desktop.png";
import imageHeroMobile from "../../assets/challenge 5/image-hero-mobile.png";
import {skilledElearningCardList} from "./skilledElearningCardList";

export default function SkilledElearningLandingPage() {

    return (
        <>
            <div>
                <Container>
                    <div className={'SkilledElearningLandingPageHeader'}>
                        <img className={'HeaderLeftLogo'} src={logoDark} alt={'logoDark'}/>
                        <div className={'HeaderRightTextSpace'}>
                            <div className={'HeaderRightText'}>
                                Get Started
                            </div>
                        </div>
                    </div>
                    <div className={"LandingPageHeader"}>
                        <div className={"LandingPageHeaderLeft"}>
                            <div className={'LandingPageHeaderLeftHeader'}>
                                Maximize skill, minimize budget
                            </div>
                            <div className={'LandingPageHeaderLeftMiddle'}>
                                Our modern courses across a range of in-demand skills will give you the knowledge you
                                need to live the life you want.
                            </div>
                            <div className={'LandingPageHeaderLeftFooter'}>
                                <div className={'LandingPageHeaderLeftFooterText'}>
                                    Get Started
                                </div>
                            </div>
                        </div>
                        <div className={"LandingPageHeaderRight"}>
                            <img className={'LandingPageHeaderRightImage'}
                                 src={window.innerWidth <= 1000 ? imageHeroMobile : imageHero}
                                 alt={'imageHero'}/>
                        </div>
                    </div>



                    <Container className={'LandingPageMiddle'}>
                            <Row>
                                <Col  sm={12} md={6} lg={4} xl={4} xxl={4} className={'firstCard  g-5'}>
                                    <div className={'firstCardText'}>
                                        Check out our most popular courses!
                                    </div>
                                </Col>
                                {
                                    skilledElearningCardList.map((item, id) => (
                                        <Col key={id} sm={12} md={6} lg={4} xl={4} xxl={4} className={'nextCard g-5'} >
                                            <div style={{marginLeft: 15, marginRight: 15}}>
                                                <img className={'nextCardImage'} src={item.image} alt={'cardFoto'}/>
                                                <div className={'nextCardName'}>{item.name}</div>
                                                <div className={'nextCardDescription'}>{item.desc}</div>
                                                <div className={'nextCardFooter'}>Get Started</div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                    </Container>
                </Container>
                <div className={'LandingPageFooter'}>
                    <Container className={"LandingPageFooterContainer"}>
                        <div>
                            <img src={logoLight} alt={'logoLight'}/>
                        </div>
                        <div className={'LandingPageFooterButton'}>
                            <div className={'LandingPageFooterButtonText'}>
                                Get Started
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}