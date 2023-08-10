/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let longestSubstring = "";
    let isEven = false;

    if (s.length == 1) {
        return s;
    }

    if (s.length == 2) { 
        if (s[0] == s[1]) {
            return s;
        }
        else {
            return s[0];
        }
    }

    if (s.length % 2 == 0) {
        isEven = true;
        let leftHalf = s.slice(0, s.length / 2);
        let rightHalf = s.slice(s.length / 2, s.length);
        s = leftHalf + "." + rightHalf;
    }

    for (let i = 1; i < s.length - 1 ; i++) {
        let substring = "";
        let j = 1;

        

        while (i - j != -1 && i + j != s.length) {
            
            if (s[i - j] == s[i + j]) {

                if (substring.length == 0) {
                    if (s[i] != ".") {
                        substring = s[i];
                    }
                }
                
                substring = s[i - j] + substring + s[i + j];
            }

            j++;
        }


        if (substring.length > longestSubstring.length) {
            longestSubstring = substring;
        }
        
    }

    return longestSubstring;
};
