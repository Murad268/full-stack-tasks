document.querySelector('.article_text').addEventListener('mouseenter', () => {
   document.querySelector('.article_img').classList.add('active')
})
document.querySelector('.article_text').addEventListener('mouseleave', () => {
   document.querySelector('.article_img').classList.remove('active')
})