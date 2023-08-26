import React from 'react';

function InstituteLogin() {
  return (
    <div className="institute-login">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default InstituteLogin;
