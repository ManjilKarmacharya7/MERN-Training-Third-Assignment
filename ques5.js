let ascendingOrder;
let descendingOrder;

sortFunc = num =>{
    ascendingOrder = [...num].sort((a,b)=>a-b);
    descendingOrder = [...num].sort((a,b)=>b-a);
}

sortFunc([1,2,4,8,5,20])
console.log("Asending Order: ", ascendingOrder );
console.log("Desending Order: ", descendingOrder);