	function updateClock ( )
	{
		var d = new Date();

		var month =	((d.getMonth() < 10) ? "0" + d.getMonth() : d.getMonth());
		var day = ((d.getDate() < 10) ? "0" + d.getDate() : d.getDate());
		var year = d.getFullYear();

		var hour = ((d.getHours > 12) ? d.getHours() - 12 : d.getHours()) ;
		hour = ((hour < 10) ? "0" + hour : hour);
		var minute = ((d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes());
		var second = ((d.getSeconds() < 10) ? "0"+ d.getSeconds(): d.getSeconds());

		var date = month + "/" + day + "/" + year;
		var time = hour +":"+ minute +":"+ second;
		document.getElementById("date").innerHTML = date.trim();
		document.getElementById("time").innerHTML = time.trim();
	}

	function left() {
	document.body.id = 'left';
	}

		function right(){
	document.body.id =  'right';
	}