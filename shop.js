let htmlProducts = '';

fetch('https://api.myjson.online/v1/records/f3a0625a-1b27-47b5-932b-31cf556e5a27')
    .then((res) => res.json())
    .then((response) => {

        console.log("🤔🤔🤔 ~ .then ~ response:", response.data)
        for (let i = 0; i < response.data.length; i++) {
            htmlProducts += `
            <div class="card" style="width: 18rem; margin-bottom: 2rem">
            <img src="${response.data[i].image}" class="card-img-top" alt="...">
            <div class="card-body" style="margin-bottom: 40px">
                <h5 class="card-title">${response.data[i].name}</h5>
                <p class="card-text">${response.data[i].description}</p>
                <p class="card-text">Price: ${response.data[i].price}</p>
                <button class="AddMore" data-id="${response.data[i].id}" data-name="${response.data[i].name}" data-price="${response.data[i].price}" data-img="${response.data[i].image}">Add to cart</button>
            </div>
        </div>
            `
        }
        document.getElementById('content').innerHTML = htmlProducts

        let addToCartButtons = document.getElementsByClassName('AddMore');
        for (let button of addToCartButtons) {
            button.addEventListener('click', addToCart);
        }
    
        function addToCart(event) {
            let productId = event.target.getAttribute('data-id');
            let productName = event.target.getAttribute('data-name');
            let productPrice = event.target.getAttribute('data-price');
            let productImg = event.target.getAttribute('data-img');

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Done! Check cart",
                showConfirmButton: false,
                timer: 1500
              });
              let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            let existingItem = cartItems.find(item => item.id === productId, 
                item => item.name === productName,
                item => item.price === productPrice,
                item => item.img === productImg,

                );

            console.log(productImg)
            console.log(productId)
            // let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            // let existingItem = cartItems.find(item => item.id === productId, 
            //     item => item.name === productName,
            //     item => item.price === productPrice,
            //     item => item.img === productImg,

            //     );
    
            // if (existingItem) {
            //     existingItem.quantity += 1;
            // } else {
            //     cartItems.push({ id: productId, quantity: 1, name: productName, price: productPrice, img: productImg });
            // }
    
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    })

