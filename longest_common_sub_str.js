/*
    find longest common substring from two strings by removing 1 or more characters.
*/

function main() {
  let s1 = "RETICENTRAHUL";
  let s2 = "YADAV";
  l1 = s1.length;
  l2 = s2.length;
  let result = findLCS(s1, s2, l1, l2);
  console.log(result);
}

function findLCS(X, Y, i, j) {
  if (i === 0 || j === 0) {
    return 0;
  } else if (X[i-1] === Y[j-1]) {
    return 1 + findLCS(X, Y, i - 1, j - 1);
  } else {
    return Math.max(findLCS(X, Y, i - 1, j), findLCS(X, Y, i, j - 1));
  }
}

main();
