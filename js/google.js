//Para recuperar información de perfil de un usuario, use el método getBasicProfile() .

button__google = document.querySelector('.g-signin2');

{
    client_id: 'harry-potter-store-340019.apps.googleusercontent.com'
  }

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

button__google.addEventListener('click', onSignIn);