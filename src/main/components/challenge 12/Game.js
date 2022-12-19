import "../../design/challenge 12/gameStyle.css";
import gameLogo from "../../assets/challenge 12/logo.svg";
import turnLogo1 from "../../assets/challenge 12/icon-x.svg";
import endOfGameBody1 from "../../assets/challenge 12/icon-x.svg";
import turnLogo2 from "../../assets/challenge 12/icon-o.svg";
import endOfGameBody2 from "../../assets/challenge 12/icon-o.svg";
import {useState} from "react";
import restartGameLogo from "../../assets/challenge 12/icon-restart.svg";
import {checkIfWeMarkedPlayersBefore} from "./gameHelper";

export default function Game() {
    const [turn, setTurn] = useState(false);
    const [matrix, setMatrix] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]); // 0-8
    const [tie, setTie] = useState(false);
    const [winnerSpace, setWinnerSpace] = useState([]);

    const checkBox = (id) => {
        if (matrix[id] === -1) {
            // turn === false   X turns saves 0
            // turn === true    O turns saves 1
            turn ? matrix[id] = 1 : matrix[id] = 0;
            if (checkIfPlayerWon() === "Tie") setTie(true);
            returnTable();
            setTurn(!turn);
        }
    }

    const returnTable = () => {
        return (
            <>
                <div className={'gameBodySpace'}>
                    <div className={'gameBody'}>
                        {
                            matrix.map((item, id) => (
                                <span key={id} className={
                                    winnerSpace.length === 3 && (id === winnerSpace[0] || id === winnerSpace[1] || id === winnerSpace[2])
                                        ? `${winnerSpace[0] === 0 ? 'winnerSpaceColorX' : 'winnerSpaceColorO'}`
                                        : "clearCard"
                                } onClick={() => {
                                    checkBox(id)
                                }}>
                                  <div className={'choosedPlace'}>
                                      {
                                          matrix[id] >= 0 ?
                                              <img className={'choosedPlaceLogo'}
                                                   src={matrix[id] === 0 ? turnLogo1 : turnLogo2} alt={'X or O'}/>
                                              : ""
                                      }
                                  </div>
                            </span>
                            ))
                        }
                    </div>
                </div>
                <div className={'bottomGameSpace'}>
                    <div className={'bottomGame'}>
                        <div className={'bottomFirst'}>
                            <div>X wins:</div>
                            <div className={'bottomScore'}>{getPointX()}</div>
                        </div>
                        <div className={'bottomSecond'}>
                            <div>TIES</div>
                            <div className={'bottomScore'}>{getTiePoint()}</div>
                        </div>
                        <div className={'bottomThird'}>
                            <div>O wins:</div>
                            <div className={'bottomScore'}>{getPointO()}</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const increasePlayerScore = (who) => {
        let text = who === 1 ? "XPlayerWinsCount" : "OPlayerWinsCount";
        checkIfWeMarkedPlayersBefore();
        let temp = localStorage.getItem(text);
        let number = parseInt(temp) + 1;
        localStorage.setItem(text, number.toString());
    }

    const checkIfPlayerWon = () => {
        // checks Player X

        // checks horizontal
        if (matrix[0] === 0 && matrix[1] === 0 && matrix[2] === 0) {
            increasePlayerScore(1);
            setWinnerSpace([0, 1, 2]);
        }
        if (matrix[3] === 0 && matrix[4] === 0 && matrix[5] === 0) {
            increasePlayerScore(1);
            return [3, 4, 5];
        }
        if (matrix[6] === 0 && matrix[7] === 0 && matrix[8] === 0) {
            increasePlayerScore(1);
            setWinnerSpace([6, 7, 8]);
        }

        // checks vertical
        if (!matrix[0] && !matrix[3] && !matrix[6]) {
            increasePlayerScore(1);
            setWinnerSpace([0, 3, 6]);
        }
        if (!matrix[1] && !matrix[4] && !matrix[7]) {
            increasePlayerScore(1);
            setWinnerSpace([1, 4, 7]);
        }
        if (!matrix[2] && !matrix[5] && !matrix[8]) {
            increasePlayerScore(1);
            setWinnerSpace([2, 5, 8]);
        }

        // checks diagonal
        if (!matrix[0] && !matrix[4] && !matrix[8]) {
            increasePlayerScore(1);
            setWinnerSpace([0, 4, 8]);
        }
        if (!matrix[2] && !matrix[4] && !matrix[6]) {
            increasePlayerScore(1);
            setWinnerSpace([2, 4, 6]);
        }

        // checks Player O

        // checks horizontal
        if (matrix[0] === 1 && matrix[1] === 1 && matrix[2] === 1) {
            increasePlayerScore(2);
            setWinnerSpace([0, 1, 2]);
        }
        if (matrix[3] === 1 && matrix[4] === 1 && matrix[5] === 1) {
            increasePlayerScore(2);
            setWinnerSpace([3, 4, 5]);
        }
        if (matrix[6] === 1 && matrix[7] === 1 && matrix[8] === 1) {
            increasePlayerScore(2);
            setWinnerSpace([6, 7, 8]);
        }

        // checks vertical
        if (matrix[0] === 1 && matrix[3] === 1 && matrix[6] === 1) {
            increasePlayerScore(2);
            setWinnerSpace([0, 3, 6]);
        }
        if (matrix[1] === 1 && matrix[4] === 1 && matrix[7] === 1) {
            increasePlayerScore(2);
            setWinnerSpace([1, 4, 7]);
        }
        if (matrix[2] === 1 && matrix[5] === 1 && matrix[8] === 1) {
            increasePlayerScore(2);
            setWinnerSpace([2, 5, 8]);
        }

        // checks diagonal
        if (matrix[0] === 1 && matrix[4] === 1 && matrix[8] === 1) {
            increasePlayerScore(2);
            setWinnerSpace([0, 4, 8]);
        }
        if (matrix[2] === 1 && matrix[4] === 1 && matrix[6] === 1) {
            increasePlayerScore(2);
            setWinnerSpace([2, 4, 6]);
        }

        let tieChecker = 0;
        matrix.forEach(item => {
            if (item >= 0) ++tieChecker;
        })

        if (tieChecker === 9) {
            let temp = localStorage.getItem("tictactoeTIEScore");
            let result = parseInt(temp) + 1;
            localStorage.setItem("tictactoeTIEScore", result.toString());
            return "Tie";
        }

        return [];
    }

    const restartGame = () => {
        setWinnerSpace([]);
        setTie(false);
        setMatrix([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
        setTurn(false);
    }

    const quitGame = () => {
        localStorage.setItem("XPlayerWinsCount", "0");
        localStorage.setItem("OPlayerWinsCount", "0");
        window.location.replace("/");
    }

    const getPointX = () => {
        let temp = localStorage.getItem("XPlayerWinsCount");
        return parseInt(temp);
    }

    const getPointO = () => {
        let temp = localStorage.getItem("OPlayerWinsCount");
        return parseInt(temp);
    }

    const getTiePoint = () => {
        let temp = localStorage.getItem("tictactoeTIEScore");
        return parseInt(temp);
    }

    return (
        <>
            <div className={'gameSpace'}>
                {
                    !(winnerSpace.length === 3 || tie)
                        ?
                        <div className={'gameHeader'}>
                            <img src={gameLogo} alt={'gameLogo'}/>
                            <div className={'turnSpace'}>
                                <div className={'turnLogoSpace'}>
                                    <img className={'turnLogo'} src={!turn ? turnLogo1 : turnLogo2} alt={'turnLogo'}/>
                                </div>
                                <div className={'turnText'}>TURN</div>
                            </div>
                            <div className={'restartGame'}>
                                <img className={'restartGameLogo'} src={restartGameLogo} alt={'restartGameLogo'}/>
                            </div>
                        </div>
                        :

                        <div>
                            <div className={'gameHeader'}>
                                <img src={gameLogo} alt={'gameLogo'}/>
                                <div className={'turnSpace'}>
                                    <div className={'turnLogoSpace'}>
                                        <img className={'turnLogo'} src={!turn ? turnLogo1 : turnLogo2}
                                             alt={'turnLogo'}/>
                                    </div>
                                    <div className={'turnText'}>TURN</div>
                                </div>
                                <div className={'restartGame'} onClick={restartGame}>
                                    <img className={'restartGameLogo'} src={restartGameLogo} alt={'restartGameLogo'}/>
                                </div>
                            </div>
                            <div className={'endOfGameBackground'}>
                                <div className={'endOfGame'}>
                                    <div>
                                        {
                                            !tie ?
                                                <div>
                                                    <div
                                                        className={'endOfGameTitle'}>Player {winnerSpace[0] === 0 ? '1' : '2'} Wins!
                                                    </div>
                                                    <div className={'endOfGameBody'}>
                                                        <div className={'endOfGameBodyImageSpace'}>
                                                            <img className={'endOfGameBodyImage'}
                                                                 src={winnerSpace[0] === 0 ? endOfGameBody1 : endOfGameBody2}
                                                                 alt={'endOfGameBody'}/>
                                                        </div>
                                                        <div className={'endOfGameBodyText'}>TAKES THE ROUND</div>
                                                    </div>
                                                </div>

                                                :
                                                <div className={'endOfGameTitle'}>Round Tied!</div>
                                        }
                                        <div className={'endOfGameFooterSpace'}>
                                            <div className={'endOfGameFooter'}>
                                                <div className={'endOfGameFooterLeft'} onClick={() => {
                                                    quitGame();
                                                }}>Quit
                                                </div>
                                                <div className={'endOfGameFooterRight'} onClick={restartGame}>Restart
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }


                {returnTable()}
            </div>
        </>
    )
}
