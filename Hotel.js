let home = gsap.timeline({ paused: true, reversed: true });

// Existing animations
home.from(".Logo", { duration: 0.4, y: 10, opacity: 0 }, "-=0.8")
    .from(".links", { duration: 0.4, y: 10, opacity: 0, stagger: 0.2 }, "-=0.8")
    .from(".arrow-down", { duration: 0.4, y: 10, opacity: 0 }, "-=0.2")
    .from(".main_txt", { duration: 0.4, x: 100, opacity: 0 }, "-=0.2")
    .from(".description", { duration: 0.4, x: 100, opacity: 0 }, "-=0.2")
    .from(".buttons", { duration: 0.4, x: 100, opacity: 0 }, "-=0.2")
    .from(".above", { duration: 0.4, y: -100, opacity: 0 }, "-=0.2");

// Animating the rectangles
home.from("#First", { duration: 0.6, y: -500, opacity: 0, ease: "power3.out" }, "-=0.4")
    .from("#Second", { duration: 0.6, y: 500, opacity: 0, ease: "power3.out" }, "-=0.4")
    .from("#THIRD1", { duration: 0.6, y: -500, opacity: 0, ease: "power3.out" }, "-=0.4")
    .from("#THIRD2", { duration: 0.6, y: 500, opacity: 0, ease: "power3.out" }, "-=0.4")
    .from("#Last", { duration: 0.6, y: 500, opacity: 0, ease: "power3.out" }, "-=0.4");

// Play the timeline
home.play();



// Register ScrollTrigger and TextPlugin with GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.utils.toArray(".text_content").forEach((section, index) => {
    // Get the number element
    let countEl = section.querySelector(".col_banner_text");
    let originalNumber = countEl.innerText;

    // Determine the target number (remove non-numeric characters except ".")
    let targetNumber = parseFloat(originalNumber.replace(/[^\d.]/g, ''));

    // GSAP animation for counting numbers
    gsap.fromTo(countEl,
        { textContent: 0 },
        {
            textContent: targetNumber,
            duration: 1.3,
            ease: "power1.out",
            snap: { textContent: 1 },
            onUpdate: function () {
                let value = countEl.textContent;

                // Keep original formatting (e.g., "K+" or "4.20")
                if (originalNumber.includes("K")) {
                    countEl.textContent = parseFloat(value).toFixed(0) + "K+";
                } else if (originalNumber.includes(".")) {
                    countEl.textContent = parseFloat(value).toFixed(2); // For decimal numbers like "4.20"
                } else {
                    countEl.textContent = parseInt(value).toLocaleString(); // Format with commas
                }
            },
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Start when the section reaches 80% of the viewport height
                toggleActions: "play none none reset",
            }
        }
    );

    // Animation for fading in text
    let description = section.querySelector(".col_banner_description");
    gsap.from(description, {
        opacity: 0,
        duration: 1,
        y: 30,
        ease: "power1.out",
        scrollTrigger: {
            trigger: section,
            start: "bottom 80%", // Start animation when the bottom of the section reaches 80% of the viewport
            toggleActions: "play none none reset",
        }
    });
});


gsap.from(".wallet, .backpack, .earth", {
    scale: 2.5, // Start from a larger scale
    x: 140,
    duration: 3, // Duration of the animation
    ease: "power2.out", // Smooth easing
    scrollTrigger: {
        trigger: ".wrapper3", // Trigger the animation when the section comes into view
        start: "top 80%", // Animation starts when 80% of the section is in view
        toggleActions: "play none none none" // Play the animation on scroll
    }
});

// Animate the text (fade in)
gsap.from(".header_txt_img, .lower_text_img", {
    opacity: 0, // Start with invisible text
    y: 20, // Slight upward movement for text
    duration: 5, // Duration of the animation
    ease: "power2.out", // Smooth easing
    stagger: 0.3, // Stagger the text animation
    scrollTrigger: {
        trigger: ".wrapper3", // Trigger the animation when the section comes into view
        start: "top 80%", // Animation starts when 80% of the section is in view
        toggleActions: "play none none none" // Play the animation on scroll
    }
});


// Text, list items, and button animation
gsap.from(".title_for_forth_page, .description_for_hotel, .link_for_hotel_room, .Discover_btn", {
    opacity: 0,
    duration: 1,
    y: 30, // Slight move upward
    ease: "power1.out",
    stagger: 0.2, // Stagger animation for each element
    scrollTrigger: {
        trigger: ".text_placement_for_forth", // Trigger when the text section comes into view
        start: "top 80%", // Start when the section reaches 80% of the viewport
        toggleActions: "play none none reset"
    }
});

// FirstPic animation (from top with scaling)
gsap.from("#FirstPic", {
    y: -150, // Move from top
    scale: 1.2, // Start slightly bigger
    opacity: 0, // Fade in from opacity 0 to 1
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#about", // Trigger when the SVG section comes into view
        start: "top 80%", // Start when the section reaches 80% of the viewport
        toggleActions: "play none none reset"
    }
});

// SecondPic animation (from bottom with scaling)
gsap.from("#SecondPic", {
    y: 150, // Move from bottom
    scale: 1.2, // Start slightly bigger
    opacity: 0, // Fade in from opacity 0 to 1
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#about", // Trigger when the SVG section comes into view
        start: "top 80%", // Start when the section reaches 80% of the viewport
        toggleActions: "play none none reset"
    }
});





// Text Animation (title and description)
gsap.from(".text_for_the_fifth_page h2, .text_for_the_fifth_page h1, .text_for_the_fifth_page p", {
    opacity: 0,
    duration: 1,
    stagger: 0.3, // Stagger the animation of each text element
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".wrapper5", // Trigger when the section comes into view
        start: "top 80%", // Start when 80% of the wrapper5 is in view
        toggleActions: "play none none reset"
    }
});

// Cards Animation (from top)
gsap.from(".card_for_more_info", {
    opacity: 0,
    y: -100, // Cards slide in from the top
    duration: 1,
    ease: "power2.out",
    stagger: 0.2, // Delay between each card's animation
    scrollTrigger: {
        trigger: ".wrapper5", // Trigger when the section comes into view
        start: "top 70%", // Start when 70% of the section is in view
        toggleActions: "play none none reset"
    }
});

// main_card_img_opacity Animation (fade in after cards)
gsap.from(".main_card_img_opacity", {
    opacity: 0,
    duration: 1,
    delay: 0.5, // Delay to make sure cards animate first
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".wrapper5", // Trigger when the section comes into view
        start: "top 70%", // Start when 70% of the section is in view
        toggleActions: "play none none reset"
    }
});


// Text Animation (title and description)
gsap.from("#title_explore_for_rooms, #hotel_title_for_room, #description_the_hotel_for_rooms", {
    opacity: 0,
    duration: 1,
    stagger: 0.3, // Stagger the animation of each text element
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".wrapper6", // Trigger when the section comes into view
        start: "top 80%", // Start when 80% of the wrapper6 is in view
        toggleActions: "play none none reset"
    }
});

// Cards Animation (from top), starts after text animation finishes
gsap.from(".card_for_more_info_for_rooms_and_suits", {
    opacity: 0,
    y: -100, // Cards slide in from the top
    duration: 1,
    ease: "power2.out",
    stagger: 0.2, // Delay between each card's animation
    delay: 0.6, // Starts after text animation (adjust the delay based on text duration)
    scrollTrigger: {
        trigger: ".wrapper6", // Trigger when the section comes into view
        start: "top 0%", // Start when 70% of the section is in view
        toggleActions: "play none none reset"
    }
});

// Image Animation inside cards (fade in after cards)
gsap.from(".main_card_img_for_rooms_and_suits", {
    opacity: 0,
    duration: 1,
    delay: 1.2, // Delay to ensure the cards animate first
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".wrapper6", // Trigger when the section comes into view
        start: "top 70%", // Start when 70% of the section is in view
        toggleActions: "play none none reset"
    }
});

// Offers Icons Animation (after images)
gsap.from(".offers", {
    opacity: 0,
    scale: 0.8, // Slight scaling effect
    duration: 1.5,
    delay: 1.6, // Delay to ensure it happens after the images
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".wrapper6", // Trigger when the section comes into view
        start: "top 70%", // Start when 70% of the section is in view
        toggleActions: "play none none reset"
    }
});

// Buttons (Book Now and Price) Animation (after icons)
gsap.from(".rooms", {
    opacity: 0,
    x: 20, // Slight slide effect
    scale: 0.8, // Slight scaling effect
    duration: 1.5,
    delay: 1.6, // Same delay as icons (buttons will animate along with icons)
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".wrapper6", // Trigger when the section comes into view
        start: "top 70%", // Start when 70% of the section is in view
        toggleActions: "play none none reset"
    }
});



// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Animate the text
    // Animate the SVG
    gsap.fromTo('.svg_communoty',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power1.out' }
    );
});


// Create a GSAP timeline
let community = gsap.timeline({ paused: true, reversed: true });

// Add animations to the timeline
community
    .from(".Discover_btn_for_community", { duration: 1.5, y: 100, opacity: 0 }, "-=0.6")
    .from(".title_for_forth_page_for_community", { duration: 1.5, y: 100, opacity: 0 }, "-=0.6")
    .from(".svg_community", { duration: 1.5, y: 100, opacity: 0 }, "-=0.6");

// Set up ScrollTrigger
ScrollTrigger.create({
    trigger: ".wrapper7", // Replace with the section that triggers the animation
    start: "top top", // Adjust the start point of the animation
    onEnter: () => community.play(),
    // onLeaveBack: () => community.reverse()
});




document.addEventListener('DOMContentLoaded', () => {
    // Create a GSAP timeline for testimonials
    let testimonyAnimation = gsap.timeline({ paused: true, reversed: true });

    // Add animations to the timeline
    testimonyAnimation
        .from(".title_fo_testimony", { duration: 0.6, y: 30, opacity: 0, ease: "power2.out" })
        .from(".btns_for_arrows", { duration: 0.6, y: 30, opacity: 0, ease: "power2.out" }, "-=0.5")
        .from(".card_for_testimonial", { duration: 0.6, y: 30, opacity: 0, stagger: 0.3, ease: "power2.out" }, "-=0.3");

    // Set up ScrollTrigger for the testimonial section
    ScrollTrigger.create({
        trigger: ".wrapper8", // Replace with the section that triggers the animation
        start: "top top", // Adjust the start point of the animation
        onEnter: () => testimonyAnimation.play(),
        // onLeaveBack: () => testimonyAnimation.reverse()
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Check screen width
    if (window.innerWidth >= 768) { // Adjust this value as needed
        // Create a GSAP timeline for the CONTACT section
        let contactAnimation = gsap.timeline({ paused: true, reversed: true });

        // Add animations to the timeline
        contactAnimation
            .from(".svg_communoty_QA", { duration: 1.5, scale: 0.5, opacity: 0, ease: "power2.out" })
            // .from(".title_for_forth_page_for_QA", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out" }, "-=1")
            // .from(".description_for_QA", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out" }, "-=1")
            .from(".Discover_btn_for_QA", { duration: 1.5, scale: 0.9, opacity: 0, ease: "bounce.out" }, "-=0.5");

        // Set up ScrollTrigger for the CONTACT section
        ScrollTrigger.create({
            trigger: "#CONTACT",
            start: "top 10%", // Adjust the start point of the animation
            onEnter: () => contactAnimation.play(),
            // onLeaveBack: () => contactAnimation.reverse() // Removed to prevent reversing
        });
    }
});

