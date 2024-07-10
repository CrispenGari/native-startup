import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const all = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").collect();
  },
});

export const get = query({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    return await db
      .query("todos")
      .filter((q) => q.eq(q.field("_id"), id))
      .first();
  },
});

export const create = mutation({
  args: { title: v.string() },
  handler: async ({ db }, { title }) => {
    await db.insert("todos", {
      isCompleted: false,
      text: title,
    });
    return true;
  },
});

export const remove = mutation({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    await db.delete(id);
    return true;
  },
});

export const update = mutation({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    const todo = await db
      .query("todos")
      .filter((q) => q.eq(q.field("_id"), id))
      .first();
    await db.patch(id, { isCompleted: !!!todo?.isCompleted });
    return true;
  },
});
