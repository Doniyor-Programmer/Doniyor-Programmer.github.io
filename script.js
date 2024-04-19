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

const parent = document.querySelector("[data-ac]");
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const link = document.createElement("a");
      link.classList.add("ac");
      link.href = item.href;
      link.target = "_blank";
      link.textContent = item.text;

      if (item?.self) {
        link.target = "_self";
      }
      if (item?.title) {
        link.title = item?.title;
      }
      parent.append(link);
    });
  })
  .then(() => {
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
  });