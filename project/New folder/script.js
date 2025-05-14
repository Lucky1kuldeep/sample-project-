// let userName = "hiteshchoudary";
// let user2 = userName ;
// user2 = "hitesh@gmail.com";
// console.log(userName);
// console.log(user2);
// here you can see the data cannot be changed during the run time because he uses the stack (primtive data types) here comes the only copy that can be changable 



// let user = {
//     email: "johna@email.com",
//     upi : "john@ybl"
// }
// but here the data cannot be changed during the run time because here the data stored in the heap (non primitive datatype ) here comes the original refrence that why here the changes means disturbance in the original vlalue
// let usertwo = user ;
// usertwo.email = "johny@gmail.com";
// console.log(user.email); 
// console.log(usertwo.email);      



// const name = new String("JorawerSingh");

// console.log(name[1]); //gives the array value
// console.log(name.__proto__);     //object 
// console.log(name.length);  // it throughs the string length
// console.log(name.toUpperCase());  // it converts the string into upppercase 

// const anotherName = "jhoda bai"
// in the normal string declaration the index from the 1

// but the another type of the declaration the index start from 0
// console.log(name.charAt(2));
// console.log(anotherName.charAt(2));

// to find the index of the string 

// console.log(name.indexOf('r'));


// here is the basic concept of the string slicing

// const newString = name.substring(0,5);
// here you see the index starts from the zero but the last index cannot be taken inside the string
// here you cannot starts with the negative value

// console.log(newString);


// but  slice method we can now use the negative value

// const latestString =  name.slice(-8,4);
// console.log(latestString);
// console.log(latestString);

// const newStringone = "       johana roy     "
// console.log(newStringone);
// console.log(newStringone.trim());



// const url = "http://johana.com/johana%20roy" ;
// this method is use in the url encoding
// console.log(url.replace('%20','-'));


// const num = 100 ;
// const num2 = new Number(100);
// console.log(num);
// console.log(num2);

