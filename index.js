const kirimPesan = () => {
  var data = {
    service_id: "service_c5te1ge",
    template_id: "template_6sa0fz8",
    user_id: "R1n-THAfL2KuRRAz1",
    template_params: {
      to_name: "serududuy",
      from_name: document.getElementById("from_name").value,
      reply_to: document.getElementById("email").value,
      message: document.getElementById("message").value,
    },
  };
  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(
    (result) => {
      alert("Your mail is sent!");
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
};
