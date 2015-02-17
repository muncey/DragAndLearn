var board4x4 = {
    cellsOnCount: 7,
    rows: 4,
    cols: 4,
    timeLimit: 30,
    data: [
        { i: 0, j: 0, tile: 'on' },
        { i: 0, j: 1, tile: 'off' },
        { i: 0, j: 2, tile: 'off' },
        { i: 0, j: 3, tile: 'off' },
        { i: 1, j: 0, tile: 'off' },
        { i: 1, j: 1, tile: 'on' },
        { i: 1, j: 2, tile: 'off' },
        { i: 1, j: 3, tile: 'on' },
        { i: 2, j: 0, tile: 'on' },
        { i: 2, j: 1, tile: 'off' },
        { i: 2, j: 2, tile: 'off' },
        { i: 2, j: 3, tile: 'on' },
        { i: 3, j: 0, tile: 'off' },
        { i: 3, j: 1, tile: 'on' },
        { i: 3, j: 2, tile: 'on' },
        { i: 3, j: 3, tile: 'off' },
    ],
};

var board5x5 = {
    cellsOnCount: 12,
    rows: 5,
    cols: 5,
    timeLimit: 30,
    data: [
        { i: 0, j: 0, tile: 'on' }, { i: 0, j: 1, tile: 'off' }, { i: 0, j: 2, tile: 'off' }, { i: 0, j: 3, tile: 'off' }, { i: 0, j: 4, tile: 'off' },
        { i: 1, j: 0, tile: 'off' }, { i: 1, j: 1, tile: 'on' }, { i: 1, j: 2, tile: 'off' }, { i: 1, j: 3, tile: 'on' }, { i: 1, j: 4, tile: 'on' },
        { i: 2, j: 0, tile: 'off' }, { i: 2, j: 1, tile: 'on' }, { i: 2, j: 2, tile: 'on' }, { i: 2, j: 3, tile: 'off' }, { i: 2, j: 4, tile: 'off' },
        { i: 3, j: 0, tile: 'on' }, { i: 3, j: 1, tile: 'off' }, { i: 3, j: 2, tile: 'on' }, { i: 3, j: 3, tile: 'off' }, { i: 3, j: 4, tile: 'on' },
        { i: 4, j: 0, tile: 'on' }, { i: 4, j: 1, tile: 'off' }, { i: 4, j: 2, tile: 'on' }, { i: 4, j: 3, tile: 'off' }, { i: 4, j: 4, tile: 'on' },
    ],
};

var board6x6 = {
    cellsOnCount: 17,
    rows: 6,
    cols: 6,
    timeLimit: 60,
    data: [
        { i: 0, j: 0, tile: 'on' }, { i: 0, j: 1, tile: 'off' }, { i: 0, j: 2, tile: 'off' }, { i: 0, j: 3, tile: 'off' }, { i: 0, j: 4, tile: 'off' }, { i: 0, j: 5, tile: 'on' },
        { i: 1, j: 0, tile: 'off' }, { i: 1, j: 1, tile: 'on' }, { i: 1, j: 2, tile: 'off' }, { i: 1, j: 3, tile: 'on' }, { i: 1, j: 4, tile: 'on' }, { i: 1, j: 5, tile: 'off' },
        { i: 2, j: 0, tile: 'off' }, { i: 2, j: 1, tile: 'on' }, { i: 2, j: 2, tile: 'on' }, { i: 2, j: 3, tile: 'off' }, { i: 2, j: 4, tile: 'off' }, { i: 2, j: 5, tile: 'on' },
        { i: 3, j: 0, tile: 'on' }, { i: 3, j: 1, tile: 'off' }, { i: 3, j: 2, tile: 'on' }, { i: 3, j: 3, tile: 'off' }, { i: 3, j: 4, tile: 'on' }, { i: 3, j: 5, tile: 'off' },
        { i: 4, j: 0, tile: 'on' }, { i: 4, j: 1, tile: 'off' }, { i: 4, j: 2, tile: 'on' }, { i: 4, j: 3, tile: 'off' }, { i: 4, j: 4, tile: 'on' }, { i: 4, j: 5, tile: 'off' },
        { i: 5, j: 0, tile: 'off' }, { i: 5, j: 1, tile: 'off' }, { i: 5, j: 2, tile: 'on' }, { i: 5, j: 3, tile: 'off' }, { i: 5, j: 4, tile: 'on' }, { i: 5, j: 5, tile: 'on' },
    ],
};

var board8x8 = {
    cellsOnCount: 33,
    rows: 8,
    cols: 8,
    timeLimit: 90,
    data: [
        { i: 0, j: 0, tile: 'on' }, { i: 0, j: 1, tile: 'off' }, { i: 0, j: 2, tile: 'off' }, { i: 0, j: 3, tile: 'off' }, { i: 0, j: 4, tile: 'off' }, { i: 0, j: 5, tile: 'on' }, { i: 0, j: 6, tile: 'on' }, { i: 0, j: 7, tile: 'on' },
        { i: 1, j: 0, tile: 'off' }, { i: 1, j: 1, tile: 'on' }, { i: 1, j: 2, tile: 'off' }, { i: 1, j: 3, tile: 'on' }, { i: 1, j: 4, tile: 'on' }, { i: 1, j: 5, tile: 'off' }, { i: 1, j: 6, tile: 'off' }, { i: 1, j: 7, tile: 'on' },
        { i: 2, j: 0, tile: 'off' }, { i: 2, j: 1, tile: 'on' }, { i: 2, j: 2, tile: 'on' }, { i: 2, j: 3, tile: 'off' }, { i: 2, j: 4, tile: 'off' }, { i: 2, j: 5, tile: 'on' }, { i: 2, j: 6, tile: 'on' }, { i: 2, j: 7, tile: 'off' },
        { i: 3, j: 0, tile: 'on' }, { i: 3, j: 1, tile: 'off' }, { i: 3, j: 2, tile: 'on' }, { i: 3, j: 3, tile: 'off' }, { i: 3, j: 4, tile: 'on' }, { i: 3, j: 5, tile: 'off' }, { i: 3, j: 6, tile: 'on' }, { i: 3, j: 7, tile: 'off' },
        { i: 4, j: 0, tile: 'on' }, { i: 4, j: 1, tile: 'off' }, { i: 4, j: 2, tile: 'on' }, { i: 4, j: 3, tile: 'off' }, { i: 4, j: 4, tile: 'on' }, { i: 4, j: 5, tile: 'off' }, { i: 4, j: 6, tile: 'on' }, { i: 4, j: 7, tile: 'off' },
        { i: 5, j: 0, tile: 'off' }, { i: 5, j: 1, tile: 'off' }, { i: 5, j: 2, tile: 'on' }, { i: 5, j: 3, tile: 'off' }, { i: 5, j: 4, tile: 'on' }, { i: 5, j: 5, tile: 'on' }, { i: 5, j: 6, tile: 'on' }, { i: 5, j: 7, tile: 'on' },
        { i: 6, j: 0, tile: 'off' }, { i: 6, j: 1, tile: 'on' }, { i: 6, j: 2, tile: 'on' }, { i: 6, j: 3, tile: 'off' }, { i: 6, j: 4, tile: 'on' }, { i: 6, j: 5, tile: 'off' }, { i: 6, j: 6, tile: 'on' }, { i: 6, j: 7, tile: 'off' },
        { i: 7, j: 0, tile: 'on' }, { i: 7, j: 1, tile: 'off' }, { i: 7, j: 2, tile: 'on' }, { i: 7, j: 3, tile: 'off' }, { i: 7, j: 4, tile: 'off' }, { i: 7, j: 5, tile: 'off' }, { i: 7, j: 6, tile: 'on' }, { i: 7, j: 7, tile: 'on' },
    ],
};

var board10x10 = {
    cellsOnCount: 55,
    rows: 10,
    cols: 10,
    timeLimit: 90,
    data: [
        { i: 0, j: 0, tile: 'on' }, { i: 0, j: 1, tile: 'off' }, { i: 0, j: 2, tile: 'off' }, { i: 0, j: 3, tile: 'off' }, { i: 0, j: 4, tile: 'off' }, { i: 0, j: 5, tile: 'on' }, { i: 0, j: 6, tile: 'on' }, { i: 0, j: 7, tile: 'on' }, { i: 0, j: 8, tile: 'on' }, { i: 0, j: 9, tile: 'on' },
        { i: 1, j: 0, tile: 'off' }, { i: 1, j: 1, tile: 'on' }, { i: 1, j: 2, tile: 'off' }, { i: 1, j: 3, tile: 'on' }, { i: 1, j: 4, tile: 'on' }, { i: 1, j: 5, tile: 'off' }, { i: 1, j: 6, tile: 'off' }, { i: 1, j: 7, tile: 'off' }, { i: 1, j: 8, tile: 'on' }, { i: 1, j: 9, tile: 'off' },
        { i: 2, j: 0, tile: 'off' }, { i: 2, j: 1, tile: 'on' }, { i: 2, j: 2, tile: 'on' }, { i: 2, j: 3, tile: 'off' }, { i: 2, j: 4, tile: 'off' }, { i: 2, j: 5, tile: 'on' }, { i: 2, j: 6, tile: 'on' }, { i: 2, j: 7, tile: 'off' }, { i: 2, j: 8, tile: 'on' }, { i: 2, j: 9, tile: 'off' },
        { i: 3, j: 0, tile: 'on' }, { i: 3, j: 1, tile: 'off' }, { i: 3, j: 2, tile: 'on' }, { i: 3, j: 3, tile: 'off' }, { i: 3, j: 4, tile: 'on' }, { i: 3, j: 5, tile: 'off' }, { i: 3, j: 6, tile: 'on' }, { i: 3, j: 7, tile: 'off' }, { i: 3, j: 8, tile: 'on' }, { i: 3, j: 9, tile: 'on' },
        { i: 4, j: 0, tile: 'on' }, { i: 4, j: 1, tile: 'off' }, { i: 4, j: 2, tile: 'on' }, { i: 4, j: 3, tile: 'off' }, { i: 4, j: 4, tile: 'on' }, { i: 4, j: 5, tile: 'off' }, { i: 4, j: 6, tile: 'on' }, { i: 4, j: 7, tile: 'off' }, { i: 4, j: 8, tile: 'off' }, { i: 4, j: 9, tile: 'on' },
        { i: 5, j: 0, tile: 'off' }, { i: 5, j: 1, tile: 'off' }, { i: 5, j: 2, tile: 'on' }, { i: 5, j: 3, tile: 'off' }, { i: 5, j: 4, tile: 'on' }, { i: 5, j: 5, tile: 'on' }, { i: 5, j: 6, tile: 'on' }, { i: 5, j: 7, tile: 'on' }, { i: 5, j: 8, tile: 'off' }, { i: 5, j: 9, tile: 'on' },
        { i: 6, j: 0, tile: 'off' }, { i: 6, j: 1, tile: 'on' }, { i: 6, j: 2, tile: 'on' }, { i: 6, j: 3, tile: 'off' }, { i: 6, j: 4, tile: 'on' }, { i: 6, j: 5, tile: 'off' }, { i: 6, j: 6, tile: 'on' }, { i: 6, j: 7, tile: 'off' }, { i: 6, j: 8, tile: 'off' }, { i: 6, j: 9, tile: 'on' },
        { i: 7, j: 0, tile: 'on' }, { i: 7, j: 1, tile: 'off' }, { i: 7, j: 2, tile: 'on' }, { i: 7, j: 3, tile: 'off' }, { i: 7, j: 4, tile: 'on' }, { i: 7, j: 5, tile: 'on' }, { i: 7, j: 6, tile: 'off' }, { i: 7, j: 7, tile: 'on' }, { i: 7, j: 8, tile: 'on' }, { i: 7, j: 9, tile: 'on' },
        { i: 8, j: 0, tile: 'off' }, { i: 8, j: 1, tile: 'on' }, { i: 8, j: 2, tile: 'off' }, { i: 8, j: 3, tile: 'on' }, { i: 8, j: 4, tile: 'off' }, { i: 8, j: 5, tile: 'on' }, { i: 8, j: 6, tile: 'off' }, { i: 8, j: 7, tile: 'on' }, { i: 8, j: 8, tile: 'off' }, { i: 8, j: 9, tile: 'on' },
        { i: 9, j: 0, tile: 'on' }, { i: 9, j: 1, tile: 'off' }, { i: 9, j: 2, tile: 'on' }, { i: 9, j: 3, tile: 'on' }, { i: 9, j: 4, tile: 'off' }, { i: 9, j: 5, tile: 'on' }, { i: 9, j: 6, tile: 'off' }, { i: 9, j: 7, tile: 'off' }, { i: 9, j: 8, tile: 'on' }, { i: 9, j: 9, tile: 'on' },
    ],
};