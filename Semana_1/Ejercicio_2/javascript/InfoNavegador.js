class NavInfo {
  constructor() {
    if (!!NavInfo.instance) {
      return NavInfo.instance;
    }

    NavInfo.instance = this;

    this.navigator = navigator;
    this.history = new Map();

    this.history.set(this.navigator.appName, false);
    this.history.set(this.navigator.language, false);
    this.history.set(this.navigator.appVersion, false);
    this.history.set(this.navigator.product, false);
    this.history.set(this.navigator.permissions, false);
    this.history.set(this.navigator.vendor, false);

    return this;
  }

  getNavigatorName() {
      var name = this.navigator.appName;
      this.history.set(name, true);
      return name;
  }

  getNavigatorLanguage() {
      var name = this.navigator.language;
      this.history.set(name, true);
      this.name;
  }

  getRestOfData() {
      var res = [];
      this.history.forEach(function(value, key) {
        if(!value) {
            res.push(key);
        }
      })

      return res;
  }
}

var wholeNavInfo = new NavInfo();