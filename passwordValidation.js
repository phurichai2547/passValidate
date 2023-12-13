function passwordValidation(password) {
    const specialChar = '@#$%^&*!'
    if (!password || password.length < 8) {
        return false;
    }
    let checkUpper = false;
    let checkLower = false;
    let checkDigit = false;
    let checkSP = false;
    for (const char of password) {
        if (specialChar.includes(char)) checkSP = true;
        else if (char >= 'A' && char <= 'Z') checkUpper = true;
        else if (char >= 'a' && char <= 'z') checkLower = true;
        else if (char >= '0' && char <= '9') checkDigit = true;
    }
    return checkDigit && checkLower && checkUpper && checkSP
}

module.exports = passwordValidation

