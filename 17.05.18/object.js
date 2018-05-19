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
		if(isFinite(+this.balance)){
			this.balance = balance;
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




  }, {});   // Как сделать объектом класса уже не придумала
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

 this.addAll = function (usersArray) {
    this.users.concat(usersArray);
  };

   this.clear = function () {
     this.users = users.splice(0,arr.length);
  };

  this.findBy = function (propertyName, propertyValue) {

  	var resultArray = this.users.reduce(function (result, keyValueString) {


  for(var this.propertyName in keyValueString){
  if(keyValueString[this.propertyName] === this.propertyValue){
   return keyValueString;
}
}
 
   }

  };

 this.sortBy = function (propertyName, order) {

 	if(order === 'asc'){
 	var SortAscUsers = this.users.sort(function (oneUser, twoUser){
     return oneUser.propertyName - twoUser.propertyName; 
}

return SortAscUsers;

 	}

 	
 var SortDescUsers = this.users.sort(function (oneUser, twoUser){
     return twoUser.propertyName - oneUser.propertyName; 
}
 		return SortDescUsers;


  };


}




console.log(objOne);
