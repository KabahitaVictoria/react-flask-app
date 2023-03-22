export function LoginForm() {
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  return (
    <>
      <h1>Login</h1>

      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        required
      ></input>

      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
      ></input>

      <button type="submit" className="btn">
        Login
      </button>

      <button type="button" className="btn-cancel" onClick={closeForm}>
        Close
      </button>
    </>
  );
}

export function SignUpForm() {
  function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
  }

  return (
    <>
      <h1>Sign Up</h1>

      <label htmlFor="first-name">
        <b>First name</b>
      </label>
      <input
        type="text"
        placeholder="Enter Your First Name"
        name="first-name"
        required
      ></input>

      <label htmlFor="last-name">
        <b>Last name</b>
      </label>
      <input
        type="text"
        placeholder="Enter Your Last Name"
        name="last-name"
        required
      ></input>

      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input
        type="text"
        placeholder="Enter Your Email"
        name="email"
        required
      ></input>

      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
      ></input>

      <button type="submit" className="btn">
        Sign Up
      </button>
      <button type="button" className="btn-cancel" onClick={closeForm2}>
        Close
      </button>
    </>
  );
}
