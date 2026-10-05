(function () {
  "use strict";

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  var form = document.getElementById("early-access-form");

  if (form) {
    var status = document.getElementById("form-status");
    var errorBox = document.getElementById("form-error");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements.namedItem("name");
      var shop = form.elements.namedItem("shop");
      var city = form.elements.namedItem("city");
      var contact = form.elements.namedItem("contact");

      var contactValue = contact.value.trim();
      var isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
      var isPhone = /^[0-9+\-\s()]{8,15}$/.test(contactValue);

      errorBox.classList.remove("visible");
      status.classList.remove("visible");

      if (!name.value.trim() || !shop.value.trim() || !city.value.trim() || !contactValue) {
        errorBox.textContent = "Please fill in all fields.";
        errorBox.classList.add("visible");
        return;
      }

      if (!isEmail && !isPhone) {
        errorBox.textContent = "Please enter a valid email address or phone number.";
        errorBox.classList.add("visible");
        return;
      }

      form.reset();
      status.classList.add("visible");
    });
  }
})();
