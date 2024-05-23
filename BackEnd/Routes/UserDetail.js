const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/getuserdetail", async (req, res) => {
  try {
    const { email } = req.body;  // Destructure the email from req.body
    console.log("Current User", email);

    let data = await User.findOne({ email: email });  // Use the email variable
    console.log("User detail", data);

    if (!data) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send({ userdetail: data });
  } catch (error) {
    console.log("User Detail Error", error);
    res.status(500).send({ message: "Server error" });
  }
});

router.post("/updateuserdetail", async (req, res) => {
    try {
      const { email, name, location, address } = req.body;
  
      let user = await User.findOneAndUpdate(
        { email },
        { name, location, address },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      console.log("Updated User", user);
      res.json({ success: true, userdetail: user });
    } catch (error) {
      console.log("Update User Error", error);
      res.status(500).send("Server Error");
    }
})

module.exports = router;
