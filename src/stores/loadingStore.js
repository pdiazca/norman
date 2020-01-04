import { observable, decorate } from "mobx"

class loadingStore {
    isLoading = false

    toggleLoading(loading) {
      this.isLoading = loading;
    }
}

decorate(loadingStore, {
    isLoading: observable,
})

export default loadingStore