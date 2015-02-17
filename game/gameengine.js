var GameEngine = function () {

    var _canvasName = "";
    var _isDragging = false;
    var _draggedCell = false;
    var _boards = new Array();
    var _templateBoard = "";
    var _levelScore = 0;
    var _totalScore = 0;
    var _gameScore = 0;
    var _currentLevel = "";
    var _playerName = "";

    // UTILITY FUNCTIONS

    var _getContext = function () {
        return document.getElementById(_canvasName).getContext("2d");
    };

    var _clearCanvas = function () {
        _clearCanvas2(_getContext());
    };

    var _clearCanvas2 = function (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    };

    var _getGameDetails = function () {
        return {
            LevelScore: _levelScore,
            GameScore: _gameScore,
            TotalScore: _totalScore,
            CurrentLevel: _currentLevel,
            PlayerName: _playerName,
        };
    }

    var _setPlayerName = function (playerName) {
        _playerName = playerName;
    }
    var _resetGameScore = function () {
        _gameScore = 0;
    }

    // Initialises the board
    var _init = function (canvasName) {
        _canvasName = canvasName;
        for (var i = 0; i < 2; i++) {
            var boardName = BOARD_NAMES[i];
            _boards[boardName] = new GameBoard();
            _boards[boardName].init(canvasName);
        }
    };

    var _assignEvents = function () {
        // assign events for the canvas
        document.getElementById(_canvasName).addEventListener('mouseup', _handleMouseUp, false);
        document.getElementById(_canvasName).addEventListener('mousemove', _handleMouseMove, false);
        document.getElementById(_canvasName).addEventListener('mousedown', _handleMouseDown, false);
    }


    // Create the game boards based on the rows and columns
    var _createBoard = function (boardTemplate, templateBoardName) {
        // work out the board size based on the rows and columns
        var boardWidth = Math.floor(boardTemplate.rows * TILE_WIDTH);
        var boardHeight = Math.floor(boardTemplate.cols * TILE_WIDTH);

        // also determine the size of the canvas as 2 x the expected row width divided by 80%
        // (each board takes up 40% of the canvas)
        var canvasWidth = Math.floor((boardWidth * 2) / .8);
        var canvasHeight = Math.floor(boardHeight + 20);
        var ctx = _getContext();
        ctx.canvas.style.position = "fixed";

        // work out the position for the canvas
        var canvasLeft = Math.floor((window.innerWidth - canvasWidth) / 2);

        ctx.canvas.style.left = canvasLeft + "px";
        ctx.canvas.style.top = "10px";

        ctx.canvas.width = canvasWidth;
        ctx.canvas.height = canvasHeight;

        // setup the 2 game boards, left and right
        for (var i = 0; i < BOARD_NAMES.length; i++) {
            var boardName = BOARD_NAMES[i];
            var template = (templateBoardName == boardName);
            // create the board boundaries
            var boardLeft = ((boardName == 'left') ? 10 : canvasWidth - boardWidth - 10);
            var boardTop = 10;
            var boardRight = (boardName == 'left') ? (10 + boardWidth) : canvasWidth - 10;
            var boardBottom = 10 + boardHeight;

            _boards[boardName].setBoundRect(boardLeft, boardTop, boardRight, boardBottom);
            _boards[boardName].createBoard(boardTemplate, template);

        }

        _levelScore = 0;
        _totalScore = boardTemplate.cellsOnCount;
        _currentLevel = ((templateBoardName == 'left') ? "Board: " : "Reversed: ") + boardTemplate.rows + "x" + boardTemplate.cols;
        _templateBoard = templateBoardName;
        _render();

        _assignEvents();

        // trigger events
        $(_getContext().canvas).parent().find('#' + _canvasName).trigger('changeDetail');
    };

    // Renders the board
    var _render = function () {
        for (var i = 0; i < BOARD_NAMES.length; i++) {
            var boardName = BOARD_NAMES[i];
            _boards[boardName].render();
        }
    };


    // Handles the mouse down event
    var _handleMouseDown = function (e) {
        console.log("mouse down", e);

        if (!_boards[_templateBoard].isClickInBounds(e.x, e.y)) {
            return;
        }

        // run if the click is inside the template board
        var cell = _boards[_templateBoard].getTileAtPos(e.x, e.y);
        if (cell) {
            _isDragging = true;
            _draggedCell = cell;
        }
    };
    // Handles the mouse move event
    var _handleMouseMove = function (e) {

        if (_isDragging) {
            console.log("mouse move", e);

            _clearCanvas();

            _render();



            var ctx = _getContext();
            var canvasLeft = parseInt(ctx.canvas.style.left.replace('px', ''));
            var canvasTop = parseInt(ctx.canvas.style.top.replace('px', ''));

            var x = (e.x - ((TILE_WIDTH / 2) - 2)) - canvasLeft;
            var y = (e.y - ((TILE_WIDTH / 2) - 2)) - canvasTop;
            var w = TILE_WIDTH - 4;
            var h = TILE_WIDTH - 4;
            // ctx.drawImage(document.getElementById('maroon_tile'), x, y, w, h);
            ctx.drawImage(document.getElementById('maroon_tile'), x, y, w, h);
            console.log("drew tile at:", new BoundRect(x, y, x + w, y + h));
        }
    }
    var _handleMouseUp = function (e) {

        console.log("mouse up", e);
        if (!_isDragging) {
            return;
        }

        _clearCanvas();
        var activeBoard = (_templateBoard == 'left') ? 'right' : 'left';
        if (_boards[activeBoard].isClickInBounds(e.x, e.y)) {
            var activeCell = _boards[activeBoard].getTileAtPos(e.x, e.y);
            if (activeCell.tileName == 'white_tile' && activeCell.i == _draggedCell.i && activeCell.j == _draggedCell.j) {
                _boards[activeBoard].setCellName(activeCell.i, activeCell.j, 'maroon_tile');
                _levelScore++;
                _gameScore++;
                // trigger events
                $(_getContext().canvas).parent().find('#' + _canvasName).trigger('changeDetail');
            }
        }
        _render();
        _isDragging = false;
        _draggedCell = false;

    }

    return {
        init: _init,
        createBoard: _createBoard,
        getGameDetails: _getGameDetails,
        setPlayerName: _setPlayerName,
        resetGameScore: _resetGameScore,
    }
}

var gameEngine = new GameEngine();