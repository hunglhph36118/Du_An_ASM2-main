import React from 'react'



const Detail_Product = () => {
    return (
     <div>
  <div>
    <div className ="shop-wrapper">
    </div>
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
                      <img className="img-full" src="assets/images/logo/logo.png" alt="Header Logo" />
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
                          <li><a href="index.html">Home Page - 1</a></li>
                          <li><a href="index-2.html">Home Page - 2</a></li>
                          <li><a href="index-3.html">Home Page - 3</a></li>
                          <li><a href="index-4.html">Home Page - 4</a></li>
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
                              <li><span className="mega-menu-text">Shop</span></li>
                              <li><a href="shop.html">Shop Left Sidebar</a></li>
                              <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                              <li><a href="shop-list-left.html">Shop List Left Sidebar</a></li>
                              <li><a href="shop-list-right.html">Shop List Right Sidebar</a></li>
                              <li><a href="shop-fullwidth.html">Shop Full Width</a></li>
                            </ul>
                          </div>
                          <div className="menu-colum">
                            <ul>
                              <li><span className="mega-menu-text">Product</span></li>
                              <li><a className="active" href="product-details.html">Single Product</a></li>
                              <li><a href="variable-product-details.html">Variable Product</a></li>
                              <li><a href="external-product-details.html">External Product</a></li>
                              <li><a href="gallery-product-details.html">Gallery Product</a></li>
                              <li><a href="countdown-product-details.html">Countdown Product</a></li>
                            </ul>
                          </div>
                          <div className="menu-colum">
                            <ul>
                              <li><span className="mega-menu-text">Others</span></li>
                              <li><a href="error-404.html">Error 404</a></li>
                              <li><a href="compare.html">Compare Page</a></li>
                              <li><a href="cart.html">Cart Page</a></li>
                              <li><a href="checkout.html">Checkout Page</a></li>
                              <li><a href="wishlist.html">Wishlist Page</a></li>
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
                          <li><a href="blog.html">Blog Left Sidebar</a></li>
                          <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                          <li><a href="blog-list-fullwidth.html">Blog List Fullwidth</a></li>
                          <li><a href="blog-grid.html">Blog Grid Page</a></li>
                          <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                          <li><a href="blog-grid-fullwidth.html">Blog Grid Fullwidth</a></li>
                          <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                          <li><a href="blog-details-fullwidth.html">Blog Details Fullwidth</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span className="menu-text"> Pages</span>
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-submenu dropdown-hover">
                          <li><a href="frequently-questions.html">FAQ</a></li>
                          <li><a href="my-account.html">My Account</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
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
                        <span><a href="login.html">Login</a></span>
                        <span><a href="register.html">Register</a></span>
                      </li>
                      <li className="sidemenu-wrap d-none d-lg-flex">
                        <a href="#">USD <i className="fa fa-caret-down" /> </a>
                        <ul className="dropdown-sidemenu dropdown-hover-2 dropdown-language">
                          <li><a href="#">USD - US Dollar</a></li>
                          <li><a href="#">EUR - Euro</a></li>
                          <li><a href="#">GBP - British Pound</a></li>
                          <li><a href="#">INR - Indian Rupee</a></li>
                          <li><a href="#">BDT - Bangladesh Taka</a></li>    
                          <li><a href="#">JPY - Japan Yen</a></li>
                          <li><a href="#">CAD - Canada Dollar</a></li>
                          <li><a href="#">AUD - Australian Dollar</a></li>
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
                              <a href="cart.html"><img src="assets/images/cart/1.jpg"  /></a>
                            </div>
                            <div className="cart-text">
                              <h5 className="title"><a href="cart.html">11. Product with video - navy</a></h5>
                              <div className="cart-text-btn">
                                <div className="cart-qty">
                                  <span>1×</span>
                                  <span className="cart-price">$98.00</span>
                                </div>
                                <button type="button"><i className="ion-trash-b" /></button>
                              </div>
                            </div>
                          </div>
                          <div className="single-cart-item">
                            <div className="cart-img">
                              <a href="cart.html"><img src="assets/images/cart/2.jpg"  /></a>
                            </div>
                            <div className="cart-text">
                              <h5 className="title"><a href="cart.html" title="10. This is the large title for testing large title and there is an image for testing - white">10. This is the large title for testing...</a></h5>
                              <div className="cart-text-btn">
                                <div className="cart-qty">
                                  <span>1×</span>
                                  <span className="cart-price">$98.00</span>
                                </div>
                                <button type="button"><i className="ion-trash-b" /></button>
                              </div>
                            </div>
                          </div>
                          <div className="single-cart-item">
                            <div className="cart-img">
                              <a href="cart.html"><img src="assets/images/cart/3.jpg"  /></a>
                            </div>
                            <div className="cart-text">
                              <h5 className="title"><a href="cart.html">1. New and sale badge product - s / red</a></h5>
                              <div className="cart-text-btn">
                                <div className="cart-qty">
                                  <span>1×</span>
                                  <span className="cart-price">$98.00</span>
                                </div>
                                <button type="button"><i className="ion-trash-b" /></button>
                              </div>
                            </div>
                          </div>
                          <div className="cart-price-total d-flex justify-content-between">
                            <h5>Total :</h5>
                            <h5>$166.00</h5>
                          </div>
                          <div className="cart-links d-flex justify-content-center">
                            <a className="obrien-button white-btn" href="cart.html">View cart</a>
                            <a className="obrien-button white-btn" href="checkout.html">Checkout</a>
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
                      <img className="img-full" src="assets/images/logo/logo.png" alt="Header Logo" />
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
                          <li><a href="index.html">Home Page - 1</a></li>
                          <li><a href="index-2.html">Home Page - 2</a></li>
                          <li><a href="index-3.html">Home Page - 3</a></li>
                          <li><a href="index-4.html">Home Page - 4</a></li>
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
                              <li><span className="mega-menu-text">Shop</span></li>
                              <li><a href="shop.html">Shop Left Sidebar</a></li>
                              <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                              <li><a href="shop-list-left.html">Shop List Left Sidebar</a></li>
                              <li><a href="shop-list-right.html">Shop List Right Sidebar</a></li>
                              <li><a href="shop-fullwidth.html">Shop Full Width</a></li>
                            </ul>
                          </div>
                          <div className="menu-colum">
                            <ul>
                              <li><span className="mega-menu-text">Product</span></li>
                              <li><a className="active" href="product-details.html">Single Product</a></li>
                              <li><a href="variable-product-details.html">Variable Product</a></li>
                              <li><a href="external-product-details.html">External Product</a></li>
                              <li><a href="gallery-product-details.html">Gallery Product</a></li>
                              <li><a href="countdown-product-details.html">Countdown Product</a></li>
                            </ul>
                          </div>
                          <div className="menu-colum">
                            <ul>
                              <li><span className="mega-menu-text">Others</span></li>
                              <li><a href="error-404.html">Error 404</a></li>
                              <li><a href="compare.html">Compare Page</a></li>
                              <li><a href="cart.html">Cart Page</a></li>
                              <li><a href="checkout.html">Checkout Page</a></li>
                              <li><a href="wishlist.html">Wishlist Page</a></li>
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
                          <li><a href="blog.html">Blog Left Sidebar</a></li>
                          <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                          <li><a href="blog-list-fullwidth.html">Blog List Fullwidth</a></li>
                          <li><a href="blog-grid.html">Blog Grid Page</a></li>
                          <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                          <li><a href="blog-grid-fullwidth.html">Blog Grid Fullwidth</a></li>
                          <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                          <li><a href="blog-details-fullwidth.html">Blog Details Fullwidth</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span className="menu-text"> Pages</span>
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-submenu dropdown-hover">
                          <li><a href="frequently-questions.html">FAQ</a></li>
                          <li><a href="my-account.html">My Account</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
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
                        <span><a href="login.html">Login</a></span>
                        <span><a href="register.html">Register</a></span>
                      </li>
                      <li className="sidemenu-wrap d-none d-lg-flex">
                        <a href="#">USD <i className="fa fa-caret-down" /> </a>
                        <ul className="dropdown-sidemenu dropdown-hover-2 dropdown-language">
                          <li><a href="#">USD - US Dollar</a></li>
                          <li><a href="#">EUR - Euro</a></li>
                          <li><a href="#">GBP - British Pound</a></li>
                          <li><a href="#">INR - Indian Rupee</a></li>
                          <li><a href="#">BDT - Bangladesh Taka</a></li>
                          <li><a href="#">JPY - Japan Yen</a></li>
                          <li><a href="#">CAD - Canada Dollar</a></li>
                          <li><a href="#">AUD - Australian Dollar</a></li>
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
                              <a href="cart.html"><img src="assets/images/cart/1.jpg"  /></a>
                            </div>
                            <div className="cart-text">
                              <h5 className="title"><a href="cart.html">11. Product with video - navy</a></h5>
                              <div className="cart-text-btn">
                                <div className="cart-qty">
                                  <span>1×</span>
                                  <span className="cart-price">$98.00</span>
                                </div>
                                <button type="button"><i className="ion-trash-b" /></button>
                              </div>
                            </div>
                          </div>
                          <div className="single-cart-item">
                            <div className="cart-img">
                              <a href="cart.html"><img src="assets/images/cart/2.jpg"  /></a>
                            </div>
                            <div className="cart-text">
                              <h5 className="title"><a href="cart.html" title="10. This is the large title for testing large title and there is an image for testing - white">10. This is the large title for testing...</a></h5>
                              <div className="cart-text-btn">
                                <div className="cart-qty">
                                  <span>1×</span>
                                  <span className="cart-price">$98.00</span>
                                </div>
                                <button type="button"><i className="ion-trash-b" /></button>
                              </div>
                            </div>
                          </div>
                          <div className="single-cart-item">
                            <div className="cart-img">
                              <a href="cart.html"><img src="assets/images/cart/3.jpg" /></a>
                            </div>
                            <div className="cart-text">
                              <h5 className="title"><a href="cart.html">1. New and sale badge product - s / red</a></h5>
                              <div className="cart-text-btn">
                                <div className="cart-qty">
                                  <span>1×</span>
                                  <span className="cart-price">$98.00</span>
                                </div>
                                <button type="button"><i className="ion-trash-b" /></button>
                              </div>
                            </div>
                          </div>
                          <div className="cart-price-total d-flex justify-content-between">
                            <h5>Total :</h5>
                            <h5>$166.00</h5>
                          </div>
                          <div className="cart-links d-flex justify-content-center">
                            <a className="obrien-button white-btn" href="cart.html">View cart</a>
                            <a className="obrien-button white-btn" href="checkout.html">Checkout</a>
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
                <button className="search-btn"><i className="fa fa-search" /></button>
              </form>
            </div>
            {/* mobile menu start */}
            <div className="mobile-navigation">
              {/* mobile menu navigation start */}
              <nav>
                <ul className="mobile-menu">
                  <li className="menu-item-has-children"><a href="#">Home</a>
                    <ul className="dropdown">
                      <li><a href="index.html">Home Page 1</a></li>
                      <li><a href="index-2.html">Home Page 2</a></li>
                      <li><a href="index-3.html">Home Page 3</a></li>
                      <li><a href="index-4.html">Home Page 4</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children"><a href="#">Shop</a>
                    <ul className="megamenu dropdown">
                      <li className="mega-title has-children"><a href="#">Shop Layouts</a>
                        <ul className="dropdown">
                          <li><a href="shop.html">Shop Left Sidebar</a></li>
                          <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                          <li><a href="shop-list-left.html">Shop List Left Sidebar</a></li>
                          <li><a href="shop-list-right.html">Shop List Right Sidebar</a></li>
                          <li><a href="shop-fullwidth.html">Shop Full Width</a></li>
                        </ul>
                      </li>
                      <li className="mega-title has-children"><a href="#">Product Details</a>
                        <ul className="dropdown">
                          <li><a href="product-details.html">Single Product Details</a></li>
                          <li><a href="variable-product-details.html">Variable Product Details</a></li>
                          <li><a href="external-product-details.html">External Product Details</a></li>
                          <li><a href="gallery-product-details.html">Gallery Product Details</a></li>
                          <li><a href="countdown-product-details.html">Countdown Product Details</a></li>
                        </ul>
                      </li>
                      <li className="mega-title has-children"><a href="#">Others</a>
                        <ul className="dropdown">
                          <li><a href="error404.html">Error 404</a></li>
                          <li><a href="compare.html">Compare Page</a></li>
                          <li><a href="cart.html">Cart Page</a></li>
                          <li><a href="checkout.html">Checkout Page</a></li>
                          <li><a href="wishlist.html">Wish List Page</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children "><a href="#">Blog</a>
                    <ul className="dropdown">
                      <li><a href="blog.html">Blog Left Sidebar</a></li>
                      <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                      <li><a href="blog-list-fullwidth.html">Blog List Fullwidth</a></li>
                      <li><a href="blog-grid.html">Blog Grid Page</a></li>
                      <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                      <li><a href="blog-grid-fullwidth.html">Blog Grid Fullwidth</a></li>
                      <li><a href="blog-details-sidebar.html">Blog Details Sidebar Page</a></li>
                      <li><a href="blog-details-fullwidth.html">Blog Details Fullwidth Page</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children "><a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><a href="frequently-questions.html">FAQ</a></li>
                      <li><a href="my-account.html">My Account</a></li>
                      <li><a href="login-register.html">login &amp; register</a></li>
                    </ul>
                  </li>
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="contact-us.html">Contact</a></li>
                </ul>
              </nav>
              {/* mobile menu navigation end */}
            </div>
            {/* mobile menu end */}
            <div className="header-top-settings offcanvas-curreny-lang-support">
              {/* mobile menu navigation start */}
              <nav>
                <ul className="mobile-menu">
                  <li className="menu-item-has-children"><a href="#">My Account</a>
                    <ul className="dropdown">
                      <li><a href="login.html">Login</a></li>
                      <li><a href="Register-2.html">Register</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children"><a href="#">Currency:USD</a>
                    <ul className="dropdown">
                      <li><a href="#">USD - US Dollar</a></li>
                      <li><a href="#">EUR - Euro</a></li>
                      <li><a href="#">GBP - British Pound</a></li>
                      <li><a href="#">INR - Indian Rupee</a></li>
                      <li><a href="#">BDT - Bangladesh Taka</a></li>
                      <li><a href="#">JPY - Japan Yen</a></li>
                      <li><a href="#">CAD - Canada Dollar</a></li>
                      <li><a href="#">AUD - Australian Dollar</a></li>
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
                <a title="Facebook-f" href="#"><i className="fa fa-facebook-f" /></a>
                <a title="Twitter" href="#"><i className="fa fa-twitter" /></a>
                <a title="Linkedin" href="#"><i className="fa fa-linkedin" /></a>
                <a title="Youtube" href="#"><i className="fa fa-youtube" /></a>
                <a title="Vimeo" href="#"><i className="fa fa-vimeo" /></a>
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
              <h3 className="title-3">Product Details</h3>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li>Product Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Breadcrumb Area End Here */}
    {/* Single Product Main Area Start */}
    <div className="single-product-main-area">
      <div className="container container-default custom-area">
        <div className="row">
          <div className="col-lg-5 col-custom">
            <div className="product-details-img horizontal-tab">
              <div className="product-slider popup-gallery product-details_slider" data-slick-options="{
                  &quot;slidesToShow&quot;: 1,
                  &quot;arrows&quot;: false,
                  &quot;fade&quot;: true,
                  &quot;draggable&quot;: false,
                  &quot;swipe&quot;: false,
                  &quot;asNavFor&quot;: &quot;.pd-slider-nav&quot;
                  }">
                <div className="single-image border">
                  <a href="assets/images/product/large-size/1.jpg">
                    <img src="assets/images/product/large-size/1.jpg" alt="Product" />
                  </a>
                </div>
                <div className="single-image border">
                  <a href="assets/images/product/large-size/2.jpg">
                    <img src="assets/images/product/large-size/2.jpg" alt="Product" />
                  </a>
                </div>
                <div className="single-image border">
                  <a href="assets/images/product/large-size/3.jpg">
                    <img src="assets/images/product/large-size/3.jpg" alt="Product" />
                  </a>
                </div>
                <div className="single-image border">
                  <a href="assets/images/product/large-size/4.jpg">
                    <img src="assets/images/product/large-size/4.jpg" alt="Product" />
                  </a>
                </div>
                <div className="single-image border">
                  <a href="assets/images/product/large-size/5.jpg">
                    <img src="assets/images/product/large-size/5.jpg" alt="Product" />
                  </a>
                </div>
                <div className="single-image border">
                  <a href="assets/images/product/large-size/6.jpg">
                    <img src="assets/images/product/large-size/6.jpg" alt="Product" />
                  </a>
                </div>
                <div className="single-image border">
                  <a href="assets/images/product/large-size/7.jpg">
                    <img src="assets/images/product/large-size/7.jpg" alt="Product" />
                  </a>
                </div>
              </div>
              <div className="pd-slider-nav product-slider" data-slick-options="{
                  &quot;slidesToShow&quot;: 4,
                  &quot;asNavFor&quot;: &quot;.product-details_slider&quot;,
                  &quot;focusOnSelect&quot;: true,
                  &quot;arrows&quot; : false,
                  &quot;spaceBetween&quot;: 30,
                  &quot;vertical&quot; : false
                  }" data-slick-responsive="[
                      {&quot;breakpoint&quot;:1501, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4}},
                      {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4}},
                      {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4}},
                      {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3}}
                  ]">
                <div className="single-thumb border">
                  <img src="assets/images/product/small-size/1.jpg" alt="Product Thumnail" />
                </div>
                <div className="single-thumb border">
                  <img src="assets/images/product/small-size/2.jpg" alt="Product Thumnail" />
                </div>
                <div className="single-thumb border">
                  <img src="assets/images/product/small-size/3.jpg" alt="Product Thumnail" />
                </div>
                <div className="single-thumb border">
                  <img src="assets/images/product/small-size/4.jpg" alt="Product Thumnail" />
                </div>
                <div className="single-thumb border">
                  <img src="assets/images/product/small-size/5.jpg" alt="Product Thumnail" />
                </div>
                <div className="single-thumb border">
                  <img src="assets/images/product/small-size/6.jpg" alt="Product Thumnail" />
                </div>
                <div className="single-thumb border">
                  <img src="assets/images/product/small-size/7.jpg" alt="Product Thumnail" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-custom">
            <div className="product-summery position-relative">
              <div className="product-head mb-3">
                <h2 className="product-title">Sample product Countdown</h2>
              </div>
              <div className="price-box mb-2">
                <span className="regular-price">$80.00</span>
                <span className="old-price"><del>$90.00</del></span>
              </div>
              <div className="product-rating mb-3">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </div>
              <div className="sku mb-3">
                <span>SKU: 12345</span>
              </div>
              <p className="desc-content mb-5">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              <div className="quantity-with_btn mb-4">
                <div className="quantity">
                  <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" defaultValue={0} type="text" />
                    <div className="dec qtybutton">-</div>
                    <div className="inc qtybutton">+</div>
                  </div>
                </div>
                <div className="add-to_cart">
                  <a className="btn obrien-button primary-btn" href="cart.html">Add to cart</a>
                  <a className="btn obrien-button-2 treansparent-color pt-0 pb-0" href="wishlist.html">Add to wishlist</a>
                </div>
              </div>
              <div className="buy-button mb-5">
                <a href="#" className="btn obrien-button-3 black-button">Buy it now</a>
              </div>
              <div className="social-share mb-4">
                <span>Share :</span>
                <a href="#"><i className="fa fa-facebook-square facebook-color" /></a>
                <a href="#"><i className="fa fa-twitter-square twitter-color" /></a>
                <a href="#"><i className="fa fa-linkedin-square linkedin-color" /></a>
                <a href="#"><i className="fa fa-pinterest-square pinterest-color" /></a>
              </div>
              <div className="payment">
                <a href="#"><img className="border" src="assets/images/payment/img-payment.png" alt="Payment" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-no-text">
          <div className="col-lg-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active text-uppercase" id="home-tab" data-bs-toggle="tab" href="#connect-1" role="tab" aria-selected="true">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" id="profile-tab" data-bs-toggle="tab" href="#connect-2" role="tab" aria-selected="false">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" id="contact-tab" data-bs-toggle="tab" href="#connect-3" role="tab" aria-selected="false">Shipping Policy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" id="review-tab" data-bs-toggle="tab" href="#connect-4" role="tab" aria-selected="false">Size Chart</a>
              </li>
            </ul>
            <div className="tab-content mb-text" id="myTabContent">
              <div className="tab-pane fade show active" id="connect-1" role="tabpanel" aria-labelledby="home-tab">
                <div className="desc-content">
                  <p className="mb-3">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                </div>
              </div>
              <div className="tab-pane fade" id="connect-2" role="tabpanel" aria-labelledby="profile-tab">
                {/* Start Single Content */}
                <div className="product_tab_content  border p-3">
                  <div className="review_address_inner">
                    {/* Start Single Review */}
                    <div className="pro_review mb-5">
                      <div className="review_thumb">
                        <img alt="review images" src="assets/images/review/1.jpg" />
                      </div>
                      <div className="review_details">
                        <div className="review_info mb-2">
                          <div className="product-rating mb-2">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                          </div>
                          <h5>Admin - <span> December 19, 2020</span></h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in viverra ex, vitae vestibulum arcu. Duis sollicitudin metus sed lorem commodo, eu dapibus libero interdum. Morbi convallis viverra erat, et aliquet orci congue vel. Integer in odio enim. Pellentesque in dignissim leo. Vivamus varius ex sit amet quam tincidunt iaculis.</p>
                      </div>
                    </div>
                    {/* End Single Review */}
                  </div>
                  {/* Start RAting Area */}
                  <div className="rating_wrap">
                    <h5 className="rating-title-1 mb-2">Add a review </h5>
                    <p className="mb-2">Your email address will not be published. Required fields are marked *</p>
                    <h6 className="rating-title-2 mb-2">Your Rating</h6>
                    <div className="rating_list mb-4">
                      <div className="review_info">
                        <div className="product-rating mb-3">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End RAting Area */}
                  <div className="comments-area comments-reply-area">
                    <div className="row">
                      <div className="col-lg-12 col-custom">
                        <form action="#" className="comment-form-area">
                          <div className="row comment-input">
                            <div className="col-md-6 col-custom comment-form-author mb-3">
                              <label>Name <span className="required">*</span></label>
                              <input type="text"  name="Name" />
                            </div>
                            <div className="col-md-6 col-custom comment-form-emai mb-3">
                              <label>Email <span className="required">*</span></label>
                              <input type="text"  name="email" />
                            </div>
                          </div>
                          <div className="comment-form-comment mb-3">
                            <label>Comment</label>
                            <textarea className="comment-notes"  defaultValue={""} />
                          </div>
                          <div className="comment-form-submit">
                            <input type="submit" defaultValue="Submit" className="comment-submit btn obrien-button primary-btn" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Content */}
              </div>
              <div className="tab-pane fade" id="connect-3" role="tabpanel" aria-labelledby="contact-tab">
                <div className="shipping-policy">
                  <h4 className="title-3 mb-4">Shipping policy for our store</h4>
                  <p className="desc-content mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate</p>
                  <ul className="policy-list mb-2">
                    <li>1-2 business days (Typically by end of day)</li>
                    <li><a href="#">30 days money back guaranty</a></li>
                    <li>24/7 live support</li>
                    <li>odio dignissim qui blandit praesent</li>
                    <li>luptatum zzril delenit augue duis dolore</li>
                    <li>te feugait nulla facilisi.</li>
                  </ul>
                  <p className="desc-content mb-2">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum</p>
                  <p className="desc-content mb-2">claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per</p>
                  <p className="desc-content mb-2">seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                </div>
              </div>
              <div className="tab-pane fade" id="connect-4" role="tabpanel" aria-labelledby="review-tab">
                <div className="size-tab table-responsive-lg">
                  <h4 className="title-3 mb-4">Size Chart</h4>
                  <table className="table border">
                    <tbody>
                      <tr>
                        <td className="cun-name"><span>UK</span></td>
                        <td>18</td>
                        <td>20</td>
                        <td>22</td>
                        <td>24</td>
                        <td>26</td>
                      </tr>
                      <tr>
                        <td className="cun-name"><span>European</span></td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                      </tr>
                      <tr>
                        <td className="cun-name"><span>usa</span></td>
                        <td>14</td>
                        <td>16</td>
                        <td>18</td>
                        <td>20</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td className="cun-name"><span>Australia</span></td>
                        <td>28</td>
                        <td>10</td>
                        <td>12</td>
                        <td>14</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td className="cun-name"><span>Canada</span></td>
                        <td>24</td>
                        <td>18</td>
                        <td>14</td>
                        <td>42</td>
                        <td>36</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Single Product Main Area End */}
    {/* Product Area Start Here */}
    <div className="product-area mb-text">
      <div className="container container-default custom-area">
        <div className="row">
          <div className="col-lg-5 m-auto text-center col-custom">
            <div className="section-content">
              <h2 className="title-1 text-uppercase">Related Product</h2>
              <div className="desc-content">
                <p>You can check the related product for your shopping collection.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 product-wrapper col-custom">
            <div className="product-slider" data-slick-options="{
                  &quot;slidesToShow&quot;: 4,
                  &quot;slidesToScroll&quot;: 1,
                  &quot;infinite&quot;: true,
                  &quot;arrows&quot;: false,
                  &quot;dots&quot;: false
                  }" data-slick-responsive="[
                  {&quot;breakpoint&quot;: 1200, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 3
                  }},
                  {&quot;breakpoint&quot;: 992, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 2
                  }},
                  {&quot;breakpoint&quot;: 576, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 1
                  }}
                  ]">
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/1.jpg"  className="product-image-1 w-100" />
                      <img src="assets/images/product/2.jpg"  className="product-image-2 position-absolute w-100" />
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy name</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/3.jpg"  className="product-image-1 w-100" />
                      <img src="assets/images/product/4.jpg"  className="product-image-2 position-absolute w-100" />
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy title</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/5.jpg"  className="product-image-1 w-100" />
                      <img src="assets/images/product/6.jpg"  className="product-image-2 position-absolute w-100" />
                    </a>
                  </div>
                  <div className="label-product">
                    <span className="label-sale position-absolute text-uppercase text-white text-center d-block">Soldout</span>
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy title</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/7.jpg"  className="product-image-1 w-100" />
                      <img src="assets/images/product/8.jpg"  className="product-image-2 position-absolute w-100" />
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy name</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/9.jpg"  className="product-image-1" />
                      <img src="assets/images/product/10.jpg"  className="product-image-2 position-absolute top-0 left-0" />
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy title</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product Area End Here */}
    {/* Product Area Start Here */}
    <div className="product-area mb-no-text">
      <div className="container container-default custom-area">
        <div className="row">
          <div className="col-lg-5 m-auto text-center col-custom">
            <div className="section-content">
              <h2 className="title-1 text-uppercase">You May Also Like</h2>
              <div className="desc-content">
                <p>Most of the customers choose our products. You may also like our product.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 product-wrapper col-custom">
            <div className="product-slider" data-slick-options="{
                  &quot;slidesToShow&quot;: 4,
                  &quot;slidesToScroll&quot;: 1,
                  &quot;infinite&quot;: true,
                  &quot;arrows&quot;: false,
                  &quot;dots&quot;: false
                  }" data-slick-responsive="[
                  {&quot;breakpoint&quot;: 1200, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 3
                  }},
                  {&quot;breakpoint&quot;: 992, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 2
                  }},
                  {&quot;breakpoint&quot;: 576, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 1
                  }}
                  ]">
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/1.jpg"  className="product-image-1 w-100" />
                      <img src="assets/images/product/2.jpg"  className="product-image-2 position-absolute w-100" />
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy name</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/3.jpg"  className="product-image-1 w-100" />
                      <img src="assets/images/product/4.jpg"  className="product-image-2 position-absolute w-100" />
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy title</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/5.jpg"  className="product-image-1 w-100" />
                      <img src="assets/images/product/6.jpg"  className="product-image-2 position-absolute w-100" />
                    </a>
                  </div>
                  <div className="label-product">
                    <span className="label-sale position-absolute text-uppercase text-white text-center d-block">Soldout</span>
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy title</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/7.jpg"  className="product-image-1 w-100" />
                      <img src="assets/images/product/8.jpg"  className="product-image-2 position-absolute w-100" />
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy name</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="single-product position-relative">
                  <div className="product-image">
                    <a className="d-block" href="product-details.html">
                      <img src="assets/images/product/9.jpg"  className="product-image-1" />
                      <img src="assets/images/product/10.jpg"  className="product-image-2 position-absolute top-0 left-0" />
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
                      <h4 className="title-2"> <a href="product-details.html">Product dummy title</a></h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
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
                    <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                      <i className="ion-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product Area End Here */}
    {/* Support Area Start Here */}
    <div className="support-area">
      <div className="container container-default custom-area">
        <div className="row">
          <div className="col-lg-12 col-custom">
            <div className="support-wrapper d-flex">
              <div className="support-content">
                <h1 className="title">Need Help ?</h1>
                <p className="desc-content">Call our support 24/7 at 01234-567-890</p>
              </div>
              <div className="support-button d-flex align-items-center">
                <a className="obrien-button primary-btn" href="contact-us.html">Contact now</a>
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
                    <img src="assets/images/logo/footer.png" alt="Logo Image" />
                  </a>
                </div>
                <p className="desc-content">Obrien is the best parts shop of your daily nutritions. What kind of nutrition do you need you can get here soluta nobis</p>
                <div className="social-links">
                  <ul className="d-flex">
                    <li>
                      <a className="border rounded-circle" href="#" title="Facebook">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a className="border rounded-circle" href="#" title="Twitter">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="border rounded-circle" href="#" title="Linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="border rounded-circle" href="#" title="Youtube">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a className="border rounded-circle" href="#" title="Vimeo">
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
                  <li><a href="about-us.html">Our Company</a></li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                  <li><a href="about-us.html">Our Services</a></li>
                  <li><a href="about-us.html">Why We?</a></li>
                  <li><a href="about-us.html">Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
              <div className="single-footer-widget">
                <h2 className="widget-title">Quicklink</h2>
                <ul className="widget-list">
                  <li><a href="about-us.html">About</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="shop.html">Shop</a></li>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="contact-us.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
              <div className="single-footer-widget">
                <h2 className="widget-title">Support</h2>
                <ul className="widget-list">
                  <li><a href="contact-us.html">Online Support</a></li>
                  <li><a href="contact-us.html">Shipping Policy</a></li>
                  <li><a href="contact-us.html">Return Policy</a></li>
                  <li><a href="contact-us.html">Privacy Policy</a></li>
                  <li><a href="contact-us.html">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-custom">
              <div className="single-footer-widget">
                <h2 className="widget-title">See Information</h2>
                <div className="widget-body">
                  <address>123, H2, Road #21, Main City, Your address goes here.<br />Phone: 01254 698 785, 36598 254 987<br />Email: https://example.com</address>
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
                <p>Copyright © 2020 <a href="https://hasthemes.com/" title="https://hasthemes.com/">HasThemes</a> | Built with&nbsp;<strong>Obrien</strong>&nbsp;by <a href="https://hasthemes.com/" title="https://hasthemes.com/">HasThemes</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer Area End Here */}
  </div>
  {/* Modal Area Start Here */}
  <div className="modal fade obrien-modal" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <button type="button" className="close close-button" data-bs-dismiss="modal" aria-label="Close">
          <span className="close-icon" aria-hidden="true">x</span>
        </button>
        <div className="modal-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 text-center">
                <div className="product-image">
                  <img src="assets/images/product/1.jpg" alt="Product Image" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="modal-product">
                  <div className="product-content">
                    <div className="product-title">
                      <h4 className="title">Product dummy name</h4>
                    </div>
                    <div className="price-box">
                      <span className="regular-price ">$80.00</span>
                      <span className="old-price"><del>$90.00</del></span>
                    </div>
                    <div className="product-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <span>1 Review</span>
                    </div>
                    <p className="desc-content">we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel...</p>
                    <form className="d-flex flex-column w-100" action="#">
                      <div className="form-group">
                        <select className="form-control nice-select w-100">
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                          <option>XXL</option>
                        </select>
                      </div>
                    </form>
                    <div className="quantity-with_btn">
                      <div className="quantity">
                        <div className="cart-plus-minus">
                          <input className="cart-plus-minus-box" defaultValue={0} type="text" />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                        </div>
                      </div>
                      <div className="add-to_cart">
                        <a className="btn obrien-button primary-btn" href="cart.html">Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Area End Here */}
  {/* Scroll to Top Start */}
  <a className="scroll-to-top" href="#">
    <i className="ion-chevron-up" />
  </a>
  {/* Scroll to Top End */}
</div>

     
    )
}

export default Detail_Product

