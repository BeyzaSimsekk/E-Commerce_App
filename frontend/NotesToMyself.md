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

### REACT NOTES

- **_NavLink_** sayesinde hangi menü item'e tıklıyorsan onda classname'ine yeni bir class ekleniyor: _active_.
- **_ShopContext.jsx_** → Uygulama genelinde ürünler, para birimi ve teslimat ücretini tek bir yerden yönetmek için bir global context sağlar.
  - _ShopContextProvider_ ile sarmalanan tüm bileşenler (App dahil) bu verilere useContext(ShopContext) kullanarak erişebilir.
- **_useEffect_** → React’te bir bileşen render olduktan sonra çalışacak yan etkileri (side effects) tanımlamak için kullanılır.

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
