import "../../design/challenge 10/bodyStyle.css";
import backgroundImage from "../../assets/challenge 10/bg-curve-desktop.svg";
import {Container, FloatingLabel, Form} from "react-bootstrap";
import BodyImage from "../../assets/challenge 10/illustration-2.svg";
import rightArrowImage from "../../assets/challenge 10/icon-arrow.svg";
import fyloProfile from "../../assets/challenge 10/avatar-testimonial.jpg";
import {useState} from "react";

export default function Body() {
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
            <div>
                <img className={'backgroundImage'} src={backgroundImage} alt={'backgroundImage'}/>
                <div className={'fyloBodySpaceBackgroundColor'}>
                    <Container>
                        <div className={'fyloBodySpace'}>
                            <div className={'fyloBody'}>
                                <div className={'fyloBodyLeft'}>
                                    <div className={'fyloBodyTitle'}>
                                        Stay productive, wherever you are
                                    </div>
                                    <div className={'fyloBodyText'}>
                                        Never let location be an issue when accessing your files. Fylo has you covered
                                        for all of your file storage needs.
                                    </div>
                                    <div className={'fyloBodyText'}>
                                        Securely share files and folders with friends, family and colleagues for live
                                        collaboration. No email attachments required!
                                    </div>
                                    <div className={'fyloBodyLinkSection'}>
                                        <div className={'fyloBodyTextLink'}>
                                            See how Fylo works
                                        </div>
                                        <img className={'rightArrowImage'} src={rightArrowImage}
                                             alt={'rightArrowImage'}/>
                                    </div>
                                    <div className={'fyloBodyCard'}>
                                        <div className={'fyloBodyCardQuotation'}>“</div>
                                        <div className={'fyloBodyCardTitle'}>
                                            Fylo has improved our team productivity by an order of magnitude. Since
                                            making the switch our team has become a well-oiled collaboration machine.
                                        </div>
                                        <div className={'fyloBodyCardFooter'}>
                                            <img className={'fyloProfile'} src={fyloProfile} alt={'fyloProfile'}/>
                                            <div>
                                                <div className={'fyloBodyCardProfileTitle'}>Kyle Burton</div>
                                                <div className={'fyloBodyCardProfileBody'}>Founder & CEO, Huddle</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'fyloBodyImageSpace'}>
                                    <img className={'fyloBodyImage'} src={BodyImage} alt={'BodyImage'}/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className={'fyloAccess'}>
                    <Container>
                        <div className={'fyloAccessSpace'}>
                            <div className={'fyloAccessLeftSpace'}>
                                <div className={'fyloAccessLeft'}>
                                    <div className={'fyloAccessLeftTitle'}>
                                        Get early access today
                                    </div>
                                    <div className={'fyloAccessLeftBody'}>
                                        It only takes a minute to sign up and our free starter tier is extremely generous. If you
                                        have any questions, our support team would be happy to help you.
                                    </div>
                                </div>
                            </div>
                            <div className={'fyloFormSpace'}>
                                <Form onSubmit={sendEmail} className={'d-flex'}>
                                    <FloatingLabel label="Email address" className={'accessForm'}>
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
                                    <button type={'submit'} className={'accessFormButton'}>
                                        Get Started
                                    </button>
                                </Form>
                                <div className={'accessEmailError'}>{alert && "Please check your email"}</div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}