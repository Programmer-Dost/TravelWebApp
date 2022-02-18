import React, { useState } from "react";
import emailjs from "emailjs-com";
function Contact() {
  // const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [pickup_address, setPickup_address] = useState("");
  const [delivery_address, setDelivery_address] = useState("");
  const [qrcode, setQrcode] = useState("");
  function Send(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yr7viuq",
        "template_ovwvdlv",
        e.target,
        "user_wCZAHstXNLpRrvKFsnxVH"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    // setEmail("");
    setName("");
    setMobile_number("");
    setPickup_address("");
    setDelivery_address("");
    setQrcode("");

    alert("Form has been submitted");
  }
  return (
    <div
      className="container border"
      style={{
        marginTop: "10px",
        width: "100%",
        display: "flex",
        background: "transparent",
        fontWeight: "bold",
        backdropFilter: "saturate(180%) blur(20px)",
        padding: "1rem",
      }}
    >
      <form onSubmit={Send}>
        <div class="form-group">
          <label for="exampleInputName1">Name</label>
          <input
            name="name"
            type="name"
            class="form-control"
            value={name}
            id="exampleInputName1"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            name="number"
            value={mobile_number}
            aria-describedby="numberHelp"
            placeholder="Phone Number"
            onChange={(e) => setMobile_number(e.target.value)}
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
            style={{ fontWeight: "bold" }}
          >
            We'll never share your number with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputMobileNumber1">Pickup Address</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputNumber1"
            placeholder="Pickup Address"
            name="Pickup_Address"
            value={pickup_address}
            onChange={(e) => setPickup_address(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputMobileNumber1">Drop Address</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputNumber1"
            placeholder="Drop Address"
            name="Delivery_Address"
            value={delivery_address}
            onChange={(e) => setDelivery_address(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputMobileNumber1">QR Number</label>
          <input
            type="Number"
            class="form-control"
            id="exampleInputNumber1"
            placeholder="QR Number"
            name="QR_Number"
            value={qrcode}
            onChange={(e) => setQrcode(e.target.value)}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label
            class="form-check-label"
            for="exampleCheck1"
            style={{ color: "whitesmoke" }}
          >
            Ready?
          </label>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style={{ backgroundColor: "black", marginTop: "1rem" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
