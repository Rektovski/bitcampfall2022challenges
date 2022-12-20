import "../design/navigationBarStyle.css";
import {Col, Container, Row} from "react-bootstrap";
import {projectsList} from "./projectsList";

export default function NavigationBar() {
    return (
        <>
            <div className={'projectsPage'}>
                <Container>
                    <div style={{fontSize: 20}} className={'text-center p-5'}>
                        Click on project to open it.
                    </div>
                    <Row>
                        {
                            projectsList.map((item, id) => (
                                <Col
                                    key={id} sm={12} md={6} lg={4} xl={4} xxl={4}
                                    className={'g-5 text-center p-5 cardMouseOverChanger'}
                                >
                                    <a  href={`https://bitcamp2022challenges.netlify.app/${item.link}`} target={"_blank"} rel={"noreferrer"}>
                                        <div className={'my-2 bg-dark rounded p-2 text-light'}>Challenge: #{id + 1}</div>
                                        <div className={'my-2 bg-dark rounded p-2 text-light'}>
                                            <img src={item.image} alt={'projectImage'}/>
                                        </div>
                                        <div className={'my-2 bg-dark rounded p-2 text-light'}>{item.name}</div>
                                        {item.desc &&
                                            <div className={'my-2 bg-dark rounded p-2 text-light'}>{item.desc}</div>
                                        }
                                    </a>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}