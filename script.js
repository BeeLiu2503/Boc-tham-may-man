function bocTham() {
    const phieu = {
        1: { text: "Vòng cổ", img: "https://i.imgur.com/ABC123.png" },
        2: { text: "Gương", img: "https://i.imgur.com/DEF456.png" },
        3: { text: "Túi sách", img: "https://i.imgur.com/GHI789.png" },
        4: { text: "Kẹo", img: "https://i.imgur.com/JKL012.png" },
        5: { text: "Chúc bé may mắn lần sau!", img: "https://i.imgur.com/MNO345.png" }
    };

    let soNgauNhien = Math.floor(Math.random() * 5) + 1;
    let ketQuaDiv = document.getElementById("ketQua");

    ketQuaDiv.innerHTML = `<p>Bạn nhận được: ${phieu[soNgauNhien].text}</p>
                           <img src="${phieu[soNgauNhien].img}" alt="${phieu[soNgauNhien].text}">`;

    ketQuaDiv.style.transform = "scale(1.2)";
    setTimeout(() => {
        ketQuaDiv.style.transform = "scale(1)";
    }, 500);
}