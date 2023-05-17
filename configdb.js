import { async } from "rxjs";
import pkg from "sqlite3";
const { sqlite3 } = pkg;
import { open } from "sqlite3";

export async function openUserDB() {
  return open({
    filename: "./teste.db",
    driver: pkg.Database,
  });
}
