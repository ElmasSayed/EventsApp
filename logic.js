$( document ).ready(function() {

		// http://api.eventful.com/docs
		var apiKey = 'SS64KtgmxNNMgC94';

		// search button clicked
		$('#searchBtn').click(function() {
			console.log('search btn clicked')
			var searchText = $('#searchText').val();
			console.log('searchText = ' + searchText);

			var queryURL = 'http://api.eventful.com/json/events/search?app_key=' + apiKey + '&location=' + searchText + '&date=Future?';
			// console.log('queryURL = ' + queryURL);

			// AJAX Function
			// location
			$.ajax({
				url: queryURL,
				method: 'GET',
				dataType: 'jsonp'
			}).done(function(data) {
				console.log(data);

				$("#eventList").html("");
				for (i = 0; i < data.events.event.length; i++) {
					console.log(data.events.event[i].title);
					var html = "";
					html += "<div class='container-fluid'>";
					html += "<div class='row' style='border-top: .5px solid ; height:200;;padding-top:8px'>";
					html += "   <div class='col-md-3' style='border: 0px solid ; color:white;' id='image'>";
					html += "       <img src='" + data.events.event[i].image.medium.url + "' style='height:220px; width:100%;margin:3px;'>";
					html += "   </div>";
					html += "   <div class='col-md-9' style='border: 0px solid gray; color:lightgray; height:200px;'>";
					html += "               <div style='padding:0px;'><span style='font-size:20px;color:#008000;font-family:Graduate,cursive;margin-top:25px;'>" + data.events.event[i].title + "</span></div>";
					html += "       <div class='row'>";
					html += "            <div class='col-md-4'>";
					html += "               <div id='date'><span>" + data.events.event[i].start_time + "</span></div>";
					html += "               <div id='eventUrl'  target='_blank'><a href='" + data.events.event[i].url + "'>More Info Here</a></div>";
					html += "           </div>";

					html += "           <div class='class='col-md-8' >";
					html += "                <div id='venue'><span>" + data.events.event[i].venue_name + ", " + data.events.event[i].city_name + " " + ((data.events.event[i].postal_code == null) ? "" : data.events.event[i].postal_code) + "</span></div>";
					html += "               <div id='venue_url' style='margin-bottom:10px;'  target='_blank'><span><a href='" + data.events.event[i].venue_url + "'>Venue Details</span></a></div>";

					html += "           </div>";
					html += "       <div id='description' style='padding:4px; overflow-y: scroll ; width:90%; height:120px; color:lightgray; margin-bottom:8px;border: 0px solid gray; color:white; border-radius:5px;'><span>" + data.events.event[i].description + "</span></div>"
					html += "     </div>";

					html += "   </div>";
					html += "</div>";
					html += "</div>";

					$("#eventList").append(html);
				}
				// console.log(JSON.stringify(data, null, 4));
				// Transfer content to html
				// $('#img').html(data.events.event[0].image.thumb.url);
				// $('#title').html(data.events.event[0].title);
				// $('#date').html(data.events.event[0].start_time);
				// $('#description').html(data.events.event[0].description);
				// $('#eventUrl').html(data.events.event[0].url);
				// $('#venue').html(data.events.event[0].venue_name);
				// $('#venueAdd').html(data.events.event[0].venue_address);
				// $('#cityName').html(data.events.event[0].city_name);
				// $('#geocode').html(data.events.event[0].geocode_type);
				// $('#venue_url').html(data.events.event[0].venue_url);

				// var randomDate = "02/23/1999";
				// var convertedDate = moment(new Date(randomDate));
				// (moment(convertedDate).format("MM/DD/YY"));
			});
		}); //search button click event end
		// ___________________________________________________________________________________________________________________________
		// category selected

		$('#categories li').click(function() {
			var category = this.id;
			console.log('Clicked category: ' + category);
			var searchText = $('#searchText').val();
			var queryURL = 'https://api.eventful.com/json/events/search?category=' + category + '&location=' + searchText + '&date=Future?&app_key=SS64KtgmxNNMgC94'
			console.log('queryURL = ' + queryURL);
			$.ajax({
				url: queryURL,
				method: 'GET',
				dataType: 'jsonp'
			}).done(function(data) {
				console.log(data);
			});
		});

// -------------------------------------------------------------------------------------------

}); // $ doc ready