const car = document.querySelector('.Carousel');
const prevButton = car.querySelector('.Car_left');
const nextButton = car.querySelector('.Car_right');
const dotsContainer = document.querySelector('.Car_dots');
let slides = []
let dots = car.querySelectorAll('.Car_dots i')
let curr = 0


function prevSlide() {
    console.log(curr);
    curr = (curr - 1 + slides.length) % slides.length;
    showSlide(curr);
}

function nextSlide() {
    console.log(curr);
    curr = (curr + 1) % slides.length;
    showSlide(curr);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


function showSlide(index) {
    console.log(index);
    if(isNaN(curr))
    {
        curr = 0
    }
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    

    if (dots.length != slides.length) 
    {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < slides.length; i++) 
        {
            const dot = document.createElement('i');
            dot.className = 'fa-solid fa-circle';
            dotsContainer.appendChild(dot);
        }
        dotsContainer.style.gridTemplateColumns = `repeat(${slides.length}, 1fr)`;
    }

    dots.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('fa-ring');
            slide.classList.remove('fa-circle');
        } else {
            if (slide.classList.contains('fa-ring')) {
                slide.classList.remove('fa-ring');
                slide.classList.add('fa-circle');
            }
        }
    });
}


setInterval(nextSlide, 5000);
// Retrieve data from Firebase Realtime Database
const carouselRef = firebase.database().ref('Carousel');
carouselRef.on('value', function(snapshot) {
    const carouselData = snapshot.val();
    console.log(carouselData);
        // Iterate over the carouselData object
        for (let key in carouselData) {
            if (carouselData.hasOwnProperty(key)) {
                const item = carouselData[key];
                const carouselItem = document.createElement('div');
                carouselItem.className = 'Car_Child';

                const childInfo = document.createElement('div');
                childInfo.className = 'Car_Child_info';
                childInfo.textContent = item.text;
                carouselItem.appendChild(childInfo);

                carouselItem.style.backgroundImage = `url(${item.image})`;
                // console.log(key,item.goto);
                carouselItem.addEventListener("click", () => Goto(item.type,item.goto));

                car.prepend(carouselItem);
            }
        }
        slides = car.querySelectorAll('.Car_Child');
        if(isNaN(curr))
        {
            curr = 0
        }
        nextSlide()
        prevSlide()
    });
    
    function Goto(type, parts) {
        console.log(type, parts);
        const currentPage = window.location.href.replace(window.location.origin, '');
    
        let url = '/Compare.html?type=' + encodeURIComponent(type);
    
        if (typeof parts === 'object') {
            Object.entries(parts).forEach(([key, value]) => {
                const paramName = 'part' + key;
                url += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(value);
            });
        } else if (typeof parts === 'string') {
            url += '&part1=' + encodeURIComponent(parts);
        }
    
        if (currentPage !== url) {
            window.location.href = url;
        }
    }
