import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: { url: v.string(), user: v.string() },
  handler: async ({ db }, { url, user }) => {
    await db.insert("uploads", {
      url,
      user,
    });
    return true;
  },
});
export const images = query({
  args: {},
  handler: async ({ db, storage }) => {
    const images = await db.query("uploads").collect();
    return Promise.all(
      images.map(async (image) => {
        const url = await storage.getUrl(image.url);
        return { ...image, url };
      })
    );
  },
});
