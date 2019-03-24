<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Exo:400,900" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossorigin="anonymous">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    
</head>
<body>
    <main class="container_box">
        <div id="app">
            <nav class="navbar navbar-expand" id="fixed_bar">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <img src="{{ asset('img/adri_logo.png') }}" class="mini_logo" />
                    @guest
    
                    @else
                    <nav role='navigation'>
                        <div id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            
                            <ul id="menu">
                                <li>
                                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>
            
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    @endguest
                </div>
            </nav>
            
            @yield('content')
            
        </div>
    </main>

    <footer>Colip.devs@2019</footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
    <script>
        
    //display login forms
    let loginBox = document.querySelector('.login_box');
    let click = document.querySelector('.click_to_login');
    let loginHeading = document.querySelector('.login_instructions');

    click.addEventListener('click', () => {
        loginBox.style.display = "flex";
        loginHeading.style.display = "none";
    })

    // toggle menu
    let menu = document.querySelector('#menu');
    let toggleMenu = document.querySelector('#menuToggle');
    let show = false;

    toggleMenu.addEventListener('click' , () => {
        if(show === false) {
            menu.style.opacity = 1;
            show = true;
        } else {
            menu.style.opacity = 1;
        }
    })
    </script>
  
</body>
</html>
