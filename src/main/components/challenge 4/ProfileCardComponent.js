import "../../design/challenge 4/profileCardComponentStyle.css"
import mainFirstBall from "../../assets/challenge 4/bg-pattern-top.svg";
import mainSecondBall from "../../assets/challenge 4/bg-pattern-bottom.svg";
import ProfileCardBackgroundImage from "../../assets/challenge 4/bg-pattern-card.svg";
import ProfileCardImage from "../../assets/challenge 4/image-victor.jpg";

export default function ProfileCardComponent() {
    return (
        <>
            <div className={'ProfileCardComponent'}>
                <img className={'TopBall'} src={mainFirstBall} alt={'mainFirstBall'}/>
                <img className={'BottomBall'} src={mainSecondBall} alt={'mainSecondBall'}/>
                <div className={'ProfileCardSpace'}>
                    <div className={"ProfileCard"}>
                        <img className={"ProfileCardBackgroundImage"} src={ProfileCardBackgroundImage} alt={'ProfileCardBackgroundImage'}/>
                        <img className={'ProfileCardImage'} src={ProfileCardImage} alt={'ProfileCardImage'}/>
                        <div className={'pb-5'}>
                            <div className={'ProfileHeader'}>
                                <div className={'ProfileName'}>Victor Crest</div>
                                <div className={'ProfileAge'}>26</div>
                            </div>
                            <div className={'ProfileLocation'}>
                                London
                            </div>
                        </div>
                        <hr />
                        <div className={'ProfileFooter'}>
                            <div className={'mx-4'}>
                                <div className={'ProfileFooterHeader'}>80K</div>
                                <div className={'ProfileFooterBottom'}>Followers</div>
                            </div>
                            <div className={'mx-4'}>
                                <div className={'ProfileFooterHeader'}>803K</div>
                                <div className={'ProfileFooterBottom'}>Likes</div>
                            </div>
                            <div className={'mx-4'}>
                                <div className={'ProfileFooterHeader'}>1.4K</div>
                                <div className={'ProfileFooterBottom'}>Photos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}