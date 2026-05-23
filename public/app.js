"use strict";
var App = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/main.ts
  var import_jquery = { default: window.jQuery || window.$ };
  var import_lucide = window.lucide;

  // src/lib/ose-data.ts
  var ARMORS = [
    { label: "Nessuna", ac: 9, weight: 0 },
    { label: "Armatura di cuoio", ac: 7, weight: 200 },
    { label: "Cotta di maglia", ac: 5, weight: 400 },
    { label: "Corazza a piastre", ac: 3, weight: 500 }
  ];
  var WEAPONS = [
    { label: "Senz'armi", damage: "1d2" },
    { label: "Pugnale", damage: "1d4" },
    { label: "Bastone", damage: "1d4" },
    { label: "Clava", damage: "1d4" },
    { label: "Spada corta", damage: "1d6" },
    { label: "Ascia", damage: "1d6" },
    { label: "Mazza", damage: "1d6" },
    { label: "Martello da guerra", damage: "1d6" },
    { label: "Lancia", damage: "1d6" },
    { label: "Arco corto", damage: "1d6" },
    { label: "Balestra", damage: "1d6" },
    { label: "Spada lunga", damage: "1d8" },
    { label: "Ascia da battaglia", damage: "1d8" },
    { label: "Spada a due mani", damage: "1d10" },
    { label: "Alabarda / Arma in asta", damage: "1d10" }
  ];
  var clericSaves = [
    { d: 11, w: 12, p: 14, b: 16, s: 15 },
    { d: 9, w: 10, p: 12, b: 14, s: 12 },
    { d: 6, w: 7, p: 9, b: 11, s: 9 },
    { d: 3, w: 5, p: 7, b: 8, s: 7 }
  ];
  var elfSaves = [
    { d: 12, w: 13, p: 13, b: 15, s: 15 },
    { d: 10, w: 11, p: 11, b: 13, s: 12 },
    { d: 8, w: 9, p: 9, b: 10, s: 10 },
    { d: 6, w: 7, p: 8, b: 8, s: 8 }
  ];
  var fighterSaves = [
    { d: 12, w: 13, p: 14, b: 15, s: 16 },
    { d: 10, w: 11, p: 12, b: 13, s: 14 },
    { d: 8, w: 9, p: 10, b: 10, s: 12 },
    { d: 6, w: 7, p: 8, b: 8, s: 10 },
    { d: 4, w: 5, p: 6, b: 5, s: 8 }
  ];
  var dwarfSaves = [
    { d: 8, w: 9, p: 10, b: 13, s: 12 },
    { d: 6, w: 7, p: 8, b: 10, s: 10 },
    { d: 4, w: 5, p: 6, b: 7, s: 8 },
    { d: 2, w: 3, p: 4, b: 4, s: 6 }
  ];
  var thiefSaves = [
    { d: 13, w: 14, p: 13, b: 16, s: 15 },
    { d: 12, w: 13, p: 11, b: 14, s: 13 },
    { d: 10, w: 11, p: 9, b: 12, s: 10 },
    { d: 8, w: 9, p: 7, b: 10, s: 8 }
  ];
  var magicUserSaves = [
    { d: 13, w: 14, p: 13, b: 16, s: 15 },
    { d: 11, w: 12, p: 11, b: 14, s: 12 },
    { d: 8, w: 9, p: 8, b: 11, s: 8 }
  ];
  var gnomeSaves = [
    { d: 8, w: 9, p: 10, b: 14, s: 11 },
    { d: 6, w: 7, p: 8, b: 11, s: 9 }
  ];
  var svirfneblinSaves = [
    { d: 8, w: 9, p: 10, b: 14, s: 11 },
    { d: 6, w: 7, p: 8, b: 11, s: 9 },
    { d: 4, w: 5, p: 6, b: 9, s: 7 }
  ];
  var CLASS_DATA = {
    "Acrobata": {
      hd: "1d4",
      prime: "DES",
      movement: 120,
      abilities: ["Lame leggere e bastoni", "Eludere (neutralizza bonus nemico)", "Attacco Acrobatico", "Cadere (danni ridotti)", "Arrampicarsi e Camminare su fune", "Saltare", "Solo armatura in cuoio e no scudi"],
      tables: {
        1: { thac0: 19, saves: thiefSaves[0] },
        2: { thac0: 19, saves: thiefSaves[0] },
        3: { thac0: 19, saves: thiefSaves[0] },
        4: { thac0: 19, saves: thiefSaves[0] },
        5: { thac0: 17, saves: thiefSaves[1] },
        6: { thac0: 17, saves: thiefSaves[1] },
        7: { thac0: 17, saves: thiefSaves[1] },
        8: { thac0: 17, saves: thiefSaves[1] },
        9: { thac0: 14, saves: thiefSaves[2] },
        10: { thac0: 14, saves: thiefSaves[2] },
        11: { thac0: 14, saves: thiefSaves[2] },
        12: { thac0: 14, saves: thiefSaves[2] },
        13: { thac0: 12, saves: thiefSaves[3] },
        14: { thac0: 12, saves: thiefSaves[3] }
      }
    },
    "Assassino": {
      hd: "1d4",
      prime: "DES",
      movement: 120,
      abilities: ["Assassinio e Veleno", "Travestimento", "Abilit\xE0 ladresche (Arrampicarsi, Nascondersi, Silenzioso)", "Armatura cuoio e scudi", "Tutte le armi"],
      tables: {
        1: { thac0: 19, saves: thiefSaves[0] },
        2: { thac0: 19, saves: thiefSaves[0] },
        3: { thac0: 19, saves: thiefSaves[0] },
        4: { thac0: 19, saves: thiefSaves[0] },
        5: { thac0: 17, saves: thiefSaves[1] },
        6: { thac0: 17, saves: thiefSaves[1] },
        7: { thac0: 17, saves: thiefSaves[1] },
        8: { thac0: 17, saves: thiefSaves[1] },
        9: { thac0: 14, saves: thiefSaves[2] },
        10: { thac0: 14, saves: thiefSaves[2] },
        11: { thac0: 14, saves: thiefSaves[2] },
        12: { thac0: 14, saves: thiefSaves[2] },
        13: { thac0: 12, saves: thiefSaves[3] },
        14: { thac0: 12, saves: thiefSaves[3] }
      }
    },
    "Barbaro": {
      hd: "1d8",
      prime: "COS/FOR",
      movement: 120,
      abilities: ["Cacciare e Foraggiare", "Curare veleni", "Abilit\xE0 nelle terre selvagge", "Colpire mostri invulnerabili (dal liv. 4)", "Bonus CA armatura leggera (dal liv. 4)"],
      tables: {
        1: { thac0: 19, saves: fighterSaves[0] },
        2: { thac0: 19, saves: fighterSaves[0] },
        3: { thac0: 19, saves: fighterSaves[0] },
        4: { thac0: 17, saves: fighterSaves[1] },
        5: { thac0: 17, saves: fighterSaves[1] },
        6: { thac0: 17, saves: fighterSaves[1] },
        7: { thac0: 14, saves: fighterSaves[2] },
        8: { thac0: 14, saves: fighterSaves[2] },
        9: { thac0: 14, saves: fighterSaves[2] },
        10: { thac0: 12, saves: fighterSaves[3] },
        11: { thac0: 12, saves: fighterSaves[3] },
        12: { thac0: 12, saves: fighterSaves[3] },
        13: { thac0: 10, saves: fighterSaves[4] },
        14: { thac0: 10, saves: fighterSaves[4] }
      }
    },
    "Bardo": {
      hd: "1d6",
      prime: "CAR",
      movement: 120,
      abilities: ["Incantamento (canto)", "Sapienza bardica", "Magia druidica (dal liv. 2)", "Impara linguaggi addizionali", "Cuoio o maglia, no scudi", "Armi a distanza o mischia a 1 mano"],
      tables: {
        1: { thac0: 19, saves: thiefSaves[0] },
        2: { thac0: 19, saves: thiefSaves[0] },
        3: { thac0: 19, saves: thiefSaves[0] },
        4: { thac0: 19, saves: thiefSaves[0] },
        5: { thac0: 17, saves: thiefSaves[1] },
        6: { thac0: 17, saves: thiefSaves[1] },
        7: { thac0: 17, saves: thiefSaves[1] },
        8: { thac0: 17, saves: thiefSaves[1] },
        9: { thac0: 14, saves: thiefSaves[2] },
        10: { thac0: 14, saves: thiefSaves[2] },
        11: { thac0: 14, saves: thiefSaves[2] },
        12: { thac0: 14, saves: thiefSaves[2] },
        13: { thac0: 12, saves: thiefSaves[3] },
        14: { thac0: 12, saves: thiefSaves[3] }
      }
    },
    "Cavaliere": {
      hd: "1d8",
      prime: "FOR",
      movement: 120,
      abilities: ["Ospitalit\xE0", "Combattimento a cavallo", "Equitazione", "Immunit\xE0 e difesa dalla paura", "Resistenza agli incantesimi di blocco/charme", "Solo armi in mischia", "Corazze di metallo"],
      tables: {
        1: { thac0: 19, saves: fighterSaves[0] },
        2: { thac0: 19, saves: fighterSaves[0] },
        3: { thac0: 19, saves: fighterSaves[0] },
        4: { thac0: 17, saves: fighterSaves[1] },
        5: { thac0: 17, saves: fighterSaves[1] },
        6: { thac0: 17, saves: fighterSaves[1] },
        7: { thac0: 14, saves: fighterSaves[2] },
        8: { thac0: 14, saves: fighterSaves[2] },
        9: { thac0: 14, saves: fighterSaves[2] },
        10: { thac0: 12, saves: fighterSaves[3] },
        11: { thac0: 12, saves: fighterSaves[3] },
        12: { thac0: 12, saves: fighterSaves[3] },
        13: { thac0: 10, saves: fighterSaves[4] },
        14: { thac0: 10, saves: fighterSaves[4] }
      }
    },
    "Chierico": {
      hd: "1d6",
      prime: "SAG",
      movement: 120,
      abilities: ["Scacciare non-morti", "Armi non affilate", "Nessuna limitazione armatura"],
      tables: {
        1: { thac0: 19, saves: clericSaves[0] },
        2: { thac0: 19, saves: clericSaves[0] },
        3: { thac0: 19, saves: clericSaves[0] },
        4: { thac0: 19, saves: clericSaves[0] },
        5: { thac0: 17, saves: clericSaves[1] },
        6: { thac0: 17, saves: clericSaves[1] },
        7: { thac0: 17, saves: clericSaves[1] },
        8: { thac0: 17, saves: clericSaves[1] },
        9: { thac0: 14, saves: clericSaves[2] },
        10: { thac0: 14, saves: clericSaves[2] },
        11: { thac0: 14, saves: clericSaves[2] },
        12: { thac0: 14, saves: clericSaves[2] },
        13: { thac0: 12, saves: clericSaves[3] },
        14: { thac0: 12, saves: clericSaves[3] }
      }
    },
    "Drow": {
      hd: "1d6",
      prime: "FOR/SAG",
      movement: 120,
      abilities: ["Immunit\xE0 a paralisi ghoul", "Magia Divina", "Sensibilit\xE0 alla luce", "Affinit\xE0 con i ragni", "Infravisione 27m", "Tutte armi e armature"],
      tables: {
        1: { thac0: 19, saves: elfSaves[0] },
        2: { thac0: 19, saves: elfSaves[0] },
        3: { thac0: 19, saves: elfSaves[0] },
        4: { thac0: 17, saves: elfSaves[1] },
        5: { thac0: 17, saves: elfSaves[1] },
        6: { thac0: 17, saves: elfSaves[1] },
        7: { thac0: 14, saves: elfSaves[2] },
        8: { thac0: 14, saves: elfSaves[2] },
        9: { thac0: 14, saves: elfSaves[2] },
        10: { thac0: 12, saves: elfSaves[3] },
        11: { thac0: 12, saves: elfSaves[3] },
        12: { thac0: 12, saves: elfSaves[3] },
        13: { thac0: 12, saves: elfSaves[3] },
        14: { thac0: 12, saves: elfSaves[3] }
      }
    },
    "Druido": {
      hd: "1d6",
      prime: "SAG",
      movement: 120,
      abilities: ["Immunit\xE0 allo charme (dal liv. 7)", "Identificazione", "Lingue silvane", "Mutaforma (dal liv. 7)", "Orientamento e Passo senza tracce", "Armatura cuoio/bosco", "Solo armi basilari (fionda, clava, pugnale, bastone, lancia)"],
      tables: {
        1: { thac0: 19, saves: clericSaves[0] },
        2: { thac0: 19, saves: clericSaves[0] },
        3: { thac0: 19, saves: clericSaves[0] },
        4: { thac0: 19, saves: clericSaves[0] },
        5: { thac0: 17, saves: clericSaves[1] },
        6: { thac0: 17, saves: clericSaves[1] },
        7: { thac0: 17, saves: clericSaves[1] },
        8: { thac0: 17, saves: clericSaves[1] },
        9: { thac0: 14, saves: clericSaves[2] },
        10: { thac0: 14, saves: clericSaves[2] },
        11: { thac0: 14, saves: clericSaves[2] },
        12: { thac0: 14, saves: clericSaves[2] },
        13: { thac0: 12, saves: clericSaves[3] },
        14: { thac0: 12, saves: clericSaves[3] }
      }
    },
    "Duergar": {
      hd: "1d6",
      prime: "FOR",
      movement: 90,
      abilities: ["Furtivit\xE0", "Individuazione di passaggi", "Infravisione 27m", "Sensibilit\xE0 alla luce", "Immunit\xE0 (resilienza nanica)", "Poteri mentali", "Tutte le armature, armi di taglia normale o piccola"],
      tables: {
        1: { thac0: 19, saves: dwarfSaves[0] },
        2: { thac0: 19, saves: dwarfSaves[0] },
        3: { thac0: 19, saves: dwarfSaves[0] },
        4: { thac0: 17, saves: dwarfSaves[1] },
        5: { thac0: 17, saves: dwarfSaves[1] },
        6: { thac0: 17, saves: dwarfSaves[1] },
        7: { thac0: 14, saves: dwarfSaves[2] },
        8: { thac0: 14, saves: dwarfSaves[2] },
        9: { thac0: 14, saves: dwarfSaves[2] },
        10: { thac0: 12, saves: dwarfSaves[3] },
        11: { thac0: 12, saves: dwarfSaves[3] },
        12: { thac0: 12, saves: dwarfSaves[3] },
        13: { thac0: 12, saves: dwarfSaves[3] },
        14: { thac0: 12, saves: dwarfSaves[3] }
      }
    },
    "Elfo": {
      hd: "1d6",
      prime: "INT/FOR",
      movement: 120,
      abilities: ["Percepisce porte segrete 2-in-6", "Immunit\xE0 a paralisi dei ghoul", "Infravisione 18m"],
      tables: {
        1: { thac0: 19, saves: elfSaves[0] },
        2: { thac0: 19, saves: elfSaves[0] },
        3: { thac0: 19, saves: elfSaves[0] },
        4: { thac0: 17, saves: elfSaves[1] },
        5: { thac0: 17, saves: elfSaves[1] },
        6: { thac0: 17, saves: elfSaves[1] },
        7: { thac0: 14, saves: elfSaves[2] },
        8: { thac0: 14, saves: elfSaves[2] },
        9: { thac0: 14, saves: elfSaves[2] },
        10: { thac0: 12, saves: elfSaves[3] },
        11: { thac0: 12, saves: elfSaves[3] },
        12: { thac0: 12, saves: elfSaves[3] },
        13: { thac0: 12, saves: elfSaves[3] },
        14: { thac0: 12, saves: elfSaves[3] }
      }
    },
    "Gnomo": {
      hd: "1d4",
      prime: "DES/INT",
      movement: 90,
      abilities: ["Bonus Difensivo contro creature grandi", "Magia Illusoria", "Percepisce nascondigli/passaggi", "Infravisione 27m", "Resistenza magica", "Armatura cuoio, scudi (piccoli)", "Armi taglia normale/piccola"],
      tables: {
        1: { thac0: 19, saves: gnomeSaves[0] },
        2: { thac0: 19, saves: gnomeSaves[0] },
        3: { thac0: 19, saves: gnomeSaves[0] },
        4: { thac0: 19, saves: gnomeSaves[0] },
        5: { thac0: 19, saves: gnomeSaves[0] },
        6: { thac0: 17, saves: gnomeSaves[1] },
        7: { thac0: 17, saves: gnomeSaves[1] },
        8: { thac0: 17, saves: gnomeSaves[1] }
      }
    },
    "Guerriero": {
      hd: "1d8",
      prime: "FOR",
      movement: 120,
      abilities: ["Competenza marziale completa", "Qualsiasi arma e armatura"],
      tables: {
        1: { thac0: 19, saves: fighterSaves[0] },
        2: { thac0: 19, saves: fighterSaves[0] },
        3: { thac0: 19, saves: fighterSaves[0] },
        4: { thac0: 17, saves: fighterSaves[1] },
        5: { thac0: 17, saves: fighterSaves[1] },
        6: { thac0: 17, saves: fighterSaves[1] },
        7: { thac0: 14, saves: fighterSaves[2] },
        8: { thac0: 14, saves: fighterSaves[2] },
        9: { thac0: 14, saves: fighterSaves[2] },
        10: { thac0: 12, saves: fighterSaves[3] },
        11: { thac0: 12, saves: fighterSaves[3] },
        12: { thac0: 12, saves: fighterSaves[3] },
        13: { thac0: 10, saves: fighterSaves[4] },
        14: { thac0: 10, saves: fighterSaves[4] }
      }
    },
    "Halfling": {
      hd: "1d6",
      prime: "DES/FOR",
      movement: 90,
      abilities: ["Attacchi a distanza +1", "Nascondersi in natura 90%", "Iniziativa +1", "Bonus CA +2 vs taglia grande"],
      tables: {
        1: { thac0: 19, saves: dwarfSaves[0] },
        2: { thac0: 19, saves: dwarfSaves[0] },
        3: { thac0: 19, saves: dwarfSaves[0] },
        4: { thac0: 17, saves: dwarfSaves[1] },
        5: { thac0: 17, saves: dwarfSaves[1] },
        6: { thac0: 17, saves: dwarfSaves[1] },
        7: { thac0: 14, saves: dwarfSaves[2] },
        8: { thac0: 14, saves: dwarfSaves[2] }
      }
    },
    "Illusionista": {
      hd: "1d4",
      prime: "INT",
      movement: 120,
      abilities: ["Magia Arcana", "Illusioni", "Nessuna Armatura", "Solo pugnale"],
      tables: {
        1: { thac0: 19, saves: magicUserSaves[0] },
        2: { thac0: 19, saves: magicUserSaves[0] },
        3: { thac0: 19, saves: magicUserSaves[0] },
        4: { thac0: 19, saves: magicUserSaves[0] },
        5: { thac0: 19, saves: magicUserSaves[0] },
        6: { thac0: 17, saves: magicUserSaves[1] },
        7: { thac0: 17, saves: magicUserSaves[1] },
        8: { thac0: 17, saves: magicUserSaves[1] },
        9: { thac0: 17, saves: magicUserSaves[1] },
        10: { thac0: 17, saves: magicUserSaves[1] },
        11: { thac0: 14, saves: magicUserSaves[2] },
        12: { thac0: 14, saves: magicUserSaves[2] },
        13: { thac0: 14, saves: magicUserSaves[2] },
        14: { thac0: 14, saves: magicUserSaves[2] }
      }
    },
    "Ladro": {
      hd: "1d4",
      prime: "DES",
      movement: 120,
      abilities: ["Abilit\xE0 ladresche", "Attacco alle spalle (+4 colpire, x2 danni)", "Max armatura cuoio, no scudi"],
      tables: {
        1: { thac0: 19, saves: thiefSaves[0] },
        2: { thac0: 19, saves: thiefSaves[0] },
        3: { thac0: 19, saves: thiefSaves[0] },
        4: { thac0: 19, saves: thiefSaves[0] },
        5: { thac0: 17, saves: thiefSaves[1] },
        6: { thac0: 17, saves: thiefSaves[1] },
        7: { thac0: 17, saves: thiefSaves[1] },
        8: { thac0: 17, saves: thiefSaves[1] },
        9: { thac0: 14, saves: thiefSaves[2] },
        10: { thac0: 14, saves: thiefSaves[2] },
        11: { thac0: 14, saves: thiefSaves[2] },
        12: { thac0: 14, saves: thiefSaves[2] },
        13: { thac0: 12, saves: thiefSaves[3] },
        14: { thac0: 12, saves: thiefSaves[3] }
      }
    },
    "Mago": {
      hd: "1d4",
      prime: "INT",
      movement: 120,
      abilities: ["Solo pugnali", "Nessuna armatura o scudo"],
      tables: {
        1: { thac0: 19, saves: magicUserSaves[0] },
        2: { thac0: 19, saves: magicUserSaves[0] },
        3: { thac0: 19, saves: magicUserSaves[0] },
        4: { thac0: 19, saves: magicUserSaves[0] },
        5: { thac0: 19, saves: magicUserSaves[0] },
        6: { thac0: 17, saves: magicUserSaves[1] },
        7: { thac0: 17, saves: magicUserSaves[1] },
        8: { thac0: 17, saves: magicUserSaves[1] },
        9: { thac0: 17, saves: magicUserSaves[1] },
        10: { thac0: 17, saves: magicUserSaves[1] },
        11: { thac0: 14, saves: magicUserSaves[2] },
        12: { thac0: 14, saves: magicUserSaves[2] },
        13: { thac0: 14, saves: magicUserSaves[2] },
        14: { thac0: 14, saves: magicUserSaves[2] }
      }
    },
    "Mezzelfo": {
      hd: "1d6",
      prime: "INT/FOR",
      movement: 120,
      abilities: ["Percepisce porte segrete", "Infravisione 18m", "Magia Arcana (dal liv. 2)", "Tutte le armature e armi"],
      tables: {
        1: { thac0: 19, saves: elfSaves[0] },
        2: { thac0: 19, saves: elfSaves[0] },
        3: { thac0: 19, saves: elfSaves[0] },
        4: { thac0: 17, saves: elfSaves[1] },
        5: { thac0: 17, saves: elfSaves[1] },
        6: { thac0: 17, saves: elfSaves[1] },
        7: { thac0: 14, saves: elfSaves[2] },
        8: { thac0: 14, saves: elfSaves[2] },
        9: { thac0: 14, saves: elfSaves[2] },
        10: { thac0: 12, saves: elfSaves[3] },
        11: { thac0: 12, saves: elfSaves[3] },
        12: { thac0: 12, saves: elfSaves[3] },
        13: { thac0: 12, saves: elfSaves[3] },
        14: { thac0: 12, saves: elfSaves[3] }
      }
    },
    "Mezzorco": {
      hd: "1d6",
      prime: "DES/FOR",
      movement: 120,
      abilities: ["Abilit\xE0 ladresche (inferiori a ladro)", "Colpire alle Spalle (+4 colpire, x2 danni)", "Infravisione 18m", "Tutte le armature, no corazze piastre", "Tutte armi"],
      tables: {
        1: { thac0: 19, saves: thiefSaves[0] },
        2: { thac0: 19, saves: thiefSaves[0] },
        3: { thac0: 19, saves: thiefSaves[0] },
        4: { thac0: 19, saves: thiefSaves[0] },
        5: { thac0: 17, saves: thiefSaves[1] },
        6: { thac0: 17, saves: thiefSaves[1] },
        7: { thac0: 17, saves: thiefSaves[1] },
        8: { thac0: 17, saves: thiefSaves[1] }
      }
    },
    "Nano": {
      hd: "1d8",
      prime: "FOR",
      movement: 90,
      abilities: ["Infravisione 18m", "Individuare lavori in pietra 2-in-6", "Armi grandi vietate"],
      tables: {
        1: { thac0: 19, saves: dwarfSaves[0] },
        2: { thac0: 19, saves: dwarfSaves[0] },
        3: { thac0: 19, saves: dwarfSaves[0] },
        4: { thac0: 17, saves: dwarfSaves[1] },
        5: { thac0: 17, saves: dwarfSaves[1] },
        6: { thac0: 17, saves: dwarfSaves[1] },
        7: { thac0: 14, saves: dwarfSaves[2] },
        8: { thac0: 14, saves: dwarfSaves[2] },
        9: { thac0: 14, saves: dwarfSaves[2] },
        10: { thac0: 12, saves: dwarfSaves[3] },
        11: { thac0: 12, saves: dwarfSaves[3] },
        12: { thac0: 12, saves: dwarfSaves[3] },
        13: { thac0: 12, saves: dwarfSaves[3] },
        14: { thac0: 12, saves: dwarfSaves[3] }
      }
    },
    "Necromante": {
      hd: "1d4",
      prime: "INT",
      movement: 120,
      description: "I necromanti sono avventurieri che studiano le arti arcane della morte e la non-morte. Attraverso questo studio, hanno imparato a lanciare incantesimi. In quanto alleati con le macabre forze della morte e della non-morte, i necromanti sono solitamente neutrali o caotici. A discrezione dell\u2019arbitro, \xE8 possibile che esistano necromanti legali, magari come guardiani dei morti.",
      abilities: ["Magia Necromantica", "Nessuna Armatura", "Solo pugnale"],
      tables: {
        1: { thac0: 19, saves: magicUserSaves[0] },
        2: { thac0: 19, saves: magicUserSaves[0] },
        3: { thac0: 19, saves: magicUserSaves[0] },
        4: { thac0: 19, saves: magicUserSaves[0] },
        5: { thac0: 19, saves: magicUserSaves[0] },
        6: { thac0: 17, saves: magicUserSaves[1] },
        7: { thac0: 17, saves: magicUserSaves[1] },
        8: { thac0: 17, saves: magicUserSaves[1] },
        9: { thac0: 17, saves: magicUserSaves[1] },
        10: { thac0: 17, saves: magicUserSaves[1] },
        11: { thac0: 14, saves: magicUserSaves[2] },
        12: { thac0: 14, saves: magicUserSaves[2] },
        13: { thac0: 14, saves: magicUserSaves[2] },
        14: { thac0: 14, saves: magicUserSaves[2] }
      }
    },
    "Paladino": {
      hd: "1d8",
      prime: "FOR/SAG",
      movement: 120,
      abilities: ["Voto di Umilt\xE0", "Scacciare non-morti (dal liv. 3)", "Imposizione delle mani", "Destriero (dal liv. 4)", "Immunit\xE0 malattie", "Tutte le armature e armi"],
      tables: {
        1: { thac0: 19, saves: fighterSaves[0] },
        2: { thac0: 19, saves: fighterSaves[0] },
        3: { thac0: 19, saves: fighterSaves[0] },
        4: { thac0: 17, saves: fighterSaves[1] },
        5: { thac0: 17, saves: fighterSaves[1] },
        6: { thac0: 17, saves: fighterSaves[1] },
        7: { thac0: 14, saves: fighterSaves[2] },
        8: { thac0: 14, saves: fighterSaves[2] },
        9: { thac0: 14, saves: fighterSaves[2] },
        10: { thac0: 12, saves: fighterSaves[3] },
        11: { thac0: 12, saves: fighterSaves[3] },
        12: { thac0: 12, saves: fighterSaves[3] },
        13: { thac0: 10, saves: fighterSaves[4] },
        14: { thac0: 10, saves: fighterSaves[4] }
      }
    },
    "Ranger": {
      hd: "1d8",
      prime: "FOR",
      movement: 120,
      abilities: ["Ammazzagiganti", "Cacciare e foraggiare", "Furtivit\xE0 in natura (50%)", "Difficile da sorprendere", "Seguire tracce", "Magia Divina (dal liv. 8)", "Cuoio o maglia e scudi", "Tutte armi"],
      tables: {
        1: { thac0: 19, saves: fighterSaves[0] },
        2: { thac0: 19, saves: fighterSaves[0] },
        3: { thac0: 19, saves: fighterSaves[0] },
        4: { thac0: 17, saves: fighterSaves[1] },
        5: { thac0: 17, saves: fighterSaves[1] },
        6: { thac0: 17, saves: fighterSaves[1] },
        7: { thac0: 14, saves: fighterSaves[2] },
        8: { thac0: 14, saves: fighterSaves[2] },
        9: { thac0: 14, saves: fighterSaves[2] },
        10: { thac0: 12, saves: fighterSaves[3] },
        11: { thac0: 12, saves: fighterSaves[3] },
        12: { thac0: 12, saves: fighterSaves[3] },
        13: { thac0: 10, saves: fighterSaves[4] },
        14: { thac0: 10, saves: fighterSaves[4] }
      }
    },
    "Svirfneblin": {
      hd: "1d6",
      prime: "FOR",
      movement: 90,
      abilities: ["Confondersi con la roccia", "Mormorii della pietra", "Infravisione 27m", "Resistenza alle illusioni", "Bonus Difensivo contro grandi", "Sensibilit\xE0 alla luce"],
      tables: {
        1: { thac0: 19, saves: svirfneblinSaves[0] },
        2: { thac0: 19, saves: svirfneblinSaves[0] },
        3: { thac0: 19, saves: svirfneblinSaves[0] },
        4: { thac0: 17, saves: svirfneblinSaves[1] },
        5: { thac0: 17, saves: svirfneblinSaves[1] },
        6: { thac0: 17, saves: svirfneblinSaves[1] },
        7: { thac0: 14, saves: svirfneblinSaves[2] },
        8: { thac0: 14, saves: svirfneblinSaves[2] }
      }
    }
  };
  var CLERIC_SPELLS = {
    1: ["Cura Ferite Leggere", "Individuazione del Magico", "Individuazione del Male", "Luce", "Protezione dal Male", "Purificare Cibo e Acqua", "Resistenza al Freddo", "Rimuovi Paura"],
    2: ["Apprendi Allineamento", "Benedizione", "Blocca Persone", "Incantare i Serpenti", "Parlare con gli Animali", "Resistenza al Fuoco", "Scopri Trappole", "Silenzio nel Raggio di 4,5 Metri"],
    3: ["Colpire", "Crescita Animale", "Cura Malattia", "Localizzare Oggetto", "Luce Perenne", "Rimuovi Maledizione"],
    4: ["Creazione dell\u2019Acqua", "Cura Ferite Gravi", "Neutralizza Veleno", "Parlare con le Piante", "Protezione dal Male nel Raggio di 3 Metri", "Trasforma Bastoni in Serpenti"],
    5: ["Comunicare con gli Dei", "Creazione del Cibo", "Dissolvi il Male", "Impresa", "Piaga degli Insetti", "Resurrezione"]
  };
  var CLERIC_SPELL_PROGRESSION = {
    1: [0, 0, 0, 0, 0],
    2: [1, 0, 0, 0, 0],
    3: [2, 0, 0, 0, 0],
    4: [2, 1, 0, 0, 0],
    5: [2, 2, 0, 0, 0],
    6: [2, 2, 1, 1, 0],
    7: [2, 2, 2, 1, 1],
    8: [3, 3, 2, 2, 1],
    9: [3, 3, 3, 2, 2],
    10: [4, 4, 3, 3, 2],
    11: [4, 4, 4, 3, 3],
    12: [5, 5, 4, 4, 3],
    13: [5, 5, 5, 4, 4],
    14: [6, 5, 5, 5, 4]
  };
  var DRUID_SPELLS = {
    1: ["Amicizia con gli Animali", "Fuoco Fatato", "Individuazione del Pericolo", "Intralciare", "Invisibilit\xE0 agli Animali", "Localizzare Piante o Animali", "Parlare con gli Animali", "Predire il Tempo"],
    2: ["Creazione dell\u2019Acqua", "Cura Ferite Leggere", "Foschia Oscurante", "Pelle Coriacea", "Produrre Fiamma", "Rallenta Veleno", "Riscaldare il Metallo", "Torci Legno"],
    3: ["Blocca Animali", "Crescita della Natura", "Evoca Fulmini", "Forma Arborea", "Protezione dal Veleno", "Respirare Sott\u2019Acqua"],
    4: ["Controllo della Temperatura", "Cura Ferite Gravi", "Dissolvi Magie", "Parlare con le Piante", "Protezione da Fuoco e Fulmine", "Richiama Animali"],
    5: ["Comunicare con la Natura", "Controllo del Tempo Atmosferico", "Muro di Spine", "Passa-Piante", "Protezione da Piante e Animali", "Trasforma Roccia in Fango"]
  };
  var DRUID_SPELL_PROGRESSION = {
    1: [1, 0, 0, 0, 0],
    2: [2, 0, 0, 0, 0],
    3: [2, 1, 0, 0, 0],
    4: [2, 2, 0, 0, 0],
    5: [2, 2, 1, 0, 0],
    6: [2, 2, 2, 0, 0],
    7: [3, 2, 2, 1, 0],
    8: [3, 3, 2, 2, 0],
    9: [3, 3, 3, 2, 1],
    10: [4, 4, 3, 2, 2],
    11: [4, 4, 3, 3, 2],
    12: [4, 4, 4, 3, 3],
    13: [5, 5, 4, 4, 3],
    14: [6, 5, 5, 5, 4]
  };
  var MAGIC_USER_SPELLS = {
    1: ["Blocca Porta", "Charme", "Dardo Incantato", "Disco Levitante", "Individuazione del Magico", "Lettura dei Linguaggi", "Lettura del Magico", "Luce", "Protezione dal Male", "Scudo", "Sonno", "Ventriloquio"],
    2: ["Chiavistello del Mago", "Creazione Spettrale", "ESP", "Immagini Speculari", "Individuazione dell\u2019Invisibile", "Individuazione del Male", "Invisibilit\xE0", "Levitazione", "Localizzare Oggetto", "Luce Perenne", "Ragnatela", "Scassinare"],
    3: ["Blocca Persone", "Chiaroveggenza", "Dissolvi Magie", "Fulmine Magico", "Infravisione", "Invisibilit\xE0 nel Raggio di 3 Metri", "Palla di Fuoco", "Protezione dal Male nel Raggio di 3 Metri", "Protezione dai Proiettili Normali", "Respirare Sott\u2019Acqua", "Velocit\xE0", "Volare"],
    4: ["Autometamorfosi", "Charme sui Mostri", "Confusione", "Crescita Vegetale", "Metamorfosi", "Metamorfosi di Massa", "Muro di Fuoco", "Muro di Ghiaccio", "Occhio del Mago", "Porta Dimensionale", "Rimuovi Maledizione", "Terreno Illusorio"],
    5: ["Animare i Morti", "Blocca Mostri", "Contattare Piani Superiori", "Demenza", "Evoca Elementale", "Giara Magica", "Muro di Pietra", "Nube Mortale", "Passa-Pareti", "Telecinesi", "Teletrasporto", "Trasforma Roccia in Fango"],
    6: ["Abbassamento delle Acque", "Barriera Anti-Magia", "Controllo del Tempo Atmosferico", "Disintegrazione", "Immagine Proiettata", "Imposizione", "Incantesimo della Morte", "Reincarnazione", "Segugio Invisibile", "Separazione delle Acque", "Spostamento del Terreno", "Trasforma Pietra in Carne"]
  };
  var MAGIC_USER_SPELL_PROGRESSION = {
    1: [1, 0, 0, 0, 0, 0],
    2: [2, 0, 0, 0, 0, 0],
    3: [2, 1, 0, 0, 0, 0],
    4: [2, 2, 0, 0, 0, 0],
    5: [2, 2, 1, 0, 0, 0],
    6: [2, 2, 2, 0, 0, 0],
    7: [3, 2, 2, 1, 0, 0],
    8: [3, 3, 2, 2, 0, 0],
    9: [3, 3, 3, 2, 1, 0],
    10: [3, 3, 3, 3, 2, 1],
    11: [4, 3, 3, 3, 2, 2],
    12: [4, 4, 3, 3, 3, 2],
    13: [4, 4, 4, 3, 3, 3],
    14: [4, 4, 4, 4, 3, 3]
  };
  var ELF_SPELL_PROGRESSION = {
    1: [1, 0, 0, 0, 0],
    2: [2, 0, 0, 0, 0],
    3: [2, 1, 0, 0, 0],
    4: [2, 2, 0, 0, 0],
    5: [2, 2, 1, 0, 0],
    6: [2, 2, 2, 0, 0],
    7: [3, 2, 2, 1, 0],
    8: [3, 3, 2, 2, 0],
    9: [3, 3, 3, 2, 1],
    10: [3, 3, 3, 3, 2]
  };
  var ILLUSIONIST_SPELLS = {
    1: ["Artificio", "Creazione Spettrale", "Globo Cromatico", "Illusione Uditiva", "Individuazione delle Illusioni", "Ipnotismo", "Lettura del Magico", "Luce", "Luci Danzanti", "Muro di Nebbia", "Spaventare", "Spruzzo Colorato"],
    2: ["Ammaliare", "Bocca Magica", "Cecit\xE0 / Sordit\xE0", "Creazione Spettrale Migliorata", "Falsa Aura", "Immagini Speculari", "Individuazione del Magico", "Invisibilit\xE0", "Mormorii nel Vento", "Quasimorfosi", "Sfocatura", "Trama Ipnotica"],
    3: ["Anti-Individuazione", "Corda Truccata", "Creazione Fantasma", "Dissolvi Illusioni", "Forma Spettrale", "Invisibilit\xE0 nel Raggio di 3 Metri", "Luce Nera", "Paralisi", "Paura", "Stallone Fantasma", "Suggestione", "Terreno Illusorio"],
    4: ["Assassino Spettrale", "Confusione", "Creazione Minore", "Dissolvi Magie", "Emozione", "Energia Illusoria", "Invisibilit\xE0 Migliorata", "Metamorfosi di Massa", "Mostri d\u2019Ombra", "Nebbia Solida", "Trama Iridescente", "Velo dell\u2019Abbandono"],
    5: ["Apparenza", "Caos", "Creazione Maggiore", "Flusso Temporale", "Illusione", "Immagine Proiettata", "Labirinto di Specchi", "Mostri di Semi-Ombra", "Specchio", "Teatro d\u2019Ombre", "Trasformazione d\u2019Ombra", "Visitazione"],
    6: ["Attraverso lo Specchio", "Diversivo", "Illusione Innescata", "Illusione Permanente", "Imitazione", "Nebbia Acida", "Ombre Animate", "Sogno Manifesto", "Suggestione di Massa", "Viaggio Onirico", "Visione", "Visione del Vero"]
  };
  var ILLUSIONIST_SPELL_PROGRESSION = {
    1: [1, 0, 0, 0, 0, 0],
    2: [2, 0, 0, 0, 0, 0],
    3: [2, 1, 0, 0, 0, 0],
    4: [2, 2, 0, 0, 0, 0],
    5: [2, 2, 1, 0, 0, 0],
    6: [2, 2, 2, 0, 0, 0],
    7: [3, 2, 2, 1, 0, 0],
    8: [3, 3, 2, 2, 0, 0],
    9: [3, 3, 3, 2, 1, 0],
    10: [4, 3, 3, 2, 2, 0],
    11: [4, 4, 3, 2, 2, 1],
    12: [4, 4, 3, 3, 2, 2],
    13: [4, 4, 4, 3, 2, 2],
    14: [4, 4, 4, 3, 3, 2]
  };
  var NECROMANCER_SPELLS = {
    1: ["Comandare i Morti", "Decomposizione", "Eludere i Non-Morti", "Individuazione dei Non-Morti", "Lettura del Magico", "Luce della Morte", "Marionetta", "Parlata del Teschio", "Protezione dal Male", "Servitore Non-Morto", "Tocco Gelido", "Volto Cadaverico"],
    2: ["Armatura d'Ossa", "Fingere la Morte", "Individuazione del Magico", "Mano Spettrale", "Parlare con i Morti", "Ricordo di Morte", "Sigilla Tomba", "Silenzio nel Raggio di 4,5 m", "Stallone Scheletrico", "Strangolamento", "Tocco Paralizzante", "Vista del Teschio"],
    3: ["Animare i Morti Temporaneamente", "Bastone d'Ossa", "Blocca Persone", "Difesa dalla Morte", "Paura", "Protezione dal Male nel Raggio di 3 m", "Respiro della Tomba", "Salvare in Punto di Morte", "Tanfo di Carogna", "Tocco Vampirico", "Trappola Craniale", "Vista Sepolcrale"],
    4: ["Comandare i Non-Morti", "Dissolvi Magie", "Interrare", "Maledizione", "Maschera Cadaverica", "Muro d'Ossa", "Percezione Cadaverica", "Riassemblare", "Stallone Scheletrico Alato", "Tocco del Marciume", "Trasferimento delle Ferite", "Trasformazione in Sciame"],
    5: ["Animare i Morti", "Blocca Non-Morti", "Comunicare con gli Spiriti", "Evoca Non-Morti", "Forma Gassosa", "Giara Magica", "Muro d'Ombra", "Nube Mortale", "Spirito Guardiano", "Torciossa", "Velo di Vita", "Visione Spirituale"],
    6: ["Esercito Scheletrico", "Immortalit\xE0", "Impresa Eterna", "Incantesimo della Morte", "Ossa d'Acciaio", "Protezione dai Non-Morti", "Resurrezione Sacrificale", "Rigenerazione dei Non-Morti", "Risucchio di Energia", "Scudo Spiritico", "Sguardo Necrotico", "Velo di Sventura"]
  };
  var NECROMANCER_SPELL_PROGRESSION = {
    1: [1, 0, 0, 0, 0, 0],
    2: [2, 0, 0, 0, 0, 0],
    3: [2, 1, 0, 0, 0, 0],
    4: [2, 2, 0, 0, 0, 0],
    5: [2, 2, 1, 0, 0, 0],
    6: [2, 2, 2, 0, 0, 0],
    7: [3, 2, 2, 1, 0, 0],
    8: [3, 3, 2, 2, 0, 0],
    9: [3, 3, 3, 2, 1, 0],
    10: [3, 3, 3, 3, 2, 0],
    11: [4, 3, 3, 3, 2, 1],
    12: [4, 4, 3, 3, 3, 2],
    13: [4, 4, 4, 3, 3, 3],
    14: [4, 4, 4, 4, 3, 3]
  };

  // src/lib/ose-logic.ts
  var STAT_NAMES = ["FOR", "INT", "SAG", "DES", "COS", "CAR"];
  var mulberry32 = (seed) => {
    let t = seed >>> 0;
    return function() {
      t = t + 1831565813 | 0;
      let r = Math.imul(t ^ t >>> 15, 1 | t);
      r = r + Math.imul(r ^ r >>> 7, 61 | r) | 0;
      return ((r ^ r >>> 14) >>> 0) / 4294967296;
    };
  };
  var countPossibleStrings = (cfg) => {
    const memo = /* @__PURE__ */ new Map();
    function dp(pos, remaining) {
      const key = `${pos}|${remaining}`;
      if (memo.has(key))
        return memo.get(key);
      if (pos === cfg.statsCount)
        return remaining === 0 ? 1 : 0;
      const left = cfg.statsCount - pos - 1;
      const low = Math.max(cfg.minValue, remaining - left * cfg.maxValue);
      const high = Math.min(cfg.maxValue, remaining - left * cfg.minValue);
      if (low > high)
        return 0;
      let total = 0;
      for (let v = low; v <= high; v++)
        total += dp(pos + 1, remaining - v);
      memo.set(key, total);
      return total;
    }
    return dp(0, cfg.totalPoints);
  };
  function pickWeightedValue(low, high, center, sigma, rng) {
    if (low === high)
      return low;
    const weights = [];
    let total = 0;
    for (let v = low; v <= high; v++) {
      const dist = v - center;
      const w = Math.exp(-(dist * dist) / (2 * sigma * sigma));
      weights.push(w);
      total += w;
    }
    let roll = rng() * total;
    for (let i = 0; i < weights.length; i++) {
      roll -= weights[i];
      if (roll <= 0)
        return low + i;
    }
    return high;
  }
  var roll3d6 = (rng) => {
    return Math.floor(rng() * 6) + 1 + Math.floor(rng() * 6) + 1 + Math.floor(rng() * 6) + 1;
  };
  function randomString(cfg, rng) {
    var _a, _b;
    if (cfg.mode === "random_3d6") {
      const out2 = [];
      for (let i = 0; i < cfg.statsCount; i++) {
        out2.push(roll3d6(rng));
      }
      return out2;
    }
    const out = [];
    let remaining = cfg.totalPoints;
    const biasMap = { low: -0.9, normal: 0, high: 0.9 };
    const varianceMap = { low: 0.55, medium: 1.15, high: 2.2 };
    const bias = (_a = biasMap[cfg.powerProfile]) != null ? _a : 0;
    const variance = (_b = varianceMap[cfg.varianceProfile]) != null ? _b : 1.15;
    for (let i = 0; i < cfg.statsCount; i++) {
      const left = cfg.statsCount - i - 1;
      const low = Math.max(cfg.minValue, remaining - left * cfg.maxValue);
      const high = Math.min(cfg.maxValue, remaining - left * cfg.minValue);
      const baseCenter = remaining / (left + 1);
      const localRange = Math.max(1, high - low);
      const shiftedCenter = Math.min(high, Math.max(low, baseCenter + bias * (localRange / 3)));
      const sigma = Math.max(0.55, localRange / (variance + 0.35));
      const picked = pickWeightedValue(low, high, shiftedCenter, sigma, rng);
      out.push(picked);
      remaining -= picked;
    }
    return out;
  }
  function enumerateAll(cfg) {
    if (cfg.mode === "random_3d6" || cfg.mode === "unique_values") {
      return [];
    }
    const all = [];
    function backtrack(pos, remaining, current) {
      if (pos === cfg.statsCount) {
        if (remaining === 0)
          all.push([...current]);
        return;
      }
      const left = cfg.statsCount - pos - 1;
      const low = Math.max(cfg.minValue, remaining - left * cfg.maxValue);
      const high = Math.min(cfg.maxValue, remaining - left * cfg.minValue);
      for (let v = low; v <= high; v++) {
        current.push(v);
        backtrack(pos + 1, remaining - v, current);
        current.pop();
      }
    }
    backtrack(0, cfg.totalPoints, []);
    return all;
  }
  function shuffleInPlace(arr, rng) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  var generateUnique = (cfg) => {
    let customVals = null;
    if (cfg.mode === "unique_values" && cfg.customString && typeof cfg.customString === "string" && cfg.customString.trim() !== "") {
      const parsed = cfg.customString.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n));
      if (parsed.length === cfg.statsCount) {
        customVals = parsed;
      }
    }
    const totalPossible = cfg.mode === "sum" ? countPossibleStrings(cfg) : 9999999;
    const target = Math.min(cfg.count, totalPossible);
    const rng = cfg.seed !== null ? mulberry32(cfg.seed) : Math.random;
    const found = /* @__PURE__ */ new Map();
    const maxAttempts = Math.max(target * 500, 1e4);
    let attempts = 0;
    while (found.size < target && attempts < maxAttempts) {
      let s;
      if (customVals) {
        s = [...customVals];
        shuffleInPlace(s, rng);
      } else {
        s = randomString(cfg, rng);
      }
      if (cfg.mode === "unique_values" && !customVals) {
        const uniqueVals = new Set(s);
        if (uniqueVals.size !== cfg.statsCount) {
          attempts++;
          continue;
        }
      }
      found.set(s.join("|"), s);
      attempts++;
    }
    let results = Array.from(found.values());
    if (results.length < target && cfg.mode === "sum") {
      results = enumerateAll(cfg);
      shuffleInPlace(results, rng);
      results = results.slice(0, target);
    } else {
      shuffleInPlace(results, rng);
    }
    return { results, totalPossible };
  };
  var getXpBonus = (stats, primeReq) => {
    const primeParts = primeReq.split("/");
    let val = 10;
    if (primeParts.length === 1) {
      const idx = STAT_NAMES.indexOf(primeParts[0]);
      val = stats[idx] || 10;
    } else {
      const vals = primeParts.map((p) => stats[STAT_NAMES.indexOf(p)] || 10);
      val = Math.min(...vals);
    }
    if (val >= 16)
      return "+10%";
    if (val >= 13)
      return "+5%";
    if (val <= 5)
      return "-10%";
    if (val <= 8)
      return "-5%";
    return "\u2014";
  };
  var getOpenDoors = (str) => {
    if (str <= 8)
      return "1-in-6";
    if (str <= 12)
      return "2-in-6";
    if (str <= 15)
      return "3-in-6";
    if (str <= 17)
      return "4-in-6";
    return "5-in-6";
  };
  var getMovement = (base, totalWeight) => {
    if (totalWeight <= 400)
      return `${base}' (${base / 3}')`;
    if (totalWeight <= 600)
      return `${Math.min(base, 90)}' (${Math.min(base, 90) / 3}')`;
    if (totalWeight <= 800)
      return `${Math.min(base, 60)}' (${Math.min(base, 60) / 3}')`;
    if (totalWeight <= 1600)
      return `${Math.min(base, 30)}' (${Math.min(base, 30) / 3}')`;
    return "0' (0')";
  };
  var generateRandomEquipment = (className, level) => {
    let armor = "Nessuna";
    let shield = false;
    let weapon1 = "Pugnale";
    let weapon2 = "Senz'armi";
    const gear = ["Zaino", "Razioni (7 giorni)", "Otre d'acqua", "Acciarino e pietra focaia"];
    if (className === "Mago" || className === "Illusionista") {
      armor = "Nessuna";
    } else if (className === "Ladro") {
      armor = "Armatura di cuoio";
    } else {
      const roll = Math.random();
      if (roll > 0.7)
        armor = "Corazza a piastre";
      else if (roll > 0.3)
        armor = "Cotta di maglia";
      else
        armor = "Armatura di cuoio";
    }
    if (className !== "Mago" && className !== "Ladro" && className !== "Illusionista" && Math.random() > 0.5) {
      shield = true;
    }
    if (className === "Mago" || className === "Illusionista") {
      weapon1 = "Pugnale";
    } else if (className === "Chierico") {
      weapon1 = "Mazza";
    } else {
      const weaponOptions = ["Spada lunga", "Spada corta", "Ascia da battaglia", "Lancia", "Arco corto"];
      weapon1 = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
      if (Math.random() > 0.5)
        weapon2 = "Pugnale";
    }
    const extraGearOptions = ["Torce (6)", "Corda (15m)", "Piede di porco", "Specchio di metallo", "Lanterna", "Olio (3 ampolle)", "Aglio", "Simbolo sacro"];
    for (let i = 0; i < 3; i++) {
      const item = extraGearOptions[Math.floor(Math.random() * extraGearOptions.length)];
      if (!gear.includes(item))
        gear.push(item);
    }
    if (level >= 3) {
      gear.push("Oggetto magico minore");
    }
    return {
      armor,
      shield,
      weapon1,
      weapon2,
      equipment: gear.join(", ")
    };
  };
  var getAttackMatrix = (thac0) => {
    const matrix = [];
    for (let ac = 16; ac >= -3; ac--) {
      let roll = thac0 - ac;
      matrix.push({ ac, roll });
    }
    return matrix;
  };
  var getSpellProgression = (className, level) => {
    let progression = [0, 0, 0, 0, 0, 0];
    if (className === "Chierico") {
      progression = CLERIC_SPELL_PROGRESSION[level] || [0, 0, 0, 0, 0];
    } else if (className === "Druido") {
      progression = DRUID_SPELL_PROGRESSION[level] || [0, 0, 0, 0, 0];
    } else if (className === "Paladino") {
      if (level === 9)
        progression = [1, 0, 0, 0, 0];
      else if (level === 10)
        progression = [2, 0, 0, 0, 0];
      else if (level === 11)
        progression = [2, 1, 0, 0, 0];
      else if (level === 12)
        progression = [2, 2, 0, 0, 0];
      else if (level === 13)
        progression = [2, 2, 1, 0, 0];
      else if (level >= 14)
        progression = [3, 2, 1, 0, 0];
    } else if (className === "Mago") {
      progression = MAGIC_USER_SPELL_PROGRESSION[level] || [0, 0, 0, 0, 0, 0];
    } else if (className === "Elfo") {
      progression = ELF_SPELL_PROGRESSION[level] || [0, 0, 0, 0, 0];
    } else if (className === "Illusionista") {
      progression = ILLUSIONIST_SPELL_PROGRESSION[level] || [0, 0, 0, 0, 0, 0];
    } else if (className === "Necromante") {
      progression = NECROMANCER_SPELL_PROGRESSION[level] || [0, 0, 0, 0, 0, 0];
    }
    return progression;
  };
  var generateRandomSpells = (className, level, allSpells) => {
    if (["Chierico", "Paladino", "Druido", "Mago", "Elfo", "Illusionista", "Necromante"].includes(className)) {
      const spellClassMap = {
        "Paladino": "Chierico",
        "Elfo": "Mago"
      };
      const lookupClass = spellClassMap[className] || className;
      let spellList = {};
      if (allSpells) {
        allSpells.forEach((s) => {
          if (s.className === lookupClass) {
            if (!spellList[s.level])
              spellList[s.level] = [];
            spellList[s.level].push(s.name);
          }
        });
      } else {
        if (className === "Chierico" || className === "Paladino") {
          spellList = CLERIC_SPELLS;
        } else if (className === "Druido") {
          spellList = DRUID_SPELLS;
        } else if (className === "Mago" || className === "Elfo") {
          spellList = MAGIC_USER_SPELLS;
        } else if (className === "Illusionista") {
          spellList = ILLUSIONIST_SPELLS;
        } else if (className === "Necromante") {
          spellList = NECROMANCER_SPELLS;
        }
      }
      const progression = getSpellProgression(className, level);
      const spells = [];
      progression.forEach((count, spellLevelIndex) => {
        if (count > 0) {
          const availableSpells = spellList[spellLevelIndex + 1] || [];
          if (availableSpells.length > 0) {
            for (let i = 0; i < count; i++) {
              const randomSpell = availableSpells[Math.floor(Math.random() * availableSpells.length)];
              spells.push(`[Liv ${spellLevelIndex + 1}] ${randomSpell}`);
            }
          }
        }
      });
      return spells;
    }
    return [];
  };

  // src/lib/illusionist-spells.ts
  var ILLUSIONIST_SPELL_DETAILS = [
    {
      name: "Artificio",
      level: 1,
      className: "Illusionista",
      duration: "2d6 round +2 per livello",
      range: "L\u2019utilizzatore",
      description: "L\u2019utilizzatore si ammanta di un\u2019illusione, assumendo l\u2019aspetto di un altro umanoide. Quando si lancia l\u2019incantesimo si pu\xF2 scegliere tra due varianti:\n1. Forma immaginaria: l\u2019utilizzatore assume sembianze immaginarie.\n2. Duplicato di un individuo: l\u2019utilizzatore tocca un individuo vivente e ne copia le sembianze (tiro per colpire se non consenziente).\nAltezza: max 30 cm pi\xF9 alto o basso.\nPeso ed Equipaggiamento: alterati in qualunque modo.\nOsservatori: chi conosce l'individuo copiato pu\xF2 tentare tiro salvezza contro incantesimi."
    },
    {
      name: "Creazione Spettrale",
      level: 1,
      className: "Illusionista",
      duration: "Concentrazione",
      range: "72 m",
      description: "Un\u2019illusione visiva in un\u2019area cubica di 6 m di lato.\n1. Mostro illusorio: ordini di attaccare. CA 9 [10], svanisce se colpito.\n2. Attacco illusorio: chi supera TS incantesimi non \xE8 influenzato.\n3. Scena: cambia aspetto dell'area. Scompare se toccata.\nConcentrazione necessaria. Ferite/danni non sono reali."
    },
    {
      name: "Globo Cromatico",
      level: 1,
      className: "Illusionista",
      duration: "Istantaneo",
      range: "18 m",
      description: "Globo infallibile che danneggia e infligge un effetto base colore (richiede gemma del valore adeguato, non consumata):\nLuce (Cristallo 10 mo): 1d4, TS o circondato di luce per 1d4 round (+2 colpirlo).\nCalore (Corniola 50 mo): 1d6, TS o -2 a colpire/TS/CA per 1d4 round.\nFuoco (Ambra 100 mo): 1d8, oggetti prendono fuoco, 1d3 danni/1d4 round.\nCecit\xE0 (Giaietto 100 mo): 1d10, TS o accecato 1d4 round.\nFetore (Peridoto 500 mo): 1d12, TS o nausea (niente azioni, mezza velocit\xE0).\nMagnetismo (Diamante 500 mo): 2d6, TS o metallo magnetizzato (-2 CA, no attacchi armi in metallo).\nParalisi (Zaffiro 1.000 mo): 2d8, TS o bloccato per 1d4 round."
    },
    {
      name: "Illusione Uditiva",
      level: 1,
      className: "Illusionista",
      duration: "3 turni",
      range: "72 m",
      description: "Evoca suono a scelta che pu\xF2 spostarsi. Il volume massimo equivale a 4 umani che urlano per livello dell'utilizzatore."
    },
    {
      name: "Individuazione delle Illusioni",
      level: 1,
      className: "Illusionista",
      duration: "3 turni",
      range: "L\u2019utilizzatore o tocco",
      description: "Il soggetto riconosce le illusioni entro 3 m per livello dell\u2019utilizzatore. Vengono rilevate anche creature/oggetti invisibili."
    },
    {
      name: "Ipnotismo",
      level: 1,
      className: "Illusionista",
      duration: "1 round +1 per livello",
      range: "9 m",
      description: "Influenza fino a 1d6 creature. Segue un breve discorso e una suggestione su un corso d'azione (comprensibile). TS incantesimi nega (se suggestione ragionevole, -2 al TS). Impossibili suggestioni autolesioniste."
    },
    {
      name: "Lettura del Magico",
      level: 1,
      className: "Illusionista",
      duration: "1 turno",
      range: "L\u2019utilizzatore",
      description: "Permette di decifrare scritture magiche, rune, pergamene o libri di incantesimi arcani. Una volta letto, il testo rimane comprensibile in eterno."
    },
    {
      name: "Luce",
      level: 1,
      className: "Illusionista",
      duration: "6 turni +1 per livello",
      range: "36 m",
      description: "1. Evocare luce nel raggio di 4,5 m.\n2. Accecare una creatura (TS nega).\n3. Cancellare oscurit\xE0 magica.\nInvertito: Oscurit\xE0 magica di 9m di diametro o accecare/dissolvere luce."
    },
    {
      name: "Luci Danzanti",
      level: 1,
      className: "Illusionista",
      duration: "1 turno",
      range: "12+3 m per livello",
      description: "Evoca e controlla luci: 1-4 torce, 1-4 sfere (fuochi fatui), o 1 forma umanoide."
    },
    {
      name: "Muro di Nebbia",
      level: 1,
      className: "Illusionista",
      duration: "1 turno",
      range: "18 m",
      description: "Muro opaco, cubo con 3 m di lato per livello. Blocca vista e infravisione. Dispersa da venti forti."
    },
    {
      name: "Spaventare",
      level: 1,
      className: "Illusionista",
      duration: "Finch\xE9 non interrotto",
      range: "3 m",
      description: "Bersaglio crede l\u2019utilizzatore sia un mostro terrorizzante e scappa se fallisce TS. Ogni round effettua un nuovo TS per interrompere l'effetto."
    },
    {
      name: "Spruzzo Colorato",
      level: 1,
      className: "Illusionista",
      duration: "Istantaneo",
      range: "Cono 6m (6m estremit\xE0)",
      description: "1d6 bersagli. Se i DV bersaglio <= a utilizzatore: svengono per 1d4 round (TS se DV >= 6). Se DV fino a 2 in pi\xF9: accecato 1d4 round se TS fallito. Se DV 3 o pi\xF9 in pi\xF9: TS o stordito per 1 round."
    },
    {
      name: "Ammaliare",
      level: 2,
      className: "Illusionista",
      duration: "Variabile",
      range: "9 m",
      description: "Creatura percepisce l\u2019utilizzatore come affascinante. Seguono ovunque o obbediscono (tiro su CAR). Se tiro fallisce l'incantesimo termina. TS nega."
    },
    {
      name: "Bocca Magica",
      level: 2,
      className: "Illusionista",
      duration: "Permanente fino all\u2019attivazione",
      range: "Tocco",
      description: "Infonde in oggetto inanimato un messaggio (max 25 parole) che si attiva a una condizione visiva predeterminata entro 9m."
    },
    {
      name: "Cecit\xE0 / Sordit\xE0",
      level: 2,
      className: "Illusionista",
      duration: "Permanente",
      range: "9 m",
      description: "Singola creatura resa cieca o sorda da un'allucinazione. TS nega. Rimossa da dissolvi magie o illusioni."
    },
    {
      name: "Creazione Spettrale Migliorata",
      level: 2,
      className: "Illusionista",
      duration: "Concentrazione",
      range: "72 m",
      description: "Illusione di 6m cubo. Include suoni minori. Mostro illusorio ha CA 7 [12]. Persiste 2 round dopo che si termina la concentrazione."
    },
    {
      name: "Falsa Aura",
      level: 2,
      className: "Illusionista",
      duration: "1 turno",
      range: "9 m",
      description: "Cela l'aura di creatura/oggetto. Divinazioni e individuazioni vengono sviate o offrono risposte opposte."
    },
    {
      name: "Immagini Speculari",
      level: 2,
      className: "Illusionista",
      duration: "6 turni",
      range: "L\u2019utilizzatore",
      description: "Appaiono 1d4 immagini false. Attacchi che mancano o colpiscono distruggono un'immagine."
    },
    {
      name: "Individuazione del Magico",
      level: 2,
      className: "Illusionista",
      duration: "2 turni",
      range: "18 m",
      description: "Oggetti, aree o creature incantate luccicano."
    },
    {
      name: "Invisibilit\xE0",
      level: 2,
      className: "Illusionista",
      duration: "Permanente",
      range: "72 m",
      description: "Rende invisibile il soggetto e l'equipaggiamento. Se attacca o lancia incantesimo, torna visibile. Permanente su oggetti."
    },
    {
      name: "Mormorii nel Vento",
      level: 2,
      className: "Illusionista",
      duration: "Speciale",
      range: "1,5 km per livello",
      description: "Invia suono o max 100 parole con il vento. Viaggia a 1,5 km per turno e recapita silenziosamente all'area."
    },
    {
      name: "Quasimorfosi",
      level: 2,
      className: "Illusionista",
      duration: "3d4 round +2/liv",
      range: "L\u2019utilizzatore",
      description: "Si assume aspetto di una creatura (+/- 50% taglia). Ottiene volo a 1/4 velocit\xE0, respirare sott'acqua ecc. Non abilit\xE0 magiche/innate."
    },
    {
      name: "Sfocatura",
      level: 2,
      className: "Illusionista",
      duration: "1 turno",
      range: "L\u2019utilizzatore",
      description: "Utilizzatore sfocato. -4 a chi lo attacca (-2 dal sec tentativo). +1 ai TS contro magia se bersagli diretti."
    },
    {
      name: "Trama Ipnotica",
      level: 2,
      className: "Illusionista",
      duration: "Concentrazione",
      range: "Quadrato di 9 m attorno all\u2019utilizzatore",
      description: "Fino a 24 DV di creature restano ferme a guardare (TS nega). Interrotta se feriti."
    },
    {
      name: "Anti-Individuazione",
      level: 3,
      className: "Illusionista",
      duration: "1 turno / livello",
      range: "L\u2019utilizzatore",
      description: "Immune a localizzazione magica, sorveglianza e divinazione (inclusi chiaroveggenza, ESP)."
    },
    {
      name: "Corda Truccata",
      level: 3,
      className: "Illusionista",
      duration: "2 turni / livello",
      range: "Tocco",
      description: "Corda (max 9m) si alza in aria. Chi si arrampica sparisce in spazio immaginario per max 6 individui."
    },
    {
      name: "Creazione Fantasma",
      level: 3,
      className: "Illusionista",
      duration: "Concentrazione",
      range: "72 m",
      description: "Mostro CA 5 [14]. Come Spettrale Migliorata ma include odori/termici. Persiste 3 round senza conc."
    },
    {
      name: "Dissolvi Illusioni",
      level: 3,
      className: "Illusionista",
      duration: "Istantaneo",
      range: "3 m per livello",
      description: "Pone fine ad illusioni in 6m cubo. Automatico se livello uguale/minore, senn\xF2 5%/livello differenza di fallire."
    },
    {
      name: "Forma Spettrale",
      level: 3,
      className: "Illusionista",
      duration: "1 turno",
      range: "L\u2019utilizzatore",
      description: "Forma eterea. Passa in fori/crepe. Ferito solo da creature eteree/magia. Ignorato da non morti (TS con -4 se DV >= 10 per accorgersene)."
    },
    {
      name: "Invisibilit\xE0 nel Raggio di 3 Metri",
      level: 3,
      className: "Illusionista",
      duration: "Permanente",
      range: "36 m",
      description: "Il bersaglio e chi gli sta entro 3m (costantemente aggiornato) sono invisibili. Attaccare spezza."
    },
    {
      name: "Luce Nera",
      level: 3,
      className: "Illusionista",
      duration: "1 turno / livello",
      range: "L\u2019utilizzatore o 18 m",
      description: "Area 9m diametro illuminata ma luce non percepibile da fuori. Permette furtivit\xE0 al buio per chi \xE8 dentro."
    },
    {
      name: "Paralisi",
      level: 3,
      className: "Illusionista",
      duration: "6 turni",
      range: "3 m per livello",
      description: "Fino a 2 DV/liv di creature in 6m cubo bloccate dall'allucinazione di non sapersi muovere. TS nega."
    },
    {
      name: "Paura",
      level: 3,
      className: "Illusionista",
      duration: "Istantaneo",
      range: "Cono 18m (largo 9m)",
      description: "TS o terrorizzati fuggono per 1 round / livello. 60% (-5% a DV sopra al primo) di far cadere armi."
    },
    {
      name: "Stallone Fantasma",
      level: 3,
      className: "Illusionista",
      duration: "6 turni / livello",
      range: "3 m",
      description: "Stallone oscuro (12 hp, CA 8[11], vel 9m/liv). 8\xB0livello: sterrati ignorati. 10\xB0livello: acqua. 12\xB0livello: aria in buchi corti. 14\xB0livello: vola."
    },
    {
      name: "Suggestione",
      level: 3,
      className: "Illusionista",
      duration: "4 turni +4/liv",
      range: "9 m",
      description: "Come ipnotismo, suggerisce corso azione (non suicida). TS per negarlo."
    },
    {
      name: "Terreno Illusorio",
      level: 3,
      className: "Illusionista",
      duration: "Fino al tocco",
      range: "72 m",
      description: "Apparenza di terreno diverso. Svanisce se toccato da esseri intelligenti."
    },
    {
      name: "Assassino Spettrale",
      level: 4,
      className: "Illusionista",
      duration: "1 round / livello",
      range: "1,5 m / livello",
      description: "TS+2 nega. Altrimenti, incubo insegue illimitatamente, attacca THAC0 16[+3], se colpisce soggetto muore di paura."
    },
    {
      name: "Confusione",
      level: 4,
      className: "Illusionista",
      duration: "12 round",
      range: "36 m",
      description: "3d6 creature in 18m confuse, si attaccano alleati, nemici, o stanno fermi. TS nega."
    },
    {
      name: "Creazione Minore",
      level: 4,
      className: "Illusionista",
      duration: "6 turni / livello",
      range: "Tocco",
      description: "Da materiale crea oggetto vegetale tangibile fino a 0.03 mc/livello."
    },
    {
      name: "Dissolvi Magie",
      level: 4,
      className: "Illusionista",
      duration: "Istantaneo",
      range: "36 m",
      description: "Azzera incanti. Prob fallimento 5% per divario livello."
    },
    {
      name: "Emozione",
      level: 4,
      className: "Illusionista",
      duration: "Concentrazione",
      range: "3 m per livello",
      description: "In 12x12 m proietta (TS nega): Disperazione, Odio (+2 morale, tpc, danno, TS), Paura, o Rabbia (+1 tpc, +3 danno, 5hp, -scudo). Emozioni opposte si annullano."
    },
    {
      name: "Energia Illusoria",
      level: 4,
      className: "Illusionista",
      duration: "3 turni / livello",
      range: "Tocco",
      description: "Fino a 4 soggetti. Guadagnano pf temporanei pari al 50% dei pf mancanti. Eventuale danno andr\xE0 tolto ai pf temporanei."
    },
    {
      name: "Invisibilit\xE0 Migliorata",
      level: 4,
      className: "Illusionista",
      duration: "4 round +1/livello",
      range: "L\u2019utilizzatore / Tocco",
      description: 'Puo\u2019 attaccare restando "invisibile" ma con luccichio (-4 ai tiri per colpire subiti).'
    },
    {
      name: "Metamorfosi di Massa",
      level: 4,
      className: "Illusionista",
      duration: "Permanente",
      range: "72 m",
      description: "Fino a 100 soggetti in 72 m diventano un boschetto alberato illusorio."
    },
    {
      name: "Mostri d\u2019Ombra",
      level: 4,
      className: "Illusionista",
      duration: "1 round / livello",
      range: "9 m",
      description: "Fino a [Livello] DV. 1d2 hp per DV. TS success: mostri fanno 1/4 danno, CA 9[10]. Altrimenti, pieno danno e paiono creature convinte."
    },
    {
      name: "Nebbia Solida",
      level: 4,
      className: "Illusionista",
      duration: "1 turno",
      range: "18 m",
      description: "Muro di vapore blocca vista. 1/10 movimento. Cubo di 3 m per livello."
    },
    {
      name: "Trama Iridescente",
      level: 4,
      className: "Illusionista",
      duration: "Concentrazione",
      range: "Quadrato 9 m",
      description: "Come Trama Ipnotica ma si puo' smettere di concentrarsi, la trama si allontana (9m a round) e chi fallisse il TS la seguir\xE0 se distanze pericolose."
    },
    {
      name: "Velo dell\u2019Abbandono",
      level: 4,
      className: "Illusionista",
      duration: "1 turno / livello",
      range: "3 m / livello",
      description: "Sembra abbandonato, tutto polveroso/invisibile senza essere visti."
    },
    {
      name: "Apparenza",
      level: 5,
      className: "Illusionista",
      duration: "12 ore",
      range: "3 m",
      description: "2 per liv utilizzatore cambiano razza ad altro tipo di umanoide restando se' stessi. Alt in +/- 30cm peso a piacere."
    },
    {
      name: "Caos",
      level: 5,
      className: "Illusionista",
      duration: "12 round",
      range: "36 m",
      description: "In 18m tutti tranne illusionisti han TS automatico (non ci sono TS), si attaccano a caso o van persi."
    },
    {
      name: "Creazione Maggiore",
      level: 5,
      className: "Illusionista",
      duration: "Vegetale 12 T/ Minerali 6 T",
      range: "Tocco",
      description: "Come creazione minore ma ammette materiali vegetali e minerali."
    },
    {
      name: "Flusso Temporale",
      level: 5,
      className: "Illusionista",
      duration: "6 turni/liv",
      range: "3 m",
      description: "Il tempo interno va 6 volte piu\u2019 veloce permettendo riposi pieni accelerati. L\u2019esterno scorre normale. Limite a 1/settimana, poi max 1 pf o -1 COS. (1 turno in game -> 1 ora in bolla)."
    },
    {
      name: "Illusione",
      level: 5,
      className: "Illusionista",
      duration: "1 round / livello",
      range: "72 m",
      description: "Senza concentrazione. Attorno 6m. Come Phantom Creation."
    },
    {
      name: "Immagine Proiettata",
      level: 5,
      className: "Illusionista",
      duration: "6 turni",
      range: "72 m",
      description: "Crea duplicato dell'incantatore. Sembra castare magie invece dell'originale. Inafferrabile da magie distanti. Tocco la dissipa."
    },
    {
      name: "Labirinto di Specchi",
      level: 5,
      className: "Illusionista",
      duration: "Dipende INT. Fino 3d4 round",
      range: "1.5m x livello",
      description: "Bandisce creatura in labirinto. Pi\xF9 la INT \xE8 alta prima torna (1d4 turni sotto 3, 1d4 round sopra 18)."
    },
    {
      name: "Mostri di Semi-Ombra",
      level: 5,
      className: "Illusionista",
      duration: "1 Round / livello",
      range: "9m",
      description: "Come Mostri d'Ombra ma (1d4 pf/DV) e chi li sgama subisce mezzo danno."
    },
    {
      name: "Specchio",
      level: 5,
      className: "Illusionista",
      duration: "1 Round / Livello",
      range: "Tocco",
      description: "Speciale chiaroveggenza su specchio da 1000 mo, dipende familiarita."
    },
    {
      name: "Teatro d\u2019Ombre",
      level: 5,
      className: "Illusionista",
      duration: "Fino a 6 Turni + 1/livello",
      range: "9m",
      description: "Replicante cronologico ombre antiche dal momento d'accensione."
    },
    {
      name: "Trasformazione d\u2019Ombra",
      level: 5,
      className: "Illusionista",
      duration: "1d4 round + 1/liv",
      range: "Tocco creatura/oggetto",
      description: "Mutazione in vago per attraversare muri e danni limitati. Ferito da creature incorporee."
    },
    {
      name: "Visitazione",
      level: 5,
      className: "Illusionista",
      duration: "5 min",
      range: "Illimitata",
      description: "Trasmette tramite apparizione messaggio di 5 min, necessita di feticcio/oggetto legato alla vittima per funzionare."
    },
    {
      name: "Attraverso lo Specchio",
      level: 6,
      className: "Illusionista",
      duration: "1 round/Livello",
      range: "3m",
      description: "Usi Specchio (>5000mo) per vedere ed in seguito passare il portale e teletrasportarsi."
    },
    {
      name: "Diversivo",
      level: 6,
      className: "Illusionista",
      duration: "1 round/ Livello",
      range: "L\u2019utilizzatore",
      description: "Sdoppia un clone identico per combattere e parare e castare (ma i pg sono reali e visibili), tu resti in campo come Invisibilit\xE0 Migliorata."
    },
    {
      name: "Illusione Innescata",
      level: 6,
      className: "Illusionista",
      duration: "Permanente poi 1rd/liv",
      range: "72m",
      description: "Simile a Illusion con innesco predefinito dal lancia-spells."
    },
    {
      name: "Illusione Permanente",
      level: 6,
      className: "Illusionista",
      duration: "Permanente",
      range: "72 m",
      description: "Tutto diventa stabile in area. Senza mostri illusori a comando, ma scenario statico permanente."
    },
    {
      name: "Imitazione",
      level: 6,
      className: "Illusionista",
      duration: "1 Turno / Livello",
      range: "Tocco",
      description: "Assolve in tutto e per tutto aspetto fisico/comportamento/voce (meno memoria e skill) di creatura usando campione DNA/feticci personali."
    },
    {
      name: "Nebbia Acida",
      level: 6,
      className: "Illusionista",
      duration: "1d4 round + 1/Livello",
      range: "9m",
      description: "Nebbia (cubo 3m/liv) scioglie esseri viventi dentro a essa: danni esponenziali a scalare tondi (1, poi 2 per 2 round poi 4, poi 8 per i succ)."
    },
    {
      name: "Ombre Animate",
      level: 6,
      className: "Illusionista",
      duration: "1 Round / Livello",
      range: "9m",
      description: "Uguale ai Mostri Ombra ma con PV pari a 1d6 per dado vita e 3/4 dei danni se si salva. Altrimenti danni integrali."
    },
    {
      name: "Sogno Manifesto",
      level: 6,
      className: "Illusionista",
      duration: "Speciale (guarigione)",
      range: "L\u2019utilizzatore",
      description: "Si dorme 8 h visualizzando la guarigione, risurrezione (temporanea), o rivelazione o divinazione. Pu\xF2 impazzire l'uso."
    },
    {
      name: "Suggestione di Massa",
      level: 6,
      className: "Illusionista",
      duration: "4 Turni + 4/liv",
      range: "27 m",
      description: "Fino a 1 bersaglio a livello suggestibile secondo suggestione."
    },
    {
      name: "Viaggio Onirico",
      level: 6,
      className: "Illusionista",
      duration: "Temporaneo fino a fine",
      range: "18 m",
      description: "Piazza un quest coatto, ad adempiere, la vittima perde pf fisso al d\xED se non partecipa (TS nega la quest a parte incubi)."
    },
    {
      name: "Visione",
      level: 6,
      className: "Illusionista",
      duration: "1  Turno",
      range: "L\u2019utilizzatore",
      description: "Chiama divinazione divina, necessita sacrificio proporzionale a preziosit\xE0 all\u2019avverarsi (1d10 - valore mo)"
    },
    {
      name: "Visione del Vero",
      level: 6,
      className: "Illusionista",
      duration: "1 round/ Liv",
      range: "L\u2019utilizzatore o tocco",
      description: "Ignora invisibilit\xE0, apparenze incantate o illusioni o porte segrete (vero aspetto visibile a 18m)."
    }
  ];

  // src/lib/magic-user-spells.ts
  var MAGIC_USER_SPELL_DETAILS = [
    // 1st Level
    {
      name: "Blocca Porta",
      level: 1,
      className: "Mago",
      duration: "2d6 turni",
      range: "3 m",
      description: `Impedisce magicamente che un portale (ad es. una porta, un cancello, ecc.) venga aperto.
Aprire con la magia: l\u2019incantesimo scassinare apre la porta bloccata istantaneamente.
Aprire con la forza: creature con almeno 3 DV pi\xF9 dell\u2019utilizzatore possono forzare il portale bloccato in 1 round.`
    },
    {
      name: "Charme",
      level: 1,
      className: "Mago",
      duration: "1 o pi\xF9 giorni",
      range: "36 m",
      description: `Un singolo umano, semiumano o mostro antropomorfo deve superare un tiro salvezza contro incantesimi o venire affascinato.
Amicizia: il soggetto considera l\u2019utilizzatore un amico intimo e interviene in sua difesa.
Ordini: se parlano la stessa lingua, l\u2019utilizzatore pu\xF2 dare ordini alla creatura affascinata ed essere ubbidito.
Natura del soggetto: la creatura affascinata pu\xF2 resistere a ordini che contraddicono le sue abitudini o il suo allineamento.
Ordini suicidi: vengono sempre rifiutati.
Limitazioni: mostri antropomorfi con pi\xF9 di 4+1 DV e non-morti non vengono influenzati.
Durata: ha durata indefinita, ma il soggetto pu\xF2 effettuare ulteriori tiri salvezza contro incantesimi a intervalli che dipendono dal suo punteggio di INT.
 \u25B6 INT 3-8: una volta al mese.
 \u25B6 INT 9-12: una volta alla settimana.
 \u25B6 INT 13-18: una volta al giorno.`
    },
    {
      name: "Dardo Incantato",
      level: 1,
      className: "Mago",
      duration: "1 turno",
      range: "45 m",
      description: `L\u2019incantesimo evoca un luccicante dardo di energia che l\u2019utilizzatore pu\xF2 scagliare contro un bersaglio visibile.
Colpire: il dardo colpisce ineluttabilmente.
Danno: il dardo infligge 1d6+1 danni.
Utilizzatori di livello pi\xF9 alto: possono evocare pi\xF9 dardi. Ne appaiono due aggiuntivi per ogni cinque livelli di esperienza guadagnati dall\u2019utilizzatore (tre tra il 6\xB0 e il 10\xB0 livello, ecc.).
Una sola volta: ogni dardo evocato pu\xF2 essere scagliato una sola volta e scompare dopo l\u2019uso.`
    },
    {
      name: "Disco Levitante",
      level: 1,
      className: "Mago",
      duration: "6 turni",
      range: "1,8 m",
      description: `Evoca un disco invisibile di energia magica per trasportare dei carichi.
Dimensioni: ha la forma di uno scudo rotondo leggermente concavo con 90 cm di diametro.
Carico: pu\xF2 portare un carico massimo di 5.000 monete (250 kg).
Movimento: il disco levita all\u2019altezza della vita.
Fine: quando svanisce, tutto quello che reggeva viene lasciato cadere.`
    },
    {
      name: "Individuazione del Magico",
      level: 1,
      className: "Mago",
      duration: "2 turni",
      range: "18 m",
      description: `Oggetti, aree e creature incantate vengono fatti luccicare magicamente. Sono svelati sia gli incantamenti temporanei che quelli permanenti.`
    },
    {
      name: "Lettura dei Linguaggi",
      level: 1,
      className: "Mago",
      duration: "2 turni",
      range: "L\u2019utilizzatore",
      description: `L\u2019utilizzatore acquisisce la capacit\xE0 di comprendere informazioni scritte in qualunque linguaggio, inclusi messaggi cifrati o simboli.
Parlare: l\u2019incantesimo non conferisce la capacit\xE0 di parlare lingue sconosciute.`
    },
    {
      name: "Lettura del Magico",
      level: 1,
      className: "Mago",
      duration: "1 turno",
      range: "L\u2019utilizzatore",
      description: `Permette all\u2019utilizzatore di decifrare scritture magiche o rune.
Pergamene: permette di comprendere e poi attivare pergamene di incantesimi arcani.
Libri degli incantesimi: \xE8 possibile decifrare un libro scritto da un altro utilizzatore.
Iscrizioni: \xE8 possibile comprendere rune incise.
Leggere nuovamente: una volta letta un\u2019iscrizione, la si potr\xE0 sempre comprendere.`
    },
    {
      name: "Luce",
      level: 1,
      className: "Mago",
      duration: "6 turni +1 per livello",
      range: "36 m",
      description: `L\u2019incantesimo pu\xF2 essere usato in tre modi:
1. Evocare luce: in un\u2019area di 9 m di diametro.
2. Accecare una creatura: lanciandolo sui suoi occhi (Tiro Salvezza per negare).
3. Cancellare oscurit\xE0: pu\xF2 dissolvere la magia Oscurit\xE0.
Invertito: Oscurit\xE0 Crea oscurit\xE0 magica in 9 m di diametro.`
    },
    {
      name: "Protezione dal Male",
      level: 1,
      className: "Mago",
      duration: "6 turni",
      range: "L\u2019utilizzatore",
      description: `Protegge l\u2019utilizzatore dagli attacchi di creature di un altro allineamento:
Bonus: +1 ai tiri salvezza.
Attacchi nemici: \u20131 per colpire l'utilizzatore.
Creature incantate: impedisce a mostri evocati o animati magicamente di attaccare in mischia (a meno che l'utilizzatore non attacchi per primo).`
    },
    {
      name: "Scudo",
      level: 1,
      className: "Mago",
      duration: "2 turni",
      range: "L\u2019utilizzatore",
      description: `Evoca una barriera magica che conferisce all\u2019utilizzatore una migliore CA:
Contro gli attacchi a distanza: CA 2 [17].
Contro altri attacchi: CA 4 [15].`
    },
    {
      name: "Sonno",
      level: 1,
      className: "Mago",
      duration: "4d4 turni",
      range: "72 m",
      description: `Causa un torpore magico. Pu\xF2 essere indirizzato su:
1. Una creatura con 4+1 Dadi Vita.
2. 2d8 Dadi Vita di creature con 4 DV o meno.
Uccisione: una creatura addormentata pu\xF2 essere uccisa con un solo attacco con un\u2019arma affilata.
I non-morti non sono influenzati.`
    },
    {
      name: "Ventriloquio",
      level: 1,
      className: "Mago",
      duration: "2 turni",
      range: "18 m",
      description: `Consente all'utilizzatore di far emanare la sua voce da qualsiasi parte entro gittata (ad es. una statua, un arazzo, un animale).`
    },
    // 2nd Level
    {
      name: "Chiavistello del Mago",
      level: 2,
      className: "Mago",
      duration: "Permanente",
      range: "3 m",
      description: `Chiude magicamente una porta, cancello, o oggetto con serratura.
Oltrepassare: l'utilizzatore pu\xF2 passare liberamente. "Scassinare" o utilizzatori con 3+ livelli in pi\xF9 possono passare senza dispellare la magia.`
    },
    {
      name: "Creazione Spettrale",
      level: 2,
      className: "Mago",
      duration: "Concentrazione",
      range: "72 m",
      description: `Crea un'illusione visiva in un'area cubica di 6m.
Tipi: Mostro illusorio (CA 9, svanisce se colpito), Attacco illusorio, Scena illusoria.
Concentrazione: richiede che l'utilizzatore non si muova e resti concentrato.
Danni illusori: sembrano veri ma chi "muore" in realt\xE0 sviene per 1d4 turni.`
    },
    {
      name: "ESP",
      level: 2,
      className: "Mago",
      duration: "12 turni",
      range: "18 m",
      description: `Conferisce la capacit\xE0 di percepire i pensieri.
Concentrandosi 1 turno in una direzione, si captano i pensieri.
Se pi\xF9 creature sono presenti, si sente una mescolanza, ma con un altro turno ci si focalizza su una sola.
Ostacoli: bloccato da piombo o 50 cm di roccia.`
    },
    {
      name: "Immagini Speculari",
      level: 2,
      className: "Mago",
      duration: "6 turni",
      range: "L\u2019utilizzatore",
      description: `Appaiono 1d4 immagini false dell\u2019utilizzatore che copiano i suoi movimenti. Gli attacchi diretti contro l'utilizzatore distruggono un'immagine (anche se mancano).`
    },
    {
      name: "Individuazione dell\u2019Invisibile",
      level: 2,
      className: "Mago",
      duration: "6 turni",
      range: "3 m per livello",
      description: `Oggetti o creature invisibili entro gittata si rivelano all\u2019utilizzatore.`
    },
    {
      name: "Individuazione del Male",
      level: 2,
      className: "Mago",
      duration: "2 turni",
      range: "18 m",
      description: `Oggetti sotto incantamenti malvagi e creature con cattive intenzioni vengono fatti luccicare magicamente.`
    },
    {
      name: "Invisibilit\xE0",
      level: 2,
      className: "Mago",
      duration: "Permanente",
      range: "72 m",
      description: `Rende invisibile una creatura o un oggetto. Se lanciato su una creatura si rompe se attacca o lancia magie.`
    },
    {
      name: "Levitazione",
      level: 2,
      className: "Mago",
      duration: "6 turni +1 per livello",
      range: "L\u2019utilizzatore",
      description: `Consente di muoversi verticalmente fino a 6m per round. Il movimento orizzontale \xE8 possibile solo spingendosi contro superfici.`
    },
    {
      name: "Localizzare Oggetto",
      level: 2,
      className: "Mago",
      duration: "2 turni",
      range: "18 m + 3 m/lvl",
      description: `Si percepisce la direzione di un oggetto (specifico o categoria generale). Non funziona per le creature.`
    },
    {
      name: "Luce Perenne",
      level: 2,
      className: "Mago",
      duration: "Permanente",
      range: "36 m",
      description: `Evoca luce in 18 m di diametro, o acceca una creatura (TS per negare), o cancella Oscurit\xE0 Perenne.`
    },
    {
      name: "Ragnatela",
      level: 2,
      className: "Mago",
      duration: "48 turni",
      range: "3 m",
      description: `Ragnatela appiccicosa in 3m cubi. Intrappola le creature. Infiammabile (1d6 danni). Si libera in base alla FOR (da 2 r a 2d4 turni).`
    },
    {
      name: "Scassinare",
      level: 2,
      className: "Mago",
      duration: "1 round",
      range: "18 m",
      description: `Apre porte e serrature, normali (incastrate/sbarrate) o magiche. Apre porte segrete se se ne conosce l'esistenza.`
    },
    // 3rd Level
    {
      name: "Blocca Persone",
      level: 3,
      className: "Mago",
      duration: "1 turno / livello",
      range: "36 m",
      description: `Paralizza uno o pi\xF9 umanoidi se falliscono TS.
1 bersaglio: TS -2.
Gruppo: colpiti 1d4 bersagli.`
    },
    {
      name: "Chiaroveggenza",
      level: 3,
      className: "Mago",
      duration: "12 turni",
      range: "18 m",
      description: `Vedere attraverso gli occhi di creature viventi concentrandosi per 1 turno in una direzione. Bloccata da piombo/roccia.`
    },
    {
      name: "Dissolvi Magie",
      level: 3,
      className: "Mago",
      duration: "Istantaneo",
      range: "36 m",
      description: `Pone fine a effetti d\u2019incantesimo entro 6m. Gli oggetti magici non sono influenzati. Probabilit\xE0 di fallimento (5% per livello) se il caster originario \xE8 di livello superiore.`
    },
    {
      name: "Fulmine Magico",
      level: 3,
      className: "Mago",
      duration: "Istantaneo",
      range: "54 m",
      description: `Un fulmine di 18m per 1,5m infligge 1d6 danni per livello. TS per dimezzare. Se colpisce una barriera solida, rimbalza indietro.`
    },
    {
      name: "Infravisione",
      level: 3,
      className: "Mago",
      duration: "1 giorno",
      range: "Tocco",
      description: `Conferisce infravisione fino a 18 m a un soggetto toccato.`
    },
    {
      name: "Invisibilit\xE0 nel Raggio di 3 Metri",
      level: 3,
      className: "Mago",
      duration: "Permanente",
      range: "36 m",
      description: `Soggetto e chiunque sia entro 3m diventa invisibile, finch\xE9 resta nell'area. Se un interessato attacca o lancia un incantesimo, torna visibile. Le fonti di luce diventano invisibili.`
    },
    {
      name: "Palla di Fuoco",
      level: 3,
      className: "Mago",
      duration: "Istantaneo",
      range: "72 m",
      description: `Esplode in una sfera di 6 m di raggio. Infligge 1d6 danni per livello (TS dimezza).`
    },
    {
      name: "Protezione dal Male nel Raggio di 3 Metri",
      level: 3,
      className: "Mago",
      duration: "12 turni",
      range: "Raggio 3 m",
      description: `Come l'incantesimo di 1\xB0 livello, ma in un raggio di 3m attorno all'incantatore.`
    },
    {
      name: "Protezione dai Proiettili Normali",
      level: 3,
      className: "Mago",
      duration: "12 turni",
      range: "9 m",
      description: `Soggetto immune ai proiettili piccoli e non magici. Non protegge da macigni o proiettili incantati.`
    },
    {
      name: "Respirare Sott\u2019Acqua",
      level: 3,
      className: "Mago",
      duration: "1 giorno",
      range: "9 m",
      description: `Permette a un soggetto di respirare sott'acqua (senza perdere la capacit\xE0 di respirare aria).`
    },
    {
      name: "Velocit\xE0",
      level: 3,
      className: "Mago",
      duration: "3 turni",
      range: "72 m",
      description: `Movimento e attacchi raddoppiati per fino a 24 creature in 18m. (Non raddoppia incantesimi o bacchette).`
    },
    {
      name: "Volare",
      level: 3,
      className: "Mago",
      duration: "1d6 turni +1 per livello",
      range: "Tocco",
      description: `Capacit\xE0 di volo fino a 108 m (36 m in esplorazione), librandosi e fluttuando.`
    },
    // 4th Level
    {
      name: "Autometamorfosi",
      level: 4,
      className: "Mago",
      duration: "6 turni +1 per livello",
      range: "L\u2019utilizzatore",
      description: `L\u2019utilizzatore si trasforma in un essere con DV non superiori al proprio livello. Acquisisce attacchi fisici e forma, ma non attacchi speciali/magici. Punti ferita e TS restano i propri.`
    },
    {
      name: "Charme sui Mostri",
      level: 4,
      className: "Mago",
      duration: "1 o pi\xF9 giorni",
      range: "36 m",
      description: `Affascina 3d6 creature (fino a 3 DV) o una singola (con pi\xF9 di 3 DV). Simile a Charme su Persone ma influenza tutti i mostri non-morti esclusi.`
    },
    {
      name: "Confusione",
      level: 4,
      className: "Mago",
      duration: "12 round",
      range: "36 m",
      description: `3d6 creature in un'area di 18 m impazziscono per 12 round (chi ha < 2 DV non ha TS, gli altri tirano ogni round per non subire l'effetto quel round).`
    },
    {
      name: "Crescita Vegetale",
      level: 4,
      className: "Mago",
      duration: "Permanente",
      range: "36 m",
      description: `Una selva di rovi o piante impraticabili che rende l\u2019area invalicabile se non a creature enormi, coprendo fino a 300 m2.`
    },
    {
      name: "Metamorfosi",
      level: 4,
      className: "Mago",
      duration: "Permanente",
      range: "18 m",
      description: `Pari ad Autometamorfosi, ma si casta sugli altri. Acquisisce anche abilit\xE0 speciali e attitudini (soggetto diventa *davvero* la nuova creatura).`
    },
    {
      name: "Metamorfosi di Massa",
      level: 4,
      className: "Mago",
      duration: "Permanente",
      range: "72 m",
      description: `Cella un massimo di 100 esseri creando l\u2019illusione di conformazione naturale / bosco. Se escono o attaccano, sono rivelate.`
    },
    {
      name: "Muro di Fuoco",
      level: 4,
      className: "Mago",
      duration: "Concentrazione",
      range: "18 m",
      description: `Evoca un muro o anello di fiamma (fino a 120 mq). Blocca creature <4 DV, altre subiscono 1d6 danni, danni raddoppiati a non-morti/ice creature.`
    },
    {
      name: "Muro di Ghiaccio",
      level: 4,
      className: "Mago",
      duration: "12 turni",
      range: "36 m",
      description: `Evoca una lastra (fino a 120 mq). Blocca creature <4 DV, chi abbatte la parete subisce 1d6 (fuoco raddoppiato).`
    },
    {
      name: "Occhio del Mago",
      level: 4,
      className: "Mago",
      duration: "6 turni",
      range: "72 m",
      description: `Evoca occhio magico e invisibile esplorante. 36m di volo per turno. Vista normale / infravisione 18m.`
    },
    {
      name: "Porta Dimensionale",
      level: 4,
      className: "Mago",
      duration: "1 round",
      range: "3 m",
      description: `L\u2019utilizzatore o tocco trasferito fino a 108 m distant a vista o con coordinate.`
    },
    {
      name: "Rimuovi Maledizione",
      level: 4,
      className: "Mago",
      duration: "Istantaneo",
      range: "Tocco",
      description: `Annulla maledizione, incluso quelle causate da artefatti maledetti. Invertito infligge una penalit\xE0 (-4 TC, param -50%, o -2 TS).`
    },
    {
      name: "Terreno Illusorio",
      level: 4,
      className: "Mago",
      duration: "Finch\xE9 toccato",
      range: "72 m",
      description: `Appare o cela una vasta conformazione naturale, svanisce al tocco cosciente.`
    },
    // 5th Level
    {
      name: "Animare i Morti",
      level: 5,
      className: "Mago",
      duration: "Permanente",
      range: "18 m",
      description: `Fino a 1 DV di zombi / scheletri animati per LV incantatore. Fedeli all\u2019incantatore fino a distruzione o dispellamento.`
    },
    {
      name: "Blocca Mostri",
      level: 5,
      className: "Mago",
      duration: "6 turni +1 per livello",
      range: "36 m",
      description: `Come Blocca Persone, ma funziona contro tutti tranne non-morti.`
    },
    {
      name: "Contattare Piani Superiori",
      level: 5,
      className: "Mago",
      duration: "1 conversazione",
      range: "L\u2019utilizzatore",
      description: `Domande al GM su Piani di Esistenza superni (3\xB0-12\xB0 piano), max s\xEC/no. Follia / menzogne in caso avversa fortuna.`
    },
    {
      name: "Demenza",
      level: 5,
      className: "Mago",
      duration: "Permanente",
      range: "72 m",
      description: `Caster bersaglio entra in follia se fallisce TS (-4). Diventa inebetito e non casta.`
    },
    {
      name: "Evoca Elementale",
      level: 5,
      className: "Mago",
      duration: "Finch\xE9 concentrato",
      range: "72 m",
      description: `Genera Elementale a scelta da materia prima presente, max 1 al d\xEC, DV 16. Necessita concentrazione, se spezzata l\u2019elementale attacca l'incantatore.`
    },
    {
      name: "Giara Magica",
      level: 5,
      className: "Mago",
      duration: "Speciale",
      range: "L\u2019utilizzatore",
      description: `Spirito trasferito. L\u2019incantatore possiede la vittima, se vaso rotto muore o intrappolato in base a contesto.`
    },
    {
      name: "Muro di Pietra",
      level: 5,
      className: "Mago",
      duration: "Permanente",
      range: "18 m",
      description: `Densa roccia max 28 m3 che divide corridoi in base a spazio. Da appoggiare solidamente.`
    },
    {
      name: "Nube Mortale",
      level: 5,
      className: "Mago",
      duration: "6 turni",
      range: "9 m",
      description: `Venti pestilenziali, 1/round danno, se vitime < 5 DV fanno TS vs Morte altrimenti Muoiono istant.`
    },
    {
      name: "Passa-Pareti",
      level: 5,
      className: "Mago",
      duration: "3 turni",
      range: "9 m",
      description: `Crea istantaneo corridoio largo 1.5 cm e profondo 3m su roccia in solido.`
    },
    {
      name: "Telecinesi",
      level: 5,
      className: "Mago",
      duration: "Fino a 6 round",
      range: "36 m",
      description: `Concentrato si alza max 200 monete/LIVELLO, 6 metri round, bersaglio umanoide TS o levitato a forza.`
    },
    {
      name: "Teletrasporto",
      level: 5,
      className: "Mago",
      duration: "Istantaneo",
      range: "3 m",
      description: `Passaggio al balzo, con % fallimento rischio fusione in base alle info spaziali disponibili in zona arrivo.`
    },
    {
      name: "Trasforma Roccia in Fango",
      level: 5,
      className: "Mago",
      duration: "3d6 giorni",
      range: "36 m",
      description: `Tramuta solido in impantanato. Movimenti frenati a 10%. Invertito riacquisisce suolo stabile e intrappola letalmente.`
    },
    // 6th Level
    {
      name: "Abbassamento delle Acque",
      level: 6,
      className: "Mago",
      duration: "10 turni",
      range: "72 m",
      description: `Dimezza l'altezza delle acque a patto che in 1.000 metri quadri.`
    },
    {
      name: "Barriera Anti-Magia",
      level: 6,
      className: "Mago",
      duration: "12 turni",
      range: "L\u2019utilizzatore",
      description: `Protegge totalmente per maghi l'area bersaglio rendendola immune a poteri magici / bacchette`
    },
    {
      name: "Controllo del Tempo Atmosferico",
      level: 6,
      className: "Mago",
      duration: "Concentrazione",
      range: "240 m",
      description: `Evoca manifestazioni meteorologiche tra Nebbia, Uragani, Tornado, Cale.`
    },
    {
      name: "Disintegrazione",
      level: 6,
      className: "Mago",
      duration: "Istantaneo",
      range: "18 m",
      description: `Inerbisce la polvere atomica su bersaglio o barriera di 3 metri. TS contro morte evita total disintegro. `
    },
    {
      name: "Immagine Proiettata",
      level: 6,
      className: "Mago",
      duration: "6 turni",
      range: "72 m",
      description: `Ologramma illusionista, lanciare magie tramite esso illudendo l'avversario finch\xE9 colpito fisicamente svanisce.`
    },
    {
      name: "Imposizione",
      level: 6,
      className: "Mago",
      duration: "Permanente",
      range: "9 m",
      description: `Obbligo maledetto verso un bersaglio di compiere mission per salvargli pena decessa eventuale. Invertito \xE8 sciogli voti.`
    },
    {
      name: "Incantesimo della Morte",
      level: 6,
      className: "Mago",
      duration: "Istantaneo",
      range: "72 m",
      description: `Manda istant all\u2019altro mondo 4d8 DV di esseri non > a 7 dadivita e TS VS mort\xE8 fallito.`
    },
    {
      name: "Reincarnazione",
      level: 6,
      className: "Mago",
      duration: "Permanente",
      range: "Appare al cospetto",
      description: `Evoca spirito nel nuovo corpo per resuscitarlo da morto al cospetto del caster da tabella dedicata (non necess umana razza). `
    },
    {
      name: "Segugio Invisibile",
      level: 6,
      className: "Mago",
      duration: "1 missione",
      range: "Evocato",
      description: `Bestiale stalker (DV 8 CA 3) etereo invulnerab cerca obiettivo affidato ma ne snatura intenzioni se ambiguo.`
    },
    {
      name: "Separazione delle Acque",
      level: 6,
      className: "Mago",
      duration: "6 turni",
      range: "36 m",
      description: `Fende corridoi di 3 per 36 metri sulle onde.`
    },
    {
      name: "Spostamento del Terreno",
      level: 6,
      className: "Mago",
      duration: "6 turni",
      range: "72 m",
      description: `Scavatura terriccia 18m round manipolando profondit\xE0 e larghezze del terra non pietra solida.`
    },
    {
      name: "Trasforma Pietra in Carne",
      level: 6,
      className: "Mago",
      duration: "Permanente",
      range: "36 m",
      description: `Rimedi contro meduse, restituisce fluidit\xE0. L'invertito trasforma vittime in estatue (TS pietra res). `
    }
  ];

  // src/lib/necromancer-spells.ts
  var NECROMANCER_SPELL_DETAILS = [
    {
      name: "Comandare Non-Morti",
      level: 1,
      className: "Necromante",
      duration: "1 turno",
      range: "18 m",
      description: "Permette di comandare non-morti minori. Se falliscono il TS assecondano l'utilizzatore."
    },
    {
      name: "Tocco Gelido",
      level: 1,
      className: "Necromante",
      duration: "1 turno",
      range: "L\u2019utilizzatore",
      description: "Il tocco dell'utilizzatore infligge 1d6 danni da gelo e paralizza la vittima se fallisce un tiro salvezza."
    },
    {
      name: "Vista dell'Oltretomba",
      level: 1,
      className: "Necromante",
      duration: "6 turni",
      range: "L\u2019utilizzatore",
      description: "L\u2019utilizzatore pu\xF2 vedere le entit\xE0 invisibili, i non-morti nascosti e le aure necromantiche."
    },
    {
      name: "Raggio di Indebolimento",
      level: 2,
      className: "Necromante",
      duration: "1 turno",
      range: "12 m",
      description: "Un raggio oscuro indebolisce il bersaglio, dimezzando i suoi danni per la durata se fallisce il TS."
    },
    {
      name: "Animare i Morti Minore",
      level: 2,
      className: "Necromante",
      duration: "Permanente",
      range: "3 m",
      description: "Anima frammenti di ossa o piccoli animali morti come servitori."
    },
    {
      name: "Lingua dei Morti",
      level: 2,
      className: "Necromante",
      duration: "1 turno",
      range: "Tocco",
      description: "Permette di interrogare un cadavere per ottenere 1d3 risposte veritiere."
    },
    {
      name: "Animare i Morti",
      level: 3,
      className: "Necromante",
      duration: "Permanente",
      range: "3 m",
      description: "Anima scheletri e zombi in numero proporzionale al livello del necromante."
    },
    {
      name: "Tocco del Vampiro",
      level: 3,
      className: "Necromante",
      duration: "Istantaneo",
      range: "Tocco",
      description: "Infligge 1d6 danni per ogni 2 livelli dell'utilizzatore, curando lo stesso di un pari ammontare."
    },
    {
      name: "Nube Malefica",
      level: 4,
      className: "Necromante",
      duration: "1 turno",
      range: "18 m",
      description: "Evoca una nube velenosa in un'area 6x6 m. Le creature al suo interno devono superare un TS Evocazione ogni round o subiscono danni."
    },
    {
      name: "Contagio",
      level: 4,
      className: "Necromante",
      duration: "Permanente",
      range: "Tocco",
      description: "Affligge il bersaglio con una grave malattia magica, limitando le sue capacit\xE0 se fallisce il TS."
    },
    {
      name: "Evoca Spettro",
      level: 5,
      className: "Necromante",
      duration: "1 turno / livello",
      range: "3 m",
      description: "Evoca uno spettro fedele ma ribelle. Al termine della durata attacca chiunque."
    },
    {
      name: "Nube Mortale",
      level: 5,
      className: "Necromante",
      duration: "1 turno",
      range: "18 m",
      description: "Una nube velenosa si muove per 3m a round. Creature con meno di 5 DV appassiscono ed evaporano fallendo il TS."
    },
    {
      name: "Incantesimo della Morte",
      level: 6,
      className: "Necromante",
      duration: "Istantaneo",
      range: "18 m",
      description: "Uccide istantaneamente fino a 4d8 DV di creature all'interno dell'area di effetto."
    },
    {
      name: "Parola della Morte",
      level: 6,
      className: "Necromante",
      duration: "Istantaneo",
      range: "9 m",
      description: "Un bersaglio con fino a 60 PF cade morto sul colpo. I non-morti vengono distrutti."
    }
  ];

  // src/lib/ose-spells.ts
  var DRUID_SPELL_DETAILS = [
    {
      name: "Amicizia con gli Animali",
      level: 1,
      className: "Druido",
      duration: "Permanente",
      range: "3 m",
      description: "L\u2019utilizzatore si avvicina a una bestia di intelligenza animale e allineamento Neutrale con del cibo invitante. L\u2019animale deve effettuare un tiro salvezza contro incantesimi:\nSe supera il tiro salvezza: non \xE8 influenzato dall\u2019incantesimo e si comporta normalmente.\nSe fallisce il tiro salvezza: aspetta tranquillamente mentre l\u2019utilizzatore completa un rituale di vincolo che dura 6 turni. Quando \xE8 stato vincolato l\u2019animale si comporta come segue:\n\u2022 Accompagna l\u2019utilizzatore ovunque esso vada.\n\u2022 Se abbandonato non far\xE0 del male all\u2019utilizzatore; se viene lasciato solo per pi\xF9 di 3 giorni durante i primi 3 mesi, l\u2019animale ritorna al suo comportamento naturale e l\u2019incantesimo termina.\n\u2022 Addestramento: durante i primi 3 mesi, l\u2019animale pu\xF2 essere addestrato a eseguire fino a sei semplici trucchi, richiedendo 1 settimana di addestramento per ciascuno.\nNumero massimo di compagni animali: fino a 2 DV per livello dell\u2019utilizzatore in qualsiasi momento."
    },
    {
      name: "Fuoco Fatato",
      level: 1,
      className: "Druido",
      duration: "1 turno",
      range: "18 m",
      description: "Le creature o oggetti selezionati entro gittata sono evidenziati da una tremolante fiamma verde.\nBersagli: devono essere percepibili o individuabili dall\u2019utilizzatore.\nDimensioni dei bersagli: < 5\xB0 livello = 1 bersaglio taglia umana; dal 5\xB0 = 2 bersagli o uno alto 3m; dal 10\xB0 = 3 bersagli o uno 4,5m; dal 14\xB0 = 4 bersagli o uno 6m.\nInoffensivo: non infligge danno.\nContrasta l\u2019invisibilit\xE0: rende visibili i bersagli invisibili.\nIn condizioni di luce scarsa: tiri per colpire contro i bersagli hanno un bonus di +2."
    },
    {
      name: "Individuazione del Pericolo",
      level: 1,
      className: "Druido",
      duration: "3 turni (6 all\u2019aperto)",
      range: "1,5 m per livello",
      description: "L\u2019utilizzatore pu\xF2 concentrarsi per rilevare il pericolo entro gittata.\nAree: controllarne una di 3x3 m richiede 1 turno.\nCreature: controllarne una richiede 1 round.\nOggetti: controllarne uno piccolo richiede 1 round. Per oggetti pi\xF9 grandi serve pi\xF9 tempo.\nDopo aver controllato: l\u2019utilizzatore sa se l\u2019area, creatura o oggetto costituisce un pericolo per la sua persona (immediato o potenziale)."
    },
    {
      name: "Intralciare",
      level: 1,
      className: "Druido",
      duration: "1 turno",
      range: "24 m",
      description: "Tutte le piante in un\u2019area con 6 m di raggio entro gittata si piegano e aggrovigliano, intralciando le creature al suo interno. Tiro salvezza contro incantesimi per ogni creatura:\nFallito: creatura intralciata e non pu\xF2 muoversi.\nSuperato: si muove a met\xE0 del movimento."
    },
    {
      name: "Invisibilit\xE0 agli Animali",
      level: 1,
      className: "Druido",
      duration: "1 turno",
      range: "L\u2019utilizzatore o una creatura",
      description: "Rende il soggetto impercettibile a tutti i sensi (olfatto, vista, udito) degli animali non magici, permettendo di muoversi inosservati."
    },
    {
      name: "Localizzare Piante o Animali",
      level: 1,
      className: "Druido",
      duration: "6 turni",
      range: "36 m",
      description: "Percepisce la direzione (ma non la distanza) di una pianta o animale non magico:\n1. Nominare una specie: localizza l'esemplare pi\xF9 vicino.\n2. Individuo specifico: localizza una specifica pianta o animale ben visualizzato in mente."
    },
    {
      name: "Parlare con gli Animali",
      level: 1,
      className: "Druido",
      duration: "6 turni",
      range: "9 m",
      description: "L\u2019utilizzatore pu\xF2 comunicare con un tipo di animale presente.\nTipo di animale: normali o giganti (no magici/fantastici).\nServizi: animali amichevoli possono essere persuasi ad aiutarlo in compiti alla loro portata."
    },
    {
      name: "Predire il Tempo",
      level: 1,
      className: "Druido",
      duration: "Istantaneo",
      range: "1,5 km di diametro / livello",
      description: "L\u2019utilizzatore acquisisce una conoscenza accurata del tempo atmosferico entro gittata per le successive 12 ore."
    },
    {
      name: "Creazione dell\u2019Acqua",
      level: 2,
      className: "Druido",
      duration: "Permanente",
      range: "Tocco",
      description: "Fa zampillare una fonte magica.\nVolume: ~200 litri (12 persone e 12 cavalcature per 1 giorno).\nLivelli pi\xF9 alti: dopo l'8\xB0 livello, per ogni livello aumenta acqua per altre 12 persone e cavalcature."
    },
    {
      name: "Cura Ferite Leggere",
      level: 2,
      className: "Druido",
      duration: "Istantaneo",
      range: "L\u2019utilizzatore o tocco",
      description: "Ripristina 1d6+1 punti ferita (fino al massimo) OPPURE cura la paralisi.\nInvertito (Infliggi Ferite Leggere): Infligge 1d6+1 danni (richiede colpire in mischia)."
    },
    {
      name: "Foschia Oscurante",
      level: 2,
      className: "Druido",
      duration: "1 turno per livello",
      range: "3 m per livello",
      description: "Nube di vapore (alta 3 m) attorno all'utilizzatore blocca vista normale e infravisione. L'utilizzatore vede flebilmente. Vento forte riduce la durata a 1/4."
    },
    {
      name: "Pelle Coriacea",
      level: 2,
      className: "Druido",
      duration: "1 turno per livello",
      range: "L\u2019utilizzatore o tocco",
      description: "Resistente come corteccia: Bonus alla CA di +1 e bonus ai TS di +1 (eccetto TS magia)."
    },
    {
      name: "Produrre Fiamma",
      level: 2,
      className: "Druido",
      duration: "2 turni per livello",
      range: "L\u2019utilizzatore",
      description: "Fiamma sul palmo che non danneggia l'utilizzatore, illumina a 9m e accende oggetti infiammabili. Pu\xF2 essere nascosta o lanciata fino a 9m (che termina l'incantesimo)."
    },
    {
      name: "Rallenta Veleno",
      level: 2,
      className: "Druido",
      duration: "1 ora per livello",
      range: "L\u2019utilizzatore o tocco",
      description: "Veleni rallentati a 1pf a turno. Ferma il danno a 1pf residuo. Rianima uccisi dal veleno se lanciato entro 1 turno/liv dalla morte. Offre 10%/livello di conoscere un antidoto naturale. Al termine, il veleno ha pienamente effetto."
    },
    {
      name: "Riscaldare il Metallo",
      level: 2,
      className: "Druido",
      duration: "7 round",
      range: "9 m",
      description: "Riscalda a temperature estreme il metallo per 1 soggetto ogni 2 livelli dell'utilizzatore. Infligge 1d3 o 1d6 in round successivi a chi lo tocca. Spegnibile in acqua/neve."
    },
    {
      name: "Torci Legno",
      level: 2,
      className: "Druido",
      duration: "Permanente",
      range: "72 m",
      description: "Oggetti in legno si deformano (taglia: 1 freccia/livello). Lance/bacchette valgono 2 frecce; archi/bastoni 4. Armi magiche hanno 10% di non farsi torcere per bonus (10% un'arma +1)."
    },
    {
      name: "Blocca Animali",
      level: 3,
      className: "Druido",
      duration: "1 turno per livello",
      range: "54 m",
      description: "Paralisi per animali (fino a 1 DV di animali per livello utilizzatore). TS nega. Non funziona su animali magici, intelligenti o fantastici."
    },
    {
      name: "Crescita della Natura",
      level: 3,
      className: "Druido",
      duration: "12 turni / Permanente",
      range: "36 m",
      description: "Crescita animale (raddoppia taglia, danno, trasporto per 12 turni) o Crescita vegetale (foreste/rovine permanenti su 300 mq resi densamente spinosi)."
    },
    {
      name: "Evoca Fulmini",
      level: 3,
      className: "Druido",
      duration: "1 turno per livello",
      range: "108 m",
      description: "Se ci sono nubi temporalesche, controlla fulmini (1 per turno, raggio 3m, 8d6 danni, TS dimezza). Finisce se si dissipa il temporale."
    },
    {
      name: "Forma Arborea",
      level: 3,
      className: "Druido",
      duration: "6 turni +1/liv",
      range: "L\u2019utilizzatore",
      description: "Si trasforma in albero (forma, vestiti ed equipaggiamento inclusi). Sensi normali attivi. Annullabile a piacere."
    },
    {
      name: "Protezione dal Veleno",
      level: 3,
      className: "Druido",
      duration: "1 turno per livello",
      range: "L\u2019utilizzatore o tocco",
      description: "Immunit\xE0 completa a veleni. TS contro soffi velenosi +4. Neutralizza veleni attivi."
    },
    {
      name: "Respirare Sott\u2019Acqua",
      level: 3,
      className: "Druido",
      duration: "1 giorno",
      range: "9 m",
      description: "Consente al soggetto di respirare in acqua. Non modifica il movimento in acqua. Invertito consente a creature acquatiche di respirare aria."
    },
    {
      name: "Controllo della Temperatura",
      level: 4,
      className: "Druido",
      duration: "1 turno per livello",
      range: "3 m intorno",
      description: "L'utilizzatore pu\xF2 alzare o abbassare la temperatura entro il raggio da freddo estremo a tropicale."
    },
    {
      name: "Cura Ferite Gravi",
      level: 4,
      className: "Druido",
      duration: "Istantaneo",
      range: "L\u2019utilizzatore o tocco",
      description: "Ripristina 2d6+2 pf (fino al max). Invertito: Infligge 2d6+2 (richiede attacco)."
    },
    {
      name: "Dissolvi Magie",
      level: 4,
      className: "Druido",
      duration: "Istantaneo",
      range: "36 m",
      description: "Pone fine agli effetti di un incantesimo in area cubo 6m. TS automatico se di pari/inferiore livello, se superiore c'\xE8 5% possibilit\xE0 a livello di non dissipare."
    },
    {
      name: "Parlare con le Piante",
      level: 4,
      className: "Druido",
      duration: "3 turni",
      range: "9 m",
      description: "Comunicazione con comuni piante per semplici favori (sgomberare), o mostri simili a pianta."
    },
    {
      name: "Protezione da Fuoco e Fulmine",
      level: 4,
      className: "Druido",
      duration: "1 turno per livello",
      range: "L\u2019utilizzatore o tocco",
      description: "Immunit\xE0 da scegliere tra fulmine o fuoco. Protegge assorbendo fino a 6pf danni per livello utilizzatore, poi svanisce."
    },
    {
      name: "Richiama Animali",
      level: 4,
      className: "Druido",
      duration: "3 turni",
      range: "108 m",
      description: "Richiama animali normali entro gittata non intelligenti. Fino a DV totali pari a lv utilizzatore. Seguono ordini e agiscono per proteggerlo finch\xE9 non scappano."
    },
    {
      name: "Comunicare con la Natura",
      level: 5,
      className: "Druido",
      duration: "1 turno per livello",
      range: "750 m per livello",
      description: "Trance: in 1 turno apprende info su terreni, minerali, popoli e altro. (Non funziona se sottoterra/non naturale)."
    },
    {
      name: "Controllo del Tempo Atmosferico",
      level: 5,
      className: "Druido",
      duration: "Concentrazione",
      range: "240 m intorno",
      description: "Tramite concentrazione, manifesta condizioni: calma, caldo estremo, nebbia (6m vista), venti, pioggia, neve o Tornado."
    },
    {
      name: "Muro di Spine",
      level: 5,
      className: "Druido",
      duration: "1 turno per livello",
      range: "24 m",
      description: "Sino a 120mq spinosi evitati. Coloro nel punto evoca subiscono 1d8+CA, chi lo taglia spende turni e subisce 1d8+CA danni. Fuoco magico brucer\xE0 in 2 turni."
    },
    {
      name: "Passa-Piante",
      level: 5,
      className: "Druido",
      duration: "Istantaneo",
      range: "L\u2019utilizzatore",
      description: "Passa da un tronco ed esce da un albero della stessa specie in range limitato da specie: da Quercia (600m) a alberi generici (240m)."
    },
    {
      name: "Protezione da Piante e Animali",
      level: 5,
      className: "Druido",
      duration: "1 turno per livello",
      range: "L\u2019utilizzatore",
      description: "Barriera invisibile repelle contatto pianta o animale (a scelta fra i 2). Il soggetto non pu\xF2 attaccarlo, chi l'ha invocata lancia incantesimo solo via distanza."
    },
    {
      name: "Trasforma Roccia in Fango",
      level: 5,
      className: "Druido",
      duration: "3d6 giorni",
      range: "36 m",
      description: "Area roccia 300mq profonda 3m diventano denso fango. Diminuisce velocit\xE0 10%. Invertito torna da Fango a Roccia."
    }
  ];
  var ALL_SPELL_DETAILS = [
    ...DRUID_SPELL_DETAILS,
    ...ILLUSIONIST_SPELL_DETAILS,
    ...MAGIC_USER_SPELL_DETAILS,
    ...NECROMANCER_SPELL_DETAILS
  ];
  Object.entries(CLERIC_SPELLS).forEach(([level, spells]) => {
    spells.forEach((spell) => {
      if (!ALL_SPELL_DETAILS.find((s) => s.name === spell && s.className === "Chierico")) {
        ALL_SPELL_DETAILS.push({
          name: spell,
          level: Number(level),
          className: "Chierico",
          description: "Descrizione non disponibile"
        });
      }
    });
  });

  // src/lib/magic-items-data.ts
  var MAGIC_ITEM_CATEGORIES = [
    { name: "Anelli", chance: [1, 5] },
    { name: "Armi", chance: [6, 10] },
    { name: "Armature e Scudi", chance: [11, 20] },
    { name: "Bacchette, Bastoni e Verghe", chance: [21, 25] },
    { name: "Oggetti Misti", chance: [26, 30] },
    { name: "Pergamene e Mappe", chance: [31, 60] },
    { name: "Pozioni", chance: [61, 80] },
    { name: "Spade", chance: [81, 100] }
  ];
  var MAGIC_ITEMS = [
    // Anelli
    { name: "Anello Accumula Incantesimi", category: "Anelli", description: "Conserva 1d6 incantesimi. Chi lo indossa pu\xF2 lanciare gli incantesimi accumulati senza componenti materiali." },
    { name: "Anello del Camminare sull'Acqua", category: "Anelli", description: "Permette a chi lo indossa di camminare sui liquidi (acqua, olio, acido, ecc.) senza affondare, come se fosse terreno solido." },
    { name: "Anello di Controllo degli Animali", category: "Anelli", description: "Permette di controllare 1d6 animali normali o 1 animale gigante entro la visuale." },
    { name: "Anello di Controllo delle Piante", category: "Anelli", description: "Permette di controllare tutte le piante normali e i mostri vegetali entro 3 metri di raggio fino a 18m di distanza." },
    { name: "Anello di Controllo degli Umani", category: "Anelli", description: "Permette di affascinare umani come l'incantesimo Charme su Persone per un massimo di 6 DV totali di creature." },
    { name: "Anello della Debolezza", category: "Anelli", description: "Maledetto. Riduce la Forza a 3. Pu\xF2 essere rimosso solo con Rimuovi Maledizione." },
    { name: "Anello dei Desideri", category: "Anelli", description: "Contiene 1d4 cariche. Ogni carica permette di esprimere un desiderio che altera in qualche modo la realt\xE0." },
    { name: "Anello di Evocazione del Jinn", category: "Anelli", description: "Permette di evocare un Jinn che servir\xE0 l'evocatore per 24 ore. L'anello funziona solo una volta." },
    { name: "Anello dell'Inganno", category: "Anelli", description: "Maledetto. Chi lo indossa \xE8 convinto di possedere un altro tipo di anello magico (es. Protezione) e la maledizione crea l'illusione che funzioni." },
    { name: "Anello di Invisibilit\xE0", category: "Anelli", description: "Rende invisibile il portatore come l'omonimo incantesimo finch\xE9 non attacca o lancia una magia." },
    { name: "Anello di Protezione nel Raggio di 1,5 Metri", category: "Anelli", description: "Fornisce un bonus di +1 alla Classe Armatura e ai Tiri Salvezza a chi lo indossa e a tutti gli alleati entro 1,5 m (1,5m di raggio)." },
    { name: "Anello di Protezione +1", category: "Anelli", description: "Fornisce un bonus di +1 alla Classe Armatura e ai Tiri Salvezza di chi lo indossa." },
    { name: "Anello di Resistenza al Fuoco", category: "Anelli", description: "Garantisce immunit\xE0 al fuoco normale.+2 ai TS contro fuoco magico e danni ridotti di 1 per ogni dado." },
    { name: "Anello Rifletti Incantesimi", category: "Anelli", description: "Respinge 2d6 attacchi magici o incantesimi (divini e arcani) rispedendoli sull'incantatore originale." },
    { name: "Anello di Rigenerazione", category: "Anelli", description: "Il personaggio recupera 1 pf per round. A lungo termine rigenera gli arti perduti. I danni da fuoco e acido non possono essere rigenerati in questo modo." },
    { name: "Anello di Telecinesi", category: "Anelli", description: "Consente di muovere oggetti col pensiero fino a un peso di 2.000 monete a una distanza massima di 36 metri." },
    { name: "Anello della Vista a Raggi X", category: "Anelli", description: "Permette di vedere attraverso il legno e le rocce e metalli di un certo spessore." },
    // Armature e Scudi
    { name: "Armatura +1", category: "Armature e Scudi", description: "Bonus magico di +1 alla normale CA dell'armatura (es. Cuoio +1 d\xE0 CA 6)." },
    { name: "Armatura +2", category: "Armature e Scudi", description: "Bonus magico di +2 alla normale CA dell'armatura." },
    { name: "Armatura +3", category: "Armature e Scudi", description: "Bonus magico di +3 alla normale CA dell'armatura." },
    { name: "Scudo +1", category: "Armature e Scudi", description: "Bonus magico di +1. Assieme al normale -1 alla CA per lo scudo, migliora la CA di 2 punti totali." },
    { name: "Scudo +2", category: "Armature e Scudi", description: "Bonus magico di +2. Migliora la CA di 3 punti totali." },
    { name: "Scudo +3", category: "Armature e Scudi", description: "Bonus magico di +3. Migliora la CA di 4 punti totali." },
    { name: "Armatura Maledetta -1", category: "Armature e Scudi", description: "Fornisce una penalit\xE0 di -1 alla CA ed \xE8 impossibile togliersela senza magia." },
    { name: "Armatura Maledetta CA 9 [10]", category: "Armature e Scudi", description: "Forza istantaneamente la CA a 9 (o 10 asc) ed \xE8 impossibile togliersela senza magia." },
    // Armi
    { name: "Arco +1", category: "Armi", description: "Arco magico. Fornisce un bonus di +1 sia ai tiri per colpire che ai danni per chi lo usa." },
    { name: "Ascia +1", category: "Armi", description: "Ascia da Battaglia o Ascia in mischia, +1 per colpire e ai danni." },
    { name: "Balestra +1, della Distanza", category: "Armi", description: "Balestra magica (+1 per colpire e danni) che possiede distanze e gittate doppie rispetto alla norma." },
    { name: "Balestra +1, della Velocit\xE0", category: "Armi", description: "Balestra magica (+1) in grado di sparare automaticamente a ogni round e attacca per prima ottenendo iniziativa." },
    { name: "Giavellotto del Fulmine", category: "Armi", description: "Un giavellotto infuso che quando viene lanciato si trasforma in un fulmine (danni 1d6 x livello di chi lo usa sino a max limitati)." },
    { name: "Martello da Guerra +3, delle Saette", category: "Armi", description: "Funziona al 100% solo in possesso di un campione (FOR 18). Se tirato fa danni ingenti come le saette (fino a 2d6+3 o pi\xF9)." },
    { name: "Martello da Guerra Nanico Ritornante +3", category: "Armi", description: "Bonus di +3 per colpire/danni. In mano a un nano da poter essere scagliato tornando automaticamente nella sua mano e copre doppio raggio." },
    { name: "Mazza +1, Disgregatrice", category: "Armi", description: "Mazza magica. Se usata contro i non-morti deve fare superare a costoro un TS contro Morte o vengono distrutti istantaneamente all'urto." },
    { name: "Pugnale +1, Velenoso", category: "Armi", description: "Pugnale +1 in mischia ma con bonus ulteriore per ferire, la lama stilla una tossina mortale in grado di uccidere o fiaccare l\u2019avversario." },
    { name: "Tridente +1, della Resa", category: "Armi", description: "Le creature trafitte devono effettuare una prova di morale con penalit\xE0 -1 per ogni successo prima. Se il test fallisce si arrendono." },
    // Spade
    { name: "Spada +1", category: "Spade", description: "Spada magica (+1 Colpire/Danni). Emette debole luce a richiesta o ha poteri basici a caso." },
    { name: "Spada +2", category: "Spade", description: "Spada magica (+2 Colpire/Danni)." },
    { name: "Spada +3", category: "Spade", description: "Superba e temibile (+3 Colpire/Danni)." },
    { name: "Spada -1, Berserker", category: "Spade", description: "Maledetta (-1 Colpire/Danni). Chi la impugna in battaglia non pu\xF2 distinguere tra amico e nemico, deve attaccare l'individuo pi\xF9 vicino finch\xE9 tutti muoiono." },
    { name: "Spada +1, Affilata", category: "Spade", description: "Spada capace di recidere arti. Contro la maggior parte dei nemici fa doppio danno o su un tiro naturale di 18-20 provoca amputazioni letali se il sistema le prevede." },
    { name: "Spada +1, Ammazzadraghi", category: "Spade", description: "Fornisce bonus normale, ma contro i draghi offre +3 Colpire/Danni e raddoppia/triplica i danni inflitti." },
    { name: "Spada +1, Fiammeggiante", category: "Spade", description: "Pu\xF2 essere incendiata a comando. Contro nemici sensibili al fuoco come i Non-morti conferisce bonus +2 o +3." },
    { name: "Spada +1, Lama del Sole", category: "Spade", description: "Brilla come pura luce solare, spazzando via magie di oscurit\xE0." },
    { name: "Spada +1, Risucchio di Energia", category: "Spade", description: "Ogni colpo ha una chance di risucchiare Livelli o DV (1d4 danni massicci permanenti e curativi sul portatore)." },
    { name: "Spada +2, Danzante", category: "Spade", description: "Dopo 1 turno di combattimento chi la utilizza la pu\xF2 far sfoderare magica e lei danzer\xE0 infliggendo in mischia e autonomamente danni +2 al pari dell'eroe." },
    // Bacchette
    { name: "Bacchetta dei Dardi Incantati", category: "Bacchette, Bastoni e Verghe", description: "Ha solitamente 2d10 cariche, casta 1 Dardo Incantato." },
    { name: "Bacchetta delle Illusioni", category: "Bacchette, Bastoni e Verghe", description: "Crea un'illusione complessa (come Forza Illusoria). Ha 2d10 cariche." },
    { name: "Bacchetta della Metamorfosi", category: "Bacchette, Bastoni e Verghe", description: "Metamorfizza bersagli (Metamorfosi Altrui) previo tiro salvezza." },
    { name: "Bastone del Comando", category: "Bacchette, Bastoni e Verghe", description: "Consente il dominio su animali e persone entro la visuale limitatamente a DV specifici." },
    { name: "Bastone della Stregoneria", category: "Bacchette, Bastoni e Verghe", description: "Per uso esclusivo di classi del Mago, un bastone onnipotente carico di vortici ed elementi elementali con 2d10 cariche massime." },
    { name: "Bastone del Guaritore", category: "Bacchette, Bastoni e Verghe", description: "Usato da chierici, capace di risanare un ingente quantitativo di danni o una malattia, con limite giornaliero o di carica." },
    { name: "Verga della Resurrezione", category: "Bacchette, Bastoni e Verghe", description: "Riporta in vita personaggi deceduti, utilizzando un certo numero di cariche." },
    // Pergamene e Mappe
    { name: "Pergamena 1 Incantesimo", category: "Pergamene e Mappe", description: "Contiene 1 incantesimo magico divino o arcano (livello casuale da 1 a 3)." },
    { name: "Pergamena 3 Incantesimi", category: "Pergamene e Mappe", description: "Contiene 3 incantesimi divini o arcani disposti su un unico rotolo." },
    { name: "Mappa del Tesoro", category: "Pergamene e Mappe", description: "Mappa parzialmente indecifrabile per un tesoro o tesoro magico in un dungeon lontano e nascosto." },
    { name: "Pergamena Maledetta", category: "Pergamene e Mappe", description: "Infligge danni letali, perdite di livello/caratteristica o l'effetto 'Scagliare Maledizione' istantaneamente alla lettura." },
    { name: "Protezione dai Non-Morti", category: "Pergamene e Mappe", description: "Genera un cerchio protettivo contro i non morti dal diametro da tre metri (6 turni). I non-morti restano all'esterno del cerchio." },
    // Pozioni
    { name: "Pozione di Guarigione", category: "Pozioni", description: "Una volta inghiottita cura istantaneamente 1d6+1 Pf di danno e guarisce da effetti velenosi stordenti (oppure ferma le paralisi)." },
    { name: "Pozione di Invisibilit\xE0", category: "Pozioni", description: "L'eroe permane invisibile sino a che si scontra e attacca, proprio per il classico incantesimo Mago omonimo. Dura in genere qualche ora se non aggredisce." },
    { name: "Pozione di Velocit\xE0", category: "Pozioni", description: "L'utilizzatore \xE8 in status velocit\xE0 ottenendo vantaggi nell'attacco in successione al proprio, movente a velocit\xE0 raddoppiata (1 ora)." },
    { name: "Pozione di Eroismo", category: "Pozioni", description: "Permette in mischia attacchi e Tiri Salvezza pi\xF9 performanti ai personaggi bassi di livello garantendone potenziamento momentaneo fino ad 1 ora in forma simulante a un veterano." },
    { name: "Pozione di Veleno", category: "Pozioni", description: "Maledizione mortale a chi incautamente od in errore ingoia le viscere contenutistiche provocando malus, paralisi, o morte per esito di tiro salvezza Veleni." },
    // Oggetti misti
    { name: "Amuleto Contro i Non-Morti", category: "Oggetti Misti", description: "Aiuta i viventi entro una data portata contro lo Scacciare offrendo un +2 sul turno e -2 al male o li ferma per un breve frangente qualora scagliati addosso o proposti al petto in sacralit\xE0." },
    { name: "Borsa Conservante", category: "Oggetti Misti", description: "Un grosso fodero per tenere tesori grandi dove all'interno esiste capienza inter-dimensionale ove le monete non pesano per un massimale inestimabile capienza 10mila mp limitandosi al solo kg esteriore." },
    { name: "Buco Portatile", category: "Oggetti Misti", description: "Tale fazzoletto, una volta disteso a pavimento sfonda interspazio a gravit\xE0 nulla con volumetria del buco per nascondiglio sicurissimo od incameramento bottini in sicurezza." },
    { name: "Caraffa dell'Acqua Infinita", category: "Oggetti Misti", description: "Al comando l'orcio fa sgorgare pura acqua fresca potabile in litri limitati a piacere del richiedente fin a colmar l'area e ricaricando ad libitum." },
    { name: "Collana delle Palle di Fuoco", category: "Oggetti Misti", description: "Le 3 fiammate per ciascuna pallina dorata scagliabile fanno l'effetto identico a magici colpi a grand' raggio per l'incanto (Palla Fuoco)." },
    { name: "Mazzo delle Tante Cose", category: "Oggetti Misti", description: "Sfidare la sorte alle carte porta pescate definitive sui personaggi tra exp immense, tesori infiniti, morti sbalzate o anime strappate ad un demone infernale." },
    { name: "Tappeto Volante", category: "Oggetti Misti", description: "Solleva da terra tre avventurieri muovendosi a velocit\xE0 alte." },
    { name: "Polvere della Sparizione", category: "Oggetti Misti", description: "Difficile rinvenire la scia della polvere che butta celatamente i toccati non rinvenendosi con le vere scoperte ordinarie per magiche durate prolisse (svariati turni)." },
    { name: "Specchio Imprigionante", category: "Oggetti Misti", description: "Specchiandovisi a lungo, il bersaglio vi ci resta letteralmente cadendovi al varco tra dimensioni confinate dove vi dimora sino al prossimo distrutto che spezzer\xE0 in toto lo schermo." }
  ];
  var getRandomMagicItem = (category = "Tutte") => {
    let selectedCategory = category;
    if (selectedCategory === "Tutte") {
      const roll = Math.floor(Math.random() * 100) + 1;
      for (const cat of MAGIC_ITEM_CATEGORIES) {
        if (roll >= cat.chance[0] && roll <= cat.chance[1]) {
          selectedCategory = cat.name;
          break;
        }
      }
    }
    const itemsInCategory = MAGIC_ITEMS.filter((it) => it.category === selectedCategory);
    if (itemsInCategory.length === 0)
      return MAGIC_ITEMS[0];
    const randomIndex = Math.floor(Math.random() * itemsInCategory.length);
    return itemsInCategory[randomIndex];
  };

  // src/main.ts
  var state = {
    activeTab: "character",
    character: {
      id: crypto.randomUUID(),
      name: "Eroe senza nome",
      race: "Umano",
      class: "Guerriero",
      level: 1,
      alignment: "Neutrale",
      stats: { str: 10, int: 10, wis: 10, dex: 10, con: 10, cha: 10 },
      hp: 8,
      armor: "Cotta di maglia",
      shield: true,
      weapon1: "Spada lunga",
      weapon2: "Pugnale",
      equipment: "Zaino, Razioni (7 giorni)",
      notes: "",
      spells: [],
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    characterArchive: JSON.parse(localStorage.getItem("ose_archive") || "[]"),
    statsConfig: {
      totalPoints: 72,
      count: 1,
      statsCount: 6,
      minValue: 8,
      maxValue: 16,
      powerProfile: "normal",
      varianceProfile: "high",
      mode: "sum",
      seed: null,
      customString: ""
    },
    generatedStats: [],
    spellClassFilter: "Mago",
    notifications: []
  };
  var CLASSES = Object.keys(CLASS_DATA);
  var ALIGNMENTS = ["Legale", "Neutrale", "Caotico"];
  (0, import_jquery.default)(function() {
    initApp();
  });
  function initApp() {
    renderUI();
    bindEvents();
    renderTabContent();
    (0, import_lucide.createIcons)({ icons: import_lucide.icons });
  }
  function renderUI() {
    const appHtml = `
        <div class="min-h-screen bg-stone-100 text-stone-900 font-sans">
            <!-- Header -->
            <header class="bg-stone-900 text-stone-50 shadow-lg sticky top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center py-4">
                        <div class="flex items-center gap-3">
                            <div class="bg-stone-800 border border-stone-700 p-2 rounded-lg">
                                <i data-lucide="dice-6" class="w-8 h-8 text-rose-500"></i>
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold tracking-tight text-stone-50">OSE GENERATOR</h1>
                                <p class="text-[10px] text-stone-400 font-bold uppercase tracking-widest leading-none">DM Tools & Character Creator</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Tabs -->
                <div class="bg-stone-800 border-b border-stone-700 overflow-x-auto no-scrollbar">
                    <div class="max-w-7xl mx-auto px-4 flex" id="tabs-container">
                        <button data-tab="stats" class="tab-btn flex items-center gap-2 px-4 py-3 font-bold transition-all border-b-2 whitespace-nowrap border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-700">
                            <i data-lucide="dice-6" class="w-5 h-5"></i> Statistiche
                        </button>
                        <button data-tab="character" class="tab-btn flex items-center gap-2 px-4 py-3 font-bold transition-all border-b-2 whitespace-nowrap border-purple-500 text-purple-300 bg-stone-900">
                            <i data-lucide="user" class="w-5 h-5"></i> Personaggio
                        </button>
                        <button data-tab="spells" class="tab-btn flex items-center gap-2 px-4 py-3 font-bold transition-all border-b-2 whitespace-nowrap border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-700">
                            <i data-lucide="wand-2" class="w-5 h-5"></i> Incantesimi
                        </button>
                        <button data-tab="magicItems" class="tab-btn flex items-center gap-2 px-4 py-3 font-bold transition-all border-b-2 whitespace-nowrap border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-700">
                            <i data-lucide="gem" class="w-5 h-5"></i> Oggetti Magici
                        </button>
                    </div>
                </div>
            </header>

            <!-- Main Content Area -->
            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="main-content">
                <!-- Content injected here -->
            </main>

            <footer class="bg-stone-900 text-stone-400 py-6 text-center text-xs mt-auto border-t border-stone-800">
                <div class="max-w-7xl mx-auto px-4">
                    <p class="font-bold mb-1">© 2026 RegolaZero. Di Marco Scaruffi.</p>
                    <p class="opacity-75">Old-School Essentials è un marchio registrato di Necrotic Gnome. Tutti i diritti riservati.</p>
                    <p class="opacity-75 mt-2">Nessun server richiesto. Funziona al 100% nel tuo browser (Vanilla).</p>
                </div>
            </footer>
        </div>
    `;
    (0, import_jquery.default)("#root").html(appHtml);
  }
  function bindEvents() {
    (0, import_jquery.default)(document).on("click", ".tab-btn", function() {
      const tab = (0, import_jquery.default)(this).data("tab");
      state.activeTab = tab;
      (0, import_jquery.default)(".tab-btn").removeClass("border-purple-500 text-purple-300 border-amber-500 text-amber-300 border-stone-400 text-stone-200 bg-stone-900 border-emerald-500 text-emerald-300 border-cyan-500 text-cyan-300");
      (0, import_jquery.default)(".tab-btn").addClass("border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-700");
      const activeClasses = {
        "character": "border-purple-500 text-purple-300 bg-stone-900",
        "stats": "border-stone-400 text-stone-200 bg-stone-900",
        "spells": "border-cyan-500 text-cyan-300 bg-stone-900",
        "magicItems": "border-amber-500 text-amber-300 bg-stone-900"
      };
      (0, import_jquery.default)(this).removeClass("border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-700").addClass(activeClasses[tab]);
      renderTabContent();
    });
    (0, import_jquery.default)(document).on("input", "#char-name", function() {
      state.character.name = (0, import_jquery.default)(this).val();
      (0, import_jquery.default)("#header-char-name").text(state.character.name || "Eroe senza nome");
    });
    (0, import_jquery.default)(document).on("change", "#char-class", function() {
      const newClass = (0, import_jquery.default)(this).val();
      state.character.class = newClass;
      state.character.spells = generateRandomSpells(newClass, state.character.level, Object.values(ALL_SPELL_DETAILS));
      renderCharacterTab();
    });
    (0, import_jquery.default)(document).on("change", "#char-level", function() {
      let val = parseInt((0, import_jquery.default)(this).val());
      if (!isNaN(val) && val > 0) {
        state.character.level = val;
        state.character.spells = generateRandomSpells(state.character.class, val, Object.values(ALL_SPELL_DETAILS));
        renderCharacterTab();
      }
    });
    (0, import_jquery.default)(document).on("change", "#char-alignment", function() {
      state.character.alignment = (0, import_jquery.default)(this).val();
      renderCharacterTab();
    });
    (0, import_jquery.default)(document).on("change", "#char-armor", function() {
      state.character.armor = (0, import_jquery.default)(this).val();
      renderCharacterTab();
    });
    (0, import_jquery.default)(document).on("change", "#char-shield", function() {
      state.character.shield = (0, import_jquery.default)(this).is(":checked");
      renderCharacterTab();
    });
    (0, import_jquery.default)(document).on("change", "#char-weapon1", function() {
      state.character.weapon1 = (0, import_jquery.default)(this).val();
    });
    (0, import_jquery.default)(document).on("change", "#char-weapon2", function() {
      state.character.weapon2 = (0, import_jquery.default)(this).val();
    });
    (0, import_jquery.default)(document).on("input", "#char-equip", function() {
      state.character.equipment = (0, import_jquery.default)(this).val();
    });
    (0, import_jquery.default)(document).on("blur", ".stat-input", function() {
      const stat = (0, import_jquery.default)(this).data("stat");
      let val = parseInt((0, import_jquery.default)(this).val());
      if (isNaN(val))
        val = 10;
      state.character.stats[stat] = val;
      renderCharacterTab();
    });
    (0, import_jquery.default)(document).on("click", ".btn-generate-stats", function() {
      rollRandomCharacter();
    });
    (0, import_jquery.default)(document).on("click", ".btn-save-char", function() {
      saveCharacter();
    });
    (0, import_jquery.default)(document).on("click", ".btn-delete-char", function() {
      const id = (0, import_jquery.default)(this).data("id");
      state.characterArchive = state.characterArchive.filter((c) => c.id !== id);
      localStorage.setItem("ose_archive", JSON.stringify(state.characterArchive));
      renderCharacterTab();
    });
    (0, import_jquery.default)(document).on("click", ".btn-load-char", function() {
      const id = (0, import_jquery.default)(this).data("id");
      const char = state.characterArchive.find((c) => c.id === id);
      if (char) {
        state.character = __spreadValues({}, char);
        renderCharacterTab();
      }
    });
  }
  function renderTabContent() {
    const $main = (0, import_jquery.default)("#main-content");
    $main.empty();
    if (state.activeTab === "character") {
      renderCharacterTab();
    } else if (state.activeTab === "stats") {
      renderStatsTab();
    } else if (state.activeTab === "spells") {
      renderSpellsTab();
    } else if (state.activeTab === "magicItems") {
      renderMagicItemsTab();
    }
    (0, import_lucide.createIcons)({ icons: import_lucide.icons });
  }
  function getModifier(val) {
    if (val <= 3)
      return -3;
    if (val <= 5)
      return -2;
    if (val <= 8)
      return -1;
    if (val <= 12)
      return 0;
    if (val <= 15)
      return 1;
    if (val <= 17)
      return 2;
    return 3;
  }
  function getAC() {
    const armorData = ARMORS.find((a) => a.label === state.character.armor) || ARMORS[0];
    let ac = armorData.ac;
    if (state.character.shield)
      ac -= 1;
    ac -= getModifier(state.character.stats.dex);
    return Math.max(-3, ac);
  }
  function getSaves() {
    const classInfo = CLASS_DATA[state.character.class] || CLASS_DATA["Guerriero"];
    const levelInfo = classInfo.tables[state.character.level] || classInfo.tables[1];
    return levelInfo.saves || { d: 12, w: 13, p: 14, b: 15, s: 16 };
  }
  function getDerived() {
    const classInfo = CLASS_DATA[state.character.class] || CLASS_DATA["Guerriero"];
    const levelInfo = classInfo.tables[state.character.level] || classInfo.tables[1];
    const cStats = state.character.stats;
    const statsArr = [cStats.str, cStats.int, cStats.wis, cStats.dex, cStats.con, cStats.cha];
    return {
      xpBonus: getXpBonus(statsArr, classInfo.prime),
      openDoors: getOpenDoors(cStats.str),
      movement: getMovement(classInfo.movement, 0),
      thac0: levelInfo.thac0
    };
  }
  function roll3d62() {
    return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 3;
  }
  function rollRandomCharacter() {
    const s = [roll3d62(), roll3d62(), roll3d62(), roll3d62(), roll3d62(), roll3d62()];
    const className = state.character.class;
    const level = state.character.level;
    const classInfo = CLASS_DATA[className] || CLASS_DATA["Guerriero"];
    const equip = generateRandomEquipment(className, level);
    state.character.stats = {
      str: s[0],
      int: s[1],
      wis: s[2],
      dex: s[3],
      con: s[4],
      cha: s[5]
    };
    const hd = parseInt(classInfo.hd.split("d")[1]) || 8;
    const conMod = getModifier(s[4]);
    let totalHp = 0;
    for (let i = 1; i <= level; i++) {
      if (i <= 9) {
        let roll = i === 1 ? hd + conMod : Math.floor(Math.random() * hd) + 1 + conMod;
        if (roll < 1)
          roll = 1;
        totalHp += roll;
      } else {
        if (className === "Guerriero" || className === "Nano")
          totalHp += 2;
        else if (className === "Chierico" || className === "Elfo" || className === "Halfling")
          totalHp += 1;
        else
          totalHp += 1;
      }
    }
    state.character.hp = totalHp;
    state.character.armor = equip.armor;
    state.character.shield = equip.shield;
    state.character.weapon1 = equip.weapon1;
    state.character.weapon2 = equip.weapon2;
    state.character.equipment = equip.equipment;
    state.character.notes = classInfo.abilities.join(", ");
    state.character.spells = generateRandomSpells(className, level, Object.values(ALL_SPELL_DETAILS));
    renderCharacterTab();
  }
  function saveCharacter() {
    const exists = state.characterArchive.findIndex((c) => c.id === state.character.id);
    if (exists >= 0) {
      state.characterArchive[exists] = __spreadProps(__spreadValues({}, state.character), { updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    } else {
      state.characterArchive.unshift(__spreadProps(__spreadValues({}, state.character), { createdAt: (/* @__PURE__ */ new Date()).toISOString() }));
    }
    localStorage.setItem("ose_archive", JSON.stringify(state.characterArchive));
    renderCharacterTab();
  }
  function renderCharacterTab() {
    const derived = getDerived();
    const ac = getAC();
    const saves = getSaves();
    const cStats = state.character.stats;
    const classOptions = CLASSES.map((c) => `<option value="${c}" ${c === state.character.class ? "selected" : ""}>${c}</option>`).join("");
    const alignOptions = ALIGNMENTS.map((a) => `<option value="${a}" ${a === state.character.alignment ? "selected" : ""}>${a}</option>`).join("");
    const armorOptions = ARMORS.map((a) => `<option value="${a.label}" ${a.label === state.character.armor ? "selected" : ""}>${a.label} (CA ${a.ac})</option>`).join("");
    const weapon1Options = WEAPONS.map((w) => `<option value="${w.label}" ${w.label === state.character.weapon1 ? "selected" : ""}>${w.label} (${w.damage})</option>`).join("");
    const weapon2Options = WEAPONS.map((w) => `<option value="${w.label}" ${w.label === state.character.weapon2 ? "selected" : ""}>${w.label} (${w.damage})</option>`).join("");
    const archiveHtml = state.characterArchive.length === 0 ? '<p class="text-center text-gray-400 py-4 italic text-sm">Nessun eroe salvato</p>' : state.characterArchive.map((char) => `
            <div class="flex items-center justify-between p-2 mb-2 bg-gray-50 rounded-lg border hover:border-purple-300 transition-colors group">
                <div class="cursor-pointer flex-1 btn-load-char" data-id="${char.id}">
                    <h4 class="font-bold text-gray-800 text-sm">${char.name}</h4>
                    <p class="text-xs text-gray-500">${char.class} Liv. ${char.level}</p>
                </div>
                <button class="text-gray-400 hover:text-red-500 p-1 transition-opacity btn-delete-char" data-id="${char.id}">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `).join("");
    let statsCards = "";
    ["str", "int", "wis", "dex", "con", "cha"].forEach((key) => {
      const val = cStats[key];
      const mod = getModifier(val);
      const modColor = mod > 0 ? "text-green-600" : mod < 0 ? "text-red-600" : "text-gray-500";
      statsCards += `
            <div class="text-center bg-white border border-gray-300 rounded-xl p-3 shadow-sm">
                <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">${key}</div>
                <div class="flex items-center justify-center">
                    <input type="number" data-stat="${key}" value="${val}" class="stat-input w-16 text-center text-2xl font-black text-gray-900 bg-white outline-none border-b-2 border-transparent focus:border-purple-500" />
                </div>
                <div class="text-xs font-mono font-bold mt-1 ${modColor}">${mod >= 0 ? "+" + mod : mod}</div>
            </div>
        `;
    });
    const attackMatrixHtml = getAttackMatrix(derived.thac0).map((m) => `
        <div class="flex flex-col items-center border-r last:border-r-0 min-w-[28px] sm:min-w-[32px]">
            <div class="bg-gray-100 w-full text-center py-1 text-gray-500 border-b">${m.ac}</div>
            <div class="py-1 w-full text-center text-gray-900">${m.roll}</div>
        </div>
    `).join("");
    const html = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Sidebar Config -->
            <div class="lg:col-span-1 space-y-6">
                <!-- Editor Semplice -->
                <div class="bg-white rounded-xl shadow-sm border border-stone-200 border-t-4 border-t-purple-500">
                    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center gap-2">
                        <i data-lucide="user" class="w-5 h-5 text-purple-500"></i>
                        <h3 class="font-serif font-bold text-lg text-stone-800">Crea / Modifica Eroe</h3>
                    </div>
                    <div class="p-6 space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Nome Eroe</label>
                            <input type="text" id="char-name" value="${state.character.name}" class="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none" />
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Classe</label>
                                <select id="char-class" class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none cursor-pointer">
                                    ${classOptions}
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Livello</label>
                                <input type="number" id="char-level" value="${state.character.level}" min="1" max="36" class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none" />
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Allineamento</label>
                            <select id="char-alignment" class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none cursor-pointer">
                                ${alignOptions}
                            </select>
                        </div>
                        
                        <div class="pt-4 flex flex-col gap-2">
                            <button class="btn-generate-stats bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all focus:ring-2 focus:ring-stone-500 focus:outline-none">
                                <i data-lucide="refresh-cw" class="w-4 h-4"></i> Tira Statistiche (Casuale)
                            </button>
                            <button class="btn-save-char bg-purple-600 hover:bg-purple-700 text-white border border-purple-700 px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all focus:ring-2 focus:ring-purple-500 focus:outline-none">
                                <i data-lucide="save" class="w-4 h-4"></i> Salva Personaggio
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Archivio -->
                <div class="bg-white rounded-xl shadow-sm border border-stone-200">
                    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center gap-2">
                        <i data-lucide="download" class="w-5 h-5 text-stone-500"></i>
                        <h3 class="font-serif font-bold text-lg text-stone-800">Personaggi Salvati</h3>
                    </div>
                    <div class="p-4 max-h-[300px] overflow-y-auto">
                        ${archiveHtml}
                    </div>
                </div>
            </div>

            <!-- Scheda Preview -->
            <div class="lg:col-span-2">
                <div class="bg-white rounded-2xl shadow-xl border-t-8 border-purple-600 overflow-hidden relative p-8 sm:p-12">
                    <div class="flex flex-col md:flex-row justify-between items-start border-b pb-8 mb-8 gap-6">
                        <div class="flex-1 text-left w-full">
                            <h2 id="header-char-name" class="text-3xl sm:text-4xl font-black text-stone-900 uppercase tracking-tight mb-2">${state.character.name || "Eroe"}</h2>
                            <div class="flex flex-wrap gap-4 text-gray-500 font-bold uppercase text-sm tracking-widest mt-2">
                                <span class="flex items-center gap-1"><i data-lucide="user" class="w-4 h-4"></i> ${state.character.class} Liv. ${state.character.level}</span>
                                <span class="flex items-center gap-1"><i data-lucide="globe" class="w-4 h-4"></i> ${state.character.alignment}</span>
                            </div>
                        </div>
                        <div class="flex gap-4 shrink-0 mt-4 md:mt-0">
                            <!-- CA -->
                            <div class="text-center bg-gray-50 border border-gray-300 rounded-xl p-4 min-w-[100px] shadow-inner">
                                <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Classe Armatura</div>
                                <div class="text-3xl font-black text-gray-900 drop-shadow-sm">${ac}</div>
                            </div>
                            <!-- HP -->
                            <div class="text-center bg-red-50 border border-red-200 rounded-xl p-4 min-w-[100px] shadow-inner">
                                <div class="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Punti Ferita</div>
                                <div class="text-3xl font-black text-red-700 drop-shadow-sm w-12 mx-auto">${state.character.hp}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Griglia Statistiche -->
                    <div class="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
                        ${statsCards}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <!-- Tiri Salvezza -->
                        <div>
                            <h3 class="text-lg font-black text-gray-800 border-b-2 border-purple-100 pb-2 mb-4 flex items-center gap-2">
                                <i data-lucide="zap" class="w-5 h-5 text-purple-500"></i> Tiri Salvezza
                            </h3>
                            <div class="space-y-3">
                                ${[
      { label: "Morte / Veleno", val: saves.d },
      { label: "Bacchette", val: saves.w },
      { label: "Paralisi / Pietrificazione", val: saves.p },
      { label: "Soffio", val: saves.b },
      { label: "Incantesimi / Verghe", val: saves.s }
    ].map((s) => `
                                    <div class="flex justify-between items-center text-sm">
                                        <span class="font-bold text-gray-600">${s.label}</span>
                                        <span class="bg-gray-100 px-3 py-1 rounded-lg font-mono font-bold border border-gray-200 shadow-inner">${s.val}</span>
                                    </div>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Derivate -->
                        <div>
                            <h3 class="text-lg font-black text-gray-800 border-b-2 border-purple-100 pb-2 mb-4 flex items-center gap-2">
                                <i data-lucide="info" class="w-5 h-5 text-purple-500"></i> Derivate
                            </h3>
                            <div class="space-y-3 text-sm">
                                <div class="flex justify-between items-center"><span class="font-bold text-gray-600">Bonus XP:</span> <span class="font-bold text-gray-800">${derived.xpBonus}</span></div>
                                <div class="flex justify-between items-center"><span class="font-bold text-gray-600">Aprire Porte:</span> <span class="font-bold text-gray-800">${derived.openDoors}</span></div>
                                <div class="flex justify-between items-center"><span class="font-bold text-gray-600">Movimento:</span> <span class="font-bold text-gray-800">${derived.movement}</span></div>
                                <div class="flex justify-between items-center"><span class="font-bold text-gray-600">THAC0:</span> <span class="font-bold text-red-600 bg-red-50 px-2 rounded-md border border-red-100">${derived.thac0}</span></div>
                            </div>

                            <div class="mt-4 pt-4 border-t">
                                <h4 class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 text-center">Matrice di Attacco</h4>
                                <div class="flex text-[10px] sm:text-xs font-mono font-bold bg-white border rounded-lg overflow-x-auto shadow-inner">
                                    ${attackMatrixHtml}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Equipaggiamento -->
                    <div class="mt-12 pt-8 border-t">
                        <h3 class="text-sm font-black text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <i data-lucide="shield" class="w-4 h-4 text-stone-500"></i> Equipaggiamento
                        </h3>
                        <div class="bg-gray-50 rounded-xl p-4 border border-stone-200 text-stone-800 text-sm space-y-4 shadow-sm">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase mb-1">Armatura</label>
                                    <select id="char-armor" class="w-full px-2 py-1.5 bg-white border border-gray-300 rounded outline-none font-bold text-xs">${armorOptions}</select>
                                </div>
                                <div class="flex items-end">
                                    <label class="flex items-center gap-2 cursor-pointer pb-1.5 font-bold text-xs select-none">
                                        <input type="checkbox" id="char-shield" ${state.character.shield ? "checked" : ""} class="rounded" /> Scudo (-1 CA)
                                    </label>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase mb-1">Arma 1</label>
                                    <select id="char-weapon1" class="w-full px-2 py-1.5 bg-white border border-gray-300 rounded outline-none font-bold text-xs">${weapon1Options}</select>
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase mb-1">Arma 2</label>
                                    <select id="char-weapon2" class="w-full px-2 py-1.5 bg-white border border-gray-300 rounded outline-none font-bold text-xs">${weapon2Options}</select>
                                </div>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-1">Zaino & Altro</label>
                                <textarea id="char-equip" class="w-full px-3 py-2 bg-white border border-gray-300 rounded outline-none min-h-[60px] text-xs resize-y">${state.character.equipment}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    (0, import_jquery.default)("#main-content").html(html);
    (0, import_lucide.createIcons)({ icons: import_lucide.icons });
  }
  function renderStatsTab() {
    const updateStatsStr = () => {
        let statsStrArr = [];
        let infoText = "";
        try {
            const data = generateUnique(state.statsConfig);
            if(data.results.length) {
                statsStrArr = data.results;
                if(data.totalCombinations) {
                    infoText = `Trovate ${data.results.length} combinazioni su un massimo teorico di ${data.totalCombinations.toLocaleString('it-IT')}`;
                }
            } else {
                infoText = "Nessuna combinazione trovata per i parametri scelti.";
            }
        } catch(e) {
            infoText = "Errore durante la generazione.";
        }
        
        const html2 = statsStrArr.map((str, idx) => `
            <div class="bg-white border rounded-xl p-4 flex flex-col md:flex-row justify-between items-center mb-3 shadow-sm hover:border-purple-300 transition-colors gap-4">
                <div class="font-mono text-sm sm:text-base grid grid-cols-6 gap-2 w-full md:w-auto text-center flex-1">
                    <div class="flex flex-col"><span class="text-[10px] text-gray-400 font-sans tracking-widest">FOR</span><span class="font-bold text-gray-800">${str[0]}</span></div>
                    <div class="flex flex-col"><span class="text-[10px] text-gray-400 font-sans tracking-widest">INT</span><span class="font-bold text-gray-800">${str[1]}</span></div>
                    <div class="flex flex-col"><span class="text-[10px] text-gray-400 font-sans tracking-widest">SAG</span><span class="font-bold text-gray-800">${str[2]}</span></div>
                    <div class="flex flex-col"><span class="text-[10px] text-gray-400 font-sans tracking-widest">DES</span><span class="font-bold text-gray-800">${str[3]}</span></div>
                    <div class="flex flex-col"><span class="text-[10px] text-gray-400 font-sans tracking-widest">COS</span><span class="font-bold text-gray-800">${str[4]}</span></div>
                    <div class="flex flex-col"><span class="text-[10px] text-gray-400 font-sans tracking-widest">CAR</span><span class="font-bold text-gray-800">${str[5]}</span></div>
                </div>
                <button class="w-full md:w-auto bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 font-bold font-sans text-xs flex items-center justify-center gap-2 btn-apply-stats shrink-0" data-stats="${str.join(',')}">
                    <i data-lucide="check" class="w-4 h-4"></i> Applica
                </button>
            </div>
        `).join("") || `<p class="text-sm text-gray-500 italic text-center py-4">${infoText}</p>`;
        
        (0, import_jquery.default)("#stats-results").html(html2);
        (0, import_jquery.default)("#stats-info").text(infoText);
        (0, import_lucide.createIcons)({ icons: import_lucide.icons });
    };

    (0, import_jquery.default)(document).off("click", "#btn-generate-stats-list").on("click", "#btn-generate-stats-list", function() {
        state.statsConfig.count = parseInt((0, import_jquery.default)("#stats-count").val()) || 10;
        state.statsConfig.totalPoints = parseInt((0, import_jquery.default)("#stats-points").val()) || 72;
        state.statsConfig.mode = String((0, import_jquery.default)("#stats-mode").val());
        state.statsConfig.varianceProfile = String((0, import_jquery.default)("#stats-variance").val());
        state.statsConfig.powerProfile = String((0, import_jquery.default)("#stats-power").val());
        state.statsConfig.minValue = parseInt((0, import_jquery.default)("#stats-min").val()) || 3;
        state.statsConfig.maxValue = parseInt((0, import_jquery.default)("#stats-max").val()) || 18;
        state.statsConfig.customString = String((0, import_jquery.default)("#stats-custom").val());
        updateStatsStr();
    });

    (0, import_jquery.default)(document).off("click", ".btn-apply-stats").on("click", ".btn-apply-stats", function() {
        const statsVals = String((0, import_jquery.default)(this).data("stats")).split(",").map((n) => parseInt(n));
        if (statsVals.length === 6) {
            state.character.stats = {
                str: statsVals[0],
                int: statsVals[1],
                wis: statsVals[2],
                dex: statsVals[3],
                con: statsVals[4],
                cha: statsVals[5]
            };
            (0, import_jquery.default)('.tab-btn[data-tab="character"]').click();
        }
    });

    (0, import_jquery.default)(document).off("change", "#stats-mode").on("change", "#stats-mode", function() {
        if((0, import_jquery.default)(this).val() === 'unique_values') {
            (0, import_jquery.default)('#custom-val-container').show();
            (0, import_jquery.default)('#points-container').hide();
        } else {
            (0, import_jquery.default)('#custom-val-container').hide();
            (0, import_jquery.default)('#points-container').show();
        }
    });

    const html = `
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-1 space-y-4">
                <div class="bg-white rounded-xl shadow-sm border border-stone-200 border-t-4 border-t-stone-500 p-5">
                    <h3 class="font-serif font-bold text-lg text-stone-800 flex items-center gap-2 border-b pb-3 mb-4">
                        <i data-lucide="settings-2" class="w-5 h-5 text-stone-500"></i> Parametri
                    </h3>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 pointer-events-none select-none">Modalità di Generazione</label>
                            <select id="stats-mode" class="w-full p-2.5 bg-gray-50 border border-gray-300 rounded outline-none text-sm font-bold cursor-pointer focus:border-stone-500">
                                <option value="sum" ${state.statsConfig.mode === 'sum' ? 'selected' : ''}>Somma Fissa (Matched to Points)</option>
                                <option value="unique_values" ${state.statsConfig.mode === 'unique_values' ? 'selected' : ''}>Valori Unici Personalizzati</option>
                            </select>
                        </div>
                        
                        <div id="points-container" ${state.statsConfig.mode === 'unique_values' ? 'style="display:none;"' : ''}>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 pointer-events-none select-none">Punti Totali (Es. 72)</label>
                            <input type="number" id="stats-points" value="${state.statsConfig.totalPoints}" class="w-full p-2 border border-gray-300 rounded bg-white outline-none text-sm focus:border-stone-500" />
                        </div>
                        
                        <div id="custom-val-container" ${state.statsConfig.mode !== 'unique_values' ? 'style="display:none;"' : ''}>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 pointer-events-none select-none">Valori (separati da virgola)</label>
                            <input type="text" id="stats-custom" placeholder="Es: 15,14,13,12,10,8" value="${state.statsConfig.customString}" class="w-full p-2 border border-gray-300 bg-white rounded outline-none text-sm focus:border-stone-500 font-mono" />
                        </div>

                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 pointer-events-none select-none">Numero di Set Generati</label>
                            <input type="number" id="stats-count" value="${state.statsConfig.count > 1 ? state.statsConfig.count : 10}" max="100" class="w-full p-2 border border-gray-300 rounded bg-white outline-none text-sm focus:border-stone-500" />
                        </div>
                        
                        <div class="grid grid-cols-2 gap-2 border-t pt-4">
                            <div>
                                <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 pointer-events-none select-none">Minimo</label>
                                <input type="number" id="stats-min" value="${state.statsConfig.minValue}" min="3" max="18" class="w-full p-2 border border-gray-300 rounded bg-white text-center outline-none text-sm font-bold" />
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 pointer-events-none select-none">Massimo</label>
                                <input type="number" id="stats-max" value="${state.statsConfig.maxValue}" min="3" max="18" class="w-full p-2 border border-gray-300 rounded bg-white text-center outline-none text-sm font-bold" />
                            </div>
                        </div>

                        <div class="pt-2">
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 pointer-events-none select-none">Varianza (Distribuzione)</label>
                            <select id="stats-variance" class="w-full p-2.5 bg-gray-50 border border-gray-300 rounded outline-none text-sm font-bold cursor-pointer">
                                <option value="low" ${state.statsConfig.varianceProfile === 'low' ? 'selected' : ''}>Piatta (Molta Media)</option>
                                <option value="high" ${state.statsConfig.varianceProfile === 'high' ? 'selected' : ''}>Alta (Picchi estremi)</option>
                            </select>
                        </div>
                        
                        <div class="pt-2">
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 pointer-events-none select-none">Centro Curva (Potere)</label>
                            <select id="stats-power" class="w-full p-2.5 bg-gray-50 border border-gray-300 rounded outline-none text-sm font-bold cursor-pointer">
                                <option value="normal" ${state.statsConfig.powerProfile === 'normal' ? 'selected' : ''}>Normale (Centro esatto)</option>
                                <option value="min-max" ${state.statsConfig.powerProfile === 'min-max' ? 'selected' : ''}>Verso gli estremi</option>
                            </select>
                        </div>
                    </div>
                    
                    <button id="btn-generate-stats-list" class="w-full mt-6 bg-stone-800 text-white font-bold py-3 rounded-lg shadow-sm hover:bg-stone-900 transition-colors flex items-center justify-center gap-2">
                        <i data-lucide="dice-6" class="w-5 h-5"></i> Genera Batterie
                    </button>
                    <p id="stats-info" class="text-[10px] text-gray-400 mt-3 text-center leading-tight"></p>
                </div>
            </div>
            
            <div class="md:col-span-2">
                <div class="bg-white rounded-xl shadow-sm border border-stone-200 border-t-4 border-t-emerald-500 h-[70vh] flex flex-col">
                    <div class="px-6 py-4 border-b border-stone-200 bg-stone-50 flex justify-between items-center shrink-0">
                        <h3 class="font-serif font-bold text-lg text-emerald-800 flex items-center gap-2">
                            <i data-lucide="list" class="w-5 h-5"></i> Risultati
                        </h3>
                    </div>
                    <div id="stats-results" class="p-6 space-y-2 overflow-y-auto flex-1 bg-gray-50/50">
                        <div class="h-full flex items-center justify-center">
                            <p class="text-sm text-gray-400 italic flex items-center flex-col gap-3">
                                <i data-lucide="arrow-left" class="w-8 h-8 text-stone-300 animate-pulse"></i>
                                Clicca su "Genera Batterie" per iniziare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    (0, import_jquery.default)("#main-content").html(html);
  }
  function renderMagicItemsTab() {
    let currentItemHTML = '<p class="text-gray-500 italic text-sm text-center py-10">Genera un oggetto per iniziare.</p>';
    const catOptions = ["Qualsiasi", ...MAGIC_ITEM_CATEGORIES.map((c) => c.name)].map((c) => `<option value="${c}">${c}</option>`).join("");
    (0, import_jquery.default)(document).off("click", "#btn-gen-magic").on("click", "#btn-gen-magic", function() {
      const cat = (0, import_jquery.default)("#magic-cat").val();
      const item = getRandomMagicItem(cat === "Qualsiasi" ? "Tutte" : String(cat));
      let descHtml = '<div class="space-y-2 text-sm text-gray-700 leading-relaxed">';
      if (item.properties) {
        item.properties.forEach((p) => {
          descHtml += `<div class="bg-amber-50 p-3 rounded border border-amber-100 flex gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-500 shrink-0 mt-0.5"></i> <span>${p.name}: ${p.description}</span></div>`;
        });
      }
      if (item.description) {
        descHtml += `<p>${item.description}</p>`;
      }
      descHtml += "</div>";
      currentItemHTML = `
            <div class="text-center mb-6">
                <span class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 border border-amber-200">${item.category}</span>
                <h2 class="text-2xl font-black text-gray-900 mb-1">${item.name}</h2>
            </div>
            ${descHtml}
        `;
      (0, import_jquery.default)("#magic-item-container").html(currentItemHTML);
      (0, import_lucide.createIcons)({ icons: import_lucide.icons });
    });
    const html = `
        <div class="max-w-3xl mx-auto">
            <div class="bg-white rounded-xl shadow-sm border border-amber-200 border-t-8 border-t-amber-500 overflow-hidden">
                <div class="p-8">
                    <div class="flex gap-4 mb-8 border-b pb-8 border-amber-100">
                        <div class="flex-1">
                            <label class="block text-xs font-bold text-amber-600 uppercase mb-2">Categoria</label>
                            <select id="magic-cat" class="w-full bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-lg font-bold outline-none">
                                ${catOptions}
                            </select>
                        </div>
                        <div class="flex items-end">
                            <button id="btn-gen-magic" class="bg-amber-500 hover:bg-amber-600 text-white font-bold p-3 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2">
                                <i data-lucide="gem" class="w-5 h-5"></i> Genera
                            </button>
                        </div>
                    </div>

                    <div id="magic-item-container" class="min-h-[200px]">
                        ${currentItemHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
    (0, import_jquery.default)("#main-content").html(html);
  }
  function renderSpellsTab() {
    state.spellClassFilter = state.spellClassFilter || "Mago";
    const spellClasses = [...new Set(ALL_SPELL_DETAILS.map((s) => s.className))];
    const classOptions = spellClasses.map((c) => `<option value="${c}" ${c === state.spellClassFilter ? "selected" : ""}>${c}</option>`).join("");
    (0, import_jquery.default)(document).off("change", "#spell-class-filter").on("change", "#spell-class-filter", function() {
      state.spellClassFilter = (0, import_jquery.default)(this).val();
      renderSpellsTab();
    });
    const filteredSpells = ALL_SPELL_DETAILS.filter((s) => s.className === state.spellClassFilter).sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
    let spellsHtml = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">';
    filteredSpells.forEach((spell) => {
      spellsHtml += `
            <div class="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 class="font-bold text-gray-900 text-lg mb-1 flex items-start justify-between gap-2">
                    <span>${spell.name}</span>
                    <span class="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">Lvl ${spell.level}</span>
                </h4>
                <div class="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-3">
                    ${spell.duration ? `<span class="bg-gray-100 px-2 py-0.5 rounded text-cyan-700">Durata: ${spell.duration}</span>` : ""}
                    ${spell.range ? `<span class="bg-gray-100 px-2 py-0.5 rounded text-emerald-700">Gittata: ${spell.range}</span>` : ""}
                </div>
                <div class="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto pr-2 no-scrollbar border-l-2 border-gray-100 pl-3">
                    ${spell.description || "Nessuna descrizione."}
                </div>
            </div>
        `;
    });
    spellsHtml += "</div>";
    const html = `
        <div class="max-w-7xl mx-auto space-y-6">
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-cyan-200">
                <h2 class="text-xl font-black text-cyan-800 flex items-center gap-2"><i data-lucide="wand-2" class="w-6 h-6"></i> Grimoire</h2>
                <div class="flex items-center gap-4">
                    <label class="font-bold text-sm text-gray-600">Classe:</label>
                    <select id="spell-class-filter" class="px-4 py-2 bg-gray-50 border border-gray-300 rounded outline-none font-bold">
                        ${classOptions}
                    </select>
                </div>
            </div>
            ${spellsHtml}
        </div>
    `;
    (0, import_jquery.default)("#main-content").html(html);
    (0, import_lucide.createIcons)({ icons: import_lucide.icons });
  }
})();
