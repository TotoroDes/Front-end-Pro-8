var User = function(firstName, lastName, email, balance){
this.firstName = firstName;
this.lastName = lastName;
this.email = email;
this.balance = balance;
this.isValid = function(){
var isvalid = true;
    if(this.firstName.trim().length === 0 || this.lastName.trim().length === 0){
        isvalid = false;
    }
    if(!isFinite(+this.balance)){
        isvalid = false;
      
    }
    if(this.email.indexOf('@') === -1 || this.email.trim().length === 0){
        isvalid = false;
       
    }
return isvalid;
  };

  this.valueOf = function(balance){
    if(isFinite(Number(this.balance))){
      return (Number(this.balance));
    }

  };
}


/*
var userString = 'firstName=John, email=example@gmail.com, balance=300; firstName=Test, lastName=Test, email=admin@gmail.com, balance=1000';
var regA = /=/g;
var userString = userString.replace(regA,":");
var userArray = userString.trim().split(';');
var oneUser = userArray[0].split(',');
var oneUser2 = userArray[1].split(',');
var newUs = [];
var newUs2 = [];
var regB = /"/g;
var str = oneUser2.join(',');
for(var i = 0; i<oneUser.length; i++){
  var res = oneUser[i].split(":", oneUser.length);
  newUs.push(res[1].replace(regB,""));
}
for(var i = 0; i<oneUser2.length; i++){
  var res2 = oneUser2[i].split(":", oneUser.length);
  newUs2.push(res2[1].replace(regB,""));
}
var obg = new User('user','user','eser@user',300);
*/

var str = 'firstName=John, email=example@gmail.com, balance=300; firstName=Test, lastName=Test, email=admin@gmail.com, balance=1000';



var objOne = str.split(';').map(function(userAtrributesString){
  return userAtrributesString.split(',').reduce(function (result, keyValueString) {

var keyAndValue = keyValueString.split('=');

 result[keyAndValue[0].trim()] = keyAndValue[1].trim();

  return result;


  }, new User);   // Как сделать валидным объектом класса еще не придумала и не успела подумать((
});




// Тут пошла жесть, не пугайтесь сильно))

var UserCollection = function(){

  
  this.users = [];

  this.add = function (payload) {
    this.users.push(payload);
  };

  this.remove = function (payload) {
    for(var i=0; i<this.users.length; i++){
      if(JSON.stringify(this.users[i]) === JSON.stringify(payload)){ 
        this.users.splice(i,1); 
      }
        }
  };

 this.addAll = function (newUsersArray) { // не арбайтен, хотя вроде 2 массива
    this.users.concat(newUsersArray);
  };

   this.clear = function () {
//     this.users = this.users.splice(0,this.users.length); не арбайтен

this.users = [];
  };

  this.findBy = function (propertyName, propertyValue) {

    
     var resultArray = this.users.reduce(function (result, keyValueString) {

  for(propertyName in keyValueString){
  if(keyValueString[propertyName] === propertyValue){
   result.push(keyValueString);
}
}
 return result;
  
   }, []);
return resultArray;
   };

 this.sortBy = function (propertyName, order) {

  if(order === 'asc'){
 /* var SortAscUsers = this.users.sort(function (oneUser, twoUser){
     return oneUser.propertyName - twoUser.propertyName; 
});
*/
  
  }

    if(order === 'desc'){

 var SortDescUsers = this.users.sort(function (oneUser, twoUser){
     return twoUser.propertyName - oneUser.propertyName; 
});
  };
  }

};

var user2 = {
balance:'300',
email:"example@gmail.com",
firstName:"John",
lastName:"Die"

}

var user3 = {
balance:'200',
email:"example@gmail.com",
firstName:"John",
lastName:"Die"
}


 userCollection = new UserCollection(objOne);

userCollection.add(user2);
userCollection.add(user3);
userCollection.addAll(objOne); // не арбайтен, хотя вроде два массива 

userCollection.sortBy('balance','asc'); //не арбайтен вообще вот такой исфинит не арбайтен
/*
this.valueOf = function(){
    if(isFinite(Number(this.attributes.balance))){
      return Number(this.attributes.balance);
    };

    */

// userCollection.remove(user3);
//userCollection.clear(user3);

console.log(userCollection);
console.log(userCollection.findBy('balance','200'));  
console.log(objOne);
