import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
const http = httpRouter();

// Special route for image upload to storage
// Also runs the mutation to add the message to the database
http.route({
  path: "/upload",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const blob = await request.blob();
    const storageId = await ctx.storage.store(blob);
    // Save the storage ID to the database via a mutation
    const user = new URL(request.url).searchParams.get("user");
    await ctx.runMutation(api.upload.create, {
      url: storageId,
      user: user!,
    });

    return new Response(JSON.stringify({ success: true }));
  }),
});

export default http;
