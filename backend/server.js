const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 5000;





mongoose.connect("mongodb+srv://jarryullah46:Ordinary123@cluster0.acgqgbv.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
  console.log("db connection succesfully");
})
.catch((error) => {
  console.log(error);
});
//user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  }
);

const User = mongoose.model("User", userSchema);
// create user
app.post("/createuser", async (req, res) => {
  try {
    const bodyData = req.body;
    const user = new User(bodyData);
    const userData = await user.save();
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
});
app.get("/",  (req, res) => {
   
    res.send("from get route");
  
});

app.listen(PORT, () => {
  console.log(`server is running on ...${PORT}`);
});
