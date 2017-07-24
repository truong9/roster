$(`.team`).on('click', function(e){
	$('.roster').css('display', 'block');
	var number = $(this).index() + 1;
	$('.banner').css('background-image', `url(../assets/${number}.jpg)`);
})

$('.roster').on('click', function(){
	$('.roster').css('display', 'none');
	$('.roster img').remove();
})

var apiUrlTeam = '';
var apiUrl = 'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/cumulative_player_stats.json?';


$.ajax ({
	url: `${apiUrl}`,
	method: 'get',
	dataType: 'json'
}).then(function(res){
	var teams = res.cumulativeplayerstats.playerstatsentry;
	console.log(teams)
	
	// var teams = players.map(function(i){
	// 	return 
	// })

});





$(function(){

});