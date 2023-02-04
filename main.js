// factorial 
const factorial= (num) =>{
    var factVal = 1;
    var i;
    for (let i = 1; i <= num; i++) {
        factVal = factVal * i;
    }
    return factVal;
}
const factorialData = () => {
    var fact = document.getElementById('factinput').value;
    console.log(fact);
    if(fact === ''){
        document.getElementById('fact').innerHTML = "Pls! Enter a valid input";
        document.getElementById('fact').className = ' fs-2 p-3 mb-2 bg-danger text-white'
    }
    else{
        document.getElementById('fact').innerHTML = factorial(fact);
        document.getElementById('fact').className = 'fs-2 p-2 my-2 bg-success text-white'

    }
    
}

// pallindrome

const pallindrome = (string) =>{
    let len = string.length;
    for(let i = 0; i<len/2; i++){
        if(string[i] != string[len - 1- i]){
            return 'Not Pallindrome';
        }
    }
    return 'Yes Given string is Pallindrome';
}
pallindrome("kain");
const pallindromeData = () =>{
    var pallindromeInputData = document.getElementById('pallindromeinput').value;
    if(pallindromeInputData === ''){
        document.getElementById('pallindromeResult').innerHTML = "Enter a valid string!";
        document.getElementById('pallindromeResult').className = ' fs-2 p-3 mb-2 bg-danger text-white'
        
    }
    else{
        document.getElementById('pallindromeResult').innerHTML = pallindrome(pallindromeInputData);
        document.getElementById('pallindromeResult').className = 'fs-2 p-2 my-2 bg-success text-white'

    }
}

// vowel or not 

const checkVowel = (string) =>{
    if(string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u'){
        return 'Yes! Its a vowel';
    }
    if(string == 'A' || string == 'E' || string == 'I' || string == 'O' || string == 'U'){
        return 'Yes! Its a vowel';
    }
    return 'No! Its not a vowel';
}

const vowelData = () =>{
    var vowelInputData = document.getElementById('vowelInput').value;
    if(vowelInputData === ''){
        document.getElementById('vowelResult').innerHTML = "Enter a valid data !";
        document.getElementById('vowelResult').className = 'fs-2 p-3 mb-2 bg-danger text-white'
    }
    else{
        document.getElementById('vowelResult').innerHTML = checkVowel(vowelInputData);
        document.getElementById('vowelResult').className = 'fs-2 p-2 my-2 bg-success text-white'
    }
}

// power 

const power = (n) =>{
    // var temp = n;
    if(n == 0){
        return 1;
    }
    return 2 * power(n-1);
}
const powerData = () =>{
    var powerData = document.getElementById('powerInput').value;
    if(powerData === ''){
        document.getElementById('powerResult').innerHTML = "Enter a valid data !";
        document.getElementById('powerResult').className = 'fs-2 p-3 mb-2 bg-danger text-white'
    }
    else{
        document.getElementById('powerResult').innerHTML = power(powerData);
        document.getElementById('powerResult').className = 'fs-2 p-2 my-2 bg-success text-white'
    }
}

// armstrong
const armstrong = (n) =>{
    var temp,rem,count = 0,sum = 0,ch = n;
    
    temp = n;
    while(parseInt(n) > 0){
        rem = n % 10;
        count++;
        n = parseInt(n / 10);
    }
    while(temp > 0){
        rem = temp % 10;
        sum = sum + Math.pow(rem, count);
        temp = parseInt(temp / 10);
    }
    if(sum == ch){
        return `${ch} is armStrong`;
    }
    else{
        return `${ch} is Not armStrong`;
    }
    
}
// console.log(armstrong(153));

const armStrongData = () => {
    var armstronValueData = document.getElementById('armStrongInput').value;
    console.log(armstronValueData);
    if(armstronValueData === ''){
        document.getElementById('armStrongResult').innerHTML = "Enter a valid data !";
        document.getElementById('armStrongResult').className = 'fs-2 p-3 mb-2 bg-danger text-white'
    }
    else{
        document.getElementById('armStrongResult').innerHTML = armstrong(armstronValueData);
        document.getElementById('armStrongResult').className = 'fs-2 p-2 my-2 bg-success text-white'
    }
}

// triangle

const triangle = (n) => {
    let string = ""; 
    for(let i = 0; i<n; i++){
        for(let j = 0; j<=i; j++){
            string += "*";
        }
        string += "\n";
    }
    return string;
}
const triangleData = () => {
    var triangleDataValue = document.getElementById('triangleInput').value;
    // console.log(armstronValueData);
    if(triangleDataValue === ''){
        document.getElementById('triangleResult').innerHTML = "Enter a valid data !";
        document.getElementById('triangleResult').className = 'fs-2 p-3 mb-2 bg-danger text-white'
    }
    else{
        document.getElementById('triangleResult').innerHTML = triangle(triangleDataValue);
        document.getElementById('triangleResult').className = 'fs-2 p-2 my-2 bg-success text-white'
    }
}

// convert upper case and lower case 

// const upperCase = (s) =>{
    
//     return `${s}`
//     console.log(s);
// }
// let str = 'a';
// upperCase(str);

// const upperCaseData = (s) =>{

// }