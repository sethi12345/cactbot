'use strict';
[{
  zoneRegex: {
    en: /^Memoria Misera \(Extreme\)$/,
  },
  timelineFile: 'varis-ex.txt',
  triggers: [
    {
      id: 'VarisEx Phase 2',
      regex: Regexes.startsUsing({ source: 'Varis Yae Galvus', id: '4CCC', capture: false }),
      run: function(data) {
        data.phase = 'phase2';
      },
    },
    {
      id: 'VarisEx Ignis Est',
      regex: Regexes.startsUsing({ source: 'Ignis Est', id: '4CB6', capture: false }),
      delaySeconds: 2,
      response: Responses.getOut(),
    },
    {
      id: 'VarisEx Ventus Est',
      regex: Regexes.startsUsing({ source: 'Ventus Est', id: '4CC7', capture: false }),
      delaySeconds: 2,
      response: Responses.getIn('info'),
    },
    {
      id: 'VarisEx Altius',
      regex: Regexes.startsUsing({ source: 'Varis Yae Galvus', id: '4CCA', capture: false }),
      infoText: {
        en: 'Bait Slashes',
      },
    },
    {
      id: 'VarisEx Citius',
      regex: Regexes.startsUsing({ source: 'Varis Yae Galvus', id: '4CF0' }),
      alertText: function(data, matches) {
        if (data.me == matches.target) {
          return {
            en: 'Buster on YOU',
          };
        }
        if (data.role == 'dps') {
          return {
            en: 'Avoid Tanks',
          };
        }
        return {
          en: 'Buster on ' + data.ShortName(matches.target),
        };
      },
    },
    {
      id: 'VarisEx Alea lacta Est',
      regex: Regexes.startsUsing({ source: 'Varis Yae Galvus', id: '4CD2', capture: false }),
      response: Responses.getBehind('alarm'),
    },
    {
      id: 'VarisEx Alea lacta Est Front',
      regex: Regexes.ability({ source: 'Varis Yae Galvus', id: '4CD5', capture: false }),
      alertText: {
        en: 'Go Front',
      },
    },
    {
      id: 'VarisEx Electrified Gunshield',
      regex: Regexes.ability({ source: 'Varis Yae Galvus', id: '4CD7', capture: false }),
      delaySeconds: 22,
      response: Responses.knockback(),
    },
    {
      id: 'VarisEx Reinforced Gunshield',
      regex: Regexes.ability({ source: 'Varis Yae Galvus', id: '4CD9', capture: false }),
      condition: (data) => data.phase != 'phase2',
      delaySeconds: 10,
      alarmText: {
        en: 'Stop',
      },
    },
    {
      id: 'VarisEx Loaded Gunshield',
      regex: Regexes.ability({ source: 'Varis Yae Galvus', id: '4CD8', capture: false }),
      delaySeconds: 10,
      alarmText: {
        en: 'Spread soon',
      },
    },
    {
      id: 'VarisEx Reinforced Gunshield 2',
      regex: Regexes.ability({ source: 'Varis Yae Galvus', id: '4CD9', capture: false }),
      condition: (data) => data.phase == 'phase2',
      delaySeconds: 20,
      alarmText: {
        en: 'Stop',
      },
    },
    {
      id: 'VarisEx Terminus Est',
      regex: Regexes.startsUsing({ source: 'Terminus Est', id: '4CB4', capture: false }),
      infoText: {
        en: 'Dodge Clones',
      },
    },
    {
      id: 'VarisEx Magitek Spark',
      regex: Regexes.startsUsing({ source: 'Gunshield', id: '4E50', capture: false }),
      response: Responses.spread(),
    },
    {
      id: 'VarisEx Magitek Torch',
      regex: Regexes.startsUsing({ source: 'Gunshield', id: '4E4F', capture: false }),
      response: Responses.stack(),
    },
    {
      id: 'VarisEx Fortius',
      regex: Regexes.startsUsing({ source: 'Varis Yae Galvus', id: '4CE[56]', capture: false }),
      infoText: {
        en: 'Bait Puddles Out',
      },
    },
  ],
  timelineReplace: [
  ],
}];
