class JQueryWrapper {
  constructor() {}

  hide(toHide) {
    $(toHide).hide();
  }

  show(toShow) {
    $(toShow).show();
  }

  hideShowDependingOnVisibility(id) {
    if ($(id).is(":visible")) {
      this.hide(id);
    } else {
      this.show(id);
    }
  }

  addRow(tableId, inputToTakeInfo) {
    var toAdd = document.getElementById(inputToTakeInfo).value;
    $(tableId).append("<tr><td>" + toAdd + "</td></tr>");
  }

  removeLastRow(tableId) {
    $(tableId + " tr:last").remove();
  }

  addParagraphToEnd(parentId, inputToTakeInfo) {
    var info = document.getElementById(inputToTakeInfo).value;
    $(parentId).append("<p>" + info + "</p>");
  }

  deleteLastParagraph(parentId) {
    $(parentId + " p:last").remove();
  }

  showAllHTMLElements(parentToAppend) {
    $('html').find('*').each(function() {
      var parent = $(this).parent()
      if(parent == undefined) {
        $(parentToAppend).append('<p>Elemento: ' + $(this).prop('tagName') + ' - Padre: No Tiene' + '</p>')
      } else {
        $(parentToAppend).append('<p>Elemento: ' + $(this).prop('tagName') + ' - Padre: ' + $(this).parent().prop('tagName') + '</p>')
      }
    })
  }
}

jqueryWrapper = new JQueryWrapper();