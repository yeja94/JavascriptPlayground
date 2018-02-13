/*
var name = prompt("What is your name?");
var dateofbirth = prompt("What is your age?");

alert("Hello " + name + "You are " + dateofbirth + "years old");

if ( dateofbirth > 30){
	alert("You are old af");
}else{
	alert("You are still young");
}
*/

function Person(name, age, gender, interests) {
		
		
		this.name = {
			first : prompt("Enter your first name: "),
			last : 'Ye'
		};
		
		this.age = age;
		this.gender = gender;	
		this.interests = interests;
		
		var pronoun;
		var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
		
		//using conditional (if-else) statement:
		this.bio = function() {
			
			if(this.gender == 'male'){
				pronoun = 'He likes ';
			}
			else if(this.gender == 'female'){
				pronoun = 'She likes ';
			}
			else{
				pronoun = 'They like ';
			}
			
			// add the pronoun string on to the end of the main string 
			string += pronoun;
			
			//this loop relates to the string interests[] based on the number of elmts inside of it.
			for(var i = 0; i < this.interests.length; i++){
				if(i === this.interests.length - 1){
					string += ' and ' + this.interests[i] + '.';
				}else{
					string += this.interests[i] + ',';
				}
			}
			
			alert(string);
		};		
	}

var person1 = new Person(name, 23, 'classicfy', ['music', 'tennis', 'gaming']);





