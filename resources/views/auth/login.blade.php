@extends('layouts.app')

@section('content')

<main class="logo-box">

    <img src="{{ asset('img/logo-image.png') }}" alt=""/>
    
</main>

<form method="POST" action="{{ route('login') }}" id="complete_login_form">
    @csrf
    
    <section class="user-data">
        <h3 class="login_instructions">Click <span class="click_to_login hvr-grow">here</span> to login<br></h3>
        <div class="login_box">
            <input id="email-login" type="email" class="email_btn form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus placeholder="Enter your email"> 
    
            @if ($errors->has('email'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
    
            <input id="password-login" type="password" class="password_btn form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required placeholder="Enter your password">
    
            @if ($errors->has('password'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                </label>
            </div>
        
            <button type="submit" class="btn btn-light login_btn">
                {{ __('Login') }}
            </button>
        </div>
        <a href="{{url('/redirect/facebook')}}" class="btn facebook_btn">Continue with Facebook</a>
        <a href="{{ url('/redirect/google') }}" class="btn google_btn">Continue with Google</a>
        <a href="{{ route('register') }}" class="btn register_btn">Register</a>
        <a class="btn btn-link forgot_link" href="{{ route('password.request') }}">
            {{ __('Forgot Your Password?') }}
        </a>
    </section>
</form>
@endsection
