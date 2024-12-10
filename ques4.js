upperCase = string =>{
    let output = string.split(" ").map(str =>{
        return str[0].toUpperCase()+str.slice(1)
    }).join(" ");
    console.log(output);
}

upperCase("my name is manjil")

