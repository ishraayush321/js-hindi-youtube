const accountId = 144553
let accountEmail = "ayush@google.com"
var accountPassword = "12345"
accountCity = "Jsr"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//accountId=2 // not allowed
accountEmail="hc@hc.com"
accountPassword="23566"
accountCity="Jaipur"
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);

