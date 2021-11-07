const mainMethod = require('../index');
const ship = mainMethod.ship;
const board = mainMethod.gameBoard;


it('check position(vertical)', () => {
        const nostromo = ship(3,'vertical', [5, 5]);
        expect(nostromo.coordinates())
            .toStrictEqual([[5, 5], [5, 4], [5, 3]]);
    }
)

it('check position(horizontal)', () => {
        const serenity = ship(5,'horizontal', [7, 4]);
        serenity.isVertical = false;
        expect(serenity.coordinates())
            .toStrictEqual([[7, 4], [8, 4], [9, 4], [10, 4], [11, 4]]);
    }
)

it('grid test)', () => {
        const mainBoard = board(15);
        expect(mainBoard.grid())
            .toStrictEqual([[7, 4], [8, 4], [9, 4], [10, 4], [11, 4]]);
    }
)