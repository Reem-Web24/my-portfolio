// 1. بيانات المشاريع (تأكدي من وضع روابطك)
const projects = [
  {
    title: "منصة شعاع الأمل ",
    desc: "منصة ويب متكاملة (Full-Stack) لدعم الصحة النفسية، تشمل مذكرات يومية، مقاطع صوتية ومرئية، ونظام تسجيل دخول وقواعد بيانات لإدارة الحسابات والأخصائيين.",
    tools: " JS, PHP, SQL",
    year: "مشروع التخرج (Full-Stack)",
    status: "2025",
    link: "https://roh.site.je",
  },
  {
    title: "متجر - سيما",
    desc: "تصميم وتطوير متجر إلكتروني عصري ومتكامل يركز على تجربة المستخدم وسهولة التصفح. يتضمن المتجر نظاماً آمناً لتسجيل الدخول وإنشاء الحسابات للعملاء،",
    tools: "JS, React / Next.js",
    year: "متجر الكتروني",
    status: "2026",
    link: "https://melodious-axolotl-b07106.netlify.app/",
  },
  {
    title: "صالون - الريم بيوتي",
    desc: "واجهة أمامية احترافية لتطبيق أو موقع صالون تجميل، مصممة بعناية فائقة لتعكس الهوية الأنيقة للصالون. يتضمن المشروع نظاماً متطوراً لعرض الخدمات والأسعار",
    tools: "HTML, CSS, JS",
    year: "موقع الكتروني",
    status: "2025",
    link: "https://reem-web24.github.io/my-salon-project/",
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
  if (heroImage) {
    document.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      heroImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
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
