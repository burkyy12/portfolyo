import { useState } from 'react'
import { FaMoon, FaSun, FaGamepad, FaGithub, FaLinkedin, FaFolder, FaStar, FaPhone, FaIdBadge, FaMailBulk } from 'react-icons/fa'
import YetenekRozeti from './components/YetenekRozeti'
import ProjeKarti from './components/ProjeKarti'
import SayiTahmin from './components/SayiTahmin'
import avatar from './assets/avatar.svg'
import './App.css'

const ad = 'Burak Kazım Çile'
const bolum = 'Kapadokya Üniversitesi Meslek Yüksekokulu – Bilgisayar Programcılığı (Uzaktan)'
const tanitim =
  'Merhaba, ben Burak Kazım Çile. Bilgisayar Programcılığı bölümünde okuyorum. Web geliştirme ve React.js öğreniyorum. Bu site React.js dersi vize ödevi için hazırladığım portfolyomdur.'

function App() {
  const [tema, setTema] = useState('acik')
  const [sayi, setSayi] = useState(0)

  return (
    <div className={tema}>
      <header className="ust-bar">
        <h1>{ad}</h1>
        <nav className="menu">
          <a href="#hakkimda">Hakkımda</a>
          <a href="#yeteneklerim">Yeteneklerim</a>
          <a href="#projelerim">Projelerim</a>
          <a href="#oyun">Oyun Köşesi</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <button
          className="tema-butonu"
          onClick={() => setTema(tema === 'acik' ? 'koyu' : 'acik')}
        >
          {tema === 'acik' ? (
            <FaMoon size={20} color="#011927" />
          ) : (
            <FaSun size={20} color="#e4af3d" />
          )}
        </button>
      </header>

      <section id="hakkimda" className="bolum hakkimda">
        <img className="avatar" src={avatar} alt={`${ad} avatar`} />
        <div>
          <h2>Hakkımda</h2>
          <p>{bolum}</p>
          <p>{tanitim}</p>
          <button className="merhaba-butonu" onClick={() => setSayi(sayi + 1)}>
            Merhaba de 👋
          </button>
          <p>
            Bu siteye {sayi} kişi merhaba dedi
            {sayi >= 10 && <span className="populer">Popüler profil ⭐</span>}
          </p>
        </div>
      </section>

      <section id="yeteneklerim" className="bolum">
        <h2>
          <FaStar size={28} color="#17f703" />
          Yeteneklerim
        </h2>
        <div className="kart-sirasi">
          <YetenekRozeti ad="React" seviye={5} />
          <YetenekRozeti ad="HTML" seviye={4} />
          <YetenekRozeti ad="CSS" seviye={3} />
          <YetenekRozeti ad="JavaScript" seviye={2} />
          <YetenekRozeti ad="Python" seviye={1} />
        </div>
      </section>

      <section id="projelerim" className="bolum">
        <h2>
          <FaFolder size={28} color="#f7b603" />
          Projelerim
        </h2>
        <div className="kart-sirasi">
          <ProjeKarti
            baslik="Burak Kazım Çile Portfolyo"
            aciklama="React.js ile hazırladığım portfolyo sitesi."
            teknolojiler="React, CSS"
            link="https://github.com/burkyy12/portfolyo"
            yil={2026}
          />
          <ProjeKarti
            baslik="Kişisel Yapay Zeka"
            aciklama="Genel işler için yardım eden bir yapay zeka."
            teknolojiler="Python"
            link="https://github.com/burkyy12/jarvis"
            yil={2026}
          />
          <ProjeKarti
            baslik="Kişisel Online Oyunum"
            aciklama="Kendi geliştirdiğim basit bir online oyun."
            teknolojiler="C#, Unity"
            link="https://github.com/burkyy12/animal-life"
            yil={2026}
          />
        </div>
      </section>

      <section id="oyun" className="bolum">
        <h2>
          <FaGamepad size={28} color="#2b2b2b" />
          Oyun Köşesi
        </h2>
        <SayiTahmin baslik="Aklımdan bir sayı tuttum!" enBuyuk={100} />
      </section>

      <section id="iletisim" className="bolum">
        <h2>
          <FaPhone size={28} color="#158811" />
          İletişim
        </h2>
        <ul className="iletisim-listesi">
          <li>
            <FaMailBulk size={24} color="#c51313" />
            <a href="mailto:burakcilee13@gmail.com">burakcilee13@gmail.com</a>
          </li>
          <li>
            <FaGithub size={24} color="#8b949e" />
            <a href="https://github.com/burkyy12">GitHub</a>
          </li>
          <li>
            <FaLinkedin size={24} color="#4a90d9" />
            <a href="https://tr.linkedin.com/in/burak-kaz%C4%B1m-%C3%A7ile-ab0228421">LinkedIn</a>
          </li>
          <li>
            <FaIdBadge size={24} color="#4a90d9" />
            <a href="https://www.credly.com/users/burak-kazim-cile">Credly</a>
          </li>
        </ul>
      </section>

      <footer className="alt-bar">
        <p>
          {ad} – {bolum}
        </p>
      </footer>
    </div>
  )
}

export default App