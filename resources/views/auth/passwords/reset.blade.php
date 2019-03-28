@extends('layouts.app')

@section('content')

<main class="logo-box">

    <img src="{{ asset('img/logo-image.png') }}" alt=""/>
    
</main>

<form method="POST" action="{{ route('password.update') }}">
    @csrf

    <input type="hidden" name="token" value="{{ $token }}">

    <div class="reset_box">
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
    </div>


    <input id="email" type="email" class="email_btn form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $email ?? old('email') }}" required autofocus autofocus placeholder="Enter your email">

    @if ($errors->has('email'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('email') }}</strong>
        </span>
    @endif

    <input id="password" type="password" class="password_btn form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required placeholder="Enter new your password">

    @if ($errors->has('password'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('password') }}</strong>
        </span>
    @endif

    <input id="password-confirm" type="password" class="password_btn form-control" name="password_confirmation" required placeholder="Repeat your password">

    <button type="submit" class="btn register_btn">
        {{ __('Reset Password') }}
    </button>
</form>
@endsection
