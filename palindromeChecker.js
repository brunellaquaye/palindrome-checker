/*Implement a function that takes a string as input and returns true if it is a palindrome, and false otherwise*/

//let initialString = "example "
function palindrome(initialString){
    //this regular global expression will remove all non-alphanumeric characters including "-"
    let regex = /[\W_]/g;
    //this splits the initialString into an array, to be easily reversed
    initialString = initialString.replace(regex,'').split("");
   const reverseStringArray = initialString.reverse();
   //array containing the reversed string is converted to a string using the join method
   const reverseString = reverseStringArray.join("");
   console.log(reverseString)
   //use a global regular expression in the replace function to replace all instances of "," in the initialString with nothing(removes the ",")
   initialString = initialString.toString().replace(/,/g, "");
   console.log(initialString)


   if (initialString === reverseString){
    console.log("This is a palindrome");
   }else{
    console.log("this is not a palindrome");
   }
}
const newWord = palindrome("eye");
