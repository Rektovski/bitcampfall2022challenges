import "../../design/challenge 10/navigationBarStyle.css";
import fyloLogo from "../../assets/challenge 10/logo.svg";
import {Container} from "react-bootstrap";

export default function NavigationBar() {
    return (
        <>
            <Container>
                <div className={'fyloNavigationBar'}>
                    <div className={'flex-fill'}>
                        <div className={'fyloLogoSpace'}>
                            <img className={'fyloLogo'} src={fyloLogo} alt={'fyloLogo'}/>
                        </div>
                    </div>
                    <a href={"#fyloHeader"} className={'fyloNavLinks'}>Features</a>
                    <a href={"#fyloBody"} className={'fyloNavLinks'}>Team</a>
                    <a href={"#fyloFooter"} className={'fyloNavLinks'}>Sign in</a>
                </div>
            </Container>
        </>
    )
}