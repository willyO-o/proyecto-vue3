<template>

    <section>
        <div class="page-header min-vh-100">
            <div class="container">
                <div class="row">
                    <div
                        class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                        <div class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                            style="background-image: url('https://images.unsplash.com/photo-1579541764764-6401d4100dd7?q=80&w=1400&auto=format&fit=crop'); background-size: cover;"
                            loading="lazy"></div>
                    </div>
                    <div class="col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                        <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                            <div class="card-header p-0 position-relative mt-2 mx-2 z-index-2 bg-transparent">
                                <div class="bg-dark shadow-dark border-radius-md p-3">
                                    <h5 class="text-white text-primary mb-0">Contact us</h5>
                                    <p class="text-white text-sm mb-0">For further questions contact using our contact
                                        form.</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="pb-3">
                                    For further questions, including partnership opportunities, please email
                                    hello@creative-tim.com
                                    or contact using our contact form.
                                </p>
                                <form id="contact-form" method="post" autocomplete="off">
                                    <div class="card-body p-0 my-3">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-group input-group-static mb-4">
                                                    <label>Full Name</label>
                                                    <input type="email" class="form-control" placeholder="Full Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6 ps-md-2">
                                                <div class="input-group input-group-static mb-4">
                                                    <label>Email</label>
                                                    <input type="email" class="form-control"
                                                        placeholder="hello@creative-tim.com">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 mt-md-0 mt-4">
                                            <div class="input-group input-group-static mb-4">
                                                <label>How can we help you?</label>
                                                <textarea name="message" class="form-control" id="message" rows="6"
                                                    placeholder="Describe your problem in at least 250 characters"></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <button type="submit" class="btn bg-gradient-dark mt-3 mb-0">Send
                                                    Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
</script>