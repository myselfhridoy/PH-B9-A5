let selectedSeats = [];
let totalPrice = 0;
let totalSeats = 12;
let selectedSeatsNumber = 0;
let couponApplied = false;

function applyCoupon() {
    couponApplied = true;
}


function removeSeatFromSelection(seatId) {
    const index = selectedSeats.indexOf(seatId);
    if (index !== -1) {
        selectedSeats.splice(index, 1);
    }
}

function selectSeat(seatId, price) {
    const seatButton = document.getElementById(seatId);
    // console.log('Button Clicked');

    if (selectedSeats.includes(seatId)) {
        if (couponApplied) {
            console.log("You can't deselect your seat after applying a coupon.");
            return;
        }
        removeSeatFromSelection(seatId);

        seatButton.style.backgroundColor = "#F7F8F8";
        totalPrice = totalPrice - price;
        // console.log('Total Price After Deselect', totalPrice);



    }
    else {
        if (selectedSeats.length >= 4) {
            console.log("You can't select more than 4 seats.");
            return;
        }
        selectedSeats.push(seatId);
        // console.log(selectedSeats);
        seatButton.style.backgroundColor = "#1DD100";
        totalPrice = totalPrice + price;
        // console.log('Total Price After Select', totalPrice);

    }
    // console.log(selectedSeats.length)
    let leftSeats = totalSeats - selectedSeats.length;
    // console.log(leftSeats);
    const availableSeatsElement = document.getElementById('left-seats');
    let availableSeats = availableSeatsElement.innerText;
    availableSeats = leftSeats;
    availableSeatsElement.innerText = availableSeats;
    updateSelectedSeatsTable();
}


function updateSelectedSeatsTable() {
    const table = document.getElementById("selectedSeatsTable");
    table.innerHTML = "";

    table.deleteTHead();
    table.deleteTFoot();

    const headerRow = table.insertRow();
    const headers = ["Seat", "Class", "Price"];

    for (let i = 0; i < headers.length; i++) {
        const th = document.createElement("th");
        th.textContent = headers[i];
        th.style.fontFamily = "font-inter";
        th.style.fontWeight = "500";
        th.style.color = "#030712";
        th.style.paddingRight = "60px";
        th.style.paddingLeft = "60px";
        th.style.textAlign = "center"
        headerRow.appendChild(th);
    }



    for (let i = 0; i < selectedSeats.length; i++) {
        const seatId = selectedSeats[i];
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = seatId;
        cell2.textContent = "Economoy";
        cell3.textContent = "550";


        cell1.style.paddingRight = "10px";
        cell1.style.fontFamily = "font-inter";
        cell1.style.fontWeight = '400';
        cell1.style.color = '#03071299';
        cell1.style.textAlign = "center"
        cell2.style.paddingRight = "10px";
        cell2.style.fontFamily = "font-inter";
        cell2.style.fontWeight = '400';
        cell2.style.color = '#03071299';
        cell2.style.textAlign = "center"
        cell3.style.paddingRight = "10px";
        cell3.style.fontFamily = "font-inter";
        cell3.style.fontWeight = '400';
        cell3.style.color = '#03071299';
        cell3.style.textAlign = "center"

    }

    const hrRow = table.insertRow();
    const hrCell = hrRow.insertCell(0);
    const hr = document.createElement("hr");
    hr.setAttribute("width", "100%");
    hrCell.appendChild(hr);
    hrCell.colSpan = 3;

    const footerRow = table.insertRow();
    const totalCell1 = footerRow.insertCell(0);
    const totalCell2 = footerRow.insertCell(1);
    const totalCell3 = footerRow.insertCell(2);
    totalCell1.textContent = "Total Price";
    totalCell3.textContent = totalPrice;

    totalCell1.style.fontFamily = "font-inter";
    totalCell1.style.fontWeight = '400';
    totalCell1.style.color = '#03071299';
    totalCell1.style.textAlign = "center";
    totalCell2.style.fontFamily = "font-inter";
    totalCell2.style.fontWeight = '400';
    totalCell2.style.color = '#03071299';
    totalCell2.style.textAlign = "center";
    totalCell3.style.fontFamily = "font-inter";
    totalCell3.style.fontWeight = '400';
    totalCell3.style.color = '#03071299';
    totalCell3.style.textAlign = "center";




    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = totalPrice;

}

function applyCoupon() {

    const couponInput = document.getElementById("couponInput");
    const applyButton = document.getElementById("applyButton");
    const table = document.getElementById("table");
    const grandTotalCell = document.getElementById("grandTotal");

    const couponCode = couponInput.value.trim().toUpperCase();

    let discount = 0;

    if (couponCode === "NEW15") {
        discount = 0.15;
    } else if (couponCode === "COUPLE20") {
        discount = 0.20;
    } else {
        alert("Invalid coupon code. Please try again.");
        return;
    }

    const discountedPrice = totalPrice * (1 - discount);

    const totalCell3 = document.getElementById("totalPrice");
    if (totalCell3) {
        totalCell3.textContent = discountedPrice;
    } else {
        console.error("Total price cell not found.");
    }

    const footerRow = table.insertRow();
    const totalCell1 = footerRow.insertCell(0);
    const totalCell2 = footerRow.insertCell(1);
    const totalCell3Footer = footerRow.insertCell(2);
    totalCell1.textContent = "Grand Total";
    totalCell3Footer.textContent = discountedPrice;

    totalCell1.style.fontFamily = "font-inter";
    totalCell1.style.fontWeight = '400';
    totalCell1.style.color = '#03071299';
    totalCell1.style.textAlign = "center";
    totalCell1.style.paddingRight = "300px"
    totalCell2.style.fontFamily = "font-inter";
    totalCell2.style.fontWeight = '400';
    totalCell2.style.color = '#03071299';
    totalCell2.style.textAlign = "center";
    totalCell3Footer.style.fontFamily = "font-inter";
    totalCell3Footer.style.fontWeight = '400';
    totalCell3Footer.style.color = '#03071299';
    totalCell3Footer.style.textAlign = "center";

    if (grandTotalCell) {
        grandTotalCell.textContent = discountedPrice;
    } else {
        grandTotal = totalPrice;
    }

    couponInput.style.display = "none";
    applyButton.style.display = "none";
    seatList.style.display = "none";
}



function handleNextButtonClick() {
    const nameInput = document.getElementById("nameInput");
    const phoneInput = document.getElementById("phoneInput");
    const emailInput = document.getElementById("emailInput");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (name !== "" && phone !== "" && email !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        showSuccessSection();
    } else {
        alert("Please fill out all fields.");
    }
}

function showSuccessSection() {
    // Hide the form section
    const homeSection = document.getElementById("homeSection");
    homeSection.classList.add('hidden');
    const successSection = document.getElementById("successSection");
    successSection.classList.remove('hidden');
}


function showHomeSection() {
    const homeSection = document.getElementById("homeSection");
    homeSection.classList.remove('hidden');
    const successSection = document.getElementById("successSection");
    successSection.classList.add('hidden');
}





