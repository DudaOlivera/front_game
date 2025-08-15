/* =========================================================
   Traduções principais
========================================================= */
const translations = {
  en: {
    title: "Eternal Sin Remastered - Lineage 2",
    home: "Home",
    server: "Server",
    donate: "Donate",
    store: "Store",
    discord: "Discord",
    login: "Login",
    welcome: "Welcome to Eternal Sin Remastered",
    description: "Unique server with nostalgic gameplay and absolute balance.",
    createAccount: "Create Account",
    download: "Download",
    aboutTitle: "About the Server",
    aboutText: "Interlude server with progressive system, anti-pay-to-win and high stability.",
    chronicleLabel: "Chronicle:",
    chronicleValue: "Interlude",
    ratesLabel: "Rates:",
    ratesValue: "XP x10 / SP x10 / Adena x5",
    securityLabel: "Security:",
    securityValue: "Anti-bot and anti-DDOS protection",
    locationLabel: "Location:",
    locationValue: "Server in Brazil (low ping)",
    eventsLabel: "Events:",
    eventsValue: "Weekly and monthly events with exclusive rewards",
    communityLabel: "Community:",
    communityValue: "Active and moderated",
    donationTitle: "Donation Panel",
    donationText: "Support the server and receive coins to spend in the store!",
    bronze: "Bronze",
    bronzeValue: "$10 = 100 Coins",
    silver: "Silver",
    silverValue: "$30 = 350 Coins",
    gold: "Gold",
    goldValue: "$50 = 600 Coins",
    donateBtn: "Donate",
    storeTitle: "Server Store",
    storeText: "Spend your Eternal Coins in style!",
    cloakName: "Flaming Cloak",
    cloakPrice: "200 Coins",
    armorName: "Golden Armor",
    armorPrice: "350 Coins",
    mountName: "Shadow Mount",
    mountPrice: "500 Coins",
    helmetName: "Dragon Helmet",
    helmetPrice: "150 Coins",
    buyBtn: "Buy",
    important: "IMPORTANT",
    supportService: "Support Service",
    useful: "USEFUL",
    interesting: "INTERESTING",
    language: "LANGUAGE"
  },
  pt: {
    title: "Eternal Sin Remastered - Lineage 2",
    home: "Início",
    server: "Servidor",
    donate: "Doações",
    store: "Loja",
    discord: "Discord",
    login: "Entrar",
    welcome: "Bem-vindo ao Eternal Sin Remastered",
    description: "Servidor único com jogabilidade nostálgica e equilíbrio absoluto.",
    createAccount: "Criar Conta",
    download: "Baixar",
    aboutTitle: "Sobre o Servidor",
    aboutText: "Servidor Interlude com sistema progressivo, anti-pay-to-win e alta estabilidade.",
    chronicleLabel: "Crônica:",
    chronicleValue: "Interlude",
    ratesLabel: "Rates:",
    ratesValue: "XP x10 / SP x10 / Adena x5",
    securityLabel: "Segurança:",
    securityValue: "Proteção anti-bot e anti-DDOS",
    locationLabel: "Localização:",
    locationValue: "Servidor no Brasil (baixa latência)",
    eventsLabel: "Eventos:",
    eventsValue: "Eventos semanais e mensais com recompensas exclusivas",
    communityLabel: "Comunidade:",
    communityValue: "Ativa e moderada",
    donationTitle: "Painel de Doações",
    donationText: "Apoie o servidor e receba moedas para gastar na loja!",
    bronze: "Bronze",
    bronzeValue: "R$50 = 100 Moedas",
    silver: "Prata",
    silverValue: "R$150 = 350 Moedas",
    gold: "Ouro",
    goldValue: "R$250 = 600 Moedas",
    donateBtn: "Doar",
    storeTitle: "Loja do Servidor",
    storeText: "Gaste suas Moedas Eternas com estilo!",
    cloakName: "Capa Flamejante",
    cloakPrice: "200 Moedas",
    armorName: "Armadura Dourada",
    armorPrice: "350 Moedas",
    mountName: "Montaria Sombria",
    mountPrice: "500 Moedas",
    helmetName: "Elmo do Dragão",
    helmetPrice: "150 Moedas",
    buyBtn: "Comprar",
    important: "IMPORTANTE",
    supportService: "Serviço de Suporte",
    useful: "ÚTIL",
    interesting: "INTERESSANTE",
    language: "IDIOMA"
  }
};

/* =========================================================
   Traduções extras (sistema de pagamentos)
========================================================= */
const i18nExtra = {
  en: {
    tabPix: "Pix",
    tabCard: "Card",
    tabPaypal: "PayPal",
    bestValue: "Best value",
    customAmount: "Custom amount (BRL)",
    coupon: "Coupon",
    donationObs: "Coins are delivered automatically after payment approval.",
    paymentTitle: "Complete your payment",
    pixInstr: "Open your bank app and pay using the QR code or copy & paste the Pix code below.",
    copy: "Copy",
    copied: "Copied!",
    waitingApproval: "Waiting for approval...",
    approved: "Payment approved! Coins credited.",
    failed: "Payment failed or canceled.",
    openCheckout: "Open checkout",
  },
  pt: {
    tabPix: "Pix",
    tabCard: "Cartão",
    tabPaypal: "PayPal",
    bestValue: "Melhor oferta",
    customAmount: "Valor customizado (BRL)",
    coupon: "Cupom",
    donationObs: "As moedas são entregues automaticamente após a aprovação do pagamento.",
    paymentTitle: "Conclua seu pagamento",
    pixInstr: "Abra o app do seu banco e pague usando o QR code ou copie o código Pix abaixo.",
    copy: "Copiar",
    copied: "Copiado!",
    waitingApproval: "Aguardando aprovação...",
    approved: "Pagamento aprovado! Coins creditadas.",
    failed: "Pagamento falhou ou foi cancelado.",
    openCheckout: "Abrir checkout",
  }
};

/* =========================================================
   Controle de abas de método de pagamento
========================================================= */
const methodState = { current: "pix" };
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    methodState.current = btn.dataset.tab;
  });
});

/* =========================================================
   Clique nos pacotes de doação
========================================================= */
function bindDonateButtons() {
  document.querySelectorAll(".donate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".pacote");
      const amountBRL = Number(card.dataset.valor);
      const coins = Number(card.dataset.coins);
      startCheckout({ amountBRL, coins, custom: false });
    });
  });
}
bindDonateButtons();

/* =========================================================
   Doação com valor customizado
========================================================= */
document.getElementById("customDonateBtn")?.addEventListener("click", () => {
  const v = Number(document.getElementById("customAmount").value);
  if (!v || v < 5) {
    alert("Valor mínimo: R$ 5");
    return;
  }
  startCheckout({ amountBRL: v, coins: Math.floor(v * 10), custom: true });
});

/* =========================================================
   Modal de pagamento
========================================================= */
const payModal = document.getElementById("payModal");
const closeModal = document.getElementById("closeModal");
closeModal?.addEventListener("click", () => {
  payModal.classList.remove("show");
  payModal.setAttribute("aria-hidden", "true");
});

function showModal(html) {
  document.getElementById("modalBody").innerHTML = html;
  document.getElementById("statusText").textContent = "";
  payModal.classList.add("show");
  payModal.setAttribute("aria-hidden", "false");
}

/* =========================================================
   Fluxo de checkout
========================================================= */
async function startCheckout({ amountBRL, coins, custom }) {
  const coupon = (document.getElementById("couponCode")?.value || "").trim();
  const method = methodState.current;

  try {
    const res = await fetch("/api/donations/create-preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amountBRL,
        coins,
        method,
        couponCode: coupon || null,
        user: window.currentUser || { id: "guest", email: "guest@example.com" },
        lang: (document.getElementById("langSelect")?.value || "pt")
      })
    });

    if (!res.ok) throw new Error("Falha ao criar preferência");
    const data = await res.json();

    if (method === "pix") {
      showModal(`
        <div class="pay-instructions" data-translate="pixInstr">${t("pixInstr")}</div>
        <div class="qr">
          <img src="${data.qr_base64}" alt="QR Pix" />
        </div>
        <div class="copyline">
          <input id="pixcopy" type="text" readonly value="${data.pix_copia_cola}" />
          <button id="copyPix">${t("copy")}</button>
        </div>
      `);
      document.getElementById("copyPix")?.addEventListener("click", () => {
        const inp = document.getElementById("pixcopy");
        inp.select();
        inp.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.getElementById("copyPix").textContent = t("copied");
      });
      pollStatus(data.payment_id);

    } else if (method === "card" || method === "paypal") {
      showModal(`<a class="btn" href="${data.checkout_url}" target="_blank">${t("openCheckout")}</a>`);
      pollStatus(data.payment_id);
    }
  } catch (err) {
    alert("Erro ao iniciar o pagamento. Tente novamente.");
    console.error(err);
  }
}

/* =========================================================
   Polling de status de pagamento
========================================================= */
let pollTimer = null;
function pollStatus(paymentId) {
  const st = document.getElementById("statusText");
  st.textContent = t("waitingApproval");

  clearInterval(pollTimer);
  pollTimer = setInterval(async () => {
    try {
      const r = await fetch(`/api/donations/status/${paymentId}`);
      if (!r.ok) return;
      const s = await r.json();
      if (s.status === "approved") {
        st.textContent = t("approved");
        clearInterval(pollTimer);
      } else if (s.status === "rejected" || s.status === "cancelled") {
        st.textContent = t("failed");
        clearInterval(pollTimer);
      }
    } catch (_) {}
  }, 3500);
}

/* =========================================================
   Função de tradução extra
========================================================= */
function t(key) {
  const lang = (document.getElementById("langSelect")?.value || "pt");
  return (i18nExtra[lang] && i18nExtra[lang][key]) || key;
}

/* =========================================================
   Função unificada de troca de idioma
========================================================= */
function setLanguage(lang) {
  // muda textos principais
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
    if (i18nExtra[lang] && i18nExtra[lang][key]) {
      el.textContent = i18nExtra[lang][key];
    }
  });

  // sincroniza select do footer
  const footerSelect = document.getElementById("langSelect");
  if (footerSelect) footerSelect.value = lang;
}

/* =========================================================
   Eventos de troca de idioma
========================================================= */
document.getElementById("langSelect")?.addEventListener("change", function() {
  setLanguage(this.value);
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
  });
});

// idioma inicial
setLanguage("en");
