import { observable, decorate, action } from "mobx"

class componentStore {
    viewCount = 1;
    loadPreview;

    getNext() {
        return this.viewCount++
    }

    getPrev() {
        return this.viewCount--
    }
    getPreview() {
        return this.loadPreview = this.viewCount > 1;
    }
}

decorate(componentStore, {
    viewCount: observable,
    getNext: action,
    getPrev: action,
})

export default componentStore