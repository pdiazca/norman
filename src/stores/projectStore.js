import { observable, decorate, action  } from "mobx"

class projectStore {
    name = ""


    setName(name) {
        this.name = name
    }
    
}

decorate(projectStore, {
    name: observable,
    setName: action
})

export default projectStore