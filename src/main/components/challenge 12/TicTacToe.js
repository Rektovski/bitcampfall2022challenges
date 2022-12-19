import "../../design/challenge 12/tictactoeStyle.css";
import StartPhase from "./StartPhase";
import Game from "./Game";
import {useEffect, useState} from "react";


export default function TicTacToe() {
    const [start, setStart] = useState(false);
    const [choosePlayerOne, setChoosePlayerOne] = useState(false); // X or O

    useEffect(() => {
        if (localStorage.getItem("WhoIsFirstPlayer") === null || localStorage.getItem("WhoIsFirstPlayer") === undefined) {
            localStorage.setItem("WhoIsFirstPlayer", "false");
        }
        if (choosePlayerOne === false) {
            localStorage.setItem("WhoIsFirstPlayer", "false");
        } else {
            localStorage.setItem("WhoIsFirstPlayer", "true");
        }

        localStorage.setItem("XPlayerWinsCount", "0");
        localStorage.setItem("OPlayerWinsCount", "0");
        localStorage.setItem("tictactoeTIEScore", "0");
    }, [choosePlayerOne]);

    return (
        <>
            <div className={'ticTacToe'}>
                {
                    start ?
                        <Game whoStartsGame={choosePlayerOne}/>
                        :
                        <StartPhase wannaStart={setStart} chooseFirstPlayer={setChoosePlayerOne}/>
                }
            </div>
        </>
    )
}