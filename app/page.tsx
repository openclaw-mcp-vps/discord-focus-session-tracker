export default function Home() {
  const faqs = [
    {
      q: "How does the bot track focus sessions?",
      a: "The bot monitors when members join designated focus voice channels or set their status to focus mode. Sessions are logged automatically and contribute to the leaderboard."
    },
    {
      q: "Can I customize which channels get blocked during focus time?",
      a: "Yes. After adding the bot, you configure distraction channels via slash commands. During active focus sessions, those channels become read-only for participating members."
    },
    {
      q: "Is there a free trial?",
      a: "You get a 7-day free trial on signup. No credit card required until the trial ends."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Team Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track and gamify team focus sessions in Discord
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          A Discord bot that monitors focus channels, builds leaderboards, and blocks distracting channels during deep work — built for remote dev teams.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">7-day free trial. No credit card required.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "⏱", title: "Auto Session Tracking", desc: "Logs focus time the moment members join focus channels." },
          { icon: "🏆", title: "Live Leaderboards", desc: "Weekly and all-time rankings keep the team motivated." },
          { icon: "🔇", title: "Distraction Blocking", desc: "Mutes off-topic channels for members in active sessions." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per server</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited focus sessions",
              "Live leaderboard dashboard",
              "Distraction channel blocking",
              "Custom focus channel setup",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Discord Focus Session Tracker. All rights reserved.
      </footer>
    </main>
  );
}
