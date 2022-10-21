// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{
    name: "Longhorn Leather Jacket",
    desc: "Vintage University of Texas Longhorn Leather Jacket. In a very good condition. Embroidered logo on the front and back",
    pricePerDay: 8,
    images: ["https://images.footballfanatics.com/texas-longhorns/mens-columbia-gray-texas-longhorns-ascender-ii-full-zip-jacket_pi4889000_altimages_ff_4889935-bc277a44770222ef546falt1_full.jpg?_hv=2&w=900",
  "https://images.footballfanatics.com/texas-longhorns/mens-columbia-gray-texas-longhorns-ascender-ii-full-zip-jacket_pi4889000_altimages_ff_4889935-bc277a44770222ef546falt2_full.jpg?_hv=2&w=900",
  "https://images.footballfanatics.com/texas-longhorns/mens-columbia-gray-texas-longhorns-ascender-ii-full-zip-jacket_pi4889000_altimages_ff_4889935-bc277a44770222ef546falt5_full.jpg?_hv=2&w=900",
  "https://images.footballfanatics.com/texas-longhorns/mens-columbia-gray-texas-longhorns-ascender-ii-full-zip-jacket_pi4889000_altimages_ff_4889935-bc277a44770222ef546falt3_full.jpg?_hv=2&w=900"],
    size: "M",
    leaseStart: "2021-11-01",
    leaseEnd: "2021-11-30",
    tags: ["leather", "jacket", "longhorn", "vintage", "university of texas"],
    lengthOfRental: 5,
    id: 139
  }
])
}
