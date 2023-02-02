function sumOfArray(number){
    let sum =0;
    for(let i=0 ;i<number.length ;i++){
        const index = i;
        const element = number[index];
        sum = sum + element ;
        console.log(index,element,sum);
    }
    return sum;
}
const myNumber = [3,8,45,78,3,8,8,0,2,8];
sumOfArray(myNumber);