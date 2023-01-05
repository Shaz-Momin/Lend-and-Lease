import Main from "../src/components/Main";
import { getDocs } from "firebase/firestore";
import { marketRef } from '../src/firebase.js'


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const docSnap = await getDocs(marketRef)
  var products = []
  docSnap.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id})
  });

  // By returning { props: { products } }, the LeaseTab component
  // will receive `products` as a prop at build time
  return {
    props: {
      products,
    }, revalidate: 10
  }
}

export default function Home({ products }) {
  return (
    <div className="flex items-center justify-center h-screen w-full ">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <Main products={products} />
    </div>
  )
}