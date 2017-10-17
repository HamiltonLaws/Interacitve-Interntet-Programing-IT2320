var Main = {};

Main.Cast = function(firstName, lastName, age, part)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Age = age;
	this.Part = part;
}
Main.Cast.prototype.GetFullName = function()
{
	return this.FirstName + " " + this.LastName;
}
Main.Cast.prototype.GetPart = function()
{
	return " " + this.Part + " " ;
}
Main.Hermione = new Main.Cast("Emma","Watson" , 27 , "Hermione");
Main.Harry = new Main.Cast("Daniel","Radcliffe" ,28  ,"Harry");
Main.Ron = new Main.Cast("Rupert" ,"Grint" , 29 ,"Ron");
Main.Draco = new Main.Cast("Tom","Felton" , 30 ,"Draco");
Main.Hagrid = new Main.Cast("Robbie","Coltrane" , 67 ,"Hagrid");
Main.Neville = new Main.Cast("Matthew" ,"Lewis" , 28 ,"Neville");
Main.Ginny = new Main.Cast("Bonnie","Wright" , 26 ,"Ginny");
Main.McGonagall = new Main.Cast("Maggie" , "Smith", 82 , "McGonagall");
Main.Dudley = new Main.Cast("Harry" ,"Melling" , 28 ,"Dudley" );
Main.Cast.prototype.GetAge = function()
{
		return " " + this.Age;
}

document.body.innerHTML = Main.Hermione.GetFullName();
document.body.innerHTML += Main.Hermione.GetPart();
document.body.innerHTML += Main.Hermione.GetAge();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Harry.GetFullName();
document.body.innerHTML += Main.Harry.GetPart();
document.body.innerHTML += Main.Harry.GetAge();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Ron.GetFullName();
document.body.innerHTML += Main.Ron.GetPart();
document.body.innerHTML += Main.Ron.GetAge();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Draco.GetFullName();
document.body.innerHTML += Main.Draco.GetPart();
document.body.innerHTML += Main.Draco.GetAge();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Hagrid.GetFullName();
document.body.innerHTML += Main.Hagrid.GetPart();
document.body.innerHTML += Main.Hagrid.GetAge();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Neville.GetFullName();
document.body.innerHTML += Main.Neville.GetPart();
document.body.innerHTML += Main.Neville. GetAge();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Ginny.GetFullName();
document.body.innerHTML += Main.Ginny.GetPart();
document.body.innerHTML += Main.Ginny.GetAge();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.McGonagall.GetFullName();
document.body.innerHTML += Main.McGonagall.GetPart();
document.body.innerHTML += Main.McGonagall.GetAge();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Dudley.GetFullName();
document.body.innerHTML += Main.Dudley.GetPart();
document.body.innerHTML += Main.Dudley.GetAge();
