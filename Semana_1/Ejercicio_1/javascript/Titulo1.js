class HTMLWriter {
    constructor(tagId, toWrite) {
        this.tagId = tagId;
        this.toWrite = toWrite;
    }

    writeToHTML() {
        console.log(this.tagId);
        var htmlTag = document.getElementById(this.tagId);
        if(htmlTag != null) {
            htmlTag.textContent = this.toWrite;
        }
    }

    setTagId(tagId) {
        this.tagId = tagId;
    }

    setTextToWrite(toWrite) {
        this.toWrite = toWrite;
    }
}

head = instantiateHead();

subjectName = head.getSubjectName();
tagId = "h1Body";

htmlWriter = new HTMLWriter(tagId, subjectName);
htmlWriter.writeToHTML()