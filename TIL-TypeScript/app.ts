function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //     throw new Error('Incorrect input!');
  //   }

  const result = n1 + n2;
  if (showResult) {
    // String과 number를 조합하였기 때문에 버그가 발생.
    //  console.log(phrase + n1 + n2); // Result is : 52.8

    console.log(phrase + result); // Result is : 7.8
  } else {
    return result;
  }
}
// 타입스크립트에서는 아래의 5와 5.0의 값이 동일하게 인식된다.
const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase, resultPhrase);
