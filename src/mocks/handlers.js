import { rest } from "msw";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const handlers = [
  rest.get("http://localhost:5000/text", async (req, res, ctx) => {
    return res(ctx.text("Hello World!"));
  }),
  rest.get("http://localhost:5000/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherries", imagePath: "/images/cherries.png" },
        { name: "M&Ms", imagePath: "/images/m-and-ms.png" },
        { name: "Hot fudge", imagePath: "/images/hot-fudge.png" },
      ])
    );
  }),
  rest.post("http://localhost:5000/order", async (req, res, ctx) => {
    await sleep(100);
    return res(ctx.json({ orderNumber: 123455676 }));
  }),
];
