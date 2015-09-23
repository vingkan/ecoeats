function Meal(snapshot){
	this.name = snapshot.name;
	this.id = snapshot.id;
	this.chef = snapshot.chef;
	this.img = snapshot.img;
	this.price = snapshot.price;
	this.capacity = snapshot.capacity;
}

Meal.prototype.toString = function(){
	return this.name + " by " + this.chef + " for " + this.capacity + " people at " + money(this.price) + " each.";
}

function money(value){
	return "$" + value.toFixed(2);
}