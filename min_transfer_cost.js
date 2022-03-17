/*
Question: https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/minimise-cost-89b54cb9/
*/


// function Solve(k, arr) {
//     // Write code here
//     let transArr = Array(arr.length).fill(0);
//     let newarr = [...arr];
    
//     newarr.forEach((item, ind) => {
//         if(item > 0){
//             for(let i=ind-k; i<=ind+k; i++){
//                 if(i!==ind && newarr[i] && newarr[i]<0){
//                     let diff=newarr[ind]> (-newarr[i]) ? -newarr[i] : newarr[ind];
//                     newarr[ind]-=diff;
//                     newarr[i]+=diff;
//                     transArr[ind]-=diff;
//                     transArr[i]+=diff;
//                 }
//             }
//         }
//     })
//     let sum = 0;
//     arr.forEach((item, i) => {
//         sum+=Math.abs(item+transArr[i])
//     })
//     return sum.toString()
// }

/* Second solution by dividing +ve and -ve numbers */
function Solve(k, arr){
    let pNums = [];
    let nNums = [];
    arr.forEach((n, i) => {
        if(n>=0){
            pNums[i] = n;
        }else{
            nNums[i] = n;
        }
    });
    let transArr = Array(arr.length).fill(0);
    Object.entries(pNums).forEach(([key, val]) => {
        // let nKeys = Object.keys(nNums);
        for(let i=key-k; i<=key+k && i!==key; i++){
            if(val && nNums[i]){
                let diff = val > -nNums[i] ? -nNums[i] : val;
                val-=diff;
                pNums[key]-=diff;
                nNums[i]+=diff;
                transArr[key]-=diff;
                transArr[i]+=diff;
            }
        }
    })
    let sum = 0;
    arr.forEach((item, i) => {
        sum+=Math.abs(item+transArr[i])
    })
    return sum.toString()
}

Solve(2, [1, 2, 3, -3, -2, -1])