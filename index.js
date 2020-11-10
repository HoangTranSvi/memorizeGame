const cards = document.querySelectorAll(".card");
// console.log(cards);
var cardQueue = [];

// Card action
// Normal function : this = global context
function flip (card) {
	card.classList.add("flip");
};

const isFlipped = (card) => {
	console.log("Card state = ",card.classList);
	return (card.classList.toString().includes("flip"));
};

// Check card queue
const checkQueue = () => {
	if(cardQueue.length % 2 === 0 && cardQueue.length > 0) {
		let firstCard = cardQueue.pop();
		let secondCard = cardQueue.pop();
		if (firstCard.dataset.image === secondCard.dataset.image) {
			// Cards matched
			firstCard.removeEventListener("click", flip);
			secondCard.removeEventListener("click", flip);
		} else {
			// Cards mismatched
			setTimeout(() => {
				firstCard.classList.remove("flip");
				secondCard.classList.remove("flip");
			}, 500);
		}
	}
};

cards.forEach((card) => card.addEventListener("click", checkCard));

function checkCard () {
	// console.log("card outside : ",this);
	if(!isFlipped(this)) {
		console.log("hit");
		flip(this);
		cardQueue.push(this);
		checkQueue();
		console.log("QUEUE SIZE : ", cardQueue.length);
	}
};

// IIFE : Shuffle cards
(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();



/* function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
} */

/* function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
} */



