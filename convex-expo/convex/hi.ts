import { v } from "convex/values";
import { action } from "./_generated/server";

export const hi = action({
  args: { name: v.string() },
  handler: async (_, { name }) => {
    return `Hello, ${name}!`;
  },
});
