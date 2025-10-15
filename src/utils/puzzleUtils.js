// Перевірка, чи можна розв'язати головоломку (для 4x4)
// Розв'язність залежить від кількості інверсій та положення порожньої клітинки.
const isSolvable = (board) => {
    let inversions = 0;
    const flatBoard = board.filter(n => n !== 16); // 16 - порожня клітинка

    for (let i = 0; i < flatBoard.length; i++) {
        for (let j = i + 1; j < flatBoard.length; j++) {
            if (flatBoard[i] > flatBoard[j]) {
                inversions++;
            }
        }
    }

    const blankIndex = board.indexOf(16);
    const blankRowFromBottom = 4 - Math.floor(blankIndex / 4);

    // Для 4x4:
    // Розв'язна, якщо (інверсії + ряд порожньої клітинки від низу) парне
    return (inversions + blankRowFromBottom) % 2 === 0;
};

// Створення перемішаної, але розв'язної дошки 4x4
const createShuffledBoard = () => {
    const finalState = Array.from({ length: 16 }, (_, i) => i + 1);
    let shuffledBoard;

    do {
        // Простий алгоритм Fisher-Yates shuffle
        shuffledBoard = [...finalState].sort(() => Math.random() - 0.5);
    } while (!isSolvable(shuffledBoard)); // Перемішуємо, доки не отримаємо розв'язну дошку

    return shuffledBoard;
};

// Фінальний (виграшний) стан
const FINAL_STATE = Array.from({ length: 16 }, (_, i) => i + 1);

export { createShuffledBoard, FINAL_STATE };