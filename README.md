


# Billing & POS Web App

An elegant, theme‑customizable billing and point-of-sale web application perfect for salons, spas, beauty studios, and boutique retailers.

## 🌐 Live Demo
Experience it live ➤ https://manuvish011.github.io/Calculator.github.io/  
(Replace with your actual deployed URL once published.)

---

## 🧭 Project Overview

Muskan Beauty Touch is built to simplify billing:

- 🔍 **Smart product search** — quickly find and add items
- 📦 **Quantity control** — adjust items before adding to bill
- 🧮 **Real‑time totals** — see subtotal, discount amount, and payable total instantly
- 🎁 **Preset discount buttons** for 0%, 3%, 5%, 6%, 8%, and 10% discounts
- 🗑️ **Clear bill** with one click
- 🖨️ **Print-ready invoice**
- 🧾 **Calculate change** based on customer payment
- 🎨 **Theme color picker** — choose from four brand palettes

---

## 🎨 UI Walkthrough

```

┌──────────────────────────────────────────────┐
│              Billing Screen                  │
├──────────────────────────────────────────────┤
│ \[🔍 Quick Product Search]                    │
│ Price \[\_\_\_\_]      Quantity \[ 1 ]            │
│ \[Add to Bill]                                │
├──────────────────────────────────────────────┤
│ Product     Price    Qty    Total           │
│ ——————————————————————————————————————       │
│ \[No items added yet]                         │
├──────────────────────────────────────────────┤
│ Subtotal     ₹0.00    Discount ₹0.00 (0%)   Total ₹0.00  │
├──────────────────────────────────────────────┤
│ \[0%] \[3%] \[5%]                              │
│ \[6%] \[8%] \[10%]                             │
├──────────────────────────────────────────────┤
│ \[Clear List]                                │
├──────────────────────────────────────────────┤
│ \[🖨️ Print Bill]   \[💵 Calculate Change]      │
└──────────────────────────────────────────────┘

````

- **Search bar**: Start typing a product name—autocomplete fetches price.
- **Price field**: Auto-filled or adjustable before adding.
- **Quantity spinner**: Defaults to 1.
- **Bill table**: Lists items, quantity, unit price & total dynamically.
- **Discount buttons**: Apply the whole-bill discount percentage instantly.
- **Bottom bar**: Displays updated Subtotal, Discount amount, and Grand Total.
- **Clear List**: Resets the entire bill.
- **Print Bill**: Opens a print-friendly invoice.
- **Calculate Change**: Prompts payment input and shows change due.
- **Theme Picker**: Pick your brand colors—Red, Green, Blue, Yellow—for sidebar and accents.

---

## ⚙️ Technical Breakdown

### HTML
- Structured layout with navigation sidebar.
- Main billing section with form inputs and a table to display billed items.

### CSS
- Themeable with CSS variables (`--primary`, `--bg`, etc.)
- `.dark-theme` class for dark/light mode toggle.
- A flex or grid layout for responsiveness.

### JavaScript
- **Initialization**: Loads saved theme color & dark-mode from `localStorage`.
- **Product search**: Filters your product list, retrieves price (static JSON / API).
- **Bill management**:
  - `addItem(name, price, quantity)` → updates bill items and refreshes UI.
  - `applyDiscount(𝑥%)` → recalculates totals & shows discount amount.
  - `clearBill()` → resets everything.
- **Print & Payment**:
  - `printBill()` → opens `window.print()` in a special CSS layout.
  - `calculateChange()` → prompts user payment, calculates and displays change.

---

## 🚀 Setup & Use Locally

```bash
# Clone this repo
git clone https://github.com/yourusername/pos-billing-app.git
cd pos-billing-app

# Open in browser
open index.html
````

No installations needed—pure modern web tech (HTML, CSS, JS).

---

## 🤝 Contributing

Improvements welcome! Here’s how to help:

1. **Fork** this repo
2. **Branch** (`git checkout -b feat/your-feature`)
3. **Code** your changes
4. **Commit** (`git commit -m "feat: add your feature"`)
5. **Push** and open a **Pull Request**

Suggested enhancements:

* Barcode scanner input support
* Inventory sync & CRUD interface
* User roles (admin, cashier)
* Export bills (CSV, JSON)
* Keyboard shortcuts for faster checkout

---

## 📄 License

MIT‑licensed—see `LICENSE.md` for details.

---

## 🎀 Demo Flow

1. Search “Shampoo” → price auto fills → set Qty to 2 → click *Add to Bill*
2. Discount: hit **5% Discount** → totals update dynamically
3. Click **Calculate Change**, enter ₹600 → see correct change
4. Print bill; sidebar color can be switched to Green or Blue for theme variety


