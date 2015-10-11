$(document).ready(function()
{
	$('.buttonClass').hide();

	// Questions
	var qArray = ['England', 
	'Italy', 
	'America', 
	'Australia', 
	'Japan', 
	'India' ];

	var aArray = [
		['Manchester', 'London', 'Oxford', 'Birmingham', 'Leeds'],
		['Milan', 'Naples', 'Rome', 'Turin', 'Cagliari'],
		['Boston', 'Lincoln','Olympia','Washington DC', 'Austin'],
		['Adelaide', 'Melbourne', 'Brisbane', 'Sydney', 'Perth'],
		['Yokohama','Kyoto','Hiroshima', 'Fukuoka', 'Tokyo'],
		['Mumbai','Hyderabad', 'Delhi','Kolkata', 'Bangalore']
	]

	// Index 
	var index = -1
	function addIndex(index){
		return index += +1;
	}

	function quizAnswers(index)
	{
		for(i = addIndex(index); i < 6; i++) 
		{
   			$('.Answers').append('<input type="radio" name="radio_name" />' + aArray[index][i] + ' <br>');
		}

	}

	function checkAnswers()
	{

	}

	var questionNum = -1;
	var numCorrect = 0;

	// Start the quiz
	$('.Start').on('click', function()
	{
		// remove congratulations text if quiz reran
		$('.Questions p').hide();


		var question = 'What is the capital city of ' + qArray[addIndex(index)] + '?'
		$('.Questions').append('<p>' + question + '</p>');
		quizAnswers(index);
		$('.Start').hide();
		$('.buttonClass').show();
		index++;
	});

	// Click on the next button
	$('.buttonClass').on('click',function()
	{
		$('.Questions p').hide();
		$('.Answers p').hide();

		if(index < (qArray.length -1))
		{
			var question = 'What is the capital city of ' + qArray[addIndex(index)] + '?'
			$('.Questions').append('<p>' + question + '</p>');
			quizAnswers(index);
			index++;
		} else
		{
			$('.buttonClass').hide();
			$('.Start').show();
			$('.Questions').append('<p> Congratulations! You have completed the quiz </p>');
			index = -1;
		}
	});
});