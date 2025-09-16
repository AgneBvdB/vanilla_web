const paintings = [
    {
    title: "AGUONĖLĖ",
    src: "2016_WebP/AGUONĖLĖ. Pop., pastelė, 42x58 false.webp",
    thumb: "2016_WebP/thumbs_2016/AGUONĖLĖ. Pop., pastelė, 42x58 false.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 42x58 cm",
    available: false,
    id: "p1",
    theme: "flora"
},
    {
    title: "AGUONĖLĖS",
    src: "2016_WebP/Aguonėlės. Pop., pastelė, 45x58 false.webp",
    thumb: "2016_WebP/thumbs_2016/Aguonėlės. Pop., pastelė, 45x58 false.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 45x58 cm",
    available: false,
    id: "p2",
    theme: "flora"
},
    {
    title: "AGUONOS TAU",
    src: "2016_WebP/AGUONOS TAU. Pop., pastelė, 45x58.webp",
    thumb: "2016_WebP/thumbs_2016/AGUONOS TAU. Pop., pastelė, 45x58.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 45x58 cm",
    available: false,
    id: "p3",
    theme: "flora"
},
    {
    title: "ALYVOS",
    src: "2016_WebP/Alyvos. Pop., pastelė 46x61 true.webp",
    thumb: "2016_WebP/thumbs_2016/Alyvos. Pop., pastelė 46x61 true.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 46x61 cm",
    available: false,
    id: "p4",
    theme: "flora"
},
    {
    title: "BERŽŲ AUKSAS",
    src: "2016_WebP/BERŽŲ AUKSAS. Pop., pastelė, 64x46.webp",
    thumb: "2016_WebP/thumbs_2016/BERŽŲ AUKSAS. Pop., pastelė, 64x46.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 64x46 cm",
    available: false,
    id: "p5",
    theme: "forrest"
},
    {
    title: "IEVOS II",
    src: "2016_WebP/IEVOS II,pop., pastelė, 36x50.webp",
    thumb: "2016_WebP/thumbs_2016/IEVOS II,pop., pastelė, 36x50.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 36x50 cm",
    available: true,
    id: "p6",
    theme: "flora"
},
    {
    title: "IEVOS",
    src: "2016_WebP/IEVOS. pop., pastelė, 44x50 true.webp",
    thumb: "2016_WebP/thumbs_2016/IEVOS. pop., pastelė, 44x50 true.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 44x50 cm",
    available: false,
    id: "p7",
    theme: "flora"
},
    {
    title: "AUDRONĖS ŠALAVIJAI",
    src: "2016_WebP/Iš Audronės gėlynų.Šalavijai. Pop., pastelė, 36x50 true.webp",
    thumb: "2016_WebP/thumbs_2016/Iš Audronės gėlynų.Šalavijai. Pop., pastelė, 36x50 true.webp",
    year: 2016,
    description: "Popierius, pastelė 36x50 cm",
    available: true,
    id: "p8",
    theme: "flora"
},
    {
    title: "KIAULPIENĖS",
    src: "2016_WebP/KIAULPIENĖS, pop., pastelė 50x37 true.webp",
    thumb: "2016_WebP/thumbs_2016/KIAULPIENĖS, pop., pastelė 50x37 true.webp",
    year: 2016,
    description: "Popierius, pastelė 50x37 cm",
    available: false,
    id: "p9",
    theme: "flora"
},
    {
    title: "KLEVAI",
    src: "2016_WebP/Klevai. Pop., pastelė, 46x66 false.webp",
    thumb: "2016_WebP/thumbs_2016/Klevai. Pop., pastelė, 46x66 false.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: false,
    id: "p10",
    theme: "forrest"
},
    {
    title: "MĖLYNOS PUŠYS",
    src: "2016_WebP/Mėlynos pušys. Pop., pastelė 42X55-false.webp",
    thumb: "2016_WebP/thumbs_2016/Mėlynos pušys. Pop., pastelė 42X55-false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x55 cm",
    available: false,
    id: "p11",
    theme: "dunes"
},
    {
    title: "PAVASARIS KOPOSE",
    src: "2016_WebP/PAVASARIS KOPOSE, pop., pastelė, 42X62-false.webp",
    thumb: "2016_WebP/thumbs_2016/PAVASARIS KOPOSE, pop., pastelė, 42X62-false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p12",
    theme: "dunes"
},
    {
    title: "PO DU",
    src: "2016_WebP/PO DU. pop., akvarelė 45x60-false.webp",
    thumb: "2016_WebP/thumbs_2016/PO DU. pop., akvarelė 45x60-false.webp",
    year: 2016,
    description: "Popierius, akvarelė 45x60 cm",
    available: true,
    id: "p13",
    theme: "forrest"
},
    {
    title: "RAMUNĖS II",
    src: "2016_WebP/RAMUNĖS II. Pastelė false.webp",
    thumb: "2016_WebP/thumbs_2016/RAMUNĖS II. Pastelė false.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false,
    id: "p14",
    theme: "flora"
},
    {
    title: "RAMUNĖS",
    src: "2016_WebP/RAMUNĖS, kartonas, pastelė,45x58 cm false.webp",
    thumb: "2016_WebP/thumbs_2016/RAMUNĖS, kartonas, pastelė,45x58 cm false.webp",
    year: 2016,
    description: "Kartonas, pastelė 45x58 cm",
    available: false,
    id: "p15",
    theme: "flora"
},
    {
    title: "RUDENINĖ NUOTAIKA",
    src: "2016_WebP/Rudeninė nuotaika, pop., pastelė 50x38.webp",
    thumb: "2016_WebP/thumbs_2016/Rudeninė nuotaika, pop., pastelė 50x38.webp",
    year: 2016,
    description: "Popierius, pastelė 50x38 cm",
    available: false,
    id: "p16",
    theme: "forrest"
},
    {
    title: "RŪKAS SKLAIDOSI",
    src: "2016_WebP/RŪKAS SKLAIDOSI. Pop., pastelė, 42x62 false.webp",
    thumb: "2016_WebP/thumbs_2016/RŪKAS SKLAIDOSI. Pop., pastelė, 42x62 false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p17",
    theme: "flora"
},
    {
    title: "TAKAS IŠ PUŠYNO",
    src: "2016_WebP/Takas iš pušyno. Pop., pastelė.webp",
    thumb: "2016_WebP/thumbs_2016/Takas iš pušyno. Pop., pastelė.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false,
    id: "p18",
    theme: "forrest"
},
    {
    title: "TAS SALDUS ALYVŲ KVAPAS",
    src: "2016_WebP/TAS SALDUS ALYVŲ KVAPAS. Pop., pastelė, 42x62 true.webp",
    thumb: "2016_WebP/thumbs_2016/TAS SALDUS ALYVŲ KVAPAS. Pop., pastelė, 42x62 true.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p19",
    theme: "forrest"
    },
    {
    title: "TIK NENUPŪSK",
    src: "2016_WebP/TIK NENUPŪSK. Pop., pastelė, 46x61 false.webp",
    thumb: "2016_WebP/thumbs_2016/TIK NENUPŪSK. Pop., pastelė, 46x61 false.webp",
    year: 2016,
    description: "Popierius, pastelė 46x61 cm",
    available: false,
    id: "p20",
    theme: "flora"
},
    {
    title: "BE PAVADINIMO",
    src: "2016_WebP/untitled-2.webp",
    thumb: "2016_WebP/thumbs_2016/untitled-2.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false,
    id: "p21",
    theme: "dunes"
},
    {
    title: "BE PAVADINIMO",
    src: "2016_WebP/untitled.webp",
    thumb: "2016_WebP/thumbs_2016/untitled.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false,
    id: "p22",
    theme: "forrest"
},
    {
    title: "VĖJAS KOPOSE",
    src: "2016_WebP/VĖJAS KOPOSE, pop., pastelė, 46x66 true.webp",
    thumb: "2016_WebP/thumbs_2016/VĖJAS KOPOSE, pop., pastelė, 46x66 true.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: true,
    id: "p23",
    theme: "dunes"
},
    {
    title: "VIENADIENĖS",
    src: "2016_WebP/Viendienės. Pop., pastelė, 36x50 false.webp",
    thumb: "2016_WebP/thumbs_2016/Viendienės. Pop., pastelė, 36x50 false.webp",
    year: 2016,
    description: "Popierius, pastelė 36x50 cm",
    available: false,
    id: "p24",
    theme: "flora"
},
    {
    title: "VISIŠKA IMPRESIJA",
    src: "2016_WebP/Visiška impresija. Pop., pastelė, 46x66 ture.webp",
    thumb: "2016_WebP/thumbs_2016/Visiška impresija. Pop., pastelė, 46x66 ture.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: false,
    id: "p25",
    theme: "forrest"
},
    {
    title: "VYŠNIA ŽYDI",
    src: "2016_WebP/VYŠNIA ŽYDI, pop.,pastelė 42x62-true.webp",
    thumb: "2016_WebP/thumbs_2016/VYŠNIA ŽYDI, pop.,pastelė 42x62-true.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p26",
    theme: "forrest"
},
    {
    title: "VYŠNIA",
    src: "2016_WebP/VYŠNIA, pop., pastelė, 38x51 true.webp",
    thumb: "2016_WebP/thumbs_2016/VYŠNIA, pop., pastelė, 38x51 true.webp",
    year: 2016,
    description: "Popierius, pastelė 38x51 cm",
    available: false,
    id: "p27",
    theme: "forrest"
},
    {
    title: "ŽOLYNAI II",
    src: "2016_WebP/ŽOLYNAI II. Pop., pastelė, 62x44 false.webp",
    thumb: "2016_WebP/thumbs_2016/ŽOLYNAI II. Pop., pastelė, 62x44 false.webp",
    year: 2016,
    description: "Popierius, pastelė 62x44 cm",
    available: false,
    id: "p28",
    theme: "flora"
},
    {
    title: "ŽOLYNAI",
    src: "2016_WebP/ŽOLYNAI. Pop., pastelė, 62x42 true.webp",
    thumb: "2016_WebP/thumbs_2016/ŽOLYNAI. Pop., pastelė, 62x42 true.webp",
    year: 2016,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p29",
    theme: "flora"
},
    {
    title: "ŽYDINTI",
    src: "2016_WebP/ŽYDINTI, pop.,akvarelė 45X60 false.webp",
    thumb: "2016_WebP/thumbs_2016/ŽYDINTI, pop.,akvarelė 45X60 false.webp",
    year: 2016,
    description: "Popierius, akvarelė 45x60 cm",
    available: false,
    id: "p30",
    theme: "forrest"
},
    {
    title: "ČIA GERA BŪTI",
    src: "assets/full_2017/ČIA GERA BŪTI. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/ČIA GERA BŪTI. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false,
    id: "p31",
    theme: "forrest"
},
    {
    title: "GELTONA PIEVA TEN",
    src: "assets/full_2017/GELTONA PIEVA TEN. Pop., pastelė, 41x62.webp",
    thumb: "assets/thumbs_2017/GELTONA PIEVA TEN. Pop., pastelė, 41x62.webp",
    year: 2017,
    description: "Popierius, pastelė 41x62 cm",
    available: true,
    id: "p32",
    theme: "water"
},
    {
    title: "JŪRA PASIŠIAUŠĖ",
    src: "assets/full_2017/JŪRA PASIŠIAUŠĖ. Pop., pastelė 62x44 nebeturiu.webp",
    thumb: "assets/thumbs_2017/JŪRA PASIŠIAUŠĖ. Pop., pastelė 62x44 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 62x44 cm",
    available: false,
    id: "p33",
    theme: "water"
},
    {
    title: "KAIP PIEVOS DEBESYS",
    src: "assets/full_2017/Kaip pievos debesys. Pop., pastelė, 50x36.webp",
    thumb: "assets/thumbs_2017/Kaip pievos debesys. Pop., pastelė, 50x36.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: false,
    id: "p34",
    theme: "flora"
},
    {
    title: "KOPOSE",
    src: "assets/full_2017/KOPOSE. Pop., pastelė 41x59.webp",
    thumb: "assets/thumbs_2017/KOPOSE. Pop., pastelė 41x59.webp",
    year: 2017,
    description: "Popierius, pastelė 41x59 cm",
    available: false,
    id: "p35",
    theme: "dunes"
},
    {
    title: "KOSMĖJOS",
    src: "assets/full_2017/KOSMĖJOS. Pop., pastelė, 35x48 Nebeturiu.webp",
    thumb: "assets/thumbs_2017/KOSMĖJOS. Pop., pastelė, 35x48 Nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 35x48 cm",
    available: false,
    id: "p36",
    theme: "flora"
},
    {
    title: "SPALVINGAS SAULĖLYDIS",
    src: "assets/full_2017/LABAI SPALVINGAS SAULĖLYDIS, pop., pastelė 64x44.webp",
    thumb: "assets/thumbs_2017/LABAI SPALVINGAS SAULĖLYDIS, pop., pastelė 64x44.webp",
    year: 2017,
    description: "Popierius, pastelė 64x44 cm",
    available: false,
    id: "p37",
    theme: "water"
},
    {
    title: "MAGIJA",
    src: "assets/full_2017/MAGIJA. Pop., pastelė, 64x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/MAGIJA. Pop., pastelė, 64x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x36 cm",
    available: false,
    id: "p38",
    theme: "forrest"
},
    {
    title: "MIGLELĖ",
    src: "assets/full_2017/MIGLELĖ. Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2017/MIGLELĖ. Pop., pastelė, 34x49.webp",
    year: 2017,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p39",
    theme: "flora"
},
    {
    title: "MIŠKO TAKELIS",
    src: "assets/full_2017/MIŠKO TAKELIS, pop., pastelė, 50x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/MIŠKO TAKELIS, pop., pastelė, 50x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: false,
    id: "p40",
    theme: "forrest"
},
    {
    title: "NERIMAS",
    src: "assets/full_2017/NERIMAS. Pop., pastelė, 45x63.webp",
    thumb: "assets/thumbs_2017/NERIMAS. Pop., pastelė, 45x63.webp",
    year: 2017,
    description: "Popierius, pastelė 45x63 cm",
    available: true,
    id: "p41",
    theme: "water"
},
    {
    title: "NOSTALGIŠKAS",
    src: "assets/full_2017/NOSTALGIŠKAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2017/NOSTALGIŠKAS. Pop., pastelė, 35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: true,
    id: "p42",
    theme: "water"
},
    {
    title: "BIRŽELIO PIEVOS",
    src: "assets/full_2017/PABRAIDŽIOK PO BIRŽELIO PIEVAS. Pop., pastelė, 50,5x34,5.webp",
    thumb: "assets/thumbs_2017/PABRAIDŽIOK PO BIRŽELIO PIEVAS. Pop., pastelė, 50,5x34,5.webp",
    year: 2017,
    description: "Popierius, pastelė 50,5x34,5 cm",
    available: true,
    id: "p43",
    theme: "flora"
},
    {
    title: "PAPYLĖ JŪRA SIDABRO",
    src: "assets/full_2017/Papylė jūra sidabro. Popierius, pastelė, 40x61 nebeturiu.webp",
    thumb: "assets/thumbs_2017/Papylė jūra sidabro. Popierius, pastelė, 40x61 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 40x61 cm",
    available: false,
    id: "p44",
    theme: "water"
},
    {
    title: "PASIILGAU JŪROS",
    src: "assets/full_2017/Pasiilgau jūros. Pop., pastelė 63x45.webp",
    thumb: "assets/thumbs_2017/Pasiilgau jūros. Pop., pastelė 63x45.webp",
    year: 2017,
    description: "Popierius, pastelė 63x45 cm",
    available: true,
    id: "p45",
    theme: "water"
},
    {
    title: "PASKUTINIAI SPINDULIAI",
    src: "assets/full_2017/PASKUTINIAI SPINDULIAI. Pop., pastelė, 49x38 Nebeturiu.webp",
    thumb: "assets/thumbs_2017/PASKUTINIAI SPINDULIAI. Pop., pastelė, 49x38 Nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 49x38 cm",
    available: false,
    id: "p46",
    theme: "forrest"
},
    {
    title: "PAVASARĖJA",
    src: "assets/full_2017/PAVASARĖJA. Pop., pastelė, 63x43.webp",
    thumb: "assets/thumbs_2017/PAVASARĖJA. Pop., pastelė, 63x43.webp",
    year: 2017,
    description: "Popierius, pastelė 63x43 cm",
    available: true,
    id: "p47",
    theme: "dunes"
},
    {
    title: "PAŽVELK AUKŠTYN",
    src: "assets/full_2017/PAŽVELK AUKŠTYN, Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/PAŽVELK AUKŠTYN, Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: true,
    id: "p48",
    theme: "forrest"
},
    {
    title: "PRIE JŪROS RAMU",
    src: "assets/full_2017/Prie jūros ramu. Pop., pastelė 42x62.webp",
    thumb: "assets/thumbs_2017/Prie jūros ramu. Pop., pastelė 42x62.webp",
    year: 2017,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p49",
    theme: "dunes"
},
    {
    title: "PRIE JŪROS VĖJUOTA",
    src: "assets/full_2017/Prie jūros vėjuota. Pop., pastelė, 63x45.webp",
    thumb: "assets/thumbs_2017/Prie jūros vėjuota. Pop., pastelė, 63x45.webp",
    year: 2017,
    description: "Popierius, pastelė 63x45 cm",
    available: false,
    id: "p50",
    theme: "water"
},
    {
    title: "RUDENĖJA",
    src: "assets/full_2017/RUDENĖJA. Pop., pastelė, 49x39.webp",
    thumb: "assets/thumbs_2017/RUDENĖJA. Pop., pastelė, 49x39.webp",
    year: 2017,
    description: "Popierius, pastelė 49x39 cm",
    available: false,
    id: "p51",
    theme: "forrest"
},
    {
    title: "RUDENIŠKAI",
    src: "assets/full_2017/RUDENIŠKAI. Pop., pastelė, 41x61.webp",
    thumb: "assets/thumbs_2017/RUDENIŠKAI. Pop., pastelė, 41x61.webp",
    year: 2017,
    description: "Popierius, pastelė 41x61 cm",
    available: true,
    id: "p52",
    theme: "forrest"
},
    {
    title: "RUDENS EKSPRESIJA",
    src: "assets/full_2017/RUDENS EKSPRESIJA. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2017/RUDENS EKSPRESIJA. Pop., pastelė, 35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: true,
    id: "p53",
    theme: "forrest"
},
    {
    title: "RUDENS PALETĖ",
    src: "assets/full_2017/RUDENS PALETĖ. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/RUDENS PALETĖ. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: true,
    id: "p54",
    theme: "forrest"
},
    {
    title: "RYTAS",
    src: "assets/full_2017/Rytas.Pop., pastelė, 36x50.webp",
    thumb: "assets/thumbs_2017/Rytas.Pop., pastelė, 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: true,
    id: "p55",
    theme: "forrest"
},
    {
    title: "SAULĖGRĄŽA II",
    src: "assets/full_2017/SAULĖGRĄŽA II.Pop., pastelė,64x37 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SAULĖGRĄŽA II.Pop., pastelė,64x37 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x37 cm",
    available: false,
    id: "p56",
    theme: "flora"
},
    {
    title: "SAULĖGRĄŽA",
    src: "assets/full_2017/SAULĖGRĄŽA. Pop., pastelė, 64x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SAULĖGRĄŽA. Pop., pastelė, 64x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x36 cm",
    available: false,
    id: "p57",
    theme: "flora"
},
    {
    title: "SAULĖTA SPALIO DIENA",
    src: "assets/full_2017/SAULĖTA SPALIO DIENA. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/SAULĖTA SPALIO DIENA. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false,
    id: "p58",
    theme: "forrest"
},
    {
    title: "ŠERMUKŠNIAI",
    src: "assets/full_2017/ŠERMUKŠNIAI. Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2017/ŠERMUKŠNIAI. Pop., pastelė, 34x49.webp",
    year: 2017,
    description: "Popierius, pastelė 34x49 cm",
    available: true,
    id: "p59",
    theme: "flora"
},
    {
    title: "ŠILAGĖLĖS",
    src: "assets/full_2017/ŠILAGĖLĖS. Pop., pastelė, 50x35 nebeturiu.webp",
    thumb: "assets/thumbs_2017/ŠILAGĖLĖS. Pop., pastelė, 50x35 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 50x35 cm",
    available: false,
    id: "p60",
    theme: "flora"
},
    {
    title: "ŠIUGŽDESIAI",
    src: "assets/full_2017/ŠIUGŽDESIAI. Pop., pastelė, 36x50.webp",
    thumb: "assets/thumbs_2017/ŠIUGŽDESIAI. Pop., pastelė, 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: true,
    id: "p61",
    theme: "flora"
},
    {
    title: "SU BERŽELIAIS KOPOSE",
    src: "assets/full_2017/SU BERŽELIAIS KOPOSE.Pop., pastelė,49x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SU BERŽELIAIS KOPOSE.Pop., pastelė,49x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 49x36 cm",
    available: false,
    id: "p62",
    theme: "dunes"
},
    {
    title: "ŠVYTĖJIMAS",
    src: "assets/full_2017/ŠVYTĖJIMAS. Pop., pastelė 65x45.webp",
    thumb: "assets/thumbs_2017/ŠVYTĖJIMAS. Pop., pastelė 65x45.webp",
    year: 2017,
    description: "Popierius, pastelė 65x45 cm",
    available: true,
    id: "p63",
    theme: "water"
},
    {
    title: "TAKELIS",
    src: "assets/full_2017/Takelis. Pop., pastelė, 60x41.webp",
    thumb: "assets/thumbs_2017/Takelis. Pop., pastelė, 60x41.webp",
    year: 2017,
    description: "Popierius, pastelė 60x41 cm",
    available: false,
    id: "p64",
    theme: "dunes"
},
    {
    title: "TAU, MANO MAMYTE",
    src: "assets/full_2017/TAU, MANO MAMYTE. Pop., pastelė, 46x46 nebeturiu.webp",
    thumb: "assets/thumbs_2017/TAU, MANO MAMYTE. Pop., pastelė, 46x46 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 46x46 cm",
    available: false,
    id: "p232",
    theme: "flora"
},
    {
    title: "TIK AKIMIRKA",
    src: "assets/full_2017/TIK AKIMIRKA. Pop., pastelė,35x50.webp",
    thumb: "assets/thumbs_2017/TIK AKIMIRKA. Pop., pastelė,35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p65",
    theme: "forrest"
},
    {
    title: "UPELIŪKŠTIS",
    src: "assets/full_2017/UPELIŪKŠTIS. Pop., pastelė,61x44.webp",
    thumb: "assets/thumbs_2017/UPELIŪKŠTIS. Pop., pastelė,61x44.webp",
    year: 2017,
    description: "Popierius, pastelė 61x44 cm",
    available: false,
    id: "p66",
    theme: "water"
},
    {
    title: "VAKARO KARAMELĖ",
    src: "assets/full_2017/VAKARO KARAMELĖ. Pop., pastelė,44x63.webp",
    thumb: "assets/thumbs_2017/VAKARO KARAMELĖ. Pop., pastelė,44x63.webp",
    year: 2017,
    description: "Popierius, pastelė 44x63 cm",
    available: true,
    id: "p67",
    theme: "water"
},
    {
    title: "ŽALIA BANGA",
    src: "assets/full_2017/Žalia banga. Pop., pastelė, 64x45.webp",
    thumb: "assets/thumbs_2017/Žalia banga. Pop., pastelė, 64x45.webp",
    year: 2017,
    description: "Popierius, pastelė 64x45 cm",
    available: true,
    id: "p68",
    theme: "water"
},
    {
    title: "ŽALIAI ŽALIAI",
    src: "assets/full_2017/ŽALIAI ŽALIAI. Pop., pastelė, 50x36.webp",
    thumb: "assets/thumbs_2017/ŽALIAI ŽALIAI. Pop., pastelė, 50x36.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: true,
    id: "p69",
    theme: "flora"
},
    {
    title: "ŽIBUOKLĖS",
    src: "assets/full_2017/žIBUOKLĖS. Pop., pastelė, 46x46 nebeturiu.webp",
    thumb: "assets/thumbs_2017/žIBUOKLĖS. Pop., pastelė, 46x46 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 46x46 cm",
    available: false,
    id: "p70",
    theme: "flora"
},
    {
    title: "ŽYDI",
    src: "assets/full_2017/ŽYDI. Pop., pastelė. 36x50.webp",
    thumb: "assets/thumbs_2017/ŽYDI. Pop., pastelė. 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: true,
    id: "p71",
    theme: "flora"
},
    {
    title: "ŽYDROS PIEVŲ AKYS",
    src: "assets/full_2017/ŽYDROS PIEVŲ AKYS. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2017/ŽYDROS PIEVŲ AKYS. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p72",
    theme: "flora"
},
    {
    title: "AKMENYS AMŽINAI",
    src: "assets/full_2018/AKMENYS AMŽINAI. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/AKMENYS AMŽINAI. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p73",
    theme: "water"
},
        {
    title: "ANT SKARDŽIO",
    src: "assets/full_2018/ANT SKARDŽIO. Popierius, pastelė, 50x35 nebeturiu.webp",
    thumb: "assets/thumbs_2018/ANT SKARDŽIO. Popierius, pastelė, 50x35 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 50x35 cm",
    available: false,
    id: "p74",
    theme: "dunes"
},
        {
    title: "APSIPYLĖ ŽIEDAIS",
    src: "assets/full_2019/APSIPYLĖ ŽIEDAIS. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/APSIPYLĖ ŽIEDAIS. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p75",
    theme: "flora"
},
        {
    title: "APSNIGTOS",
    src: "assets/full_2019/APSNIGTOS. Pop., pastelė, 40x60 nebeturiu.webp",
    thumb: "assets/thumbs_2019/APSNIGTOS. Pop., pastelė, 40x60 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 40x60 cm",
    available: false,
    id: "p76",
    theme: "forrest"
},
        {
    title: "AR JAUTI? AR GIRDI? AR UŽUODI?",
    src: "assets/full_2019/AR JAUTI AR GIRDI AR UŽUODI Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/AR JAUTI AR GIRDI AR UŽUODI Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p77",
    theme: "water"
},
        {
    title: "ATEIS IR PAVASARIS...",
    src: "assets/full_2018/Ateis ir pavasaris... KAdanoRs. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/Ateis ir pavasaris... KAdanoRs. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: true,
    id: "p78",
    theme: "other"
},
        {
    title: "ATSISPINDINTYS",
    src: "assets/full_2018/ATSISPINDINTYS. Pop., pastelė, 44x64 cm.webp",
    thumb: "assets/thumbs_2018/ATSISPINDINTYS. Pop., pastelė, 44x64 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 44x64 cm",
    available: true,
    id: "p79",
    theme: "water"
},
        {
    title: "AUDRA ARTINASI",
    src: "assets/full_2018/AUDRA ARTINASI. Popierius, pastelė, 61X42 nebeturiu.webp",
    thumb: "assets/thumbs_2018/AUDRA ARTINASI. Popierius, pastelė, 61X42 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 61x42 cm",
    available: false,
    id: "p80",
    theme: "water"
},
    {
    title: "BALTAS ŽYDĖJIMAS",
    src: "assets/full_2018/BALTAS ŽYDĖJIMAS. Pop., pastelė,34x49.webp",
    thumb: "assets/thumbs_2018/BALTAS ŽYDĖJIMAS. Pop., pastelė,34x49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p81",
    theme: "flora"
},
    {
    title: "BANGOS II",
    src: "assets/full_2018/BANGOS II. Pop., pastelė, 35x50 cm nebeturiu.webp",
    thumb: "assets/thumbs_2018/BANGOS II. Pop., pastelė, 35x50 cm nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p82",
    theme: "water"
},
    {
    title: "BANGOS PRAUSIA AKMENIS",
    src: "assets/full_2018/BANGOS PRAUSIA AKMENIS. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/BANGOS PRAUSIA AKMENIS. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p83",
    theme: "water"
},
    {
    title: "BANGOS",
    src: "assets/full_2018/BANGOS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/BANGOS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p84",
    theme: "water"
},
    {
    title: "BANGUOJA BALTIJA",
    src: "assets/full_2018/Banguoja Baltija. Pop., pastelė, 40x50.webp",
    thumb: "assets/thumbs_2018/Banguoja Baltija. Pop., pastelė, 40x50.webp",
    year: 2018,
    description: "Popierius, pastelė 40x50 cm",
    available: false,
    id: "p85",
    theme: "water"
},
    {
    title: "BUS RAUDONI VAKARAI",
    src: "assets/full_2019/BUS RAUDONI VAKARAI. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/BUS RAUDONI VAKARAI. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p86",
    theme: "dunes"
},
    {
    title: "DAR VIS ŽIEMA",
    src: "assets/full_2019/DAR VIS ŽIEMA. Pop., pastelė, 42X62 nebeturiu.webp",
    thumb: "assets/thumbs_2019/DAR VIS ŽIEMA. Pop., pastelė, 42X62 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p87",
    theme: "forrest"
},
    {
    title: "DAUG YRA AKMENŲ PRIE JŪROS",
    src: "assets/full_2018/DAUG YRA AKMENŲ PRIE JŪROS. past. pop 44x64 nebeturiu.webp",
    thumb: "assets/thumbs_2018/DAUG YRA AKMENŲ PRIE JŪROS. past. pop 44x64 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 44x64 cm",
    available: false,
    id: "p88",
    theme: "water"
},
    {
    title: "DEBESYS NUSILEIDO ANT ŽEMĖS",
    src: "assets/full_2018/DEBESYS NUSILEIDO ANT ŽEMĖS. Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/DEBESYS NUSILEIDO ANT ŽEMĖS. Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p89",
    theme: "flora"
},
    {
    title: "DIDINGOJI",
    src: "assets/full_2019/DIDINGOJI. Pop., pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2019/DIDINGOJI. Pop., pastelė, 42x62 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p90",
    theme: "water"
},
    {
    title: "DIENA",
    src: "assets/full_2018/DIENA . Pop., pastelė. 62x42.webp",
    thumb: "assets/thumbs_2018/DIENA . Pop., pastelė. 62x42.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: true,
    id: "p91",
    theme: "water"
},
    {
    title: "DVI STICHIJOS",
    src: "assets/full_2019/DVI STICHIJOS 42x62.webp",
    thumb: "assets/thumbs_2019/DVI STICHIJOS 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p92",
    theme: "water"
},
    {
    title: "EIME PRIE JŪROS",
    src: "assets/full_2019/EIME PRIE JŪROS. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/EIME PRIE JŪROS. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p93",
    theme: "dunes"
},
    {
    title: "GELSVAS PAPRASTUMAS",
    src: "assets/full_2018/GELSVAS PAPRASTUMAS Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/GELSVAS PAPRASTUMAS Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p94",
    theme: "flora"
},
    {
    title: "GELTONŲ TULPIŲ DIENA",
    src: "assets/full_2018/GELTONŲ TULPIŲ DIENA. Pop., pastelė, 31x50 Nebeturiu.webp",
    thumb: "assets/thumbs_2018/GELTONŲ TULPIŲ DIENA. Pop., pastelė, 31x50 Nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 31x50 cm",
    available: false,
    id: "p95",
    theme: "flora"
},
    {
    title: "GERA BŪTI",
    src: "assets/full_2019/Gera būti. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/Gera būti. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p96",
    theme: "water"
},
    {
    title: "GUBOJOS KOPOSE",
    src: "assets/full_2018/GUBOJOS KOPOSE, Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2018/GUBOJOS KOPOSE, Pop., pastelė, 34x49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p97",
    theme: "dunes"
},
    {
    title: "GUBOJOS PALEI TAKĄ",
    src: "assets/full_2018/GUBOJOS PALEI TAKĄ. Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/GUBOJOS PALEI TAKĄ. Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p98",
    theme: "dunes"
},
    {
    title: "IEŠKANTI",
    src: "assets/full_2018/IEŠKANTI. Gal pavasario Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/IEŠKANTI. Gal pavasario Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p99",
    theme: "other"
},
    {
    title: "IKI RYTOJAUS",
    src: "assets/full_2018/IKI_RYTOJAUS-pop-pastel-42x62.webp",
    thumb: "assets/thumbs_2018/IKI RYTOJAUS. Sp. pop. pastelė, 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p100",
    theme: "water"
},
    {
    title: "IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS",
    src: "assets/full_2018/IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p101",
    theme: "water"
},
    {
    title: "IŠ TEN",
    src: "assets/full_2019/IŠ TEN. Popierius, pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/IŠ TEN. Popierius, pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p102",
    theme: "water"
},
    {
    title: "JAU VAKARĖJA II",
    src: "assets/full_2018/JAU VAKARĖJA II. Pop., pastelė, 35x49.webp",
    thumb: "assets/thumbs_2018/JAU VAKARĖJA II. Pop., pastelė, 35x49.webp",
    year: 2018,
    description: "Popierius, pastelė 35x49 cm",
    available: false,
    id: "p103",
    theme: "dunes"
},
    {
    title: "JAU VAKARĖJA",
    src: "assets/full_2018/JAU VAKARĖJA. Pop., pastelė,35x50.webp",
    thumb: "assets/thumbs_2018/JAU VAKARĖJA. Pop., pastelė,35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p104",
    theme: "dunes"
},
    {
    title: "JŪRA PASIPUOŠĖ RUDENIU",
    src: "assets/full_2018/JŪRA PASIPUOŠĖ RUDENIU 62X42 NEBETURIU.webp",
    thumb: "assets/thumbs_2018/JŪRA PASIPUOŠĖ RUDENIU 62X42 NEBETURIU.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: true,
    id: "p105",
    theme: "water"
},
    {
    title: "JŪRA VĖLYVĄ PAVASARĮ",
    src: "assets/full_2019/JŪRA VĖLYVĄ PAVASARĮ. Pop., pastelė. 42x62 cm.webp",
    thumb: "assets/thumbs_2019/JŪRA VĖLYVĄ PAVASARĮ. Pop., pastelė. 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p106",
    theme: "water"
},
    {
    title: "KAARRR",
    src: "assets/full_2018/KAARRR 35x50.webp",
    thumb: "assets/thumbs_2018/KAARRR 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: true,
    id: "p107",
    theme: "other"
},
    {
    title: "KAPRIZINGOJI",
    src: "assets/full_2018/KAPRIZINGOJI. Sp. pop., pastelė, 42x62cm.webp",
    thumb: "assets/thumbs_2018/KAPRIZINGOJI. Sp. pop., pastelė, 42x62cm.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p108",
    theme: "water"
},
    {
    title: "KARKLAI",
    src: "assets/full_2019/KARKLAI. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    thumb: "assets/thumbs_2019/KARKLAI. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p109",
    theme: "dunes"
},
    {
    title: "KASDIEN KITOKIA",
    src: "assets/full_2019/KASDIEN KITOKIA. Popierius, pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/KASDIEN KITOKIA. Popierius, pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p110",
    theme: "water"
},
    {
    title: "KITAS ŽIEMOS VAKARAS",
    src: "assets/full_2018/KITAS ŽIEMOS VAKARAS. Pop., pastelė, 36X47.webp",
    thumb: "assets/thumbs_2018/KITAS ŽIEMOS VAKARAS. Pop., pastelė, 36X47.webp",
    year: 2018,
    description: "Popierius, pastelė 36x47 cm",
    available: true,
    id: "p111",
    theme: "forrest"
},
    {
    title: "KUNKULIUOJANTI",
    src: "assets/full_2019/KUNKULIUOJANTI. Pop., pastelė,42x62 cm.webp",
    thumb: "assets/thumbs_2019/KUNKULIUOJANTI. Pop., pastelė,42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p112",
    theme: "water"
},
    {
    title: "KVEPIA PAVASARIU",
    src: "assets/full_2019/KVEPIA PAVASARIU. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/KVEPIA PAVASARIU. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p113",
    theme: "dunes"
},
    {
    title: "LIŪDNA VARNA LAUKIA PAVASARIO",
    src: "assets/full_2018/Liūdna varna laukia pavasario 35x50.webp",
    thumb: "assets/thumbs_2018/Liūdna varna laukia pavasario 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: true,
    id: "p114",
    theme: "other"
},
    {
    title: "LUBINAI",
    src: "assets/full_2018/LUBINAI. Popierius, pastelė, 34x49cm.webp",
    thumb: "assets/thumbs_2018/LUBINAI. Popierius, pastelė, 34x49cm.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: true,
    id: "p115",
    theme: "flora"
},
    {
    title: "PAJŪRIO VĖJŲ LENKIAMI",
    src: "assets/full_2018/PAJŪRIO VĖJŲ LENKIAMI. Popierius, pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/PAJŪRIO VĖJŲ LENKIAMI. Popierius, pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p116",
    theme: "forrest"
},
    {
    title: "PAKRANTĖ TIES KARKLE",
    src: "assets/full_2018/PAKRANTĖ TIES KARKLE. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/PAKRANTĖ TIES KARKLE. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p117",
    theme: "water"
},
    {
    title: "PAKRANTĖ",
    src: "assets/full_2018/PAKRANTĖ. Pop., pastelė, 39x73.webp",
    thumb: "assets/thumbs_2018/PAKRANTĖ. Pop., pastelė, 39x73.webp",
    year: 2018,
    description: "Popierius, pastelė 39x73 cm",
    available: true,
    id: "p118",
    theme: "water"
},
    {
    title: "PALIKO PĖDSAKUS AR PRIPĖDAVO",
    src: "assets/full_2019/PALIKO PĖDSAKUS AR PRIPĖDAVO 62x42.webp",
    thumb: "assets/thumbs_2019/PALIKO PĖDSAKUS AR PRIPĖDAVO 62x42.webp",
    year: 2019,
    description: "Popierius, pastelė 62x42 cm",
    available: true,
    id: "p119",
    theme: "water"
},
    {
    title: "PASKUTINĖ ŽIEMOS DIENA",
    src: "assets/full_2018/PASKUTINĖ ŽIEMOS DIENA. Pop., pastelė, 35X50.webp",
    thumb: "assets/thumbs_2018/PASKUTINĖ ŽIEMOS DIENA. Pop., pastelė, 35X50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: true,
    id: "p120",
    theme: "forrest"
},
    {
    title: "PAVASARIO LAUKIANČIOS",
    src: "assets/full_2018/Pavasario laukiančios. Pop., pastelė. 35x50.webp",
    thumb: "assets/thumbs_2018/Pavasario laukiančios. Pop., pastelė. 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p121",
    theme: "dunes"
},
    {
    title: "PEIZAŽAS",
    src: "assets/full_2018/PEIZAŽAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/PEIZAŽAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p122",
    theme: "water"
},
    {
    title: "PRISNIGO",
    src: "assets/full_2019/PRISNIGO. Pop., pastelė, 41,5x62cm.webp",
    thumb: "assets/thumbs_2019/PRISNIGO. Pop., pastelė, 41,5x62cm.webp",
    year: 2018,
    description: "Popierius, pastelė 41,5x62 cm",
    available: false,
    id: "p123",
    theme: "forrest"
},
    {
    title: "PURSLAI",
    src: "assets/full_2019/PURSLAI. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/PURSLAI. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p124",
    theme: "water"
},
    {
    title: "PUTOJANTI BALTIJA",
    src: "assets/full_2018/PUTOJANTI BALTIJA. Sp. pop.,pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2018/PUTOJANTI BALTIJA. Sp. pop.,pastelė, 42x62 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p125",
    theme: "water"
},
    {
    title: "RAMUS ŽIEMOS VAKARAS",
    src: "assets/full_2019/RAMUS ŽIEMOS VAKARAS. Pop., pastelė, 62X42.webp",
    thumb: "assets/thumbs_2019/RAMUS ŽIEMOS VAKARAS. Pop., pastelė, 62X42.webp",
    year: 2019,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p126",
    theme: "forrest"
},
    {
    title: "RAMYBĖ",
    src: "assets/full_2019/RAMYBĖ. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/RAMYBĖ. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p127",
    theme: "water"
},
    {
    title: "RIKIS",
    src: "assets/full_2018/RIKIS nebeturiu.webp",
    thumb: "assets/thumbs_2018/RIKIS nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė",
    available: false,
    id: "p128",
    theme: "other"
},
    {
    title: "ROMANTIŠKAS",
    src: "assets/full_2018/ROMANTIŠKAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ROMANTIŠKAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: true,
    id: "p129",
    theme: "water"
},
    {
    title: "RUDENINĖ PILKUMA",
    src: "assets/full_2018/RUDENINĖ PILKUMA. Pop., pastelė, 62x42.webp",
    thumb: "assets/thumbs_2018/RUDENINĖ PILKUMA. Pop., pastelė, 62x42.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p130",
    theme: "water"
},
    {
    title: "RYTO SKAIDRUMAS",
    src: "assets/full_2018/RYTO SKAIDRUMAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/RYTO SKAIDRUMAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p131",
    theme: "dunes"
},
    {
    title: "RUDENINĖ PILKUMA",
    src: "assets/full_2018/ŠALČIO ETIUDAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ŠALČIO ETIUDAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p132",
    theme: "forrest"
},
    {
    title: "SALDUMYNŲ MĖGĖJAMS",
    src: "assets/full_2018/Saldumynų mėgėjams. Pop., pastelė, 31x50cm nebeturiu.webp",
    thumb: "assets/thumbs_2018/Saldumynų mėgėjams. Pop., pastelė, 31x50cm nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 31x50cm cm",
    available: false,
    id: "p133",
    theme: "dunes"
},
    {
    title: "",
    src: "assets/2019/SENAM SODE. Pop., pastelė, 42x62cm.webp",
    thumb: "assets/thumbs_2019/SENAM SODE. Pop., pastelė, 42x62cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62cm cm",
    available: false,
    id: "p134",
    theme: "other"
},
    {
    title: "SENAS TAKAS",
    src: "assets/full_2019/SENAS TAKAS. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    thumb: "assets/thumbs_2019/SENAS TAKAS. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p135",
    theme: "dunes"
},
    {
    title: "SKRYDIS VIRŠ BANGŲ",
    src: "assets/full_2019/SKRYDIS VIRŠ BANGŲ. Popierius, pastelė, 62x42 cm nebeturiu.webp",
    thumb: "assets/thumbs_2019/SKRYDIS VIRŠ BANGŲ. Popierius, pastelė, 62x42 cm nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p136",
    theme: "water"
},
    {
    title: "SKRYDIS VIRŠ ŽALIŲ BANGŲ",
    src: "assets/full_2019/SKRYDIS VIRŠ ŽALIŲ BANGŲ. Pop., pastelė, 42x62 cm nebeturiu.webp",
    thumb: "assets/thumbs_2019/SKRYDIS VIRŠ ŽALIŲ BANGŲ. Pop., pastelė, 42x62 cm nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p137",
    theme: "water"
},
    {
    title: "SKRYDIS",
    src: "assets/full_2018/SKRYDIS. Pop., pastelė, 40x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/SKRYDIS. Pop., pastelė, 40x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 40x50 cm",
    available: false,
    id: "p138",
    theme: "water"
},
    {
    title: "SPALVOTA PILKUMA",
    src: "assets/full_2019/SPALVOTA PILKUMA. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/SPALVOTA PILKUMA. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p139",
    theme: "forrest"
},
    {
    title: "SUTEMOS",
    src: "assets/full_2018/SUTEMOS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/SUTEMOS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p140",
    theme: "water"
},
    {
    title: "ŠVIESA",
    src: "assets/full_2018/ŠVIESA. Pop., pastelė, 36x47 Nebeturiu.webp",
    thumb: "assets/thumbs_2018/ŠVIESA. Pop., pastelė, 36x47 Nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 36x47 cm",
    available: false,
    id: "p141",
    theme: "forrest"
},
    {
    title: "TAMSŪS DEBESIAI",
    src: "assets/full_2018/Tamsūs debesiai. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2018/Tamsūs debesiai. Pop., pastelė, 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p142",
    theme: "water"
},
    {
    title: "TIK TAKĄ PER KOPAS, MALDAUJU, PALIK",
    src: "assets/full_2018/TIK TAKĄ PER KOPAS, MALDAUJU, PALIK (In memoriam Kazimierui). Popierius, pastelė, 36x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/TIK TAKĄ PER KOPAS, MALDAUJU, PALIK (In memoriam Kazimierui). Popierius, pastelė, 36x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 36x50 cm",
    available: false,
    id: "p143",
    theme: "dunes"
},
    {
    title: "TOBULAS VAKARAS",
    src: "assets/full_2018/TOBULAS VAKARAS.Popierius, pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/TOBULAS VAKARAS.Popierius, pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p144",
    theme: "water"
},
    {
    title: "TOKIA GRAŽI PILKA DIENA",
    src: "assets/full_2019/TOKIA GRAŽI PILKA DIENA (buvo). Popierius, pastelė 42x62.webp",
    thumb: "assets/thumbs_2019/TOKIA GRAŽI PILKA DIENA (buvo). Popierius, pastelė 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p145",
    theme: "forrest"
},
    {
    title: "TYLUMA RAMUMA",
    src: "assets/full_2018/TYLUMA RAMUMA. Popierius, pastelė, 62x42 cm.webp",
    thumb: "assets/thumbs_2018/TYLUMA RAMUMA. Popierius, pastelė, 62x42 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p146",
    theme: "water"
},
    {
    title: "ŪKANOS",
    src: "assets/full_2019/ŪKANOS. Pop., pastelė, 40x60 nebeturiu.webp",
    thumb: "assets/thumbs_2019/ŪKANOS. Pop., pastelė, 40x60 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 40x60 cm",
    available: false,
    id: "p147",
    theme: "water"
},
    {
    title: "VAKARO JUDĖJIMAS",
    src: "assets/full_2019/VAKARO JUDĖJIMAS (.Evening movement). Pastelė, popierius, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/VAKARO JUDĖJIMAS (.Evening movement). Pastelė, popierius, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p148",
    theme: "water"
},
    {
    title: "VAKARO ŠVELNUMAS",
    src: "assets/full_2018/VAKARO ŠVELNUMAS 42x62.webp",
    thumb: "assets/thumbs_2018/VAKARO ŠVELNUMAS 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p149",
    theme: "dunes"
},
    {
    title: "VASARIO SAULĖ",
    src: "assets/full_2018/VASARIO SAULĖ. Pop., pastelė, 50x35.webp",
    thumb: "assets/thumbs_2018/VASARIO SAULĖ. Pop., pastelė, 50x35.webp",
    year: 2018,
    description: "Popierius, pastelė 50x35 cm",
    available: true,
    id: "p150",
    theme: "forrest"
},
    {
    title: "VASARIŠKAI GAIVI BANGA",
    src: "assets/full_2018/Vasariškai gaivi banga 35x57.webp",
    thumb: "assets/thumbs_2018/Vasariškai gaivi banga 35x57.webp",
    year: 2018,
    description: "Popierius, pastelė 35x57 cm",
    available: false,
    id: "p151",
    theme: "water"
},
    {
    title: "VASAROS BANGOS",
    src: "assets/full_2018/VASAROS BANGOS. Pop., pastelė, 35x57.webp",
    thumb: "assets/thumbs_2018/VASAROS BANGOS. Pop., pastelė, 35x57.webp",
    year: 2018,
    description: "Popierius, pastelė 35x57 cm",
    available: false,
    id: "p152",
    theme: "water"
},
    {
    title: "VILTIES SPINDULYS",
    src: "assets/full_2018/VILTIES SPINDULYS 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2018/VILTIES SPINDULYS 42x62 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p153",
    theme: "water"
},
    {
    title: "ŽIEMIŠKAI PASIPUOŠĘ",
    src: "assets/full_2018/ŽIEMIŠKAI PASIPUOŠĘ. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ŽIEMIŠKAI PASIPUOŠĘ. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: true,
    id: "p154",
    theme: "forrest"
},
    {
    title: "ALYVŲ ŽYDĖJIMO METAS",
    src: "assets/full_2020/ALYVŲ ŽYDĖJIMO METAS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/ALYVŲ ŽYDĖJIMO METAS. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p155",
    theme: "flora"
},
    {
    title: "ATSIGRĘŽIAU Į TAVE",
    src: "assets/full_2020/Atsigręžiau į tave. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Atsigręžiau į tave. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p156",
    theme: "flora"
},
    {
    title: "ATSISUKTI Į SAULĘ",
    src: "assets/full_2020/ATSISUKTI Į SAULĘ. Pop., sausa pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/ATSISUKTI Į SAULĘ. Pop., sausa pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p157",
    theme: "flora"
},
    {
    title: "BALANDIS JAU... AR PASTEBĖJAI?",
    src: "assets/full_2020/Balandis jau... ar pastebėjai Sp. pop.,pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Balandis jau... ar pastebėjai Sp. pop.,pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: true,
    id: "p158",
    theme: "forrest"
},
    {
    title: "BIJŪNAI DAR NENUVYTO",
    src: "assets/full_2020/Bijūnai dar nenuvyto. Pop., pastelė,42×62.webp",
    thumb: "assets/thumbs_2020/Bijūnai dar nenuvyto. Pop., pastelė,42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: true,
    id: "p159",
    theme: "flora"
},
    {
    title: "BITKRĖSLĖS BALTOJE VAZOJE",
    src: "assets/full_2020/BITKRĖSLĖS BALTOJE VAZOJE, Pop., pastelė, 49x32.webp",
    thumb: "assets/thumbs_2020/BITKRĖSLĖS BALTOJE VAZOJE, Pop., pastelė, 49x32.webp",
    year: 2020,
    description: "Popierius, pastelė 49x32 cm",
    available: true,
    id: "p160",
    theme: "flora"
},
    {
    title: "DAR VIENAS TAKAS, KVIEČIANTIS PRIE JŪROS",
    src: "assets/full_2020/Dar vienas takas, kviečiantis prie jūros. Pop., sausa pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/Dar vienas takas, kviečiantis prie jūros. Pop., sausa pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p161",
    theme: "dunes"
},
    {
    title: "GALINGAS",
    src: "assets/full_2020/Galingas. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Galingas. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p162",
    theme: "forrest"
},
    {
    title: "HORTENZIJA",
    src: "assets/full_2020/HORTENZIJA. Pop., pastelė, 57x42.webp",
    thumb: "assets/thumbs_2020/HORTENZIJA. Pop., pastelė, 57x42.webp",
    year: 2020,
    description: "Popierius, pastelė 57x42 cm",
    available: true,
    id: "p163",
    theme: "flora"
},
    {
    title: "JIEMS ŽMONIŲ PROBLEMOS NERŪPI",
    src: "assets/full_2020/Jiems žmonių problemos nerūpi. Pop.,pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Jiems žmonių problemos nerūpi. Pop.,pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: true,
    id: "p164",
    theme: "forrest"
},
    {
    title: "KIAULPIENĖS ŽYDI GAUSIAI",
    src: "assets/full_2020/Kiaulpienės žydi gausiai, Sp. pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/Kiaulpienės žydi gausiai, Sp. pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p165",
    theme: "flora"
},
    {
    title: "NAMAI KVEPIA IEVOMIS",
    src: "assets/full_2020/Namai kvepia ievomis. Pop., pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Namai kvepia ievomis. Pop., pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p166",
    theme: "flora"
},
    {
    title: "NIEKADA NEPAILSTANTI",
    src: "assets/full_2020/Niekada nepailstanti. Pop., pastelė 42×62.webp",
    thumb: "assets/thumbs_2020/Niekada nepailstanti. Pop., pastelė 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p167",
    theme: "water"
},
    {
    title: "OBELIS PASIPUOŠĖ",
    src: "assets/full_2020/OBELIS PASIPUOŠĖ. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/OBELIS PASIPUOŠĖ. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p168",
    theme: "flora"
},
    {
    title: "PASIKALBĖJIMAS",
    src: "assets/full_2020/Pasikalbėjimas. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Pasikalbėjimas. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p169",
    theme: "forrest"
},
    {
    title: "RAUSVUMAS",
    src: "assets/full_2020/Rausvumas. Pop., pastelė,42×62.webp",
    thumb: "assets/thumbs_2020/Rausvumas. Pop., pastelė,42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p170",
    theme: "flora"
},
    {
    title: "SAULĖTAS PUŠYNAS",
    src: "assets/full_2020/SAULĖTAS PUŠYNAS. Sp. pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/SAULĖTAS PUŠYNAS. Sp. pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p171",
    theme: "forrest"
},
    {
    title: "SENTIMENTALUS",
    src: "assets/full_2020/Sentimentalus. Pop., pastelė. 62×42.webp",
    thumb: "assets/thumbs_2020/Sentimentalus. Pop., pastelė. 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p172",
    theme: "forrest"
},
    {
    title: "TRUMPAS TAVO ŽYDĖJIMAS",
    src: "assets/full_2020/TRUMPAS TAVO ŽYDĖJIMAS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/TRUMPAS TAVO ŽYDĖJIMAS. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: true,
    id: "p173",
    theme: "flora"
},
    {
    title: "VAKARO SPINDULIŲ NUAUKSINTOS",
    src: "assets/full_2020/Vakaro spindulių nuauksintos. Pop.,pastelė, 62×42 Nebeturiu.webp",
    thumb: "assets/thumbs_2020/Vakaro spindulių nuauksintos. Pop.,pastelė, 62×42 Nebeturiu.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p174",
    theme: "forrest"
},
    {
    title: "VĖL PAVASARĖJA",
    src: "assets/full_2020/Vėl pavasarėja. Pop., pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Vėl pavasarėja. Pop., pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p175",
    theme: "forrest"
},
    {
    title: "ŽYDI VIKIAI PIEVOS PAKRAŠTY",
    src: "assets/full_2020/Žydi vikiai pievos pakrašty. Pop., sausa pastelė, 62x42 nebeturiu.webp",
    thumb: "assets/thumbs_2020/Žydi vikiai pievos pakrašty. Pop., sausa pastelė, 62x42 nebeturiu.webp",
    year: 2020,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p176",
    theme: "flora"
},
    {
    title: "AKMENUOTA PAKRANTĖ",
    src: "assets/full_2021/Akmenuota pakrantė. Pop., pastelė, 63×43.webp",
    thumb: "assets/thumbs_2021/Akmenuota pakrantė. Pop., pastelė, 63×43.webp",
    year: 2021,
    description: "Popierius, pastelė 63×43 cm",
    available: false,
    id: "p177",
    theme: "water"
},
    {
    title: "BANGA GENA BANGĄ",
    src: "assets/full_2021/BANGA GENA BANGĄ. Popierius, sausa pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2021/BANGA GENA BANGĄ. Popierius, sausa pastelė, 42x62 cm.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p178",
    theme: "water"
},
    {
    title: "ČIA IR TEN",
    src: "assets/full_2021/ČIA IR TEN. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2021/ČIA IR TEN. Pop., pastelė, 42x62.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p179",
    theme: "water"
},
    {
    title: "DAR BIJŪNAI NENUVYTO",
    src: "assets/full_2021/DAR BIJŪNAI NENUVYTO. Popierius, sausa pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2021/DAR BIJŪNAI NENUVYTO. Popierius, sausa pastelė, 42x62 cm.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p180",
    theme: "flora"
},
    {
    title: "FLIOKSAI PRIE APSILAUPIUSIOS SIENOS",
    src: "assets/full_2021/FLIOKSAI PRIE APSILAUPIUSIOS SIENOS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2021/FLIOKSAI PRIE APSILAUPIUSIOS SIENOS. Pop., pastelė, 42x62.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p181",
    theme: "flora"
},
    {
    title: "NATIURMORTAS SU KIAULPIENĖM",
    src: "assets/full_2021/Natiurmortas su kiaulpienėm. Sp. pop., pastelė, 50x40.webp",
    thumb: "assets/thumbs_2021/Natiurmortas su kiaulpienėm. Sp. pop., pastelė, 50x40.webp",
    year: 2021,
    description: "Popierius, pastelė 50x40 cm",
    available: true,
    id: "p182",
    theme: "flora"
},
    {
    title: "PAUPIO SARGYBOJE",
    src: "assets/full_2021/Paupio sargyboje. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2021/Paupio sargyboje. Pop., pastelė, 42x62.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p183",
    theme: "water"
},
    {
    title: "PUŠŲ VIRŠŪNĖMIS NUBĖGO VĖJAS",
    src: "assets/full_2021/PUŠŲ VIRŠŪNĖMIS NUBĖGO VĖJAS. Popierius, sausa pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2021/PUŠŲ VIRŠŪNĖMIS NUBĖGO VĖJAS. Popierius, sausa pastelė, 42x62 nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p184",
    theme: "forrest"
},
    {
    title: "RAUSVAS VAKARAS PRIE UPĖS",
    src: "assets/full_2021/RAUSVAS VAKARAS PRIE UPĖS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2021/RAUSVAS VAKARAS PRIE UPĖS. Pop., pastelė, 42x62.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p185",
    theme: "water"
},
    {
    title: "RŪKAS VIRŠ DANGĖS",
    src: "assets/full_2021/RŪKAS VIRŠ DANGĖS. Pop., sausa pastelė, 43x63 nebeturiu.webp",
    thumb: "assets/thumbs_2021/RŪKAS VIRŠ DANGĖS. Pop., sausa pastelė, 43x63 nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 43x63 cm",
    available: false,
    id: "p186",
    theme: "water"
},
    {
    title: "SLYVOS ŠAKELĖ",
    src: "assets/full_2021/Slyvos šakelė. Pop., pastelė, 49×34.webp",
    thumb: "assets/thumbs_2021/Slyvos šakelė. Pop., pastelė, 49×34.webp",
    year: 2021,
    description: "Popierius, pastelė 49×34 cm",
    available: false,
    id: "p187",
    theme: "flora"
},
    {
    title: "SPINDI ŽAIŽARUOJA",
    src: "assets/full_2021/Spindi žaižaruoja. Pop., pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2021/Spindi žaižaruoja. Pop., pastelė, 42x62 nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p188",
    theme: "water"
},
    {
    title: "ŠVIEŽIŲ BUROKĖLIŲ SEZONAS",
    src: "assets/full_2021/Šviežių burokėlių sezonas. Pop., pastelė, 42×62 cm.webp",
    thumb: "assets/thumbs_2021/Šviežių burokėlių sezonas. Pop., pastelė, 42×62 cm.webp",
    year: 2021,
    description: "Popierius, pastelė 42×62 cm",
    available: true,
    id: "p189",
    theme: "flora"
},
    {
    title: "SVYRA SERBENTŲ KEKĖS",
    src: "assets/full_2021/SVYRA SERBENTŲ KEKĖS. Pop., sausa pastelė, 43,5 x 63,5 cm Nebeturiu.webp",
    thumb: "assets/thumbs_2021/SVYRA SERBENTŲ KEKĖS. Pop., sausa pastelė, 43,5 x 63,5 cm Nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 43,5 x 63,5 cm",
    available: false,
    id: "p190",
    theme: "flora"
},
    {
    title: "TARP VANDENS IR DEBESŲ",
    src: "assets/full_2021/TARP VANDENS IR DEBESŲ. Pop., sausa pastelė, 63x43cm nebeturiu.webp",
    thumb: "assets/thumbs_2021/TARP VANDENS IR DEBESŲ. Pop., sausa pastelė, 63x43cm nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 63x43 cm",
    available: false,
    id: "p191",
    theme: "water"
},
    {
    title: "UPĖ",
    src: "assets/full_2021/UPĖ. Pop., pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2021/UPĖ. Pop., pastelė, 42x62 nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p192",
    theme: "water"
},
    {
    title: "Aguonėlės",
    src: "assets/full_2022/Aguonėlės. Canson popierius, sausa pastelė, 47×61 cm. Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Aguonėlės. Canson popierius, sausa pastelė, 47×61 cm. Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 47×61 cm",
    available: false,
    id: "p193",
    theme: "flora"
},
    {
    title: "Atspindžiai",
    src: "assets/full_2022/Atspindžiai. Canson popierius, sausa pastelė, 47×61,5 cm turiu.webp",
    thumb: "assets/thumbs_2022/Atspindžiai. Canson popierius, sausa pastelė, 47×61,5 cm turiu.webp",
    year: 2022,
    description: "Popierius, pastelė 47×61,5 cm",
    available: false,
    id: "p194",
    theme: "water"
},
    {
    title: "Dvi pienės pavėsyje",
    src: "assets/full_2022/Dvi pienės pavėsyje. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2022/Dvi pienės pavėsyje. Pop., pastelė, 42x62 cm.webp",
    year: 2022,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p195",
    theme: "forrest"
},
    {
    title: "Ir apie orus- saulėta, vėjuota, šalta",
    src: "assets/full_2022/Ir apie orus- saulėta, vėjuota, šalta. Pop., pastelė, 51,5×71,5.webp",
    thumb: "assets/thumbs_2022/Ir apie orus- saulėta, vėjuota, šalta. Pop., pastelė, 51,5×71,5.webp",
    year: 2022,
    description: "Popierius, pastelė 51,5×71,5 cm",
    available: false,
    id: "p196",
    theme: "dunes"
},
    {
    title: "Kai skamba vasara",
    src: "assets/full_2022/Kai skamba vasara. Pop., pastelė, 42×62cm.webp",
    thumb: "assets/thumbs_2022/Kai skamba vasara. Pop., pastelė, 42×62cm.webp",
    year: 2022,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p197",
    theme: "flora"
},
    {
    title: "Linguoja vėjyje",
    src: "assets/full_2022/Linguoja vėjyje. Pop., pastelė, 35×49.webp",
    thumb: "assets/thumbs_2022/Linguoja vėjyje. Pop., pastelė, 35×49.webp",
    year: 2022,
    description: "Popierius, pastelė 35×49 cm",
    available: false,
    id: "p198",
    theme: ""
},
    {
    title: "Pavasario žydėjimas",
    src: "assets/full_2022/Pavasario žydėjimas. Pop., pastelė, 45×64 nebbeturiu.webp",
    thumb: "assets/thumbs_2022/Pavasario žydėjimas. Pop., pastelė, 45×64 nebbeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 45×64 cm",
    available: false,
    id: "p199",
    theme: "flora"
},
    {
    title: "Prie upeliuko",
    src: "assets/full_2022/Prie upeliuko. Pop., pastelė, 62×42cm Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Prie upeliuko. Pop., pastelė, 62×42cm Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p200",
    theme: "forrest"
},
    {
    title: "Ramunių pasaka tau",
    src: "assets/full_2022/Ramunių pasaka tau. Pop., pastelė, 42×62. Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Ramunių pasaka tau. Pop., pastelė, 42×62. Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p201",
    theme: "flora"
},
    {
    title: "Saulė leidžias pamažu",
    src: "assets/full_2022/Saulė leidžias pamažu. Sausa pastelė, CANSON popierius, 47×61.webp",
    thumb: "assets/thumbs_2022/Saulė leidžias pamažu. Sausa pastelė, CANSON popierius, 47×61.webp",
    year: 2022,
    description: "Popierius, pastelė 47×61 cm",
    available: false,
    id: "p202",
    theme: "water"
},
    {
    title: "Truputį debesuota",
    src: "assets/full_2022/Truputį debesuota. Pop., pastelė, 35×49.webp",
    thumb: "assets/thumbs_2022/Truputį debesuota. Pop., pastelė, 35×49.webp",
    year: 2022,
    description: "Popierius, pastelė 35×49 cm",
    available: true,
    id: "p203",
    theme: "dunes"
},
    {
    title: "Vakarėja",
    src: "assets/full_2022/Vakarėja. Pop., pastelė, 42×62.webp",
    thumb: "assets/thumbs_2022/Vakarėja. Pop., pastelė, 42×62.webp",
    year: 2022,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p204",
    theme: "flora"
},
    {
    title: "Vėjas kopoms nebaisus",
    src: "assets/full_2022/Vėjas kopoms nebaisus. Pop., pastelė, 35×49.webp",
    thumb: "assets/thumbs_2022/Vėjas kopoms nebaisus. Pop., pastelė, 35×49.webp",
    year: 2022,
    description: "Popierius, pastelė 35×49 cm",
    available: true,
    id: "p205",
    theme: "dunes"
},
    {
    title: "Vėl žydi kaštonai",
    src: "assets/full_2022/Vėl žydi kaštonai. Sausa pastelė, popierius CANSON,61×47cm turiu.webp",
    thumb: "assets/thumbs_2022/Vėl žydi kaštonai. Sausa pastelė, popierius CANSON,61×47cm turiu.webp",
    year: 2022,
    description: "Popierius, pastelė 61×47 cm",
    available: false,
    id: "p206",
    theme: "flora"
},
    {
    title: "Visokie švelnumai žydi kopose",
    src: "assets/full_2022/Visokie švelnumai žydi kopose. Pop., pastelė, 42x62 Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Visokie švelnumai žydi kopose. Pop., pastelė, 42x62 Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p207",
    theme: "dunes"
},
    {
    title: "Žydinti vasara",
    src: "assets/full_2022/Žydinti vasara. Sausa pastelė. popierius CANSON,47×61cm Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Žydinti vasara. Sausa pastelė. popierius CANSON,47×61cm Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 47×61 cm",
    available: false,
    id: "p208",
    theme: ""
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/be pavadinimo Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/be pavadinimo Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: true,
    id: "p209",
    theme: "dunes"
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/Dovana Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Dovana Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p210",
    theme: "flora"
},
    {
    title: "Kreivas miškas",
    src: "assets/full_v_2022/Kreivas miškas Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Kreivas miškas Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: true,
    id: "p211",
    theme: "forrest"
},
    {
    title: "Lelijų prūdelis",
    src: "assets/full_v_2022/Lelijų prūdelis Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Lelijų prūdelis Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: true,
    id: "p212",
    theme: "water"
},
    {
    title: "Miške",
    src: "assets/full_v_2022/Miške Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Miške Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelėm",
    available: true,
    id: "p213",
    theme: "forrest"
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: true,
    id: "p214",
    theme: "forrest"
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/Nebeturiu2.webp",
    thumb: "assets/thumbs_v_2022/Nebeturiu2.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p215",
    theme: "water"
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/Popierius PASTELMAT nuostabus. Puikiai dengia Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Popierius PASTELMAT nuostabus. Puikiai dengia Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: true,
    id: "p216",
    theme: "dunes"
},
    {
    title: "Šiaurės jūra",
    src: "assets/full_v_2022/Šiaurės jūra Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Šiaurės jūra Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p217",
    theme: "water"
},
    {
    title: "Švyturys",
    src: "assets/full_v_2022/Švyturys Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Švyturys Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: true,
    id: "p218",
    theme: "buildings"
},
    {
    title: "Vakaro spinduliuose",
    src: "assets/full_v_2022/Vakaro spinduliuose Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Vakaro spinduliuose Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: true,
    id: "p219",
    theme: "buildings"
},
    {
    title: "Vėjas kopose šiandien",
    src: "assets/full_v_2022/Vėjas kopose šiandien.Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Vėjas kopose šiandien.Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: true,
    id: "p220",
    theme: "dunes"
},
    {
    title: "Vlielando stogai",
    src: "assets/full_v_2022/Vlielando stogai Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Vlielando stogai Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p221",
    theme: "buildings"
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2024/509398130_10238356793803257_2345329586630793267_n.webp",
    thumb: "assets/thumbs_v_2024/509398130_10238356793803257_2345329586630793267_n.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: true,
    id: "p222",
    theme: "dunes"
},
    {
    title: "armenhuis",
    src: "assets/full_v_2024/armenhuis.webp",
    thumb: "assets/thumbs_v_2024/armenhuis.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: true,
    id: "p223",
    theme: "buildings"
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2024/be pavadinimo.webp",
    thumb: "assets/thumbs_v_2024/be pavadinimo.webp",
    year: 2024,
    description: "Popierius, pastelė x cm",
    available: true,
    id: "p224",
    theme: "dunes"
},
    {
    title: "jachtos",
    src: "assets/full_v_2024/jachts.webp",
    thumb: "assets/thumbs_v_2024/jachts.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: true,
    id: "p225",
    theme: "water"
},
    {
    title: "Jachtų uostelyje",
    src: "assets/full_v_2024/Jachtų uostelyje. Pastelė ant pastelmat popieriaus, 40×30.webp",
    thumb: "assets/thumbs_v_2024/Jachtų uostelyje. Pastelė ant pastelmat popieriaus, 40×30.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: true,
    id: "p226",
    theme: "water"
},
    {
    title: "kopose",
    src: "assets/full_v_2024/Kopose. Pastelė ant pastelmat, 30×40.webp",
    thumb: "assets/thumbs_v_2024/Kopose. Pastelė ant pastelmat, 30×40.webp",
    year: 2024,
    description: "Popierius, pastelė 40x30 cm",
    available: true,
    id: "p227",
    theme: "dunes"
},
    {
    title: "prie prūdelio",
    src: "assets/full_v_2024/Prie prūdelio. Pastelė ant pastelmat popieriaus. 40×30.webp",
    thumb: "assets/thumbs_v_2024/Prie prūdelio. Pastelė ant pastelmat popieriaus. 40×30.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: true,
    id: "p228",
    theme: "water"
},
    {
    title: "Prie Šiaurės jūros ir vėl vėjuota",
    src: "assets/full_v_2024/Prie Šiaurės jūros ir vėl vėjuota. Pop., pastelė, 30×40.webp",
    thumb: "assets/thumbs_v_2024/Prie Šiaurės jūros ir vėl vėjuota. Pop., pastelė, 30×40.webp",
    year: 2024,
    description: "Popierius, pastelė 40x30 cm",
    available: false,
    id: "p229",
    theme: "dunes"
},
    {
    title: "pro langą",
    src: "assets/full_v_2024/pro langa.webp",
    thumb: "assets/thumbs_v_2024/pro langa.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: true,
    id: "p230",
    theme: "buildings"
},
    {
    title: "švyturys",
    src: "assets/full_v_2024/švyturys.webp",
    thumb: "assets/thumbs_v_2024/švyturys.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: false,
    id: "p231",
    theme: "buildings"
}
/*next id: "p233". 
p232 is after p64 */
];


