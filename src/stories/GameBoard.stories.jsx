import GameBoard from '../components/GameBoard/GameBoard';

export default {
    title: 'Game/GameBoard',
    component: GameBoard,
    tags: ['autodocs'],
    argTypes: {
        boardSize: {
            control: { type: 'number', min: 3, max: 5 },
            description: 'Розмір ігрового поля (3x3, 4x4, 5x5)',
        },
        onTileClick: {
            action: 'tile clicked',
            description: 'Функція, що викликається при кліку на плитку',
        },
    },
};

// 3x3 Board
export const Board3x3 = {
    args: {
        boardSize: 3,
        tiles: [1, 2, 3, 4, 5, 6, 7, 8, null],
    }
};

// 4x4 Board
export const Board4x4 = {
    args: {
        boardSize: 4,
        tiles: [
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, null
        ],
    }
};

// Shuffled Board
export const ShuffledBoard = {
    args: {
        boardSize: 4,
        tiles: [
            5, 1, 3, 4,
            2, 7, 8, 6,
            9, 10, 12, 11,
            13, 15, 14, null
        ],
    }
};