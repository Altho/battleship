const ship = require('../index');

it('check position', () =>
    expect(ship(5).coordinates())
        .toBe('ok')
)