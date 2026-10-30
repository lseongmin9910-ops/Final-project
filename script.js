const productCards = document.querySelectorAll(".product-card");

const modal = document.querySelector("#product-modal");
const modalImage = document.querySelector("#modal-image");
const modalName = document.querySelector("#modal-name");
const modalPrice = document.querySelector("#modal-price");
const closeModal = document.querySelector("#close-modal");

// 상품 상세 팝업 기능
if (modal && closeModal) {
  // 상품 카드 클릭
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      openProductModal(card);
    });
  });

  // 닫기 버튼 클릭
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 팝업 바깥 클릭
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // 상품별 정보
  const products = {
    botanical: {
      price: "₩89,000",
      description:
        "싱그러운 초록 잎사귀와 촉촉한 자연의 향을 담았습니다. 베르가못의 산뜻한 첫 향을 시작으로 무화과의 부드러운 향이 이어지며, 머스크가 은은하게 남아 편안하고 깨끗한 분위기를 완성합니다.",
      top: "TOP · Bergamot",
      middle: "MIDDLE · Fig",
      base: "BASE · Musk",
    },

    woodland: {
      price: "₩95,000",
      description:
        "깊은 숲속의 고요함과 나무의 따뜻한 향을 담았습니다. 시더우드의 차분한 향이 시작되고 샌달우드의 부드러움이 이어지며, 베티버가 묵직한 여운을 남깁니다.",
      top: "TOP · Cedar",
      middle: "MIDDLE · Sandalwood",
      base: "BASE · Vetiver",
    },

    bloom: {
      price: "₩79,000",
      description:
        "햇살 아래 피어난 꽃처럼 화사하고 부드러운 향을 담았습니다. 달콤한 피오니 향으로 시작해 로즈의 우아함이 이어지고, 화이트 머스크가 포근하게 마무리합니다.",
      top: "TOP · Peony",
      middle: "MIDDLE · Rose",
      base: "BASE · White Musk",
    },

    citrus: {
      price: "₩82,000",
      description:
        "싱그러운 과일의 생기와 맑은 바람의 느낌을 담았습니다. 레몬의 상큼함으로 시작해 자몽의 산뜻함이 이어지며, 네롤리가 깨끗하고 밝은 분위기를 완성합니다.",
      top: "TOP · Lemon",
      middle: "MIDDLE · Grapefruit",
      base: "BASE · Neroli",
    },

    moss: {
      price: "₩91,000",
      description:
        "비가 내린 뒤 숲속에 남은 촉촉한 이끼의 향을 표현했습니다. 그린 노트의 싱그러움으로 시작해 오크모스의 깊은 향이 이어지며, 앰버가 은은한 따뜻함을 더합니다.",
      top: "TOP · Green Notes",
      middle: "MIDDLE · Oakmoss",
      base: "BASE · Amber",
    },

    amber: {
      price: "₩98,000",
      description:
        "따뜻한 햇살과 부드러운 달콤함이 어우러진 향입니다. 바닐라의 포근한 향으로 시작해 통카빈의 달콤함이 이어지고, 앰버가 깊고 풍성한 여운을 남깁니다.",
      top: "TOP · Vanilla",
      middle: "MIDDLE · Tonka Bean",
      base: "BASE · Amber",
    },

    petal: {
      price: "₩85,000",
      description:
        "꽃잎에 맺힌 이슬처럼 섬세하고 맑은 향을 담았습니다. 배의 은은한 달콤함으로 시작해 자스민의 우아한 향이 이어지며, 머스크가 부드럽게 감싸줍니다.",
      top: "TOP · Pear",
      middle: "MIDDLE · Jasmine",
      base: "BASE · Musk",
    },

    cedar: {
      price: "₩93,000",
      description:
        "차분하고 단단한 나무의 향에서 영감을 얻었습니다. 베르가못의 산뜻함으로 시작해 시더우드의 깊은 향이 이어지며, 파촐리가 묵직하고 세련된 분위기를 완성합니다.",
      top: "TOP · Bergamot",
      middle: "MIDDLE · Cedarwood",
      base: "BASE · Patchouli",
    },
  };

  // 팝업 열기
  function openProductModal(card) {
    const image = card.querySelector("img");
    const product = products[card.id];

    if (!product) return;

    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalName.textContent = card.querySelector("h2").textContent;

    modalPrice.textContent = product.price;
    document.querySelector("#modal-description").textContent =
      product.description;
    document.querySelector("#modal-top").textContent = product.top;
    document.querySelector("#modal-middle").textContent = product.middle;
    document.querySelector("#modal-base").textContent = product.base;

    modal.style.display = "flex";
  }
}

// guidebook.html

const scentButtons = document.querySelectorAll(".scent-btn");

const scentRecommendations = {
  fresh: ["citrus", "botanical", "moss"],
  woody: ["woodland", "cedar"],
  floral: ["bloom", "petal"],
  sweet: ["amber"],
};

scentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const scent = button.dataset.scent;
    const productIds = scentRecommendations[scent];

    const productList = productIds.join(",");

    window.location.href = `products.html?recommend=${productList}`;
  });
});

const params = new URLSearchParams(window.location.search);
const recommend = params.get("recommend");

if (recommend) {
  const recommendedIds = recommend.split(",");

  productCards.forEach((card) => {
    if (!recommendedIds.includes(card.id)) {
      card.style.display = "none";
    }
  });
}
