# NOTES TO MYSELF

# ---------------------------FRONTEND--------------------------

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
- **_::-webkit-scrollbar_** → Bu, CSS’te özel bir “pseudo-element”tir (yani sahte eleman). Sadece WebKit tabanlı tarayıcılar için geçerlidir.(Bunlar: Chrome, Safari, Edge’in yeni sürümleri, Opera vs.)

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
- **_slice()_** → sığ (shallow) bir kopya oluşturur. Yani yalnızca ilk seviye elemanları kopyalar.
  Eğer products dizisinin içinde nesneler varsa (örneğin { id: 1, name: 'T-shirt' }), bu nesnelerin kendisini değil, referansını kopyalar.
- **_structuredClone()_** → derin (deep) bir kopya oluşturur. Bu, dizinin veya nesnenin iç içe geçmiş tüm seviyelerini kopyalar.
  Yani artık cartData ve cartItems tamamen bağımsız iki veri haline gelir.

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

yukarıdaki kodda className'i _overflow-hidden_ olan `div` sayesinde `img`teki hover efekti arka plan transparentmiş gibi bir etki yaptı.

---

```
  <div className="flex items-center gap-1 mt-2">
    {/* Static Stars */}
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_dull_icon} alt="" className="w-3.5" />

    <p className="pl-2">(122)</p>
  </div>
```

**_bu kod kısmının static değil de dynamic olmasını isteseydik:_**
Dinamik yıldız gösterimi için:

- Ortalama puanı (örneğin 4.2) alın.
- 5 yıldızlık bir sistemde, her yıldız için dolu, yarım veya boş ikon gösterin.
- Yorum sayısını da dinamik olarak gösterin.
- Örnek kod:

  ```
    const rating = 4.2; // API'den veya props'tan gelir
    const reviewCount = 122; // API'den veya props'tan gelir

  const stars = [];
  for (let i = 1; i <= 5; i++) {
  if (rating >= i) {
  stars.push(<img src={s.star_full_icon} alt="" className="w-3.5" key={i} />);
  } else if (rating > i - 1) {
  stars.push(<img src={s.star_half_icon} alt="" className="w-3.5" key={i} />);
  } else {
  stars.push(<img src={s.star_dull_icon} alt="" className="w-3.5" key={i} />);
  }
  }

  return (
    <div className="flex items-center">
      {stars}
      <p className="pl-2">({reviewCount})</p>
    </div>
  );
  ```

Bu şekilde yıldızlar ve yorum sayısı dinamik olarak güncellenir. Yıldız ikonlarını (dolu, yarım, boş) assetlerinizde bulundurmanız gerekir.

---

**“WebKit” ne?**
WebKit, tarayıcıların web sayfalarını render (çizim) etmek için kullandığı bir render motorudur.
Safari ve Chromium tabanlı tarayıcıların temelinde bulunur.

# ---------------------------BACKEND--------------------------

### DEPENDENCY NOTES

- **_cors_**: to allow the frontend IP to access the backend
- **_dotenv_**: to use environment variables
- **_express_**: to create APIs
- **_jsonwebtoken_**: to enable user authentication
- **_mongoose_**: to manage database connectivity
- **_multer_**: to store images in our cloud
- **_cloudinary_**: our cloud
- **_nodemon_**: to restart the backend whenever change happens
- **_razorpay_**: to setup online payment integration
- **_stripe_**: to setup online payment integration
- **_validator_**: to check the data that is coming from the user is valid or not.
- **_bcrypt_**: to encrypt the user's password and store in the database

- `"type": "module",`: to enable ES6 module support ("import statements")

# ---------------------------ADMIN--------------------------

### DEPENDENCY NOTES

- **_axios_**: to make API calls

### CSS NOTES

- **_sticky top-0 z-50_** → navbar sabit kalır ve üste oturur

### EXTRA NOTES

- vite.config.js'te admin port numarasını 5174, frontend port numarasını 5173 olarak ayarladık. Bu sayede frontend veya admin'den hangisi önce başlarsa başlasın sabit port numarasına sahip olurlar.
