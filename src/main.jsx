import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, Phone, Mail, MapPin, PlayCircle, MessageCircle, Gavel, CheckCircle2, Menu, X, ArrowRight } from "lucide-react";
import "./style.css";
import photo from "../IMG_6700.JPG";
const services = [
  ["Захист у кримінальних провадженнях", "Захист підозрюваних, обвинувачених, представництво потерпілих, скарги слідчому судді, клопотання та участь у судових засіданнях."],
  ["Військове право та ТЦК", "Рапорти на звільнення, ВЛК, оскарження бездіяльності, адвокатські запити, допомога військовослужбовцям та членам їх сімей."],
  ["Адміністративні справи", "Оскарження постанов, дій поліції, ТЦК, органів державної влади, підготовка позовів, заяв та клопотань."],
  ["Цивільні справи", "Позови про відшкодування шкоди, аліменти, сімейні спори, борги, судові накази, заяви про розстрочку або відстрочку виконання."],
  ["Адвокатські запити та скарги", "Підготовка сильних адвокатських запитів, скарг до прокуратури, поліції, Міноборони, Уповноваженого ВРУ та інших органів."],
  ["Документи до суду", "Позовні заяви, відзиви, відповіді на відзиви, заперечення, клопотання, промови, судові дебати та правові позиції."],
];
function MilitaryPage() {
  return <div className="site">
    <header className="header">
      <a href="/" className="brand">
        <span className="logo"><Scale size={25}/></span>
        <span><b>Адвокат Кібальник</b><small>Захисти себе сам</small></span>
      </a>
      <a className="call" href="tel:+380682307757">Подзвонити</a>
    </header>

    <main className="section">
      <p className="over">Військовий адвокат</p>
      <h1>Військовий адвокат в Україні</h1>

      <p className="muted">
        Адвокат Кібальник Володимир Павлович надає правову допомогу військовослужбовцям,
        ветеранам, мобілізованим громадянам, членам сімей військових та сім'ям загиблих
        Захисників України по всій території України.
      </p>

      <h2>Послуги військового адвоката</h2>

      <div className="grid">
        <article className="card"><h3>Адвокат по ТЦК</h3><p>Оскарження дій ТЦК, штрафів, бездіяльності та незаконних рішень.</p></article>
        <article className="card"><h3>Оскарження ВЛК</h3><p>Скарги на висновки ВЛК, повторний огляд, судове оскарження.</p></article>
        <article className="card"><h3>Звільнення із ЗСУ</h3><p>Рапорти, сімейні обставини, стан здоров'я, супровід процедури.</p></article>
        <article className="card"><h3>Виплати військовим</h3><p>Допомога з виплатами військовим та сім'ям загиблих військовослужбовців.</p></article>
      </div>

      <p className="muted">
        Робота здійснюється дистанційно та з особистими виїздами до Києва, Волині,
        Черкаської області, Львова, Рівного, Житомира, Сум, Охтирки та інших регіонів України.
      </p>

      <div className="actions">
        <a className="primary" href="tel:+380682307757"><Phone/>068 230 77 57</a>
        <a className="secondary" href="https://t.me/advokat_kibalnyk" target="_blank" rel="noreferrer"><MessageCircle/>Telegram</a>
        <a className="secondary" href="/"><ArrowRight/>На головну</a>
      </div>
    </main>
  </div>
}
function App() {
  const [open, setOpen] = useState(false);
  const nav = [["Послуги", "#services"], ["Про адвоката", "#about"], ["YouTube", "#youtube"], ["Контакти", "#contacts"]];
  return <div className="site">
    <header className="header">
      <a href="#top" className="brand"><span className="logo"><Scale size={25}/></span><span><b>Адвокат Кібальник</b><small>Захисти себе сам</small></span></a>
      <nav className="nav">{nav.map(([t,h]) => <a key={t} href={h}>{t}</a>)}</nav>
      <a className="call" href="tel:+380682307757">Подзвонити</a>
      <button className="menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      {open && <div className="mobile">{nav.map(([t,h]) => <a key={t} href={h} onClick={() => setOpen(false)}>{t}</a>)}<a href="tel:+380682307757">Подзвонити</a></div>}
    </header>

    <main id="top">
      <section className="hero">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
          <p className="badge"><ShieldCheck size={17}/> Адвокатська допомога у складних справах</p>
          <h1>Адвокат Кібальник Володимир Павлович</h1>
          <p className="lead">Захист у суді, підготовка сильних процесуальних документів, допомога військовослужбовцям, робота з ТЦК, поліцією, прокуратурою та органами влади.</p>
         <div className="actions">
  <a className="primary" href="tel:+380682307757">
    <Phone/>068 230 77 57
  </a>

  <a className="secondary" href="mailto:kibalnykvova@gmail.com">
    <Mail/>Написати на пошту
  </a>

  <a className="secondary" href="https://t.me/advokat_kibalnyk" target="_blank" rel="noreferrer">
    <MessageCircle/>Telegram
  </a>
</div>
        </motion.div>
        <motion.div className="heroCard" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.7}}>
          <img src={photo} alt="Адвокат Кібальник" className="heroPhoto" />
          <Gavel className="gold" size={52}/><h2>Правова позиція має бути сильною з першого документа</h2>
          <p>У суді важливо не просто щось написати, а правильно поставити питання, послатися на закон, практику судів і змусити іншу сторону відповідати по суті.</p>
          {["Чітка правова позиція без зайвої води", "Документи з посиланням на закон і судову практику", "Жорсткий захист інтересів клієнта", "Пояснення простими словами, що робити далі"].map(x => <div className="check" key={x}><CheckCircle2/> {x}</div>)}
        </motion.div>
      </section>

      <section id="services" className="section"><p className="over">Послуги</p><h2>Чим можу допомогти</h2><p className="muted">Підготовка документів і захист у справах, де важлива кожна деталь.</p><div className="grid">{services.map(([t,d]) => <article className="card" key={t}><FileText className="gold"/><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className="section seoBlock">
  <p className="over">Військовий адвокат в Україні</p>

  <h2>
    Військовий адвокат, адвокат по ТЦК, ВЛК та захист прав
    військовослужбовців по всій Україні
  </h2>

  <p className="muted">
    Адвокат Кібальник Володимир Павлович надає правову допомогу
    військовослужбовцям, ветеранам, мобілізованим громадянам,
    членам сімей військових та цивільним особам по всій території України.
    Робота здійснюється дистанційно та з особистими виїздами до судів,
    військових частин, ТЦК та СП, ВЛК, державних органів та місць несення
    служби військовослужбовців.
  </p>

  <p className="muted">
    Практика включає звільнення зі служби за сімейними обставинами,
    супровід проходження ВЛК, оскарження висновків ВЛК,
    оскарження дій та бездіяльності ТЦК, підготовку рапортів,
    адвокатських запитів, скарг, позовних заяв, апеляційних та касаційних
    скарг, а також захист прав військовослужбовців у судах.
  </p>

  <p className="muted">
    Правова допомога надається у Волинській області,
    місті Києві, Черкаській області, а також в інших регіонах України.
    За необхідності здійснюються виїзди до місць дислокації військових частин,
    включаючи території поблизу районів ведення бойових дій.
  </p>

  <div className="grid">

    <article className="card">
      <h3>Адвокат по ТЦК</h3>
      <p>
        Оскарження дій ТЦК, незаконної мобілізації,
        штрафів, вручення повісток та бездіяльності посадових осіб.
      </p>
    </article>

    <article className="card">
      <h3>Оскарження ВЛК</h3>
      <p>
        Супровід проходження ВЛК, підготовка скарг,
        оскарження висновків військово-лікарських комісій.
      </p>
    </article>

    <article className="card">
      <h3>Звільнення із ЗСУ</h3>
      <p>
        Підготовка рапортів на звільнення,
        супровід звільнення за сімейними обставинами,
        інвалідністю та іншими підставами.
      </p>
    </article>

    <article className="card">
      <h3>Виплати сім'ям загиблих</h3>
      <p>
        Оформлення документів,
        оскарження відмов та супровід отримання належних виплат.
      </p>
    </article>

    <article className="card">
      <h3>Адвокат Київ та Україна</h3>
      <p>
        Представництво інтересів клієнтів у судах,
        державних органах та правоохоронних органах по всій Україні.
      </p>
    </article>

    <article className="card">
      <h3>Військовий адвокат</h3>
      <p>
        Повний юридичний супровід військовослужбовців,
        ветеранів та членів їх сімей.
      </p>
    </article>

  </div>
</section><section id="about" className="band"><div><p className="over">Про адвоката</p><h2>Кібальник Володимир Павлович</h2><p>Адвокат, який працює з реальними судовими спорами, кримінальними провадженнями, військовими питаннями, адміністративними позовами та процесуальними документами.</p><p>Основний принцип роботи — не формальність, а результат: сильний документ, чіткі вимоги, зрозуміла позиція та підготовка до кожного можливого заперечення опонента.</p></div><div className="darkCard"><h3>Напрямки роботи</h3>{["Суди першої інстанції та апеляція","Скарги на бездіяльність органів влади","Захист військовослужбовців","Правова допомога потерпілим і обвинуваченим","Підготовка заяв, запитів, клопотань і промов"].map(x => <p className="line" key={x}><ArrowRight/> {x}</p>)}</div></section>

     <section className="section">
  <p className="over">Відгуки</p>
  <h2>Що кажуть клієнти</h2>

  <div className="grid">
    <article className="card">
      <h3>Швидко і по суті</h3>
      <p>Отримав чітку правову позицію та зрозумів, які документи потрібно подати до суду.</p>
    </article>

    <article className="card">
      <h3>Сильні документи</h3>
      <p>Адвокат підготував заяви та клопотання з посиланнями на закон і судову практику.</p>
    </article>

    <article className="card">
      <h3>Допомога у військовій справі</h3>
      <p>Було детально роз’яснено порядок дій щодо ТЦК, ВЛК та подання рапорту.</p>
    </article>
  </div>
</section> <section id="youtube" className="section"><div className="youtube"><PlayCircle  size={52}/><h2>Канал «Захисти себе сам»</h2><p>Канал про те, як людині захистити себе, розуміти свої права, не боятися суду, поліції, ТЦК та органів влади, а також грамотно реагувати на незаконні дії.</p><a href="https://www.youtube.com/" target="_blank">Перейти на YouTube <ArrowRight size={18}/></a></div></section>

      <section id="contacts" className="contacts"><div><p className="over">Контакти</p><h2>Звернутися по правову допомогу</h2><p>Опишіть ситуацію коротко: хто звертається, яка справа, який суд або орган, які документи є, який результат потрібен.</p></div><div className="contactList"><a href="tel:+380682307757"><Phone/> <span><small>Телефон</small><b>068 230 77 57</b></span></a><a href="mailto:kibalnykvova@gmail.com"><Mail/> <span><small>E-mail</small><b>kibalnykvova@gmail.com</b></span></a><div><MapPin/> <span><small>Робоче місце адвоката</small><b>Волинська область, Володимирський район, с. Заріччя</b></span></div><a href="https://t.me/" target="_blank"><MessageCircle/> <span><small>Telegram</small><b>Написати повідомлення</b></span></a></div></section>
    </main>
    <footer>© {new Date().getFullYear()} Адвокат Кібальник Володимир Павлович. Сайт створено для інформаційного зв’язку з клієнтами.</footer>
  </div>
}

createRoot(document.getElementById("root")).render(<App />);
