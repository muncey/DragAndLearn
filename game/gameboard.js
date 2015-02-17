var GameBoard = (function () {

    // PRIVATE VARIABLES
    var _canvasName = "";
    var _clientWidth = 0;
    var _clientHeight = 0;
    var _cells = [];
    var _boundRect = null;
    var _rows = 0;
    var _cols = 0;

    // Initialises the game board
    var _init = function (canvasName) {
        _canvasName = canvasName;

        var ctx = getContext();
        _clientHeight = ctx.canvas.clientHeight;
        _clientWidth = ctx.canvas.clientWidth;
    };

    // UTILITY FUNCTIONS
    var getContext = function () {
        return document.getElementById(_canvasName).getContext("2d");
    };

    var clearCanvas = function () {
        clearCanvas2(getContext());
    };

    var clearCanvas2 = function (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    };

    var drawTile = function (tileName, x, y, w, h) {
        drawTile(tileName, x, y, w, h, getContext());
    };

    var drawTile2 = function (tileName, x, y, w, h, ctx) {
        ctx.drawImage(document.getElementById(tileName), x, y, w, h);
    };

    var _setBoundRect = function (left, top, right, bottom) {
        _boundRect = new BoundRect(left, top, right, bottom);
    };

    // Creates a new Game board
    var _createBoard = function (boardTemplate, template) {
        _cells = [];
        for (var idx = 0; idx < boardTemplate.data.length; idx++) {

            // direct copy of the board template onto the cells
            _cells.push({
                i: boardTemplate.data[idx].i,
                j: boardTemplate.data[idx].j,
                tileName: (template) ? ((boardTemplate.data[idx].tile == 'on') ? 'maroon_tile' : 'white_tile') : 'white_tile',
            })

        }
        _rows = boardTemplate.rows;
        _cols = boardTemplate.cols;
        _render();
    };

    var _setCellName = function (i, j, tileName) {

        for (var idx = 0; idx < _cells.length; idx++) {
            if (_cells[idx].i == i && _cells[idx].j == j) {
                _cells[idx].tileName = tileName;
                return;
            }
        }


    };


    // Renders the Game board
    var _render = function () {
        var ctx = getContext();

        for (var i = 0; i < _cells.length; i++) {
            var offsetx = (_cells[i].j * TILE_WIDTH) + 2;
            var offsety = (_cells[i].i * TILE_WIDTH) + 2;

            drawTile2(_cells[i].tileName, _boundRect.left + offsetx, _boundRect.top + offsety, TILE_WIDTH - 4, TILE_WIDTH - 4, ctx);
        }
    };

    // Returns the Cell information for the x,y coordinates
    var _getTileAtPos = function (x, y) {

        var canvasLeft = parseInt(getContext().canvas.style.left.replace('px', ''));
        var canvasTop = parseInt(getContext().canvas.style.top.replace('px', ''));

        // calculate the x and y coordinates as an offset to the bounding rectangle
        var offsetx = x - _boundRect.left - canvasLeft;
        var offsety = y - _boundRect.top - canvasTop;


        var potentialI = (Math.floor(offsety / TILE_WIDTH) * _cols);
        var potentialJ = Math.floor(offsetx / TILE_WIDTH);

        var idx = potentialI + potentialJ;
        return _cells[idx];
    };

    // Returns true if a mouse click is inside the bounding rectangle for the board
    var _isClickInBounds = function (x, y) {

        var canvasLeft = parseInt(getContext().canvas.style.left.replace('px', ''));
        var canvasTop = parseInt(getContext().canvas.style.top.replace('px', ''));

        return (x >= canvasLeft + _boundRect.left && x <= canvasLeft + _boundRect.right &&
                y >= canvasTop + _boundRect.top && y <= canvasTop + _boundRect.bottom);
    };



    // PUBLIC API
    return {
        init: _init,
        setBoundRect: _setBoundRect,
        createBoard: _createBoard,
        render: _render,
        getTileAtPos: _getTileAtPos,
        isClickInBounds: _isClickInBounds,
        setCellName: _setCellName,
    }
});