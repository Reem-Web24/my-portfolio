// 1. بيانات المشاريع (تأكدي من وضع روابطك)
const projects = [
  {
    title: "صالون - الريم بيوتي",
    desc: "واجهة أمامية احترافية لصالون تجميل مع نظام عرض خدمات متطور.",
    tools: "HTML , CSS , JS",
    year: "موقع الكتروني",
    status: "✅ مكتمل",
    link: "https://reem-web24.github.io/my-salon-project/",
  },
  {
    title: "متجر - سيما",
    desc: "تصميم متجر إلكتروني عصري يركز على تجربة المستخدم وسهولة التصفح.",
    tools: " JS , React / Next.js",
    year: "متجر الكتروني ",
    status: "✅ مكتمل",
    link: "https://melodious-axolotl-b07106.netlify.app/",
  },
  {
    title: "مشروع مستقبلي (جديد)",
    desc: "منصة ويب متطورة يتم بناؤها حالياً باستخدام أحدث التقنيات.",
    tools: "React / Next.js",
    year: "موقع الكتروني",
    status: "⏳ تحت التنفيذ",
    link: "#",
  },
];

// 2. دالة عرض المشاريع مع تأثير الظهور (Staggered Animation)
function displayProjects() {
  const container = document.getElementById("my-profileid");
  container.innerHTML = `<h2 class="section-title" style="width:100%">أهم أعمالي</h2>`;

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "Card project-card";
    card.setAttribute("data-aos", "fade-up");
    card.style.transitionDelay = `${index * 0.2}s`; // ظهور متتابع

    card.innerHTML = `
            <div class="card-content">
                <span class="project-year">${project.year}</span>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <div class="project-info">
                    <span>${project.tools}</span>
                    <small>${project.status}</small>
                </div>
              <a href="${project.link}" class="project-arrow" target="_blank">
            <i class="fas fa-arrow-left"></i>
        </a>
            </div>
        `;
    container.appendChild(card);
  });
}

// 3. تأثير الكتابة الآلية (Typewriter) في قسم الـ Hero
function initTypewriter() {
  const textElement = document.querySelector(".hero-desc");
  const text = textElement.innerText;
  textElement.innerText = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }
  type();
}

// 4. تأثير حركة العناصر مع الماوس (Parallax)
function initHeroParallax() {
  const heroImage = document.querySelector(".modern-image-frame");
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    heroImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// 5. مراقب التمرير لإظهار العناصر بنعومة (Intersection Observer)
function initScrollReveal() {
  const options = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // إذا كانت بطاقة مشروع، نعطيها تأثير ميلان خفيف
        if (entry.target.classList.contains("project-card")) {
          entry.target.style.transform = "translateY(0) scale(1)";
        }
      }
    });
  }, options);

  document
    .querySelectorAll("section, .project-card, .skill-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
      observer.observe(el);
    });
}

// 6. تشغيل كل الوظائف عند التحميل
document.addEventListener("DOMContentLoaded", () => {
  displayProjects();
  initTypewriter();
  initHeroParallax();
  initScrollReveal();

  // كلاس بسيط لإدارة الظهور
  const style = document.createElement("style");
  style.innerHTML = `.is-visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});
