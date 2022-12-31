function a(a) {
  let b = a.trim();
  return !b;
}

function $(selector) {
  const elem = document.querySelector(selector);
  return elem;
}

function $_(selector) {
  const elems = document.querySelectorAll(selector);
  return elems;
}

window.addEventListener("load", () => {
  $("main").style.display = "none";
}),
  window.addEventListener("DOMContentLoaded", () => {
    let d = $(".check"),
      e = $(".error_text"),
      f = $_(".reg"),
      b = $(".enter"),
      g = $(".circle"),
      h = $(".user"),
      skip = $(".skip");

    function doSmth() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      e.style.display = "none";
      $(".yes_sound").play();
      d.classList.add("check_active");
    }

    b.addEventListener("click", () => {
      f.forEach((j, f, b) => {
        let c = b[0].value.trim(),
          i = b[1].value.trim();

        if (("" == b[f].value || "200715" != b[2].value || a(b[f].value)) && "enough" != c.toLowerCase()) {
          $(".no_sound").play();
          e.textContent = "Invalid Password or Please fill the inputs";
        } else {
          doSmth();
          g.textContent = `${c.charAt(0)}${i.charAt(0)}`;
          h.textContent = `${c} ${i}`;
        }
      });
    });

    skip.addEventListener("click", () => {
      doSmth();
      g.textContent = `NS`;
      h.textContent = `Name Surname`;
    });

    let searchInput = $("#search"),
      ac = $_(".ac");

    searchInput.addEventListener("input", e => {
      const value = e.target.value.toLowerCase();
      ac.forEach(item => {
        const isVisible = item.textContent.toLowerCase().includes(value);
        if (!isVisible) {
          item.style.display = "none";
        } else {
          item.style.display = "";
        }
      });
    });

    let c = $("#scrollBtn");

    window.addEventListener("scroll", () => {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? (c.style.display = "block") : (c.style.display = "none");
    }),
      c.addEventListener("click", function () {
        (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
      });
  });
