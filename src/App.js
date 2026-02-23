// import '../src/css/App.css';
// import Navbar from "./components/Navbar";
// // import Carousel from "./components/Carousel/Carousel"
// import Products from "./product-page/display";
// import ProductDetail from "./pages/Product-Detail/Product-Detail";
// // import Search from "./pages/Search";
// import Fav from "./pages/Favorites/Favorites";
// import About from "./pages/About";
// import Home from "./pages/Home/Home";
// // import Logo from "./assets/logo.png"
// import Footer from "./components/Footer";
// import Cart from './pages/Cart/Cart';
// import Checkout from './pages/Checkout/Checkout';
// // import Account from "./pages/Account/Account"
// // import Register from "./pages/Register/Register"
// // import PasswordForget from "./pages/password-forgot/Password-forgot"
// import { useRouter } from "next/router";
// // import Display from "./product-page/display";

// // import Shop from "./pages/cart-function/Products/Shop";
// import { ShopContextProvider } from "./context/shop-context";
// import { FavContextProvider } from './context/fav-context';


// function App() {

//   const Router = useRouter();

//   return ( 
//     <Router>
//       <div className="app">
//         <ShopContextProvider>
//         <FavContextProvider>
          
//             <Navbar />   
//             <main>     
//               <Routes>
//                 <Route path="/" exact element={<Home />}/>
//                 <Route path="/home" exact element={<Home />} />
//                 <Route path="/products" exact element={<Products />}/>
//                 <Route path="/products/:id" element={<ProductDetail />} />  
//                 {/* <Route path="/search" exact element={<Search />}/>   */}
//                 <Route path="/favorites" exact element={<Fav />}/>
//                 <Route path="/cart" exact element={<Cart />}/>
//                 <Route path="/checkout" exact element={<Checkout />}/>
//                 {/* <Route path="/account" exact element={<Account />}/>   */}
//                 <Route path="/about" exact element={<About />}/>  
//                 {/* <Route path='/register' exact element={<Register />}/> */}
//                 {/* <Route path='/password-forget' exact element={<PasswordForget />}/> */}
//               </Routes>
//             </main>
//             <Footer />
//         </FavContextProvider>
//         </ShopContextProvider>
//       </div>
//     </Router>
//   );
// }

// export default App;
