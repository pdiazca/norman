import { observable, decorate } from "mobx"
import db from "../databases/database"


class scraperStore {
  // url2= ""
  primaryColours = []

  getScraperResults(url) {
  	// console.log(typeof(url));
  	// url = this.sanitizeUrl(url);
  	// console.log(typeof(url));
    db.getUrlResults(url).then((res) => {
      console.log(res);
    });
  }

//   validURL(str) {
//   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//   '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//   '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//   '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

//   console.log(!!pattern.test(str));
//   return !!pattern.test(str);
// }




  sanitizeUrl(url) {
    let sanitizedUrl;
    // if(this.validURL(url)) {
      var prefix = 'http://';
    if (url.substr(0, prefix.length) !== prefix) {
        sanitizedUrl = prefix + url;
    }     
    // }
    return sanitizedUrl;
  }
}

decorate(scraperStore, {
  primaryColours: observable
})

export default scraperStore