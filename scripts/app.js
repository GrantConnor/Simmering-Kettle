const menuData = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    note: 'Choice of sides: homefries, tomatoes, fresh fruit, yogurt, or baked beans.',
    items: [
      { name: 'Kettle Breakfast — Two eggs', price: '$11.99', description: 'Eggs any style with your choice of bacon, ham, or sausage, plus one side, toast, and jam.' },
      { name: 'Kettle Breakfast — Jumbo', price: '$13.99', description: 'Eggs any style with your choice of bacon, ham, or sausage, plus one side, toast, and jam.' },
      { name: 'Kettle Breakfast — Two eggs with peameal or turkey bacon', price: '$13.99', description: 'A larger breakfast option with premium breakfast meat.' },
      { name: 'Kettle Breakfast — Jumbo with peameal or turkey bacon', price: '$15.99', description: 'Eggs any style, one side, toast, and jam.' },
      { name: 'Hearty Italian', price: '$16.99', description: 'Three eggs any style with hot Italian sausage, one side, toast, and jam.' },
      { name: 'Eggs Benny', price: '$17.99', description: 'English muffin topped with your choice of peameal, bacon, ham, or steamed spinach, poached eggs, hollandaise, and one side.' },
      { name: 'Avocado Benny', price: '$17.99', description: 'Poached eggs on avocado with hollandaise on an English muffin, served with one side.' },
      { name: 'Hometown Hash', price: '$18.99', description: 'Corned beef or hot Italian sausage with diced potatoes, onions, red and green peppers, poached eggs, and hollandaise. Served with toast.' },
      { name: 'Breakfast Sandwich — Fried Egg', price: '$9.99', description: 'Served with one side.' },
      { name: 'Breakfast Sandwich — Bacon and Egg', price: '$12.99', description: 'Served with one side.' },
      { name: 'Breakfast Sandwich — Jumbo Western', price: '$14.99', description: 'Served with one side.' },
      { name: 'Bistro Breakfast Club', price: '$14.99', description: 'Fried eggs, bacon, lettuce, tomato, and cheddar cheese.' },
      { name: 'Make it a wrap instead', price: '$15.99', description: 'Swap the Bistro Breakfast Club into a wrap.' },
      { name: 'Monte Cristo', price: '$16.99', description: 'Shaved ham, cheddar, and mozzarella between two slices of French toast, served with your choice of side.' },
      { name: 'Breakfast Parfait', price: '$9.99', description: 'Fresh fruit bowl topped with yogurt and granola.', badges: ['gf'] },
      { name: 'Add two poached eggs', price: '$3.99', description: 'Add-on for the parfait.' },
      { name: 'Kettle Oatmeal', price: '$8.99', description: 'Oatmeal with bananas, peanut butter, and maple syrup.' },
      { name: 'Avocado Bagel', price: '$5.99', description: 'Simple, satisfying, and vegetarian-friendly.', badges: ['v'] },
      { name: 'California Breakfast', price: '$12.99', description: 'Avocado bagel with two eggs and one side.', badges: ['v'] },
      { name: 'The Skillet', price: '$17.99', description: 'Two eggs any style on potatoes with tomatoes, peppers, onions, cheddar, toast, homemade jam, and your choice of bacon, ham, sausage, hot Italian sausage, or mushrooms.', badges: ['sig'] },
      { name: 'Kettle Round Up', price: '$19.99', description: 'Three eggs any style with three choices of bacon, ham, sausage, peameal, or turkey bacon, plus one side, toast, and jam.' },
      { name: 'Hungry Farmer', price: '$20.99', description: 'Three eggs any style, choice of two meats, one side, toast, and jam with your choice of pancake or French toast.', badges: ['sig'] },
      { name: 'Country Fried Chicken n’Eggs', price: '$24.99', description: 'Two eggs any style with crispy seasoned chicken breast, hollandaise sauce, one side, toast, and homemade jam.', badges: ['sig'] },
      { name: 'Salisbury Steak n’Eggs', price: '$24.99', description: 'Two eggs with Salisbury steak, sautéed onions and mushrooms, gravy, one side, and toast with homemade jam.' }
    ]
  },
  {
    id: 'sweet-temptations',
    title: 'Sweet Temptations',
    note: 'Ask for real maple syrup for $2.',
    items: [
      { name: 'Stack o’Pancakes', price: '$10.99' },
      { name: 'Chocolate Chip Pancakes', price: '$11.99' },
      { name: 'Blueberry Pancakes', price: '$13.99' },
      { name: 'French Toast', price: '$10.99' },
      { name: 'Add fresh berries and whipped cream', price: '$4.00' },
      { name: 'Add bananas, whipped cream & chocolate drizzle', price: '$4.00' },
      { name: 'Waffles', price: '$10.99' },
      { name: 'Fried Chicken n’ Cakes/Waffles', price: '$22.99', description: 'Crispy golden fried chicken on a stack of pancakes or waffles with maple syrup and homemade strawberry jam.', badges: ['sig'] }
    ]
  },
  {
    id: 'omelettes-wraps',
    title: 'Omelettes & Wraps',
    note: 'Made with three large eggs and served with one side, toast, and jam. Toppings: $1.99 each for onions, tomatoes, mushrooms, green or red peppers, broccoli, avocado, jalapeños, bbq sauce. $2.99 each for bacon, ham, Italian sausage, cheddar, mozzarella, feta, goat cheese, or egg whites.',
    items: [
      { name: 'Create Your Own', price: '$10.99', description: 'Basic omelette or wrap plus your choice of toppings.' },
      { name: 'Broccoli, Mushroom & Cheese', price: '$14.99', description: 'Choice of cheddar, goat cheese, mozzarella, or feta.', badges: ['v'] },
      { name: 'Western', price: '$15.99', description: 'Ham, onion, and tomato.' },
      { name: 'Denver', price: '$16.99', description: 'Ham, onion, tomato, and green pepper.' },
      { name: 'Veggie Omelette', price: '$16.99', description: 'Red onion, red and green peppers, mushrooms, and tomatoes.', badges: ['v'] },
      { name: 'California', price: '$17.99', description: 'Onion, tomato, avocado, and goat cheese.', badges: ['v'] },
      { name: 'Spinach & Feta', price: '$17.99', description: 'With red pepper, onion, and mushroom.', badges: ['v'] },
      { name: 'Spanish', price: '$17.99', description: 'Hot Italian sausage, onion, tomato, cheddar cheese, and BBQ sauce.' },
      { name: 'Canadian', price: '$17.99', description: 'Bacon, ham, red onion, and green pepper.' }
    ]
  },
  {
    id: 'extras',
    title: 'Bistro Extras',
    note: 'Perfect add-ons for breakfast plates and brunch orders.',
    items: [
      { name: 'Bacon, ham, or sausage', price: '$5.99' },
      { name: 'Peameal or turkey bacon', price: '$6.99' },
      { name: 'Fresh cut fruit', price: '$5.99' },
      { name: 'Baked beans', price: '$4.99' },
      { name: 'Side of avocado', price: '$4.99' },
      { name: 'Homefries', price: '$5.99' },
      { name: 'Loaded Homefries', price: '$7.99', description: 'Onions, peppers, and tomatoes sautéed with homefried potatoes.', badges: ['v'] }
    ]
  },
  {
    id: 'appetizers',
    title: 'Appetizers',
    items: [
      { name: 'Hearty Homemade Soup du Jour', price: '$5.99' },
      { name: 'Garlic Bread', price: '$5.99' },
      { name: 'Garlic Bread with cheese', price: '$7.99' },
      { name: 'Onion Rings', price: '$7.99' },
      { name: 'Sweet Potato Fries', price: '$8.49' },
      { name: 'Jalapeño Poppers', price: '$9.99' },
      { name: 'Deep Fried Pickles', price: '$9.99' },
      { name: 'Guac & Artichoke Spinach Dip with Tortilla Chips', price: '$15.99' }
    ]
  },
  {
    id: 'salads',
    title: 'Salads',
    note: 'Boost any salad with add-on protein.',
    items: [
      { name: 'Add pulled chicken', price: '$6.99' },
      { name: 'Add grilled chicken', price: '$8.99' },
      { name: 'Chef Salad', price: '$14.99', description: 'Mixed greens, carrots, cucumber, tomato, chickpea, and hemphearts.', badges: ['gf', 'v'] },
      { name: 'Chickpea Avocado Bowl', price: '$16.99', description: 'Zesty chickpea salad in a crispy tortilla bowl with jalapeño cream.', badges: ['gf', 'v'] },
      { name: 'Quinoa Salad', price: '$16.99', description: 'Mixed greens, onions, peppers, cilantro, corn, black beans, and chipotle cream.', badges: ['gf', 'v'] },
      { name: 'Caesar Salad', price: '$17.99', description: 'Crisp romaine, parm crisps, bacon bits, and garlic caesar dressing.' },
      { name: 'Greek Salad', price: '$18.99', description: 'Mixed greens, romaine, red and green peppers, red onion, cucumber, tomatoes, kalamata olives, and feta.', badges: ['gf', 'v'] },
      { name: 'Spinach Beet Salad', price: '$18.99', description: 'Baby spinach, mixed greens, beets, red peppers, red onions, cucumber, feta, and walnuts with a balsamic vinaigrette.', badges: ['gf', 'v'] },
      { name: 'Berry Goat Cheese', price: '$19.99', description: 'Mixed greens, romaine, red and green peppers, red onion, cucumber, strawberries, blueberries, goat cheese, and poppy seed dressing.', badges: ['gf', 'v'] }
    ]
  },
  {
    id: 'beverages',
    title: 'Beverages',
    items: [
      { name: 'Fruit Smoothie', price: '$7.99' },
      { name: 'Mango Lassi', price: '$7.99' },
      { name: 'Milkshakes', price: '$7.99', description: 'Vanilla, strawberry, chocolate, or iced coffee.' },
      { name: 'Sparkling Mineral Water', price: '$3.99' },
      { name: 'Iced tea', price: '$2.99' },
      { name: 'Pop (No Refills)', price: '$2.49' },
      { name: 'Milk — Small', price: '$2.99' },
      { name: 'Milk — Large', price: '$4.99' },
      { name: 'Juice — Regular', price: '$2.99', description: 'Orange, apple, pink grapefruit, cranberry, or tomato.' },
      { name: 'Juice — Large', price: '$4.99', description: 'Orange, apple, pink grapefruit, cranberry, or tomato.' },
      { name: 'Hot Chocolate', price: '$2.99' },
      { name: 'Specialty Tea', price: '$3.49' },
      { name: 'Coffee or Tea', price: '$2.79' },
      { name: 'Espresso', price: '$3.95' },
      { name: 'Cappuccino', price: '$4.75' },
      { name: 'Latte', price: '$5.75' }
    ]
  },
  {
    id: 'wraps',
    title: 'Wraps',
    note: 'Served with your choice of soup, fries, or slaw.',
    items: [
      { name: 'Greek Chicken Wrap', price: '$19.99', description: 'Greens, red and green pepper, red onion, tomato, cucumber, feta, and tzatziki sauce.' },
      { name: 'Baby Spinach Veggie Wrap', price: '$19.99', description: 'Spinach dip, spinach, red onion, red and green pepper, mushroom, and cucumber.', badges: ['v'] },
      { name: 'Chicken Caesar Wrap', price: '$19.99', description: 'Romaine, bacon bits, parmesan cheese, and creamy garlic dressing.' },
      { name: 'Buffalo Chicken Wrap', price: '$19.99', description: 'Greens, tomato, cheddar, ranch, and buffalo chicken.' },
      { name: 'Turkey Bacon Avocado Wrap', price: '$19.99', description: 'Fresh roasted turkey, bacon, avocado, lettuce, tomato, and herb mayo.' },
      { name: 'Quinoa Chickpea Wrap', price: '$19.99', description: 'Seasoned quinoa, red and green peppers, red onion, black beans, corn, and chickpeas with chipotle mayo.', badges: ['v'] }
    ]
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    note: 'Served with your choice of soup, fries, or slaw.',
    items: [
      { name: 'Deluxe Grilled Cheese', price: '$14.99', description: 'Parmesan crust on the outside with mozzarella and cheddar inside.' },
      { name: 'Add bacon or ham', price: '$5.99' },
      { name: 'Add buffalo chicken', price: '$6.99' },
      { name: 'Add pesto tomato & avocado', price: '$6.99' },
      { name: 'Texan BLT', price: '$17.99', description: 'Your choice of peameal or regular bacon with arugula and tomato.' },
      { name: 'Reuben', price: '$19.99', description: 'Corned beef with sauerkraut and mozzarella.', badges: ['sig'] },
      { name: 'Greek Mediterranean', price: '$20.99', description: 'Sautéed onions, peppers, grilled tomatoes, balsamic-steamed spinach, and feta in a pesto and parmesan-crusted panini.' },
      { name: 'Chicken Parm Sandwich', price: '$22.99', description: 'Panko crusted chicken baked in tomato sauce and mozzarella.' },
      { name: 'Turkey Club', price: '$22.99', description: 'Fresh roasted turkey, bacon, lettuce, tomato, cheddar, and mayo.' },
      { name: 'Chick n’ Waffle', price: '$23.99', description: 'Hand-dusted crispy chicken between two waffles with chipotle mayo.' },
      { name: 'Grilled Chicken Club', price: '$24.99', description: 'Chicken breast, bacon, cheddar, lettuce, tomato, and herb mayo.' }
    ]
  },
  {
    id: 'burgers',
    title: 'Burger Combos',
    note: 'Served with your choice of soup, fries, or slaw.',
    items: [
      { name: 'Kettle Burger', price: '$18.99', description: '6oz handmade patty garnished the way you like it.' },
      { name: 'Portabello Burger', price: '$20.99', description: 'Panko crusted mushroom cap topped with guac, spinach, and chipotle mayo.', badges: ['v'] },
      { name: 'Crispy Chicken Burger', price: '$20.99', description: 'Hand dusted in the house recipe and fried, then topped with lettuce, tomato, and mayo.' },
      { name: 'Grilled Chicken BBQ Burger', price: '$20.99', description: 'BBQ sauce, onion rings, and cheddar.' },
      { name: 'Mushroom Goat Cheese Burger', price: '$22.99', description: 'Topped with sautéed mushrooms and goat cheese.' },
      { name: 'Banquet Burger', price: '$24.99', description: 'Loaded and topped with bacon and cheddar.', badges: ['sig'] }
    ]
  },
  {
    id: 'entrees',
    title: 'Kettle Entrées',
    items: [
      { name: 'Haddock n’ Chips', price: '$16.99' },
      { name: 'Chicken Fingers & fries', price: '$19.99' },
      { name: 'Liver n’ Onion', price: '$19.99', description: 'Served with veggies and mash.' },
      { name: 'Mushroom Medley Perogies', price: '$19.99', description: 'Portabello, tomato, and pesto with garlic butter and cream.', badges: ['v'] },
      { name: 'Bacon & Caramelized Onion Perogies', price: '$22.99', description: 'Finished in garlic butter.' },
      { name: 'Chicken Parmigiana', price: '$24.99', description: 'Panko crusted and baked in tomato sauce and mozzarella, with mash and garlic bread.' },
      { name: 'Mexican Quinoa', price: '$22.99', description: 'Black beans, corn, red onion, red and green peppers, cumin, cilantro, and guac with jalapeño poppers.', badges: ['v'] },
      { name: 'Add pulled chicken', price: '$6.99' },
      { name: 'Add grilled chicken', price: '$8.99' },
      { name: 'Salisbury Steak & Sautéed Mushrooms', price: '$24.99', description: 'Served with onions, garlic mashed potatoes, and veggies.' }
    ]
  },
  {
    id: 'quenchers',
    title: 'Thirst Quenchers',
    items: [
      { name: 'Cranberry Refresher', price: '$5.99', description: 'Cranberry and lime juice with ginger ale.' },
      { name: 'Rosemary Lime Spiritlifter', price: '$5.99', description: 'Rosemary-infused lime and lemon juice with soda.' },
      { name: 'Strawberry Soulmate', price: '$5.99', description: 'Strawberries, lemon, lime, and soda.' },
      { name: 'Shirley Temple Soother', price: '$5.99', description: 'Orange juice, 7-up, and grenadine.' }
    ]
  }
];

const tabsRoot = document.getElementById('menu-tabs');
const menuGrid = document.getElementById('menu-grid');
const searchInput = document.getElementById('menu-search');
const topbar = document.querySelector('.topbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];

let activeCategory = 'all';
let activeQuery = '';

function badgeMarkup(type) {
  const map = {
    gf: '<span class="badge badge-gf" aria-label="Gluten free">G</span>',
    v: '<span class="badge badge-v" aria-label="Vegetarian">V</span>',
    sig: '<span class="badge badge-sig" aria-label="Signature item">★</span>'
  };
  return map[type] || '';
}

function renderTabs() {
  const tabs = [
    { id: 'all', label: 'View all' },
    ...menuData.map((category) => ({ id: category.id, label: category.title }))
  ];

  tabsRoot.innerHTML = tabs
    .map(
      (tab) => `
        <button class="menu-tab ${tab.id === activeCategory ? 'is-active' : ''}" type="button" data-category="${tab.id}">
          ${tab.label}
        </button>
      `
    )
    .join('');

  tabsRoot.querySelectorAll('.menu-tab').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderTabs();
      renderMenu();
    });
  });
}

function itemMatches(item, query) {
  if (!query) return true;
  const haystack = [item.name, item.description, ...(item.badges || [])].join(' ').toLowerCase();
  return haystack.includes(query);
}

function renderMenu() {
  const query = activeQuery.trim().toLowerCase();

  const categoryMarkup = menuData
    .map((category) => {
      const isCategoryVisible = activeCategory === 'all' || activeCategory === category.id;
      const filteredItems = category.items.filter((item) => itemMatches(item, query));
      const shouldShow = isCategoryVisible && filteredItems.length > 0;

      return `
        <section class="menu-category ${shouldShow ? '' : 'hidden'}">
          <div class="menu-category-header">
            <div>
              <h3>${category.title}</h3>
              ${category.note ? `<p>${category.note}</p>` : ''}
            </div>
          </div>
          <div class="menu-item-list">
            ${filteredItems
              .map(
                (item) => `
                  <article class="menu-item">
                    <div class="menu-item-top">
                      <div class="menu-item-name">
                        <strong>${item.name}</strong>
                        ${(item.badges || []).map(badgeMarkup).join('')}
                      </div>
                      <span class="menu-item-price">${item.price}</span>
                    </div>
                    ${item.description ? `<p>${item.description}</p>` : ''}
                  </article>
                `
              )
              .join('')}
          </div>
        </section>
      `;
    })
    .join('');

  const hasAnyVisible = menuData.some((category) => {
    const inCategory = activeCategory === 'all' || activeCategory === category.id;
    return inCategory && category.items.some((item) => itemMatches(item, query));
  });

  menuGrid.innerHTML = hasAnyVisible
    ? categoryMarkup
    : `<div class="menu-empty">No menu items matched your search. Try a broader keyword like burger, breakfast, or salad.</div>`;
}

function setupReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupNav() {
  menuToggle?.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('nav-active');
    document.body.classList.toggle('nav-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      topbar.classList.remove('nav-active');
      document.body.classList.remove('nav-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${visibleEntry.target.id}`;
        link.classList.toggle('active', isActive);
      });
    },
    { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.5, 0.8] }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

searchInput?.addEventListener('input', (event) => {
  activeQuery = event.target.value;
  renderMenu();
});

renderTabs();
renderMenu();
setupReveal();
setupNav();
