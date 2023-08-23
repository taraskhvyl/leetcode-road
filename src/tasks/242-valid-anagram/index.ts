function isAnagram(s: string, t: string): boolean {
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const count = map1.get(char) || 0;
        map1.set(char, count + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        const count = map2.get(char) || 0;
        map2.set(char, count + 1);
    }

    if (map1.size !== map2.size) {
        return false;
    }

    // @ts-ignore
    for (const [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"));