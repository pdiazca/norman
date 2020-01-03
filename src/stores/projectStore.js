import { observable, decorate, action  } from "mobx"
import scraperStore from './scraperStore'

class projectStore {
    name = ""
    url = ""

    setName(name) {
        this.name = name
    }

    setUrl(url) {
        this.url = url;
    }
}

decorate(projectStore, {
    name: observable,
    url: observable,
    setName: action,
    setUrl: action
})

export default projectStore