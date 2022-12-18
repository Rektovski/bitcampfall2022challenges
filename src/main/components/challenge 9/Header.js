import "../../design/challenge 9/headerStyle.css";
import {Container} from "react-bootstrap";

export default function Header() {
    return (
        <>
            <Container>
                <div className={'fourCardHeaderSpace'}>
                    <div className={'fourCardHeader1'}>
                        Reliable, efficient delivery
                    </div>
                    <div className={'fourCardHeader2'}>
                        Powered by Technology
                    </div>
                    <div className={'d-flex justify-content-center'}>
                        <div className={'fourCardHeader3'}>
                            Our Artificial Intelligence powered tools use millions of project data points to ensure that your
                            project is successful
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}