const startApp = require("./src/app");
const { initDb } = require("./src/Controllers/ChargeDefaultsController");

const dbConnected = async () => {
  await initDb();
  return true;
};

(async function start() {
  const dbStatus = await dbConnected();
  if (dbStatus) startApp();
  else console.error("Db connection failed");
})();
