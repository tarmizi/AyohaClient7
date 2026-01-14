Ext.define('BuskartApp.view.ImageCarousel', {
    extend: 'Ext.Container',
    xtype: 'imagecarousel', // A custom xtype for this component

    config: {
        // Your original configuration goes here
        //style: 'background-image: url("resources/icons/bgfront15.png"); background-size: 100% 390px; background-repeat: no-repeat;',
        style: "background-color: transparent;",
        width: '100%',
       // height: 300,
     //  styleHtmlContent: true,
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'
        },
        html: '<div class="carousel-container" style="padding: 0px 0;">' +
            '<div class="carousel-wrapper">' +
           // '<div class="carousel-item" style="background-color: #ffdde1;"><img src="resources/icons/MembershipCardsample.png" style="width:95%;height:150px;margin:-20px 0px 15px 0px"/><div style="color:white;text-align: left;font-size:12px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">🚀 Free Membership </div></div>' +
           '<div class="carousel-item" style="background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0px;"><img src="resources/icons/Modenas_Kriss08.png" style="width:80%;height:100%;margin:0px 0px 0px 0px"/></div>' +
           '<div class="carousel-item" style="background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0px;"><img src="resources/icons/iPhone17_01.png" style="width:80%;height:100%;margin:0px 0px 0px 0px"/></div>' +
           '<div class="carousel-item" style="background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0px;"><img src="resources/icons/FarehaGold01.png" style="width:80%;height:100%;margin:0px 0px 0px 0px"/></div>' +
           '<div class="carousel-item" style="background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0px;"><img src="resources/icons/monsterChicken02.png" style="width:80%;height:100%;margin:0px 0px 0px 0px"/></div>' +
           // '<div class="carousel-item" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);">Card 5</div>' +
            '</div>' +
            '<div class="carousel-nav">' +
            '<button id="prevBtn" class="nav-btn">❮</button>' +
            '<button id="nextBtn" class="nav-btn">❯</button>' +
            '</div>' +
            '</div>',

        // Add listeners to manage the component's lifecycle
        listeners: {
            painted: 'onPainted', // Fires when the component is rendered
            destroy: 'onDestroy'  // Fires when the component is removed
        }
    },

    // This function will run when the component is painted
    onPainted: function() {
        var me = this; // 'me' or 'self' is a common convention for 'this' in Sencha

        // Scope your DOM queries to THIS component's element
        // Instead of document.querySelector, use this.element.down()
        me.carouselContainer = me.element.down('.carousel-container');
        me.items = me.carouselContainer.query('.carousel-item');
        me.prevBtn = me.carouselContainer.down('#prevBtn');
        me.nextBtn = me.carouselContainer.down('#nextBtn');
        
        me.totalItems = me.items.length;
        me.currentIndex = 0;
        
        // --- All your JavaScript logic now lives here ---

        // Attach event listeners
        me.nextBtn.on('tap', me.onNextClick, me);
        me.prevBtn.on('tap', me.onPrevClick, me);
        
        // Touch/Swipe listeners
        me.carouselContainer.on({
            touchstart: me.onTouchStart,
            touchend: me.onTouchEnd,
            scope: me
        });

        // Initial setup
        me.updateCarousel();
    },

    // This function runs when the next button is clicked
    onNextClick: function() {
        this.currentIndex = (this.currentIndex + 1) % this.totalItems;
        this.updateCarousel();
    },

    // This function runs when the previous button is clicked
    onPrevClick: function() {
        this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
        this.updateCarousel();
    },

    // Carousel update logic
    updateCarousel: function() {
        this.items.forEach(function(itemElement, index) {
            var item = Ext.get(itemElement); // Wrap the raw DOM element with Ext.get()
            item.removeCls(['active', 'prev', 'next', 'hidden']);

            if (index === this.currentIndex) {
                item.addCls('active');
            } else if (index === (this.currentIndex - 1 + this.totalItems) % this.totalItems) {
                item.addCls('prev');
            } else if (index === (this.currentIndex + 1) % this.totalItems) {
                item.addCls('next');
            } else {
                item.addCls('hidden');
            }
        }, this); // Pass 'this' as the scope
    },
    
    // --- Touch/Swipe Handlers ---
    onTouchStart: function(event) {
        this.touchStartX = event.touch.pageX;
    },

    onTouchEnd: function(event) {
        this.touchEndX = event.touch.pageX;
        this.handleSwipe();
    },

    handleSwipe: function() {
        var swipeThreshold = 50; // Minimum distance
        var swipeDistance = this.touchStartX - this.touchEndX;

        if (swipeDistance > swipeThreshold) { // Swiped Left
            this.onNextClick();
        } else if (swipeDistance < -swipeThreshold) { // Swiped Right
            this.onPrevClick();
        }
    },
    
    // Cleanup to prevent memory leaks
    onDestroy: function() {
        if (this.nextBtn) {
            this.nextBtn.un('tap', this.onNextClick, this);
        }
        if (this.prevBtn) {
            this.prevBtn.un('tap', this.onPrevClick, this);
        }
        if (this.carouselContainer) {
            this.carouselContainer.un({
                touchstart: this.onTouchStart,
                touchend: this.onTouchEnd,
                scope: this
            });
        }
    }
});