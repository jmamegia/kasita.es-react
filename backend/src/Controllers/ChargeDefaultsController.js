const Link = require("../db/Models/Link");
const Section = require("../db/Models/Section");
const User = require("../db/Models/User");
const sequelize = require("../db/index");
const links = [
  {
    name: "nextloud",
    url: "https://cloud.kasita.es",
    image:
      "https://www.channelbiz.es/wp-content/uploads/2016/02/Cloud-Nube-1280x720.jpg",
  },
  {
    name: "plex",
    url: "https://plex.kasita.es",
    image:
      "https://developer.asustor.com/uploadIcons/0020_999_1562298048_pmp2-256_icon.png",
  },
  {
    name: "emby",
    url: "https://emby.kasita.es",
    image: "https://images-na.ssl-images-amazon.com/images/I/41NwssJC1iL.png",
  },
  {
    name: "p2p",
    url: "https://p2p.kasita.es",
    image: "https://img.utdstc.com/icons/transmission-1-91.png:225",
  },
];

const initDb = async () => {
  await sequelize.sync();
  let defaultSection = await Section.findOne({ where: { name: "General" } });
  if (!defaultSection) {
    await createDefaultSection();
    defaultSection = await Section.findOne({ where: { name: "General" } });
  }
  await chargeLinks(defaultSection.id);
  await addAdminUser();
};

const createDefaultSection = async () => {
  await Section.create({ name: "General" });
};

const chargeLinks = async (sectionId) => {
  links.map(async (link) => {
    try {
      await Link.create({
        ...link,
        sectionId,
      });
    } catch (e) {}
  });
};

const addAdminUser = async () => {
  try {
    let user = await User.create({
      name: process.env.USER || "jma",
      password: process.env.PASSWORD || "losgatitossonmonos",
    });
  } catch {}
};

module.exports = { initDb };
