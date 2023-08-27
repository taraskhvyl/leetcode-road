function productExceptSelf(nums: number[]): number[] {
    let tempNum = 0;
    let response = [];
    let zeroPresent = false;

    for (const num of nums) {
        if(num !== 0) {
            tempNum = tempNum ? tempNum * num : num;
        }

        if(zeroPresent && num === 0) {
            tempNum = 0;
            break;
        }

        if(num === 0 ) zeroPresent = true;
    }

    for (const num of nums) {
       if(tempNum === 0) {
           response.push(0);
       } else if (zeroPresent) {
           if(num === 0) {
               response.push(tempNum);
           } else {
               response.push(0);
           }
       } else {
           response.push(tempNum / num);
       }
    }

    return response;
}


console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([0,4,0]));
