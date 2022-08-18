const products = {
  cheeseBurgerPizza: {
    name: "Cheeseburger Pizza",
    price: 395,
    amount: 0,
    get totalPrice() {
      return this.price * this.amount;
    },
  },
  cheesy: {
    name: "Cheesy",
    price: 450,
    amount: 0,
    get totalPrice() {
      return this.price * this.amount;
    },
  },
  asianShrimps: {
    name: "Asian Shrimps",
    price: 290,
    amount: 0,
    get totalPrice() {
      return this.price * this.amount;
    },
  },
  cheesyChicken: {
    name: "Cheesy Chicken",
    price: 385,
    amount: 0,
    get totalPrice() {
      return this.price * this.amount;
    },
  },
};

const productBtn = document.querySelectorAll(".content-order__btn");

productBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const parent = event.currentTarget.closest(".pizza__products"),
    parentId = parent.getAttribute("id"),
    productTotalPrice = parent.querySelectorAll('.content-order__price'),
    btnPlusOrMinus = parent.querySelectorAll('.content-order__btn'),
    productAmount = parent.querySelectorAll('.content-order__btn span');

    if (btnPlusOrMinus === "+") products[parentId].amount++;
    else if (products[parentId].amount > 0) products[parentId].amount--;

    productAmount.innerHTML = products[parentId].amount;
    productTotalPrice.innerHTML = products[parentId].totalPrice;
  });
});
