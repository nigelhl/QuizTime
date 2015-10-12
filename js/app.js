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
		for(i = 0; i < 5; i++) 
		{
   			$('.Answers form').append('<input type="radio" name="radio_name" />' + aArray[index][i] + '<br>');
		}

	}

	// The sxore
	var theScore = 0;
	function checkAnswers()
	{
		var rand = Math.floor((Math.random() * 6) + 1);
		return $('.Answers').append('<p>You scored ' + rand + ' out of 6</p>');
	}

	// Start the quiz
	$('.Start').on('click', function()
	{
		// remove congratulations text if quiz reran
		$('.Questions p').hide();
		$('.Answers p').hide();


		var question = 'What is the capital city of ' + qArray[addIndex(index)] + '?'
		$('.Questions').append('<p>' + question + '</p>');
		quizAnswers(addIndex(index));
		$('.Start').hide();
		$('.buttonClass').show();
		index++;
	});

	// Click on the next button
	$('.buttonClass').on('click',function()
	{
		$('.Questions p').hide();
		$('.Answers p').hide();
		$('.Answers form').hide();

		if(index < (qArray.length -1))
		{
			var question = 'What is the capital city of ' + qArray[addIndex(index)] + '?'
			$('.Questions').append('<p>' + question + '</p>');
			$('.Answers').append('<form></form>')
			quizAnswers(addIndex(index));
			index++;
		} else
		{
			$('.buttonClass').hide();
			$('.Start').show();
			$('.Questions').append('<p> Congratulations! You have completed the quiz </p>');
			checkAnswers()
			index = -1;
		}
	});
});