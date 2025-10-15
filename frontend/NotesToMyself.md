# NOTES TO MYSELF

## ---------------------------FRONTEND--------------------------

### CSS NOTES

- **_hidden_** → Bu element (burada <ul>) varsayılan olarak gizli olur. Yani mobil ekranlarda veya küçük cihazlarda görünmez.
- **_sm:flex_** → Tailwind’in responsive (duyarlı) bir sınıfıdır. Ekran genişliği 640px veya daha büyükse, `display: flex` uygula.
- Tailwind’de **_sm_**, bir breakpoint yani _“ekran genişliği eşiği”_ anlamına gelir.
- **_a.active hr { display: block; }_** → Yalnızca aktif olan menü sekmesinin altındaki <hr> çizgisini görünür yapar.
- **_leading-4_** → satır yüksekliğini 1rem yapar. Yani <p> içindeki “10” rakamı dikeyde ortalı görünür.
- **_aspect-square_** → elemanın en ve boyunu eşit yapar (kare şekil). Bu sayede <p> yuvarlak bir rozet (badge) olur.
- for dynamic classname: use **_className={``}_**, not **_className=""_**.
- **_md_** → _min-width:_ 768px (tablet ve üzeri ekranlar)
- **_inline-flex_** → Elemanı satır içi (inline) davranışta tutarken, içerideki öğeleri flexbox ile hizalamayı sağlar. Eleman satır akışını bozmaz ama içindekileri `flex` düzeninde hizalar.
  - **_sm:_** → küçük ekranlar ve üzeri (min-width: 640px)
  - **_md:_** → orta ekranlar ve üzeri (min-width: 768px)
- **_grid-cols-[3fr_1fr_1fr]_** → grid içinde 3 sütun oluşturur; ilk sütun geniş, diğer ikisi dar olur (3:1:1 oranında)
- **_border-t_** → border from top
- **`flex` & `flex-1` farkı:**
  - **_flex_** → container olur (çocukları flexbox düzenine sokar)
  - **_flex-1_** → eleman esnek şekilde büyür/küçülür, kalan alanı kaplar.
- **_accent-[color]_** → Tailwind’de default checkbox mavidir. Bunu custom color yapmak için kullanılabilir.
- **_bg-inherit_** → Elementin arka plan rengini üst elemandan miras almasını sağlar (background-color: inherit).
- **_flex-col-reverse_** → elemanları alttan üste dizer. Yani sıralamayı ters çevirir ama HTML’deki kod sırası değişmez — sadece ekrandaki görsel sıralama ters olur
- **_flex-shrink-0_** → TailwindCSS’te bir elemanın küçülmesini (shrink) engeller.

### REACT NOTES

- **_NavLink_** sayesinde hangi menü item'e tıklıyorsan onda classname'ine yeni bir class ekleniyor: _active_.
- **_ShopContext.jsx_** → Uygulama genelinde ürünler, para birimi ve teslimat ücretini tek bir yerden yönetmek için bir global context sağlar.
  - _ShopContextProvider_ ile sarmalanan tüm bileşenler (App dahil) bu verilere useContext(ShopContext) kullanarak erişebilir.
- **_useEffect_** → React’te bir bileşen render olduktan sonra çalışacak yan etkileri (side effects) tanımlamak için kullanılır.
- **`return null;` & `return;` farkı:**
  - **_return null;_** → Bu, açıkça “hiçbir şey render etme” anlamına gelir.
    Yani component’in DOM’a hiçbir şey çizmemesini ama yine de geçerli bir React element olarak davranmasını sağlar.
  - **_return;_** → Bu, fonksiyonu hiçbir şey döndürmeden bitirmek anlamına gelir.
    Yani React açısından component’in undefined döndürmesi demek.

### EXTRA NOTES

```
<div className="overflow-hidden">
  <img
    className="hover:scale-110 transition ease-in-out"
    src={image[0]}
    alt="product item"
  />
</div>
```

- yukarıdaki kodda className'i _overflow-hidden_ olan `div` sayesinde `img`teki hover efekti arka plan transparentmiş gibi bir etki yaptı.
