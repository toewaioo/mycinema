import { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [currentYear, setCurrentYear] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white font-[Pyidaungsu]">
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#e50914] text-white p-3 rounded-full shadow-lg hover:bg-[#c40812] transition-colors"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center py-12 border-b-4 border-[#e50914] mb-8">
          <h1 className="text-[#e50914] text-4xl mb-4 drop-shadow-lg">MyCinema</h1>
          <p className="text-xl">ကိုယ်ရေးအချက်အလက်နှင့် မူပိုင်ခွင့်မူဝါဒ</p>
        </header>

        {/* Section 1: Data Collection */}
        <section className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl mb-6">
          <h2 className="text-[#e50914] text-2xl mb-4 border-l-4 border-[#e50914] pl-4">၁။ အချက်အလက်စုဆောင်းခြင်း</h2>
          <ul className="list-square pl-8 text-gray-300 space-y-2">
            <li>အလိုအလျောက်စုဆောင်းသောအချက်များ (IP လိပ်စာ၊ စက်အမျိုးအစား၊ OS ဗားရှင်း)</li>
            <li>သုံးစွဲသူမှ တိုက်ရိုက်ထည့်သွင်းသောအချက်များ (အီးမေးလ်၊ အမည်)</li>
            <li>Third-Party ဝန်ဆောင်မှုများမှ အချက်အလက်များ (Google Analytics)</li>
          </ul>
        </section>

        {/* Section 2: Data Usage */}
        <section className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl mb-6">
          <h2 className="text-[#e50914] text-2xl mb-4 border-l-4 border-[#e50914] pl-4">၂။ အချက်အလက်အသုံးပြုမှု</h2>
          <ul className="list-square pl-8 text-gray-300 space-y-2">
            <li>ဝန်ဆောင်မှုများ ပိုမိုကောင်းမွန်စေရန်</li>
            <li>အသုံးပြုမှုစာရင်းဇယားများ ပြုစုရန်</li>
            <li>ဥပဒေအရ တာဝန်ပြည့်စုံမှု</li>
          </ul>
        </section>

        {/* Section 3: Data Sharing */}
        <section className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl mb-6">
          <h2 className="text-[#e50914] text-2xl mb-4 border-l-4 border-[#e50914] pl-4">၃။ အချက်အလက်မျှဝေခြင်း</h2>
          <ul className="list-square pl-8 text-gray-300 space-y-2">
            <li>တရားဝင်ဥပဒေအရ တောင်းဆိုပါက မျှဝေမည်</li>
            <li>ဝန်ဆောင်မှုချိုးဖောက်မှုများ စုံစမ်းရာတွင်</li>
            <li>ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို မည်သူ့ကိုမှ မရောင်းချပါ</li>
          </ul>
        </section>

        {/* Section 4: External Links */}
        <section className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl mb-6">
          <h2 className="text-[#e50914] text-2xl mb-4 border-l-4 border-[#e50914] pl-4">၄။ ပြင်ပလင့်ခ်များ</h2>
          <p className="text-gray-300">ဤအက်ပ်မှ ဖော်ပြသော ရုပ်ရှင်လင့်ခ်များသည် အပြင်ဘက် Third-Party ဆာဗာများသို့ ချိတ်ဆက်ထားပါသည်။</p>
          <div className="bg-red-900/30 border border-[#e50914] p-6 rounded-lg mt-6">
            ⚠️ ပြင်ပလင့်ခ်များ၏ လုံခြုံမှုနှင့် မူဝါဒများကို ကျွန်ုပ်တို့ ထိန်းချုပ်၍မရပါ။
          </div>
        </section>

        {/* Section 5: Security */}
        <section className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl mb-6">
          <h2 className="text-[#e50914] text-2xl mb-4 border-l-4 border-[#e50914] pl-4">၅။ လုံခြုံရေး</h2>
          <ul className="list-square pl-8 text-gray-300 space-y-2">
            <li>SSL စနစ်ဖြင့် ကာကွယ်ထားပါသည်</li>
            <li>အချက်အလက်များ လုံခြုံစွာသိမ်းဆည်းခြင်း</li>
            <li>အင်တာနက်ပေါ်တွင် 100% လုံခြုံမှုမရှိကြောင်း သတိပြုရန်</li>
          </ul>
        </section>

        {/* Section 6: User Rights */}
        <section className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl mb-6">
          <h2 className="text-[#e50914] text-2xl mb-4 border-l-4 border-[#e50914] pl-4">၆။ သုံးစွဲသူအခွင့်အရေးများ</h2>
          <ul className="list-square pl-8 text-gray-300 space-y-2">
            <li>အချက်အလက်များကို ပြင်ဆင်ခြင်း/ဖျက်သိမ်းခြင်း</li>
            <li>ဒေတာစုဆောင်းမှုကို ငြင်းဆန်ခြင်း</li>
            <li>အသုံးပြုမှုစည်းမျဉ်းများကို ကန့်ကွက်ခြင်း</li>
          </ul>
        </section>

        {/* Section 7: Copyright */}
        <section className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl mb-6">
          <h2 className="text-[#e50914] text-2xl mb-4 border-l-4 border-[#e50914] pl-4">၇။ မူပိုင်ခွင့်သတိပေးချက်</h2>
          <div className="bg-red-900/30 border border-[#e50914] p-6 rounded-lg space-y-4">
            <p>❗ ဤအက်ပ်သည် ပြင်ပဝက်ဘ်ဆိုက်များမှ <strong>scraping နည်းဖြင့်</strong> ရုပ်ရှင်လင့်ခ်များကို စုဆောင်းဖော်ပြခြင်းသာ ဖြစ်ပါသည်။</p>
            <p>❗ မည်သည့်ရုပ်ရှင်ကိုမျှ ဤအက်ပ်တွင် <strong>သိမ်းဆည်းထားခြင်းမရှိပါ</strong>။</p>
            <p>🔗 DMCA ဖယ်ရှားရန်: <a href="mailto:mycinema.app@gmail.com" className="text-[#e50914] font-bold underline hover:text-[#c40812] transition-colors">mycinema.app@gmail.com</a></p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black p-8 rounded-lg text-center mt-12">
          <p>© {currentYear} MyCinema. All rights reserved</p>
          <p className="mt-4 text-gray-500">Version 1.0 • Last Updated: 2024-03-25</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;