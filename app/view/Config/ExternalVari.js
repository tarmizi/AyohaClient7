





function setExternalVariable() {
    setTexteWallet()
   
}

carousl code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Membership Card Carousel</title>
    <style>
        body {
            background-color: #f0f2f5;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
        }

        .carousel-container {
            position: relative;
            width: 100%;
            max-width: 400px;
            height: 300px;
            perspective: 1000px;
            -webkit-user-select: none; /* Safari */
            -ms-user-select: none; /* IE 10+ */
            user-select: none; /* Standard syntax */
        }

        .carousel-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
        }

        .carousel-item {
            position: absolute;
            width: 60%;
            height: 80%;
            top: 10%;
            left: 20%;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            cursor: pointer;
            transition: transform 0.5s ease, opacity 0.5s ease, z-index 0.5s ease;
            border: 1px solid #ddd;
        }

        .carousel-item.active {
            transform: translateZ(0) scale(1);
            opacity: 1;
            z-index: 3;
        }

        .carousel-item.prev {
            transform: translateX(-45%) translateZ(-100px) scale(0.8);
            opacity: 0.6;
            z-index: 2;
        }

        .carousel-item.next {
            transform: translateX(45%) translateZ(-100px) scale(0.8);
            opacity: 0.6;
            z-index: 2;
        }

        .carousel-item.hidden {
            transform: scale(0.5);
            opacity: 0;
            z-index: 1;
        }
        
        .carousel-nav {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            z-index: 10;
        }
        
        .nav-btn {
            background-color: rgba(255, 255, 255, 0.7);
            border: none;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            margin: 0 10px;
        }
    </style>
</head>
<body>

    <div class="carousel-container" style="padding: 20px 0;">
        <div class="carousel-wrapper">
            <div class="carousel-item" style="background-color: #ffdde1;">Card 1</div>
            <div class="carousel-item" style="background-color: #ddf1ff;">Card 2</div>
            <div class="carousel-item" style="background-color: #d1ffd3;">Card 3</div>
            <div class="carousel-item" style="background-color: #fffdd1;">Card 4</div>
            <div class="carousel-item" style="background-color: #f1d1ff;">Card 5</div>
        </div>
        <div class="carousel-nav">
            <button id="prevBtn" class="nav-btn">❮</button>
            <button id="nextBtn" class="nav-btn">❯</button>
        </div>
    </div>

    <script>
        const carouselContainer = document.querySelector('.carousel-container');
        const items = document.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const totalItems = items.length;

        let currentIndex = 0;

        function updateCarousel() {
            items.forEach((item, index) => {
                item.classList.remove('active', 'prev', 'next', 'hidden');
                if (index === currentIndex) {
                    item.classList.add('active');
                } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
                    item.classList.add('prev');
                } else if (index === (currentIndex + 1) % totalItems) {
                    item.classList.add('next');
                } else {
                    item.classList.add('hidden');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        // ===============================================
        // === NEW JAVASCRIPT FOR TOUCH/SWIPE HANDLING ===
        // ===============================================

        let touchStartX = 0;
        let touchEndX = 0;

        carouselContainer.addEventListener('touchstart', (event) => {
            // Record the starting X position of the touch
            touchStartX = event.touches[0].clientX;
        });

        carouselContainer.addEventListener('touchmove', (event) => {
            // We can track movement here, but for this simple swipe, we only need the end position.
            // This prevents the page from scrolling vertically while swiping horizontally.
            event.preventDefault(); 
        });

        carouselContainer.addEventListener('touchend', (event) => {
            // Record the ending X position of the touch
            touchEndX = event.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50; // Minimum distance in pixels for a swipe to be registered

            // Swiped Left (Next)
            if (touchStartX - touchEndX > swipeThreshold) {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            } 
            // Swiped Right (Previous)
            else if (touchEndX - touchStartX > swipeThreshold) {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateCarousel();
            }
        }
        
        // Initial setup
        updateCarousel();
    </script>

</body>
</html>