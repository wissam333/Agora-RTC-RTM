var z=Object.defineProperty,Y=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(e,a,n)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,f=(e,a)=>{for(var n in a||(a={}))J.call(a,n)&&j(e,n,a[n]);if(U)for(var n of U(a))P.call(a,n)&&j(e,n,a[n]);return e},N=(e,a)=>Y(e,q(a));import{A as R,d as K,m as D,o as d,c,a as t,w as y,v as Q,b as $,r as v,e as u,f as p,p as B,g as S,h as X,F as I,i as T,j as C,n as x,t as m,k as L,l as Z,q as ee,s as te,u as ae,x as ne,y as se}from"./vendor.9d8ae9ef.js";const oe=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};oe();let A=R.createClient({mode:"rtc",codec:"vp8"});const g=K({id:"counter",state:()=>({search:"",appId:"f58c8e903d44449bb38abb1776060cd6",channel:"main",token:"006f58c8e903d44449bb38abb1776060cd6IABZNmWLaQqG5VprnFRlyEuLDkr3A8bzK8bymE4CFdWf32TNKL8AAAAAEABrDG+dpgVIYgEAAQCmBUhi",remoteTracks:{},localTracks:[],uid:void 0}),getters:{doubleCount:e=>e.counter*2},actions:{channelName(e,a){this.channel=e+" "+a,this.channel="main"},async handleUserJoined(e,a){if(this.remoteTracks[e.uid]=e,await A.subscribe(e,a),a==="video"){let n=document.getElementById(`user-container-${e.uid}`);n!=null&&n.remove(),n=`<div class="video-container" style="margin: 11px" id="user-container-${e.uid}">
                        <div class="video-player" style="width: 100%; height: 100%; object-fit: cover;" id="user-${e.uid}"></div>
                    </div>`,document.getElementById("video-streams").insertAdjacentHTML("beforeend",n),e.videoTrack.play(`user-${e.uid}`)}a==="audio"&&e.audioTrack.play()},async handleUserLeft(e){delete this.remoteTracks[e.uid],document.getElementById(`user-container-${e.uid}`).remove()},async createStreams(){if(this.channel){let e=this.uid=await A.join(this.appId,this.channel,this.token,null);A.on("user-published",this.handleUserJoined),A.on("user-left",this.handleUserLeft),A.on("liveStreamingStarted"),this.localTracks=await R.createMicrophoneAndCameraTracks(),await A.publish([this.localTracks[0],this.localTracks[1]]);let a=`<div class="video-container" style="margin: 11px" id="user-container-${e}">
                        <div class="video-player" style="width: 100%; height: 100%; object-fit: cover;" id="user-${e}"></div>
                    </div>`;document.getElementById("video-streams").insertAdjacentHTML("beforeend",a),this.localTracks[1].play(`user-${e}`),document.getElementById("stream-controls").style.display="flex"}else alert("this user is busy")},async leaveAndRemoveLocalStream(){for(let e=0;this.localTracks.length>e;e++)this.localTracks[e].stop(),this.localTracks[e].close();await A.leave(),document.getElementById("stream-controls").style.display="none",document.getElementById("video-streams").innerHTML=""},async toggleMic(){this.localTracks[0].muted?(await this.localTracks[0].setMuted(!1),document.getElementById("mic-btn").innerText="Mic on",document.getElementById("mic-btn").style.backgroundColor="cadetblue"):(await this.localTracks[0].setMuted(!0),document.getElementById("mic-btn").innerText="Mic off",document.getElementById("mic-btn").style.backgroundColor="#EE4B2B")},async toggleCamera(){this.localTracks[1].muted?(await this.localTracks[1].setMuted(!1),document.getElementById("camera-btn").innerText="Camera on",document.getElementById("camera-btn").style.backgroundColor="cadetblue"):(await this.localTracks[1].setMuted(!0),document.getElementById("camera-btn").innerText="Camera off",document.getElementById("camera-btn").style.backgroundColor="#EE4B2B")}}});var ie="/Agora-RTC-RTM/assets/p1.914cc4d0.webp";var h=(e,a)=>{const n=e.__vccOpts||e;for(const[l,o]of a)n[l]=o;return n};const re={name:"Header",data:function(){return f({},D(g,["search"]))}},le={class:"header"},de={class:"d-flex"},ce=t("li",null,null,-1),me=t("li",null,null,-1),ue=t("li",null,[t("img",{src:ie,alt:""})],-1);function _e(e,a,n,l,o,r){return d(),c("div",le,[t("ul",null,[t("li",null,[t("form",de,[y(t("input",{class:"form-control me-2",type:"search","onUpdate:modelValue":a[0]||(a[0]=i=>this.search=i),placeholder:"Search","aria-label":"Search"},null,512),[[Q,this.search]])])]),ce,me,ue])])}var pe=h(re,[["render",_e]]),he="/Agora-RTC-RTM/assets/1.37fb282d.png";const fe={name:"Sidebar",data:function(){return{active:"home"}},methods:f({},$(g,["createStreams"]))},_=e=>(B("data-v-63a73c13"),e=e(),S(),e),ve={class:"sidebar"},ge={class:"left-side"},Ae=_(()=>t("li",{class:"logo"},[t("img",{src:he,alt:"LOGO"})],-1)),ye=_(()=>t("i",{class:"fas fa-home"},null,-1)),$e=_(()=>t("p",null,"Home",-1)),be=_(()=>t("i",{class:"fas fa-star"},null,-1)),ke=_(()=>t("p",null,"Laddar",-1)),Ce=_(()=>t("i",{class:"fas fa-user-friends"},null,-1)),Be=_(()=>t("p",null,"Friends",-1)),Se=_(()=>t("i",{class:"fas fa-comment-dots"},null,-1)),we=_(()=>t("p",null,"Chat",-1)),Ie=_(()=>t("i",{class:"fas fa-globe"},null,-1)),Te=_(()=>t("p",null,"Global",-1)),Ee=_(()=>t("i",{class:"fas fa-video"},null,-1)),Me=X('<div class="right-side" data-v-63a73c13><div class="card" data-v-63a73c13></div><div class="card" data-v-63a73c13></div><div class="card" data-v-63a73c13></div><div class="card" data-v-63a73c13></div><div class="card" data-v-63a73c13></div><div class="card" data-v-63a73c13></div></div>',1);function Fe(e,a,n,l,o,r){const i=v("router-link");return d(),c("div",ve,[t("nav",ge,[t("ul",null,[Ae,u(i,{to:"/",tag:"li"},{default:p(()=>[ye,$e]),_:1}),u(i,{to:"/star",tag:"li"},{default:p(()=>[be,ke]),_:1}),u(i,{to:"/Friends",tag:"li"},{default:p(()=>[Ce,Be]),_:1}),u(i,{to:"/chatting",tag:"li"},{default:p(()=>[Se,we]),_:1}),u(i,{to:"/global",tag:"li"},{default:p(()=>[Ie,Te]),_:1}),u(i,{class:"stream",tag:"li",to:"/video",id:"join-btn",onClick:a[0]||(a[0]=s=>e.createStreams())},{default:p(()=>[Ee]),_:1})])]),Me])}var xe=h(fe,[["render",Fe],["__scopeId","data-v-63a73c13"]]);const Le={name:"App",components:{Header:pe,Sidebar:xe}},Oe={id:"app"},Ue={class:"right-left-sidebar col-md-0"},je={class:"home"};function Ne(e,a,n,l,o,r){const i=v("Header"),s=v("Sidebar"),w=v("router-view");return d(),c("div",Oe,[u(i),t("div",Ue,[u(s)]),t("div",je,[u(w)])])}var Re=h(Le,[["render",Ne]]),E=[{id:1,first_name:"Jone",last_name:"Mackleden",email:"jmackleden0@ocn.ne.jp",gender:"Male",star:"5252",online:!1,friend:!1},{id:2,first_name:"Marsiella",last_name:"Figura",email:"mfigura1@purevolume.com",gender:"Female",star:"8549",online:!1,friend:!1},{id:3,first_name:"Cherey",last_name:"Jenks",email:"cjenks2@nymag.com",gender:"Female",star:"8433",online:!1,friend:!1},{id:4,first_name:"Sloane",last_name:"Matyashev",email:"smatyashev3@princeton.edu",gender:"Female",star:"1860",online:!0,friend:!0},{id:5,first_name:"Daune",last_name:"von Nassau",email:"dvonnassau4@stanford.edu",gender:"Male",star:"313",online:!0,friend:!0},{id:6,first_name:"Whitman",last_name:"Sandcraft",email:"wsandcraft5@netvibes.com",gender:"Male",star:"622",online:!0,friend:!1},{id:7,first_name:"Alayne",last_name:"Songer",email:"asonger6@plala.or.jp",gender:"Male",star:"381",online:!0,friend:!1},{id:8,first_name:"Fayina",last_name:"Packwood",email:"fpackwood7@plala.or.jp",gender:"Male",star:"61",online:!0,friend:!1},{id:9,first_name:"Austina",last_name:"Scherer",email:"ascherer8@woothemes.com",gender:"Male",star:"04",online:!0,friend:!1},{id:10,first_name:"Meridel",last_name:"Klos",email:"mklos9@freewebs.com",gender:"Female",star:"4788",online:!1,friend:!1},{id:11,first_name:"Lib",last_name:"Coffee",email:"lcoffeea@cargocollective.com",gender:"Female",star:"8845",online:!1,friend:!0},{id:12,first_name:"Kathy",last_name:"Geere",email:"kgeereb@geocities.jp",gender:"Bigender",star:"8",online:!0,friend:!0},{id:13,first_name:"Ettore",last_name:"Karpe",email:"ekarpec@hexun.com",gender:"Female",star:"2341",online:!0,friend:!0},{id:14,first_name:"Faydra",last_name:"Guion",email:"fguiond@nyu.edu",gender:"Female",star:"9",online:!0,friend:!1},{id:15,first_name:"Natala",last_name:"Reynolds",email:"nreynoldse@google.es",gender:"Female",star:"5",online:!0,friend:!1},{id:16,first_name:"Deeyn",last_name:"Nowell",email:"dnowellf@flavors.me",gender:"Agender",star:"284",online:!1,friend:!1},{id:17,first_name:"Shauna",last_name:"Dalston",email:"sdalstong@fotki.com",gender:"Polygender",star:"4",online:!0,friend:!1},{id:18,first_name:"Aurelea",last_name:"Atthowe",email:"aatthoweh@amazon.co.jp",gender:"Female",star:"49",online:!1,friend:!0},{id:19,first_name:"Anthia",last_name:"Doram",email:"adorami@ovh.net",gender:"Genderqueer",star:"6247",online:!0,friend:!0},{id:20,first_name:"Abigale",last_name:"Lesek",email:"alesekj@vkontakte.ru",gender:"Male",star:"7447",online:!0,friend:!1}],M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURVEtp///////+U8vn1ItrUcomPr7+sm83LSm0KWWxNLH5WpRrodyu+Xb8xVNnAIAAATlSURBVHja7ZrPax5FGMcHZoog9LBzWJu0OcwcttY2sDAbX/taYWAnCnp54c1La9PLrrKC8aJQTwqW8oJiBYu8hYI9eBEqCGpJLf44hBpBiVB79o/xmZn3rd2ag4fdVsr3E5L3zWTIfPaZZ56ZZJcxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A+IonD+1TkjmOMiZ8zkwnFqiR3orbPxrTU9CORCcOf88I4VVpQuYF1w8IPmzjFj6Ht65aYXARMgASt4btYmBA1kYggszx2FwDeOmbC8cwGX8zxMBY9fzamrH360Vxo7F8iFNYaZn6j1drBczEdnOcBe+dHzDU0/N+bUtUrrRK9cOlDEq81pcsytL5NEa3X9F4qM6FjA8UGWEFsUaTb6vkp0EnhjOxdB0LLNa4nOSCuRqx+POOtYIGcvpZo4MXLF+u86bWhwrdJGHtou/c95wa4kTUVR0TqrsovjnHWbB3YegWMjXvygUxkDoJKsemsjRKD8VTYyNMoqbVZ2u44AY4PU//alkT1XSUVDUwToQ2o1K5ktipP1fFLi5CyN8rwXgadH65fj2IvxskNjCtD628pHXy9yI5mWrheBpzbOhFwIg4WrTasZpeDZzC+AMH5QyI6NRC8Cy/xCpVUYRdELzUCij2wwc/feuohUpNWLwOqrYf6bpGl8JZD+c5mx01JJpbOGWqOAlFumH4EdJasmhFrSi6S1KOvp2uVEqrT2c6KbJhqsFr0IpJWUiXrz0t7e1Xf9IqCBZXp4M6V3dXb9873fPpkvUFXt9iKgqAKo925MJmuTzT/C8CSwNCSBbOW236DELRnXon6tFwEq9dVfGzZm+JVQDhKVXq4oAh+EguXKnyVBJepIyUTeuUCi06UJiztjvnm3ivWQrr/aGoeSnLOJ1yGBldz2ISDVrrMmCpQ3Y7hlrZvV7VB7uXHuTOadtNote5gCmdCqt/EM4PjzQYDWokoPi5D1jjbu9S+CgD5f8h5yQE1t7o8HYQM68M69wvOpibsPnYbWd6QvUsmdPiKQPWMKOu2YeEhZu7kQOLoRBcKZ8awM2Xm8lzpw2BY00jy2xen5+PJ4UYQp8GbFORlq9bFR0b1AfZ5Z6y/TD+bEufn+S/PtTMwBOiTyqvY709GNgncu8OAe86ePNpXj7fvaCnYhLM/lXLB+BQTjF2oSkMnyuNV3JwikvG8ByoWdWikp0xOtRvZd3BNv9C/Avo0CrYTnNi4OdZv1L3BTeQH5OhP3C7wYChTth6J3gWe9QFLfaR+hD0aBzx6CwEFaAyRwsfVXFB/Ked/iIQlU0/vbCj5YRKB/gRdSX3XbAszO+04fQhIOH7XAYF+B049aABGAwP9GQEAAAhCAAAQgAAEIQAACEIAABCAAgcdIwJaD8A/oesZdW8DfsmoLWDvvO+3wKQbLhpm/ZV/PTOsuyDD79/9CLBvEvlPT3R2TksVHOOpZ+6qejK0X233P6BgB0V0EuHh5kQOtqxpkUiutp+2+T8xzwHYZgWG8TzzLW+3DeOt2+kC0Yt9ph0/SWH7yK8/7u6KVhM+F1q9n+/adie6eI8ltmYdnyeKtwX+u1kzWxmtG7Nd3nHf4XF2xuA/8QFCNza3gzuzft+vnWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI8rfwMNx+GFBOjbGwAAAABJRU5ErkJggg==";const De={name:"home",data:function(){return{users:E}},created(){},methods:f({},$(g,["createStreams","channelName"])),computed:N(f({},D(g,["search"])),{filterdUsers:function(){return this.users.filter(e=>e.first_name.match(this.search)||e.last_name.match(this.search))}})},V=e=>(B("data-v-b889cfde"),e=e(),S(),e),Ve={class:"users"},Ge={class:"profile-img"},We=V(()=>t("img",{src:M,alt:""},null,-1)),He={class:"cardBody"},ze={class:"desc"},Ye=V(()=>t("div",{id:"stream-wrapper"},[t("div",{id:"video-streams"})],-1)),qe=L("Join Stream");function Je(e,a,n,l,o,r){const i=v("router-link");return d(),c("div",Ve,[(d(!0),c(I,null,T(r.filterdUsers,s=>y((d(),c("div",{class:"card col-lg-3 col-md-4",key:s.id},[t("div",Ge,[We,t("span",{class:x(["online",s.online?"active":""])},null,2)]),t("div",He,[t("div",ze,[t("h5",null,m(s.first_name)+" "+m(s.last_name),1),t("p",null,"SuperStar: "+m(s.star/100)+"!",1),t("p",null,"Gender: "+m(s.gender),1),Ye,y(u(i,{class:"btn btn-success",tag:"button",to:"/video",id:"join-btn",onClick:w=>{e.channelName(s.first_name,s.last_name),e.createStreams()}},{default:p(()=>[qe]),_:2},1032,["onClick"]),[[C,s.online]])])])])),[[C,s.online]])),128))])}var Pe=h(De,[["render",Je],["__scopeId","data-v-b889cfde"]]);const Ke={name:"star",data:function(){return{users:E}},methods:f({},$(g,["createStreams","channelName"])),computed:{filterdUsers:function(){return this.users.filter(e=>e.first_name.match(this.$root.search)||e.last_name.match(this.$root.search))}}},G=e=>(B("data-v-7e809bfa"),e=e(),S(),e),Qe={class:"users"},Xe={class:"profile-img"},Ze=G(()=>t("img",{src:M,alt:""},null,-1)),et={class:"cardBody"},tt={class:"desc"},at=G(()=>t("div",{id:"stream-wrapper"},[t("div",{id:"video-streams"})],-1)),nt=L("Join Stream");function st(e,a,n,l,o,r){const i=v("router-link");return d(),c("div",Qe,[(d(!0),c(I,null,T(e.users,s=>(d(),c("div",{class:"card col-lg-3 col-md-4",key:s.id},[t("div",Xe,[Ze,t("span",{class:x(["online",s.online?"active":""])},null,2)]),t("div",et,[t("div",tt,[t("h5",null,m(s.first_name)+" "+m(s.last_name),1),t("p",null,"SuperStar: "+m(s.star/100)+"!",1),t("p",null,"Gender: "+m(s.gender),1),at,y(u(i,{class:"btn btn-success",tag:"button",to:"/video",id:"join-btn",onClick:a[0]||(a[0]=w=>e.joinStream())},{default:p(()=>[nt]),_:2},1536),[[C,s.online]])])])]))),128))])}var ot=h(Ke,[["render",st],["__scopeId","data-v-7e809bfa"]]);const it={name:"videochat",props:["timer"],methods:f({},$(g,["leaveAndRemoveLocalStream","toggleCamera","toggleMic"]))},rt={class:"videochat"},lt={id:"stream-wrapper"},dt={id:"video-streams"},ct={id:"stream-controls"};function mt(e,a,n,l,o,r){return d(),c("div",rt,[t("div",lt,[t("div",dt,[t("h1",null,m(n.timer),1)]),t("div",ct,[t("button",{id:"leave-btn",onClick:a[0]||(a[0]=i=>e.leaveAndRemoveLocalStream())}," Leave Stream "),t("button",{id:"mic-btn",onClick:a[1]||(a[1]=i=>e.toggleMic())},"Mic On"),t("button",{id:"camera-btn",onClick:a[2]||(a[2]=i=>e.toggleCamera())},"Camera on")])])])}var ut=h(it,[["render",mt],["__scopeId","data-v-5f55dae2"]]);const _t={name:"videos",data(){return{timerCount:"40000",timer:""}},methods:f({},$(g,["leaveAndRemoveLocalStream"])),components:{videochat:ut},watch:{timerCount:{handler(e){e>0&&setTimeout(()=>{this.timerCount--;let a=Math.floor(this.timerCount%3600%60),n=Math.floor(this.timerCount%3600/60),l=Math.floor(this.timerCount/3600);n.toString().length<=1&&(n="0"+n.toString()),l.toString().length<=1&&(l="0"+l.toString()),this.timer=l+":"+n+":"+a},1e3),e==60&&alert("30 second left !!!"),e==0&&leaveAndRemoveLocalStream()},immediate:!0}}},pt={class:"videos"};function ht(e,a,n,l,o,r){const i=v("videochat");return d(),c("div",pt,[u(i,{timer:o.timer},null,8,["timer"])])}var ft=h(_t,[["render",ht]]);const vt={name:"friends",data:function(){return{users:E}},methods:f({},$(g,["createStreams","channelName"])),computed:{filterdUsers:function(){return this.users.filter(e=>e.first_name.match(this.$root.search)||e.last_name.match(this.$root.search))}}},W=e=>(B("data-v-7b01d212"),e=e(),S(),e),gt={class:"users"},At={class:"profile-img"},yt=W(()=>t("img",{src:M,alt:""},null,-1)),$t={class:"cardBody"},bt={class:"desc"},kt=W(()=>t("div",{id:"stream-wrapper"},[t("div",{id:"video-streams"})],-1)),Ct=L("Join Stream");function Bt(e,a,n,l,o,r){const i=v("router-link");return d(),c("div",gt,[(d(!0),c(I,null,T(r.filterdUsers,s=>y((d(),c("div",{class:"card col-lg-3 col-md-4",key:s.id},[t("div",At,[yt,t("span",{class:x(["online",s.online?"active":""])},null,2)]),t("div",$t,[t("div",bt,[t("h5",null,m(s.first_name)+" "+m(s.last_name),1),t("p",null,"SuperStar: "+m(s.star/100)+"!",1),t("p",null,"Gender: "+m(s.gender),1),kt,y(u(i,{class:"btn btn-success",tag:"button",to:"/video",id:"join-btn",onClick:w=>{e.channelName(s.first_name,s.last_name),e.createStreams()}},{default:p(()=>[Ct]),_:2},1032,["onClick"]),[[C,s.online]])])])])),[[C,s.friend]])),128))])}var St=h(vt,[["render",Bt],["__scopeId","data-v-7b01d212"]]);const wt={name:"chatting",data:function(){return{users:E}}},b=e=>(B("data-v-0e1e8211"),e=e(),S(),e),It={class:"chatting"},Tt=b(()=>t("div",{class:"search"},null,-1)),Et=b(()=>t("div",{class:"select"},null,-1)),Mt={class:"chat-users"},Ft=b(()=>t("div",{class:"media-aside"},[t("img",{src:M,alt:"profile-img"})],-1)),xt={class:"media-body"},Lt={class:"name"},Ot=b(()=>t("div",{class:"last-message"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut earum necessitatibus quidem quos vitae, nemo, officia laudantium reprehenderit tempore voluptatibus adipisci omnis nihil deleniti? Soluta, quam. Itaque, reprehenderit eius. ",-1)),Ut=b(()=>t("span",{class:"status"},null,-1)),jt=b(()=>t("div",{class:"chat-body"},null,-1));function Nt(e,a,n,l,o,r){const i=v("router-link");return d(),c("div",It,[Tt,Et,t("div",Mt,[(d(!0),c(I,null,T(e.users,s=>(d(),Z(i,{to:`chatting/${s.first_name}`,tag:"div",class:"user",key:s.id,first_name:s.first_name},{default:p(()=>[Ft,t("div",xt,[t("p",Lt,m(s.first_name)+" "+m(s.last_name),1),Ot,Ut])]),_:2},1032,["to","first_name"]))),128))]),jt])}var Rt=h(wt,[["render",Nt],["__scopeId","data-v-0e1e8211"]]);const Dt={};let F={uid:"",token:""};const Vt="5aead9c470a1420e8d56fc675afb260b";F.token="5aead9c470a1420e8d56fc675afb260b";const k=ee.createInstance(Vt);k.on("MessageFromPeer",function(e,a){let n=JSON.stringify(e.text);document.getElementById("log").appendChild(document.createElement("div")).append(a+" : "+n.substr(1,n.length-2))});k.on("ConnectionStateChanged",function(e,a){console.log("State changed To: "+e+" Reason: "+a)});const Gt={name:"ChattingBody",props:["first_name"],data:function(){return{channel:"main"}},methods:{login:async function(){F.uid=document.getElementById("userID").value.toString(),await k.login(F)},logout:async function(){await k.logout()},send_peer_message:async function(){let e=this.first_name,a=document.getElementById("peerMessage").value.toString(),n=document.getElementById("userID").value.toString();await k.sendMessageToPeer({text:a},e).then(l=>{if(l.hasPeerReceived)document.getElementById("log").appendChild(document.createElement("div")).append(n+" : "+a);else{let o=document.createElement("div");document.getElementById("log").appendChild(o).append(a),o.setAttribute("class","mymessages")}})}}},Wt={class:"chattingBody"},Ht={class:"chat"},zt={class:"friend-name"},Yt={class:"person"},qt={id:"loginForm"},Jt={class:"login",style:{"margin-top":"0px","margin-bottom":"0px"}},Pt={class:"content",style:{"margin-bottom":"0px","margin-top":"10px"}},Kt=t("div",{class:"input-field"},[t("label",null,"User ID"),t("input",{type:"text",placeholder:"User ID",id:"userID"})],-1),Qt=t("hr",null,null,-1),Xt=t("div",{id:"log",class:"log"},null,-1),Zt={class:"input-field channel-padding"},ea={action:""},ta=t("input",{class:"message",type:"text",placeholder:"peer message",id:"peerMessage"},null,-1);function aa(e,a,n,l,o,r){return d(),c("div",Wt,[t("div",Ht,[t("h3",zt,m(n.first_name),1),t("div",Yt,[t("form",qt,[t("div",null,[t("div",Jt,[t("div",Pt,[Kt,t("div",null,[t("div",null,[t("button",{onClick:a[0]||(a[0]=i=>r.login()),type:"button",id:"login"}," LOGIN "),t("button",{onClick:a[1]||(a[1]=i=>r.logout()),type:"button",id:"logout"}," LOGOUT ")])])])])])]),Qt,Xt])]),t("div",Zt,[t("form",ea,[ta,t("input",{class:"sendMessage btn btn-success",onClick:a[2]||(a[2]=i=>r.send_peer_message()),type:"button",id:"send_peer_message",value:"SEND"})])])])}var na=h(Gt,[["render",aa]]);const H=te({history:ae("/Agora-RTC-RTM/"),routes:[{path:"/",name:"home",component:Pe},{path:"/star",name:"star",component:ot},{path:"/video",name:"video",component:ft},{path:"/Friends",name:"Friends",component:St},{path:"/chatting",name:"chatting",component:Rt},{path:"/:first_name",name:"ChattingBody",component:na,props:!0},{path:"/global",name:"global",component:Dt}]});H.beforeEach((e,a,n)=>{if(e.path==="/login"&&auth.currentUser){n("/");return}if(e.matched.some(l=>l.meta.requiresAuth)&&!auth.currentUser){n("/login");return}n()});const O=ne(Re);O.use(se());O.use(H);O.mount("#app");
