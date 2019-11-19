var head = instantiateHead();
var buildingName = head.getBuildingName();
var tagId = "h3Body";

var htmlWriter = new HTMLWriter(tagId, buildingName);
htmlWriter.writeToHTML();