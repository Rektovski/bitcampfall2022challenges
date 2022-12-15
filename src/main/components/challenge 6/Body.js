import "../../design/challenge 6/bodyStyle.css";
import {Container} from "react-bootstrap";
import interiorImage1 from "../../assets/challenge 6/image-grid-1.jpg";
import interiorImage2 from "../../assets/challenge 6/image-grid-2.jpg";
import interiorImage3 from "../../assets/challenge 6/image-grid-3.jpg";

export default function Body() {
    return (
        <>
            <div className={'ArtBody'}>
                <Container>
                    <div className={'BodyPart1'}>
                        <div className={'flex-fill'}>
                            <div className={"FirstTextHeader"}>Your Day at the Gallery</div>
                            <div className={"FirstTextBody"}>
                                Wander through our distinct collections and find new
                                insights about our artists. Dive
                                into the details of their creative process.
                            </div>
                        </div>
                        <img className={'Part1Image'} src={interiorImage1} alt={'interiorImage1'}/>
                    </div>
                    <div className={'BodyPart2'}>
                            <img className={"leftPart flex-fill Part2LeftImage"} src={interiorImage2} alt={'interiorImage2'}/>
                        <div>
                                <img className={"rightUpPart Part2RightUpImage"} src={interiorImage3} alt={'interiorImage3'}/>
                            <div className={'rightDownPart'}>
                                <div className={'Part2Title'}>COME & BE INSPIRED</div>
                                <div className={'Part2Body'}>We’re excited to welcome you to our gallery and see how our collections influence you.</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}