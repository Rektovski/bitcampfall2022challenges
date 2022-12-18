import "../../design/challenge 8/bodyCardsStyle.css";
import logo1 from "../../assets/challenge 8/shared/icon-compatible.svg";
import logo2 from "../../assets/challenge 8/shared/icon-bluetooth.svg";
import logo3 from "../../assets/challenge 8/shared/icon-battery.svg";
import logo4 from "../../assets/challenge 8/shared/icon-light.svg";
import {Container} from "react-bootstrap";

export default function BodyCards() {
    return (
        <>
            <Container>
                <div className={'bodyCardsSpace'}>
                    <div className={'bodyCardLeft'}>
                        <div className={'typeCard'}>
                            <img className={'typeCardLogo'} src={logo1} alt={'cardLogo'}/>
                            <div className={'typeCardTitle'}>
                                HIGHLY
                                COMPATIBLE
                            </div>
                            <div className={'typeCardBody'}>
                                Easy to use and works well with all major computer brands, gaming consoles and mobile
                                devices. Plug & play, no installation or driver needed.
                            </div>
                        </div>
                        <div className={'typeCard'}>
                            <img className={'typeCardLogo'} src={logo2} alt={'cardLogo'}/>
                            <div className={'typeCardTitle'}>
                                WIRELESS
                                WITH BLUETOOTH
                            </div>
                            <div className={'typeCardBody'}>
                                Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft
                                away. Simply plug the unifying receiver into your computer.
                            </div>
                        </div>
                    </div>

                    <div className={'bodyCardRight'}>
                        <div className={'typeCard'}>
                            <img className={'typeCardLogo'} src={logo3} alt={'cardLogo'}/>
                            <div className={'typeCardTitle'}>
                                HIGH CAPACITY
                                BATTERY
                            </div>
                            <div className={'typeCardBody'}>
                                Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on
                                replaceable ones. Enjoy 40 hours of usage time between charges.
                            </div>
                        </div>
                        <div className={'typeCard'}>
                            <img className={'typeCardLogo'} src={logo4} alt={'cardLogo'}/>
                            <div className={'typeCardTitle'}>
                                RGB BACKLIT
                                MODES
                            </div>
                            <div className={'typeCardBody'}>
                                Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows
                                intensely in the dark and helps you type in low light conditions.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}