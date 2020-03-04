'use strict';

[{
  zoneRegex: {
    en: /^Anamnesis Anyder$/,
  },
  timelineFile: 'anamnesis_anyder.txt',
  timelineTriggers: [
  ],
  triggers: [
    {
      id: 'AnAnyder Fetid Fang',
      regex: Regexes.startsUsing({ source: 'Unknown', id: ['4B69', '4B72'] }),
      regexDe: Regexes.startsUsing({ source: 'Unbekannt(?:e|er|es|en)', id: ['4B69', '4B72'] }),
      regexFr: Regexes.startsUsing({ source: 'Inconnu', id: ['4B69', '4B72'] }),
      regexJa: Regexes.startsUsing({ source: '正体不明', id: ['4B69', '4B72'] }),
      regexCn: Regexes.startsUsing({ source: '不明物体', id: ['4B69', '4B72'] }),
      regexKo: Regexes.startsUsing({ source: '정체불명', id: ['4B69', '4B72'] }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'AnAnyder Scrutiny',
      regex: Regexes.startsUsing({ source: 'Unknown', id: '4E25', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Unbekannt(?:e|er|es|en)', id: '4E25', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Inconnu', id: '4E25', capture: false }),
      regexJa: Regexes.startsUsing({ source: '正体不明', id: '4E25', capture: false }),
      regexCn: Regexes.startsUsing({ source: '不明物体', id: '4E25', capture: false }),
      regexKo: Regexes.startsUsing({ source: '정체불명', id: '4E25', capture: false }),
      delaySeconds: 3,
      durationSeconds: 7,
      infoText: {
        en: 'Avoid Arrow',
        de: 'Pfeil ausweichen',
        fr: 'Evitez la flèche',
        ko: '화살표 피하기',
      },
    },
    {
      id: 'AnAnyder Inscrutability',
      regex: Regexes.startsUsing({ source: 'Unknown', id: '4B6A', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Unbekannt(?:e|er|es|en)', id: '4B6A', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Inconnu', id: '4B6A', capture: false }),
      regexJa: Regexes.startsUsing({ source: '正体不明', id: '4B6A', capture: false }),
      regexCn: Regexes.startsUsing({ source: '不明物体', id: '4B6A', capture: false }),
      regexKo: Regexes.startsUsing({ source: '정체불명', id: '4B6A', capture: false }),
      condition: Conditions.caresAboutMagical(),
      response: Responses.aoe(),
    },
    {
      id: 'AnAnyder Luminous Ray',
      regex: Regexes.startsUsing({ source: 'Unknown', id: '4E27', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Unbekannt(?:e|er|es|en)', id: '4E27', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Inconnu', id: '4E27', capture: false }),
      regexJa: Regexes.startsUsing({ source: '正体不明', id: '4E27', capture: false }),
      regexCn: Regexes.startsUsing({ source: '不明物体', id: '4E27', capture: false }),
      regexKo: Regexes.startsUsing({ source: '정체불명', id: '4E27', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder The Final Verse',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B58', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B58', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B58', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B58', capture: false }),
      condition: Conditions.caresAboutMagical(),
      response: Responses.aoe(),
    },
    {
      id: 'AnAnyder 2,000-Mina Swing',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B55', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B55', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B55', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B55', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'AnAnyder Eye Of The Cyclone',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B57', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B57', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B57', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B57', capture: false }),
      response: Responses.getIn(),
    },
    {
      id: 'AnAnyder 2,000-Mina Swipe',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B54', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B54', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B54', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B54', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder Raging Glower',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B56', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B56', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B56', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B56', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder Open Hearth Flying Fount',
      regex: Regexes.headMarker({ id: '003E' }),
      response: Responses.stackOn(),
    },
    {
      id: 'AnAnyder Bonebreaker',
      regex: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B8C' }),
      regexDe: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B8C' }),
      regexFr: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B8C' }),
      regexJa: Regexes.startsUsing({ source: 'ルクスィー・ディーマ', id: '4B8C' }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'AnAnyder Falling Water',
      regex: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B7E' }),
      regexDe: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B7E' }),
      regexFr: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B7E' }),
      regexJa: Regexes.startsUsing({ source: 'ルクスィー・ディーマ', id: '4B7E' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'AnAnyder Depth Grip',
      regex: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B84', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B84', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B84', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルクスィー・ディーマ', id: '4B84', capture: false }),
      infoText: {
        en: 'Avoid Hands',
        de: 'Händen ausweichen',
        fr: 'Evitez les mains',
        ko: '손 피하기',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'missingTranslations': true,
      'replaceSync': {
        'trench yovra': 'Tiefsee-Yovra',
        'trench xzomit': 'Tiefsee-Xzomit',
        'trench phuabo': 'Tiefsee-Phuabo',
        'trench danbania': 'Tiefsee-Danbania',
        'trench anemone': 'Tiefsee-Anemone',
        'sinister bubble': 'Finster(?:e|er|es|en) Blase',
        'queen\'s harpooner': 'Speer der Königin',
        'panopt ousia': 'Ousia',
        'io ousia': 'Io-Ousia',
        'Rukshs Dheem': 'Rukshs Dheem',
        'Unknown': 'Unbekannt(?:e|er|es|en)',
        'Kyklops': 'Kyklops',
        'Anyder squib': 'Anyder-Kreiselkrabbe',
        'Anyder leech': 'Anyder-Egel',
        'Anyder harpooner': 'Anyder-Speerwerfer',
        'Anyder grappler': 'Anyder-Greifer',
        'Anyder diviner': 'Anyder-Wahrsager',
        'Anyder clionid': 'Anyder-Clionid',
      },
      'replaceText': {
        'the Final Verse': 'Schreckensvers',
        'Wavebreaker': 'Wellenbrecher',
        'Terrible Hammer': 'Schreckenshammer',
        'Terrible Blade': 'Schreckensklinge',
        'Swift Shift': 'Schneller Wechsel',
        'Sweeping Gouge': 'Schwunghieb',
        'Sewer Water': 'Abwasser',
        'Setback': 'Rücksetzer',
        'Seabed Ceremony': 'Riffsturmzeremonie',
        'Scrutiny': 'Überwachung',
        'Rock Hard': 'Felsspalter',
        'Rising Tide': 'Steigende Flut',
        'Reflection': 'Widerschein',
        'Recharge': 'Aufladen',
        'Raging Glower': 'Wütender Blick',
        'Plain Weirdness': 'Unbekanntes Prinzip',
        'Open Hearth': 'Schreckensflammen',
        'Nursed Grudge': 'Unergründlicher Wille',
        'Naval Ram': 'Seeramme',
        'Meatshield': 'Fleischschild',
        'Mantle Drill': 'Mantelbohrer',
        'Luminous Ray': 'Lumineszenzstrahl',
        'Lacerate': 'Erodieren',
        'Jumping Thrust': 'Sprungattacke',
        'Inscrutability': 'Unidentifizierbar',
        'Hydroball': 'Wasserbombe',
        'Flying Fount': 'Spritzige Fontäne',
        'Flood': 'Flut',
        'Fetid Fang': 'Kontaminierte Klaue',
        'Falling Water': 'Fallendes Wasser',
        'Falling Rock': 'Steinschlag',
        'Eye of the Cyclone': 'Auge des Zyklons',
        'Explosion': 'Explosion',
        'Ectoplasmic Ray': 'Ektoplasmastrahl',
        'Dreadstorm': 'Furchtsturm',
        'Depth Grip': 'Hand des Ozeans',
        'Crushing Gaze': 'Erdrückender Blick',
        'Coral Trident': 'Korallenharpune',
        'Command Current': 'Flutenruf',
        'Clearout': 'Kreisfeger',
        'Buccal Cones': 'Bukkale Kegel',
        'Bonebreaker': 'Knochenbrecher',
        'Barreling Smash': 'Fasswalze',
        'Arise': 'Erheben',
        'Acrid Stream': 'Ätzende Strömung',
        '2,000-mina swipe': '2000 Mina-Hiebe',
        '2,000-mina swing': '2000 Mina-Schwung',
      },
      '~effectNames': {
        'Dropsy': 'Wassersucht',
        'Bleeding': 'Blutung',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'trench yovra': 'Yovra des abysses',
        'trench xzomit': 'Xzomit des abysses',
        'trench phuabo': 'Phuabo des abysses',
        'trench danbania': 'Dambanha des abysses',
        'trench anemone': 'Anémone des abysses',
        'sinister bubble': 'Bulle sinistre',
        'queen\'s harpooner': 'Harponneur royal',
        'panopt ousia': 'Panopt ousia',
        'io ousia': 'Io ousia',
        'Rukshs Dheem': 'Rukshs Dheem',
        'Unknown': 'Inconnu',
        'Kyklops': 'Kyklops',
        'Anyder squib': 'Squib de l\'Anydre',
        'Anyder leech': 'Sangsue de l\'Anydre',
        'Anyder harpooner': 'Harponneur de l\'Anydre',
        'Anyder grappler': 'Lutteur de l\'Anydre',
        'Anyder diviner': 'Devin de l\'Anydre',
        'Anyder clionid': 'Clionide de l\'Anydre',
      },
      'replaceText': {
        'the Final Verse': 'Le chapitre final',
        'Wavebreaker': 'Brise-vague',
        'Terrible Hammer': 'Marteau terrifiant',
        'Terrible Blade': 'Lame terrifiante',
        'Swift Shift': 'Déplacement soudain',
        'Sweeping Gouge': 'Perforation balayante',
        'Sewer Water': 'Eaux souillées',
        'Setback': 'Revers',
        'Seabed Ceremony': 'Cérémonie abyssale',
        'Scrutiny': 'Observation',
        'Rock Hard': 'Brise-roc',
        'Rising Tide': 'Marée montante',
        'Reflection': 'Réverbération',
        'Recharge': 'Recharge',
        'Raging Glower': 'Regard enragé',
        'Plain Weirdness': 'Principe inconnu',
        'Open Hearth': 'Flamme terrifiante',
        'Nursed Grudge': 'Rancune nourrie',
        'Naval Ram': 'Charge marine',
        'Meatshield': 'Chair à canon',
        'Mantle Drill': 'Manteau forant',
        'Luminous Ray': 'Rayon lumineux',
        'Lacerate': 'Lacération',
        'Jumping Thrust': 'Percée bondissante',
        'Inscrutability': 'Signification inconnue',
        'Hydroball': 'Hydroballe',
        'Flying Fount': 'Cascade',
        'Flood': 'Déluge',
        'Fetid Fang': 'Croc contaminé',
        'Falling Water': 'Chute d\'eau',
        'Falling Rock': 'Chute de pierre',
        'Eye of the Cyclone': 'Œil du cyclone',
        'Explosion': 'Explosion',
        'Ectoplasmic Ray': 'Rayon ectoplasmique',
        'Dreadstorm': 'Tempête d\'effroi',
        'Depth Grip': 'Emprise des profondeurs',
        'Crushing Gaze': 'Regard écrasant',
        'Coral Trident': 'Trident corallien',
        'Command Current': 'Eau courante',
        'Clearout': 'Fauchage',
        'Buccal Cones': 'Cônes buccaux',
        'Bonebreaker': 'Brise-os',
        'Barreling Smash': 'Fracas effréné',
        'Arise': 'Apparition',
        'Acrid Stream': 'Projection âcre',
        '2,000-mina swipe': 'Fauche de 2000 mina',
        '2,000-mina swing': 'Swing de 2000 mina',
      },
      '~effectNames': {
        'Dropsy': 'Œdème',
        'Bleeding': 'Saignant',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'trench yovra': 'トレンチ・ヨヴラ',
        'trench xzomit': 'トレンチ・ゾミト',
        'trench phuabo': 'トレンチ・フワボ',
        'trench danbania': 'トレンチ・ダンバニア',
        'trench anemone': 'トレンチ・アネモネ',
        'sinister bubble': '不気味な泡',
        'queen\'s harpooner': 'クイーンズ・ハープナー',
        'panopt ousia': 'パノプト・ウーシア',
        'io ousia': 'イーオー・ウーシア',
        'Rukshs Dheem': 'ルクスィー・ディーマ',
        'Unknown': '正体不明',
        'Kyklops': 'クリュプス',
        'Anyder squib': 'アニドラス・スクイブ',
        'Anyder leech': 'アニドラス・リーチ',
        'Anyder harpooner': 'アニドラス・ハープナー',
        'Anyder grappler': 'アニドラス・グラップラー',
        'Anyder diviner': 'アニドラス・ディヴァイナー',
        'Anyder clionid': 'アニドラス・クリオニッド',
      },
      'replaceText': {
        'the Final Verse': '恐怖の最終章',
        'Wavebreaker': 'ウェーブブレイク',
        'Terrible Hammer': '恐怖の戦鎚',
        'Terrible Blade': '恐怖の大剣',
        'Swift Shift': '高速移動',
        'Sweeping Gouge': 'スウィーピングガウジ',
        'Sewer Water': 'スーウェッジウォーター',
        'Setback': '打ち払い',
        'Seabed Ceremony': '水底の儀式',
        'Scrutiny': '観察',
        'Rock Hard': 'ロッククラッシャー',
        'Rising Tide': '上げ潮',
        'Reflection': 'リフレクション',
        'Recharge': '魔力供給',
        'Raging Glower': 'レイジング・グラワー',
        'Plain Weirdness': '原理不明',
        'Open Hearth': '恐怖の火焔',
        'Nursed Grudge': '不気味な念',
        'Naval Ram': 'ネイバルラム',
        'Meatshield': 'ミートシールド',
        'Mantle Drill': 'マントルドリル',
        'Luminous Ray': 'ルミナスレイ',
        'Lacerate': 'ラサレイト',
        'Jumping Thrust': 'ジャンプスラスト',
        'Inscrutability': '意味不明',
        'Hydroball': 'ハイドロボール',
        'Flying Fount': '飛泉',
        'Flood': 'フラッド',
        'Fetid Fang': '不快な牙',
        'Falling Water': '落水',
        'Falling Rock': '落石',
        'Eye of the Cyclone': 'アイ・オブ・サイクロン',
        'Explosion': '爆散',
        'Ectoplasmic Ray': 'エクトプラズミックレイ',
        'Dreadstorm': 'ドレッドストーム',
        'Depth Grip': 'ハンド・オブ・オーシャン',
        'Crushing Gaze': 'クラッシングゲイズ',
        'Coral Trident': '珊瑚の銛',
        'Command Current': '流水',
        'Clearout': 'なぎ払い',
        'Buccal Cones': 'バッカルコーン',
        'Bonebreaker': '骨砕き',
        'Barreling Smash': 'バレリングスマッシュ',
        'Arise': '出現',
        'Acrid Stream': 'アクリッドストリーム',
        '2,000-mina swipe': '2000ミナ・スワイプ',
        '2,000-mina swing': '2000ミナ・スイング',
      },
      '~effectNames': {
        'Dropsy': '水毒',
        'Bleeding': 'ペイン',
      },
    },
  ],
}];
