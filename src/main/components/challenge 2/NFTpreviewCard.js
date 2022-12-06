import "../../styles/NFTpreviewCardStyle.css";
import cardImage from "../../images/challenge 2/image-equilibrium.jpg";
import etheriumLogo from "../../images/challenge 2/icon-ethereum.svg";
import clockIcon from "../../images/challenge 2/icon-clock.svg";
import footerImage from "../../images/challenge 2/image-avatar.png";
import changedLogo from "../../images/challenge 2/icon-view.svg";

export default function NFTpreviewCard() {
    return (
        <>
            <div className={"NFTCard"}>
                <div className={'Card'}>
                    <div className="MainLogoSpace">
                        <img className={"CardImage image"} src={cardImage} alt={'cardMainlogo'}/>
                        <div className="overlay">
                            <div className="text">
                                <img src={changedLogo} alt={'changedLogo'}/>
                            </div>
                        </div>
                    </div>


                    <div className={'CardHeaderText'}>Equilibrium #3429</div>
                    <div className={'CardBodyText'}>Our Equilibrium collection promotes balance and calm.</div>
                    <div className={'CardMiddleSection'}>
                        <div className={'d-flex justify-content-center align-items-center'}>
                            <img className={'CardEtheriumImage'} src={etheriumLogo} alt={"etheriumLogo"}/>
                            <div className={'CardCost'}>0.041 ETH</div>
                        </div>
                        <div className={'d-flex justify-content-center align-items-center'}>
                            <img className={'CardClockIcon'} src={clockIcon} alt={"etheriumLogo"}/>
                            <div className={'CardClockDay'}>3 days left</div>
                        </div>
                    </div>
                    <div className="CardLine"></div>
                    <div className={'CardFooter'}>
                        <img className={"CardFooterImage"} src={footerImage} alt={'CardFooterImage'}/>
                        <div className={'d-flex justify-content-center align-items-center'}>
                            <div className={'CardFooterFirstPart'}>Creation of</div>
                            <div className={'CardFooterSecondPart'}>Jules Wyvern</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}