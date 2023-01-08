const mailAdress = document.getElementById("adress");

function handleCopy() {
  navigator.clipboard.writeText(mailAdress.innerText).then(
    () => {
      /* clipboard successfully set */
      alert("copied!");
    },
    () => {
      /* clipboard write failed */
      alert("copy failed");
    }
  );
}
mailAdress.addEventListener("click", handleCopy);
console.log(mailAdress.innerText);
