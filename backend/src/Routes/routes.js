const Router = require("express");
const router = Router();
const { findSections } = require("../Controllers/dbController");

router.get("/sections", async (req, res) => {
  return res.json(await findSections());
});

module.exports = router;
