// Prompt the user to enter a maximum number and convert it to an integer
let maximum = parseInt(prompt("Enter the maximum number."));

// Ensure the user enters a valid number; keep prompting if input is invalid
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number."));
}

// Generate a random target number between 1 and the user-defined maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;

// Ask the user for their first guess
let guess = prompt("Enter first guess! or type q to quit.");
let attempts = 1; // Initialize the attempt counter

// Start an infinite loop; the game continues until the user wins or quits
while (true) {
    // Check if the user wants to quit (case insensitive)
    if (guess.toUpperCase() === 'Q') {
        console.log("Failed."); // User quits the game
        break; // Exit the loop
    }

    // Convert the guess to a number
    guess = parseInt(guess);

    // Check if the guess is invalid (not a number)
    if (!guess) {
        guess = prompt("Invalid input, please enter a number or type q to quit.");
        continue; // Skip the rest of the loop and ask again
    }

    // Compare the guess with the target number
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:"); // Prompt for a new guess
        attempts += 1; // Increment attempt count
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:"); // Prompt for a new guess
        attempts += 1; // Increment attempt count
    } else {
        // If the guess is correct, print a success message and exit the loop
        console.log(`You got it! Your guess: ${guess} | Target Number: ${targetNum} | Attempts: ${attempts}`);
        break; // Exit the loop
    }
}
