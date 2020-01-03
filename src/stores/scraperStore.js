import { observable, decorate, action  } from "mobx"
import db from '../databases/database'

class scraperStore {
  url= ""
  primaryColours = []

  getScraperResults(url) {
    db.getUrlResults(url);
  }
}

decorate(scraperStore, {
  primaryColours: observable
})

export default scraperStore