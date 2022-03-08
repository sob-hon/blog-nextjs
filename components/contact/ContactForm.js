import { useEffect, useRef, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/notification";

const ContactForm = () => {
  const emailRef = useRef();
  const messageRef = useRef();
  const nameRef = useRef();
  const [reqStatus, setReqStatus] = useState("");
  const [reqError, setReqError] = useState("");

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus(null);
        setReqError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  async function formSubmittedHandler(event) {
    event.preventDefault();

    setReqStatus("pending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          name: nameRef.current.value,
          message: messageRef.current.value,
        }),
        headers: { "Content-type": "application/json" },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Sth went wrong");
      }
      setReqStatus("success");
      emailRef.current.value = "";
      nameRef.current.value = "";
      messageRef.current.value = "";
    } catch (err) {
      setReqError(err.message);
      setReqStatus("error");
      return;
    }
  }

  let notification;

  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: reqError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={formSubmittedHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required ref={messageRef}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
