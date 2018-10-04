console.log("parseTags(yourWord)");
function parseTags(str) {
    var r = /([^<]+)([A-Za-z0-9\s\w\=\':\'])>(\b\w+\b)<\/([A-Za-z0-9])>/;
    str = str.replace(r,"<$2>$3</$4>");
    document.getElementById("demo").innerHTML = str;
}