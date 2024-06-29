// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded');

    // Example of dynamic content loading
    const blogPosts = [
        { title: "Latest Adventures", content: "This week, I [describe your recent activity]..." },
        // Add more blog posts
    ];

    const blogSection = document.querySelector('#blog');
    blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');
        
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        postDiv.appendChild(postTitle);
        
        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postDiv.appendChild(postContent);
        
        blogSection.appendChild(postDiv);
    });

    // Add parallax effect to the hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});

