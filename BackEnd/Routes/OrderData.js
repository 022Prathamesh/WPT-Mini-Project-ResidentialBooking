const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/visits", async (req, res) => {
  let visitData = req.body.visit_data;
  console.log("API data", req.body);

  // Add order_date to the visit data
  const data = { visit_date: new Date(), ...visitData };

  try {
    // Check if the email already exists in the database
    let existingOrder = await Order.findOne({ email: req.body.email });
    console.log(existingOrder);

    if (existingOrder === null) {
      // If email does not exist, create a new order
      await Order.create({
        email: req.body.email,
        visit_data: [data],
      });
      res.json({ success: true });
    } else {
      // If email exists, update the existing order with new visit data
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { visit_data: data } }
      );
      res.json({ success: true });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Server error: " + error.message);
  }
});

router.post("/myvisitdata", async (req, res) => {
  try {
    let myData = await Order.findOne({ email: req.body.email });
    console.log("myData", myData);
    res.json({ visitData: myData });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Server error: " + error.message);
  }
});

module.exports = router;
