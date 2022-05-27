//________________________BASIC OPERATORS_________________________
//aritemetik operatorler 4 islemlerdir.//

/*let currentYear=2022;
let age=currentYear-1976;
console.log("age: ", age)

let a=3;
let b=8;
let total= a+b;
let totalValue=5+8;
console.log(total, totalValue)//bu sekilde de toplayabiliriz.

let c= 60*5;
console.log(c)

let y= 80/16;
console.log(y)

let exponent= 2**3; // 2 üzeri 3 demek.
console.log(exponent)
let mod= 10/3; //mod demek kalani bulmak icin kullanilir.
console.log(mod)


// _____________INCREMENT ve DECREMENT  ARTIRMA VE AZALMA_________________________
// -- demek 1 azalt demektir.
//++ demek 1 artir demektir.

let ab= 3;
let xy= --ab; // bu satirda ab=2 cunku 1 azaliyor.
console.log(ab,xy) //xy de dolayisiyla 2 degerini aliyor.

let abc=3;

let xyz= abc-- // ilk önce xyz degerini atiyor. bu xyz yi 3 yapiyor. sonraki satira azaltarak geciyor. cünkü abc-- oldugu icin. --abc olsaydi 3ten 1 azalacakti. xyz bastan 2 olacakti.

console.log(xyz, abc)

let dec= 5;
let assg=++dec // bir artirdi. böylece ikside 6 oldu.
console.log(dec, assg)


let dec2= 5;
let assg2=--dec2 // bir azaltti. böylece ikside 4 oldu.
console.log(dec2, assg2)


let dec3= 5;
let assg3=dec3++ // ilk önce atayip sonra 1 artir demektir.
console.log(assg3, dec3)



//STIRCT CONCETANATION STRICT BIRLESTIRME

const firstName= "Jeff";
const surName= "Bezos";

console.log(firstName + " " +surName)// ad ve soyad arasinda bosluk birakmak icin tirnak acip  + ile devam etmek gerekiyor.

*/
//ASSIGNMENT OPERATOR bir degiskene bir deger atama

let val=true;

let x = 2;

x= x+5;
console.log("x= " +x)

x +=5
console.log("x= "+x)

let y=10;

y /=2;
console.log("y= " +y)

y*= 4

console.log("y = " +y)

x +=y
console.log("x", x) //x:12 idi y:20di toplam 32 oldu.


//COMPARISON OPERATORS

// < , >, >= <=

let ageAhmet=50;
let ageUtku=28;
console.log(ageAhmet>ageUtku) //true cevabini aldik. This gives boolean value.
console.log(ageAhmet<ageUtku) //cevabimiz false.

console.log(ageAhmet==50) // ahmetin yasi 50ye esit mi sorusunu iki esittir ile yapiyoruz.cevabimiz true
console.log(ageUtku !=28) //utkunun yasi 28 e esit degildir demek. != isareti esit degildir anlamina geliyor. cevap false.

console.log("1", ageAhmet =="50")// burada number sorgulaniyor. cevaqp true buna loose comparison deniyor.
console.log("2", ageAhmet ==="50") //burada cevap false, cunku sadece number sorgulanmiyor. sayisal veri artik string oldu. iki tirnak icinde. buna strict comparison deniyor.
console.log("2", ageAhmet !=="50") //string 50 ye esit degil mi  cevap true, evet degil demek.

// developer.mozilla.org ta sayisal verilerin üstünlügü ve özellikleri var tablo halinde.


//TEMPLATE LITERAL

let firstName= "Jeff";
let secondName="Bezoss";
let work="Amazon"

let sentence= "He is " + firstName + " " + secondName + " and He is founder of " + work + ".";
console.log(sentence)
//kisaca söyle yazariz. yukaridaki uzun yöntem

let betterSentece= `He is ${firstName} ${secondName}, and He is founder of ${work}.` //dolar ve güzel parantez icine alarak kisaltmis oluyoruz.
console.log(betterSentece)

console.log("I want to write this \n\
on new line") // satir asagi kayarsa kaymadan önce bu ne harfi ile müdahale ediyoruz.
console.log (`I want to write this
 on new line`) // bu daha kolayi tek tirnak ile tüm cümleyi icine alabiliyoruz.

 //___________________CONDITIONALS___________________________


 const currentAge=15 

 if (currentAge >= 18){
   console.log( "You can drive legally.")
 } //eger parantezin icindeki durum dogruysa if blokunun icindeki kodu calistir.
 else{ // if curentage < 18 
    console.log("You are not allowed to drive.")
 } // eger 18 den büyük yada esit degilse yani 18den kücükse arab ayi kullanamazsin.

 //Example kendime
 const currentPreis=5.93
 if (currentPreis>= 5.94){

    console.log ("Sise hissesini al.")
 } else {
     console.log ("Sise hissesini alma.")
 }

 const birthYear=2001;

 if(birthYear >= 2000){
 var generation ="Z"
} else if(birthYear<2000){
    var generation ="y"
}
console.log("gen", generation)

//let ve const actiginmiz güzel parantez icinde gecerlidir o blokta islem yapar. ve algilar. ama VAR öyle degil. console.log burada güzel parantezin disinda oldugu icin blok disinda let ve const ise yaramazz.

const birthYears = 1995;
let age;

 if(birthYears >= 2000){
    age ="Z"
} else if(birthYears < 2000){
    age ="y"
}


console.log("gen", age)
// yukaridaki bir önceki örnekte let icerideydi simdi disariya cikardigimiz icin global oldu artik. eger yeniden bir düzenleme yapilacak olursa csste oldugu gibi yeni bir DIV actigimiz gibi burada da function icine hepsini alabiliriz.


//CONTROL FLOW bu yapi ile kontrol mekanizmasi kurulmus oluyor. 

/*if(){

}else 


*/