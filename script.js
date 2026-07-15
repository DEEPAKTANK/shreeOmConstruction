/**
 * Shree Om Construction and Planning - Premium Interactions & Engine Controller
 * Phase 3 Execution Model - Vanilla JS Functional Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Global System Configuration Engine
    const UIConfig = {
        headerHeight: 75,
        sliderInterval: 5000,
        revealOffset: 0.15
    };

    /**
     * System Bootloader Orchestrator
     */
    const AppController = {
        init() {
            this.injectDynamicHTMLElements();
            this.cacheElements();
            this.initPreloaderEngine();
            this.initNavigationSystem();
            this.initScrollRevealFramework();
            this.initAnimatedCounters();
            this.initProjectCardsEnhancements();
            this.initTestimonialSlider();
            this.initFormValidationPipeline();
            this.initInteractiveRipples();
        },

        /**
         * Injects lightweight access nodes matching layout spec demands
         */
        injectDynamicHTMLElements() {
            // Preloader Shield Layer Configuration
            const preloaderNode = document.createElement('div');
            preloaderNode.id = 'site-preloader';
            preloaderNode.className = 'site-preloader';
            preloaderNode.innerHTML = '<div class="preloader-spinner" aria-hidden="true"></div>';
            document.body.insertBefore(preloaderNode, document.body.firstChild);

            // Floating Operations Widget Array
            const floatingWrapper = document.createElement('div');
            floatingWrapper.className = 'floating-actions-wrapper';
            floatingWrapper.innerHTML = `
                <button class="floating-action-btn float-top" id="btn-back-to-top" aria-label="Scroll back to top asset coordinate">↑</button>
                <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" class="floating-action-btn float-wa" aria-label="Open secure WhatsApp communication pipeline">WA</a>
                <a href="tel:#" class="floating-action-btn float-phone" aria-label="Initiate direct telemetry call voice link">📞</a>
            `;
            document.body.appendChild(floatingWrapper);
        },

        /**
         * Resolves pointers directly targeting DOM structure
         */
        cacheElements() {
            this.preloader = document.getElementById('site-preloader');
            this.siteHeader = document.getElementById('site-header');
            this.navToggle = document.getElementById('mobile-nav-toggle');
            this.primaryNav = document.getElementById('primary-nav');
            this.navLinks = document.querySelectorAll('.nav-link, .btn-nav');
            this.sections = document.querySelectorAll('section, header, footer');
            this.counterItems = document.querySelectorAll('.stat-item');
            this.projectCards = document.querySelectorAll('.card-project');
            this.testimonialsBlock = document.getElementById('testimonials');
            this.enquiryForm = document.getElementById('project-enquiry-form');
            this.btnBackToTop = document.getElementById('btn-back-to-top');
            this.heroSection = document.getElementById('hero');
        },

        /**
         * Handles immediate execution tracking of system component removal timings
         */
        initPreloaderEngine() {
            window.addEventListener('load', () => {
                if (this.preloader) {
                    this.preloader.classList.add('fade-out');
                    setTimeout(() => this.preloader.remove(), 500);
                }
                this.executeHeroEntranceSequence();
            });
            
            // Fallback safe mechanism for loading cycles
            setTimeout(() => {
                if (document.getElementById('site-preloader')) {
                    this.preloader.classList.add('fade-out');
                }
            }, 3000);
        },

        /**
         * Fires entrance paths targeting high prominence content structures
         */
        executeHeroEntranceSequence() {
            if (!this.heroSection) return;
            const title = this.heroSection.querySelector('.hero-title');
            const subtitle = this.heroSection.querySelector('.hero-subtitle');
            const actions = this.heroSection.querySelector('.hero-actions');

            [title, subtitle, actions].forEach((node, offsetIdx) => {
                if (node) {
                    node.style.opacity = '0';
                    node.style.transform = 'translateY(20px)';
                    node.style.transition = 'opacity 1s ease, transform 1s ease';
                    setTimeout(() => {
                        node.style.opacity = '1';
                        node.style.transform = 'translateY(0)';
                    }, 200 * offsetIdx);
                }
            });

            // Lightweight high performance parallax background system deployment
            window.addEventListener('scroll', () => {
                const scrolledDistance = window.pageYOffset;
                if (scrolledDistance <= window.innerHeight) {
                    this.heroSection.style.backgroundPositionY = `${scrolledDistance * 0.4}px`;
                }
            }, { passive: true });
        },

        /**
         * Constructs layout updates supporting complex header adjustments
         */
        initNavigationSystem() {
            const handleScrollExecution = () => {
                const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
                
                // Sticky Backdrop Threshold Modifier Activation Logic
                if (scrollOffset > 60) {
                    this.siteHeader.classList.add('is-sticky');
                } else {
                    this.siteHeader.classList.remove('is-sticky');
                }

                // Interactive Back-To-Top Node visibility evaluation
                if (scrollOffset > 400) {
                    this.btnBackToTop.classList.add('is-visible');
                } else {
                    this.btnBackToTop.classList.remove('is-visible');
                }

                this.evaluateActiveNavigationState(scrollOffset);
            };

            window.addEventListener('scroll', this.debounce(handleScrollExecution, 10), { passive: true });
            
            // Responsive mobile toggle menu click capture adjustments
            this.navToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const opened = this.navToggle.getAttribute('aria-expanded') === 'true';
                this.setMobileMenuState(!opened);
            });

            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const selector = link.getAttribute('href');
                    if (selector.startsWith('#')) {
                        e.preventDefault();
                        this.setMobileMenuState(false);
                        const frameInstance = document.querySelector(selector);
                        if (frameInstance) {
                            const destinationOffset = frameInstance.getBoundingClientRect().top + window.pageYOffset - UIConfig.headerHeight;
                            window.scrollTo({ top: destinationOffset, behavior: 'smooth' });
                        }
                    }
                });
            });

            this.btnBackToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        },

        /**
         * Manages logical accessibility attributes mapping mobile menu displays
         */
        setMobileMenuState(state) {
            this.navToggle.setAttribute('aria-expanded', state);
            this.primaryNav.classList.toggle('is-active', state);
            document.body.style.overflow = state ? 'hidden' : '';
        },

        /**
         * Sets navigation node highlights matching scroll progression metrics
         */
        evaluateActiveNavigationState(scrollOffset) {
            let activeTargetId = '';
            
            this.sections.forEach(section => {
                const topBound = section.offsetTop - (UIConfig.headerHeight + 20);
                const bottomBound = topBound + section.offsetHeight;
                
                if (scrollOffset >= topBound && scrollOffset < bottomBound) {
                    const elementId = section.getAttribute('id');
                    if (elementId) activeTargetId = elementId;
                }
            });

            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeTargetId}`) {
                    link.classList.add('active');
                }
            });
        },

        /**
         * Leverages high efficiency IntersectionObserver configurations to drive structural tracking
         */
        initScrollRevealFramework() {
            const layoutRevealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: UIConfig.revealOffset });

            // Targets all strategic primary tracking container wrappers from the layout ecosystem
            const revealTargets = document.querySelectorAll(
                '#about .grid, #services .card, #why-choose-us .card, #portfolio .portfolio-block, #process .timeline-item, #testimonials .card, #enquiry .form-layout, footer .container'
            );

            revealTargets.forEach(target => {
                target.classList.add('reveal-hidden');
                layoutRevealObserver.observe(target);
            });
        },

        /**
         * Drives high frequency transactional counter increments directly inside views
         */
        initAnimatedCounters() {
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const numericNode = entry.target.querySelector('.stat-number');
                        if (numericNode) {
                            const aggregateTargetValue = parseInt(numericNode.textContent.replace(/\D/g, ''), 10);
                            this.animateSingleCounterNode(numericNode, aggregateTargetValue);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            this.counterItems.forEach(item => counterObserver.observe(item));
        },

        /**
         * Smoothly handles step tracking increments inside structural loops
         */
        animateSingleCounterNode(node, maxLimit) {
            let startBaseValue = 0;
            const operationalDuration = 2000;
            const targetStepInterval = Math.max(Math.floor(operationalDuration / maxLimit), 15);
            const cycleStepIncrement = Math.ceil(maxLimit / (operationalDuration / targetStepInterval));
            
            const numericalTicker = setInterval(() => {
                startBaseValue += cycleStepIncrement;
                if (startBaseValue >= maxLimit) {
                    node.textContent = `${maxLimit}+`;
                    clearInterval(numericalTicker);
                } else {
                    node.textContent = `${startBaseValue}+`;
                }
            }, targetStepInterval);
        },

        /**
         * Re-configures portfolio markup layers to project real-time data visualizers
         */
        initProjectCardsEnhancements() {
            this.projectCards.forEach(card => {
                const cardBody = card.querySelector('.card-body');
                const projectTextNode = card.querySelector('.card-text');
                
                if (cardBody && projectTextNode) {
                    // Simulates programmatic completion index matrices matching portfolio records safely
                    const completionIndex = card.innerText.includes('Turnkey') || card.innerText.includes('Clinic') || card.innerText.includes('Heritage') ? 100 : 75;
                    
                    const indicatorWrapper = document.createElement('div');
                    indicatorWrapper.className = 'project-progress-container';
                    indicatorWrapper.innerHTML = `<div class="project-progress-bar" data-progress="${completionIndex}"></div>`;
                    
                    const indexLabelNode = document.createElement('div');
                    indexLabelNode.className = 'flex justify-between font-xs color-muted mt-xs mb-md';
                    indexLabelNode.innerHTML = `<span>Completion Index Rate:</span><strong>${completionIndex}%</strong>`;

                    cardBody.insertBefore(indicatorWrapper, projectTextNode);
                    cardBody.insertBefore(indexLabelNode, projectTextNode);
                }
            });

            // Binds trigger tracking specifically targeted for structural metric bars expansion processing
            const structuralProgressObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetMetricNode = entry.target.querySelector('.project-progress-bar');
                        if (targetMetricNode) {
                            const operationalPercentage = targetMetricNode.getAttribute('data-progress');
                            targetMetricNode.style.width = `${operationalPercentage}%`;
                        }
                    }
                });
            }, { threshold: 0.2 });

            this.projectCards.forEach(card => structuralProgressObserver.observe(card));
        },

        /**
         * Operates dynamic carousel mechanics across structured layout targets safely
         */
        initTestimonialSlider() {
            if (!this.testimonialsBlock) return;
            
            const reviewCardsContainer = this.testimonialsBlock.querySelector('.grid');
            const individualReviewCards = this.testimonialsBlock.querySelectorAll('.testimonial-card');
            if (individualReviewCards.length === 0) return;

            // Restructure CSS hierarchy styles configuration inline dynamically to optimize cross axis layouts
            reviewCardsContainer.style.display = 'flex';
            reviewCardsContainer.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
            reviewCardsContainer.style.width = `${individualReviewCards.length * 100}%`;
            
            // Build viewport mask context layer wrapper boundaries safely
            const clippingWrapper = document.createElement('div');
            clippingWrapper.style.overflow = 'hidden';
            clippingWrapper.style.width = '100%';
            reviewCardsContainer.parentNode.insertBefore(clippingWrapper, reviewCardsContainer);
            clippingWrapper.appendChild(reviewCardsContainer);

            individualReviewCards.forEach(card => {
                card.style.flex = `0 0 ${100 / individualReviewCards.length}%`;
                card.style.width = 'auto';
            });

            // Constructs transactional management controls
            const sliderControllerNavContainer = document.createElement('div');
            sliderControllerNavContainer.className = 'flex align-center justify-between mt-xl';
            sliderControllerNavContainer.style.maxWidth = '200px';
            sliderControllerNavContainer.style.marginObject = '0 auto';
            sliderControllerNavContainer.style.marginLeft = 'auto';
            sliderControllerNavContainer.style.marginRight = 'auto';
            sliderControllerNavContainer.innerHTML = `
                <button class="btn btn-secondary btn-sm" id="slider-btn-prev" style="color:var(--primary); border-color:var(--primary); padding:0.5rem 1rem;">←</button>
                <button class="btn btn-secondary btn-sm" id="slider-btn-next" style="color:var(--primary); border-color:var(--primary); padding:0.5rem 1rem;">→</button>
            `;
            clippingWrapper.parentNode.appendChild(sliderControllerNavContainer);

            let pointerActiveIndex = 0;
            let timelineTicker = null;

            const executeViewportShiftSequence = () => {
                const calculatedXCoordinateShift = (pointerActiveIndex * (100 / individualReviewCards.length));
                reviewCardsContainer.style.transform = `translateX(-${calculatedXCoordinateShift}%)`;
            };

            const advanceSliderIndex = () => {
                pointerActiveIndex = (pointerActiveIndex + 1) % individualReviewCards.length;
                executeViewportShiftSequence();
            };

            const reverseSliderIndex = () => {
                pointerActiveIndex = (pointerActiveIndex - 1 + individualReviewCards.length) % individualReviewCards.length;
                executeViewportShiftSequence();
            };

            const launchTimelineLoop = () => {
                timelineTicker = setInterval(advanceSliderIndex, UIConfig.sliderInterval);
            };

            const terminateTimelineLoop = () => {
                if (timelineTicker) clearInterval(timelineTicker);
            };

            // Bind systemic controls listener hooks
            document.getElementById('slider-btn-next').addEventListener('click', () => { terminateTimelineLoop(); advanceSliderIndex(); launchTimelineLoop(); });
            document.getElementById('slider-btn-prev').addEventListener('click', () => { terminateTimelineLoop(); reverseSliderIndex(); launchTimelineLoop(); });

            clippingWrapper.addEventListener('mouseenter', terminateTimelineLoop);
            clippingWrapper.addEventListener('mouseleave', launchTimelineLoop);

            launchTimelineLoop();
        },

        /**
         * Validates dynamic user metrics processing before operational integration stages
         */
        initFormValidationPipeline() {
            if (!this.enquiryForm) return;

            const trackingInputs = this.enquiryForm.querySelectorAll('input, select, textarea');
            const masterSubmitActionNode = this.enquiryForm.querySelector('button[type="submit"]');

            // Embed clean runtime logging error spaces directly underneath active fields mapping structures
            trackingInputs.forEach(input => {
                const contextContainer = input.parentNode;
                const errorDisplayElement = document.createElement('span');
                errorDisplayElement.className = 'field-error-message';
                errorDisplayElement.id = `${input.id}-error-feedback`;
                input.setAttribute('aria-describedby', errorDisplayElement.id);
                contextContainer.appendChild(errorDisplayElement);

                // Bind modern structural analytical intercept event validation listeners
                input.addEventListener('input', () => this.evaluateInputValidityContext(input, errorDisplayElement));
                input.addEventListener('blur', () => this.evaluateInputValidityContext(input, errorDisplayElement));
            });

            this.enquiryForm.addEventListener('input', this.debounce(() => {
                const operationalValidityState = this.enquiryForm.checkValidity();
                masterSubmitActionNode.disabled = !operationalValidityState;
            }, 150));

            this.enquiryForm.addEventListener('submit', (e) => this.executeFormTransmissionSequence(e, masterSubmitActionNode));
            
            // Initialization state lockdown execution routine
            masterSubmitActionNode.disabled = true;
        },

        /**
         * Executes functional verification tests targeting user parameters profiles
         */
        evaluateInputValidityContext(input, errorNode) {
            let errorStatusText = '';
            input.style.borderColor = '';

            if (!input.validity.valid) {
                if (input.validity.valueMissing) {
                    errorStatusText = 'This programmatic parameter criterion is required.';
                } else if (input.validity.typeMismatch && input.type === 'email') {
                    errorStatusText = 'Please enter a structurally valid network email address protocol format.';
                }
            }

            // Custom phone matrix regex verification check pattern routing
            if (input.type === 'tel' && input.value.trim() !== '') {
                const cleanPhoneValue = input.value.replace(/\D/g, '');
                if (cleanPhoneValue.length < 10) {
                    errorStatusText = 'Telemetry parameter sequence requires a verified 10-digit baseline configuration minimum.';
                }
            }

            if (errorStatusText) {
                errorNode.textContent = errorStatusText;
                input.style.borderColor = '#ef4444';
            } else {
                errorNode.textContent = '';
            }
        },

        /**
         * Safely manages form transmissions and prepares hooks for external endpoints like Web3Forms
         */
        executeFormTransmissionSequence(event, actionNode) {
            event.preventDefault();
            
            // Injects responsive state visual elements onto target execution layouts
            actionNode.disabled = true;
            const fallbackOriginalText = actionNode.innerHTML;
            actionNode.classList.add('ripple-surface');
            actionNode.innerHTML = `<span class="btn-spinner" aria-hidden="true"></span><span class="btn-loading-text">${fallbackOriginalText}</span>`;

            const operationalFormData = new FormData(this.enquiryForm);
            const conversionObjectPayload = {};
            operationalFormData.forEach((val, key) => conversionObjectPayload[key] = val);

            console.log('--- Shree Om Form Transaction Data Log ---');
            console.log('Data parameters verified. Transmitting payload to targeted network layer:', conversionObjectPayload);

            // SIMULATED TRANSACTION NETWORK ROUTING TIMELINES LAYER HOOK
            // NOTE: Future development stages can seamlessly bridge Web3Forms integration endpoints here:
            // fetch('https://api.web3forms.com/submit', { method: 'POST', body: operationalFormData })
            
            setTimeout(() => {
                alert('Success: Project evaluation parameters transmitted safely. Our structural engineering group will contact you within 24 working hours.');
                actionNode.innerHTML = fallbackOriginalText;
                actionNode.disabled = false;
                this.enquiryForm.reset();
                masterSubmitActionNode.disabled = true;
            }, 2000);
        },

        /**
         * Configures modern ripple elements over targeted focus bounds elements interaction nodes
         */
        initInteractiveRipples() {
            const interactiveTriggers = document.querySelectorAll('.btn, .social-icon-link, .floating-action-btn');
            
            interactiveTriggers.forEach(trigger => {
                trigger.classList.add('ripple-surface');
                trigger.addEventListener('click', function(e) {
                    const trackingBoundBox = this.getBoundingClientRect();
                    const calculatedXOffset = e.clientX - trackingBoundBox.left;
                    const calculatedYOffset = e.clientY - trackingBoundBox.top;

                    const localizedRippleNode = document.createElement('span');
                    localizedRippleNode.className = 'btn-ripple';
                    localizedRippleNode.style.left = `${calculatedXOffset}px`;
                    localizedRippleNode.style.top = `${calculatedYOffset}px`;
                    
                    const dynamicDiameterCompensator = Math.max(trackingBoundBox.width, trackingBoundBox.height);
                    localizedRippleNode.style.width = `${dynamicDiameterCompensator}px`;
                    localizedRippleNode.style.height = `${dynamicDiameterCompensator}px`;

                    this.appendChild(localizedRippleNode);
                    setTimeout(() => localizedRippleNode.remove(), 600);
                });
            });
        },

        /**
         * Standard performance debouncer function to prevent scroll-heavy rendering overhead
         */
        debounce(callbackFn, delayTime) {
            let activityTimerReference;
            return function(...argMatrix) {
                const executionContext = this;
                clearTimeout(activityTimerReference);
                activityTimerReference = setTimeout(() => callbackFn.apply(executionContext, argMatrix), delayTime);
            };
        }
    };

    // Initialize application systems logic
    AppController.init();
});