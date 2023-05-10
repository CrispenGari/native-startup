import Stripe from "stripe";

export const stripe = new Stripe(process.env.SECRETE_KEY as string, {
  apiVersion: process.env.API_VERSION as any,
});
