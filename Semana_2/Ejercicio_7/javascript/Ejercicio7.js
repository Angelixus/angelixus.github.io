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

    addRow(tableId, inputToTakeInfo) {
        var toAdd = document.getElementById(inputToTakeInfo).value
            $(tableId).append('<tr><td>' + toAdd + '</td></tr>');
    }
}

jqueryWrapper = new JQueryWrapper()