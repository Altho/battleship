// import './style.css';

const ship = (length,orientation, [...pos]) => {
    let position = pos;
    let shipOrientation = orientation;
    let shipLength = length;
    let isVertical = true;
    let isPlayer = true;
    let isSunk = false;

    let coordinates = () => {

        let coord = []

        for (let i = 0; i < shipLength; i++) {
            let e = [];
            if (shipOrientation === 'vertical') {
                e[0] = pos[0];
                e[1] = pos[1] - i;
            } else {

                e[0] = pos[0] + i;
                e[1] = pos[1];
            }

            coord.push(e);
        }
        return coord;


    }
    return {position, shipLength, isVertical, isPlayer, isSunk, coordinates}
}

const gameBoard = (size) => {
    const gbSize = size;
    const grid = () => {
        const totalGrid = [];
        const arr = [];
        for(let i = 0; i < gbSize; i++){
            for(let e = 0; e < gbSize; e++){
              arr[0]=i;
              arr[1]=e;
              console.log('arr = '+ arr)

            }
        }
        console.log('totalGrid = '+ totalGrid)

        return totalGrid;
    }
    return{gbSize,grid};
}

const hitDetection = () => {
}




module.exports = {ship, gameBoard}