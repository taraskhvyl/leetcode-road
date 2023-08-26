function topKFrequent(nums: number[], k: number): number[] {
    let map: Map<number, number> = new Map();
    let res: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const valueIfExist = map.get(nums[i]);

        if (valueIfExist) {
            map.set(nums[i], valueIfExist + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        res.push(sortedMap[i][0]);
    }

    return res;
}

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));
