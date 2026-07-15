/**
 * Shree Om Construction and Planning - System Core Infrastructure Architecture
 * Phase 1 Execution Model - Strict Modular Implementation Framework
 */

document.addEventListener('DOMContentLoaded', () => {
    // Structural Application Context Bootloader Object
    const AppCore = {
        init() {
            this.cacheElements();
            this.bindSystemEvents();
        },

        /**
         * Cache global references to structural DOM elements
         */
        cacheElements() {
            this.siteHeader = document.getElementById('site-header');
            this.navToggle = document.getElementById('mobile-nav-toggle');
            this.primaryNav = document.getElementById('primary-nav');
            this.navLinks = document.querySelectorAll('.nav-link, .btn-nav');
            this.enquiryForm = document.getElementById('project-enquiry-form');
        },

        /**
         * Initialize system pipeline listeners mapping global client activity
         */
        bindSystemEvents() {
            // Mobile Navigation Sub-system Pipeline
            if (this.navToggle && this.primaryNav) {
                this.navToggle.addEventListener('click', (e) => this.toggleMobileNavigation(e));
            }

            // Document Click Tracker to automatically close the Mobile Menu when interacting with the main layout
            document.addEventListener('click', (e) => this.dismissMobileNavigationContext(e));

            // High Performance Sticky Navigation Calculation Pipeline
            window.addEventListener('scroll', () => this.evaluateHeaderStickyState(), { passive: true });

            // Keyboard Accessibility Level Escape Navigation Handler
            document.addEventListener('keydown', (e) => this.handleKeyboardEscapeEngagement(e));

            // Smooth Scroll System Pipeline Hooks
            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => this.executeSmoothScrollPipeline(e));
            });

            // Form Infrastructure Compliance Data Interceptor Validation Hook
            if (this.enquiryForm) {
                this.enquiryForm.addEventListener('submit', (e) => this.interceptFormSubmissionPipeline(e));
            }
        },

        /**
         * Toggles the state metrics of the mobile nav draw system controls
         * @param {Event} event - System interaction click trace
         */
        toggleMobileNavigation(event) {
            event.stopPropagation(); // Shield framework layout handlers against bubbling metrics
            
            const isMenuCurrentlyOpen = this.navToggle.getAttribute('aria-expanded') === 'true';
            
            this.navToggle.setAttribute('aria-expanded', !isMenuCurrentlyOpen);
            this.primaryNav.classList.toggle('is-active', !isMenuCurrentlyOpen);
            
            // Manage accessibility document overflow clipping safely
            document.body.style.overflow = !isMenuCurrentlyOpen ? 'hidden' : '';
        },

        /**
         * Automatically closes the navigation drawer when the user clicks outside its target container bounds
         * @param {Event} event - Structural click propagation event trace
         */
        dismissMobileNavigationContext(event) {
            const isMenuCurrentlyOpen = this.navToggle.getAttribute('aria-expanded') === 'true';
            
            if (isMenuCurrentlyOpen && !this.primaryNav.contains(event.target) && event.target !== this.navToggle) {
                this.forceCloseMobileNavigation();
            }
        },

        /**
         * Forces the responsive mobile navigation back to its absolute resting hidden profile
         */
        forceCloseMobileNavigation() {
            this.navToggle.setAttribute('aria-expanded', 'false');
            this.primaryNav.classList.remove('is-active');
            document.body.style.overflow = '';
        },

        /**
         * Dismisses active drop drawers globally on keyboard Escape event verification tracking
         * @param {Event} event - System Keyboard event mapping capture
         */
        handleKeyboardEscapeEngagement(event) {
            if (event.key === 'Escape') {
                this.forceCloseMobileNavigation();
            }
        },

        /**
         * Computes window vertical placement metric vectors against standard sticky rules
         */
        evaluateHeaderStickyState() {
            const currentVerticalScrollOffset = window.scrollY || window.pageYOffset;
            
            if (currentVerticalScrollOffset > 50) {
                this.siteHeader.classList.add('is-sticky');
            } else {
                this.siteHeader.classList.remove('is-sticky');
            }
        },

        /**
         * Bypasses default legacy target jumping to inject controlled mathematical alignment curves
         * @param {Event} event - Navigation anchor point event trace
         */
        executeSmoothScrollPipeline(event) {
            const elementTargetSelector = event.currentTarget.getAttribute('href');
            
            // Protect script routing if anchor elements serve alternate functions
            if (!elementTargetSelector.startsWith('#')) return;
            
            const targetElementInstance = document.querySelector(elementTargetSelector);
            if (!targetElementInstance) return;
            
            event.preventDefault(); // Suspend standard jump layout update operations
            
            // Guarantee mobile nav context termination before viewport realignment sequences
            this.forceCloseMobileNavigation();
            
            const targetHeaderHeightCompensator = 80; 
            const elementTargetLocationMatrix = targetElementInstance.getBoundingClientRect().top + window.pageYOffset;
            const absoluteScrollCalculatedCoord = elementTargetLocationMatrix - targetHeaderHeightCompensator;
            
            window.scrollTo({
                top: absoluteScrollCalculatedCoord,
                behavior: 'smooth'
            });

            // Update focus for assistive software environments
            targetElementInstance.focus({ preventScroll: true });
            if (document.activeElement !== targetElementInstance) {
                targetElementInstance.setAttribute('tabindex', '-1');
                targetElementInstance.focus({ preventScroll: true });
            }
        },

        /**
         * Structural engineering compliance validator protecting inputs prior to transactional networking
         * @param {Event} event - Intercepted Form submission event trace record
         */
        interceptFormSubmissionPipeline(event) {
            event.preventDefault();
            
            // Phase 1 Architecture Validation Sandbox Stub
            console.log('--- Shree Om Architecture Form Engine Logging Trace ---');
            
            const clientInputFormData = new FormData(this.enquiryForm);
            const proceduralExtractionModel = {};
            
            clientInputFormData.forEach((inputValue, inputKeyName) => {
                proceduralExtractionModel[inputKeyName] = inputValue;
            });
            
            console.log('Validated Asset Parameters Model Payload Extracted:', proceduralExtractionModel);
            
            // Production Sandbox Success Alert Model Strategy UI Placeholder
            alert('Shree Om Systems Notification: Engineering parameters validated securely. Data processing will deploy in Phase 2 operations.');
            
            this.enquiryForm.reset();
        }
    };

    // Ignition Sequence Launch Vector
    AppCore.init();
});