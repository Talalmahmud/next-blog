"use server";
import { auth, clerkClient, getAuth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { Roles } from "@/types/global";

export const getClerkUserById = async (id: string) => {
  const findExistUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (findExistUser) {
    const client = await clerkClient();
    const response = await client.users.getUser(findExistUser?.clerk_id);

    return { firstName: response?.firstName, lastName: response?.lastName };
  } else {
    return { firstName: "No", lastName: "Auth" };
  }
};

export const checkRole = async (role: Roles) => {
  const { sessionClaims } = await auth();
  return sessionClaims?.metadata.role === role;
};

export const checkRoleId = async (role: Roles) => {
  const res = await auth();
  console.log(res);
};

// get clerk client
export async function getClerkUser() {
  const client = await clerkClient();
  const response = await client.users.getUserList();
  // console.log(response);
}

// mongodb user

export default async function addUser(id: string) {
  const findExistUser = await prisma.user.findUnique({
    where: {
      clerk_id: id,
    },
  });

  if (findExistUser) {
    return findExistUser;
  }
  const posts = await prisma.user.create({
    data: { clerk_id: id },
  });
  return posts;
}

//// Category Functionalities

export const addCategory = async (name: string) => {
  try {
    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });
    return { category: category, success: true };
  } catch (error) {
    return { error: error, success: false };
  }
};

export const getCategory = async () => {
  try {
    const category = await prisma.category.findMany({});
    return { category: category, success: true };
  } catch (error) {
    return { error: error, success: false };
  }
};

///// Blog functionalities
export const createPost = async (
  authorId: string,
  categoryId: string,
  title: string,
  content: string,
  coverImg: string,
  short_description: string,
  is_featrued: boolean
) => {
  try {
    // Validate or fetch the user
    const user = await addUser(authorId);
    if (!user) {
      throw new Error("User not found or could not be created.");
    }

    // Validate category ID
    if (!categoryId) {
      throw new Error("Category ID is required.");
    }

    // Create the post
    const blog = await prisma.post.create({
      data: {
        authorId: user.id,
        categoryId: categoryId,
        title: title,
        content: content,
        short_description: short_description,
        cover_img: coverImg || "test", // Fallback for optional
        is_featrued: is_featrued || false,
      },
    });

    console.log("Post created successfully:", blog);
    return blog;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error; // Re-throw to handle in calling code
  }
};

export const getBlog = async () => {
  try {
    const blogs = await prisma.post.findMany({
      where: { is_featrued: false },
      include: {
        Category: true, // Include the related category data
      },
    });

    return blogs;
  } catch (error) {
    return error;
  }
};

export const getFeatureBlog = async () => {
  try {
    const blogs = await prisma.post.findMany({
      where: { is_featrued: true },
      include: {
        Category: true, // Include the related category data
      },
    });

    return blogs;
  } catch (error) {
    return error;
  }
};

export const getNotFeatureBlog = async () => {
  try {
    const blogs = await prisma.post.findMany({
      where: { is_featrued: false },
      include: {
        Category: true, // Include the related category data
      },
    });

    return blogs;
  } catch (error) {
    return error;
  }
};

/// comment

export const addComment = async (
  comment: string,
  authId: string,
  postId: string
) => {
  try {
    // Check if the post exists

    // Check if the author exists

    const user = await prisma.user.findUnique({
      where: { clerk_id: authId },
    });

    if (!user) throw new Error("Author not found");
    console.log(user);
    // Create the comment
    const newComment = await prisma.comment.create({
      data: {
        comment: comment,
        authorId: user?.id,
        postId: postId,
      },
    });
    console.log(newComment);

    return newComment;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCommentsForPost = async (postId: string) => {
  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
    });
    return comments;
  } catch (error) {
    console.error(error);
    throw error;
  }
};