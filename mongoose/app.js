  const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Pineapple",
  rating: 7,
  review: "Pretty solid as a fruit!",
});

fruit.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit.",
// });

// const orange = new Fruit({
//   name: "orange",
//   score: 4,
//   review: "Too sour for me.",
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture.",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// Fruit.updateOne(
//   { _id: "61e2176097400f43fa761bcb" },
//   { review: "good fruit" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesfully updated the document");
//     }
//   }
// );

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Tran Dai Nien",
//   age: 18,
// });

//person.save();

// Fruit.deleteMany({ name: "Pineapple" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all Pineapple");
//   }
// });
