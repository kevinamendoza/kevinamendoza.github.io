function showPhone() {
  var phoneNumber = document.getElementById("myPhone")
  if (phoneNumber.style.display === "none") {
    phoneNumber.style.display = "block";
    document.getElementById("showPhoneButton").style.display = "none";
  }
}
