export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1A1A]">
      <header className="border-b border-[#E5DFD3]">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-end">
          <span className="font-serif text-sm tracking-wide">منارة</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="font-serif text-3xl sm:text-4xl leading-tight mb-6">
          هذه القصة لم تعد متاحة
        </h1>
        <p className="text-base leading-loose text-[#6B6B6B] mb-8">
          تُحفظ مقالات منارة لمدة 7 أيام. بعد ذلك، تُفسح المجال لما هو جديد.
        </p>
        {/* TODO: replace with App Store URL when live */}
        <a
          href="#"
          className="block bg-[#1A1A1A] text-[#F5F0E8] text-center px-6 py-3 rounded-lg font-medium"
        >
          حمّل تطبيق منارة
        </a>
      </main>

      <footer className="max-w-2xl mx-auto px-6 py-8 text-center text-xs text-[#6B6B6B]">
        © منارة
      </footer>
    </div>
  );
}
