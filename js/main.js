const container = document.getElementById("box-container");

for (i = 1 ; i <= 100 ; i++ ){
    
    let numero = i;
    let coloreBackground;
    
    if(((numero % 3) == 0) && ((numero % 5) == 0)){
        numero = "FizzBuzz";
        coloreBackground = "bg-danger";
    }else if((numero % 5) == 0){
        numero = "Buzz";
        coloreBackground = "bg-warning";
    }else if((numero % 3) == 0){
        numero = "Fizz";
        coloreBackground = "bg-success";
    }

    console.log(numero);

    const NuovaBox = document.createElement("div");
    NuovaBox.append(numero);
    NuovaBox.className = `box ${coloreBackground}`;
    container.append(NuovaBox);
}
