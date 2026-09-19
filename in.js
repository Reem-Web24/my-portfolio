// 1. بيانات المشاريع وتوجيه المشاريع الخاصة لصفحة تفاصيل
const projects = [
  {
    title: "متجر - سيما",
    desc: "تصميم وتطوير متجر إلكتروني عصري ومتكامل يركز على تجربة المستخدم وسهولة التصفح. يتضمن المتجر نظاماً آمناً لتسجيل الدخول وإنشاء الحسابات للعملاء،",
    tools: "JS, React / Next.js",
    year: "متجر الكتروني",
    status: "2026",
    link: "https://melodious-axolotl-b07106.netlify.app/",
    isPrivate: false,
  },
  {
    title: "نظام إدارة الحضور والباركود",
    desc: "نظام متكامل لإدارة الفعاليات والضيوف عبر الـ QR Code.",
    tools: "Node.js, MERN Stack, QR Code",
    year: "مشروع عميل خاص",
    status: "2026",
    isPrivate: true,
    link: "project-details.html?project=barcode-client",
    alertText:
      "تنبيه: هذا المشروع خاص لعميل، لذا لا يمكن وضع رابط المعاينة المباشر، ولكن يمكنك الاطلاع على شرح النظام والصور في الداخل.",
  },
  {
    title: "منصة شعاع الأمل",
    desc: "منصة ويب متكاملة (Full-Stack) لدعم الصحة النفسية، تشمل مذكرات يومية، مقاطع صوتية ومرئية، ونظام تسجيل دخول وقواعد بيانات لإدارة الحسابات والأخصائيين.",
    tools: "JS, PHP, SQL",
    year: "مشروع التخرج (Full-Stack)",
    status: "2025",
    link: "https://roh.site.je",
    isPrivate: false,
  },

  {
    title: "صالون - الريم بيوتي",
    desc: "واجهة أمامية احترافية لتطبيق أو موقع صالون تجميل، مصممة بعناية فائقة لتعكس الهوية الأنيقة للصالون. يتضمن المشروع نظاماً متطوراً لعرض الخدمات والأسعار",
    tools: "HTML, CSS, JS",
    year: "موقع الكتروني",
    status: "2025",
    link: "https://reem-web24.github.io/my-salon-project/",
    isPrivate: false,
  },

  {
    title: "نظام إدارة الفعاليات والباركود (التدريبي)",
    desc: "نظام الكتروني متكامل تم تطويره اثناء تدريبي لدى جمعيه المعالي ويهدف الى عمليه تسجيل الحضور للفعاليات عبر مسح الباركود ",
    tools: "JavaScript, Database, CSS",
    year: "مشروع تدريبي / تطبيقي",
    status: "2025",
    isPrivate: true,
    link: "",
    alertText:
      "تنبيه: مشروع تطبيقي خاص بفترة التدريب، يوضح كفاءة بناء أنظمة الباركود وإدارة البيانات مع شرح تفصيلي.",
  },
];

// 2. دالة عرض المشاريع مع زر يفتح صفحة التفاصيل
function displayProjects() {
  const container = document.getElementById("my-profileid");
  container.innerHTML = `<h2 class="section-title">أهم أعمالي</h2>`;

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "Card project-card";
    card.style.transitionDelay = `${index * 0.2}s`;

    let actionHTML = "";
    if (project.isPrivate) {
      actionHTML = `
        <div class="card-action">
          <a href="${project.link}" class="details-btn">
            عرض شرح النظام والصور <i class="fas fa-arrow-left"></i>
          </a>
        </div>
      `;
    } else {
      actionHTML = `
        <div class="card-action">
          <a href="${project.link}" class="project-arrow" target="_blank">
            <i class="fas fa-arrow-left"></i>
          </a>
        </div>
      `;
    }

    card.innerHTML = `
        <div class="card-content">
            <span class="project-year">${project.year}</span>
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="project-info">
                <span>${project.tools}</span>
                <small>${project.status}</small>
            </div>
            ${actionHTML}
        </div>
    `;
    // الضغط على البوكس يظهر/يخفي السهم أو الزر
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      card.classList.toggle("active");
    });

    container.appendChild(card);
  });
}

// الدوال المساعدة الأخرى (نفس السابقة)
function initTypewriter() {
  const textElement = document.querySelector(".hero-desc");
  if (!textElement) return;
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

function initScrollReveal() {
  const options = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
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

document.addEventListener("DOMContentLoaded", () => {
  displayProjects();
  initTypewriter();
  initHeroParallax();
  initScrollReveal();

  const style = document.createElement("style");
  style.innerHTML = `.is-visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});
