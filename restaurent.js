gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    const data = [
        {
            "id": 1,
            "DishName": "PÉPERONIE",
            "image_of_the_dish": "images/menu/Pizza/pepo.png",
            "type": "Pizza",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 2,
            "DishName": "Margherita",
            "image_of_the_dish": "images/menu/Pizza/Margherita.png",
            "type": "Pizza",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 3,
            "DishName": "Champignon",
            "image_of_the_dish": "images/menu/Pizza/Champignon.png",
            "type": "Pizza",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 1,
            "DishName": "PÉPERONIE",
            "image_of_the_dish": "images/menu/Pizza/pepo.png",
            "type": "Pizza",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 2,
            "DishName": "Margherita",
            "image_of_the_dish": "images/menu/Pizza/Margherita.png",
            "type": "Pizza",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 3,
            "DishName": "Champignon",
            "image_of_the_dish": "images/menu/Pizza/Champignon.png",
            "type": "Pizza",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 4,
            "DishName": "Burger",
            "image_of_the_dish": "images/menu/Sandwich/burger.png",
            "type": "Sandwich",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 5,
            "DishName": "Chesse Burger",
            "image_of_the_dish": "images/menu/Sandwich/chesse.png",
            "type": "Sandwich",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 6,
            "DishName": "Chawarma",
            "image_of_the_dish": "images/menu/Sandwich/chawarma.png",
            "type": "Sandwich",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 7,
            "DishName": "Takos",
            "image_of_the_dish": "images/menu/Sandwich/takos.png",
            "type": "Sandwich",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 8,
            "DishName": "Chesse Burger",
            "image_of_the_dish": "images/menu/Sandwich/chesse.png",
            "type": "Sandwich",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 9,
            "DishName": "Stak",
            "image_of_the_dish": "images/menu/Plate/stak.png",
            "type": "Plat",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 10,
            "DishName": "Salad",
            "image_of_the_dish": "images/menu/Plate/salad.png",
            "type": "Plat",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 11,
            "DishName": "poisson",
            "image_of_the_dish": "images/menu/Plate/poisson.png",
            "type": "Plat",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 12,
            "DishName": "Stak",
            "image_of_the_dish": "images/menu/Plate/stak.png",
            "type": "Plat",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 13,
            "DishName": "Salad",
            "image_of_the_dish": "images/menu/Plate/salad.png",
            "type": "Plat",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 14,
            "DishName": "poisson",
            "image_of_the_dish": "images/menu/Plate/poisson.png",
            "type": "Plat",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 15,
            "DishName": "Mango",
            "image_of_the_dish": "images/menu/Jus/Mango.png",
            "type": "Jus",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 16,
            "DishName": "Orange",
            "image_of_the_dish": "images/menu/Jus/orange.png",
            "type": "Jus",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 15,
            "DishName": "Soda",
            "image_of_the_dish": "images/menu/Jus/soda (1).png",
            "type": "Jus",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 18,
            "DishName": "Mango",
            "image_of_the_dish": "images/menu/Jus/Mango.png",
            "type": "Jus",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 19,
            "DishName": "Orange",
            "image_of_the_dish": "images/menu/Jus/orange.png",
            "type": "Jus",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 20,
            "DishName": "Soda",
            "image_of_the_dish": "images/menu/Jus/soda (1).png",
            "type": "Jus",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 21,
            "DishName": "Cack",
            "image_of_the_dish": "images/menu/Désert/ckack.png",
            "type": "Désert",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 22,
            "DishName": "Ice Cream",
            "image_of_the_dish": "images/menu/Désert/iceCream.png",
            "type": "Désert",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 23,
            "DishName": "Pancakes",
            "image_of_the_dish": "images/menu/Désert/pancakes.png",
            "type": "Désert",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 24,
            "DishName": "Cack",
            "image_of_the_dish": "images/menu/Désert/ckack.png",
            "type": "Désert",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 25,
            "DishName": "Ice Cream",
            "image_of_the_dish": "images/menu/Désert/iceCream.png",
            "type": "Désert",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
        {
            "id": 26,
            "DishName": "Pancakes",
            "image_of_the_dish": "images/menu/Désert/pancakes.png",
            "type": "Désert",
            "size": ["M", "L", "XL", "XXL"],
            "price": ["350", "450", "600", "950"]
        },
    ];
    const menuButtons = document.querySelectorAll('.menue-btn');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            menuButtons.forEach(btn => btn.classList.remove('activate-the-btn'));
            button.classList.add('activate-the-btn');

            updateDishes(button.textContent.trim());
        });
    });

    function updateDishes(type) {
        const menuItemsContainer = document.querySelector('.boxes-wrapper');
        menuItemsContainer.innerHTML = '';

        const filteredData = data.filter(dish => dish.type.toLowerCase() === type.toLowerCase());
        const totalRows = Math.ceil(filteredData.length / 3);

        filteredData.forEach((dish, index) => {
            const rowIndex = Math.floor(index / 3);
            const colIndex = index % 3;

            let specialClass = '';
            let specialImage = '';
            let rowStyle = '';

            if (rowIndex === 0 && colIndex === 2) {
                specialClass = 'last-Container';
                specialImage = `<div class="leafe-bg"><img src="images/leaf.png" alt="leaf" class="leaf"></div>`;
            } else if (rowIndex === totalRows - 1 && colIndex === 0) {
                specialImage = `<div class="pepper-bg"><img src="images/BluredDownPepper.png" alt="pepper" class="BluredDownPepper"></div>`;
            } else if (rowIndex === totalRows - 1 && colIndex === 2) {
                specialClass = 'last-Container';
                specialImage = `<div class="leafe-bg"><img src="images/tomato.png" alt="Tomato" class="Tomato"></div>`;
            } else if (rowIndex > 0 && rowIndex < totalRows - 1) {
                rowStyle = 'style="position: relative; right: 18px;"';
            }

            const dishHTML = `
                <div class="col-12 col-md-4 d-flex justify-content-center ${specialClass}" ${rowStyle}>
                    <div class="box">
                        <div class="img-of-pizza">
                            <img src="${dish.image_of_the_dish}" class="pizza-style" alt="${dish.DishName}">
                        </div>
                        <h3 class="title-card">${dish.DishName}</h3>
                        <div class="row center-the-cards justify-content-center text-center mt-4">
                            ${dish.size.map((size, i) => `
                                <button class="menue-btn-order mx-2 my-1 ${i === 0 ? 'activate-the-btn' : ''}" data-price="${dish.price[i]}">${size}</button>
                            `).join('')}
                        </div>
                        <h4 class="title-card-price">Prix : ${dish.price[0]} DZ</h4>
                    </div>
                    ${specialImage}
                </div>
            `;

            if (colIndex === 0) {
                menuItemsContainer.innerHTML += `<div class="row justify-content-center boxes-wrapper">`;
            }

            menuItemsContainer.innerHTML += dishHTML;

            if (colIndex === 2 || index === filteredData.length - 1) {
                menuItemsContainer.innerHTML += `</div>`;
            }
        });

        addSizeSwitchingFunctionality();

        // Initialize ScrollTrigger animations
        gsap.utils.toArray('.box').forEach(box => {
            gsap.from(box, {
                scrollTrigger: {
                    trigger: box,
                    start: "top bottom", // Adjust as needed
                    end: "bottom top", // Adjust as needed
                    toggleActions: "play none none none" // Only play the animation on enter
                },
                duration: 0.5,
                y: 50,
                opacity: 0,
                stagger: 0.2
            });
        });

        gsap.from(box.querySelector('.leaf'), {
            scrollTrigger: {
                trigger: box,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none none",
                markers: true // Add markers to debug
            },
            duration: 0.5,
            scale: 0,
            opacity: 0,
            delay: 0.5
        });
    }

    function addSizeSwitchingFunctionality() {
        const sizeButtons = document.querySelectorAll('.menue-btn-order');

        sizeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const allButtons = this.parentNode.querySelectorAll('.menue-btn-order');
                allButtons.forEach(btn => btn.classList.remove('activate-the-btn'));
                this.classList.add('activate-the-btn');

                const priceElement = this.closest('.box').querySelector('.title-card-price');
                priceElement.textContent = `Prix : ${this.getAttribute('data-price')} DZ`;
            });
        });
    }

    updateDishes(document.querySelector('.menue-btn.activate-the-btn').textContent.trim());
});




let home = gsap.timeline({ paused: true, reversed: true });

home.to("#fork", {
        x: '130%', 
        duration: 0.8,
        ease: "power3.out"
    })
    .to("#spoon", {
        x: '-130%', 
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.8")
    .from(".logoname", {
        y: '180%',
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .to(".logoname", {
        y: '-250%',
        opacity: 0,
        duration: 0.6,
    })
    .from(".logoname1", {
        y: '180%',
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .to(".logoname1", {
        y: '-250%',
        opacity: 0,
        duration: 0.6,
    })
    .from(".logoname2", {
        y: '180%',
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .to(".logoname2", {
        y: '-250%',
        opacity: 0,
        duration: 0.6,
    })
    .to("#fork", {
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    })
    .to("#spoon", {
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.6")
    .to(".animatedcontainer", {
        y: '-250%',
        opacity: 0,
        duration: 0.8,
    }, "-=0.6")
    .to(".wrapper", {
        duration: 0.6,
        opacity: 1,
        scale: 1,
        ease: "power3.out"
    })
    .from(".logo", { duration: 0.4, y: 10, opacity: 0 },"-=0.8")  
    .from(".links", { duration: 0.4, y: 10, opacity: 0, stagger: 0.2 },"-=0.8")  
    .from(".arrow-down", { duration: 0.4, y: 10, opacity: 0 },"-=0.2")  
    .from(".Title", { duration: 0.4, x: 100, opacity: 0 }, "-=0.2")  
    .from(".description", { duration: 0.4, x: 100, opacity: 0 }, "-=0.2")  
    .from(".buttons", { duration: 0.4, x: 100, opacity: 0 }, "-=0.2")  
    .from("#FirstSlice", { duration: 0.4, y: 100, opacity: 0 },"-=0.2")  
    .from("#SecondSlice", { duration: 0.4, y: -100, opacity: 0 },"-=0.2")  
    .from(".fires", { duration: 0.4, opacity: 0 }, "-=0.2")  
    .from(".firee", { duration: 0.4, opacity: 0 }, "-=0.2")  
    .from(".circle", { duration: 0.4, opacity: 0 },"-=0.2")  
    .from(".circle2", { duration: 0.4, opacity: 0 },"-=0.2")
    .from(".bluredPepper", { duration: 0.4, opacity: 0 },"-=0.2")
    .to(".background-layer", {
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out"
    }, "-=1.2")
    .add(() => {
        document.querySelector(".animatedcontainer").style.display = "none";
        document.querySelector(".animation_svg").style.display = "none";
        document.querySelector(".animatedcontent").style.display = "none";
    });

home.play();








gsap.registerPlugin(ScrollTrigger);


// Achievements animation
const Menu = gsap.timeline({
    scrollTrigger: {
        trigger: "#Menu",
        start: "top center", // When the top of the trigger element hits the center of the viewport
        end: "bottom center", // When the bottom of the trigger element hits the center of the viewport
        scrub: true, // Smooth scroll effect
        onEnter: () => {
            Menu.play(); // Play the animation when the trigger is entered
        },
        onLeave: () => {
            Menu.pause(); // Pause the animation when the trigger leaves
        },
    },
});

// Define the animation for the buttons
Menu.from(".menu-select button", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.5,
});



gsap.registerPlugin(ScrollTrigger);

const Contact = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper3",
        start: "top center", // When the top of the trigger element hits the center of the viewport
        end: "bottom bottom", // When the bottom of the trigger element hits the bottom of the viewport
        scrub: 2 // Increased scrub value for a slower, smoother effect
    },
});

// Define the animation for the elements
Contact
    .from(".onion-img", { duration: 3, y: 100, opacity: 0 }, "-=1.5")
    .from(".contact-title", { duration: 3, y: 100, opacity: 0 }, "-=1.5")
    .from(".dish-image", { duration: 3, y: 100, opacity: 0 }, "-=1.5")
    .from(".contact-text", { duration: 3, y: 100, opacity: 0 }, "-=1.5")
    .from(".icon", { duration: 3, y: 20, opacity: 0, stagger: 0.3 }, "-=1.8")

