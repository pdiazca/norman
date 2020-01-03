import projectStore from './projectStore'
import ComponentStore from './componentStore'
import PreviewStore from './previewStore'
import ScraperStore from './scraperStore'

class rootStore {
  constructor() {
    this.projectStore = new projectStore()
    this.componentStore = new ComponentStore()
    this.previewStore = new PreviewStore()
    this.scraperStore = new ScraperStore()
  }
}
export default rootStore