// ==========================
// 🌐 Growiti Group - Main JS
// ==========================

// ✅ Mobile nav toggle & close on link click
document.addEventListener('DOMContentLoaded', function() {
  function setupToggle(buttonId, navId) {
    var btn = document.getElementById(buttonId);
    var nav = document.getElementById(navId);
    if (btn && nav) {
      btn.addEventListener('click', function() {
        // Toggle between open and closed
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
      });
    }
  }

  // Multiple navs support
  setupToggle('navToggle', 'mainNav');
  setupToggle('navToggle2', 'mainNav2');
  setupToggle('navToggle3', 'mainNav3');
  setupToggle('navToggle4', 'mainNav4');
  setupToggle('navToggle5', 'mainNav5');
  setupToggle('navToggle6', 'mainNav6');

  // ✅ Close nav when any link inside is clicked
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      const mainNav = document.getElementById('mainNav');
      if (mainNav) {
        mainNav.style.display = 'none';
      }
    });
  });
});

// ✅ Simple contact form handling
function handleContact(e) {
  e.preventDefault();
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var msgEl = document.getElementById('formMsg');
  if (!name || !email) {
    msgEl.textContent = 'Please provide name and email.';
    msgEl.style.color = 'crimson';
    return false;
  }
  // Note: This is a front-end demo only.
  msgEl.style.color = 'green';
  msgEl.textContent = 'Thanks ' + name + '! Your message has been recorded (demo only).';
  document.getElementById('contactForm').reset();
  return false;
}

// ✅ Active page highlighting
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav a');
  const currentPage = window.location.pathname.split("/").pop() || 'index.html';

  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPage = link.getAttribute('href').split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});

// ✅ Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// 🌐 Translations dictionary
const translations = {
  en: {
    brand: "Growiti Group",
    home: "Home",
    about: "About",
    services: "Services",
    success: "Success Stories",
    blog: "Blog",
    contact: "Contact",
    aboutTitle: "About — Growiti Group",
    aboutHeading: "About Growiti Group",
    aboutIntro: "Growiti Group is a Hyderabad-based partnership firm committed to supporting companies through their growth journeys. Our mission is to empower companies by providing expert consulting and investment solutions that drive sustainable growth.",
    missionTitle: "🌟 Our Mission",
    missionText: "To empower companies in Hyderabad and beyond by providing expert consulting and investment solutions that fuel sustainable growth.",
    visionTitle: "🚀 Our Vision",
    visionText: "To be the most trusted growth and investment partner for emerging and established companies worldwide.",
    valuesTitle: "Our Values",
    valueIntegrity: "Integrity: We believe in transparent and ethical business practices.",
    valueInnovation: "Innovation: Encouraging creativity to solve modern business challenges.",
    valueImpact: "Impact: Ensuring measurable outcomes that truly make a difference.",
    teamTitle: "🤝 Our Team",
    teamIntro: "Our team consists of experienced consultants and industry professionals who are passionate about helping businesses succeed.",
    team1Name: "Ravi Kumar",
    team1Role: "Managing Partner",
    team2Name: "Priya Sharma",
    team2Role: "Growth Consultant",
    team3Name: "Arjun Patel",
    team3Role: "Investment Advisor",
    address: "Hyderabad, India",
    email: "Email: contact@growitigroup.com",
    privacy: "Privacy",
    contactFooter: "Contact"
  },
  te: {
    brand: "గ్రోవిటి గ్రూప్",
    home: "హోమ్",
    about: "గురించి",
    services: "సేవలు",
    success: "విజయ గాథలు",
    blog: "బ్లాగ్",
    contact: "సంప్రదించండి",
    aboutTitle: "గురించి — గ్రోవిటి గ్రూప్",
    aboutHeading: "గ్రోవిటి గ్రూప్ గురించి",
    aboutIntro: "గ్రోవిటి గ్రూప్ హైదరాబాదు కేంద్రంగా ఉన్న సంస్థ. కంపెనీల వృద్ధి ప్రయాణంలో మేము నిపుణుల సలహా మరియు పెట్టుబడి పరిష్కారాలు అందిస్తాము.",
    missionTitle: "🌟 మా లక్ష్యం",
    missionText: "హైదరాబాదు మరియు దాని అవతల ఉన్న కంపెనీలకు నిపుణుల సలహా మరియు పెట్టుబడి పరిష్కారాలతో స్థిరమైన వృద్ధి అందించడం.",
    visionTitle: "🚀 మా దృష్టి",
    visionText: "పెరుగుతున్న మరియు స్థిరపడిన కంపెనీలకు ప్రపంచవ్యాప్తంగా అత్యంత నమ్మదగిన వృద్ధి మరియు పెట్టుబడి భాగస్వామి కావడం.",
    valuesTitle: "మా విలువలు",
    valueIntegrity: "నిజాయితీ: మేము పారదర్శకమైన మరియు నైతిక వ్యాపార పద్ధతులను నమ్ముతాము.",
    valueInnovation: "ఆవిష్కరణ: ఆధునిక వ్యాపార సమస్యలను పరిష్కరించడానికి సృజనాత్మకతను ప్రోత్సహించడం.",
    valueImpact: "ప్రభావం: నిజంగా తేడా తీసుకువచ్చే కొలిచే ఫలితాలను నిర్ధారించడం.",
    teamTitle: "🤝 మా బృందం",
    teamIntro: "మా బృందం అనుభవజ్ఞులైన కన్సల్టెంట్లు మరియు పరిశ్రమ నిపుణులతో ఉంటుంది, వీరందరూ వ్యాపార విజయంపై ఆసక్తి కలిగి ఉన్నారు.",
    team1Name: "రవి కుమార్",
    team1Role: "మ్యానేజింగ్ పార్టనర్",
    team2Name: "ప్రియ శర్మ",
    team2Role: "వృద్ధి కన్సల్టెంట్",
    team3Name: "అర్జున్ పటేల్",
    team3Role: "పెట్టుబడి సలహాదారు",
    address: "హైదరాబాద్, ఇండియా",
    email: "ఇమెయిల్: contact@growitigroup.com",
    privacy: "గోప్యత",
    contactFooter: "సంప్రదించండి"
  },
  hi: {
    brand: "ग्रोविटी ग्रुप",
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएँ",
    success: "सफलता की कहानियाँ",
    blog: "ब्लॉग",
    contact: "संपर्क",
    aboutTitle: "हमारे बारे में — ग्रोविटी ग्रुप",
    aboutHeading: "ग्रोविटी ग्रुप के बारे में",
    aboutIntro: "ग्रोविटी ग्रुप हैदराबाद स्थित एक फर्म है जो कंपनियों की वृद्धि यात्रा में मदद करती है। हमारा मिशन विशेषज्ञ परामर्श और निवेश समाधान प्रदान करना है।",
    missionTitle: "🌟 हमारा मिशन",
    missionText: "हैदराबाद और अन्य जगहों पर कंपनियों को विशेषज्ञ परामर्श और निवेश समाधान के साथ स्थायी विकास प्रदान करना।",
    visionTitle: "🚀 हमारा विज़न",
    visionText: "उभरती और स्थापित कंपनियों के लिए दुनिया भर में सबसे भरोसेमंद विकास और निवेश भागीदार बनना।",
    valuesTitle: "हमारे मूल्य",
    valueIntegrity: "ईमानदारी: हम पारदर्शी और नैतिक व्यापार प्रथाओं में विश्वास करते हैं।",
    valueInnovation: "नवाचार: आधुनिक व्यावसायिक चुनौतियों को हल करने के लिए रचनात्मकता को प्रोत्साहित करना।",
    valueImpact: "प्रभाव: ऐसे परिणाम सुनिश्चित करना जो वास्तव में बदलाव लाते हैं।",
    teamTitle: "🤝 हमारी टीम",
    teamIntro: "हमारी टीम अनुभवी सलाहकारों और उद्योग विशेषज्ञों से बनी है, जो व्यवसायों की सफलता के लिए उत्साही हैं।",
    team1Name: "रवि कुमार",
    team1Role: "प्रबंध भागीदार",
    team2Name: "प्रिया शर्मा",
    team2Role: "विकास सलाहकार",
    team3Name: "अर्जुन पटेल",
    team3Role: "निवेश सलाहकार",
    address: "हैदराबाद, भारत",
    email: "ईमेल: contact@growitigroup.com",
    privacy: "गोपनीयता",
    contactFooter: "संपर्क"
  }
};

// ✅ Apply translations
function applyTranslations(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

// ✅ Language switcher listener
document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById("languageSwitcher");
  if (switcher) {
    switcher.addEventListener("change", function() {
      const selectedLang = this.value;
      localStorage.setItem("lang", selectedLang);
      applyTranslations(selectedLang);
    });

    const savedLang = localStorage.getItem("lang") || "en";
    switcher.value = savedLang;
    applyTranslations(savedLang);
  }
});
