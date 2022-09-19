const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const img = document.querySelector("#img");

submit.addEventListener("click", () => {
  const data = input.value;

  fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${data}`).then(
    (response) => {
      img.setAttribute("src", response.url);
      img.style.display = "block";
    }
  );
});
