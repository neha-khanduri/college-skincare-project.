let selectedTime = '';
let selectedSkin = '';

function selectTime(time) {
  selectedTime = time;
  checkSelections();
}

function selectSkinType(skinType) {
  selectedSkin = skinType;
  checkSelections();
}

function checkSelections() {
  if (selectedTime && selectedSkin) {
    showRoutine(selectedTime, selectedSkin);
  }
}

function showRoutine(time, skinType) {
  const routineOutput = document.getElementById("routine-output");
  routineOutput.innerHTML = "";

  const steps = [
    { step: "Cleanser", img: "https://www.shutterstock.com/image-photo/facial-skin-care-skincare-bottle-260nw-2206671107.jpg" },
    { step: "Toner", img: "https://img.freepik.com/premium-photo/glossy-mockup-toner-bottle-pink-with-metallic-cap-romantic-skincare-packaging_1298259-3368.jpg" },
    { step: "Serum", img: "https://www.shutterstock.com/image-photo/clean-glass-cosmetic-bottles-dropper-260nw-2113066907.jpg" },
    { step: "Moisturizer", img: "https://media.istockphoto.com/id/172229249/photo/moisturizer-closeup.jpg?s=612x612&w=0&k=20&c=HZGuoJ770TW2JheqG7ec89fflTytQLtEEvQE8NYloKQ=" },
    { step: time === "day" ? "Sunscreen" : "Night Cream", img: time === "day" ? "https://i.pinimg.com/474x/19/f7/21/19f7219e67e8c02e50de2335ff2f6e44.jpg" : "https://www.naturalvibes.in/cdn/shop/products/3_83b53a61-1c1a-4a86-bdc1-b92dbdcbba35_1080x.png?v=1631165299" }
  ];

  steps.forEach(item => {
    const div = document.createElement("div");
    div.className = "routine-step";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.step}">
      <h3>${item.step}</h3>
    `;
    routineOutput.appendChild(div);
  });
}
