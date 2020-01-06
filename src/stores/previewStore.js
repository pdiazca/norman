import { observable, decorate, action  } from "mobx"

class previewStore {
    open = false
    buttonText = "Open Preview"


    toggleOpen() {
      this.open = !this.open;
      console.log(this);
      // this.changeText();
    }

    // changeText() {
    //   this.open ? this.buttonText = "" : this.buttonText = "";
    // }
}

decorate(previewStore, {
    open: observable,
    // buttonText: observable,
    toggleOpen: action
})

export default previewStore