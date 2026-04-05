Ext.define('BuskartApp.view.common.FloatPanel_MerchantCampaingPromoPage', {

});




var isFloatPanel_MerchantCampaingPromoPageOpen = 'N';



var _FloatPanel_MerchantCampaingPromoPage = null;






function FloatPanel_MerchantCampaingPromoPageCreateIfNeeded() {
    if (_FloatPanel_MerchantCampaingPromoPage&& !_FloatPanel_MerchantCampaingPromoPage.destroyed) return;

 _FloatPanel_MerchantCampaingPromoPage =
    Ext.create('Ext.Container', {
        height: '100%',
        width: '100%',
        id: 'FloatPanel_MerchantCampaingPromoPageID',
        floated: true,
    centered: true,
    height: '100%',
    width: '100%',
    closeAction: 'destroy', 
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'

        },
        showAnimation: {
            type: 'popIn',
            duration: 150,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
           
        },
       style:ayohaThemeColor_Body_Container(),
        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
              style: ' background-color:transparent;',
               layout: {
                type: 'vbox',
                pack: 'start',  // Center the white box vertically
                align: 'center'  // Center the white box horizontally
            },
              
                items: [
              


                 

                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        layout: 'fit', // Layout Fit memastikan item bertindih
                        items: [
                     {
            xtype: 'component',
            itemId: 'ayohaQuestHubFrame',
            styleHtmlContent: false,
            width: '100%',
            height: '100%',
            html:
                '<iframe ' +
                    'src="https://ayoha-quest-hub.lovable.app/" ' +
                   // 'scrolling="no" ' +
                    'style="border:none;width:100%;height:850px;display:block;overflow:hidden;background:#ffffff;" ' +
                    'allow="clipboard-read; clipboard-write; geolocation" ' +
                    'referrerpolicy="strict-origin-when-cross-origin">' +
                '</iframe>'
        }

// {
//     xtype: 'container',
//     itemId: 'AyohaCampaignLandingPage',
//     scrollable: 'vertical',
//     cls: 'ayoha-campaign-page',
//     html: [
//         '<div class="ayoha-campaign-root">',

//             // NAVBAR
//             // '<nav class="navbar" id="navbar">' +
//             //     '<div class="container navbar-inner">' +
//             //         '<a href="#" class="navbar-brand">' +
//             //             '<img src="assets/ayoha-reward-logo.png" alt="Ayoha" class="navbar-logo" />' +
//             //             '<span class="text-gradient navbar-title">Ayoha</span>' +
//             //         '</a>' +
//             //         '<div class="navbar-links">' +
//             //             '<a href="#about">About</a>' +
//             //             '<a href="#how-it-works">How It Works</a>' +
//             //             '<a href="#rewards">Rewards</a>' +
//             //             '<a href="#prizes">Prizes</a>' +
//             //             '<button class="gradient-btn btn-sm">Download App</button>' +
//             //         '</div>' +
//             //         '<button class="hamburger" id="hamburger" aria-label="Toggle menu">' +
//             //             '<span></span><span></span><span></span>' +
//             //         '</button>' +
//             //     '</div>' +
//             //     '<div class="mobile-menu" id="mobile-menu">' +
//             //         '<a href="#about">About</a>' +
//             //         '<a href="#how-it-works">How It Works</a>' +
//             //         '<a href="#rewards">Rewards</a>' +
//             //         '<a href="#prizes">Prizes</a>' +
//             //         '<button class="gradient-btn btn-sm btn-full">Download App</button>' +
//             //     '</div>' +
//             // '</nav>',

//             // HERO SECTION
//             '<section class="hero-bg hero-section">' +
//                 '<div class="sparkle-container" id="sparkles-hero"></div>' +
//                 '<div class="coin coin-1"></div>' +
//                 '<div class="coin coin-2"></div>' +
//                 '<div class="coin coin-3"></div>' +
//                 '<div class="container hero-inner">' +
//                     '<div class="hero-text">' +
//                         '<div class="glass-card campaign-badge">' +
//                             '<span class="text-gold">🎯 AYOHA CAMPAIGN</span>' +
//                         '</div>' +
//                         '<h1>' +
//                             '<span class="text-white">Check-In</span> ' +
//                             '<span class="text-gradient">Campaign</span>' +
//                         '</h1>' +
//                         '<p class="hero-tagline">Check In. Earn Points. Win Big.</p>' +
//                         '<p class="hero-desc">Check in now, collect Ayoha Points, redeem rewards, and unlock entries to premium lucky draws.</p>' +
//                         '<div class="hero-buttons">' +
//                             '<button class="gradient-btn">🚀 Start Check-In Now</button>' +
//                             '<button class="gradient-btn-outline">View Prizes 🎁</button>' +
//                         '</div>' +
//                     '</div>' +
//                     '<div class="hero-mascot">' +
//                         '<img src="assets/mascot-bigwin.png" alt="Ayoha Mascot celebrating Big Win" class="float-animation" />' +
//                     '</div>' +
//                 '</div>' +
//             '</section>',

//             // ABOUT
//             '<section class="section-dark" id="about">' +
//                 '<div class="container">' +
//                     '<div class="section-header">' +
//                         '<img src="assets/ayoha-reward-logo.png" alt="Ayoha Reward Logo" class="about-logo" loading="lazy" />' +
//                         '<h2>About <span class="text-gradient">Ayoha</span></h2>' +
//                         '<p class="about-tagline">One Hub. Double Rewards.</p>' +
//                         '<p class="text-muted">Earn from merchants and Ayoha — all in one app.</p>' +
//                     '</div>' +
//                     '<div class="about-content">' +
//                         '<div class="about-mascot">' +
//                             '<img src="assets/mascot-wave.png" alt="Ayoha mascot waving" class="float-animation" loading="lazy" />' +
//                         '</div>' +
//                         '<div class="features-grid">' +

//                             '<div class="glass-card feature-card">' +
//                                 '<div class="feature-icon">' +
//                                     '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(45,100%,60%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
//                                         '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' +
//                                     '</svg>' +
//                                 '</div>' +
//                                 '<h3>Earn Points</h3>' +
//                                 '<p class="text-muted">Collect Ayoha Points with every check-in at participating merchants.</p>' +
//                             '</div>' +

//                             '<div class="glass-card feature-card">' +
//                                 '<div class="feature-icon">' +
//                                     '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(45,100%,60%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
//                                         '<polyline points="20 12 20 22 4 22 4 12"/>' +
//                                         '<rect x="2" y="7" width="20" height="5"/>' +
//                                         '<line x1="12" y1="22" x2="12" y2="7"/>' +
//                                         '<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>' +
//                                         '<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>' +
//                                     '</svg>' +
//                                 '</div>' +
//                                 '<h3>Redeem Rewards</h3>' +
//                                 '<p class="text-muted">Use your points to unlock exclusive rewards and prizes.</p>' +
//                             '</div>' +

//                             '<div class="glass-card feature-card">' +
//                                 '<div class="feature-icon">' +
//                                     '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(45,100%,60%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
//                                         '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' +
//                                     '</svg>' +
//                                 '</div>' +
//                                 '<h3>Trusted Platform</h3>' +
//                                 '<p class="text-muted">Secure and reliable membership platform for all users.</p>' +
//                             '</div>' +

//                         '</div>' +
//                     '</div>' +
//                 '</div>' +
//             '</section>',

//             // CAMPAIGN OVERVIEW
//             '<section class="section-darker">' +
//                 '<div class="container">' +
//                     '<div class="section-header">' +
//                         '<h2>🔥 <span class="text-gradient">Campaign Overview</span></h2>' +
//                     '</div>' +
//                     '<div class="glass-card-strong campaign-card glow-purple">' +
//                         '<div class="campaign-row">' +
//                             '<div class="campaign-icon accent-bg">' +
//                                 '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(330,80%,55%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
//                                     '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' +
//                                 '</svg>' +
//                             '</div>' +
//                             '<div>' +
//                                 '<h3>Organized by Ayoha Platform</h3>' +
//                                 '<p class="text-muted text-sm">This campaign is organized directly by Ayoha — not individual merchants.</p>' +
//                             '</div>' +
//                         '</div>' +
//                         '<div class="divider"></div>' +
//                         '<div class="campaign-row">' +
//                             '<div class="campaign-icon gold-bg">' +
//                                 '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(45,100%,60%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
//                                     '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>' +
//                                     '<line x1="16" y1="2" x2="16" y2="6"/>' +
//                                     '<line x1="8" y1="2" x2="8" y2="6"/>' +
//                                     '<line x1="3" y1="10" x2="21" y2="10"/>' +
//                                 '</svg>' +
//                             '</div>' +
//                             '<div>' +
//                                 '<h3>Campaign Period</h3>' +
//                                 '<p class="text-gold text-lg font-semibold">1 July 2026 — December 2026</p>' +
//                                 '<p class="text-muted text-sm">Don\'t miss out — start earning today!</p>' +
//                             '</div>' +
//                         '</div>' +
//                     '</div>' +
//                 '</div>' +
//             '</section>',

//             // HOW IT WORKS
//             '<section class="hero-bg" id="how-it-works">' +
//                 '<div class="container">' +
//                     '<div class="section-header">' +
//                         '<h2>⚡ How It <span class="text-gradient">Works</span></h2>' +
//                         '<p class="text-muted">Start collecting points in 4 simple steps</p>' +
//                     '</div>' +
//                     '<div class="how-content">' +
//                         '<div class="steps-grid">' +

//                             '<div class="glass-card step-card">' +
//                                 '<div class="step-number">1</div>' +
//                                 '<div class="step-inner">' +
//                                     '<div class="step-icon">📷</div>' +
//                                     '<div>' +
//                                         '<h3>Scan QR Code</h3>' +
//                                         '<p class="text-muted text-sm">Check in via QR code at any participating merchant.</p>' +
//                                     '</div>' +
//                                 '</div>' +
//                             '</div>' +

//                             '<div class="glass-card step-card">' +
//                                 '<div class="step-number">2</div>' +
//                                 '<div class="step-inner">' +
//                                     '<div class="step-icon">✅</div>' +
//                                     '<div>' +
//                                         '<h3>Tap Check-In</h3>' +
//                                         '<p class="text-muted text-sm">Or browse the merchant list and tap to check in.</p>' +
//                                     '</div>' +
//                                 '</div>' +
//                             '</div>' +

//                             '<div class="glass-card step-card">' +
//                                 '<div class="step-number">3</div>' +
//                                 '<div class="step-inner">' +
//                                     '<div class="step-icon">🪙</div>' +
//                                     '<div>' +
//                                         '<h3>Earn +10 Points</h3>' +
//                                         '<p class="text-muted text-sm">Get +10 Ayoha Points for every successful check-in.</p>' +
//                                     '</div>' +
//                                 '</div>' +
//                             '</div>' +

//                             '<div class="glass-card step-card">' +
//                                 '<div class="step-number">4</div>' +
//                                 '<div class="step-inner">' +
//                                     '<div class="step-icon">⏰</div>' +
//                                     '<div>' +
//                                         '<h3>3x Per Day</h3>' +
//                                         '<p class="text-muted text-sm">Limited to 3 check-ins per merchant per day. Come back tomorrow!</p>' +
//                                     '</div>' +
//                                 '</div>' +
//                             '</div>' +

//                         '</div>' +
//                         '<div class="how-mascot">' +
//                             '<img src="assets/mascot-checkin.png" alt="Mascot showing check-in" class="float-animation" loading="lazy" />' +
//                         '</div>' +
//                     '</div>' +
//                 '</div>' +
//             '</section>',

//             // REWARDS
//             '<section class="section-dark" id="rewards">' +
//                 '<div class="sparkle-container" id="sparkles-rewards"></div>' +
//                 '<div class="container" style="position:relative;z-index:10;">' +
//                     '<div class="section-header">' +
//                         '<h2>💎 <span class="text-gradient">Rewards System</span></h2>' +
//                     '</div>' +
//                     '<div class="rewards-content">' +
//                         '<img src="assets/mascot-success.png" alt="Mascot celebrating rewards" class="rewards-mascot float-animation" loading="lazy" />' +
//                         '<div class="rewards-cards">' +
//                             '<div class="glass-card-strong reward-card glow-gold">' +
//                                 '<div class="reward-row">' +
//                                     '<span class="reward-emoji">🪙</span>' +
//                                     '<h3>+10 Ayoha Points Per Check-In</h3>' +
//                                 '</div>' +
//                                 '<p class="text-muted">Every check-in at a participating merchant earns you 10 Ayoha Points instantly.</p>' +
//                             '</div>' +
//                             '<div class="glass-card reward-card">' +
//                                 '<div class="reward-row">' +
//                                     '<span class="reward-emoji">🎁</span>' +
//                                     '<h3>Redeem for Rewards</h3>' +
//                                 '</div>' +
//                                 '<p class="text-muted">Accumulate points and redeem them for exciting rewards from the Ayoha catalog.</p>' +
//                             '</div>' +
//                             '<div class="glass-card reward-card">' +
//                                 '<div class="progress-header">' +
//                                     '<span class="text-muted">Your Progress</span>' +
//                                     '<span class="text-gold font-semibold">7,500 / 10,000 pts</span>' +
//                                 '</div>' +
//                                 '<div class="progress-bar"><div class="progress-fill"></div></div>' +
//                                 '<p class="text-muted text-xs" style="margin-top:0.5rem;">2,500 more points to unlock Lucky Draw entry! 🎰</p>' +
//                             '</div>' +
//                         '</div>' +
//                     '</div>' +
//                 '</div>' +
//             '</section>',

//             // LUCKY DRAW
//             '<section class="hero-bg">' +
//                 '<div class="container">' +
//                     '<div class="section-header">' +
//                         '<h2>🎰 <span class="text-gradient">Lucky Draw</span></h2>' +
//                         '<p class="text-accent text-xl font-semibold">Don\'t Miss Your Chance!</p>' +
//                         '<p class="text-muted" style="max-width:32rem;margin:0 auto;">Collect more points to unlock your chance to win exclusive prizes every month.</p>' +
//                     '</div>' +
//                     '<div class="stats-grid">' +
//                         '<div class="glass-card-strong stat-card pulse-glow"><p class="stat-value text-gold">10,000+</p><p class="text-muted text-sm">Points to Qualify</p></div>' +
//                         '<div class="glass-card-strong stat-card pulse-glow"><p class="stat-value text-accent">Monthly</p><p class="text-muted text-sm">Lucky Draw</p></div>' +
//                         '<div class="glass-card-strong stat-card pulse-glow"><p class="stat-value text-gold">10</p><p class="text-muted text-sm">Winners Every Month</p></div>' +
//                     '</div>' +
//                     '<div class="glass-card-strong fomo-card">' +
//                         '<p class="font-semibold text-white" style="font-size:1.125rem;margin-bottom:0.5rem;">⚠️ Limited Daily Rewards</p>' +
//                         '<p class="text-muted">The more you check in, the closer you are to winning. Start collecting today — opportunities won\'t last forever!</p>' +
//                     '</div>' +
//                 '</div>' +
//             '</section>',

//             // PRIZES
//             '<section class="section-darker" id="prizes">' +
//                 '<div class="container">' +
//                     '<div class="section-header">' +
//                         '<h2>🏆 <span class="text-gradient">Prize Showcase</span></h2>' +
//                         '<p class="text-muted">Win exciting prizes worth RM100 to RM1,000. 10 winners every month!</p>' +
//                     '</div>' +
//                     '<div class="prizes-grid">' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-tv.png" alt="Smart TV 55&quot;" loading="lazy"/></div><p class="prize-label">Smart TV 55"</p><p class="prize-value">RM1,000</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-phone.png" alt="Smartphone" loading="lazy"/></div><p class="prize-label">Smartphone</p><p class="prize-value">RM800</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-tablet.png" alt="Tablet" loading="lazy"/></div><p class="prize-label">Tablet</p><p class="prize-value">RM700</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-chair.png" alt="Gaming Chair" loading="lazy"/></div><p class="prize-label">Gaming Chair</p><p class="prize-value">RM500</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-sofa.png" alt="Luxury Sofa" loading="lazy"/></div><p class="prize-label">Luxury Sofa</p><p class="prize-value">RM900</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-airfryer.png" alt="Air Fryer" loading="lazy"/></div><p class="prize-label">Air Fryer</p><p class="prize-value">RM300</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-vacuum.png" alt="Robot Vacuum" loading="lazy"/></div><p class="prize-label">Robot Vacuum</p><p class="prize-value">RM400</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-earbuds.png" alt="Wireless Earbuds" loading="lazy"/></div><p class="prize-label">Wireless Earbuds</p><p class="prize-value">RM200</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-watch.png" alt="Smartwatch" loading="lazy"/></div><p class="prize-label">Smartwatch</p><p class="prize-value">RM350</p></div>' +
//                         '<div class="glass-card-strong prize-card"><div class="prize-img-wrap"><img src="assets/prize-headphones.png" alt="Headphones" loading="lazy"/></div><p class="prize-label">Headphones</p><p class="prize-value">RM150</p></div>' +
//                     '</div>' +
//                 '</div>' +
//             '</section>',

//             // CTA
//             '<section class="hero-bg">' +
//                 '<div class="sparkle-container" id="sparkles-cta"></div>' +
//                 '<div class="container" style="position:relative;z-index:10;">' +
//                     '<div class="cta-content">' +
//                         '<img src="assets/mascot-map.png" alt="Mascot with map" class="cta-mascot float-animation" loading="lazy" />' +
//                         '<h2>Start Checking In <span class="text-gradient">Today</span></h2>' +
//                         '<p class="text-muted text-lg">Don\'t miss your daily rewards and monthly prize opportunities. Every check-in counts!</p>' +
//                         '<div class="cta-buttons">' +
//                             '<button class="gradient-btn btn-lg">📱 Download App</button>' +
//                             '<button class="gradient-btn-outline btn-lg">🚀 Start Now</button>' +
//                         '</div>' +
//                     '</div>' +
//                 '</div>' +
//             '</section>',

//             // FOOTER
//             '<footer class="section-darker footer">' +
//                 '<div class="container footer-inner">' +
//                     '<img src="assets/ayoha-reward-logo.png" alt="Ayoha" class="footer-logo" />' +
//                     '<p class="text-gradient footer-brand">Ayoha</p>' +
//                     '<p class="footer-tagline">One Hub. Double Rewards.</p>' +
//                     '<p class="text-muted text-xs">Earn from merchants and Ayoha — all in one app.</p>' +
//                     '<p class="text-muted text-sm" style="margin-top:1rem;">© 2026 Ayoha Platform. All rights reserved.</p>' +
//                     '<p class="text-muted text-xs" style="margin-top:0.5rem;">Check-In Campaign — July 2026 to December 2026</p>' +
//                 '</div>' +
//             '</footer>',

//         '</div>'
//     ].join(''),

//     listeners: {
//         painted: function (cmp) {
//             var el = cmp.element;

//             function createSparkles(containerId, count) {
//                 var container = el.down('#' + containerId);
//                 if (!container || container.dom.getAttribute('data-init') === '1') {
//                     return;
//                 }

//                 container.dom.setAttribute('data-init', '1');

//                 for (var i = 0; i < count; i++) {
//                     var s = document.createElement('div');
//                     var size = (Math.random() * 6) + 2;

//                     s.className = 'sparkle';
//                     s.style.left = (Math.random() * 100) + '%';
//                     s.style.top = (Math.random() * 100) + '%';
//                     s.style.animationDelay = (Math.random() * 3) + 's';
//                     s.style.width = size + 'px';
//                     s.style.height = size + 'px';

//                     container.dom.appendChild(s);
//                 }
//             }

//             createSparkles('sparkles-hero', 12);
//             createSparkles('sparkles-rewards', 12);
//             createSparkles('sparkles-cta', 12);

//             var hamburger = el.down('#hamburger');
//             var mobileMenu = el.down('#mobile-menu');

//             if (hamburger && mobileMenu && !hamburger.dom.getAttribute('data-bind')) {
//                 hamburger.dom.setAttribute('data-bind', '1');

//                 hamburger.on('click', function () {
//                     hamburger.toggleCls('active');
//                     mobileMenu.toggleCls('open');
//                 });

//                 Ext.Array.each(mobileMenu.query('a'), function (aTag) {
//                     Ext.get(aTag).on('click', function () {
//                         hamburger.removeCls('active');
//                         mobileMenu.removeCls('open');
//                     });
//                 });
//             }

//             Ext.Array.each(el.query('a[href^="#"]'), function (anchor) {
//                 var a = Ext.get(anchor);

//                 if (!a.dom.getAttribute('data-scroll-bind')) {
//                     a.dom.setAttribute('data-scroll-bind', '1');

//                     a.on('click', function (e) {
//                         var href = a.getAttribute('href'),
//                             target = href ? el.down(href) : null;

//                         if (target) {
//                             e.preventDefault();
//                             target.dom.scrollIntoView({
//                                 behavior: 'smooth',
//                                 block: 'start'
//                             });
//                         }
//                     });
//                 }
//             });
//         }
//     }
// }




                        ]
                    },






                   
                ]
            },

        ]

    });
   


  }









function FloatPanel_MerchantCampaingPromoPageHide(fromBack, animCfg) {

  // guard
  if (isFloatPanel_MerchantCampaingPromoPageOpen !== 'Y') return;

  // hide (optional custom animation)
  if (animCfg) {
    _FloatPanel_MerchantCampaingPromoPage.hide(Ext.fx.Animation(animCfg));
  } else {
    _FloatPanel_MerchantCampaingPromoPage.hide();
  }

  isFloatPanel_MerchantCampaingPromoPageOpen = 'N';
  _FloatPanel_MerchantCampaingPromoPage.destroy(); // destroy terus supaya next show akan create baru (reset state)
  _FloatPanel_MerchantCampaingPromoPage = null;
 // RemovePages("FloatPanel_ForgotPasswordHide()");

  // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
  if (fromBack !== true) {
    AyohaBrowserBack.close('FloatPanel_MerchantCampaingPromoPage');
  }


 

}




function FloatPanel_MerchantCampaingPromoPageShow() {



FloatPanel_MerchantCampaingPromoPageCreateIfNeeded()

  _FloatPanel_MerchantCampaingPromoPage.show();
  isFloatPanel_MerchantCampaingPromoPageOpen = 'Y';
if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
  AyohaBrowserBack.push('FloatPanel_MerchantCampaingPromoPage', function () {
 
       FloatPanel_MerchantCampaingPromoPageHide(true);
  });
}





}

