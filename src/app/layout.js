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
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <ShopContextProvider>
          <FavContextProvider>
            <div className="app-wrapper">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </FavContextProvider>
        </ShopContextProvider>
      </body>
    </html>
  );
}