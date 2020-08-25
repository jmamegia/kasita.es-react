const Router = require("express");
const router = Router();
const { login, auth } = require("../Controllers/LoginController");
const {
  findSections,
  updateLink,
  deleteLink,
  updateSection,
  deleteSection,
} = require("../Controllers/dbController");

//login
router.put("/login", async (req, res) => {
  return res.json(await login(req.body));
});

//link routes

router.put("/link", async (req, res) => {
  return res.json(await updateLink(req.body));
});

router.post("/link", auth, async (req, res) => {
  return res.json(await updateLink(req.body));
});

router.delete("/link", auth, async (req, res) => {
  return res.json(await deleteLink(req.body));
});

//section routes
router.get("/sections", async (req, res) => {
  return res.json(await findSections());
});

router.post("/section", auth, async (req, res) => {
  return res.json(await updateSection(req.body));
});

router.put("/section", auth, async (req, res) => {
  return res.json(await updateSection(req.body));
});

router.delete("/section", auth, async (req, res) => {
  return res.json(await deleteSection(req.body));
});

module.exports = router;
