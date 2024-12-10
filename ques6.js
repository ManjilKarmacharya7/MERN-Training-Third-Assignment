Func = array =>{
    let sum = 0;
    let product = 1;


    for (let i =0; i<array.length;i++){
        sum += array[i];
        product*=array[i];
    }

    console.log("Sum of the array is: ", sum);
    console.log("Product of the array is: ", product);

}

Func([1,2,3,4,5,6]);