import { connect, connection } from "mongoose";

const conn = {
  iscConnected: false,
};

export default async function dbConnect() {
  if (conn.iscConnected) return;

  const DB_URI =
    "mongodb+srv://pabloReyes:OXapS9zpRTLPu7JK@cluster1.oyxp5fq.mongodb.net/dbLovelife?retryWrites=true&w=majority";
  const db = await connect(DB_URI);
  conn.iscConnected = db.connections[0].readyState;

  console.log(db.connection.db.databaseName);
}

connection.on("connected", () => {
  console.log("Atlas succesful conection");
});

connection.on("error", (err) => {
  console.log(err);
});
