import "../../design/challenge 9/bodyStyle.css";
import {Container} from "react-bootstrap";
import searchLogo from "../../assets/challenge 9/icon-supervisor.svg";
import lightLogo from "../../assets/challenge 9/icon-karma.svg";
import monitorLogo from "../../assets/challenge 9/icon-calculator.svg";
import homeLogo from "../../assets/challenge 9/icon-team-builder.svg";

export default function Body() {
    return (
        <>
            <Container>
                <div className={'fourCardsSpaceCenterForSmallScreens'}>
                    <div className={'fourCardsSpace'}>
                        <div className={'card1'}>
                            <figure className={'fourCardLine1'}></figure>
                            <div className={'cardWithoutHeaderLine'}>
                                <div className={'fourCardTitle'}>
                                    Supervisor
                                </div>
                                <div className={'fourCardBody'}>
                                    Monitors activity to identify project roadblocks
                                </div>
                                <div className={'fourCardsCardLogo'}>
                                    <div className={'flex-fill'}></div>
                                    <div>
                                        <img src={searchLogo} alt={'searchLogo'}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'fourCardsMiddleSection'}>

                            <div className={'card2'}>
                                <figure className={'fourCardLine2'}></figure>
                                <div className={'cardWithoutHeaderLine'}>
                                    <div className={'fourCardTitle'}>
                                        Team Builder
                                    </div>
                                    <div className={'fourCardBody'}>
                                        Scans our talent network to create the optimal team for your project
                                    </div>
                                    <div className={'fourCardsCardLogo'}>
                                        <div className={'flex-fill'}></div>
                                        <div>
                                            <img src={homeLogo} alt={'homeLogo'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'card3'}>
                                <figure className={'fourCardLine3'}></figure>
                                <div className={'cardWithoutHeaderLine'}>
                                    <div className={'fourCardTitle'}>
                                        Karma
                                    </div>
                                    <div className={'fourCardBody'}>
                                        Regularly evaluates our talent to ensure quality
                                    </div>
                                    <div className={'fourCardsCardLogo'}>
                                        <div className={'flex-fill'}></div>
                                        <div>
                                            <img src={lightLogo} alt={'lightLogo'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={'card4'}>
                            <figure className={'fourCardLine4'}></figure>
                            <div className={'cardWithoutHeaderLine'}>
                                <div className={'fourCardTitle'}>
                                    Calculator
                                </div>
                                <div className={'fourCardBody'}>
                                    Uses data from past projects to provide better delivery estimates
                                </div>
                                <div className={'fourCardsCardLogo'}>
                                    <div className={'flex-fill'}></div>
                                    <div>
                                        <img src={monitorLogo} alt={'monitorLogo'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}