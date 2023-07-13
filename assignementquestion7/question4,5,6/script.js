const ProductContainer = document.getElementById("productContainer");
const CartContainer = document.getElementById("cart");
const CartItemscontainer = document.getElementById("cartItems");
let cart = [];

fetch("https://fakestoreapi.com/products" )
.then(response => response.json())
.then(Data =>{
    // console.log(Data);
    getStoreData(Data);
})
.catch(error => console.log(error));

const getStoreData = (data) => {
    // console.log(data);
    data.forEach(product => {
        var cardBox = document.createElement("div");
        cardBox.classList.add("cardBox");
        ProductContainer.appendChild(cardBox);

        var ProductImage = document.createElement("img");
        ProductImage.classList.add("ig1")
        ProductImage.src = product.image;
        ProductImage.alt = product.title;
        cardBox.appendChild(ProductImage);

        var Title = document.createElement("h5");
        Title.textContent = product.title;
        cardBox.appendChild(Title);

        // var Category = document.createElement("h4");
        // Category.textContent = product.category;
        // cardBox.appendChild(Category);
        
        var Price = document.createElement("p");
        Price.textContent = "$$"+ product.price;
        cardBox.appendChild(Price);

        var cartButton = document.createElement("button");
        cartButton.textContent = "Add to cart"
        cartButton.classList.add("btn1");
        cartButton.addEventListener('click',()=>{ addToCart(product)});
        cardBox.appendChild(cartButton);
        
    });

}

const addToCart = (product) =>{
    
    cart.push(product);
    console.log(cart);
    updateCardUI();
    
}

const updateCardUI = () => {
    CartItemscontainer.innerHTML = "";
    let totalCost=0 ;
    cart.forEach(product=>{
       const CartItems = document.createElement("div");
       CartItems.classList.add("cartitems2");
       CartItemscontainer.appendChild(CartItems);

       var Image = document.createElement("img");
       Image.classList.add("ig2")
       Image.src = product.image;
       Image.alt = product.title;
       CartItems.appendChild(Image);

       var Title = document.createElement("p");
       Title.textContent = product.title;
       CartItems.appendChild(Title);
       
       var Price = document.createElement("p");
       Price.textContent = "$$"+ product.price;
       CartItems.appendChild(Price);

       var cartButton = document.createElement("button");
       cartButton.textContent = "buy"
       cartButton.classList.add("btn2");
       cartButton.addEventListener('click',()=>{
        viewProduct(product);
       })
       CartItems.appendChild(cartButton);

       CartContainer.classList.remove('cartContainer');
       
    })

}

const viewProduct = (product)=> {
// console.log(product);
localStorage.setItem("selectedProduct", JSON.stringify(product));
window.location.href = "singleproduct.html";
}

