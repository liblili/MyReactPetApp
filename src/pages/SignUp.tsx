import "./SignUp.css";
function SignUp() {
  return (
    <div>
      <section className="formen"></section>
      <h2 className="signup">Sign Up</h2>
      <div className="containerform">
        <form className="form">
          <label htmlFor="name">Name</label>
          <input id="name" type="text"></input>

          <label htmlFor="email">Email</label>
          <input id="email" type="email"></input>

          <label htmlFor="password">Password</label>
          <input id="password" type="password"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
