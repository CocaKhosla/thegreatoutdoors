function myFunction()
{
	var queryString = location.search.substring(1);
	console.log(queryString);
	var dividedString = queryString.split('&');
	console.log(dividedString);
	
	var reqValueTitle = dividedString[0];
	console.log(reqValueTitle);
	var titleSplit = reqValueTitle.split('=');
	var title = titleSplit[1];
	console.log(title);


	var reqValueDescription = dividedString[1];
	console.log(reqValueDescription);
	var descriptionSplit = reqValueDescription.split('=');
	var description = descriptionSplit[1];
	console.log(description);

	var reqValueDate = dividedString[2];
	console.log(reqValueDate);
	var dateSplit = reqValueDate.split('=');
	var date = dateSplit[1];
	console.log(date);

	var reqValueStart = dividedString[3];
	console.log(reqValueStart);
	var startSplit = reqValueStart.split('=');
	var start = startSplit[1];
	console.log(start);

	
}