let ascendingOrder;
let descendingOrder;


let celebrities = [{ fname: 'John', lname:'Cena' , age: 40 },
    { fname: 'Ana', lname:'Marie', age:36},
    { fname: 'Zayn', lname:'Malik', age: 33 },];


     ascendingOrder = [...celebrities].sort((a,b)=>a.age-b.age);
     descendingOrder = [...celebrities].sort((a,b)=>b.age-a.age);


    celebrities.forEach((e)=>{
        console.log(`Ascending Order is: ${e.fname} , ${e.lname}, ${e.age}`, ascendingOrder );
        console.log(`descending Order is: ${e.fname} , ${e.lname}, ${e.age}`, descendingOrder );

    });

    
