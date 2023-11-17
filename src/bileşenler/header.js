const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const div = document.createElement("div");
  div.className = "header";

  const span = document.createElement("span");
  span.className = "date";
  span.textContent = tarih;
  div.append(span);

  const h1 = document.createElement("h1");
  h1.textContent = baslik;
  div.append(h1);

  const span2 = document.createElement("span");
  span2.className = "temp";
  span2.textContent = yazi;
  div.append(span2);

  return div;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const baslik = "TechFreak";
  const tarih = "17.11.2023";
  const yazi = "Today's articles";

  const headercard = Header(baslik, tarih, yazi);
  document.querySelector(secici).append(headercard);
};

export { Header, headerEkleyici };
