function add(n1: number, n2:number, showResult: boolean , phrase: string){

    if(showResult){
        console.log(phrase + n1+n2);
    }else{ 
        return n1 + n2;
    }
   

}
let number1 : number;
number1 = 5 ;
const number2 = 5.8 ;
const printResult = true;
const resultPhrase = 'Result is : ';



 add(number1, number2, printResult, resultPhrase);

 //const person: {
   // name: string;
    //age: number;
 //} = {
  //name: 'Maximilain',
  //age: 30
 //};
 //console.log(person.name)


 const person : {
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string];
 } = {
  name: 'Maximilain',
  age: 30,
  hobbies: [ 'Sports', 'Cooking'] ,
  role: [2, 'author']
 };

 person.role.push('admin');
 //person.role[1]=10;

 let favoriteActitivities: string[];
 favoriteActitivities = ['sports'];
 console.log(person.name);
  
 for (const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase());
  }