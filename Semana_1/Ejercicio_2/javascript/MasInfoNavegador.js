class HTMLWriterSecond {
    constructor(tagId, toWrite) {
        this.tagId = tagId;
        this.toWrite = toWrite;
    }

    writeToHTML() {
        console.log(this.tagId);
        var htmlTag = document.getElementById(this.tagId);
        if(htmlTag != null) {
            htmlTag.textContent += this.toWrite;
        }
    }

    setTagId(tagId) {
        this.tagId = tagId;
    }

    setTextToWrite(toWrite) {
        this.toWrite = toWrite;
    }
}

var htmlWriterSecond = new HTMLWriterSecond()

var restOfData = wholeNavInfo.getRestOfData();
var tagId = "parrafos";

htmlWriterSecond.setTagId(tagId);

for(var index in restOfData) {
    var text = restOfData[index] + ' ';
    htmlWriterSecond.setTextToWrite(text);
    htmlWriterSecond.writeToHTML();
}