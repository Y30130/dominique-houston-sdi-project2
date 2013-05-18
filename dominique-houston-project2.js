// alert("JavaScript works!");

// Dominique Houston
// SDI 1305
// Project 2
// Continued Javascript Learning
/*
A recording artist var recordingArist = "Britney Spears" is going on tour and will be performing one secret show per month for one year. showsPerYear = 12. monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].

Every night she must perform for fans var performShow = function (daysOfTheWeek). At the end of every day she would like to know how many shows are left while var (showsRemain > 0), so please inform her immediately.

For each day that has passed, the number of shows left will decrease (var showNumber = 0; showNumber < daysOfTheWeek.length; showNumber++).

You are not to look at her nor are you allowed to respond directly to her, you must relayMessageTo = function(person,message){...}, to which you will normally receive a reply along the lines of recordingArtist + " says thank you."

Though you may get used to it, you won't be able to help by wonder if (staff.talkToHer()) when she responds.
*/


// My Global variables
var recordingArtist = "Britney Spears";
var showsPerMonth = 1;
var songsPerShow = 6;
var showDurationMins = 30;
var weeksPerforming = 12;
var monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var showsBooked = true;
var soldOut = true;
var inCity = true;
var onTour = true;
var numOfSeasons = 4;
var seasons = ["Winter","Spring","Summer","Fall"];


// Convert Consolge Log into it's on Function, "Say"
var say = function(message) {console.log(message);};

// My procedure 
if (recordingArtist == "Britney Spears") {
	say(recordingArtist + " is going on tour!");
	say("");
} 
else {
	console.log("We do not have information for that artist.");
};


// My Boolean Function
// Determine if concert tickets are avaiable
var checkShowStatus = function(inCity,showsBooked) {
	verifiedShow = showsBooked && soldOut;
	if (inCity && showsBooked) {
		say("Congratulations! " + recordingArtist + " concert tickets are available for purchase.");
		say("");
		return verifiedShow;
	}
	if (inCity || showsBooked) {
		say("Regretfully, concert tickets for " + recordingArtist + " are available, but not in your area. Please try another location.");
		return false;
	}
	if (!showsBooked && !inCity){
		say("We do not have any shows booked for " + recordingArtist + ".");
		return false;
	}
}


// My number function + While Loop
// Loop and count down how many concerts are left
var showCountdown = function (shows) {
	countShows = shows - 1;
	
	say("The tour begins today. We have a total of " + shows + " shows.");
	say("");
	while (shows > 0) {
		shows = shows - 1;
		if (shows > 0) {
			say( recordingArtist +", that was a great show.");
			say(shows + " left on the tour.");
			if (shows == 1) {
			say("");
					say("This is the last show. Give it all you've got!");
				}
		} 
		else {
			say("We have reached the end of the tour. Congratuluations on your success, Britney!");
		}
		say(" ");
	
	}
	return countShows;
}

// My array function + For Loop

var songCountUp = function(weeksPerforming,monthsOfTheYear) {
	songCount = monthsOfTheYear.push("Nevember");
	for (var i = 0; i < monthsOfTheYear.length; i++){
		say("You will be performing " + weeksPerforming + " show this " + monthsOfTheYear[i] + ".");
		
		if (i > monthsOfTheYear) {
			say("There are still upcoming performances.");
		}
		say(" ");
	}
	return songCount;
}

// String function

var offerDownload = function(freeSong,freeVideo) {
	downloadMessage = console.log("Download " + freeSong + " or " + freeVideo);
	return downloadMessage;
	}


// Function Execution
checkShowStatus(true,true); // toggle boolean values to return different outputs
showCountdown(12); // Number Function & While Loop
songCountUp(1,monthsOfTheYear); // Array Function & For Loop
say(offerDownload("Ooh La La","Scream & Shout")); // String Function 


// Returned Values
say(verifiedShow); // Returned Value from Boolean Function
say(songCount); // Returned Numerical Value from my Array Loop
say(monthsOfTheYear.push("Nevember")); // Pushing and returning from the array function and for loop
say(countShows); // Returned Value from my For While Loop
say();
say();