//Döngüler While For Do-While


var x = 1;

while (x < 10){
    console.log(x);
    x++;
}

var y = 1;

do {
    console.log(y);
    y++;
}while(y < 10);


for (var z = 1; z < 10; z++){
    if ( z == 5 ){
        break;
    }
    console.log(z);
}

const numbers = [1, 2, 3, 4, 5, 6, 7,8,9, 10];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}
console.log(`Çift Sayılar: ${evenNumbers}`);


const text = "Javascript son ders";
let charCount = 0;

for (let i = 0; i < text.length; i++){
    if(text[i] !== ' '){
        charCount++;
    } 
}

console.log(`Toplam Karakter Sayısı: ${charCount}`);

// Dizi Tanımlama

let bosArray = [];

let fruits = ["Elma", "Muz", "Portakal"];

let  mixxedArray = [ "Ali", 42, true];

let  rakamlar = [0,12,12];

let sebze = ["havuç", "Patates", "havuç", "Patates"];

// sebze.pop();
// sebze.shift();

// console.log(sebze);

// sebze.push("Soğan");
// sebze.unshift("Salatalık");


console.log(sebze);


let numbers1 = [4,5,6,1,2,3,];
console.log(numbers1.indexOf(3));
numbers1.sort();
console.log(numbers1);

let words = ["ayşe", "arda", "sena"];
words.sort();
console.log(words);

numbers1.splice(2, 1, "üç");
console.log(numbers1);


//!Objects

let person = {
    firstName:"john",
    lastName:"Doe",
    age: 30,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName);
console.log(person['lastName']);
console.log(person.lastName);


person.city = 'New york';
person.age = 32 ;

console.log(person.city);
console.log(person.age);

console.log(person.fullName());

let car = {
    marka: 'Volvo',
    model: ' xc90',
    yil: 2022,
    renk: 'Beyaz',
    yakitTuru: 'Benzin',
    hiz:0,
    calisyorMu: false,


calistir: function(){
    if(!this.calisyorMu){
        this.calisyorMu = true;
        console.log(`${this.marka} ${this.model} Çalıştırıldı`);
    }else{
        console.log(`${this.marka} ${this.model} Çalışmadığı için hızlanamaz.`);
    }
},
hizlan: function(kacKmHiz){
    if(this.calisyorMu){
        this.hiz += kacKmHiz;
        console.log(`${this.marka} ${this.model} hızı ${kacKmHiz}KM Saat Arttırıldı yeni Hız: ${this.hiz} km/sa `)
    }else{
        console.log(`${this.marka} ${this.model} Çalışmadığı için hızlanamaz.`);
    }
},
durdur: function() {
    if(this.calisyorMu && this.hiz > 0){
        this.hiz = 0;
        console.log(`${this.marka} ${this.model} Durduruldu.`)
    }else if( !this.calisyorMu){
        console.log(`${this.marka} ${this.model} Zaten durdurulmuş durumda.`)
    }else{
        console.log(`${this.marka} ${this.model} Zaten hareket etmiyor.`)
    }
}
};

car.calistir();

car.hizlan(100);

car.durdur();