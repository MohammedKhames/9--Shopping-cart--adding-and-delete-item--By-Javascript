// setting up varaibles

var ProductBtn= document.getElementById("product-btn");
var ProductContainer= document.getElementById("product-container");
var ProductInput =document.getElementById("product-input");

var data=[

    {
        id:1,
        name:"labtop",
        desc:"this best laptob"

    },
    {
        id:2,
        name:"mobile",
        desc:"this best mobile"

    },
    {
        id:3,
        name:"iphone",
        desc:"this best iphone"

    }
]

//draw ui
function drawUi(items){

    ProductContainer.innerHTML="";

    items.forEach(function(ele) {
        ProductContainer.innerHTML += `<div onclick="deleteItem(${ele.id})">
                                          ${ele.name}
                                       </div> `;

    });

}

//after loading page ----> load the data
window.onload=function(){
    drawUi(data);

}


// add item
ProductBtn.addEventListener("click",addItem);

function addItem(){
    // simple input validation
    if(ProductInput.value==""){
        alert("You should Enter Item");
    }
    else{


        // if there is data---> give me the last id -->if not give me first ele
        var lastID =data.length ? data[data.length-1].id : 0;


        // adding new item in data array
        data.push({
                   id:   ++lastID,
                   name: ProductInput.value,
                   desc: `this is the best ${ProductInput.value}`
                });

        //catching the last item
        var addedItem= data[data.length-1];

        // drawing the added item only in the ui
        ProductContainer.innerHTML += `<div onclick="deleteItem(${addedItem.id})">
                                          ${addedItem.name}
                                       </div> `;;

        // empty the input
        ProductInput.value="";
    }

}


function deleteItem(id){

    // mapping data to catch the id then search inside it by indexof function
    var pressedItemIndex= data.map(function(i){
                                    return i.id
                                    }).indexOf(id);

     if(pressedItemIndex !== -1){
        data.splice(pressedItemIndex,1);
        //refresh the ui after deleting
        drawUi(data);
     }
}


