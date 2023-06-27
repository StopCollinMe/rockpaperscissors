function isPalindrome(palindrome){
    let text = palindrome;
    let textMinus = text.split(' ').join('');
    let flip = Array.from(text.toLowerCase().split(' ').join(''));
    let reverse = flip.reverse().join('');
    console.log(textMinus);
    console.log(reverse);

    return textMinus === reverse ? true: false;
}
console.log(isPalindrome('doggod'));