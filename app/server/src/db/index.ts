import mysql, {ConnectionOptions} from "mysql2/promise";

const config: ConnectionOptions = {
  host: "localhost",
  port: 3306,
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PWD || "root",
  database: "human_friends",
}

const conn = mysql.createConnection(config);
export default conn;