const rsvpForm = document.querySelector("#rsvp");
const nameInput = document.getElementById("name");
const allergyInput = document.getElementById("allergy");
const answer = document.querySelector("input[name=answer]:checked").value;

rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!nameInput.value || !allergyInput.value) {
    console.log("wrong");
  } else {
    if (answer === "yes") {
      console.log("Vi ses");
    } else {
      console.log("Ses väl inte då");
    }
    rsvpForm.reset();
  }
});
