import './style.css';

const ship = (length) => {
    let position = [1,1];
    let shipLength = length;
    let isVertical = true;
    let isPlayer = true;
    let isSunk = false;
    let coordinates = () => {
        return 'ok';

    }
    return {position, shipLength,isVertical,isPlayer,isSunk,coordinates}
}

const hitDetection = () => {
}
module.exports=ship;