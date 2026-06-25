const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filters .active")?.classList.remove("active");
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project").forEach((project) => {
      project.classList.toggle("hidden", filter !== "all" && !project.dataset.category.includes(filter));
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-slideshow]").forEach((slideshow) => {
  const slides = [...slideshow.querySelectorAll("[data-slide]")];
  const dots = [...slideshow.querySelectorAll("[data-slide-dot]")];
  const previous = slideshow.querySelector("[data-slide-prev]");
  const next = slideshow.querySelector("[data-slide-next]");
  let current = 0;
  let timer;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === current));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === current));
  };

  const restartTimer = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(current + 1), 5000);
  };

  previous.addEventListener("click", () => {
    showSlide(current - 1);
    restartTimer();
  });

  next.addEventListener("click", () => {
    showSlide(current + 1);
    restartTimer();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      restartTimer();
    });
  });

  restartTimer();
});
