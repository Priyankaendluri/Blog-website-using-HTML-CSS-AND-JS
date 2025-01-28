// JavaScript to handle "Read More" functionality
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', function () {
    const postContent = this.previousElementSibling;
    
    // Toggle the visibility of the content
    if (postContent.style.maxHeight) {
      postContent.style.maxHeight = null;
      this.textContent = 'Read More';
    } else {
      postContent.style.maxHeight = postContent.scrollHeight + 'px';
      this.textContent = 'Read Less';
    }
  });
});

