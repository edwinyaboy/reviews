(function() {
  // FAQ Toggle
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0";

      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-answer').style.maxHeight = '0';
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });
    });

    btn.addEventListener('keydown', e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Star Rating Renderer
  const starContainerClass = ".rating";
  const maxStars = 5;
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');

  function renderStars(container, rating) {
    container.innerHTML = '';
    container.setAttribute('role', 'img');
    container.setAttribute('aria-label', `${rating} out of ${maxStars} stars`);
    container.tabIndex = 0;

    for (let i = 1; i <= maxStars; i++) {
      const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      star.setAttribute("viewBox", "0 0 24 24");
      star.setAttribute("width", 22);
      star.setAttribute("height", 22);

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M12 .587l3.668 7.568L24 9.75l-6 5.86 1.416 8.264L12 19.771l-7.416 4.103L6 15.61 0 9.75l8.332-1.595z");

      if (rating >= i) {
        path.setAttribute("fill", primaryColor);
      } else if (rating > i - 1) {
        path.setAttribute("fill", `url(#grad-${i})`);
        const svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        grad.id = `grad-${i}`;
        grad.setAttribute("x1", "0");
        grad.setAttribute("x2", "100%");
        grad.setAttribute("y1", "0");
        grad.setAttribute("y2", "0");

        const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop1.setAttribute("offset", `${(rating - (i - 1)) * 100}%`);
        stop1.setAttribute("stop-color", primaryColor);

        const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop2.setAttribute("offset", `${(rating - (i - 1)) * 100}%`);
        stop2.setAttribute("stop-color", "#555");

        grad.appendChild(stop1);
        grad.appendChild(stop2);
        svgDefs.appendChild(grad);
        star.appendChild(svgDefs);
      } else {
        path.setAttribute("fill", "#555");
      }

      star.appendChild(path);
      container.appendChild(star);
    }
  }

  document.querySelectorAll(starContainerClass).forEach(el => {
    renderStars(el, parseFloat(el.dataset.rating) || 0);
  });
})();
