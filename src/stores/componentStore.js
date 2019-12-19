import { observable, decorate, action } from "mobx"

class componentStore {
    viewCount = 1;

    getNext() {
        return this.viewCount++
    }

    getPrev() {
        return this.viewCount--
    }
    
}

decorate(componentStore, {
    viewCount: observable,
    getNext: action,
    getPrev: action,
})

export default componentStore