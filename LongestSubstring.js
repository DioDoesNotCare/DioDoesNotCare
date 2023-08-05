function longestSubstring(s) {
    const set = new Set();

    let leftPointer = 0;
    let rightPointer = 0;
    let highestLength = 0;

    while (rightPointer != s.length) {
        if (!set.has(s[rightPointer])) {
            set.add(s[rightPointer]);
            rightPointer++;
            if (set.size > highestLength) {
                highestLength = set.size;
            }
        }
        else {
            set.delete(s[leftPointer]);
            leftPointer++;
        }
    }

    console.log(highestLength);

}


longestSubstring("abccabazx");