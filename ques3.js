const vowel = ['a','e','i','o','u'];

checkVowel = (string) =>{
    let count = 0;

    for(let character of string.toLowerCase()){
        if(vowel.includes(character)){
            count++;
            console.log(character)

          
        }
    }

    return count;
    
}
    

res = checkVowel("My Name is Manjil Karmacharya");
console.log(res);
