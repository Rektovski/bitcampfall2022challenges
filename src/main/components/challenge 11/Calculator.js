import "../../design/challenge 11/calculatorStyle.css";
import calcLogo from "../../assets/challenge 11/logo.svg";
import dollarLogo from "../../assets/challenge 11/icon-dollar.svg";
import amountLogo from "../../assets/challenge 11/icon-person.svg";
import {useEffect, useState} from "react";

export default function Calculator() {
    const [dollar, setDollar] = useState("");
    const [tip, setTip] = useState(1);
    const [amount, setAmount] = useState(1); // People
    const [person, setPerson] = useState(""); // tip per Person
    const [all, setAll] = useState(""); // full bill

    const resetData = () => {
        setDollar("");
        setTip(1);
        setAmount(1)
        setPerson("");
        setAll("");
    }

    const dollarChangeHandler = (event) => {
        if (dollar < 1000) {
            setDollar(event.target.value);
        } else {
            setDollar("");
        }
    }

    const tipChangeHandler = (event) => {
        let tip = event.target.value;
        if (tip >= 1 && tip < 70) {
            setTip(tip);
        }
    }

    const amountChangeHandler = (event) => {
        let amount = event.target.value;
        if (amount >= 1 && amount <= 9) {
            setAmount(amount);
        }
    }

    useEffect(() => {
        setPerson(prevState => {
            prevState = Number(((dollar * (1 + (tip / 100)))).toFixed(2));
            return prevState;
        });
        setAll(Number(((dollar * (tip / 100)) / amount).toFixed(2)));
    }, [dollar, tip, amount])

    return (
        <>
            <div className={'calc'}>
                <div className={'calcLogoSpace'}>
                    <img className={'calcLogo'} src={calcLogo} alt={'calcLogo'}/>
                </div>
                <div className={'calcCard'}>
                    <div className={'calcLeft'}>
                        <div className={'inputName'}>Bill</div>
                        <div>
                            <input
                                className={'dollarInput'}
                                value={dollar}
                                onChange={(event) => dollarChangeHandler(event)}
                            />
                            <img className={'dollarInputImage'} src={dollarLogo} alt={'dollarLogo'}/>
                        </div>
                        <div className={'inputName'}>Select Tip %</div>
                        <div className={'calcTip'}>
                            <div className={'calcTipLeft'}>
                                <div className={'tipButton'}
                                     onClick={() => {
                                         setTip(5)
                                     }}
                                >5%
                                </div>
                                <div className={'tipButton'}
                                     onClick={() => {
                                         setTip(10)
                                     }}
                                >10%
                                </div>
                                <div className={'tipButton'}
                                     onClick={() => {
                                         setTip(15)
                                     }}
                                >15%
                                </div>
                            </div>
                            <div className={'calcTipRight'}>
                                <div className={'tipButton'}
                                     onClick={() => {
                                         setTip(25)
                                     }}
                                >25%
                                </div>
                                <div className={'tipButton'}
                                     onClick={() => {
                                         setTip(50)
                                     }}
                                >50%
                                </div>
                                <div>
                                    <input
                                        className={'CustomTipInput'}
                                        placeholder={'Custom'}
                                        value={tip}
                                        onChange={(event) => tipChangeHandler(event)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={'inputName'}>Number of People</div>
                        <div>
                            <input
                                className={'dollarInput'}
                                value={amount}
                                onChange={(event) => amountChangeHandler(event)}
                            />
                            <img className={'dollarInputImage'} src={amountLogo} alt={'amountLogo'}/>
                        </div>
                    </div>
                    <div className={'calcRight'}>
                        <div>
                            <div className={'calcRightLeftSide'}>
                                <div>
                                    <div className={'calcRightLeftSideTitle'}>Total</div>
                                    <div className={'calcRightLeftSideBody'}>/ person</div>
                                </div>
                                <div className={'calcRightCost'}>${all}</div>
                            </div>
                            <div className={'calcRightLeftSide'}>
                                <div>
                                    <div className={'calcRightLeftSideTitle'}>Tip Amount</div>
                                    <div className={'calcRightLeftSideBody'}>/ person</div>
                                </div>
                                <div className={'calcRightCost'}>${person}</div>
                            </div>
                        </div>

                        <div
                            className={'calcRightBottomSpace'}
                            onClick={resetData}
                        >
                            <div className={'calcRightBottom'}>
                                Reset
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}