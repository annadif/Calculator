let expression = "";
let history = [];  // To store the last 3 calculations
let historyVisible = false;  // Track if the history is currently visible

function clearDisplay() {
    expression = "";
    document.getElementById("input").innerText = "";
    document.getElementById("result").innerText = "";
    document.getElementById("history").innerText = ""; // Clear history display when clearing the calculator
}

function deleteLast() {
    expression = expression.slice(0, -1);
    document.getElementById("input").innerText = expression;
}

function appendSymbol(symbol) {
    expression += symbol;
    document.getElementById("input").innerText = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        document.getElementById("result").innerText = result;
        document.getElementById("input").innerText = expression;

        // Store the calculation and result in history
        addToHistory(expression, result);
        
        expression = result.toString();
    } catch (error) {
        document.getElementById("result").innerText = "Error";
    }
}

// Add calculation and result to the history array and update the history display
function addToHistory(calculation, result) {
    // Add the new calculation to the history
    history.push(`${calculation} = ${result}`);

    // Limit history to the last 3 entries
    if (history.length > 3) {
        history.shift();  // Remove the oldest entry
    }

    // Update the history section in the display
    updateHistoryDisplay();
}

// Function to update the history display on the screen
function updateHistoryDisplay() {
    const historyElement = document.getElementById("history");
    historyElement.innerHTML = history.join('<br>');
}

// Function to toggle the visibility of the history section
function toggleHistory() {
    const historyElement = document.getElementById("history");

    // Toggle visibility of history
    if (historyVisible) {
        historyElement.style.display = 'none'; // Hide history
    } else {
        historyElement.style.display = 'block'; // Show history
    }
    historyVisible = !historyVisible; // Update the visibility status
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}
