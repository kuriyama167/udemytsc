

 //const person: {
   // name: string;
    //age: number;
 //} = {
  //name: 'Maximilain',
  //age: 30
 //};
 //console.log(person.name)


 //const person : {
   // name:string;
 //   age:number;
 //   hobbies:string[];
 //   role:[number, string];
 //} = {
  //name: 'Maximilain',
 // age: 30,
  //hobbies: [ 'Sports', 'Cooking'] ,
  //role: [2, 'author']
 //};


 //const ADMIN = 0;
 
 //const READ_ONLY = 1;
 
 //const AUTHOR = 2;

 enum Role {ADMIN, READ_ONLY, AUTHOR};
 const person = {
    name: 'clara',
    age: 22,
    hobbies: ['Sports', "Cooking"],
    role: Role.ADMIN
 };

 //person.role.push('admin');
 //person.role[1]=10;

 let favoriteActitivities: string[];
 favoriteActitivities = ['sports'];
 
 console.log(person.name);
  
 for (const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase());
   // console.log(hobby.localeCompare());//!!!ERROR!!!
  }
   
  if (person.role === Role.AUTHOR){
    console.log('is Authore');

  }