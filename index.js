let n = 5; // height of the pattern

       //For loop
let forPattern = "";
       for (let i = 1; i <= n; i++) {
           let row = "";
           for (let j = 1; j<=i; j++){
           row += j;
       }
       forPattern += row + "\n"
       //console.log(row);
    document.getElementById("forPattern").textContent = forPattern;
    }