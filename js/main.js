//"Module" Topic: 

// If we are about to use many js files in a single project, then we should export every other js file and then we should import all those file in the main js file. Then we can be able to access every js fil inside the main js file itself.(This file explains only about exporting and importing functions. Will discuss about class exporting and importing in the next repository file)


import earnMoney from "./app.js";
import { growMoney as grow, giveMoney } from "./app.js";
//In the above import line(line 7), we are changing the name of the function "growmoney" as "grow". Now we have to use the word "grow" to call that function. This will be used in places where a big projet is being created by many developers and if any of them uses same name for two different functions then we can use this method to change the name of any functuion to avoid error.

console.log(earnMoney());
console.log(grow());
console.log(giveMoney());

// import * as aji from "./app.js"; (This line is to import everyting from that page in a single line by keeping a common name "aji" to them)

// For the 14th line import method we have to call and console the functions by the below mentioned method. For this 14th line import method, we should not mention default key for any function in the other js file.

// console.log(aji.earnMoney());
// console.log(aji.growMoney());
// console.log(aji.giveMoney());
