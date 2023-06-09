var stadiums = [
  {
    name: "Wembley Stadium",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/London_Wembley.jpg/1280px-London_Wembley.jpg",
    hints: ["W", "e", "m", "b", "l"],
  },
  {
    name: "Old Trafford",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Old_Trafford_-_geograph.org.uk_-_3893530.jpg",
    hints: ["O", "l", "d", "T", "r"],
  },
  {
    name: "The Emirates Stadium",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/London_Emirates_Stadium_arsenal.jpg/345px-London_Emirates_Stadium_arsenal.jpg",
    hints: ["E", "m", "i", "r", "a"],
  },
  {
    name: "Anfield",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg/1280px-Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg",
    hints: ["A", "n", "f", "i", "e"],
  },
  {
    name: "Tottenham Hotspur Stadium",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/London_Tottenham_Hotspur_Stadium.jpg/345px-London_Tottenham_Hotspur_Stadium.jpg",
    hints: ["T", "o", "t", "t", "e"],
  },
];

function randomizeStadium() {
  var currentStadiumIndex = Math.floor(Math.random() * stadiums.length);
  var stadium = stadiums[currentStadiumIndex];
  document.getElementById("stadium-image").src = stadium.image;
  document.getElementById("hints").innerHTML = stadium.hints;
}

window.onload = function() {
  randomizeStadium();

  var stadiumName = document.getElementById("stadium-name").value;

  if (stadiums.indexOf(stadiumName) === -1) {
    alert("That is not a real stadium!");
    return;
  }

  var hints = [];
  var correctAnswer = stadiumName;

  while (hints.length < 6) {
    var hint = stadium.hints.shift();
    hints.push(hint);
    document.getElementById("hints").innerHTML += hint + "<br>";

    if (stadiumName === document.getElementById("stadium-name").value) {
      break;
    }
  }

  if (stadiumName === document.getElementById("stadium-name").value) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
};
