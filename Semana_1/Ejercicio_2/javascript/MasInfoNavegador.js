var restOfData = wholeNavInfo.getRestOfData();
var tagId = "parrafos";

htmlWriter.setTagId(tagId);

for(var index in restOfData) {
    var text = restOfData[index];
    htmlWriter.setTextToWrite(text);
    htmlWriter.writeToHTML();
}