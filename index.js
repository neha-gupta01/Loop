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
while (i <= n) {
  let row = "";
  let j = 1;
  while (j <= i) {
    row += j;
    j++;
  }
  whilePattern += row + "\n";
  i++;
}
document.getElementById("whilePattern").textContent = whilePattern;

//do-while loop
let doWhilePattern = "";
i = 1;
do {
  let row = "";
  let j = 1;
  do {
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

//While loop
let whilePattern2 = "";
i = n;
while (i >= 1) {
  let row = "";
  let j = 1;
  while (j <= i) {
    row += i;
    j++;
  }
  whilePattern2 += row + "\n";
  i--;
}
document.getElementById("whilePattern2").textContent = whilePattern2;

//do-while loop
let doWhilePattern2 = "";
i = n;
do {
  let row = "";
  let j = 1;
  do {
    row += i;
    j++;
  } while (j <= i);
  doWhilePattern2 += row + "\n";
  i--;
} while (i >= 1);
document.getElementById("doWhilePattern2").textContent = doWhilePattern2;

//Pattern 3
//For loop
let forPattern3 = "";
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "*";
  }
  forPattern3 += row + "\n";
  //console.log(row);
  document.getElementById("forPattern3").textContent = forPattern3;
}

//While loop
let whilePattern3 = "";
i = 1;
while (i <= n) {
  let row = "";
  let j = 1;
  while (j <= n - i) {
    row += " ";
    j++;
  }
  let k = 1;
  while (k <= i) {
    row += "*";
    k++;
  }
  whilePattern3 += row + "\n";
  i++;
}
document.getElementById("whilePattern3").textContent = whilePattern3;

//do-while loop
let doWhilePattern3 = "";
i = 1;
do {
  let row = "";
  let j = 1;
  do {
    row += " ";
    j++;
  } while (j <= n - i + 1);
  let k = 1;
  do {
    row += "*";
    k++;
  } while (k <= i);
  doWhilePattern3 += row + "\n";
  i++;
} while (i <= n);
document.getElementById("doWhilePattern3").textContent = doWhilePattern3;

//Pattern 4
//For loop
let forPattern4 = "";
let currentChar = "A";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    forPattern4 += " ";
  }
  for (let k = 1; k <= n - i + 1; k++) {
    forPattern4 += currentChar;
    currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
  }
  forPattern4 += "\n";
  document.getElementById("forPattern4").textContent = forPattern4;
}

//While loop
let whilePattern4 = "";
i = 1;
currentChar = "A";
while (i <= n) {
  let j = 1;
  while (j <= i) {
    whilePattern4 += " ";
    j++;
  }
  let k = 1;
  while (k <= n - i + 1) {
    whilePattern4 += currentChar;
    currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
    k++;
  }
  whilePattern4 += "\n";
  i++;
}
document.getElementById("whilePattern4").textContent = whilePattern4;

//do-while loop
let doWhilePattern4 = "";
i = 1;
currentChar = "A";
do {
  let j = 1;
  do {
    doWhilePattern4 += " ";
    j++;
  } while (j <= i);
  let k = 1;
  do {
    doWhilePattern4 += currentChar;
    currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
    k++;
  } while (k <= n - i + 1);
  doWhilePattern4 += "\n";
  i++;
} while (i <= n);
document.getElementById("doWhilePattern4").textContent = doWhilePattern4;
