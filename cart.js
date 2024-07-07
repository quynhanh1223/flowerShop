    let cart = JSON.parse(localStorage.getItem("cartItems")) || []; 
    console.log(cart)
    let htmlCart = ""
    for (let i = 0; i < cart.length; i++) {
        htmlCart += `
        <tr id="tr-line">
                <td>
                ${i+1}
                </td>
                <td>
                <img src="${cart[i].img}" class="imgSize" alt="...">
                </td>
                <td>
                ${cart[i].name}
                </td>
                <td>
                ${cart[i].quantity}
                </td>
                <td>
                ${cart[i].price}
                </td>
                <td>
                <button class="delete" data-id="${cart[i].id}" data-name="${cart[i].name}">X</button> 
                </td>
              </tr>
        `
    }
    document.getElementById('tbodyGioHang').innerHTML = htmlCart

    let deleteItem = document.getElementsByClassName("delete");
for (let button of deleteItem) {
  button.addEventListener("click", deleteItemInCart);
}
function deleteItemInCart(event) {
  let productId = event.target.getAttribute("data-id");
  let productName = event.target.getAttribute("data-name");
  Swal.fire({
    title: "Are you sure?",
    text: `Do you want to delete ${productName} ?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Delete success",
        icon: "success"
      });
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let newCart = cartItems.filter((item) => item.id !== productId);

  localStorage.setItem("cartItems", JSON.stringify(newCart));
  window.location.reload();
    }
  });
}