import { Sample } from "../components/Sample";
import { LoginForm, SignUpForm } from "../components/Form";

export function LandingPage() {
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function openForm2() {
    document.getElementById("myForm2").style.display = "block";
  }

  return (
    <div className="">
      <div className="overlay-container">
        <div className="banner">
          <div className="overlay">
            <div className="nav">
              <img
                src="https://img.icons8.com/stickers/100/null/hamburger.png"
                alt=""
              />
              <div className="account">
                <a href="#signin" className="signin" onClick={openForm}>
                  Sign In
                </a>
                <button onClick={openForm2}>
                  <a href="#signup">Sign Up</a>
                </button>
              </div>
            </div>
            <h1>Restaurants, brought to your door...</h1>
            <p>Fast, convenient and affordable</p>
          </div>
        </div>
        <div className="form-popup" id="myForm">
          <form action="" className="form-container" method="post">
            <LoginForm />
          </form>
        </div>
        <div className="form-popup" id="myForm2">
          <form action="" className="form-container" method="post">
            <SignUpForm />
          </form>
        </div>
        <Sample
          image="/ikhsan-baihaqi-dXeBXaThv4U-unsplash.jpg"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        architecto explicabo eveniet officia fugiat dolor eos ratione
        distinctio, dolores modi corporis, similique ex temporibus, cupiditate
        consectetur rerum earum dolore. Magni."
          className="sample sample1"
        />
        <Sample
          image="/kristina-bratko-nP11TkjxJ7s-unsplash.jpg"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        architecto explicabo eveniet officia fugiat dolor eos ratione
        distinctio, dolores modi corporis, similique ex temporibus, cupiditate
        consectetur rerum earum dolore. Magni."
          className="sample sample2"
        />
      </div>
    </div>
  );
}
