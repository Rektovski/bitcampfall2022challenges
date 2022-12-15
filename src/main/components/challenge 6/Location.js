import "../../styles/challenge 6/locationStyle.css";
import leftIcon from "../../images/challenge 6/icon-arrow-left.svg";
import {AiFillFacebook as FaceIcon, AiOutlineInstagram as InstaIcon} from "react-icons/ai";
import {CiTwitter as TwitIcon} from "react-icons/ci";

export default function Location(props) {
    const setLocation = () => {
        props.changeLocation();
    }

    return (
        <>
            <div>
                <div className={'locationImage'}></div>
                <div className={'LocationBoxSpaceLocation'} onClick={setLocation}>
                    <div className={'LocationRightArrowSpaceLocation'}>
                        <img src={leftIcon} alt={'leftIcon'}/>
                    </div>
                    <div className={'LocationBoxTextLocation'}>
                        BACK TO HOME
                    </div>
                </div>

                <div className={'locationMiddle'}>
                    <div className={'middleLeft'}>OUR LOCATION</div>
                    <div className={'middleRight'}>
                        <div className={'Right1'}>99 KING STREET</div>
                        <div className={'Right2'}>
                            <div>Newport</div>
                            <div>RI 02840</div>
                            <div>United States of America</div>
                        </div>
                        <div className={'Right3'}>
                            Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern
                            Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
                        </div>
                    </div>
                </div>

                <div className={'locationFooter'}>
                    <div className={'locationFooterLastPart'}>
                        <div className={'locFooterLeft'}>MODERN ART GALLERY</div>
                        <div className={'locFooterMiddle'}>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find
                            us at 99 King Street, Newport, USA.
                        </div>
                        <div>
                            <FaceIcon className={'locFooterSocialIcon'}/>
                            <InstaIcon className={'locFooterSocialIcon'}/>
                            <TwitIcon className={'locFooterSocialIcon'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}