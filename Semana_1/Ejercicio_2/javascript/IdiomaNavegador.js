var toWrite = wholeNavInfo.getNavigatorLanguage();
var tagId = "h2Body";

htmlWriter.setTagId(tagId);
htmlWriter.setTextToWrite(toWrite);

htmlWriter.writeToHTML();