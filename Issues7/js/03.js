function nestedFor() {
	var num=parseInt(document.getElementById("num1").value);
	for (var i = 1; i <= num; i++) {
      var result = "";
      for (var j = 1; j <= num; j++) {
        result += (i + j - 1) + " ";
      }
      console.log(result);
	}
}