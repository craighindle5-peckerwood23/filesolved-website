// app/pricing/page.tsx
export default function PricingPage() {
  return (
    <main className="w-full min-h-screen py-24">
      <section className="text-center">
        <h1 className="text-5xl font-grotesk font-bold">Pricing</h1>
        <p className="mt-4 text-gray-300 font-inter">
          Start fast. Scale when your operations demand it.
        </p>
      </section>

      <section className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter */}
        <div className="p-8 rounded-2xl bg-[#05070A] border border-gray-800">
          <h2 className="text-xl font-grotesk font-semibold">Starter</h2>
          <p className="mt-2 text-gray-400 font-inter">For individual operators.</p>
          <p className="mt-6 text-4xl font-grotesk font-bold">$19<span className="text-base text-gray-400 font-inter">/mo</span></p>
          <ul className="mt-6 space-y-2 text-sm text-gray-300 font-inter">
            <li>• Core operator console</li>
            <li>• Basic workflows</li>
            <li>• Standard support</li>
          </ul>
          <button className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-[#2EE9D1] via-[#1BC7F1] to-[#007BFF] text-black font-semibold">
            Get Started
          </button>
        </div>

        {/* Pro */}
        <div className="p-8 rounded-2xl bg-[#05070A] border border-[#1BC7F1]/60 shadow-[0_0_40px_#1BC7F1]/40">
          <h2 className="text-xl font-grotesk font-semibold">Pro</h2>
          <p className="mt-2 text-gray-400 font-inter">For teams and shops.</p>
          <p className="mt-6 text-4xl font-grotesk font-bold">$59<span className="text-base text-gray-400 font-inter">/mo</span></p>
          <ul className="mt-6 space-y-2 text-sm text-gray-300 font-inter">
            <li>• Advanced workflows</li>
            <li>• File analysis</li>
            <li>• Priority support</li>
          </ul>
          <button className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-[#2EE9D1] via-[#1BC7F1] to-[#007BFF] text-black font-semibold">
            Choose Pro
          </button>
        </div>

        {/* Operator */}
        <div className="p-8 rounded-2xl bg-[#05070A] border border-gray-800">
          <h2 className="text-xl font-grotesk font-semibold">Operator</h2>
          <p className="mt-2 text-gray-400 font-inter">For high‑volume operations.</p>
          <p className="mt-6 text-4xl font-grotesk font-bold">Contact</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-300 font-inter">
            <li>• Custom workflows</li>
            <li>• Dedicated support</li>
            <li>• SLAs & integrations</li>
          </ul>
          <button className="mt-8 w-full py-3 rounded-lg border border-[#1BC7F1]/60 text-[#1BC7F1] font-semibold">
            Talk to Sales
          </button>
        </div>
      </section>
    </main>
  )
}
