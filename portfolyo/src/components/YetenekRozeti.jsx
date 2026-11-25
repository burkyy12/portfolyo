import { SiReact, SiHtml5, SiCss, SiJavascript, SiPython } from 'react-icons/si'
import './YetenekRozeti.css'

const ikonlar = {
  React: <SiReact size={22} color="#61dafb" />,
  HTML: <SiHtml5 size={22} color="#e34f26" />,
  CSS: <SiCss size={22} color="#1572b6" />,
  JavaScript: <SiJavascript size={22} color="#f7df1e" />,
  Python: <SiPython size={22} color="#3776ab" />,
}

function YetenekRozeti({ ad, seviye }) {
  const sinif = seviye >= 4 ? 'rozet rozet-ileri' : 'rozet'

  return (
    <div className={sinif}>
      {ikonlar[ad]}
      <span className="rozet-ad">{ad} – {seviye}/5</span>
      <span>
        {seviye === 5 ? 'Hedefe Ulaşıldı' : <>Hedefe {5 - seviye} seviye kaldı</>}
      </span>
    </div>
  )
}

export default YetenekRozeti