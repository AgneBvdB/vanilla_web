const paintings = [
    {
    title: "AGUONĖLĖ",
    src: "2016_WebP/AGUONĖLĖ. Pop., pastelė, 42x58 false.webp",
    thumb: "2016_WebP/thumbs_2016/AGUONĖLĖ. Pop., pastelė, 42x58 false.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 42x58 cm",
    available: false
    },
    {
    title: "AGUONĖLĖS",
    src: "2016_WebP/Aguonėlės. Pop., pastelė, 45x58 false.webp",
    thumb: "2016_WebP/thumbs_2016/Aguonėlės. Pop., pastelė, 45x58 false.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 45x58 cm",
    available: false
    },
    {
    title: "AGUONOS TAU",
    src: "2016_WebP/AGUONOS TAU. Pop., pastelė, 45x58.webp",
    thumb: "2016_WebP/thumbs_2016/AGUONOS TAU. Pop., pastelė, 45x58.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 45x58 cm",
    available: false
    },
    {
    title: "ALYVOS",
    src: "2016_WebP/Alyvos. Pop., pastelė 46x61 true.webp",
    thumb: "2016_WebP/thumbs_2016/Alyvos. Pop., pastelė 46x61 true.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 46x61 cm",
    available: false
    },
    {
    title: "BERŽŲ AUKSAS",
    src: "2016_WebP/BERŽŲ AUKSAS. Pop., pastelė, 64x46.webp",
    thumb: "2016_WebP/thumbs_2016/BERŽŲ AUKSAS. Pop., pastelė, 64x46.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 64x46 cm",
    available: false
    },
    {
    title: "IEVOS II",
    src: "2016_WebP/IEVOS II,pop., pastelė, 36x50.webp",
    thumb: "2016_WebP/thumbs_2016/IEVOS II,pop., pastelė, 36x50.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 36x50 cm",
    available: false
    },
    {
    title: "IEVOS",
    src: "2016_WebP/IEVOS. pop., pastelė, 44x50 true.webp",
    thumb: "2016_WebP/thumbs_2016/IEVOS. pop., pastelė, 44x50 true.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 44x50 cm",
    available: false
    },
    {
    title: "ŠALAVIJAI IŠ AUDRONĖS GĖLYNŲ",
    src: "2016_WebP/Iš Audronės gėlynų.Šalavijai. Pop., pastelė, 36x50 true.webp",
    thumb: "2016_WebP/thumbs_2016/Iš Audronės gėlynų.Šalavijai. Pop., pastelė, 36x50 true.webp",
    year: 2016,
    description: "Popierius, pastelė 36x50 cm",
    available: false
    },
    {
    title: "KIAULPIENĖS",
    src: "2016_WebP/KIAULPIENĖS, pop., pastelė 50x37 true.webp",
    thumb: "2016_WebP/thumbs_2016/KIAULPIENĖS, pop., pastelė 50x37 true.webp",
    year: 2016,
    description: "Popierius, pastelė 50x37 cm",
    available: false
    },
    {
    title: "KLEVAI",
    src: "2016_WebP/Klevai. Pop., pastelė, 46x66 false.webp",
    thumb: "2016_WebP/thumbs_2016/Klevai. Pop., pastelė, 46x66 false.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: false
    },
    {
    title: "MĖLYNOS PUŠYS",
    src: "2016_WebP/Mėlynos pušys. Pop., pastelė 42X55-false.webp",
    thumb: "2016_WebP/thumbs_2016/Mėlynos pušys. Pop., pastelė 42X55-false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x55 cm",
    available: false
    },
    {
    title: "PAVASARIS KOPOSE",
    src: "2016_WebP/PAVASARIS KOPOSE, pop., pastelė, 42X62-false.webp",
    thumb: "2016_WebP/thumbs_2016/PAVASARIS KOPOSE, pop., pastelė, 42X62-false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "PO DU",
    src: "2016_WebP/PO DU. pop., akvarelė 45x60-false.webp",
    thumb: "2016_WebP/thumbs_2016/PO DU. pop., akvarelė 45x60-false.webp",
    year: 2016,
    description: "Popierius, akvarelė 45x60 cm",
    available: false
    },
    {
    title: "RAMUNĖS II",
    src: "2016_WebP/RAMUNĖS II. Pastelė false.webp",
    thumb: "2016_WebP/thumbs_2016/RAMUNĖS II. Pastelė false.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false
    },
    {
    title: "RAMUNĖS",
    src: "2016_WebP/RAMUNĖS, kartonas, pastelė,45x58 cm false.webp",
    thumb: "2016_WebP/thumbs_2016/RAMUNĖS, kartonas, pastelė,45x58 cm false.webp",
    year: 2016,
    description: "Kartonas, pastelė 45x58 cm",
    available: false
    },
    {
    title: "RUDENINĖ NUOTAIKA",
    src: "2016_WebP/Rudeninė nuotaika, pop., pastelė 50x38.webp",
    thumb: "2016_WebP/thumbs_2016/Rudeninė nuotaika, pop., pastelė 50x38.webp",
    year: 2016,
    description: "Popierius, pastelė 50x38 cm",
    available: false
    },
    {
    title: "RŪKAS SKLAIDOSI",
    src: "2016_WebP/RŪKAS SKLAIDOSI. Pop., pastelė, 42x62 false.webp",
    thumb: "2016_WebP/thumbs_2016/RŪKAS SKLAIDOSI. Pop., pastelė, 42x62 false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "TAKAS IŠ PUŠYNO",
    src: "2016_WebP/Takas iš pušyno. Pop., pastelė.webp",
    thumb: "2016_WebP/thumbs_2016/Takas iš pušyno. Pop., pastelė.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false
    },
    {
    title: "TAS SALDUS ALYVŲ KVAPAS",
    src: "2016_WebP/TAS SALDUS ALYVŲ KVAPAS. Pop., pastelė, 42x62 true.webp",
    thumb: "2016_WebP/thumbs_2016/TAS SALDUS ALYVŲ KVAPAS. Pop., pastelė, 42x62 true.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "TIK NENUPŪSK",
    src: "2016_WebP/TIK NENUPŪSK. Pop., pastelė, 46x61 false.webp",
    thumb: "2016_WebP/thumbs_2016/TIK NENUPŪSK. Pop., pastelė, 46x61 false.webp",
    year: 2016,
    description: "Popierius, pastelė 46x61 cm",
    available: false
    },
    {
    title: "BE PAVADINIMO",
    src: "2016_WebP/untitled-2.webp",
    thumb: "2016_WebP/thumbs_2016/untitled-2.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false
    },
    {
    title: "BE PAVADINIMO",
    src: "2016_WebP/untitled.webp",
    thumb: "2016_WebP/thumbs_2016/untitled.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false
    },
    {
    title: "VĖJAS KOPOSE",
    src: "2016_WebP/VĖJAS KOPOSE, pop., pastelė, 46x66 true.webp",
    thumb: "2016_WebP/thumbs_2016/VĖJAS KOPOSE, pop., pastelė, 46x66 true.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: false
    },
    {
    title: "VIENADIENĖS",
    src: "2016_WebP/Viendienės. Pop., pastelė, 36x50 false.webp",
    thumb: "2016_WebP/thumbs_2016/Viendienės. Pop., pastelė, 36x50 false.webp",
    year: 2016,
    description: "Popierius, pastelė 36x50 cm",
    available: false
    },
    {
    title: "VISIŠKA IMPRESIJA",
    src: "2016_WebP/Visiška impresija. Pop., pastelė, 46x66 ture.webp",
    thumb: "2016_WebP/thumbs_2016/Visiška impresija. Pop., pastelė, 46x66 ture.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: false
    },
    {
    title: "VYŠNIA ŽYDI",
    src: "2016_WebP/VYŠNIA ŽYDI, pop.,pastelė 42x62-true.webp",
    thumb: "2016_WebP/thumbs_2016/VYŠNIA ŽYDI, pop.,pastelė 42x62-true.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "VYŠNIA",
    src: "2016_WebP/VYŠNIA, pop., pastelė, 38x51 true.webp",
    thumb: "2016_WebP\thumbs_2016\VYŠNIA, pop., pastelė, 38x51 true.webp",
    year: 2016,
    description: "Popierius, pastelė 38x51 cm",
    available: false
    },
    {
    title: "ŽOLYNAI II",
    src: "2016_WebP/ŽOLYNAI II. Pop., pastelė, 62x44 false.webp",
    thumb: "2016_WebP/thumbs_2016/ŽOLYNAI II. Pop., pastelė, 62x44 false.webp",
    year: 2016,
    description: "Popierius, pastelė 62x44 cm",
    available: false
    },
    {
    title: "ŽOLYNAI",
    src: "2016_WebP/ŽOLYNAI. Pop., pastelė, 62x42 true.webp",
    thumb: "2016_WebP/thumbs_2016/ŽOLYNAI. Pop., pastelė, 62x42 true.webp",
    year: 2016,
    description: "Popierius, pastelė 62x42 cm",
    available: false
    },
    {
    title: "ŽYDINTI",
    src: "2016_WebP/ŽYDINTI, pop.,akvarelė 45X60 false.webp",
    thumb: "2016_WebP/thumbs_2016/ŽYDINTI, pop.,akvarelė 45X60 false.webp",
    year: 2016,
    description: "Popierius, akvarelė 45x60 cm",
    available: false
    },
    {
    title: "ČIA GERA BŪTI",
    src: "assets/full_2017/ČIA GERA BŪTI. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/ČIA GERA BŪTI. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false
    },
    {
    title: "GELTONA PIEVA TEN",
    src: "assets/full_2017/GELTONA PIEVA TEN. Pop., pastelė, 41x62.webp",
    thumb: "assets/thumbs_2017/GELTONA PIEVA TEN. Pop., pastelė, 41x62.webp",
    year: 2017,
    description: "Popierius, pastelė 41x62 cm",
    available: false
    },
    {
    title: "JŪRA PASIŠIAUŠĖ",
    src: "assets/full_2017/JŪRA PASIŠIAUŠĖ. Pop., pastelė 62x44 nebeturiu.webp",
    thumb: "assets/thumbs_2017/JŪRA PASIŠIAUŠĖ. Pop., pastelė 62x44 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 62x44 cm",
    available: false
    },
    {
    title: "KAIP PIEVOS DEBESYS",
    src: "assets/full_2017/Kaip pievos debesys. Pop., pastelė, 50x36.webp",
    thumb: "assets/thumbs_2017/Kaip pievos debesys. Pop., pastelė, 50x36.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: false
    },
    {
    title: "KOPOSE",
    src: "assets/full_2017/KOPOSE. Pop., pastelė 41x59.webp",
    thumb: "assets/thumbs_2017/KOPOSE. Pop., pastelė 41x59.webp",
    year: 2017,
    description: "Popierius, pastelė 41x59 cm",
    available: false
    },
    {
    title: "KOSMĖJOS",
    src: "assets/full_2017/KOSMĖJOS. Pop., pastelė, 35x48 Nebeturiu.webp",
    thumb: "assets/thumbs_2017/KOSMĖJOS. Pop., pastelė, 35x48 Nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 35x48 cm",
    available: false
    },
    {
    title: "LABAI SPALVINGAS SAULĖLYDIS",
    src: "assets/full_2017/LABAI SPALVINGAS SAULĖLYDIS, pop., pastelė 64x44.webp",
    thumb: "assets/thumbs_2017/LABAI SPALVINGAS SAULĖLYDIS, pop., pastelė 64x44.webp",
    year: 2017,
    description: "Popierius, pastelė 64x44 cm",
    available: false
    },
    {
    title: "MAGIJA",
    src: "assets/full_2017/MAGIJA. Pop., pastelė, 64x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/MAGIJA. Pop., pastelė, 64x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x36 cm",
    available: false
    },
    {
    title: "MIGLELĖ",
    src: "assets/full_2017/MIGLELĖ. Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2017/MIGLELĖ. Pop., pastelė, 34x49.webp",
    year: 2017,
    description: "Popierius, pastelė 34x49 cm",
    available: false
    },
    {
    title: "MIŠKO TAKELIS",
    src: "assets/full_2017/MIŠKO TAKELIS, pop., pastelė, 50x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/MIŠKO TAKELIS, pop., pastelė, 50x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: false
    },
    {
    title: "NERIMAS",
    src: "assets/full_2017/NERIMAS. Pop., pastelė, 45x63.webp",
    thumb: "assets/thumbs_2017/NERIMAS. Pop., pastelė, 45x63.webp",
    year: 2017,
    description: "Popierius, pastelė 45x63 cm",
    available: false
    },
    {
    title: "NOSTALGIŠKAS",
    src: "assets/full_2017/NOSTALGIŠKAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2017/NOSTALGIŠKAS. Pop., pastelė, 35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "PABRAIDŽIOK PO BIRŽELIO PIEVAS",
    src: "assets/full_2017/PABRAIDŽIOK PO BIRŽELIO PIEVAS. Pop., pastelė, 50,5x34,5.webp",
    thumb: "assets/thumbs_2017/PABRAIDŽIOK PO BIRŽELIO PIEVAS. Pop., pastelė, 50,5x34,5.webp",
    year: 2017,
    description: "Popierius, pastelė 50,5x34,5 cm",
    available: false
    },
    {
    title: "PAPYLĖ JŪRA SIDABRO",
    src: "assets/full_2017/Papylė jūra sidabro. Popierius, pastelė, 40x61 nebeturiu.webp",
    thumb: "assets/thumbs_2017/Papylė jūra sidabro. Popierius, pastelė, 40x61 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 40x61 cm",
    available: false
    },
    {
    title: "PASIILGAU JŪROS",
    src: "assets/full_2017/Pasiilgau jūros. Pop., pastelė 63x45.webp",
    thumb: "assets/thumbs_2017/Pasiilgau jūros. Pop., pastelė 63x45.webp",
    year: 2017,
    description: "Popierius, pastelė 63x45 cm",
    available: false
    },
    {
    title: "PASKUTINIAI SPINDULIAI",
    src: "assets/full_2017/PASKUTINIAI SPINDULIAI. Pop., pastelė, 49x38 Nebeturiu.webp",
    thumb: "assets/thumbs_2017/PASKUTINIAI SPINDULIAI. Pop., pastelė, 49x38 Nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 49x38 cm",
    available: false
    },
    {
    title: "PAVASARĖJA",
    src: "assets/full_2017/PAVASARĖJA. Pop., pastelė, 63x43.webp",
    thumb: "assets/thumbs_2017/PAVASARĖJA. Pop., pastelė, 63x43.webp",
    year: 2017,
    description: "Popierius, pastelė 63x43 cm",
    available: false
    },
    {
    title: "PAŽVELK AUKŠTYN",
    src: "assets/full_2017/PAŽVELK AUKŠTYN, Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/PAŽVELK AUKŠTYN, Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false
    },
    {
    title: "PRIE JŪROS RAMU",
    src: "assets/full_2017/Prie jūros ramu. Pop., pastelė 42x62.webp",
    thumb: "assets/thumbs_2017/Prie jūros ramu. Pop., pastelė 42x62.webp",
    year: 2017,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "PRIE JŪROS VĖJUOTA",
    src: "assets/full_2017/Prie jūros vėjuota. Pop., pastelė, 63x45.webp",
    thumb: "assets/thumbs_2017/Prie jūros vėjuota. Pop., pastelė, 63x45.webp",
    year: 2017,
    description: "Popierius, pastelė 63x45 cm",
    available: false
    },
    {
    title: "RUDENĖJA",
    src: "assets/full_2017/RUDENĖJA. Pop., pastelė, 49x39.webp",
    thumb: "assets/thumbs_2017/RUDENĖJA. Pop., pastelė, 49x39.webp",
    year: 2017,
    description: "Popierius, pastelė 49x39 cm",
    available: false
    },
    {
    title: "RUDENIŠKAI",
    src: "assets/full_2017/RUDENIŠKAI. Pop., pastelė, 41x61.webp",
    thumb: "assets/thumbs_2017/RUDENIŠKAI. Pop., pastelė, 41x61.webp",
    year: 2017,
    description: "Popierius, pastelė 41x61 cm",
    available: false
    },
    {
    title: "RUDENS EKSPRESIJA",
    src: "assets/full_2017/RUDENS EKSPRESIJA. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2017/RUDENS EKSPRESIJA. Pop., pastelė, 35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "RUDENS PALETĖ",
    src: "assets/full_2017/RUDENS PALETĖ. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/RUDENS PALETĖ. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false
    },
    {
    title: "RYTAS",
    src: "assets/full_2017/Rytas.Pop., pastelė, 36x50.webp",
    thumb: "assets/thumbs_2017/Rytas.Pop., pastelė, 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: false
    },
    {
    title: "SAULĖGRĄŽA II",
    src: "assets/full_2017/SAULĖGRĄŽA II.Pop., pastelė,64x37 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SAULĖGRĄŽA II.Pop., pastelė,64x37 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x37 cm",
    available: false
    },
    {
    title: "SAULĖGRĄŽA",
    src: "assets/full_2017/SAULĖGRĄŽA. Pop., pastelė, 64x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SAULĖGRĄŽA. Pop., pastelė, 64x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x36 cm",
    available: false
    },
    {
    title: "SAULĖTA SPALIO DIENA",
    src: "assets/full_2017/SAULĖTA SPALIO DIENA. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/SAULĖTA SPALIO DIENA. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false
    },
    {
    title: "ŠERMUKŠNIAI",
    src: "assets/full_2017/ŠERMUKŠNIAI. Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2017/ŠERMUKŠNIAI. Pop., pastelė, 34x49.webp",
    year: 2017,
    description: "Popierius, pastelė 34x49 cm",
    available: false
    },
    {
    title: "ŠILAGĖLĖS",
    src: "assets/full_2017/ŠILAGĖLĖS. Pop., pastelė, 50x35 nebeturiu.webp",
    thumb: "assets/thumbs_2017/ŠILAGĖLĖS. Pop., pastelė, 50x35 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 50x35 cm",
    available: false
    },
    {
    title: "ŠIUGŽDESIAI",
    src: "assets/full_2017/ŠIUGŽDESIAI. Pop., pastelė, 36x50.webp",
    thumb: "assets/thumbs_2017/ŠIUGŽDESIAI. Pop., pastelė, 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: false
    },
    {
    title: "SU BERŽELIAIS KOPOSE",
    src: "assets/full_2017/SU BERŽELIAIS KOPOSE.Pop., pastelė,49x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SU BERŽELIAIS KOPOSE.Pop., pastelė,49x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 49x36 cm",
    available: false
    },
    {
    title: "ŠVYTĖJIMAS",
    src: "assets/full_2017/ŠVYTĖJIMAS. Pop., pastelė 65x45.webp",
    thumb: "assets/thumbs_2017/ŠVYTĖJIMAS. Pop., pastelė 65x45.webp",
    year: 2017,
    description: "Popierius, pastelė 65x45 cm",
    available: false
    },
    {
    title: "TAKELIS",
    src: "assets/full_2017/Takelis. Pop., pastelė, 60x41.webp",
    thumb: "assets/thumbs_2017/Takelis. Pop., pastelė, 60x41.webp",
    year: 2017,
    description: "Popierius, pastelė 60x41 cm",
    available: false
    },
    {
    title: "TAU, MANO MAMYTE",
    src: "assets/full_2017/TAU, MANO MAMYTE. Pop., pastelė, 46x46 nebeturiu.webp",
    thumb: "assets/thumbs_2017/TAU, MANO MAMYTE. Pop., pastelė, 46x46 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 46x46 cm",
    available: false
    },
    {
    title: "TIK AKIMIRKA",
    src: "assets/full_2017/TIK AKIMIRKA. Pop., pastelė,35x50.webp",
    thumb: "assets/thumbs_2017/TIK AKIMIRKA. Pop., pastelė,35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "UPELIŪKŠTIS",
    src: "assets/full_2017/UPELIŪKŠTIS. Pop., pastelė,61x44.webp",
    thumb: "assets/thumbs_2017/UPELIŪKŠTIS. Pop., pastelė,61x44.webp",
    year: 2017,
    description: "Popierius, pastelė 61x44 cm",
    available: false
    },
    {
    title: "VAKARO KARAMELĖ",
    src: "assets/full_2017/VAKARO KARAMELĖ. Pop., pastelė,44x63.webp",
    thumb: "assets/thumbs_2017/VAKARO KARAMELĖ. Pop., pastelė,44x63.webp",
    year: 2017,
    description: "Popierius, pastelė 44x63 cm",
    available: false
    },
    {
    title: "ŽALIA BANGA",
    src: "assets/full_2017/Žalia banga. Pop., pastelė, 64x45.webp",
    thumb: "assets/thumbs_2017/Žalia banga. Pop., pastelė, 64x45.webp",
    year: 2017,
    description: "Popierius, pastelė 64x45 cm",
    available: false
    },
    {
    title: "ŽALIAI ŽALIAI",
    src: "assets/full_2017/ŽALIAI ŽALIAI. Pop., pastelė, 50x36.webp",
    thumb: "assets/thumbs_2017/ŽALIAI ŽALIAI. Pop., pastelė, 50x36.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: false
    },
    {
    title: "ŽIBUOKLĖS",
    src: "assets/full_2017/žIBUOKLĖS. Pop., pastelė, 46x46 nebeturiu.webp",
    thumb: "assets/thumbs_2017/žIBUOKLĖS. Pop., pastelė, 46x46 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 46x46 cm",
    available: false
    },
    {
    title: "ŽYDI",
    src: "assets/full_2017/ŽYDI. Pop., pastelė. 36x50.webp",
    thumb: "assets/thumbs_2017/ŽYDI. Pop., pastelė. 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: false
    },
    {
    title: "ŽYDROS PIEVŲ AKYS",
    src: "assets/full_2017/ŽYDROS PIEVŲ AKYS. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2017/ŽYDROS PIEVŲ AKYS. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "",
    src: "",
    thumb: "",
    year: 2018,
    description: "Popierius, pastelė x cm",
    available: false
    },
];


