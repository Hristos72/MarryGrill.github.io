const header = document.querySelector('.header');
const slogan = document.querySelector('.slogan');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        header.classList.add('sticky-header');
        slogan.style.display = 'none';
        content.style.marginTop = `${header.offsetHeight}px`;
    } else {
        header.classList.remove('sticky-header');
        slogan.style.display = 'block';
        content.style.marginTop = '0';
    }
});

const gridContainer = document.querySelector('.grid-container');
const numItems = 12;

// Replace this image URL with the provided link
const imageUrl = 'https://www.recipetineats.com/wp-content/uploads/2022/02/Chicken-Shawarma-Wrap_2-SQ.jpg?w=500&h=500&crop=1';

// Replace the existing image URL with the new one for the second box
const imageUrlPizza = 'https://www.superhealthykids.com/wp-content/uploads/2021/10/best-veggie-pizza-featured-image-square-2.jpg';

// Replace the existing Souvlaki image URL for the third box
const imageUrlSouvlaki = 'https://silkroadrecipes.com/wp-content/uploads/2021/04/Greek-Souvlaki-Pita-square.jpg';

// Replace the existing Steak image URL for the fourth box
const imageUrlSteak = 'https://www.thecookierookie.com/wp-content/uploads/2022/12/square-oven-baked-steak-recipe.jpg';

// Replace the existing Chicken Barbeque Kebab image URL for the fifth box
const imageUrlKebab = 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Barbeque-Kebab.jpg';

// Replace the existing image URL for the sixth box with the Chicken Nuggets image URL
const imageUrlNuggets = 'https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Air-fryer-chicken-nuggets-e87db43.jpg?quality=90&resize=556,505';

for (let i = 1; i <= numItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item glass-effect';

    if (i === 1) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = 'Shaorma Image';
        image.style.borderRadius = '10px';
        image.style.width = '80%'; // Adjusted width
        image.style.height = 'auto';
        imageContainer.appendChild(image);

        const text = document.createElement('p');
        text.textContent = 'Shaorma';
        text.className = 'text-bottom';
        imageContainer.appendChild(text);

        gridItem.appendChild(imageContainer);
    }

    if (i === 2) {
        const imageContainerPizza = document.createElement('div');
        imageContainerPizza.className = 'image-container';

        const imagePizza = document.createElement('img');
        imagePizza.src = imageUrlPizza; // Use the new Pizza image URL
        imagePizza.alt = 'Pizza Image';
        imagePizza.style.borderRadius = '10px';
        imagePizza.style.width = '80%'; // Adjusted width
        imagePizza.style.height = 'auto';
        imageContainerPizza.appendChild(imagePizza);

        const textPizza = document.createElement('p');
        textPizza.textContent = 'Pizza'; // Update text content to PIZZA
        textPizza.className = 'text-bottom';
        imageContainerPizza.appendChild(textPizza);

        gridItem.appendChild(imageContainerPizza);
    }

    // Check if it's the third box, then add the Souvlaki image and text
    if (i === 3) {
        const imageContainerSouvlaki = document.createElement('div');
        imageContainerSouvlaki.className = 'image-container';

        const imageSouvlaki = document.createElement('img');
        imageSouvlaki.src = imageUrlSouvlaki; // Use the new Souvlaki image URL
        imageSouvlaki.alt = 'Souvlaki Image';
        imageSouvlaki.style.borderRadius = '10px';
        imageSouvlaki.style.width = '80%'; // Adjusted width
        imageSouvlaki.style.height = 'auto';
        imageContainerSouvlaki.appendChild(imageSouvlaki);

        const textSouvlaki = document.createElement('p');
        textSouvlaki.textContent = 'Souvlaki'; // Update text content to Souvlaki
        textSouvlaki.className = 'text-bottom';
        imageContainerSouvlaki.appendChild(textSouvlaki);

        gridItem.appendChild(imageContainerSouvlaki);
    }

    // Check if it's the fourth box, then add the Steak image and text
    if (i === 4) {
        const imageContainerSteak = document.createElement('div');
        imageContainerSteak.className = 'image-container';

        const imageSteak = document.createElement('img');
        imageSteak.src = imageUrlSteak; // Use the new Steak image URL
        imageSteak.alt = 'Steak Image';
        imageSteak.style.borderRadius = '10px';
        imageSteak.style.width = '80%'; // Adjusted width
        imageSteak.style.height = 'auto';
        imageContainerSteak.appendChild(imageSteak);

        const textSteak = document.createElement('p');
        textSteak.textContent = 'Steak'; // Update text content to Steak
        textSteak.className = 'text-bottom';
        imageContainerSteak.appendChild(textSteak);

        gridItem.appendChild(imageContainerSteak);
    }

    // Check if it's the fifth box, then add the Kebab image and text
    if (i === 5) {
        const imageContainerKebab = document.createElement('div');
        imageContainerKebab.className = 'image-container';

        const imageKebab = document.createElement('img');
        imageKebab.src = imageUrlKebab; // Use the new Chicken Barbeque Kebab image URL
        imageKebab.alt = 'Chicken Barbeque Kebab Image';
        imageKebab.style.borderRadius = '10px';
        imageKebab.style.width = '80%'; // Adjusted width
        imageKebab.style.height = 'auto';
        imageContainerKebab.appendChild(imageKebab);

        const textKebab = document.createElement('p');
        textKebab.textContent = 'Frigărui'; // Update text content to Frigarui
        textKebab.className = 'text-bottom';
        imageContainerKebab.appendChild(textKebab);

        gridItem.appendChild(imageContainerKebab);
    }

    // Check if it's the sixth box, then add the Nuggets image and text
    if (i === 6) {
        const imageContainerNuggets = document.createElement('div');
        imageContainerNuggets.className = 'image-container';

        const imageNuggets = document.createElement('img');
        imageNuggets.src = imageUrlNuggets; // Use the new Chicken Nuggets image URL
        imageNuggets.alt = 'Chicken Nuggets Image';
        imageNuggets.style.borderRadius = '10px';
        imageNuggets.style.width = '80%'; // Adjusted width
        imageNuggets.style.height = 'auto';
        imageContainerNuggets.appendChild(imageNuggets);

        const textNuggets = document.createElement('p');
        textNuggets.textContent = 'Nuggets'; // Update text content to Nuggets
        textNuggets.className = 'text-bottom';
        imageContainerNuggets.appendChild(textNuggets);

        gridItem.appendChild(imageContainerNuggets);
    }

    gridContainer.appendChild(gridItem);
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        handleHover(index);
    });

    item.addEventListener('mouseleave', () => {
        handleHoverReset();
    });
});

function handleHover(index) {
    const neighbors = getNeighbors(index);

    gridItems.forEach((item, i) => {
        if (i !== -1) {
            if (neighbors.includes(i)) {
                item.style.transform = 'scale(0.95)';
            } else {
                item.style.transform = 'scale(1)';
            }
        }
    });

    // Increase the size of the hovered box by 5px
    gridItems[index].style.transform = 'scale(1.05)';
}

function handleHoverReset() {
    gridItems.forEach(item => {
        item.style.transform = 'scale(1)';
    });
}

function getNeighbors(index) {
    const numRows = 4;
    const numCols = 3;
    const row = Math.floor(index / numCols);
    const col = index % numCols;

    const neighbors = [];

    if (row > 0) neighbors.push(index - numCols);
    if (col > 0) neighbors.push(index - 1);
    if (col < numCols - 1) neighbors.push(index + 1);
    if (row < numRows - 1) neighbors.push(index + numCols);

    return neighbors;
}

window.addEventListener('scroll', function() {
    var logo = document.getElementById('logo');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var logoTop = 50; // Adjust the initial position of the logo

    if (scrollTop > logoTop) {
        logo.style.top = (scrollTop - logoTop) + 'px';
    } else {
        logo.style.top = '50px';
    }
});

window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo_middle_page');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var logoTop = 20; // Adjust the initial position of the logo
    var headerHeight = document.querySelector('.header').offsetHeight;

    if (scrollTop > logoTop) {
        logo.classList.add('scrolling-up');
    } else {
        logo.classList.remove('scrolling-up');
    }
});
