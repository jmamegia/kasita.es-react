const Link = require("../Models/Link");
const Section = require("../Models/Section");
const User = require("../Models/User");

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

const chargeLinks = async () => {
  links.map(async (link) => {
    await Link.findOneAndUpdate(
      { url: link.url },
      link,
      { new: true, upsert: true },
      async (error, result) => {
        if (error) return false;
        else {
          //ad new link to general section
          await Section.findOneAndUpdate(
            { name: "General" },
            { $addToSet: { links: result } },
            { new: true, upsert: true },
            (error, result) => {
              if (error) return false;
              else return true;
            }
          );
          return true;
        }
      }
    );
  });
};

const addAdminUser = async () => {
  try {
    let user = new User({
      name: process.env.USER,
      password: process.env.PASSWORD,
      token: "",
    });
    await user.save();
  } catch {}
};

module.exports = { chargeLinks, addAdminUser };