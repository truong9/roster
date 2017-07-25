var teams = {};
var teamId = {};
var apiUrl = 'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/cumulative_player_stats.json?';

$.ajax ({
	url: `${apiUrl}`,
	method: 'get',
	dataType: 'json'
}).then(function(res){
	teams = res.cumulativeplayerstats.playerstatsentry;
});

$(`.team`).on('click', function(e){
	$('.roster').css('display', 'block');
	const number = $(this).index() + 1;
	$('.banner').css('background-image', `url(../assets/${number}.jpg)`);
	teamId = $(this).data('id');

	console.log(teamId);
	
	// teams.map(player => {
	// 	if(player.team.Name === teamId){
	// 		console.log(teamId);
	// 	}
	// })

});

$('.roster').on('click', function(){
	$('.roster').css('display', 'none');
	$('.roster img').remove();
})







$(function(){

});

	// teams.map(player => {
	// 	if(player.team.Name === {
	// 		console.log(this.data("id"))
	// 	}
	// });