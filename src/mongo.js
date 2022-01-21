const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Moa' });
// kitty.save().then(() => console.log('meow'));

const schema = new mongoose.Schema({ id:'Number' ,
name: 'string', price: 'string', imageLocation: 'string',
 quantity: 'Number'});
const Cake = mongoose.model('Cakes', schema);
mongoose.connect('mongodb://localhost:27017/Cakes');


let cake = new Cake({ id:1, name:"Banana cake", price:15,
 imageLocation : "images/Banana_Cake.jpeg", quantity: 50 });
cake.save()

 cake = new Cake({ id:2, name:"Shmarim cake", price:15,
 imageLocation : "images/Shmarim_Cake.jpeg", quantity: 50 });
cake.save()

 cake = new Cake({ id:3, name:"Shmarim cake", price:15,
 imageLocation : "images/Shmarim_Cake(2).jpeg", quantity: 50 });
cake.save()

cake = new Cake({ id:4, name:"Strawberry cake", price:15,
 imageLocation : "images/Strawberry_Cake.jpeg", quantity: 50 });
cake.save()

cake = new Cake({ id:5, name:"Honey Moon cake", price:15,
 imageLocation : "images/Honey_Moon_Cake.jpeg", quantity: 50 });
cake.save()

cake = new Cake({ id:6, name:"E latter cake", price:15,
 imageLocation : "images/E_Letter_Cake.jpeg", quantity: 50 });
cake.save()

cake = new Cake({ id:7, name:"A latter cake", price:15,
 imageLocation : "images/A_Letter_Cake.jpeg", quantity: 50 });
cake.save()

cake = new Cake({ id:8, name:"O latter cake", price:15,
 imageLocation : "images/O_Letter_Cake.jpeg", quantity: 50 });
cake.save()
