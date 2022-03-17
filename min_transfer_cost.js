/*
Question: https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/minimise-cost-89b54cb9/
*/


function Solve(k, arr) {
    // Write code here
    let transArr = Array(arr.length).fill(0);
    let newarr = [...arr]
    newarr.forEach((item, ind) => {
        if(item > 0){
            for(let i=ind-k; i<=ind+k; i++){
                if(i!==ind && newarr[i] && newarr[i]<0){
                    let diff=newarr[ind]> (-newarr[i]) ? -newarr[i] : newarr[ind];
                    newarr[ind]-=diff;
                    newarr[i]+=diff;
                    transArr[ind]-=diff;
                    transArr[i]+=diff;
                }
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