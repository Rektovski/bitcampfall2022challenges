import "../../design/challenge 12/startPhaseStyle.css";
import gameLogo from "../../assets/challenge 12/logo.svg";
import chooseX from "../../assets/challenge 12/icon-x.svg";
import chooseO from "../../assets/challenge 12/icon-o.svg";

export default function StartPhase(props) {
    const ChooseXTurn = () => {
        localStorage.setItem('tictactoePlayerTurn', false);
    }

    const ChooseYTurn = () => {
        localStorage.setItem('tictactoePlayerTurn', true);
    }

    return (
        <>
            <div className={'gameCard'}>
                <div className={'gameLogoSpace'}>
                    <img className={'gameLogo'} src={gameLogo} alt={'gameLogo'}/>
                </div>
                <div className={'chooseSideSpace'}>
                    <div className={'sideTitle'}>PICK PLAYER 1’S MARK</div>
                    <div className={'sideBodySpace'}>
                        <div className={'sideBody'}>
                            <div className={'XsideStyle'} onClick={ChooseXTurn}>
                                <div className={'chooseSideChooser'} onClick={()=>props.chooseFirstPlayer(false)}>
                                    <img className={'chooseX'} src={chooseX} alt={'chooseX'}/>
                                </div>
                            </div>
                            <div className={'OsideStyle'} onClick={ChooseYTurn}>
                                <div className={'chooseSideChooser OiconColor'} onClick={()=>props.chooseFirstPlayer(true)}>
                                    <img className={'chooseO'} src={chooseO} alt={'chooseO'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'sideFooter'}>REMEMBER : X GOES FIRST</div>
                </div>
                <div className={'startGameCPU'}>
                    NEW GAME (VS CPU)
                </div>
                <div className={'startGamePlayer'} onClick={()=>{props.wannaStart(true)}}>
                    NEW GAME (VS PLAYER)
                </div>
            </div>
        </>
    )
}