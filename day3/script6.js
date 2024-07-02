var email = "ahmed@live.com"
var reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gim;
var result = reg.test(email);
console.log(result);

var password = "Hell^&ow*&orld1234";
var rg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
var pass = rg.test(password);
console.log(pass);


var phone = "(1234) 567-8910";
var phonereg = /\(\d{4}\)\s\d{3}-\d{4}/;
var verify = phonereg.test(phone);
console.log(verify)

