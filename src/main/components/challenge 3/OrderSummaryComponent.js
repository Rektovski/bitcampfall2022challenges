import "../../design/challenge 3/orderSummaryComponentStyle.css";
import mainLogo from "../../assets/challenge 3/pattern-background-desktop.svg";
import mainLogoMobile from "../../assets/challenge 3/pattern-background-mobile.svg";
import cardImage from "../../assets/challenge 3/illustration-hero.svg";
import musicLogo from "../../assets/challenge 3/icon-music.svg";

export default function OrderSummaryComponent() {
    return (
        <>
            <div className={'OrderSummaryComponent'}>
                <img className={`${window.innerWidth >= 600 ? "OrderCardMainImage" :
                    "mainLogoMobile"}`}
                     src={window.innerWidth >= 600 ? mainLogo : mainLogoMobile}
                     alt={'mainlogo'}/>




                <div className={'orderCardSpace'}>
                    <div className={'orderCard'}>
                        <img className={'orderCardFirstImage'} src={cardImage} alt={'cardImage'}/>
                        <div className={'orderHeaderText'}>
                            Order Summary
                        </div>
                        <div className={'orderMiddleSpace'}>
                            <div className={'orderMiddleHeaderText'}>
                                You can now listen to millions of songs, audiobooks,
                                and podcasts on any device anywhere you like!
                            </div>
                            <div className={'orderMiddleFooter'}>
                                <div className={'orderMiddleFooterLeft'}>
                                    <img className={'orderMiddleFooterImage'} src={musicLogo} alt={'musicLogo'}/>
                                    <div>
                                        <div className={'orderMiddlePlan'}>Annual Plan</div>
                                        <div className={'orderMiddleCost'}>$59.99/year</div>
                                    </div>
                                </div>
                                <div className={'orderMiddleAnchorChange'}>Change</div>
                            </div>
                        </div>
                        <div className={'orderBottomSpace'}>
                            <button type={'button'} className={'orderBottomButton'}>
                                <div className={'orderBottomButtonText'}>
                                    Proceed to Payment
                                </div>
                            </button>
                            <div className={'orderBottomCancelCenter'}>
                                <div className={'orderBottomText'}>
                                    Cancel Order
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}