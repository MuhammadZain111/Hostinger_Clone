
console.log("hello hwo are You");


const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown visibility when the button is clicked
menuButton.addEventListener('click', function() {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    console.log("here toggle button will work")
    menuButton.setAttribute('aria-expanded', !expanded);
    dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    const isInsideDropdown = dropdownMenu.contains(event.target);
    const isMenuButton = menuButton.contains(event.target);
    if (!isInsideDropdown && !isMenuButton) {
        dropdownMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

// here the code for the sick slider starts


// document.addEventListener('DOMContentLoaded', function () {
//   const toggleArrow = document.querySelector('.toggle-arrow');
//   const hostingItems = document.querySelector('.hostingitems');

//   toggleArrow.addEventListener('click', function () {
//     hostingItems.style.display = hostingItems.style.display === 'none' ? 'block' : 'none';
//   });
// });

// -----Here the function for small screens footer starts------------

document.addEventListener('DOMContentLoaded', function () {
  const toggleArrows = document.querySelectorAll('.toggle-arrow');
  const hostingItems = document.querySelectorAll('.hostingitems');
  const containers = document.querySelectorAll('.footercontainer');

  toggleArrows.forEach((toggleArrow, index) => {
    toggleArrow.addEventListener('click', function () {
      if (window.innerWidth <= 640) { // Check screen width
        if (hostingItems[index].style.display === 'none') {
          hostingItems[index].style.display = 'block';
          containers[index].classList.add('expanded'); // Add class to expand container
        } else {
          hostingItems[index].style.display = 'none';
          containers[index].classList.remove('expanded'); // Remove class to collapse container
        }
      }
    });
  });
});














// document.addEventListener('DOMContentLoaded', function () {
//   const toggleArrows = document.querySelectorAll('.toggle-arrow');
//   const hostingItems = document.querySelectorAll('.hostingitems');
//   const containers = document.querySelectorAll('.footercontainer');

//   toggleArrows.forEach((toggleArrow, index) => {
//     toggleArrow.addEventListener('click', function () {
//       if (hostingItems[index].style.display === 'none') {
//         hostingItems[index].style.display = 'block';
//         containers[index].classList.add('expanded'); // Add class to expand container
//       } else {
//         hostingItems[index].style.display = 'none';
//         containers[index].classList.remove('expanded'); // Remove class to collapse container
//       }
//     });
//   });
// });
















// document.addEventListener('DOMContentLoaded', function () {
//   const toggleArrow = document.querySelectorAll('.toggle-arrow');
//   const hostingItems = document.querySelectorAll('.hostingitems');
//   const container = document.querySelectorAll('.footercontainer');

//   toggleArrow.addEventListener('click', function () {
//     if (hostingItems.style.display === 'none') {
//       hostingItems.style.display = 'block';
//       container.classList.add('expanded'); // Add class to expand container
//     } else {
//       hostingItems.style.display = 'none';
//       container.classList.remove('expanded'); // Remove class to collapse container
//     }
//   });
// });



// document.addEventListener('DOMContentLoaded', function () {
//   const toggleArrow = document.querySelector('.toggle-arrow2');
//   const hostingItems = document.querySelector('.hostingitems2');
//   const container = document.querySelector('.footercontainer2');

//   toggleArrow.addEventListener('click', function () {
//     if (hostingItems.style.display === 'none') {
//       hostingItems.style.display = 'block';
//       container.classList.add('expanded'); // Add class to expand container
//     } else {
//       hostingItems.style.display = 'none';
//       container.classList.remove('expanded'); // Remove class to collapse container
//     }
//   });
// });








// document.addEventListener('DOMContentLoaded', function () {
//   const toggleArrow = document.querySelector('.toggle-arrow2');
//   const hostingItems = document.querySelector('.hostingitems2');

//   toggleArrow.addEventListener('click', function () {
//     hostingItems.style.display = hostingItems.style.display === 'none' ? 'block' : 'none';
//   });
// });












// function toggleArrow() {
//   var content = document.getElementById("content");
//   var arrow = document.getElementById("toggleButton");

//   // Toggle content visibility
//   if (content.style.display === "none") {
//       content.style.display = "block";
//       // Set arrow direction to upward when content appears
//       arrow.classList.remove("arrow-right");
//       arrow.classList.add("arrow-down");
//   } else {
//       content.style.display = "none";
//       // Set arrow direction to downward when content disappears
//       arrow.classList.remove("arrow-down");
//       arrow.classList.add("arrow-right");
//   }
// }














$(document).ready(function(){
    // $('#services').slick({
    // slidesToShow:3,
    // infinite: true,
    // slidesToScroll: 1,
    // dots: true
  
    // });
    console.log("here i am checking the slick slider");
    $('#services').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          
  });



// here the code for the auto timer starts.














// document.addEventListener('DOMContentLoaded', function () {
//     const leftArrow = document.querySelector('.left');
//     const rightArrow = document.querySelector('.right');
//     const cardContainer = document.querySelector('.box');
//     const cardWidth = document.querySelector('.cards').offsetWidth;
//     const scrollAmount = 540; // Adjust this value as needed

//     leftArrow.addEventListener("click", () => {
//         cardContainer.style.scrollBehavior = "smooth";
//         cardContainer.scrollLeft += scrollAmount;
//         console.log("sdsfs")
//     });

//     rightArrow.addEventListener("click", ()=>{
//         cardContainer.style.scrollBehavior = "smooth";
//         cardContainer.scrollLeft -= scrollAmount;
//         console.log("xkjnsjgf")
//     })
// });



// Function to convert list items into dropdowns for small screens
// function convertToListDropdown() {
//   const menu = document.getElementById('hostingMenu');
//   const dropdown = document.createElement('select');
//   dropdown.classList.add('block', 'w-full', 'border', 'rounded', 'py-2', 'px-3', 'mt-1', 'mb-6');
//   menu.parentNode.replaceChild(dropdown, menu);

//   const listItems = menu.getElementsByTagName('li');
//   for (let i = 0; i < listItems.length; i++) {
//     const listItem = listItems[i];
//     const link = listItem.querySelector('a');
//     const option = document.createElement('option');
//     option.text = link.textContent;
//     option.value = link.getAttribute('href');
//     dropdown.appendChild(option);
//   }
// }

// // Call the function on window load or resize if screen is small
// window.onload = window.onresize = function() {
//   if (window.innerWidth <= 640) {
//     convertToListDropdown();
//   }
// };
