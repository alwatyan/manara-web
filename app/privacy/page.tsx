import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية · منارة",
  description: "كيف يتعامل تطبيق منارة مع بياناتك",
};

// Linked from the in-app paywall and required by the App Store listing.
// Keep in sync with what the app actually collects (gulf-watch repo).
const LAST_UPDATED = "٦ نوفمبر ٢٠٢٦";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#1A1A1A] px-6 py-12">
      <article className="mx-auto max-w-2xl leading-loose space-y-6">
        <h1 className="font-serif text-4xl">سياسة الخصوصية</h1>
        <p className="text-sm text-[#6B6B6B]">آخر تحديث: {LAST_UPDATED}</p>

        <p>
          منارة تطبيق أخبار لا يتطلب إنشاء حساب ولا يطلب اسمك أو بريدك الإلكتروني أو
          رقم هاتفك. توضّح هذه الصفحة البيانات القليلة التي نستخدمها ولماذا.
        </p>

        <section className="space-y-2">
          <h2 className="text-2xl">ما الذي نجمعه</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>
              <strong>معرّف جهاز مجهول:</strong> رقم عشوائي يُنشأ عند أول تشغيل
              ويُحفظ على جهازك فقط. لا يرتبط بهويتك، ويُعاد إنشاؤه إذا حذفت التطبيق.
            </li>
            <li>
              <strong>رمز الإشعارات:</strong> إذا فعّلت تنبيهات الأخبار العاجلة، نحفظ
              رمز الإشعارات الخاص بجهازك لإرسالها. يمكنك إيقافها في أي وقت من الإعدادات.
            </li>
            <li>
              <strong>الادعاءات التي تتحقق منها:</strong> النص الذي تُدخله في خاصية
              التحقق يُرسل إلى خوادمنا وإلى مزوّد الذكاء الاصطناعي (Anthropic) لإصدار
              الحكم، ويُحفظ مع الحكم لفترة محدودة ليظهر في قسم &quot;ما يُتحقّق منه
              الآن&quot; دون أي معلومات تعرّف بك. لا تُدخل معلومات شخصية في نص الادعاء.
            </li>
            <li>
              <strong>بيانات الاستخدام:</strong> نستخدم PostHog لفهم كيفية استخدام
              التطبيق (مثل الشاشات التي تُفتح) وتسجيلات جلسات يُخفى فيها كل ما تكتبه.
            </li>
            <li>
              <strong>الاشتراكات:</strong> تتم عمليات الشراء عبر Apple، ونستخدم
              RevenueCat للتحقق من حالة اشتراك منارة برو المرتبطة بمعرّف الجهاز المجهول.
              لا نستلم بيانات بطاقتك ولا نطّلع عليها.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">ما لا نفعله</h2>
          <p>
            لا نبيع بياناتك، ولا نستخدمها للإعلانات، ولا نتتبّعك عبر تطبيقات أو مواقع
            أخرى، ولا نجمع موقعك الجغرافي.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">حذف بياناتك</h2>
          <p>
            حذف التطبيق يمحو معرّف الجهاز من هاتفك. لطلب حذف أي بيانات مرتبطة بجهازك من
            خوادمنا، راسلنا مع معرّف الجهاز الظاهر في شاشة الإعدادات.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">تواصل معنا</h2>
          <p>
            لأي سؤال حول الخصوصية:{" "}
            <a className="underline" href="mailto:privacy@manaranews.com">
              privacy@manaranews.com
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
