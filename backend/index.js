const { connectDb } = require("./src/db");
const startApp = require("./src/app");

const dbConnected = async () => {
  const connect = await connectDb();
  console.log(`Db connection: ${connect}`);
  return connect;
};

(async function start() {
  const dbStatus = await dbConnected();
  if (dbStatus) startApp();
  else console.error("Db connection failed");
})();
