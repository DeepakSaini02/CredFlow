// Given a matrix of m x n elements, where m is the number of rows and n is the
// number of columns.Write a program to return all elements of the matrix in spiral
// order.


function spiralTraverse(m, n, mat) {
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;
    let ans = []
    let size = m * n
    while (ans.length < size) {
        for (let i = top; i <= bottom && ans.length < size; i++)
            ans.push(mat[i][left])
        left++

        for (let i = left; i <= right && ans.length < size; i++)
            ans.push(mat[bottom][i])
        bottom--

        for (let i = bottom; i >= top && ans.length < size; i--)
            ans.push(mat[i][right])
        right--

        for (let i = right; i >= left && ans.length < size; i--)
            ans.push(mat[top][i])
        top++
    }

    // console.log(ans);
    return ans
}
// m = 3;
// n = 1
// mat = [
//     [1],
//     [2],
//     [3]

// ]


spiralTraverse(m, n, mat)