export const twinPrime = (n: number) => {
  let resultArr: number[][] = [];
  let tempArr: number[] = [];
  if (n === 1 || n === 2 || n <= 0) return 0;
  if (n > 2) {
    for (let i = 5; i * i <= n; i = i + 6) {
      if (tempArr.length == 2) {
        resultArr.push(tempArr);
        tempArr = [];
      }
      if (!(n % i == 0 || n % (i + 2) == 0) && tempArr.length > 2) {
        tempArr.push(i);
      }
    }
    console.log(resultArr);
  }
};

twinPrime(-25);
twinPrime(0);
twinPrime(1);
twinPrime(2);
twinPrime(10);
twinPrime(11);
