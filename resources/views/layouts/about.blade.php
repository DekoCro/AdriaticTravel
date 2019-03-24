<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>About us</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <main class="container_box">

        <section>
            <h1>Colip Developers</h1>
            <p>A Full Stack developer is responsible for front and back-end web development. Usually, good full stack developers will understand several how to work with several languages and databases including PHP, HTML, CSS, JavaScript and everything in between.</p>
            <h4>That is what we do. :) </h4>
        </section>
        <section class="team">
            <div class="developer">
                <img class="bio_img" src="{{ asset('../img/dzeko.jpg') }}" />
                <h2>Anđelko Lipotić</h2>
                <h3>JavaScript developer</h3>
            </div>
            <div class="developer">
                <img class="bio_img" src="{{ asset('../img/cola.jpg') }}" />
                <h2>Marko Colić</h2>
                <h3>React developer</h3>
            </div>
            <div class="developer">
                <img class="bio_img" src="{{ asset('../img/alex.jpg') }}" />
                <h2>Alessandro Spreafico</h2>
                <h3>PHP/Laravel developer</h3>
            </div>
        </section>
    </main>
    <footer>
        <a href="/">Home</a>
        <a href="/about" class="current_footer">About us</a>
        <a href="/contact">Contact</a>
        <h5>Colip.devs@2019</h5>
    </footer>
</body>
</html>