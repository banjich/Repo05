function main() {
    var firstName = "Bezos";
    var thirdToLastLetterOfLastName = firstName[firstName.length -3];
    return thirdToLastLetterOfLastName;
    
    }

console.log(main());
module.exports = main;