const points = document.querySelectorAll('.point');
const container1 = document.querySelector('.content-toggle');

points.forEach(point => {
    point.addEventListener('click', () => {
    points.forEach(p => p.classList.remove('active'));
    point.classList.add('active');
    container1.dataset.content = point.id;
    });
});
function active(event) {
    const buttonId = event.target.id;
    const contentElements = document.querySelectorAll('.content');
  
    contentElements.forEach(content => {
      content.style.display = 'none';
    });
  
    const selectedContent = document.getElementById(`content-${buttonId}`);
    selectedContent.style.display = 'block';
  }
  
  const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const position = element.offsetTop;

        // animate the scroll using CSS
        element.classList.add('animate');
        element.style.transform = `translateY(-${window.pageYOffset - position}px)`;

        // scroll to the position after the animation is complete
        setTimeout(() => {
            window.scrollTo({ top: position, behavior: 'smooth' });
            element.classList.remove('animate');
        }, 600);
    });
});