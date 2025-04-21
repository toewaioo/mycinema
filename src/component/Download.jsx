const APKPURE_URL = "https://apkpure.net/p/com.two.channelmyanmar";
const DIRECT_APK_URL =
  "https://github.com/toewaioo/mycinema/releases/download/v1.0.0/app-release.apk";
const TELEGRAM_URL = "https://t.me/mycinema_app";

// Images from placeholder context
const APKPURE_IMG = "https://apkpure.net/static/imgs/icon-logo-lite.svg";
const DIRECT_APK_IMG = "https://mycinema-sage.vercel.app/direct.png";
const TELEGRAM_IMG = "https://telegram.org/img/website_icon.svg?4";

const cards = [
  {
    name: "APKPure",
    url: APKPURE_URL,
    img: APKPURE_IMG,
    label: "Download from APKPure",
    bg: "from-[#e9d7ff] to-[#c7bfff] dark:from-[#241a36] dark:to-[#292143]",
  },
  {
    name: "Direct APK",
    url: DIRECT_APK_URL,
    img: DIRECT_APK_IMG,
    label: "Direct APK Download",
    bg: "from-[#ffe7cf] to-[#fffdf5] dark:from-[#28222a] dark:to-[#362d3d]",
  },
  {
    name: "Telegram",
    url: TELEGRAM_URL,
    img: TELEGRAM_IMG,
    label: "Get via Telegram",
    bg: "from-[#d3e4fd] to-[#f8faff] dark:from-[#142736] dark:to-[#204857]",
  },
];

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="py-20 px-4 bg-gradient-to-br from-violet-200/80 via-white/70 to-purple-300/50 dark:from-[#1a1f2c] dark:via-[#26294b] dark:to-[#403e43] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 32% 30%, #9b87f5 0%, transparent 60%),radial-gradient(ellipse at 70% 90%, #d946ef 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-primary to-violet-600 dark:from-white dark:to-purple-300 bg-clip-text text-transparent mb-4 drop-shadow">
          Download for Android
        </h2>
        <p className="text-lg mb-10 text-zinc-600 dark:text-zinc-200 font-medium">
          Get started today—download the Android app from your favorite source.
          Enjoy a safe and up-to-date experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-10 items-stretch justify-center">
          {cards.map((card) => (
            <a
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex-1 min-w-[250px] max-w-xs rounded-2xl transition-transform hover:scale-[1.035] bg-gradient-to-br ${card.bg} shadow-xl  border border-white/50 dark:border-white/10 hover:shadow-2xl`}
              key={card.name}
            >
              <div className="flex flex-col items-center gap-5 p-7 h-full">
                <div className="w-20 h-20 rounded-xl overflow-hidden ">
                  <img
                    src={card.img}
                    alt={`${card.name} logo`}
                    className="w-full h-full object-center transition-all group-hover:scale-110"
                  />
                </div>
                <span className="font-bold text-base text-zinc-900 dark:text-white">
                  {card.label}
                </span>
                <button
                  className="mt-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-violet-600 hover:to-indigo-600 transition-all"
                  tabIndex={-1}
                  aria-label={card.label}
                >
                  Download
                </button>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          * All download sources are safe and provide the latest version.
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;
