import { useState } from 'react'
import './SayiTahmin.css'

function SayiTahmin({ baslik, enBuyuk }) {
  const [gizliSayi, setGizliSayi] = useState(Math.floor(Math.random() * enBuyuk) + 1)
  const [girdi, setGirdi] = useState('')
  const [altSinir, setAltSinir] = useState(1)
  const [ustSinir, setUstSinir] = useState(enBuyuk)
  const [deneme, setDeneme] = useState(0)
  const [mesaj, setMesaj] = useState('')
  const [bildi, setBildi] = useState(false)

  function tahminEt() {
    const tahmin = Number(girdi)

    if (girdi === '' || tahmin < 1 || tahmin > enBuyuk) {
      setMesaj(`Uyarı: 1 ile ${enBuyuk} arasında bir sayı girmelisin.`)
      return
    }

    const yeniDeneme = deneme + 1
    setDeneme(yeniDeneme)
    setGirdi('')

    if (tahmin === gizliSayi) {
      setBildi(true)
      setMesaj(`Tebrikler, ${yeniDeneme} denemede bildin! 🎉`)
    } else if (tahmin < gizliSayi) {
      setAltSinir(tahmin + 1)
      setMesaj('Daha büyük ⬆')
    } else {
      setUstSinir(tahmin - 1)
      setMesaj('Daha küçük ⬇')
    }
  }

  function yenidenBasla() {
    setGizliSayi(Math.floor(Math.random() * enBuyuk) + 1)
    setGirdi('')
    setAltSinir(1)
    setUstSinir(enBuyuk)
    setDeneme(0)
    setMesaj('')
    setBildi(false)
  }

  return (
    <div className="oyun-kutusu">
      <h3>{baslik}</h3>
      <p>
        Sayı {altSinir} ile {ustSinir} arasında. Deneme: {deneme}
      </p>
      <input
        type="number"
        value={girdi}
        onChange={(e) => setGirdi(e.target.value)}
      />
      <button onClick={tahminEt} disabled={bildi}>
        Tahmin Et
      </button>
      <button onClick={yenidenBasla}>Yeniden Başla</button>
      <p className="oyun-mesaj">{mesaj}</p>
    </div>
  )
}

export default SayiTahmin