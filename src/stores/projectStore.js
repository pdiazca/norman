import { observable, decorate, action  } from "mobx"

class projectStore {
    name = ""
    url = ""

    setName(name) {
        this.name = name
    }

    setUrl(url) {
        if(this._isUrlValid(url)) {
            this.url = url;
            return true
        }

        return false
    }

    _isUrlValid(userUrl) {
        var res = userUrl.match(/^((?:http:\/\/)|(?:https:\/\/))(www.)?((?:[a-zA-Z0-9]+\.[a-z]{3})|(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?))([\/a-zA-Z0-9\.]*)$/gm);
        if(res == null)
            return false;
        else
            return true;
     }
}

decorate(projectStore, {
    name: observable,
    url: observable,
    setName: action,
    setUrl: action
})

export default projectStore