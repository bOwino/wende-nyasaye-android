import React, { useState } from "react";
import { StyleSheet, Text, FlatList, Pressable, View } from "react-native";
import { useFonts } from "expo-font";

function Content({ navigation }) {
  const [song, setSong] = useState([
    {
      id: 1,
      title: "1 - Nyasachwa man Malo",
      author: "Reginald herber",
      engTitle: "SDAH 73 Holy, Holy, Holy",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Nyasachwa man malo, Wuon teko duto \nOnge teko moro mak tekone adier; \nOnge ng'ato moro miporo go Nyasaye. \nEn Ruoth ruodhi, be Nyasach nyiseche.\n\n",
      stanNum2: "2",
      stanTwo:
        "Hera mar Nyasachwa, Hera adieri \nEn nooro Yesu nikech noherowa; \nNe Yesu othonwa mondo kik walal ngang', \nTo wanahere kak' owinjore.\n\n",
      stanNum3: "3",
      stanThree:
        "Ng'wono mar Nyasachwa, ng'wono mochwere; \nOloso ji duto, okonyogi pile; \nKik wacha Nyasachwa, to wamiye duong' chuth, \nEn Wuon ng'wono, gi hera, gi teko.",
    },
    {
      id: 2,
      title: "2 - Wapaki Nyasaye",
      author: "Wm P. Mackay",
      engTitle: "SFW 818- We praise thee O God",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Wapaki, Nyasaye, \nIn miherowa ngang'! \nNioro Wuodi mond' othonwa e yath.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Alleluya! Wanapaki; \nAlleluya! Amin. \nAlleluya! Wanapaki; \nIgwedhwa koro.\n\n",
      stanNum2: "2",
      stanTwo:
        "Wapaki, Nyasaye, \nnikech Roho Maler. \nOsefwenyonwa hera mar Jawarwa.\n\n",
      stanNum3: "3",
      stanThree:
        "Pak duto obed ni \nNyarombo Nyasaye, \nMa noting'o kethwa, rembe nochwernwa.\n\n",
      stanNum4: "4",
      stanFour:
        "Pak duto obed ni, \nNyasaye, Wuon ng'wono, \nMa noresowa kendo oritowa.\n\n",
      stanNum5: "5",
      stanFive:
        "Chiew chunywa duto, \npong'wa gi herani; \nMach moa e polo omi chunywa liet.\n",
    },
    {
      id: 3,
      title: "3 - Duong Obed ni Wuonwa",
      author: "Fanny J.  Crosby",
      engTitle: "SDAH 341 To God Be The Glory",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Duong' obed ni Wuonwa kuom gi motimo; \nNikech nohero piny, mochiwo Wuode \nMa notho e yath Mondo oluok richo, \nMondo ng'a moyie kuome oyud ngima.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Wapak Ruoth, wapak Ruoth, \nPiny mond' owinj dwonde; \nWapak Ruoth, wapak Ruoth, \nMondo ji duto luor; \nBiuru ni Wuonwa kuom Yesu Wuode, \nMondo wapake kuom gik mosetimo.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ruoth Yesu noseng'iewowa gi rembe, \nNyasaye osingo ni jo moyie kuome, \nKinde ma giruako Yesu e chunygi \nE ma enowenigie kethgi duto.\n\n",
      stanNum3: "3",
      stanThree:
        "Osetimo tichne madongo ni piny, \nWamor moloyo kuom puonj Yesu Ruodhwa; \nWanamor moloyo gi chunywa duto, \nKa waneno wang' Yesu ma Jawarwa.",
    },
    {
      id: 4,
      title: "4 - Nying Yesu Mondo Yudi Pak",
      author: "Edward Perronet",
      engTitle: "SDAH 229 All Hail The Power",
      doh: "Doh en F",
      stanNum1: "1",
      stanOne:
        "Nying Yesu mondo yudi pak, \nJi mondo gidende; Malaika me polo ku, \nMiuru Ruodhu duong'. Malaika\n\n",
      stanNum2: "2",
      stanTwo:
        "Miuru Ruoth duong' e chunyu, \nGeneuru kende; Ting' nyinge malo kuom jopiny, \nMiuru Ruodhu duong'. Ting' nyinge\n\n",
      stanNum3: "3",
      stanThree:
        "Un jo moketho, paruru kaka nogur Yesu; \nNowaru gi rembe maler, \nMiuru Ruodhu duong'. Nowaru\n\n",
      stanNum4: "4",
      stanFour:
        "Un jo mong'eyo ng'wono Ruoth, \nUn ma koth Israel, Hereuru, pake gi wer, \nMiuru Ruodhu duong'. Hereuru.",
    },
    {
      id: 5,
      title: "5 - To Pakuru Ruoth",
      author: "Robert Grant",
      engTitle: "SDAH 83 O Worship the King",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "To pakuru Ruoth me polo malo; \nWeruru maber: ohero adier; \nEn lwanda mageno, Makonyo duto; \nMosiko mochwere, mipako chutho.\n\n",
      stanNum2: "2",
      stanTwo:
        "To paruru piny, en hono maduong', \nGi nam, kodi yien, gi gode kod lum; \nWawuoro ngang' rieko maloso kama; \nwapako Nyasachwa manyisowa ma.\n\n",
      stanNum3: "3",
      stanThree:
        "Gik moko me piny onyisowa ma, \nNyasachwa oduong', oler adiera; \nOherowa duto gotieno gokinyi; \nOmiyowa ngima, orito mang'won.\n\n",
      stanNum4: "4",
      stanFour:
        "Jo malaika gipako mamor, \nJatelo maduong' mohero jopiny; \nTo wan jo mireso wadende maber, \nWapaki adiera kama nyaka chieng'.",
    },
    {
      id: 6,
      title: "6 - Wuonwa Wabironi",
      author: "W.  J.  Bostwick",
      engTitle: "SFW 846 Father We Come to thee",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Wuonwa, wabironi, konyruok waongego \nIn e kar konyruokwa, wasayoi; Kwapogore kodi, \nto waneno chandruok; Wuonwa, \nmond' ihowa, ka ma wantie.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Wuonwa wabironi, wan to wanyap \nKik iwewa kendwa Wuonwa, winjwa.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ritwa kuom wasikwa, ritwa e chandruokwa \nWarwa e masiche, kwaluongoi. \nChunywa ochandore, wadwaro tekoni \nWakwayoi chutho, miwa teko.\n\n",
      stanNum3: "3",
      stanThree:
        "Ng'wononi imiwa, wabed magi chutho, \nChunywa mond' iriti, ka wan e wuoth. \nTelnwa, wakwayoi, nyaka watiek wuodhwa \nNyaka wadonj polo mar dak kodi",
    },
    {
      id: 7,
      title: "7 - Nyasaye Indi Jakonywa",
      author: "Isaac Watts",
      engTitle: "SFW 818- We praise thee O God",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Nyasaye indi nikonyowa, \nIn tekowa mak rum; \nWaluor ang'o t'iritowa \nMa nyaka piny ogik.\n\n",
      stanNum2: "2",
      stanTwo:
        "Chon ji maler nogenoi. \nNiritogi mang'won; \nTo ng'wononi mak lokore \nOmiyo wageni.\n\n",
      stanNum3: "3",
      stanThree:
        "Ka ne pok ichweyo pinyni \nNe gi moro onge; \nTo ne Intie Nyasaye maler, \nIntie ma nyaka chieng'.\n\n",
      stanNum4: "4",
      stanFour:
        "To gik moko duto mag piny \nGikadho akadha; \nTo gir polo ma ok lal ngang', \nGir polo wanayier.\n\n",
      stanNum5: "5",
      stanFive:
        "Nyasaye indi nikonyowa, \nIn tekowa mak rum; \nWalu bang'i pile pile, \nNyasaye ma Jakonywa.\n",
    },
    {
      id: 8,
      title: "8 - Winji Yuakna",
      author: "W.  H.  Doane",
      engTitle: "Oh Hear my cry",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Winji yuakna, inyisa ng'wononi, \nIn Jakonya, bina; Chunya motur ogombo bironi, \nIn Jakonya, bina.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Asebayo mabor e piny malich, \nAsebayo mabor kodi; kawa koro, \nIdwoka e kundi, In Jakonya bina.\n\n",
      stanNum2: "2",
      stanTwo:
        "Aonge kara, kata kar konyruok. \nIn Jakonya, bina; Wang'i mang'uon miya bedo gi ler, \nIn Jakonya, bina.\n\n",
      stanNum3: "3",
      stanThree:
        "An kenda ka, to tienda ol e yo, \nIn Jakonya, bina; Ang'iyoi, mond' ayud mor kuomi, \nIn Jakonya, bina.\n\n",
      stanFour:
        "In ok nidag jalo ma chunye tur, \nIn Jakonya, bina; Winj alamna, \nKendo iwinj yuakna, In Jakonya, bina.\n\n",
    },
    {
      id: 9,
      title: "9 - Jachuechna Gi Ruotha",
      author: "Anne Steele",
      engTitle: "SDAH 15 My Maker And My King",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Jachwechna gi Ruodha, Gigo ma an godo; \nNayudo duto e lueti, Gweth duto a kuomi; \nNayudo duto e lweti, Gweth duto a kuomi.\n\n",
      stanNum2: "2",
      stanTwo:
        "Nikech an chwech mari, Angima kuomi Ruoth; \nAn kaparo kak' ikonya Chunya opakoi; \nAn kaparo Kak' ikonya Chunya opakoi.\n\n",
      stanNum3: "3",
      stanThree:
        "Ruoth, damii ang'o? Duto ne mari chon; \nAchiwoni chunya chutho kata korach kama. \nAchiwoni chunya chutho kata korach kama.\n\n",
      stanNum4: "4",
      stanFour:
        "Pong' chunya gi hera, Imiya tekoni; \nWeche, paro, gi ngimana, Obed mari chutho. \nWeche, paro, gi ngimana, Obed mari chutho.\n\n",
    },
    {
      id: 10,
      title: "10 - Kristo In Wuon Ng'uono Duto",
      author: "Robert Robinson",
      engTitle: "SDAH 334 Come though font",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Kristo, In Wuon ng'wono duto, \nPuonj chunya mond' opaki; \nGwethni ma ayudo pile \nMiyo chunya mor kuomi. \nPuonja heroi adieri, \nMond' aluwi kwonde te; \nMuchi mondo dak e chunya, \nMiya genoi pile.\n\n",
      stanNum2: "2",
      stanTwo:
        "An apaki, In Jakonya, \nIn mitelona pile; \nAn kaluwo bang'i pile, \nNachopi thurwa gi kuwe. \nYandi Yesu to nodwara \nKa nabayo yo marach; \nRembe nochwer mond' owara, \nNoresa e kethona.\n\n",
      stanNum3: "3",
      stanThree:
        "An to, an jagope chutho \nKuom ng'wono motimona; \nHera mari mond' otweya \nAbed ng'ati chutho, Ruoth. \nPiny to kik oywaya kendo, \nAsik kuomi, yaye Jakony; \nAchiwoni chunya koro, \nObed mari nyaka chieng'.",
    },
    {
      id: 11,
      title: "11 - Yesu Isesingo",
      author: "Dr. W.O. Perkins",
      engTitle: "SWF 939 Jesus thou has promised",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Yesu isesingo, kata ji manok chokore e nyingi, \ninibed kodgi; Wan wageno wachni, \nka walemo ka; Yesu, bi igwedhwa, \nfwenyrinwa koro\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Yesu, bi igwedhwa, \nka waling' kae; \nYesu, bi igwedhwa, \nbed butwa pile.\n\n",
      stanNum2: "2",
      stanTwo:
        "Nisebedo kodwa ndalo mokadho; \nTo wadwari kodwa nyaka piny ogik; \nBinwa, yaye Jawarwa, nyiswa ng'wononi; \nWinjwa kendo yienwa, gwedhwa kwalemo.\n\n",
      stanNum3: "3",
      stanThree:
        "Yesu, konywa mondo wapaki maber; \nBedi Kuom alamwa ma walami go. \nMond' itegnwa yiewa, kijiwo chunywa; \nPong' chunywa gi hera, menynwa wang' yorwa.",
    },
    {
      id: 12,
      title: "12 - Ji Duto Mondo Wer Wendni",
      author: "R.  E.  Hudson",
      engTitle: "SDAH 250 O for a thousand Tongues",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "i duto mondo wer wendni, \nDenduru nying Yesu Ruodhwa! \nNyisuru duong' Nyasaye Ruodhwa, \nDenduru nying Yesu Ruodhwa!\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Denduru nyinge, denduru nyinge, \nNying Ruodhwa obedi gi pak. \nDenduru nyinge, denduru nyinge, \nDenduru nyinge Yesu Ruodhwa!\n\n",
      stanNum2: "2",
      stanTwo:
        "Otieko luorowa duto; \nDenduru nying Yesu Ruodhwa! \nOketho teko mar Satan, \nDenduru nying Yesu Ruodhwa.\n\n",
      stanNum3: "3",
      stanThree:
        "Oruako Jo malokrene; \nDenduru nying Yesu Ruodhwa! \nRembe oluoko jo moyie; \nDenduru nying Yesu Ruodhwa!\n\n",
    },
    {
      id: 13,
      title: "13 - Paki Nyasaye Mogwedhowa",
      author: "Guillaume Franc",
      engTitle: "Praise God From Whom",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Paki Nyasaye mogwedhowa. \nJi duto pake e piny ka; \nPaki Yesu, Malaika, \nPaki Jakony, Muya Maler. \nAmin.",
    },
    {
      id: 14,
      title: "14 - Nyasacha Mond Awuoth Kodi",
      author: "L. D. Avery Stuttle",
      engTitle: "SDAH 694 Praise God From Whom",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Nyasacha, mond' awuoth kodi, \nkaka Enok nowuotho chon; \nMak lueta mond kik aluor, \nMond' ayud twak mamit kodi; \nKata ok ane yo maber, \nTo Yesu mond' awuoth kodi.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ok dak awuothi kenda ngang'; \nYamo malich kudho e piny; \nObadho ng'eny madi maka; \nWasigu ng'eny malworoa; \nIn minyalo kweyo yamo, \nRuodha, ni mond' awuoth kodi.\n\n",
      stanNum3: "3",
      stanThree:
        "In ka imako lueta, Ruoth, \nnakwan gik mag piny ka nono; \nNamak wuodha katimo chir, \nNadhi nyime nyak' achopi \nE dalani, Zayun maler; \nJawarwa, mond' awuoth kodi.",
    },
    {
      id: 15,
      title: "15 - Wuo Gi Chunya Ruoth Yesu",
      author: "Lycurgus L. Pickettn",
      engTitle: "SFW 714 Speak to my soul",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Wuo gi chunya, Ruoth Yesu, Wuona gi dwol mamuol, \nKiwachona gi ng'wono, \"Ok idong' kendi ngang';\" \nYaw chunya mond' awinji, Awinj dwondi piyo; \nMi chunya mond' opaki, Kamor kuomi chutho.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Wuona gi dwol mamuol chuth, \nkinyisa herani; Ni mondo alo richo \nKawauotho kuom Roho; \nWuo koda ndalo duto, \nWuona gi dwol mamuol; \nAgeno singruok mari: \n\"Ok idong' kendi ngang'.\"\n\n",
      stanNum2: "2",
      stanTwo:
        "Wuo gi nyithindi pile, Tergi e yo maler; \nPong'gi gi mor gi ilo, Puonjgi rito galam; \nMondo giwalni chunygi, Kod ngimagi duto, \nRu biro mar pinyruodhi, Mondo waneni, Ruoth.\n\n",
      stanNum3: "3",
      stanThree:
        "Wuo koda kaka chon cha Niwuoyo gi jogi; \nNyisa gino Midwaro mondo atini, Ruoth; \nNi mondo amak chikni, Kendo amiyi duong'; \nE ngimana gi wuodha mond' apaki pile.\n\n",
    },
    {
      id: 16,
      title: "16 - Ruoth Maler Adwari Pile",
      author: "F. E Belden",
    },
    {
      id: 17,
      title: "17 - Kristo Ok An",
      author: "Albert Benjamin Simpson",
    },
    {
      id: 18,
      title: "18 - Yesu Mond Itawa Pile",
      author: "Wm. B.  Bradbury",
    },
    {
      id: 19,
      title: "19 - Ka Ma Yesu Chon Notho E Yath",
      author: "Rev.  J.H. Stockton",
    },
    {
      id: 20,
      title: "20 - Nyasachwa En E Lwandawa",
      author: "Vernon J.  Charlesworth",
    },
    {
      id: 21,
      title: "21 - Adwaro Ket Kod Yesu",
      author: "W. H. Doane",
    },
    {
      id: 22,
      title: "22 - Kik Ibarna, Yaye Jakonya",
      author: "Fanny J. Crosby",
    },
    {
      id: 23,
      title: "23 - Aheri, Aheri",
      author: "Jer. Ingalls",
    },
    {
      id: 24,
      title: "24 - Jawarna To Ni Yesu",
      author: "Unknown",
    },
    {
      id: 25,
      title: "25 - In E Ngimana Mochwere",
      author: "Fanny J. Crosby",
    },
    {
      id: 26,
      title: "26 - Ji Duto Te Mondo Giwer",
      author: "Charles Wesley",
    },
    {
      id: 27,
      title: "27 - To En Ng'a Man E Kund Dhok",
      author: "Unknown",
    },
    {
      id: 28,
      title: "28 - Nying Mamit E Piny Gi Polo",
      author: "W. A Ogden",
    },
    {
      id: 29,
      title: "29 - Yesu Jakwath Moheroae",
      author: "Sir H. W.  Baker",
    },
    {
      id: 30,
      title: "30 - Apako Hera Nyasaye Wuora",
      author: "J.  G.  Crabbe",
    },
    {
      id: 31,
      title: "31 - Duto Paki, Ruodh Polo",
      author: "George William Condery",
    },
    {
      id: 32,
      title: "32 - Koro Ka Wachokore",
      author: "Unknown",
    },
    {
      id: 33,
      title: "33 - Wuonwa, Gonywa Gi Gweth Mari",
      author: "John Fawcet",
    },
    {
      id: 34,
      title: "34 - Nyasaye Wachungo Ka Wawer",
      author: "E.  J.  Horking",
    },
    {
      id: 35,
      title: "35 - Paruru Nying Yesu Koro",
      author: "Lillian Baxter",
    },
    {
      id: 36,
      title: "36 - Ruoth Yesu, Nithona",
      author: "William Ralf Featherstone",
    },
    {
      id: 37,
      title: "37 - Yesu In Miheroa",
      author: "Charles Wesley",
    },
    {
      id: 38,
      title: "38 - Anawer Hera Yesu",
      author: "F. E. Belden",
    },
    {
      id: 39,
      title: "39 - Nitie Wer Mamit E Dhoga",
      author: "Edwin Othello Excell",
    },
    {
      id: 40,
      title: "40 - Alleluia! Ruoth Nochie",
      author: "Robert Lowrey",
    },
    {
      id: 41,
      title: "41 - E Kalwari Jawar Notho",
      author: "Unknown",
    },
    {
      id: 42,
      title: "42 - Hera Ma Yesu Hera Go",
      author: "J. E Hall",
    },
    {
      id: 43,
      title: "43 - Adwaro Ng'eyo Wach Yesu",
      author: "Francis J.  Crosby",
    },
    {
      id: 44,
      title: "44 – Ang'eyo Yesu Osewara",
      author: "W. A Ogden",
    },
    {
      id: 45,
      title: "45 - Ndalo Mamor",
      author: "Edward Francis Rimbault",
    },
    {
      id: 46,
      title: "46 - Chunya Nigi Mor Moloyo",
      author: "E. S.  Lorenz",
    },
    {
      id: 47,
      title: "47 - Yesu Jawarwa E Bethlehem Chon",
      author: "E. E. Hasty",
    },
    {
      id: 48,
      title: "48 - Yesu Kristo Oberna Ngang'",
      author: "Will L. Thompson",
    },
    {
      id: 49,
      title: "49 - Ywaya Machiegni Kodi, Ruodha",
      author: "Mrs. C. H. Morris",
    },
    {
      id: 50,
      title: "50 - Kristo Obedo Misango Mar Golo Richo",
      author: "Elisha A. Hoffman",
    },
    {
      id: 51,
      title: "51 - Jakwath Nokwayo Rombege",
      author: "Ira David Sankey",
    },
    {
      id: 52,
      title: "52 - Jawar Yesu Itelna",
      author: "Edward Hopper",
    },
    {
      id: 53,
      title: "53 - Wapako Ruoth Ma Jawarwaa",
      author: "Charles Wesley",
    },
    {
      id: 54,
      title: "54 - Wuod Dhano Ma Ne Othou",
      author: "P. P. Bliss",
    },
    {
      id: 55,
      title: "55 - Awero Teko Mar Nyasaye",
      author: "Isaac Watts",
    },
    {
      id: 56,
      title: "56 - Ruoth, Awinjo Wach Mar Gwethni",
      author: "William Batchelder Bradbury",
    },
    {
      id: 57,
      title: "57 - Roho Mar Nyasaye, Ibina",
      author: "Elwood H. Stokes",
    },
    {
      id: 58,
      title: "58 - Muya Maler Jatendwa",
      author: "Marcus Morris Wells",
    },
    {
      id: 59,
      title: "59 - Muya Maler, Winj Alamwa",
      author: "Andrew Reed",
    },
    {
      id: 60,
      title: "60 - Much Nyasaye, Iler Chutho",
      author: "Andrew Reed",
    },
    {
      id: 61,
      title: "61 - Osiep Manade, En Mor Manade",
      author: "Elisha A. Hoffman",
    },
    {
      id: 62,
      title: "62 - Onge Osiep Moro Kaka Yes",
      author: "George Crawford Hugg",
    },
    {
      id: 63,
      title: "63 – Ler Wang' Chieng'orieny E Gode",
      author: "Mrs. M. T. Haughey",
    },
    {
      id: 64,
      title: "64 – Kabedo E Tiend Ruoth Yesu",
      author: "J. H",
    },
    {
      id: 65,
      title: "65 – Ruodha, Aheri Maradier",
      author: "Frances R. Havergal",
    },
    {
      id: 66,
      title: "66 – Aseyudo Osiep Maber",
      author: "J. G. Small",
    },
    {
      id: 67,
      title: "67 – Nyasachwa Mondo Obed Kodu",
      author: "Jeremiah E. Rankin",
    },
    {
      id: 68,
      title: "68 – Yesu Nowara",
      author: "Fanny J. Crosby",
    },
    {
      id: 69,
      title: "69 – Puonja Injili Lilo",
      author: "Katherine Hankey A",
    },
    {
      id: 70,
      title: "70 – Nyasaye Wachokore",
      author: "John Fawcett",
    },
    {
      id: 71,
      title: "71 – Puonja Wach Biblos",
      author: "Pricilla J. Owens",
    },
    {
      id: 72,
      title: "72 – Ahero Weche Mag Nyasaye",
      author: "Unknown",
    },
    {
      id: 73,
      title: "73 – Ahero Nyiso Weche",
      author: "Katherine Hankey",
    },
    {
      id: 74,
      title: "74 – Bende Nichungi E Ndalo Chandruok?",
      author: "William James Kirkpatrick",
    },
    {
      id: 75,
      title: "75 – Adwaro Ng'eyo Wach Yesu",
      author: "Eliza E. Hewitt",
    },
    {
      id: 76,
      title: "76 – Chwoyo Ndalo Duto",
      author: "Knowles Shaw",
    },
    {
      id: 77,
      title: "77 – Kony Joma Dwaro Tho",
      author: "Fanny J. Crosby",
    },
    {
      id: 78,
      title: "78 – Aparo Tinende Kuom Pinyno",
      author: "E. E. Hewitt",
    },
    {
      id: 79,
      title: "79 – Kik Ibadhri Ni Tich",
      author: "Franklin E. Belden",
    },
    {
      id: 80,
      title: "80 – Daher Tiyo Kodi, Ruodha",
      author: "Unknown",
    },
  ]);

  const [loaded] = useFonts({
    Nova: require("../assets/fonts/proxima_nova_soft_regular.ttf"),
    NovaSemiBold: require("../assets/fonts/proxima_nova_soft_semibold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.body}>
      <FlatList
        data={song}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "white" }}>
            <Pressable
              onPress={() =>
                navigation.navigate("Song", {
                  itemId: item.id,
                  title: item.title,
                  engTitle: item.engTitle,
                  doh: item.doh,
                  stanNum1: item.stanNum1,
                  stanChorus: item.stanChorus,
                  stanNum2: item.stanNum2,
                  stanNum3: item.stanNum3,
                  stanNum4: item.stanNum4,
                  stanNum5: item.stanNum5,
                  stanOne: item.stanOne,
                  stanTwo: item.stanTwo,
                  stanThree: item.stanThree,
                  stanFour: item.stanFour,
                  stanFive: item.stanFive,
                  chorus: item.chorus,
                })
              }
              android_ripple={{ color: "#DCDCDC", borderless: false }}
              style={{ backgroundColor: "white", borderRadius: 10 }}
            >
              <Text style={styles.text}>{item.title}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffff",
  },

  text: {
    fontSize: 19,
    fontWeight: "800",
    fontFamily: "Nova",
    color: "#282828",
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingLeft: 10,
    paddingBottom: 12,
    borderBottomColor: "#eeeeee",
  },
});
export default Content;
