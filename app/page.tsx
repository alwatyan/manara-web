export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1A1A] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-6xl sm:text-7xl mb-4">منارة</h1>
      <p className="text-base text-[#6B6B6B] mb-10">أخبار الخليج بالعربية</p>
      {/* TODO: replace with App Store URL when live */}
      <a
        href="#"
        className="bg-[#1A1A1A] text-[#F5F0E8] px-6 py-3 rounded-lg font-medium"
      >
        حمّل تطبيق منارة
      </a>
    </div>
  );
}
