import React from "react";
import { useState, useEffect, useRef } from "react";
import { createTOTP, countdown } from "totp-auth";
import { Icon } from "@iconify/react";

export default function () {
  const errMsg = "invalid key";
  const [totp, setTotp] = useState("");
  const [timer, setTimer] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timer | null>(null);
  const [eye, setEye] = useState("iconoir:eye-close");

  useEffect(() => {
    const val = inputRef.current?.value;
    if (val && timer) {
      timerRef.current = setTimeout(() => {
        const cnt = countdown();
        if (cnt >= timer) setTotp(createTOTP(val));
        setTimer(cnt);
      }, 1000);
    }
  }, [timer]);

  function reset(prompt = "") {
    setTotp(prompt);
    timerRef.current && clearTimeout(timerRef.current);
    setTimer(0);
  }

  function toggleEye() {
    if (eye == "iconoir:eye-alt") {
      inputRef.current!.type = "password";
      setEye("iconoir:eye-close");
    } else {
      inputRef.current!.type = "text";
      setEye("iconoir:eye-alt");
    }
  }

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.replace(/\s/g, "");
    if (!val) return reset();

    const malicious = /[&<=>();"'{}\\]/.test(val);
    if (malicious) return reset(errMsg);

    const psd = createTOTP(val);
    if (isNaN(+psd)) {
      reset(errMsg);
    } else {
      setTotp(psd);
      setTimer(countdown());
    }
  };

  return (
    <div data-theme="cupcake" className="form-control p-4 pb-2 w-72">
      <label className="label select-text">
        <span className="label-text-alt h-4 align-middle text-opacity-60">
          mini authenticator
        </span>
      </label>
      <input
        type="password"
        placeholder="secret key here"
        className="input input-sm input-bordered bg-white"
        onChange={onChange}
        ref={inputRef}
      />
      <Icon
        icon={eye}
        onClick={toggleEye}
        className="relative left-56 bottom-6 bg-white w-4 h-4 rounded-full hover:cursor-pointer"
      />
      <label className="label h-10 align-middle -mt-2">
        <span
          className={`text-base select-text ${
            isNaN(+totp) ? "text-warning" : "text-primary-focus"
          }`}
        >
          {totp}
        </span>
        <span className="label-text-alt text-opacity-60">
          expire: <span className="w-4 text-right inline-block">{timer}</span>s
        </span>
      </label>
    </div>
  );
}
