import "../design/navigationBarStyle.css";
import {Col, Container, Row} from "react-bootstrap";
import {projectsList} from "./projectsList";

export default function NavigationBar() {
    return (
        <>

            <Container>
                <h1 className={'text-center p-5'}>
                    Just click on the text to load the project component
                </h1>
                <Row>
                    {
                        projectsList.map((item, id) => (
                            <Col
                                key={id} sm={12} md={6} lg={4} xl={4} xxl={4}
                                className={'g-5 text-center p-5 '}
                            >
                                <a href={`https://bitcamp2022challenges.netlify.app/${item.link}`} target={"_blank"} rel={"noreferrer"}>
                                    <div>Challenge: #{id + 1}</div>
                                    <div>{item.name}</div>
                                    <div>{item.desc}</div>
                                </a>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}