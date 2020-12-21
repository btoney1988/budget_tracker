let mongoose = require("mongoose");
let db = require("../models");

const dbConfig = process.env.MONGODB_URI;

mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

let TransactionSeed = [
  {
    date: "2020-02-07T23:58:28.518Z",
    name:"Phone",
    value: 40 
  },
  {
    date: "2020-02-08T00:03:46.539Z",
    name:"Car",
    value: 200 
  }
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(TransactionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });