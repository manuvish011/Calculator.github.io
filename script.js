let items = [];
let total = 0;
let discountAmount = 0;
let discountPercentage = 0;  // Added to keep track of the discount percentage

function addItem() {
    let priceInput = document.getElementById('price');
    let quantityInput = document.getElementById('quantity');
    
    let price = parseFloat(priceInput.value);
    let quantity = parseInt(quantityInput.value);
    
    if (!isNaN(price) && !isNaN(quantity)) {
        let total_price = price * quantity;
        items.push({ price: price, quantity: quantity, total_price: total_price });
        updateTotals();
        updateItemList();
        priceInput.value = '';
        quantityInput.value = '';
        
        priceInput.focus();
    } else {
        alert('Invalid input for price or quantity.');
    }
}

function updateTotals() {
    total = 0;
    items.forEach(item => {
        total += item.total_price;
    });

    discountAmount = total * (discountPercentage / 100);  // Recalculate discount amount based on the new total
    let discountedTotal = total - discountAmount;

    document.getElementById('subtotal').textContent = `₹${total.toFixed(2)}`;
    document.getElementById('discount').textContent = `₹${discountAmount.toFixed(2)} (${discountPercentage}%)`;
    document.getElementById('total').textContent = `₹${discountedTotal.toFixed(2)}`;
}

function updateItemList() {
    let itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    let billContent = "<table class='bill-table'>";
    billContent += "<thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th>Actions</th></tr></thead>";
    billContent += "<tbody>";
    items.forEach((item, index) => {
        billContent += "<tr>";
        billContent += `<td>Product ${index + 1}</td>`;
        billContent += `<td><input type="number" value="${item.price.toFixed(2)}" onchange="updateItemPrice(${index}, this.value)" class="form-control"></td>`;
        billContent += `<td><input type="number" value="${item.quantity}" onchange="updateItemQuantity(${index}, this.value)" class="form-control"></td>`;
        billContent += `<td>₹${item.total_price.toFixed(2)}</td>`;
        billContent += `<td><button onclick="deleteItem(${index})" class="btn btn-danger">Delete</button></td>`;
        billContent += "</tr>";
    });
    billContent += "</tbody></table>";

    itemList.innerHTML = billContent;
}

function deleteItem(index) {
    items.splice(index, 1);
    updateTotals();
    updateItemList();
}

function clearList() {
    items = [];
    total = 0;
    discountAmount = 0;
    discountPercentage = 0;  // Reset discount percentage
    document.getElementById('subtotal').textContent = '₹0.00';
    document.getElementById('total').textContent = '₹0.00';
    document.getElementById('discount').textContent = '₹0.00';
    updateItemList();
}

function printBill() {
    let billContent = `
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fff;
            color: #000;
            font-size: 36px;
        }
        .container {
            width: 90%;
            margin: 0 auto;
            padding: 16mm;
            text-align: center;
        }
        .header {
            margin-bottom: 30px;
        }
        .header h1 {
            margin: 0;
            font-size: 56px;
            font-weight: bold;
        }
        .section {
            margin-bottom: 30px;
            text-align: left;
        }
        .section-header {
            font-size: 44px;
            margin-bottom: 24px;
            font-weight: bold;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
        }
        th, td {
            padding: 16px;
            border-bottom: 2px solid #000;
            font-size: 36px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        .total-label {
            font-size: 36px;
            margin-bottom: 16px;
            text-align: left;
        }
    </style>
    <div class="container">
        <div class="header">
            <h1>Muskan Beauty Touch</h1>
        </div>
        <div class="section">
            <div class="section-header">Items</div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>`;

    items.forEach((item, index) => {
        billContent += `
            <tr>
                <td>Product ${index + 1}</td>
                <td>₹${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>₹${item.total_price.toFixed(2)}</td>
            </tr>`;
    });

    let subtotal = total.toFixed(2);
    let discountDisplay = discountAmount.toFixed(2);
    let discountedTotal = total - discountAmount;
    billContent += `
                </tbody>
            </table>
        </div>
        <div class="section">
            <div class="section-header">Total</div>
            <div class="total-label">Subtotal: ₹${subtotal}</div>
            <div class="total-label">Discount: ₹${discountDisplay}</div>
            <div class="total-label">Total: ₹${discountedTotal.toFixed(2)}</div>
        </div>
    </div>`;

    // Open print dialog
    let printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Bill</title>'); 
    printWindow.document.write('</head><body>'); 
    printWindow.document.write(billContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

function calculateChange() {
    let amountPaid = parseFloat(prompt('Enter amount paid:'));
    if (!isNaN(amountPaid)) {
        let change = amountPaid - (total - discountAmount);
        alert(`Change due: ₹${change.toFixed(2)}`);
    } else {
        alert('Invalid input for amount paid.');
    }
}

function applyDiscount() {
    discountPercentage = parseFloat(prompt('Enter discount percentage:'));
    if (!isNaN(discountPercentage)) {
        discountAmount = total * (discountPercentage / 100);
        updateTotals();
    } else {
        alert('Invalid input for discount percentage.');
    }
}

function updateItemPrice(index, price) {
    items[index].price = parseFloat(price);
    items[index].total_price = items[index].price * items[index].quantity;
    updateTotals();
    updateItemList();
}

function updateItemQuantity(index, quantity) {
    items[index].quantity = parseInt(quantity);
    items[index].total_price = items[index].price * items[index].quantity;
    updateTotals();
    updateItemList();
}
