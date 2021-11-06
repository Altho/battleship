// import './style.css';

const ship = (length,[...pos]) => {
    let position = pos;
    let shipLength = length;
    let isVertical = true;
    let isPlayer = true;
    let isSunk = false;

    let coordinates = () => {
        if(isVertical===true){
            let coord = []

            for(let i = 0; i === shipLength; i++){
                console.log('loop running');
                let e = [];
                e[0]= pos[0];
                e[1]= pos[1]-i;
                console.log(e);
                coord.push(e);
            }
            return coord;
        }
    }
    return {position, shipLength,isVertical,isPlayer,isSunk,coordinates}
}

const hitDetection = () => {
}
module.exports=ship;