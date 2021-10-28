const products = [
    {
        id : 1,
        imgSrc : "./assets/img/candy 1.png",
        title : "Candy 1",
        cost : "$5",
        type : "Candy",
    },
    {
        id : 2,
        imgSrc : "./assets/img/pumpkin 1.png",
        title : "Pumpkin 1",
        cost : "$15",
        type : "Pumpkin",
    },
    {
        id : 3,
        imgSrc : "./assets/img/candy 2.png",
        title : "Candy 2",
        cost : "$20",
        type : "Candy",
    },
    {
        id : 4,
        imgSrc : "./assets/img/pumpkin 2.png",
        title : "Pumpkin 2",
        cost : "$24",
        type : "Pumpkin",
    },
    {
        id : 5,
        imgSrc : "./assets/img/candy 3.png",
        title : "Candy 3",
        cost : "$3",
        type : "Candy",
    },
    {
        id : 6,
        imgSrc : "./assets/img/pumpkin 3.png",
        title : "Pumpkin 3",
        cost : "$45",
        type : "Pumpkin",
    },
    {
        id : 7,
        imgSrc : "./assets/img/candy 4.png",
        title : "Candy 4",
        cost : "$6",
        type : "Candy",
    },
    {
        id : 8,
        imgSrc : "./assets/img/pumpkin 4.png",
        title : "Pumpkin 4",
        cost : "$150",
        type : "Pumpkin",
    },
    {
        id : 9,
        imgSrc : "./assets/img/candy 5.png",
        title : "Candy 5",
        cost : "$10",
        type : "Candy",
    },
    {
        id : 10,
        imgSrc : "./assets/img/pumpkin 5.png",
        title : "Pumpkin 5",
        cost : "$8",
        type : "Pumpkin",
    },
]

const productContainer = document.getElementById("product-container")

window.addEventListener("DOMContentLoaded",function(){
    displayProduct(products)
    displayFilter()
})

function displayProduct(product) {
    let displayprod = product.map(function(item){
        return `<div class="item">
                    <div class="img">
                        <img src= "${item.imgSrc}" alt=${item.title}>
                    </div>
                    <div class="detail">
                        <h4>${item.title}</h4>
                        <p>${item.cost}</p>
                    </div>
                    <span>
                        <i class='bx bxs-cart-alt'></i>
                    </span>
                </div>`
    });
    displayprod = displayprod.join("")

    productContainer.innerHTML = displayprod
} 

const filterBtn = document.querySelectorAll("#section-btn li")

function displayFilter() {
    filterBtn.forEach(function(btn){
        btn.addEventListener("click",function(e){
            const data = e.currentTarget.dataset.id;
            const productFilter = products.filter(function(item){
                if(item.type === data) {
                    return item
                }
            })
            if (data === "All") {
                displayProduct(products)
            }else {
                displayProduct(productFilter)
            }
            filterBtn.forEach(function(btn){
                btn.classList.remove("active")
            })
            btn.classList.add("active")
        })
    })
}

let scrollpos = window.scrollY
const header = document.querySelector(".fixed")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("active")
const remove_class_on_scroll = () => header.classList.remove("active")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

})

const link = document.querySelectorAll(".link")
const sections = document.querySelectorAll(".section")


window.addEventListener("scroll",function(){
    let current = '';
    sections.forEach (section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 4)){
            current = section.getAttribute("id")
        }
    })

    link.forEach(li => {
        li.classList.remove("active")
        if(li.classList.contains(current)) {
            li.classList.add("active")
        }
    })
})

