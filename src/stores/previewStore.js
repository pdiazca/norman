import { observable, decorate, action  } from "mobx"

class previewStore {
    open = false
    buttonText = "Open Preview"


    toggleOpen() {
      this.open = !this.open;
      this.changeText();
    }

    changeText() {
      this.open ? this.buttonText = "Close Preview" : this.buttonText = "Open Preview"
    }
}

decorate(previewStore, {
    open: observable,
    buttonText: observable,
    toggleOpen: action
})

export default previewStore