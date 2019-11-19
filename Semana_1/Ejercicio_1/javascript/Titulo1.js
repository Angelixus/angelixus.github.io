class HTMLWriter {
    constructor(tagId, toWrite) {
        this.tagId = tagId;
        this.toWrite = toWrite;
    }

    writeToHTML() {
        document.getElementById(this.tagId).innerHTML = this.toWrite;
    }
}

head = instantiateHead();

subjectName = head.getStudent().getFirstSubject().getSubjectName();
tagId = "h1Body";

htmlWriter = new HTMLWriter(tagId, subjectName);
htmlWriter.writeToHTML()