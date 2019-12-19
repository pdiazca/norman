import { observable, decorate, action  } from "mobx"

class IncomeDomainStore {
    name = ""

    setName(name) {
        let setName = name;
        this.name = setName
    }
    
}

decorate(IncomeDomainStore, {
    name: observable,
    setName: action
})

export default IncomeDomainStore