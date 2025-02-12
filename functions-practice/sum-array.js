function sumArray(arrNum) {
    for (let i = 0, sum = 0; i < arrNum.length; sum += arrNum[i++]); return sum;
}
