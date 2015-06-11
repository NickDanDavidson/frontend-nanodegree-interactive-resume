var bio = {
	"name" : "Nick Davidson",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "731-608-6326",
		"email" : "nick.davidson@vanderbilt.edu",
		"github" : "NickDanDavidson",
		"linkedIn" : "NickDanDavidson",
		"location" : "Cleveland, OH"
	},
	"welcomeMessage" : "Thank you for visiting my Résumé!",
	"skills" : ["HTML/CSS", "JavaScript/jQuery", "Python", "C", "KnockoutJS", "Gulp"],
	"biopic" : "images/profile_thumbnail.jpg",
	display : function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name),
			formattedRole = HTMLheaderRole.replace('%data%', bio.role),
			formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
			formattedEmail = HTMLemail.replace('%data%', bio.contacts.email).replace('#', 'mailto:' + bio.contacts.email),
			formattedLinkedIn = HTMLlinkedIn.replace('%data%', bio.contacts.linkedIn).replace('#', 'https://linkedin.com/in/' + bio.contacts.linkedIn),
			formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github).replace('#', 'http://github.com/' + bio.contacts.github),
			formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location),
			formattedPic = HTMLbioPic.replace('%data%', bio.biopic),
			formattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage),
			skillsLen = bio.skills.length;

		$('#title').append(formattedName);
		$('#title').append(formattedRole);
		$('#topContacts, #footerContacts').append(formattedMobile);
		$('#topContacts, #footerContacts').append(formattedEmail);
		$('#topContacts, #footerContacts').append(formattedLinkedIn);
		$('#topContacts, #footerContacts').append(formattedGithub);
		$('#topContacts, #footerContacts').append(formattedLocation);
		$('#header').prepend(formattedPic);
		$('#header').append(formattedWelcome);

		if (skillsLen > 0) {
			$('#header').append(HTMLskillsStart);

			for (var i = 0; i < skillsLen; i++) {
				var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
				$('#skills').append(formattedSkill);
			}
		}
	}
};

var work = {
	"jobs" : [
		{
			"title" : "Code Reviewer",
			"employer" : "Udacity",
			"url" : "http://www.udacity.com",
			"dates" : "January 2015 - present",
			"location" : "Cleveland, OH",
			"description" : "I am one of the very first Udacity Code Reviewers, where I review student project submissions. For each submission, I do both a thorough code review and project evaluation. I strive to give actionable and helpful feedback to students while also improving my code reviewing skills at the same time."
		},
		{
			"title" : "Clinic Assistant",
			"employer" : "Paws Plus",
			"url" : "http://www.pawsplus.com",
			"dates" : "August 2014 - February 2015",
			"location" : "Cleveland, OH",
			"description" : "At our Community Veterinary Clinics, I assist the attending Veterinarian in drawing and administering vaccines, restraining pets, drawing blood for diagnostic testing, and providing customer service by educating clients and dispensing preventative medication."
		},
		{
			"title" : "Bartender",
			"employer" : "Taza A Lebanese Grill",
			"url" : "http://www.mytaza.com",
			"dates" : "April 2014 - October 2014",
			"location" : "Cleveland, OH",
			"description" : "I provided restaurant guests with friendly and efficient service at the bar, on the floor, and over the phone."
		},
		{
			"title" : "Telefundraiser",
			"employer" : "Vanderbilt University Commodore Call Center",
			"url" : "http://vanderbilt.thecallingcenter.com/home.php?site=26",
			"dates" : "Spring 2010",
			"location" : "Nashville, TN",
			"description" : "I reached out to alumni and parents to update and maintain records and to raise money for the annual development campaign."
		}
	],

	display : function() {
		var jobsLen = work.jobs.length;

		for (var i = 0; i < jobsLen; i++) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry').hide();

			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer).replace('#', work.jobs[i].url),
				formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title),
				formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates),
				formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location),
				formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

			$('.work-entry:last').append(formattedEmployer + formattedTitle);
			$('.work-entry:last').append(formattedDates);
			$('.work-entry:last').append(formattedLocation);
			$('.work-entry:last').append(formattedDescription);
		}
	}
};

var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"location" : "The World Wide Web",
			"major" : "Front-End Web Development",
			"degree" : "Nanodegree",
			"dates" : 2015,
			"url" : "http://www.udacity.com/nanodegree"
		},
		{
			"name" : "Cleveland State University",
			"location" : "Cleveland, OH",
			"major" : "French Horn Performance",
			"degree" : "Master of Music",
			"dates" : 2014,
			"url" : "http://www.csuohio.edu"
		},
		{
			"name" : "Vanderbilt University",
			"location" : "Nashville, TN",
			"major" : "Musical Arts French Horn",
			"degree" : "Bachelor of Music",
			"dates" : 2011,
			"url" : "http://www.vanderbilt.edu"
		},
	],

	"onlineCoursework" : [
		{
			"title" : "Introduction to Interactive Programming in Python",
			"school" : "Rice University - Coursera",
			"date" : 2012,
			"url" : "http://www.coursera.org"
		},
		{
			"title" : "Introduction to Logic",
			"school" : "Stanford University - Coursera",
			"date" : 2012,
			"url" : "http://www.coursera.org"
		},
		{
			"title" : "Microeconomics Principles",
			"school" : "University of Illinois - Coursera",
			"date" : 2013,
			"url" : "http://www.coursera.org"
		},
		{
			"title" : "CS50X: Introduction to Computer Science",
			"school" : "Harvard University - edX",
			"date" : 2014,
			"url" : "http://www.edX.org"
		},
		{
			"title" : "Web Development",
			"school" : "Udacity",
			"date" : 2014,
			"url" : "http://www.udacity.com"
		}
	],

	display : function() {
		var schoolsLen = education.schools.length,
			coursesLen = education.onlineCoursework.length;

		for (var i = 0; i < schoolsLen; i++) {
			$('#education').append(HTMLschoolStart);
			$('.education-entry').hide();

			var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url),
				formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree),
				formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates),
				formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location),
				formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].major);

			$('.education-entry:last').append(formattedName + formattedDegree);
			$('.education-entry:last').append(formattedDates);
			$('.education-entry:last').append(formattedLocation);
			$('.education-entry:last').append(formattedMajor);
		}

		$('.education-entry:last').append(HTMLonlineClasses);

		for (var i = 0; i < coursesLen; i++) {
			var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCoursework[i].title),
				formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCoursework[i].school),
				formattedDates = HTMLonlineDates.replace('%data%', education.onlineCoursework[i].date),
				formattedURL = HTMLonlineURL.replace('%data%', education.onlineCoursework[i].url).replace('#', education.onlineCoursework[i].url);

			$('.education-entry:last').append(formattedTitle + formattedSchool);
			$('.education-entry:last').append(formattedDates);
			$('.education-entry:last').append(formattedURL);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "Classic Arcade Game Clone",
			"dates" : "May 2015",
			"description" : "With this project, I built an arcade game inspired by the classic" +
							" Frogger using the HTML5 Canvas and Object-Oriented JavaScript" +
							" programming principles.",
			"image" : "images/arcade-game-screenshot.png"
		},
		{
			"title" : "Website Optimization",
			"dates" : "May 2015",
			"description" : "This project had two components. I was given a portfolio that the" +
							" instructor had built and was instructed to optimize its loading" +
							" speed using Google's PageSpeed Insights and best practices. I was" +
							" then given a fake pizza business website and instructed to optimize" +
							" its frame speed to under 60fps (frames per second), utilizing" +
							" knowledge and Chrome DevTools measurements for scripting, layout," +
							" painting, and compositing.",
			"image" : "images/mobile-pagespeed-screenshot.png"
		},
		{
			"title" : "Neighborhood Map",
			"dates" : "June 2015",
			"description" : "In this project, I built a single-page app that utilized the" +
							" Google Maps API and the Wikipedia API to request information" +
							" for places in my neighborhood.",
			"image" : "images/neighborhood-map-screenshot.png"
		},
		{
			"title" : "Feed Reader Testing",
			"dates" : "June 2015",
			"description" : "For this project I was given a feed reader application and" +
							" was tasked with writing Jasmine tests to ensure the" +
							" functionality of the app works as anticipated.",
			"image" : "images/jasmine-tests-screenshot.png"
		},
		{
			"title" : "My Wiki",
			"dates" : "2014",
			"description" : "I built a wiki where users can sign in, edit pages, and view pages. I utilized Google AppEngine, Datastore, and Python's Jinja2 templating framework.",
			"image" : "http://placekitten.com/483/280" // TODO: fancify the wiki and add screenshot
		},
	],

	display : function() {
		var projectsLen = projects.projects.length;

		for (var i = 0; i < projectsLen; i++) {
			$('#projects').append(HTMLprojectStart);
			$('.project-entry').hide();

			var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title),
				formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates),
				formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description),
				formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].image);

			$('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription + formattedImage);
		}
	}
};

bio.display();
work.display();
education.display();
projects.display();

var googleMap = '<div id="map"></div>';
$('#mapDiv').append(googleMap);

// This is my implementation of an accordion. Thanks to Pankaj Patel at
// http://time2hack.com/2013/01/jquery-tutorial-guide-to-build-a-custom-and-simple-accordion.html
// for the inspiration to make my own.

$('.accordion').on('click', 'h2', function(e) {
	var self = e.target,
		parent = self.parentElement,
		$parent = $(parent),
		$section = $parent.children('div');

	if ($section.is(':hidden')) {
		$section.slideDown('slow');
	} else {
		$section.slideUp('slow');
	}
});