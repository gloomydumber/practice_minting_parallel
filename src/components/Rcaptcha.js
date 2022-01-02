import ReCAPTCHA from "react-google-recaptcha";
// import { useState, useEffect } from "react";

function Rcaptcha({ setToken }) {
  // const [verified, setVerified] = useState(false);
  // const onVerified = (value) => {
  //   console.log("recaptcha value:", value);
  //   // if (value) setVerified(true);
  //   // else setVerified(false);
  // };

  return (
    <>
      {console.log("google captcah rendered@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")}
      <ReCAPTCHA
        //   sitekey="10000000-ffff-ffff-ffff-000000000001"
        sitekey="6LfRQNYdAAAAABLcWdtQ7Y9GavWyK9NdLnBWDrur"
        onChange={setToken}
        theme="dark"
      />
    </>
  );
}

export default Rcaptcha;
