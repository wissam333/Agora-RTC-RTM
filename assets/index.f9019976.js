var z=Object.defineProperty,Y=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var j=(e,a,s)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,f=(e,a)=>{for(var s in a||(a={}))K.call(a,s)&&j(e,s,a[s]);if(L)for(var s of L(a))X.call(a,s)&&j(e,s,a[s]);return e},U=(e,a)=>Y(e,J(a));import{A as D,d as q,m as y,r as v,o as l,c as m,a as t,b as _,w as p,p as B,e as S,f as R,g as P,F as I,h as w,i as k,v as C,n as M,t as c,j as F,k as Q,l as H,q as Z,s as ee,u as te,x as ae,y as se,z as ne}from"./vendor.d3174eb2.js";const ie=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};ie();let g=D.createClient({mode:"rtc",codec:"vp8"});const A=q({id:"RTC",state:()=>({search:"",appId:"f58c8e903d44449bb38abb1776060cd6",channel:"main",token:"006f58c8e903d44449bb38abb1776060cd6IAB1DXKEQTLxoXjIeJc1FYpQOoqcSZTpEpf4KNW7ChqwgmTNKL8AAAAAEACKbcvBWvFiYgEAAQBa8WJi",remoteTracks:{},localTracks:[],uid:void 0}),getters:{doubleCount:e=>e.counter*2},actions:{channelName(e,a){this.channel=e+" "+a,this.channel="main"},async handleUserJoined(e,a){if(this.remoteTracks[e.uid]=e,await g.subscribe(e,a),a==="video"){let s=document.getElementById(`user-container-${e.uid}`);s!=null&&s.remove(),s=`<div class="video-container" style="margin: 11px" id="user-container-${e.uid}">
                        <div class="video-player" style="width: 100%; height: 100%; object-fit: cover;" id="user-${e.uid}"></div>
                    </div>`,document.getElementById("video-streams").insertAdjacentHTML("beforeend",s),e.videoTrack.play(`user-${e.uid}`)}a==="audio"&&e.audioTrack.play()},async handleUserLeft(e){delete this.remoteTracks[e.uid],document.getElementById(`user-container-${e.uid}`).remove()},async createStreams(){if(this.channel){let e=this.uid=await g.join(this.appId,this.channel,this.token,null);g.on("user-published",this.handleUserJoined),g.on("user-left",this.handleUserLeft),g.on("liveStreamingStarted"),this.localTracks=await D.createMicrophoneAndCameraTracks(),await g.publish([this.localTracks[0],this.localTracks[1]]);let a=`<div class="video-container" style="margin: 11px" id="user-container-${e}">
                        <div class="video-player" style="width: 100%; height: 100%; object-fit: cover;" id="user-${e}"></div>
                    </div>`;document.getElementById("video-streams").insertAdjacentHTML("beforeend",a),this.localTracks[1].play(`user-${e}`),document.getElementById("stream-controls").style.display="flex"}else alert("this user is busy")},async leaveAndRemoveLocalStream(){for(let e=0;this.localTracks.length>e;e++)this.localTracks[e].stop(),this.localTracks[e].close();await g.leave(),document.getElementById("stream-controls").style.display="none",document.getElementById("video-streams").innerHTML=""},async toggleMic(){this.localTracks[0].muted?(await this.localTracks[0].setMuted(!1),document.getElementById("mic-btn").innerText="Mic on",document.getElementById("mic-btn").style.backgroundColor="cadetblue"):(await this.localTracks[0].setMuted(!0),document.getElementById("mic-btn").innerText="Mic off",document.getElementById("mic-btn").style.backgroundColor="#EE4B2B")},async toggleCamera(){this.localTracks[1].muted?(await this.localTracks[1].setMuted(!1),document.getElementById("camera-btn").innerText="Camera on",document.getElementById("camera-btn").style.backgroundColor="cadetblue"):(await this.localTracks[1].setMuted(!0),document.getElementById("camera-btn").innerText="Camera off",document.getElementById("camera-btn").style.backgroundColor="#EE4B2B")}}});var oe="/Agora-RTC-RTM/assets/1.37fb282d.png";var h=(e,a)=>{const s=e.__vccOpts||e;for(const[d,o]of a)s[d]=o;return s};const re={name:"Sidebar",data:function(){return{active:"home"}},methods:f({},y(A,["createStreams"]))},u=e=>(B("data-v-7120e22e"),e=e(),S(),e),de={class:"sidebar"},le={class:"left-side"},ce=u(()=>t("li",{class:"logo"},[t("img",{src:oe,alt:"LOGO"})],-1)),me=u(()=>t("i",{class:"fas fa-home"},null,-1)),_e=u(()=>t("p",null,"Home",-1)),ue=u(()=>t("i",{class:"fas fa-star"},null,-1)),pe=u(()=>t("p",null,"Laddar",-1)),he=u(()=>t("i",{class:"fas fa-user-friends"},null,-1)),fe=u(()=>t("p",null,"Friends",-1)),ve=u(()=>t("i",{class:"fas fa-comment-dots"},null,-1)),ge=u(()=>t("p",null,"Chat",-1)),Ae=u(()=>t("i",{class:"fas fa-globe"},null,-1)),ye=u(()=>t("p",null,"Global",-1)),be=u(()=>t("i",{class:"fas fa-video"},null,-1)),$e=R('<div class="right-side" data-v-7120e22e><div class="card" data-v-7120e22e></div><div class="card" data-v-7120e22e></div><div class="card" data-v-7120e22e></div><div class="card" data-v-7120e22e></div><div class="card" data-v-7120e22e></div><div class="card" data-v-7120e22e></div></div>',1);function ke(e,a,s,d,o,r){const i=v("router-link");return l(),m("div",de,[t("nav",le,[t("ul",null,[ce,_(i,{to:"/",tag:"li"},{default:p(()=>[me,_e]),_:1}),_(i,{to:"/star",tag:"li"},{default:p(()=>[ue,pe]),_:1}),_(i,{to:"/Friends",tag:"li"},{default:p(()=>[he,fe]),_:1}),_(i,{to:"/chatting",tag:"li"},{default:p(()=>[ve,ge]),_:1}),_(i,{to:"/global",tag:"li"},{default:p(()=>[Ae,ye]),_:1}),_(i,{class:"stream",tag:"li",to:"/video",id:"join-btn",onClick:a[0]||(a[0]=n=>e.createStreams())},{default:p(()=>[be]),_:1})])]),$e])}var Ce=h(re,[["render",ke],["__scopeId","data-v-7120e22e"]]);const Be={name:"App",components:{Sidebar:Ce}},Se={id:"app"},Ie={class:"right-left-sidebar col-md-0"},we={class:"home"};function Te(e,a,s,d,o,r){const i=v("Sidebar"),n=v("router-view");return l(),m("div",Se,[t("div",Ie,[_(i)]),t("div",we,[_(n)])])}var Ee=h(Be,[["render",Te]]),T=[{id:1,first_name:"Jone",last_name:"Mackleden",email:"jmackleden0@ocn.ne.jp",gender:"Male",star:"5252",online:!1,friend:!1},{id:2,first_name:"Marsiella",last_name:"Figura",email:"mfigura1@purevolume.com",gender:"Female",star:"8549",online:!1,friend:!1},{id:3,first_name:"Cherey",last_name:"Jenks",email:"cjenks2@nymag.com",gender:"Female",star:"8433",online:!1,friend:!1},{id:4,first_name:"Sloane",last_name:"Matyashev",email:"smatyashev3@princeton.edu",gender:"Female",star:"1860",online:!0,friend:!0},{id:5,first_name:"Daune",last_name:"von Nassau",email:"dvonnassau4@stanford.edu",gender:"Male",star:"313",online:!0,friend:!0},{id:6,first_name:"Whitman",last_name:"Sandcraft",email:"wsandcraft5@netvibes.com",gender:"Male",star:"622",online:!0,friend:!1},{id:7,first_name:"Alayne",last_name:"Songer",email:"asonger6@plala.or.jp",gender:"Male",star:"381",online:!0,friend:!1},{id:8,first_name:"Fayina",last_name:"Packwood",email:"fpackwood7@plala.or.jp",gender:"Male",star:"61",online:!0,friend:!1},{id:9,first_name:"Austina",last_name:"Scherer",email:"ascherer8@woothemes.com",gender:"Male",star:"04",online:!0,friend:!1},{id:10,first_name:"Meridel",last_name:"Klos",email:"mklos9@freewebs.com",gender:"Female",star:"4788",online:!1,friend:!1},{id:11,first_name:"Lib",last_name:"Coffee",email:"lcoffeea@cargocollective.com",gender:"Female",star:"8845",online:!1,friend:!0},{id:12,first_name:"Kathy",last_name:"Geere",email:"kgeereb@geocities.jp",gender:"Bigender",star:"8",online:!0,friend:!0},{id:13,first_name:"Ettore",last_name:"Karpe",email:"ekarpec@hexun.com",gender:"Female",star:"2341",online:!0,friend:!0},{id:14,first_name:"Faydra",last_name:"Guion",email:"fguiond@nyu.edu",gender:"Female",star:"9",online:!0,friend:!1},{id:15,first_name:"Natala",last_name:"Reynolds",email:"nreynoldse@google.es",gender:"Female",star:"5",online:!0,friend:!1},{id:16,first_name:"Deeyn",last_name:"Nowell",email:"dnowellf@flavors.me",gender:"Agender",star:"284",online:!1,friend:!1},{id:17,first_name:"Shauna",last_name:"Dalston",email:"sdalstong@fotki.com",gender:"Polygender",star:"4",online:!0,friend:!1},{id:18,first_name:"Aurelea",last_name:"Atthowe",email:"aatthoweh@amazon.co.jp",gender:"Female",star:"49",online:!1,friend:!0},{id:19,first_name:"Anthia",last_name:"Doram",email:"adorami@ovh.net",gender:"Genderqueer",star:"6247",online:!0,friend:!0},{id:20,first_name:"Abigale",last_name:"Lesek",email:"alesekj@vkontakte.ru",gender:"Male",star:"7447",online:!0,friend:!1}],E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURVEtp///////+U8vn1ItrUcomPr7+sm83LSm0KWWxNLH5WpRrodyu+Xb8xVNnAIAAATlSURBVHja7ZrPax5FGMcHZoog9LBzWJu0OcwcttY2sDAbX/taYWAnCnp54c1La9PLrrKC8aJQTwqW8oJiBYu8hYI9eBEqCGpJLf44hBpBiVB79o/xmZn3rd2ag4fdVsr3E5L3zWTIfPaZZ56ZZJcxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A+IonD+1TkjmOMiZ8zkwnFqiR3orbPxrTU9CORCcOf88I4VVpQuYF1w8IPmzjFj6Ht65aYXARMgASt4btYmBA1kYggszx2FwDeOmbC8cwGX8zxMBY9fzamrH360Vxo7F8iFNYaZn6j1drBczEdnOcBe+dHzDU0/N+bUtUrrRK9cOlDEq81pcsytL5NEa3X9F4qM6FjA8UGWEFsUaTb6vkp0EnhjOxdB0LLNa4nOSCuRqx+POOtYIGcvpZo4MXLF+u86bWhwrdJGHtou/c95wa4kTUVR0TqrsovjnHWbB3YegWMjXvygUxkDoJKsemsjRKD8VTYyNMoqbVZ2u44AY4PU//alkT1XSUVDUwToQ2o1K5ktipP1fFLi5CyN8rwXgadH65fj2IvxskNjCtD628pHXy9yI5mWrheBpzbOhFwIg4WrTasZpeDZzC+AMH5QyI6NRC8Cy/xCpVUYRdELzUCij2wwc/feuohUpNWLwOqrYf6bpGl8JZD+c5mx01JJpbOGWqOAlFumH4EdJasmhFrSi6S1KOvp2uVEqrT2c6KbJhqsFr0IpJWUiXrz0t7e1Xf9IqCBZXp4M6V3dXb9873fPpkvUFXt9iKgqAKo925MJmuTzT/C8CSwNCSBbOW236DELRnXon6tFwEq9dVfGzZm+JVQDhKVXq4oAh+EguXKnyVBJepIyUTeuUCi06UJiztjvnm3ivWQrr/aGoeSnLOJ1yGBldz2ISDVrrMmCpQ3Y7hlrZvV7VB7uXHuTOadtNote5gCmdCqt/EM4PjzQYDWokoPi5D1jjbu9S+CgD5f8h5yQE1t7o8HYQM68M69wvOpibsPnYbWd6QvUsmdPiKQPWMKOu2YeEhZu7kQOLoRBcKZ8awM2Xm8lzpw2BY00jy2xen5+PJ4UYQp8GbFORlq9bFR0b1AfZ5Z6y/TD+bEufn+S/PtTMwBOiTyqvY709GNgncu8OAe86ePNpXj7fvaCnYhLM/lXLB+BQTjF2oSkMnyuNV3JwikvG8ByoWdWikp0xOtRvZd3BNv9C/Avo0CrYTnNi4OdZv1L3BTeQH5OhP3C7wYChTth6J3gWe9QFLfaR+hD0aBzx6CwEFaAyRwsfVXFB/Ked/iIQlU0/vbCj5YRKB/gRdSX3XbAszO+04fQhIOH7XAYF+B049aABGAwP9GQEAAAhCAAAQgAAEIQAACEIAABCAAgcdIwJaD8A/oesZdW8DfsmoLWDvvO+3wKQbLhpm/ZV/PTOsuyDD79/9CLBvEvlPT3R2TksVHOOpZ+6qejK0X233P6BgB0V0EuHh5kQOtqxpkUiutp+2+T8xzwHYZgWG8TzzLW+3DeOt2+kC0Yt9ph0/SWH7yK8/7u6KVhM+F1q9n+/adie6eI8ltmYdnyeKtwX+u1kzWxmtG7Nd3nHf4XF2xuA/8QFCNza3gzuzft+vnWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI8rfwMNx+GFBOjbGwAAAABJRU5ErkJggg==";const Me={name:"home",data:function(){return{users:T}},created(){},methods:f({},y(A,["createStreams","channelName"])),computed:U(f({},P(A,["search"])),{filterdUsers:function(){return this.users.filter(e=>e.first_name.match(this.search)||e.last_name.match(this.search))}})},V=e=>(B("data-v-228b92fc"),e=e(),S(),e),Fe={class:"users"},xe={class:"profile-img"},Oe=V(()=>t("img",{src:E,alt:""},null,-1)),Le={class:"cardBody"},je={class:"desc"},Ue=V(()=>t("div",{id:"stream-wrapper"},[t("div",{id:"video-streams"})],-1)),Ne=F("Join Stream");function De(e,a,s,d,o,r){const i=v("router-link");return l(),m("div",Fe,[(l(!0),m(I,null,w(r.filterdUsers,n=>k((l(),m("div",{class:"card col-lg-3 col-md-4",key:n.id},[t("div",xe,[Oe,t("span",{class:M(["online",n.online?"active":""])},null,2)]),t("div",Le,[t("div",je,[t("h5",null,c(n.first_name)+" "+c(n.last_name),1),t("p",null,"SuperStar: "+c(n.star/100)+"!",1),t("p",null,"Gender: "+c(n.gender),1),Ue,k(_(i,{class:"btn btn-success",tag:"button",to:"/video",id:"join-btn",onClick:O=>{e.channelName(n.first_name,n.last_name),e.createStreams()}},{default:p(()=>[Ne]),_:2},1032,["onClick"]),[[C,n.online]])])])])),[[C,n.online]])),128))])}var Re=h(Me,[["render",De],["__scopeId","data-v-228b92fc"]]);const Ve={name:"star",data:function(){return{users:T}},methods:f({},y(A,["createStreams","channelName"])),computed:{filterdUsers:function(){return this.users.filter(e=>e.first_name.match(this.$root.search)||e.last_name.match(this.$root.search))}}},W=e=>(B("data-v-606284cc"),e=e(),S(),e),We={class:"users"},Ge={class:"profile-img"},ze=W(()=>t("img",{src:E,alt:""},null,-1)),Ye={class:"cardBody"},Je={class:"desc"},Ke=W(()=>t("div",{id:"stream-wrapper"},[t("div",{id:"video-streams"})],-1)),Xe=F("Join Stream");function qe(e,a,s,d,o,r){const i=v("router-link");return l(),m("div",We,[(l(!0),m(I,null,w(e.users,n=>(l(),m("div",{class:"card col-lg-3 col-md-4",key:n.id},[t("div",Ge,[ze,t("span",{class:M(["online",n.online?"active":""])},null,2)]),t("div",Ye,[t("div",Je,[t("h5",null,c(n.first_name)+" "+c(n.last_name),1),t("p",null,"SuperStar: "+c(n.star/100)+"!",1),t("p",null,"Gender: "+c(n.gender),1),Ke,k(_(i,{class:"btn btn-success",tag:"button",to:"/video",id:"join-btn",onClick:a[0]||(a[0]=O=>e.joinStream())},{default:p(()=>[Xe]),_:2},1536),[[C,n.online]])])])]))),128))])}var Pe=h(Ve,[["render",qe],["__scopeId","data-v-606284cc"]]);const Qe={name:"videochat",props:["timer"],methods:f({},y(A,["leaveAndRemoveLocalStream","toggleCamera","toggleMic"]))},He={class:"videochat"},Ze={id:"stream-wrapper"},et={id:"video-streams"},tt={id:"stream-controls"};function at(e,a,s,d,o,r){return l(),m("div",He,[t("div",Ze,[t("div",et,[t("h1",null,c(s.timer),1)]),t("div",tt,[t("button",{id:"leave-btn",onClick:a[0]||(a[0]=i=>e.leaveAndRemoveLocalStream())}," Leave Stream "),t("button",{id:"mic-btn",onClick:a[1]||(a[1]=i=>e.toggleMic())},"Mic On"),t("button",{id:"camera-btn",onClick:a[2]||(a[2]=i=>e.toggleCamera())},"Camera on")])])])}var st=h(Qe,[["render",at],["__scopeId","data-v-12716ab6"]]);const nt={name:"videos",data(){return{timerCount:"40000",timer:""}},methods:f({},y(A,["leaveAndRemoveLocalStream"])),components:{videochat:st},watch:{timerCount:{handler(e){e>0&&setTimeout(()=>{this.timerCount--;let a=Math.floor(this.timerCount%3600%60),s=Math.floor(this.timerCount%3600/60),d=Math.floor(this.timerCount/3600);s.toString().length<=1&&(s="0"+s.toString()),d.toString().length<=1&&(d="0"+d.toString()),this.timer=d+":"+s+":"+a},1e3),e==60&&alert("30 second left !!!"),e==0&&leaveAndRemoveLocalStream()},immediate:!0}}},it={class:"videos"};function ot(e,a,s,d,o,r){const i=v("videochat");return l(),m("div",it,[_(i,{timer:o.timer},null,8,["timer"])])}var rt=h(nt,[["render",ot]]);const dt={name:"friends",data:function(){return{users:T}},methods:f({},y(A,["createStreams","channelName"])),computed:{filterdUsers:function(){return this.users.filter(e=>e.first_name.match(this.$root.search)||e.last_name.match(this.$root.search))}}},G=e=>(B("data-v-7e179588"),e=e(),S(),e),lt={class:"users"},ct={class:"profile-img"},mt=G(()=>t("img",{src:E,alt:""},null,-1)),_t={class:"cardBody"},ut={class:"desc"},pt=G(()=>t("div",{id:"stream-wrapper"},[t("div",{id:"video-streams"})],-1)),ht=F("Join Stream");function ft(e,a,s,d,o,r){const i=v("router-link");return l(),m("div",lt,[(l(!0),m(I,null,w(r.filterdUsers,n=>k((l(),m("div",{class:"card col-lg-3 col-md-4",key:n.id},[t("div",ct,[mt,t("span",{class:M(["online",n.online?"active":""])},null,2)]),t("div",_t,[t("div",ut,[t("h5",null,c(n.first_name)+" "+c(n.last_name),1),t("p",null,"SuperStar: "+c(n.star/100)+"!",1),t("p",null,"Gender: "+c(n.gender),1),pt,k(_(i,{class:"btn btn-success",tag:"button",to:"/video",id:"join-btn",onClick:O=>{e.channelName(n.first_name,n.last_name),e.createStreams()}},{default:p(()=>[ht]),_:2},1032,["onClick"]),[[C,n.online]])])])])),[[C,n.friend]])),128))])}var vt=h(dt,[["render",ft],["__scopeId","data-v-7e179588"]]);const gt={name:"chatting",data:function(){return{users:T}}},b=e=>(B("data-v-0e1e8211"),e=e(),S(),e),At={class:"chatting"},yt=b(()=>t("div",{class:"search"},null,-1)),bt=b(()=>t("div",{class:"select"},null,-1)),$t={class:"chat-users"},kt=b(()=>t("div",{class:"media-aside"},[t("img",{src:E,alt:"profile-img"})],-1)),Ct={class:"media-body"},Bt={class:"name"},St=b(()=>t("div",{class:"last-message"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut earum necessitatibus quidem quos vitae, nemo, officia laudantium reprehenderit tempore voluptatibus adipisci omnis nihil deleniti? Soluta, quam. Itaque, reprehenderit eius. ",-1)),It=b(()=>t("span",{class:"status"},null,-1)),wt=b(()=>t("div",{class:"chat-body"},null,-1));function Tt(e,a,s,d,o,r){const i=v("router-link");return l(),m("div",At,[yt,bt,t("div",$t,[(l(!0),m(I,null,w(e.users,n=>(l(),Q(i,{to:`chatting/${n.first_name}`,tag:"div",class:"user",key:n.id,first_name:n.first_name},{default:p(()=>[kt,t("div",Ct,[t("p",Bt,c(n.first_name)+" "+c(n.last_name),1),St,It])]),_:2},1032,["to","first_name"]))),128))]),wt])}var Et=h(gt,[["render",Tt],["__scopeId","data-v-0e1e8211"]]);const Mt={};let N={uid:"",token:"d460c130220e4941a265909240fe0088"};const Ft="d460c130220e4941a265909240fe0088",$=H.createInstance(Ft);$.on("MessageFromPeer",function(e){let a=JSON.stringify(e.text),s=document.createElement("div");document.getElementById("message__inner").appendChild(s).append(a.substr(1,a.length-2)),s.setAttribute("class","message__bubble hismessages")});$.on("ConnectionStateChanged",function(e,a){console.log("State changed To: "+e+" Reason: "+a)});const xt={name:"ChattingBody",props:["first_name"],data:function(){return{channel:"main"}},methods:{login:async function(){N.uid=document.getElementById("userID").value.toString(),await $.login(N)},logout:async function(){await $.logout()},send_peer_message:async function(){let e=this.first_name,a=document.getElementById("peerMessage").value.toString();document.getElementById("userID").value.toString(),await $.sendMessageToPeer({text:a},e).then(s=>{if(s.hasPeerReceived){let d=document.createElement("div");document.getElementById("message__inner").appendChild(d).append(a),d.setAttribute("class","message__bubble mymessages")}else{let d=document.createElement("div");document.getElementById("message__inner").appendChild(d).append(a),d.setAttribute("class","message__bubble mymessages")}})}}},Ot={class:"chattingBody"},Lt={id:"chat",class:"chat"},jt={class:"friend-name"},Ut={class:"person"},Nt={id:"loginForm"},Dt={class:"login",style:{"margin-top":"0px","margin-bottom":"0px"}},Rt={class:"content",style:{"margin-bottom":"0px","margin-top":"10px"}},Vt=t("div",{class:"input-field"},[t("label",null,"User ID"),t("input",{type:"text",placeholder:"User ID",id:"userID"})],-1),Wt=R('<hr><div id="log" class="log"><div class="message__chat"><div class="message__outer"><div class="message__avatar"></div><div id="message__inner" class="message__inner"><div class="message__actions"><ul class="menu"></ul></div><div class="message__spacer"></div></div><div class="message__status"><span class="avatar"></span></div></div></div></div>',2),Gt={class:"input-field channel-padding"},zt={action:""},Yt=t("input",{class:"message",type:"text",placeholder:"peer message",id:"peerMessage"},null,-1);function Jt(e,a,s,d,o,r){return l(),m("div",Ot,[t("div",Lt,[t("h3",jt,c(s.first_name),1),t("div",Ut,[t("form",Nt,[t("div",null,[t("div",Dt,[t("div",Rt,[Vt,t("div",null,[t("div",null,[t("button",{onClick:a[0]||(a[0]=i=>r.login()),type:"button",id:"login"},"LOGIN"),t("button",{onClick:a[1]||(a[1]=i=>r.logout()),type:"button",id:"logout"},"LOGOUT")])])])])])]),Wt])]),t("div",Gt,[t("form",zt,[Yt,t("input",{class:"sendMessage btn btn-success",onClick:a[2]||(a[2]=i=>r.send_peer_message()),type:"button",id:"send_peer_message",value:"SEND"})])])])}var Kt=h(xt,[["render",Jt]]);const Xt={},qt={apiKey:"AIzaSyBVSGxpdnZI1uDfAcniOGrdU0Wp2pByjHY",authDomain:"agora-app-850d6.firebaseapp.com",projectId:"agora-app-850d6",storageBucket:"agora-app-850d6.appspot.com",messagingSenderId:"13643113872",appId:"1:13643113872:web:7131c4d792ba6911d9ff15",measurementId:"G-FK7493MX82"},Pt=Z(qt);ee(Pt);const Qt=te({history:ae("/Agora-RTC-RTM/"),routes:[{path:"/",name:"home",component:Re},{path:"/star",name:"star",component:Pe},{path:"/video",name:"video",component:rt},{path:"/Friends",name:"Friends",component:vt},{path:"/chatting",name:"chatting",component:Et},{path:"/:first_name",name:"ChattingBody",component:Kt,props:!0},{path:"/global",name:"global",component:Mt},{path:"/login",name:"login",component:Xt}]});const x=se(Ee);x.use(ne());x.use(Qt);x.mount("#app");
