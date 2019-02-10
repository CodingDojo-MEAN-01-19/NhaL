const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals',{
    useNewUrlParser: true,
});

mongoose.connection.on('connected', ()=> console.log('Mongo Connected'))

//const Schema = mongoose.Schema;
const {Schema} = mongoose;

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true, 
        minlength: [3, 'must be 3 or more characters'],
    }, 
    legs: {
        type: Number,
        required: [true, 'legs is required'],
        min: [0, 'you must have more than that'],
    },
    species: String, 
    isPet: Boolean,
});

const Animal = mongoose.model('Animal',AnimalSchema);

const animal = new Animal({
    name: 'zazu',
    legs: 2, 
    species: 'bird',
    isPet: true

});

animal.save()
    .then(savedAnimal => {
        console.log('saved', savedAnimal);
    })
    .catch(error => {
        const errors = Object.keys(error.errors).map(key=> error.errors[key].message);
        
        
        //const keys = Object.keys(error.errors)
        /*for ( let index =0; index< keys.length; index++){
            console.log(keys[index]);
            console.log(error.errors[keys[index]].message);

            errors.push(error.errors[keys[index]].message);
        }*/
        console.log(errors);
    });

    Animal.findById('5c5f2a17c9b70571484cfcce')
        .then(animal =>{
            console.log('animal', animal);
            animal.name = 'Harv';
            return animal.save()
                .then(saved=> console.log(saved))
        })
        .catch (error => console.log(error));