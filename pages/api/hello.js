// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{
    name: "College Ruled Notebook (Spiral)",
    desc: "1 subject notebook with 100 double-sided, college ruled sheets",
    price: 5.99,
    image: "https://picsum.photos/200/300",
    id: 1,
    condition: 1 // 1 = new, 5 = used
  }, {
    name: "Pencils (8-pack)",
    desc: "Unsharpened wooden pencil great for school, home, and business use",
    price: 2.50,
    image: "https://picsum.photos/200/300",
    id: 2,
    condition: 0 // 0 meaning N/A
  },{
    name: "Task Table Lamp",
    product_desc: "Modern task lamp with adjustable arm and shade",
    product_price: 18.00,
    product_image: "https://picsum.photos/200/300",
    id: 3,
    condition: 4 // 5 = used
  }
  ])
}
