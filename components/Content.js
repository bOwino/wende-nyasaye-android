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
      engTitle: "Blessed Lord, How much I need thee",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Ruoth maler, adwari pile! An ayom, \nAn ng'a marach; Mak lueta kitaya pile, \nTekona nayud kuomi.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Saa duto, saa duto, \nRuoth maler adwari pile; \nSaa duto, saa duto, \nRuodha, rita saa duto.\n\n",
      stanNum2: "2",
      stanTwo:
        "Chuny mamuol mondo imiya; \nRicho osekethoa; \nPuonja mondo ang'e yomna, \nAn akwayi tekoni.\n\n",
      stanNum3: "3",
      stanThree:
        "Ok naluor kitaya pile; \nTo kenda nagora piny; \nWuothi koda, yaye Jakonya, \nIn lerna, In ngimana.\n\n",
      stanNum4: "4",
      stanFour:
        "Kata gi manade biro, \nKata mor, kata kuyo; \nChunya pod otwere kuomi, \nIn Jakonya saa duto.",
    },
    {
      id: 17,
      title: "17 - Kristo Ok An",
      author: "Albert Benjamin Simpson",
      engTitle: "SDAH 570 Not I, But Christ",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Kristo, ok an, ni mond' oyud duong'; \npile. Kristo, ok an, onego ji winje; \nKristo, ok an, kite one e ringra; \nKristo, ok an, wechene di chungi.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kristo, ok an, mahoyo chuny makuyo; \nKristo, ok an, manyal golo pi wang'; \nKristo, ok an, makonyowa e chandruok; \nKristo, ok an, magolo luorowa.\n\n",
      stanNum3: "3",
      stanThree:
        "Kristo kende, kik agomb ng'ato moro; \nKristo kende, to kik chunya ting're; \nKristo kende, kik apakra gi berna; \nKristo, kende ni mond' agur ringra.\n\n",
      stanNum4: "4",
      stanFour:
        "Kristo, ok an, mageno e tich duto; \nKristo, ok an, ni ngimana pile; \nKristo, ok an, ni morna gi kuwe mara; \nKristo, ok an, pile be nyaka chieng'.",
    },
    {
      id: 18,
      title: "18 - Yesu Mond Itawa Pile",
      author: "Wm. B.  Bradbury",
      engTitle: "SDAH 545 Saviour, Like a Shepherd",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Yesu, mond' itawa pile, wadwaro mond' iritwa; \nGi chiembi mamit yieng' chunywa, Yienwa bedo e kwedhi, \nYesu Kristo, Yesu Kristo, Iseng'iewowa, wan jogi. \nYesu Kristo, Yesu Kristo, Iseng'iewowa, wan jogi.\n\n",
      stanNum2: "2",
      stanTwo:
        "Wan jogi, bedi Osiepwa, Bed Jatendwa e wang'yo; \nRit kwedhi, kik richo lowa, Manywa kwabayo e yo; \nYesu Kristo, Yesu Kristo, Winjwa ka walamoi. \nYesu Kristo, Yesu Kristo, Winjwa ka walamoi.\n\n",
      stanNum3: "3",
      stanThree:
        "Iseyie kaka niruakwa, kata wan jo moketho; \nIn ing'won mondo iwenwa, luokwa, pwodhwa gi rembi; \nYesu Kristo, Yesu Kristo, wanalokre iri, Ruoth. \nYesu Kristo, Yesu Kristo, wanalokre iri, Ruoth.\n\n",
      stanNum4: "4",
      stanFour:
        "Konywa mondo watim maber, Mi watim gi midwaro; \nRuoth maler, Jawarwa kende, Pong' chunywa gi herani. \nYesu Kristo, Yesu Kristo Mond' iherwa mosiko. \nYesu Kristo, Yesu Kristo Mond' iherwa mosiko.",
    },
    {
      id: 19,
      title: "19 - Ka Ma Yesu Chon Notho E Yath",
      author: "Rev.  J.H. Stockton",
      engTitle: "SFW 820 Down at the cross",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Kama Yesu chon notho e yath, \nRembe nochwer ni jomaricho; \nKanyo noluoko chunya mapoth; \nPakuru Yesu.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Pakuru Yesu, Pakuru Yesu; \nKanyo noluoko chunya mapoth, \nPakuru Yesu.\n\n",
      stanNum2: "2",
      stanTwo:
        "Nosewarowa e kethruok te, \nKoro Yesu odak e chunya; \nYesu noruaka gi herane; \nPakuru Yesu.\n\n",
      stanNum3: "3",
      stanThree:
        "Amor niwira oseluoka, \nE thidhiya ma nochwer ni wan; \nYesu owara, oritoa; \nPakuru Yesu.\n\n",
      stanNum4: "4",
      stanFour:
        "Biuru ni sokoni mamit; \nMiuru Yesu chunyu koro; \nMondo ubedi maler chutho, \nPakuru Yesu.",
    },
    {
      id: 20,
      title: "20 - Nyasachwa En E Lwandawa",
      author: "Vernon J.  Charlesworth",
      engTitle: "SDAH 520 The Lord’s Our Rock",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Nyasachwa En e Lwandawa, \nEn Lwandawa mogeng'owa; \nJakony e chandruokwa duto,\nMobedo machiegni chutho.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "En Lwandawa e chandruok duto, \nEn tipo ka ma wayueyo; \nJatelo, En motelonwa; \nKar pondo e ndalo chandruok.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kata wach bet nade kodwa, \nEn Lwandawa mogeng'owa; \nWang'eyo kaka En Jakony, \nMobedo machiegni chutho.\n\n",
      stanNum3: "3",
      stanThree:
        "Gotieno kata godiechieng', \nEn Lwandawa mogeng'owa; \nKamano ok wanaluor ngang', \nNikech En machiegni kodwa.\n\n",
      stanNum4: "4",
      stanFour:
        "Nyasachwa e makonyowa, \nEn Lwandawa mogeng'owa; \nNdalo duto Entie kodwa, \nObedo machiegni chutho.",
    },
    {
      id: 21,
      title: "21 - Adwaro Ket Kod Yesu",
      author: "W. H. Doane",
      engTitle: "SWF 821 More like Jesus",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Adwaro Ket kod Yesu; Ruodha mond' odag koda, \nPong' chunya gi herane, Abed mang'won kaka En. \nAdwaro ket kod Yesu kawuotho e pinyni ka; \nOket Muche e chunya, Ruodha mond' odag koda.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kowinjo yuak mar winyo, kendo ritogi mang'won, \nAng'eyo nowinj yuakna, Ong'eyo chandruokna te; \nEnochikna ngimana, Enowena kethona; \nChunya nobedi maler ka Ruodha odak koda.\n\n",
      stanNum3: "3",
      stanThree:
        "Aket kode kuom lemo, Amed chal kode pile; \nKuwe mare opong' chunya kasiko bute pile; \nNorita kuom ng'wonone, Herane nolo chunya; \nNabet gi geno chutho ka Ruodha odak koda.",
    },
    {
      id: 22,
      title: "22 - Kik Ibarna, Yaye Jakonya",
      author: "Fanny J. Crosby",
      engTitle: "SDAH 569 Pass me Not",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Kik ibarna, yaye Jakonya, Winji yuak mara; \nIn Kiluongo jo mamagi, Mond` iluonga be.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Yesu, Yesu, Winji yuak mara; \nIn Kiluongo jo mamagi, mond' iluonga be.\n\n",
      stanNum2: "2",
      stanTwo:
        "An kaparo ng'wono mari chunya yudo kuwe; \nKa agoni chonga piny ka, Jawarna, Konya.\n\n",
      stanNum3: "3",
      stanThree:
        "An ageno nyingi kende, Adwaro neni; \nChangi chunya moseketho, Wara gi rembi.\n\n",
      stanNum4: "4",
      stanFour:
        "Miwaso ohewa kodi, To agombi nga'ng; \nEre ng'a maromo kodi E piny gi polo?",
    },
    {
      id: 23,
      title: "23 - Aheri, Aheri",
      author: "Jer. Ingalls",
      engTitle: "SDAH 236 I love thee",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Aheri, aheri, aheri Ruodha; \nAheri, Jawarna, bende Nyasacha; \nAheri, aheri, kendo ing'eyo; \nTo kaka aheri, timbena nohul.\n\n",
      stanNum2: "2",
      stanTwo:
        "Amor ka aparo mwandu moikna; \nTo morna ok norum kasomo wachni; \nTo agombo chopo e polo malo, \nMond' abed gi Yesu gi malaika.\n\n",
      stanNum3: "3",
      stanThree:
        "Ruoth Yesu, Jawarwa, In e ngimana; \nIn morna, warruokna, In kar yueyona; \nNapak nyingi kendo nawer herani; \nNg'wononi nonyisre kuom kit ngimana.\n\n",
      stanNum4: "4",
      stanFour:
        "Onge ng'a machalo kod Yesu Jawar; \nEn Ruodha mohera, napake maber; \nNapake, nadende kod wende mag chuny; \nEn kende magene, morna gi wenda.",
    },
    {
      id: 24,
      title: "24 - Jawarna To Ni Yesu",
      author: "Unknown",
      engTitle: "SFW 852 Oh Jesus my Redeemer",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Jawarna to ni Yesu, En morna gi wenda; \nOhoyoa gi wachne, ka chunya okuyo.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Jawarna to ni Yesu; Anapake kawer; \nOsiepna moro onge, moheroa ka En.\n\n",
      stanNum2: "2",
      stanTwo:
        "Yesu ni ng'a mageno, ndalo duto Entie; \nKa piny otimo mudho, Lerne omenyoa.\n\n",
      stanNum3: "3",
      stanThree:
        "Agenoi Jawarna, Osiep mageno chuth; \nYandi ahero bayo, koro abet buti.\n\n",
      stanNum4: "4",
      stanFour:
        "In e wenda gi morna, E pinyni mar chandruok; \nIn e wenda gi morna, kadonjo e polo.",
    },
    {
      id: 25,
      title: "25 - In E Ngimana Mochwere",
      author: "Fanny J. Crosby",
      engTitle: "SFW 803 Close to thee close to thee",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "In e ngimana mochwere moloyo duto me piny; \nE wuodha duto me piny ka, Jawar yie awuoth kodi.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Kodi Ruoth, kodi Ruoth, \nKodi Ruoth, kodi Ruoth; \nE wuodha duto me piny ka, \nJawar yie awuoth kodi.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ok alem ne mor mar pinyni, ok alem mond' ayud dwong'; \nNa ti gi mor kat e chandruok, Yie mondo awuoth kodi.\n\n",
      stanChorus2: "Chorus:\n",
      chorusTwo:
        "Kodi Ruoth, kodi Ruoth, \nKodi Ruoth, kodi Ruoth; \nNa ti gi mor kat e chandruok, \nYie mondo awuoth kodi.\n\n",
      stanNum3: "3",
      stanThree:
        "Telna e pinyni mar mudho ting'a mondo alo piny; \nEka mondo adonj kodi e ngima ma ok norum.\n\n",
      stanChorus3: "Chorus:\n",
      chorusThree:
        "Kodi Ruoth, kodi Ruoth, \nKodi Ruoth, kodi Ruoth; \nEka mondo adonj kodi \nE ngima ma ok norum.",
    },
    {
      id: 26,
      title: "26 - Ji Duto Te Mondo Giwer",
      author: "Charles Wesley",
      engTitle: "SDAH 250 Oh for a thousand tongues to sing",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Ji duto te mondo giwer ka gipako Jawar, Ka gipako Jawar; \nGipak duong' mar Ruoth Nyasachwa kod ng'uonone maduong'.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ruodha maduong' gi Nyasacha konya mondo ahul; \nKonya mondo ahul Duong' mar Nying Ruoth gi Jawarna E kuonde duto te.\n\n",
      stanNum3: "3",
      stanThree:
        "Yesu en nying makelo mor, Ogolo kuyowa; \nOgolo kuyowa En wer mamit ni jaricho En ngimana kod kuwe.\n\n",
      stanNum4: "4",
      stanFour:
        "Oketho teko mar richo Ogonyo jomotwe, ogonyo jomotwe; \nRembe nyalo luoko richo Rembeno nochwerna.",
    },
    {
      id: 27,
      title: "27 - To En Ng'a Man E Kund Dhok",
      author: "Unknown",
      engTitle: "SDAH 150 Who Is He",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne: "To en ng'a man e kund dhok, ma jokwath olamo cha?\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "En e Ruoth! To en Jawarwa En e Ruoth! \nMoloyo duto Wanagone chongwa piny; \nPakeuru Yesu Ruoth.\n\n",
      stanNum2: "2",
      stanTwo: "To en ng'a e thim kucha, ma Satan ne otemo?\n\n",
      stanNum3: "3",
      stanThree: "To en ng'a mayuak e liel, kama Lazaro onindoe?\n\n",
      stanNum4: "4",
      stanFour: "To en ng'a ma ji pako, nikech weche mag ng'wono?\n\n",
      stanNum5: "5",
      stanFive: "To en ng'a mathiedho ji, ma noyawo wang' muofuni?\n\n",
      stanNum6: "6",
      stanSix: "To en ng'a mochier maber, ma noloyo tho adier?\n\n",
      stanNum7: "7",
      stanSeven: "To en ng'a moherowa, ma nogolo richowa?\n\n",
      stanNum8: "8",
      stanEight: "To en ng'ano mano gur, ma nochandore malit?",
    },
    {
      id: 28,
      title: "28 - Nying Mamit E Piny Gi Polo",
      author: "W. A Ogden",
      engTitle: "Dearest name on earth",
      doh: "Doh en D",
      stanNum1: "1",
      stanOne:
        "Nying mamit e piny gi polo, Nying moloyo nying duto; \nNyingno ma Nyasaye nochiwone Wuode mohero chuth.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Nying maber moloyo, Nying Jawarwa Yesu; \nNying ma noa e polo kuom wuoro; \nMalaika maler ema nokelogo, \nNying mamit maber mar Yesu.\n\n",
      stanNum2: "2",
      stanTwo:
        "Nying mamiyo chunya yueyo, Anapak nyingno chutho; \nAnahul nyingno e nyim ji, Nying mamitna moloyo.\n\n",
      stanNum3: "3",
      stanThree:
        "Anawer kapako nyingno, gi hera mowarowa; \nAnapake ndalo duto, Nying moloyo nying duto.",
    },
    {
      id: 29,
      title: "29 - Yesu Jakwath Moheroae",
      author: "Sir H. W.  Baker",
      engTitle: "SDAH 197 The King of Love",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Yesu Jakwath moheroa, Okecha ndalo duto; \nAn ok achand gimoro ka, Owuotho koda nyaka chieng'.\n\n",
      stanNum2: "2",
      stanTwo:
        "Naweyo yo nalal marach, To En Owuon nodwara; \nNoting'a mos e goke to, Nomor kotera dalane.\n\n",
      stanNum3: "3",
      stanThree:
        "Kar lek mamit, kar pi mang'ich, Otera kanyo pile; \nOkwayoa, oritoa, Yesu Jakwath mang'won adier.\n\n",
      stanNum4: "4",
      stanFour:
        "Ka tho nitie adagi luor ka Yesu bedo koda; \nOhoyoa, Osiroa, En bende e motelona.\n\n",
      stanNum5: "5",
      stanFive:
        "Opedho mesa nyima ka, Otimo sap misango; \nOmiya mor gi cham maler, Remb Yesu miyo chunya yom.\n\n",
      stanNum6: "6",
      stanSix:
        "Kendo kama ti onge nyaka chieng`, Igwedha ndalo duto; \nJakwath maber adendi ma, E odi ndalo duto ka.",
    },
    {
      id: 30,
      title: "30 - Apako Hera Nyasaye Wuora",
      author: "J.  G.  Crabbe",
      engTitle: "SFW 888 Beauty for Ashes",
      stanNum1: "1",
      stanOne:
        "Apako hera Nyasaye Wuoro mochiwona Rohone; \nMaloko kuyona bedo mor koweyona richona; \nKata mudho olil manade, osesingo nobed buta \nOmiya ler marieny e mudho, Kendo ber e kar richo.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Omiya mor - - - e saa mar kuyo \nOgolona luoro mar tho \nOmiya ler marieny e mudho \nKendo ber e kar richo.\n\n",
      stanNum2: "2",
      stanTwo:
        "Awero hera mar Jawarna manotho e yath ni an, \nNi mondo kobedo e chunya nogonya kuom twech duto; \nObiro waro jomaricho obiro konyo chuny mool, \nOmiya mor e saa mar kuyo, kendo ber e kar richo.\n\n",
      stanNum3: "3",
      stanThree:
        "Apako ber mar wach injili monyisa weche mamit; \nNomiya mor mar nyiso lerna, ka manade ma antie, \nOrwaka gi law mar herane ka chunya opong' gi luoro; \nOmiya ler marieny e mudho, kendo ber e kar richo.",
    },
    {
      id: 31,
      title: "31 - Duto Paki, Ruodh Polo",
      author: "George William Condery",
      engTitle: "SFW 788 All things praise thee",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Duto paki, Ruodh Polo, Dhano, bende gik moko; \nNichweyogi ni mondo gipaki mowinjore; \nJo maler e pinje te, Duto paki; wan bende.\n\n",
      stanNum2: "2",
      stanTwo:
        "Duto paki otieno, sulwe be marieny malo; \nChieng' oporo duong'ni, to lietne nyiso herani; \nWuok chieng' nyaka podhone, Duto paki; wan bende.\n\n",
      stanNum3: "3",
      stanThree:
        "Duto paki e polo, Seraf kod jokerubi; \nDwond asele, thum Nyasaye, Dwonde ji makulore; \nWendgi ok ogik ngang', Paki pile; wan bende.\n\n",
      stanNum4: "4",
      stanFour:
        "Duto, malo kata piny, Paki paki mak gi ri; \nChwiri, oro, dongo cham, Dhano kende e mobam; \nWiny, gibuya, gik mamol, Dak wapaki kaka gin.\n\n",
      stanNum5: "5",
      stanFive:
        "Dhi imany rombe molal, nyisgi kaka Wuod Nyasaye; \nNosetho ni keth mag piny, puonjgi mos kuom Piny Manyien; \nMigi konywa pako Ruoth, Nyaka chieng' ma nyaka chieng'.",
    },
    {
      id: 32,
      title: "32 - Koro Ka Wachokore",
      author: "Unknown",
      engTitle: "Now as we gather",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Koro ka wachokore, Ni mondo wahing Yesu, \nWanapar Yesu Kristo, Wanayiee gi chunywa; \nKoro wahingo Yesu, Ma notho e Kalwari.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ka wachamo mkate ni, Kawamadho kikombe ni, \nWanahing ringre Jawar Ma nogur e yath ni wan; \nWanahing remb Ruoth Yesu ma nochwer e Kalwari.\n\n",
      stanNum3: "3",
      stanThree:
        "Nyasachwa, ornwa Muchi, mondo donji e chunywa; \nKoro wahingo Wuodi, kaka En notho niji, \nKaka rembe nochwernwa, Ka notho e Kalwari.",
    },
    {
      id: 33,
      title: "33 - Wuonwa, Gonywa Gi Gweth Mari",
      author: "John Fawcet",
      engTitle: "SDAH 64 Lord, Dismiss us",
      doh: "Doh en C",
      stanNum1: "1",
      stanOne:
        "Wuonwa, gonywa gi gweth mari, \nPong' chunywa gi mor gi kuwe; \nMiwa duto herruok mari, kethowa bende iwe. \nMiwa geno, miwa geno, Ka wawuotho e pinyni.\n\n",
      stanNum2: "2",
      stanTwo:
        "Wachiwo pak gi mor bende, Kuom weche mioronwa; \nKa wamako chikni chutho, Wanabed e herani. \nKonywa timo, konywa timo, gi kinda nyaka ibi.\n\n",
      stanNum3: "3",
      stanThree:
        "Ka wawuotho e piny kae, ber wati ni In kende; \nBer wati ni In kende; konywa ka walu e yori, \nKik wajogi, kik wawe. Bedi kodwa, bedi kodwa, \nKa wawuok, bende kwake.",
    },
    {
      id: 34,
      title: "34 - Nyasaye Wachungo Ka Wawer",
      author: "E.  J.  Horking",
      engTitle: "SFW 871 Saviour Again to thy dear name",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Nyasaye, wachungo ka wawer kae, \nNi mondo igwedhwa ka pok wadhi; \nWadwaro lami, ka wan nyimi ka, \nKa wagochongwa lamoi gi kuwe.\n\n",
      stanNum2: "2",
      stanTwo:
        "Miwa kuwe mari ka wadhi koro, \nChako gi tieko inibed kodwa, \nDhowa moselami e odi ni, \nKik gol weche makelonwa wich kuot.\n\n",
      stanNum3: "3",
      stanThree:
        "Miwa kuwe mari ka wan e pinyni, \nKata wakuyo kata chunywa lit; \nIn kende In gi wach mahoyowa; \nNyasaye wageni, wan duto man ka.\n\n",
      stanNum4: "4",
      stanFour:
        "Koro Nyasaye waparoi tinde, \nKa koro wasewinjo wach mamit; \nKonywa ni mondo wamak wecheni; \nKik Satan mawa kata wach achiel.\n\n",
    },
    {
      id: 35,
      title: "35 - Paruru Nying Yesu Koro",
      author: "Lillian Baxter",
      engTitle: "SDAH 474 Take the name of Jesus",
      doh: "Doh en Ab",
      stanNum1: "1",
      stanOne:
        "Paruru nying Yesu koro, un jopiny machandore; \nEnomiu doko mamor, paruru nyinge koro.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Nyinge ber moloyo, Nyingeno wageno ka; \nNyinge ber moloyo (Nyinge ber, ober moloyo) \nNyingeno wageno ka.\n\n",
      stanNum2: "2",
      stanTwo:
        "Paruru nying Yesu pile, Enogeng'nu maricho; \nKa temruok odwaro lou, Lamuru gi nyingeno.\n\n",
      stanNum3: "3",
      stanThree:
        "Paruru nying Yesu koro, E manyalo konyou; \nKa orwakowa gi ng'uono, Paruru nying Yesu Ruoth.\n\n",
      stanNum4: "4",
      stanFour:
        "En Ruodh ruodhi wanadende, ka wagone chongwa piny; \nKucha e pinyruoth mar polo, Ka wuodhwa me piny rumo.",
    },
    {
      id: 36,
      title: "36 - Ruoth Yesu, Nithona",
      author: "William Ralf Featherstone",
      engTitle: "SDAH 321 My Jesus I love Thee",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Ruoth Yesu, nithona, koro aheri; \nKuom tekoni nawe richona duto; \nIn ma Jawar mang'won, rembi nochwerna; \nKoro, Yesu Ruodha, aheri adier.\n\n",
      stanNum2: "2",
      stanTwo:
        "Aheri nikech nihera mokwongo; \nNiting'o richona e yadh Kalwari; \nNichandori malit nikech richona; \nKoro, Yesu Ruodha, aheri adier.\n\n",
      stanNum3: "3",
      stanThree:
        "Anaheri pile nyaka chieng' thona; \nAnapaki pile ka pod angima; \nKa ngimana norum, to pod nawachni, \nKoro Yesu Ruodha, aheri adier.\n\n",
      stanNum4: "4",
      stanFour:
        "Eka kwadak kodi e dala Nyasaye, \nE piny Ruoth manyienno nadendi pile. \nKosidhna osimbo napaki kawer; \nKoro, Yesu Ruodha, aheri adier.",
    },
    {
      id: 37,
      title: "37 - Yesu In Miheroa",
      author: "Charles Wesley",
      engTitle: "SDAH 489 Jesus lover of my soul",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Yesu, In miheroa, Yiena mond' aring iri; \nYesu ruaka, In mang'won, Pod aonge teko ka. \nTo masira loyoa, Piny otera kumabor; \nOk aneno yo maber, To ahombi konya ka.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kristo, In miromona, In mimiya hap Nyasaye, \nIn michango jo matuo, In mihero jo motho; \nYesu In maler adier, An arach moloyo ji; \nRicho e mokethoa, Buchi e moloyoa.\n\n",
      stanNum3: "3",
      stanThree:
        "Yo machielo ok adwar, In Iwuon e wang' yora, \nKik idaga, kik iling', sira, hoya, ng'wonna. \nEe, Jakony, agenoi, Tekoni ichiwona; \nChungi buta nyaka chieng'; Demba, rita, kik alal.\n\n",
      stanNum4: "4",
      stanFour:
        "Yesu, miya ng'wononi, Golna richo duto te, \nHombo to ahomboi; Luoka, guda, \nKonya chuth, Bedi koda nyaka chieng', \nNyisa tich michikoa; Dag e chunya, kik ia, \nNdalo duto nyaka chieng'.",
    },
    {
      id: 38,
      title: "38 - Anawer Hera Yesu",
      author: "F. E. Belden",
      engTitle: "SDAH 183 I will sing of Jesus' Love",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Anawer hera Yesu, Anawer koheroa, \nNoweyo polo malo, Nosetho e Kalwari.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Anawer hera Yesu, Anapake gi chunya; \nNosetho e Kalwari, Anawer koheroa.\n\n",
      stanNum2: "2",
      stanTwo:
        "Anawer ng'wono Yesu, Anawer kong'wonona; \nEnowena kethona, Enoyie ni an mare.\n\n",
      stanNum3: "3",
      stanThree:
        "Yesu, donji e chunya, In Jakonya pile ka; \nKonya timo tim maber, kendo konya hero In.\n\n",
      stanNum4: "4",
      stanFour:
        "Tim maber onge kuoma; Awuoro kak' ihera; \nRuodha, kaw chunya koro, Obed mari nyaka chieng'.",
    },
    {
      id: 39,
      title: "39 - Nitie Wer Mamit E Dhoga",
      author: "Edwin Othello Excell",
      engTitle: "SFW 882 I have a song I love To sing",
      doh: "Doh en F",
      stanNum1: "1",
      stanOne:
        "Nitie wer mamit e dhoga, Nikech osewara; \nKuom Jawarna, Yesu, Ruodha, Nikech osewara.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Nikech osewara, nikech osewara; \nAdwaro pako nyinge, nikech osewara; \nAdwaro pako nying Jawarna.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kristo En ng'a moyieng'o chuny, Nikech osewara; \nAdwaro timo dwarone nikech osewara.\n\n",
      stanNum3: "3",
      stanThree:
        "Adwaro bed janenone, Nikech osewara; \nAonge kiawa e chunya, Nikech osewara.\n\n",
      stanNum4: "4",
      stanFour:
        "Olosona kar bet malo, Nikech osewara; \nNadag kanyo ma nyaka chieng', Nikech osewara.",
    },
    {
      id: 40,
      title: "40 - Alleluia! Ruoth Nochie",
      author: "Robert Lowrey",
      engTitle: "SFW 741 Low in the grave He lay",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Nonindo ei liel, Yesu Jakonya; \nKorito chieng' mar chier, Yesu Ruodha.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "En to nowuok ae liel Ka nobuko loyo tho adier, \nEn mochier kotieko mudho chutho ka, \nTo obet tinende kod Malaika; \nTo nochier, En nochier, \nAlleluia! Ruoth nochier.\n\n",
      stanNum2: "2",
      stanTwo:
        "To ne girito liel, Yesu Jakonya; \nKayiem ne girite, Yesu Ruodha.\n\n",
      stanNum3: "3",
      stanThree:
        "Tho ok noloyo En, Yesu Jakonya; \nNogolo twech duto, Yesu Ruodha.",
    },
    {
      id: 41,
      title: "41 - E Kalwari Jawar Notho",
      author: "Unknown",
      engTitle: "SFW 733 On calvary’s brow",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "E Kalwari - Jawar notho, \nE kanyono, Jawar nogur; \nE wi yadhno, Rembe nochwer, \nKendo nokawo chandruokna.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "E Kalwari kanyo molil, \nKama Remb Yesu nochwerna; \nE Kalwari manogwedhi, \nKanyo Jawarna nothona.\n\n",
      stanNum2: "2",
      stanTwo:
        "E dier luanda - Polo dudo, \nChuny Jawarna, nochot kanyo; \nLaw ma noyiech, nosiemo yo, \nMadhi e mor ma ok norum.\n\n",
      stanNum3: "3",
      stanThree:
        "O Yesu Ruoth - Nobed nade! \nNichiwo ngimani ni an; \nMar ting'o chuat, Msalaba, \nE saa malich, E Kalwari.",
    },
    {
      id: 42,
      title: "42 - Hera Ma Yesu Hera Go",
      author: "J. E Hall",
      engTitle: "SFW 937 The love that jesus had for me",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Hera ma Yesu hera go, ma nomiyo otho e yath, \nMondo owena richona, oloyo lep wacho.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Herane loyo lep wacho; Herane loyo lep wacho, \nHera ma Yesu herago, oloyo lep wacho.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kuyo maduong' manoyudo, g'osimb kudho ma nosidhne, \nMond' ayud ngima nyaka chieng', Oloyo lep wacho.\n\n",
      stanNum3: "3",
      stanThree:
        "Kuwe maduong' ma ango kuome, en masayona nyim Nyasaye, \nrembe maler mano chuerna, oloyo lep wacho.\n\n",
      stanNum4: "4",
      stanFour:
        "Mor mayudo ka En buta, kanindo anto ok naluor, \nGenona kuome duong' chutho, oloyo lep wacho.\n\n",
    },
    {
      id: 43,
      title: "43 - Adwaro Ng'eyo Wach Yesu",
      author: "Francis J.  Crosby",
      engTitle: "SDAH 152 Tell me the story of Jesus",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Adwaro ng'eyo wach Yesu, ndiki duto e chunya; \nBi, nyisa weche madieri, Mitna moloyo duto. \nKona kaka malaika yandi nopoyo jokwath; \nNoelnigi nyuol Yesu Motimore Bethlehem.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Nwona tich duto mag Yesu, ndik wechene e chunya; \nPuonja gi puonjruok madieri, Mamit moloyo duto.\n\n",
      stanNum2: "2",
      stanTwo:
        "Puonja wach temruok mar Yesu, tem ma nothung'e e thim; \nkaka jachien ne osande, Kaka Yesu noloyo. \nPuonja wach chandruokne duto, \nBende kuom ting`ne mapek; \nPuonja kaka ji nochaye, Kaka nogoye malit.\n\n",
      stanNum3: "3",
      stanThree:
        "Ne gigure e msalaba, mane wach modhiera ngang'; \nKanyo nonwang'o masira, to noyie tho nikech wan. \nHera maduong', ee, awuoro, mokadho hera mar ji; \nIta opowore koro, chunya amiye chutho.",
    },
    {
      id: 44,
      title: "44 – Ang'eyo Yesu Osewara",
      author: "W. A Ogden",
      engTitle: "SDAH 337 Redeemed how I love to proclaim it",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Ang'eyo Yesu osewara \nKuom herane gi ng'wonone; \nE nengo mochulo e thone, \nOmiya bedo nyathine.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Osewara! Yesu owara gi rembe; \nOsewara! Asebet nyathine chutho.\n\n",
      stanNum2: "2",
      stanTwo:
        "Amor nikech Ruoth osewara; \nOnge dhum ma dahul godo, \nHerano ma an go e chunya, \nka koro Yesu dak koda.\n\n",
      stanNum3: "3",
      stanThree:
        "Ageno neno Ruodha Yesu; \nE duong'ne gi berne duto; \nOtayo tienda e wang' yore, \nOketo chikne e chunya.\n\n",
      stanNum4: "4",
      stanFour:
        "E dala maler mar Nyasachwa; \nOsimb ngima oritoa; \nChieng' moro kobiro gi duong'ne, \nEka nabed kode polo.\n\n",
    },
    {
      id: 45,
      title: "45 - Ndalo Mamor",
      author: "Edward Francis Rimbault",
      engTitle: "SFW 716 Oh happy day",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Ndalo mamor, ka nahulo kak' ageni, In Jawarna; \nChunya opong' gi mor chutho, Ok dak anyal mung'o wachni.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Mor maduong' ndalono, Ka Yesu noluoko kethna; \nOpuonja ritora galam, Otelona e ngimana. \nMor maduong' ndalono ka Yesu noluoko kethna.\n\n",
      stanNum2: "2",
      stanTwo:
        "Wasetimo winjruok kode, An ng'ate chuth to En Ruodha; \nAn koro aluwo bang'e, Amor nyiso ji kuom Jawar.\n\n",
      stanNum3: "3",
      stanThree:
        "Chunya koro oyudo kuwe kapadora kuom Jakonya; \nTo kik aweye kendo ngang', Asiki kode nyaka chieng'.",
    },
    {
      id: 46,
      title: "46 - Chunya Nigi Mor Moloyo",
      author: "E. S.  Lorenz",
      engTitle: "SFW 716 Oh happy day",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Chunya nigi mor moloyo kating'o dwonda pako Ruoth; \nTo ng'a mowinjore pako nying Yesu kuom hera modhiero?\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Hera maber, miwuoro ngang', \nHera maduong' mar Yesu; \nHera maber, miwuoro ngang', \nHera maduong' mar Yesu.\n\n",
      stanNum2: "2",
      stanTwo:
        "Yesu ochiwo mor gi kuwe, E chandruok ohoyo chunywa; \nKakuyo to omiya mor; Awuoro herano mar Yesu.\n\n",
      stanNum3: "3",
      stanThree:
        "Yesu owinja kayuakne, Oting'a malo kapodho; \nE ngimana nyaka thona, nagen hera maduong' mar Yesu.",
    },
    {
      id: 47,
      title: "47 - Yesu Jawarwa E Bethlehem Chon",
      author: "E. E. Hasty",
      engTitle: "SFW 880 Jesus my saviour to Bethlehem came",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Yesu Jawarwa e Bethlehem chon \nNonyuol e ot, ka ma dhok nindoe; \nE, awuoro kaka nowarowa, kaka nowarowa; \nNobiro warowa, nobiro warowa; \nEe, apako nyinge nikech yandi Nobiro warowa.\n\n",
      stanNum2: "2",
      stanTwo:
        "Yesu Jawarwa e Kalwari chon \nNochulo gopwa, nogonyo chunywa; \nEe, awuoro kaka notho ni wan, kaka notho ni wan; \nNobiro tho ni wan, nobiro tho ni wan; \nEe, apako nyinge nikech yandi Nobiro tho ni wan.\n\n",
      stanNum3: "3",
      stanThree:
        "Yesu Jawarwa nomanyowa chon \nKa ne waruenyo, ka ne ok wayie; \nEe, awuoro kaka noluongowa, kaka noluongowa; \nNobiro luongowa, nobiro luongowa; \nEe, apako nyinge nikech yandi Nobiro luongowa.\n\n",
      stanNum4: "4",
      stanFour:
        "Yesu Jawarwa chieng' moro nobi, \nNobi mondo oom nyithinde maler; \nEe, awuoro kaka obiro ka, obiro omowa; \nObiro omowa, obiro omowa; \nEe, apako nyinge t'obiro ka, Obiro omowa.\n\n",
    },
    {
      id: 48,
      title: "48 - Yesu Kristo Oberna Ngang'",
      author: "Will L. Thompson",
      engTitle: "SDAH 185 Jesus Is All The World To Me",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Yesu Kristo oberna ngang', gima, morna chutho; \nEn tekona pile pile, Kenda dagora piny; \nAn kakuyo adhi ire, En osiep maduogo chunya; \nKa chunya pek ohoyoa, osiepna.\n\n",
      stanNum2: "2",
      stanTwo:
        "Yesu Kristo oberna ngang', osiepna e chandruok; \nOgwedhowa kadhi ire, To ok nokwera ngang'; \nWang' chieng' maliet gi koth machwe, \nDongonwa cham, bando gi bel; \nChieng' be gi koth oa kuome, Osiepna.\n\n",
      stanNum3: "3",
      stanThree:
        "Yesu Kristo oberna ngang', nabet malong'one; \nDanyal nade kwer osiepna, Ka Yesu oyie an; \nKalu ndache, okang' okang', oritoa e mudho be; \nKalu bang'e e mudho, e chieng', Osiepna.\n\n",
      stanNum4: "4",
      stanFour:
        "Yesu Kristo oberna ngang', onge moro ka En;  \nAyiene En ma koroni, nyaka ngima norum; \nNgima maber gi Osiepna, ngima mosiko mochwere; \nMor mosiko, dak e polo, Gosiepna.",
    },
    {
      id: 49,
      title: "49 - Ywaya Machiegni Kodi, Ruodha",
      author: "Mrs. C. H. Morris",
      engTitle: "SDAH 301 Nearer, Still nearer",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Ywaya machiegni kodi, Ruodha; \nYwaya iri, Jawarna maber ngang'; \nRuoth, geng'a kiuma gi bwombi, \nMond' ayud yueyo gi kuwe man kuomi; \nMond' ayud yueyo gi kuwe man kuomi.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ywaya machiegni kuom ng'wononi; \nOnge gima dakel ni Jawarna, \nTo mana richo man e chunya; \nYiena mondo ipwodha gi rembi, \nYiena mondo ipwodha gi rembi.\n\n",
      stanNum3: "3",
      stanThree:
        "Ywaya machiegni, abet mari; \nChunya mor kaweyo richo gi keth, \nMor mag piny duto, pak gi sunga; \nMiya Ruodha, Yesu ma nothona; \nMiya Ruodha, Yesu ma nothona.\n\n",
      stanNum4: "4",
      stanFour:
        "Asik buti ka pod angima, \nKachungo kuomi In e Lwandana; \nTo nyaka chieng' anabed kodi, \nButi machiegni, Yesu Jawarna, \nButi machiegni, Yesu Jawarna.",
    },
    {
      id: 50,
      title: "50 - Kristo Obedo Misango Mar Golo Richo",
      author: "Elisha A. Hoffman",
      engTitle: "SDAH 335 What a wonderful Saviour",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Kristo noluoko richona, En Jawar miwuoro ngang'! \nOchulo nengo nikech wan, En Jawar miwuoro ngang'!\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "En Jawar miwuoro ngang'! \nEn Yesu, En Yesu, \nEn Jawar miwuoro ngang'! \nEn Yesu Ruodha.\n\n",
      stanNum2: "2",
      stanTwo:
        "Apake kuom remo maler, En Jawar miwuoro ngang'! \nMoriwo chunya gi Nyasaye, En Jawar miwuoro ngang'.\n\n",
      stanNum3: "3",
      stanThree:
        "Ogolo richo e chunya, En Jawar miwuoro ngang'! \nKoro obedo Ruoth maduong', En Jawar miwuro ngang'.\n\n",
      stanNum4: "4",
      stanFour:
        "Owuotho koda yo duto, En Jawar miwuoro ngang'! \nOmiya teko mar ritruok, En Jawar miwuoro ngang'!",
    },
    {
      id: 51,
      title: "51 - Jakwath Nokwayo Rombege",
      author: "Ira David Sankey",
      engTitle: "SFW 887 There were ninety and nine",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Jakwath nokwayo rombege Pier ochiko gochiko, \nTo achiel kuomgi ne olalne ma notimo piero apar. \nAdier nolal e got moro, Ne en ku mabor ma onge jakwath.\n\n",
      stanNum2: "2",
      stanTwo:
        '"Rombe pier ochiko gochiko ok romi, yaye, Ruoth? \nTo en oruakoi gang\'o kuom achiel mobayo yo? \nTo gode be orach chutho; Kik ichandri, Ruoth, kayiem nono."\n\n',
      stanNum3: "3",
      stanThree:
        "\"Rombega ne gidoko pier' apar, Ma nahero adier; \nKat' achiel kuomgi dwaro lalna ok dak ayie chutho; \nKata yo obet marach kama, Anadhi e thim manyo rombe.\"\n\n",
      stanNum4: "4",
      stanFour:
        "Ne onge ng'ato kat'achiel Ma nong'eyo chandruokne; \nKomanyo e thim mak ojok ngang', Nyak' owinjo dwonde; \nNonwang'e koyuak kool marach, Ne en ka malich, kodwaro tho.\n\n",
      stanNum5: "5",
      stanFive:
        "Jakwath noting'e mos komor, Nodhigo dalane; \nNowacho ni wadgi niya: \"Moruru koro maber, \nT'asenwang'o nyarombona, Ma yandi olal e thim ku mabor.\"\n\n",
      stanNum6: "6",
      stanSix:
        "To Yesu yandi omanyowa, Nochandore e piny, \nMalaika mor moloyo Ka gineno ng'a molokore.",
    },
    {
      id: 52,
      title: "52 - Jawar Yesu Itelna",
      author: "Edward Hopper",
      engTitle: "SDAH 551 Jesus Saviour pilot me",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Jawar Yesu itelna e ngimana mar chandruok \nGapaka mogingore, masiche be mopondo  \nIn Jaloch maduong' mar nam, Jawar Yesu itelna.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kat' apaka gingore, Inyalo kueyo yamo. \nApaka mager winji kichiko mondo gikwe.  \nIn Jaloch maduong' mar nam, Jawar Yesu itelna.\n\n",
      stanNum3: "3",
      stanThree:
        'Ka achiegni gi chopo, ka yembe malich kudho \nEdho nam mokwe maber, ka ayiengora kuomi Yie, \nAwinji kiwachona, "Kik iluor anatelni".',
    },
    {
      id: 53,
      title: "53 - Wapako Ruoth Ma Jawarwaa",
      author: "Charles Wesley",
      engTitle: "SFW 712 All Praise To our Redeeming Lord",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Wapako Ruoth ma Jawarwa, Muche oriwowa; \nTo koseriwowa kama Walam gi chuny achiel.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ochikowa wagene ka, wabed achiel kuome; \nOneg' wawuoth kanyakla ka wachiko yor polo.\n\n",
      stanNum3: "3",
      stanThree:
        "Ochiwo michne nijogo mageno nyinge chuth; \nWanyiso ng'wonone kama, kwaherore maber.\n\n",
      stanNum4: "4",
      stanFour:
        "Kwawinjore maber e piny, Kwamor kuom Yesu Ruoth, \nTo mor manade ma nobet kwachokore e polo.\n\n",
    },
    {
      id: 54,
      title: "54 - Wuod Dhano Ma Ne Othou",
      author: "P. P. Bliss",
      engTitle: "SFW 735 Man of Sorrows",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Wuod dhano ma ne otho, Ma nosandi, ma nogur, \nEn misango mar jopiny, Alleluya! En Jakonya.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ne gigure Golgotha, Tho malit Owuon noyie; \nChunya mor, nawer kama, Alleluya! En Jakonya.\n\n",
      stanNum3: "3",
      stanThree:
        "Jo maricho chon kucha, Ne gisin kode marach; \nRembe to nowarowa; Alleluya! En Jakonya.\n\n",
      stanNum4: "4",
      stanFour:
        "Yesu In nitho kama! Nyaka chieng' naluwi ka; \nChunya mor, nawer kama, Alleluya! En Jakonya.",
    },
    {
      id: 55,
      title: "55 - Awero Teko Mar Nyasaye",
      author: "Isaac Watts",
      engTitle: "SDAH 88 I Sing The Mighty Power of God",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Awero teko mar Nyasaye Ma noloso gode, \nMa noketo nembe matut, Ma noyaro polo; \nDwe to orieny kuom chikne to, Sulwe duto winje.\n\n",
      stanNum2: "2",
      stanTwo:
        "Awero ng'wono mar Nyasaye Mamiyowa chiemo, \nNochweyo duto gi Wachne, Noneno duto ber, \nRuoth, ka manade mang'iyo aneno tich mag lueti; \nPolo ohulo duong' Nyasaye, Piny nyiso herane.\n\n",
      stanNum3: "3",
      stanThree:
        "Yien,to gi cham, g'alote be, Duto hulo duong'ni; \nYembe kudho, be koth ochwe Nikech chikni, Ruodhwa, \nDuto mimiyo ngima to gibedo e bwo ritni; \nOnge kamoro mwadhiye to Nyasaye ni kanyo.\n\n",
    },
    {
      id: 56,
      title: "56 - Ruoth, Awinjo Wach Mar Gwethni",
      author: "William Batchelder Bradbury",
      engTitle: "SFW 875 Lord I hear of Showers",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Ruoth, awinjo wach mar gwethni Ma iolo ni jogi; \nGweth mang'won mahoyo chuny ji; An bende dak ayudi?\n\n",
      stanChorus: "Chorus:\n",
      chorus: "An bende, an bende; \nOl gwethni e chunya, Ruoth.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kik ikadha, yaye Nyasacha, Richo oseloyoa; \nKik iweya, yaye Jakonya, To inyisa ng'wononi.\n\n",
      stanNum3: "3",
      stanThree:
        "Kik ikadha, In Wuon ng'wono, Chik tienda e wang'yori; \nAn agombo luwi pile, Taya pile e piny ka.\n\n",
      stanNum4: "4",
      stanFour:
        "Kik ikadha, yaye Jawarna, In Wuon ngima maradier; \nMuchi mondo dak e chunya, Kendo puonja wecheni.",
    },
    {
      id: 57,
      title: "57 - Roho Mar Nyasaye, Ibina",
      author: "Elwood H. Stokes",
      engTitle: "SDAH 260 Hover O'er Me Holy Spirit",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Roho mar Nyasaye, ibina, Luok chunya obed maler; \nBende parona ipwodhi, Bi, ipong' chunya koro.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Much Nyasaye, mond' ibi, Pong' chunya, asayoi; \nPwodha abed ng'ati chutho,Much Nyasaye,ibi koro.\n\n",
      stanNum2: "2",
      stanTwo:
        "Roho mar Nyasaye, bi kuoma; Kata ok anyal neni \nTo adwaro mond' ibina, Bi, ipong' chunya koro.\n\n",
      stanNum3: "3",
      stanThree:
        "An ayom, aonge teko, An akulorani, Ruoth; \nRoho mar Nyasaye maler, to Mond' imiya tekoni.\n\n",
      stanNum4: "4",
      stanFour:
        "Luoka, hoya, thiedha, gwedha; Herani opong' chunya; \nKonya, sira, taya pile; Gwethni mond' osik koda.",
    },
    {
      id: 58,
      title: "58 - Muya Maler Jatendwa",
      author: "Marcus Morris Wells",
      engTitle: "SFW 866 Holy Spirit Faithful Guide",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Muya Maler, Jatendwa, Ibedo butwa pile; \nTelnwa mos e wang'yori, Wan jowuoth e piny marach; \nJi gimor ka giwinjo Dwol mamit kokonigi:  \n\"Jawuoth, dak ibi ira; Lu bang'a, anatelni.\"\n\n",
      stanNum2: "2",
      stanTwo:
        'In Jakonya, Osiepa chutho, Mantie kodwa pile ka; \nKik iwewa gi parruok, Ka wabedo e mudho; \nKa yembe kudho matek, Chunywa bedo kod luoro; \nLuongwa, "Jawuoth, bi ira; Lu bang\'a anatelni."\n\n',
      stanNum3: "3",
      stanThree:
        'Ka tichwa oserumo, Wagombo yudo yueyo; \nOnge gi ma warito Mak mana polo kende; \nOnge gi ma wageno To mana remb Jawarwa; \nLuongwa, "Jawuoth, lu bang\'a, Iniyud yueyo malo."\n\n',
    },
    {
      id: 59,
      title: "59 - Muya Maler, Winj Alamwa",
      author: "Andrew Reed",
      engTitle: "SDAH 269 Spirit Devine, Attend our Prayer",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Muya Maler, winj alamwa. \nMondo idag e chunywa; \nGi tekoni duto ilor, \nMuya Maler, ibi.\n\n",
      stanNum2: "2",
      stanTwo:
        "Bi kaka ler! Mond' ifwenynwa Kethwa, \nKitwa maricho; \nMond' itelnwa e yor ngima, \nEn yor jo mabeyo.\n\n",
      stanNum3: "3",
      stanThree:
        "Bi kaka mach, ipwodh chunywa, \nKuom gik maricho duto; \nMondo wachiwre ni Ruodhwa, \nMisango mangima.\n\n",
      stanNum4: "4",
      stanFour:
        "Bi kaka koth, mi igwedhwa, \nKa pod wan nyimi kae; \nDak ipong'wa gi tekoni, \nKiloyo chunywa chuth.\n\n",
      stanNum5: "5",
      stanFive:
        "Kaka yamo mondo ibi, \nGi teko kaka chon cha; \nMondo warruok man kuom Yesu, \nOlandre piny duto.\n\n",
    },
    {
      id: 60,
      title: "60 - Much Nyasaye, Iler Chutho",
      author: "Andrew Reed",
      engTitle: "SDAH 268 Holy Spirit, Light Devine",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Much Nyasaye, Iler chutho; \nLerni mond' omeny chunya; \nKibedo koda Jakony, \nMudhona duto norum.\n\n",
      stanNum2: "2",
      stanTwo:
        "Much Nyasaye, ahombi ngang', \nMi chunya bedo maler; \nNyaka a ndalo mang'eny \nKethruok oseloyoa.\n\n",
      stanNum3: "3",
      stanThree:
        "Much Nyasaye, Jakony madier, \nDak e chunya, miya kuwe; \nGol kethruok oko chutho, \nChangi chunya man gi tuo.\n\n",
    },
    {
      id: 61,
      title: "61 - Osiep Manade, En Mor Manade",
      author: "Elisha A. Hoffman",
      engTitle: "SDAH 469 What A Fellowship",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Osiep manade, en mor manade, \nKa iyiengori kuom Ruoth Yesu. \nEn gweth manade, en kuwe manade, \nKa iyiengori kuom Ruoth Yesu.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Yiengri, yiengri Kigeno Yesu ma Ruodhi; \nYiengri, yiengri, yiengri kuom Yesu ma nyaka chieng'.\n\n",
      stanNum2: "2",
      stanTwo:
        "Anyalo wuotho e yorno madiny, \nKa ayiengora kuom Ruoth Yesu; \nEn yo maber madhiyo kar ngima \nKa iyiengori kuom Ruoth Yesu.\n\n",
      stanNum3: "3",
      stanThree:
        "Onge gimoro monego aluor \nKa ayiengora kuom Ruoth Yesu. \nRuoth nobed koda ndalo duto te, \nKa ayiengora kuom Ruoth Yesu.",
    },
    {
      id: 62,
      title: "62 - Onge Osiep Moro Kaka Yes",
      author: "George Crawford Hugg",
      engTitle: "SFW 740 There’s Not A Friend",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Onge osiep moro kaka Yesu; \nEn kende! En kende! \nOnge mathiedho tuoche mag chunywa; \nEn kende! En kende!\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Yesu ong'eyo chandruokwa duto, \nNotelnwa nyaka piny ogik; \nOnge osiep moro kaka Yesu; \nKat' achiel, Kat' achiel.\n\n",
      stanNum2: "2",
      stanTwo:
        "Onge osiep man gi duong' ka Yesu, \nEn kende! En kende! \nTo chunye muol moloyo ji duto; \nEn kende! En kende!\n\n",
      stanNum3: "3",
      stanThree:
        "Onge saa moro mak Entie kodwa, \nKat' achiel, kat' achiel. \nKata e mudho En kodwa pile; \nEn kende! En kende!\n\n",
      stanNum4: "4",
      stanFour:
        "To En Osiep ma ok enowewa; \nEn kende! En kende! \nOnge jaketh ma Yesu ojaro, \nKat'achiel, kat'achiel.\n\n",
      stanNum5: "5",
      stanFive:
        "Noherowa nyaka ne othonwa; \nEn kende! En kende! \nOk enojwang' nyithinde mohero, \nKat' achiel, kat' achiel.\n\n",
    },
    {
      id: 63,
      title: "63 – Ler Wang' Chieng' Orieny E Gode",
      author: "Mrs. M. T. Haughey",
      engTitle: "SFW 854 Sunlight in The Heart",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Ler wang' chieng' orieny e gode, Orieny bende e wi nam; \nLerne neno kwonde Lege Ka ma jamni kwayoe. \nTo ler moloyo ler wang' chieng' \nNitie koro e chunya, Nikech in Kanyo, Jawarna; \nLer nitie ka ma Intie.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Yaye lerno, madieri chutho, \nLerno mantie e chunya; \nKa Yesu odak e chunya, \nOriembo kuyo duto.\n\n",
      stanNum2: "2",
      stanTwo:
        "Abolo kuyona duto Kak' iwito law moti. \nIseruaka gi mor mari, Opong'o dhoga gi pak; \nAgeno piny Ruoth mar polo, Ma herani losona; \nEn e gi maparo pile, Chunya mor kuomi, Ruodha.\n\n",
      stanNum3: "3",
      stanThree:
        "In Jawarna, iseng'iewoa, Ngimana duto mari; \nMond' anyis pakni gi duong'ni Kuom kit wuodha e piny ka. \nTo ageno piny Ruodh polo, Ma herani nong'iewona. \nEn e gi maparo pile Chunya mor kuomi, Ruodha.\n\n",
    },
    {
      id: 64,
      title: "64 – Kabedo E Tiend Ruoth Yesu",
      author: "J. H",
      engTitle: "SFW 842 Sitting At The Feet Of Jesus",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Kabedo e tiend Ruoth Yesu awinjo weche mamit; \nKa maber, moneg' abedie E tiende ndalo duto. \nKabedo e tiend Ruoth Yesu, Kaparo kit ngimana, \nAwuoro hera gi ng'wono ma Yesu otimona.\n\n",
      stanNum2: "2",
      stanTwo:
        "Mond' abed e tiend Ruoth Yesu, en kar hawi moloyo; \nRichona gi kuyo duto aweyo kanyo kuome. \nKabedo e tiend Ruoth Yesu, anyise chunya duto; \nTo ayudo teko kuome makonya e ngimana.\n\n",
      stanNum3: "3",
      stanThree:
        "Gwedha, yaye, Jawarna, Gwedha, kabedo e tiendi ka; \nNyisa herani modhiero, ng'iya gi wang'i mang'won. \nKet paro Yesu e chunya, Miya bed ng'ati maler; \nTimna duto mondo nyis ji kak' awuotho gi Yesu.\n\n",
    },
    {
      id: 65,
      title: "65 – Ruodha, Aheri Maradier",
      author: "Frances R. Havergal",
      engTitle: "SFW 854 Sunlight in The Heart",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Ruodha, aheri maradier, Moloyo mor mar piny; \nNikech imiya kuwe mari Ma piny ok nyal ketho.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "To ji mang'eny pok ong'eyo (ong'eyo) Herani modhiero; \nTo ji mang'eny pok ong'enyo (ong'eyo) Rembi moseluoka (oluoka).\n\n",
      stanNum2: "2",
      stanTwo:
        "Ang'eyo Intie buta, Ruoth, Moloyo ji me piny; \nKaparoi ayudo mor Moloyona mor piny.\n\n",
      stanNum3: "3",
      stanThree:
        "Iketo morni e chunya, Ma piny ok nyal golo; \nDa ok abed gi herani, Kuyo dipong' chunya.\n\n",
      stanNum4: "4",
      stanFour:
        "Kwayudo mor e ngimawa Kwawuotho kodi ka, \nTo wanayud mor manade Kwaneni Wang' gi Wang'.",
    },
    {
      id: 66,
      title: "66 – Aseyudo Osiep Maber",
      author: "J. G. Small",
      engTitle: "SDAH 186 I’ve Found A Friend",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Aseyudo Osiep maber, Chon nohera kakia, \nNoywaya gi tond Herane, Emomiyo ahere. \nKoro oketo e chunya Herane ndalo duto; \nAn ng'ate, to En Osiepa, Ndalo duto mochwere.\n\n",
      stanNum2: "2",
      stanTwo:
        "Aseyudo Osiep maber; Notho e msalaba \nNi mond' ayud ngima kuome, Ringre Owuon nomiya. \nGik moko duto ma an go, Ok maga to mag Yesu; \nChunya, ringra, giga duto Ni mag Yesu mochwere.\n\n",
      stanNum3: "3",
      stanThree:
        "Aseyudo Osiep maber; Nomiye teko duto; \nMondo orita kawuotho Nyaka adonj e polo. \nTo ka madhiye agombo par Nyasaye ndalo duto; \nKoro atiyo kageno Dak kod Yesu mochwere.\n\n",
      stanNum4: "4",
      stanFour:
        "Aseyudo Osiep maber, Maber, mang'won, madieri; \nOtelona gi wach maber, En Jakony maratego. \nOnge gi manyalo poga Kod En mohera chutho; \nWeche mag piny ok nyala ngang', An ng'ate chuth mochwere.",
    },
    {
      id: 67,
      title: "67 – Nyasachwa Mondo Obed Kodu",
      author: "Jeremiah E. Rankin",
      engTitle: "SDAH 65 God Be With You",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Nyasachwa mondo obed kodu, En bende e ma nogwedhu, \nKaka rombe Enoritu, Nyasachwa mondo obed kodu.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Nyaka wanere chieng' machielo, \nNyaka wanere e biro Ruoth, \nNyaka wanere chieng' maduong'no, \nNyasachwa mondo obed kodu.\n\n",
      stanNum2: "2",
      stanTwo:
        "Nyasachwa mondo obed kodu, En ogeng'ou gi luete; \nEn mang'won, En to noritu; Nyasachwa mondo obed kodu.\n\n",
      stanNum3: "3",
      stanThree:
        "Nyasachwa mondo obed kodu. En t'omiu bet mangima, \nBende En ohoyo chunyu; Nyasachwa mondo obed kodu.\n\n",
      stanNum4: "4",
      stanFour:
        "Nyasachwa mondo obed kodu; Kata ka masich tho yudwa. \nTo wanere e pinyruodhe; Nyasachwa mondo obed kodu.",
    },
    {
      id: 68,
      title: "68 – Yesu Nowara",
      author: "Fanny J. Crosby",
      engTitle: "SDAH 462 Blessed Assurance",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Yesu nowara, koro amor, To osedonjo omenyo chunya; \nKoro kadwaro wacho ni ji, Ok anamung' ngang' ok analing'.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Mano e morna, mano wenda, Kapako nyinge ndalo duto; \nMano e morna, mano wenda, kapako nyinge ndalo duto.\n\n",
      stanNum2: "2",
      stanTwo:
        "Yesu nopuonja hero Nyasaye; an koro adwaro puonjo jopiny, \nKata gikwero, kata giyie, Ok anamung' ngang', ok analing'.\n\n",
      stanNum3: "3",
      stanThree:
        "Koro kageno Ruoth Jakonya, Yesu e berna bende e lerna; \nKa tichne rumo, ka piny ogik, Eka nobi mond' okaw joge.",
    },
    {
      id: 69,
      title: "69 – Puonja Injili Lilo",
      author: "Katherine Hankey A",
      engTitle: "SDAH 169 Tell Me The Old, Old Story",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Puonja Injili lilo, Kuom wach polo mak ne, \nKuom Yesu bende duong'ne, Gi herane adier; \nPuonja malong'o chutho Mondo ang'e maber, \nNikech arach e nyime, Nabayo chon marach.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Puonja Injili lilo; Puonja Injili lilo; \nPuonja Injili lilo; Kuom hera mar Yesu.\n\n",
      stanNum2: "2",
      stanTwo:
        "Puonja Injili mos mos, Amak wachno mamit; \nHono mar waro jopiny, Machango chuny marach; \nPuonja Injili pile, Kik wiya wil nono; \nAdwaro wach odonjna, Ahero yie adier.\n\n",
      stanNum3: "3",
      stanThree:
        "Puonja Injili kare, Gi dwol mamuol chutho; \nTo an jaketh chik polo,Yesu to waroa; \nPuonja Injili kende, Makonyoa maber; \nMamiyo dhano kinda, Koneno wach malit.\n\n",
      stanNum4: "4",
      stanFour:
        "Puonja Injili chutho, Wach maradier ayie; \nTo mor mar piny omayo Ngima mar chuny jawuoth; \nEka ka piny noruna, Kachopie polo cha, \nPuonja Injili chutho, Kuom Yesu ma Jawar.",
    },
    {
      id: 70,
      title: "70 – Nyasaye Wachokore",
      author: "John Fawcett",
      engTitle: "SDAH 350",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Nyasaye wachokore gi chuny mar hera ka; \nHera moriwo chunywa ka En hera mar Nyasaye.\n\n",
      stanNum2: "2",
      stanTwo:
        "E nyim kom-duong' Wuonwa Walamo gi chunywa; \nKuom yie, gi geno, gi paro, Chunywa bedo achiel.\n\n",
      stanNum3: "3",
      stanThree:
        "Wariwo chandruokwa, Gi ting'wa duto be; \nWajiwore kuom Nyasachwa Kwakonyore maber.\n\n",
    },
    {
      id: 71,
      title: "71 – Puonja Wach Biblos",
      author: "Pricilla J. Owens",
      engTitle: "SDAH 272 Give me The Bible",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Puonja wach Biblos, en sulwe morienynwa, \nKokonyo ji machandore e yo; \nOnge bor polo manyalo im lerne, \nOnyiso kaka Yesu dwarowa.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Miya wach Biblos, wach maler marienynwa. \nLerni notaya e wang'yo madiny; \nNopuonja chikni, gi singruokni duto, \nNyaka lerni notieko mudho me piny.\n\n",
      stanNum2: "2",
      stanTwo:
        "Miya wach Biblos, ka chunya ohewa, \nKapong' gi luoro kuom kuyo gi keth; \nWeche mamit ma noa e dho Yesu  \nGinijiw chunya mond' agen Jawar.\n\n",
      stanNum3: "3",
      stanThree:
        "Miya wach Biblos mondo meny wang'yora, \nPuonja kuom chwanyruok mantie e piny ka; \nLerno madieri noneg mudho duto, \nLerno manyalo menyonwa yor kuwe.\n\n",
      stanNum4: "4",
      stanFour:
        "Miya wach Biblos, tach ngima mochwere, \nTing'e malo kichung' e dho liel; \nNyisa lerno morienynwa a e polo, \nOtayowa e yo madhi polo.",
    },
    {
      id: 72,
      title: "72 – Ahero Weche Mag Nyasaye",
      author: "Unknown",
      engTitle: "I Love The Sacred Book",
      doh: "Doh en Eb",
      stanNum1: "1",
      stanOne:
        "Ahero wache mag Nyasaye, To gin weche mamiya mor; \nGin to ginyisa yo maber, Kendo mond' awe tim marach.\n\n",
      stanNum2: "2",
      stanTwo:
        "Weche mamit monyisa ka Kaka Yesu yande otho; \nEe, notho kara ni mondo Anwang' ngima mochwere.\n\n",
      stanNum3: "3",
      stanThree:
        "Adwaro yie weche duto ma Nyasaye osewenwa ka; \nMondo agen hera Nyasaye, Mondo an bende ahere.\n\n",
      stanNum4: "4",
      stanFour:
        "Kaketho weche mag Nyasaye, Koro atieko chwanyora; \nKa chunya tek, kadagi yie, Koro asemiyo wang'a.\n\n",
      stanNum5: "5",
      stanFive:
        "Weche Nyasaye gin ler mar piny, Onego kik ami wang'a; \nTo ni mondo ane lerne, Ni mondo kik achwanyora.",
    },
    {
      id: 73,
      title: "73 – Ahero Nyiso Weche",
      author: "Katherine Hankey",
      engTitle: "SDAH 457 I Love To Tell The Story",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Ahero nyiso weche kuom gik mantie malo; \nKuom Yesu to gi duong'ne, gi herane bende; \nAhero poro wachne nikech gin adiera; \nGimiya mor e chunya ma piny ok nyal miya.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Ahero poro weche kuom Yesu ma Jawarwa; \nKata e polo malo nahul hera Yesu.\n\n",
      stanNum2: "2",
      stanTwo:
        "Ahero poro weche kuom Yesu ma Jawar; \nEn wach mamitna chutho moloyo gik mag piny; \nAhero poro duto ma Ruoth notimona; \nChunya ochuna pile ni mond' ahul berne.\n\n",
      stanNum3: "3",
      stanThree:
        "Ahero nyiso wachne, en wach maberna ngang'; \nPile kanyiso ng'ato, omitna moloyo; \nAhero nyiso jogo ma pok owinjo ngang', \nKaka Yesu othonwa mond' omiwa ngima.\n\n",
      stanNum4: "4",
      stanFour:
        "Ahero poro wachne; kata jo mang'eye \nAneno pod gihero winjo wach Ruoth Yesu; \nKendo e polo malo kawero wer manyien,  \nNapor wach kuom Jawarwa, weche mahero ngang'.",
    },
    {
      id: 74,
      title: "74 – Bende Nichungi E Ndalo Chandruok?",
      author: "William James Kirkpatrick",
      engTitle: "SDAH 534 Will Your Anchor Hold",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Bende nichungi e ndalo chandruok \nE ndalo maduong' ka chandruok biro \nKa yembe kudho ka apaka lich \nBende nichungi e ndalono?\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Wan gi lwanda morito chunywa \nMochung' matek ka yembe kudho, \nMotwe e loch ma ok nyal yiengni \nMotegno chutho e hera Jawar.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kichungo motegno e lwandano \nNikech Yesu en e lwandano, \nKa roho mare bende teloni \nInilo temruok gi tekone.\n\n",
      stanNum3: "3",
      stanThree:
        "Nomiyi chungo e ndalo luoro \nKa onyisi ka chandruok chiegni, \nKa apaka ger ka yembe kudho \nOnge apaka ma diyuayi.\n\n",
      stanNum4: "4",
      stanFour:
        "Ok onyal pudhre kata e kar tho \nKa pige mang'ich bwogo ringrewa \nKat' apaka ng'eny pod nochung' matek \nKa wageno kuom Ruoth Jawarwa.\n\n",
      stanNum5: "5",
      stanFive:
        "Ka wanane ler ka piny yawore \nRangeye mag lulu ka rieny maler \nWanachung' matek kwang'iyo polo \nKa chandruok kadho ma nyaka chieng'.",
    },
    {
      id: 75,
      title: "75 – Adwaro Ng'eyo Wach Yesu",
      author: "Eliza E. Hewitt",
      engTitle: "SDAH 245 More About Jesus",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Adwaro ng'eyo wach Yesu, Nokecha ka yandi nalal; \nMed puonja warruok man kuome, Kod tho nikech noheroa.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Med puonja kuom Yesu, Med puonja kuom Yesu; \nMed puonja warruok man kuome, Kod tho nikech noheroa.\n\n",
      stanNum2: "2",
      stanTwo:
        "Wach mar Yesu apuonjora, Mondo ang'e gi modwaro; \nRoho Maler otelona, En opuonja ndalo duto.\n\n",
      stanNum3: "3",
      stanThree:
        "Adwaro somo Wach mare, Omiya winjruok kod Ruodha; \nKawinjo dwonde e Wachne, Okonya chiko ngimana.\n\n",
      stanNum4: "4",
      stanFour:
        "Adwaro winjo kuom Yesu, Weche duto ma kuom duong'ne; \nAdwaro ngimano mak rum Ka Ruodh mirembe noduogi.",
    },
    {
      id: 76,
      title: "76 – Chwoyo Ndalo Duto",
      author: "Knowles Shaw",
      engTitle: "SDAH 369 Sowing in The Morning",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Chwoyo ndalo duto, chwoyo koth Injili, Chwoyo wach adiera nyaka chieng' watho.  Keyo biro chopo, piny ochiek gilala, Wanamor ahinya, wanamor maber.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Keyo biro wuok, keyo biro wuok; \nWanamor gilala keyo biro wuok. \nKeyo biro wuok, keyo biro wuok; \nWanamor gilala keyo biro wuok.\n\n",
      stanNum2: "2",
      stanTwo:
        "Chwoyo pinje duto, kata tek ahinya, \nYesu e mochiko mond' wadhi kode; \nWan gi kinde tinde, kik wanindi koro, \nMondo wadhiuru chwoyo wach maber.\n\n",
      stanNum3: "3",
      stanThree:
        "Kata en Satani, en mawuonda nono, \nEn mamayo chutho jo madagi wach; \nTo wachwo gi kinda, wanatim sinani, \nKeyo biro chopo, wanamor maber.",
    },
    {
      id: 77,
      title: "77 – Kony Joma Dwaro Tho",
      author: "Fanny J. Crosby",
      engTitle: "SDAH 367 Rescue The Perishing",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Kony Jo madwaro tho, molal resuru; \nGolgi e bugo matut mar richo; \nJuk jo magore piny, dwar jo morwenyo, \nNyisgi kuom Yesu ma Jawar maduong'.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Kony Jo madwaro tho, Molal resuru; \nYesu En Wuon ng'wono; Enowargi.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kata gigalore, en pod orito \nMond' oruak jogo maloko chunygi; \nUn kik uchagi ngang', nyisgi kuom Yesu, \nNowe kethgi ka giyawne chunygi.\n\n",
      stanNum3: "3",
      stanThree:
        "Satan odak kodgi, ochando chunygi, \nParo maiye osediyogi; \nTo hera mar Yesu nyalo ho chunygi; \nYesu odwaro wakelgi ire.\n\n",
      stanNum4: "4",
      stanFour:
        "Kony Jo madwaro lal - Ruodhwa owacho; \nBer watim tich ma Ruoth luongowae; \nWatim kinda pile, Yesu ni kodwa, \nNomiwa teko mar timo tichne.",
    },
    {
      id: 78,
      title: "78 – Aparo Tinende Kuom Pinyno",
      author: "E. E. Hewitt",
      engTitle: "I am Thinking Today",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Aparo tinende kuom pinyno miwuoro, \nMa anachopie ka chieng' podho; \nKachungo but Jawar, kosidhna osimbo, \nNorieny gi sulwe maler koso?\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Koso sulwe nobedi e osimbona, \nKa ngimana mepinyni rumo? \nKachiew gi hawi mar bedo e yueyoni, \nSulwe norieny e osimbona?\n\n",
      stanNum2: "2",
      stanTwo:
        "Kuom teko mar Jawar mond' ati kend' alem, \nMond' atim rito ka jalok ji; \nNi mondo awinj dwond Ruodha kowachona, \n\"Bi, idonj e morna koro.\"\n\n",
      stanNum3: "3",
      stanThree:
        "Nobed mor manade ka aneno wang'e, \nNgimana anaket e luete; \nSulwe nobedna duong' e dala dhahabu,",
    },
    {
      id: 79,
      title: "79 – Kik Ibadhri Ni Tich",
      author: "Franklin E. Belden",
      engTitle: "SFW 769 Ask Not To Be Excused",
      doh: "Doh en G",
      stanNum1: "1",
      stanOne:
        "Kik ibadhri ni tich, tijno moneg' itim; \nIkri mondo iti ka ma onyisoi; \nRuodhwa oluongoi, oluongoi pile; \nYie mond' iwinj dwonde, itine gi chunyi.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Bi koro (tinde), kik idagi biro; \nBi koro (tinde), ikri mondo iti; \nKik ibadhri ni tich, Ruodhwa di po dwoki, \nNichayo herana; ok nidonj e polo.\n\n",
      stanNum2: "2",
      stanTwo:
        "Kik ibadhri ni tich, Ruoth oluongi tinde; \nKik idage kendo, reti iwinj dwonde; \nPuothe to osechiek, jokeyo e manok; \nIn, yaw chunyi koro, mondo iti ni Ruoth.\n\n",
      stanNum3: "3",
      stanThree:
        "Kik ibadhri ni tich, kik ideki koro; \nKichayo herane, di po koweyi chuth; \nKa pod nitie ng'wono manyisi yor polo. \nYesu pod osayi, Bi mond' oweni keth.",
    },
    {
      id: 80,
      title: "80 – Daher Tiyo Kodi, Ruodha",
      author: "Unknown",
      stanNum1: "1",
      stanOne:
        "Daher tiyo kodi, Ruodha, Gi mor moloyo; \nKachiwora mar tieko tichni E pinje duto.\n\n",
      stanChorus: "Chorus:\n",
      chorus:
        "Kawa, Yesu kawa chutho, Pong' chunya, ringra; \nPuonja luwo bang'i pile, Katimo wachni.\n\n",
      stanNum2: "2",
      stanTwo:
        "Malaika marateke,Tiyoni gi ng'wech; \nWagombo bedo kamano, Jotich malong'o.\n\n",
      stanNum3: "3",
      stanThree:
        "Pile, pile miwa teko, Geno mana In; \nEka chieng' ma Yesu wiro, Tich norum chutho.\n\n",
      stanChorus3: "Chorus:\n",
      chorusThree:
        "Yiera,Yesu, mond' atini, Kata ni jomwa; \nOk anyal gimoro kenda, Taya saa duto.",
    },
        {
      id: 81,
      title: "81 – Tiuru, Yesu Biro ",
      author: "Lowell Massion",
    },
    {
      id: 82,
      title: "82 – Ka Manade Ma Ruoth Luongae",
      author: "Mary Brown",
    },
    {
      id: 83,
      title: "83 – Yesu Osiep Malong'o",
      author: "Mary Anne Shorey",
    },
    {
      id: 84,
      title: "84 – Kaparo Yath Mar Kalwari",
      author: "Isaac Watts",
    },
    {
      id: 85,
      title: "85 – Tiuru, Tiuru",
      author: "Fanny Crosby",
    },
    {
        id: 86,
        title: "86 – Wan Wamor Kwatiyo Ni Ruoth Yesu",
        author: "William A. Ogden",
    },
    {
        id: 87,
        title: "87 – Jokeyo Ni Kanye?",
        author: "Eben Eugine Rexford",
    },
    {
        id: 88,
        title: "88 – E Dho Wath Man Loka Nam",
        author: "Isaiah Baltzel",
    },
    {
        id: 89,
        title: "89 – En Madhiyo Tich Gi Chandruok",
        author: "Thomas Hastings",
    },
    {
        id: 90,
        title: "90 – Winjuru Sigandwa Miwuoro",
        author: "James M. Gray",
    },
    {
        id: 91,
        title: "91 – Nitie Luong Mobiro E Wi Apaka",
        author: "Chas H. Gabriel",
    },
    {
        id: 92,
        title: "92 – Bende Ipuonjo Ji Wach Nyasaye?",
        author: "Palmer Hartsough",
    },
    {
        id: 93,
        title: "93 – Teche Duto Onego Liel",
        author: "F. E. Belden",
    },
    {
        id: 94,
        title: "94 – Yesu Kristo Odwaro Walame",
        author: "Thomas Hastings",
    },
    {
        id: 95,
        title: "95 – Jarit, Go Tung' Mar Injili",
        author: "Henry Gilmour",
    },
    {
        id: 96,
        title: "96 – Dhiuru, Jokristo",
        author: "Sabine Baring-Gould",
    },
    {
        id: 97,
        title: "97 – Chunya, Mondo Ichiew Koro",
        author: "Philip Doddridge",
    },
    {
        id: 98,
        title: "98 – Jo Maler Mag Nyasaye",
        author: "John Wade's Cantus Diversi",
    },
    {
        id: 99,
        title: "99 – Chunya, Mond' Iritri",
        author: "George Heath",
    },
    {
        id: 100,
        title: "100 – Ok Ageno Gimoro Ngang",
        author: "Edward Mote",
    },
    {
        id: 101,
        title: "101 – Chunguru Matek Kuom Ruoth",
        author: "C. R. BlackHall",
    },
    {
        id: 102,
        title: "102 – Rituru, Lemuru",
        author: "Robert Lowry",
    },
    {
        id: 103,
        title: "103 – Chungi, Jakristo, Ruodha",
        author: "William F. Sherwin",
    },
    {
        id: 104,
        title: "104 – Waged E Lwanda Mangima",
        author: "Frankline E. Belden",
    },
    {
        id: 105,
        title: "105 – Awuotho Kachiko Polo",
        author: "Charles Hutchinson Gabriel",
    },
    {
        id: 106,
        title: "106 – Jarito Mar Dala Zayun",
        author: "Sydney S. Brewer",
    },
    {
        id: 107,
        title: "107 – In Migeno Chamo Mwandu Me Polo",
        author: "Lowell Mason",
    },
    {
        id: 108,
        title: "108 – Un Jorit Mar Dala Zayun",
        author: "Thomas Hastings",
    },
    {
        id: 109,
        title: "109 – Nyaka Karang'o Ruodhwa",
        author: "James G. Deck",
    },
    {
        id: 110,
        title: "110 – Kristo En Jatelowa",
        author: "Mrs. Frank A. Breck",
    },
    {
        id: 111,
        title: "111 – Wakwayi, Ruoth, Kuom Tekoni",
        author: "William H. Bathurs",
    },
    {
        id: 112,
        title: "112– Keduru Jo Ka Yesu",
        author: "George Duffield",
    },
    {
        id: 113,
        title: "113 – Yaye Mad Abed Gi Yie Chutho",
        author: "UnknWilliam Hiley Bathurstown",
    },
    {
        id: 114,
        title: "114 – Jakristo We Nindo",
        author: "Frances James Crosby",
    },
    {
        id: 115,
        title: "115 – Be An Jarit Msalaba",
        author: "Isaac Watts",
    },
    {
        id: 116,
        title: "116 – Biuru, Jo Nyasaye",
        author: "Isaac Watts",
    },
    {
        id: 117,
        title: "117 – Nitie Lweny Mager Ahinya",
        author: "William C. Martin",
    },
    {
        id: 118,
        title: "118 – Ndalo Auchiel Oserumo",
        author: "Joseph Stennett",
    },
    {
        id: 119,
        title: "119 – Sabato Mari, Ruoth",
        author: "Unknown",
    },
    {
        id: 120,
        title: "120 – Ruoth, Wabiro Iri",
        author: "Fanny Crosby",
    },
    {
        id: 121,
        title: "121 – Mokwongo Ruodhwa Yesu",
        author: "F. E. Belden",
    },
    {
        id: 122,
        title: "122 – Kidira Chieng' Mar Yueyo",
        author: "Christopher Wordswort",
    },
    {
        id: 123,
        title: "123 – In Skul Marwa Mar Sabato",
        author: "C. R. Blackall",
    },
    {
        id: 124,
        title: "124 – Walamo Nyasaye Tinde",
        author: "John Newton",
    },
    {
        id: 125,
        title: "125 – E Ndaloni Maler Mar Ruoth",
        author: "Eliza Lee Follen",
    },
    {
        id: 126,
        title: "126 – Kidich Nyasaye",
        author: "Unknown",
    },
    {
        id: 127,
        title: "127 – Nyasaye Gwedh Skundwa Mar Sabato",
        author: "Priscilla J. Owens",
    },
    {
        id: 128,
        title: "128 – Ndalo Mamor",
        author: "Roswell F. Cottrel",
    },
    {
        id: 129,
        title: "129 – In Odira Mar Nyasayeo",
        author: "Ignaz J. Pleyel",
    },
    {
        id: 130,
        title: "130 – Wachokore Gi Mor Tinde",
        author: "William B. Bradbury",
    },
    {
        id: 131,
        title: "131 – Nyasaye, Gokiny Mond' Iwinja",
        author: "Isaac Watts",
    },
    {
        id: 132,
        title: "132 – Wago Ni Ruoth Erokamano",
        author: "Bartholomaus Gesius",
    },
    {
        id: 133,
        title: "133 – Bedi Kod An",
        author: "Henry Francis Lyte",
    },
    {
        id: 134,
        title: "134 – Wang' Chieng Koro Podhonwa",
        author: "Mary A. Lathbury",
    },
    {
        id: 135,
        title: "135 – Yesu, In Ma Jahoch Mar Chuny",
        author: "John Keble",
    },
    {
        id: 136,
        title: "136 – Puothe Chiek E Pinje Duto",
        author: "J. O. Thompson",
    },
    {
        id: 137,
        title: "137 – Winji Weche Ma Nondikio",
        author: "Helen E. Rasmussen",
    },
    {
        id: 138,
        title: "138 – Richona Diluok Gang'o?",
        author: "UnkRobert Lowrynown",
    },
    {
        id: 139,
        title: "139 – Ringra Namiyo Inwa",
        author: "Frances R. Havergal",
    },
    {
        id: 140,
        title: "140 – Adwaro Manyo Rombea",
        author: "William A. Ogden",
    },
    {
        id: 141,
        title: "141 – Yesu Oluongoi Mondo Ibi",
        author: "George Coles Stebbins",
    },
    {
        id: 142,
        title: "142 – Nitie Wendo E Dhoot",
        author: "Edwin Othello Excell",
    },
    {
        id: 143,
        title: "143 – Yesu Oluongowa Koro",
        author: "Will L. Thompson",
    },
    {
        id: 144,
        title: "144 – Nawinjo Yesu Kowach",
        author: "Horatius Bonar",
    },
    {
        id: 145,
        title: "145 – Yesu Jakwath Madieri",
        author: "William A. Ogden",
    },
    {
        id: 146,
        title: "146 – Winji Dwond Yesu Kawuono",
        author: "Daniel March",
    },
    {
        id: 147,
        title: "147 – Wasewinjo Wach Maber",
        author: "William James Kirkpatrick",
    },
    {
        id: 148,
        title: "148 – Ng'a Mowinjo Dwond Ruoth",
        author: "Philip Paul Bliss",
    },
    {
        id: 149,
        title: "149 – Dhoranga Polo Yawore",
        author: "Lydia O. Baxter",
    },
    {
        id: 150,
        title: "150 – Jathieth Maduong' Osudo Ka",
        author: "William Hunter",
    },
    {
        id: 151,
        title: "151 – Richo Oketho Ji Malit",
        author: "John Stockton",
    },
    {
        id: 152,
        title: "152 – Yesu Okadho",
        author: "Frankline E. Belden",
    },
    {
        id: 153,
        title: "153 – Ngima Machiek Mawango!",
        author: "William James Kirkpatrick",
    },
    {
        id: 154,
        title: "154 – Yie Yesu Odonj E Chunyi",
        author: "Leila N. Morris",
    },
    {
        id: 155,
        title: "155 – Be Iseyudo Jawar Maber?",
        author: "Ida L. Reed",
    },
    {
        id: 156,
        title: "156 – Bi Ka Yesu",
        author: "Edward Payson Hammond",
    },
    {
        id: 157,
        title: "157 – Winji Jawar Ni E Dhoot",
        author: "L. H. Parthmore",
    },
    {
        id: 158,
        title: "158 – Un Jo Mojony, Biuru",
        author: "W. Chatterton Dix",
    },
    {
        id: 159,
        title: "159 – Chungo E Adiera Kaka Daniel",
        author: "Philip P. Bliss",
    },
    {
        id: 160,
        title: "160 – Nitie Remo Ma Nochwer",
        author: "William Cowper",
    },
    {
        id: 161,
        title: "161 – Ruoth Yesu, Agomobo Bedo Ng'ati",
        author: "James Nicholson",
    },
    {
        id: 162,
        title: "162 – Abiro Ni Msalaba",
        author: "Wiliam Gustavus Fischer",
    },
    {
        id: 163,
        title: "163 – Agombo Bedo Gi Ruodha",
        author: "F. H. Byshe",
    },
    {
        id: 164,
        title: "164 – Analu Bang' Yesu",
        author: "Elisha Albright Hoffman",
    },
    {
        id: 165,
        title: "165 – Asebayo Mabor Kod Ruoth",
        author: "William J. Kirkpatrick",
    },
    {
        id: 166,
        title: "166 – Jawar Owachona",
        author: "Elvira M. Hall",
    },
    {
        id: 167,
        title: "167 – Yesu, Kar Msalabani",
        author: "Fanny J. Crosby",
    },
    {
        id: 168,
        title: "168 – Duto Amiyo Ruoth Yesu",
        author: "J. W. VenDeVenter",
    },
    {
        id: 169,
        title: "169 – Yesu Luongi, We Ting'ni Mar Richo",
        author: "Lewis P. Jones",
    },
    {
        id: 170,
        title: "170 – Nitie Ng'Ama Noyie Tho Mondo Owara",
        author: "Mrs. Frank A. Breck",
    },
    {
        id: 171,
        title: "171 – In Kiol Nikech Chandruok",
        author: "Jeremiah Eames Rankin",
    },
    {
        id: 172,
        title: "172 – Nitie Ngima Kwang'Iyo Msalaba",
        author: "Franklin E. Belden",
    },
    {
        id: 173,
        title: "173 – Ka Satan Otemi",
        author: "Edwin Othello Excell",
    },
    {
        id: 174,
        title: "174 – Anayie Ruoth Yesu Kende",
        author: "George C. Stebbins",
    },
    {
        id: 175,
        title: "176 – Nyasaye Noolnwa Gweth Polo",
        author: "Daniel W. Whittle",
    },
    {
        id: 177,
        title: "177 – Ka Chandruok Osudo Machiegni Kodi",
        author: "Irvin H. Mack",
    },
    {
        id: 178,
        title: "178 – Beduru Gi Yie",
        author: "Unknown",
    },
    {
        id: 179,
        title: "179 – Chunyi Dich Nikech Parruok",
        author: "Mary D. James",
    },
    {
        id: 180,
        title: "180 – Un Muhero Ruodh Polo",
        author: "George Burder",
    },
    {
        id: 181,
        title: "181 – Nyasaye Ni Lerna",
        author: "James L. Nicholson",
    },
    {
        id: 182,
        title: "182 – Koro Wagenoi",
        author: "Ray Palmerr",
    },
    {
        id: 183,
        title: "183 – Ang'eyo Wuonwa Ong'eyo",
        author: "Sarepta M. I. Henry",
    },
    {
        id: 184,
        title: "184 – Kat' Abed Jaketh Maduong",
        author: "Will L. Thompson",
    },
    {
        id: 185,
        title: "185 – Adwari Saa Duto",
        author: "Annie S. Hawks",
    },
    {
        id: 186,
        title: "186 – Kata Ka Abedo Gi Ngima Mabe",
        author: "Horratio G. Spafford",
    },
    {
        id: 187,
        title: "187 – Kwawuotho Gi Ruodhwa",
        author: "J. H. Sammis",
    },
    {
        id: 188,
        title: "188 – An Ayie Ruoth Yesu Kende",
        author: "Louisa M. Stead",
    },
    {
        id: 189,
        title: "189 – Yesu Kristo En Osiepwa",
        author: "Charles Crozat Converse",
    },
    {
        id: 190,
        title: "190 – Ruoth, Ok Akwayoi Tinde",
        author: "Ernest R. Wilberforce",
    },
    {
        id: 191,
        title: "191 – Ruoth En E Jakwadh",
        author: "Francis Rous",
    },
    {
        id: 192,
        title: "192 – Tim Kinda Mar Lemo",
        author: "W. D. Longstaff",
    },
    {
        id: 193,
        title: "193 – Winj Weche Ma Yesu Nowacho",
        author: "Unknown",
    },
    {
        id: 194,
        title: "194 – Wuothi E Ler Mar Ruoth Nyasaye",
        author: "Unknown",
    },
    {
        id: 195,
        title: "195 – Ka Yesu Ni Koda",
        author: "Jessie H. Brown",
    },
    {
        id: 196,
        title: "196 – Yesu En Osiep Maber Chutho",
        author: "Peter P. Bilhorn",
    },
    {
        id: 197,
        title: "197 – Owadwa Kik Iluor",
        author: "John Wesley",
    },
    {
        id: 198,
        title: "198 – Yesu Ni Jakwadha",
        author: "Unknown",
    },
    {
        id: 199,
        title: "199 – Ruoth Yesu, Saa Mar Lamoi",
        author: "William W. Walford",
    },
    {
        id: 200,
        title: "200 – Saa Mar Lemo Mogwedhi",
        author: "Fanny J. Crosby",
    },
    {
        id: 201,
        title: "201 – Analu Bang'i Jakonya",
        author: "James Lawson Elginburg",
    },
    {
        id: 202,
        title: "202 – Weruru Weche Mag Nyasaye",
        author: "Philip P. Bliss",
    },
    {
        id: 203,
        title: "203 – To Kak Abet Yesu Kawa",
        author: "Charlotte Elliot",
    },
    {
        id: 204,
        title: "204 – Awinjo Dwondi Male",
        author: "Lewis Hartsough",
    },
    {
        id: 205,
        title: "205 – An Ni Mari Ruoth",
        author: "Fanny J. Crosby",
    },
    {
        id: 206,
        title: "206 – Kaw Piny Duto Miya Yesu",
        author: "Fanny J. Crosby",
    },
    {
        id: 207,
        title: "207 – Kaw Ngimana",
        author: "Henri Abraham Cesar Malan",
    },
    {
        id: 208,
        title: "208 – Bedi Mangima Kuoma",
        author: "Frances R. Havergal",
    },
    {
        id: 209,
        title: "209 – Ywaya Machiegni Buti, Ruodha",
        author: "E. W. Chapman",
    },
    {
        id: 210,
        title: "210 – Diyie Dak Kod Yesu",
        author: "Cyrus S. Nusbaum",
    },
    {
        id: 211,
        title: "211 – Aseweyo Tich Maricho",
        author: "unkHenry Francis Lytenown",
    },
    {
        id: 212,
        title: "212 – Adwaro Bedo Nyathi Yesu",
        author: "Franklin E. Belden",
    },
    {
        id: 213,
        title: "213 – Teko Nyasaye Orit",
        author: "Edith G. Cherry",
    },
    {
        id: 214,
        title: "214 – Asebayo Mabor Kodi Ruodha",
        author: "unknown",
    },
    {
        id: 215,
        title: "215 – Isedwaro Yuweyo Kod Yie Momedore",
        author: "Elisha Albright Hoffman",
    },
    {
        id: 216,
        title: "216 – Mana Kak' Abet Abironi",
        author: "unknown",
    },
    {
        id: 217,
        title: "217 – Wuora, Atang'Oni Lueta",
        author: "Charles Wesley",
    },
    {
        id: 218,
        title: "218 – O Yesu, An Adwaro",
        author: "John E. Bode",
    },
    {
        id: 219,
        title: "219 – Weche Mag Mirima",
        author: "Horatio R. Palmer",
    },
    {
        id: 220,
        title: "220 – Otelona!",
        author: "J.H. Gilmore",
    },
    {
        id: 221,
        title: "221 – Adwaro Bet Buti!",
        author: "Sarah F. Adams",
    },
    {
        id: 222,
        title: "222 – Paro Achiel Mamit",
        author: "Phoebe Cary",
    },
    {
        id: 223,
        title: "223 – Onego Abed Gi Yesu",
        author: "Fanny Crosby",
    },
    {
        id: 224,
        title: "224 – Ruoth Ni Koda E Yo Duto",
        author: "Fanny J. Crosby",
    },
    {
        id: 225,
        title: "225 – Telna O Yaye Ruoth Jehova",
        author: "William Williams",
    },

    {
        id: 226,
        title: "226 – Yesu Kotaya Pile",
        author: "William Howard Doane",
    },
    {
        id: 227,
        title: "227 – Be Yesu Ling'?",
        author: "Frank E. Graeff",
    },
    {
        id: 228,
        title: "228 – Ka Yembe Mag Kuyo Luora",
        author: "James Rowe",
    },
    {
        id: 229,
        title: "229 – Jawar Telna Kik Alal",
        author: "Frank M. Davis",
    },
    {
        id: 230,
        title: "230 – Ka Chandruok Mar Piny Ochopo",
        author: "Mary Elizabeth Servoss",
    },
    {
        id: 231,
        title: "unknown",
        author: "William C. Martin",
    },
    {
        id: 232,
        title: "232 – In Wang'yorwa",
        author: "George W. Doane",
    },
    {
        id: 233,
        title: "233 – Yesu Onindo E Jasi",
        author: "Mary A. Baker",
    },
    {
        id: 234,
        title: "234 – Yesu Obiro Ka Kendo",
        author: "Franklin E. Belden",
    },
    {
        id: 235,
        title: "235 – Wuoth Pod Odong' Marom Nade?",
        author: "Annie R. Smith",
    },
    {
        id: 236,
        title: "236 – Gin Weche Mamit Ma Jakristo Winjo",
        author: "Bonie Eloise",
    },
    {
        id: 237,
        title: "237 – Jo Maler Duto, Rituru",
        author: "Phoebe Palmer",
    },
    {
        id: 238,
        title: "238 – Gouru Bu, Goyeuru Matek",
        author: "Jessie E. Strout",
    },
    {
        id: 239,
        title: "239 – Chieng'no Odwaro Yawore",
        author: "S. J. Graham",
    },
    {
        id: 240,
        title: "240 – Singruok Maber Ngang'",
        author: "F. E. Belden",
    },
    {
        id: 241,
        title: "241 – Ok Wang'eyo Saa Ma Nobie",
        author: "William H. Pontius",
    },
    {
        id: 242,
        title: "242 – Mor Ni Jopiny",
        author: "Isaac Watts",
    },
    {
        id: 243,
        title: "243 – Dong Iikri Romo Ni Ruoth?",
        author: "R. E. Hudso",
    },
    {
        id: 244,
        title: "244 – Ne! Obiro E Koth Polo!",
        author: "John Cennick",
    },
    {
        id: 245,
        title: "245 – Di Po Ka Nobed Saa",
        author: "H. L. Turner",
    },
    {
        id: 246,
        title: "246 – Yesu Nobi Ka Kendo",
        author: "Franklin E. Belden",
    },
    {
        id: 247,
        title: "247 – Keyo Mar Pinyni",
        author: "F. E. Belden",
    },
    {
        id: 248,
        title: "248 – Chieng' Ma Bu Mar Nyasachwa Noyuagi",
        author: "J. M. Black",
    },
    {
        id: 249,
        title: "unkno249 – Ruodha, Ok Agomb Mokown",
        author: "Mary A. Kidder",
    },
    {
        id: 250,
        title: "250 – Ruodhwa Yesu Oseluongowa",
        author: "J. E. Lando",
    },
    {
        id: 251,
        title: "251 – Ka Jabura Nong'ad Buchwa",
        author: "F.E. Belden",
    },
    {
        id: 252,
        title: "252 – Ndalo Maduong' Biro",
        author: "Will L. Thompson",
    },
    {
        id: 253,
        title: "253 – Koro Kawuono, Ruodhwa Man E Polo",
        author: "Franklin E. Belden",
    },
    {
        id: 254,
        title: "254 – Ok Wang'eyo Saa",
        author: "F. E. Belden",
    },
    {
        id: 255,
        title: "255 – Ka Tichwa Oserumo",
        author: "John Ellerto",
    },
    {
        id: 256,
        title: "256 – Ka Yesu Ochoko Ji Duto",
        author: "Harriet B. McKeever",
    },
    {
        id: 257,
        title: "257 – Ka Boche Polo Oyawo E Wi Gode Mabeyo",
        author: "Annie H. Barker",
    },
    {
        id: 258,
        title: "258 – Anane Wang' Yesu Kristo",
        author: "Mrs. Frank A. Breck",
    },
    {
        id: 259,
        title: "258 – Anane Wang' Yesu Kristo",
        author: "Mrs. Frank A. Brec",
    },
    {
        id: 259,
        title: "259 – Wanachokre E Aora?",
        author: "Robert Lowry",
    },
    {
        id: 260,
        title: "260 – Ka Tichna Oserum",
        author: "Fanny Crosby",
    },
    {
        id: 261,
        title: "261 – Dalawa Man Malo",
        author: "Frank M. Davis",
    },
    {
        id: 262,
        title: "262 – Ndalo Duto Ma An E Piny",
        author: "Samuel Stennett",
    },
    {
        id: 263,
        title: "263 – Ji Noyud Mor Ka Tich Orumo",
        author: "Frankline Edson Belden",
    },
    {
        id: 264,
        title: "264 – Nitie Piny M'Oro Maber Chutho",
        author: "S.F. Bennett",
    },
    {
        id: 265,
        title: "265 – Adwaro Bedo But Pi Ngima",
        author: "Frank E. Belden",
    },
    {
        id: 266,
        title: "266 – E Pinyno Maber Manyien",
        author: "John R. Clements",
    },
    {
        id: 267,
        title: "267 – Ka Tichna Rumo",
        author: "Chas. H. Gabriel",
    },
    {
        id: 268,
        title: "268 – Wawinjo Mar Dala Maler",
        author: "Elizabeth  K. Mills",
    },
    {
        id: 269,
        title: "269 – Pinyni Ok Thurwa Mwageno",
        author: "Thomas Kelly",
    },
    {
        id: 270,
        title: "270 – Un Jowuoth To Udhi Kanye?",
        author: "Anny Crosby",
    },
    {
        id: 271,
        title: "271 – Anarwak Osimb Dhahabu",
        author: "unknown",
    },
    {
        id: 272,
        title: "272 – Asewinjo Wach Piny",
        author: "James C. Moore",
    },
    {
        id: 273,
        title: "273 – Aparo Koro Kuom Pinyno Maber",
        author: "Lillian Jackson",
    },
    {
        id: 274,
        title: "274 – E Loka Nam",
        author: "unknown",
    },
    {
        id: 275,
        title: "275 – Ageno Wanarom",
        author: "Emma Pitt",
    },
    {
        id: 276,
        title: "276 – Ka Wa",
        author: "Eliza E. Hewitt",
    },
    {
        id: 277,
        title: "277 – Ase Chop' E Piny Mar Mwandu",
        author: "Edgar P. Stities",
    },
    {
        id: 278,
        title: "278 – Nitie Ber Kuonde Duto",
        author: "John H. McNaughton",
    },
    {
        id: 279,
        title: "279 – Nyasaye Nomiyo Adam Jakony",
        author: "John Keble",
    },
    {
        id: 280,
        title: "280 – Wamor Kwaromo Kod Osiepe",
        author: "Ms. E. W. Chapman",
    },
    {
        id: 281,
        title: "281 – Nindo Kuom Yesu",
        author: "Margaret McKay",
    },
    {
        id: 282,
        title: "282 – Yesu Rembi Ma Nosechwer",
        author: "Phoebe Palmer Knapp",
    },
    {
        id: 283,
        title: "283 – Yesu, Wabiro Iri",
        author: "William A. Ogden",
    },
    {
        id: 284,
        title: "284 – Ruodha Dak Ipogna Kuon Mar Ngima",
        author: "Mary A. Lathbary",
    },
    {
        id: 285,
        title: "285 – Yesu Ruoth, Nisethona",
        author: "Augustus M. Toplady",
    },
    {
        id: 286,
        title: "286 – Winjuru Tinde Dwond Jakwath",
        author: "Alexcenah Thomas",
    },
    {
        id: 287,
        title: "287 – Wabiro Iri, Yesu",
        author: "unknown",
    },
    {
        id: 288,
        title: "288 – Hera Mamiyowa Mor",
        author: "Frankline E. Belden",
    },
    {
        id: 289,
        title: "289 – An Amor Ngang'",
        author: "Philip Paul Bliss",
    },
    {
        id: 290,
        title: "290 – Yesu, In Osiep Nyithindo",
        author: "Walter J. Mathams",
    },
    {
        id: 291,
        title: "291 – Anayie Ruoth Yesu Koro",
        author: "Mrs. L. M. B. Bateman",
    },
    {
        id: 292,
        title: "292 – Yesu Ma Ni Malo",
        author: "Harriet B. McKeever",
    },
    {
        id: 293,
        title: "293 – Yesu Ka Noa Malo",
        author: "J. H. Hall",
    },
    {
        id: 294,
        title: "294 – Wan Nyithind Ruodhwa Yesu",
        author: "unknown",
    },
    {
        id: 295,
        title: "295 – Luetega Noti Tich Mar Ruoth Yesu",
        author: "Wiliam A. Ogden",
    },
    {
        id: 296,
        title: "296 – Chon Nyithindo Nower Wer Mamit",
        author: "Franklin E. Belden",
    },
    {
        id: 297,
        title: "297 – Ruodha, Dak Imiya Tich",
        author: "Jessie Brown Pounds",
    },
    {
        id: 298,
        title: "298 – Winjuru Yuak Senti",
        author: "Fideliah H. DeWitt",
    },
    {
        id: 299,
        title: "299 – Nende Aluoko Lueta",
        author: "L. M. Bateman",
    },
    {
        id: 300,
        title: "300 – Yesu, Analu Bang'i",
        author: "Lucinda B. Bateman",
    },
    {
        id: 301,
        title: "301 – Yesu 'Hera, Ang'eyo",
        author: "Anna B. Warner",
    },
    {
        id: 302,
        title: "302 – Yesu 'Biro",
        author: "William Cushing",
    },
    {
        id: 303,
        title: "303 – Nysaye Oneno Ka Winyo Odwaro Gore Piny",
        author: "Maria Straub",
    },
    {
        id: 304,
        title: "304 – Ahero Ahinya Mar Chopo E Skul Mar Sabato",
        author: "unknown",
    },
    {
        id: 305,
        title: "305 – Nyasachwa Nochweyo Gik Moko Duto",
        author: "unknown",
    },
    {
        id: 306,
        title: "306 – Pakeuru, Un Nyithindo",
        author: "Chester G. Allen",
    },
    {
        id: 307,
        title: "307 – Bedo Gi Yesu E Dala, Mano Mor Maduong'",
        author: "unknown",
    },
    {
        id: 308,
        title: "308 – Nogola E Bugo",
        author: "Henry J. Zelly",
    },
    {
        id: 309,
        title: "309 – Yiengri Kuom Ruoth Yesu",
        author: "Lewis E. Jones",
    },
    {
        id: 310,
        title: "310 – Nitie Kamaber Mar Yweyo",
        author: "Cleland Boyd McAfee",
    },
    {
        id: 311,
        title: "311 – Ruoth Nyasacha",
        author: "Stuart K. Hine",
    },
    {
        id: 312,
        title: "312 – Chungo E Singo Mar Nyasaye",
        author: "R. Kelso Carter",
    },
    {
        id: 313,
        title: "313 – Wachiegni Dhi Dala",
        author: "Eliza E. Hewitt",
    },
    {
        id: 314,
        title: "314 – Ruodha Telna",
        author: "John Newman",
    },
    {
        id: 315,
        title: "315 – In Koso An",
        author: "James McGranahan",
    },
    {
        id: 316,
        title: "316 – Yesu Kristo Osechier",
        author: "Charles Wesley",
    },
    {
        id: 317,
        title: "317 – Kik Chunyi A Kat' E Chandruok",
        author: "Civilla D. Martin",
    },
    {
        id: 318,
        title: "318 – Nitie Kamaber Mar YweyoYie Mar Kwerewa",
        author: "Fredrick W. Faber",
    },
    {
        id: 319,
        title: "319 – Ywaya Iri, Ruoth",
        author: "Fanny J. Crosby",
    },
    {
        id: 320,
        title: "320 – Ok An Kenda Ngang'",
        author: "Ludie Carryington Day Picket",
    },
    {
        id: 321,
        title: "321 – E Chunya Awinjo Wer Mamit",
        author: "Elton Menno Loth",
    },
    {
        id: 322,
        title: "322 – Yesu, Yesu, Yesu",
        author: "unknown",
    },
    {
        id: 323,
        title: "323 – Luwo, Luwo, Analu Bang' Yesu",
        author: "Robert Lowry",
    },
    {
        id: 324,
        title: "324 – Anatimu Joyuwa Ji",
        author: "unknown",
    },
    {
        id: 325,
        title: "325 – An Achamo Kuon Mar Ngima Adier",
        author: "May Agnew Stephens",
    },
    {
        id: 326,
        title: "326 – E Chunya, E Chunya",
        author: "Harry D. Clarke",
    },
    {
        id: 327,
        title: "327 – Piny Duto Dwaro Yesu",
        author: "Benjamin A. Baur",
    },
    {
        id: 328,
        title: "328 – Nyasaye Gotienoni",
        author: "John Leland",
    },
    {
        id: 329,
        title: "329 – Ruoth, Kwagoni Chongwa Piny",
        author: "unknown",
    },
    {
        id: 330,
        title: "330 – Wabiro Neno Ruodhwa",
        author: "unknown",
    },
    {
        id: 331,
        title: "331 – Wang'a E Maneno Nyasaye",
        author: "C. C. Kerr",
    },
    {
        id: 332,
        title: "332 – Mor, Mor, Mor",
        author: "unknown",
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
                  stanChorus2: item.stanChorus2,
                  stanChorus3: item.stanChorus3,
                  stanNum2: item.stanNum2,
                  stanNum3: item.stanNum3,
                  stanNum4: item.stanNum4,
                  stanNum5: item.stanNum5,
                  stanNum6: item.stanNum6,
                  stanNum7: item.stanNum7,
                  stanNum8: item.stanNum8,
                  stanOne: item.stanOne,
                  stanTwo: item.stanTwo,
                  stanThree: item.stanThree,
                  stanFour: item.stanFour,
                  stanFive: item.stanFive,
                  stanSix: item.stanSix,
                  stanSeven: item.stanSeven,
                  stanEight: item.stanEight,
                  chorus: item.chorus,
                  chorusTwo: item.chorusTwo,
                  chorusThree: item.chorusThree,
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
