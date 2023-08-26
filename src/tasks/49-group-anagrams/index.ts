function groupAnagrams(strs: string[]): string[][] {
    let res: Map<string, string[]> = new Map();

    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split("").sort().join("");
        const keyInMap = res.get(sorted);

        if(keyInMap) {
            res.set(sorted, [...keyInMap, strs[i]]);
        } else {
            res.set(sorted, [strs[i]]);
        }
    }

    return [...res.values()]
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]
