function reverseWords(sentence) {
    // remove leading trailing and multiple spaces
    sentence = sentence.trim().replace(/ +/g, '');
    // We need to convert input strings
    // to lists of characters as strings are immutable in JS
    sentence = [...sentence];
    let strLength = sentence.length;

    // We will first reverse the entire string
    sentence = strRev(sentence, 0, strLength - 1);

    // Now all the words are in desired location , but
    // in reverse order: "Hello World" -> "dlroW olleH".
    let start = 0,
        end = 0;

    // Now let's iterate the reversed string and reverse each word in place.
    // "dlroW olleH" -> "Hello World"
    while(start < strLength) {
        // find the end index of the word
        while(end < strLength && sentence[end] !== " ")
            end += 1;

            // let's call our helper function to reverse the word in place
            strRev(sentence, start, end - 1);
            start = end + 1;
            end += 1;
    }
    return sentence.join("");
}

// a function that reverses a whole sentence character by character
function strRev(str, startRev, endRev) {
    // Starting from the two ends of the list, and moving
    // in towards the center of the string, swap the characters
    while(startRev < endRev) {
        let temp = str[startRev]; // temp to store for swapping
        str[startRev] = str[endRev - 1]; // swap step 1
        str[endRev] = temp; // swap step 2
        startRev += 1; // move forward towards the middle
        endRev -= 1; // move backwards towards the middle
    }
    return str;
}