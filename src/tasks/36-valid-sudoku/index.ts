function isValidSudoku(board: string[][]): boolean {
    let colsMap: string[][] = new Array(9);
    let blockMap: string[][] = new Array(9);

    // check rows
    for (let [index, row] of board.entries()) {
        if(!isArrayValid(row, index)) {
            return false;
        }
    }

    // check cols
    for (let col of colsMap) {
        if(!isArrayValid(col)) {
            return false;
        }
    }

    // check blocks
    for (let block of blockMap) {
        if(!isArrayValid(block)) {
            return false;
        }
    }

    function isArrayValid(row: string[], colIndex: number | null = null): boolean
    {
        let mapObj = new Map();

        for (let [index, item] of row.entries()) {
            if(colIndex !== null) {
                colsMap[index] = colsMap[index] ? [...colsMap[index], item] : [item];

                const blockIndex = Math.floor(index / 3) + Math.floor(colIndex / 3) * 3;

                blockMap[blockIndex] = blockMap[blockIndex] ? [...blockMap[blockIndex], item] : [item];
            }

            if(item !== '.') {
                if(mapObj.get(item)) {
                    return false;
                } else {
                    mapObj.set(item, 1)
                }
            }
        }

        return true;
    }


    return true;
}

console.log(isValidSudoku(
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
));
