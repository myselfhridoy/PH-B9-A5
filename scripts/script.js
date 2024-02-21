let selectedSeats = []; // Array to store selected seat IDs
let totalPrice = 0; // Variable to store total price


function selectSeat(seatId, price) {
    const seatButton = document.getElementById(seatId);

    // Check if the seat is already selected
    if (selectedSeats.includes(seatId)) {
        // If the seat is already selected, remove it from the array and reset the button color
        selectedSeats = selectedSeats.filter(id => id !== seatId);
        seatButton.style.backgroundColor = "#F7F8F8";
        totalPrice -= price;
    } else {
        // If the seat is not selected, add it to the array and change the button color to green
        if (selectedSeats.length >= 4) {
            console.log("You can't select more than 4 seats.");
            return;
        }
        selectedSeats.push(seatId);
        seatButton.style.backgroundColor = "#1DD100";
        totalPrice += price;
    }

    // Update the selected seats table
    updateSelectedSeatsTable();
}

function updateSelectedSeatsTable() {
    const table = document.getElementById("selectedSeatsTable");
    table.innerHTML = ""; // Clear the table

    // Add table header
    const headerRow = table.insertRow();
    const headers = ["Seat", "Class", "Price"];
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    // Add selected seats to the table
    selectedSeats.forEach(seatId => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = seatId;
        cell2.textContent = "Economic";
        cell3.textContent = "550";
    });

    // Update total price
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = totalPrice;
}
