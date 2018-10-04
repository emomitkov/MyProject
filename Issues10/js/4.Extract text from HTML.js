console.log("stripHtml(code)");
function stripHtml(str) {
	var r = /<[^<]+>/g;
	var stripedHtml = str.replace(r, "");
	return stripedHtml;
}