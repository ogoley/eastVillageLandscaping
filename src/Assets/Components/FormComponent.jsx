import React, { Component } from "react";

const post = async (data) => {

  const { url } = data;

  delete data.url;

  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": '*',
    },
  };

  const response = await fetch(url, params);
  if (response.status < 200 && response.status >= 300) {
    const res = await response.json();

    throw new Error(res);
  }
  return response.json();
};

class FormComponent extends Component {
  state = {
    error: null,
    submitted: false,
    fields: { name: "", email: "", message: "" },
  };

  submitForm(event) {
    event.preventDefault();
    console.log("mhm");
    const formElement = event.target;
    const { name, email, message } = formElement.elements;
    // build the request payload which includes the url of the end-point we want to hit
    const payload = {
      url: "http://localhost:5000/api/contact",
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log("here");
    // call the post helper function which returns a promise, which we can use to update the
    // state of our component once returned
    post(payload)
      .then((res) => {
        console.log(res);
        // on success, clear any errors and set submitted state to true
        this.setState({ ...this.state, error: null, submitted: true });
      })
      .catch((error) => {
        console.log(error);
        // on error, update error state with the error message and set submitted to false
        this.setState({ ...this.state, error: error.message, submitted: false });
      });
  }

  render() {
    return (
      <form ref={this.formElement} onSubmit={(event) => this.submitForm(event)}>
        <input type="text" name="text" id="name" />
        <input type="email" name="email" id="email" />
        <input type="text" name="message" id="message" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormComponent;
