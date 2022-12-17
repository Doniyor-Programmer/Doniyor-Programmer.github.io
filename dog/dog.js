const img = document.querySelector("img");
const tryIt = document.querySelector(".try");
const a = document.querySelector("a");

let counter = 1;

getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

function useEffect() {
  getResource("https://dog.ceo/api/breeds/image/random").then(data => {
    const url = data.message;

    img.src = url;
    a.href = url;
    a.download = `dog-${counter++}.jpg`;
  });
}

useEffect();

tryIt.addEventListener("click", useEffect);
