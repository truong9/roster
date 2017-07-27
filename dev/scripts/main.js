var teams = {};
var teamId = {};
var apiUrl = 'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/cumulative_player_stats.json?';

$.ajax ({
	url: `${apiUrl}`,
	method: 'get',
	dataType: 'json'
}).then(function(res){
	teams = res.cumulativeplayerstats.playerstatsentry;
	console.log(teams);

	$(`.team`).on('click', function(e){
		$('.roster').css('display', 'block');
		const number = $(this).index() + 1;
		$('.banner').css('background-image', `url(../assets/${number}.jpg)`);
		teamId = $(this).data('id');

		teams.map(player => {
			if(player.team.Name === teamId){
				$('.roster .players .position').append(`<li>${player.player.Position}</li>`)
				$('.roster .players .name').append(`<li>${player.player.FirstName} ${player.player.LastName}</li>`)
			}
		})
	});

	$('.roster').on('click', function(){
		$('.roster').css('display', 'none');
		$('.roster img').remove();
		$('.roster .players ul').empty();
	})
});

var music = document.getElementById('music');

	if ($(window).width() > 750){
		$('i').on('click', function(){
			if(music.paused == false){
				music.pause();
				$('.fa-volume-up').css('visibility', 'hidden');
				$('.fa-volume-off').css('visibility', 'visible');
			} else {
				music.play();
				$('.fa-volume-up').css('visibility', 'visible');
				$('.fa-volume-off').css('visibility', 'hidden');
			}
		});
	} else {
		music.pause();
		$('i').css('display', 'none');
	}



$(function(){

	swal({
	  title: "Welcome to NBA Rosters",
	  text: "Find the latest roster updates here"
	});

});
