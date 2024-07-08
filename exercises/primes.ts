export const twinPrime = (n: number) => {
  let resultArr: number[][] = [];
  let tempArr: number[] = [];

  const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  if (n < 5) {
    return 0;
  }
  if (n >= 5) resultArr.push([3, 5]);
  for (let i = 5; i <= n - 2; i++) {
    if (isPrime(i) && isPrime(i + 2)) {
      resultArr.push([i, i + 2]);
    }
  }
  console.log(resultArr);
  return resultArr.length;
};

// Example usage:
twinPrime(20); // Output: [[5, 7], [11, 13], [17, 19]]

twinPrime(-25);
twinPrime(0);
twinPrime(1);
twinPrime(2);
twinPrime(10);
twinPrime(11);
twinPrime(12);
twinPrime(15);
twinPrime(25);
