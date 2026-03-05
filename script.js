document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. Sticky Header Logic --- */
  const header = document.getElementById('header');
  const heroSection = document.getElementById('hero');
  
  // Create an intersection observer to detect when the hero section leaves the viewport fold
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          // If the top of the hero section is out of the viewport
          if (!entry.isIntersecting && window.scrollY > 100) {
              header.classList.add('sticky');
          } else {
              header.classList.remove('sticky');
          }
      });
  }, {
      root: null,
      threshold: 0, 
      rootMargin: "-100px 0px 0px 0px" // Adjust trigger point
  });

  observer.observe(heroSection);


  /* --- 2. Image Carousel with Hover Zoom --- */
  const zoomContainer = document.getElementById('zoom-container');
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.thumbnail');

  // Handle thumbnail clicks to change main image
  thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
          // Update active state
          thumbnails.forEach(t => t.classList.remove('active'));
          this.classList.add('active');

          // Swap image source
          const newSrc = this.querySelector('img').src.replace('w=200', 'w=800'); // Assuming high-res logic
          mainImage.src = newSrc;
      });
  });

  // Handle Zoom functionality on Mouse Move
  zoomContainer.addEventListener('mousemove', (e) => {
      // Get the bounding rectangle of the container
      const rect = zoomContainer.getBoundingClientRect();
      
      // Calculate mouse position relative to the container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Convert coordinates to percentages
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      // Apply transform origin and scale to the image
      mainImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      mainImage.style.transform = 'scale(2.5)'; // Zoom scale magnitude
  });

  // Reset Zoom on Mouse Leave
  zoomContainer.addEventListener('mouseleave', () => {
      mainImage.style.transformOrigin = 'center center';
      mainImage.style.transform = 'scale(1)';
  });

  /* --- 3. Simple FAQ Accordion Logic --- */
  const faqItems = document.querySelectorAll('.faq-question');
  faqItems.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentElement;
          // Toggle active class
          parent.classList.toggle('active');
          
          // Basic toggle logic (In a full styling setup, max-height transition is applied)
          const answer = parent.querySelector('.faq-answer');
          if(parent.classList.contains('active')) {
              answer.style.display = 'block';
              item.querySelector('span').innerText = '^';
          } else {
              answer.style.display = 'none';
              item.querySelector('span').innerText = 'v';
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadBtn");

  if (downloadBtn) {
      downloadBtn.addEventListener("click", (e) => {
          e.preventDefault();
          
          // Simulating a file download interaction
          const originalText = downloadBtn.innerHTML;
          downloadBtn.innerHTML = "Downloading...";
          downloadBtn.style.opacity = "0.7";
          downloadBtn.style.pointerEvents = "none";
          
          // Reset button state after a short delay to simulate completion
          setTimeout(() => {
              downloadBtn.innerHTML = originalText;
              downloadBtn.style.opacity = "1";
              downloadBtn.style.pointerEvents = "auto";
              alert("Technical Datasheet download initiated!");
          }, 1500);
      });
  }
});



// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card");
  const quoteBtn = document.querySelector(".quote-button");

  // Scroll fade-in animation for cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 80);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(35px)";
    card.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(card);
  });

  // Button interaction - "Request a Quote"
  quoteBtn.addEventListener("click", () => {
    const originalText = quoteBtn.innerHTML;
    quoteBtn.style.transition = "all 0.3s ease";
    quoteBtn.innerHTML = "Thank You! 🎉";
    quoteBtn.style.background = "#10b981";
    
    setTimeout(() => {
      quoteBtn.innerHTML = originalText;
      quoteBtn.style.background = "#0284c8";
    }, 2200);
  });
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items first (only one open at a time)
      faqItems.forEach(faq => faq.classList.remove('active'));
      
      // Open the clicked item if it was closed
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Request Catalogue Button with feedback
  const requestBtn = document.getElementById('requestBtn');
  const emailInput = document.getElementById('emailInput');

  requestBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    
    if (!email || !email.includes('@')) {
      emailInput.style.borderColor = '#ef4444';
      setTimeout(() => emailInput.style.borderColor = '#cbd5e1', 1800);
      return;
    }

    const originalText = requestBtn.innerHTML;
    requestBtn.innerHTML = '✓ Sent!';
    requestBtn.style.background = '#16a34a';
    requestBtn.style.pointerEvents = 'none';

    setTimeout(() => {
      requestBtn.innerHTML = originalText;
      requestBtn.style.background = '#1e40af';
      requestBtn.style.pointerEvents = 'auto';
      emailInput.value = '';
      alert('✅ Catalogue request sent! Our expert will email you shortly.');
    }, 2200);
  });
});





// script.js
const stepsData = [
  {
    title: "High-Grade Raw Material Selection",
    description: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    bullets: [
      "PE100 grade material",
      "Optimal molecular weight distribution"
    ],
    image: "1.png.jpg"
  },
  {
    title: "Precision Extrusion",
    description: "High-performance single-screw extruders melt and homogenize PE100 resin, forcing it through a precision die to form uniform pipe with consistent wall thickness.",
    bullets: [
      "Advanced screw design for uniform melt",
      "Multi-zone temperature control"
    ],
    image: "1.png.jpg"
  },
  {
    title: "Controlled Cooling",
    description: "Multi-stage vacuum calibration and spray cooling tanks rapidly cool the pipe while preserving perfect roundness and dimensional stability.",
    bullets: [
      "Vacuum sizing technology",
      "Uniform spray cooling system"
    ],
    image: "img1.png"
  },
  {
    title: "Automatic Sizing",
    description: "Precision calibration sleeves and real-time monitoring ensure exact outer diameter and wall thickness according to international standards.",
    bullets: [
      "Real-time diameter control",
      "Ultrasonic wall thickness measurement"
    ],
    image: "1.png.jpg"
  },
  {
    title: "Rigorous Quality Control",
    description: "Inline and laboratory testing for pressure resistance, impact strength, elongation, and dimensional accuracy at every stage.",
    bullets: [
      "Hydrostatic pressure testing",
      "Melt flow index verification"
    ],
    image: "1.png.jpg"
  },
  {
    title: "Laser Marking",
    description: "Automatic laser or inkjet printing applies permanent batch number, size, pressure rating, manufacturing date, and traceability codes.",
    bullets: [
      "Permanent laser marking",
      "Full traceability information"
    ],
    image: "1.png.jpg"
  },
  {
    title: "Precision Cutting",
    description: "Fully automatic planetary saws cut pipes to exact customer lengths with clean, chamfered ends ready for installation.",
    bullets: [
      "Length tolerance ±10 mm",
      "Chamfered ends for easy jointing"
    ],
    image: "1.png.jpg"
  },
  {
    title: "Secure Packaging",
    description: "Pipes are bundled, strapped, and protected with weather-resistant covers for safe storage and transportation.",
    bullets: [
      "Custom bundling options",
      "Weather-resistant packaging"
    ],
    image: "1.png.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const stepButtons = document.querySelectorAll('.step-btn');
  const titleEl = document.getElementById('step-title');
  const descEl = document.getElementById('step-description');
  const bulletList = document.getElementById('bullet-list');
  const imageEl = document.getElementById('step-image');

  function switchStep(index) {
    // Update active button
    stepButtons.forEach(btn => btn.classList.remove('active'));
    stepButtons[index].classList.add('active');

    const data = stepsData[index];

    // Fade out current content
    document.getElementById('contentArea').style.opacity = '0';

    setTimeout(() => {
      titleEl.textContent = data.title;
      descEl.textContent = data.description;

      // Update bullets
      bulletList.innerHTML = '';
      data.bullets.forEach(text => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${text}`;
        bulletList.appendChild(li);
      });

      // Update image
      imageEl.src = data.image;

      // Fade in
      document.getElementById('contentArea').style.opacity = '1';
    }, 300);
  }

  // Click handlers
  stepButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => switchStep(index));
  });

  // Optional: Auto-scroll steps bar on mobile when active changes
  const stepsBar = document.getElementById('stepsBar');
  stepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const btnRect = btn.getBoundingClientRect();
      const barRect = stepsBar.getBoundingClientRect();
      stepsBar.scrollLeft += btnRect.left - barRect.left - 50;
    });
  });
});



// script.js
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('cardsSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const cardWidth = 340 + 28; // card width + gap

  function scrollLeft() {
    slider.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    });
  }

  function scrollRight() {
    slider.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  }

  prevBtn.addEventListener('click', scrollLeft);
  nextBtn.addEventListener('click', scrollRight);

  // Optional: Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') scrollLeft();
    if (e.key === 'ArrowRight') scrollRight();
  });

  // Disable/enable arrows on scroll end (visual feedback)
  function updateArrows() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    prevBtn.style.opacity = slider.scrollLeft <= 10 ? '0.4' : '1';
    nextBtn.style.opacity = slider.scrollLeft >= maxScroll - 10 ? '0.4' : '1';
  }

  slider.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  setTimeout(updateArrows, 800); // initial check
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const cardWidth = 388; // card width + gap

  function scrollLeft() {
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }

  function scrollRight() {
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', scrollLeft);
  nextBtn.addEventListener('click', scrollRight);

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') scrollLeft();
    if (e.key === 'ArrowRight') scrollRight();
  });

  // Visual feedback for arrows
  function updateArrows() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    prevBtn.style.opacity = slider.scrollLeft < 30 ? '0.45' : '1';
    nextBtn.style.opacity = slider.scrollLeft > maxScroll - 30 ? '0.45' : '1';
  }

  slider.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  setTimeout(updateArrows, 600);
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Download buttons
  const downloadBtns = document.querySelectorAll('.download-btn');
  
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const fileName = btn.getAttribute('data-file');
      
      btn.style.opacity = '0.6';
      btn.innerHTML = `Downloading <i class="fas fa-spinner fa-spin"></i>`;
      
      setTimeout(() => {
        alert(`✅ ${fileName} downloaded successfully!\n\n(Actual file would download here in production)`);
        btn.innerHTML = `Download PDF <i class="fas fa-download"></i>`;
        btn.style.opacity = '1';
      }, 1400);
    });
  });

  // Form submission
  const form = document.getElementById('quoteForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = `Requesting Quote <i class="fas fa-spinner fa-spin"></i>`;
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert('🎉 Thank you! Your custom quote request has been received.\n\nOur team will contact you within 2 business hours.');
      
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1600);
  });
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
  const socialBtns = document.querySelectorAll('.social-btn');

  socialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = btn.getAttribute('aria-label');
      alert(`🔗 Redirecting to ${platform} (demo)\n\nIn a real website this would open the actual social media page.`);
    });
  });

  // Smooth scroll to top when clicking copyright (nice touch)
  const copyright = document.querySelector('.copyright');
  copyright.style.cursor = 'pointer';
  copyright.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});



// script.js
// Basic interactivity; expand as needed (e.g., for modal popups on button clicks)

document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers for Learn More buttons (example: log or open modal)
  const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
  learnMoreBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          // Replace with actual functionality, e.g., scroll to section or open modal
          console.log('Learn More clicked');
          alert('Learn More functionality would go here (e.g., navigate to product page).');
      });
  });

  // Add click handler for Talk to Expert button
  const talkExpertBtn = document.querySelector('.talk-expert-btn');
  talkExpertBtn.addEventListener('click', function() {
      // Replace with actual functionality, e.g., open contact form
      console.log('Talk to Expert clicked');
      alert('Talk to Expert functionality would go here (e.g., open contact modal).');
  });

  // Smooth scroll or other enhancements can be added here
});