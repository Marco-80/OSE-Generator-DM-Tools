export function generatePrintHTML(state, derived, ac, saves) {
   const c = state.character;
   
   return `
   <!DOCTYPE html>
   <html>
   <head>
     <title>Scheda: ${c.name || 'Senza Nome'}</title>
     <style>
       @media print {
           @page { size: A4; margin: 10mm; }
           body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
       }
       body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #fff; color: #000; padding: 20px; zoom: 0.95; }
       .f-row { display: flex; width: 100%; margin-bottom: 5px; align-items: flex-end; }
       .f-col { display: flex; flex-direction: column; }
       .b-box { background: #000; color: #fff; font-weight: bold; padding: 5px; text-align: center; border: 1px solid #000; min-width: 50px; font-size: 18px; text-transform: uppercase;}
       .b-val { border-bottom: 1px solid #000; font-size: 16px; padding: 5px 10px; flex-grow: 1; font-weight: bold;}
       .i-lbl { font-size: 10px; text-transform: uppercase; margin-left: 5px; margin-top: 2px;}
       
       .header-logo { font-size: 50px; font-weight: 900; line-height: 0.9; letter-spacing: -1px; text-transform: uppercase; font-family: Impact, sans-serif;}
       .header-sub { background: #000; color: #fff; padding: 2px 10px; font-size: 18px; font-weight: bold; display: inline-block; letter-spacing: 2px;}
       
       .title-bar { border-bottom: 3px solid #000; font-family: Impact, sans-serif; font-size: 32px; letter-spacing: 1px; text-transform: uppercase; margin-top: 15px; margin-bottom: 10px; padding-bottom: 2px; line-height:1;}
       
       .s-box { background: #000; color: #fff; font-size: 16px; font-weight: bold; width: 45px; display: flex; align-items: center; justify-content: center; height: 35px;}
       .s-val { border: 2px solid #000; width: 45px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; height: 35px; box-sizing: border-box;}
       .s-desc { font-size: 11px; margin-left: 10px; line-height: 1.1; font-style: italic; width: 130px; display: flex; align-items: center;}
       
       .w-row { display: flex; border: 1px solid #000; margin-bottom: -1px; }
       .w-head { background: #000; color: #fff; padding: 5px; font-size: 12px; font-weight: bold; }
       .w-cell { padding: 5px; font-size: 12px; border-left: 1px solid #000; }
       
       .pf-box { height: 60px; font-size: 24px; text-align: center; display: flex; justify-content: center; align-items: center; flex: 1; border: 2px solid #000; font-weight:bold;}
       .ca-box { height: 60px; font-size: 32px; text-align: center; display: flex; justify-content: center; align-items: center; flex: 1; border: 2px solid #000; font-weight:bold;}
       
       .notes { border: 1px solid #000; padding: 10px; font-size: 12px; min-height: 80px; white-space: pre-wrap; font-family: monospace;}
     </style>
   </head>
   <body onload="setTimeout(() => window.print(), 500)">
     <div style="display: flex; gap: 20px;">
       <div style="flex: 2;">
         <div class="f-row">
           <div class="b-box">PG</div><div class="b-val">${c.name || ''}</div>
         </div>
         <div class="f-row" style="margin-top:20px;">
           <div style="flex: 1; margin-right: 10px;">
             <div class="f-row"><div class="b-box" style="font-size:12px;">Classe</div><div class="b-val" style="font-size:14px;">${c.class}</div></div>
           </div>
           <div style="flex: 1; margin-right: 10px;">
             <div class="f-row"><div class="b-box" style="font-size:12px;">AL</div><div class="b-val" style="font-size:14px;">${c.alignment === "N" ? "Neutrale" : c.alignment === "L" ? "Legale" : "Caotico"}</div></div>
           </div>
         </div>
         <div class="f-row" style="margin-top:10px;">
           <div style="flex: 1; margin-right: 10px;">
             <div class="f-row"><div class="b-box" style="font-size:12px;">Titolo</div><div class="b-val"></div></div>
           </div>
           <div style="flex: 1; margin-right: 10px;">
             <div class="f-row"><div class="b-box" style="font-size:12px;">Livello</div><div class="b-val" style="font-size:14px;">${c.level}</div></div>
           </div>
         </div>
       </div>
       <div style="flex: 1; text-align: right; padding-top: 5px;">
         <div class="header-logo">OLD-SCHOOL<br>ESSENTIALS</div>
         <div class="header-sub">SCHEDA DEL PERSONAGGIO</div>
       </div>
     </div>
     
     <div style="display: flex; gap: 20px;">
       <div style="flex: 1;">
         <div class="title-bar" style="margin-top:20px;">CARATTERISTICHE</div>
         <div class="f-col">
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">FOR</div><div class="s-val">${c.stats.str}</div><div class="s-desc">Attacchi in mischia, Aprire porte (Mod: ${derived.mis})</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">INT</div><div class="s-val">${c.stats.int}</div><div class="s-desc">Lingue, Alfabetizzazione (Mod: ${derived.intMod})</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">SAG</div><div class="s-val">${c.stats.wis}</div><div class="s-desc">Tiri salvezza contro magia (Mod: ${derived.sag})</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">DES</div><div class="s-val">${c.stats.dex}</div><div class="s-desc">Attacchi a dist., CA, Iniziativa (Mod: ${derived.dis})</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">COS</div><div class="s-val">${c.stats.con}</div><div class="s-desc">Punti ferita aggiuntivi (Mod: ${derived.cos})</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">CAR</div><div class="s-val">${c.stats.cha}</div><div class="s-desc">Reazioni, Seguaci (Mod: ${derived.rea})</div></div>
         </div>
         <div style="font-size:11px; font-style:italic; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top:5px;">Tiro Caratteristiche: pari o sotto con 1d20</div>
       </div>
       <div style="flex: 1;">
         <div class="title-bar" style="margin-top:20px;">TIRI SALVEZZA</div>
         <div class="f-col">
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">M</div><div class="s-val">${saves.m || '-'}</div><div class="s-desc">Morte, veleno</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">B</div><div class="s-val">${saves.b || '-'}</div><div class="s-desc">Bacchette</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">P</div><div class="s-val">${saves.p || '-'}</div><div class="s-desc">Paralisi, pietrificazione</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">S</div><div class="s-val">${saves.s || '-'}</div><div class="s-desc">Soffio</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box">I</div><div class="s-val">${saves.i || '-'}</div><div class="s-desc">Incantesimi, verghe, bastoni</div></div>
           <div class="f-row" style="margin-bottom:8px;"><div class="s-box" style="font-size:24px;">±</div><div class="s-val">${derived.sag > 0 ? '+'+derived.sag : derived.sag}</div><div class="s-desc">Mod. SAG ai TS contro magia</div></div>
         </div>
         <div style="font-size:11px; font-style:italic; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top:5px;">Tiro Salvezza: pari o sopra con 1d20</div>
       </div>
       <div style="flex: 1;">
         <div style="width: 100%; height: 260px; border: 2px solid #000; margin-top: 20px;"></div>
         <div class="i-lbl" style="text-align: center; margin-top: 5px;">Ritratto del personaggio / Simbolo</div>
       </div>
     </div>
     
     <div style="display: flex; gap: 20px; align-items:flex-start;">
        <div style="flex: 2;">
            <div class="title-bar">COMBATTIMENTO</div>
            <div style="display: flex; gap: 10px;">
                <div style="flex: 1;">
                    <div class="f-row"><div class="b-box" style="height:60px; display:flex; align-items:center;">PF</div><div class="pf-box">${c.hp}</div></div>
                    <div style="text-align:right; font-size:11px; font-style:italic;">Punti Ferita</div>
                </div>
                <div style="flex: 1.5; display:flex; flex-direction:column; justify-content:space-between;">
                    <div class="f-row"><div class="s-box">Max</div><div class="b-val" style="border: 1px solid #000; height:35px; text-align:center;">${c.hp}</div></div>
                    <div class="f-row" style="margin-top:5px;"><div class="s-box" style="font-size:20px;">±</div><div class="b-val" style="border: 1px solid #000; height:35px; display:flex; align-items:center; justify-content:center;">${derived.cos > 0 ? '+'+derived.cos : derived.cos}</div></div>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <div style="flex: 1;">
                    <div class="f-row"><div class="b-box" style="height:60px; display:flex; align-items:center;">CA</div><div class="ca-box">${ac.total}</div></div>
                    <div style="text-align:right; font-size:11px; font-style:italic;">Classe Armatura</div>
                </div>
                <div style="flex: 1.5; display:flex; flex-direction:column; justify-content:space-between;">
                    <div class="f-row"><div class="s-box">SA</div><div class="b-val" style="border: 1px solid #000; height:35px; display:flex; align-items:center; justify-content:center;">${ac.base}</div></div>
                    <div class="f-row" style="margin-top:5px;"><div class="s-box" style="font-size:20px;">±</div><div class="b-val" style="border: 1px solid #000; height:35px; display:flex; align-items:center; justify-content:center;">${derived.dis > 0 ? '+'+derived.dis : derived.dis}</div></div>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <div style="flex: 1;" class="f-row">
                    <div class="b-box">Mis</div>
                    <div class="b-val" style="border: 1px solid #000; height: 32px; display:flex; align-items:center; justify-content:center;">${derived.mis > 0 ? '+'+derived.mis : derived.mis}</div>
                </div>
                <div style="flex: 1;" class="f-row">
                    <div class="b-box">Dis</div>
                    <div class="b-val" style="border: 1px solid #000; height: 32px; display:flex; align-items:center; justify-content:center;">${derived.dis > 0 ? '+'+derived.dis : derived.dis}</div>
                </div>
            </div>
            
            <div class="title-bar" style="font-size:26px;">ABILITÀ E ARMI</div>
            <div class="notes" style="min-height: 200px;">Arma Mischia: ${c.weapon1 || 'Nessuna'}
Arma Distanza: ${c.weapon2 || 'Nessuna'}

Equipaggiamento:
${c.equipment || 'N/A'}

Note classe: ${c.notes || ''}

Incantesimi:
${c.spells.map(s => s.name).join(', ') || 'Nessuno'}</div>
        </div>
        
        <div style="flex: 1;">
            <div class="title-bar">INCONTRI</div>
            <div class="f-row" style="margin-bottom:10px;"><div class="s-box" style="width:50px;">Iniz.</div><div class="b-val" style="border:1px solid #000; height:35px; display:flex; align-items:center; justify-content:center;">${derived.dis > 0 ? '+'+derived.dis : derived.dis}</div></div>
            <div class="f-row"><div class="s-box" style="width:50px; font-size:20px;">±</div><div class="b-val" style="border:1px solid #000; height:35px; display:flex; align-items:center; justify-content:center;">${derived.rea > 0 ? '+'+derived.rea : derived.rea}</div></div>
            
            <div class="title-bar">ESPLORAZIONE</div>
            <div class="f-row" style="margin-bottom:8px;"><div class="s-box">OP</div><div class="b-val" style="border:1px solid #000; height:35px;"></div><div style="font-size:14px; font-weight:bold; margin-left:5px;">su-6</div></div>
            <div class="f-row" style="margin-bottom:8px;"><div class="s-box">AP</div><div class="b-val" style="border:1px solid #000; height:35px;"></div><div style="font-size:14px; font-weight:bold; margin-left:5px;">su-6</div></div>
            <div class="f-row" style="margin-bottom:8px;"><div class="s-box">TP</div><div class="b-val" style="border:1px solid #000; height:35px;"></div><div style="font-size:14px; font-weight:bold; margin-left:5px;">su-6</div></div>
            <div class="f-row"><div class="s-box">CT</div><div class="b-val" style="border:1px solid #000; height:35px;"></div><div style="font-size:14px; font-weight:bold; margin-left:5px;">su-6</div></div>
            
            <div class="title-bar">MOVIMENTO</div>
            <div class="f-row" style="margin-bottom:8px;"><div class="s-box">Vi</div><div class="b-val" style="border:1px solid #000; height:35px;"></div></div>
            <div class="f-row" style="margin-bottom:8px;"><div class="s-box">Es</div><div class="b-val" style="border:1px solid #000; height:35px;"></div></div>
            <div class="f-row"><div class="s-box">In</div><div class="b-val" style="border:1px solid #000; height:35px;"></div></div>
            
            <div class="title-bar">MATRICE TPC</div>
            <div style="font-size:10px; font-family:monospace; border:1px solid #000; padding:5px; line-height:1.2;">
               Riferirsi alle tabelle manuale OSE per i "Tiri Per Colpire".
            </div>
            
            <div class="title-bar">LINGUE</div>
            <div class="notes" style="min-height:40px;">
                Comune, Allineamento
            </div>
        </div>
     </div>
   </body>
   </html>
   `;
}
