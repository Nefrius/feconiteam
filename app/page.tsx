"use client";

import { useState } from "react";
import Image from "next/image";
import { Avatar, Button, Card, CardBody, Chip, Divider, Link } from "@heroui/react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const navigation = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Odak", href: "#odak" },
  { label: "Ekip", href: "#ekip" },
  { label: "Yol Haritası", href: "#yol-haritasi" },
];

const stats = [
  { value: "2026", label: "TEKNOFEST odak yılı" },
  { value: "Lise", label: "Eğitim seviyesi" },
  { value: "3 Alan", label: "Roket, araba ve İHA" },
];

const focusAreas = [
  {
    title: "Aerodinamik Tasarım",
    description:
      "Kanat geometri kararlarını stabilite, verim ve görev dayanımını merkeze alarak olgunlaştırıyoruz.",
  },
  {
    title: "Üretim Disiplini",
    description:
      "Gövde, kanat ve entegrasyon kararlarını üretilebilirlik ve ağırlık dengesiyle birlikte ele alıyoruz.",
  },
  {
    title: "Uçuş Güvenliği",
    description:
      "Kontrol yüzeyleri, fail-safe senaryoları ve sistem kontrolleriyle emniyetli bir uçuş yapısı hedefliyoruz.",
  },
  {
    title: "Görev Hazırlığı",
    description:
      "Başvuru sürecinden test safhasına uzanan bütün adımları planlı bir takvimle yönetiyoruz.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Başvuru ve Konsept",
    detail:
      "Görev isterlerini, kategori beklentilerini ve teknik kapsamı netleştirerek konsept tasarımımızı tanımlıyoruz.",
  },
  {
    step: "02",
    title: "Detay Tasarım",
    detail:
      "Taşıyıcı yapı, elektronik yerleşim ve kanat-gövde uyumunu sistem seviyesi kararlarla birleştiriyoruz.",
  },
  {
    step: "03",
    title: "Prototipleme",
    detail:
      "Parça doğrulama, montaj disiplini ve ağırlık kontrolü için kademeli prototipler üretiyoruz.",
  },
  {
    step: "04",
    title: "Test ve İyileştirme",
    detail:
      "Yerde sistem doğrulaması ve uçuş öncesi checklist akışlarıyla platformu olgunlaştırıyoruz.",
  },
];

const teamMembers = [
  { name: "Enes Halit", role: "Takım Kaptanı", area: "Aerodinami" },
  { name: "Enes Baş", role: "Takım Üyesi", area: "Yazılım" },
  { name: "Berat Çavdar", role: "Takım Üyesi", area: "Elektrik Elektronik" },
  { name: "Halil Kuş", role: "Takım Üyesi", area: "Megatronik" },
  { name: "Çınar Yiğit", role: "Takım Üyesi", area: "Sosyal Medya Strateji" },
  { name: "Sıla Kahraman", role: "Danışman", area: "Sosyal Medya" },
  { name: "Zeynep Gamze Savaşır", role: "Takım Üyesi", area: "3D Tasarım" },
  { name: "Cemal Kaan Hız", role: "Takım Üyesi", area: "3D Tasarım" },
];

const teamValues = [
  "Merakla başlayan teknik üretim",
  "Disiplinli ekip çalışması",
  "Gerçek saha koşullarına uygun tasarım",
  "Öğrenirken gelişen bir mühendislik kültürü",
];

const socials = [
  {
    label: "Instagram",
    handle: "@feconiteam",
    href: "https://instagram.com/feconiteam",
  },
  {
    label: "LinkedIn",
    handle: "@feconiteam",
    href: "https://linkedin.com/in/feconiteam",
  },
  {
    label: "YouTube",
    handle: "@feconiteam",
    href: "https://youtube.com/@feconiteam",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="eyebrow text-xs text-zinc-500">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-zinc-600 sm:text-lg">{description}</p>
    </div>
  );
}

function AvatarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-zinc-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20a6 6 0 0 0-12 0" />
      <circle cx="12" cy="10" r="4" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-zinc-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-zinc-900"
        fill="currentColor"
      >
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20 13.02c0-3.47-1.85-5.08-4.33-5.08-2 0-2.89 1.1-3.39 1.87V8.5H8.9c.04.87 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.39 1.94-1.39 1.37 0 1.92 1.05 1.92 2.59V20H20v-6.98Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-zinc-900"
      fill="currentColor"
    >
      <path d="M21.58 7.19a2.95 2.95 0 0 0-2.08-2.09C17.67 4.6 12 4.6 12 4.6s-5.67 0-7.5.5A2.95 2.95 0 0 0 2.42 7.2c-.5 1.83-.5 5.64-.5 5.64s0 3.81.5 5.64a2.95 2.95 0 0 0 2.08 2.08c1.83.5 7.5.5 7.5.5s5.67 0 7.5-.5a2.95 2.95 0 0 0 2.08-2.08c.5-1.83.5-5.64.5-5.64s0-3.81-.5-5.65ZM10.2 15.72V9.96l5 2.88-5 2.88Z" />
    </svg>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative overflow-hidden pb-16 text-zinc-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.09),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.08),transparent_28%)]" />

      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <Image
                src="/logo.jpg"
                alt="Feconi Havacılık ve Uzay Takımı logosu"
                fill
                sizes="48px"
                className="object-cover grayscale"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="eyebrow text-[11px] text-zinc-500">Feconi</p>
              <p className="truncate text-sm font-medium text-zinc-900 sm:text-base">
                Havacılık ve Uzay Takımı
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-zinc-900 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition hover:bg-zinc-100 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.75 h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3.5 h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <div className="hidden items-center gap-3 lg:flex">
            <nav className="flex items-center gap-1 rounded-full border border-black/10 bg-white/90 p-1 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  color="foreground"
                  href={item.href}
                  underline="none"
                  className="rounded-full px-4 py-2 text-sm text-zinc-600 transition hover:bg-zinc-950 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              as="a"
              href="#ekip"
              radius="full"
              className="bg-zinc-950 px-5 text-white"
            >
              Ekibi Gör
            </Button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mx-auto max-w-6xl px-5 pb-4 sm:px-6 lg:hidden lg:px-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="section-shell rounded-[28px] border-black/10 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
              >
                <nav className="grid gap-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.04, duration: 0.18 }}
                    >
                      <Link
                        color="foreground"
                        href={item.href}
                        underline="none"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-950 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <Divider className="my-3 bg-black/8" />

                <Button
                  as="a"
                  href="#ekip"
                  radius="full"
                  className="w-full bg-zinc-950 text-white"
                  onPress={() => setIsMobileMenuOpen(false)}
                >
                  Ekibi Gör
                </Button>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <motion.section
        className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeInUp} className="space-y-8">
          <div className="flex flex-wrap gap-3">
            {[
              "TEKNOFEST Başvuru Süreci",
              "Lise Öğrencileri",
              "Sabit Kanat IHA",
            ].map((item) => (
              <Chip
                key={item}
                color="default"
                radius="sm"
                variant="flat"
                className="border border-black/10 bg-zinc-100 text-zinc-700"
              >
                {item}
              </Chip>
            ))}
          </div>

          <div className="space-y-6">
            <p className="eyebrow text-xs text-zinc-500">Feconi Havacılık ve Uzay Takımı</p>
            <h1 className="text-balance max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-7xl">
              TEKNOFEST için çok disiplinli projeler üreten lise takımı.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-600 sm:text-xl">
              Feconi olarak havacılık ve teknoloji tutkusu ile bir araya geldik. Takım yapımızda
              roket, araba ve İHA vizyonu birlikte bulunuyor; şu anki ana teknik odağımız ise
              TEKNOFEST başvuru sürecindeki sabit kanat İHA platformu.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              as="a"
              href="#yol-haritasi"
              radius="full"
              size="lg"
              className="bg-zinc-950 px-7 font-medium text-white"
            >
              Yol Haritamızı İncele
            </Button>
            <Button
              as="a"
              href="#ekip"
              radius="full"
              size="lg"
              variant="bordered"
              className="border-black/10 bg-white/70 px-7 text-zinc-900"
            >
              Takım Üyelerini Gör
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <Card key={item.label} shadow="none" className="section-shell rounded-3xl border-black/10">
                <CardBody className="gap-2 p-6">
                  <p className="font-mono text-3xl font-medium text-zinc-950">{item.value}</p>
                  <p className="text-sm text-zinc-600">{item.label}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card shadow="none" className="section-shell grid-accent overflow-hidden rounded-4xl">
            <CardBody className="relative gap-8 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-4">
                  <p className="eyebrow text-xs text-zinc-500">Durum Özeti</p>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                      Başvuru aşamasındayız, hedefimiz ise güçlü bir takım yapısını çalışan sistemlere dönüştürmek.
                    </h2>
                    <p className="leading-7 text-zinc-600">
                      Takım yapımızı, teknik rollerimizi ve farklı proje başlıklarımızı TEKNOFEST
                      beklentilerine uygun biçimde kuruyor; şu anda sabit kanat İHA konseptimizi önceliklendiriyoruz.
                    </p>
                  </div>
                </div>

                <div className="relative hidden h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-black/10 bg-zinc-100 md:block">
                  <Image
                    src="/logo.jpg"
                    alt="Feconi logosu"
                    fill
                    sizes="96px"
                    className="object-cover grayscale"
                  />
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  ["Güncel odak", "Sabit kanat İHA geliştirme"],
                  ["Takım vizyonu", "Roket, araba ve İHA ekosistemi"],
                  ["Yaklaşım", "Planlı, öğrenmeye açık, iteratif"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-black/8 bg-white/80 p-5 backdrop-blur">
                    <p className="eyebrow text-[11px] text-zinc-400">{label}</p>
                    <p className="mt-2 text-base font-medium text-zinc-900">{value}</p>
                  </div>
                ))}
              </div>

              <Divider className="bg-black/8" />

              <div className="grid gap-3 sm:grid-cols-2">
                {teamValues.map((value) => (
                  <div
                    key={value}
                    className="rounded-3xl border border-dashed border-black/10 bg-white/65 px-4 py-4 text-sm leading-6 text-zinc-600"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </motion.section>

      <section id="hakkimizda" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="section-shell rounded-[36px] p-6 sm:p-10">
          <SectionHeading
            eyebrow="Hakkımızda"
            title="Mühendislik merakını gerçek bir hava aracına dönüştüren bir öğrenci ekibiyiz."
            description="Feconi Havacılık ve Uzay Takımı, lise seviyesinde teknik sorumluluk alarak TEKNOFEST sahnesine çok disiplinli bir üretim kültürüyle çıkmayı hedefliyor. Roket, araba ve İHA başlıkları takım vizyonumuzun parçası; bugün ise enerjimizi sabit kanat İHA projesi üzerinde topluyoruz."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Takım Ruhu",
                text: "Her üye, teknik sürecin bir parçası olurken aynı zamanda sorumluluk, koordinasyon ve zaman yönetimi kazanır.",
              },
              {
                title: "Gerçek Problem Çözümü",
                text: "Her kararımız; ağırlık, stabilite, üretim kolaylığı ve uçuş emniyeti gibi gerçek parametrelerle şekillenir.",
              },
              {
                title: "Sürekli Gelişim",
                text: "Konseptten test aşamasına kadar her iterasyonu ölçerek ve yorumlayarak gelişmeyi hedefliyoruz.",
              },
            ].map((item) => (
              <Card key={item.title} shadow="none" className="section-shell rounded-3xl">
                <CardBody className="gap-3 p-6">
                  <p className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</p>
                  <p className="leading-7 text-zinc-600">{item.text}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="odak" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Güncel Teknik Odak"
            title="Takımımız farklı alanlarda üretim hedefliyor; şu an odağımız sabit kanat İHA sistemini doğru temellerle geliştirmek."
            description="Teknik odağımız şu aşamada hava aracı mimarisini bütünsel düşünmek, her alt sistemi görev ihtiyacı ile eşleştirmek ve kontrollü şekilde ilerletmek."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <Card key={area.title} shadow="none" className="section-shell rounded-3xl">
                <CardBody className="gap-4 p-6">
                  <Chip
                    color="default"
                    radius="sm"
                    variant="flat"
                    className="w-fit border border-black/8 bg-zinc-100 text-zinc-700"
                  >
                    Teknik Başlık
                  </Chip>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      {area.title}
                    </h3>
                    <p className="leading-7 text-zinc-600">{area.description}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ekip" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="section-shell rounded-[36px] p-6 sm:p-10">
          <SectionHeading
            eyebrow="Takım Üyeleri"
            title="Feconi ekibi, farklı disiplinleri aynı hava aracı hedefinde buluşturuyor."
            description="Takım yapımız, sabit kanat İHA geliştirme sürecinde gereken teknik ve iletişim rollerini bir araya getiriyor."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} shadow="none" className="section-shell rounded-3xl">
                <CardBody className="gap-5 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Avatar
                      showFallback
                      fallback={<AvatarIcon />}
                      className="h-11 w-11 border border-black/10 bg-zinc-100"
                    />
                    <Chip
                      color="default"
                      radius="full"
                      variant="flat"
                      className="border border-black/8 bg-zinc-100 text-zinc-700"
                    >
                      {member.role}
                    </Chip>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                      {member.name}
                    </h3>
                    <p className="text-sm leading-6 text-zinc-600">{member.area}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="yol-haritasi" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="section-shell rounded-[36px] p-6 sm:p-10">
          <SectionHeading
            eyebrow="Yol Haritası"
            title="Başvurudan uçuş hazırlığına uzanan süreci adım adım yönetiyoruz."
            description="Her faz, bir sonrakini sağlamlaştıran teknik bir eşik olarak ele alınıyor. Hedefimiz hızlı değil; düzgün, ölçülebilir ve güvenli ilerlemek."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {roadmap.map((item) => (
              <Card key={item.step} shadow="none" className="section-shell rounded-3xl">
                <CardBody className="gap-5 p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-zinc-500">Faz {item.step}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-900" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="leading-7 text-zinc-600">{item.detail}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="section-shell rounded-[36px] p-6 sm:p-10">
          <SectionHeading
            eyebrow="Sosyal Medya"
            title="Feconi’yi sosyal medya hesaplarımızdan takip edebilirsiniz."
            description="Gelişim sürecimizi, takım duyurularımızı ve proje yolculuğumuzu sosyal medya hesaplarımız üzerinden paylaşacağız."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                underline="none"
                className="section-shell rounded-3xl p-6 transition hover:-translate-y-0.5 hover:bg-zinc-50"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-zinc-100">
                    <SocialIcon label={social.label} />
                  </div>
                  <p className="eyebrow text-[11px] text-zinc-500">{social.label}</p>
                  <p className="text-2xl font-semibold tracking-tight text-zinc-950">
                    {social.handle}
                  </p>
                  <p className="text-sm leading-6 text-zinc-600">
                    Resmî {social.label} hesabımız üzerinden bizi takip edin.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Card shadow="none" className="section-shell overflow-hidden rounded-[36px]">
          <CardBody className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-4">
              <p className="eyebrow text-xs text-zinc-500">Hedefimiz</p>
              <h2 className="text-balance max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Feconi adını TEKNOFEST sahnesinde; farklı alanlarda üretim yapabilen, öğrenmeye açık ve gelişen bir lise takımı olarak temsil etmek.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                Bu süreç, sadece bir hava aracı üretmek değil; aynı zamanda roket, araba ve İHA gibi
                farklı alanlarda gelişecek takım kültürümüzün ilk somut adımlarını atmak anlamına geliyor.
              </p>
            </div>

            <Button
              as="a"
              href="#"
              radius="full"
              size="lg"
              className="min-w-48 bg-zinc-950 px-8 font-medium text-white"
            >
              Feconi 2026
            </Button>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
