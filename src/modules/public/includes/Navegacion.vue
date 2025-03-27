<template>

    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">

                <nav
                    class="navbar navbar-expand-lg  blur border-radius-lg mt-4 top-0 z-index-3 shadow position-absolute my-3 p-2 start-0 end-0 mx-4">
                    <div class="container-fluid px-0">
                        <RouterLink class="navbar-brand font-weight-bolder ms-sm-3 text-sm"
                            to="/" rel="tooltip"
                            title="Designed and Coded by Creative Tim" data-placement="bottom" >
                            Mi Tienda
                        </RouterLink>
                        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon mt-2">
                                <span class="navbar-toggler-bar bar1"></span>
                                <span class="navbar-toggler-bar bar2"></span>
                                <span class="navbar-toggler-bar bar3"></span>
                            </span>
                        </button>
                        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
                            <ul class="navbar-nav navbar-nav-hover ms-auto">

                                <li class="nav-item ms-lg-auto">
                                    <RouterLink class="nav-link nav-link-icon me-2"
                                        to="/" >
                                     
                                        <p class="d-inline text-sm z-index-1 font-weight-semibold"
                                            data-bs-toggle="tooltip" data-bs-placement="bottom"
                                            title="Star us on Github">Inicio</p>
                                    </RouterLink>
                                </li>

                                <li class="nav-item ms-lg-auto">
                                    <RouterLink class="nav-link nav-link-icon me-2"
                                        to="/tienda" >
                                       
                                        <p class="d-inline text-sm z-index-1 font-weight-semibold"
                                            data-bs-toggle="tooltip" data-bs-placement="bottom"
                                            title="Star us on Github">Tienda</p>
                                    </RouterLink>
                                </li>
                                <li class="nav-item ms-lg-auto">
                                    <RouterLink class="nav-link nav-link-icon me-2"
                                        to="/contacto" >
                                      
                                        <p class="d-inline text-sm z-index-1 font-weight-semibold"
                                            data-bs-toggle="tooltip" data-bs-placement="bottom"
                                            title="Star us on Github">Contacto</p>
                                    </RouterLink>
                                </li>

                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center font-weight-semibold"
                                        id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-cart-shopping me-1 mt-1"></i>

                                    </a>
                                    <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
                                        aria-labelledby="dropdownMenuPages">
                                        <div class="d-none d-lg-block">
                                            <h6
                                                class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                                                Landing Pages
                                            </h6>
                                            <a href="/pages/about-us.html" class="dropdown-item border-radius-md">
                                                <span>About Us</span>
                                            </a>
                                            <a href="/pages/contact-us.html" class="dropdown-item border-radius-md">
                                                <span>Contact Us</span>
                                            </a>
                                            <a href="/pages/author.html" class="dropdown-item border-radius-md">
                                                <span>Author</span>
                                            </a>
                                            <h6
                                                class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                                                Account
                                            </h6>
                                            <a href="/pages/sign-in.html" class="dropdown-item border-radius-md">
                                                <span>Sign In</span>
                                            </a>
                                        </div>
                                        <div class="d-lg-none">
                                            <h6
                                                class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                                                Landing Pages
                                            </h6>
                                            <a href="/pages/about-us.html" class="dropdown-item border-radius-md">
                                                <span>About Us</span>
                                            </a>
                                            <a href="/pages/contact-us.html" class="dropdown-item border-radius-md">
                                                <span>Contact Us</span>
                                            </a>
                                            <a href="/pages/author.html" class="dropdown-item border-radius-md">
                                                <span>Author</span>
                                            </a>
                                            <h6
                                                class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                                                Account
                                            </h6>
                                            <a href="/pages/sign-in.html" class="dropdown-item border-radius-md">
                                                <span>Sign In</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item my-auto ms-3 ms-lg-0">
                                    <RouterLink to="/login"
                                        class="btn  bg-gradient-dark  mb-0 mt-2 mt-md-0">
                                        Login
                                        </RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End Navbar -->
            </div>
        </div>
    </div>

</template>
<script setup>

</script>