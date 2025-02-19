const form = document.querySelector('form');

const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = product.value;
    const quantity = qty.value;
    const li = document.createElement('li');
    li.innerText = `${quantity} ${productName}`;
    list.append(li);
    form.reset();
})

const addElement = (product, qty) => {
    const li = document.createElement('li');
    li.innerText = `${qty} ${product}`;
    list.appendChild(li);
}
