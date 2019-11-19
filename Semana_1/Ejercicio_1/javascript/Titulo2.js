var head = instantiateHead();
var degreeName = head.getDegreeName();
var tagId = "h2Body";

var htmlWriter = new HTMLWriter(tagId, degreeName);
htmlWriter.writeToHTML();