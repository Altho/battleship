const ship = require('../index');

it('check position', () => {
        const nostromo = ship(3,[5,5]);
        expect(nostromo.coordinates())
            .toStrictEqual([[5,5],[5,4],[5,3]]);
    }
)