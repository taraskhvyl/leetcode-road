function containsDuplicate(nums: number[]): boolean {
    const map1 = new Set<number>(nums);

    return map1.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));