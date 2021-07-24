
const data = [
    {'id':'1', 'title1':'秘密戦隊', 'title2':'ゴレンジャー', 'count':'5'},
    {'id':'2', 'title1':'ジャッカー', 'title2':'電撃隊', 'count':'5'},
    {'id':'3', 'title1':'バトルフィーバー', 'title2':'J', 'count':'5'},
    {'id':'4', 'title1':'電子戦隊', 'title2':'デンジマン', 'count':'5'},
    {'id':'5', 'title1':'太陽戦隊', 'title2':'サンバルカン', 'count':'3'},
    {'id':'6', 'title1':'大戦隊', 'title2':'ゴーグルファイブ', 'count':'5'},
    {'id':'7', 'title1':'科学戦隊', 'title2':'ダイナマン', 'count':'5'},
    {'id':'8', 'title1':'超電子', 'title2':'バイオマン', 'count':'5'},
    {'id':'9', 'title1':'電撃戦隊', 'title2':'チェンジマン', 'count':'5'},
    {'id':'10', 'title1':'超新星', 'title2':'フラッシュマン', 'count':'5'},
    {'id':'11', 'title1':'光戦隊', 'title2':'マスクマン', 'count':'5'},
    {'id':'12', 'title1':'超獣戦隊', 'title2':'ライブマン', 'count':'5'},
    {'id':'13', 'title1':'高速戦隊', 'title2':'ターボレンジャー', 'count':'5'},
    {'id':'14', 'title1':'地球戦隊', 'title2':'ファイブマン', 'count':'5'},
    {'id':'15', 'title1':'鳥人戦隊', 'title2':'ジェットマン', 'count':'5'},
    {'id':'16', 'title1':'恐竜戦隊', 'title2':'ジュウレンジャー', 'count':'6'},
    {'id':'17', 'title1':'五星戦隊', 'title2':'ダイレンジャー', 'count':'6'},
    {'id':'18', 'title1':'忍者戦隊', 'title2':'カクレンジャー', 'count':'6'},
    {'id':'19', 'title1':'超力戦隊', 'title2':'オーレンジャー', 'count':'6'},
    {'id':'20', 'title1':'激走戦隊', 'title2':'カーレンジャー', 'count':'6'},
    {'id':'21', 'title1':'電磁戦隊', 'title2':'メガレンジャー', 'count':'6'},
    {'id':'22', 'title1':'星獣戦隊', 'title2':'ギンガマン', 'count':'6'},
    {'id':'23', 'title1':'救急戦隊', 'title2':'ゴーゴーファイブ', 'count':'5'},
    {'id':'24', 'title1':'未来戦隊', 'title2':'タイムレンジャー', 'count':'6'},
    {'id':'25', 'title1':'百獣戦隊', 'title2':'ガオレンジャー', 'count':'6'},
    {'id':'26', 'title1':'忍風戦隊', 'title2':'ハリケンジャー', 'count':'6'},
    {'id':'27', 'title1':'爆竜戦隊', 'title2':'アバレンジャー', 'count':'6'},
    {'id':'28', 'title1':'特捜戦隊', 'title2':'デカレンジャー', 'count':'9'},
    {'id':'29', 'title1':'魔法戦隊', 'title2':'マジレンジャー', 'count':'8'},
    {'id':'30', 'title1':'轟轟戦隊', 'title2':'ボウケンジャー', 'count':'7'},
    {'id':'31', 'title1':'獣拳戦隊', 'title2':'ゲキレンジャー', 'count':'7'},
    {'id':'32', 'title1':'炎神戦隊', 'title2':'ゴーオンジャー', 'count':'7'},
    {'id':'33', 'title1':'侍戦隊', 'title2':'シンケンジャー', 'count':'6'},
    {'id':'34', 'title1':'天装戦隊', 'title2':'ゴセイジャー', 'count':'6'},
    {'id':'35', 'title1':'海賊戦隊', 'title2':'ゴーカイジャー', 'count':'6'},
    {'id':'36', 'title1':'特命戦隊', 'title2':'ゴーバスターズ', 'count':'5'},
    {'id':'37', 'title1':'獣電戦隊', 'title2':'キョウリュウジャー', 'count':'11'},
    {'id':'38', 'title1':'烈車戦隊', 'title2':'トッキュウジャー', 'count':'7'},
    {'id':'39', 'title1':'手裏剣戦隊', 'title2':'ニンニンジャー', 'count':'9'},
    {'id':'40', 'title1':'動物戦隊', 'title2':'ジュウオウジャー', 'count':'7'},
    {'id':'41', 'title1':'宇宙戦隊', 'title2':'キュウレンジャー', 'count':'12'},
    {'id':'42', 'title1':'快盗戦隊', 'title2':'ルパンレンジャー', 'count':'4'},
    {'id':'43', 'title1':'警察戦隊', 'title2':'パトレンジャー', 'count':'4'},
    {'id':'44', 'title1':'騎士竜戦隊', 'title2':'リュウソウジャー', 'count':'8'},
    {'id':'45', 'title1':'魔進戦隊', 'title2':'キラメイジャー', 'count':'6'},
    {'id':'46', 'title1':'機界戦隊', 'title2':'ゼンカイジャー', 'count':'6'},
    {'id':'47', 'title1':'非公認戦隊', 'title2':'アキバレンジャー', 'count':'3'}
 ];
 
 const data_tmp1 = data.concat();
 const data_tmp2 = data.concat();
 
 window.addEventListener("load", () => {
     createList();
     var btnCheck = document.getElementById("btnCheck");
     btnCheck.addEventListener("click", checkValue, false);
 }, false);
 
 function createList(){
     for (let i = data_tmp1.length - 1; i >= 0; i--){
         let rand = Math.floor( Math.random() * (i+1) );
         [data_tmp1[i], data_tmp1[rand]] = [data_tmp1[rand], data_tmp1[i]];
     }
     for (let i = data_tmp2.length - 1; i >= 0; i--){
         let rand = Math.floor( Math.random() * (i+1) );
         [data_tmp2[i], data_tmp2[rand]] = [data_tmp2[rand], data_tmp2[i]];
     }
 
     const sb1 = [];
     sb1.push("<select id='title1'>");
     for (let i=0;i<data.length;i++){
         sb1.push(`<option value="${data_tmp1[i]['id']}">${data_tmp1[i]['title1']}</option>`);
     }
     sb1.push("</select>");
     document.getElementById("cell1").innerHTML = sb1.join("");
 
     const sb2 = [];
     sb2.push("<select id='title2'>");
     for (let i=0;i<data.length;i++){
         sb2.push(`<option value="${data_tmp2[i]['id']}">${data_tmp2[i]['title2']}</option>`);
     }
     sb2.push("</select>");
     document.getElementById("cell2").innerHTML = sb2.join("");
 
     const sb3 = [];
     sb3.push("<select id='count'>");
     for (let i=1;i<20;i++){
         sb3.push(`<option value='${i}'>${i}</option>`);
     }
     sb3.push("</select>");
     document.getElementById("cell3").innerHTML = sb3.join("");
 
     document.getElementById("title1").disabled = "";
     document.getElementById("title2").disabled = "";
     const fixedTitle = ((+new Date()) % 2 === 0) ? "title1" : "title2";
     document.getElementById(fixedTitle).disabled = "disabled";
 }
 
 function checkValue(){
     clearInfo();
 
     const title1 = document.getElementById("title1");
     const title2 = document.getElementById("title2");
     const count  = document.getElementById("count");
 
     const v1 = title1.value;
     const v2 = title2.value;
     const v3 = count.value;
     const c  = data[v1-1]["count"];
 
     if (v1 !== v2) {
         document.getElementById("info").innerHTML = "タイトルが正しくありません";
         return;
     } 

     if (c !== v3) {
         document.getElementById("info").innerHTML = "人数が正しくありません";
         return;
     }
 
     
 
     const t1 = title1.options[title1.selectedIndex].text;
     const t2 = title2.options[title2.selectedIndex].text;
 
     const info = [];
     info.push(`<h2>${t1 + t2}</h2>`);
     info.push(`<ul>`);
     info.push(`<li><a href="https://www.google.co.jp/search?tbm=isch&q=${encodeURI(t1 + t2)}" target="_blank">Google画像検索</a></li>`);
     info.push(`<li><a href="https://ja.wikipedia.org/wiki/${encodeURI(t1 + t2)}" target="_blank">Wikipedia</a></li>`);
     info.push(`</ul>`);
     info.push(`<input type="button" id="btnReload" value="もう一度遊ぶ">`);
     document.getElementById("info").innerHTML = info.join("");
 
     const btnReload = document.getElementById("btnReload");
     btnReload.addEventListener("click", () => {
         createList();
         clearInfo();
     }, false);
 }
 
 function clearInfo(){
     document.getElementById("info").innerHTML = "";
 }