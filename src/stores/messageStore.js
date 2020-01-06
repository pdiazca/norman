import { observable, decorate, action } from "mobx"

class loadingStore {
    isOpen = false
    message = ""
    messageType =""

    displayMessage(messageType, message) {
      this.isOpen = true
      this.message = message
      this.messageType = messageType

      setTimeout(()=>{
        this.closeMessage()
      }, 2000)
    }

    closeMessage() {
      this.isOpen = false
    }
}

decorate(loadingStore, {
    isOpen: observable,
    message: observable,
    messageType: observable,
    closeMessage: action,
    displayMessage: action
})

export default loadingStore