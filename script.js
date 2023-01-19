function calculateYear() {
    var inputValue = parseInt(document.getElementById("input-txt").value);
    let year = new Date().getFullYear();
    let yr = year.toString().substring(0, 2); // fetching the first 2 digits of the 2000s year
    let fullYear;

    if (inputValue === '' || inputValue < 10 || isNaN(inputValue)) { // Checking for valid input value
        alert("Please enter a valid digit greater than or equal to 10 and less than 100.");
        document.getElementById("input-txt").value = '';
        document.getElementById("output-txt").value = '';
    } 
    else if (inputValue >= 10 && inputValue < 35) { // 2000 year range logic        
        fullYear = Number(yr + inputValue);
        document.getElementById("output-txt").value = fullYear;
    } 
    else if (inputValue >= 35 && inputValue < 100) { // 1900 year range logic
        yr = (Number(yr) - 1).toString(); // fetching the first 2 digits of the 1900s year
        fullYear = Number(yr + inputValue);
        document.getElementById("output-txt").value = fullYear;
    }
}