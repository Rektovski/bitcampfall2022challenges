import "../../design/challenge 8/headerStyle.scss";
import typeHeaderLogo from "../../assets/challenge 8/shared/logo.svg";
import {Col, Container, Row} from "react-bootstrap";
import typeHeaderBodyRightImage from "../../assets/challenge 8/desktop/image-keyboard.jpg";
import typeHeaderBodyRightRectangle from "../../assets/challenge 8/shared/pattern-square.svg";

export default function Header() {
    return (
        <>
            <Container>
                <div className={'typeHeaderHead'}>
                    <div className={'flex-fill'}>
                        <img className={'typeHeaderLogo'} src={typeHeaderLogo} alt={'typeHeaderLogo'}/>
                    </div>
                    <div className={'typeHeaderPreOrderSpace'}>
                        <div className={'typeHeaderPreOrder'}>PRE-ORDER NOW</div>
                    </div>
                </div>
                <Row className={'mb-5'}>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} className={'typeHeaderBodyLeftCenter'}>
                        <div >
                            <div className={'typeHeaderBodyLeftTitle'}>
                                Typemaster Keyboard
                            </div>
                            <div className={'typeHeaderBodyLeftBody'}>
                                Improve your productivity and gaming without breaking the bank.
                                Upgrade to a high quality mechanical typing experience.
                            </div>
                            <div className={'typeHeaderBodyBottom'}>
                                <div className={'typeHeaderBodyBottomPreOrderSpace'}>
                                    <div className={'typeHeaderBodyBottomPreOrder'}>Pre-order now</div>
                                </div>
                                <div className={'typeHeaderBodyBottomRelease'}>Release on 5/27</div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                            <img className={'typeHeaderBodyRightImage'} src={typeHeaderBodyRightImage} alt={'typeHeaderBodyRightImage'}/>
                    </Col>
                    <div className={'typeHeaderBodyRightRectangleSpace'}>
                        <img className={'typeHeaderBodyRightRectangle'} src={typeHeaderBodyRightRectangle} alt={'typeHeaderBodyRightRectangle'}/>
                    </div>
                </Row>
            </Container>
        </>
    )
}