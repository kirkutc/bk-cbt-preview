document.addEventListener('DOMContentLoaded', () => {
  // Desktop dropdowns
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach((dd) => {
    const btn = dd.querySelector('.nav-dropdown-btn');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains('open');
      dropdowns.forEach((item) => {
        item.classList.remove('open');
        item.querySelector('.nav-dropdown-btn').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        dd.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', () => {
    dropdowns.forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.nav-dropdown-btn').setAttribute('aria-expanded', 'false');
    });
  });

  // Mobile menu
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const open = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', String(open));
    });
    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Accordion in Screen 3
  const accItems = document.querySelectorAll('.accordion-item');
  accItems.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      accItems.forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Application Modal
  const modal = document.getElementById('applyModal');
  const openBtns = document.querySelectorAll('[data-open-modal]');
  const closeBtn = document.getElementById('closeModalBtn');
  const form = document.getElementById('applyForm');
  const successMsg = document.getElementById('formSuccess');

  const openModal = () => {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  openBtns.forEach((btn) => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  if (form && successMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      successMsg.style.display = 'block';
    });
  }
});
