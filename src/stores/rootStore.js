import projectStore from './projectStore'
import ComponentStore from './componentStore'
import PreviewStore from './previewStore'
import ScraperStore from './scraperStore'
import LoadingStore from './loadingStore'
import MessageStore from './messageStore'

class rootStore {
  constructor() {
    this.projectStore = new projectStore()
    this.componentStore = new ComponentStore()
    this.previewStore = new PreviewStore()
    this.scraperStore = new ScraperStore()
    this.loadingStore = new LoadingStore()
    this.messageStore = new MessageStore()
  }
}
export default rootStore