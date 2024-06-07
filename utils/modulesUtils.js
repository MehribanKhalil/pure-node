//Fibonacci
export function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let temp = 1;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return temp;
}

//Palindrome
export function palindrome(n) {
    let res = n.split("").reverse().join("");
    return res === n;
}


//export export default 