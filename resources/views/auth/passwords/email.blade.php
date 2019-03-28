@extends('layouts.app')

@section('content')
<a onClick="history.back()"><i class="fas fa-arrow-circle-left back_click" id="reset_click"></i></a>
<main class="logo-box">

    <img src="{{ asset('img/logo-image.png') }}" alt=""/>
    
</main>

@if (session('status'))
    <div class="alert alert-success" role="alert">
        {{ session('status') }}
    </div>
@endif

<form method="POST" action="{{ route('password.email') }}" id="resetEmailForm">
    @csrf

    <h3 class="reset_headline">Reset your password:</h3>

    <input type="email" id="email-login" style="margin-bottom: 2em;" class="email_btn form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required placeholder="Enter your email">

    @if ($errors->has('email'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('email') }}</strong>
        </span>
    @endif

    <button type="submit" class="btn register_btn" style="margin-bottom: 2em;">
        {{ __('Send Password Reset Link') }}
    </button>
        
</form>
@endsection
