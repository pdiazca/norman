import { observable, decorate } from "mobx"
import db from "../databases/database"


class scraperStore {
  url= ""
  primaryColours = []

  getScraperResults(url) {
    db.getUrlResults(url).then((res) => {
      console.log(res)
    });
  }
}

decorate(scraperStore, {
  primaryColours: observable
})

export default scraperStore