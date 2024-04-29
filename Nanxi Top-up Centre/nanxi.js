const product = [
    {
        id: 0,
        image: 'diamond.jpg',
        title: '115 Diamond',
        price: 110,
    },
    {
        id: 1,
        image: 'diamond.jpg',
        title: '240 Diamond',
        price: 220,
    },
    {
        id: 2,
        image: 'diamond.jpg',
        title: '610 Diamond',
        price: 550,
    },
    {
        id: 3,
        image: 'diamond.jpg',
        title: '1210 Diamond',
        price: 1100,
    },
    {
        id: 4,
        image: 'diamond.jpg',
        title: '2530 Diamond',
        price: 2300,
    },
    {
        id: 5,
        image: 'diamond.jpg',
        title: 'Weekly',
        price: 210,
    },
    {
        id: 6,
        image: 'diamond.jpg',
        title: 'Monthly',
        price: 1100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='row-img'>
                <img class='rowimg' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs. ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0; total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. "+0+".00"
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs. "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs. ${price}.00</h2>`+
                "<i class='bx bxs-trash-alt' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

