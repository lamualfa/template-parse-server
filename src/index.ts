import "dotenv/config"
import polka from "polka"
import { ParseServer } from "parse-server"
import config from "./config"

const app = polka()
const parse = new ParseServer({
  databaseURI: config.get("db.uri"),
  cloud: config.get("cloud.path"),
  appId: config.get("app.id"),
  masterKey: config.get("app.masterKey"),
  serverURL: config.get("http.server.backend.url"),
})

app.use(config.get("http.server.backend.path"), parse)
app.listen(
  config.get("http.server.port"),
  config.get("http.server.host"),
  () => {
    console.log(
      `Server has been started on http://${config.get(
        "http.server.host"
      )}:${config.get("http.server.port")}.`
    )
  }
)
