import type { Article, Category } from "./types";

const AUTHOR = "Habib Mukhlis";

export const articles: Article[] = [
  {
    slug: "semikonduktor",
    title: "Semi Konduktor",
    category: "elektronika",
    author: AUTHOR,
    image: "/images/semikonduktor.jpg",
    excerpt:
      "Bahan dengan konduktivitas listrik yang berada di antara isolator listrik dan konduktor listrik. Bahan semikonduktor terdiri dari 4 elektron valensi....",
    body: [
      { type: "subheading", text: "Pengertian" },
      {
        type: "paragraph",
        text: "Adalah sebuah bahan dengan konduktivitas listrik yang berada di antara isolator listrik dan konduktor listrik. Bahan semikonduktor terdiri dari 4 elektron valensi.",
      },
      {
        type: "paragraph",
        text: "Jenis bahan semikonduktor yang umum digunakan ialah:",
      },
      { type: "list", items: ["Karbon", "Germanium", "Silikon"] },
      {
        type: "paragraph",
        text: "Arus listrik pada semikonduktor tidak mudah mengalir seperti konduktor, namun tidak juga sesulit isolator.",
      },
      {
        type: "paragraph",
        text: "Jika tidak memenuhi syarat operasinya (spesifikasi/karakter) maka akan tidak berfungsi dan rusak.",
      },
      { type: "subheading", text: "Semikonduktor Intrinsik" },
      {
        type: "paragraph",
        text: "Bahan semikonduktor murni (belum diberi campuran/pengotoran) dimana jumlah elektron bebas dan holenya adalah sama sehingga memungkinkan perpindahan muatan.",
      },
      {
        type: "paragraph",
        text: "Perpindahan muatan pada umumnya terjadi karena dua sebab yaitu:",
      },
      {
        type: "list",
        items: ["Adanya perpindahan elektron bebas", "Dan perpindahan hole (lubang)"],
      },
      { type: "subheading", text: "Semikonduktor Ekstrinsik" },
      {
        type: "paragraph",
        text: "Adalah semikonduktor yang sudah disuntikkan sedikit ketidakmurnian (doping).",
      },
      {
        type: "paragraph",
        text: "Pemberian doping dimaksudkan untuk mendapatkan elektron valensi bebas dalam jumlah lebih banyak dan permanen, yang diharapkan akan dapat menghantarkan listrik. Akibat doping ini maka hambatan semikonduktor mengalami penurunan.",
      },
      { type: "subheading", text: "Kelistrikan" },
      {
        type: "paragraph",
        text: "Kuat arus listrik pada bahan semikonduktor tidak dapat diketahui secara tepat melalui hukum Ohm.",
      },
      {
        type: "paragraph",
        text: "Bahan semikonduktor tidak selalu memiliki kuat arus listrik yang berada dalam fungsi linear terhadap tegangan listrik yang berlaku.",
      },
      { type: "paragraph", text: "Arus listrik yang mengalir melalui bahan semikonduktor dapat mengalami:" },
      { type: "list", items: ["Fungsi linear", "Fungsi kuadrat", "Fungsi kubik"] },
      { type: "subheading", text: "Contoh Penggunaan" },
      {
        type: "list",
        items: ["Panel Surya", "Mesin Mobil", "Sensor Penyejuk Suhu", "Detektor Kristal"],
      },
    ],
  },
  {
    slug: "konduktor",
    title: "Konduktor",
    category: "elektronika",
    author: AUTHOR,
    image: "/images/konduktor.jpg",
    excerpt:
      "Adalah sebuah bahan dengan konduktivitas listrik yang berada di antara isolator listrik dan konduktor listrik. Bahan semikonduktor terdiri dari 4 elektron valensi....",
    body: [
      { type: "subheading", text: "Pengertian" },
      {
        type: "paragraph",
        text: "Adalah sebuah bahan dengan konduktivitas listrik yang berada di antara isolator listrik dan konduktor listrik. Bahan semikonduktor terdiri dari 4 elektron valensi.",
      },
      { type: "subheading", text: "Sifat Atomik" },
      { type: "paragraph", text: "Lebar celah pita" },
      {
        type: "paragraph",
        text: "Konduktor listrik memiliki celah pita valensi yang sangat kecil dan tipis sehingga elektron valensi pada atom dapat berpindah dengan mudah ke atom yang lain dengan menggunakan energi yang sangat sedikit.",
      },
      {
        type: "paragraph",
        text: "Elektron yang bergerak secara bebas dari satu orbital atom ke orbital atom yang lainnya secara terus menerus menyebabkan hantaran listrik. Orbital yang ditinggal oleh elektron disebut sebagai lubang (hole). Orbital atom lain berikutnya akan mengalami lubang yang sama dengan orbital pertama karena mengalami pengurangan jumlah elektron. Proses ini berlangsung secara terus-menerus sehingga timbul aliran listrik.",
      },
      { type: "paragraph", text: "Jumlah elektron valensi" },
      {
        type: "paragraph",
        text: "Konduktor dengan daya hantar listrik yang baik memiliki 1 sampai 3 elektron valensi. Semakin banyak elektron bebas di dalam suatu konduktor, maka nilai hambatan listrik akan semakin kecil dan konduktivitas listrik akan semakin baik dan begitu juga sebaliknya.",
      },
      { type: "subheading", text: "Sifat Elektris" },
      { type: "paragraph", text: "Kondisi Medan Listrik" },
      {
        type: "paragraph",
        text: "Dalam keadaan seimbang, konduktor selalu menghasilkan medan listrik dalam posisi serenjang dengan permukaan penghantar listrik. Pada kondisi tidak seimbang, medan listrik pada penghantar listrik akan memiliki komponen yang menyinggung permukaan yang serenjang. Arus listrik pada permukaan dihasilkan oleh komponen medan yang menyinggung permukaan akibat adanya gaya pada muatan.",
      },
      { type: "paragraph", text: "Gaya Muatan Listrik" },
      {
        type: "paragraph",
        text: "Dalam keadaan seimbang, muatan listrik pada penghantar listrik selalu terletak di bagian permukaan. Gaya tolak-menolak akan terjadi jika penghantar listrik diberi muatan listrik. Adanya gaya tolak ini merupakan akibat dari sifat muatan listrik di dalam penghantar listrik yang selalu bergerak bebas secara mudah. Muatan-muatan listrik akan terus saling tolak-menolak hingga mencapai kondisi yang tidak bisa bergerak sama sekali.",
      },
      { type: "paragraph", text: "Pengaliran Arus Listrik" },
      {
        type: "paragraph",
        text: "Jumlah pengaliran arus listrik berbanding lurus dengan luas penampang penghantar listrik. Semakin besar ukuran luas penampang, maka daya hantar semakin besar dan begitu juga sebaliknya.",
      },
      { type: "paragraph", text: "Hambatan Listrik" },
      {
        type: "paragraph",
        text: "Hambatan listrik pada sebagian besar penghantar listrik akan meningkat seiring meningkatnya suhu. Peningkatan suhu menyebabkan pergerakan elektron menjadi lebih cepat, tetapi arah pergerakannya acak dan tidak beraturan sehingga meningkatkan nilai hambatan listrik.",
      },
      { type: "paragraph", text: "Daya Hantar Listrik" },
      {
        type: "paragraph",
        text: "Penghantar listrik yang berbentuk cairan maupun benda padat memiliki daya hantar listrik. Pengukuran daya hantar listrik dari suatu penghantar listrik dilakukan dengan kuantisasi. Nilai dari daya hantar listrik mempengaruhi reaksi kimia, jumlah elektron valensi, dan tingkat pengumpulan ion-ion pada penghantar listrik dalam larutan.",
      },
    ],
  },
  {
    slug: "isolator",
    title: "Isolator",
    category: "elektronika",
    author: AUTHOR,
    image: "/images/isolator.jpg",
    excerpt:
      "Material yang sulit untuk menghantarkan arus listrik. Pada pembuatan isolator, material yang digunakan harus memiliki hambatan yang besar.",
    body: [
      { type: "subheading", text: "Pengertian" },
      {
        type: "paragraph",
        text: "Material yang sulit untuk menghantarkan arus listrik. Pada pembuatan isolator, material yang digunakan harus memiliki hambatan yang besar.",
      },
      { type: "subheading", text: "Manfaat" },
      {
        type: "list",
        items: [
          "Pemisah antara konduktor tanpa membuat adanya arus mengalir ke luar",
          "Menghambat listrik atau panas",
        ],
      },
      { type: "subheading", text: "Sifat" },
      { type: "paragraph", text: "Elektris" },
      {
        type: "paragraph",
        text: "Kemampuan memisahkan antara bagian-bagian yang berarus atau bertegangan adalah pengertian dari kuat dielektrik. Mempunyai kuat dielektrik yang besar termasuk isolator yang baik.",
      },
      { type: "paragraph", text: "Mekanis" },
      {
        type: "paragraph",
        text: "Mempunyai kekuatan mekanik yang di dalamnya tahan terhadap tekanan mekanik dan tidak mudah aus.",
      },
      { type: "paragraph", text: "Termis" },
      { type: "paragraph", text: "Memiliki ketahanan terhadap panas." },
      { type: "paragraph", text: "Kimia" },
      {
        type: "paragraph",
        text: "Menunjukkan penyerapan air yang mudah atau tidak. Air merupakan bahan yang konduktif sehingga semakin basah suatu isolator, maka tahanan jenisnya atau kuat dielektriknya akan semakin mengecil dan menurunkan kemampuan isolasinya.",
      },
    ],
  },
  {
    slug: "mikroprosessor",
    title: "MikroProssesor",
    category: "mekatronika",
    author: AUTHOR,
    image: "/images/Mikroprosessor.jpg",
    excerpt:
      'Merupakan "Central Processing Unit (CPU)" yang terletak pada sirkuit semikonduktor yang di dalamnya terkandung rangkaian ALU, CU dan register-register.',
    body: [
      { type: "subheading", text: "Pengertian" },
      {
        type: "paragraph",
        text: 'Merupakan "Central Processing Unit (CPU)" yang terletak pada sirkuit semikonduktor yang di dalamnya terkandung rangkaian ALU (Arithmetic-Logic Unit), rangkaian CU (Control Unit) dan kumpulan register-register.',
      },
      {
        type: "paragraph",
        text: "Sebuah mikroprosesor tidak dapat menjalankan sebuah sistem secara langsung. Mikroprosesor harus dibantu beberapa komponen lain seperti RAM, ROM, Clock, Serial Com Port untuk dapat bekerja dengan baik.",
      },
      { type: "subheading", text: "Dalam Perkembangannya Dibagi Menjadi 4 Jenis" },
      { type: "paragraph", text: "Bit Slice Processor" },
      {
        type: "paragraph",
        text: "Perancangan CPU dengan menambahkan jumlah irisan bit (slices) untuk aplikasi tertentu, biasanya disebut sebagai CPU custom.",
      },
      { type: "paragraph", text: "General Purpose CPU" },
      { type: "paragraph", text: "CPU untuk tujuan umum atau mikrokomputer." },
      { type: "paragraph", text: "I/O Prosessor" },
      { type: "paragraph", text: "Berfungsi menangani input/output membantu prosesor utama." },
      { type: "paragraph", text: "Dedicated/Embedded Controller" },
      { type: "paragraph", text: "Otomasi sebuah mesin, lebih dikenal sebagai mikrokontroller." },
      { type: "subheading", text: "Fungsi" },
      {
        type: "list",
        items: [
          "Mengambil instruksi dan data dari memori",
          "Memindah data ke memori",
          "Mengirim sinyal kendali dan sinyal interupsi",
          "Menyediakan pewaktuan untuk siklus kerja sistem mikroprosesor",
          "Mengerjakan operasi logika dan aritmetika",
        ],
      },
    ],
  },
  {
    slug: "observasi",
    title: "Teks Laporan Hasil Observasi",
    category: "umum",
    author: AUTHOR,
    image: "/images/perpustakaan.jpg",
    excerpt:
      "Berita/informasi yang dibuat berdasarkan pengamatan pada suatu hal yang nyata/benar-benar ada..",
    body: [
      { type: "subheading", text: "Pengertian" },
      {
        type: "paragraph",
        text: "Teks yang berisi informasi yang dibuat berdasarkan pengamatan pada suatu objek atau kejadian.",
      },
      { type: "subheading", text: "Ciri-Ciri" },
      {
        type: "list",
        items: [
          "Bersifat objektif, global, universal",
          "Dituliskan berdasarkan fakta",
          "Ditulis secara lengkap dan sempurna",
          "Objek yang dibahas merupakan objek tunggal",
          "Tidak mengandung prasangka, dugaan, pemihakan yang menyimpang atau tidak tepat",
        ],
      },
      { type: "subheading", text: "Sifat" },
      { type: "paragraph", text: "Informatif" },
      { type: "paragraph", text: "Informasi yang berguna mengenai objek yang diamati." },
      { type: "paragraph", text: "Komunikatif" },
      {
        type: "paragraph",
        text: "Bahasa yang digunakan seolah-olah membuat kita sedang berkomunikasi dengan teks tersebut.",
      },
      { type: "paragraph", text: "Objektif" },
      { type: "paragraph", text: "Berpatokan pada informasi/kejadian yang benar-benar terjadi." },
      { type: "subheading", text: "Tujuan" },
      {
        type: "list",
        items: [
          "Mengatasi suatu persoalan",
          "Menemukan teknik/cara terbaru",
          "Mengambil keputusan yang lebih efektif",
          "Melakukan pengawasan/perbaikan",
          "Mengetahui perkembangan suatu permasalahan",
        ],
      },
      { type: "subheading", text: "Fungsi" },
      {
        type: "list",
        items: [
          "Melaporkan tanggung jawab suatu tugas",
          "Menjelaskan dasar penyusunan kebijaksanaan, keputusan dan pemecahan masalah dalam pengamatan",
          "Sebagai sumber informasi terpercaya",
          "Sarana untuk dokumentasi",
        ],
      },
      { type: "subheading", text: "Struktur" },
      { type: "paragraph", text: "Pernyataan umum/klarifikasi" },
      { type: "paragraph", text: "Berisi pembuka/pengantar hal yang akan disampaikan." },
      { type: "paragraph", text: "Deskripsi Bagian" },
      { type: "paragraph", text: 'Berisi ide pokok atas setiap paragraf tersebut "penjelasan rinci".' },
      { type: "paragraph", text: "Deskripsi Manfaat" },
      { type: "paragraph", text: "Menjelaskan manfaat atas sesuatu yang ingin dilaporkan." },
      { type: "paragraph", text: "Penutup" },
      { type: "paragraph", text: "Merupakan bagian sebuah rincian akhir dari teks." },
      { type: "subheading", text: "Kaidah Kebahasaan" },
      {
        type: "list",
        items: [
          "Menggunakan frasa nomina",
          "Menggunakan verba rasional",
          "Menggunakan verba aktif alam, untuk menjelaskan perilaku",
          "Menggunakan kata penghubung yang menyatakan tambahan (dan, serta), perbedaan (berbeda, dengan), persamaan (sebagaimana), pertentangan (tapi), pilihan (atau)",
          "Menggunakan paragraf dengan kalimat utama",
          "Menggunakan kata keilmuwan teknis",
        ],
      },
      { type: "subheading", text: "Langkah-Langkah" },
      {
        type: "list",
        items: [
          "Menentukan topik masalah yang akan diamati",
          "Merencanakan cara menyelesaikan masalah",
          "Melakukan pengamatan sesuai dengan masalah yang ditentukan",
          "Meneliti ulang hasil observasi",
          "Menyusun laporan hasil observasi/mengembangkan kerangka laporan yang baik dan sesuai dengan kaidah kebahasaan teks laporan",
          "Membenahi atau menyunting teks laporan hasil observasi",
        ],
      },
      { type: "subheading", text: "Syarat" },
      {
        type: "list",
        items: [
          "Objek yang diamati harus menarik",
          "Objektif",
          "Disusun secara sistematis",
          "Dapat dipertanggungjawabkan kebenarannya",
          "Dapat menggunakan bahasa yang logis dan efektif",
        ],
      },
    ],
  },
  {
    slug: "budaya",
    title: "Budaya",
    category: "umum",
    author: AUTHOR,
    image: "/images/tarisaman.jpg",
    excerpt: "Kegiatan masyarakat yang memiliki ciri/karakteristik daerah tertentu....",
    body: [
      { type: "subheading", text: "Pengertian" },
      {
        type: "paragraph",
        text: "Berasal dari bahasa sanskerta yaitu, Budi: Pikiran, Daya: Tubuh Manusia.",
      },
      {
        type: "paragraph",
        text: "Kegiatan masyarakat yang memiliki ciri/karakteristik daerah tertentu, tumbuh/berkembang di daerah tersebut kemudian secara turun-temurun dilestarikan dan dijaga.",
      },
      { type: "subheading", text: "Fungsi" },
      {
        type: "list",
        items: [
          "Menciptakan hasil karya manusia & melahirkan bentuk teknologi serta melahirkan pola pikir pada suatu daerah yang berpijak pada budaya setempat",
          "Patokan sebagai perwujudan norma dan nilai sosial untuk menghasilkan tata tertib dalam pergaulan masyarakat pada suatu daerah",
          'Menjadikan pola pikir "Fighters Of Behaviour" yang merupakan cara masyarakat untuk bertindak melakukan suatu hal yang sama harus diikuti semua anggota yang lain',
        ],
      },
      { type: "subheading", text: "Sifat" },
      { type: "paragraph", text: "Informatif" },
      { type: "paragraph", text: "Informasi yang berguna mengenai objek yang diamati." },
      { type: "paragraph", text: "Komunikatif" },
      {
        type: "paragraph",
        text: "Bahasa yang digunakan seolah-olah membuat kita sedang berkomunikasi dengan teks tersebut.",
      },
      { type: "paragraph", text: "Objektif" },
      { type: "paragraph", text: "Berpatokan pada informasi/kejadian yang benar-benar terjadi." },
      { type: "subheading", text: "Klasifikasi" },
      {
        type: "list",
        items: [
          "Rumah Adat (cnth: Rumah Joglo)",
          "Alat Musik Tradisional (cnth: Gamelan)",
          "Bentuk Kesenian (cnth: wayang)",
          "Adat Istiadat (cnth: dugderan)",
          "Pakaian Daerah (cnth: sarjan)",
          "Bahasa Daerah (cnth: Bahasa Sunda)",
        ],
      },
    ],
  },
  {
    slug: "perankimia",
    title: "Peran Kimia",
    category: "umum",
    author: AUTHOR,
    image: "/images/kimia.jpg",
    excerpt:
      "Ilmu yang mempelajari tentang susunan, struktur, sifat, dan perubahan materi, serta energi....",
    body: [
      { type: "subheading", text: "Pengertian" },
      {
        type: "paragraph",
        text: "Ilmu yang mempelajari tentang susunan, struktur, sifat, dan perubahan materi, serta energi yang menyertai perubahan tersebut.",
      },
      { type: "paragraph", text: "Ilmu yang mempelajari susunan materi" },
      {
        type: "paragraph",
        text: "Susunan materi: komponen-komponen pembentuk materi dan perbandingan setiap komponen dalam sebuah materi.",
      },
      { type: "paragraph", text: "Ilmu yang mempelajari struktur materi" },
      {
        type: "paragraph",
        text: "Struktur materi: gambaran tentang keadaan atom-atom yang saling terikat (atom dan molekul yang bersifat netral).",
      },
      { type: "paragraph", text: "Ilmu yang mempelajari sifat materi" },
      { type: "paragraph", text: "Sifat materi mencakup sifat fisis (wujud dan penampilan) dan sifat kimia." },
      { type: "paragraph", text: "Ilmu yang mempelajari perubahan materi" },
      {
        type: "paragraph",
        text: "Meliputi perubahan fisika (perubahan yang tidak menghasilkan zat baru) dan perubahan kimia (perubahan yang menghasilkan zat baru). Proses perubahan struktur selalu dilibatkan energi yang menyertai perubahan tersebut, proses dan besarnya energi yang terlibat, asal energi, serta kegunaannya.",
      },
      { type: "subheading", text: "Cabang Ilmu Kimia" },
      { type: "paragraph", text: "Kimia Organik" },
      {
        type: "paragraph",
        text: "Memusatkan kajian pada struktur, komposisi, reaksi, dan sintesis senyawa-senyawa organik (senyawa hidrokarbon). Contoh: bensin, alkohol, dan solar.",
      },
      { type: "paragraph", text: "Kimia Anorganik" },
      {
        type: "paragraph",
        text: "Memusatkan kajian pada penelitian senyawa-senyawa anorganik. Contoh: garam, mineral, logam dan material.",
      },
      { type: "paragraph", text: "Biokimia" },
      {
        type: "paragraph",
        text: "Berkaitan dengan ilmu biologi mengenai sifat dan komposisi senyawa serta hasil reaksi perubahannya. Contoh: karbohidrat, protein, lemak, vitamin, enzim.",
      },
      { type: "paragraph", text: "Kimia Analitik" },
      {
        type: "paragraph",
        text: "Berkaitan dengan penentuan kimia kualitatif dan kuantitatif (pengembangan aplikasi peralatan analitik yang semakin canggih).",
      },
      { type: "paragraph", text: "Kimia Lingkungan" },
      { type: "paragraph", text: "Memusatkan kajian pada masalah lingkungan. Contoh: pencemaran, dan penanganan limbah." },
      { type: "paragraph", text: "Kimia Inti (Radiokimia)" },
      {
        type: "paragraph",
        text: "Memusatkan kajian pada penelitian zat-zat radioaktif. Contoh: pengobatan (kedokteran), dan pertanian.",
      },
      { type: "paragraph", text: "Kimia Farmasi" },
      { type: "paragraph", text: "Memusatkan kajian pada penelitian mengenai pemisahan (isolasi), pembuatan sintesis." },
      { type: "paragraph", text: "Kimia Fisik" },
      {
        type: "paragraph",
        text: "Memusatkan kajian pada penelitian tentang energi yang menyertai reaksi kimia, sifat kimia dan fisika, serta perubahan senyawa kimia.",
      },
      { type: "paragraph", text: "Kimia Pangan" },
      { type: "paragraph", text: "Memusatkan kajian pada penelitian untuk mengembangkan kualitas bahan pangan." },
    ],
  },
  {
    slug: "zaman-pembentukan-bumi",
    title: "Zaman-Zaman Pembentukan Bumi",
    category: "umum",
    author: AUTHOR,
    image: "/images/ZAMAN.jpg",
    excerpt: "Menurut geologi, proses perkembangan bumi dibagi menjadi 4 tahapan masa, yaitu:........",
    body: [
      { type: "subheading", text: "Pengertian" },
      {
        type: "paragraph",
        text: "Menurut geologi, proses perkembangan dibagi menjadi 4 tahapan masa, yaitu:",
      },
      { type: "subheading", text: "Zaman Arkaekum" },
      {
        type: "paragraph",
        text: "Zaman awal pembentukan bumi, Zaman Arkaekum atau Zaman Arkeozoikum diperkirakan terjadi pada 4 sampai 2,5 miliar tahun yang lalu. Keadaan permukaan bumi pada zaman ini masih jauh dari kata stabil, bumi masih dipenuhi dengan lahar panas dan awan hitam.",
      },
      {
        type: "paragraph",
        text: "Akibat keadaan bumi yang masih sangat labil, dan udara yang sangat panas tidak memungkinkan adanya kehidupan yang kompleks.",
      },
      { type: "subheading", text: "Zaman Paleozoikum" },
      {
        type: "paragraph",
        text: "Diperkirakan terjadi pada 500-245 juta tahun yang lalu. Temperatur bumi pada zaman ini mulai mendingin dan tanda-tanda kehidupan mulai bermunculan. Zaman ini dibagi menjadi 6 macam:",
      },
      { type: "paragraph", text: "Periode Kambrium" },
      {
        type: "paragraph",
        text: "Diperkirakan terjadi pada 600 juta tahun yang lalu. Iklim bumi tergolong hangat dan pada masa ini ganggang mulai berkembang dan sebagian besar wilayah air menjadi daerah kekuasaan hewan arthropoda lapis baja, seperti trilobita. Banyak jenis organisme yang berevolusi pada zaman ini, kebanyakan ditemukan fosil-fosil hewan air yang diperkirakan pada zaman ini organismenya masih sebatas hidup di wilayah perairan.",
      },
      { type: "paragraph", text: "Periode Ordovisium" },
      {
        type: "paragraph",
        text: "Diperkirakan periode ini dimulai pada 480 juta tahun yang lalu, pada zaman ini ditemukan fosil hewan bertulang belakang pertama yaitu fosil ikan tidak berahang. Pada akhir periode ini, bumi mengalami masa glasiasi (pembekuan). Iklim yang mendingin ini mengakibatkan kepunahan Ordovisium-Silur dimana 60% invertebrata laut dan 25% famili punah.",
      },
      { type: "paragraph", text: "Periode Silur" },
      {
        type: "paragraph",
        text: "Periode ini dimulai 435 juta tahun lalu. Pada periode ini terlihat mulai adanya peralihan kehidupan dari air ke darat. Tumbuhan mulai tumbuh di daratan. Periode ini merupakan periode tertua yang berada di Indonesia.",
      },
      { type: "paragraph", text: "Periode Devon" },
      {
        type: "paragraph",
        text: 'Diperkirakan terjadi pada 405 juta tahun yang lalu. Zaman ini disebut juga dengan "Zaman Ikan", karena pada zaman ini terjadi perkembangan besar-besaran jenis ikan dan tumbuhan di darat.',
      },
      { type: "paragraph", text: "Periode Karbon" },
      {
        type: "paragraph",
        text: "Periode ini dimulai 345 juta tahun yang lalu, periode ini ditandai dengan menyatunya benua-benua membentuk masa daratan yang disebut Pangea. Pada periode ini ganggang tumbuh melimpah dan tumbuhan lumut muncul untuk pertama kalinya pada masa ini.",
      },
      { type: "paragraph", text: "Periode Perm" },
      {
        type: "paragraph",
        text: "Periode ini dimulai 275 juta tahun yang lalu. Satu samudra besar yang disebut Panthalassa sudah terbentuk. Pada masa ini terjadi perubahan iklim yang sangat keras di permukaan bumi. Daratan Pangaea sangat kering dengan hampir tidak adanya danau dan sungai.",
      },
      { type: "subheading", text: "Zaman Mesozoikum" },
      {
        type: "paragraph",
        text: "Permukaan bumi yang sudah mulai stabil. Mulai bermunculan reptil-reptil besar seperti dinosaurus. Zaman ini terbagi lagi menjadi 3 periode, yaitu:",
      },
      { type: "paragraph", text: "Periode Trias" },
      {
        type: "paragraph",
        text: "Periode ini mulai pada 225 juta tahun yang lalu. Munculnya dinosaurus dan reptil raksasa untuk pertama kalinya. Periode ini menjadi masa transisi dari peristiwa Kepunahan Perm-Trias yang gersang menuju periode Jura yang subur. Beberapa makhluk seperti Lystrosaurus, Labyrinthodont, dan Euparkeria berhasil bertahan hidup. Pada akhir periode ini terjadi peristiwa Kepunahan Trias-Jura yang memusnahkan 80% makhluk hidup.",
      },
      { type: "paragraph", text: "Periode Jura" },
      {
        type: "paragraph",
        text: "Periode ini berlangsung kira-kira 200-145 juta tahun yang lalu dengan iklim lembab dan tropis. Di daratan, dinosaurus jenis reptil menjadi spesies dominan, sedangkan di lautan ichthyosaurus, plesiosaurus, dan ammonoidea mendominasi. Mamalia kecil mulai muncul. Pada akhir masa Jura, Pangaea terpecah menjadi Laurasia dan Gondwana, diikuti Kepunahan Jura-Kreta.",
      },
      { type: "paragraph", text: "Periode Kapur" },
      {
        type: "paragraph",
        text: "Periode Kreta/Cretaceous merupakan periode terpanjang di zaman Mesozoikum. Dinosaurus berkembang pesat menyebar ke seluruh dunia, muncul spesies seperti Tyrannosaurus, Ankylosaurus, Triceratops dan Hadrosauria. Peristiwa Kepunahan Kreta-Tertier di akhir periode ini memusnahkan dinosaurus, membuka jalan bagi mamalia dan burung.",
      },
      { type: "subheading", text: "Zaman Neozoikum" },
      {
        type: "paragraph",
        text: "Zaman setelah kepunahan dinosaurus ketika permukaan bumi didominasi mamalia dan burung. Berawal dari 60 juta tahun yang lalu sampai sekarang. Zaman ini dibagi 2, yaitu zaman tersier dan zaman kuarter.",
      },
      { type: "paragraph", text: "Periode Tersier" },
      {
        type: "paragraph",
        text: "Reptil raksasa mulai berkurang, berganti dengan jenis-jenis binatang mamalia. Zaman ini terbagi menjadi Paleosen, Eosen, Oligosen, Miosen, dan Pliosen — masing-masing ditandai perkembangan tumbuhan berbunga, buah dan biji-bijian, kera primitif, kera di Asia-Eropa, hingga kemunculan manusia purba pada akhir Pliosen.",
      },
      { type: "paragraph", text: "Periode Kuarter" },
      {
        type: "paragraph",
        text: "Mulai muncul tanda-tanda kehidupan manusia purba, terbagi menjadi masa Pleistosen (zaman es, munculnya manusia purba, mammoth, badak berbulu, harimau taring pedang) dan Holosen (zaman banjir, es mencair, munculnya Homo Sapiens sebagai nenek moyang manusia modern).",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}
