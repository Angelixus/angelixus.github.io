var head = instantiateHead();
var universityName = head.getUniversityName();
var tagId = "h4Body";

var htmlWriter = new HTMLWriter(tagId, universityName);
htmlWriter.writeToHTML();