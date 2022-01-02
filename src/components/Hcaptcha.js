import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState, useEffect, useRef } from "react";

// server secret: 0xd2cb07AD8317440cfDA5D153E8aC67A6997A996C
// backend 구현 : https://docs.hcaptcha.com/#verify-the-user-response-server-side

function Hcaptcha({ setToken }) {
  // const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    // captchaRef.current.execute();
  };

  // useEffect(() => {
  //   if (token) console.log(`hCaptcha Token: ${token}`);
  // }, [token]);

  return (
    <>
      {console.log(
        "human captcah rendered@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      )}
      <HCaptcha
        sitekey="0bb63afd-a4b9-44a1-af1d-38223973f119"
        onLoad={onLoad}
        onVerify={setToken}
        ref={captchaRef}
        theme="dark"
        size="normal"
      />
    </>
  );
}

export default Hcaptcha;
