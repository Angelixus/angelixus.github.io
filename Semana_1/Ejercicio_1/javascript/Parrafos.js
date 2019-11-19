var head = instantiateHead();
var restOfData = head.getRestOfData();

for(var index in restOfData) {
    var inner = restOfData[index];
    var p = document.createElement('p');
    p.textContent += inner;

    document.getElementById('wholeBody').appendChild(p);
}