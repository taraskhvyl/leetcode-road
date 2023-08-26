// The first solution [O(n2)]
function twoSum(nums: number[], target: number): number[] {
    let n = 0;
    let res: number[] = [];

    while (n < nums.length) {
        for (let i = n + 1; i < nums.length; i++) {
            if((nums[n] + nums[i]) === target) {
                res = [n, i];
            }
        }

        n++;
    }

    return res;
}

// The second solution [O(n)]
function twoSum2(nums: number[], target: number): number[] {
    let n = 0;
    let res: Map<number, number> = new Map();

    while (n < nums.length) {
        if(res.get(target - nums[n]) !== undefined) {
            return [res.get(target - nums[n]) as number, n];
        }

        res.set(nums[n], n);

        n++;
    }

    return [0, 0];
}


console.log(twoSum2([2,7,11,15], 9))
console.log(twoSum2([3,2,4], 6))
console.log(twoSum2([3,3], 6))