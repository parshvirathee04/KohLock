<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/materialdesignicons.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <title>KohLock - Buy best kajals</title>
    <!-- <script src="js/checklog.js"></script> -->
</head>
<body>
    <?php session_start();
    if(!isset($_SESSION['userid'])) : ?>  
        <div class="failure">
            <div class="image failure_1">
                <!-- <img src="img/log1.png"> -->
                <div class="failure-text">
                    <h2>Continue Without Login</h2>
                </div>
            </div>
            <div class="image failure_2">
                <!-- <img src="img/log2.png"> -->
                <div class="failure-text">
                    <h2>Continue With Login</h2>
                </div>
            </div>

        </div>  
        <div class="go_back">
            <button ><a href="login.html">Back</a></button> 
        </div>
    <?php endif ?>
    <?php if(isset($_SESSION['userid'])) : ?>
        <section class="main">
            <div class="header">

                <div class="header-sub header-1">
                    <div class="header-sub-item">
                        <span class="fa fa-bars myham"></span>
                    </div>
                    <div class="header-sub-item heading">
                        <h2>The Kajal Room</h2>
                    </div>
                    <div class="header-sub-item cart">
                        <span class="fa fa-shopping-cart mycart"></span>
                    </div>
                </div>

                <div class="header-sub header-2">
                    <div class="heading">
                        <img src="img/logo1.png">
                    </div>
                    
                    <div class="hamburger">
                        <p class="logout">Logout</p>
                    </div>

                    <div class="cart-content">
                        <p>TOTAL <span id="total-amt">₹0</span></p>
                    </div>
                </div>
            </div>
            
            <div class="container">
                <div class="kajal">
                    <div class="kajal-item kajal-1" id="k1">
                        <div class="kajal-image">
                            <img src="img/k1.png">
                        </div>
                        <div class="kajal-text">
                            <h3>The Colossal Kajal</h3>
                            <p>₹170</p>
                        </div>

                        <div class="add">
                            <button id="add-cart">Add to cart</button>
                        </div>
                    </div>
                    
                    <div class="kajal-item kajal-2" id="k2">
                        <div class="kajal-image">
                            <img src="img/k2.png">
                        </div>
                        <div class="kajal-text">
                            <h3>All Rounder Pencil</h3>
                            <p>₹450</p>
                        </div>
                        <div class="add">
                            <button id="add-cart">Add to cart</button>
                        </div>
                    </div>
                    
                    <div class="kajal-item kajal-3" id="k3">
                        <div class="kajal-image">
                            <img src="img/k3.png">
                        </div>
                        <div class="kajal-text">
                            <h3>Eyeconic Kajal</h3>
                            <p>₹180</p>
                        </div>

                        <div class="add">
                            <button id="add-cart">Add to cart</button>
                        </div>
                    </div>
                    
                    <div class="kajal-item kajal-4" id="k4">
                        <div class="kajal-image">
                            <img src="img/k4.png">
                        </div>
                        <div class="kajal-text">
                            <h3>Jumbo Eye Pencil</h3>
                            <p>₹550</p>
                        </div>
                        <div class="add">
                            <button id="add-cart">Add to cart</button>
                        </div>
                    </div>
                    
                    <div class="kajal-item kajal-5" id="k5">
                        <div class="kajal-image">
                            <img src="img/k5.png">
                        </div>
                        <div class="kajal-text">
                            <h3>Kajal Magique</h3>
                            <p>₹290</p>
                        </div>

                        <div class="add">
                            <button id="add-cart">Add to cart</button>
                        </div>
                    </div>
                    
                    <div class="kajal-item kajal-6" id="k6">
                        <div class="kajal-image">
                            <img src="img/k6.png">
                        </div>
                        <div class="kajal-text">
                            <h3>Crayon Kajal Eye Liner</h3>
                            <p>₹2100</p>
                        </div>

                        <div class="add">
                            <button id="add-cart">Add to cart</button>
                        </div>
                    </div>
                    
                    <div class="kajal-item kajal-7" id="k7">
                        <div class="kajal-image">
                            <img src="img/k7.png">
                        </div>
                        <div class="kajal-text">
                            <h3>Magnet Eyes Kajal</h3>
                            <p>₹179</p>
                        </div>

                        <div class="add">
                            <button id="add-cart">Add to cart</button>
                        </div>
                    </div>
                    
                    <div class="kajal-item kajal-8" id="k8">
                        <div class="kajal-image">
                            <img src="img/k8.png">
                        </div>
                        <div class="kajal-text">
                            <h3>Color Kick Kajal</h3>
                            <p>₹199</p>
                        </div>
                        <div class="add">
                            <button id="add-cart">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <?php endif ?>

    <script src="js/main3.js"></script>
</body>
</html>