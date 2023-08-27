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

// Solution 2
function productExceptSelf2(nums: number[]): number[] {
    let multiple = 1;
    let result = new Array(nums.length);

    for (let i = 0; i < nums.length; i ++) {
        result[i] = multiple;
        multiple *= nums[i];
    }

    multiple = 1;

    for (let i = nums.length - 1; i >= 0; i -= 1) {
        result[i] *= multiple;
        multiple *= nums[i];
    }

    return result;
}


console.log(productExceptSelf2([1,2,3,4]));
console.log(productExceptSelf2([-1,1,0,-3,3]));
console.log(productExceptSelf2([0,4,0]));
