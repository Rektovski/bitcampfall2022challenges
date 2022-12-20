import "../../design/challenge 10/headerStyle.css";
import {Container, FloatingLabel, Form} from "react-bootstrap";
import headerImage from "../../assets/challenge 10/illustration-1.svg";
import {useState} from "react";

export default function Header() {
    const [email, setEmail] = useState("");
    const [alert, setAlert] = useState(false);

    const emailChangeHandler = async (event) => {
        setEmail(event.target.value);
        if(email==="") {
            setAlert(false);
        } else {
            let check = 0;
            for (let i = 0; i < email.length; ++i) {
                if (email.charAt(i) === '@') {
                    check = 1;
                    break;
                }
            }
            if (!check) {
                setAlert(true);
            }
            else {
                setAlert(false);
            }
        }
    }

    const sendEmail = (event) => {
        event.preventDefault();
        setEmail("");
    }

    return (
        <>
            <Container>
                <div id={'fyloHeader'} className={'fyloHeaderSpace'}>
                    <div className={'fyloHeader'}>
                        <div className={'fyloHeaderLeft'}>
                            <div className={'fyloHeaderTitle'}>
                                All your files in one secure location, accessible anywhere.
                            </div>
                            <div className={'fyloHeaderBody'}>
                                Fylo stores your most important files in one secure location. Access them wherever you
                                need,
                                share and collaborate with friends, family, and co-workers.
                            </div>
                            <div>
                                <Form onSubmit={sendEmail} className={'d-flex'}>
                                    <FloatingLabel label="Email address" className={'fyloForm'}>
                                        <Form.Control
                                            type="email"
                                            name='email'
                                            placeholder=" "
                                            className={alert && "fyloFormInput"}
                                            value={email}
                                            onChange={(event) => {
                                                emailChangeHandler(event)
                                            }}
                                        />
                                    </FloatingLabel>
                                    <button type={'submit'} className={'fyloHeaderFormButton'}>
                                        Get Started
                                    </button>
                                </Form>
                                <div className={'fyloEmailError'}>{alert && "Please check your email"}</div>
                            </div>
                        </div>
                        <div className={'fyloHeaderImageSpace'}>
                            <img className={'fyloHeaderImage'} src={headerImage} alt={'headerImage'}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}