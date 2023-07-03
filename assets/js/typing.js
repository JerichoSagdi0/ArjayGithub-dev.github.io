const words = ["GRAPHIC DESIGNER", "BACKEND DEVELOPER", "CONTENT SRATEGIST"]; // Add more words if needed
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Adjust typing speed as needed

function typeWords() {
	if (charIndex < words[wordIndex].length) {
		const wordElement = document.querySelector(".typing-words");
		wordElement.innerHTML += words[wordIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeWords, typingSpeed);
	} else {
		setTimeout(eraseWords, typingSpeed * 5); // Delay before erasing the word
	}
}

function eraseWords() {
	if (charIndex >= 0) {
		const wordElement = document.querySelector(".typing-words");
		const wordLength = words[wordIndex].length;
		wordElement.innerHTML = words[wordIndex].substring(0, charIndex);
		charIndex--;
		setTimeout(eraseWords, typingSpeed);
	} else {
		wordIndex++;
		if (wordIndex >= words.length) {
			wordIndex = 0;
		}
		setTimeout(typeWords, typingSpeed);
	}
}

typeWords();
