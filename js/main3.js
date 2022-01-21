var products={
    "p1":0, "p2":0, "p3":0, "p4":0, "p5":0, "p6":0, "p7":0, "p8":0 
};

const main = document.querySelector('.main');
const container = document.querySelector('.container');
const header = document.querySelector('.header');
//get cart icon
const cartIcon = document.querySelector('.mycart');

//get add-to-cart button object
const addCart = document.querySelectorAll('#add-cart');

//get cart content box
const cart = document.querySelector('.cart-content');

//get total cart amount
var totalAmt = document.getElementById('total-amt');

//get hamburger-content
var hamContent = document.querySelector('.hamburger');

//get hamburger
var ham = document.querySelector('.myham');

//get logout
var logout = document.querySelector('.logout');


ham.addEventListener('click',showHam);
function showHam(){
    if(ham.classList.contains('fa-bars')){
        hamContent.style.display = 'block';
        ham.classList.remove('fa-bars');
        ham.classList.add('fa-window-close');    
    }
    else{
        hamContent.style.display = 'none';
        ham.classList.remove('fa-window-close');
        ham.classList.add('fa-bars');    
    }

}


//add event listener on cart to open it on click
cartIcon.addEventListener('click', (e) => {

    // console.log("icon"+cart.style.display);

    //if cart isnt opened
    if(cartIcon.classList.contains('fa-shopping-cart')){
        cart.style.display = 'block';
        cartIcon.classList.remove('fa-shopping-cart');
        cartIcon.classList.add('fa-window-close');
    }

    //else close cart on click of cart icon
    else{
        cart.style.display = 'none';
        cartIcon.classList.remove('fa-window-close');
        cartIcon.classList.add('fa-shopping-cart');
    }
});





document.addEventListener('DOMContentLoaded', buildcart);

function buildcart(){
    getfromdb(function(result){
        console.log(result);
        for(var i in result){
            products[i]=parseInt(result[i][2]);
            // createCartItem(i,'k','img/k1.png',200,products[i]);
            createCartItem(i,result[i][0],'img/k'+i.substr(1)+'.png',result[i][1],products[i]);
        }
    });
    // console.log(products);

}





//add listener on each add-to-cart button
addCart.forEach((addBtn) => addBtn.addEventListener('click',addToCart));


//function to perform on click of add-to-cart button
function addToCart(e){

    // cart.style.display = 'none';

    //getting corresponding kajal item
    const kajalItem = e.target.parentElement.parentElement;

    successAdded(kajalItem);
    
    //getting product id and creating new id for cart product
    const productId = "p"+kajalItem.id.substr(1);

    
    //getting all its child divs-image and text
    const childs = kajalItem.children;

    //getting img tag and cloning(copying) it to create same duplicate
    const imgSrc = childs[0].firstElementChild.src.substr(-10);

    //getting kajal name 
    const kajalName = childs[1].firstElementChild.textContent;

    //getting kajal cost and remove ₹ sign by substr
    const cost = parseInt(childs[1].lastElementChild.textContent.substr(1));

    //looping through all of the products 
    var found=0;
    for(var key in products){

        //if our product is already in cart
        if(key===productId && products[key]>0){
            found=1;

            //inc it's count both in arr and cart and database
            products[key]+=1;
            var quan = document.getElementById(productId).lastElementChild.children[1];
            const quanNum = parseInt(quan.innerText)+1;
            quan.innerText = quanNum;

            addtodb(productId,quanNum);


            //inc total amt of cart
            increaseTotal(1,cost);
            break;
        }
    }


    //if product is not present in cart
    if(found===0){
        
        // //create a div for kajalimage
        // var cartImg = document.createElement('div');
        // cartImg.className = 'cart-item-sub image';
        // var imgTag = document.createElement('img');
        // imgTag.setAttribute('src',imgSrc);
        // cartImg.appendChild(imgTag);
        
        
        // //create a div for kajaltext - name and amount and a remove button
        // var cartText = document.createElement('div');
        // cartText.className = 'cart-item-sub name';
        // cartText.innerHTML = `<h4>${kajalName}</h4>
        // <p>₹${cost}</p>`;

        // //remove button
        // var removeBtn = document.createElement('button');
        // removeBtn.innerText = 'Remove';
        // removeBtn.className = 'remove-btn';
        // cartText.appendChild(removeBtn);


        // //create a div for kajal item quantity - arrow up and down, quantity added
        // var cartQuantity = document.createElement('div');
        // cartQuantity.className = 'cart-item-sub cart-quantity';

        // //arrow up
        // var arrowUp = document.createElement('span');
        // arrowUp.className = 'mdi mdi-arrow-up';
        
        // //arrow down
        // var arrowDown = document.createElement('span');
        // arrowDown.className = 'mdi mdi-arrow-down';
        
        // //quantity
        // var quantity = document.createElement('span');
        // quantity.innerText = `1`;
        // products[productId]=1;

        // //appending all three to cartQuantity
        // cartQuantity.appendChild(arrowUp);
        // cartQuantity.appendChild(quantity);
        // cartQuantity.appendChild(arrowDown);


        // //cart item div
        // var cartItem = document.createElement('div');
        // cartItem.classList.add('cart-item');
        // cartItem.setAttribute('id',productId);

        // //appending img, text and quantity divs to it
        // cartItem.appendChild(cartImg);
        // cartItem.appendChild(cartText);
        // cartItem.appendChild(cartQuantity);

        // //appending cartItem to our cart content list before the first child(kajalitem) of cart 
        // cart.insertBefore(cartItem,cart.children[0]);

        // //increase total by 1*cost
        // increaseTotal(1, cost);

        // //adding event listener on arrow up and down to inc and dec quantity respectively
        // arrowUp.addEventListener('click',(e) => incQuan(e, productId, cost));
        // arrowDown.addEventListener('click', (e) => decQuan(e, productId, cost));

        // //adding event listener on remove button to remove item fully from cart
        // removeBtn.addEventListener('click', (e) => removeItem(e,cartItem,productId,cost));
        
        createCartItem(productId, kajalName, imgSrc, cost, 1);

        addtodb(productId,1);

    }
}


function createCartItem(productId, kajalName, imgSrc, cost, quan){
    
    //create a div for kajalimage
    var cartImg = document.createElement('div');
    cartImg.className = 'cart-item-sub image';
    var imgTag = document.createElement('img');
    imgTag.setAttribute('src',imgSrc);
    cartImg.appendChild(imgTag);
    
    
    //create a div for kajaltext - name and amount and a remove button
    var cartText = document.createElement('div');
    cartText.className = 'cart-item-sub name';
    cartText.innerHTML = `<h4>${kajalName}</h4>
    <p>₹${cost}</p>`;

    //remove button
    var removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.className = 'remove-btn';
    cartText.appendChild(removeBtn);


    //create a div for kajal item quantity - arrow up and down, quantity added
    var cartQuantity = document.createElement('div');
    cartQuantity.className = 'cart-item-sub cart-quantity';

    //arrow up
    var arrowUp = document.createElement('span');
    arrowUp.className = 'mdi mdi-arrow-up';
    
    //arrow down
    var arrowDown = document.createElement('span');
    arrowDown.className = 'mdi mdi-arrow-down';
    
    //quantity
    var quantity = document.createElement('span');
    quantity.innerText = quan;
    products[productId]=quan;

    //appending all three to cartQuantity
    cartQuantity.appendChild(arrowUp);
    cartQuantity.appendChild(quantity);
    cartQuantity.appendChild(arrowDown);


    //cart item div
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('id',productId);

    //appending img, text and quantity divs to it
    cartItem.appendChild(cartImg);
    cartItem.appendChild(cartText);
    cartItem.appendChild(cartQuantity);

    //appending cartItem to our cart content list before the first child(kajalitem) of cart 
    cart.insertBefore(cartItem,cart.children[0]);

    //increase total by 1*cost
    increaseTotal(quan, cost);

    //adding event listener on arrow up and down to inc and dec quantity respectively
    arrowUp.addEventListener('click',(e) => incQuan(e, productId, cost));
    arrowDown.addEventListener('click', (e) => decQuan(e, productId, cost));

    //adding event listener on remove button to remove item fully from cart
    removeBtn.addEventListener('click', (e) => removeItem(e,cartItem,productId,cost));

}




function decQuan(e, productId, cost){
    // console.log(e.target.value);

    //getting curr quantity
    var currQuan = e.target.previousElementSibling;
    
    //calculating new quantity by dec curr quantity by 1
    var newQuan = parseInt(currQuan.textContent) - 1;

    //if new quantity becomes less than 0, then remove that cartItem from cart
    if(newQuan<=0){
        e.target.parentElement.parentElement.remove();
        
        products[productId]=0;
    }

    //else dec the quantity of cart item
    else{
        currQuan.innerText = newQuan;
        
        products[productId]-=1;
    }
    
    //decrease total amount by 1*cost in both cases
    decreaseTotal(1, cost);

    addtodb(productId,newQuan);
}


function incQuan(e, productId, cost){
    // console.log('bye');

    
    products[productId]+=1;

    //get curr quan
    var currQuan = e.target.nextElementSibling;
    
    //calculate new quan by adding 1
    var newQuan = parseInt(currQuan.textContent) + 1;
    
    //update curr quan = new quan
    currQuan.innerText = newQuan;
    
    //increase total by 1*cost
    increaseTotal(1, cost);

    addtodb(productId,newQuan);
}


function removeItem(e, removeEle, productId, cost){

    products[productId]=0;
    //get current quantity of cart item
    const currQuan = parseInt(removeEle.lastElementChild.children[1].innerText);
    
    //decrease total amount by currQuan*cost
    decreaseTotal(currQuan, cost);

    //remove that cartitem for which remove button is clicked
    removeEle.remove();

    addtodb(productId,0);
}

//increment total
function increaseTotal(quantity, cost){
    var newCost = parseInt(totalAmt.innerText.substr(1)) + (quantity*cost);
    totalAmt.innerText = `₹${newCost}`;
}

//decrement total
function decreaseTotal(quantity, cost){
    var newCost = parseInt(totalAmt.innerText.substr(1)) - (quantity*cost);
    totalAmt.innerText = `₹${newCost}`;
}


function successAdded(item){
    var success = document.createElement('div');
    success.className = 'success';
    success.innerHTML = '<p><span class="mdi mdi-check"></span>Item Added</p>';
    item.appendChild(success);

    setTimeout(() => success.remove(),2000);
}




function addtodb(productId, quantity){

    var params = `pid=${productId}&quan=${quantity}`;


    var xhr = new XMLHttpRequest();
    xhr.open('POST','addtodb.php',true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        if(this.status == 200){
            JSON.parse(this.responseText);
        }
    }
    xhr.send(params);
}



function getfromdb(callback){
    var xhr = new XMLHttpRequest();
    xhr.open('POST','getdb.php',false);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var result = {};
    xhr.onload = function(){
        if(this.status == 200){
            result=JSON.parse(this.responseText);
            callback(result);

        }
    }
    xhr.send();
}

function getresp(){
    var res;
    getfromdb(function(result){
        res=Object.assign({},result);
        console.log(res);
    });
    console.log(res);
    return res;
}

logout.addEventListener('click',signout);

function signout(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','logout.php?logout=1',true);

    xhr.onload = function(){
        if(this.status==200){
            if(this.responseText === ""){
                window.location.href = 'login.html';
            }
        }
    }
    xhr.send();
}