class HTMLWriter {
    constructor(tagId, toWrite) {
        this.tagId = tagId;
        this.toWrite = toWrite;
    }

    writeToHTML() {
        console.log(this.tagId);
        document.getElementById(this.tagId).textContent += this.toWrite;
    }
}

head = instantiateHead();

subjectName = head.getSubjectName();
tagId = "h1Body";

htmlWriter = new HTMLWriter(tagId, subjectName);
htmlWriter.writeToHTML()