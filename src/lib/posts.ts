import prisma from "@/lib/prisma";

/**
 * Fetch all blog posts from the database.
 * @returns {Promise<Array>} List of blog posts sorted by published date.
 */
export async function getBlogPosts() {
    return await prisma.blogPost.findMany({
        orderBy: { publishedAt: "desc" },
    });
}

/**
 * Fetch a single blog post by its slug.
 * @param {string} slug - The slug of the blog post.
 * @returns {Promise<Object | null>} The blog post object or null if not found.
 */
export async function getBlogPost(slug: string) {
    return await prisma.blogPost.findUnique({
        where: { slug },
    });
}

/**
 * Create a new blog post in the database.
 * @param {string} title - The title of the blog post.
 * @param {string} slug - The slug (URL-friendly identifier).
 * @param {string} content - The markdown/MDX content of the post.
 * @returns {Promise<Object>} The created blog post object.
 */
export async function createBlogPost(title: string, slug: string, content: string) {
    return await prisma.blogPost.create({
        data: {
            title,
            slug,
            content,
        },
    });
}

/**
 * Update an existing blog post by slug.
 * @param {string} slug - The slug of the blog post to update.
 * @param {Object} data - The data to update (title, content, etc.).
 * @returns {Promise<Object | null>} The updated blog post or null if not found.
 */
export async function updateBlogPost(slug: string, data: { title?: string; content?: string }) {
    return await prisma.blogPost.update({
        where: { slug },
        data,
    });
}

/**
 * Delete a blog post by slug.
 * @param {string} slug - The slug of the blog post to delete.
 * @returns {Promise<Object | null>} The deleted blog post or null if not found.
 */
export async function deleteBlogPost(slug: string) {
    return await prisma.blogPost.delete({
        where: { slug },
    });
}
