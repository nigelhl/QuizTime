$(document).ready(function()
{
	// Questions
	var question = ['England', 
	'Italy', 
	'America', 
	'Australia', 
	'Japan', 
	'India' ];

	var answers = [
		['Manchester', 'London', 'Oxford', 'Birmingham', 'Leeds'],
		['Milan', 'Naples', 'Rome', 'Turin', 'Cagliari'],
		['Boston', 'Lincoln','Olympia','Washington DC', 'Austin'],
		['Adelaide', 'Melbourne', 'Brisbane', 'Sydney', 'Perth'],
		['Yokohama','Kyoto','Hiroshima', 'Fukuoka', 'Tokyo'],
		['Mumbai','Hyderabad', 'Delhi','Kolkata', 'Bangalore']
	]

	var index = 0;

	// Start the quiz
	$('.Start').on('click', function()
	{
		var html = '<p>' + 'What is the capital city of' + question[index] + '?</p>';
		for(i = 0; i < answers[index].length; i++)
		{
			html += '<label><input type="radio" name="ans" value="' 
            + answers[index][i] + '"/ > ' + answers[index][i] + ' </label>';
		}

		html += '</div > ';
    	document.getElementsByClassName('.Questions').innerHTML = html;

		index++
	});
});