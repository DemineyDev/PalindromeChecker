function palindrome(str) {
    
    var userArray = str.split("");
    var reversedArray = userArray.reverse();
    var reversedString = reversedArray.join("");
    
    if (str.replace(/[\W_]/g, "").toLowerCase() === reversedString.replace(/[\W_]/g, "").toLowerCase()) {
      return true;
    } else {
        return false;
    }

    
    }

    palindrome("eye");
    palindrome("not a palindrome");
    palindrome("1 eye for of 1 eye.");






