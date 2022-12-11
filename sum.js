function sum(n) {
    // 回傳 1+2+3+4+...+n 的結果
<<<<<<< HEAD
    let sum=0
    for(let i=1; i<=n; i++){
      sum+=i;
    }
    return sum
=======
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
>>>>>>> 055a06db02fe6758fd8ccf1b76792556c093c5ad
  }
  
  console.log(sum(1)); // 1
  console.log(sum(2)); // 3
  console.log(sum(3)); // 6
  console.log(sum(10)); // 55