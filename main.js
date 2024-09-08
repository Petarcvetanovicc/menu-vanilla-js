const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/image1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/image2.jpg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/image3.jpg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/image4.jpg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/image5.jpg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/image6.jpg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/image7.jpg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/image8.jpg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/image9.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'bison steak',
    category: 'dinner',
    price: 22.99,
    img: './images/steak.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

let menuCentralSection = document.querySelector('.central-menu-section')
let buttons = document.querySelector('.buttons')

window.addEventListener('DOMContentLoaded', function () {
  displayItems(menu)
  displayButtonItems()
})

function displayItems(menuItems) {
  let items = menuItems.map(function (item) {
    return `<div class="menu-item">
            <img src=${item.img} alt="">
        <div class="item-text">
            <div class="item-title">
                <span class="title-span">${item.title}</span>
                <span class="price-span">$${item.price}</span>
            </div>
            <div class="item-desc">
                ${item.desc}
            </div>
        </div>
    </div>`
  })
  items = items.join('')
  menuCentralSection.innerHTML = items
}

function displayButtonItems() {
  let categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ['all']
  )

  let filterBtns = categories
    .map(function (item) {
      return `<button class="filter-buttons" data-id=${item}>${item}</button>`
    })
    .join(' ')

  buttons.innerHTML = filterBtns

  let filterButtons = document.querySelectorAll('.filter-buttons')

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      let category = e.currentTarget.dataset.id

      let categoryMenu = menu.filter(function (menuItem) {
        if (menuItem.category == category) {
          return menuItem
        }
      })

      if (category === 'all') {
        displayItems(menu)
      } else {
        displayItems(categoryMenu)
      }
    })
  })
}
