class NavInfo {
  constructor() {
    if (!!NavInfo.instance) {
      return NavInfo.instance;
    }

    NavInfo.instance = this;

    this.navigator = navigator;

    return this;
  }

  getNacigatorName() {
      return this.navigator.name
  }
}

function instantiateNavInfo() {  
    return new NavInfo();
  }