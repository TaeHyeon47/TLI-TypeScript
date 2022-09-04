function add(n1, n2, showResult, phrase) {
    //   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    //   }
    if (showResult) {
        console.log(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
// 타입스크립트에서는 아래의 5와 5.0의 값이 동일하게 인식된다.
var number1 = 5; // 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is:';
add(number1, number2, printResult, resultPhrase, resultPhrase);
