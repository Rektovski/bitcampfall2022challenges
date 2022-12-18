import "../../design/challenge 8/bodyStyle.css";
import typeBodyFirstImage from "../../assets/challenge 8/desktop/image-phone-and-keyboard.jpg"
import typeBodySecondImage from "../../assets/challenge 8/desktop/image-glass-and-keyboard.jpg";
import {Container} from "react-bootstrap";
import typeHeaderBodyRightRectangle from "../../assets/challenge 8/shared/pattern-square.svg";

export default function Body() {
    return (
        <>
            <Container>
                <div className={'typeBody'}>
                    <div className={'typeBodyImagesSpace'}>
                        <div className={'typeBodyFirstImageSpace'}>
                            <img className={'typeBodyFirstImage'} src={typeBodyFirstImage} alt={'typeBodyFirstImage'}/>
                        </div>
                        <div className={'typeBodySecondImageSpace'}>
                            <img className={'typeBodySecondImage'} src={typeBodySecondImage} alt={'typeBodySecondImage'}/>
                        </div>
                    </div>
                    <div className={'typeBodyRightSideCenter'}>
                        <div className={'typeBodyRightSide'}>
                            <div className={'typeBodyRightSideTitle'}>
                                mechanical wireless keyboard
                            </div>
                            <div className={'typeBodyRightSideBody'}>
                                The Typemaster keyboard boasts
                                top-notch build and practical design. It offers a wide variety of switches and keycaps, along
                                with reliable wireless connectivity.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'typeBodyLeftRectangleSpace'}>
                    <img className={'typeBodyLeftRectangle'} src={typeHeaderBodyRightRectangle} alt={'typeHeaderBodyRightRectangle'}/>
                </div>
            </Container>
        </>
    )
}