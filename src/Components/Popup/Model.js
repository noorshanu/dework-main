import React from "react";
// import Toast from "./Toast";
import "./Modelll.css";
// import OutsideClickDetector from "hooks/OutsideClickDetector";
// import  { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { FaTelegram } from "react-icons/fa";

function Model({ setIsModal }) {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_kz0dtx4', 'template_tly8pl6', form.current, 'mnctSEDuRTEVNoe0i')
  //     .then((result) => {
  //       e.preventDefault();
  //       setShowToast(true);
  //         console.log(result.text);
  //         form.current.reset();

  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  // const [showToast, setShowToast] = useState(false);
  // const toastRef = OutsideClickDetector(() => setShowToast(false));

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <Toast
        title="Your Response has been submitted"
        state={showToast}
        stateSetter={setShowToast}
        toastRef={toastRef}
      /> */}
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="">
          <section className="section-box">
            <div className="formWrapper">
              <header className="pop-head">
                <h2 className="text-center   mb-10px lh-1">
                  Join us!
                </h2>
                <h1 className="fs-55px weight-7 text-center  lh-1">
                  We are still in beta.Get 
                  <span className="red"> Early Access</span> by joining on our
                  waitlist.
                </h1>
              </header>
              <form>
                {/* onSubmit={sendEmail} ref={form} */}
                <input
                  type="text"
                  className="fs-26px white weight-3"
                  placeholder="Full Name :"
                  name="fullname"
                />
                <input
                  type="email"
                  className="fs-26px white weight-3"
                  placeholder="Email :"
                  name="email"
                />
                <label for="cars">Choose a option:</label>
                <select id="cars" name="cars">
                  <option value="volvo">Freelancer</option>
                  <option value="saab">Employer</option>
                  <option value="saab">Jobseeker</option>
                </select>

                <div className="btn-modal">
                  <button
                    type="submit"
                    className="fs-26px white weight-5 pointer"
                  >
                    Request early access
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Model;
