// --- app.js (Yetişkin algoritmaları korunmuş, Çocuk algoritmaları ÇİLYAD detaylarıyla güncellenmiş tam sürüm) ---
// DOSYANIN EN BAŞI
const proceduresData = [
    { isim: "İğne Dekompresyon", link: "video/dekompresyon.mp4" },
    { isim: "İğne Krikotirotomi", link: "video/krikotomi.mp4" },
    { isim: "Kemik İçi (IO) Uygulama", link: "video/io.mp4" }
];
// --- QUIZ GAME DATA ---
const quizQuestions = [
    // Kolay Seviye (Temel Bilgiler)
    {
        level: "kolay",
        question: "Normal yetişkin kalp hızı dakikada kaç atımdır?",
        options: ["40-60", "60-100", "100-120", "120-150"],
        correct: 1,
        explanation: "Normal yetişkin kalp hızı dakikada 60-100 atımdır."
    },
    {
        level: "kolay", 
        question: "CPR'da göğüs kompresyonu oranı nedir?",
        options: ["15:2", "30:2", "5:1", "10:2"],
        correct: 1,
        explanation: "CPR'da göğüs kompresyonu ve solunum oranı 30:2'dir."
    },
    {
        level: "kolay",
        question: "Anafilaksi tedavisinde ilk tercih ilaç nedir?",
        options: ["Antihistaminik", "Steroid", "Adrenalin", "Bronkodilatatör"],
        correct: 2,
        explanation: "Anafilaksi tedavisinde ilk tercih adrenalin (epinefrin) IM'dir."
    },
    {
        level: "kolay",
        question: "Hipoglisemi belirtisi hangisidir?",
        options: ["Yüksek ateş", "Terleme ve titreme", "Yavaş nabız", "Yüksek tansiyon"],
        correct: 1,
        explanation: "Hipoglisemide terleme, titreme, baş dönmesi görülür."
    },
    {
        level: "kolay",
        question: "Normal vücut sıcaklığı kaç derecedir?",
        options: ["35-36°C", "36-37.5°C", "37.5-38°C", "38-39°C"],
        correct: 1,
        explanation: "Normal vücut sıcaklığı 36-37.5°C arasındadır."
    },
    {
        level: "kolay",
        question: "Yetişkinde normal solunum sayısı nedir?",
        options: ["8-12/dk", "12-20/dk", "20-30/dk", "30-40/dk"],
        correct: 1,
        explanation: "Normal yetişkin solunum sayısı 12-20/dakikadır."
    },
    {
        level: "kolay",
        question: "Normal kan basıncı değeri nedir?",
        options: ["90/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
        correct: 1,
        explanation: "Normal kan basıncı 120/80 mmHg civarındadır."
    },
    {
        level: "kolay",
        question: "Şok belirtisi hangisidir?",
        options: ["Yavaş nabız", "Sıcak cilt", "Soğuk-nemli cilt", "Yüksek tansiyon"],
        correct: 2,
        explanation: "Şokta soğuk, nemli cilt, hızlı nabız ve düşük tansiyon görülür."
    },
    {
        level: "kolay",
        question: "Bilinçsiz hastada ilk yapılacak nedir?",
        options: ["İlaç vermek", "Havayolu açmak", "Damar yolu açmak", "Nabız bakmak"],
        correct: 1,
        explanation: "Bilinçsiz hastada öncelik havayolu açıklığının sağlanmasıdır."
    },
    {
        level: "kolay",
        question: "Göğüs kompresyonu derinliği ne kadar olmalı?",
        options: ["3-4 cm", "5-6 cm", "7-8 cm", "9-10 cm"],
        correct: 1,
        explanation: "Yetişkinde göğüs kompresyonu derinliği 5-6 cm olmalıdır."
    },
    
    // Orta Seviye
    {
        level: "orta",
        question: "STEMI'de PCI hedef süresi nedir?",
        options: ["60 dakika", "90 dakika", "120 dakika", "180 dakika"],
        correct: 1,
        explanation: "STEMI'de PCI (primer anjiyoplasti) hedef süresi 90 dakikadır."
    },
    {
        level: "orta",
        question: "Çocuklarda bradikardi sınırı nedir?",
        options: ["<50/dk", "<60/dk", "<70/dk", "<80/dk"],
        correct: 2,
        explanation: "Çocuklarda bradikardi genellikle <70/dk olarak kabul edilir."
    },
    {
        level: "orta",
        question: "Magnezyum sülfat dozu (preeklampsi) nedir?",
        options: ["2-4 gr", "4-6 gr", "6-8 gr", "8-10 gr"],
        correct: 1,
        explanation: "Preeklampside MgSO4 yükleme dozu 4-6 gr IV'dir."
    },
    {
        level: "orta",
        question: "Krup tedavisinde kullanılan steroid nedir?",
        options: ["Prednizolon", "Deksametazon", "Hidrokortizol", "Metilprednizolon"],
        correct: 1,
        explanation: "Krup tedavisinde deksametazon 0.6 mg/kg kullanılır."
    },
    {
        level: "orta",
        question: "Hipotermik arrest'te adrenalin ne zaman verilir?",
        options: ["Hemen", "Sıcaklık >30°C", "Sıcaklık >32°C", "Sıcaklık >35°C"],
        correct: 1,
        explanation: "Hipotermik arrest'te sıcaklık >30°C olana kadar adrenalin verilmez."
    },
    
    // Zor Seviye
    {
        level: "zor",
        question: "Crush sendromunda hangi elektrolit bozukluğu en tehlikelidir?",
        options: ["Hiponatremi", "Hiperkalemi", "Hipokalsemi", "Hipernatremi"],
        correct: 1,
        explanation: "Crush sendromunda hiperkalemi en tehlikeli komplikasyondur."
    },
    {
        level: "zor",
        question: "Post-ROSC hedef SpO2 nedir?",
        options: ["88-92%", "92-96%", "94-98%", "98-100%"],
        correct: 2,
        explanation: "Post-ROSC hedef SpO2 %94-98'dir (hiperoksiden kaçınılır)."
    },
    {
        level: "zor",
        question: "Adenozin'in yarı ömrü ne kadardır?",
        options: ["5-10 saniye", "10-15 saniye", "15-20 saniye", "20-30 saniye"],
        correct: 0,
        explanation: "Adenozin'in yarı ömrü çok kısa, yaklaşık 5-10 saniyedir."
    },
    {
        level: "zor",
        question: "Epiglotit'te hangi pozisyon tercih edilir?",
        options: ["Sırt üstü", "Yan yatar", "Tripod pozisyonu", "Trendelenburg"],
        correct: 2,
        explanation: "Epiglotit'te çocuk en rahat ettiği tripod pozisyonunda tutulur."
    },
    {
        level: "zor",
        question: "Torsades de Pointes tedavisinde kullanılan ilaç nedir?",
        options: ["Amiodaron", "Lidokain", "Magnezyum", "Prokainamid"],
        correct: 2,
        explanation: "Torsades de Pointes tedavisinde magnezyum sülfat kullanılır."
    },
    
    // Ek Zor Seviye Sorular (66-95)
    {
        level: "zor",
        question: "Malign hipertermi mortalite oranı nedir?",
        options: ["%10-20", "%20-40", "%40-60", "%60-80"],
        correct: 2,
        explanation: "Malign hipertermi mortalite oranı %40-60 arasındadır."
    },
    {
        level: "zor",
        question: "Siyanür zehirlenmesinde hidroksikobalomin dozu nedir?",
        options: ["2.5 g", "5 g", "7.5 g", "10 g"],
        correct: 1,
        explanation: "Siyanür zehirlenmesinde hidroksikobalomin dozu 5 g IV'dir."
    },
    {
        level: "zor",
        question: "Rhabdomyolizde miyoglobin böbrek hasarı eşiği nedir?",
        options: [">500 ng/mL", ">1000 ng/mL", ">1500 ng/mL", ">2000 ng/mL"],
        correct: 2,
        explanation: "Rhabdomyolizde miyoglobin >1500 ng/mL böbrek hasarı riski yaratır."
    },
    {
        level: "zor",
        question: "Hipotermide J (Osborn) dalgası hangi sıcaklıkta görülür?",
        options: ["<35°C", "<32°C", "<30°C", "<28°C"],
        correct: 1,
        explanation: "J (Osborn) dalgası genellikle <32°C'de görülmeye başlar."
    },
    {
        level: "zor",
        question: "Çocukta epiglotit mortalite oranı nedir?",
        options: ["%1-2", "%5-10", "%10-15", "%15-20"],
        correct: 0,
        explanation: "Çocukta epiglotit mortalite oranı %1-2'dir (erken tanı ve tedavi ile)."
    },
    {
        level: "zor",
        question: "Akut aort diseksiyonunda D-dimer negatif olma oranı nedir?",
        options: ["%1", "%5", "%10", "%15"],
        correct: 1,
        explanation: "Akut aort diseksiyonunda D-dimer %5 oranında negatif olabilir."
    },
    {
        level: "zor",
        question: "Hiperkalsemik krizde kalsitonin dozu nedir?",
        options: ["2-4 Ü/kg", "4-8 Ü/kg", "8-12 Ü/kg", "12-16 Ü/kg"],
        correct: 1,
        explanation: "Hiperkalsemik krizde kalsitonin dozu 4-8 Ü/kg'dır."
    },
    {
        level: "zor",
        question: "Çocukta status epilepticus refrakter kabul edilme süresi nedir?",
        options: ["30 dakika", "45 dakika", "60 dakika", "90 dakika"],
        correct: 2,
        explanation: "Çocukta status epilepticus 60 dakika sonra refrakter kabul edilir."
    },
    {
        level: "zor",
        question: "Akut pankreatitte APACHE II skoru kaç puanın üzeri kötü prognoz göstergesidir?",
        options: [">6", ">8", ">10", ">12"],
        correct: 1,
        explanation: "APACHE II skoru >8 puan kötü prognoz göstergesidir."
    },
    {
        level: "zor",
        question: "Çocukta sepsis tanısında PELOD-2 skoru kaç organa bakar?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "PELOD-2 skoru 5 organ sistemini değerlendirir."
    },
    {
        level: "zor",
        question: "Hiponatremi düzeltmesinde osmotik demiyelinizasyon riski hangi hızda artar?",
        options: [">8 mEq/L/gün", ">10 mEq/L/gün", ">12 mEq/L/gün", ">15 mEq/L/gün"],
        correct: 2,
        explanation: "Osmotik demiyelinizasyon riski >12 mEq/L/gün düzeltme hızında artar."
    },
    {
        level: "zor",
        question: "Çocukta diabetik ketoasidoz beyin ödemi riski hangi faktörle artar?",
        options: ["Hızlı sıvı", "Yavaş insülin", "Bikarbonat", "Hepsi"],
        correct: 3,
        explanation: "DKA'da beyin ödemi riski hızlı sıvı, bikarbonat ve ani glukoz düşüşü ile artar."
    },
    {
        level: "zor",
        question: "Malign hipertermi tedavisinde dantrolen maksimum dozu nedir?",
        options: ["5 mg/kg", "10 mg/kg", "15 mg/kg", "20 mg/kg"],
        correct: 1,
        explanation: "Malign hipertermide dantrolen maksimum dozu 10 mg/kg'dır."
    },
    {
        level: "zor",
        question: "Organofosfor zehirlenmesinde pralidoksim dozu nedir?",
        options: ["15-25 mg/kg", "25-50 mg/kg", "50-75 mg/kg", "75-100 mg/kg"],
        correct: 1,
        explanation: "Organofosfor zehirlenmesinde pralidoksim dozu 25-50 mg/kg'dır."
    },
    {
        level: "zor",
        question: "Hiperosmolar hiperglisemik durumda osmolalite sınırı nedir?",
        options: [">300 mOsm/kg", ">320 mOsm/kg", ">340 mOsm/kg", ">360 mOsm/kg"],
        correct: 1,
        explanation: "HHS'de osmolalite >320 mOsm/kg olarak tanımlanır."
    },
    {
        level: "zor",
        question: "Aort diseksiyonu DeBakey sınıflamasında Tip III nedir?",
        options: ["Çıkan aort", "Aort arkı", "İnen aort", "Abdominal aort"],
        correct: 2,
        explanation: "DeBakey Tip III sadece inen aortu tutar."
    },
    {
        level: "zor",
        question: "Çocukta defibrilasyon maksimum dozu nedir?",
        options: ["4 J/kg", "6 J/kg", "8 J/kg", "10 J/kg"],
        correct: 3,
        explanation: "Çocukta defibrilasyon maksimum dozu 10 J/kg'dır."
    },
    {
        level: "zor",
        question: "Metanol zehirlenmesinde fomepizol dozu nedir?",
        options: ["10 mg/kg", "15 mg/kg", "20 mg/kg", "25 mg/kg"],
        correct: 1,
        explanation: "Metanol zehirlenmesinde fomepizol yükleme dozu 15 mg/kg'dır."
    },
    {
        level: "zor",
        question: "Tension pnömotoraks'ta hangi interkostal aralık tercih edilir?",
        options: ["2. IKA", "3. IKA", "4. IKA", "5. IKA"],
        correct: 0,
        explanation: "Tension pnömotoraks'ta 2. interkostal aralık midklaviküler hattan tercih edilir."
    },
    {
        level: "zor",
        question: "Kardiyak tamponad'da Beck triadı nedir?",
        options: ["JVD, hipotansiyon, kalp sesleri azalması", "Taşikardi, hipertansiyon, dispne", "Bradikardi, hipertansiyon, düzensiz solunum", "Ateş, taşikardi, hipotansiyon"],
        correct: 0,
        explanation: "Beck triadı: JVD, hipotansiyon ve kalp seslerinde azalma."
    },
    {
        level: "zor",
        question: "Hiperkalsemi tedavisinde bifosfonat etkisi ne zaman başlar?",
        options: ["2-4 saat", "12-24 saat", "24-48 saat", "48-72 saat"],
        correct: 2,
        explanation: "Bifosfonatların hiperkalsemi üzerine etkisi 24-48 saatte başlar."
    },
    {
        level: "zor",
        question: "Çocukta sepsis tanısında hangi skor kullanılır?",
        options: ["SOFA", "qSOFA", "PELOD", "PRISM"],
        correct: 2,
        explanation: "Çocukta sepsis tanısında PELOD (Pediatric Logistic Organ Dysfunction) skoru kullanılır."
    },
    {
        level: "zor",
        question: "Akut böbrek yetmezliğinde RIFLE sınıflamasında 'I' nedir?",
        options: ["Injury", "Insufficiency", "Ischemia", "Inflammation"],
        correct: 0,
        explanation: "RIFLE sınıflamasında 'I' Injury (yaralanma) anlamına gelir."
    },
    {
        level: "zor",
        question: "Rhabdomyolizde CK düzeyi hangi değerin üzerinde tanı koydurur?",
        options: [">1.000 U/L", ">5.000 U/L", ">10.000 U/L", ">50.000 U/L"],
        correct: 1,
        explanation: "Rhabdomyoliz tanısı için CK >5.000 U/L olmalıdır."
    },
    {
        level: "zor",
        question: "Hipotermik arrest'te hangi sıcaklıkta kardiyak arrest riski en yüksektir?",
        options: ["<35°C", "<32°C", "<28°C", "<25°C"],
        correct: 2,
        explanation: "Hipotermide <28°C'de kardiyak arrest riski en yüksektir."
    },
    {
        level: "zor",
        question: "Çocukta status epilepticus mortalite oranı nedir?",
        options: ["%1-3", "%3-5", "%5-10", "%10-15"],
        correct: 1,
        explanation: "Çocukta status epilepticus mortalite oranı %3-5'tir."
    },
    {
        level: "zor",
        question: "Akut pankreatitte Balthazar CT skorunda Grade E nedir?",
        options: ["Normal pankreas", "Fokal büyüme", "Peripankreatik sıvı", "Nekroz >50%"],
        correct: 3,
        explanation: "Balthazar Grade E pankreasta nekroz >50% olmasıdır."
    },
    {
        level: "zor",
        question: "Siyanür zehirlenmesinde laktat/piruvat oranı nasıldır?",
        options: ["Normal", "Düşük", "Yüksek", "Değişken"],
        correct: 2,
        explanation: "Siyanür zehirlenmesinde laktat/piruvat oranı yüksektir."
    },
    {
        level: "zor",
        question: "Malign hipertermi insidansı nedir?",
        options: ["1:5.000", "1:15.000", "1:50.000", "1:100.000"],
        correct: 2,
        explanation: "Malign hipertermi insidansı yaklaşık 1:50.000'dir."
    }
];

// Quiz Game State
let quizState = {
    currentQuestion: 0,
    score: 0,
    timeLeft: 60,
    gameActive: false,
    timer: null,
    questions: [],
    startTime: null,
    level: 'kolay'
};

// Algoritma verileri
const algorithmData = {
    yetiskin: {
    aks: { category: "cardiac", title: "🫀 Akut Koroner Sendrom (AKS)", 
ekgList: [
        { isim: "Derivasyonlar ve Komşu Yüzeyler", link: "img/ekg1.jpg" }, // Yeni eklediğimiz
        { isim: "Anterior MI", link: "img/ant.jpg" },
        { isim: "Inferior MI", link: "img/nfr.jpg" },
        { isim: "Lateral MI", link: "img/lateralmı.jpg" },
        { isim: "ST Segment Analizi", link: "img/STSEGMENT.jpg" }
    ],

steps: [
      {type:"step", text:"Güvenli çevre ve ABCDE değerlendirmesi yap."},
      {type:"action", text:"✅ Hemen 12 Derivasyonlu EKG çek ve ritmi yorumla (İlk 10 dakika hedefi)."},
      {type:"drug", text:"💊 Aspirin: 300 mg (Çiğnetilerek verilir; kontrendikasyon yoksa)."},
      {type:"drug", text:"💊 Nitrat (Sistolik KB > 90 ise): İsordil 5 mg SL veya Nitrolingual 0.4 mg sprey; 5 dk arayla max 3 doz."},
      {type:"warning", text:"⚠️ Sağ MI veya son 48 saatte PDE5 inhibitörü (ör. Viagra) kullanımı varsa NİTRAT VERME!"},
      {type:"drug", text:"💊 Ağrı kontrolü: Morfin 2-4 mg IV (Yavaş infüzyon, gerekiyorsa tekrarlanır)."},
      {type:"step", text:"🔹 STEMI ise: Uygun merkeze (PCI/Anjiyo merkezi) nakli başlat ve KKM ile iletişim kur."},
      {type:"note", text:"ÖNEMLİ: Oksijen yalnızca SpO2 <%94 veya solunum sıkıntısı varsa verilir."},
      {type:"note", text:"Sağ Ventrikül MI: İnferior MI (D2, D3, aVF) varsa sağ derivasyonları (V3R, V4R) kontrol et; hipotansiyon varsa SF ile sıvı yüklemesi düşün."},
      {type:"note", text:"Damar Yolu: Anjiyo girişimi genellikle sağ koldan yapıldığı için tercihen sol koldan damar yolu aç."}
    ]},

kardiyojenik_sok_y: {
    category: "shock",
    title: "🫀 Yetişkin Kardiyojenik Şok Müdahalesi",
    steps: [
        { type: "step", text: "🔹 **Hızlı Değerlendirme:** Sistolik KB <90 mmHg, soğuk/nemli cilt, idrar azlığı ve akciğerde raller (sol kalp yetmezliği bulgusu)." },
        { type: "action", text: "✅ **Pozisyon & Oksijen:** Akciğer ödemi varsa yarı oturur pozisyon ver. SpO2 >%94 hedefle, gerekirse CPAP/BPAP başla." },
        { type: "warning", text: "⚠️ **Sıvı Tedavisi (Çok Kısıtlı):** Sadece ral yoksa 250 ml SF ile deneme yap. Akciğer sesleri bozulursa sıvıyı hemen durdur!" },
        { type: "drug", text: "💊 **Vazopresör/İnotrop:** \n• **Noradrenalin:** OAB <65 mmHg ise ilk tercih. \n• **Dobutamin:** KB >80-90 mmHg ise kalp debisini artırmak için ekle." },
        { type: "action", text: "💉 **Nedene Yönelik:** 12 derivasyonlu EKG çek. Neden MI ise acil anjiyografi (PCI) hazırlığı yap." },
        { type: "note", text: "📝 **Kritik Not:** Agresif sıvı yüklemesi hastayı hızla akciğer ödemine sokabilir. İlaç dozlarını perfüzyon yanıtına göre titre et." }
    ]
},

post_rosc_y: {
    category: "cardiac",
    title: "🏥 Erişkin Resüsitasyon Sonrası Bakım (Post-ROSC)",
    steps: [
        { type: "step", text: "🔹 **Solunum:** Hedef SpO2: %94-%98 (Hiperoksiden kaçın!). PaCO2 hedefi: 35-45 mmHg. Hasta komatöz ise (GKS <8) entübe et." },
        { type: "action", text: "✅ **Dolaşım:** Hedef OAB ≥65 mmHg ve Sistolik KB >90 mmHg. Hipovolemi varsa 1-2 L İzotonik bolus uygula." },
        { type: "drug", text: "💊 **Vazopresör:** Hedef tansiyona ulaşılamazsa Noradrenalin veya Adrenalin infüzyonu başla." },
        { type: "action", text: "🚨 **Kardiyak:** 12 derivasyonlu EKG çek. STEMI veya şüphesi varsa acilen Anjiyografi (PCI) ünitesine naklet." },
        { type: "warning", text: "⚠️ **Nörolojik Koruma:** Yanıt vermeyen hastada sıcaklığı 32°C-36°C arasında 24 saat sabit tut. Ateşi (>37.7°C) agresif tedavi et!" },
        { type: "step", text: "🩸 **Metabolik:** Kan şekerini 140-180 mg/dL aralığında tut. Potasyum ve magnezyumu monitorize et." },
        { type: "note", text: "📝 **Kritik:** Nörolojik prognoz tayini için en az 72 saat beklenmelidir. Hastayı koroner yoğun bakımı olan bir merkeze naklet." }
    ]
},

gebe_hipertansiyon: {
    category: "obstetric",
    title: "🤰 Gebe Hipertansiyonu / Preeklampsi / Eklampsi",
    steps: [
        { type: "step", text: "🔹 **Değerlendirme:** KB ≥140/90 mmHg. Baş ağrısı, görme bozukluğu (ışık çakması) veya sağ üst kadran ağrısını kontrol et." },
        { type: "action", text: "✅ **Pozisyon:** Venöz dönüşü ve uteroplasental akımı artırmak için gebeyi mutlaka **Sol Yan (Left Lateral)** pozisyona yatır." },
        { type: "warning", text: "⚠️ **Tanı:** KB ≥140/90 + Organ hasarı = **Preeklampsi**. Bu tabloya Nöbet eklenirse = **Eklampsi**." },
        { type: "drug", text: "💊 **Magnezyum Sülfat (MgSO4):** \n• **Yükleme:** 4-6 gr MgSO4 (15-20 dk IV). \n• **İdame:** 1-2 gr/saat IV infüzyon." },
        { type: "action", text: "🔍 **MgSO4 Toksisite Takibi:** Diz kapağı refleksi kaybı, solunum <12/dk veya idrar çıkışında azalma varsa dur! (Antidot: Kalsiyum Glukonat)." },
        { type: "drug", text: "💊 **Antihipertansif (KB ≥160/110 ise):** \n• **Labetalol:** 20 mg IV bolus. \n• **Hidralazin:** 5 mg IV yavaş puşe." },
        { type: "note", text: "📝 **Kritik:** 20. haftadan sonraki her HT, aksi kanıtlanana kadar Preeklampsidir. Tek kesin tedavi doğumdur; hızla Kadın Doğum ünitesine naklet." }
    ]
},

hipotermi_arrest: {
    category: "cardiac",
    title: "❄️ Yetişkin Hipotermik Kalp Durması",
    steps: [
        { type: "step", text: "🔹 **Temel Kural:** Hasta ısıtılmadan 'ölü' kabul edilmez. Hastayı sarsmadan müdahale et (VF tetiklenebilir)." },
        { type: "action", text: "✅ **Yalıtım:** Islak giysileri çıkar, hastayı kurula ve battaniyelerle dış ortamdan izole et." },
        { type: "warning", text: "🌡️ **Sıcaklık <30°C ise:** Şok sayısı 3 ile sınırlanır. Isı >30°C olana kadar **ADRENALİN VERİLMEZ.**" },
        { type: "drug", text: "💊 **Sıcaklık 30°C-34°C ise:** Adrenalin uygulama aralıklarını iki katına çıkar (6-10 dakikada bir)." },
        { type: "action", text: "🔥 **Isıtma:** Isıtılmış IV sıvılar (38-42°C) ve nemlendirilmiş sıcak O2 ver. Aktif dış ısıtma uygula." },
        { type: "step", text: "🚨 **İleri Destek:** Şiddetli vakalarda en etkili ısıtma yöntemi ECMO veya Kardiyopulmoner Bypass'tır." },
        { type: "note", text: "📝 **Kritik:** Resüsitasyon süresi hipotermide çok daha uzun tutulabilir. Transfer sırasında ısıtma işlemine devam et." }
    ]
},
    astim: { category: "respiratory", title: "🫁 Astım Atağı", steps: [
      {type:"step", text:"SpO2 %94-98 olacak şekilde oksijen başla."},
      {type:"drug", text:"Salbutamol 2.5-5 mg Nebül; gerekirse tekrarla."},
      {type:"drug", text:"İpratropium 500 mcg Nebül (şiddetli atağa ek)."},
      {type:"drug", text:"Metilprednizolon 1-2 mg/kg IV (Maks 125 mg)."},
      {type:"drug", text:"Magnezyum sülfat 2 g IV (20 dk infüzyon) — ağır/ölümcül atakta düşün."},
      {type:"warning", text:"Sessiz Toraks veya bilinç bozukluğu varsa erken entübasyon düşün."}
    ]},
    koah: { category: "respiratory", title: "🌬️ KOAH Alevlenmesi", steps: [
      {type:"warning", text:"Hedef SpO2 %88-92 arası tutulmalıdır."},
      {type:"drug", text:"Salbutamol + İpratropium Kombine Nebül."},
      {type:"drug", text:"Prednol 40-80 mg IV."},
      {type:"step", text:"Solunum yetmezliği derinleşirse NIV veya entübasyon hazırlığı yap."}
    ]},
    bradikardi: { category: "cardiac", title: "💓 Bradikardi", 
ekgList: [
        { isim: "Mobitz Tip 1 (Wenckebach)", link: "img/tp1.jpg" },
        { isim: "Mobitz Tip 2", link: "img/tp2.jpg" },
        { isim: "3. Derece (Tam) Blok", link: "img/tp3.jpg" }
    ],
videoList: [
        { isim: "Pace Uygulaması", link: "video/pace.mp4", renk: "#2563eb" }
    ],
steps: [
      {type:"step", text:"🔹 Güvenli çevre ve ABCDE değerlendirmesi yap. (Havayolu ve solunumu destekle, monitorize et)."},
      {type:"decision", title:"Perfüzyon Bozuk mu?", text:"✅ Perfüzyon Bozuk mu? Hipotansiyon, bilinç değişikliği, şok bulgusu, iskemik göğüs ağrısı veya akut kalp yetmezliği var mı?"},
      {type:"drug", text:"💊 Atropin: 0.5 mg IV (Her 3-5 dakikada bir tekrarlanabilir, maksimum 3 mg)."},
      {type:"step", text:"🔹 Atropin yanıtsızsa: Beklemeden Transkütan Pacing (TCP) hazırlığına başla veya inotrop destek düşün."},
      {type:"drug", text:"💊 Alternatif İnfüzyonlar: Dopamin 2-10 mcg/kg/dk veya Adrenalin 2-10 mcg/kg/dk infüzyonu."},
      {type:"step", text:"🔹 Nedene Yönelik Tedavi: Altta yatan nedeni (ilaç intoksikasyonu, elektrolit bozukluğu vb.) araştır ve uzman konsültasyonu iste."},
      {type:"warning", text:"🚨 Asistoli Riski: Eğer Mobitz Tip II AV Blok, 3. Derece Kalp Bloğu veya 3 saniyeden uzun ventriküler duraklama varsa, Atropin yanıtını beklemeden doğrudan Pacing hazırlığı yap."},
      {type:"warning", text:"Pacing ve Sedasyon: Transkütan Pacing (TCP) ağrılıdır; hasta uyanıksa sedasyon ve analjezi planla."},
      {type:"warning", text:"Atropin Dozu: Atropin'in 0.5 mg'dan az dozlarda uygulanması paradoksal bradikardiye yol açabilir."},
      {type:"warning", text:"İlaç Etkileşimleri: Kalp nakli yapılmış hastalarda Atropin etkisiz olabilir; bu durumda doğrudan pacing veya adrenalin/izoprenalin gibi ajanlar düşün."}
    ]},
    tasikardi: { category: "cardiac", title: "⚡ Taşikardi", 
ekgList: [
        { isim: "SVT (Dar Kompleks)", link: "img/svt1.jpg" },
        { isim: "Atrial Fibrilasyon", link: "img/af1.jpg" },
        { isim: "Ventriküler Taşikardi (VT)", link: "img/vt.jpg" },
        { isim: "Polimorfik VT (Torsades)", link: "img/polvt.jpg" }
    ],
videoList: [
        { isim: "🎥 VAGAL MANEVRA", link: "video/vagal.mp4", renk: "#16a34a" }, // Yeşil buton
        { isim: "🎥 KARDİYOVERSİYON", link: "video/sync.mp4", renk: "#2563eb" }  // Mavi buton
    ],
steps: [
      {type:"step", text:"🔹 Güvenli çevre ve ABCDE değerlendirmesi yap. (Oksijen desteği sağla, monitorize et, damar yolu aç)."},
      {type:"decision", title:"Stabilite Kontrolü", text:"✅ Stabilite Kontrolü: Şok bulguları, Hipotansiyon, Akut Kalp Yetmezliği, İskemik Göğüs Ağrısı veya Bilinç değişikliği var mı?"},
      {type:"action", text:"⚡ UNSTABİL ise: Vakit kaybetmeden Senkronize Kardiyoversiyon uygula. (Cihazı 'Sync' moduna almayı unutma!)."},
      {type:"step", text:"🔹 Dar QRS & Düzenli (SVT Şüphesi): Hasta stabilse önce Vagal Manevralar uygula."},
      {type:"drug", text:"💊 Adenozin: 6 mg IV hızlı bolus; yanıt yoksa 12 mg; yine yanıt yoksa bir kez daha 12 mg uygula. (Her doz sonrası 20 cc SF hızlıca verilir)."},
      {type:"step", text:"🔹 Geniş QRS / VT Şüphesi: Hasta stabilse Amiodaron 300 mg IV (bazı protokollerde 150 mg ile başlanır; 10-20 dk içinde infüzyon yapılabilir)."},
      {type:"step", text:"🔹 Ritim Kontrolü: 12 derivasyonlu EKG çekerek ritmi (Atrial Fibrilasyon, Flutter vb.) netleştir ve uzman konsültasyonu iste."},
      {type:"note", text:"⚡ Senkronize Kardiyoversiyon Hazırlık: Hastayı bilgilendir ve mümkünse sedasyon/analjezi uygula."},
      {type:"note", text:"Sync Modu: Defibrilatörü aç ve 'SYNC' tuşuna bas. Monitörde her R dalgasının üzerinde bir işaret olduğunu doğrula."},
      {type:"note", text:"Enerji Seçimi: Dar Düzenli (SVT/A. Flutter): 50-100 J; Dar Düzensiz (A. Fibrilasyon): 120-200 J; Geniş Düzenli (VT): 100 J."},
      {type:"warning", text:"🚨 Senkronizasyon Şart: Eğer cihaz 'Sync' modunda değilse, şok T dalgası üzerine denk gelerek hastayı VF'ye sokabilir."},
      {type:"note", text:"Adenozin Uygulaması: Adenozin kısa yarı ömürlüdür; kalbe en yakın büyük venden (tercihen antekübital) uygulanmalı ve hemen arkasından hızlı flush yapılmalıdır."},
      {type:"warning", text:"Amiodaron: VT vakalarında Amiodaron uygulanırken tansiyon yakından izlenmelidir (hipotansiyon yapabilir)."},
      {type:"warning", text:"Nabızsız VT: Geniş kompleksli taşikardide nabız yoksa arrest protokolüne geç (şoklanabilir ritim protokolü)."}
    ]},
    arrest: { category: "cardiac", title: "⚡ Kardiyak Arrest", steps: [
      {type:"action", text:"✅ KPR 30:2 başlat: Göğüs kompresyonu derinliği 5-6 cm, hız 100-120/dk. Tam geri gelmeye izin ver; kesintileri minimize et."},
      {type:"action", text:"✅ Ritim Analizi: Defibrilatör bağlandığında ritmi değerlendir."},
      {type:"decision", title:"VF / Nabızsız VT (Şoklanabilir)", text:"Hemen Şok uygula (Monofazik 360 J; Bifazik 150-200 J). Şoktan hemen sonra beklemeden 2 dk KPR yap."},
      {type:"decision", title:"NEA / Asistoli (Şoklanamaz)", text:"Şok uygulama. Hemen 2 dk KPR yap ve en kısa sürede Adrenalin ver."},
      {type:"drug", text:"💊 Adrenalin: 1 mg IV/IO (Her 3-5 dakikada bir; KPR döngüsü sırasında uygulanır)."},
      {type:"drug", text:"💊 Amiodaron: VF/nVT devam ediyorsa 3. şok sonrası 300 mg IV/IO; hala devam ediyorsa 5. şok sonrası 150 mg IV/IO uygula."},
      {type:"step", text:"🔹 5H - 5T nedenlerini değerlendir ve düzelt: Hipovolemi, Hipoksi, Asidoz, Elektrolit bozuklukları (H/K), Hipotermi; Tansiyon pnömotoraks, Tamponad, Toksinler, Pulmoner tromboz, Koroner tromboz."},
      {type:"step", text:"✅ İleri Havayolu: Entübasyon veya SGA yerleştirilirse kompresyonu kesmeden dakikada 10 soluk (6 saniyede bir) ver."},
      {type:"note", text:"EtCO2 İzlemi: Kapnografi varsa ani EtCO2 yükselmesi (>40 mmHg) ROSC için güvenilir belirtidir."},
      {type:"warning", text:"🚨 Şoktan Sonra Nabız Bakma: Şok uygulandıktan hemen sonra nabız kontrolü yapma; doğrudan 2 dakika KPR'ye devam et. Nabız kontrolü yalnızca 2 dakikalık periyot sonunda ritim değişikliği varsa yapılır."},
      {type:"note", text:"Yüksek Kaliteli KPR: Her 2 dakikada bir kompresyon yapan kişiyi değiştir; kesintileri en aza indir."},
      {type:"note", text:"Adrenalin Zamanlaması: Şoklanamaz ritimlerde adrenalin mümkün olan en kısa sürede; şoklanabilir ritimlerde adrenalin genellikle 2. şoktan sonra başlanır."}
    ]},
    hipovolemi: { category: "shock", title: "💧 Hipovolemik Şok", steps: [
      {type:"step", text:"🔹 Güvenli çevre ve ABCDE değerlendirmesi yap: Travmanın birincil bakısını tamamla, kanama odağını belirle."},
      {type:"action", text:"✅ Kanamayı Durdur: Dış kanama varsa direkt bası, sıkı bandaj veya gerekirse turnike uygula."},
      {type:"decision", title:"Şok Belirtileri", text:"✅ Şok belirtilerini kontrol et: Bilinç değişikliği, taşikardi, soğuk-nemli cilt, uzamış kapiller dolum zamanı var mı?"},
      {type:"step", text:"🔹 Pozisyon ve Isı Kontrolü: Hastayı düz yatır (kontrendikasyon yoksa bacakları yükselt) ve hipotermiden korumak için üzerini ört."},
      {type:"action", text:"✅ Yüksek Akımlı Oksijen: Oksijen desteği sağla ve SpO2 takibi yap."},
      {type:"action", text:"💉 Damar Yolu: En az iki adet geniş çaplı (14-16 G) IV hat aç. IV açılamıyorsa IO (intraosseöz) yol dene."},
      {type:"drug", text:"💊 Sıvı Resüsitasyonu (Erişkin): Başlangıç olarak 1 litre ısıtılmış izotonik kristaloid (SF/RL) ver; yanıtı değerlendir. Gerektiğinde tekrarla, ancak aşırı sıvıdan kaçın."},
      {type:"drug", text:"💊 Sıvı Resüsitasyonu (Çocuk): 20 ml/kg izotonik kristaloid bolus uygula; yanıtı değerlendir ve gerektiğinde tekrarla."},
      {type:"note", text:"🔹 Permisif Hipotansiyon: Kanama kontrol altına alınana kadar tansiyonu çok yükseltme; hedef sistolik KB genellikle 80-90 mmHg civarıdır (duruma göre kurum protokolü ile uyumlu hareket et)."},
      {type:"warning", text:"🚨 Ölümcül Üçleme (Lethal Triad): Hipotermi, Asidoz ve Koagülopatiyi önlemek hayati önem taşır. Hastayı sıcak tutmak, kanama kontrolü ve uygun kan ürünleri yönetimi önceliklidir."},
      {type:"note", text:"🔹 Gizli Kanama Odakları: Dışarıda kan yoksa Göğüs, Batın, Pelvis ve Uzun Kemikler (Femur) odaklan. Pelvis kırığı şüphesinde pelvik kemer kullan."},
      {type:"note", text:"🔹 Nabız ve Tansiyon: Tansiyon düşmesi geç bir bulgudur; erken belirtiler taşikardi ve daralmış nabız basıncı olabilir."},
      {type:"warning", text:"⚠️ Kristaloid Sınırı: Aşırı kristaloid verilmesi dilüsyonel koagülopatiye yol açabilir. 'Kontrollü sıvı' ve kanama kontrolü stratejisini takip et; gerektiğinde kan ürünleri ve cerrahi/embolizasyon planla."}
    ]},
    crush: { category: "trauma", title: "🧱 Crush (Ezilme) Sendromu", steps: [
      {type:"step", text:"🔹 Güvenli çevre ve ABCDE değerlendirmesi yap: Olay yerinde ikincil çökme riskine karşı dikkatli ol."},
      {type:"action", text:"✅ Kurtarma Öncesi Sıvı Resüsitasyonu: Ezilme altındaki ekstremite serbestleşmeden önce damar yolunu aç ve erişkinde 1 L/saat hızla izotonik SF başlat; çocukta 15-20 ml/kg/saat hızla başlat."},
      {type:"action", text:"✅ Kompresyon Kaldırıldıktan Sonra: Bası kalktığı an açığa çıkacak toksinlerin (K+, miyoglobin vb.) dolaşıma karışacağını unutma; hızlı sıvı resüsitasyonuna agresif şekilde devam et."},
      {type:"action", text:"💊 Hiperkalemi Yönetimi: EKG takibi yap; sivri T dalgaları veya geniş QRS varsa Kalsiyum Glukonat %10 10 ml IV (kalbi korumak için) uygula. İnsülin + dekstroz protokollerini düşün."},
      {type:"action", text:"💊 Diğer Önlemler: Hiperkalemi riskine karşı sürekli EKG, idrar çıkışı takibi başlat (hedef erişkinde 100-200 ml/saat). Gerekirse idrar çıkışını artırmak için idrar sondası veya diüretik düşün."},
      {type:"note", text:"⚠️ Sıvı Seçimi: Hipovolemiyi düzeltmek için potasyum içeren (ör. Laktatlı Ringer) sıvılardan kaçın; sadece izotonik SF kullan."},
      {type:"warning", text:"🚨 Reperfüzyon Hasarı: Bası kalktığında dolaşıma karışacak toksinler ani metabolik bozukluklara yol açabilir; elektrolitleri, asidozu ve renal fonksiyonu yakından izle."},
      {type:"note", text:"🔹 Böbrek Koruması: Myoglobinüri ve akut böbrek yetmezliği riskine karşı idrar çıkışını hedefle (100-200 ml/saat erişkin hedefi); gerektiğinde nefroloji/yoğun bakım ile koordinasyon."},
      {type:"warning", text:"⚠️ İzlem ve Transfer: Ciddi ezilme vakalarında erken yoğun bakım ve nefroloji konsültasyonu; gerektiğinde hemodiyaliz hazırlığı yap." }
    ]},
    kafa: { category: "neuro", title: "🧠 Kafa Travması (Yetişkin)", steps: [
      {type:"step", text:"🔹 Güvenli çevre ve ABCDE değerlendirmesi yap: Olay yeri güvenliğini sağla, C-spine immobilizasyonunu düşün."},
      {type:"action", text:"✅ Havayolu ve C-spine: Bilinci azalmış veya GKS ≤ 8 olan hastada erken entübasyon düşün; entübasyon sırasında C-spine immobilizasyonunu koru."},
      {type:"decision", title:"GKS Değerlendirmesi", text:"GKS (Glasgow Coma Scale) hesapla; GKS ≤ 8 ise ileri havayolu ve hızlı nakil planla."},
      {type:"action", text:"✅ Pupiller ve Nöro Muayene: Pupillerin büyüklüğünü, simetrisini ve ışık refleksini kontrol et; fokal nörolojik bulgular için ayrıntılı muayene yap."},
      {type:"action", text:"✅ Vital ve Solunum Yönetimi: Oksijen ver; SpO2 hedefi ≥ 94% (entübasyon gerekiyorsa ventilasyon parametrelerine dikkat et). Hipoksi ve hipotansiyondan kaçın."},
      {type:"action", text:"✅ Kan Basıncı ve Perfüzyon: Sistolik KB < 90 mmHg ise hipotansiyonun düzeltilmesi önceliklidir; hipotansiyon beyin perfüzyonunu bozar ve mortaliteyi artırır."},
      {type:"step", text:"🔹 Kanama Kontrolü ve Yaralanma Değerlendirmesi: Aktif dış kanama varsa kontrol et; kafa derisi yaralanmaları kan kaybına neden olabilir."},
      {type:"action", text:"✅ Görüntüleme: Stabil hastada hızlı BT kafa (non-contrast CT) çekilmesi için hazırlık yap; instabil hastada stabilizasyon önceliklidir."},
      {type:"decision", title:"Cerrahi Gerekli mi?", text:"BT'de epidural/subdural hematom, büyük intrakraniyal kanama, kitlesel lezyon veya artan KİBAS bulguları varsa nöroşirürji konsültasyonu ve acil cerrahi değerlendirme gereklidir."},
      {type:"action", text:"💊 İlaç ve Metabolik Yönetim: Antikoagülan/antiplatelet öyküsü varsa tersine çevirme (protrombin kompleks konsantresi, vitamin K, taze donmuş plazma vb.) planla; hiperglisemi ve hiponatremiden kaçın."},
      {type:"action", text:"💊 KİBAS ve Herniasyon Bulguları: Ani pupiller asimetri, azalan bilinç, Cushing triadı (hipertansiyon, bradikardi, düzensiz solunum) varsa acil müdahale; gerekirse mannitol 0.5-1 g/kg IV veya hipertonik salin (3%) titrasyonla düşün (uzman yönlendirmesiyle)."},
      {type:"step", text:"🔹 Entübasyon Notları: Entübasyon sırasında hiperventilasyon (PaCO2 < 30 mmHg) rutin olarak önerilmez; sadece akut herniasyon şüphesinde kısa süreli kontrollü hiperventilasyon düşünülebilir."},
      {type:"note", text:"🔹 Transfer ve İzlem: Kafa travması olan hastalar için erken nöroşirürji/yoğun bakım koordinasyonu; stabilizasyon sonrası hızlı nakil planla."},
      {type:"warning", text:"⚠️ Antikoagülanlar: Antikoagülan veya trombosit inhibitörü kullanan hastalarda kanama riski yüksek; tersine çevirme ve hematom progresyonu için erken iletişim şart."},
      {type:"note", text:"🔹 Belgeleme: Olay mekanizması, bilinç kaybı süresi, nörolojik değişiklikler ve verilen ilaçlar/uygulamalar ayrıntılı olarak kaydedilmeli."}
    ]},
    vertigo: { category: "neuro", title: "🌀 Vertigo", steps: [
      {type:"step", text:"ABCDE, nörolojik muayene ve vital bulgular."},
      {type:"drug", text:"Metoklopramid 10 mg IV veya Ondansetron 4 mg IV."},
      {type:"warning", text:"Fokal nörolojik bulgu varsa inme ayırıcı tanısını düşün."}
    ]},
    yanik: { 
      category: "trauma", 
      title: "🔥 Yanık Algoritması", 
      image: "img/yanik_yuzdesi.jpg",
      steps: [
        {type:"action", text:"ABCDE, yanma sürecini durdur, elbiseleri ve takıları çıkar."},
        {type:"step", text:"Yanık yüzdesini Dokuzlar Kuralı ile belirle (1. dereceyi sayma)."},
        {type:"drug", text:"Parkland formülü: 4 ml x kg x %yanık (ilk 8 saatte toplamın yarısı)."},
        {type:"warning", text:"İnhalasyon yanığı şüphesi varsa entübasyon hazırlığı yap."},
        {type:"drug", text:"Ağrı kontrolü: Morfin 0.1 mg/kg veya Fentanil 1-2 mcg/kg IV."}
      ]
    },
 zehir: { 
      category: "toxicology", 
      title: "🧪 Zehirlenme ve Madde İntoksikasyonu", 
      steps: [
        {type:"warning", text:"⚠️ Güvenlik: Kontaminasyon varsa KKE giy ve hastayı yıka. KŞ ölç!"},
        {type:"step", text:"🔹 Opioid: Solunum baskılanmış ve miyozis varsa Nalokson (Yet: 0.4-2mg, Çoc: 0.01mg/kg) uygula."},
        {type:"step", text:"🔹 Organofosfat: Sekresyonlar kuruyana dek Atropin (Yet: 1-3mg, Çoc: 0.05mg/kg) tekrarla."},
        {type:"step", text:"🔹 Aktif Kömür: İlk 1 saat içinde gelen vakalarda (korozif madde ve hidrokarbon değilse) 1 gr/kg dozunda uygulanabilir.."},
        {type:"drug", text:"💊 Uyarıcı: Ajitasyon ve hipertansiyon için Diazepam kullan; Kokainde Beta-Blokör KULLANMA."},
        {type:"action", text:"✅ Hedef: ABCDE stabilizasyonu ve spesifik antidot ile sekresyon/solunum kontrolü."},
        {type:"action", text:"✅ UZEMİ ARA 114"},
        {type:"note", text: "🧪 SPESİFİK ANTİDOTLAR TABLOSU"},
        {type:"table", text: `<div style="overflow-x:auto;"><table style="width:100%; border-collapse: collapse; font-size: 12px; background: white; color: black;"><tr style="background: #1e293b; color: white;"><th style="padding: 6px; border: 1px solid #ddd;">Zehirlenme</th><th style="padding: 6px; border: 1px solid #ddd;">Antidot</th><th style="padding: 6px; border: 1px solid #ddd;">Not</th></tr><tr><td>Opioid</td><td>Nalokson</td><td>Solunum düzelene dek 2-3 dk bir.</td></tr><tr style="background:#f8fafc;"><td>Benzo</td><td>Flumazenil</td><td>Nöbet öyküsünde KONTRENDİKE!</td></tr><tr><td>Parasetamol</td><td>NAC</td><td>İlk 8 saat en etkili zaman.</td></tr><tr style="background:#f8fafc;"><td>Tarım İlacı</td><td>Atropin</td><td>Sekresyon kuruyana kadar 1-3mg.</td></tr><tr><td>Beta-Blokör</td><td>Glukagon</td><td>3-10mg IV yavaş.</td></tr><tr style="background:#f8fafc;"><td>Kalsiyum BK</td><td>Kalsiyum</td><td>%10 Kalsiyum Glukonat 10-20ml IV.</td></tr><tr><td>Metil Alkol</td><td>Etil Alkol</td><td>%10 Etil Alkol veya saf alkol.</td></tr><tr style="background:#f8fafc;"><td>Karbonmonoksit</td><td>%100 O2</td><td>Hiperbarik O2 gerekebilir.</td></tr><tr><td>Siyanür</td><td>Cyanokit</td><td>5g IV infüzyon uygulanır.</td></tr><tr style="background:#f8fafc;"><td>Demir</td><td>Deferoksamin</td><td>İdrarın pembeleşmesi etkinliktir.</td></tr></table></div>`}
      ]
    },

    nobet: { category: "neuro", title: "🧠 Nöbet / Status Epilepticus", steps: [
      {type:"step", text:"🔹 Güvenli çevre ve ABCDE değerlendirmesi yap: Hastanın çevresindeki tehlikeli eşyaları uzaklaştır, havayolu açıklığını sağla."},
      {type:"action", text:"✅ Travmadan koru, yan yatır, oksijen ver: Hastayı nazikçe yere yatır (mümkünse sol yan / recovery pozisyonu), başını koru, yüksek akımlı oksijen başlat."},
      {type:"action", text:"✅ Kan Şekeri Ölç: Hipoglisemi tetikleyebilir; kan şekeri düşükse protokole uygun dekstroz uygula."},
      {type:"drug", text:"💊 Midazolam: Damar yolu yoksa 10 mg IM (70 kg üstü yetişkin için). Damar yolu varsa 2.5-5 mg IV (yavaş uygulama)."},
      {type:"drug", text:"💊 Diazepam: 5-10 mg IV (yavaş uygulama, dakikada 2-5 mg hızında). Gerekirse 5-10 dk sonra doz tekrarlanabilir."},
      {type:"decision", title:"Status Epilepticus Tanısı", text:"⚠️ Nöbet 5 dakikayı geçerse veya hasta bilinci açılmadan üst üste nöbet geçiriyorsa Status kabul et; ileri havayolu/yoğun bakım hazırlığı yap."},
      {type:"warning", text:"⚠️ Solunum Depresyonu: Benzodiazepinler solunumu baskılayabilir. İlaç sonrası solunumu ve SpO2'yi yakından takip et; gerekirse BVM ile destek ver."},
      {type:"note", text:"Gebelik (Eklampsi): Eğer hasta gebeliğinin 20. haftasının üzerindeyse ve nöbet geçiriyorsa, öncelikli tedavi benzodiazepin değil Magnezyum Sülfat'tır (4-6 g IV, 15-20 dk infüzyon)."},
      {type:"step", text:"🔹 Eğer nöbet durmuyorsa: İleri antiepileptik (ör. levetirasetam, valproat, fenitoin) ve yoğun bakım/ nöroloji konsültasyonu düşün."}
    ]},
    anafilaksi: { category: "allergy", title: "⚠️ Anafilaksi", steps: [
      {type:"step", text:"🔹 Güvenli çevre ve ABCDE değerlendirmesi yap: Havayolunu (ödem riski!) ve solunumu hızla kontrol et."},
      {type:"action", text:"✅ Hızlı ABC, oksijen, damar yolu aç: Hastayı sırt üstü yatır ve bacaklarını kaldır (şok pozisyonu). Yüksek akımlı oksijen başlat."},
      {type:"drug", text:"💊 Adrenalin (Epinefrin) IM: 0.3 - 0.5 mg (1:1000) hemen; vastus lateralis (uyluğun üst dış yan yüzü) kas içine uygulanır. Gerekirse 5-15 dk aralıklarla tekrarlanır."},
      {type:"drug", text:"💊 Sıvı Resüsitasyonu: Hipotansiyon varsa 500-1000 ml kristaloid (SF/RL) hızlı infüzyonla ver."},
      {type:"drug", text:"💊 H1 Antihistaminik: Difenhidramin 25-50 mg IV/IM (semptomları gidermek için yardımcı tedavi)."},
      {type:"drug", text:"💊 H2 Antihistaminik: Famotidin 20 mg IV veya Ranitidin 50 mg IV (kurum protokolüne göre)."},
      {type:"drug", text:"💊 Steroid: Metilprednizolon 1-2 mg/kg IV (Maksimum ~125 mg) — geç faz reaksiyonlarını önlemek için."},
      {type:"warning", text:"⚠️ ÖNEMLİ: Antihistaminikler ve steroidler asla Adrenalin'in yerini almaz; tedaviyi geciktirmeyin."},
      {type:"warning", text:"🚨 Adrenalin Yolu: Anafilakside ilk seçenek IM uygulamadır. IV adrenalin sadece arrest gelişmişse veya uzman kontrolünde, çok ciddi şok tablosunda titre edilerek düşük dozlarda uygulanır."},
      {type:"warning", text:"⚠️ Hava Yolu Yönetimi: Dilde şişme, stridor veya ses kısıklığı varsa hava yolu hızla tıkanabilir; erken entübasyon veya cerrahi hava yolu hazırlığı yapın."},
      {type:"warning", text:"⚠️ Mavi Yanıt (Beta-bloker kullananlar): Beta bloker kullanan hastalarda adrenalin etkisiz kalabilir; bu durumda Glukagon 1-5 mg IV düşünülebilir."},
      {type:"note", text:"Gözlem Süresi: Başarılı müdahaleden sonra bile bifazik reaksiyon riski nedeniyle en az 4-12 saat hastanede gözlem önerilir." }
    ]},

dogum: { category: "obstetric", title: "🤰 Acil Doğum ve Komplikasyonlar", steps: [
      {type:"step", text:"🔹 **Hazırlık:** Steril eldiven, kordon klempleri, makas ve bebeği kurulamak için sıcak battaniye hazırla."},
      {type:"action", text:"✅ **Doğum:** Bebek başı göründüğünde nazikçe destekle; baş çıktıktan sonra omuzların kurtulmasına yardım et."},
      {type:"step", text:"🔹 **Kordon:** Bebek doğunca anne seviyesinde tut; kordon nabzı durunca (1-3 dk) klemple ve kes."},
      {type:"warning", text:"⚠️ **Plasenta:** Kendiliğinden ayrılmasını bekle (5-20 dk); plasentayı veya kordonu ASLA zorla çekme."},
      {type:"action", text:"✅ **Bebek Bakımı:** Bebeği hemen kurula, ağız/burnu (gerekirse) aspire et, anne ile ten teması sağla."},
      {type:"note", text: "--- POSTPARTUM HEMORAJİ (DOĞUM SONU KANAMA) ---"},
      {type:"action", text:"✅ **Fundus Masajı:** Rahmi dışarıdan sertçe ovuşturarak kasılmasını sağla (en önemli adım)."},
      {type:"step", text:"🔹 **Pozisyon:** Hastayı düz yatır, bacakları yükselt, yüksek akım oksijen başla."},
      {type:"drug", text:"💉 **Damar Yolu:** En az iki adet geniş çaplı (14-16 G) IV hat aç ve hızlı SF başla."},
      {type:"note", text: "--- GEBELİKTE KARDİYAK ARREST ---"},
      {type:"action", text:"✅ **LUD Manevrası:** Uterusu manuel olarak sola it (Left Uterine Displacement); resüsitasyon başarısı için şarttır."},
      {type:"step", text:"🔹 **KPR:** Göğüs basısı yerini uterus basısı nedeniyle normalden 1-2 parmak yukarıda tutabilirsin."}
    ]},
inme: { category: "neurologic", title: "🧠 İnme (Serebrovasküler Olay - SVH)", steps: [
      {type:"note", text: "HIZLI DEĞERLENDİRME VE TANI (FAST SKALASI)"},
      {type:"step", text:"🔹 **F (Face - Yüz):** Hastaya gülümsemesini söyle; yüzünde asimetri veya bir tarafta sarkma var mı?"},
      {type:"step", text:"🔹 **A (Arms - Kollar):** Her iki kolunu havaya kaldırmasını iste; bir kol aşağı düşüyor mu?"},
      {type:"step", text:"🔹 **S (Speech - Konuşma):** Basit bir cümle kurmasını iste; konuşması peltek veya anlamsız mı?"},
      {type:"step", text:"🔹 **T (Time - Zaman):** Semptomların başladığı tam saati (son normal görüldüğü an) belirle."},
      {type:"note", text: "ACİL MÜDAHALE VE STABİLİZASYON"},
      {type:"action", text:"✅ **ABCDE ve Oksijen:** Havayolunu koru; SpO2 <%94 ise oksijen başla."},
      {type:"action", text:"✅ **Kan Şekeri Ölçümü:** Mutlaka KŞ ölç! Hipoglisemi, inme bulgularını taklit edebilir."},
      {type:"step", text:"🔹 **Pozisyon:** Baş 30 derece yukarıda olacak şekilde yatır (KİBAS riskini azaltmak için)."},
      {type:"drug", text:"💉 **Damar Yolu:** En az bir adet geniş çaplı IV hat aç; hipotansiyon yoksa aşırı sıvı yüklemesinden kaçın."},
      {type:"warning", text:"⚠️ **Tansiyon Yönetimi:** Trombolitik (pıhtı eritici) verilecekse hedef KB <185/110 mmHg; verilmeyecekse 220/120 mmHg üzerine kadar müdahale etme."},
      {type:"warning", text:"💊 **Antiplatelet:** BT ile kanama dışlanmadan kesinlikle Aspirin veya Kan Sulandırıcı VERME!"}
    ]},

hipoglisemi: { category: "metabolic", title: "🩸 Hipoglisemi (Yetişkin)", steps: [
      {type:"note", text: "TANI VE BELİRTİLER"},
      {type:"warning", text:"⚠️ **Eşik Değer:** Kan şekerinin <60 mg/dL olması."},
      {type:"step", text:"🔹 **Belirtiler:** Terleme, titreme, çarpıntı, hızlı solunum, konfüzyon veya saldırganlık."},
      {type:"action", text:"✅ **Ölçüm:** Bilinç değişikliği sergileyen her hastada mutlaka kan şekeri ölçülmelidir."},
      {type:"note", text: "BİLİNÇ AÇIK / YUTMA REFLEKSİ VAR"},
      {type:"action", text:"✅ **15/15 Kuralı:** 15-20 gram hızlı etkili karbonhidrat (3-4 adet kesme şeker veya 150 ml meyve suyu) verilir."},
      {type:"step", text:"🔹 **Takip:** 15 dakika sonra şeker tekrar ölçülür; değer hala <70 ise işlem tekrarlanır."},
      {type:"step", text:"📝 **Öğün:** Şeker düzelince, tekrar düşüşü önlemek için kompleks karbonhidrat (sandviç vb.) yedirilir."},
      {type:"note", text: "BİLİNÇ KAPALI / YUTMA REFLEKSİ YOK"},
      {type:"drug", text:"💉 **Damar Yolu:** Vakit kaybetmeden geniş bir IV hat açılır."},
      {type:"drug", text:"💊 **Dekstroz:** %20 Dekstroz 100 ml IV veya %50 Dekstroz 50 ml IV (Yavaş puşe)."}
   
    ]},

    travma: { category: "trauma", title: "🚑 Travmalı Hasta", steps: [
      {type:"action", text:"Olay yeri güvenliği, immobilizasyon, ABCDE, kanama kontrolü yap."},
      {type:"step", text:"Şok bulgusu varsa hızlı sıvı desteği ve uygun merkeze öncelikli nakil."},
      {type:"warning", text:"Kafa travması, toraks travması veya instabil pelvis varsa özel protokoller uygula."}
    ]}
  },


  cocuk: {
    astim: { category: "respiratory", title: "🫁 Pediyatrik Astım (ÇİLYAD)", steps: [
      {type:"step", text:"🔹 Hızlı Değerlendirme: Bilinç durumu, konuşma yeteneği (kelime kelime mi?), yardımcı solunum kası kullanımı ve SpO2 değerine bak."},
      {type:"action", text:"✅ Oksijen: SpO2 > %94 olacak şekilde nemlendirilmiş oksijen başla."},
      {type:"drug", text:"💊 Salbutamol: <20 kg için 2.5 mg; ≥20 kg için 5 mg Nebül (İlk saat 20 dk arayla 3 doz yapılabilir)."},
      {type:"drug", text:"💊 İpratropium Bromür: <20 kg için 250 mcg; ≥20 kg için 500 mcg Nebül (Orta ve ağır ataklarda ekle)."},
      {type:"drug", text:"💊 Metilprednizolon: 1-2 mg/kg IV veya IM (Maksimum 60 mg)."},
      {type:"warning", text:"⚠️ Magnezyum Sülfat: Ağır ve tedaviye yanıtsız atakta 40-50 mg/kg (Maks 2 g), 20 dk IV infüzyon (Monitörize)."},
      {type:"note", text:"📝 ÖNEMLİ: Sessiz Akciğer (ronküs duyulmaması) ağır atak belirtisi olabilir. Dehidratasyon yoksa aşırı sıvıdan kaçın."}
    ]},
   krup: {
    category: "respiratory",
    title: "Çocuk Krup (Laringotrakeit)",
    steps: [
        
        { type: "step", text: "Güvenli çevre ve ABCDE. Hastayı ajite etmeden değerlendir." },
        { type: "note", text: "🔍 Belirtiler: Stridor, havlar tarzda öksürük, ses kısıklığı, çekilmeler." },
        { type: "action", text: "✅ Oksijen: SpO2 < %94 ise veya ciddi sıkıntı varsa nemlendirilmiş O2 başla." },
        { type: "drug", text: "💊 Adrenalin (Nebül): 0.5 mg/kg (Maks: 5 mg) sulandırılmadan ver." },
        { type: "drug", text: "💊 Deksametazon: 0.6 mg/kg (Maks: 16 mg) tek doz PO, IV veya IM." },
        { type: "drug", text: "💊 Budesonid (Nebül): 2 mg nebül (Deksametazon yapılamıyorsa ek)." },
        { type: "warning", text: "⚠️ Hastayı sakin tut! Ağlamak ödemi artırır." },
        { type: "note", text: "📝 Rebound Etkisi: Nebül adrenalin sonrası en az 2-4 saat gözlem şarttır." }
    ]},

ates_cocuk: {
    category: "metabolic",
    title: "🌡️ Çocuk Yüksek Ateş Müdahalesi",
    steps: [
        { type: "step", text: "🔹 **Hızlı Değerlendirme:** Genel durum (huzursuz/letarjik?), periferik perfüzyon, döküntü (peteşi/purpura) ve meninks iritasyon bulgularını kontrol et." },
        { type: "action", text: "✅ **Çevresel Müdahale:** Giysileri çıkar, odayı havalandır. Ilık kompres uygula. (⚠️ Soğuk su veya alkol kesinlikle kullanma!)" },
        { type: "drug", text: "💊 **Parasetamol:** 10-15 mg/kg dozunda (PO/Rektal). 4-6 saatte bir tekrarlanabilir." },
        { type: "drug", text: "💊 **İbuprofen:** 5-10 mg/kg dozunda (PO). (6 ay üzeri çocuklarda, 6-8 saatte bir)." },
        { type: "warning", text: "⚠️ **Febril Konvülziyon:** Nöbet 5 dakikayı geçerse Midazolam/Diazepam protokolüne (Nöbet Algoritması) geç." },
        { type: "note", text: "📝 **Kritik Not:** Toksik görünüm, durdurulamayan kusma veya basmakla solmayan döküntü varsa Sepsis/Menenjit şüphesiyle hızlı nakil planla." }
    ]
},

epiglotit_cocuk: {
    category: "respiratory",
    title: "⚠️ Çocuk Epiglotit Müdahale Şeması",
    steps: [
        { type: "step", text: "🔹 **Hızlı Değerlendirme:** '4D' bulgusuna bak: Drooling (Salya), Dysphagia (Yutma güçlüğü), Dysphonia (Ses boğukluğu), Distress (Solunum sıkıntısı). Tripod pozisyonu var mı?" },
        { type: "action", text: "✅ **Sakinleştirme:** Çocuğu asla ağlatma/ajite etme. Ağız içine bakmaya çalışmak laringospazmı tetikleyip havayolunu tamamen kapatabilir!" },
        { type: "action", text: "✅ **Pozisyon & Oksijen:** Çocuğu en rahat ettiği pozisyonda (anne kucağı vb.) tut. Maskeyi yüzüne yaklaştırarak (blow-by) O2 ver." },
        { type: "drug", text: "💊 **Adrenalin (Nebül):** Şiddetli stridor varsa 0.5 mg/kg (Maks 5 mg) uygulanabilir ancak asıl tedavi cerrahi hazırlıktır." },
        { type: "warning", text: "⚠️ **KESİNLİKLE YAPMA:** Ağız içine bakma, boğaz kültürü alma ve hastayı sırt üstü yatırma!" },
        { type: "step", text: "💉 **İleri Havayolu:** Entübasyon ameliyathane şartlarında yapılmalıdır. Krikotirotomi seti mutlaka hazır bulundurulmalıdır." },
        { type: "note", text: "📝 **Kritik Not:** Epiglotit cerrahi bir acildir. Vakit kaybetmeden KBB/Anestezi ekibine haber ver ve uygun merkeze naklet." }
    ]
},


kardiyojenik_sok: {
    category: "shock",
    title: "🫀 Çocuk Kardiyojenik Şok Müdahalesi",
    steps: [
        { type: "step", text: "🔹 **Hızlı Değerlendirme:** Taşikardi, soğuk ekstremite, gecikmiş kapiller dolum (>2 sn), hepatomegali ve akciğerde raller." },
        { type: "action", text: "✅ **Havayolu ve Oksijen:** Yüksek akım oksijen başla. Solunum iş yükünü azaltmak için gerekirse PBV (CPAP/BPAP) desteği sağla." },
        { type: "warning", text: "⚠️ **Sıvı Resüsitasyonu (Dikkatli!):** Agresif sıvıdan kaçın! Sadece 5-10 ml/kg İzotonik SF, 10-20 dk içinde yavaşça verilir." },
        { type: "action", text: "🔍 **Takip:** Akciğer seslerini dinle; raller artarsa veya karaciğer büyürse sıvıyı derhal kes." },
        { type: "drug", text: "💊 **İnotropik Destek (İnfüzyon):** \n• Dopamin: 5-20 mcg/kg/dk \n• Dobutamin: 2-20 mcg/kg/dk \n• Adrenalin: 0.05 - 0.1 mcg/kg/dk" },
        { type: "step", text: "📊 **Monitörizasyon:** Kan basıncı, EKG ve idrar çıkışı (Hedef: >1 ml/kg/saat) takibi yap." },
        { type: "note", text: "📝 **Önemli:** Temel amaç kalbin yükünü azaltmaktır. Ödem riskine karşı hastayı sürekli 're-evalüasyon' (yeniden değerlendirme) ile takip et." }
    ]
},

post_rosc_cocuk: {
    category: "cardiac",
    title: "👶 Çocuk Resüsitasyon Sonrası Bakım (Post-ROSC)",
    steps: [
        { type: "step", text: "🔹 **Solunum:** Hedef SpO2: %94-%99 (Hiperoksiden kaçın!). PaCO2 hedefi: 35-45 mmHg. Tüp yerini ETCO2 ile doğrula." },
        { type: "action", text: "✅ **Dolaşım:** Hedef KB: Yaşa göre en az 5. persentil (Hipotansiyona izin verme). Gerekirse 20 ml/kg SF bolus uygula." },
        { type: "drug", text: "💊 **İnotrop Desteği:** Sıvıya dirençli hipotansiyon varsa Adrenalin veya Noradrenalin infüzyonu başla." },
        { type: "warning", text: "⚠️ **Nörolojik Koruma:** Hipertermiyi (ateş) agresif tedavi et! Hedef: 36°C-37.5°C. Başı 30 derece yukarıda ve orta hatta tut." },
        { type: "action", text: "🧠 **Nöbet Kontrolü:** Klinik veya EEG nöbetlerini hemen tedavi et (Benzodiazepinler)." },
        { type: "step", text: "🩸 **Metabolik Takip:** Kan şekerini (Hedef >60 mg/dL) ve elektrolitleri (K, Ca) yakın takip et." },
        { type: "note", text: "📝 **Önemli:** ROSC sonrası hasta en kısa sürede 3. basamak çocuk yoğun bakım ünitesine nakledilmelidir." }
    ]
},

septik_sok_cocuk: {
    category: "shock",
    title: "🦠 Çocuk Septik Şok Müdahale Şeması",
    steps: [
        { type: "step", text: "🔹 **Hızlı Değerlendirme:** Bilinç değişikliği, perfüzyon bozukluğu (kapiller dolum >2 sn) ve enfeksiyon odağı araştır." },
        { type: "action", text: "✅ **Oksijen & Havayolu:** Doku hipoksisini önlemek için yüksek akım O2 başla. Solunum iş yükü fazlaysa destek düşün." },
        { type: "action", text: "💧 **Sıvı Resüsitasyonu (Agresif):** 20 ml/kg bolus İzotonik (SF/RL). Yanıt yoksa 60 ml/kg'a kadar (raller ve hepatomegali takibiyle) tekrarla." },
        { type: "drug", text: "💊 **Vazopresör (Sıvıya Dirençli):** Adrenalin veya Noradrenalin (Soğuk/Sıcak şok ayrımına göre)." },
        { type: "drug", text: "💉 **Antibiyotik:** İlk 1 saat içinde geniş spektrumlu antibiyotik başla. Kültür al ama tedaviyi geciktirme." },
        { type: "warning", text: "⚠️ **Laktat Takibi:** Laktat >2 mmol/L ise doku hipoksisi devam ediyordur. Tedaviyi laktat düşüşüne göre takip et." },
        { type: "note", text: "📝 **Önemli:** 'Sıcak Şok'ta cilt pembe/sıcak olabilir. 'Soğuk Şok'ta cilt soğuk, soluk ve benekli hale gelir." }
    ]
},

      bradikardi: { category: "cardiac", title: "💓 Pediatrik Bradikardi (ÇİLYAD)", steps: [
      {type:"step", text:"🔹 ABCDE & Havayolu: Havayolunu aç, oksijen ver ve gerekirse BVM ile solut. Çocukta bradikardi genellikle hipoksiktir."},
      {type:"action", text:"✅ KPR Kararı: Oksijen ve ventilasyona rağmen nabız < 60/dk ve perfüzyon bozukluğu (şok, bilinç değişikliği) varsa KPR BAŞLAT."},
      {type:"drug", text:"💊 Adrenalin (İlk Tercih): 0.01 mg/kg (1:10.000 formdan 0.1 ml/kg) IV/IO. Her 3-5 dakikada bir."},
      {type:"drug", text:"💊 Atropin: Vagal tonus artışı (entübasyon vb.) veya primer AV blok varsa 0.02 mg/kg IV/IO (Min: 0.1 mg, Maks Tek Doz: 0.5 mg)."},
      {type:"note", text:"📝 ÇİLYAD Analizi: Çocuklarda bradikardi yönetiminde Adrenalin, Atropin'den önce gelir. Önce mutlaka iyi havalandır."}
    ]},
    tasikardi: { category: "cardiac", title: "⚡ Pediatrik Taşikardi (ÇİLYAD)", steps: [
      {type:"step", text:"🔹 Güvenli çevre ve ABCDE değerlendirmesi yap, oksijen sağla ve monitörize et."},
      {type:"decision", title:"Stabilite Kontrolü", text:"Şok bulgusu, bilinç değişikliği veya kalp yetmezliği var mı?"},
      {type:"action", text:"⚡ UNSTABİL (Şok/Bilinç Bozuk): Senkronize Kardiyoversiyon uygula. İlk doz 0.5-1 J/kg; yanıt yoksa 2 J/kg."},
      {type:"step", text:"🔹 STABİL Dar QRS (SVT): Vagal Manevralar (Yüze buz torbası veya ıkındırma)."},
      {type:"drug", text:"💊 Adenozin (Stabil SVT): 0.1 mg/kg hızlı bolus (Maks 6 mg). Yanıt yoksa 0.2 mg/kg (Maks 12 mg)."},
      {type:"drug", text:"💊 STABİL Geniş QRS (VT): Amiodaron 5 mg/kg (20-60 dk infüzyon)."},
      {type:"note", text:"📝 Adenozin Notu: Kalbe en yakın damardan, hızlı bolus ve arkasından SF puşesi ile uygulanmalıdır."}
    ]},
    arrest: { category: "cardiac", title: "⚡ Pediyatrik Arrest (ÇİLYAD)", steps: [
      {type:"action", text:"✅ KPR Başlat: Yanıt yok, solunum yok/anormal ise. İki kurtarıcı 15:2; tek kurtarıcı 30:2."},
      {type:"action", text:"✅ Nabız Kontrolü: Nabız < 60/dk ve perfüzyon bozuksa arrest kabul et ve KPR'ye başla."},
      {type:"decision", title:"Ritim Analizi", text:"VF / nVT (Şoklanabilir) ise Defibrilasyon uygula."},
      {type:"action", text:"⚡ Defibrilasyon: İlk şok 2 J/kg, ikinci şok 4 J/kg, sonraki şoklar 4-10 J/kg."},
      {type:"drug", text:"💊 Adrenalin: 0.01 mg/kg IV/IO (1:10.000 formdan 0.1 ml/kg). Her 3-5 dakikada bir."},
      {type:"drug", text:"💊 Amiodaron: VF/nVT devam ediyorsa 3. ve 5. şok sonrası 5 mg/kg IV/IO."},
      {type:"note", text:"📝 6H - 5T: Çocuklarda özellikle Hipoglisemi ve Hipoksi nedenlerini hemen tara."}
    ]},

p_hipoglisemi: { category: "pediatric_metabolic", title: "👶 Pediatrik Hipoglisemi (ÇİLYAD)", steps: [
      {type:"warning", text:"⚠️ **Eşik Değer:** Bebek ve çocuklarda Kan Şekeri <60 mg/dL ise müdahale edilir."},
      {type:"step", text:"🔹 **Belirtiler:** Huzursuzluk, uyuklama, beslenme güçlüğü, apne (nefes durması) veya nöbet."},
      {type:"action", text:"✅ **Öncelik:** Havayolu (ABC) güvenliğini sağla ve vakit kaybetmeden IV/IO hattı aç."},
      {type:"note", text: "DEKSTROZ UYGULAMASI (%10'LUK TERCİH EDİLİR)"},
      {type:"drug", text:"🍼 **Yeni Doğan:** %10 Dekstroz 2 ml/kg IV/IO (Yavaş puşe)."},
      {type:"drug", text:"👶 **Bebek ve Çocuk:** %10 Dekstroz 5 ml/kg IV/IO (Maksimum tek doz 250 ml)."},
      {type:"warning", text:"⚠️ **Konsantrasyon:** Çocuklarda damar sağlığı için %25 veya %50'lik dekstrozun seyreltilmeden verilmesi önerilmez (Doku nekrozu riski!)."},
      {type:"step", text:"🔹 **Takip:** 15-20 dakika sonra KŞ tekrar ölçülür; düzelme yoksa doz tekrarlanır."},
      {type:"action", text:"✅ **İdame:** Şeker yükselince tekrar düşüşü önlemek için %5-10 Dekstroz içeren infüzyon başlanmalıdır."}
    ]},

nrp: { category: "neonatal", title: "👶 Yenidoğan Resüsitasyonu (NRP)", steps: [
      {type:"note", text: "İLK 30 SANİYE: BAŞLANGIÇ ADIMLARI"},
      {type:"warning", text:"⚠️ **Hızlı Sorgulama:** Bebek miadında mı? Tonusu iyi mi? Ağlıyor mu? (Hayır ise başla)."},
      {type:"action", text:"✅ **Isıt ve Kurula:** Radyan ısıtıcı altında kurula, ıslak örtüleri at, taktil uyaran ver."},
      {type:"step", text:"🔹 **Pozisyon:** Başı 'Koklama Pozisyonuna' getir. Gerekirse ağız ve burnu aspire et."},
      {type:"note", text: "POZİTİF BASINÇLI VENTİLASYON (PBV)"},
      {type:"action", text:"✅ **PBV:** KAH <100 veya apne/gasping varsa balon-maske ile PBV (40-60 soluk/dk) başla."},
      {type:"step", text:"🔹 **MR. SOPA:** Göğüs kalkmıyorsa; Maske, Repozisyon, Aspirasyon, Ağız açma kontrol et."},
      {type:"warning", text:"⚠️ **Göğüs Basısı:** 30 sn etkin PBV'ye rağmen KAH <60 ise göğüs basısına geç!"},
      {type:"note", text: "KPR VE İLAÇLAR"},
      {type:"action", text:"✅ **KPR Oranı (3:1):** 90 bası, 30 soluk; dakikada toplam 120 olay gerçekleşmeli."},
      {type:"drug", text:"💊 **Adrenalin:** Etkin PBV/KPR'ye rağmen KAH <60 ise: 0.01-0.03 mg/kg (1:10.000'lik) IV/IO."},
      {type:"drug", text:"💧 **Sıvı:** Kan kaybı/Şok şüphesinde 10 ml/kg İzotonik SF (5-10 dk içinde)."}
    ]},

    hipovolemi: { category: "shock", title: "💧 Pediatrik Hipovolemik Şok (ÇİLYAD)", steps: [
      {type:"step", text:"🔹 ABCDE & Klinik: Bilinç, kapiller dolum (>2 sn), nabız kalitesi ve idrar çıkışını kontrol et."},
      {type:"action", text:"✅ Sıvı Bolusu: 20 ml/kg İzotonik kristaloid (SF veya RL) 5-20 dk içinde hızlıca ver."},
      {type:"action", text:"✅ Değerlendirme: Yanıt yoksa bolusu 3 kez (toplam 60 ml/kg'a kadar) tekrarla."},
      {type:"drug", text:"💊 Kan Transfüzyonu: 40-60 ml/kg kristaloide rağmen instabilite (özellikle kanamada) sürüyorsa 10 ml/kg ES ver."},
      {type:"warning", text:"⚠️ DİKKAT: Hipotansiyon çocukta ŞOKUN ÇOK GEÇ BULGUSUDUR. Taşikardi ve perfüzyon bozukluğuna odaklan."},
      {type:"note", text:"📝 Kardiyojenik Şok şüphesi varsa (Hepatomegali, raller) bolusu 5-10 ml/kg tut ve yavaş ver."}
    ]},
    crush: { category: "trauma", title: "🧱 Pediatrik Crush Sendromu (ÇİLYAD)", steps: [
      {type:"step", text:"🔹 Olay yeri güvenliği ve ABCDE. Enkaz altında müdahale hayatidir."},
      {type:"action", text:"✅ Kurtarma Öncesi: Ekstremite serbestleşmeden damar yolu aç, 15-20 ml/kg/saat (veya 1 L/saat) Isotonik SF başla."},
      {type:"action", text:"✅ Kompresyon Sonrası: Bası kalkınca toksinler yayılacaktır (Reperfüzyon). Sıvı tedavisine agresif devam et."},
      {type:"drug", text:"💊 Hiperkalemi: EKG'de sivri T veya geniş QRS varsa Kalsiyum Glukonat %10 10 ml IV uygula."},
      {type:"drug", text:"💊 Potasyum Yönetimi: İnsülin + Dekstroz veya Salbutamol nebül düşün."},
      {type:"note", text:"⚠️ Sadece İZOTONİK SF kullan; Potasyum içeren (RL vb.) sıvılar kesinlikle yasaktır."}
    ]},
    kafa: { category: "neuro", title: "🧠 Pediatrik Kafa Travması", steps: [
      {type:"step", text:"🔹 ABCDE ve Servikal Stabilizasyon. Çocuklarda baş büyük olduğu için 'Koklama Pozisyonu'na dikkat."},
      {type:"action", text:"✅ Nörolojik Değerlendirme: Pediatrik GKS skorla, pupilleri kontrol et. GKS ≤ 8 ise entübe et."},
      {type:"action", text:"✅ Hedefler: İkincil hasarı önlemek için Sistolik KB > 90-110 mmHg, SpO2 ≥ %94 tut."},
      {type:"warning", text:"⚠️ KİBAS: Fışkırır kusma, bradikardi, hipertansiyon varsa hızlı nakil. Cushing Triadı tehlikelidir."},
      {type:"note", text:"📝 Sıvı Seçimi: Beyin ödemini artırabileceği için Dekstrozlu sıvılardan (hipoglisemi yoksa) kaçın; SF tercih et."}
    ]},
    nobet: { category: "neuro", title: "🧠 Pediyatrik Nöbet (ÇİLYAD)", steps: [
      {type:"step", text:"🔹 Güvenli çevre, ABCDE, havayolu açıklığı ve %100 oksijen başla."},
      {type:"action", text:"✅ Kan Şekeri: KŞ < 60 mg/dL ise bebekte %10 Dekstroz 2-5 ml/kg; çocukta %10-25 Dekstroz ver."},
      {type:"drug", text:"💊 IV Yol Varsa (0-5. dk): Midazolam 0.1-0.2 mg/kg (Maks 5 mg) veya Diazepam 0.2 mg/kg IV."},
      {type:"drug", text:"💊 IV Yol Yoksa: Rektal Diazepam 0.3-0.5 mg/kg veya IM/Bukkal/Nazal Midazolam 0.2 mg/kg."},
      {type:"action", text:"✅ 5. Dakikada Durmazsa: Benzodiazepin dozunu bir kez daha tekrarla."},
      {type:"drug", text:"💊 İkinci Basamak (Dirençli): Fenitoin 20 mg/kg (SF içinde, yavaş infüzyon)."},
      {type:"note", text:"📝 Status Epileptikus: 5 dakikadan uzun süren nöbet acildir. Ateş varsa agresif düşürülmelidir."}
    ]},
    anafilaksi: { category: "allergy", title: "⚠️ Pediatrik Anafilaksi (ÇİLYAD)", steps: [
      {type:"step", text:"🔹 Tanı: Ani başlayan deri bulguları + Solunum sıkıntısı/Stridor/Hipotansiyon/Kusma."},
      {type:"action", text:"✅ Pozisyon: Sırtüstü yatır, bacakları yükselt. %100 Oksijen başla."},
      {type:"drug", text:"💊 ADRENALİN (1/1000): 0.01 mg/kg (Maks 0.3 mg) İM (Uyluk üst-dış yanından)."},
      {type:"action", text:"✅ Tekrar: Düzelme yoksa 5 dakikada bir, en fazla 3 kez tekrarla."},
      {type:"drug", text:"💊 Sıvı: Hipotansiyon/Şok varsa 20 ml/kg İzotonik SF bolus yükle."},
      {type:"drug", text:"💊 Ek İlaçlar: Feniramin 1 mg/kg, Ranitidin 1 mg/kg ve Metilprednizolon 1-2 mg/kg IV."},
      {type:"warning", text:"🚨 DİKKAT: İM Adrenalin en güvenli ve hızlı yoldur. Antihistaminik adrenalin yerine geçmez!"}
    ]},
    yanik: { 
      category: "trauma", 
      title: "🔥 Pediatrik Yanık (ÇİLYAD)", 
      image: "img/yanik_cocuk.jpg",
      steps: [
        {type:"action", text:"🔹 Yanmayı durdur, elbiseleri/takıları çıkar. Çeşme suyuyla 10-20 dk soğut (Buz kullanma)."},
        {type:"step", text:"✅ Alan Hesabı: Modifiye Dokuzlar veya Avuç İçi kuralı (%1). 1. dereceyi sayma."},
        {type:"drug", text:"💊 Sıvı (Parkland): 4 ml x kg x %Yanık (İlk yarısı 8 saatte). Tercihen Ringer Laktat."},
        {type:"action", text:"✅ Yara Bakımı: Temiz, kuru örtüyle kapat. Kimyasal yanığı bol suyla yıka."},
        {type:"warning", text:"⚠️ Hipotermi Riski: Çocuklarda vücut yüzeyi geniştir, soğutma sonrası hemen ört ve sıcak tut."},
        {type:"note", text:"📝 İnhalasyon: Yüzde is, ses kısıklığı varsa erken entübasyon hazırlığı yap."}
      ]
    }
  }
};

// --- Yardımcı Fonksiyonlar ve UI Mantığı ---

function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// Eski searchAlgo fonksiyonu gelişmiş versiyonla değiştirildi - aşağıda

function showAlgo(key, grupName) {
  try {
    // Sayfa değiştiğinde tüm sesleri durdur
    stopAllSounds();
    
    const grupKey = (grupName && grupName.toLowerCase().startsWith('y')) ? 'yetiskin' : 'cocuk';
    const algo = (algorithmData[grupKey] || {})[key.toLowerCase().trim()];
    const contentEl = document.getElementById("content");
    if (!contentEl) {
      console.error('İçerik elementi bulunamadı');
      return;
    }
    if (!algo) {
      console.warn(`Algoritma bulunamadı: ${key} (${grupKey})`);
      contentEl.innerHTML = '<div style="padding:20px; text-align:center; color:#dc2626;"><p>Algoritma bulunamadı. Lütfen ana menüye dönün.</p><button class="back-btn" onclick="clearContent()">⬅️ Geri Dön</button></div>';
      contentEl.style.display = "block";
      return;
    }

let html = `
    <button class="back-btn" onclick="clearContent()">⬅️ Geri Dön</button>
    
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; gap: 10px; flex-wrap: wrap;">
        <h2 style="color:#b91c1c; margin: 0; font-size: 1.1rem; line-height: 1.2;">${escapeHtml(algo.title)}</h2>
        
        <button id="fav-${key}-${grupName}" class="btn-favorite" onclick="toggleFavorite('${key}', '${grupName}'); updateFavoriteButton('${key}', '${grupName}');" style="margin-left: auto;">
            ${isFavorite(key, grupName) ? '⭐ Favorilerden Çıkar' : '⭐ Favorilere Ekle'}
        </button>
        
        <div style="display: flex; flex-direction: column; gap: 6px; flex-shrink: 0;">
            ${algo.ekgList ? `
                <button onclick="openEkgGallery(${JSON.stringify(algo.ekgList).replace(/"/g, '&quot;')})" 
                        style="background: #dc2626; color: white; border: none; padding: 6px 10px; border-radius: 8px; font-size: 10px; font-weight: bold; cursor: pointer; white-space: nowrap;">
                    🖼️ EKG GÖR
                </button>` : ''}
            
            ${algo.videoList ? algo.videoList.map(v => `
                <button onclick="openVideoPlayer('${v.link}', '${v.isim}')" 
                        style="background: ${v.renk}; color: white; border: none; padding: 6px 10px; border-radius: 8px; font-size: 10px; font-weight: bold; cursor: pointer; white-space: nowrap;">
                    ${v.isim}
                </button>
            `).join('') : ''}
        </div>
    </div>`;
   // Ses Paneli (Astım, KOAH veya Anafilaksi)
    const currentKey = key.toLowerCase().trim();
    
    const sesVerileri = {
    'astim': 'wheezing (Hırıltı)',
    'koah': 'Ronküs (Kaba Ses)',
    'anafilaksi': 'Stridor (Üst Havayolu Daralması)',
    'krup': 'Krup Sesi (Havlar Tarzda Öksürük)'
};

    if (sesVerileri[currentKey]) {
        html += `
        <div style="margin-bottom:15px; background:#fef2f2; padding:15px; border-radius:12px; border:2px solid #fecaca; text-align:center;">
            <p style="margin:0 0 10px 0; font-size:15px; font-weight:bold; color:#b91c1c;">🫁 Patolojik Ses: ${sesVerileri[currentKey]}</p>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button class="back-btn" style="background:#ef4444; width:auto; padding:10px 20px; color:white; margin:0; border:none;" onclick="playSound('${currentKey}')">🔊 Dinle</button>
                <button class="back-btn" style="background:#64748b; width:auto; padding:10px 20px; color:white; margin:0; border:none;" onclick="stopAllSounds()">⏹️ Durdur</button>
            </div>
        </div>`;
    }

    html += `<div class="algo-container">`;

    algo.steps.forEach((step, index) => {
      // Profesyonel Tip Konfigürasyonu
      const config = {
        drug:     { color: "#ef4444", icon: "💊", label: "İLAÇ UYGULAMASI", bg: "#fff5f5" },
        warning:  { color: "#f59e0b", icon: "⚠️", label: "KRİTİK UYARI", bg: "#fffbeb" },
        action:   { color: "#22c55e", icon: "✅", label: "EYLEM / MÜDAHALE", bg: "#f0fdf4" },
        note:     { color: "#3b82f6", icon: "📝", label: "NOT / BİLGİ", bg: "#eff6ff" },
        decision: { color: "#8b5cf6", icon: "❓", label: "KARAR NOKTASI", bg: "#f5f3ff" },
        step:     { color: "#64748b", icon: "🔹", label: "HAZIRLIK / ADIM", bg: "#f8fafc" }
      };

      const current = config[step.type] || config.step;

      // Özel Durum: Tablo
      if (step.type === 'table') {
        html += `<div style="margin-bottom: 15px;">${step.text}</div>`;
        return;
      }

      // Metin İşleme: Başlık ve Açıklama Ayrımı
      let title = current.label;
      let description = step.text;

      if (step.type === 'decision') {
          title = step.title || current.label;
          description = step.text;
      } else if (step.text.includes(':')) {
          const parts = step.text.split(':');
          title = parts[0];
          description = parts.slice(1).join(':');
      }

      html += `
      <div style="background: ${current.bg}; border-left: 6px solid ${current.color}; padding: 16px; margin-bottom: 8px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); border-left: 6px solid ${current.color};">
          <div style="display: flex; align-items: flex-start; gap: 12px;">
              <div style="background: ${current.color}; color: white; min-width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0;">
                  ${current.icon}
              </div>
              <div style="flex: 1;">
                  <div style="font-size: 11px; font-weight: 800; color: ${current.color}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">
                      ${escapeHtml(title)}
                  </div>
                  
<div style="font-size: 15px; color: #1e293b; font-weight: 500; line-height: 1.4;">
    ${description} 
</div>
              </div>
          </div>
      </div>`;

      // Adımlar arası ok işareti
      if (index < algo.steps.length - 1 && algo.steps[index+1].type !== 'table') {
          html += `
          <div style="display: flex; justify-content: center; margin: -4px 0 4px 0;">
              <div style="width: 2px; height: 12px; background: ${current.color}; opacity: 0.3;"></div>
          </div>`;
      }
    });
    if (algo.image) {
      html += `<div class="algo-image" style="margin-top:20px; text-align:center;">
                <img src="${algo.image}" alt="${escapeHtml(algo.title)}" loading="lazy" style="max-width:100%; height:auto; border-radius:8px; border: 2px solid #ddd;" onerror="this.style.display='none'; console.error('Görsel yüklenemedi:', '${algo.image}');">
               </div>`;
    }

    html += `</div>`;
    contentEl.innerHTML = html;
    contentEl.style.display = "block";
    contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Favori butonunu güncelle
    updateFavoriteButton(key, grupName);
  } catch (e) { 
    console.error('showAlgo hatası:', e);
    const contentEl = document.getElementById("content");
    if (contentEl) {
      contentEl.innerHTML = '<div style="padding:20px; text-align:center; color:#dc2626;"><p>Bir hata oluştu. Lütfen sayfayı yenileyin.</p><button class="back-btn" onclick="clearContent()">⬅️ Geri Dön</button></div>';
      contentEl.style.display = "block";
    }
  }
}
function tahminiKiloHesapla() {
  const tip = document.getElementById("yasTipi").value;
  const deger = parseFloat(document.getElementById("yasDeger").value);
  const kiloInput = document.getElementById("kiloInput");
  
  if (!deger || deger < 0) return;

  let hesaplananKilo = 0;

  if (tip === "ay") {
    // < 1 Yaş Formülü: (Ay + 9) / 2
    hesaplananKilo = (deger + 9) / 2;
  } else {
    // 1 - 5 Yaş: (Yaş × 2) + 8
    // 6 - 12 Yaş: (Yaş × 3) + 7
    if (deger >= 1 && deger <= 5) {
      hesaplananKilo = (deger * 2) + 8;
    } else if (deger > 5) {
      hesaplananKilo = (deger * 3) + 7;
    }
  }

  if (hesaplananKilo > 0) {
    kiloInput.value = hesaplananKilo.toFixed(1);
    hesaplaCocukDoz(); // Kiloyu bulduktan sonra dozları da güncelle
  }
}

function hesaplaCocukDoz() {
  const kg = parseFloat(document.getElementById("kiloInput").value);
  const res = document.getElementById("dozSonuc");
  if (!kg || kg <= 0) { res.innerHTML = ""; return; }

  let h = `<div style="text-align:left; margin-top:15px; display:flex; flex-direction:column; gap:15px;">`;

  // 1. Resüsitasyon (Arrest)
  h += `<div class="decision-box">
          <b class="decision-title">🚨 Resüsitasyon (Arrest)</b>
          • <b>Adrenalin (1:10.000):</b> ${(kg * 0.1).toFixed(1)} ml IV/IO <small>(0.01 mg/kg)</small><br>
          • <b>Amiodaron:</b> ${(kg * 5).toFixed(1)} mg <small>(5 mg/kg Bolus)</small><br>
          • <b>Magnezyum Sülfat:</b> ${Math.min(kg * 50, 2000).toFixed(0)} mg <small>(25-50 mg/kg, Max 2g)</small>
        </div>`;

  // 2. Nöbet Kontrolü
  h += `<div class="decision-box">
          <b class="decision-title">🧠 Nöbet Kontrolü</b>
          • <b>Midazolam (IV/IO):</b> ${(kg * 0.1).toFixed(2)} mg <small>(0.1 mg/kg)</small><br>
          • <b>Midazolam (IM/Bukkal/Nazal):</b> ${(kg * 0.2).toFixed(2)} mg <small>(0.2 mg/kg)</small><br>
          • <b>Diazepam (IV):</b> ${(kg * 0.2).toFixed(2)} mg | <b>Rektal:</b> ${(kg * 0.5).toFixed(2)} mg<br>
          • <b>Fenitoin:</b> ${(kg * 20).toFixed(0)} mg <small>(SF içinde, 20 dk infüzyon)</small>
        </div>`;

  // 3. Solunum ve Anafilaksi
  const salbutamol = kg < 20 ? "2.5 mg" : "5 mg";
  const adrAnafilaksi = Math.min(kg * 0.01, 0.3).toFixed(2);
  h += `<div class="decision-box">
          <b class="decision-title">🫁 Solunum ve Anafilaksi</b>
          • <b>Salbutamol Nebül:</b> ${salbutamol}<br>
          • <b>Adrenalin IM (1:1000):</b> ${adrAnafilaksi} mg <small>(0.01 mg/kg, Max 0.3 mg)</small><br>
          • <b>Metilprednizolon:</b> ${(kg * 1).toFixed(1)}-${(kg * 2).toFixed(1)} mg <small>(1-2 mg/kg)</small>
        </div>`;

  // 4. Şok ve Sıvı
  h += `<div class="decision-box">
          <b class="decision-title">💧 Sıvı ve Hipoglisemi</b>
          • <b>İzotonik (Normal Şok):</b> ${(kg * 20).toFixed(0)} ml <small>(Hızlı bolus)</small><br>
          • <b>İzotonik (Kardiyojenik):</b> ${(kg * 5).toFixed(0)}-${(kg * 10).toFixed(0)} ml <small>(Yavaş)</small><br>
          • <b>%10 Dekstroz:</b> ${(kg * 5).toFixed(0)} ml <small>(Yeni Doğan için 2 ml/kg)</small>
        </div>`;

  // 5. Analjezi ve Sedasyon
  h += `<div class="decision-box">
          <b class="decision-title">💊 Analjezi ve Sedasyon</b>
          • <b>Parasetamol:</b> ${(kg * 15).toFixed(0)} mg <small>(15 mg/kg)</small><br>
          • <b>Fentanil:</b> ${(kg * 1).toFixed(1)} mcg <small>(1 mcg/kg)</small><br>
          • <b>Ketamin:</b> ${(kg * 1).toFixed(1)}-${(kg * 2).toFixed(1)} mg <small>(1-2 mg/kg)</small>
        </div>`;

  h += `</div>`;
  res.innerHTML = h;
}

function clearContent() {
  // Eğer çalan bir ses varsa onu durdurur
  if (typeof stopAllSounds === "function") {
    stopAllSounds(); 
  }

  // Gizlediğimiz ana sayfa butonlarını (grid) geri getirir
  const gridEl = document.querySelector('.grid');
  if(gridEl) {
    gridEl.style.display = 'grid'; 
  }

  // İçerik alanını temizler ve gizler
  const c = document.getElementById("content");
  if (c) { 
    c.style.display = "none"; 
    c.innerHTML = ''; 
  }
  
  // Favoriler bölümünü göster
  renderFavorites();
  
  // Sayfayı en üste kaydırır
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGroup(g) {
  // Sayfa değiştiğinde tüm sesleri durdur
  stopAllSounds();
  
  // Tüm ana bölümleri gizle
  document.getElementById("yetiskin").style.display = "none";
  document.getElementById("cocuk").style.display = "none";
  document.getElementById("cocukDozSection").style.display = "none";
  document.getElementById("ilacTabloSection").style.display = "none"; // Yeni eklenen
  
  // Seçilen bölümü göster
  if (g === 'yetiskin') {
    document.getElementById("yetiskin").style.display = "block";
  } else if (g === 'cocuk') {
    document.getElementById("cocuk").style.display = "block";
  } else if (g === 'doz') {
    document.getElementById("cocukDozSection").style.display = "block";
  } else if (g === 'ilaclar') {
    document.getElementById("ilacTabloSection").style.display = "block";
    renderIlacTablosu(); // Tabloyu oluştur
  }
  
  clearContent();
}

// --- CPR Sayacı ve Ses Mantığı (TAMİR EDİLDİ) ---
let cprInterval = null;
let cprRemaining = 120;
let metronomeInterval = null;
const beepSound = new Audio('sound/beep.mp3');
beepSound.load(); // Dosyayı önceden belleğe al

// Ses sistemini (AudioContext) bir değişkende tutalım
let audioCtx = null;

function playTick() {
  // Eğer başlatılmamışsa oluştur (Mobil uyum için)
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') { audioCtx.resume(); }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(1000, audioCtx.currentTime); // 1000Hz net tık sesi
  
  gain.gain.setValueAtTime(0.15, audioCtx.currentTime); 
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
  
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.05);
}

function formatTime(s) {
  const mm = String(Math.floor(s / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

function updateCPRDisplay() {
  const timerEl = document.getElementById("cprTimer");
  const alertEl = document.getElementById("cprAlert");
  
  if (timerEl) timerEl.textContent = formatTime(cprRemaining);
  
  // Süre dolduğunda (00:00)
  if (cprRemaining <= 0) {
    // 1. Metronomu sustur
    stopCPR();

    // 2. Uyarı sesini çal
   // 2. Uyarı sesini çal (Sıfırlayarak oynat)
   // 2. Uyarı sesini çal (Sıfırlayarak oynat)
    beepSound.currentTime = 0;
    beepSound.play().catch(e => console.log("Süre sonu sesi telefonda engellendi:", e));
    // 3. Ekrana mesajı yaz
    if (alertEl) {
      alertEl.textContent = "🔔 2 dakika tamamlandı — ritim kontrolü ve ekip değişimi düşün.";
    }
    
    // 4. Titreşimi çalıştır
    if (navigator.vibrate) {
      try { navigator.vibrate([200, 100, 200]); } catch(e) {}
    }
  } else {
    // Süre dolmadıysa uyarı yazısını temizle
    if (alertEl) alertEl.textContent = "";
  }
}

function startCPR() {
  if (cprInterval) return;
  if (cprRemaining <= 0) cprRemaining = 120;
  
  // 1. SES MOTORUNU VE DOSYAYI UYANDIR (Mobil Tarayıcılar İçin Şart)
  if (!audioCtx) { 
      audioCtx = new (window.AudioContext || window.webkitAudioContext)(); 
  }
  if (audioCtx.state === 'suspended') { audioCtx.resume(); }

  // Telefon kilidini açmak için beep sesini çok kısa oynat-durdur yapıyoruz
  // Kullanıcı butona bastığı an bu işlem gerçekleştiği için tarayıcı izin verir
  beepSound.play().then(() => {
      beepSound.pause();
      beepSound.currentTime = 0;
  }).catch(e => console.log("Mobil ses uyandırma hatası:", e));

  updateCPRDisplay();

  // 2. Saniye Sayacı
  cprInterval = setInterval(() => {
    cprRemaining--;
    updateCPRDisplay();
  }, 1000);

  // 3. Metronom (Dakikada 110 Tık)
  metronomeInterval = setInterval(() => {
    playTick();
  }, 545); 
}
function stopCPR() {
  if (cprInterval) {
    clearInterval(cprInterval);
    cprInterval = null;
  }
  if (metronomeInterval) {
    clearInterval(metronomeInterval);
    metronomeInterval = null;
  }
}

function resetCPR() {
  stopCPR();
  cprRemaining = 120;
  updateCPRDisplay();
}

// Sayfa yüklendiğinde CPR ekranını hazırla
document.addEventListener('DOMContentLoaded', () => {
  updateCPRDisplay();
});
function renderIlacTablosu() {
  const ilaclar = [
    {ad: "Amiodaron", form: "150mg/3ml<br>Doz: 300mg", not: "Sadece %5 Dekstroz ile. SF ile çöker! Arrestte 20ml %5D içinde puşe."},
    {ad: "Adrenalin", form: "1mg/1ml<br>Doz: 1mg", not: "Arrestte doğrudan. Anafilakside SADECE İM (1:1000)."},
    {ad: "Atropin", form: "0.5mg/1ml<br>Doz: 0.5-1mg", not: "Sulandırmadan doğrudan IV puşe."},
    {ad: "Aritmal %2", form: "100mg/5ml<br>1-1.5 mg/kg", not: "Doğrudan puşe edilebilir."},
    {ad: "Dopamin", form: "200mg/5ml", not: "500ml SF/%5D içine. İnfüzyonla verilir."},
    {ad: "Dobütamin", form: "250mg/20ml", not: "250/500ml SF/%5D içine. İnfüzyonla."},
    {ad: "Mag. Sülfat", form: "1.5g/10ml<br>Doz: 2g", not: "En az 100ml SF/%5D ile 15-20 dk'da. Puşe yapma (tansiyon düşürür)."},
    {ad: "Kalsiyum", form: "%10 Ampul<br>5-10 ml", not: "Çok yavaş. Damar dışına çıkarsa doku nekrozu yapar!"},
    {ad: "Beloc", form: "5mg/5ml<br>Doz: 5mg", not: "Sulandırmadan 2-5 dk'da çok yavaş. Nabız/TA takibi şart."},
    {ad: "Adenozin", form: "6mg/2ml<br>Doz: 6-12mg", not: "ÇOK HIZLI puşe + 20ml SF hızlıca arkasından."},
    {ad: "Diazepam", form: "10mg/2ml", not: "Sulandırılmaz. Plastik enjektörde bekletme. Yavaş IV."},
    {ad: "Dormicum", form: "5/15 mg", not: "SF ile sulandırılabilir. Titre ederek (yavaş) verilir."}
  ];

  let html = "";
  ilaclar.forEach((i, index) => {
    const bg = index % 2 === 0 ? "#ffffff" : "#f8fafc";
    html += `<tr style="background: ${bg}; border-bottom: 1px solid #eee;">
      <td style="padding: 10px; font-weight: bold; color: var(--danger); border: 1px solid #eee;">${i.ad}</td>
      <td style="padding: 10px; border: 1px solid #eee;">${i.form}</td>
      <td style="padding: 10px; border: 1px solid #eee;">${i.not}</td>
    </tr>`;
  });
  document.getElementById("ilacTabloGövde").innerHTML = html;
}

// --- SES SİSTEMİ (ASTIM, KOAH, ANAFİLAKSİ) ---
const wheezingSound = new Audio('sound/wheezing.mp3');
const ronkusSound = new Audio('sound/ronkus.mp3');
const stridorSound = new Audio('sound/stridor.mp3');
const krupSound = new Audio('sound/krup.mp3');

function playSound(type) {
    console.log("🔊 Ses çalınıyor:", type);
    stopAllSounds();
    
    if(type === 'astim') {
        wheezingSound.play().catch(e => console.log("Astım sesi hatası:", e));
    }
    if(type === 'koah') {
        ronkusSound.play().catch(e => console.log("KOAH sesi hatası:", e));
    }
    if(type === 'anafilaksi') {
        stridorSound.play().catch(e => console.log("Stridor sesi hatası:", e));
    }
    if(type === 'krup') {
        krupSound.play().catch(e => console.log("Krup sesi hatası:", e));
    }
}

function stopAllSounds() {
    [wheezingSound, ronkusSound, stridorSound,krupSound].forEach(s => {
        s.pause();
        s.currentTime = 0;
    });
}

// Manuel splash screen kapatma fonksiyonu
function closeSplashScreen() {
    console.log('👆 Kullanıcı splash screen\'e tıkladı');
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.style.opacity = '0';
        splash.style.transform = 'scale(1.05)';
        setTimeout(() => {
            splash.style.display = 'none';
            console.log('✅ Splash screen manuel olarak kapatıldı!');
        }, 300);
    }
}

// Sayfa yüklendiğinde Splash Screen'i yönet
window.addEventListener('load', () => {
    console.log('🚀 Sayfa yüklendi, splash screen kapatılıyor...');
    const splash = document.getElementById('splash-screen');
    
    if (splash) {
        console.log('✅ Splash screen bulundu, kapatma işlemi başlıyor...');
        // 1.5 saniye sonra ekranı kaldır (daha hızlı)
        setTimeout(() => {
            console.log('⏰ Splash screen kapatılıyor...');
            splash.style.opacity = '0';
            splash.style.transform = 'scale(1.05)';
            setTimeout(() => {
                splash.style.display = 'none';
                console.log('✅ Splash screen kapatıldı!');
            }, 500);
        }, 1500);
    } else {
        console.error('❌ Splash screen elementi bulunamadı!');
    }
});

// Acil durum: 5 saniye sonra zorla kapat
setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash && splash.style.display !== 'none') {
        console.log('🚨 Acil durum: Splash screen zorla kapatılıyor...');
        splash.style.display = 'none';
    }
}, 5000);

// --- SERVICE WORKER KAYDI (PWA İÇİN ŞART) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('Servis İşçisi başarıyla kaydedildi:', registration.scope);
            })
            .catch(error => {
                console.log('Servis İşçisi kaydı başarısız:', error);
            });
    });
}

// --- LANDSCAPE MODE SUPPORT ---
function handleOrientationChange() {
    // Orientation değişikliğinde layout'u optimize et
    const isLandscape = window.innerWidth > window.innerHeight;
    const body = document.body;
    
    if (isLandscape) {
        body.classList.add('landscape-mode');
        console.log('📱 Landscape mode aktif');
        
        // İlk kez landscape'e geçtiğinde bilgi göster
        if (!localStorage.getItem('landscape-tip-shown')) {
            setTimeout(() => {
                const tip = document.createElement('div');
                tip.style = `
                    position: fixed;
                    top: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(37, 99, 235, 0.95);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 12px;
                    z-index: 1000;
                    animation: fadeInOut 3s ease-in-out;
                `;
                tip.textContent = '📱 Yatay ekran modu aktif - Daha geniş görünüm!';
                document.body.appendChild(tip);
                
                setTimeout(() => tip.remove(), 3000);
                localStorage.setItem('landscape-tip-shown', 'true');
            }, 500);
        }
    } else {
        body.classList.remove('landscape-mode');
        console.log('📱 Portrait mode aktif');
    }
    
    // Grid layout'u yeniden hesapla
    setTimeout(() => {
        const grids = document.querySelectorAll('.grid');
        grids.forEach(grid => {
            // Force reflow to apply new CSS
            grid.style.display = 'none';
            grid.offsetHeight; // Trigger reflow
            grid.style.display = 'grid';
        });
    }, 100);
}

// Orientation change event listeners
window.addEventListener('orientationchange', () => {
    setTimeout(handleOrientationChange, 100); // iOS için delay
});

window.addEventListener('resize', handleOrientationChange);

// Sayfa yüklendiğinde initial orientation check
window.addEventListener('load', handleOrientationChange);

// --- QUIZ GAME FUNCTIONS ---
function showQuizGame() {
    // Sayfa değiştiğinde tüm sesleri durdur
    stopAllSounds();
    
    // Ana sayfadaki grid butonlarını gizle
    const gridEl = document.querySelector('.grid');
    if(gridEl) gridEl.style.display = 'none';

    const contentEl = document.getElementById("content");
    contentEl.innerHTML = `
        <button class="back-btn" onclick="clearContent()">⬅️ Ana Menü</button>
        
        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #f59e0b; margin: 0; font-size: 1.4rem;">🎮 112 Quiz Challenge</h2>
            <p style="color: #6b7280; margin: 5px 0;">60 saniyede en fazla soruyu çöz!</p>
        </div>

        <div id="quizMenu" style="display: block;">
            <div style="background: #fff; padding: 20px; border-radius: 16px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <h3 style="margin-top: 0; color: #1f2937;">🎯 Zorluk Seviyesi Seç</h3>
                <div style="display: grid; gap: 10px;">
                    <button onclick="startQuiz('kolay')" style="background: linear-gradient(135deg, #10b981, #059669); padding: 12px; border-radius: 12px; color: white; border: none; font-size: 16px;">
                        🟢 Kolay - Temel bilgiler
                    </button>
                    <button onclick="startQuiz('orta')" style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 12px; border-radius: 12px; color: white; border: none; font-size: 16px;">
                        🟡 Orta - Detaylı bilgiler  
                    </button>
                    <button onclick="startQuiz('zor')" style="background: linear-gradient(135deg, #ef4444, #dc2626); padding: 12px; border-radius: 12px; color: white; border: none; font-size: 16px;">
                        🔴 Zor - Uzman seviyesi
                    </button>
                    <button onclick="startQuiz('karisik')" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); padding: 12px; border-radius: 12px; color: white; border: none; font-size: 16px;">
                        🌈 Karışık - Tüm seviyeler
                    </button>
                </div>
            </div>
            
            <div style="background: #f8fafc; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
                <h4 style="margin-top: 0; color: #374151;">📊 En İyi Skorların</h4>
                <div id="leaderboard"></div>
            </div>
            
            <div style="background: #fef3c7; padding: 16px; border-radius: 12px; border-left: 4px solid #f59e0b;">
                <h4 style="margin-top: 0; color: #92400e;">ℹ️ Nasıl Oynanır?</h4>
                <ul style="margin: 0; padding-left: 20px; color: #92400e;">
                    <li>60 saniye süren var</li>
                    <li>Doğru cevap = +10 puan</li>
                    <li>Yanlış cevap = -5 puan</li>
                    <li>Hızlı cevap = bonus puan</li>
                    <li>En yüksek skoru hedefle!</li>
                </ul>
            </div>
        </div>

        <div id="quizGame" style="display: none;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: #1f2937; color: white; padding: 15px; border-radius: 12px;">
                <div>
                    <span style="font-size: 18px; font-weight: bold;">⏱️ <span id="timeDisplay">60</span>s</span>
                </div>
                <div>
                    <span style="font-size: 18px; font-weight: bold;">🏆 <span id="scoreDisplay">0</span> puan</span>
                </div>
                <div>
                    <span style="font-size: 16px;">📝 <span id="questionCounter">1/∞</span></span>
                </div>
            </div>
            
            <div id="questionContainer" style="background: white; padding: 20px; border-radius: 16px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div id="questionText" style="font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 20px; line-height: 1.4;"></div>
                <div id="optionsContainer" style="display: grid; gap: 10px;"></div>
            </div>
            
            <div id="feedbackContainer" style="display: none; padding: 15px; border-radius: 12px; margin-bottom: 15px;"></div>
        </div>

        <div id="quizResults" style="display: none;">
            <div style="text-align: center; background: white; padding: 30px; border-radius: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
                <div id="resultIcon" style="font-size: 4rem; margin-bottom: 15px;"></div>
                <h3 id="resultTitle" style="color: #1f2937; margin-bottom: 10px;"></h3>
                <div id="resultStats" style="color: #6b7280; margin-bottom: 20px;"></div>
                <div style="display: grid; gap: 10px; max-width: 300px; margin: 0 auto;">
                    <button onclick="showQuizGame()" style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 12px; border-radius: 12px; border: none; font-size: 16px;">
                        🔄 Tekrar Oyna
                    </button>
                    <button onclick="clearContent()" style="background: #6b7280; color: white; padding: 12px; border-radius: 12px; border: none; font-size: 16px;">
                        🏠 Ana Menü
                    </button>
                </div>
            </div>
        </div>
    `;
    
    contentEl.style.display = "block";
    loadLeaderboard();
}

function startQuiz(level) {
    quizState.level = level;
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.timeLeft = 60;
    quizState.gameActive = true;
    quizState.startTime = Date.now();
    
    // Soruları seviyeye göre filtrele
    if (level === 'karisik') {
        quizState.questions = [...quizQuestions].sort(() => Math.random() - 0.5);
    } else {
        quizState.questions = quizQuestions.filter(q => q.level === level).sort(() => Math.random() - 0.5);
    }
    
    document.getElementById('quizMenu').style.display = 'none';
    document.getElementById('quizGame').style.display = 'block';
    
    startTimer();
    showQuestion();
}

function startTimer() {
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        document.getElementById('timeDisplay').textContent = quizState.timeLeft;
        
        // Son 10 saniyede kırmızı yap
        const timeDisplay = document.getElementById('timeDisplay');
        if (quizState.timeLeft <= 10) {
            timeDisplay.style.color = '#ef4444';
            timeDisplay.style.animation = 'pulse 1s infinite';
        }
        
        if (quizState.timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    if (quizState.currentQuestion >= quizState.questions.length) {
        // Soruları bitirdiyse karıştır ve devam et
        quizState.questions = [...quizState.questions].sort(() => Math.random() - 0.5);
        quizState.currentQuestion = 0;
    }
    
    const question = quizState.questions[quizState.currentQuestion];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionCounter').textContent = `${quizState.currentQuestion + 1}. Soru`;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.style = `
            padding: 15px;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            background: white;
            color: #1f2937;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.2s ease;
        `;
        button.onmouseover = () => {
            button.style.borderColor = '#3b82f6';
            button.style.background = '#eff6ff';
        };
        button.onmouseout = () => {
            button.style.borderColor = '#e5e7eb';
            button.style.background = 'white';
        };
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    // Feedback container'ı gizle
    document.getElementById('feedbackContainer').style.display = 'none';
}

function selectAnswer(selectedIndex) {
    if (!quizState.gameActive) return;
    
    const question = quizState.questions[quizState.currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    const timeBonus = Math.max(0, Math.floor((60 - (60 - quizState.timeLeft)) / 10)); // Hızlı cevap bonusu
    
    // Puanlama
    if (isCorrect) {
        quizState.score += 10 + timeBonus;
    } else {
        quizState.score = Math.max(0, quizState.score - 5);
    }
    
    // Feedback göster
    showFeedback(isCorrect, question.explanation, timeBonus);
    
    // Skor güncelle
    document.getElementById('scoreDisplay').textContent = quizState.score;
    
    // Sonraki soruya geç
    setTimeout(() => {
        quizState.currentQuestion++;
        showQuestion();
    }, 2000);
}

function showFeedback(isCorrect, explanation, timeBonus) {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const bgColor = isCorrect ? '#dcfce7' : '#fee2e2';
    const textColor = isCorrect ? '#166534' : '#991b1b';
    const icon = isCorrect ? '✅' : '❌';
    
    let bonusText = '';
    if (isCorrect && timeBonus > 0) {
        bonusText = ` (+${timeBonus} hız bonusu!)`;
    }
    
    feedbackContainer.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 10px;">
            <span style="font-size: 24px;">${icon}</span>
            <div>
                <div style="font-weight: bold; color: ${textColor}; margin-bottom: 5px;">
                    ${isCorrect ? 'Doğru!' : 'Yanlış!'} ${bonusText}
                </div>
                <div style="color: ${textColor}; font-size: 14px;">
                    ${explanation}
                </div>
            </div>
        </div>
    `;
    feedbackContainer.style.background = bgColor;
    feedbackContainer.style.display = 'block';
}

function endQuiz() {
    quizState.gameActive = false;
    clearInterval(quizState.timer);
    
    // Skoru kaydet
    saveScore(quizState.level, quizState.score);
    
    // Sonuçları göster
    showResults();
}

function showResults() {
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    const totalTime = Math.floor((Date.now() - quizState.startTime) / 1000);
    const questionsAnswered = quizState.currentQuestion;
    
    // Performans değerlendirmesi
    let resultIcon, resultTitle, resultMessage;
    if (quizState.score >= 100) {
        resultIcon = '🏆';
        resultTitle = 'Mükemmel!';
        resultMessage = 'Harika bir performans sergileddin!';
    } else if (quizState.score >= 70) {
        resultIcon = '🥇';
        resultTitle = 'Çok İyi!';
        resultMessage = 'Güzel bir skor elde ettin!';
    } else if (quizState.score >= 40) {
        resultIcon = '🥈';
        resultTitle = 'İyi!';
        resultMessage = 'Fena değil, biraz daha çalışabilirsin!';
    } else {
        resultIcon = '🥉';
        resultTitle = 'Başlangıç';
        resultMessage = 'Pratik yapmaya devam et!';
    }
    
    document.getElementById('resultIcon').textContent = resultIcon;
    document.getElementById('resultTitle').textContent = resultTitle;
    document.getElementById('resultStats').innerHTML = `
        <div style="font-size: 18px; font-weight: bold; color: #f59e0b; margin-bottom: 10px;">
            ${quizState.score} Puan
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; text-align: left;">
            <div>📝 Soru: ${questionsAnswered}</div>
            <div>⏱️ Süre: ${totalTime}s</div>
            <div>🎯 Seviye: ${quizState.level}</div>
            <div>📊 Ortalama: ${questionsAnswered > 0 ? Math.round(quizState.score / questionsAnswered) : 0}/soru</div>
        </div>
        <div style="margin-top: 15px; font-size: 14px;">
            ${resultMessage}
        </div>
    `;
}

function saveScore(level, score) {
    const scores = JSON.parse(localStorage.getItem('quiz-scores') || '{}');
    if (!scores[level]) scores[level] = [];
    
    scores[level].push({
        score: score,
        date: new Date().toLocaleDateString('tr-TR'),
        timestamp: Date.now()
    });
    
    // En iyi 5 skoru tut
    scores[level] = scores[level]
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    
    localStorage.setItem('quiz-scores', JSON.stringify(scores));
}

function loadLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('quiz-scores') || '{}');
    const leaderboard = document.getElementById('leaderboard');
    
    if (Object.keys(scores).length === 0) {
        leaderboard.innerHTML = '<p style="color: #6b7280; font-style: italic;">Henüz skor yok. İlk oyunu sen oyna!</p>';
        return;
    }
    
    let html = '';
    ['kolay', 'orta', 'zor', 'karisik'].forEach(level => {
        if (scores[level] && scores[level].length > 0) {
            const levelNames = {
                'kolay': '🟢 Kolay',
                'orta': '🟡 Orta', 
                'zor': '🔴 Zor',
                'karisik': '🌈 Karışık'
            };
            
            html += `<div style="margin-bottom: 15px;">
                <h5 style="margin: 0 0 8px 0; color: #374151;">${levelNames[level]}</h5>`;
            
            scores[level].slice(0, 3).forEach((score, index) => {
                const medals = ['🥇', '🥈', '🥉'];
                html += `<div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>${medals[index]} ${score.score} puan</span>
                    <span style="color: #6b7280; font-size: 12px;">${score.date}</span>
                </div>`;
            });
            
            html += '</div>';
        }
    });
    
    leaderboard.innerHTML = html || '<p style="color: #6b7280; font-style: italic;">Henüz skor yok.</p>';
}
function filterYetiskin(category, titleText) {
    // Başlığı değiştir
    document.getElementById('yetiskinTitle').textContent = titleText;
    
    // Kategori menüsünü gizle, ana gridi göster
    document.getElementById('yetiskinCategoryMenu').style.display = 'none';
    const grid = document.getElementById('yetiskinGrid');
    grid.style.display = 'grid';
    
    // Butonları filtrele
    const buttons = grid.querySelectorAll('button[data-category]');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
}

function resetYetiskinView() {
    // Sayfa değiştiğinde tüm sesleri durdur
    stopAllSounds();
    
    // Görünümü başa döndür
    document.getElementById('yetiskinTitle').textContent = 'Yetişkin Ön Tanılar';
    document.getElementById('yetiskinCategoryMenu').style.display = 'grid';
    document.getElementById('yetiskinGrid').style.display = 'none';
}

function openEkgGallery(liste) {
    const modal = document.createElement('div');
    // Sayfanın en üstünde açılması ve kaydırılabilir olması için
    modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.95); z-index:10000; display:flex; flex-direction:column; align-items:center; padding:20px; overflow-y:auto; -webkit-overflow-scrolling: touch;";
    
    let galeriHtml = `
        <h3 style="color:white; margin-bottom:20px; font-family:sans-serif;">AKS EKG Örnekleri</h3>
        <p style="color:#aaa; font-size:12px; margin-bottom:20px;">Kapatmak için görsele veya dışarıya dokun</p>
    `;
    
    liste.forEach(ekg => {
        galeriHtml += `
            <div style="width:100%; max-width:500px; margin-bottom:40px; text-align:center;">
                <p style="color:#fca5a5; font-weight:bold; margin-bottom:8px; font-size:16px;">${escapeHtml(ekg.isim)}</p>
                <img src="${ekg.link}" loading="lazy" style="width:100%; border-radius:12px; border:2px solid #333; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" alt="${escapeHtml(ekg.isim)}" onerror="this.parentElement.innerHTML='<p style=\\'color:#fca5a5;\\'>Görsel yüklenemedi</p>';">
            </div>
        `;
    });

    galeriHtml += `<button onclick="this.parentElement.remove()" style="padding:15px 50px; background:#dc2626; color:white; border:none; border-radius:30px; font-weight:bold; cursor:pointer; margin-bottom:60px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">KAPAT</button>`;
    
    modal.innerHTML = galeriHtml;
    document.body.appendChild(modal);
    
    // Katmana dokununca kapat (resimlerin dışındaki boşluğa basınca)
    modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
}

function openVideoPlayer(videoUrl, videoBaslik) {
    try {
        const modal = document.createElement('div');
        modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.98); z-index:10000; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:15px;";
        
        modal.innerHTML = `
            <div style="width:100%; max-width:500px; position:relative;">
                <h3 style="color:white; text-align:center; margin-bottom:15px; font-family:sans-serif;">${escapeHtml(videoBaslik)}</h3>
                
                <video controls autoplay preload="metadata" style="width:100%; border-radius:12px; border:1px solid #444; background:#000;">
                    <source src="${videoUrl}" type="video/mp4">
                    Tarayıcınız video oynatmayı desteklemiyor.
                </video>
                
                <div style="margin-top:20px; text-align:center;">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                            style="padding:12px 40px; background:#fff; color:#000; border:none; border-radius:25px; font-weight:bold; cursor:pointer;">
                        Kapat
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
        
        // Video yükleme hatası kontrolü
        const video = modal.querySelector('video');
        if (video) {
            video.addEventListener('error', function(e) {
                console.error('Video yükleme hatası:', videoUrl);
                const errorDiv = document.createElement('div');
                errorDiv.style.cssText = "color:white; text-align:center; padding:20px; background:rgba(220,38,38,0.8); border-radius:8px; margin-top:10px;";
                errorDiv.textContent = 'Video yüklenemedi. Dosya mevcut değil olabilir.';
                video.parentElement.appendChild(errorDiv);
            });
        }
    } catch (error) {
        console.error('Video oynatıcı hatası:', error);
        alert('Video oynatıcı açılamadı. Lütfen tekrar deneyin.');
    }
}

function showProcedures() {
    // Sayfa değiştiğinde tüm sesleri durdur
    stopAllSounds();
    
    // Ana sayfadaki o grid butonlarını gizle
    const gridEl = document.querySelector('.grid');
    if(gridEl) gridEl.style.display = 'none';

    const contentEl = document.getElementById("content");
    
    let html = `
        <button class="back-btn" onclick="clearContent()">⬅️ Ana Menüye Dön</button>
        <div class="algo-card">
            <h2 style="color:#b91c1c; margin-bottom:20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">⚙️ Girişimsel Uygulamalar</h2>
            <div style="display: flex; flex-direction: column; gap: 12px;">
    `;

    // En üste yapıştırdığın proceduresData listesini kullanıyoruz
    proceduresData.forEach(proc => {
        html += `
            <button onclick="openVideoPlayer('${proc.link}', '${proc.isim}')" 
                    style="background: #ffffff; color: #1f2937; border: 1px solid #e5e7eb; padding: 18px; border-radius: 12px; font-weight: bold; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <span>🎥 ${proc.isim}</span>
                <span style="color: #2563eb;">İzle ⮕</span>
            </button>
        `;
    });

    html += `</div></div>`;
    
    contentEl.innerHTML = html;
    contentEl.style.display = 'block';
    window.scrollTo(0, 0);
}

function calculatePediatric() {
    const kiloInput = document.getElementById("child-weight").value;
    const yasInput = document.getElementById("child-age").value;
    const ayInput = document.getElementById("child-month").value;
    const resultArea = document.getElementById("calc-results");
    
    let kilo = parseFloat(kiloInput);
    let yas = parseFloat(yasInput) || 0;
    let ay = parseFloat(ayInput) || 0;

    // --- 1. KİLO TAHMİN FORMÜLLERİ ---
    if (!kilo) {
        if (ay > 0 && yas === 0) {
            kilo = (ay + 9) / 2;
            yas = ay / 12;
        } else if (yas >= 1 && yas <= 5) {
            kilo = (yas * 2) + 8;
        } else if (yas >= 6 && yas <= 12) {
            kilo = (yas * 3) + 7;
        }
    }

    if (!kilo) { resultArea.innerHTML = ""; return; }

    // Geriye dönük yaş tahmini (Vitaller için)
    if (yas === 0 && ay === 0) {
        yas = kilo <= 10 ? (kilo * 2 - 9) / 12 : (kilo <= 18 ? (kilo - 8) / 2 : (kilo - 7) / 3);
    }

    // --- 2. VİTAL VE EKİPMAN HESAPLARI ---
    let v = { n: "100-160", s: "40-60", tans: "60-90" };
    if (yas >= 0.1) v = { n: "100-150", s: "30-50", tans: "70-100" };
    if (yas >= 1) v = { n: "80-130", s: "24-40", tans: "80-110" };
    if (yas >= 4) v = { n: "80-110", s: "20-30", tans: "80-110" };
    if (yas >= 7) v = { n: "70-110", s: "16-24", tans: "90-120" };
    if (yas >= 13) v = { n: "60-100", s: "12-20", tans: "110-130" };
    
    const hipo = 70 + (Math.floor(yas) * 2);
    const kafli = (yas / 4) + 3.5;
    const derinlik = (yas / 2) + 12;

    

    // --- 3. SONUÇ EKRANI (Senin İlaç Listenle Birlikte) ---
    resultArea.innerHTML = `
        <div style="background:#fff1f2; padding:12px; border-radius:10px; margin-top:15px; border:1px solid #fecdd3;">
            <h4 style="color:#e11d48; margin-bottom:8px;">📊 Tahmini Vitaller (${kilo.toFixed(1)} kg)</h4>
            <div style="font-size:13px; line-height:1.6;">
                <p>💓 <b>Nabız:</b> ${v.n} | 🌬️ <b>Solunum:</b> ${v.s}</p>
                <p>🩸 <b>Sistolik KB:</b> ${v.tans} mmHg</p>
                <p style="color:#dc2626; font-weight:bold;">⚠️ Hipotansiyon Sınırı: < ${hipo} mmHg</p>
                <p>🫁 <b>Tüp (Kaflı):</b> ${kafli.toFixed(1)} / <b>Derinlik:</b> ${derinlik.toFixed(1)} cm</p>
            </div>
        </div>

        <div class="drug-section" style="background:#f0f9ff; padding:12px; border-radius:10px; margin-top:10px; border:1px solid #bae6fd;">
            <h4 style="color:#0284c7; margin-bottom:8px;">🚨 Resüsitasyon (Arrest)</h4>
            <p style="font-size:12px;"><b>Adrenalin (0.1mg/ml):</b> ${(kilo * 0.1).toFixed(1)} ml IV/IO</p>
            <p style="font-size:12px;"><b>Amiodaron (5mg/kg):</b> ${(kilo * 5).toFixed(1)} mg</p>
            <p style="font-size:12px;"><b>Defibrilasyon (2J/4J):</b> ${kilo * 2}J / ${kilo * 4}J</p>
        </div>

        <div class="drug-section" style="background:#fdf4ff; padding:12px; border-radius:10px; margin-top:10px; border:1px solid #f5d0fe;">
            <h4 style="color:#a21caf; margin-bottom:8px;">🧠 Nöbet Kontrolü</h4>
            <p style="font-size:12px;"><b>Midazolam (IV/IO):</b> ${(kilo * 0.1).toFixed(2)} mg</p>
            <p style="font-size:12px;"><b>Midazolam (IM/Nazal):</b> ${(kilo * 0.2).toFixed(2)} mg</p>
            <p style="font-size:12px;"><b>Diazepam (Rektal):</b> ${(kilo * 0.5).toFixed(1)} mg</p>
        </div>

        <div class="drug-section" style="background:#f0fdf4; padding:12px; border-radius:10px; margin-top:10px; border:1px solid #bbf7d0;">
            <h4 style="color:#15803d; margin-bottom:8px;">🫁 Solunum & Anafilaksi</h4>
            <p style="font-size:12px;"><b>Adrenalin IM:</b> ${(kilo * 0.01).toFixed(2)} mg (Max 0.3)</p>
            <p style="font-size:12px;"><b>Metilprednizolon:</b> ${(kilo * 1).toFixed(1)}-${(kilo * 2).toFixed(1)} mg</p>
        </div>

        <div class="drug-section" style="background:#fff7ed; padding:12px; border-radius:10px; margin-top:10px; border:1px solid #ffedd5;">
            <h4 style="color:#c2410c; margin-bottom:8px;">💧 Sıvı & Hipoglisemi</h4>
            <p style="font-size:12px;"><b>İzotonik Bolus:</b> ${kilo * 20} ml</p>
            <p style="font-size:12px;"><b>%10 Dekstroz:</b> ${kilo * 2} ml (Yeni doğan)</p>
        </div>
    `;
}
function showChildCalc() {
    // Sayfa değiştiğinde tüm sesleri durdur
    stopAllSounds();
    
    const gridEl = document.querySelector('.grid');
    if(gridEl) gridEl.style.display = 'none';

    const contentEl = document.getElementById("content");
    contentEl.innerHTML = `
        <button class="back-btn" onclick="clearContent()">⬅️ Ana Menü</button>
        <div class="algo-card">
            <h2 style="text-align:center; color:#e11d48; margin-bottom:15px;">👶 Pediyatrik Hesaplayıcı</h2>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px; margin-bottom:15px;">
                <div>
                    <label style="font-size:10px; font-weight:bold;">YAŞ (Yıl)</label>
                    <input type="number" id="child-age" placeholder="Yıl" oninput="calculatePediatric()"
                           style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px;">
                </div>
                <div>
                    <label style="font-size:10px; font-weight:bold;">AY (0-12)</label>
                    <input type="number" id="child-month" placeholder="Ay" oninput="calculatePediatric()"
                           style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px;">
                </div>
                <div>
                    <label style="font-size:10px; font-weight:bold;">KİLO (kg)</label>
                    <input type="number" id="child-weight" placeholder="Kilo" oninput="calculatePediatric()"
                           style="width:100%; padding:10px; border:2px solid #e11d48; border-radius:8px;">
                </div>
            </div>

            <div id="calc-results"></div>
        </div>
    `;
    contentEl.style.display = 'block';
    window.scrollTo(0, 0);
}

// ÇOCUK FİLTRELEME SİSTEMİ
function filterCocuk(category, title) {
    document.getElementById('cocukCategoryMenu').style.display = 'none'; // Kategorileri gizle
    document.getElementById('cocukTitle').innerText = title; // Başlığı güncelle
    const grid = document.getElementById('cocukGrid');
    grid.style.display = 'grid'; // Butonları göster
    
    const buttons = grid.querySelectorAll('button:not(.back-btn)');
    buttons.forEach(btn => {
        // Sadece seçilen kategoriye ait olanları göster
        if (btn.getAttribute('data-category') === category) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
}

function resetCocukView() {
    // Sayfa değiştiğinde tüm sesleri durdur
    stopAllSounds();
    
    document.getElementById('cocukCategoryMenu').style.display = 'grid'; // Kategorileri geri getir
    document.getElementById('cocukTitle').innerText = 'Çocuk Ön Tanılar'; // Başlığı sıfırla
    document.getElementById('cocukGrid').style.display = 'none'; // Butonları gizle
}

// Ses Çalma Fonksiyonu
function playAudio(file) {
    let audio = new Audio(file);
    audio.play().catch(error => {
        console.log("Ses çalma hatası: Tarayıcı izni gerekiyor olabilir.", error);
        alert("Ses çalınamadı. Lütfen dosyayı kontrol edin veya tarayıcı izinlerini açın.");
    });
}

// ========== DARK MODE SİSTEMİ ==========
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Sayfa yüklendiğinde tema yükle
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});

// ========== FAVORİLER SİSTEMİ ==========
function getFavorites() {
    try {
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    } catch (e) {
        console.error('Favoriler yüklenemedi:', e);
        return [];
    }
}

function saveFavorites(favorites) {
    try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (e) {
        console.error('Favoriler kaydedilemedi:', e);
    }
}

function toggleFavorite(key, grupName) {
    const favorites = getFavorites();
    const favoriteId = `${grupName}_${key}`;
    const index = favorites.indexOf(favoriteId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(favoriteId);
    }
    
    saveFavorites(favorites);
    renderFavorites();
    updateFavoriteButton(key, grupName);
}

function isFavorite(key, grupName) {
    const favorites = getFavorites();
    const favoriteId = `${grupName}_${key}`;
    return favorites.includes(favoriteId);
}

function updateFavoriteButton(key, grupName) {
    // Algoritma sayfasındaki favori butonunu güncelle
    const favoriteBtn = document.getElementById(`fav-${key}-${grupName}`);
    if (favoriteBtn) {
        if (isFavorite(key, grupName)) {
            favoriteBtn.classList.add('active');
            favoriteBtn.textContent = '⭐ Favorilerden Çıkar';
        } else {
            favoriteBtn.classList.remove('active');
            favoriteBtn.textContent = '⭐ Favorilere Ekle';
        }
    }
}

function renderFavorites() {
    const favorites = getFavorites();
    const favoritesSection = document.getElementById('favoritesSection');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const noFavorites = document.getElementById('noFavorites');
    
    if (!favoritesSection || !favoritesGrid) return;
    
    if (favorites.length === 0) {
        favoritesSection.style.display = 'none';
        return;
    }
    
    favoritesSection.style.display = 'block';
    favoritesGrid.innerHTML = '';
    
    favorites.forEach(favId => {
        const [grupName, key] = favId.split('_');
        const grupKey = grupName.toLowerCase() === 'yetişkin' || grupName.toLowerCase().startsWith('y') ? 'yetiskin' : 'cocuk';
        const algo = algorithmData[grupKey]?.[key];
        
        if (!algo) return;
        
        const favItem = document.createElement('div');
        favItem.className = 'favorite-item';
        favItem.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px;">${escapeHtml(algo.title)}</div>
            <div style="font-size: 12px; color: var(--muted);">${grupName}</div>
        `;
        favItem.onclick = () => showAlgo(key, grupName);
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✕';
        removeBtn.style.cssText = 'float: right; background: transparent; border: none; color: var(--danger); cursor: pointer; font-size: 18px; padding: 0; width: 24px; height: 24px;';
        removeBtn.onclick = (e) => {
            e.stopPropagation();
            toggleFavorite(key, grupName);
        };
        
        favItem.appendChild(removeBtn);
        favoritesGrid.appendChild(favItem);
    });
    
    if (noFavorites) noFavorites.style.display = 'none';
}

// Sayfa yüklendiğinde favorileri göster
window.addEventListener('load', () => {
    setTimeout(renderFavorites, 100);
});

// ========== GELİŞMİŞ ARAMA SİSTEMİ ==========
function fuzzyMatch(str, pattern) {
    pattern = pattern.toLowerCase();
    str = str.toLowerCase();
    let patternIdx = 0;
    for (let i = 0; i < str.length && patternIdx < pattern.length; i++) {
        if (str[i] === pattern[patternIdx]) {
            patternIdx++;
        }
    }
    return patternIdx === pattern.length;
}

function searchAlgo() {
    const q = document.getElementById("searchInput") ? document.getElementById("searchInput").value.trim().toLowerCase() : '';
    const buttons = document.querySelectorAll("button[onclick*='showAlgo']");
    
    if (!q) {
        buttons.forEach(btn => {
            btn.style.display = 'inline-block';
        });
        return;
    }
    
    let matchCount = 0;
    
    buttons.forEach(btn => {
        const text = (btn.textContent || btn.innerText || '').toLowerCase();
        const tags = (btn.getAttribute('data-tags') || '').toLowerCase();
        const category = (btn.getAttribute('data-category') || '').toLowerCase();
        
        // 1. Tam eşleşme (en yüksek öncelik)
        const exactMatch = text.includes(q) || tags.includes(q) || category.includes(q);
        
        // 2. Fuzzy match (yazım hatası toleransı)
        const fuzzyMatchText = fuzzyMatch(text, q) || fuzzyMatch(tags, q);
        
        // 3. Kelime bazlı arama (boşluklarla ayrılmış)
        const words = q.split(/\s+/);
        const wordMatch = words.every(word => 
            text.includes(word) || tags.includes(word) || category.includes(word)
        );
        
        const match = exactMatch || fuzzyMatchText || wordMatch;
        btn.style.display = match ? 'inline-block' : 'none';
        
        if (match) matchCount++;
    });
    
    // Arama sonuçları yoksa bilgi ver
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        if (q && matchCount === 0) {
            searchInput.style.border = '2px solid var(--danger)';
            searchInput.title = 'Sonuç bulunamadı. Farklı bir arama terimi deneyin.';
        } else {
            searchInput.style.border = '';
            searchInput.title = `${matchCount} sonuç bulundu`;
        }
    }
}

// Enter tuşu ile arama
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchAlgo();
            }
        });
    }
});
    {
        level: "kolay",
        question: "Defibrilasyon için hangi ritim gereklidir?",
        options: ["Asistoli", "VF/VT", "Bradikardi", "Normal ritim"],
        correct: 1,
        explanation: "Defibrilasyon sadece VF (ventriküler fibrilasyon) ve nabızsız VT'de uygulanır."
    },
    {
        level: "kolay",
        question: "Oksijen satürasyonu hedefi nedir?",
        options: ["85-90%", "90-94%", "94-98%", "98-100%"],
        correct: 2,
        explanation: "Normal oksijen satürasyonu hedefi %94-98 arasındadır."
    },
    {
        level: "kolay",
        question: "Travmalı hastada öncelik nedir?",
        options: ["Ağrı kontrolü", "C-spine koruması", "Damar yolu", "Röntgen çekimi"],
        correct: 1,
        explanation: "Travmalı hastada servikal omurga koruması önceliklidir."
    },
    {
        level: "kolay",
        question: "Yanık hastasında ilk müdahale nedir?",
        options: ["Merhem sürmek", "Soğuk su", "Buz uygulamak", "Antibiyotik"],
        correct: 1,
        explanation: "Yanık hastasında ilk müdahale soğuk (ılık) su ile soğutmadır."
    },
    {
        level: "kolay",
        question: "Astım atağında ilk ilaç nedir?",
        options: ["Steroid", "Salbutamol", "Adrenalin", "Antihistaminik"],
        correct: 1,
        explanation: "Astım atağında ilk tercih salbutamol (bronkodilatör)dür."
    },
    {
        level: "kolay",
        question: "Nöbet geçiren hastada yapılmaması gereken nedir?",
        options: ["Yan yatırmak", "Ağza cisim sokmak", "Güvenli ortam", "Zaman ölçmek"],
        correct: 1,
        explanation: "Nöbet sırasında ağza hiçbir cisim sokulmamalıdır."
    },
    {
        level: "kolay",
        question: "Hipertansif kriz sınırı nedir?",
        options: ["140/90 mmHg", "160/100 mmHg", "180/110 mmHg", "200/120 mmHg"],
        correct: 2,
        explanation: "Hipertansif kriz genellikle 180/110 mmHg üzeri kabul edilir."
    },
    {
        level: "kolay",
        question: "Göğüs ağrısında ilk yapılacak tetkik nedir?",
        options: ["Kan tahlili", "EKG", "Röntgen", "Ekokardiyografi"],
        correct: 1,
        explanation: "Göğüs ağrısında ilk yapılacak tetkik 12 derivasyonlu EKG'dir."
    },
    {
        level: "kolay",
        question: "Hipoglisemide kan şekeri sınırı nedir?",
        options: ["<50 mg/dL", "<70 mg/dL", "<90 mg/dL", "<110 mg/dL"],
        correct: 1,
        explanation: "Hipoglisemi genellikle kan şekeri <70 mg/dL olarak tanımlanır."
    },
    {
        level: "kolay",
        question: "Zehirlenme şüphesinde aranacak numara nedir?",
        options: ["112", "114", "155", "110"],
        correct: 1,
        explanation: "Zehirlenme şüphesinde UZEM (Ulusal Zehir Danışma Merkezi) 114 aranır."
    },
    // Orta Seviye (Detaylı Bilgiler)
    {
        level: "orta",
        question: "STEMI'de PCI hedef süresi nedir?",
        options: ["60 dakika", "90 dakika", "120 dakika", "180 dakika"],
        correct: 1,
        explanation: "STEMI'de PCI (primer anjiyoplasti) hedef süresi 90 dakikadır."
    },
    {
        level: "orta",
        question: "Çocuklarda bradikardi sınırı nedir?",
        options: ["<50/dk", "<60/dk", "<70/dk", "<80/dk"],
        correct: 2,
        explanation: "Çocuklarda bradikardi genellikle <70/dk olarak kabul edilir."
    },
    {
        level: "orta",
        question: "Magnezyum sülfat dozu (preeklampsi) nedir?",
        options: ["2-4 gr", "4-6 gr", "6-8 gr", "8-10 gr"],
        correct: 1,
        explanation: "Preeklampside MgSO4 yükleme dozu 4-6 gr IV'dir."
    },
    {
        level: "orta",
        question: "Krup tedavisinde kullanılan steroid nedir?",
        options: ["Prednizolon", "Deksametazon", "Hidrokortizol", "Metilprednizolon"],
        correct: 1,
        explanation: "Krup tedavisinde deksametazon 0.6 mg/kg kullanılır."
    },
    {
        level: "orta",
        question: "Hipotermik arrest'te adrenalin ne zaman verilir?",
        options: ["Hemen", "Sıcaklık >30°C", "Sıcaklık >32°C", "Sıcaklık >35°C"],
        correct: 1,
        explanation: "Hipotermik arrest'te sıcaklık >30°C olana kadar adrenalin verilmez."
    },
    {
        level: "orta",
        question: "Atropin dozu (bradikardi) nedir?",
        options: ["0.25 mg", "0.5 mg", "1 mg", "2 mg"],
        correct: 1,
        explanation: "Bradikardide atropin dozu 0.5 mg IV'dir, gerekirse tekrarlanır."
    },
    {
        level: "orta",
        question: "SVT'de adenozin dozu nedir?",
        options: ["3 mg", "6 mg", "12 mg", "18 mg"],
        correct: 1,
        explanation: "SVT'de adenozin ilk doz 6 mg hızlı IV puşe şeklinde verilir."
    },
    {
        level: "orta",
        question: "Amiodaron yükleme dozu nedir?",
        options: ["150 mg", "300 mg", "450 mg", "600 mg"],
        correct: 1,
        explanation: "Amiodaron yükleme dozu VF/VT'de 300 mg IV'dir."
    },
    {
        level: "orta",
        question: "Çocukta adrenalin dozu (arrest) nedir?",
        options: ["0.01 mg/kg", "0.1 mg/kg", "1 mg/kg", "10 mg/kg"],
        correct: 0,
        explanation: "Çocukta arrest durumunda adrenalin dozu 0.01 mg/kg IV/IO'dur."
    },
    {
        level: "orta",
        question: "Parkland formülü nedir?",
        options: ["2 ml x kg x %yanık", "4 ml x kg x %yanık", "6 ml x kg x %yanık", "8 ml x kg x %yanık"],
        correct: 1,
        explanation: "Parkland formülü: 4 ml x kg x %yanık (ilk 8 saatte yarısı)."
    },
    {
        level: "orta",
        question: "Glasgow Koma Skalası minimum puanı nedir?",
        options: ["0", "1", "3", "15"],
        correct: 2,
        explanation: "Glasgow Koma Skalası minimum 3, maksimum 15 puandır."
    },
    {
        level: "orta",
        question: "Çocukta hipotansiyon sınırı (5 yaş) nedir?",
        options: ["<60 mmHg", "<70 mmHg", "<80 mmHg", "<90 mmHg"],
        correct: 2,
        explanation: "Çocukta hipotansiyon sınırı: 70 + (yaş x 2) mmHg. 5 yaş için <80 mmHg."
    },
    {
        level: "orta",
        question: "Midazolam dozu (nöbet) nedir?",
        options: ["0.05 mg/kg", "0.1 mg/kg", "0.2 mg/kg", "0.5 mg/kg"],
        correct: 1,
        explanation: "Nöbette midazolam dozu 0.1 mg/kg IV/IO'dur."
    },
    {
        level: "orta",
        question: "Çocukta sıvı bolus dozu nedir?",
        options: ["10 ml/kg", "20 ml/kg", "30 ml/kg", "40 ml/kg"],
        correct: 1,
        explanation: "Çocukta sıvı bolus dozu 20 ml/kg izotonik kristaloiddir."
    },
    {
        level: "orta",
        question: "Aspirin dozu (AKS) nedir?",
        options: ["75 mg", "150 mg", "300 mg", "600 mg"],
        correct: 2,
        explanation: "AKS'de aspirin dozu 300 mg çiğnetilerek verilir."
    },
    
    // Ek Orta Seviye Sorular (66-95)
    {
        level: "orta",
        question: "Akut miyokard infarktüsünde hangi enzim en erken yükselir?",
        options: ["CK-MB", "Troponin", "Miyoglobin", "LDH"],
        correct: 2,
        explanation: "MI'da miyoglobin en erken yükselen belirteçtir (2-4 saat)."
    },
    {
        level: "orta",
        question: "Pulmoner emboli Wells skorunda kaç puan yüksek risk gösterir?",
        options: [">2", ">4", ">6", ">8"],
        correct: 1,
        explanation: "Wells skorunda >4 puan yüksek PE riski gösterir."
    },
    {
        level: "orta",
        question: "Akut pankreatitte amilaz kaç kat yüksek olmalıdır?",
        options: ["2 kat", "3 kat", "5 kat", "10 kat"],
        correct: 1,
        explanation: "Akut pankreatitte amilaz normal değerin 3 katı yüksek olmalıdır."
    },
    {
        level: "orta",
        question: "Diabetik ketoasidozda bikarbonat değeri nedir?",
        options: ["<10 mEq/L", "<15 mEq/L", "<20 mEq/L", "<25 mEq/L"],
        correct: 1,
        explanation: "DKA'da bikarbonat <15 mEq/L olarak tanımlanır."
    },
    {
        level: "orta",
        question: "Çocukta normal sistolik kan basıncı formülü nedir?",
        options: ["70 + (2 x yaş)", "80 + (2 x yaş)", "90 + (2 x yaş)", "100 + (2 x yaş)"],
        correct: 1,
        explanation: "Çocukta normal sistolik KB: 80 + (2 x yaş) mmHg."
    },
    {
        level: "orta",
        question: "Sepsis tanısında hangi laktat değeri anlamlıdır?",
        options: [">1 mmol/L", ">2 mmol/L", ">3 mmol/L", ">4 mmol/L"],
        correct: 1,
        explanation: "Sepsis'te laktat >2 mmol/L doku hipoperfüzyonunu gösterir."
    },
    {
        level: "orta",
        question: "Akut böbrek yetmezliğinde idrar çıkışı sınırı nedir?",
        options: ["<0.3 ml/kg/saat", "<0.5 ml/kg/saat", "<1 ml/kg/saat", "<2 ml/kg/saat"],
        correct: 1,
        explanation: "ABY'de oligüri <0.5 ml/kg/saat olarak tanımlanır."
    },
    {
        level: "orta",
        question: "Hiponatremi düzeltme hızı maksimum ne kadar olmalıdır?",
        options: ["6 mEq/L/gün", "8 mEq/L/gün", "10 mEq/L/gün", "12 mEq/L/gün"],
        correct: 2,
        explanation: "Hiponatremi düzeltmesi maksimum 10 mEq/L/gün olmalıdır."
    },
    {
        level: "orta",
        question: "Çocukta febril konvülziyon yaş aralığı nedir?",
        options: ["3 ay-3 yaş", "6 ay-5 yaş", "1-6 yaş", "2-8 yaş"],
        correct: 1,
        explanation: "Febril konvülziyon 6 ay-5 yaş arasında görülür."
    },
    {
        level: "orta",
        question: "Akut astım atağında peak flow normal değerin yüzde kaçının altında ise şiddetli kabul edilir?",
        options: ["%30", "%40", "%50", "%60"],
        correct: 2,
        explanation: "Peak flow normal değerin %50'sinin altında ise şiddetli atak kabul edilir."
    },
    {
        level: "orta",
        question: "Preeklampside magnezyum sülfat idame dozu nedir?",
        options: ["0.5-1 g/saat", "1-2 g/saat", "2-3 g/saat", "3-4 g/saat"],
        correct: 1,
        explanation: "Preeklampside MgSO4 idame dozu 1-2 g/saat IV'dir."
    },
    {
        level: "orta",
        question: "Akut koroner sendromda TIMI risk skoru maksimum kaç puandır?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "TIMI risk skoru maksimum 7 puandır."
    },
    {
        level: "orta",
        question: "Çocukta status epilepticus tanısı kaç dakika sonra konur?",
        options: ["2 dakika", "5 dakika", "10 dakika", "30 dakika"],
        correct: 1,
        explanation: "Çocukta 5 dakikadan uzun nöbet status epilepticus kabul edilir."
    },
    {
        level: "orta",
        question: "Hiperkalsemi EKG bulgusu nedir?",
        options: ["QT uzaması", "QT kısalması", "T dalga yüksekliği", "U dalgası"],
        correct: 1,
        explanation: "Hiperkalsemide QT kısalması görülür."
    },
    {
        level: "orta",
        question: "Akut pankreatitte Ranson kriterleri kaç tanedir?",
        options: ["8", "9", "10", "11"],
        correct: 3,
        explanation: "Ranson kriterleri toplam 11 tanedir (5 başvuru + 6 takip)."
    },
    {
        level: "orta",
        question: "Çocukta dehidratasyon derecesi nasıl belirlenir?",
        options: ["Sadece kilo kaybı", "Sadece vital bulgular", "Klinik bulgular", "Laboratuvar"],
        correct: 2,
        explanation: "Çocukta dehidratasyon derecesi klinik bulgularla belirlenir."
    },
    {
        level: "orta",
        question: "Akut aort diseksiyonunda D-dimer sensitivitesi nedir?",
        options: ["85%", "90%", "95%", "99%"],
        correct: 2,
        explanation: "Akut aort diseksiyonunda D-dimer sensitivitesi %95'tir."
    },
    {
        level: "orta",
        question: "Hipoglisemik komada glukagon dozu nedir?",
        options: ["0.5 mg", "1 mg", "2 mg", "5 mg"],
        correct: 1,
        explanation: "Hipoglisemik komada glukagon dozu 1 mg IM/SC'dir."
    },
    {
        level: "orta",
        question: "Çocukta normal kalp hızı (5 yaş) nedir?",
        options: ["60-100/dk", "80-120/dk", "100-140/dk", "120-160/dk"],
        correct: 2,
        explanation: "5 yaş çocukta normal kalp hızı 100-140/dakikadır."
    },
    {
        level: "orta",
        question: "Akut miyokard infarktüsünde troponin ne zaman pik yapar?",
        options: ["6-12 saat", "12-24 saat", "24-48 saat", "48-72 saat"],
        correct: 1,
        explanation: "MI'da troponin 12-24 saatte pik yapar."
    },
    {
        level: "orta",
        question: "Sepsis tanısında qSOFA skoru kaç puandır?",
        options: ["≥1", "≥2", "≥3", "≥4"],
        correct: 1,
        explanation: "qSOFA skoru ≥2 puan sepsis riskini gösterir."
    },
    {
        level: "orta",
        question: "Çocukta hipotansiyon sınırı (10 yaş) nedir?",
        options: ["<70 mmHg", "<80 mmHg", ">90 mmHg", "<100 mmHg"],
        correct: 2,
        explanation: "10 yaş çocukta hipotansiyon sınırı <90 mmHg'dır."
    },
    {
        level: "orta",
        question: "Akut pankreatitte lipaz normal değerin kaç katı yüksek olmalıdır?",
        options: ["2 kat", "3 kat", "5 kat", "10 kat"],
        correct: 1,
        explanation: "Akut pankreatitte lipaz normal değerin 3 katı yüksek olmalıdır."
    },
    {
        level: "orta",
        question: "Diabetik ketoasidozda anyon gap nedir?",
        options: [">10", ">12", ">15", ">20"],
        correct: 1,
        explanation: "DKA'da anyon gap >12 mEq/L olarak kabul edilir."
    },
    {
        level: "orta",
        question: "Çocukta normal solunum sayısı (2 yaş) nedir?",
        options: ["12-20/dk", "20-30/dk", "30-40/dk", "40-50/dk"],
        correct: 1,
        explanation: "2 yaş çocukta normal solunum sayısı 20-30/dakikadır."
    },
    {
        level: "orta",
        question: "Akut böbrek yetmezliğinde kreatinin artışı (KDIGO Evre 1) nedir?",
        options: ["1.2 kat", "1.5 kat", "2 kat", "3 kat"],
        correct: 1,
        explanation: "KDIGO Evre 1'de kreatinin 1.5 kat artış gösterir."
    },
    {
        level: "orta",
        question: "Preeklampside proteinüri sınırı nedir?",
        options: ["100 mg/gün", "300 mg/gün", "500 mg/gün", "1000 mg/gün"],
        correct: 1,
        explanation: "Preeklampside proteinüri sınırı 300 mg/gün'dür."
    },
    {
        level: "orta",
        question: "Çocukta febril konvülziyon basit tip süresi ne kadardır?",
        options: ["<5 dakika", "<10 dakika", "<15 dakika", "<20 dakika"],
        correct: 2,
        explanation: "Basit febril konvülziyon <15 dakika sürer."
    },
    {
        level: "orta",
        question: "Akut koroner sendromda CK-MB ne zaman yükselir?",
        options: ["2-4 saat", "4-8 saat", "8-12 saat", "12-24 saat"],
        correct: 1,
        explanation: "CK-MB 4-8 saatte yükselmeye başlar."
    },
    {
        level: "orta",
        question: "Hiperosmolar hiperglisemik durumda glukoz değeri nedir?",
        options: [">250 mg/dL", ">400 mg/dL", ">600 mg/dL", ">800 mg/dL"],
        correct: 2,
        explanation: "HHS'de glukoz genellikle >600 mg/dL'dir."
    },
    // Zor Seviye (Uzman Bilgiler)
    {
        level: "zor",
        question: "Crush sendromunda hangi elektrolit bozukluğu en tehlikelidir?",
        options: ["Hiponatremi", "Hiperkalemi", "Hipokalsemi", "Hipernatremi"],
        correct: 1,
        explanation: "Crush sendromunda hiperkalemi en tehlikeli komplikasyondur."
    },
    {
        level: "zor",
        question: "Post-ROSC hedef SpO2 nedir?",
        options: ["88-92%", "92-96%", "94-98%", "98-100%"],
        correct: 2,
        explanation: "Post-ROSC hedef SpO2 %94-98'dir (hiperoksiden kaçınılır)."
    },
    {
        level: "zor",
        question: "Adenozin'in yarı ömrü ne kadardır?",
        options: ["5-10 saniye", "10-15 saniye", "15-20 saniye", "20-30 saniye"],
        correct: 0,
        explanation: "Adenozin'in yarı ömrü çok kısa, yaklaşık 5-10 saniyedir."
    },
    {
        level: "zor",
        question: "Epiglotit'te hangi pozisyon tercih edilir?",
        options: ["Sırt üstü", "Yan yatar", "Tripod pozisyonu", "Trendelenburg"],
        correct: 2,
        explanation: "Epiglotit'te çocuk en rahat ettiği tripod pozisyonunda tutulur."
    },
    {
        level: "zor",
        question: "Torsades de Pointes tedavisinde kullanılan ilaç nedir?",
        options: ["Amiodaron", "Lidokain", "Magnezyum", "Prokainamid"],
        correct: 2,
        explanation: "Torsades de Pointes tedavisinde magnezyum sülfat kullanılır."
    },
    {
        level: "zor",
        question: "Malign hipertermi tedavisinde kullanılan ilaç nedir?",
        options: ["Dantrolen", "Propranolol", "Verapamil", "Nifedipin"],
        correct: 0,
        explanation: "Malign hipertermi tedavisinde dantrolen kullanılır."
    },
    {
        level: "zor",
        question: "Organofosfor zehirlenmesinde antidot nedir?",
        options: ["Nalokson", "Flumazenil", "Atropin", "N-asetilsistein"],
        correct: 2,
        explanation: "Organofosfor zehirlenmesinde atropin antidot olarak kullanılır."
    },
    {
        level: "zor",
        question: "Hiperkalemide EKG değişikliği hangisidir?",
        options: ["U dalgası", "Sivri T dalgası", "ST depresyonu", "QT uzaması"],
        correct: 1,
        explanation: "Hiperkalemide sivri T dalgaları görülür."
    },
    {
        level: "zor",
        question: "Tension pnömotoraks tedavisi nedir?",
        options: ["Oksijen", "İğne dekompresyon", "Entübasyon", "Sıvı"],
        correct: 1,
        explanation: "Tension pnömotoraks acil iğne dekompresyon gerektirir."
    },
    {
        level: "zor",
        question: "Kardiyak tamponad triadı nedir?",
        options: ["Beck triadı", "Cushing triadı", "Charcot triadı", "Whipple triadı"],
        correct: 0,
        explanation: "Kardiyak tamponadda Beck triadı: JVD, hipotansiyon, kalp seslerinde azalma."
    },
    {
        level: "zor",
        question: "Status epilepticus süresi nedir?",
        options: ["2 dakika", "5 dakika", "10 dakika", "30 dakika"],
        correct: 1,
        explanation: "Status epilepticus 5 dakikadan uzun süren nöbet olarak tanımlanır."
    },
    {
        level: "zor",
        question: "Hiperosmolar koma tedavisinde sıvı hızı nedir?",
        options: ["Hızlı", "Yavaş", "Normal", "Hiç verme"],
        correct: 1,
        explanation: "Hiperosmolar komada sıvı yavaş verilir (beyin ödemi riski)."
    },
    {
        level: "zor",
        question: "Aort diseksiyonunda hedef sistolik KB nedir?",
        options: ["<100 mmHg", "<120 mmHg", "<140 mmHg", "<160 mmHg"],
        correct: 0,
        explanation: "Aort diseksiyonunda sistolik KB <100 mmHg hedeflenir."
    },
    {
        level: "zor",
        question: "Metanol zehirlenmesinde antidot nedir?",
        options: ["Etanol", "Metilen mavisi", "Tiyosülfat", "Dimerkaptol"],
        correct: 0,
        explanation: "Metanol zehirlenmesinde etanol veya fomepizol antidot olarak kullanılır."
    },
    {
        level: "zor",
        question: "Çocukta defibrilasyon dozu nedir?",
        options: ["1 J/kg", "2 J/kg", "4 J/kg", "10 J/kg"],
        correct: 1,
        explanation: "Çocukta ilk defibrilasyon dozu 2 J/kg'dır."
    },
    // Daha Fazla Kolay Seviye Sorular
    {
        level: "kolay",
        question: "İnme şüphesinde FAST testinde F harfi neyi ifade eder?",
        options: ["Fever", "Face", "Foot", "Finger"],
        correct: 1,
        explanation: "FAST testinde F harfi Face (yüz) asimetrisini ifade eder."
    },
    {
        level: "kolay",
        question: "Miyokard infarktüsünün klasik belirtisi nedir?",
        options: ["Sırt ağrısı", "Göğüs ağrısı", "Karın ağrısı", "Baş ağrısı"],
        correct: 1,
        explanation: "MI'nin klasik belirtisi göğüs ağrısıdır (crushing chest pain)."
    },
    {
        level: "kolay",
        question: "Diabetik ketoasidozda nefes kokusu nasıldır?",
        options: ["Balık kokusu", "Meyve kokusu", "Çürük yumurta", "Amonyak"],
        correct: 1,
        explanation: "DKA'da nefeste meyve (aseton) kokusu vardır."
    },
    {
        level: "kolay",
        question: "Anafılaktik şokta ilk belirti genellikle nedir?",
        options: ["Hipotansiyon", "Cilt reaksiyonu", "Solunum sıkıntısı", "Bilinç kaybı"],
        correct: 1,
        explanation: "Anafilakside genellikle ilk belirti cilt reaksiyonları (ürtiker, kızarıklık)dır."
    },
    {
        level: "kolay",
        question: "Epileptik nöbette hastanın dilini ısırmasını önlemek için ne yapılır?",
        options: ["Ağzına kaşık koy", "Çenesini tut", "Hiçbir şey yapma", "Ağzını aç"],
        correct: 2,
        explanation: "Nöbet sırasında ağza hiçbir şey sokulmamalı, hasta kendiliğinden iyileşir."
    },
    {
        level: "kolay",
        question: "Kalp krizi geçiren hastaya hangi pozisyon verilir?",
        options: ["Düz yatar", "Yarı oturur", "Trendelenburg", "Yan yatar"],
        correct: 1,
        explanation: "Kalp krizi hastasına yarı oturur pozisyon (fowler) verilir."
    },
    {
        level: "kolay",
        question: "Hiperventilasyon sendromunda ne yapılır?",
        options: ["Oksijen ver", "Torba ile nefes aldır", "Sedasyon", "Entübasyon"],
        correct: 1,
        explanation: "Hiperventilasyonda kağıt torba ile CO2 rebreathing yapılır."
    },
    {
        level: "kolay",
        question: "Böbrek taşı ağrısının karakteristiği nedir?",
        options: ["Sürekli ağrı", "Kolik ağrı", "Yanıcı ağrı", "Zonklayıcı ağrı"],
        correct: 1,
        explanation: "Böbrek taşı kolik tarzda şiddetli ağrıya neden olur."
    },
    {
        level: "kolay",
        question: "Apandisit ağrısı genellikle nereden başlar?",
        options: ["Sağ alt kadran", "Sol alt kadran", "Göbek çevresi", "Sağ üst kadran"],
        correct: 2,
        explanation: "Apandisit ağrısı genellikle göbek çevresinden başlayıp sağ alt kadrana yayılır."
    },
    {
        level: "kolay",
        question: "Astım hastasında hangi ses duyulur?",
        options: ["Ral", "Ronküs", "Wheezing", "Stridor"],
        correct: 2,
        explanation: "Astım hastasında wheezing (hırıltı) sesi duyulur."
    },
    {
        level: "kolay",
        question: "Hipertansif hastada baş ağrısı genellikle ne zaman olur?",
        options: ["Sabah", "Öğlen", "Akşam", "Gece"],
        correct: 0,
        explanation: "Hipertansif baş ağrısı genellikle sabah saatlerinde daha belirgindir."
    },
    {
        level: "kolay",
        question: "Gebe hastada hangi pozisyon tercih edilir?",
        options: ["Sırt üstü", "Sol yan", "Sağ yan", "Yüzüstü"],
        correct: 1,
        explanation: "Gebe hastada sol yan pozisyon tercih edilir (vena kava kompresyonunu önler)."
    },
    {
        level: "kolay",
        question: "Çocukta ateş sınırı nedir?",
        options: ["37°C", "37.5°C", "38°C", "38.5°C"],
        correct: 2,
        explanation: "Çocukta ateş sınırı 38°C olarak kabul edilir."
    },
    {
        level: "kolay",
        question: "Dehidratasyon belirtisi hangisidir?",
        options: ["Nemli mukoza", "Hızlı kapiller dolum", "Kuru mukoza", "Bradikardi"],
        correct: 2,
        explanation: "Dehidratasyonda mukozalar kuru olur, kapiller dolum uzar."
    },
    {
        level: "kolay",
        question: "Karbonmonoksit zehirlenmesinde cilt rengi nasıldır?",
        options: ["Soluk", "Sarı", "Kiraz kırmızısı", "Mavi"],
        correct: 2,
        explanation: "CO zehirlenmesinde cilt kiraz kırmızısı renkte olur."
    },
    // Daha Fazla Orta Seviye Sorular
    {
        level: "orta",
        question: "Sepsis tanı kriterlerinden biri nedir?",
        options: ["Ateş >38°C", "Nabız >90/dk", "Solunum >20/dk", "Hepsi"],
        correct: 3,
        explanation: "Sepsis tanısında SIRS kriterleri: ateş >38°C, nabız >90/dk, solunum >20/dk."
    },
    {
        level: "orta",
        question: "Akut koroner sendromda troponin ne zaman yükselir?",
        options: ["Hemen", "2-4 saat", "6-12 saat", "24 saat"],
        correct: 2,
        explanation: "Troponin MI'den 6-12 saat sonra yükselmeye başlar."
    },
    {
        level: "orta",
        question: "Pulmoner emboli için Wells skoru kaç ve üzeri risklidir?",
        options: [">2", ">4", ">6", ">8"],
        correct: 1,
        explanation: "Wells skoru >4 pulmoner emboli için yüksek risk kabul edilir."
    },
    {
        level: "orta",
        question: "Diabetik ketoasidozda pH değeri nedir?",
        options: ["<7.1", "<7.2", "<7.3", "<7.4"],
        correct: 2,
        explanation: "DKA'da pH <7.3 veya bikarbonat <15 mEq/L olur."
    },
    {
        level: "orta",
        question: "Çocukta febril konvülziyon yaş aralığı nedir?",
        options: ["0-2 yaş", "6 ay-5 yaş", "1-6 yaş", "2-8 yaş"],
        correct: 1,
        explanation: "Febril konvülziyon genellikle 6 ay-5 yaş arasında görülür."
    },
    {
        level: "orta",
        question: "Hiponatremi semptomları ne zaman başlar?",
        options: ["<135 mEq/L", "<130 mEq/L", "<125 mEq/L", "<120 mEq/L"],
        correct: 2,
        explanation: "Hiponatremi semptomları genellikle Na <125 mEq/L'de başlar."
    },
    {
        level: "orta",
        question: "Akut pankreatit ağrısının karakteristiği nedir?",
        options: ["Sırta yayılan", "Kolik tarzda", "Zonklayıcı", "Yanıcı"],
        correct: 0,
        explanation: "Akut pankreatit ağrısı sırta yayılan şiddetli ağrıdır."
    },
    {
        level: "orta",
        question: "Gastrointestinal kanama belirtisi hangisidir?",
        options: ["Hematemez", "Melena", "Hematokezya", "Hepsi"],
        correct: 3,
        explanation: "GIS kanama belirtileri: hematemez (kusma), melena (siyah gaita), hematokezya (kanlı gaita)."
    },
    {
        level: "orta",
        question: "Akut böbrek yetmezliği kreatinin artışı nedir?",
        options: [">0.3 mg/dL", ">0.5 mg/dL", ">1.0 mg/dL", ">2.0 mg/dL"],
        correct: 0,
        explanation: "ABY tanısında kreatinin >0.3 mg/dL artış veya %50 artış kriteridir."
    },
    {
        level: "orta",
        question: "Hiperkalsemi EKG bulgusu nedir?",
        options: ["QT uzaması", "QT kısalması", "T dalga yüksekliği", "U dalgası"],
        correct: 1,
        explanation: "Hiperkalsemide QT aralığı kısalır."
    },
    {
        level: "orta",
        question: "Çocukta dehidratasyon derecesi nasıl belirlenir?",
        options: ["Kilo kaybı", "Vital bulgular", "Klinik bulgular", "Hepsi"],
        correct: 3,
        explanation: "Çocukta dehidratasyon kilo kaybı, vital bulgular ve klinik bulgularla değerlendirilir."
    },
    {
        level: "orta",
        question: "Akut miyokard infarktüsünde hangi derivasyonlar anterior MI'yi gösterir?",
        options: ["D1, aVL", "D2, D3, aVF", "V1-V6", "V3-V6"],
        correct: 3,
        explanation: "Anterior MI V3-V6 derivasyonlarında görülür."
    },
    {
        level: "orta",
        question: "Preeklampsi tanı kriterleri nedir?",
        options: ["KB >140/90", "Proteinüri", "20. hafta sonrası", "Hepsi"],
        correct: 3,
        explanation: "Preeklampsi: 20. hafta sonrası KB >140/90 + proteinüri veya organ hasarı."
    },
    {
        level: "orta",
        question: "Akut astım atağında hangi bulgu kötü prognoz göstergesidir?",
        options: ["Wheezing", "Öksürük", "Sessiz toraks", "Dispne"],
        correct: 2,
        explanation: "Sessiz toraks (silent chest) kötü prognoz göstergesidir."
    },
    {
        level: "orta",
        question: "Hipovolemik şokta hangi bulgu erken görülür?",
        options: ["Hipotansiyon", "Taşikardi", "Oligüri", "Bilinç değişikliği"],
        correct: 1,
        explanation: "Hipovolemik şokta taşikardi erken bulgu, hipotansiyon geç bulgudur."
    },
    // Daha Fazla Zor Seviye Sorular
    {
        level: "zor",
        question: "Hiperosmolar hiperglisemik durum (HHS) mortalite oranı nedir?",
        options: ["%5-10", "%10-20", "%20-40", "%40-60"],
        correct: 2,
        explanation: "HHS mortalite oranı %20-40 arasındadır, DKA'dan daha yüksektir."
    },
    {
        level: "zor",
        question: "Aort diseksiyonu Stanford sınıflamasında Tip A nedir?",
        options: ["Çıkan aort", "İnen aort", "Aort arkı", "Abdominal aort"],
        correct: 0,
        explanation: "Stanford Tip A: çıkan aortu içeren, Tip B: çıkan aortu içermeyen."
    },
    {
        level: "zor",
        question: "Malign hipertermi insidansı nedir?",
        options: ["1:5.000", "1:15.000", "1:50.000", "1:100.000"],
        correct: 2,
        explanation: "Malign hipertermi insidansı yaklaşık 1:50.000-100.000'dir."
    },
    {
        level: "zor",
        question: "Siyanür zehirlenmesinde laktat düzeyi nasıldır?",
        options: ["Normal", "Düşük", "Yüksek", "Değişken"],
        correct: 2,
        explanation: "Siyanür zehirlenmesinde hücresel hipoksi nedeniyle laktat yüksektir."
    },
    {
        level: "zor",
        question: "Çocukta epiglotit insidansı hangi yaş grubunda en yüksektir?",
        options: ["0-1 yaş", "2-4 yaş", "5-7 yaş", "8-10 yaş"],
        correct: 1,
        explanation: "Epiglotit insidansı 2-4 yaş grubunda en yüksektir."
    },
    {
        level: "zor",
        question: "Rhabdomyolizde CK düzeyi ne kadar yüksek olmalıdır?",
        options: [">1.000", ">5.000", ">10.000", ">50.000"],
        correct: 1,
        explanation: "Rhabdomyoliz tanısında CK >5.000 U/L olmalıdır."
    },
    {
        level: "zor",
        question: "Hipotermide hangi sıcaklıkta kardiyak arrest riski artar?",
        options: ["<35°C", "<32°C", "<28°C", "<25°C"],
        correct: 2,
        explanation: "Vücut sıcaklığı <28°C'de kardiyak arrest riski önemli ölçüde artar."
    },
    {
        level: "zor",
        question: "Akut aort diseksiyonunda D-dimer sensitivitesi nedir?",
        options: ["%70", "%85", "%95", "%99"],
        correct: 3,
        explanation: "Akut aort diseksiyonunda D-dimer sensitivitesi %95-99'dur."
    },
    {
        level: "zor",
        question: "Çocukta status epilepticus mortalite oranı nedir?",
        options: ["%1-3", "%3-5", "%5-10", "%10-15"],
        correct: 0,
        explanation: "Çocukta status epilepticus mortalite oranı %1-3'tür."
    },
    {
        level: "zor",
        question: "Hiperkalsemik krizde kalsiyum düzeyi nedir?",
        options: [">12 mg/dL", ">14 mg/dL", ">16 mg/dL", ">18 mg/dL"],
        correct: 1,
        explanation: "Hiperkalsemik kriz genellikle kalsiyum >14 mg/dL'de görülür."
    },
    {
        level: "zor",
        question: "Akut pankreatitte Ranson kriterleri kaç tanedir?",
        options: ["8", "9", "10", "11"],
        correct: 3,
        explanation: "Ranson kriterleri 11 tanedir (5 başvuru, 6 ilk 48 saat)."
    },
    {
        level: "zor",
        question: "Çocukta sepsis tanısında hangi skor kullanılır?",
        options: ["SOFA", "qSOFA", "PELOD", "PRISM"],
        correct: 2,
        explanation: "Çocukta sepsis tanısında PELOD (Pediatric Logistic Organ Dysfunction) skoru kullanılır."
    },
    {
        level: "zor",
        question: "Akut böbrek yetmezliğinde RIFLE sınıflamasında R nedir?",
        options: ["Risk", "Renal", "Recovery", "Replacement"],
        correct: 0,
        explanation: "RIFLE: Risk, Injury, Failure, Loss, End-stage. R = Risk."
    },
    {
        level: "zor",
        question: "Hiponatremi düzeltme hızı maksimum ne kadar olmalıdır?",
        options: ["6 mEq/L/gün", "8 mEq/L/gün", "10 mEq/L/gün", "12 mEq/L/gün"],
        correct: 2,
        explanation: "Hiponatremi düzeltme hızı maksimum 10 mEq/L/gün olmalıdır (osmotik demiyelinizasyon riski)."
    },
    {
        level: "zor",
        question: "Çocukta diabetik ketoasidoz sıvı tedavisinde maksimum hız nedir?",
        options: ["1.5 x idame", "2 x idame", "2.5 x idame", "3 x idame"],
        correct: 0,
        explanation: "Çocukta DKA'da sıvı hızı maksimum 1.5 x idame olmalıdır (beyin ödemi riski)."
    }
];

// Quiz sorularını karıştırma fonksiyonu
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
    // Ek Kolay Seviye Sorular (30-60)
    {
        level: "kolay",
        question: "Kalp masajında göğüs kafesinin hangi bölgesine basılır?",
        options: ["Üst sternum", "Alt sternum", "Sol meme başı", "Sağ meme başı"],
        correct: 1,
        explanation: "Kalp masajı alt sternum (göğüs kemiği alt yarısı) bölgesine yapılır."
    },
    {
        level: "kolay",
        question: "Solunum durması durumunda kaç saniyede müdahale edilmelidir?",
        options: ["30 saniye", "1 dakika", "2 dakika", "5 dakika"],
        correct: 0,
        explanation: "Solunum durmasında 30 saniye içinde müdahale edilmelidir."
    },
    {
        level: "kolay",
        question: "Elektrik çarpması durumunda ilk yapılacak nedir?",
        options: ["Hastaya dokunmak", "Elektriği kesmek", "Su dökmek", "CPR başlamak"],
        correct: 1,
        explanation: "Elektrik çarpmasında önce elektrik kaynağı kesilmeli, güvenlik sağlanmalı."
    },
    {
        level: "kolay",
        question: "Boğulma durumunda hangi manevra uygulanır?",
        options: ["Heimlich", "Valsalva", "Müller", "Trendelenburg"],
        correct: 0,
        explanation: "Boğulma durumunda Heimlich manevrası (karın itimi) uygulanır."
    },
    {
        level: "kolay",
        question: "Kanama durmasında ilk yapılacak nedir?",
        options: ["Turnike", "Direkt bası", "Soğuk uygulama", "Yüksekte tutma"],
        correct: 1,
        explanation: "Kanamada ilk müdahale direkt bası (doğrudan basınç) uygulamaktır."
    },
    {
        level: "kolay",
        question: "Bilinç kaybında hastanın pozisyonu nasıl olmalı?",
        options: ["Sırt üstü", "Yan yatar", "Oturur", "Ayakta"],
        correct: 1,
        explanation: "Bilinçsiz hasta yan yatar pozisyona alınır (recovery position)."
    },
    {
        level: "kolay",
        question: "Kırık şüphesinde ne yapılır?",
        options: ["Hareket ettir", "İmmobilize et", "Masaj yap", "Sıcak uygula"],
        correct: 1,
        explanation: "Kırık şüphesinde ekstremite immobilize edilir (hareketsiz hale getirilir)."
    },
    {
        level: "kolay",
        question: "Hipotermide vücut sıcaklığı kaç derecenin altındadır?",
        options: ["35°C", "36°C", "37°C", "38°C"],
        correct: 0,
        explanation: "Hipotermi vücut sıcaklığının 35°C'nin altına düşmesidir."
    },
    {
        level: "kolay",
        question: "Hipertermi durumunda ne yapılır?",
        options: ["Isıtmak", "Soğutmak", "Örtmek", "Sıcak içecek"],
        correct: 1,
        explanation: "Hipertermide hasta soğutulur, serinletilir."
    },
    {
        level: "kolay",
        question: "Alerjik reaksiyon belirtisi hangisidir?",
        options: ["Kaşıntı", "Şişlik", "Kızarıklık", "Hepsi"],
        correct: 3,
        explanation: "Alerjik reaksiyonda kaşıntı, şişlik, kızarıklık görülebilir."
    },
    {
        level: "kolay",
        question: "Göz yaralanmasında ne yapılmamalı?",
        options: ["Yıkamak", "Ovmak", "Kapatmak", "Soğuk uygulama"],
        correct: 1,
        explanation: "Göz yaralanmasında göz ovulmamalı, sürtülmemelidir."
    },
    {
        level: "kolay",
        question: "Burun kanamasında baş pozisyonu nasıl olmalı?",
        options: ["Geriye eğik", "Öne eğik", "Düz", "Yana eğik"],
        correct: 1,
        explanation: "Burun kanamasında baş öne eğik tutulur."
    },
    {
        level: "kolay",
        question: "Zehirlenme şüphesinde ne yapılmamalı?",
        options: ["112 aramak", "Kusturmak", "Su vermek", "Hastaneye götürmek"],
        correct: 1,
        explanation: "Zehirlenme şüphesinde hasta kusturulmamalıdır."
    },
    {
        level: "kolay",
        question: "Diyabetik hastada şeker düşüklüğü belirtisi nedir?",
        options: ["Susuzluk", "Terleme", "Sık idrara çıkma", "Kilo kaybı"],
        correct: 1,
        explanation: "Hipoglisemide terleme, titreme, baş dönmesi görülür."
    },
    {
        level: "kolay",
        question: "Kalp krizi riskini artıran faktör hangisidir?",
        options: ["Sigara", "Stres", "Yüksek kolesterol", "Hepsi"],
        correct: 3,
        explanation: "Sigara, stres, yüksek kolesterol kalp krizi risk faktörleridir."
    },
    // Ek Kolay Seviye Sorular (60-90)
    {
        level: "kolay",
        question: "İnme belirtilerinden hangisi FAST testinde yer alır?",
        options: ["Baş ağrısı", "Yüz asimetrisi", "Göğüs ağrısı", "Karın ağrısı"],
        correct: 1,
        explanation: "FAST testinde F=Face (yüz asimetrisi) yer alır."
    },
    {
        level: "kolay",
        question: "Epilepsi nöbeti kaç dakika sürerse tehlikelidir?",
        options: ["2 dakika", "5 dakika", "10 dakika", "15 dakika"],
        correct: 1,
        explanation: "5 dakikadan uzun süren nöbet status epilepticus olarak kabul edilir."
    },
    {
        level: "kolay",
        question: "Travma hastasında hangi bölge öncelikle kontrol edilir?",
        options: ["Kafa", "Boyun", "Göğüs", "Karın"],
        correct: 1,
        explanation: "Travma hastasında önce boyun (servikal omurga) kontrol edilir."
    },
    {
        level: "kolay",
        question: "Şok belirtilerinden hangisi erken dönemde görülür?",
        options: ["Hipotansiyon", "Taşikardi", "Bilinç kaybı", "Siyanoz"],
        correct: 1,
        explanation: "Şokta taşikardi erken bulgu, hipotansiyon geç bulgudur."
    },
    {
        level: "kolay",
        question: "Astım hastasında hangi pozisyon tercih edilir?",
        options: ["Yatar", "Oturur", "Yan yatar", "Baş aşağı"],
        correct: 1,
        explanation: "Astım hastasında oturur pozisyon (fowler) tercih edilir."
    },
    {
        level: "kolay",
        question: "Çocukta ateş düşürücü olarak hangisi kullanılmaz?",
        options: ["Parasetamol", "İbuprofen", "Aspirin", "Diklofenak"],
        correct: 2,
        explanation: "Çocuklarda aspirin Reye sendromu riski nedeniyle kullanılmaz."
    },
    {
        level: "kolay",
        question: "Gebe hastada hangi ilaç kullanılmaz?",
        options: ["Parasetamol", "ACE inhibitörü", "İnsülin", "Kalsiyum"],
        correct: 1,
        explanation: "Gebelikte ACE inhibitörleri teratojenik etki nedeniyle kullanılmaz."
    },
    {
        level: "kolay",
        question: "Böbrek taşı ağrısı genellikle nereye yayılır?",
        options: ["Sırta", "Kasığa", "Omza", "Boyuna"],
        correct: 1,
        explanation: "Böbrek taşı ağrısı genellikle kasık bölgesine yayılır."
    },
    {
        level: "kolay",
        question: "Miyokard infarktüsünde hangi enzim yükselir?",
        options: ["ALT", "AST", "Troponin", "LDH"],
        correct: 2,
        explanation: "MI'de troponin spesifik kardiyak enzimdir."
    },
    {
        level: "kolay",
        question: "Hipertansif hastada hedef kan basıncı nedir?",
        options: ["<120/80", "<130/80", "<140/90", "<150/90"],
        correct: 0,
        explanation: "Hipertansif hastada hedef KB <120/80 mmHg'dir."
    },
    {
        level: "kolay",
        question: "Diyabetik hastada hedef kan şekeri nedir?",
        options: ["70-100 mg/dL", "80-130 mg/dL", "100-180 mg/dL", "150-250 mg/dL"],
        correct: 1,
        explanation: "Diyabetik hastada hedef kan şekeri 80-130 mg/dL'dir."
    },
    {
        level: "kolay",
        question: "KOAH hastasında oksijen hedefi nedir?",
        options: ["88-92%", "94-98%", "98-100%", "85-90%"],
        correct: 0,
        explanation: "KOAH hastasında oksijen hedefi %88-92'dir."
    },
    {
        level: "kolay",
        question: "Akut pankreatit ağrısı hangi pozisyonda azalır?",
        options: ["Sırt üstü", "Öne eğik", "Sağ yan", "Sol yan"],
        correct: 1,
        explanation: "Pankreatit ağrısı öne eğik pozisyonda (fetal pozisyon) azalır."
    },
    {
        level: "kolay",
        question: "Gastrointestinal kanama belirtisi hangisidir?",
        options: ["Kanlı kusma", "Siyah gaita", "Kanlı gaita", "Hepsi"],
        correct: 3,
        explanation: "GIS kanama: hematemez (kanlı kusma), melena (siyah gaita), hematokezya (kanlı gaita)."
    },
    {
        level: "kolay",
        question: "Dehidratasyon tedavisinde hangi sıvı kullanılır?",
        options: ["Distile su", "İzotonik salin", "Hipertonik salin", "Dekstroz"],
        correct: 1,
        explanation: "Dehidratasyon tedavisinde izotonik salin (%0.9 NaCl) kullanılır."
    },
    // Ek Orta Seviye Sorular (30-60)
    {
        level: "orta",
        question: "Akut koroner sendromda TIMI risk skoru kaç faktörden oluşur?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "TIMI risk skoru 7 faktörden oluşur (yaş, risk faktörleri, aspirin kullanımı vb.)."
    },
    {
        level: "orta",
        question: "Pulmoner emboli tanısında D-dimer cut-off değeri nedir?",
        options: ["250 ng/mL", "500 ng/mL", "750 ng/mL", "1000 ng/mL"],
        correct: 1,
        explanation: "D-dimer cut-off değeri genellikle 500 ng/mL'dir."
    },
    {
        level: "orta",
        question: "Akut miyokard infarktüsünde CK-MB ne zaman pik yapar?",
        options: ["6-8 saat", "12-24 saat", "24-36 saat", "48-72 saat"],
        correct: 1,
        explanation: "CK-MB MI'den 12-24 saat sonra pik yapar."
    },
    {
        level: "orta",
        question: "Diabetik ketoasidozda anyon gap nedir?",
        options: [">10", ">12", ">15", ">20"],
        correct: 1,
        explanation: "DKA'da anyon gap >12 mEq/L'dir (yüksek anyon gap metabolik asidoz)."
    },
    {
        level: "orta",
        question: "Akut pankreatitte lipaz ne zaman yükselir?",
        options: ["2-4 saat", "4-8 saat", "8-12 saat", "12-24 saat"],
        correct: 1,
        explanation: "Akut pankreatitte lipaz 4-8 saat içinde yükselir."
    },
    {
        level: "orta",
        question: "Hiponatremi düzeltmesinde maksimum hız nedir?",
        options: ["6 mEq/L/gün", "8 mEq/L/gün", "10 mEq/L/gün", "12 mEq/L/gün"],
        correct: 2,
        explanation: "Hiponatremi düzeltme hızı maksimum 10 mEq/L/gün olmalıdır."
    },
    {
        level: "orta",
        question: "Sepsis tanısında qSOFA skoru kaç puandır?",
        options: ["≥1", "≥2", "≥3", "≥4"],
        correct: 1,
        explanation: "qSOFA skoru ≥2 sepsis için yüksek risk göstergesidir."
    },
    {
        level: "orta",
        question: "Akut böbrek yetmezliğinde KDIGO evrelemesinde Evre 1 kreatinin artışı nedir?",
        options: ["1.5 kat", "2 kat", "3 kat", "4 kat"],
        correct: 0,
        explanation: "KDIGO Evre 1: kreatinin 1.5 kat artış veya >0.3 mg/dL artış."
    },
    {
        level: "orta",
        question: "Hiperkalsemide EKG değişikliği nedir?",
        options: ["QT uzaması", "QT kısalması", "PR uzaması", "QRS genişlemesi"],
        correct: 1,
        explanation: "Hiperkalsemide QT aralığı kısalır."
    },
    {
        level: "orta",
        question: "Akut astım atağında peak flow normal değerin yüzde kaçının altında ise şiddetli kabul edilir?",
        options: ["%50", "%60", "%70", "%80"],
        correct: 0,
        explanation: "Peak flow normal değerin %50'sinin altında ise şiddetli astım atağıdır."
    },
    {
        level: "orta",
        question: "Çocukta febril konvülziyon basit tip süresi ne kadardır?",
        options: ["<5 dakika", "<10 dakika", "<15 dakika", "<20 dakika"],
        correct: 2,
        explanation: "Basit febril konvülziyon <15 dakika sürer, fokal değildir."
    },
    {
        level: "orta",
        question: "Preeklampside proteinüri sınırı nedir?",
        options: ["100 mg/gün", "300 mg/gün", "500 mg/gün", "1000 mg/gün"],
        correct: 1,
        explanation: "Preeklampside proteinüri ≥300 mg/gün veya protein/kreatinin >0.3'tür."
    },
    {
        level: "orta",
        question: "Akut aort diseksiyonunda hangi derivasyonlarda ST elevasyonu görülürse koroner tutulum düşünülür?",
        options: ["V1-V3", "V4-V6", "D2,D3,aVF", "D1,aVL"],
        correct: 3,
        explanation: "Aort diseksiyonunda D1,aVL'de ST elevasyonu koroner tutulum gösterebilir."
    },
    {
        level: "orta",
        question: "Hipoglisemik komada glukagon dozu nedir?",
        options: ["0.5 mg", "1 mg", "2 mg", "5 mg"],
        correct: 1,
        explanation: "Hipoglisemik komada glukagon dozu 1 mg IM/SC'dir."
    },
    {
        level: "orta",
        question: "Çocukta status epilepticus tedavisinde ikinci basamak ilaç nedir?",
        options: ["Diazepam", "Fenitoin", "Valproat", "Levetirasetam"],
        correct: 1,
        explanation: "Status epilepticus'ta ikinci basamak fenitoin veya fosphenytoin'dir."
    },
    // Ek Orta Seviye Sorular (60-90)
    {
        level: "orta",
        question: "Akut koroner sendromda troponin I normal üst sınırı nedir?",
        options: ["0.04 ng/mL", "0.1 ng/mL", "0.4 ng/mL", "1.0 ng/mL"],
        correct: 0,
        explanation: "Troponin I normal üst sınırı genellikle 0.04 ng/mL'dir."
    },
    {
        level: "orta",
        question: "Hipovolemik şokta hangi bulgu kompansasyon mekanizmasıdır?",
        options: ["Hipotansiyon", "Taşikardi", "Oligüri", "Hepsi"],
        correct: 3,
        explanation: "Hipovolemik şokta taşikardi, vazokonstrüksiyon, oligüri kompensasyon mekanizmalarıdır."
    },
    {
        level: "orta",
        question: "Akut pankreatitte Ranson kriterleri başvuruda kaç tanedir?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Ranson kriterleri başvuruda 5 tane (yaş, lökosit, glukoz, AST, LDH)."
    },
    {
        level: "orta",
        question: "Diabetik ketoasidozda insülin infüzyon hızı nedir?",
        options: ["0.05 Ü/kg/saat", "0.1 Ü/kg/saat", "0.2 Ü/kg/saat", "0.5 Ü/kg/saat"],
        correct: 1,
        explanation: "DKA'da insülin infüzyon hızı 0.1 Ü/kg/saat'tir."
    },
    {
        level: "orta",
        question: "Akut böbrek yetmezliğinde prerenal nedenlerin oranı nedir?",
        options: ["%40", "%55", "%70", "%85"],
        correct: 2,
        explanation: "ABY'nin yaklaşık %70'i prerenal nedenlidir."
    },
    {
        level: "orta",
        question: "Hiperkalsemide hangi EKG değişikliği erken görülür?",
        options: ["QT kısalması", "T dalga yüksekliği", "PR uzaması", "QRS genişlemesi"],
        correct: 0,
        explanation: "Hiperkalsemide ilk EKG değişikliği QT kısalmasıdır."
    },
    {
        level: "orta",
        question: "Çocukta dehidratasyon şiddeti nasıl sınıflandırılır?",
        options: ["Hafif-orta-şiddetli", "Grade 1-2-3", "Evre A-B-C", "Tip 1-2-3"],
        correct: 0,
        explanation: "Çocukta dehidratasyon hafif (%3-5), orta (%6-9), şiddetli (>%10) olarak sınıflandırılır."
    },
    {
        level: "orta",
        question: "Akut miyokard infarktüsünde kontrendikasyon hangisidir?",
        options: ["Yaş >75", "Hipertansiyon", "Aktif kanama", "Diyabet"],
        correct: 2,
        explanation: "Trombolitik tedavide aktif kanama mutlak kontrendikasyondur."
    },
    {
        level: "orta",
        question: "Sepsis tanısında SOFA skoru kaç organa bakar?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "SOFA skoru 6 organ sistemini değerlendirir (solunum, koagülasyon, karaciğer, kardiyovasküler, SSS, böbrek)."
    },
    {
        level: "orta",
        question: "Akut astım atağında hangi bulgu hospitalizasyon gerektirir?",
        options: ["Peak flow <%50", "Oksijen ihtiyacı", "Konuşamama", "Hepsi"],
        correct: 3,
        explanation: "Peak flow <%50, oksijen ihtiyacı, konuşamama hospitalizasyon gerektiren bulgulardır."
    },
    {
        level: "orta",
        question: "Hiponatremi semptomları hangi düzeyde başlar?",
        options: ["<135 mEq/L", "<130 mEq/L", "<125 mEq/L", "<120 mEq/L"],
        correct: 2,
        explanation: "Hiponatremi semptomları genellikle Na <125 mEq/L'de başlar."
    },
    {
        level: "orta",
        question: "Çocukta febril konvülziyon riski hangi yaş grubunda en yüksektir?",
        options: ["6-12 ay", "12-18 ay", "18-24 ay", "2-3 yaş"],
        correct: 1,
        explanation: "Febril konvülziyon riski 12-18 ay yaş grubunda en yüksektir."
    },
    {
        level: "orta",
        question: "Akut pankreatitte amilaz ne zaman normale döner?",
        options: ["2-3 gün", "3-5 gün", "5-7 gün", "7-10 gün"],
        correct: 1,
        explanation: "Akut pankreatitte amilaz 3-5 gün içinde normale döner."
    },
    {
        level: "orta",
        question: "Diabetik ketoasidozda bikarbonat ne zaman verilir?",
        options: ["pH <7.0", "pH <7.1", "pH <7.2", "Hiç verilmez"],
        correct: 0,
        explanation: "DKA'da bikarbonat sadece pH <7.0 ise verilir."
    },
    {
        level: "orta",
        question: "Akut böbrek yetmezliğinde hangi elektrolit bozukluğu en tehlikelidir?",
        options: ["Hiponatremi", "Hiperkalemi", "Hipokalsemi", "Hiperfosfatemi"],
        correct: 1,
        explanation: "ABY'de hiperkalemi en tehlikeli elektrolit bozukluğudur (kardiyak arrest riski)."
    },
    // Ek Zor Seviye Sorular (30-60)
    {
        level: "zor",
        question: "Hiperosmolar hiperglisemik durumda (HHS) osmolalite sınırı nedir?",
        options: [">300 mOsm/kg", ">320 mOsm/kg", ">340 mOsm/kg", ">360 mOsm/kg"],
        correct: 1,
        explanation: "HHS'de serum osmolalitesi >320 mOsm/kg'dır."
    },
    {
        level: "zor",
        question: "Aort diseksiyonu DeBakey sınıflamasında Tip III nedir?",
        options: ["Çıkan aort", "Aort arkı", "İnen aort", "Abdominal aort"],
        correct: 2,
        explanation: "DeBakey Tip III: sadece inen aortu içeren diseksiyon."
    },
    {
        level: "zor",
        question: "Malign hipertermi tedavisinde dantrolen dozu nedir?",
        options: ["1 mg/kg", "2.5 mg/kg", "5 mg/kg", "10 mg/kg"],
        correct: 1,
        explanation: "Malign hipertermide dantrolen dozu 2.5 mg/kg IV'dir."
    },
    {
        level: "zor",
        question: "Siyanür zehirlenmesinde hidroksikobalomin dozu nedir?",
        options: ["2.5 g", "5 g", "7.5 g", "10 g"],
        correct: 1,
        explanation: "Siyanür zehirlenmesinde hidroksikobalomin (Cyanokit) dozu 5 g IV'dir."
    },
    {
        level: "zor",
        question: "Çocukta epiglotit mortalite oranı nedir?",
        options: ["%1-2", "%5-10", "%10-15", "%15-20"],
        correct: 0,
        explanation: "Çocukta epiglotit mortalite oranı %1-2'dir (erken tanı ve tedavi ile)."
    },
    {
        level: "zor",
        question: "Rhabdomyolizde miyoglobin böbrek hasarı eşiği nedir?",
        options: [">100 ng/mL", ">500 ng/mL", ">1000 ng/mL", ">1500 ng/mL"],
        correct: 3,
        explanation: "Miyoglobin >1500 ng/mL'de böbrek hasarı riski artar."
    },
    {
        level: "zor",
        question: "Hipotermide hangi sıcaklıkta J (Osborn) dalgası görülür?",
        options: ["<35°C", "<32°C", "<30°C", "<28°C"],
        correct: 1,
        explanation: "J (Osborn) dalgası genellikle vücut sıcaklığı <32°C'de görülür."
    },
    {
        level: "zor",
        question: "Akut aort diseksiyonunda D-dimer negatif olma oranı nedir?",
        options: ["%1", "%5", "%10", "%15"],
        correct: 0,
        explanation: "Akut aort diseksiyonunda D-dimer negatiflik oranı sadece %1'dir."
    },
    {
        level: "zor",
        question: "Çocukta status epilepticus refrakter kabul edilme süresi nedir?",
        options: ["30 dakika", "45 dakika", "60 dakika", "90 dakika"],
        correct: 2,
        explanation: "Çocukta status epilepticus 60 dakika sonra refrakter kabul edilir."
    },
    {
        level: "zor",
        question: "Hiperkalsemik krizde kalsitonin dozu nedir?",
        options: ["2-4 Ü/kg", "4-8 Ü/kg", "8-12 Ü/kg", "12-16 Ü/kg"],
        correct: 1,
        explanation: "Hiperkalsemik krizde kalsitonin dozu 4-8 Ü/kg SC/IM'dir."
    },
    {
        level: "zor",
        question: "Akut pankreatitte APACHE II skoru kaç puanın üzeri kötü prognoz göstergesidir?",
        options: [">6", ">8", ">10", ">12"],
        correct: 1,
        explanation: "APACHE II skoru >8 akut pankreatitte kötü prognoz göstergesidir."
    },
    {
        level: "zor",
        question: "Çocukta sepsis tanısında PELOD-2 skoru kaç organa bakar?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "PELOD-2 skoru 5 organ sistemini değerlendirir."
    },
    {
        level: "zor",
        question: "Akut böbrek yetmezliğinde RIFLE sınıflamasında 'I' nedir?",
        options: ["Injury", "Insufficiency", "Ischemia", "Inflammation"],
        correct: 0,
        explanation: "RIFLE sınıflamasında I = Injury (yaralanma)."
    },
    {
        level: "zor",
        question: "Hiponatremi düzeltmesinde osmotik demiyelinizasyon riski hangi hızda artar?",
        options: [">8 mEq/L/gün", ">10 mEq/L/gün", ">12 mEq/L/gün", ">15 mEq/L/gün"],
        correct: 2,
        explanation: "Hiponatremi düzeltme hızı >12 mEq/L/gün'de osmotik demiyelinizasyon riski artar."
    },
    {
        level: "zor",
        question: "Çocukta diabetik ketoasidoz beyin ödemi riski hangi faktörle artar?",
        options: ["Hızlı sıvı", "Yavaş insülin", "Bikarbonat", "Hepsi"],
        correct: 3,
        explanation: "Çocukta DKA'da hızlı sıvı, bikarbonat kullanımı beyin ödemi riskini artırır."
    },
    // Ek Zor Seviye Sorular (60-90)
    {
        level: "zor",
        question: "Hiperosmolar hiperglisemik durumda (HHS) sıvı açığı nasıl hesaplanır?",
        options: ["0.6 x kg x (Na-140)/140", "0.5 x kg x (Na-140)/140", "0.4 x kg x (Na-140)/140", "0.3 x kg x (Na-140)/140"],
        correct: 0,
        explanation: "HHS'de sıvı açığı: 0.6 x kg x (Na-140)/140 formülü ile hesaplanır."
    },
    {
        level: "zor",
        question: "Aort diseksiyonu Penn sınıflamasında Aa nedir?",
        options: ["Akut çıkan", "Akut inen", "Kronik çıkan", "Kronik inen"],
        correct: 0,
        explanation: "Penn sınıflaması: Aa (akut çıkan), Ab (akut inen), Ba (kronik çıkan), Bb (kronik inen)."
    },
    {
        level: "zor",
        question: "Malign hipertermi genetik geçiş şekli nedir?",
        options: ["Otozomal dominant", "Otozomal resesif", "X'e bağlı", "Mitokondriyal"],
        correct: 0,
        explanation: "Malign hipertermi otozomal dominant geçiş gösterir."
    },
    {
        level: "zor",
        question: "Siyanür zehirlenmesinde venöz oksijen satürasyonu nasıldır?",
        options: ["Düşük", "Normal", "Yüksek", "Değişken"],
        correct: 2,
        explanation: "Siyanür zehirlenmesinde hücresel oksijen kullanımı bozulduğu için venöz O2 satürasyonu yüksektir."
    },
    {
        level: "zor",
        question: "Çocukta epiglotit hangi bakterinin neden olduğu form azalmıştır?",
        options: ["S. pneumoniae", "H. influenzae tip b", "S. pyogenes", "S. aureus"],
        correct: 1,
        explanation: "Hib aşısı sonrası H. influenzae tip b'ye bağlı epiglotit önemli ölçüde azalmıştır."
    },
    {
        level: "zor",
        question: "Rhabdomyolizde böbrek koruma için idrar pH hedefi nedir?",
        options: [">6.0", ">6.5", ">7.0", ">7.5"],
        correct: 1,
        explanation: "Rhabdomyolizde böbrek koruması için idrar pH >6.5 hedeflenir."
    },
    {
        level: "zor",
        question: "Hipotermide hangi sıcaklıkta atrial fibrilasyon riski artar?",
        options: ["<35°C", "<32°C", "<30°C", "<28°C"],
        correct: 1,
        explanation: "Vücut sıcaklığı <32°C'de atrial fibrilasyon riski önemli ölçüde artar."
    },
    {
        level: "zor",
        question: "Akut aort diseksiyonunda hangi görüntüleme yönteminin sensitivitesi en yüksektir?",
        options: ["BT", "MRI", "TEE", "Aortografi"],
        correct: 1,
        explanation: "MRI'ın aort diseksiyonu tanısında sensitivitesi en yüksektir (%95-100)."
    },
    {
        level: "zor",
        question: "Çocukta status epilepticus süper-refrakter kabul edilme süresi nedir?",
        options: ["12 saat", "24 saat", "48 saat", "72 saat"],
        correct: 1,
        explanation: "Süper-refrakter status epilepticus anestezi ile kontrol sonrası 24 saat içinde tekrarlayan nöbettir."
    },
    {
        level: "zor",
        question: "Hiperkalsemik krizde bifosfonat etkisi ne zaman başlar?",
        options: ["2-4 saat", "12-24 saat", "24-48 saat", "48-72 saat"],
        correct: 3,
        explanation: "Bifosfonatların hiperkalsemideki etkisi 48-72 saat sonra başlar."
    },
    {
        level: "zor",
        question: "Akut pankreatitte Balthazar CT skorunda E evresi nedir?",
        options: ["Normal pankreas", "Fokal büyüme", "Heterojen büyüme", "Sıvı koleksiyonu"],
        correct: 3,
        explanation: "Balthazar CT skorunda E evresi: pankreas nekrozu + sıvı koleksiyonu."
    },
    {
        level: "zor",
        question: "Çocukta sepsis tanısında hangi yaş grubunda farklı kriterler kullanılır?",
        options: ["<1 ay", "<3 ay", "<6 ay", "<1 yaş"],
        correct: 0,
        explanation: "Yenidoğan (<1 ay) sepsis tanısında farklı kriterler kullanılır."
    },
    {
        level: "zor",
        question: "Akut böbrek yetmezliğinde AKIN sınıflaması kaç evreden oluşur?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "AKIN sınıflaması 3 evreden oluşur (Evre 1, 2, 3)."
    },
    {
        level: "zor",
        question: "Hiponatremi düzeltmesinde hangi durumda daha hızlı düzeltme yapılabilir?",
        options: ["Kronik hiponatremi", "Akut hiponatremi", "Asemptomatik", "Yaşlı hasta"],
        correct: 1,
        explanation: "Akut hiponatremi (<48 saat) daha hızlı düzeltilebilir."
    },
    {
        level: "zor",
        question: "Çocukta diabetik ketoasidoz sıvı tedavisinde dehidratasyon düzeltme süresi nedir?",
        options: ["12 saat", "24 saat", "36 saat", "48 saat"],
        correct: 3,
        explanation: "Çocukta DKA'da dehidratasyon 48 saat içinde düzeltilir (beyin ödemi riskini azaltmak için)."
    },
    // Ek Kolay Seviye Sorular (90-120)
    {
        level: "kolay",
        question: "Kalp durmasında ilk yapılacak nedir?",
        options: ["İlaç vermek", "Defibrilasyon", "CPR başlamak", "Entübasyon"],
        correct: 2,
        explanation: "Kalp durmasında ilk müdahale CPR (kalp masajı) başlamaktır."
    },
    {
        level: "kolay",
        question: "Solunum durmasında hangi pozisyon verilir?",
        options: ["Yan yatar", "Baş geriye eğik", "Oturur", "Ayakta"],
        correct: 1,
        explanation: "Solunum durmasında baş geriye eğik, çene yukarı pozisyonu verilir."
    },
    {
        level: "kolay",
        question: "Elektrik çarpmasında nabız hangi yerden alınır?",
        options: ["Radial", "Karotis", "Femoral", "Brakial"],
        correct: 1,
        explanation: "Elektrik çarpmasında nabız karotis arterden alınır."
    },
    {
        level: "kolay",
        question: "Boğulma durumunda çocukta hangi manevra uygulanır?",
        options: ["Heimlich", "Sırt vuruşu", "Baş aşağı", "Göğüs basısı"],
        correct: 1,
        explanation: "1 yaş altı çocukta sırt vuruşu ve göğüs basısı uygulanır."
    },
    {
        level: "kolay",
        question: "Kanama durmasında turnike ne zaman uygulanır?",
        options: ["İlk müdahale", "Direkt bası etkisiz", "Daima", "Hiçbir zaman"],
        correct: 1,
        explanation: "Turnike direkt bası ve basınçlı bandaj etkisiz olduğunda uygulanır."
    },
    {
        level: "kolay",
        question: "Bilinç kaybında nabız hangi yerden kontrol edilir?",
        options: ["El bileği", "Boyun", "Kasık", "Ayak bileği"],
        correct: 1,
        explanation: "Bilinçsiz hastada nabız boyun (karotis arter) bölgesinden kontrol edilir."
    },
    {
        level: "kolay",
        question: "Kırık şüphesinde ekstremite nasıl taşınır?",
        options: ["Serbest", "Sabitlenmiş", "Bükümlü", "Gergin"],
        correct: 1,
        explanation: "Kırık şüphesinde ekstremite sabitlenmiş (immobilize) şekilde taşınır."
    },
    {
        level: "kolay",
        question: "Hipotermide hasta nasıl ısıtılır?",
        options: ["Hızlı", "Yavaş", "Sıcak su", "Elektrikli battaniye"],
        correct: 1,
        explanation: "Hipotermide hasta yavaş ve kademeli olarak ısıtılır."
    },
    {
        level: "kolay",
        question: "Hipertermi durumunda hangi bölge soğutulur?",
        options: ["Ayaklar", "Eller", "Boyun-koltuk altı", "Karın"],
        correct: 2,
        explanation: "Hipertermide boyun, koltuk altı, kasık gibi büyük damarların olduğu yerler soğutulur."
    },
    {
        level: "kolay",
        question: "Alerjik reaksiyon durumunda hangi ilaç kullanılır?",
        options: ["Aspirin", "Adrenalin", "Antibiyotik", "Steroid"],
        correct: 1,
        explanation: "Şiddetli alerjik reaksiyonda (anafilaksi) adrenalin kullanılır."
    },
    {
        level: "kolay",
        question: "Göz yaralanmasında göz nasıl korunur?",
        options: ["Sıkı bandaj", "Gevşek örtü", "Pamuk", "Hiçbir şey"],
        correct: 1,
        explanation: "Göz yaralanmasında göz gevşek örtü ile korunur, baskı yapılmaz."
    },
    {
        level: "kolay",
        question: "Burun kanamasında hangi bölgeye baskı yapılır?",
        options: ["Burun köprüsü", "Burun ucu", "Burun kanadı", "Alın"],
        correct: 2,
        explanation: "Burun kanamasında burun kanadına (yumuşak kısım) baskı yapılır."
    },
    {
        level: "kolay",
        question: "Zehirlenme şüphesinde hangi numara aranır?",
        options: ["112", "114", "155", "110"],
        correct: 1,
        explanation: "Zehirlenme şüphesinde UZEM (114) aranır."
    },
    {
        level: "kolay",
        question: "Diyabetik hastada şeker yüksekliği belirtisi nedir?",
        options: ["Terleme", "Susuzluk", "Titreme", "Baş dönmesi"],
        correct: 1,
        explanation: "Hiperglisemide susuzluk, sık idrara çıkma, yorgunluk görülür."
    },
    {
        level: "kolay",
        question: "Kalp krizi riskini azaltan faktör hangisidir?",
        options: ["Sigara", "Egzersiz", "Stres", "Yağlı yemek"],
        correct: 1,
        explanation: "Düzenli egzersiz kalp krizi riskini azaltır."
    },
    
    // Ek Kolay Seviye Sorular (81-110)
    {
        level: "kolay",
        question: "Solunum yolu tıkanıklığında hangi ses duyulur?",
        options: ["Wheezing", "Stridor", "Ronküs", "Ral"],
        correct: 1,
        explanation: "Üst solunum yolu tıkanıklığında stridor sesi duyulur."
    },
    {
        level: "kolay",
        question: "Kalp durması durumunda göğüs basısı hızı nedir?",
        options: ["60-80/dk", "80-100/dk", "100-120/dk", "120-140/dk"],
        correct: 2,
        explanation: "Kalp durmasında göğüs basısı hızı 100-120/dakika olmalıdır."
    },
    {
        level: "kolay",
        question: "Bilinçsiz hastada nabız nereden kontrol edilir?",
        options: ["El bileği", "Boyun", "Kasık", "Ayak bileği"],
        correct: 1,
        explanation: "Bilinçsiz hastada nabız boyun (karotis arter) bölgesinden kontrol edilir."
    },
    {
        level: "kolay",
        question: "Kırık şüphesinde ekstremite nasıl taşınır?",
        options: ["Serbest", "Sabitlenmiş", "Bükümlü", "Gergin"],
        correct: 1,
        explanation: "Kırık şüphesinde ekstremite sabitlenmiş (immobilize) şekilde taşınır."
    },
    {
        level: "kolay",
        question: "Hipotermide hasta nasıl ısıtılır?",
        options: ["Hızlı", "Yavaş", "Sıcak su", "Elektrikli battaniye"],
        correct: 1,
        explanation: "Hipotermide hasta yavaş ve kademeli olarak ısıtılır."
    },
    {
        level: "kolay",
        question: "Hipertermi durumunda hangi bölge soğutulur?",
        options: ["Ayaklar", "Eller", "Boyun-koltuk altı", "Karın"],
        correct: 2,
        explanation: "Hipertermide boyun, koltuk altı, kasık gibi büyük damarların olduğu yerler soğutulur."
    },
    {
        level: "kolay",
        question: "Alerjik reaksiyon durumunda hangi ilaç kullanılır?",
        options: ["Aspirin", "Adrenalin", "Antibiyotik", "Steroid"],
        correct: 1,
        explanation: "Şiddetli alerjik reaksiyonda (anafilaksi) adrenalin kullanılır."
    },
    {
        level: "kolay",
        question: "Göz yaralanmasında göz nasıl korunur?",
        options: ["Sıkı bandaj", "Gevşek örtü", "Pamuk", "Hiçbir şey"],
        correct: 1,
        explanation: "Göz yaralanmasında göz gevşek örtü ile korunur, baskı yapılmaz."
    },
    {
        level: "kolay",
        question: "Burun kanamasında hangi bölgeye baskı yapılır?",
        options: ["Burun köprüsü", "Burun ucu", "Burun kanadı", "Alın"],
        correct: 2,
        explanation: "Burun kanamasında burun kanadına (yumuşak kısım) baskı yapılır."
    },
    {
        level: "kolay",
        question: "Zehirlenme şüphesinde hangi numara aranır?",
        options: ["112", "114", "155", "110"],
        correct: 1,
        explanation: "Zehirlenme şüphesinde UZEM (114) aranır."
    },
    {
        level: "kolay",
        question: "Diyabetik hastada şeker yüksekliği belirtisi nedir?",
        options: ["Terleme", "Susuzluk", "Titreme", "Baş dönmesi"],
        correct: 1,
        explanation: "Hiperglisemide susuzluk, sık idrara çıkma, yorgunluk görülür."
    },
    {
        level: "kolay",
        question: "Suda boğulma durumunda ilk yapılacak nedir?",
        options: ["Sıvı çıkarmak", "Solunum kontrolü", "Kalp masajı", "Isıtmak"],
        correct: 1,
        explanation: "Suda boğulmada önce solunum yolu açıklığı kontrol edilir."
    },
    {
        level: "kolay",
        question: "Kemik kırığında hangi belirti görülür?",
        options: ["Şişlik", "Ağrı", "Deformite", "Hepsi"],
        correct: 3,
        explanation: "Kemik kırığında şişlik, ağrı ve deformite görülebilir."
    },
    {
        level: "kolay",
        question: "Çocukta normal nabız hızı nedir?",
        options: ["60-100/dk", "80-120/dk", "100-160/dk", "120-180/dk"],
        correct: 2,
        explanation: "Çocukta normal nabız hızı yaşa göre değişir, genellikle 100-160/dk arasındadır."
    },
    {
        level: "kolay",
        question: "Hamile hastada hangi pozisyon tercih edilir?",
        options: ["Sırt üstü", "Sol yan", "Sağ yan", "Oturur"],
        correct: 1,
        explanation: "Hamile hastada sol yan pozisyon tercih edilir (vena kava basısını önler)."
    },
    {
        level: "kolay",
        question: "Epilepsi nöbeti kaç dakika sürerse tehlikelidir?",
        options: ["2 dakika", "5 dakika", "10 dakika", "15 dakika"],
        correct: 1,
        explanation: "5 dakikadan uzun süren nöbet status epileptikus olarak kabul edilir."
    },
    {
        level: "kolay",
        question: "Kalp krizi belirtisi hangisidir?",
        options: ["Göğüs ağrısı", "Nefes darlığı", "Bulantı", "Hepsi"],
        correct: 3,
        explanation: "Kalp krizinde göğüs ağrısı, nefes darlığı, bulantı görülebilir."
    },
    {
        level: "kolay",
        question: "Yüksek ateşte hangi yöntem kullanılmaz?",
        options: ["Ilık duş", "Soğuk kompres", "Alkol silme", "Giysi çıkarma"],
        correct: 2,
        explanation: "Ateş düşürmede alkol silme kullanılmaz, zehirlenme riski vardır."
    },
    {
        level: "kolay",
        question: "Astım atağında hangi pozisyon verilir?",
        options: ["Düz yatar", "Oturur", "Yan yatar", "Baş aşağı"],
        correct: 1,
        explanation: "Astım atağında hasta oturur pozisyonda tutulur."
    },
    {
        level: "kolay",
        question: "İnme şüphesinde hangi test yapılır?",
        options: ["FAST", "ABCDE", "GKS", "APGAR"],
        correct: 0,
        explanation: "İnme şüphesinde FAST testi (Face, Arms, Speech, Time) yapılır."
    },
    {
        level: "kolay",
        question: "Travma hastasında boyun nasıl korunur?",
        options: ["Hareket ettirme", "İmmobilizasyon", "Masaj", "Esnetme"],
        correct: 1,
        explanation: "Travma hastasında boyun immobilizasyon ile korunur."
    },
    {
        level: "kolay",
        question: "Şeker hastalığında hangi hormon eksiktir?",
        options: ["İnsülin", "Adrenalin", "Kortizol", "Tiroksin"],
        correct: 0,
        explanation: "Şeker hastalığında insülin hormonu eksik veya etkisizdir."
    },
    {
        level: "kolay",
        question: "Kalp durmasında hangi ilaç kullanılır?",
        options: ["Aspirin", "Adrenalin", "Antibiyotik", "Ağrı kesici"],
        correct: 1,
        explanation: "Kalp durmasında adrenalin (epinefrin) kullanılır."
    },
    {
        level: "kolay",
        question: "Solunum durmasında kaç saniyede müdahale edilir?",
        options: ["10 saniye", "30 saniye", "1 dakika", "2 dakika"],
        correct: 0,
        explanation: "Solunum durmasında 10 saniye içinde müdahale edilmelidir."
    },
    {
        level: "kolay",
        question: "Yanık derecesi nasıl belirlenir?",
        options: ["Renk", "Derinlik", "Ağrı", "Büyüklük"],
        correct: 1,
        explanation: "Yanık derecesi derinliğe göre belirlenir (1., 2., 3. derece)."
    },
    {
        level: "kolay",
        question: "Hipertansiyon hangi değerin üzerindedir?",
        options: ["120/80", "130/85", "140/90", "150/95"],
        correct: 2,
        explanation: "Hipertansiyon 140/90 mmHg ve üzeri değerlerdir."
    },
    {
        level: "kolay",
        question: "Göğüs ağrısında hangi ilaç verilir?",
        options: ["Antibiyotik", "Aspirin", "Vitamin", "Ağrı kesici"],
        correct: 1,
        explanation: "Kalp krizi şüphesinde aspirin verilir (kontrendikasyon yoksa)."
    },
    {
        level: "kolay",
        question: "Nöbet geçiren hastaya ne yapılır?",
        options: ["Ağzına cisim koy", "Sıkıca tut", "Güvenli ortam", "Su ver"],
        correct: 2,
        explanation: "Nöbet geçiren hastaya güvenli ortam sağlanır, ağzına cisim konmaz."
    },
    {
        level: "kolay",
        question: "Çocukta dehidratasyon belirtisi nedir?",
        options: ["Nemli dil", "Gözyaşı", "Kuru ağız", "Hızlı iyileşme"],
        correct: 2,
        explanation: "Çocukta dehidratasyonda kuru ağız, gözyaşı azlığı görülür."
    },
    {
        level: "kolay",
        question: "Kalp krizi riskini artıran faktör hangisidir?",
        options: ["Egzersiz", "Sigara", "Meyve", "Su içme"],
        correct: 1,
        explanation: "Sigara kalp krizi riskini önemli ölçüde artırır."
    },
    {
        level: "kolay",
        question: "Acil serviste triage sistemi neye göre yapılır?",
        options: ["Yaş", "Cinsiyet", "Aciliyet", "Gelme sırası"],
        correct: 2,
        explanation: "Triage sistemi hastanın aciliyet durumuna göre yapılır."
    },