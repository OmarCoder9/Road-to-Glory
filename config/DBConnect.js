const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/RoadToGlory"; 

const DBconnect = () => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Server Started"))
    .catch((e) => {
      console.log(e);
    });
};
module.exports = DBconnect;