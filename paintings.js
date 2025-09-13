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
    theme: ""
},
    {
    title: "AGUONOS TAU",
    src: "2016_WebP/AGUONOS TAU. Pop., pastelė, 45x58.webp",
    thumb: "2016_WebP/thumbs_2016/AGUONOS TAU. Pop., pastelė, 45x58.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 45x58 cm",
    available: false,
    id: "p3",
    theme: ""
},
    {
    title: "ALYVOS",
    src: "2016_WebP/Alyvos. Pop., pastelė 46x61 true.webp",
    thumb: "2016_WebP/thumbs_2016/Alyvos. Pop., pastelė 46x61 true.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 46x61 cm",
    available: false,
    id: "p4",
    theme: ""
},
    {
    title: "BERŽŲ AUKSAS",
    src: "2016_WebP/BERŽŲ AUKSAS. Pop., pastelė, 64x46.webp",
    thumb: "2016_WebP/thumbs_2016/BERŽŲ AUKSAS. Pop., pastelė, 64x46.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 64x46 cm",
    available: false,
    id: "p5",
    theme: ""
},
    {
    title: "IEVOS II",
    src: "2016_WebP/IEVOS II,pop., pastelė, 36x50.webp",
    thumb: "2016_WebP/thumbs_2016/IEVOS II,pop., pastelė, 36x50.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 36x50 cm",
    available: false,
    id: "p6",
    theme: ""
},
    {
    title: "IEVOS",
    src: "2016_WebP/IEVOS. pop., pastelė, 44x50 true.webp",
    thumb: "2016_WebP/thumbs_2016/IEVOS. pop., pastelė, 44x50 true.webp",
    year: 2016,
    description: "Popierius, sausa pastelė 44x50 cm",
    available: false,
    id: "p7",
    theme: ""
},
    {
    title: "AUDRONĖS ŠALAVIJAI",
    src: "2016_WebP/Iš Audronės gėlynų.Šalavijai. Pop., pastelė, 36x50 true.webp",
    thumb: "2016_WebP/thumbs_2016/Iš Audronės gėlynų.Šalavijai. Pop., pastelė, 36x50 true.webp",
    year: 2016,
    description: "Popierius, pastelė 36x50 cm",
    available: false,
    id: "p8",
    theme: ""
},
    {
    title: "KIAULPIENĖS",
    src: "2016_WebP/KIAULPIENĖS, pop., pastelė 50x37 true.webp",
    thumb: "2016_WebP/thumbs_2016/KIAULPIENĖS, pop., pastelė 50x37 true.webp",
    year: 2016,
    description: "Popierius, pastelė 50x37 cm",
    available: false,
    id: "p9",
    theme: ""
},
    {
    title: "KLEVAI",
    src: "2016_WebP/Klevai. Pop., pastelė, 46x66 false.webp",
    thumb: "2016_WebP/thumbs_2016/Klevai. Pop., pastelė, 46x66 false.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: false,
    id: "p10",
    theme: ""
},
    {
    title: "MĖLYNOS PUŠYS",
    src: "2016_WebP/Mėlynos pušys. Pop., pastelė 42X55-false.webp",
    thumb: "2016_WebP/thumbs_2016/Mėlynos pušys. Pop., pastelė 42X55-false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x55 cm",
    available: false,
    id: "p11",
    theme: ""
},
    {
    title: "PAVASARIS KOPOSE",
    src: "2016_WebP/PAVASARIS KOPOSE, pop., pastelė, 42X62-false.webp",
    thumb: "2016_WebP/thumbs_2016/PAVASARIS KOPOSE, pop., pastelė, 42X62-false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p12",
    theme: ""
},
    {
    title: "PO DU",
    src: "2016_WebP/PO DU. pop., akvarelė 45x60-false.webp",
    thumb: "2016_WebP/thumbs_2016/PO DU. pop., akvarelė 45x60-false.webp",
    year: 2016,
    description: "Popierius, akvarelė 45x60 cm",
    available: false,
    id: "p13",
    theme: ""
},
    {
    title: "RAMUNĖS II",
    src: "2016_WebP/RAMUNĖS II. Pastelė false.webp",
    thumb: "2016_WebP/thumbs_2016/RAMUNĖS II. Pastelė false.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false,
    id: "p14",
    theme: ""
},
    {
    title: "RAMUNĖS",
    src: "2016_WebP/RAMUNĖS, kartonas, pastelė,45x58 cm false.webp",
    thumb: "2016_WebP/thumbs_2016/RAMUNĖS, kartonas, pastelė,45x58 cm false.webp",
    year: 2016,
    description: "Kartonas, pastelė 45x58 cm",
    available: false,
    id: "p15",
    theme: ""
},
    {
    title: "RUDENINĖ NUOTAIKA",
    src: "2016_WebP/Rudeninė nuotaika, pop., pastelė 50x38.webp",
    thumb: "2016_WebP/thumbs_2016/Rudeninė nuotaika, pop., pastelė 50x38.webp",
    year: 2016,
    description: "Popierius, pastelė 50x38 cm",
    available: false,
    id: "p16",
    theme: ""
},
    {
    title: "RŪKAS SKLAIDOSI",
    src: "2016_WebP/RŪKAS SKLAIDOSI. Pop., pastelė, 42x62 false.webp",
    thumb: "2016_WebP/thumbs_2016/RŪKAS SKLAIDOSI. Pop., pastelė, 42x62 false.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p17",
    theme: ""
},
    {
    title: "TAKAS IŠ PUŠYNO",
    src: "2016_WebP/Takas iš pušyno. Pop., pastelė.webp",
    thumb: "2016_WebP/thumbs_2016/Takas iš pušyno. Pop., pastelė.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false,
    id: "p18",
    theme: ""
},
    {
    title: "TAS SALDUS ALYVŲ KVAPAS",
    src: "2016_WebP/TAS SALDUS ALYVŲ KVAPAS. Pop., pastelė, 42x62 true.webp",
    thumb: "2016_WebP/thumbs_2016/TAS SALDUS ALYVŲ KVAPAS. Pop., pastelė, 42x62 true.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p19",
    theme: ""
    },
    {
    title: "TIK NENUPŪSK",
    src: "2016_WebP/TIK NENUPŪSK. Pop., pastelė, 46x61 false.webp",
    thumb: "2016_WebP/thumbs_2016/TIK NENUPŪSK. Pop., pastelė, 46x61 false.webp",
    year: 2016,
    description: "Popierius, pastelė 46x61 cm",
    available: false,
    id: "p20",
    theme: ""
},
    {
    title: "BE PAVADINIMO",
    src: "2016_WebP/untitled-2.webp",
    thumb: "2016_WebP/thumbs_2016/untitled-2.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false,
    id: "p21",
    theme: ""
},
    {
    title: "BE PAVADINIMO",
    src: "2016_WebP/untitled.webp",
    thumb: "2016_WebP/thumbs_2016/untitled.webp",
    year: 2016,
    description: "Popierius, pastelė",
    available: false,
    id: "p22",
    theme: ""
},
    {
    title: "VĖJAS KOPOSE",
    src: "2016_WebP/VĖJAS KOPOSE, pop., pastelė, 46x66 true.webp",
    thumb: "2016_WebP/thumbs_2016/VĖJAS KOPOSE, pop., pastelė, 46x66 true.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: false,
    id: "p23",
    theme: ""
},
    {
    title: "VIENADIENĖS",
    src: "2016_WebP/Viendienės. Pop., pastelė, 36x50 false.webp",
    thumb: "2016_WebP/thumbs_2016/Viendienės. Pop., pastelė, 36x50 false.webp",
    year: 2016,
    description: "Popierius, pastelė 36x50 cm",
    available: false,
    id: "p24",
    theme: ""
},
    {
    title: "VISIŠKA IMPRESIJA",
    src: "2016_WebP/Visiška impresija. Pop., pastelė, 46x66 ture.webp",
    thumb: "2016_WebP/thumbs_2016/Visiška impresija. Pop., pastelė, 46x66 ture.webp",
    year: 2016,
    description: "Popierius, pastelė 46x66 cm",
    available: false,
    id: "p25",
    theme: ""
},
    {
    title: "VYŠNIA ŽYDI",
    src: "2016_WebP/VYŠNIA ŽYDI, pop.,pastelė 42x62-true.webp",
    thumb: "2016_WebP/thumbs_2016/VYŠNIA ŽYDI, pop.,pastelė 42x62-true.webp",
    year: 2016,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p26",
    theme: ""
},
    {
    title: "VYŠNIA",
    src: "2016_WebP/VYŠNIA, pop., pastelė, 38x51 true.webp",
    thumb: "2016_WebP/thumbs_2016/VYŠNIA, pop., pastelė, 38x51 true.webp",
    year: 2016,
    description: "Popierius, pastelė 38x51 cm",
    available: false,
    id: "p27",
    theme: ""
},
    {
    title: "ŽOLYNAI II",
    src: "2016_WebP/ŽOLYNAI II. Pop., pastelė, 62x44 false.webp",
    thumb: "2016_WebP/thumbs_2016/ŽOLYNAI II. Pop., pastelė, 62x44 false.webp",
    year: 2016,
    description: "Popierius, pastelė 62x44 cm",
    available: false,
    id: "p28",
    theme: ""
},
    {
    title: "ŽOLYNAI",
    src: "2016_WebP/ŽOLYNAI. Pop., pastelė, 62x42 true.webp",
    thumb: "2016_WebP/thumbs_2016/ŽOLYNAI. Pop., pastelė, 62x42 true.webp",
    year: 2016,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p29",
    theme: ""
},
    {
    title: "ŽYDINTI",
    src: "2016_WebP/ŽYDINTI, pop.,akvarelė 45X60 false.webp",
    thumb: "2016_WebP/thumbs_2016/ŽYDINTI, pop.,akvarelė 45X60 false.webp",
    year: 2016,
    description: "Popierius, akvarelė 45x60 cm",
    available: false,
    id: "p30",
    theme: ""
},
    {
    title: "ČIA GERA BŪTI",
    src: "assets/full_2017/ČIA GERA BŪTI. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/ČIA GERA BŪTI. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false,
    id: "p31",
    theme: ""
},
    {
    title: "GELTONA PIEVA TEN",
    src: "assets/full_2017/GELTONA PIEVA TEN. Pop., pastelė, 41x62.webp",
    thumb: "assets/thumbs_2017/GELTONA PIEVA TEN. Pop., pastelė, 41x62.webp",
    year: 2017,
    description: "Popierius, pastelė 41x62 cm",
    available: false,
    id: "p32",
    theme: ""
},
    {
    title: "JŪRA PASIŠIAUŠĖ",
    src: "assets/full_2017/JŪRA PASIŠIAUŠĖ. Pop., pastelė 62x44 nebeturiu.webp",
    thumb: "assets/thumbs_2017/JŪRA PASIŠIAUŠĖ. Pop., pastelė 62x44 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 62x44 cm",
    available: false,
    id: "p33",
    theme: ""
},
    {
    title: "KAIP PIEVOS DEBESYS",
    src: "assets/full_2017/Kaip pievos debesys. Pop., pastelė, 50x36.webp",
    thumb: "assets/thumbs_2017/Kaip pievos debesys. Pop., pastelė, 50x36.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: false,
    id: "p34",
    theme: ""
},
    {
    title: "KOPOSE",
    src: "assets/full_2017/KOPOSE. Pop., pastelė 41x59.webp",
    thumb: "assets/thumbs_2017/KOPOSE. Pop., pastelė 41x59.webp",
    year: 2017,
    description: "Popierius, pastelė 41x59 cm",
    available: false,
    id: "p35",
    theme: ""
},
    {
    title: "KOSMĖJOS",
    src: "assets/full_2017/KOSMĖJOS. Pop., pastelė, 35x48 Nebeturiu.webp",
    thumb: "assets/thumbs_2017/KOSMĖJOS. Pop., pastelė, 35x48 Nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 35x48 cm",
    available: false,
    id: "p36",
    theme: ""
},
    {
    title: "SPALVINGAS SAULĖLYDIS",
    src: "assets/full_2017/LABAI SPALVINGAS SAULĖLYDIS, pop., pastelė 64x44.webp",
    thumb: "assets/thumbs_2017/LABAI SPALVINGAS SAULĖLYDIS, pop., pastelė 64x44.webp",
    year: 2017,
    description: "Popierius, pastelė 64x44 cm",
    available: false,
    id: "p37",
    theme: ""
},
    {
    title: "MAGIJA",
    src: "assets/full_2017/MAGIJA. Pop., pastelė, 64x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/MAGIJA. Pop., pastelė, 64x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x36 cm",
    available: false,
    id: "p38",
    theme: ""
},
    {
    title: "MIGLELĖ",
    src: "assets/full_2017/MIGLELĖ. Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2017/MIGLELĖ. Pop., pastelė, 34x49.webp",
    year: 2017,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p39",
    theme: ""
},
    {
    title: "MIŠKO TAKELIS",
    src: "assets/full_2017/MIŠKO TAKELIS, pop., pastelė, 50x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/MIŠKO TAKELIS, pop., pastelė, 50x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: false,
    id: "p40",
    theme: ""
},
    {
    title: "NERIMAS",
    src: "assets/full_2017/NERIMAS. Pop., pastelė, 45x63.webp",
    thumb: "assets/thumbs_2017/NERIMAS. Pop., pastelė, 45x63.webp",
    year: 2017,
    description: "Popierius, pastelė 45x63 cm",
    available: false,
    id: "p41",
    theme: ""
},
    {
    title: "NOSTALGIŠKAS",
    src: "assets/full_2017/NOSTALGIŠKAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2017/NOSTALGIŠKAS. Pop., pastelė, 35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p42",
    theme: ""
},
    {
    title: "BIRŽELIO PIEVOS",
    src: "assets/full_2017/PABRAIDŽIOK PO BIRŽELIO PIEVAS. Pop., pastelė, 50,5x34,5.webp",
    thumb: "assets/thumbs_2017/PABRAIDŽIOK PO BIRŽELIO PIEVAS. Pop., pastelė, 50,5x34,5.webp",
    year: 2017,
    description: "Popierius, pastelė 50,5x34,5 cm",
    available: false,
    id: "p43",
    theme: ""
},
    {
    title: "PAPYLĖ JŪRA SIDABRO",
    src: "assets/full_2017/Papylė jūra sidabro. Popierius, pastelė, 40x61 nebeturiu.webp",
    thumb: "assets/thumbs_2017/Papylė jūra sidabro. Popierius, pastelė, 40x61 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 40x61 cm",
    available: false,
    id: "p44",
    theme: ""
},
    {
    title: "PASIILGAU JŪROS",
    src: "assets/full_2017/Pasiilgau jūros. Pop., pastelė 63x45.webp",
    thumb: "assets/thumbs_2017/Pasiilgau jūros. Pop., pastelė 63x45.webp",
    year: 2017,
    description: "Popierius, pastelė 63x45 cm",
    available: false,
    id: "p45",
    theme: ""
},
    {
    title: "PASKUTINIAI SPINDULIAI",
    src: "assets/full_2017/PASKUTINIAI SPINDULIAI. Pop., pastelė, 49x38 Nebeturiu.webp",
    thumb: "assets/thumbs_2017/PASKUTINIAI SPINDULIAI. Pop., pastelė, 49x38 Nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 49x38 cm",
    available: false,
    id: "p46",
    theme: ""
},
    {
    title: "PAVASARĖJA",
    src: "assets/full_2017/PAVASARĖJA. Pop., pastelė, 63x43.webp",
    thumb: "assets/thumbs_2017/PAVASARĖJA. Pop., pastelė, 63x43.webp",
    year: 2017,
    description: "Popierius, pastelė 63x43 cm",
    available: false,
    id: "p47",
    theme: ""
},
    {
    title: "PAŽVELK AUKŠTYN",
    src: "assets/full_2017/PAŽVELK AUKŠTYN, Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/PAŽVELK AUKŠTYN, Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false,
    id: "p48",
    theme: ""
},
    {
    title: "PRIE JŪROS RAMU",
    src: "assets/full_2017/Prie jūros ramu. Pop., pastelė 42x62.webp",
    thumb: "assets/thumbs_2017/Prie jūros ramu. Pop., pastelė 42x62.webp",
    year: 2017,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p49",
    theme: ""
},
    {
    title: "PRIE JŪROS VĖJUOTA",
    src: "assets/full_2017/Prie jūros vėjuota. Pop., pastelė, 63x45.webp",
    thumb: "assets/thumbs_2017/Prie jūros vėjuota. Pop., pastelė, 63x45.webp",
    year: 2017,
    description: "Popierius, pastelė 63x45 cm",
    available: false,
    id: "p50",
    theme: ""
},
    {
    title: "RUDENĖJA",
    src: "assets/full_2017/RUDENĖJA. Pop., pastelė, 49x39.webp",
    thumb: "assets/thumbs_2017/RUDENĖJA. Pop., pastelė, 49x39.webp",
    year: 2017,
    description: "Popierius, pastelė 49x39 cm",
    available: false,
    id: "p51",
    theme: ""
},
    {
    title: "RUDENIŠKAI",
    src: "assets/full_2017/RUDENIŠKAI. Pop., pastelė, 41x61.webp",
    thumb: "assets/thumbs_2017/RUDENIŠKAI. Pop., pastelė, 41x61.webp",
    year: 2017,
    description: "Popierius, pastelė 41x61 cm",
    available: false,
    id: "p52",
    theme: ""
},
    {
    title: "RUDENS EKSPRESIJA",
    src: "assets/full_2017/RUDENS EKSPRESIJA. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2017/RUDENS EKSPRESIJA. Pop., pastelė, 35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p53",
    theme: ""
},
    {
    title: "RUDENS PALETĖ",
    src: "assets/full_2017/RUDENS PALETĖ. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/RUDENS PALETĖ. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false,
    id: "p54",
    theme: ""
},
    {
    title: "RYTAS",
    src: "assets/full_2017/Rytas.Pop., pastelė, 36x50.webp",
    thumb: "assets/thumbs_2017/Rytas.Pop., pastelė, 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: false,
    id: "p55",
    theme: ""
},
    {
    title: "SAULĖGRĄŽA II",
    src: "assets/full_2017/SAULĖGRĄŽA II.Pop., pastelė,64x37 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SAULĖGRĄŽA II.Pop., pastelė,64x37 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x37 cm",
    available: false,
    id: "p56",
    theme: ""
},
    {
    title: "SAULĖGRĄŽA",
    src: "assets/full_2017/SAULĖGRĄŽA. Pop., pastelė, 64x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SAULĖGRĄŽA. Pop., pastelė, 64x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 64x36 cm",
    available: false,
    id: "p57",
    theme: ""
},
    {
    title: "SAULĖTA SPALIO DIENA",
    src: "assets/full_2017/SAULĖTA SPALIO DIENA. Pop., pastelė, 43x63.webp",
    thumb: "assets/thumbs_2017/SAULĖTA SPALIO DIENA. Pop., pastelė, 43x63.webp",
    year: 2017,
    description: "Popierius, pastelė 43x63 cm",
    available: false,
    id: "p58",
    theme: ""
},
    {
    title: "ŠERMUKŠNIAI",
    src: "assets/full_2017/ŠERMUKŠNIAI. Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2017/ŠERMUKŠNIAI. Pop., pastelė, 34x49.webp",
    year: 2017,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p59",
    theme: ""
},
    {
    title: "ŠILAGĖLĖS",
    src: "assets/full_2017/ŠILAGĖLĖS. Pop., pastelė, 50x35 nebeturiu.webp",
    thumb: "assets/thumbs_2017/ŠILAGĖLĖS. Pop., pastelė, 50x35 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 50x35 cm",
    available: false,
    id: "p60",
    theme: ""
},
    {
    title: "ŠIUGŽDESIAI",
    src: "assets/full_2017/ŠIUGŽDESIAI. Pop., pastelė, 36x50.webp",
    thumb: "assets/thumbs_2017/ŠIUGŽDESIAI. Pop., pastelė, 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: false,
    id: "p61",
    theme: ""
},
    {
    title: "SU BERŽELIAIS KOPOSE",
    src: "assets/full_2017/SU BERŽELIAIS KOPOSE.Pop., pastelė,49x36 nebeturiu.webp",
    thumb: "assets/thumbs_2017/SU BERŽELIAIS KOPOSE.Pop., pastelė,49x36 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 49x36 cm",
    available: false,
    id: "p62",
    theme: ""
},
    {
    title: "ŠVYTĖJIMAS",
    src: "assets/full_2017/ŠVYTĖJIMAS. Pop., pastelė 65x45.webp",
    thumb: "assets/thumbs_2017/ŠVYTĖJIMAS. Pop., pastelė 65x45.webp",
    year: 2017,
    description: "Popierius, pastelė 65x45 cm",
    available: false,
    id: "p63",
    theme: ""
},
    {
    title: "TAKELIS",
    src: "assets/full_2017/Takelis. Pop., pastelė, 60x41.webp",
    thumb: "assets/thumbs_2017/Takelis. Pop., pastelė, 60x41.webp",
    year: 2017,
    description: "Popierius, pastelė 60x41 cm",
    available: false,
    id: "p64",
    theme: ""
},
    {
    title: "TAU, MANO MAMYTE",
    src: "assets/full_2017/TAU, MANO MAMYTE. Pop., pastelė, 46x46 nebeturiu.webp",
    thumb: "assets/thumbs_2017/TAU, MANO MAMYTE. Pop., pastelė, 46x46 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 46x46 cm",
    available: false,
    id: "p64",
    theme: ""
},
    {
    title: "TIK AKIMIRKA",
    src: "assets/full_2017/TIK AKIMIRKA. Pop., pastelė,35x50.webp",
    thumb: "assets/thumbs_2017/TIK AKIMIRKA. Pop., pastelė,35x50.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p65",
    theme: ""
},
    {
    title: "UPELIŪKŠTIS",
    src: "assets/full_2017/UPELIŪKŠTIS. Pop., pastelė,61x44.webp",
    thumb: "assets/thumbs_2017/UPELIŪKŠTIS. Pop., pastelė,61x44.webp",
    year: 2017,
    description: "Popierius, pastelė 61x44 cm",
    available: false,
    id: "p66",
    theme: ""
},
    {
    title: "VAKARO KARAMELĖ",
    src: "assets/full_2017/VAKARO KARAMELĖ. Pop., pastelė,44x63.webp",
    thumb: "assets/thumbs_2017/VAKARO KARAMELĖ. Pop., pastelė,44x63.webp",
    year: 2017,
    description: "Popierius, pastelė 44x63 cm",
    available: false,
    id: "p67",
    theme: ""
},
    {
    title: "ŽALIA BANGA",
    src: "assets/full_2017/Žalia banga. Pop., pastelė, 64x45.webp",
    thumb: "assets/thumbs_2017/Žalia banga. Pop., pastelė, 64x45.webp",
    year: 2017,
    description: "Popierius, pastelė 64x45 cm",
    available: false,
    id: "p68",
    theme: ""
},
    {
    title: "ŽALIAI ŽALIAI",
    src: "assets/full_2017/ŽALIAI ŽALIAI. Pop., pastelė, 50x36.webp",
    thumb: "assets/thumbs_2017/ŽALIAI ŽALIAI. Pop., pastelė, 50x36.webp",
    year: 2017,
    description: "Popierius, pastelė 50x36 cm",
    available: false,
    id: "p69",
    theme: ""
},
    {
    title: "ŽIBUOKLĖS",
    src: "assets/full_2017/žIBUOKLĖS. Pop., pastelė, 46x46 nebeturiu.webp",
    thumb: "assets/thumbs_2017/žIBUOKLĖS. Pop., pastelė, 46x46 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 46x46 cm",
    available: false,
    id: "p70",
    theme: ""
},
    {
    title: "ŽYDI",
    src: "assets/full_2017/ŽYDI. Pop., pastelė. 36x50.webp",
    thumb: "assets/thumbs_2017/ŽYDI. Pop., pastelė. 36x50.webp",
    year: 2017,
    description: "Popierius, pastelė 36x50 cm",
    available: false,
    id: "p71",
    theme: ""
},
    {
    title: "ŽYDROS PIEVŲ AKYS",
    src: "assets/full_2017/ŽYDROS PIEVŲ AKYS. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2017/ŽYDROS PIEVŲ AKYS. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2017,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p72",
    theme: ""
},
    {
    title: "AKMENYS AMŽINAI",
    src: "assets/full_2018/AKMENYS AMŽINAI. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/AKMENYS AMŽINAI. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p73",
    theme: ""
},
        {
    title: "ANT SKARDŽIO",
    src: "assets/full_2018/ANT SKARDŽIO. Popierius, pastelė, 50x35 nebeturiu.webp",
    thumb: "assets/thumbs_2018/ANT SKARDŽIO. Popierius, pastelė, 50x35 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 50x35 cm",
    available: false,
    id: "p74",
    theme: ""
},
        {
    title: "APSIPYLĖ ŽIEDAIS",
    src: "assets/full_2019/APSIPYLĖ ŽIEDAIS. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/APSIPYLĖ ŽIEDAIS. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p75",
    theme: ""
},
        {
    title: "APSNIGTOS",
    src: "assets/full_2019/APSNIGTOS. Pop., pastelė, 40x60 nebeturiu.webp",
    thumb: "assets/thumbs_2019/APSNIGTOS. Pop., pastelė, 40x60 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 40x60 cm",
    available: false,
    id: "p76",
    theme: ""
},
        {
    title: "AR JAUTI? AR GIRDI? AR UŽUODI?",
    src: "assets/full_2019/AR JAUTI AR GIRDI AR UŽUODI Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/AR JAUTI AR GIRDI AR UŽUODI Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p77",
    theme: ""
},
        {
    title: "ATEIS IR PAVASARIS...",
    src: "assets/full_2018/Ateis ir pavasaris... KAdanoRs. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/Ateis ir pavasaris... KAdanoRs. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p78",
    theme: ""
},
        {
    title: "ATSISPINDINTYS",
    src: "assets/full_2018/ATSISPINDINTYS. Pop., pastelė, 44x64 cm.webp",
    thumb: "assets/thumbs_2018/ATSISPINDINTYS. Pop., pastelė, 44x64 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 44x64 cm",
    available: false,
    id: "p79",
    theme: ""
},
        {
    title: "AUDRA ARTINASI",
    src: "assets/full_2018/AUDRA ARTINASI. Popierius, pastelė, 61X42 nebeturiu.webp",
    thumb: "assets/thumbs_2018/AUDRA ARTINASI. Popierius, pastelė, 61X42 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 61x42 cm",
    available: false,
    id: "p80",
    theme: ""
},
    {
    title: "BALTAS ŽYDĖJIMAS",
    src: "assets/full_2018/BALTAS ŽYDĖJIMAS. Pop., pastelė,34x49.webp",
    thumb: "assets/thumbs_2018/BALTAS ŽYDĖJIMAS. Pop., pastelė,34x49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p81",
    theme: ""
},
    {
    title: "BANGOS II",
    src: "assets/full_2018/BANGOS II. Pop., pastelė, 35x50 cm nebeturiu.webp",
    thumb: "assets/thumbs_2018/BANGOS II. Pop., pastelė, 35x50 cm nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p82",
    theme: ""
},
    {
    title: "BANGOS PRAUSIA AKMENIS",
    src: "assets/full_2018/BANGOS PRAUSIA AKMENIS. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/BANGOS PRAUSIA AKMENIS. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p83",
    theme: ""
},
    {
    title: "BANGOS",
    src: "assets/full_2018/BANGOS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/BANGOS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p84",
    theme: ""
},
    {
    title: "BANGUOJA BALTIJA",
    src: "assets/full_2018/Banguoja Baltija. Pop., pastelė, 40x50.webp",
    thumb: "assets/thumbs_2018/Banguoja Baltija. Pop., pastelė, 40x50.webp",
    year: 2018,
    description: "Popierius, pastelė 40x50 cm",
    available: false,
    id: "p85",
    theme: ""
},
    {
    title: "BUS RAUDONI VAKARAI",
    src: "assets/full_2019/BUS RAUDONI VAKARAI. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/BUS RAUDONI VAKARAI. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p86",
    theme: ""
},
    {
    title: "DAR VIS ŽIEMA",
    src: "assets/full_2019/DAR VIS ŽIEMA. Pop., pastelė, 42X62 nebeturiu.webp",
    thumb: "assets/thumbs_2019/DAR VIS ŽIEMA. Pop., pastelė, 42X62 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p87",
    theme: ""
},
    {
    title: "DAUG YRA AKMENŲ PRIE JŪROS",
    src: "assets/full_2018/DAUG YRA AKMENŲ PRIE JŪROS. past. pop 44x64 nebeturiu.webp",
    thumb: "assets/thumbs_2018/DAUG YRA AKMENŲ PRIE JŪROS. past. pop 44x64 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 44x64 cm",
    available: false,
    id: "p88",
    theme: ""
},
    {
    title: "DEBESYS NUSILEIDO ANT ŽEMĖS",
    src: "assets/full_2018/DEBESYS NUSILEIDO ANT ŽEMĖS. Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/DEBESYS NUSILEIDO ANT ŽEMĖS. Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p89",
    theme: ""
},
    {
    title: "DIDINGOJI",
    src: "assets/full_2019/DIDINGOJI. Pop., pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2019/DIDINGOJI. Pop., pastelė, 42x62 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p90",
    theme: ""
},
    {
    title: "DIENA",
    src: "assets/full_2018/DIENA . Pop., pastelė. 62x42.webp",
    thumb: "assets/thumbs_2018/DIENA . Pop., pastelė. 62x42.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p91",
    theme: ""
},
    {
    title: "DVI STICHIJOS",
    src: "assets/full_2019/DVI STICHIJOS 42x62.webp",
    thumb: "assets/thumbs_2019/DVI STICHIJOS 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p92",
    theme: ""
},
    {
    title: "EIME PRIE JŪROS",
    src: "assets/full_2019/EIME PRIE JŪROS. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/EIME PRIE JŪROS. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p93",
    theme: ""
},
    {
    title: "GELSVAS PAPRASTUMAS",
    src: "assets/full_2018/GELSVAS PAPRASTUMAS Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/GELSVAS PAPRASTUMAS Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p94",
    theme: ""
},
    {
    title: "GELTONŲ TULPIŲ DIENA",
    src: "assets/full_2018/GELTONŲ TULPIŲ DIENA. Pop., pastelė, 31x50 Nebeturiu.webp",
    thumb: "assets/thumbs_2018/GELTONŲ TULPIŲ DIENA. Pop., pastelė, 31x50 Nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 31x50 cm",
    available: false,
    id: "p95",
    theme: ""
},
    {
    title: "GERA BŪTI",
    src: "assets/full_2019/Gera būti. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/Gera būti. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p96",
    theme: ""
},
    {
    title: "GUBOJOS KOPOSE",
    src: "assets/full_2018/GUBOJOS KOPOSE, Pop., pastelė, 34x49.webp",
    thumb: "assets/thumbs_2018/GUBOJOS KOPOSE, Pop., pastelė, 34x49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p97",
    theme: ""
},
    {
    title: "GUBOJOS PALEI TAKĄ",
    src: "assets/full_2018/GUBOJOS PALEI TAKĄ. Pop., pastelė, 34X49.webp",
    thumb: "assets/thumbs_2018/GUBOJOS PALEI TAKĄ. Pop., pastelė, 34X49.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p98",
    theme: ""
},
    {
    title: "IEŠKANTI",
    src: "assets/full_2018/IEŠKANTI. Gal pavasario Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/IEŠKANTI. Gal pavasario Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p99",
    theme: ""
},
    {
    title: "IKI RYTOJAUS",
    src: "assets/full_2018/IKI_RYTOJAUS-pop-pastel-42x62.webp",
    thumb: "assets/thumbs_2018/IKI RYTOJAUS. Sp. pop. pastelė, 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p100",
    theme: ""
},
    {
    title: "IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS",
    src: "assets/full_2018/IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/IR ATGAIVINS TAVO PAVARGUSIAS PĖDAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p101",
    theme: ""
},
    {
    title: "IŠ TEN",
    src: "assets/full_2019/IŠ TEN. Popierius, pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/IŠ TEN. Popierius, pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p102",
    theme: ""
},
    {
    title: "JAU VAKARĖJA II",
    src: "assets/full_2018/JAU VAKARĖJA II. Pop., pastelė, 35x49.webp",
    thumb: "assets/thumbs_2018/JAU VAKARĖJA II. Pop., pastelė, 35x49.webp",
    year: 2018,
    description: "Popierius, pastelė 35x49 cm",
    available: false,
    id: "p103",
    theme: ""
},
    {
    title: "JAU VAKARĖJA",
    src: "assets/full_2018/JAU VAKARĖJA. Pop., pastelė,35x50.webp",
    thumb: "assets/thumbs_2018/JAU VAKARĖJA. Pop., pastelė,35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p104",
    theme: ""
},
    {
    title: "JŪRA PASIPUOŠĖ RUDENIU",
    src: "assets/full_2018/JŪRA PASIPUOŠĖ RUDENIU 62X42 NEBETURIU.webp",
    thumb: "assets/thumbs_2018/JŪRA PASIPUOŠĖ RUDENIU 62X42 NEBETURIU.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p105",
    theme: ""
},
    {
    title: "JŪRA VĖLYVĄ PAVASARĮ",
    src: "assets/full_2019/JŪRA VĖLYVĄ PAVASARĮ. Pop., pastelė. 42x62 cm.webp",
    thumb: "assets/thumbs_2019/JŪRA VĖLYVĄ PAVASARĮ. Pop., pastelė. 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p106",
    theme: ""
},
    {
    title: "KAARRR",
    src: "assets/full_2018/KAARRR 35x50.webp",
    thumb: "assets/thumbs_2018/KAARRR 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p107",
    theme: ""
},
    {
    title: "KAPRIZINGOJI",
    src: "assets/full_2018/KAPRIZINGOJI. Sp. pop., pastelė, 42x62cm.webp",
    thumb: "assets/thumbs_2018/KAPRIZINGOJI. Sp. pop., pastelė, 42x62cm.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p108",
    theme: ""
},
    {
    title: "KARKLAI",
    src: "assets/full_2019/KARKLAI. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    thumb: "assets/thumbs_2019/KARKLAI. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p109",
    theme: ""
},
    {
    title: "KASDIEN KITOKIA",
    src: "assets/full_2019/KASDIEN KITOKIA. Popierius, pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/KASDIEN KITOKIA. Popierius, pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p110",
    theme: ""
},
    {
    title: "KITAS ŽIEMOS VAKARAS",
    src: "assets/full_2018/KITAS ŽIEMOS VAKARAS. Pop., pastelė, 36X47.webp",
    thumb: "assets/thumbs_2018/KITAS ŽIEMOS VAKARAS. Pop., pastelė, 36X47.webp",
    year: 2018,
    description: "Popierius, pastelė 36x47 cm",
    available: false,
    id: "p111",
    theme: ""
},
    {
    title: "KUNKULIUOJANTI",
    src: "assets/full_2019/KUNKULIUOJANTI. Pop., pastelė,42x62 cm.webp",
    thumb: "assets/thumbs_2019/KUNKULIUOJANTI. Pop., pastelė,42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p112",
    theme: ""
},
    {
    title: "KVEPIA PAVASARIU",
    src: "assets/full_2019/KVEPIA PAVASARIU. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/KVEPIA PAVASARIU. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p113",
    theme: ""
},
    {
    title: "LIŪDNA VARNA LAUKIA PAVASARIO",
    src: "assets/full_2018/Liūdna varna laukia pavasario 35x50.webp",
    thumb: "assets/thumbs_2018/Liūdna varna laukia pavasario 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p114",
    theme: ""
},
    {
    title: "LUBINAI",
    src: "assets/full_2018/LUBINAI. Popierius, pastelė, 34x49cm.webp",
    thumb: "assets/thumbs_2018/LUBINAI. Popierius, pastelė, 34x49cm.webp",
    year: 2018,
    description: "Popierius, pastelė 34x49 cm",
    available: false,
    id: "p115",
    theme: ""
},
    {
    title: "PAJŪRIO VĖJŲ LENKIAMI",
    src: "assets/full_2018/PAJŪRIO VĖJŲ LENKIAMI. Popierius, pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/PAJŪRIO VĖJŲ LENKIAMI. Popierius, pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p116",
    theme: ""
},
    {
    title: "PAKRANTĖ TIES KARKLE",
    src: "assets/full_2018/PAKRANTĖ TIES KARKLE. Pop., pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/PAKRANTĖ TIES KARKLE. Pop., pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p117",
    theme: ""
},
    {
    title: "PAKRANTĖ",
    src: "assets/full_2018/PAKRANTĖ. Pop., pastelė, 39x73.webp",
    thumb: "assets/thumbs_2018/PAKRANTĖ. Pop., pastelė, 39x73.webp",
    year: 2018,
    description: "Popierius, pastelė 39x73 cm",
    available: false,
    id: "p118",
    theme: ""
},
    {
    title: "PALIKO PĖDSAKUS AR PRIPĖDAVO",
    src: "assets/full_2019/PALIKO PĖDSAKUS AR PRIPĖDAVO 62x42.webp",
    thumb: "assets/thumbs_2019/PALIKO PĖDSAKUS AR PRIPĖDAVO 62x42.webp",
    year: 2019,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p119",
    theme: ""
},
    {
    title: "PASKUTINĖ ŽIEMOS DIENA",
    src: "assets/full_2018/PASKUTINĖ ŽIEMOS DIENA. Pop., pastelė, 35X50.webp",
    thumb: "assets/thumbs_2018/PASKUTINĖ ŽIEMOS DIENA. Pop., pastelė, 35X50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p120",
    theme: ""
},
    {
    title: "PAVASARIO LAUKIANČIOS",
    src: "assets/full_2018/Pavasario laukiančios. Pop., pastelė. 35x50.webp",
    thumb: "assets/thumbs_2018/Pavasario laukiančios. Pop., pastelė. 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p121",
    theme: ""
},
    {
    title: "PEIZAŽAS",
    src: "assets/full_2018/PEIZAŽAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/PEIZAŽAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p122",
    theme: ""
},
    {
    title: "PRISNIGO",
    src: "assets/full_2019/PRISNIGO. Pop., pastelė, 41,5x62cm.webp",
    thumb: "assets/thumbs_2019/PRISNIGO. Pop., pastelė, 41,5x62cm.webp",
    year: 2018,
    description: "Popierius, pastelė 41,5x62 cm",
    available: false,
    id: "p123",
    theme: ""
},
    {
    title: "PURSLAI",
    src: "assets/full_2019/PURSLAI. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/PURSLAI. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p124",
    theme: ""
},
    {
    title: "PUTOJANTI BALTIJA",
    src: "assets/full_2018/PUTOJANTI BALTIJA. Sp. pop.,pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2018/PUTOJANTI BALTIJA. Sp. pop.,pastelė, 42x62 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p125",
    theme: ""
},
    {
    title: "RAMUS ŽIEMOS VAKARAS",
    src: "assets/full_2019/RAMUS ŽIEMOS VAKARAS. Pop., pastelė, 62X42.webp",
    thumb: "assets/thumbs_2019/RAMUS ŽIEMOS VAKARAS. Pop., pastelė, 62X42.webp",
    year: 2019,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p126",
    theme: ""
},
    {
    title: "RAMYBĖ",
    src: "assets/full_2019/RAMYBĖ. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2019/RAMYBĖ. Pop., pastelė, 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p127",
    theme: ""
},
    {
    title: "RIKIS",
    src: "assets/full_2018/RIKIS nebeturiu.webp",
    thumb: "assets/thumbs_2018/RIKIS nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė",
    available: false,
    id: "p128",
    theme: ""
},
    {
    title: "ROMANTIŠKAS",
    src: "assets/full_2018/ROMANTIŠKAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ROMANTIŠKAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p129",
    theme: ""
},
    {
    title: "RUDENINĖ PILKUMA",
    src: "assets/full_2018/RUDENINĖ PILKUMA. Pop., pastelė, 62x42.webp",
    thumb: "assets/thumbs_2018/RUDENINĖ PILKUMA. Pop., pastelė, 62x42.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p130",
    theme: ""
},
    {
    title: "RYTO SKAIDRUMAS",
    src: "assets/full_2018/RYTO SKAIDRUMAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/RYTO SKAIDRUMAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p131",
    theme: ""
},
    {
    title: "RUDENINĖ PILKUMA",
    src: "assets/full_2018/ŠALČIO ETIUDAS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ŠALČIO ETIUDAS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p132",
    theme: ""
},
    {
    title: "SALDUMYNŲ MĖGĖJAMS",
    src: "assets/full_2018/Saldumynų mėgėjams. Pop., pastelė, 31x50cm nebeturiu.webp",
    thumb: "assets/thumbs_2018/Saldumynų mėgėjams. Pop., pastelė, 31x50cm nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 31x50cm cm",
    available: false,
    id: "p133",
    theme: ""
},
    {
    title: "",
    src: "assets/2019/SENAM SODE. Pop., pastelė, 42x62cm.webp",
    thumb: "assets/thumbs_2019/SENAM SODE. Pop., pastelė, 42x62cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62cm cm",
    available: false,
    id: "p134",
    theme: ""
},
    {
    title: "SENAS TAKAS",
    src: "assets/full_2019/SENAS TAKAS. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    thumb: "assets/thumbs_2019/SENAS TAKAS. Pop., pastelė, 42x62 cm Nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p135",
    theme: ""
},
    {
    title: "SKRYDIS VIRŠ BANGŲ",
    src: "assets/full_2019/SKRYDIS VIRŠ BANGŲ. Popierius, pastelė, 62x42 cm nebeturiu.webp",
    thumb: "assets/thumbs_2019/SKRYDIS VIRŠ BANGŲ. Popierius, pastelė, 62x42 cm nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p136",
    theme: ""
},
    {
    title: "SKRYDIS VIRŠ ŽALIŲ BANGŲ",
    src: "assets/full_2019/SKRYDIS VIRŠ ŽALIŲ BANGŲ. Pop., pastelė, 42x62 cm nebeturiu.webp",
    thumb: "assets/thumbs_2019/SKRYDIS VIRŠ ŽALIŲ BANGŲ. Pop., pastelė, 42x62 cm nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p137",
    theme: ""
},
    {
    title: "SKRYDIS",
    src: "assets/full_2018/SKRYDIS. Pop., pastelė, 40x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/SKRYDIS. Pop., pastelė, 40x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 40x50 cm",
    available: false,
    id: "p138",
    theme: ""
},
    {
    title: "SPALVOTA PILKUMA",
    src: "assets/full_2019/SPALVOTA PILKUMA. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/SPALVOTA PILKUMA. Pop., pastelė, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p139",
    theme: ""
},
    {
    title: "SUTEMOS",
    src: "assets/full_2018/SUTEMOS. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/SUTEMOS. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p140",
    theme: ""
},
    {
    title: "ŠVIESA",
    src: "assets/full_2018/ŠVIESA. Pop., pastelė, 36x47 Nebeturiu.webp",
    thumb: "assets/thumbs_2018/ŠVIESA. Pop., pastelė, 36x47 Nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 36x47 cm",
    available: false,
    id: "p141",
    theme: ""
},
    {
    title: "TAMSŪS DEBESIAI",
    src: "assets/full_2018/Tamsūs debesiai. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2018/Tamsūs debesiai. Pop., pastelė, 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p142",
    theme: ""
},
    {
    title: "TIK TAKĄ PER KOPAS, MALDAUJU, PALIK",
    src: "assets/full_2018/TIK TAKĄ PER KOPAS, MALDAUJU, PALIK (In memoriam Kazimierui). Popierius, pastelė, 36x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/TIK TAKĄ PER KOPAS, MALDAUJU, PALIK (In memoriam Kazimierui). Popierius, pastelė, 36x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 36x50 cm",
    available: false,
    id: "p143",
    theme: ""
},
    {
    title: "TOBULAS VAKARAS",
    src: "assets/full_2018/TOBULAS VAKARAS.Popierius, pastelė, 35x50 nebeturiu.webp",
    thumb: "assets/thumbs_2018/TOBULAS VAKARAS.Popierius, pastelė, 35x50 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p144",
    theme: ""
},
    {
    title: "TOKIA GRAŽI PILKA DIENA",
    src: "assets/full_2019/TOKIA GRAŽI PILKA DIENA (buvo). Popierius, pastelė 42x62.webp",
    thumb: "assets/thumbs_2019/TOKIA GRAŽI PILKA DIENA (buvo). Popierius, pastelė 42x62.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p145",
    theme: ""
},
    {
    title: "TYLUMA RAMUMA",
    src: "assets/full_2018/TYLUMA RAMUMA. Popierius, pastelė, 62x42 cm.webp",
    thumb: "assets/thumbs_2018/TYLUMA RAMUMA. Popierius, pastelė, 62x42 cm.webp",
    year: 2018,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p146",
    theme: ""
},
    {
    title: "ŪKANOS",
    src: "assets/full_2019/ŪKANOS. Pop., pastelė, 40x60 nebeturiu.webp",
    thumb: "assets/thumbs_2019/ŪKANOS. Pop., pastelė, 40x60 nebeturiu.webp",
    year: 2019,
    description: "Popierius, pastelė 40x60 cm",
    available: false,
    id: "p147",
    theme: ""
},
    {
    title: "VAKARO JUDĖJIMAS",
    src: "assets/full_2019/VAKARO JUDĖJIMAS (.Evening movement). Pastelė, popierius, 42x62 cm.webp",
    thumb: "assets/thumbs_2019/VAKARO JUDĖJIMAS (.Evening movement). Pastelė, popierius, 42x62 cm.webp",
    year: 2019,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p148",
    theme: ""
},
    {
    title: "VAKARO ŠVELNUMAS",
    src: "assets/full_2018/VAKARO ŠVELNUMAS 42x62.webp",
    thumb: "assets/thumbs_2018/VAKARO ŠVELNUMAS 42x62.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p149",
    theme: ""
},
    {
    title: "VASARIO SAULĖ",
    src: "assets/full_2018/VASARIO SAULĖ. Pop., pastelė, 50x35.webp",
    thumb: "assets/thumbs_2018/VASARIO SAULĖ. Pop., pastelė, 50x35.webp",
    year: 2018,
    description: "Popierius, pastelė 50x35 cm",
    available: false,
    id: "p150",
    theme: ""
},
    {
    title: "VASARIŠKAI GAIVI BANGA",
    src: "assets/full_2018/Vasariškai gaivi banga 35x57.webp",
    thumb: "assets/thumbs_2018/Vasariškai gaivi banga 35x57.webp",
    year: 2018,
    description: "Popierius, pastelė 35x57 cm",
    available: false,
    id: "p151",
    theme: ""
},
    {
    title: "VASAROS BANGOS",
    src: "assets/full_2018/VASAROS BANGOS. Pop., pastelė, 35x57.webp",
    thumb: "assets/thumbs_2018/VASAROS BANGOS. Pop., pastelė, 35x57.webp",
    year: 2018,
    description: "Popierius, pastelė 35x57 cm",
    available: false,
    id: "p152",
    theme: ""
},
    {
    title: "VILTIES SPINDULYS",
    src: "assets/full_2018/VILTIES SPINDULYS 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2018/VILTIES SPINDULYS 42x62 nebeturiu.webp",
    year: 2018,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p153",
    theme: ""
},
    {
    title: "ŽIEMIŠKAI PASIPUOŠĘ",
    src: "assets/full_2018/ŽIEMIŠKAI PASIPUOŠĘ. Pop., pastelė, 35x50.webp",
    thumb: "assets/thumbs_2018/ŽIEMIŠKAI PASIPUOŠĘ. Pop., pastelė, 35x50.webp",
    year: 2018,
    description: "Popierius, pastelė 35x50 cm",
    available: false,
    id: "p154",
    theme: ""
},
    {
    title: "ALYVŲ ŽYDĖJIMO METAS",
    src: "assets/full_2020/ALYVŲ ŽYDĖJIMO METAS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/ALYVŲ ŽYDĖJIMO METAS. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p155",
    theme: ""
},
    {
    title: "ATSIGRĘŽIAU Į TAVE",
    src: "assets/full_2020/Atsigręžiau į tave. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Atsigręžiau į tave. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p156",
    theme: ""
},
    {
    title: "ATSISUKTI Į SAULĘ",
    src: "assets/full_2020/ATSISUKTI Į SAULĘ. Pop., sausa pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/ATSISUKTI Į SAULĘ. Pop., sausa pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p157",
    theme: ""
},
    {
    title: "BALANDIS JAU... AR PASTEBĖJAI?",
    src: "assets/full_2020/Balandis jau... ar pastebėjai Sp. pop.,pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Balandis jau... ar pastebėjai Sp. pop.,pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p158",
    theme: ""
},
    {
    title: "BIJŪNAI DAR NENUVYTO",
    src: "assets/full_2020/Bijūnai dar nenuvyto. Pop., pastelė,42×62.webp",
    thumb: "assets/thumbs_2020/Bijūnai dar nenuvyto. Pop., pastelė,42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p159",
    theme: ""
},
    {
    title: "BITKRĖSLĖS BALTOJE VAZOJE",
    src: "assets/full_2020/BITKRĖSLĖS BALTOJE VAZOJE, Pop., pastelė, 49x32.webp",
    thumb: "assets/thumbs_2020/BITKRĖSLĖS BALTOJE VAZOJE, Pop., pastelė, 49x32.webp",
    year: 2020,
    description: "Popierius, pastelė 49x32 cm",
    available: false,
    id: "p160",
    theme: ""
},
    {
    title: "DAR VIENAS TAKAS, KVIEČIANTIS PRIE JŪROS",
    src: "assets/full_2020/Dar vienas takas, kviečiantis prie jūros. Pop., sausa pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/Dar vienas takas, kviečiantis prie jūros. Pop., sausa pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p161",
    theme: ""
},
    {
    title: "GALINGAS",
    src: "assets/full_2020/Galingas. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Galingas. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p162",
    theme: ""
},
    {
    title: "HORTENZIJA",
    src: "assets/full_2020/HORTENZIJA. Pop., pastelė, 57x42.webp",
    thumb: "assets/thumbs_2020/HORTENZIJA. Pop., pastelė, 57x42.webp",
    year: 2020,
    description: "Popierius, pastelė 57x42 cm",
    available: false,
    id: "p163",
    theme: ""
},
    {
    title: "JIEMS ŽMONIŲ PROBLEMOS NERŪPI",
    src: "assets/full_2020/Jiems žmonių problemos nerūpi. Pop.,pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Jiems žmonių problemos nerūpi. Pop.,pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p164",
    theme: ""
},
    {
    title: "KIAULPIENĖS ŽYDI GAUSIAI",
    src: "assets/full_2020/Kiaulpienės žydi gausiai, Sp. pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/Kiaulpienės žydi gausiai, Sp. pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p165",
    theme: ""
},
    {
    title: "NAMAI KVEPIA IEVOMIS",
    src: "assets/full_2020/Namai kvepia ievomis. Pop., pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Namai kvepia ievomis. Pop., pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p166",
    theme: ""
},
    {
    title: "NIEKADA NEPAILSTANTI",
    src: "assets/full_2020/Niekada nepailstanti. Pop., pastelė 42×62.webp",
    thumb: "assets/thumbs_2020/Niekada nepailstanti. Pop., pastelė 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p167",
    theme: ""
},
    {
    title: "OBELIS PASIPUOŠĖ",
    src: "assets/full_2020/OBELIS PASIPUOŠĖ. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/OBELIS PASIPUOŠĖ. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p168",
    theme: ""
},
    {
    title: "PASIKALBĖJIMAS",
    src: "assets/full_2020/Pasikalbėjimas. Pop., pastelė, 62×42.webp",
    thumb: "assets/thumbs_2020/Pasikalbėjimas. Pop., pastelė, 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p169",
    theme: ""
},
    {
    title: "RAUSVUMAS",
    src: "assets/full_2020/Rausvumas. Pop., pastelė,42×62.webp",
    thumb: "assets/thumbs_2020/Rausvumas. Pop., pastelė,42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p170",
    theme: ""
},
    {
    title: "SAULĖTAS PUŠYNAS",
    src: "assets/full_2020/SAULĖTAS PUŠYNAS. Sp. pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/SAULĖTAS PUŠYNAS. Sp. pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p171",
    theme: ""
},
    {
    title: "SENTIMENTALUS",
    src: "assets/full_2020/Sentimentalus. Pop., pastelė. 62×42.webp",
    thumb: "assets/thumbs_2020/Sentimentalus. Pop., pastelė. 62×42.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p172",
    theme: ""
},
    {
    title: "TRUMPAS TAVO ŽYDĖJIMAS",
    src: "assets/full_2020/TRUMPAS TAVO ŽYDĖJIMAS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2020/TRUMPAS TAVO ŽYDĖJIMAS. Pop., pastelė, 42x62.webp",
    year: 2020,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p173",
    theme: ""
},
    {
    title: "VAKARO SPINDULIŲ NUAUKSINTOS",
    src: "assets/full_2020/Vakaro spindulių nuauksintos. Pop.,pastelė, 62×42 Nebeturiu.webp",
    thumb: "assets/thumbs_2020/Vakaro spindulių nuauksintos. Pop.,pastelė, 62×42 Nebeturiu.webp",
    year: 2020,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p174",
    theme: ""
},
    {
    title: "VĖL PAVASARĖJA",
    src: "assets/full_2020/Vėl pavasarėja. Pop., pastelė, 42×62.webp",
    thumb: "assets/thumbs_2020/Vėl pavasarėja. Pop., pastelė, 42×62.webp",
    year: 2020,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p175",
    theme: ""
},
    {
    title: "ŽYDI VIKIAI PIEVOS PAKRAŠTY",
    src: "assets/full_2020/Žydi vikiai pievos pakrašty. Pop., sausa pastelė, 62x42 nebeturiu.webp",
    thumb: "assets/thumbs_2020/Žydi vikiai pievos pakrašty. Pop., sausa pastelė, 62x42 nebeturiu.webp",
    year: 2020,
    description: "Popierius, pastelė 62x42 cm",
    available: false,
    id: "p176",
    theme: ""
},
    {
    title: "AKMENUOTA PAKRANTĖ",
    src: "assets/full_2021/Akmenuota pakrantė. Pop., pastelė, 63×43.webp",
    thumb: "assets/thumbs_2021/Akmenuota pakrantė. Pop., pastelė, 63×43.webp",
    year: 2021,
    description: "Popierius, pastelė 63×43 cm",
    available: false,
    id: "p177",
    theme: ""
},
    {
    title: "BANGA GENA BANGĄ",
    src: "assets/full_2021/BANGA GENA BANGĄ. Popierius, sausa pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2021/BANGA GENA BANGĄ. Popierius, sausa pastelė, 42x62 cm.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p178",
    theme: ""
},
    {
    title: "ČIA IR TEN",
    src: "assets/full_2021/ČIA IR TEN. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2021/ČIA IR TEN. Pop., pastelė, 42x62.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p179",
    theme: ""
},
    {
    title: "DAR BIJŪNAI NENUVYTO",
    src: "assets/full_2021/DAR BIJŪNAI NENUVYTO. Popierius, sausa pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2021/DAR BIJŪNAI NENUVYTO. Popierius, sausa pastelė, 42x62 cm.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p180",
    theme: ""
},
    {
    title: "FLIOKSAI PRIE APSILAUPIUSIOS SIENOS",
    src: "assets/full_2021/FLIOKSAI PRIE APSILAUPIUSIOS SIENOS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2021/FLIOKSAI PRIE APSILAUPIUSIOS SIENOS. Pop., pastelė, 42x62.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p181",
    theme: ""
},
    {
    title: "NATIURMORTAS SU KIAULPIENĖM",
    src: "assets/full_2021/Natiurmortas su kiaulpienėm. Sp. pop., pastelė, 50x40.webp",
    thumb: "assets/thumbs_2021/Natiurmortas su kiaulpienėm. Sp. pop., pastelė, 50x40.webp",
    year: 2021,
    description: "Popierius, pastelė 50x40 cm",
    available: false,
    id: "p182",
    theme: ""
},
    {
    title: "PAUPIO SARGYBOJE",
    src: "assets/full_2021/Paupio sargyboje. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2021/Paupio sargyboje. Pop., pastelė, 42x62.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p183",
    theme: ""
},
    {
    title: "PUŠŲ VIRŠŪNĖMIS NUBĖGO VĖJAS",
    src: "assets/full_2021/PUŠŲ VIRŠŪNĖMIS NUBĖGO VĖJAS. Popierius, sausa pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2021/PUŠŲ VIRŠŪNĖMIS NUBĖGO VĖJAS. Popierius, sausa pastelė, 42x62 nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p184",
    theme: ""
},
    {
    title: "RAUSVAS VAKARAS PRIE UPĖS",
    src: "assets/full_2021/RAUSVAS VAKARAS PRIE UPĖS. Pop., pastelė, 42x62.webp",
    thumb: "assets/thumbs_2021/RAUSVAS VAKARAS PRIE UPĖS. Pop., pastelė, 42x62.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p185",
    theme: ""
},
    {
    title: "RŪKAS VIRŠ DANGĖS",
    src: "assets/full_2021/RŪKAS VIRŠ DANGĖS. Pop., sausa pastelė, 43x63 nebeturiu.webp",
    thumb: "assets/thumbs_2021/RŪKAS VIRŠ DANGĖS. Pop., sausa pastelė, 43x63 nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 43x63 cm",
    available: false,
    id: "p186",
    theme: ""
},
    {
    title: "SLYVOS ŠAKELĖ",
    src: "assets/full_2021/Slyvos šakelė. Pop., pastelė, 49×34.webp",
    thumb: "assets/thumbs_2021/Slyvos šakelė. Pop., pastelė, 49×34.webp",
    year: 2021,
    description: "Popierius, pastelė 49×34 cm",
    available: false,
    id: "p187",
    theme: ""
},
    {
    title: "SPINDI ŽAIŽARUOJA",
    src: "assets/full_2021/Spindi žaižaruoja. Pop., pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2021/Spindi žaižaruoja. Pop., pastelė, 42x62 nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p188",
    theme: ""
},
    {
    title: "ŠVIEŽIŲ BUROKĖLIŲ SEZONAS",
    src: "assets/full_2021/Šviežių burokėlių sezonas. Pop., pastelė, 42×62 cm.webp",
    thumb: "assets/thumbs_2021/Šviežių burokėlių sezonas. Pop., pastelė, 42×62 cm.webp",
    year: 2021,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p189",
    theme: ""
},
    {
    title: "SVYRA SERBENTŲ KEKĖS",
    src: "assets/full_2021/SVYRA SERBENTŲ KEKĖS. Pop., sausa pastelė, 43,5 x 63,5 cm Nebeturiu.webp",
    thumb: "assets/thumbs_2021/SVYRA SERBENTŲ KEKĖS. Pop., sausa pastelė, 43,5 x 63,5 cm Nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 43,5 x 63,5 cm",
    available: false,
    id: "p190",
    theme: ""
},
    {
    title: "TARP VANDENS IR DEBESŲ",
    src: "assets/full_2021/TARP VANDENS IR DEBESŲ. Pop., sausa pastelė, 63x43cm nebeturiu.webp",
    thumb: "assets/thumbs_2021/TARP VANDENS IR DEBESŲ. Pop., sausa pastelė, 63x43cm nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 63x43 cm",
    available: false,
    id: "p191",
    theme: ""
},
    {
    title: "UPĖ",
    src: "assets/full_2021/UPĖ. Pop., pastelė, 42x62 nebeturiu.webp",
    thumb: "assets/thumbs_2021/UPĖ. Pop., pastelė, 42x62 nebeturiu.webp",
    year: 2021,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p192",
    theme: ""
},
    {
    title: "Aguonėlės",
    src: "assets/full_2022/Aguonėlės. Canson popierius, sausa pastelė, 47×61 cm. Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Aguonėlės. Canson popierius, sausa pastelė, 47×61 cm. Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 47×61 cm",
    available: false,
    id: "p193",
    theme: ""
},
    {
    title: "Atspindžiai",
    src: "assets/full_2022/Atspindžiai. Canson popierius, sausa pastelė, 47×61,5 cm turiu.webp",
    thumb: "assets/thumbs_2022/Atspindžiai. Canson popierius, sausa pastelė, 47×61,5 cm turiu.webp",
    year: 2022,
    description: "Popierius, pastelė 47×61,5 cm",
    available: false,
    id: "p194",
    theme: ""
},
    {
    title: "Dvi pienės pavėsyje",
    src: "assets/full_2022/Dvi pienės pavėsyje. Pop., pastelė, 42x62 cm.webp",
    thumb: "assets/thumbs_2022/Dvi pienės pavėsyje. Pop., pastelė, 42x62 cm.webp",
    year: 2022,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p195",
    theme: ""
},
    {
    title: "Ir apie orus- saulėta, vėjuota, šalta",
    src: "assets/full_2022/Ir apie orus- saulėta, vėjuota, šalta. Pop., pastelė, 51,5×71,5.webp",
    thumb: "assets/thumbs_2022/Ir apie orus- saulėta, vėjuota, šalta. Pop., pastelė, 51,5×71,5.webp",
    year: 2022,
    description: "Popierius, pastelė 51,5×71,5 cm",
    available: false,
    id: "p196",
    theme: ""
},
    {
    title: "Kai skamba vasara",
    src: "assets/full_2022/Kai skamba vasara. Pop., pastelė, 42×62cm.webp",
    thumb: "assets/thumbs_2022/Kai skamba vasara. Pop., pastelė, 42×62cm.webp",
    year: 2022,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p197",
    theme: ""
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
    theme: ""
},
    {
    title: "Prie upeliuko",
    src: "assets/full_2022/Prie upeliuko. Pop., pastelė, 62×42cm Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Prie upeliuko. Pop., pastelė, 62×42cm Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 62×42 cm",
    available: false,
    id: "p200",
    theme: ""
},
    {
    title: "Ramunių pasaka tau",
    src: "assets/full_2022/Ramunių pasaka tau. Pop., pastelė, 42×62. Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Ramunių pasaka tau. Pop., pastelė, 42×62. Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p201",
    theme: ""
},
    {
    title: "Saulė leidžias pamažu",
    src: "assets/full_2022/Saulė leidžias pamažu. Sausa pastelė, CANSON popierius, 47×61.webp",
    thumb: "assets/thumbs_2022/Saulė leidžias pamažu. Sausa pastelė, CANSON popierius, 47×61.webp",
    year: 2022,
    description: "Popierius, pastelė 47×61 cm",
    available: false,
    id: "p202",
    theme: ""
},
    {
    title: "Truputį debesuota",
    src: "assets/full_2022/Truputį debesuota. Pop., pastelė, 35×49.webp",
    thumb: "assets/thumbs_2022/Truputį debesuota. Pop., pastelė, 35×49.webp",
    year: 2022,
    description: "Popierius, pastelė 35×49 cm",
    available: false,
    id: "p203",
    theme: ""
},
    {
    title: "Vakarėja",
    src: "assets/full_2022/Vakarėja. Pop., pastelė, 42×62.webp",
    thumb: "assets/thumbs_2022/Vakarėja. Pop., pastelė, 42×62.webp",
    year: 2022,
    description: "Popierius, pastelė 42×62 cm",
    available: false,
    id: "p204",
    theme: ""
},
    {
    title: "Vėjas kopoms nebaisus",
    src: "assets/full_2022/Vėjas kopoms nebaisus. Pop., pastelė, 35×49.webp",
    thumb: "assets/thumbs_2022/Vėjas kopoms nebaisus. Pop., pastelė, 35×49.webp",
    year: 2022,
    description: "Popierius, pastelė 35×49 cm",
    available: false,
    id: "p205",
    theme: ""
},
    {
    title: "Vėl žydi kaštonai",
    src: "assets/full_2022/Vėl žydi kaštonai. Sausa pastelė, popierius CANSON,61×47cm turiu.webp",
    thumb: "assets/thumbs_2022/Vėl žydi kaštonai. Sausa pastelė, popierius CANSON,61×47cm turiu.webp",
    year: 2022,
    description: "Popierius, pastelė 61×47 cm",
    available: false,
    id: "p206",
    theme: ""
},
    {
    title: "Visokie švelnumai žydi kopose",
    src: "assets/full_2022/Visokie švelnumai žydi kopose. Pop., pastelė, 42x62 Nebeturiu.webp",
    thumb: "assets/thumbs_2022/Visokie švelnumai žydi kopose. Pop., pastelė, 42x62 Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė 42x62 cm",
    available: false,
    id: "p207",
    theme: ""
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
    available: false,
    id: "p209",
    theme: ""
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/Dovana Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Dovana Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p210",
    theme: ""
},
    {
    title: "Kreivas miškas",
    src: "assets/full_v_2022/Kreivas miškas Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Kreivas miškas Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p211",
    theme: ""
},
    {
    title: "Lelijų prūdelis",
    src: "assets/full_v_2022/Lelijų prūdelis Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Lelijų prūdelis Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p212",
    theme: ""
},
    {
    title: "Miške",
    src: "assets/full_v_2022/Miške Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Miške Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelėm",
    available: false,
    id: "p213",
    theme: ""
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p214",
    theme: ""
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/Nebeturiu2.webp",
    thumb: "assets/thumbs_v_2022/Nebeturiu2.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p215",
    theme: ""
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2022/Popierius PASTELMAT nuostabus. Puikiai dengia Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Popierius PASTELMAT nuostabus. Puikiai dengia Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p216",
    theme: ""
},
    {
    title: "Šiaurės jūra",
    src: "assets/full_v_2022/Šiaurės jūra Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Šiaurės jūra Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p217",
    theme: ""
},
    {
    title: "Švyturys",
    src: "assets/full_v_2022/Švyturys Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Švyturys Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p218",
    theme: ""
},
    {
    title: "Vakaro spinduliuose",
    src: "assets/full_v_2022/Vakaro spinduliuose Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Vakaro spinduliuose Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p219",
    theme: ""
},
    {
    title: "Vėjas kopose šiandien",
    src: "assets/full_v_2022/Vėjas kopose šiandien.Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Vėjas kopose šiandien.Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p220",
    theme: ""
},
    {
    title: "Vlielando stogai",
    src: "assets/full_v_2022/Vlielando stogai Nebeturiu.webp",
    thumb: "assets/thumbs_v_2022/Vlielando stogai Nebeturiu.webp",
    year: 2022,
    description: "Popierius, pastelė",
    available: false,
    id: "p221",
    theme: ""
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2024/509398130_10238356793803257_2345329586630793267_n.webp",
    thumb: "assets/thumbs_v_2024/509398130_10238356793803257_2345329586630793267_n.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: false,
    id: "p222",
    theme: ""
},
    {
    title: "armenhuis",
    src: "assets/full_v_2024/armenhuis.webp",
    thumb: "assets/thumbs_v_2024/armenhuis.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: false,
    id: "p223",
    theme: ""
},
    {
    title: "be pavadinimo",
    src: "assets/full_v_2024/be pavadinimo.webp",
    thumb: "assets/thumbs_v_2024/be pavadinimo.webp",
    year: 2024,
    description: "Popierius, pastelė x cm",
    available: false,
    id: "p224",
    theme: ""
},
    {
    title: "jachtos",
    src: "assets/full_v_2024/jachts.webp",
    thumb: "assets/thumbs_v_2024/jachts.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: false,
    id: "p225",
    theme: ""
},
    {
    title: "Jachtų uostelyje",
    src: "assets/full_v_2024/Jachtų uostelyje. Pastelė ant pastelmat popieriaus, 40×30.webp",
    thumb: "assets/thumbs_v_2024/Jachtų uostelyje. Pastelė ant pastelmat popieriaus, 40×30.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: false,
    id: "p226",
    theme: ""
},
    {
    title: "kopose",
    src: "assets/full_v_2024/Kopose. Pastelė ant pastelmat, 30×40.webp",
    thumb: "assets/thumbs_v_2024/Kopose. Pastelė ant pastelmat, 30×40.webp",
    year: 2024,
    description: "Popierius, pastelė 40x30 cm",
    available: false,
    id: "p227",
    theme: ""
},
    {
    title: "prie prūdelio",
    src: "assets/full_v_2024/Prie prūdelio. Pastelė ant pastelmat popieriaus. 40×30.webp",
    thumb: "assets/thumbs_v_2024/Prie prūdelio. Pastelė ant pastelmat popieriaus. 40×30.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: false,
    id: "p228",
    theme: ""
},
    {
    title: "Prie Šiaurės jūros ir vėl vėjuota",
    src: "assets/full_v_2024/Prie Šiaurės jūros ir vėl vėjuota. Pop., pastelė, 30×40.webp",
    thumb: "assets/thumbs_v_2024/Prie Šiaurės jūros ir vėl vėjuota. Pop., pastelė, 30×40.webp",
    year: 2024,
    description: "Popierius, pastelė 40x30 cm",
    available: false,
    id: "p229",
    theme: ""
},
    {
    title: "pro langą",
    src: "assets/full_v_2024/pro langa.webp",
    thumb: "assets/thumbs_v_2024/pro langa.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: false,
    id: "p230",
    theme: ""
},
    {
    title: "švyturys",
    src: "assets/full_v_2024/švyturys.webp",
    thumb: "assets/thumbs_v_2024/švyturys.webp",
    year: 2024,
    description: "Popierius, pastelė 30x40 cm",
    available: false,
    id: "p231",
    theme: ""
}
];


