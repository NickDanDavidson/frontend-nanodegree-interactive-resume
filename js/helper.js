var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<div id="role"><span>%data%</span></div><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="green-text">%contact%</span><span class="black-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="green-text">mobile</span><span class="black-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="green-text">email</span><a href="#">%data%</a></li>';
var HTMLlinkedIn = '<li class="flex-item"><span class="green-text">linkedin</span><a href="#">%data%</a></li>';
var HTMLgithub = '<li class="flex-item"><span class="green-text">github</span><a href="#">%data%</a></li>';
var HTMLblog = '<li class="flex-item"><span class="green-text">blog</span><span class="black-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="green-text">location</span><span class="black-text">%data%</span></li>';

var HTMLbioPic = '<div id="prof-pic-wrapper"><img src="%data%" class="biopic"></div>';
var HTMLWelcomeMsg = '<div class="welcome-message">%data%</div>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="black-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {

    // initializes an empty array
    var locations = [];

    locations.push(bio.contacts.location);

    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  function createMapMarker(placeData) {

    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {

    var service = new google.maps.places.PlacesService(map);

    for (var place in locations) {

      var request = {
        query: locations[place]
      };

      service.textSearch(request, callback);
    }
  }

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);

}

function loadMap() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initializeMap&libraries=places';
  document.body.appendChild(script);
}

window.addEventListener('load', loadMap);