let num; //number  veri
let name = "sena"; //string veri


num = 123;

//Opoerators

/*
Aritmatik operatorler
+ 
-
 *
/ 
= 
==
=== 
%
++
--
*/

//Toplama İşlemi

var x = 5;
x += 6;
console.log(x);

//Çıkarma İşlemi

var y = 3;
y = y - 1;
console.log(y); 


//Çarpma İşlemi
var z = 3;
z *= 2;
console.log(z);

// = Atama 
// == eşittir
// === eşitlik kontrol edilir (veri tipi ve değer bakımında

var x = 5;
var y = 5;

//==

// if (x == y){
//     alert("x ve  y eşittir");
// }else{
//     alert ("x ve y eşit değildir");
// }

// ===

var a = 5; //number
var b = "50"; //string

// if (a === b){
//     alert("a ve  b eşittir");
// }else{
//     alert("a ve  b eşit değildir");
// }

//Modülüs
var year = 2024;
var kalan = year % 5;
console.log(kalan);

//Incerment

var c = 4;
console.log(++c);
console.log(++c);
console.log(c++);
console.log(c);

//Primatıve Data Tipleri

/*
Number
String
Boolen
Undefined
Null
*/

var name1 = 'Sena';
console.log(typeof name1 + " " + name1);

var age = 3;
console.log(typeof age + " " + age);

var isStudent = false;
console.log(typeof isStudent + " " + isStudent);

var sample;
console.log(typeof sample + " " + sample);

var sampleNull= null;
console.log(sampleNull);



/*var 
let 
const*/

var ageVar = 30;
var ageVar = 40;

console.log(ageVar);

let ageLet = 25;
// let ageLet = 45;

console.log(ageLet);


const API_KEY = 3.14;
console.log(API_KEY)


//Fonksiyon 

// function fonksiyonAdı(parametre){
//     yapılması istenilen işlem
// }

V1 = 80;
t1 = 4;
x1 = V1 + t1;
console.log(x1);

V2 = 65;
t2 = 6;
x2 = V2 + t2;
console.log(x2);

function find (t , v){
    var x = t + v;
    return x;
}

var toplama = find(3, 15);
console.log(toplama);

var toplama2 = find(5, 15);
console.log(toplama2);

var toplama3 = find(3, 5);
console.log(toplama3);

document.write("hello world!");
