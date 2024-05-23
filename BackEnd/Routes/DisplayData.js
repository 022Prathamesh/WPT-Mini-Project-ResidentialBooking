const express = require("express");
const router = express.Router();

router.post("/housedata", (req, res) => {
  try {
    res.send([global.house_items, global.house_category]);
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
});

module.exports = router;
