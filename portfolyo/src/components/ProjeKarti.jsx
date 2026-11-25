import './ProjeKarti.css'

function ProjeKarti({ baslik, aciklama, teknolojiler, link, yil }) {
  return (
    <article className="proje-karti">
      <h3>{baslik}</h3>
      <p>{aciklama}</p>
      <p>Teknolojiler: {teknolojiler}</p>
      <p>Yıl: {yil}</p>
      <a href={link}>{link}</a>
    </article>
  )
}

export default ProjeKarti