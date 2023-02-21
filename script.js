const productData = JSON.parse(productsData);
console.log(productData);
const productBox = document.querySelector('.product_cards');

productData.forEach(element => {
       const productEl = document.createElement('div');
       productEl.classList.add('item');

       const containerImg = document.createElement('div');
       containerImg.classList.add('container_img');

       const productImg = document.createElement('img');
       productImg.setAttribute('alt', element.alt);
       productImg.src = element.src;

       const productContent = document.createElement('div');
       productContent.classList.add('info');

       const productName = document.createElement('h4');
       productName.classList.add('info_h4');
       productName.textContent = element.name;

       const productText = document.createElement('p');
       productText.classList.add('info_p');
       productText.textContent = element.desc;

       const productPrice = document.createElement('p');
       productPrice.classList.add('cena');
       productPrice.textContent = element.price;

       containerImg.appendChild(productImg);
       productEl.appendChild(containerImg);
       productContent.appendChild(productName);
       productContent.appendChild(productText);
       productContent.appendChild(productPrice);
       productEl.appendChild(productContent);
       productBox.appendChild(productEl);
   });


