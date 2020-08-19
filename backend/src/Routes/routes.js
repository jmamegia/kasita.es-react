const Router = require("express");
const router = Router();
const { findSections } = require("../Controllers/dbController");

router.get("/", (req, res) => {
  return res.send("Hello");
});
router.get("/jma", (req, res) => {
  return res.send("Hello jma");
});

router.get("/sections", async (req, res) => {
  return res.json(await findSections());
});

module.exports = router;
