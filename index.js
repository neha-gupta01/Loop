let n = 5; // height of the pattern
//Pattern 1
//For loop
let forPattern = "";
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  forPattern += row + "\n";
  //console.log(row);
  document.getElementById("forPattern").textContent = forPattern;
}

//While loop
let whilePattern = "";
let i = 1;
while(i <= n){
  let row = "";
  let j = 1;
  while (j <= i){
      row += j;
      j++
  }
  whilePattern += row + "\n";
  i++;
}
document.getElementById("whilePattern").textContent = whilePattern;

//do-while loop
let doWhilePattern = "";
 i = 1;
do{
    let row = "";
    let j = 1;
    do{
        row += j;
        j++;
    } while (j <= i);
    doWhilePattern += row + "\n";
    i++;
} while (i <= n);
document.getElementById("doWhilePattern").textContent = doWhilePattern;

//Pattern 2
//For loop
let forPattern2 = "";
for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  forPattern2 += row + "\n";
  //console.log(row);
  document.getElementById("forPattern2").textContent = forPattern2;
}