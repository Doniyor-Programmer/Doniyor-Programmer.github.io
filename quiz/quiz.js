let table = +prompt("Karra jadvalini nechadan boshlashimni xohlaysiz?", "");

for (let i = 1; i < 11; i++) {
    let pup = prompt(`${table} x ${i} = ? || bilmayman, keyingisi.`, "");
    if (pup.toLowerCase() == "bilmayman") {
        break;
    }
    if (pup.toLowerCase() == "keyingisi") {
        alert("Keyingi savol:");
        continue;
    }
    let res = table * i;
    if (parseInt(pup) == res) {
        alert("Barakalla!");
    } else {
        alert(`Noto'g'ri, javob: ${res}`);
    }
}

alert("Tugadi");