import React from "react";

export const Shop = () => {
  return (
    <div>
      <div className="shop-wrapper">
        <header className="main-header-area">
          {/* Main Header Area Start */}
          <div className="main-header">
            <div className="container container-default custom-area">
              <div className="row">
                <div className="col-lg-12 col-custom">
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-xl-2 col-sm-6 col-6 col-custom">
                      <div className="header-logo d-flex align-items-center">
                        <a href="index.html">
                          <img
                            className="img-full"
                            src="assets/images/logo/logo.png"
                            alt="Header Logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-xl-7 position-static d-none d-lg-block col-custom">
                      <nav className="main-nav d-flex justify-content-center">
                        <ul className="nav">
                          <li>
                            <a href="index.html">
                              <span className="menu-text"> Home</span>
                              {/* <i className="fa fa-angle-down" /> */}
                            </a>
                          </li>
                          <li>
                            <a className="active" href="shop.html">
                              <span className="menu-text">Shop</span>
                              {/* <i className="fa fa-angle-down" /> */}
                            </a>
                          </li>
                          <li>
                            <a href="blog-details-fullwidth.html">
                              <span className="menu-text"> Blog</span>
                              {/* <i className="fa fa-angle-down" /> */}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="menu-text"> Pages</span>
                              {/* <i className="fa fa-angle-down" /> */}
                            </a>
                          </li>
                          <li>
                            <a href="about-us.html">
                              <span className="menu-text"> About</span>
                            </a>
                          </li>
                          <li>
                            <a href="contact-us.html">
                              <span className="menu-text">Contact</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-lg-2 col-xl-3 col-sm-6 col-6 col-custom">
                      <div className="header-right-area main-nav">
                        <ul className="nav">
                          <li className="login-register-wrap d-none d-xl-flex">
                            <span>
                              <a href="login.html">Login</a>
                            </span>
                            <span>
                              <a href="register.html">Register</a>
                            </span>
                          </li>
                          <li className="sidemenu-wrap d-none d-lg-flex">
                            <a href="#">
                              USD <i className="fa fa-caret-down" />{" "}
                            </a>
                            <ul className="dropdown-sidemenu dropdown-hover-2 dropdown-language">
                              <li>
                                <a href="#">USD - US Dollar</a>
                              </li>
                              <li>
                                <a href="#">EUR - Euro</a>
                              </li>
                              <li>
                                <a href="#">GBP - British Pound</a>
                              </li>
                              <li>
                                <a href="#">INR - Indian Rupee</a>
                              </li>
                              <li>
                                <a href="#">BDT - Bangladesh Taka</a>
                              </li>
                              <li>
                                <a href="#">JPY - Japan Yen</a>
                              </li>
                              <li>
                                <a href="#">CAD - Canada Dollar</a>
                              </li>
                              <li>
                                <a href="#">AUD - Australian Dollar</a>
                              </li>
                            </ul>
                          </li>
                          <li className="minicart-wrap">
                            <a href="#" className="minicart-btn toolbar-btn">
                              <i className="ion-bag" />
                              <span className="cart-item_count">3</span>
                            </a>
                            <div className="cart-item-wrapper dropdown-sidemenu dropdown-hover-2">
                              <div className="single-cart-item">
                                <div className="cart-img">
                                  <a href="cart.html">
                                    <img src="assets/images/cart/1.jpg" />
                                  </a>
                                </div>
                                <div className="cart-text">
                                  <h5 className="title">
                                    <a href="cart.html">
                                      11. Product with video - navy
                                    </a>
                                  </h5>
                                  <div className="cart-text-btn">
                                    <div className="cart-qty">
                                      <span>1×</span>
                                      <span className="cart-price">$98.00</span>
                                    </div>
                                    <button type="button">
                                      <i className="ion-trash-b" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="single-cart-item">
                                <div className="cart-img">
                                  <a href="cart.html">
                                    <img src="assets/images/cart/2.jpg" />
                                  </a>
                                </div>
                                <div className="cart-text">
                                  <h5 className="title">
                                    <a
                                      href="cart.html"
                                      title="10. This is the large title for testing large title and there is an image for testing - white"
                                    >
                                      10. This is the large title for testing...
                                    </a>
                                  </h5>
                                  <div className="cart-text-btn">
                                    <div className="cart-qty">
                                      <span>1×</span>
                                      <span className="cart-price">$98.00</span>
                                    </div>
                                    <button type="button">
                                      <i className="ion-trash-b" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="single-cart-item">
                                <div className="cart-img">
                                  <a href="cart.html">
                                    <img src="assets/images/cart/3.jpg" />
                                  </a>
                                </div>
                                <div className="cart-text">
                                  <h5 className="title">
                                    <a href="cart.html">
                                      1. New and sale badge product - s / red
                                    </a>
                                  </h5>
                                  <div className="cart-text-btn">
                                    <div className="cart-qty">
                                      <span>1×</span>
                                      <span className="cart-price">$98.00</span>
                                    </div>
                                    <button type="button">
                                      <i className="ion-trash-b" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="cart-price-total d-flex justify-content-between">
                                <h5>Total :</h5>
                                <h5>$166.00</h5>
                              </div>
                              <div className="cart-links d-flex justify-content-center">
                                <a
                                  className="obrien-button white-btn"
                                  href="cart.html"
                                >
                                  View cart
                                </a>
                                <a
                                  className="obrien-button white-btn"
                                  href="checkout.html"
                                >
                                  Checkout
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="mobile-menu-btn d-lg-none">
                            <a className="off-canvas-btn" href="#">
                              <i className="fa fa-bars" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Header Area End */}
          {/* Sticky Header Start Here*/}
          <div className="main-header header-sticky">
            <div className="container container-default custom-area">
              <div className="row">
                <div className="col-lg-12 col-custom">
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-xl-2 col-sm-6 col-6 col-custom">
                      <div className="header-logo">
                        <a href="index.html">
                          <img
                            className="img-full"
                            src="assets/images/logo/logo.png"
                            alt="Header Logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-xl-7 position-static d-none d-lg-block col-custom">
                      <nav className="main-nav d-flex justify-content-center">
                        <ul className="nav">
                          <li>
                            <a href="index.html">
                              <span className="menu-text"> Home</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu dropdown-hover">
                              <li>
                                <a href="index.html">Home Page - 1</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Page - 2</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Page - 3</a>
                              </li>
                              <li>
                                <a href="index-4.html">Home Page - 4</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="active" href="shop.html">
                              <span className="menu-text">Shop</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <div className="mega-menu dropdown-hover">
                              <div className="menu-colum">
                                <ul>
                                  <li>
                                    <span className="mega-menu-text">Shop</span>
                                  </li>
                                  <li>
                                    <a href="shop.html">Shop Left Sidebar</a>
                                  </li>
                                  <li>
                                    <a href="shop-right-sidebar.html">
                                      Shop Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list-left.html">
                                      Shop List Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="active"
                                      href="shop-list-right.html"
                                    >
                                      Shop List Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth.html">
                                      Shop Full Width
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="menu-colum">
                                <ul>
                                  <li>
                                    <span className="mega-menu-text">
                                      Product
                                    </span>
                                  </li>
                                  <li>
                                    <a href="product-details.html">
                                      Single Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="variable-product-details.html">
                                      Variable Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="external-product-details.html">
                                      External Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="gallery-product-details.html">
                                      Gallery Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="countdown-product-details.html">
                                      Countdown Product
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="menu-colum">
                                <ul>
                                  <li>
                                    <span className="mega-menu-text">
                                      Others
                                    </span>
                                  </li>
                                  <li>
                                    <a href="error-404.html">Error 404</a>
                                  </li>
                                  <li>
                                    <a href="compare.html">Compare Page</a>
                                  </li>
                                  <li>
                                    <a href="cart.html">Cart Page</a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">Checkout Page</a>
                                  </li>
                                  <li>
                                    <a href="wishlist.html">Wishlist Page</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a href="blog-details-fullwidth.html">
                              <span className="menu-text"> Blog</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu dropdown-hover">
                              <li>
                                <a href="blog.html">Blog Left Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-list-right-sidebar.html">
                                  Blog List Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-list-fullwidth.html">
                                  Blog List Fullwidth
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid.html">Blog Grid Page</a>
                              </li>
                              <li>
                                <a href="blog-grid-right-sidebar.html">
                                  Blog Grid Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-fullwidth.html">
                                  Blog Grid Fullwidth
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-sidebar.html">
                                  Blog Details Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-fullwidth.html">
                                  Blog Details Fullwidth
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <span className="menu-text"> Pages</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-submenu dropdown-hover">
                              <li>
                                <a href="frequently-questions.html">FAQ</a>
                              </li>
                              <li>
                                <a href="my-account.html">My Account</a>
                              </li>
                              <li>
                                <a href="login.html">Login</a>
                              </li>
                              <li>
                                <a href="register.html">Register</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about-us.html">
                              <span className="menu-text"> About</span>
                            </a>
                          </li>
                          <li>
                            <a href="contact-us.html">
                              <span className="menu-text">Contact</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-lg-2 col-xl-3 col-sm-6 col-6 col-custom">
                      <div className="header-right-area main-nav">
                        <ul className="nav">
                          <li className="login-register-wrap d-none d-xl-flex">
                            <span>
                              <a href="login.html">Login</a>
                            </span>
                            <span>
                              <a href="register.html">Register</a>
                            </span>
                          </li>
                          <li className="sidemenu-wrap d-none d-lg-flex">
                            <a href="#">
                              USD <i className="fa fa-caret-down" />{" "}
                            </a>
                            <ul className="dropdown-sidemenu dropdown-hover-2 dropdown-language">
                              <li>
                                <a href="#">USD - US Dollar</a>
                              </li>
                              <li>
                                <a href="#">EUR - Euro</a>
                              </li>
                              <li>
                                <a href="#">GBP - British Pound</a>
                              </li>
                              <li>
                                <a href="#">INR - Indian Rupee</a>
                              </li>
                              <li>
                                <a href="#">BDT - Bangladesh Taka</a>
                              </li>
                              <li>
                                <a href="#">JPY - Japan Yen</a>
                              </li>
                              <li>
                                <a href="#">CAD - Canada Dollar</a>
                              </li>
                              <li>
                                <a href="#">AUD - Australian Dollar</a>
                              </li>
                            </ul>
                          </li>
                          <li className="minicart-wrap">
                            <a href="#" className="minicart-btn toolbar-btn">
                              <i className="ion-bag" />
                              <span className="cart-item_count">3</span>
                            </a>
                            <div className="cart-item-wrapper dropdown-sidemenu dropdown-hover-2">
                              <div className="single-cart-item">
                                <div className="cart-img">
                                  <a href="cart.html">
                                    <img src="assets/images/cart/1.jpg" />
                                  </a>
                                </div>
                                <div className="cart-text">
                                  <h5 className="title">
                                    <a href="cart.html">
                                      11. Product with video - navy
                                    </a>
                                  </h5>
                                  <div className="cart-text-btn">
                                    <div className="cart-qty">
                                      <span>1×</span>
                                      <span className="cart-price">$98.00</span>
                                    </div>
                                    <button type="button">
                                      <i className="ion-trash-b" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="single-cart-item">
                                <div className="cart-img">
                                  <a href="cart.html">
                                    <img src="assets/images/cart/2.jpg" />
                                  </a>
                                </div>
                                <div className="cart-text">
                                  <h5 className="title">
                                    <a
                                      href="cart.html"
                                      title="10. This is the large title for testing large title and there is an image for testing - white"
                                    >
                                      10. This is the large title for testing...
                                    </a>
                                  </h5>
                                  <div className="cart-text-btn">
                                    <div className="cart-qty">
                                      <span>1×</span>
                                      <span className="cart-price">$98.00</span>
                                    </div>
                                    <button type="button">
                                      <i className="ion-trash-b" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="single-cart-item">
                                <div className="cart-img">
                                  <a href="cart.html">
                                    <img src="assets/images/cart/3.jpg" />
                                  </a>
                                </div>
                                <div className="cart-text">
                                  <h5 className="title">
                                    <a href="cart.html">
                                      1. New and sale badge product - s / red
                                    </a>
                                  </h5>
                                  <div className="cart-text-btn">
                                    <div className="cart-qty">
                                      <span>1×</span>
                                      <span className="cart-price">$98.00</span>
                                    </div>
                                    <button type="button">
                                      <i className="ion-trash-b" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="cart-price-total d-flex justify-content-between">
                                <h5>Total :</h5>
                                <h5>$166.00</h5>
                              </div>
                              <div className="cart-links d-flex justify-content-center">
                                <a
                                  className="obrien-button white-btn"
                                  href="cart.html"
                                >
                                  View cart
                                </a>
                                <a
                                  className="obrien-button white-btn"
                                  href="checkout.html"
                                >
                                  Checkout
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="mobile-menu-btn d-lg-none">
                            <a className="off-canvas-btn" href="#mobileMenu">
                              <i className="fa fa-bars" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sticky Header End Here */}
          {/* off-canvas menu start */}
          <aside className="off-canvas-wrapper" id="mobileMenu">
            <div className="off-canvas-overlay" />
            <div className="off-canvas-inner-content">
              <div className="btn-close-off-canvas">
                <i className="fa fa-times" />
              </div>
              <div className="off-canvas-inner">
                <div className="search-box-offcanvas">
                  <form>
                    <input type="text" placeholder="Search product..." />
                    <button className="search-btn">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                {/* mobile menu start */}
                <div className="mobile-navigation">
                  {/* mobile menu navigation start */}
                  <nav>
                    <ul className="mobile-menu">
                      <li className="menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="dropdown">
                          <li>
                            <a href="index.html">Home Page 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Page 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Page 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home Page 4</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Shop</a>
                        <ul className="megamenu dropdown">
                          <li className="mega-title has-children">
                            <a href="#">Shop Layouts</a>
                            <ul className="dropdown">
                              <li>
                                <a href="shop.html">Shop Left Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Shop Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-list-left.html">
                                  Shop List Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-list-right.html">
                                  Shop List Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth.html">
                                  Shop Full Width
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-title has-children">
                            <a href="#">Product Details</a>
                            <ul className="dropdown">
                              <li>
                                <a href="product-details.html">
                                  Single Product Details
                                </a>
                              </li>
                              <li>
                                <a href="variable-product-details.html">
                                  Variable Product Details
                                </a>
                              </li>
                              <li>
                                <a href="external-product-details.html">
                                  External Product Details
                                </a>
                              </li>
                              <li>
                                <a href="gallery-product-details.html">
                                  Gallery Product Details
                                </a>
                              </li>
                              <li>
                                <a href="countdown-product-details.html">
                                  Countdown Product Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-title has-children">
                            <a href="#">Others</a>
                            <ul className="dropdown">
                              <li>
                                <a href="error404.html">Error 404</a>
                              </li>
                              <li>
                                <a href="compare.html">Compare Page</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout Page</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wish List Page</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children ">
                        <a href="#">Blog</a>
                        <ul className="dropdown">
                          <li>
                            <a href="blog.html">Blog Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-list-right-sidebar.html">
                              Blog List Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-list-fullwidth.html">
                              Blog List Fullwidth
                            </a>
                          </li>
                          <li>
                            <a href="blog-grid.html">Blog Grid Page</a>
                          </li>
                          <li>
                            <a href="blog-grid-right-sidebar.html">
                              Blog Grid Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-grid-fullwidth.html">
                              Blog Grid Fullwidth
                            </a>
                          </li>
                          <li>
                            <a href="blog-details-sidebar.html">
                              Blog Details Sidebar Page
                            </a>
                          </li>
                          <li>
                            <a href="blog-details-fullwidth.html">
                              Blog Details Fullwidth Page
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children ">
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="frequently-questions.html">FAQ</a>
                          </li>
                          <li>
                            <a href="my-account.html">My Account</a>
                          </li>
                          <li>
                            <a href="login-register.html">
                              login &amp; register
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  {/* mobile menu navigation end */}
                </div>
                {/* mobile menu end */}
                <div className="header-top-settings offcanvas-curreny-lang-support">
                  {/* mobile menu navigation start */}
                  <nav>
                    <ul className="mobile-menu">
                      <li className="menu-item-has-children">
                        <a href="#">My Account</a>
                        <ul className="dropdown">
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="Register-2.html">Register</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Currency:USD</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">USD - US Dollar</a>
                          </li>
                          <li>
                            <a href="#">EUR - Euro</a>
                          </li>
                          <li>
                            <a href="#">GBP - British Pound</a>
                          </li>
                          <li>
                            <a href="#">INR - Indian Rupee</a>
                          </li>
                          <li>
                            <a href="#">BDT - Bangladesh Taka</a>
                          </li>
                          <li>
                            <a href="#">JPY - Japan Yen</a>
                          </li>
                          <li>
                            <a href="#">CAD - Canada Dollar</a>
                          </li>
                          <li>
                            <a href="#">AUD - Australian Dollar</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  {/* mobile menu navigation end */}
                </div>
                {/* offcanvas widget area start */}
                <div className="offcanvas-widget-area">
                  <div className="top-info-wrap text-left text-black">
                    <ul>
                      <li>
                        <i className="fa fa-phone" />
                        <a href="info%40yourdomain.html">(1245) 2456 012</a>
                      </li>
                      <li>
                        <i className="fa fa-envelope" />
                        <a href="info%40yourdomain.html">info@yourdomain.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="off-canvas-widget-social">
                    <a title="Facebook-f" href="#">
                      <i className="fa fa-facebook-f" />
                    </a>
                    <a title="Twitter" href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a title="Linkedin" href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a title="Youtube" href="#">
                      <i className="fa fa-youtube" />
                    </a>
                    <a title="Vimeo" href="#">
                      <i className="fa fa-vimeo" />
                    </a>
                  </div>
                </div>
                {/* offcanvas widget area end */}
              </div>
            </div>
          </aside>
          {/* off-canvas menu end */}
        </header>
        {/* Breadcrumb Area Start Here */}
        <div className="breadcrumbs-area position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="breadcrumb-content position-relative section-content">
                  <h3 className="title-3">Shop Sidebar</h3>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Shop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb Area End Here */}
        {/* Shop Main Area Start Here */}
        <div className="shop-main-area">
          <div className="container container-default custom-area">
            <div className="row">
              <div className="col-lg-9 col-12 col-custom widget-mt">
                {/*shop toolbar start*/}
                <div className="shop_toolbar_wrapper">
                  <div className="shop_toolbar_btn">
                    <button
                      data-role="grid_list"
                      type="button"
                      className="active btn-list"
                      data-bs-toggle="tooltip"
                      title="List"
                    >
                      <i className="fa fa-th-list" />
                    </button>
                    <button
                      data-role="grid_3"
                      type="button"
                      className="btn-grid-3"
                      data-bs-toggle="tooltip"
                    >
                      <i className="fa fa-th" />
                    </button>
                  </div>
                  <div className="shop-select">
                    <form className="d-flex flex-column w-100" action="#">
                      <div className="form-group">
                        <select className="form-control nice-select w-100">
                          <option selected value={1}>
                            Alphabetically, A-Z
                          </option>
                          <option value={2}>Sort by popularity</option>
                          <option value={3}>Sort by newness</option>
                          <option value={4}>Sort by price: low to high</option>
                          <option value={5}>Sort by price: high to low</option>
                          <option value={6}>Product Name: Z</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                {/*shop toolbar end*/}
                {/* Shop Wrapper Start */}
                <div className="row shop_wrapper grid_list">
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/1.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/2.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Product dummy name
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Product dummy name
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/3.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/4.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Unique content for
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$70.00</span>
                          <span className="old-price">
                            <del>$80.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Unique content for
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$70.00</span>
                          <span className="old-price">
                            <del>$80.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/5.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/6.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">New badge product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$60.00</span>
                          <span className="old-price">
                            <del>$70.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">New badge product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$60.00</span>
                          <span className="old-price">
                            <del>$70.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/7.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/8.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              New and sale badge
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$50.00</span>
                          <span className="old-price">
                            <del>$60.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              New and sale badge
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$50.00</span>
                          <span className="old-price">
                            <del>$60.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/9.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/10.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">This is the large</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$30.00</span>
                          <span className="old-price">
                            <del>$50.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">This is the large</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$30.00</span>
                          <span className="old-price">
                            <del>$50.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/5.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/7.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Soldout product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$50.00</span>
                          <span className="old-price">
                            <del>$55.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Soldout product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$50.00</span>
                          <span className="old-price">
                            <del>$55.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/8.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/4.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Simple product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$40.00</span>
                          <span className="old-price">
                            <del>$44.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Simple product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$40.00</span>
                          <span className="old-price">
                            <del>$44.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/2.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/4.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Sample product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$60.00</span>
                          <span className="old-price">
                            <del>$77.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Sample product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$60.00</span>
                          <span className="old-price">
                            <del>$77.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/5.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/7.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Countdown product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$44.99</span>
                          <span className="old-price">
                            <del>$55.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Countdown product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$44.99</span>
                          <span className="old-price">
                            <del>$55.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/6.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/8.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Without shortcode</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$70.00</span>
                          <span className="old-price">
                            <del>$88.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Without shortcode</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$70.00</span>
                          <span className="old-price">
                            <del>$88.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/9.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/2.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Variable Product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$10.00</span>
                          <span className="old-price">
                            <del>$20.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Variable Product</a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$10.00</span>
                          <span className="old-price">
                            <del>$20.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-custom product-area">
                    <div className="single-product position-relative">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/5.jpg"
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/1.jpg"
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Product dummy title
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$40.00</span>
                          <span className="old-price">
                            <del>$45.00</del>
                          </span>
                        </div>
                      </div>
                      <div className="add-action d-flex position-absolute">
                        <a href="cart.html" title="Add To cart">
                          <i className="ion-bag" />
                        </a>
                        <a href="compare.html" title="Compare">
                          <i className="ion-ios-loop-strong" />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i className="ion-ios-heart-outline" />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          data-bs-toggle="modal"
                          title="Quick View"
                        >
                          <i className="ion-eye" />
                        </a>
                      </div>
                      <div className="product-content-listview">
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Product dummy title
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$40.00</span>
                          <span className="old-price">
                            <del>$44.00</del>
                          </span>
                        </div>
                        <div className="add-action-listview d-flex">
                          <a href="cart.html" title="Add To cart">
                            <i className="ion-bag" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ion-ios-loop-strong" />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i className="ion-ios-heart-outline" />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ion-eye" />
                          </a>
                        </div>
                        <p className="desc-content">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shop Wrapper End */}
                {/* Bottom Toolbar Start */}
                <div className="row">
                  <div className="col-sm-12 col-custom">
                    <div className="toolbar-bottom mt-30">
                      <nav className="pagination pagination-wrap mb-10 mb-sm-0">
                        <ul className="pagination">
                          <li className="disabled prev">
                            <i className="ion-ios-arrow-thin-left" />
                          </li>
                          <li className="active">
                            <a>1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li className="next">
                            <a href="#" title="Next >>">
                              <i className="ion-ios-arrow-thin-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <p className="desc-content text-center text-sm-right">
                        Showing 1 - 12 of 34 result
                      </p>
                    </div>
                  </div>
                </div>
                {/* Bottom Toolbar End */}
              </div>
              <div className="col-lg-3 col-12 col-custom">
                {/* Sidebar Widget Start */}
                <aside className="sidebar_widget widget-mt">
                  <div className="widget_inner">
                    <div className="widget-list widget-mb-1">
                      <h3 className="widget-title">Search</h3>
                      <div className="search-box">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Our Store"
                            aria-label="Search Our Store"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                            >
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-list widget-mb-1">
                      <h3 className="widget-title">Menu Categories</h3>
                      {/* Widget Menu Start */}
                      <nav>
                        <ul className="mobile-menu p-0 m-0">
                          <li className="menu-item-has-children">
                            <a href="#">Breads</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">Skateboard (02)</a>
                              </li>
                              <li>
                                <a href="#">Surfboard (4)</a>
                              </li>
                              <li>
                                <a href="#">Accessories (3)</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Fruits</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">Samsome</a>
                              </li>
                              <li>
                                <a href="#">GL Stylus (4)</a>
                              </li>
                              <li>
                                <a href="#">Uawei (3)</a>
                              </li>
                              <li>
                                <a href="#">Avocado (3)</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Vagetables</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">Power Bank</a>
                              </li>
                              <li>
                                <a href="#">Data Cable (4)</a>
                              </li>
                              <li>
                                <a href="#">Avocado (3)</a>
                              </li>
                              <li>
                                <a href="#">Brocoly (3)</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Organic Food</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">Vagetables</a>
                              </li>
                              <li>
                                <a href="#">Green Food (4)</a>
                              </li>
                              <li>
                                <a href="#">Coconut (3)</a>
                              </li>
                              <li>
                                <a href="#">Cabage (3)</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                      {/* Widget Menu End */}
                    </div>
                    <div className="widget-list widget-mb-1">
                      <h3 className="widget-title">Categories</h3>
                      <div className="sidebar-body">
                        <ul className="sidebar-list">
                          <li>
                            <a href="#">All Product</a>
                          </li>
                          <li>
                            <a href="#">Best Seller (5)</a>
                          </li>
                          <li>
                            <a href="#">Featured (4)</a>
                          </li>
                          <li>
                            <a href="#">New Products (6)</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget-list widget-mb-2">
                      <h3 className="widget-title">Color</h3>
                      <div className="sidebar-body">
                        <div className="sidebar-list">
                          <button type="button" className="btn red" />
                          <button type="button" className="btn green" />
                          <button type="button" className="btn blue" />
                          <button type="button" className="btn yellow" />
                          <button type="button" className="btn white" />
                          <button type="button" className="btn gold" />
                          <button type="button" className="btn gray" />
                          <button type="button" className="btn magenta" />
                          <button type="button" className="btn maroon" />
                          <button type="button" className="btn navy" />
                        </div>
                      </div>
                    </div>
                    <div className="widget-list widget-mb-3">
                      <h3 className="widget-title">Tags</h3>
                      <div className="sidebar-body">
                        <ul className="tags">
                          <li>
                            <a href="#">Car</a>
                          </li>
                          <li>
                            <a href="#">Parts</a>
                          </li>
                          <li>
                            <a href="#">Shop</a>
                          </li>
                          <li>
                            <a href="#">Tayer</a>
                          </li>
                          <li>
                            <a href="#">Seat</a>
                          </li>
                          <li>
                            <a href="#">Engine</a>
                          </li>
                          <li>
                            <a href="#">Parts</a>
                          </li>
                          <li>
                            <a href="#">Fuel</a>
                          </li>
                          <li>
                            <a href="#">Modern</a>
                          </li>
                          <li>
                            <a href="#">Brake</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget-list widget-mb-4">
                      <h3 className="widget-title">Recent Products</h3>
                      <div className="sidebar-body">
                        <div className="sidebar-product align-items-center">
                          <a href="product-details.html" className="image">
                            <img
                              src="assets/images/product/small-product/1.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="product-content">
                            <div className="product-title">
                              <h4 className="title-2">
                                {" "}
                                <a href="product-details.html">
                                  Product dummy name
                                </a>
                              </h4>
                            </div>
                            <div className="price-box">
                              <span className="regular-price ">$80.00</span>
                              <span className="old-price">
                                <del>$90.00</del>
                              </span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-product align-items-center">
                          <a href="product-details.html" className="image">
                            <img
                              src="assets/images/product/small-product/2.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="product-content">
                            <div className="product-title">
                              <h4 className="title-2">
                                {" "}
                                <a href="product-details.html">
                                  Product dummy title
                                </a>
                              </h4>
                            </div>
                            <div className="price-box">
                              <span className="regular-price ">$50.00</span>
                              <span className="old-price">
                                <del>$60.00</del>
                              </span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                              <i className="fa fa-star-o" />
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-product align-items-center">
                          <a href="product-details.html" className="image">
                            <img
                              src="assets/images/product/small-product/3.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="product-content">
                            <div className="product-title">
                              <h4 className="title-2">
                                {" "}
                                <a href="product-details.html">
                                  Product title here
                                </a>
                              </h4>
                            </div>
                            <div className="price-box">
                              <span className="regular-price ">$40.00</span>
                              <span className="old-price">
                                <del>$50.00</del>
                              </span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                              <i className="fa fa-star-half-o" />
                              <i className="fa fa-star-o" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                {/* Sidebar Widget End */}
              </div>
            </div>
          </div>
        </div>
        {/* Shop Main Area End Here */}
        {/* Support Area Start Here */}
        <div className="support-area">
          <div className="container container-default custom-area">
            <div className="row">
              <div className="col-lg-12 col-custom">
                <div className="support-wrapper d-flex">
                  <div className="support-content">
                    <h1 className="title">Need Help ?</h1>
                    <p className="desc-content">
                      Call our support 24/7 at 01234-567-890
                    </p>
                  </div>
                  <div className="support-button d-flex align-items-center">
                    <a
                      className="obrien-button primary-btn"
                      href="contact-us.html"
                    >
                      Contact now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Support Area End Here */}
        {/* Footer Area Start Here */}
        <footer className="footer-area">
          <div className="footer-widget-area">
            <div className="container container-default custom-area">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-custom">
                  <div className="single-footer-widget m-0">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img
                          src="assets/images/logo/footer.png"
                          alt="Logo Image"
                        />
                      </a>
                    </div>
                    <p className="desc-content">
                      Obrien is the best parts shop of your daily nutritions.
                      What kind of nutrition do you need you can get here soluta
                      nobis
                    </p>
                    <div className="social-links">
                      <ul className="d-flex">
                        <li>
                          <a
                            className="border rounded-circle"
                            href="#"
                            title="Facebook"
                          >
                            <i className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="border rounded-circle"
                            href="#"
                            title="Twitter"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="border rounded-circle"
                            href="#"
                            title="Linkedin"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="border rounded-circle"
                            href="#"
                            title="Youtube"
                          >
                            <i className="fa fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="border rounded-circle"
                            href="#"
                            title="Vimeo"
                          >
                            <i className="fa fa-vimeo" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
                  <div className="single-footer-widget">
                    <h2 className="widget-title">Information</h2>
                    <ul className="widget-list">
                      <li>
                        <a href="about-us.html">Our Company</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="about-us.html">Our Services</a>
                      </li>
                      <li>
                        <a href="about-us.html">Why We?</a>
                      </li>
                      <li>
                        <a href="about-us.html">Careers</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
                  <div className="single-footer-widget">
                    <h2 className="widget-title">Quicklink</h2>
                    <ul className="widget-list">
                      <li>
                        <a href="about-us.html">About</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
                  <div className="single-footer-widget">
                    <h2 className="widget-title">Support</h2>
                    <ul className="widget-list">
                      <li>
                        <a href="contact-us.html">Online Support</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Shipping Policy</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Return Policy</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Terms of Service</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-custom">
                  <div className="single-footer-widget">
                    <h2 className="widget-title">See Information</h2>
                    <div className="widget-body">
                      <address>
                        123, H2, Road #21, Main City, Your address goes here.
                        <br />
                        Phone: 01254 698 785, 36598 254 987
                        <br />
                        Email: https://example.com
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-area">
            <div className="container custom-area">
              <div className="row">
                <div className="col-12 text-center col-custom">
                  <div className="copyright-content">
                    <p>
                      Copyright © 2020{" "}
                      <a
                        href="https://hasthemes.com/"
                        title="https://hasthemes.com/"
                      >
                        HasThemes
                      </a>{" "}
                      | Built with&nbsp;<strong>Obrien</strong>&nbsp;by{" "}
                      <a
                        href="https://hasthemes.com/"
                        title="https://hasthemes.com/"
                      >
                        HasThemes
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Area End Here */}
      </div>
    </div>
  );
};
