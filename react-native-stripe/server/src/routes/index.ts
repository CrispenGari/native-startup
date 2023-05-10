import { Request, Response, Router } from "express";
import { stripe } from "../stripe";

const router: Router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    name: "backend",
    language: "typescript",
    message: "hello world!",
    programmer: "@programer",
    moto: "i'm a programer i have no life!",
    framework: "koa.js",
  });
});

router.post("/create-payment-intent", async (_req: Request, res: Response) => {
  try {
    const intent = await stripe.paymentIntents.create({
      payment_method_types: ["card"],
      amount: 1099, // $10.99
      currency: "usd",
    });
    const secrete = intent.client_secret;
    return res.status(200).json({ secrete });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
    });
  }
});

export default router;
