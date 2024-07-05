var myNodelist = document.getElementsByTagName("LI");

function newElement() {
    var li = document.createElement("li");
    var listValue = document.getElementById("listItem").value;

    // Use listValue variable instead of string literal "listItem"
    var t = document.createTextNode(listValue);
    li.appendChild(t);

    if (listValue === '') {
        alert("Write something first!");
    } else {
        document.getElementById("list").appendChild(li);
    }

    document.getElementById("listItem").value = "";
}
