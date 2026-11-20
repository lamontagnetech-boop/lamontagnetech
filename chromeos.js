        // --- NEW TAB & SLIDER LOGIC ---
        document.addEventListener('DOMContentLoaded', () => {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabPanels = document.querySelectorAll('.tab-panel');

            // Find the currently visible slide and load its video
            function loadVideo(panel) {
                const currentSlideWrapper = panel.querySelector('.slides-wrapper');
                // Calculate which slide is currently visible (0, 1, 2...)
                const currentTransform = currentSlideWrapper.style.transform || 'translateX(0)';
                const currentOffset = parseInt(currentTransform.match(/-?\d+/)?.[0] || 0);
                const currentSlideIndex = -currentOffset / 100;
                
                const currentSlide = panel.querySelectorAll('.gallery-item')[currentSlideIndex];
                
                if (currentSlide) {
                    const iframe = currentSlide.querySelector('iframe');
                    // Check if it's a YouTube video (uses data-src) and needs loading
                    if (iframe && iframe.dataset.src) { 
                        // Load the video if it's currently showing the placeholder
                        if (iframe.src.includes('about:blank')) {
                            // Load the YouTube URL from the data-src attribute
                            iframe.src = iframe.dataset.src;
                        }
                    }
                    // GIF/Image element does not need special loading, it loads with HTML
                }
            }
            
            // NEW & IMPROVED FUNCTION: Stops any currently active video by setting source to a lightweight placeholder.
            function stopActiveVideo(panel) {
                // Find ALL iframes within the current panel
                const iframes = panel.querySelectorAll('iframe');
                iframes.forEach(iframe => {
                    // Only stop YouTube videos which rely on the lazy-loading data-src attribute
                    if (iframe.dataset.src && iframe.src.includes('youtube.com')) {
                        // STOP THE VIDEO: Setting src to about:blank reliably stops playback 
                        // and prevents the browser from consuming resources for the video.
                        iframe.src = 'about:blank'; 
                    }
                });
            }

            function updateSliderNavigation(panelId, currentSlideIndex) {
                const panel = document.getElementById(panelId);
                const items = panel.querySelectorAll('.gallery-item');
                const totalSlides = items.length;
                
                const prevButton = panel.querySelector('.prev-slide');
                const nextButton = panel.querySelector('.next-slide');

                if (prevButton && nextButton) {
                    if (totalSlides === 1) {
                         prevButton.disabled = true;
                         nextButton.disabled = true;
                    } else {
                        prevButton.disabled = (currentSlideIndex === 0);
                        nextButton.disabled = (currentSlideIndex === totalSlides - 1);
                    }
                }
            }

            /* --- Tab Switching Logic --- */
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetId = button.dataset.target;

                    // 1. Stop video in the previously active panel before switching
                    const currentActivePanel = document.querySelector('.tab-panel.active');
                    if (currentActivePanel) {
                        stopActiveVideo(currentActivePanel);
                    }

                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabPanels.forEach(panel => panel.classList.remove('active'));

                    button.classList.add('active');
                    const targetPanel = document.getElementById(targetId);
                    targetPanel.classList.add('active');

                    const wrapper = targetPanel.querySelector('.slides-wrapper');
                    
                    if (wrapper) {
                        // 2. Reset to the first slide when switching tabs
                        wrapper.style.transform = 'translateX(0)';
                        updateSliderNavigation(targetPanel.id, 0);
                        
                        // 3. Load the video on the first slide of the new tab
                        loadVideo(targetPanel);
                    }
                });
            });


            /* --- Gallery Slider Logic --- */
            const slideNavButtons = document.querySelectorAll('.slide-nav');
            
            slideNavButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const panelId = button.dataset.panelId;
                    const panel = document.getElementById(panelId);
                    const wrapper = panel.querySelector('.slides-wrapper');
                    const items = panel.querySelectorAll('.gallery-item');
                    const totalSlides = items.length;

                    // 1. STOP ALL VIDEOS IN THE CURRENT PANEL
                    stopActiveVideo(panel);

                    const currentTransform = wrapper.style.transform || 'translateX(0)';
                    const currentOffset = parseInt(currentTransform.match(/-?\d+/)?.[0] || 0);

                    let newOffset = currentOffset;

                    if (button.classList.contains('next-slide')) {
                        if (currentOffset > -100 * (totalSlides - 1)) {
                            newOffset -= 100;
                        }
                    } else if (button.classList.contains('prev-slide')) {
                        if (currentOffset < 0) {
                            newOffset += 100;
                        }
                    }

                    // 2. TRANSFORM TO THE NEW SLIDE
                    wrapper.style.transform = `translateX(${newOffset}%)`;
                    
                    const newSlideIndex = -newOffset / 100;

                    // 3. UPDATE NAVIGATION BUTTONS
                    updateSliderNavigation(panelId, newSlideIndex);

                    // 4. LOAD THE NEW VIDEO (Wait slightly for transition to complete for best performance)
                    setTimeout(() => {
                        loadVideo(panel);
                    }, 400); // Wait 0.4s (matches CSS transition)
                });
            });

            /* --- M1 Special Navigation Logic for "Go to next slide" button --- */
            const m1Panel = document.getElementById('m1');
            if (m1Panel) {
                const nextSlideLabel = m1Panel.querySelector('.next-slide-label');
                if (nextSlideLabel) {
                    nextSlideLabel.addEventListener('click', () => {
                        const nextButton = m1Panel.querySelector('.next-slide');
                        if (nextButton && !nextButton.disabled) {
                            nextButton.click();
                        }
                    });
                }
            }
            
            // Initial setup for the first tab
            updateSliderNavigation('b1', 0);
            loadVideo(document.getElementById('b1')); // Load the very first video on page load
        });
