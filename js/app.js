export default function earnMoney(){
    return "Earn money by learning high demand skills";
};

export const growMoney = () => {
    return "Grow money by infesting!"
};

export const giveMoney = () => {
    return "Give money for education free world!"
};

// In this code snippet, we mentioned export in inline in the beginning  of every function itself. We can either do like that or we can even export the functions seperately below the code as shown below. Out of which any one function must be mentioned as export default and all the other should be exported inside curly Braces.  

// export default earnMoney;
// export {
//     growMoney, giveMoney
// };