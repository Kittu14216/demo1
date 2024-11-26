import React from "react";
import "./Blogs.css";

const SeedsBlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top Tips for Growing Tomato Seeds",
      author: "Jane Doe",
      date: "November 26, 2024",
      excerpt:
        "Discover the secrets to successfully growing tomato seeds in your garden...",
      content: "Full content of the blog post goes here...",
    },
    {
      id: 2,
      title: "The Benefits of Using Organic Seeds",
      author: "John Smith",
      date: "November 20, 2024",
      excerpt:
        "Learn about the numerous benefits of using organic seeds for your home garden...",
      content: "Full content of the blog post goes here...",
    },
    {
      id: 3,
      title: "A Guide to Starting Your Herb Garden from Seeds",
      author: "Emily Clark",
      date: "November 15, 2024",
      excerpt:
        "Starting an herb garden from seeds can be a rewarding experience. Here’s how to get started...",
      content: "Full content of the blog post goes here...",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="seeds-blog-page">
      <h1>Seeds Blog</h1>
      <div className="seeds-blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="seeds-blog-post">
            <h2>{post.title}</h2>
            <p className="seeds-blog-author">
              By {post.author} | {post.date}
            </p>
            <p className="seeds-blog-excerpt">{post.excerpt}</p>
            <button className="seeds-read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeedsBlogPage;
