import "../../design/challenge 14/interactivePricingComponentStyle.scss";
import interactiveBackgroundImage from "../../assets/challenge 14/bg-pattern.svg";
import interTitleImage from "../../assets/challenge 14/pattern-circles.svg";
import interBird from "../../assets/challenge 14/icon-check.svg";
import {Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch} from '@chakra-ui/react'
import {useEffect, useState} from "react";

export default function InteractivePricing() {
    const [cost, setCost] = useState(null);

    const costChangeHandler = (val) => {
        let temp1 = val.toString(); // decimal to string
        let temp2 = parseFloat(temp1).toFixed(2); // string to float 1.12
        setCost(temp2);
    }

    useEffect(() => {
        costChangeHandler(50);
    }, []);

    return (
        <>
            <div className={'backgroundFullColorForInteractive'}>
                <div className={'interactivePricingComponentStyle'}>
                    <div>
                        <div className={'interactiveBackgroundImageSpace'}>
                            <img className={'interactiveBackgroundImage'} src={interactiveBackgroundImage}
                                 alt={'interactiveBackgroundImage'}/>
                        </div>
                        <div className={'interCard'}>
                            <div className={'mainInteractive'}>
                                <div className={'interTitleImageSpace'}>
                                    <img className={'interTitleImage'} src={interTitleImage} alt={'interTitleImage'}/>
                                </div>
                                <div className={'interTextSpace'}>
                                    <div className={'interTitle'}>Simple, traffic-based pricing</div>
                                    <div className={'interBody'}>Sign-up for our 30-day trial. No credit card required.
                                    </div>
                                </div>
                            </div>
                            <div className={'interCardSpaceCenter'}>
                                <div className={'interCardSpace'}>
                                    <div className={'interCardTitle'}>
                                        <div className={'interCardTitleLeft'}>100K PAGEVIEWS</div>
                                        <div className={'interCardTitleRight'}>
                                            <div className={'interCardTitleCost'}>${cost} /</div>
                                            <div className={'interCardmonthtext'}>month</div>
                                        </div>
                                    </div>
                                    <div className={'interCardSlider'}>
                                        <Slider
                                            aria-label='slider-ex-5'
                                            defaultValue={cost}
                                            onChange={(val) => costChangeHandler(val)}
                                        >
                                            <SliderTrack>
                                                <SliderFilledTrack/>
                                            </SliderTrack>
                                            <SliderThumb/>
                                        </Slider>
                                    </div>
                                    <div className={'interCardChooseBillPeriod'}>
                                        <div className={'interCardMonth'}>Monthly Billing</div>
                                        <div className={'interCardSwitcher'}>
                                            <Switch size='md' />
                                        </div>
                                        <div className={'interCardYear'}>Yearly Billing</div>
                                        <div
                                            className={'interCardDiscount'}>25% {window.innerWidth >= 800 && "discount"}</div>
                                    </div>
                                    <br/>
                                    <div className={'interCardFooterCenterForMobile'}>
                                        <div className={'interCardFooter'}>
                                            <div className={'interCardFooterLeft'}>
                                                <div className={'interCardParts'}>
                                                    <img className={'interBird'} src={interBird} alt={'interBird'}/>
                                                    <div className={'interBirdText'}>
                                                        Unlimited websites
                                                    </div>
                                                </div>
                                                <div className={'interCardParts'}>
                                                    <img className={'interBird'} src={interBird} alt={'interBird'}/>
                                                    <div className={'interBirdText'}>
                                                        100% data ownership
                                                    </div>
                                                </div>
                                                <div className={'interCardParts'}>
                                                    <img className={'interBird'} src={interBird} alt={'interBird'}/>
                                                    <div className={'interBirdText'}>
                                                        Email reports
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'interCardFooterRight'}>
                                                Start my trial
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}