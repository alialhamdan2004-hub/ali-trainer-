/*
  ==========================================================================
  ملف البرمجة (main.js)
  ==========================================================================
  هذا الملف يقرأ المحتوى من config.js ويعرضه داخل index.html تلقائياً.
  عادةً لا تحتاج تعدّل هذا الملف أبداً — كل تعديلات النصوص تكون في config.js
  ==========================================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  const c = SITE_CONTENT;

  // ---------- 1) بيانات عامة (عنوان التبويب والوصف) ----------
  document.title = c.meta.siteTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", c.meta.siteDescription);

  // ---------- 2) قسم البداية (Hero) ----------
  document.getElementById("nav-brand").textContent = c.hero.name;
  document.getElementById("hero-name").textContent = c.hero.name;
  document.getElementById("hero-title").textContent = c.hero.title;
  document.getElementById("hero-subtitle").textContent = c.hero.subtitle;
  document.getElementById("hero-quote").textContent = `« ${c.hero.quote} »`;
  document.getElementById("hero-cta-text").textContent = c.hero.ctaText;
  document.getElementById("hero-cta").href = c.social.instagramUrl;
  document.getElementById("hero-image").src = c.hero.profileImage;
  document.getElementById("hero-image").alt = c.hero.name;

  // ---------- 3) قسم "من أنا" ----------
  document.getElementById("about-heading").textContent = c.about.heading;
  const aboutParagraphs = document.getElementById("about-paragraphs");
  aboutParagraphs.innerHTML = c.about.paragraphs.map(p => `<p>${p}</p>`).join("");

  const aboutHighlights = document.getElementById("about-highlights");
  aboutHighlights.innerHTML = c.about.highlights.map(h => `
    <div class="highlight-card">
      <h4>${h.title}</h4>
      <p>${h.text}</p>
    </div>
  `).join("");

  // ---------- 4) قسم "خدماتي" ----------
  document.getElementById("services-heading").textContent = c.services.heading;
  document.getElementById("services-subheading").textContent = c.services.subheading;
  const servicesList = document.getElementById("services-list");
  servicesList.innerHTML = c.services.items.map(s => `
    <div class="service-card">
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>
  `).join("");

  // ---------- 5) قسم "الشهادات والاعتمادات" ----------
  document.getElementById("certifications-heading").textContent = c.certifications.heading;
  document.getElementById("certifications-subheading").textContent = c.certifications.subheading;
  const certList = document.getElementById("certifications-list");
  certList.innerHTML = c.certifications.items.map(cert => `
    <div class="cert-card">
      <img src="${cert.image}" alt="${cert.title}" />
      <div>
        <h3>${cert.title}</h3>
        <p class="cert-subtitle">${cert.subtitle}</p>
        <p class="cert-meta">${cert.place} — ${cert.year}</p>
      </div>
    </div>
  `).join("");

  // ---------- 6) قسم "تواصل معي" ----------
  document.getElementById("contact-heading").textContent = c.contact.heading;
  document.getElementById("contact-text").textContent = c.contact.text;
  document.getElementById("contact-cta-text").textContent = c.contact.ctaText;
  document.getElementById("contact-cta").href = c.social.instagramUrl;
  document.getElementById("contact-tiktok").href = c.social.tiktokUrl;
  document.getElementById("contact-tiktok-text").textContent = `تيك توك @${c.social.tiktokHandle}`;

  // رقم الجوال يظهر فقط إذا تمت تعبئته في config.js
  if (c.social.phoneNumber && c.social.phoneNumber.trim() !== "") {
    const phoneEl = document.getElementById("contact-phone");
    phoneEl.textContent = `أو تواصل عبر الجوال: ${c.social.phoneNumber}`;
    phoneEl.hidden = false;
  }

  // ---------- 7) الفوتر ----------
  document.getElementById("footer-name").textContent = c.hero.name;
  document.getElementById("footer-text").textContent = c.footer.text;

  // ---------- 8) قائمة الجوال (فتح/إغلاق) ----------
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
});
