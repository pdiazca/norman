import { observable, decorate } from "mobx"
import db from "../databases/database"


class scraperStore {
  // url2= ""
  primaryColours = []

  getScraperResults(url) {
    return db.getUrlResults(url).then((res) => {
      if(res !== false) {
        res.coloursBg.forEach((elm) => {
          this.primaryColours.push(elm[0])
        });
        return true
      } else {
        return false
      }
    });
  }
}

decorate(scraperStore, {
  primaryColours: observable
})

export default scraperStore
