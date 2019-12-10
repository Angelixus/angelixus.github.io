class JQueryWrapper {
    constructor() {

    }

    hide(toHide) {
        $(toHide).hide()
    }

    show(toShow) {
        $(toShow).show()
    }

    hideShowDependingOnVisibility(id) {
        if($(id).is(":visible")) {
            this.hide(id)
        } else {
            this.show(id)
        }
    }
}

jqueryWrapper = new JQueryWrapper()