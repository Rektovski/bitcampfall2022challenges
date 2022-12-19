export function checkIfWeMarkedPlayersBefore() {
    if (localStorage.getItem("OPlayerWinsCount") === null ||
        localStorage.getItem("OPlayerWinsCount") === undefined) {
        localStorage.setItem("OPlayerWinsCount", '0');
    }
    if (localStorage.getItem("XPlayerWinsCount") === null ||
        localStorage.getItem("XPlayerWinsCount") === undefined) {
        localStorage.setItem("XPlayerWinsCount", '0');
    }
    if (localStorage.getItem("tictactoeTIEScore") === null ||
        localStorage.getItem("tictactoeTIEScore") === undefined) {
        localStorage.setItem("tictactoeTIEScore", '0');
    }
}