import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogToc from '@/components/blog/BlogToc';
import BlogCta from '@/components/blog/BlogCta';
import BlogComments from '@/components/blog/BlogComments';

const BlogPage = () => {
  return (
    <div>
      <BlogHero />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Example Blog Post Title</h1>
        <p className="text-gray-600 mb-6">Published on July 31, 2026 by Koray Akdag</p>
        <div className="prose lg:prose-xl max-w-none">
          <p>This is an example of a blog post content. You can replace this with your actual blog post content.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>Section Title</h2>
          <p>Here's another paragraph of content. This section could be about a specific topic within your blog post.</p>
          <BlogToc />
          <BlogCta />
        </div>
        <BlogComments />
      </div>
    </div>
  );
};

export default BlogPage;
