import React from 'react';

const FacebookLogin = (props) => {
  return (
    <a className="btn btn-block btn-social btn-facebook" href="/auth/facebook">
      <i className="fa fa-facebook"></i>
      Sign in with Facebook
    </a>
    );
}

module.exports = FacebookLogin;