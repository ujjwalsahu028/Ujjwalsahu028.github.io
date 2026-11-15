/* ==========================================================
   YAHI EK FILE EDIT KARNI HAI.
   Naya project add karne ke liye `projects` array ke SABSE UPAR
   ek naya { ... } block copy-paste karo. Baaki page apne aap update hoga.
   Khali chhodna ho to "" ya [] rakho, wo section hide ho jayega.
   ========================================================== */

window.PORTFOLIO = {

  profile: {
    name: "Ujjwal Sahu",
    initials: "US",
    location: "Udaipur, Rajasthan, India",
    // Hero me typing effect me ye lines ghumengi
    taglines: [
      "Aspiring Data Scientist",
      "Tableau & SQL learner",
      "Python & ML explorer",
      "Maths-driven problem solver"
    ],
    intro: "Mathematics-first learner turning raw data into dashboards, queries and models that answer real business questions.",
    about: "I'm building my career in data step by step: Tableau and SQL first, then Python and machine learning. My strong base in mathematics helps me understand why a method works, not just how to run it. Every project I finish is added here as a short case study: the question, the approach and the insight.",
    links: {
      github: "https://github.com/ujjwalsahu028",
      linkedin: "https://www.linkedin.com/in/ujjwal-sahu-14a938363/",
      tableau: "",   // jaise "https://public.tableau.com/app/profile/your-name"
      email: "",      // jaise "you@gmail.com"
      resume: ""      // resume.pdf repo me daalo, phir yahan "resume.pdf" likho
    }
  },

  /* Skills: level 0-100, apna HONEST level likho. Radar chart aur bars dono isse banti hain.
     Pehle 8 skills radar chart me dikhengi. */
  skills: [
    { name: "Mathematics & Statistics", level: 75, note: "Strong base" },
    { name: "Tableau",                  level: 40, note: "Learning" },
    { name: "SQL",                      level: 35, note: "Learning" },
    { name: "Python",                   level: 40, note: "Learning" },
    { name: "Pandas & NumPy",           level: 30, note: "Learning" },
    { name: "Excel",                    level: 45, note: "Learning" },
    { name: "Machine Learning",         level: 15, note: "Starting soon" },
    { name: "Git & GitHub",             level: 40, note: "Learning" }
  ],

  /* ---------- PROJECTS ----------
     status: "done" | "in-progress"
     tools : filter chips in se banenge (Tableau, SQL, Python, Power BI, Excel, Machine Learning ...)
     image : screenshot ka path, jaise "images/superstore.png" (repo me images folder banao). Khali = auto thumbnail.
     embed : Tableau Public ka embed URL (https://...). Modal me live dashboard chalega.
  */
  projects: [
    {
      title: "Gold Alert Bot (XAUUSD)",
      status: "done",
      date: "2026",
      tools: ["Python", "Automation"],
      summary: "A Python bot that analyses gold (XAUUSD) across 7 timeframes and sends a trading brief to Telegram and WhatsApp.",
      problem: "Checking gold charts, the dollar index and economic news by hand takes time and is easy to get wrong. I wanted one automatic brief that combines everything into a clear, rule-based view.",
      approach: "Pulled prices for gold, DXY, forex, indices, oil and Bitcoin from Yahoo Finance with yfinance and processed them with pandas. Combined EMA trends, RSI, MACD, Stochastic RSI, ATR, Bollinger Bands, pivot levels, market structure, DXY correlation and trading sessions into a weighted score that gives a BUY, SELL or WAIT view. Stop-loss and targets are sized from ATR. A weekly economic calendar flags high-impact USD news. Alerts go out through the Telegram Bot API and CallMeBot (WhatsApp), with API keys kept in environment variables.",
      insights: [
        "Combined 6 weighted factors into one score instead of relying on a single indicator.",
        "Used DXY moves as a correlation check, since a rising dollar is usually bearish for gold.",
        "Sized stop-loss and targets from ATR so risk adapts to market volatility.",
        "Learning project only, not financial advice."
      ],
      image: "",
      embed: "",
      links: {
        github: "https://github.com/ujjwalsahu028/gold-alert-bot1",
        live: "",
        notebook: ""
      }
    },
    {
      title: "Superstore Sales Dashboard",
      status: "in-progress",
      date: "Coming soon",
      tools: ["Tableau"],
      summary: "Which category and region drive the most profit? An interactive Tableau dashboard on the Superstore dataset.",
      problem: "",
      approach: "",
      insights: [],
      image: "",
      embed: "",
      links: { github: "", live: "", notebook: "" }
    },
    {
      title: "SQL Sales Case Study",
      status: "in-progress",
      date: "Coming soon",
      tools: ["SQL"],
      summary: "Joins, window functions and business questions answered with SQL on a sales dataset.",
      problem: "",
      approach: "",
      insights: [],
      image: "",
      embed: "",
      links: { github: "", live: "", notebook: "" }
    }
  ],

  /* Roadmap / journey: jo seekh liya "done", jo chal raha "now", jo aage "next" */
  journey: [
    { state: "now",  title: "Tableau",              text: "Dashboards, calculated fields, publishing on Tableau Public." },
    { state: "next", title: "SQL",                  text: "Joins, GROUP BY, subqueries, window functions." },
    { state: "next", title: "Python & Statistics",  text: "Pandas, EDA, hypothesis testing, visualisation." },
    { state: "next", title: "Machine Learning",     text: "Scikit-learn, model evaluation, end-to-end projects." }
  ]
};
