

// Scroll-triggered fade-in
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  fadeElements.forEach((el) => observer.observe(el));

  // Image load error debugging
  const coverImage = document.getElementById('coverImage');
  coverImage.addEventListener('error', () => {
    console.error('Failed to load cover image. Make sure "media/cover.jpg" exists.');
  });
});
