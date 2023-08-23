function containsDuplicate(nums: number[]): boolean {
    const map1 = new Set<number>(nums);

    return map1.size !== nums.length;
}
