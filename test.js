function testValue(num1, num2) {
    num1++;
    num2++;
}
function showValue() {
    let a = 1;
    let b = 2;
    testValue(a, b);
    console.log(a, b);
}

showValue()