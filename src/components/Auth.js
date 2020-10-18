import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as firebaseui from 'firebaseui'

  export default function Auth() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
          callbacks: {
              signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                  // User successfully signed in.
                  // Return type determines whether we continue the redirect automatically
                  // or whether we leave that to developer to handle.
                  return true;
                },
           uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '/paris',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };

ui.start('#firebaseui-auth-container', uiConfig);



    return (
      <div>
      <h2></h2>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      </div>
  )
  }
