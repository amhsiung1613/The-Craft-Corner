// export const metadata = {
//   title: 'The Craft Corner',
//   description: 'Web site created with Next.js.',
// }
 

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//         <body>
//             <div id="root">{children}</div>
//         </body>
//     </html>
//   )
// }

"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShopContextProvider } from "../context/shop-context";
import { FavContextProvider } from "../context/fav-context";
import "../css/index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopContextProvider>
          <FavContextProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </FavContextProvider>
        </ShopContextProvider>
      </body>
    </html>
  );
}