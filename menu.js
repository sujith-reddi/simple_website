const categories = [
  {
    name: 'All',
    filter: 'all',
  },
  {
    name: 'Breakfast',
    filter: 'breakfast',
  },
  {
    name: 'Lunch',
    filter: 'lunch',
  },
  {
    name: 'Shakes',
    filter: 'shakes',
  },
  {
    name: 'Dinner',
    filter: 'dinner',
  },
];

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: "$15.99",
    location: "item-1.jpeg",
    des: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: "$13.99",
    location: "item-2.jpeg",
    des: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: "$6.99",
    location: "item-3.jpeg",
    des: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: "$20.99",
    location: "item-4.jpeg",
    des: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: "$22.99",
    location: "item-5.jpeg",
    des: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: "$18.99",
    location: "item-6.jpeg",
    des: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: "$8.99",
    location: "item-7.jpeg",
    des: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: "$12.99",
    location: "item-8.jpeg",
    des: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: "$16.99",
    location: "item-9.jpeg",
    des: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: "$22.99",
    location: "item-10.jpeg",
    des: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

window.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.querySelector('#filter-container');
  const menuContainer = document.querySelector('#menu-container');

  // Filtering items
  const filterMenu = (event) => {
    document.querySelectorAll('.filter-element').forEach((element) => {
      element.classList.remove('filter-active');
    });
    event.target.classList.add('filter-active');

    document.querySelectorAll('.menu-item').forEach((element) => {
      if (
        (event.target.id !== element.dataset.category) &
        (event.target.id !== 'all')
      ) {
        element.classList.add('hide-menu');
      } else {
        element.classList.remove('hide-menu');
      }
    });
  };

  // Filter buttons
  categories.forEach((element) => {
    const filterButton = document.createElement('button');
    filterButton.innerText = element.name;
    filterButton.classList.add('filter-element');
    if (element.filter === 'all') {
      filterButton.classList.add('filter-active');
    }
    filterButton.id = element.filter;
    filterButton.addEventListener('click', filterMenu);

    filterContainer.appendChild(filterButton);
  });

  // Menu cards 
  menu.forEach((element) => {
    // Item
    const menuItem = document.createElement('div');
    menuItem.dataset.category = element.category;
    menuItem.classList.add('menu-item');

    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('class','left-div');
    
    const itemImg = document.createElement('img');
    itemImg.src = `images/${element.location}`;
    itemImg.alt = element.title;
    itemImg.setAttribute('class','item-img');
    leftDiv.appendChild(itemImg);
    menuItem.appendChild(leftDiv);
    
    const rightDiv = document.createElement('div');
    rightDiv.setAttribute('class','right-div');

    const itemHeader = document.createElement('div');
    itemHeader.setAttribute('class','item-header');

    // Item Name
    const itemTitle = document.createElement('p');
    itemTitle.setAttribute('class','item-title');
    const itemTitleText = document.createTextNode(element.title);
    itemTitle.appendChild(itemTitleText);
    itemHeader.appendChild(itemTitle);
    
    // Item Price
    const price = document.createElement('p');
    price.setAttribute('class','item-price');
    const priceText = document.createTextNode(element.price);
    price.appendChild(priceText);
    itemHeader.appendChild(price);
    rightDiv.appendChild(itemHeader);

    // Item description
    const description = document.createElement('p');
    description.setAttribute('class','item-des');
    const desText = document.createTextNode(element.des);
    description.appendChild(desText);
    rightDiv.appendChild(description);

    menuItem.appendChild(rightDiv);
    menuContainer.appendChild(menuItem);
  });
});
