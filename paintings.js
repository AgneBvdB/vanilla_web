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
    title: "AUDRONĖS ŠALAVIJAI",
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
    thumb: "2016_WebP/thumbs_2016/VYŠNIA, pop., pastelė, 38x51 true.webp",
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
    title: "SPALVINGAS SAULĖLYDIS",
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
    title: "BIRŽELIO PIEVOS",
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
    title: "AKMENYS AMŽINAI",
    src: "assets/full_2018/AKMENYS AMŽINAI. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/AKMENYS AMŽINAI. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
        {
    title: "ANT SKARDŽIO",
    src: "assets/full_2018/ANT SKARDŽIO. Popierius, pastelė, 50x35 nebeturiu.webp",
    thumb: "assets/thumbs_2018/ANT SKARDŽIO. Popierius, pastelė, 50x35 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 50x35 cm",
    available: false
    },
        {
    title: "APSIPYLĖ ŽIEDAIS",
    src: "assets/full_2019/APSIPYLĖ ŽIEDAIS. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/APSIPYLĖ ŽIEDAIS. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
        {
    title: "APSNIGTOS",
    src: "assets/full_2019/APSNIGTOS. Pop., pastelė, 40x60 nebeturiu.webp",
    thumb: "assets/thumbs_2019/APSNIGTOS. Pop., pastelė, 40x60 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 40x60 cm",
    available: false
    },
        {
    title: "AR JAUTI? AR GIRDI? AR UŽUODI?",
    src: "assets/full_2019/AR JAUTI AR GIRDI AR UŽUODI Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/AR JAUTI AR GIRDI AR UŽUODI Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
        {
    title: "ATEIS IR PAVASARIS...",
    src: "assets/full_2018/Ateis ir pavasaris... KAdanoRs. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/Ateis ir pavasaris... KAdanoRs. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
        {
    title: "ATSISPINDINTYS",
    src: "assets/full_2018/ATSISPINDINTYS. Pop., pastelė, 44x64 cm.webp",
    thumb: "assets/thumbs_2018/ATSISPINDINTYS. Pop., pastelė, 44x64 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 44x64 cm",
    available: false
    },
        {
    title: "AUDRA ARTINASI",
    src: "assets/full_2018/AUDRA ARTINASI. Popierius, pastelė, 61X42 nebeturiu.webp",
    thumb: "assets/thumbs_2018/AUDRA ARTINASI. Popierius, pastelė, 61X42 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 61X42 cm",
    available: false
    },
    {
    title: "BALTAS ŽYDĖJIMAS",
    src: "assets/full_2018/BALTAS ŽYDĖJIMAS. Pop., pastelė,34x49.webp",
    thumb: "assets/thumbs_2018/BALTAS ŽYDĖJIMAS. Pop., pastelė,34x49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false
    },
    {
    title: "BANGOS II",
    src: "assets/full_2018/BANGOS II. Pop., pastelė, 35x50 cm nebeturiu.webp",
    thumb: "assets/thumbs_2018/BANGOS II. Pop., pastelė, 35x50 cm nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "BANGOS PRAUSIA AKMENIS",
    src: "assets/full_2018/BANGOS PRAUSIA AKMENIS. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/BANGOS PRAUSIA AKMENIS. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "BANGOS",
    src: "assets/full_2018/BANGOS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/BANGOS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "BANGUOJA BALTIJA",
    src: "assets/full_2018/Banguoja Baltija. Pop., pastelė, 40x50.webp",
    thumb: "assets/thumbs_2018/Banguoja Baltija. Pop., pastelė, 40x50.webp",
    year: 2018,
    description: "Popierius, pastelė 40x50 cm",
    available: false
    },
    {
    title: "BUS RAUDONI VAKARAI",
    src: "assets/full_2019/BUS RAUDONI VAKARAI. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/BUS RAUDONI VAKARAI. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "DAR VIS ŽIEMA",
    src: "assets/full_2019/DAR VIS ŽIEMA. Pop., pastelė, 42X62 nebeturiu.webp",
    thumb: "assets/thumbs_2019/DAR VIS ŽIEMA. Pop., pastelė, 42X62 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42X62 cm",
    available: false
    },
    {
    title: "DAUG YRA AKMENŲ PRIE JŪROS",
    src: "assets/full_2018/DAUG YRA AKMENŲ PRIE JŪROS. past. pop 44x64 nebeturiu.webp",
    thumb: "assets/thumbs_2018/DAUG YRA AKMENŲ PRIE JŪROS. past. pop 44x64 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 44x64 cm",
    available: false
    },
    {
    title: "DEBESYS NUSILEIDO ANT ŽEMĖS",
    src: "assets/full_2018/DEBESYS NUSILEIDO ANT ŽEMĖS. Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/DEBESYS NUSILEIDO ANT ŽEMĖS. Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34X49 cm",
    available: false
    },
    {
    title: "DIDINGOJI",
    src: "assets/full_2019/DIDINGOJI. Pop., pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2019/DIDINGOJI. Pop., pastelė, 42x62 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "DIENA",
    src: "assets/full_2018/DIENA . Pop., pastelė. 62x42.webp",
    thumb: "assets/thumbs_2018/DIENA . Pop., pastelė. 62x42.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false
    },
    {
    title: "DVI STICHIJOS",
    src: "assets/full_2019/DVI STICHIJOS 42x62.webp",
    thumb: "assets/thumbs_2019/DVI STICHIJOS 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "EIME PRIE JŪROS",
    src: "assets/full_2019/EIME PRIE JŪROS. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/EIME PRIE JŪROS. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "GELSVAS PAPRASTUMAS",
    src: "assets/full_2018/GELSVAS PAPRASTUMAS Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/GELSVAS PAPRASTUMAS Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34X49 cm",
    available: false
    },
    {
    title: "GELTONŲ TULPIŲ DIENA",
    src: "assets/full_2018/GELTONŲ TULPIŲ DIENA. Pop., pastelė, 31x50 Nebeturiu.webp",
    thumb: "assets/thumbs_2018/GELTONŲ TULPIŲ DIENA. Pop., pastelė, 31x50 Nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 31x50 cm",
    available: false
    },
    {
    title: "GERA BŪTI",
    src: "assets/full_2019/Gera būti. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/Gera būti. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "GUBOJOS KOPOSE",
    src: "assets/full_2018/GUBOJOS KOPOSE, Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2018/GUBOJOS KOPOSE, Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34X49 cm",
    available: false
    },
    {
    title: "GUBOJOS PALEI TAKĄ",
    src: "assets/full_2018/GUBOJOS PALEI TAKĄ. Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/GUBOJOS PALEI TAKĄ. Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34X49 cm",
    available: false
    },
    {
    title: "IEŠKANTI",
    src: "assets/full_2018/IEŠKANTI. Gal pavasario Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/IEŠKANTI. Gal pavasario Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "IKI RYTOJAUS",
    src: "assets/full_2018/IKI RYTOJAUS. Sp. pop. pastelė, 42x62.webp",
    thumb: "assets/thumbs_2018/IKI RYTOJAUS. Sp. pop. pastelė, 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS",
    src: "assets/full_2018/IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "IŠ TEN",
    src: "assets/full_2019/IŠ TEN. Popierius, pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/IŠ TEN. Popierius, pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "JAU VAKARĖJA II",
    src: "assets/full_2018/JAU VAKARĖJA II. Pop., pastelė, 35x49.webp",
    thumb: "assets/thumbs_2018/JAU VAKARĖJA II. Pop., pastelė, 35x49.webp",
    year: 2018,
    description: "Popierius, pastelė 35x49 cm",
    available: false
    },
    {
    title: "JAU VAKARĖJA",
    src: "assets/full_2018/JAU VAKARĖJA. Pop., pastelė,35x50.webp",
    thumb: "assets/thumbs_2018/JAU VAKARĖJA. Pop., pastelė,35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "JŪRA PASIPUOŠĖ RUDENIU",
    src: "assets/full_2018/JŪRA PASIPUOŠĖ RUDENIU 62X42 NEBETURIU.webp",
    thumb: "assets/thumbs_2018/JŪRA PASIPUOŠĖ RUDENIU 62X42 NEBETURIU.webp",
    year: 2018,
    description: "Popierius, pastelė 62X42 cm",
    available: false
    },
    {
    title: "JŪRA VĖLYVĄ PAVASARĮ",
    src: "assets/full_2019/JŪRA VĖLYVĄ PAVASARĮ. Pop., pastelė. 42x62 cm.webp",
    thumb: "assets/thumbs_2019/JŪRA VĖLYVĄ PAVASARĮ. Pop., pastelė. 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "KAARRR",
    src: "assets/full_2018/KAARRR 35x50.webp",
    thumb: "assets/thumbs_2018/KAARRR 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "KAPRIZINGOJI",
    src: "assets/full_2018/KAPRIZINGOJI. Sp. pop., pastelė, 42x62cm.webp",
    thumb: "assets/thumbs_2018/KAPRIZINGOJI. Sp. pop., pastelė, 42x62cm.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "KARKLAI",
    src: "assets/full_2019/KARKLAI. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    thumb: "assets/thumbs_2019/KARKLAI. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "KASDIEN KITOKIA",
    src: "assets/full_2019/KASDIEN KITOKIA. Popierius, pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/KASDIEN KITOKIA. Popierius, pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "KITAS ŽIEMOS VAKARAS",
    src: "assets/full_2018/KITAS ŽIEMOS VAKARAS. Pop., pastelė, 36X47.webp",
    thumb: "assets/thumbs_2018/KITAS ŽIEMOS VAKARAS. Pop., pastelė, 36X47.webp",
    year: 2018,
    description: "Popierius, pastelė 36X47 cm",
    available: false
    },
    {
    title: "KUNKULIUOJANTI",
    src: "assets/full_2019/KUNKULIUOJANTI. Pop., pastelė,42x62 cm.webp",
    thumb: "assets/thumbs_2019/KUNKULIUOJANTI. Pop., pastelė,42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "KVEPIA PAVASARIU",
    src: "assets/full_2019/KVEPIA PAVASARIU. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/KVEPIA PAVASARIU. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "LIŪDNA VARNA LAUKIA PAVASARIO",
    src: "assets/full_2018/Liūdna varna laukia pavasario 35x50.webp",
    thumb: "assets/thumbs_2018/Liūdna varna laukia pavasario 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "LUBINAI",
    src: "assets/full_2018/LUBINAI. Popierius, pastelė, 34x49cm.webp",
    thumb: "assets/thumbs_2018/LUBINAI. Popierius, pastelė, 34x49cm.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false
    },
    {
    title: "PAJŪRIO VĖJŲ LENKIAMI",
    src: "assets/full_2018/PAJŪRIO VĖJŲ LENKIAMI. Popierius, pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/PAJŪRIO VĖJŲ LENKIAMI. Popierius, pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "PAKRANTĖ TIES KARKLE",
    src: "assets/full_2018/PAKRANTĖ TIES KARKLE. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/PAKRANTĖ TIES KARKLE. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "PAKRANTĖ",
    src: "assets/full_2018/PAKRANTĖ. Pop., pastelė, 39x73.webp",
    thumb: "assets/thumbs_2018/PAKRANTĖ. Pop., pastelė, 39x73.webp",
    year: 2018,
    description: "Popierius, pastelė 39x73 cm",
    available: false
    },
    {
    title: "PALIKO PĖDSAKUS AR PRIPĖDAVO",
    src: "assets/full_2019/PALIKO PĖDSAKUS AR PRIPĖDAVO 62x42.webp",
    thumb: "assets/thumbs_2019/PALIKO PĖDSAKUS AR PRIPĖDAVO 62x42.webp",
    year: 2019,
    description: "Popierius, pastelė 62x42 cm",
    available: false
    },
    {
    title: "PASKUTINĖ ŽIEMOS DIENA",
    src: "assets/full_2018/PASKUTINĖ ŽIEMOS DIENA. Pop., pastelė, 35X50.webp",
    thumb: "assets/thumbs_2018/PASKUTINĖ ŽIEMOS DIENA. Pop., pastelė, 35X50.webp",
    year: 2018,
    description: "Popierius, pastelė 35X50 cm",
    available: false
    },
    {
    title: "PAVASARIO LAUKIANČIOS",
    src: "assets/full_2018/Pavasario laukiančios. Pop., pastelė. 35x50.webp",
    thumb: "assets/thumbs_2018/Pavasario laukiančios. Pop., pastelė. 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "PEIZAŽAS",
    src: "assets/full_2018/PEIZAŽAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/PEIZAŽAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "PRISNIGO",
    src: "assets/full_2019/PRISNIGO. Pop., pastelė, 41,5x62cm.webp",
    thumb: "assets/thumbs_2019/PRISNIGO. Pop., pastelė, 41,5x62cm.webp",
    year: 2018,
    description: "Popierius, pastelė 41,5x62 cm",
    available: false
    },
    {
    title: "PURSLAI",
    src: "assets/full_2019/PURSLAI. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/PURSLAI. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "PUTOJANTI BALTIJA",
    src: "assets/full_2018/PUTOJANTI BALTIJA. Sp. pop.,pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2018/PUTOJANTI BALTIJA. Sp. pop.,pastelė, 42x62 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "RAMUS ŽIEMOS VAKARAS",
    src: "assets/full_2019/RAMUS ŽIEMOS VAKARAS. Pop., pastelė, 62X42.webp",
    thumb: "assets/thumbs_2019/RAMUS ŽIEMOS VAKARAS. Pop., pastelė, 62X42.webp",
    year: 2019,
    description: "Popierius, pastelė 62X42 cm",
    available: false
    },
    {
    title: "RAMYBĖ",
    src: "assets/full_2019/RAMYBĖ. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/RAMYBĖ. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "RIKIS",
    src: "assets/full_2018/RIKIS nebeturiu.webp",
    thumb: "assets/thumbs_2018/RIKIS nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė",
    available: false
    },
    {
    title: "ROMANTIŠKAS",
    src: "assets/full_2018/ROMANTIŠKAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ROMANTIŠKAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "",
    src: "assets/full_2018/RUDENINĖ PILKUMA. Pop., pastelė, 62x42.webp",
    thumb: "assets/thumbs_2018/RUDENINĖ PILKUMA. Pop., pastelė, 62x42.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false
    },
    {
    title: "",
    src: "assets/full_2018/RYTO SKAIDRUMAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/RYTO SKAIDRUMAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "RUDENINĖ PILKUMA",
    src: "assets/full_2018/ŠALČIO ETIUDAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ŠALČIO ETIUDAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "SALDUMYNŲ MĖGĖJAMS",
    src: "assets/full_2018/Saldumynų mėgėjams. Pop., pastelė, 31x50cm nebeturiu.webp",
    thumb: "assets/thumbs_2018/Saldumynų mėgėjams. Pop., pastelė, 31x50cm nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 31x50cm cm",
    available: false
    },
    {
    title: "",
    src: "assets/2019/SENAM SODE. Pop., pastelė, 42x62cm.webp",
    thumb: "assets/thumbs_2019/SENAM SODE. Pop., pastelė, 42x62cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62cm cm",
    available: false
    },
    {
    title: "SENAS TAKAS",
    src: "assets/full_2019/SENAS TAKAS. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    thumb: "assets/thumbs_2019/SENAS TAKAS. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "SKRYDIS VIRŠ BANGŲ",
    src: "assets/full_2019/SKRYDIS VIRŠ BANGŲ. Popierius, pastelė, 62x42 cm nebeturiu.webp",
    thumb: "assets/thumbs_2019/SKRYDIS VIRŠ BANGŲ. Popierius, pastelė, 62x42 cm nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 62x42 cm",
    available: false
    },
    {
    title: "SKRYDIS VIRŠ ŽALIŲ BANGŲ",
    src: "assets/full_2019/SKRYDIS VIRŠ ŽALIŲ BANGŲ. Pop., pastelė, 42x62 cm nebeturiu.webp",
    thumb: "assets/thumbs_2019/SKRYDIS VIRŠ ŽALIŲ BANGŲ. Pop., pastelė, 42x62 cm nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "SKRYDIS",
    src: "assets/full_2018/SKRYDIS. Pop., pastelė, 40x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/SKRYDIS. Pop., pastelė, 40x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 40x50 cm",
    available: false
    },
    {
    title: "SPALVOTA PILKUMA",
    src: "assets/full_2019/SPALVOTA PILKUMA. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/SPALVOTA PILKUMA. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "SUTEMOS",
    src: "assets/full_2018/SUTEMOS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/SUTEMOS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "ŠVIESA",
    src: "assets/full_2018/ŠVIESA. Pop., pastelė, 36x47 Nebeturiu.webp",
    thumb: "assets/thumbs_2018/ŠVIESA. Pop., pastelė, 36x47 Nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 36x47 cm",
    available: false
    },
    {
    title: "TAMSŪS DEBESIAI",
    src: "assets/full_2018/Tamsūs debesiai. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2018/Tamsūs debesiai. Pop., pastelė, 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "TIK TAKĄ PER KOPAS, MALDAUJU, PALIK",
    src: "assets/full_2018/TIK TAKĄ PER KOPAS, MALDAUJU, PALIK (In memoriam Kazimierui). Popierius, pastelė, 36x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/TIK TAKĄ PER KOPAS, MALDAUJU, PALIK (In memoriam Kazimierui). Popierius, pastelė, 36x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 36x50 cm",
    available: false
    },
    {
    title: "TOBULAS VAKARAS",
    src: "assets/full_2018/TOBULAS VAKARAS.Popierius, pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/TOBULAS VAKARAS.Popierius, pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "TOKIA GRAŽI PILKA DIENA",
    src: "assets/full_2019/TOKIA GRAŽI PILKA DIENA (buvo). Popierius, pastelė 42x62.webp",
    thumb: "assets/thumbs_2019/TOKIA GRAŽI PILKA DIENA (buvo). Popierius, pastelė 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "TYLUMA RAMUMA",
    src: "assets/full_2018/TYLUMA RAMUMA. Popierius, pastelė, 62x42 cm.webp",
    thumb: "assets/thumbs_2018/TYLUMA RAMUMA. Popierius, pastelė, 62x42 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false
    },
    {
    title: "ŪKANOS",
    src: "assets/full_2019/ŪKANOS. Pop., pastelė, 40x60 nebeturiu.webp",
    thumb: "assets/thumbs_2019/ŪKANOS. Pop., pastelė, 40x60 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 40x60 cm",
    available: false
    },
    {
    title: "VAKARO JUDĖJIMAS",
    src: "assets/full_2019/VAKARO JUDĖJIMAS (.Evening movement). Pastelė, popierius, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/VAKARO JUDĖJIMAS (.Evening movement). Pastelė, popierius, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "VAKARO ŠVELNUMAS",
    src: "assets/full_2018/VAKARO ŠVELNUMAS 42x62.webp",
    thumb: "assets/thumbs_2018/VAKARO ŠVELNUMAS 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "VASARIO SAULĖ",
    src: "assets/full_2018/VASARIO SAULĖ. Pop., pastelė, 50x35.webp",
    thumb: "assets/thumbs_2018/VASARIO SAULĖ. Pop., pastelė, 50x35.webp",
    year: 2018,
    description: "Popierius, pastelė 50x35 cm",
    available: false
    },
    {
    title: "VASARIŠKAI GAIVI BANGA",
    src: "assets/full_2018/Vasariškai gaivi banga 35x57.webp",
    thumb: "assets/thumbs_2018/Vasariškai gaivi banga 35x57.webp",
    year: 2018,
    description: "Popierius, pastelė 35x57 cm",
    available: false
    },
    {
    title: "VASAROS BANGOS",
    src: "assets/full_2018/VASAROS BANGOS. Pop., pastelė, 35x57.webp",
    thumb: "assets/thumbs_2018/VASAROS BANGOS. Pop., pastelė, 35x57.webp",
    year: 2018,
    description: "Popierius, pastelė 35x57 cm",
    available: false
    },
    {
    title: "VILTIES SPINDULYS",
    src: "assets/full_2018/VILTIES SPINDULYS 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2018/VILTIES SPINDULYS 42x62 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "ŽIEMIŠKAI PASIPUOŠĘ",
    src: "assets/full_2018/ŽIEMIŠKAI PASIPUOŠĘ. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ŽIEMIŠKAI PASIPUOŠĘ. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false
    },
    {
    title: "ALYVŲ ŽYDĖJIMO METAS",
    src: "assets/full_2020/ALYVŲ ŽYDĖJIMO METAS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/ALYVŲ ŽYDĖJIMO METAS. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "ATSIGRĘŽIAU Į TAVE",
    src: "assets/full_2020/Atsigręžiau į tave. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Atsigręžiau į tave. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false
    },
    {
    title: "ATSISUKTI Į SAULĘ",
    src: "assets/full_2020/ATSISUKTI Į SAULĘ. Pop., sausa pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/ATSISUKTI Į SAULĘ. Pop., sausa pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "BALANDIS JAU... AR PASTEBĖJAI?",
    src: "assets/full_2020/Balandis jau... ar pastebėjai Sp. pop.,pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Balandis jau... ar pastebėjai Sp. pop.,pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false
    },
    {
    title: "BIJŪNAI DAR NENUVYTO",
    src: "assets/full_2020/Bijūnai dar nenuvyto. Pop., pastelė,42×62.webp",
    thumb: "assets/thumbs_2020/Bijūnai dar nenuvyto. Pop., pastelė,42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false
    },
    {
    title: "BITKRĖSLĖS BALTOJE VAZOJE",
    src: "assets/full_2020/BITKRĖSLĖS BALTOJE VAZOJE, Pop., pastelė, 49x32.webp",
    thumb: "assets/thumbs_2020/BITKRĖSLĖS BALTOJE VAZOJE, Pop., pastelė, 49x32.webp",
    year: 2020,
    description: "Popierius, pastelė 49x32 cm",
    available: false
    },
    {
    title: "DAR VIENAS TAKAS, KVIEČIANTIS PRIE JŪROS",
    src: "assets/full_2020/Dar vienas takas, kviečiantis prie jūros. Pop., sausa pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/Dar vienas takas, kviečiantis prie jūros. Pop., sausa pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "GALINGAS",
    src: "assets/full_2020/Galingas. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Galingas. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false
    },
    {
    title: "HORTENZIJA",
    src: "assets/full_2020/HORTENZIJA. Pop., pastelė, 57x42.webp",
    thumb: "assets/thumbs_2020/HORTENZIJA. Pop., pastelė, 57x42.webp",
    year: 2020,
    description: "Popierius, pastelė 57x42 cm",
    available: false
    },
    {
    title: "JIEMS ŽMONIŲ PROBLEMOS NERŪPI",
    src: "assets/full_2020/Jiems žmonių problemos nerūpi. Pop.,pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Jiems žmonių problemos nerūpi. Pop.,pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false
    },
    {
    title: "KIAULPIENĖS ŽYDI GAUSIAI",
    src: "assets/full_2020/Kiaulpienės žydi gausiai, Sp. pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/Kiaulpienės žydi gausiai, Sp. pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "NAMAI KVEPIA IEVOMIS",
    src: "assets/full_2020/Namai kvepia ievomis. Pop., pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Namai kvepia ievomis. Pop., pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false
    },
    {
    title: "NIEKADA NEPAILSTANTI",
    src: "assets/full_2020/Niekada nepailstanti. Pop., pastelė 42×62.webp",
    thumb: "assets/thumbs_2020/Niekada nepailstanti. Pop., pastelė 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false
    },
    {
    title: "OBELIS PASIPUOŠĖ",
    src: "assets/full_2020/OBELIS PASIPUOŠĖ. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/OBELIS PASIPUOŠĖ. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "PASIKALBĖJIMAS",
    src: "assets/full_2020/Pasikalbėjimas. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Pasikalbėjimas. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false
    },
    {
    title: "RAUSVUMAS",
    src: "assets/full_2020/Rausvumas. Pop., pastelė,42×62.webp",
    thumb: "assets/thumbs_2020/Rausvumas. Pop., pastelė,42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false
    },
    {
    title: "SAULĖTAS PUŠYNAS",
    src: "assets/full_2020/SAULĖTAS PUŠYNAS. Sp. pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/SAULĖTAS PUŠYNAS. Sp. pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "SENTIMENTALUS",
    src: "assets/full_2020/Sentimentalus. Pop., pastelė. 62×42.webp",
    thumb: "assets/thumbs_2020/Sentimentalus. Pop., pastelė. 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false
    },
    {
    title: "TRUMPAS TAVO ŽYDĖJIMAS",
    src: "assets/full_2020/TRUMPAS TAVO ŽYDĖJIMAS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/TRUMPAS TAVO ŽYDĖJIMAS. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false
    },
    {
    title: "VAKARO SPINDULIŲ NUAUKSINTOS",
    src: "assets/full_2020/Vakaro spindulių nuauksintos. Pop.,pastelė, 62×42 Nebeturiu.webp",
    thumb: "assets/thumbs_2020/Vakaro spindulių nuauksintos. Pop.,pastelė, 62×42 Nebeturiu.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false
    },
    {
    title: "VĖL PAVASARĖJA",
    src: "assets/full_2020/Vėl pavasarėja. Pop., pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Vėl pavasarėja. Pop., pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false
    },
    {
    title: "ŽYDI VIKIAI PIEVOS PAKRAŠTY",
    src: "assets/full_2020/Žydi vikiai pievos pakrašty. Pop., sausa pastelė, 62x42 nebeturiu.webp",
    thumb: "assets/thumbs_2020/Žydi vikiai pievos pakrašty. Pop., sausa pastelė, 62x42 nebeturiu.webp",
    year: 2020,
    description: "Popierius, pastelė 62x42 cm",
    available: false
    },
    {
    title: "",
    src: "",
    thumb: "",
    year: 2020,
    description: "Popierius, pastelė x cm",
    available: false
    },

];


