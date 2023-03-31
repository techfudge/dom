// get DOM elements
const items = document.querySelectorAll('#cart tbody tr');
const qtyInputs = document.querySelectorAll('.qty-input');
const minusBtns = document.querySelectorAll('.minus-btn');
const plusBtns = document.querySelectorAll('.plus-btn');
const itemTotals = document.querySelectorAll('.item-total');
const deleteBtns = document.querySelectorAll('.delete-btn');
const likeBtns = document.querySelectorAll('.like-btn');
const totalPrice = document.querySelector('.total-price');

// add event listeners to each item's plus and minus buttons
for (let i = 0; i < items.length; i++) {
  minusBtns[i].addEventListener('click', () => {
    if (qtyInputs[i].value > 1) {
      qtyInputs[i].value--;
      updateItemTotal(i);
      updateTotalPrice();
    }
  });
  
  plusBtns[i].addEventListener('click', () => {
    qtyInputs[i].value++;
    updateItemTotal(i);
    updateTotalPrice();
  });
  
}