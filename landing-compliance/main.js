/* ============================================================
   CORPATHWAY LANDING PAGE — main.js
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     STICKY HEADER
     ---------------------------------------------------------- */
  const header = document.getElementById('site-header');

  function updateHeader() {
    if (window.scrollY > 60) {
      header.classList.remove('transparent');
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  }

  header.classList.add('transparent');
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ----------------------------------------------------------
     MOBILE NAV TOGGLE
     ---------------------------------------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        mobileNav.removeAttribute('hidden');
      } else {
        mobileNav.setAttribute('hidden', '');
      }
    });

    // Close on nav link click
    mobileNav.querySelectorAll('.mobile-nav-link, .btn').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('hidden', '');
      });
    });
  }

  /* ----------------------------------------------------------
     HERO ANIMATE WORDS — stagger fade-in
     ---------------------------------------------------------- */
  // CSS handles this via animation-delay on each .animate-word element
  // We just ensure they're visible after animation completes
  document.querySelectorAll('.animate-word, .animate-fade-in').forEach(function (el) {
    const delay = parseFloat(el.style.getPropertyValue('--delay') || '0');
    setTimeout(function () {
      el.style.opacity = '1';
    }, delay + 700);
  });

  /* ----------------------------------------------------------
     COUNT-UP ANIMATION (Intersection Observer)
     ---------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && statNumbers.length) {
    const countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (el) {
      countObserver.observe(el);
    });
  } else {
    statNumbers.forEach(function (el) {
      el.textContent = el.getAttribute('data-target');
    });
  }

  /* ----------------------------------------------------------
     SCROLL REVEAL (IntersectionObserver)
     Pain cards, timeline steps, testimonials, pricing cards
     ---------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // Stagger siblings within same parent
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.scroll-reveal:not(.revealed)')
          );
          const index = siblings.indexOf(entry.target);
          const delay = index >= 0 ? index * 100 : 0;

          setTimeout(function () {
            entry.target.classList.add('revealed');
          }, delay);

          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all
    document.querySelectorAll('.scroll-reveal').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ----------------------------------------------------------
     PLATFORM TABS
     ---------------------------------------------------------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = 'tab-' + btn.getAttribute('data-tab');

      // Update buttons
      tabBtns.forEach(function (b) {
        b.classList.remove('tab-btn--active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('tab-btn--active');
      btn.setAttribute('aria-selected', 'true');

      // Update panels
      tabPanels.forEach(function (panel) {
        if (panel.id === targetId) {
          panel.classList.add('tab-panel--active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('tab-panel--active');
          panel.setAttribute('hidden', '');
        }
      });
    });
  });

  // Keyboard navigation for tabs
  const tabList = document.querySelector('.tabs');
  if (tabList) {
    tabList.addEventListener('keydown', function (e) {
      const current = document.querySelector('.tab-btn--active');
      const allTabs = Array.from(tabBtns);
      const currentIndex = allTabs.indexOf(current);

      if (e.key === 'ArrowRight') {
        const next = allTabs[(currentIndex + 1) % allTabs.length];
        next.click();
        next.focus();
      } else if (e.key === 'ArrowLeft') {
        const prev = allTabs[(currentIndex - 1 + allTabs.length) % allTabs.length];
        prev.click();
        prev.focus();
      }
    });
  }

  /* ----------------------------------------------------------
     FAQ ACCORDION
     ---------------------------------------------------------- */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const answerId = btn.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        answer.setAttribute('hidden', '');
      } else {
        // Optionally close other open items
        faqQuestions.forEach(function (otherBtn) {
          if (otherBtn !== btn && otherBtn.getAttribute('aria-expanded') === 'true') {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherId = otherBtn.getAttribute('aria-controls');
            document.getElementById(otherId).setAttribute('hidden', '');
          }
        });

        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.removeAttribute('hidden');
      }
    });
  });

  /* ----------------------------------------------------------
     SMOOTH SCROLL — anchor links
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = document.getElementById('site-header').offsetHeight;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });

  /* ----------------------------------------------------------
     GTM EVENT TRACKING — data-event attributes
     ---------------------------------------------------------- */
  document.querySelectorAll('[data-event]').forEach(function (el) {
    el.addEventListener('click', function () {
      const eventName = el.getAttribute('data-event');
      if (window.dataLayer) {
        window.dataLayer.push({
          event: eventName,
          element_text: el.textContent.trim().substring(0, 60)
        });
      }
    });
  });

  /* ----------------------------------------------------------
     FORM SUBMISSION (Netlify Forms / Formspree compatible)
     ---------------------------------------------------------- */
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Basic client-side validation
      const requiredFields = contactForm.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach(function (field) {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = '#EF4444';
          valid = false;
        }
      });

      if (!valid) {
        e.preventDefault();
        const firstInvalid = contactForm.querySelector('[required]:invalid, [style*="EF4444"]');
        if (firstInvalid) {
          firstInvalid.focus();
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // GTM: form submission event
      if (window.dataLayer) {
        const platformVal = contactForm.querySelector('#platforms-needed')
          ? contactForm.querySelector('#platforms-needed').value : '';
        window.dataLayer.push({
          event: 'form_submission',
          form_name: 'compliance_assessment',
          platform_selected: platformVal
        });
      }

      // If action="#", prevent default and show a success message
      if (contactForm.getAttribute('action') === '#') {
        e.preventDefault();
        showFormSuccess();
      }
    });
  }

  function showFormSuccess() {
    const wrapper = document.querySelector('.form-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = [
      '<div class="form-success" role="alert" aria-live="assertive">',
      '  <div class="form-success-icon" aria-hidden="true">',
      '    <svg viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round">',
      '      <circle cx="12" cy="12" r="10"/>',
      '      <polyline points="9 12 11 14 15 10"/>',
      '    </svg>',
      '  </div>',
      '  <h3>We Got Your Request!</h3>',
      '  <p>A CorPathway compliance specialist will reach out within 2 business hours to schedule your free assessment.</p>',
      '  <p class="form-success-sub">Check your email inbox and spam folder for our response.</p>',
      '</div>'
    ].join('\n');

    // Inject success styles if not already present
    if (!document.getElementById('form-success-styles')) {
      const style = document.createElement('style');
      style.id = 'form-success-styles';
      style.textContent = [
        '.form-success {',
        '  background: var(--color-primary);',
        '  border: 1px solid var(--color-success);',
        '  border-radius: var(--radius-lg);',
        '  padding: 64px 40px;',
        '  text-align: center;',
        '  display: flex;',
        '  flex-direction: column;',
        '  align-items: center;',
        '  gap: 16px;',
        '}',
        '.form-success-icon { width: 64px; height: 64px; margin-bottom: 8px; }',
        '.form-success-icon svg { width: 100%; height: 100%; }',
        '.form-success h3 {',
        '  font-family: var(--font-heading-alt);',
        '  font-size: 1.8rem;',
        '  font-weight: 700;',
        '  color: var(--color-text);',
        '}',
        '.form-success p { color: var(--color-text-muted); font-size: 1rem; line-height: 1.7; max-width: 440px; }',
        '.form-success-sub { font-size: 0.85rem !important; }'
      ].join('\n');
      document.head.appendChild(style);
    }

    wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* ----------------------------------------------------------
     TIMELINE SEQUENTIAL REVEAL (scroll observer)
     ---------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const timelineSteps = document.querySelectorAll('.timeline-step');

    const timelineObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const steps = Array.from(timelineSteps);
          const index = steps.indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 150);
          timelineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    timelineSteps.forEach(function (step) {
      step.style.opacity = '0';
      step.style.transform = 'translateX(-20px)';
      step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      timelineObserver.observe(step);
    });
  }

  /* ----------------------------------------------------------
     PLATFORM LOGOS — grayscale → color on hover
     Already handled by CSS .trust-logo-item:hover
     ---------------------------------------------------------- */

  /* ----------------------------------------------------------
     INPUT FOCUS ANIMATION — already handled via CSS focus styles
     ---------------------------------------------------------- */

  /* ----------------------------------------------------------
     STATS BAR — number animation on scroll
     (already set up via countObserver above)
     ---------------------------------------------------------- */

})();
