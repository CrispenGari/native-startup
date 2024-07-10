import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),

  users: defineTable({
    username: v.string(),
    email: v.string(),
  }),

  profiles: defineTable({
    avatar: v.string(),
    bio: v.string(),
    userId: v.id("users"),
  }).index("userId", ["userId"]),

  posts: defineTable({
    image: v.optional(v.string()),
    caption: v.string(),
    userId: v.id("users"),
  }).index("userId", ["userId"]),

  uploads: defineTable({
    url: v.string(),
    user: v.string(),
  }),
});
