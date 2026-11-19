/* ===== つむぎごはん 共通スクリプト（lunch_menu.html / info.html / menu.html） =====
   各ページの <script> より前に読み込む。ページ側で使う関数・定数をここにまとめている。 */

/* ロゴ（つむぎごはんのアイコン） */
const LOGO_SRC="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCAFAAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxmiiivvj8xCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAo9+x6UqFfMHmZ25GcdxSvI8h+Y8DoOw9hQA2iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAOe1HbNAJHKsVPqDg0+RlchgMMfvehOetADKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo8hXCiiim1YqzCijB9KKS10CwUUUUCCiiigAo60Dk4r6A1T4HeGtO/Y9g+JrahejWjZw6g26QeQVkdVEe3GRhXHOeorGtXhR5efq7HTQwtSum4dNT5/ooyD0II9Qc0hIUZYgAdycVsc1haKO1FABRRRQAVfstD1nUrC6vtO0q9u7a0Aa4mggaRIR/tEDitLwd4J8SePfES6J4W01r272+Y+WCJEmcbmY8AZIr7h+BHws1v4dfD3UvD/AIpuNLuxfzmcxWgZgqtGEZHZgN3TsPXk1w4zHRwy01fY9LAZfPFS10j3Pz97A+tFfRv7QnwX+Hfwz8FWN/4fv76PU7m78tLO5uFkEsWCWIG0EBflGfcCuU+CfwTs/i1p2uz3HiKTTZrApHFFHEshdmUkM4P8HGOOetXHHU5UvbPYznl9WNf2CtzHj2DjpSV9LeGPh98JtI+E3irw78STZ6b4z0yWcSy3E+yfAXdBJbgkeYjDBwAc5INfNCklFLfeIBP1rShiFWvZbGWJw0qFuZ7i0UUVucwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdL4B8F3/wAQfH9l4U026t7W4ut5864zsRVUseByTgVzVT2d9e6dfxX2nXc9pdQndHPA5R0PqGHINTOMnFqOjNKbipJzV0fX+lfsmeANAslu/G3i28uyBlyJEsoAR15OWI/Grn2T9kPwifInl8M3Ui/KxlaXUDn3xvAP5V8c6lq2q6zcNPq+p3uoSscl7ud5Sf8Avomqfbrj6V5n9n1J/wAWo/kep/adGn/ApL56n2oPEf7H98Ra/ZfCaFztBOkyRY/4H5Y2/XIrmPir+zd4ZuvBEvjb4Tz744oTdGwin8+C4iAyWhckkMBk4JIPTg18pfU/nX2n+x/calN8I9at7t3k0+HUilsr8hMxq0gGe2SDj1JrDEYeWDiq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ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAOgz2FA5OAcn0rf8Earouh/EPSNX8RaWdU0y1uBJcWgAbzVweMHg8kHB4OK+uYfiP+zF8Q7RLLW9P0m0cgKqapp4tmX0AlQYH4NXHicVKi0uRteR6GEwccRF3mk+zPiejBIJA6V9G/Hb4L/D3wp8P08b+CNcKwzXEcSWQuBcRTByQTG/J468kjjtVX9mrwh8LvG9rruheLtPivNdfD2omZlKwbcFoiD98Mee+Me9T9ej7J1UnYP7Pmqyoyauzw1NA1yTw6+vx6PfvpUb+W98sDGFW9C+MCs6vsubxP4d+B/w+1H4T/EK1k1OweC4fSpraLet/bSM37uX+5KrHBJ4wVIOeK+MwPrWmFxLr8zasuhOMwscPaKld9fIWjGTgUV6B8F/AEHxJ+Ltl4dvZJY7ARSXV28Rw3loBwD2JZlH41tVqKnFzeyOWlSlVmoRWrPP6K9L+O3gbw/8Pfi7L4e8NTzvZi0inaOeTe0Ltuyu7qRgKef71cHo2iax4i1ZNL0LS7rUb6QEpb2yF3YDqcDtRSqxnBVFsVUoShN0uqM89K7jUPhP410r4UWvxFvNPhTRLnYVYTAyKrnCOydlJIA5J5GcVs6f+zt8YtRUFPBk9vkf8vdxFCR+bV9ZXvw28R65+yPa/Dq6ezs9bGnw27GWQtEjxuCMsoORhRyK4cXmEKbiqclvqelg8snVU/aRastPU/P2ivXviR+z14p+Gvgj/hJ9R1jSr+2WdIJo7XeGjLnCn5h8wzx7V5DXdSrQqrmg7o82tQnRly1FZhRRRWhiGR61NJZ3cVnHdzWlxHbykiOZ4mVHI6hWIwfwrt/g98PpfiT8VrDQWVvsEf8ApN/IP4IFIyM+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";

/* ===== 小さな道具 ===== */
const val=id=>{const el=document.getElementById(id);return el?el.value:""};
const num=id=>Number(val(id))||0;
const chk=id=>{const el=document.getElementById(id);return !!(el&&el.checked)};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function roundedRect(c,x,y,w,h,r){
  r=Math.max(0,Math.min(r,w/2,h/2));
  c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);
  c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();
}
// ファイル名用の日付。"2026-09-06" を渡すとその日、空なら今日
function fileStamp(dateStr){
  const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateStr||""));
  if(m)return m[1]+m[2]+m[3];
  const d=new Date(),p=n=>String(n).padStart(2,"0");
  return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}`;
}
function hexA(hex,a){
  const h=String(hex||"#ffffff").replace("#","");
  const n=h.length===3?h.split("").map(x=>x+x).join(""):h;
  const r=parseInt(n.slice(0,2),16),g=parseInt(n.slice(2,4),16),b=parseInt(n.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ===== フォント ===== */
const FONTS=[
  {id:"mincho",label:"明朝（標準）",css:'"Hiragino Mincho ProN","Noto Serif JP","Yu Mincho","YuMincho","MS Mincho",serif'},
  {id:"gothic",label:"ゴシック（標準）",css:'"Noto Sans JP","Yu Gothic",Meiryo,sans-serif'}
];
const FONT_STORE="tsumugiLocalFonts";
let localFams=[];
try{localFams=JSON.parse(localStorage.getItem(FONT_STORE)||"[]")||[]}catch(e){localFams=[]}
function fontCss(id){
  if(typeof id==="string"&&id.slice(0,6)==="local:"){
    const fam=id.slice(6).replace(/["\\]/g,"");
    return '"'+fam+'","Noto Sans JP","Yu Gothic",sans-serif';
  }
  const f=FONTS.find(x=>x.id===id);
  return f?f.css:FONTS[0].css;
}
function fontSpec(conf,weight){
  return (weight||conf.weight||700)+" "+conf.size+"px "+fontCss(conf.font);
}
function buildFontOptions(){
  document.querySelectorAll("select.fontsel").forEach(sel=>{
    const keep=sel.value;
    sel.innerHTML="";
    const g1=document.createElement("optgroup");g1.label="標準";
    FONTS.forEach(f=>{const o=document.createElement("option");o.value=f.id;o.textContent=f.label;g1.appendChild(o)});
    sel.appendChild(g1);
    if(localFams.length){
      const g2=document.createElement("optgroup");g2.label="この端末のフォント";
      localFams.forEach(fam=>{const o=document.createElement("option");o.value="local:"+fam;o.textContent=fam;g2.appendChild(o)});
      sel.appendChild(g2);
    }
    if(keep)sel.value=keep;
  });
}
function ensureFontOption(v){
  if(!v||v.slice(0,6)!=="local:")return;
  const fam=v.slice(6);
  if(localFams.indexOf(fam)<0){localFams.push(fam);buildFontOptions();}
}
function fontNote(msg){
  const row=document.getElementById("fontNote");
  if(!row)return;
  row.hidden=!msg;row.querySelector(".msg").textContent=msg||"";
}
async function loadLocalFonts(){
  if(!window.queryLocalFonts){
    fontNote("このブラウザでは端末のフォント一覧を取得できません（パソコンの Chrome / Edge のみ対応）。標準の明朝・ゴシックでの表示になります。");
    return;
  }
  try{
    const fonts=await window.queryLocalFonts();
    const set=new Set();
    fonts.forEach(f=>{if(f.family)set.add(f.family)});
    localFams=Array.from(set).sort((a,b)=>a.localeCompare(b,"ja"));
    try{localStorage.setItem(FONT_STORE,JSON.stringify(localFams))}catch(e){}
    buildFontOptions();
    fontNote(localFams.length+"件のフォントを読み込みました。「この端末のフォント」から選べます（他の人の端末に無いフォントは標準の書体で表示されます）。");
  }catch(e){
    fontNote("フォントの読み込みが許可されませんでした。アドレスバーのアイコンから「フォント」を許可にして、もう一度お試しください。");
  }
}

/* ===== 文字描画 ===== */
function drawLine(c,t,x,y,conf,align){
  if(!t)return;
  c.save();
  c.font=fontSpec(conf);
  c.textAlign=align||"left";
  c.textBaseline="alphabetic";
  if(conf.strokeOn){
    c.lineJoin="round";c.lineCap="round";
    c.lineWidth=Math.max(2,conf.size*0.16);
    c.strokeStyle=conf.strokeColor;
    c.strokeText(t,x,y);
  }
  c.fillStyle=conf.color;
  c.fillText(t,x,y);
  c.restore();
}
function wrapByWidth(c,text,conf,maxW){
  c.save();c.font=fontSpec(conf);
  const out=[];
  String(text).split(/\r?\n/).forEach(par=>{
    if(par===""){out.push("");return}
    let line="";
    for(const ch of par){
      if(c.measureText(line+ch).width>maxW&&line){out.push(line);line=ch}
      else line+=ch;
    }
    out.push(line);
  });
  c.restore();
  return out;
}
function measureW(c,t,conf){
  c.save();c.font=fontSpec(conf);const w=c.measureText(t).width;c.restore();return w;
}
// 幅 maxW に収まるよう文字サイズだけ小さくした書式を返す（収まるならそのまま）
function fitConf(c,t,conf,maxW,minSize){
  if(!t||maxW<=0)return conf;
  const w=measureW(c,t,conf);
  if(w<=maxW)return conf;
  const size=Math.max(minSize||12,Math.floor(conf.size*maxW/w));
  return Object.assign({},conf,{size:size});
}

/* ===== 書式ダイアログ ===== */
let fmtTarget=null,fmtTitle="";
const fmtModal=document.getElementById("fmtModal");
const $id=id=>document.getElementById(id);
function paintFmt(){
  if(!fmtTarget)return;
  const c=fmtTarget;
  $id("fmtTitle").textContent=fmtTitle;
  $id("fmtSize").value=c.size;
  $id("fmtSizeVal").textContent=c.size;
  ensureFontOption(c.font);
  $id("fmtFont").value=c.font;
  $id("fmtColor").value=c.color;
  $id("fmtStrokeOn").checked=!!c.strokeOn;
  $id("fmtStrokeColor").value=c.strokeColor||"#ffffff";
  const alignRow=$id("fmtAlignRow");
  if(alignRow){
    alignRow.hidden=!c.align;
    document.querySelectorAll("#fmtAlign button").forEach(b=>b.classList.toggle("on",b.dataset.align===c.align));
  }
  // 背景色の行は、背景色を持つ書式（ランチの一言）のときだけ出す
  const bgRow=$id("fmtBgRow");
  if(bgRow){
    bgRow.hidden=!("bgOn" in c);
    if("bgOn" in c){$id("fmtBgOn").checked=!!c.bgOn;$id("fmtBgColor").value=c.bgColor||"#ffffff"}
  }
  fontNote(localFams.length?"":"「端末から読込」を押すと、このパソコンのフォントが選択肢に並びます。");
}
function openFmt(conf,title,sizeMin,sizeMax){
  fmtTarget=conf;fmtTitle=title||"書式";
  const s=$id("fmtSize");
  s.min=sizeMin||16;s.max=sizeMax||140;
  paintFmt();
  fmtModal.hidden=false;
}
function closeFmt(){fmtModal.hidden=true;fmtTarget=null}
if(fmtModal){
  $id("fmtClose").addEventListener("click",closeFmt);
  $id("fmtBack").addEventListener("click",closeFmt);
  const bindFmt=(id,fn)=>{
    const el=$id(id);if(!el)return;
    const h=()=>{if(!fmtTarget)return;fn(fmtTarget,el);draw();scheduleSave()};
    el.addEventListener("input",h);el.addEventListener("change",h);
  };
  bindFmt("fmtSize",(c,el)=>{c.size=Number(el.value);$id("fmtSizeVal").textContent=el.value});
  bindFmt("fmtFont",(c,el)=>{c.font=el.value});
  bindFmt("fmtColor",(c,el)=>{c.color=el.value});
  bindFmt("fmtStrokeOn",(c,el)=>{c.strokeOn=el.checked});
  bindFmt("fmtStrokeColor",(c,el)=>{c.strokeColor=el.value});
  bindFmt("fmtBgOn",(c,el)=>{c.bgOn=el.checked});
  bindFmt("fmtBgColor",(c,el)=>{c.bgColor=el.value});
  document.querySelectorAll("#fmtAlign button").forEach(b=>{
    b.addEventListener("click",()=>{
      if(!fmtTarget||!fmtTarget.align)return;
      fmtTarget.align=b.dataset.align;paintFmt();draw();scheduleSave();
    });
  });
  $id("fontLoad").addEventListener("click",loadLocalFonts);
}
buildFontOptions();

/* ===== 画像の位置・大きさダイアログ =====
   openAdjust({st, img?, cw, ch, shape:"circle"|"rect", f, radius?, title})
   img を省くと st.img を使う */
const adjModal=document.getElementById("adjModal");
const adjCv=document.getElementById("adjCanvas"),adjCtx=adjCv?adjCv.getContext("2d"):null;
let adjT=null;
const adjImg=t=>t&&(t.img||(t.st&&t.st.img));
function drawAdjust(){
  if(!adjT)return;
  const f=adjT.f,cw=Math.round(adjT.cw*f),ch=Math.round(adjT.ch*f);
  if(adjCv.width!==cw||adjCv.height!==ch){adjCv.width=cw;adjCv.height=ch}
  const st=adjT.st,img=adjImg(adjT);
  adjCtx.clearRect(0,0,cw,ch);
  adjCtx.fillStyle="#dce8ed";adjCtx.fillRect(0,0,cw,ch);
  adjCtx.save();
  if(adjT.shape==="circle"){adjCtx.beginPath();adjCtx.arc(cw/2,ch/2,Math.min(cw,ch)/2,0,Math.PI*2);adjCtx.clip()}
  else{roundedRect(adjCtx,0,0,cw,ch,(adjT.radius||18)*f);adjCtx.clip()}
  const iw=img.width,ih=img.height;
  const sc=Math.max(cw/iw,ch/ih)*st.scale;
  adjCtx.drawImage(img,cw/2-iw*sc/2+st.x*f,ch/2-ih*sc/2+st.y*f,iw*sc,ih*sc);
  adjCtx.restore();
  const pct=Math.round(st.scale*100);
  $id("adjZoom").value=pct;
  $id("adjZoomVal").textContent=pct+"%";
}
function openAdjust(t){
  if(!t||!t.st||!adjImg(t))return;
  adjT=t;
  $id("adjTitle").textContent=t.title||"位置と大きさ";
  adjModal.hidden=false;
  drawAdjust();
}
const adjPts=new Map();
let adjG=null;
function closeAdjust(){adjModal.hidden=true;adjT=null;adjPts.clear();adjG=null;draw();scheduleSave()}
const clampScale=s=>Math.min(4,Math.max(0.5,s));
const adjAvg=a=>({x:a.reduce((s,p)=>s+p.x,0)/a.length,y:a.reduce((s,p)=>s+p.y,0)/a.length});
const adjDist=a=>a.length<2?0:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);
function adjStart(){
  if(!adjT)return;
  const a=[...adjPts.values()],c=adjAvg(a);
  adjG={n:a.length,cx:c.x,cy:c.y,d:adjDist(a),x:adjT.st.x,y:adjT.st.y,scale:adjT.st.scale};
}
function adjEnd(e){
  if(!adjPts.has(e.pointerId))return;
  adjPts.delete(e.pointerId);
  if(adjPts.size)adjStart();
  else{adjG=null;draw();scheduleSave()}
}
if(adjModal){
  $id("adjClose").addEventListener("click",closeAdjust);
  $id("adjBack").addEventListener("click",closeAdjust);
  $id("adjDone").addEventListener("click",closeAdjust);
  $id("adjReset").addEventListener("click",()=>{
    if(!adjT)return;adjT.st.x=0;adjT.st.y=0;adjT.st.scale=1;drawAdjust();draw();scheduleSave();
  });
  $id("adjZoom").addEventListener("input",e=>{
    if(!adjT)return;adjT.st.scale=clampScale(Number(e.target.value)/100);drawAdjust();draw();scheduleSave();
  });
  adjCv.addEventListener("pointerdown",e=>{
    if(!adjT)return;
    e.preventDefault();
    try{adjCv.setPointerCapture(e.pointerId)}catch(err){}
    adjPts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    adjStart();
  });
  adjCv.addEventListener("pointermove",e=>{
    if(!adjT||!adjG||!adjPts.has(e.pointerId))return;
    adjPts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    const a=[...adjPts.values()];
    if(a.length!==adjG.n){adjStart();return}
    const rect=adjCv.getBoundingClientRect();
    const k=rect.width?adjT.cw/rect.width:1;
    const c=adjAvg(a);
    adjT.st.x=adjG.x+(c.x-adjG.cx)*k;
    adjT.st.y=adjG.y+(c.y-adjG.cy)*k;
    if(a.length>=2&&adjG.d>0)adjT.st.scale=clampScale(adjG.scale*adjDist(a)/adjG.d);
    drawAdjust();draw();
    e.preventDefault();
  },{passive:false});
  adjCv.addEventListener("pointerup",adjEnd);
  adjCv.addEventListener("pointercancel",adjEnd);
  adjCv.addEventListener("wheel",e=>{
    if(!adjT)return;
    e.preventDefault();
    adjT.st.scale=clampScale(adjT.st.scale*(e.deltaY<0?1.06:0.94));
    drawAdjust();draw();scheduleSave();
  },{passive:false});
}
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape")return;
  if(adjModal&&!adjModal.hidden)closeAdjust();
  else if(fmtModal&&!fmtModal.hidden)closeFmt();
});

/* ===== 自動保存（IndexedDB） =====
   各ページで STORE_KEY / IMG と、pageSnapshot・pageRestore・pageRebuild・pageAfterRestore・draw を用意する。
   - 入力欄（#ctl 内）と書式・位置は STORE_KEY に小さな JSON で保存
   - 画像は縮小した JPEG の Blob を「STORE_KEY:img:キー」に、選んだときだけ保存
   - data-nosave を付けた入力欄は保存しない */
const DB_NAME="tsumugiStore";
let dbPromise=null;
function idbOpen(){
  if(dbPromise)return dbPromise;
  dbPromise=new Promise((res,rej)=>{
    const r=indexedDB.open(DB_NAME,1);
    r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains("kv"))r.result.createObjectStore("kv")};
    r.onsuccess=()=>{
      const db=r.result;
      // 設定の「ローカルデータを削除」で DB を消すときは、この接続を手放す
      db.onversionchange=()=>{db.close();dbPromise=null};
      db.onclose=()=>{dbPromise=null};
      res(db);
    };
    r.onerror=()=>{dbPromise=null;rej(r.error)};
  });
  return dbPromise;
}
async function idbTx(mode,fn){
  for(let attempt=0;;attempt++){
    const db=await idbOpen();
    let tx;
    try{tx=db.transaction("kv",mode)}
    catch(e){dbPromise=null;if(attempt)throw e;continue}   // 接続が閉じられていたら開き直して一度だけ再試行
    return await new Promise((res,rej)=>{
      const rq=fn(tx.objectStore("kv"));
      tx.oncomplete=()=>res(rq?rq.result:undefined);
      tx.onerror=()=>rej(tx.error);
      tx.onabort=()=>rej(tx.error);
    });
  }
}
const idbGet=k=>idbTx("readonly",s=>s.get(k));
const idbPut=(k,v)=>idbTx("readwrite",s=>s.put(v,k));
const idbDel=k=>idbTx("readwrite",s=>s.delete(k));
const imgKey=k=>STORE_KEY+":img:"+k;

let restoring=true,saveTimer=null;
function scheduleSave(){
  if(restoring)return;
  clearTimeout(saveTimer);
  saveTimer=setTimeout(saveAll,700);
}
function snapshot(){
  const o={v:2,f:{},extra:pageSnapshot(),pos:{}};
  document.querySelectorAll("#ctl input[id],#ctl select[id],#ctl textarea[id]").forEach(el=>{
    if(el.type==="file"||el.hasAttribute("data-nosave"))return;
    o.f[el.id]=el.type==="checkbox"?el.checked:el.value;
  });
  Object.keys(IMG).forEach(k=>{
    const st=IMG[k];
    o.pos[k]={x:st.x||0,y:st.y||0,scale:st.scale||1,img:!!st.img};
  });
  return o;
}
async function saveAll(){
  clearTimeout(saveTimer);saveTimer=null;
  try{await idbPut(STORE_KEY,snapshot())}catch(e){}
}
function loadImgFrom(src){
  return new Promise(res=>{
    const im=new Image();
    im.onload=()=>res(im);im.onerror=()=>res(null);im.src=src;
  });
}
function shrinkToBlob(img){
  return new Promise(res=>{
    try{
      const max=1800;
      const sc=Math.min(1,max/Math.max(img.width,img.height));
      const c=document.createElement("canvas");
      c.width=Math.max(1,Math.round(img.width*sc));
      c.height=Math.max(1,Math.round(img.height*sc));
      c.getContext("2d").drawImage(img,0,0,c.width,c.height);
      c.toBlob(b=>res(b),"image/jpeg",0.85);
    }catch(e){res(null)}
  });
}
// サムネイル（id="thumb-キー"）と st.thumb をそろえる
function setThumb(k,url){
  const st=IMG[k];
  if(st.thumb&&st.thumb!==url&&st.thumb.slice(0,5)==="blob:")URL.revokeObjectURL(st.thumb);
  st.thumb=url||null;
  const th=document.getElementById("thumb-"+k);
  if(th){if(url)th.src=url;else th.removeAttribute("src")}
}
// ファイルから画像を読み込んで IMG[k] に入れ、縮小版を保存する
function loadImageFile(k,file,after){
  const url=URL.createObjectURL(file);
  const im=new Image();
  im.onload=async()=>{
    const st=IMG[k];
    st.img=im;st.x=0;st.y=0;st.scale=1;
    setThumb(k,url);
    if(after)after(k);
    draw();
    const blob=await shrinkToBlob(im);
    if(blob){
      try{await idbPut(imgKey(k),blob)}catch(e){}
    }
    scheduleSave();
  };
  im.onerror=()=>URL.revokeObjectURL(url);
  im.src=url;
}
function clearImage(k){
  const st=IMG[k];
  st.img=null;st.x=0;st.y=0;st.scale=1;
  setThumb(k,null);
  idbDel(imgKey(k)).catch(()=>{});
}
// 以前の保存形式（画像を dataURL で丸ごと持っていた形）を今の形にそろえる
function upgradeSaved(o){
  if(o&&o.v===2)return o;
  const src=o.img||o.pics||{};
  const pos={},legacy={};
  Object.keys(src).forEach(k=>{
    const p=src[k]||{};
    pos[k]={x:p.x,y:p.y,scale:p.scale,img:!!p.data};
    if(p.data)legacy[k]=p.data;
  });
  return {v:2,f:o.f||o.inputs||{},
    extra:o.extra||{order:o.order,pool:o.pool,tgOrder:o.tgOrder,tgPool:o.tgPool,tgConf:o.tgConf},
    pos:pos,legacy:legacy};
}
async function restoreAll(){
  let raw=null;
  try{raw=await idbGet(STORE_KEY)}catch(e){}
  if(raw){
    try{
      const o=upgradeSaved(raw);
      if(o.extra)pageRestore(o.extra);
      pageRebuild();
      Object.keys(o.f||{}).forEach(id=>{
        const el=document.getElementById(id);
        if(!el||el.type==="file"||el.hasAttribute("data-nosave"))return;
        if(el.type==="checkbox")el.checked=!!o.f[id];else el.value=o.f[id];
      });
      for(const k of Object.keys(o.pos||{})){
        const st=IMG[k],p=o.pos[k];
        if(!st||!p)continue;
        st.x=Number(p.x)||0;st.y=Number(p.y)||0;st.scale=Number(p.scale)||1;
        if(!p.img)continue;
        let blob=null;
        if(o.legacy&&o.legacy[k]){
          try{blob=await (await fetch(o.legacy[k])).blob();await idbPut(imgKey(k),blob)}catch(e){}
        }else{
          try{blob=await idbGet(imgKey(k))}catch(e){}
        }
        if(!(blob instanceof Blob))continue;
        const url=URL.createObjectURL(blob);
        const im=await loadImgFrom(url);
        if(!im){URL.revokeObjectURL(url);continue}
        st.img=im;
        setThumb(k,url);
      }
      pageAfterRestore();
      if(o.legacy)await saveAll();
    }catch(e){}
  }
  restoring=false;
  draw();
}
function bindAutoSave(){
  const box=document.getElementById("ctl");
  box.addEventListener("input",scheduleSave);
  box.addEventListener("change",scheduleSave);
  document.addEventListener("click",()=>scheduleSave());
  // 画面を離れる・アプリを切り替えるときは待たずに保存
  document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"&&saveTimer)saveAll()});
  const cl=document.getElementById("clearSaved");
  if(cl)cl.addEventListener("click",async()=>{
    const what=Object.keys(IMG).length?"入力内容と画像":"入力内容";
    if(!confirm("この画面に保存されている"+what+"を消して、最初の状態に戻します。よろしいですか？"))return;
    restoring=true;clearTimeout(saveTimer);
    try{
      await idbDel(STORE_KEY);
      for(const k of Object.keys(IMG))await idbDel(imgKey(k));
    }catch(e){}
    location.reload();
  });
}

/* ===== PNG 書き出し =====
   スマホ（タッチ操作の端末）では共有シートを開き、そのまま Instagram などへ送れるようにする。
   共有できないときはダウンロード。dpi を渡すと PNG に解像度情報（pHYs）を入れる */
const CRC_TABLE=(()=>{
  const t=new Uint32Array(256);
  for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;t[n]=c>>>0}
  return t;
})();
function crc32(bytes){
  let c=0xffffffff;
  for(let i=0;i<bytes.length;i++)c=CRC_TABLE[(c^bytes[i])&0xff]^(c>>>8);
  return (c^0xffffffff)>>>0;
}
async function pngWithDpi(blob,dpi){
  const src=new Uint8Array(await blob.arrayBuffer());
  const dv=new DataView(src.buffer);
  const ppm=Math.round(dpi/0.0254);
  const phys=new Uint8Array(21),pv=new DataView(phys.buffer);
  pv.setUint32(0,9);phys.set([0x70,0x48,0x59,0x73],4);   // "pHYs"
  pv.setUint32(8,ppm);pv.setUint32(12,ppm);phys[16]=1;   // 1 = メートル単位
  pv.setUint32(17,crc32(phys.subarray(4,17)));
  const parts=[src.subarray(0,8)];
  let p=8;
  while(p+8<=src.length){
    const len=dv.getUint32(p),end=p+12+len;
    const type=String.fromCharCode(src[p+4],src[p+5],src[p+6],src[p+7]);
    if(type!=="pHYs")parts.push(src.subarray(p,end));
    if(type==="IHDR")parts.push(phys);
    p=end;
  }
  return new Blob(parts,{type:"image/png"});
}
async function exportPng(cv,name,opt){
  opt=opt||{};
  let blob=await new Promise(r=>cv.toBlob(r,"image/png"));
  if(!blob)return;
  if(opt.dpi){try{blob=await pngWithDpi(blob,opt.dpi)}catch(e){}}
  const touch=!!(window.matchMedia&&matchMedia("(pointer: coarse)").matches);
  if(touch&&navigator.share&&navigator.canShare&&typeof File==="function"){
    const file=new File([blob],name,{type:"image/png"});
    if(navigator.canShare({files:[file]})){
      try{await navigator.share({files:[file]});return}
      catch(e){if(e&&e.name==="AbortError")return}   // 自分で閉じたときは何もしない。それ以外はダウンロードへ
    }
  }
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download=name;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),10000);
}
