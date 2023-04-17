const container = document.getElementById("box-container");

for (i = 1 ; i <= 15 ; i++ ){
    
    let numero = i;
    
    if((numero % 3) == 0){
        numero = "Fizz";
    }

    if((numero % 5) == 0){
        numero += "Buzz";
    }

    if(((numero % 3) == 0) && ((numero % 5) == 0)){
        numero = "FizzBuzz";
    }

    console.log(numero);

}
