document.getElementById("holder-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    const ifscCode = document.getElementById("ifsc-code").value;
    const holderName = document.getElementById("name").value;
    const branchName = document.getElementById("branch").value;

    const holderDetails = {
        ifscCode,
        holderName,
        branchName
    };

    // Save to localStorage
    localStorage.setItem("holderDetails", JSON.stringify(holderDetails));

    // Display saved details
    displaySavedDetails();
});

// Function to save transaction details
document.getElementById("transaction-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    const transactionId = document.getElementById("transaction-id").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;

    const transactionDetails = {
        transactionId,
        amount,
        date
    };

    // Save to localStorage
    localStorage.setItem("transactionDetails", JSON.stringify(transactionDetails));

    // Display saved details
    displaySavedDetails();
});

// Function to display saved holder and transaction details
function displaySavedDetails() {
    const holderDetails = JSON.parse(localStorage.getItem("holderDetails"));
    const transactionDetails = JSON.parse(localStorage.getItem("transactionDetails"));

    // Display Holder Details
    const holderDetailsDiv = document.getElementById("saved-holder-details");
    if (holderDetails) {
        holderDetailsDiv.innerHTML = `
            <h3>Account Holder Details:</h3>
            <p><strong>IFSC Code:</strong> ${holderDetails.ifscCode}</p>
            <p><strong>Holder's Name:</strong> ${holderDetails.holderName}</p>
            <p><strong>Branch Name:</strong> ${holderDetails.branchName}</p>
        `;
    } else {
        holderDetailsDiv.innerHTML = "<p>No account holder details saved.</p>";
    }

    // Display Transaction Details
    const transactionDetailsDiv = document.getElementById("saved-transaction-details");
    if (transactionDetails) {
        transactionDetailsDiv.innerHTML = `
            <h3>Transaction Details:</h3>
            <p><strong>Transaction ID:</strong> ${transactionDetails.transactionId}</p>
            <p><strong>Amount:</strong> ${transactionDetails.amount}</p>
            <p><strong>Date:</strong> ${transactionDetails.date}</p>
        `;
    } else {
        transactionDetailsDiv.innerHTML = "<p>No transaction details saved.</p>";
    }
}

// Load saved details when page is loaded
window.onload = function() {
    displaySavedDetails();
};