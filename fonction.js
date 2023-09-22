// JavaScript source code
"use strict"

let a = "jean";//variable a
let b = "Paul"//variable b
let result=checkName(a,b)//variable result

function checkName(name1, name2) {//decclare la function checkName pour verifier si ils sont identique
    if (name1 === name2) {
        return true
    } else {
        return false
    }
}
console.log(result);//console log affiche le result