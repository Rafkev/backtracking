function isSafe(board, row, col, n) {
    // Check the current column on this row
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) {
            return false;
        }
    }

    // Check upper diagonal on left side
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) {
            return false;
        }
    }

    // Check upper diagonal on right side
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 1) {
            return false;
        }
    }

    return true;
}

function solveNQueensUtil(board, row, n, solutions) {
    // Base case: If all queens are placed, push solution to result
    if (row === n) {
        const solution = [];
        for (let i = 0; i < n; i++) {
            solution.push(board[i].join(' '));
        }
        solutions.push(solution);
        return;
    }

    // Try placing this queen in all columns one by one
    for (let i = 0; i < n; i++) {
        if (isSafe(board, row, i, n)) {
            board[row][i] = 1;
            solveNQueensUtil(board, row + 1, n, solutions);
            board[row][i] = 0; // Backtrack
        }
    }
}

function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill(0));
    const solutions = [];
    solveNQueensUtil(board, 0, n, solutions);
    return solutions;
}

// Example usage
const n = 4;
const solutions = solveNQueens(n);
console.log(`Total solutions for ${n}-Queens problem: ${solutions.length}`);
solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach(row => console.log(row));
    console.log();
});
