import { observable, decorate } from "mobx"
import db from "../databases/database"


class scraperStore {
  primaryColours = []
  secondaryColours = []

  getScraperResults(url) {
    return db.getUrlResults(url).then((res) => {
      if(res !== false) {
        // SET PRIMARY COLOURS
        res.coloursBg.forEach((elm) => {
          this.primaryColours.push(elm[0])
        });

        // SET SECONDARY COLOURS
        res.coloursText.forEach((elm) => {
          this.secondaryColours.push(elm[0])
        });

        return true
      } else {
        return false
      }
    });
  }
}

decorate(scraperStore, {
  primaryColours: observable,
  secondaryColours: observable
})

export default scraperStore
