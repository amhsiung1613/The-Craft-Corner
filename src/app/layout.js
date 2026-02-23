// import { ShopContextProvider } from "../context/shop-context";
// import { FavContextProvider } from '../context/fav-context';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "../css/App.css";

// export const metadata = {
//   title: 'The Craft Corner',
//   description: 'Web site created with Next.js.',
// }
 

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//         <body>
//          <ShopContextProvider>
//           <FavContextProvider>
//               <Navbar />
//               {children}
//               <Footer />
//           </FavContextProvider>
//         </ShopContextProvider>
//         </body>
//     </html>
//   )
// }

"use client"; // Because Navbar uses hooks

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShopContextProvider } from "../context/shop-context";
import { FavContextProvider } from "../context/fav-context";
import "../css/App.css"; // your global CSS

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