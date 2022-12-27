(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="143",Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cf=0,zl=1,Pf=2,Xu=1,Rf=2,qs=3,Si=0,on=1,Pt=2,If=1,ei=0,ss=1,ao=2,Bl=3,Ul=4,Df=5,Ji=100,Ff=101,Nf=102,Vl=103,Gl=104,Of=200,kf=201,zf=202,Bf=203,qu=204,Yu=205,Uf=206,Vf=207,Gf=208,Hf=209,Wf=210,jf=0,Xf=1,qf=2,Ia=3,Yf=4,Zf=5,Kf=6,Jf=7,wo=0,$f=1,Qf=2,Fn=0,ed=1,td=2,nd=3,id=4,sd=5,Zu=300,cs=301,us=302,lo=303,Da=304,bo=306,ni=1e3,Nt=1001,co=1002,Mt=1003,Fa=1004,Na=1005,Ft=1006,Ku=1007,ys=1008,Ti=1009,rd=1010,od=1011,Ju=1012,ad=1013,xi=1014,Qn=1015,ir=1016,ld=1017,cd=1018,rs=1020,ud=1021,hd=1022,sn=1023,fd=1024,dd=1025,Mi=1026,hs=1027,pd=1028,md=1029,gd=1030,vd=1031,xd=1033,Uo=33776,Vo=33777,Go=33778,Ho=33779,Hl=35840,Wl=35841,jl=35842,Xl=35843,yd=36196,ql=37492,Yl=37496,Zl=37808,Kl=37809,Jl=37810,$l=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,lc=37821,cc=36492,sr=2300,fs=2301,Wo=2302,uc=2400,hc=2401,fc=2402,_d=2500,Md=1,$u=2,Ei=3e3,Ge=3001,wd=3200,bd=3201,So=0,Sd=1,Pn="srgb",yi="srgb-linear",jo=7680,Td=519,Oa=35044,dc="300 es",ka=1035;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const Zs=Math.PI/180,rr=180/Math.PI;function Yt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function ol(r,e){return(r%e+e)%e}function Ed(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ad(r,e,t){return r!==e?(t-r)/(e-r):0}function Ks(r,e,t){return(1-t)*r+t*e}function Ld(r,e,t,n){return Ks(r,e,1-Math.exp(-t*n))}function Cd(r,e=1){return e-Math.abs(ol(r,e*2)-e)}function Pd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Rd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Id(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Dd(r,e){return r+Math.random()*(e-r)}function Fd(r){return r*(.5-Math.random())}function Nd(r){r!==void 0&&(pc=r);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Od(r){return r*Zs}function kd(r){return r*rr}function za(r){return(r&r-1)===0&&r!==0}function Qu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bd(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ud(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var nn=Object.freeze({__proto__:null,DEG2RAD:Zs,RAD2DEG:rr,generateUUID:Yt,clamp:gt,euclideanModulo:ol,mapLinear:Ed,inverseLerp:Ad,lerp:Ks,damp:Ld,pingpong:Cd,smoothstep:Pd,smootherstep:Rd,randInt:Id,randFloat:Dd,randFloatSpread:Fd,seededRandom:Nd,degToRad:Od,radToDeg:kd,isPowerOfTwo:za,ceilPowerOfTwo:Qu,floorPowerOfTwo:uo,setQuaternionFromProperEuler:zd,normalize:Ud,denormalize:Bd});class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],m=i[0],d=i[3],v=i[6],x=i[1],w=i[4],_=i[7],M=i[2],b=i[5],E=i[8];return s[0]=o*m+a*x+l*M,s[3]=o*d+a*w+l*b,s[6]=o*v+a*_+l*E,s[1]=c*m+h*x+u*M,s[4]=c*d+h*w+u*b,s[7]=c*v+h*_+u*E,s[2]=f*m+p*x+g*M,s[5]=f*d+p*w+g*b,s[8]=f*v+p*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=t*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function eh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function or(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Xo={[Pn]:{[yi]:wi},[yi]:{[Pn]:to}},$t={legacyMode:!0,get workingColorSpace(){return yi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Xo[e]&&Xo[e][t]!==void 0){const n=Xo[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},Qt={h:0,s:0,l:0},br={h:0,s:0,l:0};function qo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Sr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yi){return this.r=e,this.g=t,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yi){if(e=ol(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qo(o,s,e+1/3),this.g=qo(o,s,e),this.b=qo(o,s,e-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(e,t=Pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,$t.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,$t.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,$t.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,$t.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Pn){const n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return $t.fromWorkingColorSpace(Sr(this,ft),e),gt(ft.r*255,0,255)<<16^gt(ft.g*255,0,255)<<8^gt(ft.b*255,0,255)<<0}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yi){$t.fromWorkingColorSpace(Sr(this,ft),t);const n=ft.r,i=ft.g,s=ft.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=yi){return $t.fromWorkingColorSpace(Sr(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Pn){return $t.fromWorkingColorSpace(Sr(this,ft),e),e!==Pn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(br);const n=Ks(Qt.h,br.h,t),i=Ks(Qt.s,br.s,t),s=Ks(Qt.l,br.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ee.NAMES=th;let Ni;class nh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=or("canvas")),Ni.width=e.width,Ni.height=e.height;const n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ih{constructor(e=null){this.isSource=!0,this.uuid=Yt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Yo(i[o].image)):s.push(Yo(i[o]))}else s=Yo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vd=0;class wt extends Li{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Nt,i=Nt,s=Ft,o=ys,a=sn,l=Ti,c=1,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Yt(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Zu;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,_=(p+1)/2,M=(v+1)/2,b=(h+f)/4,E=(u+m)/4,y=(g+d)/4;return w>_&&w>M?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=E/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=b/i,s=y/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=y/s),this.set(n,i,s,t),this}let x=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(u-m)/x,this.z=(f-h)/x,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ai extends Li{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ih(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sh extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gd extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==f||c!==p||h!==g){let d=1-a;const v=l*f+c*p+h*g+u*m,x=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const M=Math.sqrt(w),b=Math.atan2(M,v*x);d=Math.sin(d*b)/M,a=Math.sin(a*b)/M}const _=a*x;if(l=l*d+f*_,c=c*d+p*_,h=h*d+g*_,u=u*d+m*_,d===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+h*-a-u*-o,this.y=h*l+f*-o+u*-s-c*-a,this.z=u*l+f*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new D,mc=new Gt;class _s{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ui)}else n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox),Ko.applyMatrix4(e.matrixWorld),this.union(Ko);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Tr.subVectors(this.max,Us),Oi.subVectors(e.a,Us),ki.subVectors(e.b,Us),zi.subVectors(e.c,Us),Un.subVectors(ki,Oi),Vn.subVectors(zi,ki),hi.subVectors(Oi,zi);let t=[0,-Un.z,Un.y,0,-Vn.z,Vn.y,0,-hi.z,hi.y,Un.z,0,-Un.x,Vn.z,0,-Vn.x,hi.z,0,-hi.x,-Un.y,Un.x,0,-Vn.y,Vn.x,0,-hi.y,hi.x,0];return!Jo(t,Oi,ki,zi,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Oi,ki,zi,Tr))?!1:(Er.crossVectors(Un,Vn),t=[Er.x,Er.y,Er.z],Jo(t,Oi,ki,zi,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new D,new D,new D,new D,new D,new D,new D,new D],ui=new D,Ko=new _s,Oi=new D,ki=new D,zi=new D,Un=new D,Vn=new D,hi=new D,Us=new D,Tr=new D,Er=new D,fi=new D;function Jo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){fi.fromArray(r,s);const a=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Hd=new _s,gc=new D,Ar=new D,$o=new D;class Ms{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){$o.subVectors(e,this.center);const t=$o.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add($o.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Ar.set(0,0,1).multiplyScalar(e.radius):Ar.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gc.copy(e.center).add(Ar)),this.expandByPoint(gc.copy(e.center).sub(Ar)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new D,Qo=new D,Lr=new D,Gn=new D,ea=new D,Cr=new D,ta=new D;class To{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.direction).multiplyScalar(t).add(this.origin),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qo.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=Gn.dot(this.direction),l=-Gn.dot(Lr),c=Gn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const m=1/h;u*=m,f*=m,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Lr).multiplyScalar(f).add(Qo),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,s){ea.subVectors(t,e),Cr.subVectors(n,e),ta.crossVectors(ea,Cr);let o=this.direction.dot(ta),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const l=a*this.direction.dot(Cr.crossVectors(Gn,Cr));if(l<0)return null;const c=a*this.direction.dot(ea.cross(Gn));if(c<0||l+c>o)return null;const h=-a*Gn.dot(ta);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,h,u,f,p,g,m,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=f,v[3]=p,v[7]=g,v[11]=m,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*u,g=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,m=c*u;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,m=c*u;t[0]=f-m*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=a*h,m=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*h,t[4]=m-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-m*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,jd)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Hn.crossVectors(n,Ut),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Hn.crossVectors(n,Ut)),Hn.normalize(),Pr.crossVectors(Ut,Hn),i[0]=Hn.x,i[4]=Pr.x,i[8]=Ut.x,i[1]=Hn.y,i[5]=Pr.y,i[9]=Ut.y,i[2]=Hn.z,i[6]=Pr.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],v=n[14],x=n[3],w=n[7],_=n[11],M=n[15],b=i[0],E=i[4],y=i[8],A=i[12],k=i[1],V=i[5],X=i[9],K=i[13],z=i[2],Y=i[6],q=i[10],W=i[14],B=i[3],j=i[7],Z=i[11],se=i[15];return s[0]=o*b+a*k+l*z+c*B,s[4]=o*E+a*V+l*Y+c*j,s[8]=o*y+a*X+l*q+c*Z,s[12]=o*A+a*K+l*W+c*se,s[1]=h*b+u*k+f*z+p*B,s[5]=h*E+u*V+f*Y+p*j,s[9]=h*y+u*X+f*q+p*Z,s[13]=h*A+u*K+f*W+p*se,s[2]=g*b+m*k+d*z+v*B,s[6]=g*E+m*V+d*Y+v*j,s[10]=g*y+m*X+d*q+v*Z,s[14]=g*A+m*K+d*W+v*se,s[3]=x*b+w*k+_*z+M*B,s[7]=x*E+w*V+_*Y+M*j,s[11]=x*y+w*X+_*q+M*Z,s[15]=x*A+w*K+_*W+M*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],v=e[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*p-n*l*p)+m*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*h-s*l*h)+d*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+v*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],v=e[15],x=u*d*c-m*f*c+m*l*p-a*d*p-u*l*v+a*f*v,w=g*f*c-h*d*c-g*l*p+o*d*p+h*l*v-o*f*v,_=h*m*c-g*u*c+g*a*p-o*m*p-h*a*v+o*u*v,M=g*u*l-h*m*l-g*a*f+o*m*f+h*a*d-o*u*d,b=t*x+n*w+i*_+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=x*E,e[1]=(m*f*s-u*d*s-m*i*p+n*d*p+u*i*v-n*f*v)*E,e[2]=(a*d*s-m*l*s+m*i*c-n*d*c-a*i*v+n*l*v)*E,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*p-n*l*p)*E,e[4]=w*E,e[5]=(h*d*s-g*f*s+g*i*p-t*d*p-h*i*v+t*f*v)*E,e[6]=(g*l*s-o*d*s-g*i*c+t*d*c+o*i*v-t*l*v)*E,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*p+t*l*p)*E,e[8]=_*E,e[9]=(g*u*s-h*m*s-g*n*p+t*m*p+h*n*v-t*u*v)*E,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*v+t*a*v)*E,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*E,e[12]=M*E,e[13]=(h*m*i-g*u*i+g*n*f-t*m*f-h*n*d+t*u*d)*E,e[14]=(g*a*i-o*m*i-g*n*l+t*m*l+o*n*d-t*a*d)*E,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,p=s*h,g=s*u,m=o*h,d=o*u,v=a*u,x=l*c,w=l*h,_=l*u,M=n.x,b=n.y,E=n.z;return i[0]=(1-(m+v))*M,i[1]=(p+_)*M,i[2]=(g-w)*M,i[3]=0,i[4]=(p-_)*b,i[5]=(1-(f+v))*b,i[6]=(d+x)*b,i[7]=0,i[8]=(g+w)*E,i[9]=(d-x)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Bi.set(i[0],i[1],i[2]).length();const o=Bi.set(i[4],i[5],i[6]).length(),a=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/s,h=1/o,u=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,f=(n+i)*c,p=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new D,en=new Ae,Wd=new D(0,0,0),jd=new D(1,1,1),Hn=new D,Pr=new D,Ut=new D,vc=new Ae,xc=new Gt;class dn{constructor(e=0,t=0,n=0,i=dn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}dn.DefaultOrder="XYZ";dn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const yc=new D,Ui=new Gt,Sn=new Ae,Rr=new D,Vs=new D,qd=new D,Yd=new Gt,_c=new D(1,0,0),Mc=new D(0,1,0),wc=new D(0,0,1),Zd={type:"added"},bc={type:"removed"};class nt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DefaultUp.clone();const e=new D,t=new dn,n=new Gt,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new dt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Vs,Rr,this.up):Sn.lookAt(Rr,Vs,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DefaultUp=new D(0,1,0);nt.DefaultMatrixAutoUpdate=!0;const tn=new D,Tn=new D,na=new D,En=new D,Vi=new D,Gi=new D,Sc=new D,ia=new D,sa=new D,ra=new D;class Rn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){tn.subVectors(i,t),Tn.subVectors(n,t),na.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(Tn),l=tn.dot(na),c=Tn.dot(Tn),h=Tn.dot(na),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,En),l.set(0,0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Tn.subVectors(e,t),tn.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),tn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Rn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Vi.subVectors(i,n),Gi.subVectors(s,n),ia.subVectors(e,n);const l=Vi.dot(ia),c=Gi.dot(ia);if(l<=0&&c<=0)return t.copy(n);sa.subVectors(e,i);const h=Vi.dot(sa),u=Gi.dot(sa);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Vi,o);ra.subVectors(e,s);const p=Vi.dot(ra),g=Gi.dot(ra);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Gi,a);const d=h*g-p*u;if(d<=0&&u-h>=0&&p-g>=0)return Sc.subVectors(s,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Sc,a);const v=1/(d+m+f);return o=m*v,a=f*v,t.copy(n).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Kd=0;class kt extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=ss,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qu,this.blendDst=Yu,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===If;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vt extends kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new D,Ir=new oe;class xt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Oa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Ee),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new oe),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new D),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Xe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ll extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rh extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ke extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jd=0;const jt=new Ae,oa=new nt,Hi=new D,Vt=new _s,Gs=new _s,mt=new D;class rt extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?rh:ll)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Vt.min,Gs.min),Vt.expandByPoint(mt),mt.addVectors(Vt.max,Gs.max),Vt.expandByPoint(mt)):(Vt.expandByPoint(Gs.min),Vt.expandByPoint(Gs.max))}Vt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),mt.add(Hi)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let k=0;k<a;k++)c[k]=new D,h[k]=new D;const u=new D,f=new D,p=new D,g=new oe,m=new oe,d=new oe,v=new D,x=new D;function w(k,V,X){u.fromArray(i,k*3),f.fromArray(i,V*3),p.fromArray(i,X*3),g.fromArray(o,k*2),m.fromArray(o,V*2),d.fromArray(o,X*2),f.sub(u),p.sub(u),m.sub(g),d.sub(g);const K=1/(m.x*d.y-d.x*m.y);!isFinite(K)||(v.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(K),x.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(K),c[k].add(v),c[V].add(v),c[X].add(v),h[k].add(x),h[V].add(x),h[X].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let k=0,V=_.length;k<V;++k){const X=_[k],K=X.start,z=X.count;for(let Y=K,q=K+z;Y<q;Y+=3)w(n[Y+0],n[Y+1],n[Y+2])}const M=new D,b=new D,E=new D,y=new D;function A(k){E.fromArray(s,k*3),y.copy(E);const V=c[k];M.copy(V),M.sub(E.multiplyScalar(E.dot(V))).normalize(),b.crossVectors(y,V);const K=b.dot(h[k])<0?-1:1;l[k*4]=M.x,l[k*4+1]=M.y,l[k*4+2]=M.z,l[k*4+3]=K}for(let k=0,V=_.length;k<V;++k){const X=_[k],K=X.start,z=X.count;for(let Y=K,q=K+z;Y<q;Y+=3)A(n[Y+0]),A(n[Y+1]),A(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let u=0,f=c;u<h;u++,f++)o[f]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*h;for(let v=0;v<h;v++)f[g++]=c[p++]}return new xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new Ae,Wi=new To,aa=new Ms,Wn=new D,jn=new D,Xn=new D,la=new D,ca=new D,ua=new D,Dr=new D,Fr=new D,Nr=new D,Or=new oe,kr=new oe,zr=new oe,ha=new D,Br=new D;class Je extends nt{constructor(e=new rt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),e.ray.intersectsSphere(aa)===!1)||(Tc.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Tc),n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const v=p[m],x=i[v.materialIndex],w=Math.max(v.start,g.start),_=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=w,b=_;M<b;M+=3){const E=a.getX(M),y=a.getX(M+1),A=a.getX(M+2);o=Ur(this,x,e,Wi,l,c,h,u,f,E,y,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let v=m,x=d;v<x;v+=3){const w=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);o=Ur(this,i,e,Wi,l,c,h,u,f,w,_,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const v=p[m],x=i[v.materialIndex],w=Math.max(v.start,g.start),_=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=w,b=_;M<b;M+=3){const E=M,y=M+1,A=M+2;o=Ur(this,x,e,Wi,l,c,h,u,f,E,y,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let v=m,x=d;v<x;v+=3){const w=v,_=v+1,M=v+2;o=Ur(this,i,e,Wi,l,c,h,u,f,w,_,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function $d(r,e,t,n,i,s,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Pt,a),l===null)return null;Br.copy(a),Br.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:r}}function Ur(r,e,t,n,i,s,o,a,l,c,h,u){Wn.fromBufferAttribute(i,c),jn.fromBufferAttribute(i,h),Xn.fromBufferAttribute(i,u);const f=r.morphTargetInfluences;if(s&&f){Dr.set(0,0,0),Fr.set(0,0,0),Nr.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=f[g],v=s[g];d!==0&&(la.fromBufferAttribute(v,c),ca.fromBufferAttribute(v,h),ua.fromBufferAttribute(v,u),o?(Dr.addScaledVector(la,d),Fr.addScaledVector(ca,d),Nr.addScaledVector(ua,d)):(Dr.addScaledVector(la.sub(Wn),d),Fr.addScaledVector(ca.sub(jn),d),Nr.addScaledVector(ua.sub(Xn),d)))}Wn.add(Dr),jn.add(Fr),Xn.add(Nr)}r.isSkinnedMesh&&(r.boneTransform(c,Wn),r.boneTransform(h,jn),r.boneTransform(u,Xn));const p=$d(r,e,t,n,Wn,jn,Xn,ha);if(p){a&&(Or.fromBufferAttribute(a,c),kr.fromBufferAttribute(a,h),zr.fromBufferAttribute(a,u),p.uv=Rn.getUV(ha,Wn,jn,Xn,Or,kr,zr,new oe)),l&&(Or.fromBufferAttribute(l,c),kr.fromBufferAttribute(l,h),zr.fromBufferAttribute(l,u),p.uv2=Rn.getUV(ha,Wn,jn,Xn,Or,kr,zr,new oe));const g={a:c,b:h,c:u,normal:new D,materialIndex:0};Rn.getNormal(Wn,jn,Xn,g.normal),p.face=g}return p}class vr extends rt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function g(m,d,v,x,w,_,M,b,E,y,A){const k=_/E,V=M/y,X=_/2,K=M/2,z=b/2,Y=E+1,q=y+1;let W=0,B=0;const j=new D;for(let Z=0;Z<q;Z++){const se=Z*V-K;for(let F=0;F<Y;F++){const R=F*k-X;j[m]=R*x,j[d]=se*w,j[v]=z,c.push(j.x,j.y,j.z),j[m]=0,j[d]=0,j[v]=b>0?1:-1,h.push(j.x,j.y,j.z),u.push(F/E),u.push(1-Z/y),W+=1}}for(let Z=0;Z<y;Z++)for(let se=0;se<E;se++){const F=f+se+Y*Z,R=f+se+Y*(Z+1),S=f+(se+1)+Y*(Z+1),N=f+(se+1)+Y*Z;l.push(F,R,N),l.push(R,S,N),B+=6}a.addGroup(p,B,A),p+=B,f+=W}}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(r){const e={};for(let t=0;t<r.length;t++){const n=ds(r[t]);for(const i in n)e[i]=n[i]}return e}function Qd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const ep={clone:ds,merge:St};var tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oh extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends oh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=90,Xi=1;class ip extends nt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Tt(ji,Xi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new D(1,0,0)),this.add(i);const s=new Tt(ji,Xi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Tt(ji,Xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Tt(ji,Xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Tt(ji,Xi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Tt(ji,Xi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=Fn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class ah extends wt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:cs,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sp extends Ai{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ah(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vr(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ei});s.uniforms.tEquirect.value=t;const o=new Je(i,s),a=t.minFilter;return t.minFilter===ys&&(t.minFilter=Ft),new ip(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const fa=new D,rp=new D,op=new dt;class pi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fa.subVectors(n,t).cross(rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||op.getNormalMatrix(e),i=this.coplanarPoint(fa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Ms,Vr=new D;class cl{constructor(e=new pi,t=new pi,n=new pi,i=new pi,s=new pi,o=new pi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],v=n[13],x=n[14],w=n[15];return t[0].setComponents(a-i,u-l,m-f,w-d).normalize(),t[1].setComponents(a+i,u+l,m+f,w+d).normalize(),t[2].setComponents(a+s,u+c,m+p,w+v).normalize(),t[3].setComponents(a-s,u-c,m-p,w-v).normalize(),t[4].setComponents(a-o,u-h,m-g,w-x).normalize(),t[5].setComponents(a+o,u+h,m+g,w+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ap(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,f):(t?r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class ul extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let v=0;v<h;v++){const x=v*f-o;for(let w=0;w<c;w++){const _=w*u-s;g.push(_,-x,0),m.push(0,0,1),d.push(w/a),d.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const w=x+c*v,_=x+c*(v+1),M=x+1+c*(v+1),b=x+1+c*v;p.push(w,_,b),p.push(_,M,b)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(m,3)),this.setAttribute("uv",new ke(d,2))}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp="vec3 transformed = vec3( position );",mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Xp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Mm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,$m=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Qm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,eg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,tg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ng=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ig=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:up,alphatest_pars_fragment:hp,aomap_fragment:fp,aomap_pars_fragment:dp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:vp,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:wp,color_fragment:bp,color_pars_fragment:Sp,color_pars_vertex:Tp,color_vertex:Ep,common:Ap,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Rp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,encodings_fragment:Fp,encodings_pars_fragment:Np,envmap_fragment:Op,envmap_common_pars_fragment:kp,envmap_pars_fragment:zp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Kp,envmap_vertex:Up,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:Hp,fog_pars_fragment:Wp,gradientmap_pars_fragment:jp,lightmap_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_vertex:Yp,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:$p,lights_phong_fragment:Qp,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:um,map_pars_fragment:hm,map_particle_fragment:fm,map_particle_pars_fragment:dm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphcolor_vertex:gm,morphnormal_vertex:vm,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:_m,normal_fragment_maps:Mm,normal_pars_fragment:wm,normal_pars_vertex:bm,normal_vertex:Sm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Cm,output_fragment:Pm,packing:Rm,premultiplied_alpha_fragment:Im,project_vertex:Dm,dithering_fragment:Fm,dithering_pars_fragment:Nm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Bm,shadowmap_vertex:Um,shadowmask_pars_fragment:Vm,skinbase_vertex:Gm,skinning_pars_vertex:Hm,skinning_vertex:Wm,skinnormal_vertex:jm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Zm,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:$m,uv_pars_vertex:Qm,uv_vertex:eg,uv2_pars_fragment:tg,uv2_pars_vertex:ng,uv2_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,cube_vert:ag,cube_frag:lg,depth_vert:cg,depth_frag:ug,distanceRGBA_vert:hg,distanceRGBA_frag:fg,equirect_vert:dg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:vg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:_g,meshmatcap_vert:Mg,meshmatcap_frag:wg,meshnormal_vert:bg,meshnormal_frag:Sg,meshphong_vert:Tg,meshphong_frag:Eg,meshphysical_vert:Ag,meshphysical_frag:Lg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Rg,points_frag:Ig,shadow_vert:Dg,shadow_frag:Fg,sprite_vert:Ng,sprite_frag:Og},xe={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new dt},uv2Transform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}}},hn={basic:{uniforms:St([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:St([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:St([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:St([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:St([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:St([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:St([xe.points,xe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:St([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:St([xe.common,xe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:St([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:St([xe.sprite,xe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:St([xe.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:St([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:St([xe.lights,xe.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};hn.physical={uniforms:St([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function kg(r,e,t,n,i,s){const o=new Ee(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function p(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=e.get(x));const w=r.xr,_=w.getSession&&w.getSession();_&&_.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===bo)?(c===void 0&&(c=new Je(new vr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:ds(hn.cube.uniforms),vertexShader:hn.cube.vertexShader,fragmentShader:hn.cube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(h!==x||u!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Je(new ul(2,2),new mn({name:"BackgroundMaterial",uniforms:ds(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function zg(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,h=!1;function u(z,Y,q,W,B){let j=!1;if(o){const Z=m(W,q,Y);c!==Z&&(c=Z,p(c.object)),j=v(z,W,q,B),j&&x(z,W,q,B)}else{const Z=Y.wireframe===!0;(c.geometry!==W.id||c.program!==q.id||c.wireframe!==Z)&&(c.geometry=W.id,c.program=q.id,c.wireframe=Z,j=!0)}B!==null&&t.update(B,34963),(j||h)&&(h=!1,y(z,Y,q,W),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(z){return n.isWebGL2?r.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?r.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function m(z,Y,q){const W=q.wireframe===!0;let B=a[z.id];B===void 0&&(B={},a[z.id]=B);let j=B[Y.id];j===void 0&&(j={},B[Y.id]=j);let Z=j[W];return Z===void 0&&(Z=d(f()),j[W]=Z),Z}function d(z){const Y=[],q=[],W=[];for(let B=0;B<i;B++)Y[B]=0,q[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:q,attributeDivisors:W,object:z,attributes:{},index:null}}function v(z,Y,q,W){const B=c.attributes,j=Y.attributes;let Z=0;const se=q.getAttributes();for(const F in se)if(se[F].location>=0){const S=B[F];let N=j[F];if(N===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(N=z.instanceColor)),S===void 0||S.attribute!==N||N&&S.data!==N.data)return!0;Z++}return c.attributesNum!==Z||c.index!==W}function x(z,Y,q,W){const B={},j=Y.attributes;let Z=0;const se=q.getAttributes();for(const F in se)if(se[F].location>=0){let S=j[F];S===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(S=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(S=z.instanceColor));const N={};N.attribute=S,S&&S.data&&(N.data=S.data),B[F]=N,Z++}c.attributes=B,c.attributesNum=Z,c.index=W}function w(){const z=c.newAttributes;for(let Y=0,q=z.length;Y<q;Y++)z[Y]=0}function _(z){M(z,0)}function M(z,Y){const q=c.newAttributes,W=c.enabledAttributes,B=c.attributeDivisors;q[z]=1,W[z]===0&&(r.enableVertexAttribArray(z),W[z]=1),B[z]!==Y&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,Y),B[z]=Y)}function b(){const z=c.newAttributes,Y=c.enabledAttributes;for(let q=0,W=Y.length;q<W;q++)Y[q]!==z[q]&&(r.disableVertexAttribArray(q),Y[q]=0)}function E(z,Y,q,W,B,j){n.isWebGL2===!0&&(q===5124||q===5125)?r.vertexAttribIPointer(z,Y,q,B,j):r.vertexAttribPointer(z,Y,q,W,B,j)}function y(z,Y,q,W){if(n.isWebGL2===!1&&(z.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const B=W.attributes,j=q.getAttributes(),Z=Y.defaultAttributeValues;for(const se in j){const F=j[se];if(F.location>=0){let R=B[se];if(R===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(R=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(R=z.instanceColor)),R!==void 0){const S=R.normalized,N=R.itemSize,O=t.get(R);if(O===void 0)continue;const U=O.buffer,Q=O.type,ce=O.bytesPerElement;if(R.isInterleavedBufferAttribute){const te=R.data,de=te.stride,ae=R.offset;if(te.isInstancedInterleavedBuffer){for(let pe=0;pe<F.locationSize;pe++)M(F.location+pe,te.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<F.locationSize;pe++)_(F.location+pe);r.bindBuffer(34962,U);for(let pe=0;pe<F.locationSize;pe++)E(F.location+pe,N/F.locationSize,Q,S,de*ce,(ae+N/F.locationSize*pe)*ce)}else{if(R.isInstancedBufferAttribute){for(let te=0;te<F.locationSize;te++)M(F.location+te,R.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let te=0;te<F.locationSize;te++)_(F.location+te);r.bindBuffer(34962,U);for(let te=0;te<F.locationSize;te++)E(F.location+te,N/F.locationSize,Q,S,N*ce,N/F.locationSize*te*ce)}}else if(Z!==void 0){const S=Z[se];if(S!==void 0)switch(S.length){case 2:r.vertexAttrib2fv(F.location,S);break;case 3:r.vertexAttrib3fv(F.location,S);break;case 4:r.vertexAttrib4fv(F.location,S);break;default:r.vertexAttrib1fv(F.location,S)}}}}b()}function A(){X();for(const z in a){const Y=a[z];for(const q in Y){const W=Y[q];for(const B in W)g(W[B].object),delete W[B];delete Y[q]}delete a[z]}}function k(z){if(a[z.id]===void 0)return;const Y=a[z.id];for(const q in Y){const W=Y[q];for(const B in W)g(W[B].object),delete W[B];delete Y[q]}delete a[z.id]}function V(z){for(const Y in a){const q=a[Y];if(q[z.id]===void 0)continue;const W=q[z.id];for(const B in W)g(W[B].object),delete W[B];delete q[z.id]}}function X(){K(),h=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:K,dispose:A,releaseStatesOfGeometry:k,releaseStatesOfProgram:V,initAttributes:w,enableAttribute:_,disableUnusedAttributes:b}}function Bg(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Ug(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),f=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),d=r.getParameter(36347),v=r.getParameter(36348),x=r.getParameter(36349),w=f>0,_=o||e.has("OES_texture_float"),M=w&&_,b=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:b}}function Vg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new pi,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,p){const g=u.length!==0||f||n!==0||i;return i=f,t=h(u,p,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,p){const g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,v=r.get(u);if(!i||g===null||g.length===0||s&&!d)s?h(null):c();else{const x=s?0:n,w=x*4;let _=v.clippingState||null;l.value=_,_=h(g,f,w,p);for(let M=0;M!==w;++M)_[M]=t[M];v.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const m=u!==null?u.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const v=p+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<v)&&(d=new Float32Array(v));for(let w=0,_=p;w!==m;++w,_+=4)o.copy(u[w]).applyMatrix4(x,a),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Gg(r){let e=new WeakMap;function t(o,a){return a===lo?o.mapping=cs:a===Da&&(o.mapping=us),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===lo||a===Da)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sp(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Eo extends oh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,Ec=[.125,.215,.35,.446,.526,.582],vi=20,da=new Eo,Ac=new Ee;let pa=null;const mi=(1+Math.sqrt(5))/2,Yi=1/mi,Lc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,mi,Yi),new D(0,mi,-Yi),new D(Yi,0,mi),new D(-Yi,0,mi),new D(mi,Yi,0),new D(-mi,Yi,0)];class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa),e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ir,format:sn,encoding:Ei,depthBuffer:!1},i=Pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(s)),this._blurMaterial=Wg(s,e,t)}return i}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,n,i){const a=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ac),h.toneMapping=Fn,h.autoClear=!1;const p=new vt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Je(new vr,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Ac),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const w=this._cubeSize;Gr(i,x*w,v>2?w:0,w,w),h.setRenderTarget(i),m&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===cs||e.mapping===us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Lc[(i-1)%Lc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Je(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),m=s/g,d=isFinite(s)?1+Math.floor(h*m):vi;d>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${vi}`);const v=[];let x=0;for(let E=0;E<vi;++E){const y=E/m,A=Math.exp(-y*y/2);v.push(A),E===0?x+=A:E<d&&(x+=2*A)}for(let E=0;E<v.length;E++)v[E]=v[E]/x;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const _=this._sizeLods[i],M=3*_*(i>w-ts?i-w+ts:0),b=4*(this._cubeSize-_);Gr(t,M,b,3*_,2*_),l.setRenderTarget(t),l.render(u,da)}}function Hg(r){const e=[],t=[],n=[];let i=r;const s=r-ts+1+Ec.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ts?l=Ec[o-r+ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,d=2,v=1,x=new Float32Array(m*g*p),w=new Float32Array(d*g*p),_=new Float32Array(v*g*p);for(let b=0;b<p;b++){const E=b%3*2/3-1,y=b>2?0:-1,A=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];x.set(A,m*g*b),w.set(f,d*g*b);const k=[b,b,b,b,b,b];_.set(k,v*g*b)}const M=new rt;M.setAttribute("position",new xt(x,m)),M.setAttribute("uv",new xt(w,d)),M.setAttribute("faceIndex",new xt(_,v)),e.push(M),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pc(r,e,t){const n=new Ai(r,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wg(r,e,t){const n=new Float32Array(vi),i=new D(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Rc(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ic(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===lo||l===Da,h=l===cs||l===us;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Cc(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Cc(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qg(r,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let d=0,v=m.length;d<v;d++)e.update(m[d],34962)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let w=0,_=x.length;w<_;w+=3){const M=x[w+0],b=x[w+1],E=x[w+2];f.push(M,b,b,E,E,M)}}else{const x=g.array;m=g.version;for(let w=0,_=x.length/3-1;w<_;w+=3){const M=w+0,b=w+1,E=w+2;f.push(M,b,b,E,E,M)}}const d=new(eh(f)?rh:ll)(f,1);d.version=m;const v=s.get(u);v&&e.remove(v),s.set(u,d)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Yg(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,p){r.drawElements(s,p,a,f*l),t.update(p,s,1)}function u(f,p,g){if(g===0)return;let m,d;if(i)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Zg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kg(r,e){return r[0]-e[0]}function Jg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ma(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function $g(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Xe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=m!==void 0?m.length:0;let v=s.get(h);if(v===void 0||v.count!==d){let q=function(){z.dispose(),s.delete(h),h.removeEventListener("dispose",q)};var g=q;v!==void 0&&v.texture.dispose();const _=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let k=0;_===!0&&(k=1),M===!0&&(k=2),b===!0&&(k=3);let V=h.attributes.position.count*k,X=1;V>e.maxTextureSize&&(X=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const K=new Float32Array(V*X*4*d),z=new sh(K,V,X,d);z.type=Qn,z.needsUpdate=!0;const Y=k*4;for(let W=0;W<d;W++){const B=E[W],j=y[W],Z=A[W],se=V*X*4*W;for(let F=0;F<B.count;F++){const R=F*Y;_===!0&&(o.fromBufferAttribute(B,F),B.normalized===!0&&ma(o,B),K[se+R+0]=o.x,K[se+R+1]=o.y,K[se+R+2]=o.z,K[se+R+3]=0),M===!0&&(o.fromBufferAttribute(j,F),j.normalized===!0&&ma(o,j),K[se+R+4]=o.x,K[se+R+5]=o.y,K[se+R+6]=o.z,K[se+R+7]=0),b===!0&&(o.fromBufferAttribute(Z,F),Z.normalized===!0&&ma(o,Z),K[se+R+8]=o.x,K[se+R+9]=o.y,K[se+R+10]=o.z,K[se+R+11]=Z.itemSize===4?o.w:1)}}v={count:d,texture:z,size:new oe(V,X)},s.set(h,v),h.addEventListener("dispose",q)}let x=0;for(let _=0;_<p.length;_++)x+=p[_];const w=h.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",w),f.getUniforms().setValue(r,"morphTargetInfluences",p),f.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let d=n[h.id];if(d===void 0||d.length!==m){d=[];for(let M=0;M<m;M++)d[M]=[M,0];n[h.id]=d}for(let M=0;M<m;M++){const b=d[M];b[0]=M,b[1]=p[M]}d.sort(Jg);for(let M=0;M<8;M++)M<m&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Kg);const v=h.morphAttributes.position,x=h.morphAttributes.normal;let w=0;for(let M=0;M<8;M++){const b=a[M],E=b[0],y=b[1];E!==Number.MAX_SAFE_INTEGER&&y?(v&&h.getAttribute("morphTarget"+M)!==v[E]&&h.setAttribute("morphTarget"+M,v[E]),x&&h.getAttribute("morphNormal"+M)!==x[E]&&h.setAttribute("morphNormal"+M,x[E]),i[M]=y,w+=y):(v&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),x&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const _=h.morphTargetsRelative?1:1-w;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Qg(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ch=new wt,uh=new sh,hh=new Gd,fh=new ah,Dc=[],Fc=[],Nc=new Float32Array(16),Oc=new Float32Array(9),kc=new Float32Array(4);function ws(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Dc[i];if(s===void 0&&(s=new Float32Array(i),Dc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ao(r,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function e0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function n0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function i0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function s0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;kc.set(n),r.uniformMatrix2fv(this.addr,!1,kc),It(t,n)}}function r0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Oc.set(n),r.uniformMatrix3fv(this.addr,!1,Oc),It(t,n)}}function o0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Nc.set(n),r.uniformMatrix4fv(this.addr,!1,Nc),It(t,n)}}function a0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function l0(r,e){const t=this.cache;Rt(t,e)||(r.uniform2iv(this.addr,e),It(t,e))}function c0(r,e){const t=this.cache;Rt(t,e)||(r.uniform3iv(this.addr,e),It(t,e))}function u0(r,e){const t=this.cache;Rt(t,e)||(r.uniform4iv(this.addr,e),It(t,e))}function h0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function f0(r,e){const t=this.cache;Rt(t,e)||(r.uniform2uiv(this.addr,e),It(t,e))}function d0(r,e){const t=this.cache;Rt(t,e)||(r.uniform3uiv(this.addr,e),It(t,e))}function p0(r,e){const t=this.cache;Rt(t,e)||(r.uniform4uiv(this.addr,e),It(t,e))}function m0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ch,i)}function g0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hh,i)}function v0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fh,i)}function x0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uh,i)}function y0(r){switch(r){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return f0;case 36295:return d0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}function _0(r,e){r.uniform1fv(this.addr,e)}function M0(r,e){const t=ws(e,this.size,2);r.uniform2fv(this.addr,t)}function w0(r,e){const t=ws(e,this.size,3);r.uniform3fv(this.addr,t)}function b0(r,e){const t=ws(e,this.size,4);r.uniform4fv(this.addr,t)}function S0(r,e){const t=ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function T0(r,e){const t=ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function E0(r,e){const t=ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function A0(r,e){r.uniform1iv(this.addr,e)}function L0(r,e){r.uniform2iv(this.addr,e)}function C0(r,e){r.uniform3iv(this.addr,e)}function P0(r,e){r.uniform4iv(this.addr,e)}function R0(r,e){r.uniform1uiv(this.addr,e)}function I0(r,e){r.uniform2uiv(this.addr,e)}function D0(r,e){r.uniform3uiv(this.addr,e)}function F0(r,e){r.uniform4uiv(this.addr,e)}function N0(r,e,t){const n=e.length,i=Ao(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||ch,i[s])}function O0(r,e,t){const n=e.length,i=Ao(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||hh,i[s])}function k0(r,e,t){const n=e.length,i=Ao(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||fh,i[s])}function z0(r,e,t){const n=e.length,i=Ao(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||uh,i[s])}function B0(r){switch(r){case 5126:return _0;case 35664:return M0;case 35665:return w0;case 35666:return b0;case 35674:return S0;case 35675:return T0;case 35676:return E0;case 5124:case 35670:return A0;case 35667:case 35671:return L0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return R0;case 36294:return I0;case 36295:return D0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return z0}}class U0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=y0(t.type)}}class V0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=B0(t.type)}}class G0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function zc(r,e){r.seq.push(e),r.map[e.id]=e}function H0(r,e,t){const n=r.name,i=n.length;for(ga.lastIndex=0;;){const s=ga.exec(n),o=ga.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){zc(t,c===void 0?new U0(a,r,e):new V0(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new G0(a),zc(t,u)),t=u}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);H0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Bc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let W0=0;function j0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function X0(r){switch(r){case Ei:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Uc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+j0(r.getShaderSource(e),o)}else return i}function q0(r,e){const t=X0(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Y0(r,e){let t;switch(e){case ed:t="Linear";break;case td:t="Reinhard";break;case nd:t="OptimizedCineon";break;case id:t="ACESFilmic";break;case sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z0(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function K0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ys(r){return r!==""}function Vc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(r){return r.replace($0,Q0)}function Q0(r,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ba(t)}const ev=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(r){return r.replace(tv,dh).replace(ev,nv)}function nv(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),dh(r,e,t,n)}function dh(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qs&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cs:case us:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function ov(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case $f:e="ENVMAP_BLENDING_MIX";break;case Qf:e="ENVMAP_BLENDING_ADD";break}return e}function av(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=iv(t),c=sv(t),h=rv(t),u=ov(t),f=av(t),p=t.isWebGL2?"":Z0(t),g=K0(s),m=i.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Ys).join(`
`),d.length>0&&(d+=`
`),v=[p,g].filter(Ys).join(`
`),v.length>0&&(v+=`
`)):(d=[Wc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),v=[p,Wc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,q0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=Ba(o),o=Vc(o,t),o=Gc(o,t),a=Ba(a),a=Vc(a,t),a=Gc(a,t),o=Hc(o),a=Hc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=x+d+o,_=x+v+a,M=Bc(i,35633,w),b=Bc(i,35632,_);if(i.attachShader(m,M),i.attachShader(m,b),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(m).trim(),k=i.getShaderInfoLog(M).trim(),V=i.getShaderInfoLog(b).trim();let X=!0,K=!0;if(i.getProgramParameter(m,35714)===!1){X=!1;const z=Uc(i,M,"vertex"),Y=Uc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+z+`
`+Y)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(k===""||V==="")&&(K=!1);K&&(this.diagnostics={runnable:X,programLog:A,vertexShader:{log:k,prefix:d},fragmentShader:{log:V,prefix:v}})}i.deleteShader(M),i.deleteShader(b);let E;this.getUniforms=function(){return E===void 0&&(E=new no(i,m)),E};let y;return this.getAttributes=function(){return y===void 0&&(y=J0(i,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}let cv=0;class uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new hv(e);t.set(e,n)}return t.get(e)}}class hv{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}}function fv(r,e,t,n,i,s,o){const a=new al,l=new uv,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,A,k,V,X){const K=V.fog,z=X.geometry,Y=y.isMeshStandardMaterial?V.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),W=!!q&&q.mapping===bo?q.image.height:null,B=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const j=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=j!==void 0?j.length:0;let se=0;z.morphAttributes.position!==void 0&&(se=1),z.morphAttributes.normal!==void 0&&(se=2),z.morphAttributes.color!==void 0&&(se=3);let F,R,S,N;if(B){const de=hn[B];F=de.vertexShader,R=de.fragmentShader}else F=y.vertexShader,R=y.fragmentShader,l.update(y),S=l.getVertexShaderID(y),N=l.getFragmentShaderID(y);const O=r.getRenderTarget(),U=y.alphaTest>0,Q=y.clearcoat>0,ce=y.iridescence>0;return{isWebGL2:h,shaderID:B,shaderName:y.type,vertexShader:F,fragmentShader:R,defines:y.defines,customVertexShaderID:S,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:f,outputEncoding:O===null?r.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:Ei,map:!!y.map,matcap:!!y.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:W,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Sd,tangentSpaceNormalMap:y.normalMapType===So,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ge,clearcoat:Q,clearcoatMap:Q&&!!y.clearcoatMap,clearcoatRoughnessMap:Q&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Q&&!!y.clearcoatNormalMap,iridescence:ce,iridescenceMap:ce&&!!y.iridescenceMap,iridescenceThicknessMap:ce&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ss,alphaMap:!!y.alphaMap,alphaTest:U,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!K,useFog:y.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:Fn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pt,flipSided:y.side===on,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)A.push(k),A.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(v(A,y),x(A,y),A.push(r.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function v(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),y.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),y.push(a.mask)}function w(y){const A=g[y.type];let k;if(A){const V=hn[A];k=ep.clone(V.uniforms)}else k=y.uniforms;return k}function _(y,A){let k;for(let V=0,X=c.length;V<X;V++){const K=c[V];if(K.cacheKey===A){k=K,++k.usedTimes;break}}return k===void 0&&(k=new lv(r,A,y,s),c.push(k)),k}function M(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:_,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function dv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,p,g,m,d){let v=r[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:d},r[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=m,v.group=d),e++,v}function a(u,f,p,g,m,d){const v=o(u,f,p,g,m,d);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function l(u,f,p,g,m,d){const v=o(u,f,p,g,m,d);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function c(u,f){t.length>1&&t.sort(u||pv),n.length>1&&n.sort(f||jc),i.length>1&&i.sort(f||jc)}function h(){for(let u=e,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function mv(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Xc,r.set(n,[s])):i>=r.get(n).length?(s=new Xc,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function gv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ee};break;case"SpotLight":t={position:new D,direction:new D,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function vv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xv=0;function yv(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function _v(r,e){const t=new gv,n=vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,o=new Ae,a=new Ae;function l(h,u){let f=0,p=0,g=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,d=0,v=0,x=0,w=0,_=0,M=0,b=0;h.sort(yv);const E=u!==!0?Math.PI:1;for(let A=0,k=h.length;A<k;A++){const V=h[A],X=V.color,K=V.intensity,z=V.distance,Y=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)f+=X.r*K*E,p+=X.g*K*E,g+=X.b*K*E;else if(V.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(V.sh.coefficients[q],K);else if(V.isDirectionalLight){const q=t.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity*E),V.castShadow){const W=V.shadow,B=n.get(V);B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=V.shadow.matrix,_++}i.directional[m]=q,m++}else if(V.isSpotLight){const q=t.get(V);if(q.position.setFromMatrixPosition(V.matrixWorld),q.color.copy(X).multiplyScalar(K*E),q.distance=z,q.coneCos=Math.cos(V.angle),q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),q.decay=V.decay,V.castShadow){const W=V.shadow,B=n.get(V);B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=Y,i.spotShadowMatrix[v]=V.shadow.matrix,b++}i.spot[v]=q,v++}else if(V.isRectAreaLight){const q=t.get(V);q.color.copy(X).multiplyScalar(K),q.halfWidth.set(V.width*.5,0,0),q.halfHeight.set(0,V.height*.5,0),i.rectArea[x]=q,x++}else if(V.isPointLight){const q=t.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity*E),q.distance=V.distance,q.decay=V.decay,V.castShadow){const W=V.shadow,B=n.get(V);B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,i.pointShadow[d]=B,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=V.shadow.matrix,M++}i.point[d]=q,d++}else if(V.isHemisphereLight){const q=t.get(V);q.skyColor.copy(V.color).multiplyScalar(K*E),q.groundColor.copy(V.groundColor).multiplyScalar(K*E),i.hemi[w]=q,w++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const y=i.hash;(y.directionalLength!==m||y.pointLength!==d||y.spotLength!==v||y.rectAreaLength!==x||y.hemiLength!==w||y.numDirectionalShadows!==_||y.numPointShadows!==M||y.numSpotShadows!==b)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=x,i.point.length=d,i.hemi.length=w,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=b,y.directionalLength=m,y.pointLength=d,y.spotLength=v,y.rectAreaLength=x,y.hemiLength=w,y.numDirectionalShadows=_,y.numPointShadows=M,y.numSpotShadows=b,i.version=xv++)}function c(h,u){let f=0,p=0,g=0,m=0,d=0;const v=u.matrixWorldInverse;for(let x=0,w=h.length;x<w;x++){const _=h[x];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),f++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(_.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(_.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),p++}else if(_.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),d++}}}return{setup:l,setupView:c,state:i}}function qc(r,e){const t=new _v(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Mv(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new qc(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new qc(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class wv extends kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bv extends kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ev(r,e,t){let n=new cl;const i=new oe,s=new oe,o=new Xe,a=new wv({depthPacking:bd}),l=new bv,c={},h=t.maxTextureSize,u={0:on,1:Si,2:Pt},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Sv,fragmentShader:Tv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new rt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Je(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu,this.render=function(_,M,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;const E=r.getRenderTarget(),y=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),k=r.state;k.setBlending(ei),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let V=0,X=_.length;V<X;V++){const K=_[V],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Y=z.getFrameExtents();if(i.multiply(Y),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,z.mapSize.y=s.y)),z.map===null){const W=this.type!==qs?{minFilter:Mt,magFilter:Mt}:{};z.map=new Ai(i.x,i.y,W),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const q=z.getViewportCount();for(let W=0;W<q;W++){const B=z.getViewport(W);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),k.viewport(o),z.updateMatrices(K,W),n=z.getFrustum(),w(M,b,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===qs&&v(z,b),z.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(E,y,A)};function v(_,M){const b=e.update(m);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Ai(i.x,i.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(M,null,b,f,m,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(M,null,b,p,m,null)}function x(_,M,b,E,y,A){let k=null;const V=b.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(V!==void 0?k=V:k=b.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const X=k.uuid,K=M.uuid;let z=c[X];z===void 0&&(z={},c[X]=z);let Y=z[K];Y===void 0&&(Y=k.clone(),z[K]=Y),k=Y}return k.visible=M.visible,k.wireframe=M.wireframe,A===qs?k.side=M.shadowSide!==null?M.shadowSide:M.side:k.side=M.shadowSide!==null?M.shadowSide:u[M.side],k.alphaMap=M.alphaMap,k.alphaTest=M.alphaTest,k.clipShadows=M.clipShadows,k.clippingPlanes=M.clippingPlanes,k.clipIntersection=M.clipIntersection,k.displacementMap=M.displacementMap,k.displacementScale=M.displacementScale,k.displacementBias=M.displacementBias,k.wireframeLinewidth=M.wireframeLinewidth,k.linewidth=M.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(b.matrixWorld),k.nearDistance=E,k.farDistance=y),k}function w(_,M,b,E,y){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&y===qs)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,_.matrixWorld);const V=e.update(_),X=_.material;if(Array.isArray(X)){const K=V.groups;for(let z=0,Y=K.length;z<Y;z++){const q=K[z],W=X[q.materialIndex];if(W&&W.visible){const B=x(_,W,E,b.near,b.far,y);r.renderBufferDirect(b,null,V,B,_,q)}}}else if(X.visible){const K=x(_,X,E,b.near,b.far,y);r.renderBufferDirect(b,null,V,K,_,null)}}const k=_.children;for(let V=0,X=k.length;V<X;V++)w(k[V],M,b,E,y)}}function Av(r,e,t){const n=t.isWebGL2;function i(){let H=!1;const ve=new Xe;let ie=null;const Se=new Xe(0,0,0,0);return{setMask:function(be){ie!==be&&!H&&(r.colorMask(be,be,be,be),ie=be)},setLocked:function(be){H=be},setClear:function(be,We,pt,ot,zn){zn===!0&&(be*=ot,We*=ot,pt*=ot),ve.set(be,We,pt,ot),Se.equals(ve)===!1&&(r.clearColor(be,We,pt,ot),Se.copy(ve))},reset:function(){H=!1,ie=null,Se.set(-1,0,0,0)}}}function s(){let H=!1,ve=null,ie=null,Se=null;return{setTest:function(be){be?U(2929):Q(2929)},setMask:function(be){ve!==be&&!H&&(r.depthMask(be),ve=be)},setFunc:function(be){if(ie!==be){if(be)switch(be){case jf:r.depthFunc(512);break;case Xf:r.depthFunc(519);break;case qf:r.depthFunc(513);break;case Ia:r.depthFunc(515);break;case Yf:r.depthFunc(514);break;case Zf:r.depthFunc(518);break;case Kf:r.depthFunc(516);break;case Jf:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);ie=be}},setLocked:function(be){H=be},setClear:function(be){Se!==be&&(r.clearDepth(be),Se=be)},reset:function(){H=!1,ve=null,ie=null,Se=null}}}function o(){let H=!1,ve=null,ie=null,Se=null,be=null,We=null,pt=null,ot=null,zn=null;return{setTest:function(it){H||(it?U(2960):Q(2960))},setMask:function(it){ve!==it&&!H&&(r.stencilMask(it),ve=it)},setFunc:function(it,Mn,Ht){(ie!==it||Se!==Mn||be!==Ht)&&(r.stencilFunc(it,Mn,Ht),ie=it,Se=Mn,be=Ht)},setOp:function(it,Mn,Ht){(We!==it||pt!==Mn||ot!==Ht)&&(r.stencilOp(it,Mn,Ht),We=it,pt=Mn,ot=Ht)},setLocked:function(it){H=it},setClear:function(it){zn!==it&&(r.clearStencil(it),zn=it)},reset:function(){H=!1,ve=null,ie=null,Se=null,be=null,We=null,pt=null,ot=null,zn=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,v=!1,x=null,w=null,_=null,M=null,b=null,E=null,y=null,A=!1,k=null,V=null,X=null,K=null,z=null;const Y=r.getParameter(35661);let q=!1,W=0;const B=r.getParameter(7938);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=W>=2);let j=null,Z={};const se=r.getParameter(3088),F=r.getParameter(2978),R=new Xe().fromArray(se),S=new Xe().fromArray(F);function N(H,ve,ie){const Se=new Uint8Array(4),be=r.createTexture();r.bindTexture(H,be),r.texParameteri(H,10241,9728),r.texParameteri(H,10240,9728);for(let We=0;We<ie;We++)r.texImage2D(ve+We,0,6408,1,1,0,6408,5121,Se);return be}const O={};O[3553]=N(3553,3553,1),O[34067]=N(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),U(2929),l.setFunc(Ia),G(!1),I(zl),U(2884),ue(ei);function U(H){f[H]!==!0&&(r.enable(H),f[H]=!0)}function Q(H){f[H]!==!1&&(r.disable(H),f[H]=!1)}function ce(H,ve){return p[H]!==ve?(r.bindFramebuffer(H,ve),p[H]=ve,n&&(H===36009&&(p[36160]=ve),H===36160&&(p[36009]=ve)),!0):!1}function te(H,ve){let ie=m,Se=!1;if(H)if(ie=g.get(ve),ie===void 0&&(ie=[],g.set(ve,ie)),H.isWebGLMultipleRenderTargets){const be=H.texture;if(ie.length!==be.length||ie[0]!==36064){for(let We=0,pt=be.length;We<pt;We++)ie[We]=36064+We;ie.length=be.length,Se=!0}}else ie[0]!==36064&&(ie[0]=36064,Se=!0);else ie[0]!==1029&&(ie[0]=1029,Se=!0);Se&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function de(H){return d!==H?(r.useProgram(H),d=H,!0):!1}const ae={[Ji]:32774,[Ff]:32778,[Nf]:32779};if(n)ae[Vl]=32775,ae[Gl]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(ae[Vl]=H.MIN_EXT,ae[Gl]=H.MAX_EXT)}const pe={[Of]:0,[kf]:1,[zf]:768,[qu]:770,[Wf]:776,[Gf]:774,[Uf]:772,[Bf]:769,[Yu]:771,[Hf]:775,[Vf]:773};function ue(H,ve,ie,Se,be,We,pt,ot){if(H===ei){v===!0&&(Q(3042),v=!1);return}if(v===!1&&(U(3042),v=!0),H!==Df){if(H!==x||ot!==A){if((w!==Ji||b!==Ji)&&(r.blendEquation(32774),w=Ji,b=Ji),ot)switch(H){case ss:r.blendFuncSeparate(1,771,1,771);break;case ao:r.blendFunc(1,1);break;case Bl:r.blendFuncSeparate(0,769,0,1);break;case Ul:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ss:r.blendFuncSeparate(770,771,1,771);break;case ao:r.blendFunc(770,1);break;case Bl:r.blendFuncSeparate(0,769,0,1);break;case Ul:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,M=null,E=null,y=null,x=H,A=ot}return}be=be||ve,We=We||ie,pt=pt||Se,(ve!==w||be!==b)&&(r.blendEquationSeparate(ae[ve],ae[be]),w=ve,b=be),(ie!==_||Se!==M||We!==E||pt!==y)&&(r.blendFuncSeparate(pe[ie],pe[Se],pe[We],pe[pt]),_=ie,M=Se,E=We,y=pt),x=H,A=null}function ge(H,ve){H.side===Pt?Q(2884):U(2884);let ie=H.side===on;ve&&(ie=!ie),G(ie),H.blending===ss&&H.transparent===!1?ue(ei):ue(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const Se=H.stencilWrite;c.setTest(Se),Se&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Te(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?U(32926):Q(32926)}function G(H){k!==H&&(H?r.frontFace(2304):r.frontFace(2305),k=H)}function I(H){H!==Cf?(U(2884),H!==V&&(H===zl?r.cullFace(1029):H===Pf?r.cullFace(1028):r.cullFace(1032))):Q(2884),V=H}function ye(H){H!==X&&(q&&r.lineWidth(H),X=H)}function Te(H,ve,ie){H?(U(32823),(K!==ve||z!==ie)&&(r.polygonOffset(ve,ie),K=ve,z=ie)):Q(32823)}function Be(H){H?U(3089):Q(3089)}function Ze(H){H===void 0&&(H=33984+Y-1),j!==H&&(r.activeTexture(H),j=H)}function P(H,ve){j===null&&Ze();let ie=Z[j];ie===void 0&&(ie={type:void 0,texture:void 0},Z[j]=ie),(ie.type!==H||ie.texture!==ve)&&(r.bindTexture(H,ve||O[H]),ie.type=H,ie.texture=ve)}function T(){const H=Z[j];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function L(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(H){R.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),R.copy(H))}function Me(H){S.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),S.copy(H))}function Ce(H,ve){let ie=u.get(ve);ie===void 0&&(ie=new WeakMap,u.set(ve,ie));let Se=ie.get(H);Se===void 0&&(Se=r.getUniformBlockIndex(ve,H.name),ie.set(H,Se))}function Ue(H,ve){const Se=u.get(ve).get(H);h.get(H)!==Se&&(r.uniformBlockBinding(ve,Se,H.__bindingPointIndex),h.set(H,Se))}function et(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},j=null,Z={},p={},g=new WeakMap,m=[],d=null,v=!1,x=null,w=null,_=null,M=null,b=null,E=null,y=null,A=!1,k=null,V=null,X=null,K=null,z=null,R.set(0,0,r.canvas.width,r.canvas.height),S.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:U,disable:Q,bindFramebuffer:ce,drawBuffers:te,useProgram:de,setBlending:ue,setMaterial:ge,setFlipSided:G,setCullFace:I,setLineWidth:ye,setPolygonOffset:Te,setScissorTest:Be,activeTexture:Ze,bindTexture:P,unbindTexture:T,compressedTexImage2D:ne,texImage2D:le,texImage3D:me,updateUBOMapping:Ce,uniformBlockBinding:Ue,texStorage2D:Le,texStorage3D:L,texSubImage2D:he,texSubImage3D:fe,compressedTexSubImage2D:_e,scissor:we,viewport:Me,reset:et}}function Lv(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,T){return v?new OffscreenCanvas(P,T):or("canvas")}function w(P,T,ne,he){let fe=1;if((P.width>he||P.height>he)&&(fe=he/Math.max(P.width,P.height)),fe<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const _e=T?uo:Math.floor,Le=_e(fe*P.width),L=_e(fe*P.height);m===void 0&&(m=x(Le,L));const le=ne?x(Le,L):m;return le.width=Le,le.height=L,le.getContext("2d").drawImage(P,0,0,Le,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Le+"x"+L+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function _(P){return za(P.width)&&za(P.height)}function M(P){return a?!1:P.wrapS!==Nt||P.wrapT!==Nt||P.minFilter!==Mt&&P.minFilter!==Ft}function b(P,T){return P.generateMipmaps&&T&&P.minFilter!==Mt&&P.minFilter!==Ft}function E(P){r.generateMipmap(P)}function y(P,T,ne,he,fe=!1){if(a===!1)return T;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e=T;return T===6403&&(ne===5126&&(_e=33326),ne===5131&&(_e=33325),ne===5121&&(_e=33321)),T===33319&&(ne===5126&&(_e=33328),ne===5131&&(_e=33327),ne===5121&&(_e=33323)),T===6408&&(ne===5126&&(_e=34836),ne===5131&&(_e=34842),ne===5121&&(_e=he===Ge&&fe===!1?35907:32856),ne===32819&&(_e=32854),ne===32820&&(_e=32855)),(_e===33325||_e===33326||_e===33327||_e===33328||_e===34842||_e===34836)&&e.get("EXT_color_buffer_float"),_e}function A(P,T,ne){return b(P,ne)===!0||P.isFramebufferTexture&&P.minFilter!==Mt&&P.minFilter!==Ft?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function k(P){return P===Mt||P===Fa||P===Na?9728:9729}function V(P){const T=P.target;T.removeEventListener("dispose",V),K(T),T.isVideoTexture&&g.delete(T)}function X(P){const T=P.target;T.removeEventListener("dispose",X),Y(T)}function K(P){const T=n.get(P);if(T.__webglInit===void 0)return;const ne=P.source,he=d.get(ne);if(he){const fe=he[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&z(P),Object.keys(he).length===0&&d.delete(ne)}n.remove(P)}function z(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const ne=P.source,he=d.get(ne);delete he[T.__cacheKey],o.memory.textures--}function Y(P){const T=P.texture,ne=n.get(P),he=n.get(T);if(he.__webglTexture!==void 0&&(r.deleteTexture(he.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)r.deleteFramebuffer(ne.__webglFramebuffer[fe]),ne.__webglDepthbuffer&&r.deleteRenderbuffer(ne.__webglDepthbuffer[fe]);else{if(r.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&r.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let fe=0;fe<ne.__webglColorRenderbuffer.length;fe++)ne.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(ne.__webglColorRenderbuffer[fe]);ne.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let fe=0,_e=T.length;fe<_e;fe++){const Le=n.get(T[fe]);Le.__webglTexture&&(r.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(T[fe])}n.remove(T),n.remove(P)}let q=0;function W(){q=0}function B(){const P=q;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),q+=1,P}function j(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.encoding),T.join()}function Z(P,T){const ne=n.get(P);if(P.isVideoTexture&&Be(P),P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){const he=P.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ne,P,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,ne.__webglTexture)}function se(P,T){const ne=n.get(P);if(P.version>0&&ne.__version!==P.version){Q(ne,P,T);return}t.activeTexture(33984+T),t.bindTexture(35866,ne.__webglTexture)}function F(P,T){const ne=n.get(P);if(P.version>0&&ne.__version!==P.version){Q(ne,P,T);return}t.activeTexture(33984+T),t.bindTexture(32879,ne.__webglTexture)}function R(P,T){const ne=n.get(P);if(P.version>0&&ne.__version!==P.version){ce(ne,P,T);return}t.activeTexture(33984+T),t.bindTexture(34067,ne.__webglTexture)}const S={[ni]:10497,[Nt]:33071,[co]:33648},N={[Mt]:9728,[Fa]:9984,[Na]:9986,[Ft]:9729,[Ku]:9985,[ys]:9987};function O(P,T,ne){if(ne?(r.texParameteri(P,10242,S[T.wrapS]),r.texParameteri(P,10243,S[T.wrapT]),(P===32879||P===35866)&&r.texParameteri(P,32882,S[T.wrapR]),r.texParameteri(P,10240,N[T.magFilter]),r.texParameteri(P,10241,N[T.minFilter])):(r.texParameteri(P,10242,33071),r.texParameteri(P,10243,33071),(P===32879||P===35866)&&r.texParameteri(P,32882,33071),(T.wrapS!==Nt||T.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,10240,k(T.magFilter)),r.texParameteri(P,10241,k(T.minFilter)),T.minFilter!==Mt&&T.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(T.type===Qn&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ir&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(P,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function U(P,T){let ne=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",V));const he=T.source;let fe=d.get(he);fe===void 0&&(fe={},d.set(he,fe));const _e=j(T);if(_e!==P.__cacheKey){fe[_e]===void 0&&(fe[_e]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),fe[_e].usedTimes++;const Le=fe[P.__cacheKey];Le!==void 0&&(fe[P.__cacheKey].usedTimes--,Le.usedTimes===0&&z(T)),P.__cacheKey=_e,P.__webglTexture=fe[_e].texture}return ne}function Q(P,T,ne){let he=3553;T.isDataArrayTexture&&(he=35866),T.isData3DTexture&&(he=32879);const fe=U(P,T),_e=T.source;if(t.activeTexture(33984+ne),t.bindTexture(he,P.__webglTexture),_e.version!==_e.__currentVersion||fe===!0){r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const Le=M(T)&&_(T.image)===!1;let L=w(T.image,Le,!1,h);L=Ze(T,L);const le=_(L)||a,me=s.convert(T.format,T.encoding);let we=s.convert(T.type),Me=y(T.internalFormat,me,we,T.encoding,T.isVideoTexture);O(he,T,le);let Ce;const Ue=T.mipmaps,et=a&&T.isVideoTexture!==!0,H=_e.__currentVersion===void 0||fe===!0,ve=A(T,L,le);if(T.isDepthTexture)Me=6402,a?T.type===Qn?Me=36012:T.type===xi?Me=33190:T.type===rs?Me=35056:Me=33189:T.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Mi&&Me===6402&&T.type!==Ju&&T.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=xi,we=s.convert(T.type)),T.format===hs&&Me===6402&&(Me=34041,T.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=rs,we=s.convert(T.type))),H&&(et?t.texStorage2D(3553,1,Me,L.width,L.height):t.texImage2D(3553,0,Me,L.width,L.height,0,me,we,null));else if(T.isDataTexture)if(Ue.length>0&&le){et&&H&&t.texStorage2D(3553,ve,Me,Ue[0].width,Ue[0].height);for(let ie=0,Se=Ue.length;ie<Se;ie++)Ce=Ue[ie],et?t.texSubImage2D(3553,ie,0,0,Ce.width,Ce.height,me,we,Ce.data):t.texImage2D(3553,ie,Me,Ce.width,Ce.height,0,me,we,Ce.data);T.generateMipmaps=!1}else et?(H&&t.texStorage2D(3553,ve,Me,L.width,L.height),t.texSubImage2D(3553,0,0,0,L.width,L.height,me,we,L.data)):t.texImage2D(3553,0,Me,L.width,L.height,0,me,we,L.data);else if(T.isCompressedTexture){et&&H&&t.texStorage2D(3553,ve,Me,Ue[0].width,Ue[0].height);for(let ie=0,Se=Ue.length;ie<Se;ie++)Ce=Ue[ie],T.format!==sn?me!==null?et?t.compressedTexSubImage2D(3553,ie,0,0,Ce.width,Ce.height,me,Ce.data):t.compressedTexImage2D(3553,ie,Me,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,ie,0,0,Ce.width,Ce.height,me,we,Ce.data):t.texImage2D(3553,ie,Me,Ce.width,Ce.height,0,me,we,Ce.data)}else if(T.isDataArrayTexture)et?(H&&t.texStorage3D(35866,ve,Me,L.width,L.height,L.depth),t.texSubImage3D(35866,0,0,0,0,L.width,L.height,L.depth,me,we,L.data)):t.texImage3D(35866,0,Me,L.width,L.height,L.depth,0,me,we,L.data);else if(T.isData3DTexture)et?(H&&t.texStorage3D(32879,ve,Me,L.width,L.height,L.depth),t.texSubImage3D(32879,0,0,0,0,L.width,L.height,L.depth,me,we,L.data)):t.texImage3D(32879,0,Me,L.width,L.height,L.depth,0,me,we,L.data);else if(T.isFramebufferTexture){if(H)if(et)t.texStorage2D(3553,ve,Me,L.width,L.height);else{let ie=L.width,Se=L.height;for(let be=0;be<ve;be++)t.texImage2D(3553,be,Me,ie,Se,0,me,we,null),ie>>=1,Se>>=1}}else if(Ue.length>0&&le){et&&H&&t.texStorage2D(3553,ve,Me,Ue[0].width,Ue[0].height);for(let ie=0,Se=Ue.length;ie<Se;ie++)Ce=Ue[ie],et?t.texSubImage2D(3553,ie,0,0,me,we,Ce):t.texImage2D(3553,ie,Me,me,we,Ce);T.generateMipmaps=!1}else et?(H&&t.texStorage2D(3553,ve,Me,L.width,L.height),t.texSubImage2D(3553,0,0,0,me,we,L)):t.texImage2D(3553,0,Me,me,we,L);b(T,le)&&E(he),_e.__currentVersion=_e.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ce(P,T,ne){if(T.image.length!==6)return;const he=U(P,T),fe=T.source;if(t.activeTexture(33984+ne),t.bindTexture(34067,P.__webglTexture),fe.version!==fe.__currentVersion||he===!0){r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,Le=T.image[0]&&T.image[0].isDataTexture,L=[];for(let ie=0;ie<6;ie++)!_e&&!Le?L[ie]=w(T.image[ie],!1,!0,c):L[ie]=Le?T.image[ie].image:T.image[ie],L[ie]=Ze(T,L[ie]);const le=L[0],me=_(le)||a,we=s.convert(T.format,T.encoding),Me=s.convert(T.type),Ce=y(T.internalFormat,we,Me,T.encoding),Ue=a&&T.isVideoTexture!==!0,et=fe.__currentVersion===void 0||he===!0;let H=A(T,le,me);O(34067,T,me);let ve;if(_e){Ue&&et&&t.texStorage2D(34067,H,Ce,le.width,le.height);for(let ie=0;ie<6;ie++){ve=L[ie].mipmaps;for(let Se=0;Se<ve.length;Se++){const be=ve[Se];T.format!==sn?we!==null?Ue?t.compressedTexSubImage2D(34069+ie,Se,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(34069+ie,Se,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+ie,Se,0,0,be.width,be.height,we,Me,be.data):t.texImage2D(34069+ie,Se,Ce,be.width,be.height,0,we,Me,be.data)}}}else{ve=T.mipmaps,Ue&&et&&(ve.length>0&&H++,t.texStorage2D(34067,H,Ce,L[0].width,L[0].height));for(let ie=0;ie<6;ie++)if(Le){Ue?t.texSubImage2D(34069+ie,0,0,0,L[ie].width,L[ie].height,we,Me,L[ie].data):t.texImage2D(34069+ie,0,Ce,L[ie].width,L[ie].height,0,we,Me,L[ie].data);for(let Se=0;Se<ve.length;Se++){const We=ve[Se].image[ie].image;Ue?t.texSubImage2D(34069+ie,Se+1,0,0,We.width,We.height,we,Me,We.data):t.texImage2D(34069+ie,Se+1,Ce,We.width,We.height,0,we,Me,We.data)}}else{Ue?t.texSubImage2D(34069+ie,0,0,0,we,Me,L[ie]):t.texImage2D(34069+ie,0,Ce,we,Me,L[ie]);for(let Se=0;Se<ve.length;Se++){const be=ve[Se];Ue?t.texSubImage2D(34069+ie,Se+1,0,0,we,Me,be.image[ie]):t.texImage2D(34069+ie,Se+1,Ce,we,Me,be.image[ie])}}}b(T,me)&&E(34067),fe.__currentVersion=fe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function te(P,T,ne,he,fe){const _e=s.convert(ne.format,ne.encoding),Le=s.convert(ne.type),L=y(ne.internalFormat,_e,Le,ne.encoding);n.get(T).__hasExternalTextures||(fe===32879||fe===35866?t.texImage3D(fe,0,L,T.width,T.height,T.depth,0,_e,Le,null):t.texImage2D(fe,0,L,T.width,T.height,0,_e,Le,null)),t.bindFramebuffer(36160,P),Te(T)?f.framebufferTexture2DMultisampleEXT(36160,he,fe,n.get(ne).__webglTexture,0,ye(T)):r.framebufferTexture2D(36160,he,fe,n.get(ne).__webglTexture,0),t.bindFramebuffer(36160,null)}function de(P,T,ne){if(r.bindRenderbuffer(36161,P),T.depthBuffer&&!T.stencilBuffer){let he=33189;if(ne||Te(T)){const fe=T.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Qn?he=36012:fe.type===xi&&(he=33190));const _e=ye(T);Te(T)?f.renderbufferStorageMultisampleEXT(36161,_e,he,T.width,T.height):r.renderbufferStorageMultisample(36161,_e,he,T.width,T.height)}else r.renderbufferStorage(36161,he,T.width,T.height);r.framebufferRenderbuffer(36160,36096,36161,P)}else if(T.depthBuffer&&T.stencilBuffer){const he=ye(T);ne&&Te(T)===!1?r.renderbufferStorageMultisample(36161,he,35056,T.width,T.height):Te(T)?f.renderbufferStorageMultisampleEXT(36161,he,35056,T.width,T.height):r.renderbufferStorage(36161,34041,T.width,T.height),r.framebufferRenderbuffer(36160,33306,36161,P)}else{const he=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let fe=0;fe<he.length;fe++){const _e=he[fe],Le=s.convert(_e.format,_e.encoding),L=s.convert(_e.type),le=y(_e.internalFormat,Le,L,_e.encoding),me=ye(T);ne&&Te(T)===!1?r.renderbufferStorageMultisample(36161,me,le,T.width,T.height):Te(T)?f.renderbufferStorageMultisampleEXT(36161,me,le,T.width,T.height):r.renderbufferStorage(36161,le,T.width,T.height)}}r.bindRenderbuffer(36161,null)}function ae(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const he=n.get(T.depthTexture).__webglTexture,fe=ye(T);if(T.depthTexture.format===Mi)Te(T)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,he,0,fe):r.framebufferTexture2D(36160,36096,3553,he,0);else if(T.depthTexture.format===hs)Te(T)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,he,0,fe):r.framebufferTexture2D(36160,33306,3553,he,0);else throw new Error("Unknown depthTexture format")}function pe(P){const T=n.get(P),ne=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ae(T.__webglFramebuffer,P)}else if(ne){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(36160,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]=r.createRenderbuffer(),de(T.__webglDepthbuffer[he],P,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),de(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function ue(P,T,ne){const he=n.get(P);T!==void 0&&te(he.__webglFramebuffer,P,P.texture,36064,3553),ne!==void 0&&pe(P)}function ge(P){const T=P.texture,ne=n.get(P),he=n.get(T);P.addEventListener("dispose",X),P.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=T.version,o.memory.textures++);const fe=P.isWebGLCubeRenderTarget===!0,_e=P.isWebGLMultipleRenderTargets===!0,Le=_(P)||a;if(fe){ne.__webglFramebuffer=[];for(let L=0;L<6;L++)ne.__webglFramebuffer[L]=r.createFramebuffer()}else{if(ne.__webglFramebuffer=r.createFramebuffer(),_e)if(i.drawBuffers){const L=P.texture;for(let le=0,me=L.length;le<me;le++){const we=n.get(L[le]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Te(P)===!1){const L=_e?T:[T];ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer);for(let le=0;le<L.length;le++){const me=L[le];ne.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(36161,ne.__webglColorRenderbuffer[le]);const we=s.convert(me.format,me.encoding),Me=s.convert(me.type),Ce=y(me.internalFormat,we,Me,me.encoding),Ue=ye(P);r.renderbufferStorageMultisample(36161,Ue,Ce,P.width,P.height),r.framebufferRenderbuffer(36160,36064+le,36161,ne.__webglColorRenderbuffer[le])}r.bindRenderbuffer(36161,null),P.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),de(ne.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(fe){t.bindTexture(34067,he.__webglTexture),O(34067,T,Le);for(let L=0;L<6;L++)te(ne.__webglFramebuffer[L],P,T,36064,34069+L);b(T,Le)&&E(34067),t.unbindTexture()}else if(_e){const L=P.texture;for(let le=0,me=L.length;le<me;le++){const we=L[le],Me=n.get(we);t.bindTexture(3553,Me.__webglTexture),O(3553,we,Le),te(ne.__webglFramebuffer,P,we,36064+le,3553),b(we,Le)&&E(3553)}t.unbindTexture()}else{let L=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?L=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,he.__webglTexture),O(L,T,Le),te(ne.__webglFramebuffer,P,T,36064,L),b(T,Le)&&E(L),t.unbindTexture()}P.depthBuffer&&pe(P)}function G(P){const T=_(P)||a,ne=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let he=0,fe=ne.length;he<fe;he++){const _e=ne[he];if(b(_e,T)){const Le=P.isWebGLCubeRenderTarget?34067:3553,L=n.get(_e).__webglTexture;t.bindTexture(Le,L),E(Le),t.unbindTexture()}}}function I(P){if(a&&P.samples>0&&Te(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],ne=P.width,he=P.height;let fe=16384;const _e=[],Le=P.stencilBuffer?33306:36096,L=n.get(P),le=P.isWebGLMultipleRenderTargets===!0;if(le)for(let me=0;me<T.length;me++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let me=0;me<T.length;me++){_e.push(36064+me),P.depthBuffer&&_e.push(Le);const we=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(we===!1&&(P.depthBuffer&&(fe|=256),P.stencilBuffer&&(fe|=1024)),le&&r.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[me]),we===!0&&(r.invalidateFramebuffer(36008,[Le]),r.invalidateFramebuffer(36009,[Le])),le){const Me=n.get(T[me]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Me,0)}r.blitFramebuffer(0,0,ne,he,0,0,ne,he,fe,9728),p&&r.invalidateFramebuffer(36008,_e)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),le)for(let me=0;me<T.length;me++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+me,36161,L.__webglColorRenderbuffer[me]);const we=n.get(T[me]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+me,3553,we,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function ye(P){return Math.min(u,P.samples)}function Te(P){const T=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Be(P){const T=o.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Ze(P,T){const ne=P.encoding,he=P.format,fe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ka||ne!==Ei&&(ne===Ge?a===!1?e.has("EXT_sRGB")===!0&&he===sn?(P.format=ka,P.minFilter=Ft,P.generateMipmaps=!1):T=nh.sRGBToLinear(T):(he!==sn||fe!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ne)),T}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=R,this.rebindTextures=ue,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Te}function Cv(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Ti)return 5121;if(s===ld)return 32819;if(s===cd)return 32820;if(s===rd)return 5120;if(s===od)return 5122;if(s===Ju)return 5123;if(s===ad)return 5124;if(s===xi)return 5125;if(s===Qn)return 5126;if(s===ir)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ud)return 6406;if(s===sn)return 6408;if(s===fd)return 6409;if(s===dd)return 6410;if(s===Mi)return 6402;if(s===hs)return 34041;if(s===pd)return 6403;if(s===hd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ka)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===md)return 36244;if(s===gd)return 33319;if(s===vd)return 33320;if(s===xd)return 36249;if(s===Uo||s===Vo||s===Go||s===Ho)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Go)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hl||s===Wl||s===jl||s===Xl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ql||s===Yl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ql)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zl||s===Kl||s===Jl||s===$l||s===Ql||s===ec||s===tc||s===nc||s===ic||s===sc||s===rc||s===oc||s===ac||s===lc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jl)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$l)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ql)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ec)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ic)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===oc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ac)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lc)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cc)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===rs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Pv extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rn extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rv={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const x=new rn;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Iv extends wt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Mi,h!==Mi&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=xi),n===void 0&&h===hs&&(n=rs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class Dv extends Li{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const v=[],x=[],w=new Tt;w.layers.enable(1),w.viewport=new Xe;const _=new Tt;_.layers.enable(2),_.viewport=new Xe;const M=[w,_],b=new Pv;b.layers.enable(1),b.layers.enable(2);let E=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=v[j];return Z===void 0&&(Z=new va,v[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=v[j];return Z===void 0&&(Z=new va,v[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=v[j];return Z===void 0&&(Z=new va,v[j]=Z),Z.getHandSpace()};function A(j){const Z=x.indexOf(j.inputSource);if(Z===-1)return;const se=v[Z];se!==void 0&&se.dispatchEvent({type:j.type,data:j.inputSource})}function k(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",V);for(let j=0;j<v.length;j++){const Z=x[j];Z!==null&&(x[j]=null,v[j].disconnect(Z))}E=null,y=null,e.setRenderTarget(m),f=null,u=null,h=null,i=null,d=null,B.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",k),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:f}),d=new Ai(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Ti,encoding:e.outputEncoding})}else{let Z=null,se=null,F=null;g.depth&&(F=g.stencil?35056:33190,Z=g.stencil?hs:Mi,se=g.stencil?rs:xi);const R={colorFormat:32856,depthFormat:F,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(R),i.updateRenderState({layers:[u]}),d=new Ai(u.textureWidth,u.textureHeight,{format:sn,type:Ti,depthTexture:new Iv(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const S=e.properties.get(d);S.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),B.setContext(i),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(j){for(let Z=0;Z<j.removed.length;Z++){const se=j.removed[Z],F=x.indexOf(se);F>=0&&(x[F]=null,v[F].dispatchEvent({type:"disconnected",data:se}))}for(let Z=0;Z<j.added.length;Z++){const se=j.added[Z];let F=x.indexOf(se);if(F===-1){for(let S=0;S<v.length;S++)if(S>=x.length){x.push(se),F=S;break}else if(x[S]===null){x[S]=se,F=S;break}if(F===-1)break}const R=v[F];R&&R.dispatchEvent({type:"connected",data:se})}}const X=new D,K=new D;function z(j,Z,se){X.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(se.matrixWorld);const F=X.distanceTo(K),R=Z.projectionMatrix.elements,S=se.projectionMatrix.elements,N=R[14]/(R[10]-1),O=R[14]/(R[10]+1),U=(R[9]+1)/R[5],Q=(R[9]-1)/R[5],ce=(R[8]-1)/R[0],te=(S[8]+1)/S[0],de=N*ce,ae=N*te,pe=F/(-ce+te),ue=pe*-ce;Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ue),j.translateZ(pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const ge=N+pe,G=O+pe,I=de-ue,ye=ae+(F-ue),Te=U*O/G*ge,Be=Q*O/G*ge;j.projectionMatrix.makePerspective(I,ye,Te,Be,ge,G)}function Y(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;b.near=_.near=w.near=j.near,b.far=_.far=w.far=j.far,(E!==b.near||y!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,y=b.far);const Z=j.parent,se=b.cameras;Y(b,Z);for(let R=0;R<se.length;R++)Y(se[R],Z);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),j.position.copy(b.position),j.quaternion.copy(b.quaternion),j.scale.copy(b.scale),j.matrix.copy(b.matrix),j.matrixWorld.copy(b.matrixWorld);const F=j.children;for(let R=0,S=F.length;R<S;R++)F[R].updateMatrixWorld(!0);se.length===2?z(b,w,_):b.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(j){u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let q=null;function W(j,Z){if(c=Z.getViewerPose(l||o),p=Z,c!==null){const se=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let F=!1;se.length!==b.cameras.length&&(b.cameras.length=0,F=!0);for(let R=0;R<se.length;R++){const S=se[R];let N=null;if(f!==null)N=f.getViewport(S);else{const U=h.getViewSubImage(u,S);N=U.viewport,R===0&&(e.setRenderTargetTextures(d,U.colorTexture,u.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(d))}let O=M[R];O===void 0&&(O=new Tt,O.layers.enable(R),O.viewport=new Xe,M[R]=O),O.matrix.fromArray(S.transform.matrix),O.projectionMatrix.fromArray(S.projectionMatrix),O.viewport.set(N.x,N.y,N.width,N.height),R===0&&b.matrix.copy(O.matrix),F===!0&&b.cameras.push(O)}}for(let se=0;se<v.length;se++){const F=x[se],R=v[se];F!==null&&R!==void 0&&R.update(F,Z,l||o)}q&&q(j,Z),p=null}const B=new lh;B.setAnimationLoop(W),this.setAnimationLoop=function(j){q=j},this.dispose=function(){}}}function Fv(r,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,v,x,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),h(m,d)):d.isMeshPhongMaterial?(i(m,d),c(m,d)):d.isMeshStandardMaterial?(i(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,w)):d.isMeshMatcapMaterial?(i(m,d),p(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),g(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,v,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===on&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===on&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===on&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Nv(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(x,w){const _=w.program;n.uniformBlockBinding(x,_)}function c(x,w){let _=i[x.id];_===void 0&&(g(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",d));const M=w.program;n.updateUBOMapping(x,M);const b=e.render.frame;s[x.id]!==b&&(f(x),s[x.id]=b)}function h(x){const w=u();x.__bindingPointIndex=w;const _=r.createBuffer(),M=x.__size,b=x.usage;return r.bindBuffer(35345,_),r.bufferData(35345,M,b),r.bindBuffer(35345,null),r.bindBufferBase(35345,w,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const w=i[x.id],_=x.uniforms,M=x.__cache;r.bindBuffer(35345,w);for(let b=0,E=_.length;b<E;b++){const y=_[b];if(p(y,b,M)===!0){const A=y.value,k=y.__offset;typeof A=="number"?(y.__data[0]=A,r.bufferSubData(35345,k,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):A.toArray(y.__data),r.bufferSubData(35345,k,y.__data))}}r.bindBuffer(35345,null)}function p(x,w,_){const M=x.value;if(_[w]===void 0)return typeof M=="number"?_[w]=M:_[w]=M.clone(),!0;if(typeof M=="number"){if(_[w]!==M)return _[w]=M,!0}else{const b=_[w];if(b.equals(M)===!1)return b.copy(M),!0}return!1}function g(x){const w=x.uniforms;let _=0;const M=16;let b=0;for(let E=0,y=w.length;E<y;E++){const A=w[E],k=m(A);if(A.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,E>0){b=_%M;const V=M-b;b!==0&&V-k.boundary<0&&(_+=M-b,A.__offset=_)}_+=k.storage}return b=_%M,b>0&&(_+=M-b),x.__size=_,x.__cache={},this}function m(x){const w=x.value,_={boundary:0,storage:0};return typeof w=="number"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function d(x){const w=x.target;w.removeEventListener("dispose",d);const _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function v(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:v}}function Ov(){const r=or("canvas");return r.style.display="block",r}function kv(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Ov(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ei,this.physicallyCorrectLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,v=0,x=0,w=null,_=-1,M=null;const b=new Xe,E=new Xe;let y=null,A=e.width,k=e.height,V=1,X=null,K=null;const z=new Xe(0,0,A,k),Y=new Xe(0,0,A,k);let q=!1;const W=new cl;let B=!1,j=!1,Z=null;const se=new Ae,F=new oe,R=new D,S={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return w===null?V:1}let O=t;function U(C,J){for(let ee=0;ee<C.length;ee++){const $=C[ee],re=e.getContext($,J);if(re!==null)return re}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rl}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Ue,!1),e.addEventListener("webglcontextcreationerror",et,!1),O===null){const J=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&J.shift(),O=U(J,C),O===null)throw U(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,ce,te,de,ae,pe,ue,ge,G,I,ye,Te,Be,Ze,P,T,ne,he,fe,_e,Le,L,le,me;function we(){Q=new Xg(O),ce=new Ug(O,Q,r),Q.init(ce),L=new Cv(O,Q,ce),te=new Av(O,Q,ce),de=new Zg,ae=new dv,pe=new Lv(O,Q,te,ae,ce,L,de),ue=new Gg(m),ge=new jg(m),G=new ap(O,ce),le=new zg(O,Q,G,ce),I=new qg(O,G,de,le),ye=new Qg(O,I,G,de),fe=new $g(O,ce,pe),T=new Vg(ae),Te=new fv(m,ue,ge,Q,ce,le,T),Be=new Fv(m,ae),Ze=new mv,P=new Mv(Q,ce),he=new kg(m,ue,te,ye,h,o),ne=new Ev(m,ye,ce),me=new Nv(O,de,ce,te),_e=new Bg(O,Q,de,ce),Le=new Yg(O,Q,de,ce),de.programs=Te.programs,m.capabilities=ce,m.extensions=Q,m.properties=ae,m.renderLists=Ze,m.shadowMap=ne,m.state=te,m.info=de}we();const Me=new Dv(m,O);this.xr=Me,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(A,k,!1))},this.getSize=function(C){return C.set(A,k)},this.setSize=function(C,J,ee){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,k=J,e.width=Math.floor(C*V),e.height=Math.floor(J*V),ee!==!1&&(e.style.width=C+"px",e.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(A*V,k*V).floor()},this.setDrawingBufferSize=function(C,J,ee){A=C,k=J,V=ee,e.width=Math.floor(C*ee),e.height=Math.floor(J*ee),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,J,ee,$){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,J,ee,$),te.viewport(b.copy(z).multiplyScalar(V).floor())},this.getScissor=function(C){return C.copy(Y)},this.setScissor=function(C,J,ee,$){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,J,ee,$),te.scissor(E.copy(Y).multiplyScalar(V).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(C){te.setScissorTest(q=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(C=!0,J=!0,ee=!0){let $=0;C&&($|=16384),J&&($|=256),ee&&($|=1024),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Ze.dispose(),P.dispose(),ae.dispose(),ue.dispose(),ge.dispose(),ye.dispose(),le.dispose(),me.dispose(),Te.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",We),Me.removeEventListener("sessionend",pt),Z&&(Z.dispose(),Z=null),ot.stop()};function Ce(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const C=de.autoReset,J=ne.enabled,ee=ne.autoUpdate,$=ne.needsUpdate,re=ne.type;we(),de.autoReset=C,ne.enabled=J,ne.autoUpdate=ee,ne.needsUpdate=$,ne.type=re}function et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function H(C){const J=C.target;J.removeEventListener("dispose",H),ve(J)}function ve(C){ie(C),ae.remove(C)}function ie(C){const J=ae.get(C).programs;J!==void 0&&(J.forEach(function(ee){Te.releaseProgram(ee)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,ee,$,re,Pe){J===null&&(J=S);const Re=re.isMesh&&re.matrixWorld.determinant()<0,De=Tf(C,J,ee,$,re);te.setMaterial($,Re);let Ie=ee.index;const Ke=ee.attributes.position;if(Ie===null){if(Ke===void 0||Ke.count===0)return}else if(Ie.count===0)return;let Ve=1;$.wireframe===!0&&(Ie=I.getWireframeAttribute(ee),Ve=2),le.setup(re,$,De,ee,Ie);let je,st=_e;Ie!==null&&(je=G.get(Ie),st=Le,st.setIndex(je));const ci=Ie!==null?Ie.count:Ke.count,Ri=ee.drawRange.start*Ve,Ii=ee.drawRange.count*Ve,ln=Pe!==null?Pe.start*Ve:0,qe=Pe!==null?Pe.count*Ve:1/0,Di=Math.max(Ri,ln),ct=Math.min(ci,Ri+Ii,ln+qe)-1,Wt=Math.max(0,ct-Di+1);if(Wt!==0){if(re.isMesh)$.wireframe===!0?(te.setLineWidth($.wireframeLinewidth*N()),st.setMode(1)):st.setMode(4);else if(re.isLine){let Bn=$.linewidth;Bn===void 0&&(Bn=1),te.setLineWidth(Bn*N()),re.isLineSegments?st.setMode(1):re.isLineLoop?st.setMode(2):st.setMode(3)}else re.isPoints?st.setMode(0):re.isSprite&&st.setMode(4);if(re.isInstancedMesh)st.renderInstances(Di,Wt,re.count);else if(ee.isInstancedBufferGeometry){const Bn=Math.min(ee.instanceCount,ee._maxInstanceCount);st.renderInstances(Di,Wt,Bn)}else st.render(Di,Wt)}},this.compile=function(C,J){f=P.get(C),f.init(),g.push(f),C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(f.pushLight(ee),ee.castShadow&&f.pushShadow(ee))}),f.setupLights(m.physicallyCorrectLights),C.traverse(function(ee){const $=ee.material;if($)if(Array.isArray($))for(let re=0;re<$.length;re++){const Pe=$[re];Oo(Pe,C,ee)}else Oo($,C,ee)}),g.pop(),f=null};let Se=null;function be(C){Se&&Se(C)}function We(){ot.stop()}function pt(){ot.start()}const ot=new lh;ot.setAnimationLoop(be),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(C){Se=C,Me.setAnimationLoop(C),C===null?ot.stop():ot.start()},Me.addEventListener("sessionstart",We),Me.addEventListener("sessionend",pt),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;C.autoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(J),J=Me.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,J,w),f=P.get(C,g.length),f.init(),g.push(f),se.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W.setFromProjectionMatrix(se),j=this.localClippingEnabled,B=T.init(this.clippingPlanes,j,J),u=Ze.get(C,p.length),u.init(),p.push(u),zn(C,J,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(X,K),B===!0&&T.beginShadows();const ee=f.state.shadowsArray;if(ne.render(ee,C,J),B===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(u,C),f.setupLights(m.physicallyCorrectLights),J.isArrayCamera){const $=J.cameras;for(let re=0,Pe=$.length;re<Pe;re++){const Re=$[re];it(u,C,Re,Re.viewport)}}else it(u,C,J);w!==null&&(pe.updateMultisampleRenderTarget(w),pe.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(m,C,J),le.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function zn(C,J,ee,$){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){$&&R.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const Re=ye.update(C),De=C.material;De.visible&&u.push(C,Re,De,ee,R.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==de.render.frame&&(C.skeleton.update(),C.skeleton.frame=de.render.frame),!C.frustumCulled||W.intersectsObject(C))){$&&R.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const Re=ye.update(C),De=C.material;if(Array.isArray(De)){const Ie=Re.groups;for(let Ke=0,Ve=Ie.length;Ke<Ve;Ke++){const je=Ie[Ke],st=De[je.materialIndex];st&&st.visible&&u.push(C,Re,st,ee,R.z,je)}}else De.visible&&u.push(C,Re,De,ee,R.z,null)}}const Pe=C.children;for(let Re=0,De=Pe.length;Re<De;Re++)zn(Pe[Re],J,ee,$)}function it(C,J,ee,$){const re=C.opaque,Pe=C.transmissive,Re=C.transparent;f.setupLightsView(ee),Pe.length>0&&Mn(re,J,ee),$&&te.viewport(b.copy($)),re.length>0&&Ht(re,J,ee),Pe.length>0&&Ht(Pe,J,ee),Re.length>0&&Ht(Re,J,ee),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Mn(C,J,ee){const $=ce.isWebGL2;Z===null&&(Z=new Ai(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?ir:Ti,minFilter:ys,samples:$&&s===!0?4:0})),m.getDrawingBufferSize(F),$?Z.setSize(F.x,F.y):Z.setSize(uo(F.x),uo(F.y));const re=m.getRenderTarget();m.setRenderTarget(Z),m.clear();const Pe=m.toneMapping;m.toneMapping=Fn,Ht(C,J,ee),m.toneMapping=Pe,pe.updateMultisampleRenderTarget(Z),pe.updateRenderTargetMipmap(Z),m.setRenderTarget(re)}function Ht(C,J,ee){const $=J.isScene===!0?J.overrideMaterial:null;for(let re=0,Pe=C.length;re<Pe;re++){const Re=C[re],De=Re.object,Ie=Re.geometry,Ke=$===null?Re.material:$,Ve=Re.group;De.layers.test(ee.layers)&&Sf(De,J,ee,Ie,Ke,Ve)}}function Sf(C,J,ee,$,re,Pe){C.onBeforeRender(m,J,ee,$,re,Pe),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(m,J,ee,$,C,Pe),re.transparent===!0&&re.side===Pt?(re.side=on,re.needsUpdate=!0,m.renderBufferDirect(ee,J,$,re,C,Pe),re.side=Si,re.needsUpdate=!0,m.renderBufferDirect(ee,J,$,re,C,Pe),re.side=Pt):m.renderBufferDirect(ee,J,$,re,C,Pe),C.onAfterRender(m,J,ee,$,re,Pe)}function Oo(C,J,ee){J.isScene!==!0&&(J=S);const $=ae.get(C),re=f.state.lights,Pe=f.state.shadowsArray,Re=re.state.version,De=Te.getParameters(C,re.state,Pe,J,ee),Ie=Te.getProgramCacheKey(De);let Ke=$.programs;$.environment=C.isMeshStandardMaterial?J.environment:null,$.fog=J.fog,$.envMap=(C.isMeshStandardMaterial?ge:ue).get(C.envMap||$.environment),Ke===void 0&&(C.addEventListener("dispose",H),Ke=new Map,$.programs=Ke);let Ve=Ke.get(Ie);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Re)return Ol(C,De),Ve}else De.uniforms=Te.getUniforms(C),C.onBuild(ee,De,m),C.onBeforeCompile(De,m),Ve=Te.acquireProgram(De,Ie),Ke.set(Ie,Ve),$.uniforms=De.uniforms;const je=$.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=T.uniform),Ol(C,De),$.needsLights=Af(C),$.lightsStateVersion=Re,$.needsLights&&(je.ambientLightColor.value=re.state.ambient,je.lightProbe.value=re.state.probe,je.directionalLights.value=re.state.directional,je.directionalLightShadows.value=re.state.directionalShadow,je.spotLights.value=re.state.spot,je.spotLightShadows.value=re.state.spotShadow,je.rectAreaLights.value=re.state.rectArea,je.ltc_1.value=re.state.rectAreaLTC1,je.ltc_2.value=re.state.rectAreaLTC2,je.pointLights.value=re.state.point,je.pointLightShadows.value=re.state.pointShadow,je.hemisphereLights.value=re.state.hemi,je.directionalShadowMap.value=re.state.directionalShadowMap,je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,je.spotShadowMap.value=re.state.spotShadowMap,je.spotShadowMatrix.value=re.state.spotShadowMatrix,je.pointShadowMap.value=re.state.pointShadowMap,je.pointShadowMatrix.value=re.state.pointShadowMatrix);const st=Ve.getUniforms(),ci=no.seqWithValue(st.seq,je);return $.currentProgram=Ve,$.uniformsList=ci,Ve}function Ol(C,J){const ee=ae.get(C);ee.outputEncoding=J.outputEncoding,ee.instancing=J.instancing,ee.skinning=J.skinning,ee.morphTargets=J.morphTargets,ee.morphNormals=J.morphNormals,ee.morphColors=J.morphColors,ee.morphTargetsCount=J.morphTargetsCount,ee.numClippingPlanes=J.numClippingPlanes,ee.numIntersection=J.numClipIntersection,ee.vertexAlphas=J.vertexAlphas,ee.vertexTangents=J.vertexTangents,ee.toneMapping=J.toneMapping}function Tf(C,J,ee,$,re){J.isScene!==!0&&(J=S),pe.resetTextureUnits();const Pe=J.fog,Re=$.isMeshStandardMaterial?J.environment:null,De=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Ei,Ie=($.isMeshStandardMaterial?ge:ue).get($.envMap||Re),Ke=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ve=!!$.normalMap&&!!ee.attributes.tangent,je=!!ee.morphAttributes.position,st=!!ee.morphAttributes.normal,ci=!!ee.morphAttributes.color,Ri=$.toneMapped?m.toneMapping:Fn,Ii=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ln=Ii!==void 0?Ii.length:0,qe=ae.get($),Di=f.state.lights;if(B===!0&&(j===!0||C!==M)){const Bt=C===M&&$.id===_;T.setState($,C,Bt)}let ct=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Di.state.version||qe.outputEncoding!==De||re.isInstancedMesh&&qe.instancing===!1||!re.isInstancedMesh&&qe.instancing===!0||re.isSkinnedMesh&&qe.skinning===!1||!re.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Ie||$.fog===!0&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==T.numPlanes||qe.numIntersection!==T.numIntersection)||qe.vertexAlphas!==Ke||qe.vertexTangents!==Ve||qe.morphTargets!==je||qe.morphNormals!==st||qe.morphColors!==ci||qe.toneMapping!==Ri||ce.isWebGL2===!0&&qe.morphTargetsCount!==ln)&&(ct=!0):(ct=!0,qe.__version=$.version);let Wt=qe.currentProgram;ct===!0&&(Wt=Oo($,J,re));let Bn=!1,zs=!1,ko=!1;const Et=Wt.getUniforms(),Bs=qe.uniforms;if(te.useProgram(Wt.program)&&(Bn=!0,zs=!0,ko=!0),$.id!==_&&(_=$.id,zs=!0),Bn||M!==C){if(Et.setValue(O,"projectionMatrix",C.projectionMatrix),ce.logarithmicDepthBuffer&&Et.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,zs=!0,ko=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Bt=Et.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,R.setFromMatrixPosition(C.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||re.isSkinnedMesh)&&Et.setValue(O,"viewMatrix",C.matrixWorldInverse)}if(re.isSkinnedMesh){Et.setOptional(O,re,"bindMatrix"),Et.setOptional(O,re,"bindMatrixInverse");const Bt=re.skeleton;Bt&&(ce.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Et.setValue(O,"boneTexture",Bt.boneTexture,pe),Et.setValue(O,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zo=ee.morphAttributes;if((zo.position!==void 0||zo.normal!==void 0||zo.color!==void 0&&ce.isWebGL2===!0)&&fe.update(re,ee,$,Wt),(zs||qe.receiveShadow!==re.receiveShadow)&&(qe.receiveShadow=re.receiveShadow,Et.setValue(O,"receiveShadow",re.receiveShadow)),zs&&(Et.setValue(O,"toneMappingExposure",m.toneMappingExposure),qe.needsLights&&Ef(Bs,ko),Pe&&$.fog===!0&&Be.refreshFogUniforms(Bs,Pe),Be.refreshMaterialUniforms(Bs,$,V,k,Z),no.upload(O,qe.uniformsList,Bs,pe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(no.upload(O,qe.uniformsList,Bs,pe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(O,"center",re.center),Et.setValue(O,"modelViewMatrix",re.modelViewMatrix),Et.setValue(O,"normalMatrix",re.normalMatrix),Et.setValue(O,"modelMatrix",re.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Bt=$.uniformsGroups;for(let Bo=0,Lf=Bt.length;Bo<Lf;Bo++)if(ce.isWebGL2){const kl=Bt[Bo];me.update(kl,Wt),me.bind(kl,Wt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wt}function Ef(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Af(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,J,ee){ae.get(C.texture).__webglTexture=J,ae.get(C.depthTexture).__webglTexture=ee;const $=ae.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=ee===void 0,$.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,J){const ee=ae.get(C);ee.__webglFramebuffer=J,ee.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,ee=0){w=C,v=J,x=ee;let $=!0;if(C){const Ie=ae.get(C);Ie.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(36160,null),$=!1):Ie.__webglFramebuffer===void 0?pe.setupRenderTarget(C):Ie.__hasExternalTextures&&pe.rebindTextures(C,ae.get(C.texture).__webglTexture,ae.get(C.depthTexture).__webglTexture)}let re=null,Pe=!1,Re=!1;if(C){const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture)&&(Re=!0);const Ke=ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(re=Ke[J],Pe=!0):ce.isWebGL2&&C.samples>0&&pe.useMultisampledRTT(C)===!1?re=ae.get(C).__webglMultisampledFramebuffer:re=Ke,b.copy(C.viewport),E.copy(C.scissor),y=C.scissorTest}else b.copy(z).multiplyScalar(V).floor(),E.copy(Y).multiplyScalar(V).floor(),y=q;if(te.bindFramebuffer(36160,re)&&ce.drawBuffers&&$&&te.drawBuffers(C,re),te.viewport(b),te.scissor(E),te.setScissorTest(y),Pe){const Ie=ae.get(C.texture);O.framebufferTexture2D(36160,36064,34069+J,Ie.__webglTexture,ee)}else if(Re){const Ie=ae.get(C.texture),Ke=J||0;O.framebufferTextureLayer(36160,36064,Ie.__webglTexture,ee||0,Ke)}_=-1},this.readRenderTargetPixels=function(C,J,ee,$,re,Pe,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){te.bindFramebuffer(36160,De);try{const Ie=C.texture,Ke=Ie.format,Ve=Ie.type;if(Ke!==sn&&L.convert(Ke)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ve===ir&&(Q.has("EXT_color_buffer_half_float")||ce.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ve!==Ti&&L.convert(Ve)!==O.getParameter(35738)&&!(Ve===Qn&&(ce.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-$&&ee>=0&&ee<=C.height-re&&O.readPixels(J,ee,$,re,L.convert(Ke),L.convert(Ve),Pe)}finally{const Ie=w!==null?ae.get(w).__webglFramebuffer:null;te.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(C,J,ee=0){const $=Math.pow(2,-ee),re=Math.floor(J.image.width*$),Pe=Math.floor(J.image.height*$);pe.setTexture2D(J,0),O.copyTexSubImage2D(3553,ee,0,0,C.x,C.y,re,Pe),te.unbindTexture()},this.copyTextureToTexture=function(C,J,ee,$=0){const re=J.image.width,Pe=J.image.height,Re=L.convert(ee.format),De=L.convert(ee.type);pe.setTexture2D(ee,0),O.pixelStorei(37440,ee.flipY),O.pixelStorei(37441,ee.premultiplyAlpha),O.pixelStorei(3317,ee.unpackAlignment),J.isDataTexture?O.texSubImage2D(3553,$,C.x,C.y,re,Pe,Re,De,J.image.data):J.isCompressedTexture?O.compressedTexSubImage2D(3553,$,C.x,C.y,J.mipmaps[0].width,J.mipmaps[0].height,Re,J.mipmaps[0].data):O.texSubImage2D(3553,$,C.x,C.y,Re,De,J.image),$===0&&ee.generateMipmaps&&O.generateMipmap(3553),te.unbindTexture()},this.copyTextureToTexture3D=function(C,J,ee,$,re=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,Re=C.max.y-C.min.y+1,De=C.max.z-C.min.z+1,Ie=L.convert($.format),Ke=L.convert($.type);let Ve;if($.isData3DTexture)pe.setTexture3D($,0),Ve=32879;else if($.isDataArrayTexture)pe.setTexture2DArray($,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,$.flipY),O.pixelStorei(37441,$.premultiplyAlpha),O.pixelStorei(3317,$.unpackAlignment);const je=O.getParameter(3314),st=O.getParameter(32878),ci=O.getParameter(3316),Ri=O.getParameter(3315),Ii=O.getParameter(32877),ln=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;O.pixelStorei(3314,ln.width),O.pixelStorei(32878,ln.height),O.pixelStorei(3316,C.min.x),O.pixelStorei(3315,C.min.y),O.pixelStorei(32877,C.min.z),ee.isDataTexture||ee.isData3DTexture?O.texSubImage3D(Ve,re,J.x,J.y,J.z,Pe,Re,De,Ie,Ke,ln.data):ee.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ve,re,J.x,J.y,J.z,Pe,Re,De,Ie,ln.data)):O.texSubImage3D(Ve,re,J.x,J.y,J.z,Pe,Re,De,Ie,Ke,ln),O.pixelStorei(3314,je),O.pixelStorei(32878,st),O.pixelStorei(3316,ci),O.pixelStorei(3315,Ri),O.pixelStorei(32877,Ii),re===0&&$.generateMipmaps&&O.generateMipmap(Ve),te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?pe.setTextureCube(C,0):C.isData3DTexture?pe.setTexture3D(C,0):C.isDataArrayTexture?pe.setTexture2DArray(C,0):pe.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){v=0,x=0,w=null,te.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ph extends kv{}ph.prototype.isWebGL1Renderer=!0;class fl extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class zv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new D;class dl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yc=new D,Zc=new Xe,Kc=new Xe,Bv=new D,Jc=new Ae;class mh extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Zc.fromBufferAttribute(i.attributes.skinIndex,e),Kc.fromBufferAttribute(i.attributes.skinWeight,e),Yc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Kc.getComponent(s);if(o!==0){const a=Zc.getComponent(s);Jc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Bv.copy(Yc).applyMatrix4(Jc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ho extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uv extends wt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Mt,h=Mt,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new Ae,Vv=new Ae;class Lo{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Vv;$c.multiplyMatrices(a,t[s]),$c.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Lo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Qu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Uv(t,e,e,sn,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ho),this.bones.push(o),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Qc extends xt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eu=new Ae,tu=new Ae,Hr=[],Hs=new Je;class gh extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,eu),tu.multiplyMatrices(n,eu),Hs.matrixWorld=tu,Hs.raycast(e,Hr);for(let o=0,a=Hr.length;o<a;o++){const l=Hr[o];l.instanceId=s,l.object=this,t.push(l)}Hr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nu=new D,iu=new D,su=new Ae,xa=new To,Wr=new Ms;class Co extends nt{constructor(e=new rt,t=new os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)nu.fromBufferAttribute(t,i-1),iu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=nu.distanceTo(iu);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=s,e.ray.intersectsSphere(Wr)===!1)return;su.copy(i).invert(),xa.copy(e.ray).applyMatrix4(su);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,u=new D,f=new D,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let w=v,_=x-1;w<_;w+=p){const M=g.getX(w),b=g.getX(w+1);if(c.fromBufferAttribute(d,M),h.fromBufferAttribute(d,b),xa.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let w=v,_=x-1;w<_;w+=p){if(c.fromBufferAttribute(d,w),h.fromBufferAttribute(d,w+1),xa.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ru=new D,ou=new D;class Ua extends Co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ru.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ru.distanceTo(ou);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gv extends Co{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ns extends kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const au=new Ae,Va=new To,jr=new Ms,Xr=new D;class Js extends nt{constructor(e=new rt,t=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=s,e.ray.intersectsSphere(jr)===!1)return;au.copy(i).invert(),Va.copy(e.ray).applyMatrix4(au);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);Xr.fromBufferAttribute(u,d),lu(Xr,d,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p;g<m;g++)Xr.fromBufferAttribute(u,g),lu(Xr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lu(r,e,t,n,i,s,o){const a=Va.distanceSqToPoint(r);if(a<t){const l=new D;Va.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new oe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],o=[],a=new D,l=new Ae;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(gt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pl extends an{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new oe,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hv extends pl{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ml(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const qr=new D,ya=new ml,_a=new ml,Ma=new ml;class Wv extends an{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(qr.subVectors(i[0],i[1]).add(i[0]),c=qr);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(qr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),ya.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,m,d),_a.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,m,d),Ma.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,m,d)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),_a.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ma.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ya.calc(l),_a.calc(l),Ma.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function cu(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function jv(r,e){const t=1-r;return t*t*e}function Xv(r,e){return 2*(1-r)*r*e}function qv(r,e){return r*r*e}function $s(r,e,t,n){return jv(r,e)+Xv(r,t)+qv(r,n)}function Yv(r,e){const t=1-r;return t*t*t*e}function Zv(r,e){const t=1-r;return 3*t*t*r*e}function Kv(r,e){return 3*(1-r)*r*r*e}function Jv(r,e){return r*r*r*e}function Qs(r,e,t,n,i){return Yv(r,e)+Zv(r,t)+Kv(r,n)+Jv(r,i)}class vh extends an{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,i.x,s.x,o.x,a.x),Qs(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $v extends an{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,i.x,s.x,o.x,a.x),Qs(e,i.y,s.y,o.y,a.y),Qs(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gl extends an{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new oe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qv extends an{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xh extends an{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set($s(e,i.x,s.x,o.x),$s(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ex extends an{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set($s(e,i.x,s.x,o.x),$s(e,i.y,s.y,o.y),$s(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends an{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(cu(a,l.x,c.x,h.x,u.x),cu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}var tx=Object.freeze({__proto__:null,ArcCurve:Hv,CatmullRomCurve3:Wv,CubicBezierCurve:vh,CubicBezierCurve3:$v,EllipseCurve:pl,LineCurve:gl,LineCurve3:Qv,QuadraticBezierCurve:xh,QuadraticBezierCurve3:ex,SplineCurve:yh});class nx extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new gl(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new tx[i.type]().fromJSON(i))}return this}}class as extends nx{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gl(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new xh(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new vh(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new yh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new pl(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Po extends rt{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new D,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}static fromJSON(e){return new Po(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class er extends as{constructor(e){super(e),this.uuid=Yt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new as().fromJSON(i))}return this}}const ix={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=_h(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,p;if(n&&(s=lx(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?1/p:0}return ar(s,o,t,a,l,p),o}};function _h(r,e,t,n,i){let s,o;if(i===yx(r,e,t,n)>0)for(s=e;s<t;s+=n)o=uu(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=uu(s,r[s],r[s+1],o);return o&&Ro(o,o.next)&&(cr(o),o=o.next),o}function ii(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ro(t,t.next)||tt(t.prev,t,t.next)===0)){if(cr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ar(r,e,t,n,i,s,o){if(!r)return;!o&&s&&dx(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?rx(r,n,i,s):sx(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),cr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=ox(ii(r),e,t),ar(r,e,t,n,i,s,2)):o===2&&ax(r,e,t,n,i,s):ar(ii(r),e,t,n,i,s,1);break}}}function sx(r){const e=r.prev,t=r,n=r.next;if(tt(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(is(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&tt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function rx(r,e,t,n){const i=r.prev,s=r,o=r.next;if(tt(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=Ga(a,l,e,t,n),f=Ga(c,h,e,t,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=u&&g&&g.z<=f;){if(p!==r.prev&&p!==r.next&&is(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&tt(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&is(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&tt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=u;){if(p!==r.prev&&p!==r.next&&is(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&tt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=f;){if(g!==r.prev&&g!==r.next&&is(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&tt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function ox(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ro(i,s)&&Mh(i,n,n.next,s)&&lr(i,s)&&lr(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),cr(n),cr(n.next),n=r=s),n=n.next}while(n!==r);return ii(n)}function ax(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gx(o,a)){let l=wh(o,a);o=ii(o,o.next),l=ii(l,l.next),ar(o,e,t,n,i,s),ar(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function lx(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=_h(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(mx(c));for(i.sort(cx),s=0;s<i.length;s++)ux(i[s],t),t=ii(t,t.next);return t}function cx(r,e){return r.x-e.x}function ux(r,e){if(e=hx(r,e),e){const t=wh(e,r);ii(e,e.next),ii(t,t.next)}}function hx(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&is(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),lr(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&fx(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function fx(r,e){return tt(r.prev,r,e.prev)<0&&tt(e.next,r,r.next)<0}function dx(r,e,t,n){let i=r;do i.z===null&&(i.z=Ga(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,px(i)}function px(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Ga(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function mx(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function is(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function gx(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!vx(r,e)&&(lr(r,e)&&lr(e,r)&&xx(r,e)&&(tt(r.prev,r,e.prev)||tt(r,e.prev,e))||Ro(r,e)&&tt(r.prev,r,r.next)>0&&tt(e.prev,e,e.next)>0)}function tt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ro(r,e){return r.x===e.x&&r.y===e.y}function Mh(r,e,t,n){const i=Zr(tt(r,e,t)),s=Zr(tt(r,e,n)),o=Zr(tt(t,n,r)),a=Zr(tt(t,n,e));return!!(i!==s&&o!==a||i===0&&Yr(r,t,e)||s===0&&Yr(r,n,e)||o===0&&Yr(t,r,n)||a===0&&Yr(t,e,n))}function Yr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Zr(r){return r>0?1:r<0?-1:0}function vx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Mh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function lr(r,e){return tt(r.prev,r,r.next)<0?tt(r,e,r.next)>=0&&tt(r,r.prev,e)>=0:tt(r,e,r.prev)<0||tt(r,r.next,e)<0}function xx(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function wh(r,e){const t=new Ha(r.i,r.x,r.y),n=new Ha(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function uu(r,e,t,n){const i=new Ha(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function cr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ha(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yx(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class bi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return bi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];hu(e),fu(n,e);let o=e.length;t.forEach(hu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,fu(n,t[l]);const a=ix.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function hu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function fu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class vl extends rt{constructor(e=.5,t=1,n=8,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,p=new D,g=new oe;for(let m=0;m<=i;m++){for(let d=0;d<=n;d++){const v=s+d/n*o;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let m=0;m<i;m++){const d=m*(n+1);for(let v=0;v<n;v++){const x=v+d,w=x,_=x+n+1,M=x+n+2,b=x+1;a.push(w,_,b),a.push(_,M,b)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}static fromJSON(e){return new vl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class si extends rt{constructor(e=new er([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ke(i,3)),this.setAttribute("normal",new ke(s,3)),this.setAttribute("uv",new ke(o,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let p=f.shape;const g=f.holes;bi.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,v=g.length;d<v;d++){const x=g[d];bi.isClockWise(x)===!0&&(g[d]=x.reverse())}const m=bi.triangulateShape(p,g);for(let d=0,v=g.length;d<v;d++){const x=g[d];p=p.concat(x)}for(let d=0,v=p.length;d<v;d++){const x=p[d];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let d=0,v=m.length;d<v;d++){const x=m[d],w=x[0]+u,_=x[1]+u,M=x[2]+u;n.push(w,_,M),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _x(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new si(n,e.curveSegments)}}function _x(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class bs extends rt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,p=[],g=[],m=[],d=[];for(let v=0;v<=n;v++){const x=[],w=v/n;let _=0;v==0&&o==0?_=.5/t:v==n&&l==Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){const b=M/t;u.x=-e*Math.cos(i+b*s)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(i+b*s)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),d.push(b+_,1-w),x.push(c++)}h.push(x)}for(let v=0;v<n;v++)for(let x=0;x<t;x++){const w=h[v][x+1],_=h[v][x],M=h[v+1][x],b=h[v+1][x+1];(v!==0||o>0)&&p.push(w,_,b),(v!==n-1||l<Math.PI)&&p.push(_,M,b)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(m,3)),this.setAttribute("uv",new ke(d,2))}static fromJSON(e){return new bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ss extends kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends Ss{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class io extends kt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mx extends kt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}function qn(r,e,t){return bh(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Kr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function bh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function wx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function du(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Sh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class xr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bx extends xr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:s=e,a=2*t-n;break;case fc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=e,l=2*n-t;break;case fc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,d=m*g,v=-f*d+2*f*m-f*g,x=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,w=(-1-p)*d+(1.5+p)*m+.5*g,_=p*d-p*m;for(let M=0;M!==a;++M)s[M]=v*o[h+M]+x*o[c+M]+w*o[l+M]+_*o[u+M];return s}}class Sx extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class Tx extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case fs:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return fs;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=qn(n,s,o),this.values=qn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&bh(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=qn(this.times),t=qn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Wo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){const m=t[u+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=qn(e,0,o),this.values=qn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=qn(this.times,0),t=qn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=fs;class Ts extends xn{}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=sr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Th extends xn{}Th.prototype.ValueTypeName="color";class ps extends xn{}ps.prototype.ValueTypeName="number";class Ex extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Gt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ri extends xn{InterpolantFactoryMethodLinear(e){return new Ex(this.times,this.values,this.getValueSize(),e)}}ri.prototype.ValueTypeName="quaternion";ri.prototype.DefaultInterpolation=fs;ri.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends xn{}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=sr;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends xn{}ms.prototype.ValueTypeName="vector";class Eh{constructor(e,t=-1,n,i=_d){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Lx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=wx(l);l=du(l,1,h),c=du(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,p,g,m){if(p.length!==0){const d=[],v=[];Sh(p,d,v,g),d.length!==0&&m.push(new u(f,d,v))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const d=[],v=[];for(let x=0;x!==f[g].morphTargets.length;++x){const w=f[g];d.push(w.time),v.push(w.morphTarget===m?1:0)}i.push(new ps(".morphTargetInfluence["+m+"]",d,v))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(ms,p+".position",f,"pos",i),n(ri,p+".quaternion",f,"rot",i),n(ms,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ax(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return Th;case"quaternion":return ri;case"bool":case"boolean":return Ts;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Lx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ax(r.type);if(r.times===void 0){const t=[],n=[];Sh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const gs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Cx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Px=new Cx;class kn{constructor(e){this.manager=e!==void 0?e:Px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const An={};class Rx extends Error{constructor(e,t){super(e),this.response=t}}class As extends kn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=gs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:n,onError:i});return}An[e]=[],An[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=An[e],u=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(v){x();function x(){u.read().then(({done:w,value:_})=>{if(w)v.close();else{m+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let b=0,E=h.length;b<E;b++){const y=h[b];y.onProgress&&y.onProgress(M)}v.enqueue(_),x()}})}}});return new Response(d)}else throw new Rx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{gs.add(e,c);const h=An[e];delete An[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=An[e];if(h===void 0)throw this.manager.itemError(e),c;delete An[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ix extends kn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=or("img");function l(){h(),gs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ai extends kn{constructor(e){super(e)}load(e,t,n,i){const s=new wt,o=new Ix(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Io extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const pu=new Ae,mu=new D,gu=new D;class xl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dx extends xl{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=rr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ah extends Io{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new Dx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vu=new Ae,Ws=new D,wa=new D;class Fx extends xl{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),wa.copy(n.position),wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wa),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}}class fo extends Io{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nx extends xl{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.shadow=new Nx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Do extends Io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ox extends kn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){gs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class kx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xu(){return(typeof performance>"u"?Date:performance).now()}const yl="\\[\\]\\.:\\/",zx=new RegExp("["+yl+"]","g"),_l="[^"+yl+"]",Bx="[^"+yl.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",_l),Vx=/(WCOD+)?/.source.replace("WCOD",Bx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),Hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),Wx=new RegExp("^"+Ux+Vx+Gx+Hx+"$"),jx=["material","materials","bones"];class Xx{constructor(e,t,n){const i=n||He.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class He{constructor(e,t,n){this.path=t,this.parsedPath=n||He.parseTrackName(t),this.node=He.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new He.Composite(e,t,n):new He(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zx,"")}static parseTrackName(e){const t=Wx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);jx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=He.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}He.Composite=Xx;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qx{constructor(e,t,n=0,i=1/0){this.ray=new To(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Wa(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Wa(e[i],this,n,t);return n.sort(yu),n}}function yu(r,e){return r.distance-e.distance}function Wa(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Wa(i[s],e,t,!0)}}class _u{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mu=new oe;class Yx{constructor(e=new oe(1/0,1/0),t=new oe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Mu.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Jn{constructor(){this.type="ShapePath",this.color=new Ee,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new as,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(x){const w=[];for(let _=0,M=x.length;_<M;_++){const b=x[_],E=new er;E.curves=b.curves,w.push(E)}return w}function i(x,w){const _=w.length;let M=!1;for(let b=_-1,E=0;E<_;b=E++){let y=w[b],A=w[E],k=A.x-y.x,V=A.y-y.y;if(Math.abs(V)>Number.EPSILON){if(V<0&&(y=w[E],k=-k,A=w[b],V=-V),x.y<y.y||x.y>A.y)continue;if(x.y===y.y){if(x.x===y.x)return!0}else{const X=V*(x.x-y.x)-k*(x.y-y.y);if(X===0)return!0;if(X<0)continue;M=!M}}else{if(x.y!==y.y)continue;if(A.x<=x.x&&x.x<=y.x||y.x<=x.x&&x.x<=A.x)return!0}}return M}const s=bi.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,l,c;const h=[];if(o.length===1)return l=o[0],c=new er,c.curves=l.curves,h.push(c),h;let u=!s(o[0].getPoints());u=e?!u:u;const f=[],p=[];let g=[],m=0,d;p[m]=void 0,g[m]=[];for(let x=0,w=o.length;x<w;x++)l=o[x],d=l.getPoints(),a=s(d),a=e?!a:a,a?(!u&&p[m]&&m++,p[m]={s:new er,p:d},p[m].s.curves=l.curves,u&&m++,g[m]=[]):g[m].push({h:l,p:d[0]});if(!p[0])return n(o);if(p.length>1){let x=!1,w=0;for(let _=0,M=p.length;_<M;_++)f[_]=[];for(let _=0,M=p.length;_<M;_++){const b=g[_];for(let E=0;E<b.length;E++){const y=b[E];let A=!0;for(let k=0;k<p.length;k++)i(y.p,p[k].p)&&(_!==k&&w++,A?(A=!1,f[k].push(y)):x=!0);A&&f[_].push(y)}}w>0&&x===!1&&(g=f)}let v;for(let x=0,w=p.length;x<w;x++){c=p[x].s,h.push(c),v=g[x];for(let _=0,M=v.length;_<M;_++)c.holes.push(v[_].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);class Zx extends kn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new As(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){let l;try{l=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),l=JSON.parse(a.substring(65,a.length-2))}const c=s.parse(l);t&&t(c)},n,i)}parse(e){return new Kx(e)}}class Kx{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Jx(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function Jx(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=$x(h,i,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function $x(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new Jn;let a,l,c,h,u,f,p,g;if(s.o){const m=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let d=0,v=m.length;d<v;)switch(m[d++]){case"m":a=m[d++]*e+t,l=m[d++]*e+n,o.moveTo(a,l);break;case"l":a=m[d++]*e+t,l=m[d++]*e+n,o.lineTo(a,l);break;case"q":c=m[d++]*e+t,h=m[d++]*e+n,u=m[d++]*e+t,f=m[d++]*e+n,o.quadraticCurveTo(u,f,c,h);break;case"b":c=m[d++]*e+t,h=m[d++]*e+n,u=m[d++]*e+t,f=m[d++]*e+n,p=m[d++]*e+t,g=m[d++]*e+n,o.bezierCurveTo(u,f,p,g,c,h);break}}return{offsetX:s.ha*e,path:o}}const wu={type:"change"},ba={type:"start"},bu={type:"end"};class Qx extends Li{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ze),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wu),n.update(),s=i.NONE},this.update=function(){const L=new D,le=new Gt().setFromUnitVectors(e.up,new D(0,1,0)),me=le.clone().invert(),we=new D,Me=new Gt,Ce=2*Math.PI;return function(){const et=n.object.position;L.copy(et).sub(n.target),L.applyQuaternion(le),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&A(E()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let H=n.minAzimuthAngle,ve=n.maxAzimuthAngle;return isFinite(H)&&isFinite(ve)&&(H<-Math.PI?H+=Ce:H>Math.PI&&(H-=Ce),ve<-Math.PI?ve+=Ce:ve>Math.PI&&(ve-=Ce),H<=ve?a.theta=Math.max(H,Math.min(ve,a.theta)):a.theta=a.theta>(H+ve)/2?Math.max(H,a.theta):Math.min(ve,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),L.setFromSpherical(a),L.applyQuaternion(me),et.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||we.distanceToSquared(n.object.position)>o||8*(1-Me.dot(n.object.quaternion))>o?(n.dispatchEvent(wu),we.copy(n.object.position),Me.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne),n.domElement.removeEventListener("pointerdown",ue),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",Be),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ze)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new _u,l=new _u;let c=1;const h=new D;let u=!1;const f=new oe,p=new oe,g=new oe,m=new oe,d=new oe,v=new oe,x=new oe,w=new oe,_=new oe,M=[],b={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function A(L){l.theta-=L}function k(L){l.phi-=L}const V=function(){const L=new D;return function(me,we){L.setFromMatrixColumn(we,0),L.multiplyScalar(-me),h.add(L)}}(),X=function(){const L=new D;return function(me,we){n.screenSpacePanning===!0?L.setFromMatrixColumn(we,1):(L.setFromMatrixColumn(we,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(me),h.add(L)}}(),K=function(){const L=new D;return function(me,we){const Me=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;L.copy(Ce).sub(n.target);let Ue=L.length();Ue*=Math.tan(n.object.fov/2*Math.PI/180),V(2*me*Ue/Me.clientHeight,n.object.matrix),X(2*we*Ue/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(me*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),X(we*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L){f.set(L.clientX,L.clientY)}function W(L){x.set(L.clientX,L.clientY)}function B(L){m.set(L.clientX,L.clientY)}function j(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const le=n.domElement;A(2*Math.PI*g.x/le.clientHeight),k(2*Math.PI*g.y/le.clientHeight),f.copy(p),n.update()}function Z(L){w.set(L.clientX,L.clientY),_.subVectors(w,x),_.y>0?z(y()):_.y<0&&Y(y()),x.copy(w),n.update()}function se(L){d.set(L.clientX,L.clientY),v.subVectors(d,m).multiplyScalar(n.panSpeed),K(v.x,v.y),m.copy(d),n.update()}function F(L){L.deltaY<0?Y(y()):L.deltaY>0&&z(y()),n.update()}function R(L){let le=!1;switch(L.code){case n.keys.UP:K(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:K(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:K(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:K(-n.keyPanSpeed,0),le=!0;break}le&&(L.preventDefault(),n.update())}function S(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),le=.5*(M[0].pageY+M[1].pageY);f.set(L,le)}}function N(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),le=.5*(M[0].pageY+M[1].pageY);m.set(L,le)}}function O(){const L=M[0].pageX-M[1].pageX,le=M[0].pageY-M[1].pageY,me=Math.sqrt(L*L+le*le);x.set(0,me)}function U(){n.enableZoom&&O(),n.enablePan&&N()}function Q(){n.enableZoom&&O(),n.enableRotate&&S()}function ce(L){if(M.length==1)p.set(L.pageX,L.pageY);else{const me=Le(L),we=.5*(L.pageX+me.x),Me=.5*(L.pageY+me.y);p.set(we,Me)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const le=n.domElement;A(2*Math.PI*g.x/le.clientHeight),k(2*Math.PI*g.y/le.clientHeight),f.copy(p)}function te(L){if(M.length===1)d.set(L.pageX,L.pageY);else{const le=Le(L),me=.5*(L.pageX+le.x),we=.5*(L.pageY+le.y);d.set(me,we)}v.subVectors(d,m).multiplyScalar(n.panSpeed),K(v.x,v.y),m.copy(d)}function de(L){const le=Le(L),me=L.pageX-le.x,we=L.pageY-le.y,Me=Math.sqrt(me*me+we*we);w.set(0,Me),_.set(0,Math.pow(w.y/x.y,n.zoomSpeed)),z(_.y),x.copy(w)}function ae(L){n.enableZoom&&de(L),n.enablePan&&te(L)}function pe(L){n.enableZoom&&de(L),n.enableRotate&&ce(L)}function ue(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",ge),n.domElement.addEventListener("pointerup",G)),he(L),L.pointerType==="touch"?P(L):ye(L))}function ge(L){n.enabled!==!1&&(L.pointerType==="touch"?T(L):Te(L))}function G(L){fe(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",G)),n.dispatchEvent(bu),s=i.NONE}function I(L){fe(L)}function ye(L){let le;switch(L.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Fi.DOLLY:if(n.enableZoom===!1)return;W(L),s=i.DOLLY;break;case Fi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;B(L),s=i.PAN}else{if(n.enableRotate===!1)return;q(L),s=i.ROTATE}break;case Fi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;q(L),s=i.ROTATE}else{if(n.enablePan===!1)return;B(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ba)}function Te(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;j(L);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(L);break;case i.PAN:if(n.enablePan===!1)return;se(L);break}}function Be(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(ba),F(L),n.dispatchEvent(bu))}function Ze(L){n.enabled===!1||n.enablePan===!1||R(L)}function P(L){switch(_e(L),M.length){case 1:switch(n.touches.ONE){case di.ROTATE:if(n.enableRotate===!1)return;S(),s=i.TOUCH_ROTATE;break;case di.PAN:if(n.enablePan===!1)return;N(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(),s=i.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ba)}function T(L){switch(_e(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ce(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;te(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(L),n.update();break;default:s=i.NONE}}function ne(L){n.enabled!==!1&&L.preventDefault()}function he(L){M.push(L)}function fe(L){delete b[L.pointerId];for(let le=0;le<M.length;le++)if(M[le].pointerId==L.pointerId){M.splice(le,1);return}}function _e(L){let le=b[L.pointerId];le===void 0&&(le=new oe,b[L.pointerId]=le),le.set(L.pageX,L.pageY)}function Le(L){const le=L.pointerId===M[0].pointerId?M[1]:M[0];return b[le.pointerId]}n.domElement.addEventListener("contextmenu",ne),n.domElement.addEventListener("pointerdown",ue),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",Be,{passive:!1}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Su={},ja=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))},Ch=function(r){return new Worker(r)};try{URL.revokeObjectURL(ja(""))}catch{ja=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},Ch=function(e){return new Worker(e,{type:"module"})}}var ey=function(r,e,t,n,i){var s=Ch(Su[e]||(Su[e]=ja(r)));return s.onerror=function(o){return i(o.error,null)},s.onmessage=function(o){return i(null,o.data)},s.postMessage(t,n),s},ze=Uint8Array,yt=Uint16Array,Nn=Uint32Array,Ls=new ze([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cs=new ze([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ur=new ze([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ph=function(r,e){for(var t=new yt(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new Nn(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},Rh=Ph(Ls,2),Ml=Rh[0],po=Rh[1];Ml[28]=258,po[258]=28;var Ih=Ph(Cs,0),Dh=Ih[0],Xa=Ih[1],hr=new yt(32768);for(var Qe=0;Qe<32768;++Qe){var Yn=(Qe&43690)>>>1|(Qe&21845)<<1;Yn=(Yn&52428)>>>2|(Yn&13107)<<2,Yn=(Yn&61680)>>>4|(Yn&3855)<<4,hr[Qe]=((Yn&65280)>>>8|(Yn&255)<<8)>>>1}var Zt=function(r,e,t){for(var n=r.length,i=0,s=new yt(e);i<n;++i)++s[r[i]-1];var o=new yt(e);for(i=0;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new yt(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=o[r[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[hr[u]>>>l]=c}else for(a=new yt(n),i=0;i<n;++i)r[i]&&(a[i]=hr[o[r[i]-1]++]>>>15-r[i]);return a},On=new ze(288);for(var Qe=0;Qe<144;++Qe)On[Qe]=8;for(var Qe=144;Qe<256;++Qe)On[Qe]=9;for(var Qe=256;Qe<280;++Qe)On[Qe]=7;for(var Qe=280;Qe<288;++Qe)On[Qe]=8;var vs=new ze(32);for(var Qe=0;Qe<32;++Qe)vs[Qe]=5;var Fh=Zt(On,9,0),Nh=Zt(On,9,1),Oh=Zt(vs,5,0),kh=Zt(vs,5,1),so=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},qt=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},ro=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},yr=function(r){return(r/8|0)+(r&7&&1)},Kt=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof yt?yt:r instanceof Nn?Nn:ze)(t-e);return n.set(r.subarray(e,t)),n},_r=function(r,e,t){var n=r.length;if(!n||t&&!t.l&&n<5)return e||new ze(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new ze(n*3));var o=function(O){var U=e.length;if(O>U){var Q=new ze(Math.max(U*2,O));Q.set(e),e=Q}},a=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,f=t.m,p=t.n,g=n*8;do{if(!h){t.f=a=qt(r,l,1);var m=qt(r,l+1,3);if(l+=3,m)if(m==1)h=Nh,u=kh,f=9,p=5;else if(m==2){var w=qt(r,l,31)+257,_=qt(r,l+10,15)+4,M=w+qt(r,l+5,31)+1;l+=14;for(var b=new ze(M),E=new ze(19),y=0;y<_;++y)E[ur[y]]=qt(r,l+y*3,7);l+=_*3;for(var A=so(E),k=(1<<A)-1,V=Zt(E,A,1),y=0;y<M;){var X=V[qt(r,l,k)];l+=X&15;var d=X>>>4;if(d<16)b[y++]=d;else{var K=0,z=0;for(d==16?(z=3+qt(r,l,3),l+=2,K=b[y-1]):d==17?(z=3+qt(r,l,7),l+=3):d==18&&(z=11+qt(r,l,127),l+=7);z--;)b[y++]=K}}var Y=b.subarray(0,w),q=b.subarray(w);f=so(Y),p=so(q),h=Zt(Y,f,1),u=Zt(q,p,1)}else throw"invalid block type";else{var d=yr(l)+4,v=r[d-4]|r[d-3]<<8,x=d+v;if(x>n){if(s)throw"unexpected EOF";break}i&&o(c+v),e.set(r.subarray(d,x),c),t.b=c+=v,t.p=l=x*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}i&&o(c+131072);for(var W=(1<<f)-1,B=(1<<p)-1,j=l;;j=l){var K=h[ro(r,l)&W],Z=K>>>4;if(l+=K&15,l>g){if(s)throw"unexpected EOF";break}if(!K)throw"invalid length/literal";if(Z<256)e[c++]=Z;else if(Z==256){j=l,h=null;break}else{var se=Z-254;if(Z>264){var y=Z-257,F=Ls[y];se=qt(r,l,(1<<F)-1)+Ml[y],l+=F}var R=u[ro(r,l)&B],S=R>>>4;if(!R)throw"invalid distance";l+=R&15;var q=Dh[S];if(S>3){var F=Cs[S];q+=ro(r,l)&(1<<F)-1,l+=F}if(l>g){if(s)throw"unexpected EOF";break}i&&o(c+131072);for(var N=c+se;c<N;c+=4)e[c]=e[c-q],e[c+1]=e[c+1-q],e[c+2]=e[c+2-q],e[c+3]=e[c+3-q];c=N}}t.l=h,t.p=j,t.b=c,h&&(a=1,t.m=f,t.d=u,t.n=p)}while(!a);return c==e.length?e:Kt(e,0,c)},un=function(r,e,t){t<<=e&7;var n=e/8|0;r[n]|=t,r[n+1]|=t>>>8},$i=function(r,e,t){t<<=e&7;var n=e/8|0;r[n]|=t,r[n+1]|=t>>>8,r[n+2]|=t>>>16},oo=function(r,e){for(var t=[],n=0;n<r.length;++n)r[n]&&t.push({s:n,f:r[n]});var i=t.length,s=t.slice();if(!i)return[In,0];if(i==1){var o=new ze(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(M,b){return M.f-b.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};h!=i-1;)a=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=s[0].s,n=1;n<i;++n)s[n].s>f&&(f=s[n].s);var p=new yt(f+1),g=mo(t[h-1],p,0);if(g>e){var n=0,m=0,d=g-e,v=1<<d;for(s.sort(function(b,E){return p[E.s]-p[b.s]||b.f-E.f});n<i;++n){var x=s[n].s;if(p[x]>e)m+=v-(1<<g-p[x]),p[x]=e;else break}for(m>>>=d;m>0;){var w=s[n].s;p[w]<e?m-=1<<e-p[w]++-1:++n}for(;n>=0&&m;--n){var _=s[n].s;p[_]==e&&(--p[_],++m)}g=e}return[new ze(p),g]},mo=function(r,e,t){return r.s==-1?Math.max(mo(r.l,e,t+1),mo(r.r,e,t+1)):e[r.s]=t},qa=function(r){for(var e=r.length;e&&!r[--e];);for(var t=new yt(++e),n=0,i=r[0],s=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(r[a]==i&&a!=e)++s;else{if(!i&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i);s=1,i=r[a]}return[t.subarray(0,n),e]},Qi=function(r,e){for(var t=0,n=0;n<e.length;++n)t+=r[n]*e[n];return t},tr=function(r,e,t){var n=t.length,i=yr(e+2);r[i]=n&255,r[i+1]=n>>>8,r[i+2]=r[i]^255,r[i+3]=r[i+1]^255;for(var s=0;s<n;++s)r[i+s+4]=t[s];return(i+4+n)*8},Ya=function(r,e,t,n,i,s,o,a,l,c,h){un(e,h++,t),++i[256];for(var u=oo(i,15),f=u[0],p=u[1],g=oo(s,15),m=g[0],d=g[1],v=qa(f),x=v[0],w=v[1],_=qa(m),M=_[0],b=_[1],E=new yt(19),y=0;y<x.length;++y)E[x[y]&31]++;for(var y=0;y<M.length;++y)E[M[y]&31]++;for(var A=oo(E,7),k=A[0],V=A[1],X=19;X>4&&!k[ur[X-1]];--X);var K=c+5<<3,z=Qi(i,On)+Qi(s,vs)+o,Y=Qi(i,f)+Qi(s,m)+o+14+3*X+Qi(E,k)+(2*E[16]+3*E[17]+7*E[18]);if(K<=z&&K<=Y)return tr(e,h,r.subarray(l,l+c));var q,W,B,j;if(un(e,h,1+(Y<z)),h+=2,Y<z){q=Zt(f,p,0),W=f,B=Zt(m,d,0),j=m;var Z=Zt(k,V,0);un(e,h,w-257),un(e,h+5,b-1),un(e,h+10,X-4),h+=14;for(var y=0;y<X;++y)un(e,h+3*y,k[ur[y]]);h+=3*X;for(var se=[x,M],F=0;F<2;++F)for(var R=se[F],y=0;y<R.length;++y){var S=R[y]&31;un(e,h,Z[S]),h+=k[S],S>15&&(un(e,h,R[y]>>>5&127),h+=R[y]>>>12)}}else q=Fh,W=On,B=Oh,j=vs;for(var y=0;y<a;++y)if(n[y]>255){var S=n[y]>>>18&31;$i(e,h,q[S+257]),h+=W[S+257],S>7&&(un(e,h,n[y]>>>23&31),h+=Ls[S]);var N=n[y]&31;$i(e,h,B[N]),h+=j[N],N>3&&($i(e,h,n[y]>>>5&8191),h+=Cs[N])}else $i(e,h,q[n[y]]),h+=W[n[y]];return $i(e,h,q[256]),h+W[256]},zh=new Nn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),In=new ze(0),Bh=function(r,e,t,n,i,s){var o=r.length,a=new ze(n+o+5*(1+Math.ceil(o/7e3))+i),l=a.subarray(n,a.length-i),c=0;if(!e||o<8)for(var h=0;h<=o;h+=65535){var u=h+65535;u<o?c=tr(l,c,r.subarray(h,u)):(l[h]=s,c=tr(l,c,r.subarray(h,o)))}else{for(var f=zh[e-1],p=f>>>13,g=f&8191,m=(1<<t)-1,d=new yt(32768),v=new yt(m+1),x=Math.ceil(t/3),w=2*x,_=function(ue){return(r[ue]^r[ue+1]<<x^r[ue+2]<<w)&m},M=new Nn(25e3),b=new yt(288),E=new yt(32),y=0,A=0,h=0,k=0,V=0,X=0;h<o;++h){var K=_(h),z=h&32767,Y=v[K];if(d[z]=Y,v[K]=z,V<=h){var q=o-h;if((y>7e3||k>24576)&&q>423){c=Ya(r,l,0,M,b,E,A,k,X,h-X,c),k=y=A=0,X=h;for(var W=0;W<286;++W)b[W]=0;for(var W=0;W<30;++W)E[W]=0}var B=2,j=0,Z=g,se=z-Y&32767;if(q>2&&K==_(h-se))for(var F=Math.min(p,q)-1,R=Math.min(32767,h),S=Math.min(258,q);se<=R&&--Z&&z!=Y;){if(r[h+B]==r[h+B-se]){for(var N=0;N<S&&r[h+N]==r[h+N-se];++N);if(N>B){if(B=N,j=se,N>F)break;for(var O=Math.min(se,N-2),U=0,W=0;W<O;++W){var Q=h-se+W+32768&32767,ce=d[Q],te=Q-ce+32768&32767;te>U&&(U=te,Y=Q)}}}z=Y,Y=d[z],se+=z-Y+32768&32767}if(j){M[k++]=268435456|po[B]<<18|Xa[j];var de=po[B]&31,ae=Xa[j]&31;A+=Ls[de]+Cs[ae],++b[257+de],++E[ae],V=h+B,++y}else M[k++]=r[h],++b[r[h]]}}c=Ya(r,l,s,M,b,E,A,k,X,h-X,c),!s&&c&7&&(c=tr(l,c+1,In))}return Kt(a,0,n+yr(c)+i)},Uh=function(){for(var r=new Nn(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;r[e]=t}return r}(),Ps=function(){var r=-1;return{p:function(e){for(var t=r,n=0;n<e.length;++n)t=Uh[t&255^e[n]]^t>>>8;r=t},d:function(){return~r}}},wl=function(){var r=1,e=0;return{p:function(t){for(var n=r,i=e,s=t.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)i+=n+=t[o];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}r=n,e=i},d:function(){return r%=65521,e%=65521,(r&255)<<24|r>>>8<<16|(e&255)<<8|e>>>8}}},Pi=function(r,e,t,n,i){return Bh(r,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(r.length)))*1.5):12+e.mem,t,n,!i)},Mr=function(r,e){var t={};for(var n in r)t[n]=r[n];for(var n in e)t[n]=e[n];return t},Tu=function(r,e,t){for(var n=r(),i=r.toString(),s=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/ /g,"").split(","),o=0;o<n.length;++o){var a=n[o],l=s[o];if(typeof a=="function"){e+=";"+l+"=";var c=a.toString();if(a.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;e+=c.slice(h,c.indexOf("(",h))}else{e+=c;for(var u in a.prototype)e+=";"+l+".prototype."+u+"="+a.prototype[u].toString()}else e+=c}else t[l]=a}return[e,t]},Jr=[],ty=function(r){var e=[];for(var t in r)(r[t]instanceof ze||r[t]instanceof yt||r[t]instanceof Nn)&&e.push((r[t]=new r[t].constructor(r[t])).buffer);return e},Vh=function(r,e,t,n){var i;if(!Jr[t]){for(var s="",o={},a=r.length-1,l=0;l<a;++l)i=Tu(r[l],s,o),s=i[0],o=i[1];Jr[t]=Tu(r[a],s,o)}var c=Mr({},Jr[t][1]);return ey(Jr[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,ty(c),n)},Rs=function(){return[ze,yt,Nn,Ls,Cs,ur,Ml,Dh,Nh,kh,hr,Zt,so,qt,ro,yr,Kt,_r,Ns,li,bl]},Is=function(){return[ze,yt,Nn,Ls,Cs,ur,po,Xa,Fh,On,Oh,vs,hr,zh,In,Zt,un,$i,oo,mo,qa,Qi,tr,Ya,yr,Kt,Bh,Pi,wr,li]},Gh=function(){return[Sl,El,Ye,Ps,Uh]},Hh=function(){return[Tl,Xh]},Wh=function(){return[Al,Ye,wl]},jh=function(){return[qh]},li=function(r){return postMessage(r,[r.buffer])},bl=function(r){return r&&r.size&&new ze(r.size)},Ds=function(r,e,t,n,i,s){var o=Vh(t,n,i,function(a,l){o.terminate(),s(a,l)});return o.postMessage([r,e],e.consume?[r.buffer]:[]),function(){o.terminate()}},Jt=function(r){return r.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return r.push(e.data[0],e.data[1])}},Fs=function(r,e,t,n,i){var s,o=Vh(r,n,i,function(a,l){a?(o.terminate(),e.ondata.call(e,a)):(l[1]&&o.terminate(),e.ondata.call(e,a,l[0],l[1]))});o.postMessage(t),e.push=function(a,l){if(s)throw"stream finished";if(!e.ondata)throw"no stream handler";o.postMessage([a,s=l],[a.buffer])},e.terminate=function(){o.terminate()}},Lt=function(r,e){return r[e]|r[e+1]<<8},lt=function(r,e){return(r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24)>>>0},Sa=function(r,e){return lt(r,e)+lt(r,e+4)*4294967296},Ye=function(r,e,t){for(;t;++e)r[e]=t,t>>>=8},Sl=function(r,e){var t=e.filename;if(r[0]=31,r[1]=139,r[2]=8,r[8]=e.level<2?4:e.level==9?2:0,r[9]=3,e.mtime!=0&&Ye(r,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){r[3]=8;for(var n=0;n<=t.length;++n)r[n+10]=t.charCodeAt(n)}},Tl=function(r){if(r[0]!=31||r[1]!=139||r[2]!=8)throw"invalid gzip data";var e=r[3],t=10;e&4&&(t+=r[10]|(r[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!r[t++]);return t+(e&2)},Xh=function(r){var e=r.length;return(r[e-4]|r[e-3]<<8|r[e-2]<<16|r[e-1]<<24)>>>0},El=function(r){return 10+(r.filename&&r.filename.length+1||0)},Al=function(r,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;r[0]=120,r[1]=n<<6|(n?32-2*n:1)},qh=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Ll(r,e){return!e&&typeof r=="function"&&(e=r,r={}),this.ondata=e,r}var gn=function(){function r(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return r.prototype.p=function(e,t){this.ondata(Pi(e,this.o,0,0,!t),t)},r.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},r}(),Yh=function(){function r(e,t){Fs([Is,function(){return[Jt,gn]}],this,Ll.call(this,e,t),function(n){var i=new gn(n.data);onmessage=Jt(i)},6)}return r}();function Zh(r,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ds(r,e,[Is],function(n){return li(wr(n.data[0],n.data[1]))},0,t)}function wr(r,e){return Pi(r,e||{},0,0)}var zt=function(){function r(e){this.s={},this.p=new ze(0),this.ondata=e}return r.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,n=new ze(t+e.length);n.set(this.p),n.set(e,t),this.p=n},r.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,n=_r(this.p,this.o,this.s);this.ondata(Kt(n,t,this.s.b),this.d),this.o=Kt(n,this.s.b-32768),this.s.b=this.o.length,this.p=Kt(this.p,this.s.p/8|0),this.s.p&=7},r.prototype.push=function(e,t){this.e(e),this.c(t)},r}(),Cl=function(){function r(e){this.ondata=e,Fs([Rs,function(){return[Jt,zt]}],this,0,function(){var t=new zt;onmessage=Jt(t)},7)}return r}();function Pl(r,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ds(r,e,[Rs],function(n){return li(Ns(n.data[0],bl(n.data[1])))},1,t)}function Ns(r,e){return _r(r,e)}var go=function(){function r(e,t){this.c=Ps(),this.l=0,this.v=1,gn.call(this,e,t)}return r.prototype.push=function(e,t){gn.prototype.push.call(this,e,t)},r.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var n=Pi(e,this.o,this.v&&El(this.o),t&&8,!t);this.v&&(Sl(n,this.o),this.v=0),t&&(Ye(n,n.length-8,this.c.d()),Ye(n,n.length-4,this.l)),this.ondata(n,t)},r}(),Eu=function(){function r(e,t){Fs([Is,Gh,function(){return[Jt,gn,go]}],this,Ll.call(this,e,t),function(n){var i=new go(n.data);onmessage=Jt(i)},8)}return r}();function Au(r,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ds(r,e,[Is,Gh,function(){return[vo]}],function(n){return li(vo(n.data[0],n.data[1]))},2,t)}function vo(r,e){e||(e={});var t=Ps(),n=r.length;t.p(r);var i=Pi(r,e,El(e),8),s=i.length;return Sl(i,e),Ye(i,s-8,t.d()),Ye(i,s-4,n),i}var xo=function(){function r(e){this.v=1,zt.call(this,e)}return r.prototype.push=function(e,t){if(zt.prototype.e.call(this,e),this.v){var n=this.p.length>3?Tl(this.p):4;if(n>=this.p.length&&!t)return;this.p=this.p.subarray(n),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}zt.prototype.c.call(this,t)},r}(),Kh=function(){function r(e){this.ondata=e,Fs([Rs,Hh,function(){return[Jt,zt,xo]}],this,0,function(){var t=new xo;onmessage=Jt(t)},9)}return r}();function Jh(r,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ds(r,e,[Rs,Hh,function(){return[yo]}],function(n){return li(yo(n.data[0]))},3,t)}function yo(r,e){return _r(r.subarray(Tl(r),-8),e||new ze(Xh(r)))}var Za=function(){function r(e,t){this.c=wl(),this.v=1,gn.call(this,e,t)}return r.prototype.push=function(e,t){gn.prototype.push.call(this,e,t)},r.prototype.p=function(e,t){this.c.p(e);var n=Pi(e,this.o,this.v&&2,t&&4,!t);this.v&&(Al(n,this.o),this.v=0),t&&Ye(n,n.length-4,this.c.d()),this.ondata(n,t)},r}(),ny=function(){function r(e,t){Fs([Is,Wh,function(){return[Jt,gn,Za]}],this,Ll.call(this,e,t),function(n){var i=new Za(n.data);onmessage=Jt(i)},10)}return r}();function iy(r,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ds(r,e,[Is,Wh,function(){return[Ka]}],function(n){return li(Ka(n.data[0],n.data[1]))},4,t)}function Ka(r,e){e||(e={});var t=wl();t.p(r);var n=Pi(r,e,2,4);return Al(n,e),Ye(n,n.length-4,t.d()),n}var _o=function(){function r(e){this.v=1,zt.call(this,e)}return r.prototype.push=function(e,t){if(zt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}zt.prototype.c.call(this,t)},r}(),$h=function(){function r(e){this.ondata=e,Fs([Rs,jh,function(){return[Jt,zt,_o]}],this,0,function(){var t=new _o;onmessage=Jt(t)},11)}return r}();function Qh(r,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ds(r,e,[Rs,jh,function(){return[fr]}],function(n){return li(fr(n.data[0],bl(n.data[1])))},5,t)}function fr(r,e){return _r((qh(r),r.subarray(2,-4)),e)}var ef=function(){function r(e){this.G=xo,this.I=zt,this.Z=_o,this.ondata=e}return r.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ze(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,s=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(s):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(s):new this.Z(s),this.s.push(this.p,t),this.p=null}}},r}(),sy=function(){function r(e){this.G=Kh,this.I=Cl,this.Z=$h,this.ondata=e}return r.prototype.push=function(e,t){ef.prototype.push.call(this,e,t)},r}();function ry(r,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return r[0]==31&&r[1]==139&&r[2]==8?Jh(r,e,t):(r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31?Pl(r,e,t):Qh(r,e,t)}function oy(r,e){return r[0]==31&&r[1]==139&&r[2]==8?yo(r,e):(r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31?Ns(r,e):fr(r,e)}var Rl=function(r,e,t,n){for(var i in r){var s=r[i],o=e+i;s instanceof ze?t[o]=[s,n]:Array.isArray(s)?t[o]=[s[0],Mr(n,s[1])]:Rl(s,o+"/",t,n)}},Lu=typeof TextEncoder<"u"&&new TextEncoder,Ja=typeof TextDecoder<"u"&&new TextDecoder,tf=0;try{Ja.decode(In,{stream:!0}),tf=1}catch{}var nf=function(r){for(var e="",t=0;;){var n=r[t++],i=(n>127)+(n>223)+(n>239);if(t+i>r.length)return[e,Kt(r,t-1)];i?i==3?(n=((n&15)<<18|(r[t++]&63)<<12|(r[t++]&63)<<6|r[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?e+=String.fromCharCode((n&31)<<6|r[t++]&63):e+=String.fromCharCode((n&15)<<12|(r[t++]&63)<<6|r[t++]&63):e+=String.fromCharCode(n)}},ay=function(){function r(e){this.ondata=e,tf?this.t=new TextDecoder:this.p=In}return r.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new ze(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var i=nf(n),s=i[0],o=i[1];if(t){if(o.length)throw"invalid utf-8 data";this.p=null}else this.p=o;this.ondata(s,t)},r}(),ly=function(){function r(e){this.ondata=e}return r.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(oi(e),this.d=t||!1)},r}();function oi(r,e){if(e){for(var t=new ze(r.length),n=0;n<r.length;++n)t[n]=r.charCodeAt(n);return t}if(Lu)return Lu.encode(r);for(var i=r.length,s=new ze(r.length+(r.length>>1)),o=0,a=function(h){s[o++]=h},n=0;n<i;++n){if(o+5>s.length){var l=new ze(o+8+(i-n<<1));l.set(s),s=l}var c=r.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|r.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return Kt(s,0,o)}function Il(r,e){if(e){for(var t="",n=0;n<r.length;n+=16384)t+=String.fromCharCode.apply(null,r.subarray(n,n+16384));return t}else{if(Ja)return Ja.decode(r);var i=nf(r),s=i[0],o=i[1];if(o.length)throw"invalid utf-8 data";return s}}var sf=function(r){return r==1?3:r<6?2:r==9?1:0},rf=function(r,e){return e+30+Lt(r,e+26)+Lt(r,e+28)},of=function(r,e,t){var n=Lt(r,e+28),i=Il(r.subarray(e+46,e+46+n),!(Lt(r,e+8)&2048)),s=e+46+n,o=lt(r,e+20),a=t&&o==4294967295?af(r,s):[o,lt(r,e+24),lt(r,e+42)],l=a[0],c=a[1],h=a[2];return[Lt(r,e+10),l,c,i,s+Lt(r,e+30)+Lt(r,e+32),h]},af=function(r,e){for(;Lt(r,e)!=1;e+=4+Lt(r,e+2));return[Sa(r,e+12),Sa(r,e+4),Sa(r,e+20)]},ti=function(r){var e=0;if(r)for(var t in r){var n=r[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},xs=function(r,e,t,n,i,s,o,a){var l=n.length,c=t.extra,h=a&&a.length,u=ti(c);Ye(r,e,o!=null?33639248:67324752),e+=4,o!=null&&(r[e++]=20,r[e++]=t.os),r[e]=20,e+=2,r[e++]=t.flag<<1|(s==null&&8),r[e++]=i&&8,r[e++]=t.compression&255,r[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),p=f.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(Ye(r,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>>1),e+=4,s!=null&&(Ye(r,e,t.crc),Ye(r,e+4,s),Ye(r,e+8,t.size)),Ye(r,e+12,l),Ye(r,e+14,u),e+=16,o!=null&&(Ye(r,e,h),Ye(r,e+6,t.attrs),Ye(r,e+10,o),e+=14),r.set(n,e),e+=l,u)for(var g in c){var m=c[g],d=m.length;Ye(r,e,+g),Ye(r,e+2,d),r.set(m,e+4),e+=4+d}return h&&(r.set(a,e),e+=h),e},Dl=function(r,e,t,n,i){Ye(r,e,101010256),Ye(r,e+8,t),Ye(r,e+10,t),Ye(r,e+12,n),Ye(r,e+16,i)},dr=function(){function r(e){this.filename=e,this.c=Ps(),this.size=0,this.compression=0}return r.prototype.process=function(e,t){this.ondata(null,e,t)},r.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},r}(),cy=function(){function r(e,t){var n=this;t||(t={}),dr.call(this,e),this.d=new gn(t,function(i,s){n.ondata(null,i,s)}),this.compression=8,this.flag=sf(t.level)}return r.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},r.prototype.push=function(e,t){dr.prototype.push.call(this,e,t)},r}(),uy=function(){function r(e,t){var n=this;t||(t={}),dr.call(this,e),this.d=new Yh(t,function(i,s,o){n.ondata(i,s,o)}),this.compression=8,this.flag=sf(t.level),this.terminate=this.d.terminate}return r.prototype.process=function(e,t){this.d.push(e,t)},r.prototype.push=function(e,t){dr.prototype.push.call(this,e,t)},r}(),hy=function(){function r(e){this.ondata=e,this.u=[],this.d=1}return r.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var n=oi(e.filename),i=n.length,s=e.comment,o=s&&oi(s),a=i!=e.filename.length||o&&s.length!=o.length,l=i+ti(e.extra)+30;if(i>65535)throw"filename too long";var c=new ze(l);xs(c,0,e,n,a);var h=[c],u=function(){for(var d=0,v=h;d<v.length;d++){var x=v[d];t.ondata(null,x,!1)}h=[]},f=this.d;this.d=0;var p=this.u.length,g=Mr(e,{f:n,u:a,o,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),f){var d=t.u[p+1];d?d.r():t.d=1}f=1}}),m=0;e.ondata=function(d,v,x){if(d)t.ondata(d,v,x),t.terminate();else if(m+=v.length,h.push(v),x){var w=new ze(16);Ye(w,0,134695760),Ye(w,4,e.crc),Ye(w,8,m),Ye(w,12,e.size),h.push(w),g.c=m,g.b=l+m+16,g.crc=e.crc,g.size=e.size,f&&g.r(),f=1}else f&&u()},this.u.push(g)},r.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){!(e.d&1)||(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},r.prototype.e=function(){for(var e=0,t=0,n=0,i=0,s=this.u;i<s.length;i++){var o=s[i];n+=46+o.f.length+ti(o.extra)+(o.o?o.o.length:0)}for(var a=new ze(n+22),l=0,c=this.u;l<c.length;l++){var o=c[l];xs(a,e,o,o.f,o.u,o.c,t,o.o),e+=46+o.f.length+ti(o.extra)+(o.o?o.o.length:0),t+=o.b}Dl(a,e,this.u.length,n,t),this.ondata(null,a,!0),this.d=2},r.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},r}();function fy(r,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var n={};Rl(r,"",n,e);var i=Object.keys(n),s=i.length,o=0,a=0,l=s,c=new Array(s),h=[],u=function(){for(var m=0;m<h.length;++m)h[m]()},f=function(){var m=new ze(a+22),d=o,v=a-o;a=0;for(var x=0;x<l;++x){var w=c[x];try{var _=w.c.length;xs(m,a,w,w.f,w.u,_);var M=30+w.f.length+ti(w.extra),b=a+M;m.set(w.c,b),xs(m,o,w,w.f,w.u,_,a,w.m),o+=16+M+(w.m?w.m.length:0),a=b+_}catch(E){return t(E,null)}}Dl(m,o,c.length,v,d),t(null,m)};s||f();for(var p=function(m){var d=i[m],v=n[d],x=v[0],w=v[1],_=Ps(),M=x.length;_.p(x);var b=oi(d),E=b.length,y=w.comment,A=y&&oi(y),k=A&&A.length,V=ti(w.extra),X=w.level==0?0:8,K=function(z,Y){if(z)u(),t(z,null);else{var q=Y.length;c[m]=Mr(w,{size:M,crc:_.d(),c:Y,f:b,m:A,u:E!=d.length||A&&y.length!=k,compression:X}),o+=30+E+V+q,a+=76+2*(E+V)+(k||0)+q,--s||f()}};if(E>65535&&K("filename too long",null),!X)K(null,x);else if(M<16e4)try{K(null,wr(x,w))}catch(z){K(z,null)}else h.push(Zh(x,w,K))},g=0;g<l;++g)p(g);return u}function dy(r,e){e||(e={});var t={},n=[];Rl(r,"",t,e);var i=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],h=c.level==0?0:8,u=oi(o),f=u.length,p=c.comment,g=p&&oi(p),m=g&&g.length,d=ti(c.extra);if(f>65535)throw"filename too long";var v=h?wr(l,c):l,x=v.length,w=Ps();w.p(l),n.push(Mr(c,{size:l.length,crc:w.d(),c:v,f:u,m:g,u:f!=o.length||g&&p.length!=m,o:i,compression:h})),i+=30+f+d+x,s+=76+2*(f+d)+(m||0)+x}for(var _=new ze(s+22),M=i,b=s-i,E=0;E<n.length;++E){var u=n[E];xs(_,u.o,u,u.f,u.u,u.c.length);var y=30+u.f.length+ti(u.extra);_.set(u.c,u.o+y),xs(_,i,u,u.f,u.u,u.c.length,u.o,u.m),i+=16+y+(u.m?u.m.length:0)}return Dl(_,i,n.length,b,M),_}var lf=function(){function r(){}return r.prototype.push=function(e,t){this.ondata(null,e,t)},r.compression=0,r}(),py=function(){function r(){var e=this;this.i=new zt(function(t,n){e.ondata(null,t,n)})}return r.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,e,t)}},r.compression=8,r}(),my=function(){function r(e,t){var n=this;t<32e4?this.i=new zt(function(i,s){n.ondata(null,i,s)}):(this.i=new Cl(function(i,s,o){n.ondata(i,s,o)}),this.terminate=this.i.terminate)}return r.prototype.push=function(e,t){this.i.terminate&&(e=Kt(e,0)),this.i.push(e,t)},r.compression=8,r}(),gy=function(){function r(e){this.onfile=e,this.k=[],this.o={0:lf},this.p=In}return r.prototype.push=function(e,t){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var i=Math.min(this.c,e.length),s=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(i),e.length)return this.push(e,t)}else{var o=0,a=0,l=void 0,c=void 0;this.p.length?e.length?(c=new ze(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var h=c.length,u=this.c,f=u&&this.d,p=function(){var v,x=lt(c,a);if(x==67324752){o=1,l=a,g.d=null,g.c=0;var w=Lt(c,a+6),_=Lt(c,a+8),M=w&2048,b=w&8,E=Lt(c,a+26),y=Lt(c,a+28);if(h>a+30+E+y){var A=[];g.k.unshift(A),o=2;var k=lt(c,a+18),V=lt(c,a+22),X=Il(c.subarray(a+30,a+=30+E),!M);k==4294967295?(v=b?[-2]:af(c,a),k=v[0],V=v[1]):b&&(k=-1),a+=y,g.c=k;var K,z={name:X,compression:_,start:function(){if(!z.ondata)throw"no callback";if(!k)z.ondata(null,In,!0);else{var Y=n.o[_];if(!Y)throw"unknown compression type "+_;K=k<0?new Y(X):new Y(X,k,V),K.ondata=function(j,Z,se){z.ondata(j,Z,se)};for(var q=0,W=A;q<W.length;q++){var B=W[q];K.push(B,!1)}n.k[0]==A&&n.c?n.d=K:K.push(In,!0)}},terminate:function(){K&&K.terminate&&K.terminate()}};k>=0&&(z.size=k,z.originalSize=V),g.onfile(z)}return"break"}else if(u){if(x==134695760)return l=a+=12+(u==-2&&8),o=3,g.c=0,"break";if(x==33639248)return l=a-=4,o=3,g.c=0,"break"}},g=this;a<h-4;++a){var m=p();if(m==="break")break}if(this.p=In,u<0){var d=o?c.subarray(0,l-12-(u==-2&&8)-(lt(c,l-16)==134695760&&4)):c.subarray(0,a);f?f.push(d,!!o):this.k[+(o==2)].push(d)}if(o&2)return this.push(c.subarray(a),t);this.p=c.subarray(a)}if(t){if(this.c)throw"invalid zip file";this.p=null}},r.prototype.register=function(e){this.o[e.compression]=e},r}();function vy(r,e){if(typeof e!="function")throw"no callback";for(var t=[],n=function(){for(var f=0;f<t.length;++f)t[f]()},i={},s=r.length-22;lt(r,s)!=101010256;--s)if(!s||r.length-s>65558){e("invalid zip file",null);return}var o=Lt(r,s+8);o||e(null,{});var a=o,l=lt(r,s+16),c=l==4294967295;if(c){if(s=lt(r,s-12),lt(r,s)!=101075792){e("invalid zip file",null);return}a=o=lt(r,s+32),l=lt(r,s+48)}for(var h=function(f){var p=of(r,l,c),g=p[0],m=p[1],d=p[2],v=p[3],x=p[4],w=p[5],_=rf(r,w);l=x;var M=function(E,y){E?(n(),e(E,null)):(i[v]=y,--o||e(null,i))};if(!g)M(null,Kt(r,_,_+m));else if(g==8){var b=r.subarray(_,_+m);if(m<32e4)try{M(null,Ns(b,new ze(d)))}catch(E){M(E,null)}else t.push(Pl(b,{size:d},M))}else M("unknown compression type "+g,null)},u=0;u<a;++u)h();return n}function xy(r){for(var e={},t=r.length-22;lt(r,t)!=101010256;--t)if(!t||r.length-t>65558)throw"invalid zip file";var n=Lt(r,t+8);if(!n)return{};var i=lt(r,t+16),s=i==4294967295;if(s){if(t=lt(r,t-12),lt(r,t)!=101075792)throw"invalid zip file";n=lt(r,t+32),i=lt(r,t+48)}for(var o=0;o<n;++o){var a=of(r,i,s),l=a[0],c=a[1],h=a[2],u=a[3],f=a[4],p=a[5],g=rf(r,p);if(i=f,!l)e[u]=Kt(r,g,g+c);else if(l==8)e[u]=Ns(r.subarray(g,g+c),new ze(h));else throw"unknown compression type "+l}return e}const yy=Object.freeze(Object.defineProperty({__proto__:null,Deflate:gn,AsyncDeflate:Yh,deflate:Zh,deflateSync:wr,Inflate:zt,AsyncInflate:Cl,inflate:Pl,inflateSync:Ns,Gzip:go,AsyncGzip:Eu,gzip:Au,gzipSync:vo,Gunzip:xo,AsyncGunzip:Kh,gunzip:Jh,gunzipSync:yo,Zlib:Za,AsyncZlib:ny,zlib:iy,zlibSync:Ka,Unzlib:_o,AsyncUnzlib:$h,unzlib:Qh,unzlibSync:fr,compress:Au,AsyncCompress:Eu,compressSync:vo,Compress:go,Decompress:ef,AsyncDecompress:sy,decompress:ry,decompressSync:oy,DecodeUTF8:ay,EncodeUTF8:ly,strToU8:oi,strFromU8:Il,ZipPassThrough:dr,ZipDeflate:cy,AsyncZipDeflate:uy,Zip:hy,zip:fy,zipSync:dy,UnzipPassThrough:lf,UnzipInflate:py,AsyncUnzipInflate:my,Unzip:gy,unzip:vy,unzipSync:xy},Symbol.toStringTag,{value:"Module"}));function cf(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function _y(r,e,t,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[r+1-a],o[a]=n[r+a]-e;let l=0;for(let c=0;c<a;++c){const h=o[c+1],u=s[a-c],f=i[c]/(h+u);i[c]=l+h*f,l=u*f}i[a]=l}return i}function My(r,e,t,n){const i=cf(r,n,e),s=_y(i,n,r,e),o=new Xe(0,0,0,0);for(let a=0;a<=r;++a){const l=t[i-r+a],c=s[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function wy(r,e,t,n,i){const s=[];for(let u=0;u<=t;++u)s[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=s.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[r+1-u],c[u]=i[r+u]-e;let f=0;for(let p=0;p<u;++p){const g=c[p+1],m=l[u-p];a[u][p]=g+m;const d=a[p][u-1]/a[u][p];a[p][u]=f+g*d,f=m*d}a[u][u]=f}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let f=0,p=1;const g=[];for(let m=0;m<=t;++m)g[m]=s.slice(0);g[0][0]=1;for(let m=1;m<=n;++m){let d=0;const v=u-m,x=t-m;u>=m&&(g[p][0]=g[f][0]/a[x+1][v],d=g[p][0]*a[v][x]);const w=v>=-1?1:-v,_=u-1<=x?m-1:t-u;for(let b=w;b<=_;++b)g[p][b]=(g[f][b]-g[f][b-1])/a[x+1][v+b],d+=g[p][b]*a[v+b][x];u<=x&&(g[p][m]=-g[f][m-1]/a[x+1][u],d+=g[p][m]*a[u][x]),o[m][u]=d;const M=f;f=p,p=M}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)o[u][f]*=h;h*=t-u}return o}function by(r,e,t,n,i){const s=i<r?i:r,o=[],a=cf(r,n,e),l=wy(a,n,r,s,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(let h=0;h<=s;++h){const u=c[a-r].clone().multiplyScalar(l[h][0]);for(let f=1;f<=r;++f)u.add(c[a-r+f].clone().multiplyScalar(l[h][f]));o[h]=u}for(let h=s+1;h<=i+1;++h)o[h]=new Xe(0,0,0);return o}function Sy(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function Ty(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const o=r[s];t[s]=new D(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(Sy(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function Ey(r,e,t,n,i){const s=by(r,e,t,n,i);return Ty(s)}class Cu extends an{constructor(e,t,n,i,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Xe(a.x,a.y,a.z,a.w)}}getPoint(e,t=new D){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=My(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new D){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Ey(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let Ne,at,Dt;class Ay extends kn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=s.path===""?pn.extractUrlBase(e):s.path,a=new As(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(Dy(e))Ne=new Iy().parse(e);else{const i=df(e);if(!Fy(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Ru(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Ru(i));Ne=new Ry().parse(i)}const n=new ai(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Ly(n,this.manager).parse(Ne)}}class Ly{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){at=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new Cy().parse(i);return this.parseScene(i,s,n),Dt}parseConnections(){const e=new Map;return"Connections"in Ne&&Ne.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(i).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ne.Objects){const n=Ne.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ne.Objects){const n=Ne.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?ni:Nt,n.wrapT=a===0?ni:Nt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,s=at.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new wt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new wt):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(e){const t=new Map;if("Material"in Ne.Objects){const n=Ne.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!at.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new io;break;case"lambert":a=new Mx;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new io;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Ee().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Ee().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Ee().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Ee().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Ee().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Ee().fromArray(e.SpecularColor.value));const s=this;return at.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,o.ID),i.map!==void 0&&(i.map.encoding=Ge);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=Ge);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=lo,i.envMap.encoding=Ge);break;case"SpecularColor":i.specularMap=s.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.encoding=Ge);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Ne.Objects&&t in Ne.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=at.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ne.Objects){const n=Ne.Objects.Deformer;for(const i in n){const s=n[i],o=at.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ae().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=at.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Dt=new rn;const i=this.parseModels(e.skeletons,t,n),s=Ne.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),at.get(l.ID).parents.forEach(function(u){const f=i.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&Dt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Dt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=hf(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new Py().parse();Dt.children.length===1&&Dt.children[0].isGroup&&(Dt.children[0].animations=a,Dt=Dt.children[0]),Dt.animations=a}parseModels(e,t,n){const i=new Map,s=Ne.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=at.get(a);let h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new ho;break;case"Null":default:h=new rn;break}h.name=l.attrName?He.sanitizeNodeName(l.attrName):"",h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const u=s;s=new ho,s.matrixWorld.copy(c.transformLink),s.name=i?He.sanitizeNodeName(i):"",s.ID=n,l.bones[h]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=Ne.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new nt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Tt(h,c,s,o),u!==null&&t.setFocalLength(u);break;case 1:t=new Eo(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new nt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=Ne.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new nt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Ee().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new fo(s,o,a,l);break;case 1:t=new Lh(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=nn.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=nn.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new Ah(s,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new fo(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new io({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new mh(s,o),i.normalizeSkinWeights()):i=new Je(s,o),i}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),i=new os({color:3342591,linewidth:1});return new Co(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=ff(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&at.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Ne.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Dt.add(e.target)):e.lookAt(new D().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const o=e[s];at.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;at.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new Lo(o.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ne.Objects){const t=Ne.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Ae().fromArray(s.Matrix.a)}):e[i.Node]=new Ae().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ne&&"AmbientColor"in Ne.GlobalSettings){const e=Ne.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new Ee(t,n,i);Dt.add(new Do(s,1))}}}}class Cy{parse(e){const t=new Map;if("Geometry"in Ne.Objects){const n=Ne.Objects.Geometry;for(const i in n){const s=at.get(parseInt(i)),o=this.parseGeometry(s,n[i],e);t.set(parseInt(i),o)}}return t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],o=e.parents.map(function(u){return Ne.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,f){return i[f.ID]!==void 0&&(u=i[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&s.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=ff(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=hf(c);return this.genGeometry(t,a,s,h)}genGeometry(e,t,n,i){const s=new rt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new ke(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new ke(a.colors,3)),t&&(s.setAttribute("skinIndex",new ll(a.weightsIndices,4)),s.setAttribute("skinWeight",new ke(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new dt().getNormalMatrix(i),h=new ke(a.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){let u="uv"+(h+1).toString();h===0&&(u="uv"),s.setAttribute(u,new ke(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,f){u!==c&&(s.addGroup(h,f-h,c),c=u,h=f)}),s.groups.length>0){const u=s.groups[s.groups.length-1],f=u.start+u.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],l=[],c=[],h=[],u=[];const f=this;return e.vertexIndices.forEach(function(p,g){let m,d=!1;p<0&&(p=p^-1,d=!0);let v=[],x=[];if(o.push(p*3,p*3+1,p*3+2),e.color){const w=$r(g,n,p,e.color);l.push(w[0],w[1],w[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(w){x.push(w.weight),v.push(w.id)}),x.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const w=[0,0,0,0],_=[0,0,0,0];x.forEach(function(M,b){let E=M,y=v[b];_.forEach(function(A,k,V){if(E>A){V[k]=E,E=A;const X=w[k];w[k]=y,y=X}})}),v=w,x=_}for(;x.length<4;)x.push(0),v.push(0);for(let w=0;w<4;++w)h.push(x[w]),u.push(v[w])}if(e.normal){const w=$r(g,n,p,e.normal);a.push(w[0],w[1],w[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=$r(g,n,p,e.material)[0]),e.uv&&e.uv.forEach(function(w,_){const M=$r(g,n,p,w);c[_]===void 0&&(c[_]=[]),c[_].push(M[0]),c[_].push(M[1])}),i++,d&&(f.genFace(t,e,o,m,a,l,c,h,u,i),n++,i=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}genFace(e,t,n,i,s,o,a,l,c,h){for(let u=2;u<h;u++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(u-1)*3]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+2]]),e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(u-1)*4]),e.vertexWeights.push(l[(u-1)*4+1]),e.vertexWeights.push(l[(u-1)*4+2]),e.vertexWeights.push(l[(u-1)*4+3]),e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(u-1)*4]),e.weightsIndices.push(c[(u-1)*4+1]),e.weightsIndices.push(c[(u-1)*4+2]),e.weightsIndices.push(c[(u-1)*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(u-1)*3]),e.colors.push(o[(u-1)*3+1]),e.colors.push(o[(u-1)*3+2]),e.colors.push(o[u*3]),e.colors.push(o[u*3+1]),e.colors.push(o[u*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(u-1)*3]),e.normal.push(s[(u-1)*3+1]),e.normal.push(s[(u-1)*3+2]),e.normal.push(s[u*3]),e.normal.push(s[u*3+1]),e.normal.push(s[u*3+2])),t.uv&&t.uv.forEach(function(f,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][0]),e.uvs[p].push(a[p][1]),e.uvs[p].push(a[p][(u-1)*2]),e.uvs[p].push(a[p][(u-1)*2+1]),e.uvs[p].push(a[p][u*2]),e.uvs[p].push(a[p][u*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ne.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let g=0;g<l.length;g++){const m=l[g]*3;h[m]=a[g*3],h[m+1]=a[g*3+1],h[m+2]=a[g*3+2]}const u={vertexIndices:o,vertexPositions:h},f=this.genBuffers(u),p=new ke(f.vertex,3);p.name=s||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if(Cu===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new rt;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new rt;const n=t-1,i=e.KnotVector.a,s=[],o=e.Points.a;for(let u=0,f=o.length;u<f;u+=4)s.push(new Xe().fromArray(o,u));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)s.push(s[u])}const h=new Cu(n,i,s,a,l).getPoints(s.length*12);return new rt().setFromPoints(h)}}class Py{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(Ne.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ne.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ne.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(Ny),values:t[n].KeyValueFloat.a},s=at.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Ne.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],o=at.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const u=at.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){const f=Ne.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:f.attrName?He.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Dt.traverse(function(g){g.ID===f.id&&(p.transform=g.matrix,g.userData.transformData&&(p.eulerOrder=g.userData.transformData.eulerOrder))}),p.transform||(p.transform=new Ae),"PreRotation"in f&&(p.preRotation=f.PreRotation.value),"PostRotation"in f&&(p.postRotation=f.PostRotation.value),s[c]=p}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const u=at.get(l.ID).parents.filter(function(v){return v.relationship!==void 0})[0].ID,f=at.get(u).parents[0].ID,p=at.get(f).parents[0].ID,g=at.get(p).parents[0].ID,m=Ne.Objects.Model[g],d={modelName:m.attrName?He.sanitizeNodeName(m.attrName):"",morphName:Ne.Objects.Deformer[u].attrName};s[c]=d}s[c][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=Ne.Objects.AnimationStack,n={};for(const i in t){const s=at.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Eh(e.name,-1,t)}generateTracks(e){const t=[];let n=new D,i=new Gt,s=new D;if(e.transform&&e.transform.decompose(n,i,s),n=n.toArray(),i=new dn().setFromQuaternion(i,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new ms(e+"."+i,s,o)}generateRotationTrack(e,t,n,i,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(nn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(nn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(nn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);i!==void 0&&(i=i.map(nn.degToRad),i.push(o),i=new dn().fromArray(i),i=new Gt().setFromEuler(i)),s!==void 0&&(s=s.map(nn.degToRad),s.push(o),s=new dn().fromArray(s),s=new Gt().setFromEuler(s).invert());const c=new Gt,h=new dn,u=[];for(let f=0;f<l.length;f+=3)h.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(h),i!==void 0&&c.premultiply(i),s!==void 0&&c.multiply(s),c.toArray(u,f/3*4);return new ri(e+".quaternion",a,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=Dt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ps(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const h=t.x.values[o];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=t.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(l!==-1){const h=t.z.values[l];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,s=Math.abs(i);if(s>=180){const o=s/180,a=i/o;let l=n+a;const c=e.times[t-1],u=(e.times[t]-c)/o;let f=c+u;const p=[],g=[];for(;f<e.times[t];)p.push(f),f+=u,g.push(l),l+=a;e.times=Iu(e.times,t,p),e.values=Iu(e.values,t,g)}}}}class Ry{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new uf,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",s=[c,h],ky(s,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=Ea(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Ea(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Ea(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class Iy{parse(e){const t=new Pu(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new uf;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}typeof yy>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const a=fr(new Uint8Array(e.getArrayBuffer(o))),l=new Pu(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Pu{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let i=0;i<e;i++)t[i]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),pn.decodeText(new Uint8Array(t))}}class uf{add(e,t){this[e]=t}}function Dy(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===df(r,0,e.length)}function Fy(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Ru(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Ny(r){return r/46186158e3}const Oy=[];function $r(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return zy(Oy,n.buffer,s,o)}const Ta=new dn,Zi=new D;function hf(r){const e=new Ae,t=new Ae,n=new Ae,i=new Ae,s=new Ae,o=new Ae,a=new Ae,l=new Ae,c=new Ae,h=new Ae,u=new Ae,f=new Ae,p=r.inheritType?r.inheritType:0;if(r.translation&&e.setPosition(Zi.fromArray(r.translation)),r.preRotation){const k=r.preRotation.map(nn.degToRad);k.push(r.eulerOrder),t.makeRotationFromEuler(Ta.fromArray(k))}if(r.rotation){const k=r.rotation.map(nn.degToRad);k.push(r.eulerOrder),n.makeRotationFromEuler(Ta.fromArray(k))}if(r.postRotation){const k=r.postRotation.map(nn.degToRad);k.push(r.eulerOrder),i.makeRotationFromEuler(Ta.fromArray(k)),i.invert()}r.scale&&s.scale(Zi.fromArray(r.scale)),r.scalingOffset&&a.setPosition(Zi.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(Zi.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Zi.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(Zi.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(u.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),m=new Ae;m.extractRotation(h);const d=new Ae;d.copyPosition(h);const v=d.clone().invert().multiply(h),x=m.clone().invert().multiply(v),w=s,_=new Ae;if(p===0)_.copy(m).multiply(g).multiply(x).multiply(w);else if(p===1)_.copy(m).multiply(x).multiply(g).multiply(w);else{const V=new Ae().scale(new D().setFromMatrixScale(u)).clone().invert(),X=x.clone().multiply(V);_.copy(m).multiply(g).multiply(X).multiply(w)}const M=c.clone().invert(),b=o.clone().invert();let E=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(M).multiply(a).multiply(o).multiply(s).multiply(b);const y=new Ae().copyPosition(E),A=h.clone().multiply(y);return f.copyPosition(A),E=f.clone().multiply(_),E.premultiply(h.invert()),E}function ff(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Ea(r){return r.split(",").map(function(t){return parseFloat(t)})}function df(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),pn.decodeText(new Uint8Array(r,e,t))}function ky(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function zy(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}function Iu(r,e,t){return r.slice(0,e).concat(t).concat(r.slice(e))}const By=/^[og]\s*(.+)?/,Uy=/^mtllib /,Vy=/^usemtl /,Gy=/^usemap /,Du=/\s+/,Fu=new D,Aa=new D,Nu=new D,Ou=new D,Xt=new D,Qr=new Ee;function Hy(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;Fu.fromArray(i,e),Aa.fromArray(i,t),Nu.fromArray(i,n),Xt.subVectors(Nu,Aa),Ou.subVectors(Fu,Aa),Xt.cross(Ou),Xt.normalize(),s.push(Xt.x,Xt.y,Xt.z),s.push(Xt.x,Xt.y,Xt.z),s.push(Xt.x,Xt.y,Xt.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),a!==void 0&&a!==""){const g=this.normals.length;u=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(i!==void 0&&i!==""){const g=this.uvs.length;u=this.parseUVIndex(i,g),f=this.parseUVIndex(s,g),p=this.parseUVIndex(o,g),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class Wy extends kn{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new As(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Hy;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(Du);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Qr.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),t.colors.push(Qr.r,Qr.g,Qr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(Du),p=[];for(let m=0,d=f.length;m<d;m++){const v=f[m];if(v.length>0){const x=v.split("/");p.push(x)}}const g=p[0];for(let m=1,d=p.length-1;m<d;m++){const v=p[m],x=p[m+1];t.addFace(g[0],v[0],x[0],g[1],v[1],x[1],g[2],v[2],x[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=u;else for(let g=0,m=u.length;g<m;g++){const d=u[g].split("/");d[0]!==""&&f.push(d[0]),d[1]!==""&&p.push(d[1])}t.addLineGeometry(f,p)}else if(h==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=By.exec(c))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(Vy.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Uy.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Gy.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new rn;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",p=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const m=new rt;m.setAttribute("position",new ke(h.vertices,3)),h.normals.length>0&&m.setAttribute("normal",new ke(h.normals,3)),h.colors.length>0&&(g=!0,m.setAttribute("color",new ke(h.colors,3))),h.hasUVIndices===!0&&m.setAttribute("uv",new ke(h.uvs,2));const d=[];for(let x=0,w=u.length;x<w;x++){const _=u[x],M=_.name+"_"+_.smooth+"_"+g;let b=t.materials[M];if(this.materials!==null){if(b=this.materials.create(_.name),f&&b&&!(b instanceof os)){const E=new os;kt.prototype.copy.call(E,b),E.color.copy(b.color),b=E}else if(p&&b&&!(b instanceof ns)){const E=new ns({size:10,sizeAttenuation:!1});kt.prototype.copy.call(E,b),E.color.copy(b.color),E.map=b.map,b=E}}b===void 0&&(f?b=new os:p?b=new ns({size:1,sizeAttenuation:!1}):b=new io,b.name=_.name,b.flatShading=!_.smooth,b.vertexColors=g,t.materials[M]=b),d.push(b)}let v;if(d.length>1){for(let x=0,w=u.length;x<w;x++){const _=u[x];m.addGroup(_.groupStart,_.groupCount,x)}f?v=new Ua(m,d):p?v=new Js(m,d):v=new Je(m,d)}else f?v=new Ua(m,d[0]):p?v=new Js(m,d[0]):v=new Je(m,d[0]);v.name=c.name,s.add(v)}else if(t.vertices.length>0){const a=new ns({size:1,sizeAttenuation:!1}),l=new rt;l.setAttribute("position",new ke(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new ke(t.colors,3)),a.vertexColors=!0);const c=new Js(l,a);s.add(c)}return s}}class Fo extends kn{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const s=this,o=new As(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(F,R){if(F.nodeType!==1)return;const S=_(F);let N=!1,O=null;switch(F.nodeName){case"svg":R=g(F,R);break;case"style":s(F);break;case"g":R=g(F,R);break;case"path":R=g(F,R),F.hasAttribute("d")&&(O=i(F));break;case"rect":R=g(F,R),O=l(F);break;case"polygon":R=g(F,R),O=c(F);break;case"polyline":R=g(F,R),O=h(F);break;case"circle":R=g(F,R),O=u(F);break;case"ellipse":R=g(F,R),O=f(F);break;case"line":R=g(F,R),O=p(F);break;case"defs":N=!0;break;case"use":R=g(F,R);const ce=(F.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),te=F.viewportElement.getElementById(ce);te?n(te,R):console.warn("SVGLoader: 'use node' references non-existent node id: "+ce);break}O&&(R.fill!==void 0&&R.fill!=="none"&&O.color.setStyle(R.fill),b(O,j),k.push(O),O.userData={node:F,style:R});const U=F.childNodes;for(let Q=0;Q<U.length;Q++){const ce=U[Q];N&&ce.nodeName!=="style"&&ce.nodeName!=="defs"||n(ce,R)}S&&(X.pop(),X.length>0?j.copy(X[X.length-1]):j.identity())}function i(F){const R=new Jn,S=new oe,N=new oe,O=new oe;let U=!0,Q=!1;const te=F.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);for(let de=0,ae=te.length;de<ae;de++){const pe=te[de],ue=pe.charAt(0),ge=pe.slice(1).trim();U===!0&&(Q=!0,U=!1);let G;switch(ue){case"M":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=2)S.x=G[I+0],S.y=G[I+1],N.x=S.x,N.y=S.y,I===0?R.moveTo(S.x,S.y):R.lineTo(S.x,S.y),I===0&&O.copy(S);break;case"H":G=d(ge);for(let I=0,ye=G.length;I<ye;I++)S.x=G[I],N.x=S.x,N.y=S.y,R.lineTo(S.x,S.y),I===0&&Q===!0&&O.copy(S);break;case"V":G=d(ge);for(let I=0,ye=G.length;I<ye;I++)S.y=G[I],N.x=S.x,N.y=S.y,R.lineTo(S.x,S.y),I===0&&Q===!0&&O.copy(S);break;case"L":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=2)S.x=G[I+0],S.y=G[I+1],N.x=S.x,N.y=S.y,R.lineTo(S.x,S.y),I===0&&Q===!0&&O.copy(S);break;case"C":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=6)R.bezierCurveTo(G[I+0],G[I+1],G[I+2],G[I+3],G[I+4],G[I+5]),N.x=G[I+2],N.y=G[I+3],S.x=G[I+4],S.y=G[I+5],I===0&&Q===!0&&O.copy(S);break;case"S":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=4)R.bezierCurveTo(m(S.x,N.x),m(S.y,N.y),G[I+0],G[I+1],G[I+2],G[I+3]),N.x=G[I+0],N.y=G[I+1],S.x=G[I+2],S.y=G[I+3],I===0&&Q===!0&&O.copy(S);break;case"Q":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=4)R.quadraticCurveTo(G[I+0],G[I+1],G[I+2],G[I+3]),N.x=G[I+0],N.y=G[I+1],S.x=G[I+2],S.y=G[I+3],I===0&&Q===!0&&O.copy(S);break;case"T":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=2){const Te=m(S.x,N.x),Be=m(S.y,N.y);R.quadraticCurveTo(Te,Be,G[I+0],G[I+1]),N.x=Te,N.y=Be,S.x=G[I+0],S.y=G[I+1],I===0&&Q===!0&&O.copy(S)}break;case"A":G=d(ge,[3,4],7);for(let I=0,ye=G.length;I<ye;I+=7){if(G[I+5]==S.x&&G[I+6]==S.y)continue;const Te=S.clone();S.x=G[I+5],S.y=G[I+6],N.x=S.x,N.y=S.y,o(R,G[I],G[I+1],G[I+2],G[I+3],G[I+4],Te,S),I===0&&Q===!0&&O.copy(S)}break;case"m":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=2)S.x+=G[I+0],S.y+=G[I+1],N.x=S.x,N.y=S.y,I===0?R.moveTo(S.x,S.y):R.lineTo(S.x,S.y),I===0&&O.copy(S);break;case"h":G=d(ge);for(let I=0,ye=G.length;I<ye;I++)S.x+=G[I],N.x=S.x,N.y=S.y,R.lineTo(S.x,S.y),I===0&&Q===!0&&O.copy(S);break;case"v":G=d(ge);for(let I=0,ye=G.length;I<ye;I++)S.y+=G[I],N.x=S.x,N.y=S.y,R.lineTo(S.x,S.y),I===0&&Q===!0&&O.copy(S);break;case"l":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=2)S.x+=G[I+0],S.y+=G[I+1],N.x=S.x,N.y=S.y,R.lineTo(S.x,S.y),I===0&&Q===!0&&O.copy(S);break;case"c":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=6)R.bezierCurveTo(S.x+G[I+0],S.y+G[I+1],S.x+G[I+2],S.y+G[I+3],S.x+G[I+4],S.y+G[I+5]),N.x=S.x+G[I+2],N.y=S.y+G[I+3],S.x+=G[I+4],S.y+=G[I+5],I===0&&Q===!0&&O.copy(S);break;case"s":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=4)R.bezierCurveTo(m(S.x,N.x),m(S.y,N.y),S.x+G[I+0],S.y+G[I+1],S.x+G[I+2],S.y+G[I+3]),N.x=S.x+G[I+0],N.y=S.y+G[I+1],S.x+=G[I+2],S.y+=G[I+3],I===0&&Q===!0&&O.copy(S);break;case"q":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=4)R.quadraticCurveTo(S.x+G[I+0],S.y+G[I+1],S.x+G[I+2],S.y+G[I+3]),N.x=S.x+G[I+0],N.y=S.y+G[I+1],S.x+=G[I+2],S.y+=G[I+3],I===0&&Q===!0&&O.copy(S);break;case"t":G=d(ge);for(let I=0,ye=G.length;I<ye;I+=2){const Te=m(S.x,N.x),Be=m(S.y,N.y);R.quadraticCurveTo(Te,Be,S.x+G[I+0],S.y+G[I+1]),N.x=Te,N.y=Be,S.x=S.x+G[I+0],S.y=S.y+G[I+1],I===0&&Q===!0&&O.copy(S)}break;case"a":G=d(ge,[3,4],7);for(let I=0,ye=G.length;I<ye;I+=7){if(G[I+5]==0&&G[I+6]==0)continue;const Te=S.clone();S.x+=G[I+5],S.y+=G[I+6],N.x=S.x,N.y=S.y,o(R,G[I],G[I+1],G[I+2],G[I+3],G[I+4],Te,S),I===0&&Q===!0&&O.copy(S)}break;case"Z":case"z":R.currentPath.autoClose=!0,R.currentPath.curves.length>0&&(S.copy(O),R.currentPath.currentPoint.copy(S),U=!0);break;default:console.warn(pe)}Q=!1}return R}function s(F){if(!(!F.sheet||!F.sheet.cssRules||!F.sheet.cssRules.length))for(let R=0;R<F.sheet.cssRules.length;R++){const S=F.sheet.cssRules[R];if(S.type!==1)continue;const N=S.selectorText.split(/,/gm).filter(Boolean).map(O=>O.trim());for(let O=0;O<N.length;O++){const U=Object.fromEntries(Object.entries(S.style).filter(([,Q])=>Q!==""));V[N[O]]=Object.assign(V[N[O]]||{},U)}}}function o(F,R,S,N,O,U,Q,ce){if(R==0||S==0){F.lineTo(ce.x,ce.y);return}N=N*Math.PI/180,R=Math.abs(R),S=Math.abs(S);const te=(Q.x-ce.x)/2,de=(Q.y-ce.y)/2,ae=Math.cos(N)*te+Math.sin(N)*de,pe=-Math.sin(N)*te+Math.cos(N)*de;let ue=R*R,ge=S*S;const G=ae*ae,I=pe*pe,ye=G/ue+I/ge;if(ye>1){const Le=Math.sqrt(ye);R=Le*R,S=Le*S,ue=R*R,ge=S*S}const Te=ue*I+ge*G,Be=(ue*ge-Te)/Te;let Ze=Math.sqrt(Math.max(0,Be));O===U&&(Ze=-Ze);const P=Ze*R*pe/S,T=-Ze*S*ae/R,ne=Math.cos(N)*P-Math.sin(N)*T+(Q.x+ce.x)/2,he=Math.sin(N)*P+Math.cos(N)*T+(Q.y+ce.y)/2,fe=a(1,0,(ae-P)/R,(pe-T)/S),_e=a((ae-P)/R,(pe-T)/S,(-ae-P)/R,(-pe-T)/S)%(Math.PI*2);F.currentPath.absellipse(ne,he,R,S,fe,fe+_e,U===0,N)}function a(F,R,S,N){const O=F*S+R*N,U=Math.sqrt(F*F+R*R)*Math.sqrt(S*S+N*N);let Q=Math.acos(Math.max(-1,Math.min(1,O/U)));return F*N-R*S<0&&(Q=-Q),Q}function l(F){const R=w(F.getAttribute("x")||0),S=w(F.getAttribute("y")||0),N=w(F.getAttribute("rx")||F.getAttribute("ry")||0),O=w(F.getAttribute("ry")||F.getAttribute("rx")||0),U=w(F.getAttribute("width")),Q=w(F.getAttribute("height")),ce=1-.551915024494,te=new Jn;return te.moveTo(R+N,S),te.lineTo(R+U-N,S),(N!==0||O!==0)&&te.bezierCurveTo(R+U-N*ce,S,R+U,S+O*ce,R+U,S+O),te.lineTo(R+U,S+Q-O),(N!==0||O!==0)&&te.bezierCurveTo(R+U,S+Q-O*ce,R+U-N*ce,S+Q,R+U-N,S+Q),te.lineTo(R+N,S+Q),(N!==0||O!==0)&&te.bezierCurveTo(R+N*ce,S+Q,R,S+Q-O*ce,R,S+Q-O),te.lineTo(R,S+O),(N!==0||O!==0)&&te.bezierCurveTo(R,S+O*ce,R+N*ce,S,R+N,S),te}function c(F){function R(U,Q,ce){const te=w(Q),de=w(ce);O===0?N.moveTo(te,de):N.lineTo(te,de),O++}const S=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,N=new Jn;let O=0;return F.getAttribute("points").replace(S,R),N.currentPath.autoClose=!0,N}function h(F){function R(U,Q,ce){const te=w(Q),de=w(ce);O===0?N.moveTo(te,de):N.lineTo(te,de),O++}const S=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,N=new Jn;let O=0;return F.getAttribute("points").replace(S,R),N.currentPath.autoClose=!1,N}function u(F){const R=w(F.getAttribute("cx")||0),S=w(F.getAttribute("cy")||0),N=w(F.getAttribute("r")||0),O=new as;O.absarc(R,S,N,0,Math.PI*2);const U=new Jn;return U.subPaths.push(O),U}function f(F){const R=w(F.getAttribute("cx")||0),S=w(F.getAttribute("cy")||0),N=w(F.getAttribute("rx")||0),O=w(F.getAttribute("ry")||0),U=new as;U.absellipse(R,S,N,O,0,Math.PI*2);const Q=new Jn;return Q.subPaths.push(U),Q}function p(F){const R=w(F.getAttribute("x1")||0),S=w(F.getAttribute("y1")||0),N=w(F.getAttribute("x2")||0),O=w(F.getAttribute("y2")||0),U=new Jn;return U.moveTo(R,S),U.lineTo(N,O),U.currentPath.autoClose=!1,U}function g(F,R){R=Object.assign({},R);let S={};if(F.hasAttribute("class")){const Q=F.getAttribute("class").split(/\s/).filter(Boolean).map(ce=>ce.trim());for(let ce=0;ce<Q.length;ce++)S=Object.assign(S,V["."+Q[ce]])}F.hasAttribute("id")&&(S=Object.assign(S,V["#"+F.getAttribute("id")]));function N(Q,ce,te){te===void 0&&(te=function(ae){return ae.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),ae}),F.hasAttribute(Q)&&(R[ce]=te(F.getAttribute(Q))),S[Q]&&(R[ce]=te(S[Q])),F.style&&F.style[Q]!==""&&(R[ce]=te(F.style[Q]))}function O(Q){return Math.max(0,Math.min(1,w(Q)))}function U(Q){return Math.max(0,w(Q))}return N("fill","fill"),N("fill-opacity","fillOpacity",O),N("fill-rule","fillRule"),N("opacity","opacity",O),N("stroke","stroke"),N("stroke-opacity","strokeOpacity",O),N("stroke-width","strokeWidth",U),N("stroke-linejoin","strokeLineJoin"),N("stroke-linecap","strokeLineCap"),N("stroke-miterlimit","strokeMiterLimit",U),N("visibility","visibility"),R}function m(F,R){return F-(R-F)}function d(F,R,S){if(typeof F!="string")throw new TypeError("Invalid input: "+typeof F);const N={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},O=0,U=1,Q=2,ce=3;let te=O,de=!0,ae="",pe="";const ue=[];function ge(Te,Be,Ze){const P=new SyntaxError('Unexpected character "'+Te+'" at index '+Be+".");throw P.partial=Ze,P}function G(){ae!==""&&(pe===""?ue.push(Number(ae)):ue.push(Number(ae)*Math.pow(10,Number(pe)))),ae="",pe=""}let I;const ye=F.length;for(let Te=0;Te<ye;Te++){if(I=F[Te],Array.isArray(R)&&R.includes(ue.length%S)&&N.FLAGS.test(I)){te=U,ae=I,G();continue}if(te===O){if(N.WHITESPACE.test(I))continue;if(N.DIGIT.test(I)||N.SIGN.test(I)){te=U,ae=I;continue}if(N.POINT.test(I)){te=Q,ae=I;continue}N.COMMA.test(I)&&(de&&ge(I,Te,ue),de=!0)}if(te===U){if(N.DIGIT.test(I)){ae+=I;continue}if(N.POINT.test(I)){ae+=I,te=Q;continue}if(N.EXP.test(I)){te=ce;continue}N.SIGN.test(I)&&ae.length===1&&N.SIGN.test(ae[0])&&ge(I,Te,ue)}if(te===Q){if(N.DIGIT.test(I)){ae+=I;continue}if(N.EXP.test(I)){te=ce;continue}N.POINT.test(I)&&ae[ae.length-1]==="."&&ge(I,Te,ue)}if(te===ce){if(N.DIGIT.test(I)){pe+=I;continue}if(N.SIGN.test(I)){if(pe===""){pe+=I;continue}pe.length===1&&N.SIGN.test(pe)&&ge(I,Te,ue)}}N.WHITESPACE.test(I)?(G(),te=O,de=!1):N.COMMA.test(I)?(G(),te=O,de=!0):N.SIGN.test(I)?(G(),te=U,ae=I):N.POINT.test(I)?(G(),te=Q,ae=I):ge(I,Te,ue)}return G(),ue}const v=["mm","cm","in","pt","pc","px"],x={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function w(F){let R="px";if(typeof F=="string"||F instanceof String)for(let N=0,O=v.length;N<O;N++){const U=v[N];if(F.endsWith(U)){R=U,F=F.substring(0,F.length-U.length);break}}let S;return R==="px"&&t.defaultUnit!=="px"?S=x.in[t.defaultUnit]/t.defaultDPI:(S=x[R][t.defaultUnit],S<0&&(S=x[R].in*t.defaultDPI)),S*parseFloat(F)}function _(F){if(!(F.hasAttribute("transform")||F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))))return null;const R=M(F);return X.length>0&&R.premultiply(X[X.length-1]),j.copy(R),X.push(R),R}function M(F){const R=new dt,S=K;if(F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))){const N=w(F.getAttribute("x")),O=w(F.getAttribute("y"));R.translate(N,O)}if(F.hasAttribute("transform")){const N=F.getAttribute("transform").split(")");for(let O=N.length-1;O>=0;O--){const U=N[O].trim();if(U==="")continue;const Q=U.indexOf("("),ce=U.length;if(Q>0&&Q<ce){const te=U.slice(0,Q),de=d(U.slice(Q+1));switch(S.identity(),te){case"translate":if(de.length>=1){const ae=de[0];let pe=ae;de.length>=2&&(pe=de[1]),S.translate(ae,pe)}break;case"rotate":if(de.length>=1){let ae=0,pe=0,ue=0;ae=-de[0]*Math.PI/180,de.length>=3&&(pe=de[1],ue=de[2]),z.identity().translate(-pe,-ue),Y.identity().rotate(ae),q.multiplyMatrices(Y,z),z.identity().translate(pe,ue),S.multiplyMatrices(z,q)}break;case"scale":if(de.length>=1){const ae=de[0];let pe=ae;de.length>=2&&(pe=de[1]),S.scale(ae,pe)}break;case"skewX":de.length===1&&S.set(1,Math.tan(de[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":de.length===1&&S.set(1,0,0,Math.tan(de[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":de.length===6&&S.set(de[0],de[2],de[4],de[1],de[3],de[5],0,0,1);break}}R.premultiply(S)}}return R}function b(F,R){function S(U){B.set(U.x,U.y,1).applyMatrix3(R),U.set(B.x,B.y)}const N=E(R),O=F.subPaths;for(let U=0,Q=O.length;U<Q;U++){const te=O[U].curves;for(let de=0;de<te.length;de++){const ae=te[de];ae.isLineCurve?(S(ae.v1),S(ae.v2)):ae.isCubicBezierCurve?(S(ae.v0),S(ae.v1),S(ae.v2),S(ae.v3)):ae.isQuadraticBezierCurve?(S(ae.v0),S(ae.v1),S(ae.v2)):ae.isEllipseCurve&&(N&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),W.set(ae.aX,ae.aY),S(W),ae.aX=W.x,ae.aY=W.y,ae.xRadius*=y(R),ae.yRadius*=A(R))}}}function E(F){return F.elements[1]!==0||F.elements[3]!==0}function y(F){const R=F.elements;return Math.sqrt(R[0]*R[0]+R[1]*R[1])}function A(F){const R=F.elements;return Math.sqrt(R[3]*R[3]+R[4]*R[4])}const k=[],V={},X=[],K=new dt,z=new dt,Y=new dt,q=new dt,W=new oe,B=new D,j=new dt,Z=new DOMParser().parseFromString(e,"image/svg+xml");return n(Z.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:k,xml:Z.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(d,v,x,w){const _=d.x,M=v.x,b=x.x,E=w.x,y=d.y,A=v.y,k=x.y,V=w.y,X=(E-b)*(y-k)-(V-k)*(_-b),K=(M-_)*(y-k)-(A-y)*(_-b),z=(V-k)*(M-_)-(E-b)*(A-y),Y=X/z,q=K/z;if(z===0&&X!==0||Y<=0||Y>=1||q<0||q>1)return null;if(X===0&&z===0){for(let W=0;W<2;W++)if(o(W===0?x:w,d,v),i.loc==n.ORIGIN){const B=W===0?x:w;return{x:B.x,y:B.y,t:i.t}}else if(i.loc==n.BETWEEN){const B=+(_+i.t*(M-_)).toPrecision(10),j=+(y+i.t*(A-y)).toPrecision(10);return{x:B,y:j,t:i.t}}return null}else{for(let j=0;j<2;j++)if(o(j===0?x:w,d,v),i.loc==n.ORIGIN){const Z=j===0?x:w;return{x:Z.x,y:Z.y,t:i.t}}const W=+(_+Y*(M-_)).toPrecision(10),B=+(y+Y*(A-y)).toPrecision(10);return{x:W,y:B,t:Y}}}function o(d,v,x){const w=x.x-v.x,_=x.y-v.y,M=d.x-v.x,b=d.y-v.y,E=w*b-M*_;if(d.x===v.x&&d.y===v.y){i.loc=n.ORIGIN,i.t=0;return}if(d.x===x.x&&d.y===x.y){i.loc=n.DESTINATION,i.t=1;return}if(E<-Number.EPSILON){i.loc=n.LEFT;return}if(E>Number.EPSILON){i.loc=n.RIGHT;return}if(w*M<0||_*b<0){i.loc=n.BEHIND;return}if(Math.sqrt(w*w+_*_)<Math.sqrt(M*M+b*b)){i.loc=n.BEYOND;return}let y;w!==0?y=M/w:y=b/_,i.loc=n.BETWEEN,i.t=y}function a(d,v){const x=[],w=[];for(let _=1;_<d.length;_++){const M=d[_-1],b=d[_];for(let E=1;E<v.length;E++){const y=v[E-1],A=v[E],k=s(M,b,y,A);k!==null&&x.find(V=>V.t<=k.t+Number.EPSILON&&V.t>=k.t-Number.EPSILON)===void 0&&(x.push(k),w.push(new oe(k.x,k.y)))}}return w}function l(d,v,x){const w=new oe;v.getCenter(w);const _=[];return x.forEach(M=>{M.boundingBox.containsPoint(w)&&a(d,M.points).forEach(E=>{_.push({identifier:M.identifier,isCW:M.isCW,point:E})})}),_.sort((M,b)=>M.point.x-b.point.x),_}function c(d,v,x,w,_){(_==null||_==="")&&(_="nonzero");const M=new oe;d.boundingBox.getCenter(M);const b=[new oe(x,M.y),new oe(w,M.y)],E=l(b,d.boundingBox,v);E.sort((K,z)=>K.point.x-z.point.x);const y=[],A=[];E.forEach(K=>{K.identifier===d.identifier?y.push(K):A.push(K)});const k=y[0].point.x,V=[];let X=0;for(;X<A.length&&A[X].point.x<k;)V.length>0&&V[V.length-1]===A[X].identifier?V.pop():V.push(A[X].identifier),X++;if(V.push(d.identifier),_==="evenodd"){const K=V.length%2===0,z=V[V.length-2];return{identifier:d.identifier,isHole:K,for:z}}else if(_==="nonzero"){let K=!0,z=null,Y=null;for(let q=0;q<V.length;q++){const W=V[q];K?(Y=v[W].isCW,K=!1,z=W):Y!==v[W].isCW&&(Y=v[W].isCW,K=!0)}return{identifier:d.identifier,isHole:K,for:z}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=0,u=999999999,f=-999999999,p=e.subPaths.map(d=>{const v=d.getPoints();let x=-999999999,w=999999999,_=-999999999,M=999999999;for(let b=0;b<v.length;b++){const E=v[b];E.y>x&&(x=E.y),E.y<w&&(w=E.y),E.x>_&&(_=E.x),E.x<M&&(M=E.x)}return f<=_&&(f=_+1),u>=M&&(u=M-1),{curves:d.curves,points:v,isCW:bi.isClockWise(v),identifier:h++,boundingBox:new Yx(new oe(M,w),new oe(_,x))}});p=p.filter(d=>d.points.length>1);const g=p.map(d=>{var v;return c(d,p,u,f,(v=e.userData)==null?void 0:v.style.fillRule)}),m=[];return p.forEach(d=>{if(!g[d.identifier].isHole){const x=new er;x.curves=d.curves,g.filter(_=>_.isHole&&_.for===d.identifier).forEach(_=>{const M=p[_.identifier],b=new as;b.curves=M.curves,x.holes.push(b)}),m.push(x)}}),m}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){const s=[],o=[],a=[];if(Fo.pointsToStrokeWithBuffers(e,t,n,i,s,o,a)===0)return null;const l=new rt;return l.setAttribute("position",new ke(s,3)),l.setAttribute("normal",new ke(o,3)),l.setAttribute("uv",new ke(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,o,a,l){const c=new oe,h=new oe,u=new oe,f=new oe,p=new oe,g=new oe,m=new oe,d=new oe,v=new oe,x=new oe,w=new oe,_=new oe,M=new oe,b=new oe,E=new oe,y=new oe,A=new oe;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=pe(e);const k=e.length;if(k<2)return 0;const V=e[0].equals(e[k-1]);let X,K=e[0],z;const Y=t.strokeWidth/2,q=1/(k-1);let W=0,B,j,Z,se,F=!1,R=0,S=l*3,N=l*2;O(e[0],e[1],c).multiplyScalar(Y),d.copy(e[0]).sub(c),v.copy(e[0]).add(c),x.copy(d),w.copy(v);for(let ue=1;ue<k;ue++){X=e[ue],ue===k-1?V?z=e[1]:z=void 0:z=e[ue+1];const ge=c;if(O(K,X,ge),u.copy(ge).multiplyScalar(Y),_.copy(X).sub(u),M.copy(X).add(u),B=W+q,j=!1,z!==void 0){O(X,z,h),u.copy(h).multiplyScalar(Y),b.copy(X).sub(u),E.copy(X).add(u),Z=!0,u.subVectors(z,K),ge.dot(u)<0&&(Z=!1),ue===1&&(F=Z),u.subVectors(z,X),u.normalize();const G=Math.abs(ge.dot(u));if(G>Number.EPSILON){const I=Y/G;u.multiplyScalar(-I),f.subVectors(X,K),p.copy(f).setLength(I).add(u),y.copy(p).negate();const ye=p.length(),Te=f.length();f.divideScalar(Te),g.subVectors(z,X);const Be=g.length();switch(g.divideScalar(Be),f.dot(y)<Te&&g.dot(y)<Be&&(j=!0),A.copy(p).add(X),y.add(X),se=!1,j?Z?(E.copy(y),M.copy(y)):(b.copy(y),_.copy(y)):ce(),t.strokeLineJoin){case"bevel":te(Z,j,B);break;case"round":de(Z,j),Z?Q(X,_,b,B,0):Q(X,E,M,B,1);break;case"miter":case"miter-clip":default:const Ze=Y*t.strokeMiterLimit/ye;if(Ze<1)if(t.strokeLineJoin!=="miter-clip"){te(Z,j,B);break}else de(Z,j),Z?(g.subVectors(A,_).multiplyScalar(Ze).add(_),m.subVectors(A,b).multiplyScalar(Ze).add(b),U(_,B,0),U(g,B,0),U(X,B,.5),U(X,B,.5),U(g,B,0),U(m,B,0),U(X,B,.5),U(m,B,0),U(b,B,0)):(g.subVectors(A,M).multiplyScalar(Ze).add(M),m.subVectors(A,E).multiplyScalar(Ze).add(E),U(M,B,1),U(g,B,1),U(X,B,.5),U(X,B,.5),U(g,B,1),U(m,B,1),U(X,B,.5),U(m,B,1),U(E,B,1));else j?(Z?(U(v,W,1),U(d,W,0),U(A,B,0),U(v,W,1),U(A,B,0),U(y,B,1)):(U(v,W,1),U(d,W,0),U(A,B,1),U(d,W,0),U(y,B,0),U(A,B,1)),Z?b.copy(A):E.copy(A)):Z?(U(_,B,0),U(A,B,0),U(X,B,.5),U(X,B,.5),U(A,B,0),U(b,B,0)):(U(M,B,1),U(A,B,1),U(X,B,.5),U(X,B,.5),U(A,B,1),U(E,B,1)),se=!0;break}}else ce()}else ce();!V&&ue===k-1&&ae(e[0],x,w,Z,!0,W),W=B,K=X,d.copy(b),v.copy(E)}if(!V)ae(X,_,M,Z,!1,B);else if(j&&s){let ue=A,ge=y;F!==Z&&(ue=y,ge=A),Z?(se||F)&&(ge.toArray(s,0*3),ge.toArray(s,3*3),se&&ue.toArray(s,1*3)):(se||!F)&&(ge.toArray(s,1*3),ge.toArray(s,3*3),se&&ue.toArray(s,0*3))}return R;function O(ue,ge,G){return G.subVectors(ge,ue),G.set(-G.y,G.x).normalize()}function U(ue,ge,G){s&&(s[S]=ue.x,s[S+1]=ue.y,s[S+2]=0,o&&(o[S]=0,o[S+1]=0,o[S+2]=1),S+=3,a&&(a[N]=ge,a[N+1]=G,N+=2)),R+=3}function Q(ue,ge,G,I,ye){c.copy(ge).sub(ue).normalize(),h.copy(G).sub(ue).normalize();let Te=Math.PI;const Be=c.dot(h);Math.abs(Be)<1&&(Te=Math.abs(Math.acos(Be))),Te/=n,u.copy(ge);for(let Ze=0,P=n-1;Ze<P;Ze++)f.copy(u).rotateAround(ue,Te),U(u,I,ye),U(f,I,ye),U(ue,I,.5),u.copy(f);U(f,I,ye),U(G,I,ye),U(ue,I,.5)}function ce(){U(v,W,1),U(d,W,0),U(_,B,0),U(v,W,1),U(_,B,1),U(M,B,0)}function te(ue,ge,G){ge?ue?(U(v,W,1),U(d,W,0),U(_,B,0),U(v,W,1),U(_,B,0),U(y,B,1),U(_,G,0),U(b,G,0),U(y,G,.5)):(U(v,W,1),U(d,W,0),U(M,B,1),U(d,W,0),U(y,B,0),U(M,B,1),U(M,G,1),U(E,G,0),U(y,G,.5)):ue?(U(_,G,0),U(b,G,0),U(X,G,.5)):(U(M,G,1),U(E,G,0),U(X,G,.5))}function de(ue,ge){ge&&(ue?(U(v,W,1),U(d,W,0),U(_,B,0),U(v,W,1),U(_,B,0),U(y,B,1),U(_,W,0),U(X,B,.5),U(y,B,1),U(X,B,.5),U(b,W,0),U(y,B,1)):(U(v,W,1),U(d,W,0),U(M,B,1),U(d,W,0),U(y,B,0),U(M,B,1),U(M,W,1),U(y,B,0),U(X,B,.5),U(X,B,.5),U(y,B,0),U(E,W,1)))}function ae(ue,ge,G,I,ye,Te){switch(t.strokeLineCap){case"round":ye?Q(ue,G,ge,Te,.5):Q(ue,ge,G,Te,.5);break;case"square":if(ye)c.subVectors(ge,ue),h.set(c.y,-c.x),u.addVectors(c,h).add(ue),f.subVectors(h,c).add(ue),I?(u.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(u.toArray(s,1*3),u.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(G,ue),h.set(c.y,-c.x),u.addVectors(c,h).add(ue),f.subVectors(h,c).add(ue);const Be=s.length;I?(u.toArray(s,Be-1*3),f.toArray(s,Be-2*3),f.toArray(s,Be-4*3)):(u.toArray(s,Be-2*3),f.toArray(s,Be-1*3),f.toArray(s,Be-4*3))}break}}function pe(ue){let ge=!1;for(let I=1,ye=ue.length-1;I<ye;I++)if(ue[I].distanceTo(ue[I+1])<i){ge=!0;break}if(!ge)return ue;const G=[];G.push(ue[0]);for(let I=1,ye=ue.length-1;I<ye;I++)ue[I].distanceTo(ue[I+1])>=i&&G.push(ue[I]);return G.push(ue[ue.length-1]),G}}}let yn=[];yn.sun=`
Masse: 1,98855 x 10 30 kg
Rayon: 1 391 400 km
Temp\xE9rature sur la surface: 5,505 \xB0 C
\xC2ge: environ 4,6 milliards d'ann\xE9es terrestres

Les yeux aussi peuvent prendre un coup de soleil.
La gravit\xE9 du Soleil est 28 fois plus forte que celle de la Terre.
Le Soleil est environ \xE0 la moiti\xE9 de sa vie.
`;yn.mercury=`
P\xE9riode orbitale: 88 jours de la Terre
Longueur d'un jour: 4 222 heures
Diam\xE8tre: 4 879 km
Distance du Soleil: 57 900 000 km
Force de gravit\xE9: 3,7 N / kg
Nombre de Lunes: 0`;yn.venus=`
P\xE9riode orbitale: 225 jours terrestres
Longueur d'un jour: 243 jours de la Terre
Diam\xE8tre: 12 104 km
Distance du Soleil: 108 000 000 km
Force de gravit\xE9: 8,9 N / kg
Nombre de Lunes: 0`;yn.earth=`
P\xE9riode orbitale: 365,25 jours de la Terre
Longueur d'un jour: 24 heures
Diam\xE8tre: 12 756 km
Distance du Soleil: 149 600 000 km
Force de gravit\xE9: 9,8 N / kg
Nombre de Lunes: 1`;yn.mars=`
P\xE9riode orbitale: 687 jours de la Terre
Longueur d'un jour: 24,7 heures
Diam\xE8tre: 6 792 km
Distance du Soleil: 227 900 000 km
Force de gravit\xE9: 3.7N / kg
Nombre de Lunes: 2`;yn.jupiter=`
P\xE9riode orbitale: 4 331 jours de la Terre
Longueur d'un jour: 9,9 heures
Diam\xE8tre: 142 984 km
Distance du Soleil: 778 600 000 km
Force de gravit\xE9: 23,1 N / kg
Nombre de Lunes: 67`;yn.saturn=`
P\xE9riode orbitale: 10 747 jours de la Terre
Longueur d'un jour: 10,7 heures
Diam\xE8tre: 120 536 km
Distance du Soleil: 1 443 500 000 km
Force de gravit\xE9: 9 N / kg
Nombre de Lunes: 62`;yn.uranus=`
P\xE9riode orbitale: 30 589 jours de la Terre
Longueur d'un jour: 17,2 heures
Diam\xE8tre: 49 528 km
Distance du Soleil: 2 872 500 000 km
Force de gravit\xE9: 8,7 N / kg
Nombre de Lunes: 27`;yn.neptune=`
P\xE9riode orbitale: 60 182 jours de la Terre
Longueur d'un jour: 16,1 heures
Diam\xE8tre: 49 528 km
Distance du Soleil: 4 495 100 000 km
Force de gravit\xE9: 11,0 N / kg
Nombre de Lunes: 14`;let _n=[];_n.sun=`
Mass: 1.98855 x 10 30 kg
Radius: 1 391 400 km
Temperature on the surface: 5,505 \xB0 C
Age: about 4.6 billion earth years

The eyes can also take a sunburn.
The gravity of the Sun is 28 times stronger than that of the Earth.
The Sun is about halfway through its life.
`;_n.mercury=`
Orbital period: 88 days of the Earth
Length of a day: 4 222 hours
Diameter: 4 879 km
Distance from the Sun: 57 900 000 km
Force of gravity: 3,7 N / kg
Number of moons: 0`;_n.venus=`
Orbital period: 225 Earth days
Length of a day: 243 Earth days
Diameter: 12 104 km
Distance from the Sun: 108 000 000 km
Force of gravity: 8,9 N / kg
Number of moons: 0`;_n.earth=`
Orbital period: 365.25 days of the Earth
Length of a day: 24 hours
Diameter: 12 756 km
Distance from the Sun: 149 600 000 km
Force of gravity: 9,8 N / kg
Number of moons: 1`;_n.mars=`
Orbital period: 687 days of the Earth
Length of a day: 24,7 hours
Diameter: 6 792 km
Distance from the Sun: 227 900 000 km
Force of gravity: 3.7N / kg
Number of moons: 2`;_n.jupiter=`
Orbital period: 4,331 days of the Earth
Length of a day: 9,9 hours
Diameter: 142 984 km
Distance from the Sun: 778 600 000 km
Force of gravity: 23,1 N / kg
Number of moons: 67`;_n.saturn=`
Orbital period: 10 747 days of the Earth
Length of a day: 10,7 hours
Diameter: 120 536 km
Distance from the Sun: 1 443 500 000 km
Force of gravity: 9 N / kg
Number of moons: 62`;_n.uranus=`
Orbital period: 30 589 days of the Earth
Length of a day: 17,2 hours
Diameter: 49 528 km
Distance from the Sun: 2 872 500 000 km
Force of gravity: 8,7 N / kg
Number of moons: 27`;_n.neptune=`
Orbital period: 60,182 days of the Earth
Length of a day: 16,1 hours
Diameter: 49 528 km
Distance from the Sun: 4 495 100 000 km
Force of gravity: 11,0 N / kg
Number of moons: 14`;function jy(){return`
		uniform float time;
		uniform float scale;

		varying vec3 vTexCoord3D;
		varying vec3 vNormal;
		varying vec3 vViewPosition;

		void main(void ) {

			vec4 mPosition = vec4(position, 1.0);
			vNormal = normalize(normalMatrix * normal);
			vViewPosition = cameraPosition - mPosition.xyz;

			vTexCoord3D = scale * (position.xyz + vec3(0.0, 0.0, -time));
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}
`}function Xy(){return`		
			uniform float time;
			varying vec3 vTexCoord3D;
			varying vec3 vNormal;
			varying vec3 vViewPosition;

			vec4 permute( vec4 x ) {

				return mod( ( ( x * 34.0 ) + 1.0 ) * x, 289.0 );

			}

			vec4 taylorInvSqrt( vec4 r ) {

				return 1.79284291400159 - 0.85373472095314 * r;

			}

			float snoise( vec3 v ) {

				const vec2 C = vec2( 1.0 / 6.0, 1.0 / 3.0 );
				const vec4 D = vec4( 0.0, 0.5, 1.0, 2.0 );

				vec3 i  = floor( v + dot( v, C.yyy ) );
				vec3 x0 = v - i + dot( i, C.xxx );

				vec3 g = step( x0.yzx, x0.xyz );
				vec3 l = 1.0 - g;
				vec3 i1 = min( g.xyz, l.zxy );
				vec3 i2 = max( g.xyz, l.zxy );
				vec3 x1 = x0 - i1 + 1.0 * C.xxx;
				vec3 x2 = x0 - i2 + 2.0 * C.xxx;
				vec3 x3 = x0 - 1. + 3.0 * C.xxx;

				i = mod( i, 289.0 );
				vec4 p = permute( permute( permute(
						 i.z + vec4( 0.0, i1.z, i2.z, 1.0 ) )
					   + i.y + vec4( 0.0, i1.y, i2.y, 1.0 ) )
					   + i.x + vec4( 0.0, i1.x, i2.x, 1.0 ) );

				float n_ = 1.0 / 7.0;

				vec3 ns = n_ * D.wyz - D.xzx;

				vec4 j = p - 49.0 * floor( p * ns.z *ns.z );

				vec4 x_ = floor( j * ns.z );
				vec4 y_ = floor( j - 7.0 * x_ );

				vec4 x = x_ *ns.x + ns.yyyy;
				vec4 y = y_ *ns.x + ns.yyyy;
				vec4 h = 1.0 - abs( x ) - abs( y );

				vec4 b0 = vec4( x.xy, y.xy );
				vec4 b1 = vec4( x.zw, y.zw );

				vec4 s0 = floor( b0 ) * 2.0 + 1.0;
				vec4 s1 = floor( b1 ) * 2.0 + 1.0;
				vec4 sh = -step( h, vec4( 0.0 ) );

				vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
				vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

				vec3 p0 = vec3( a0.xy, h.x );
				vec3 p1 = vec3( a0.zw, h.y );
				vec3 p2 = vec3( a1.xy, h.z );
				vec3 p3 = vec3( a1.zw, h.w );

				vec4 norm = taylorInvSqrt( vec4( dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3) ) );
				p0 *= norm.x;
				p1 *= norm.y;
				p2 *= norm.z;
				p3 *= norm.w;

				vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3) ), 0.0 );
				m = m * m;
				return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
											dot(p2,x2), dot(p3,x3) ) );

			}

			float heightMap( vec3 coord ) {

				float n = abs( snoise( coord ) );

				n += 0.25   * abs( snoise( coord * 2.0 ) );
				n += 0.25   * abs( snoise( coord * 4.0 ) );
				n += 0.125  * abs( snoise( coord * 8.0 ) );
				n += 0.0625 * abs( snoise( coord * 16.0 ) );

				return n;

			}

			void main( void ) {

				float n = heightMap( vTexCoord3D );

				gl_FragColor = vec4( vec3( 1.5 - n, 1.0 - n, 0.5 - n ), 1.0 );

				const float e = 0.001;

				float nx = heightMap( vTexCoord3D + vec3( e, 0.0, 0.0 ) );
				float ny = heightMap( vTexCoord3D + vec3( 0.0, e, 0.0 ) );
				float nz = heightMap( vTexCoord3D + vec3( 0.0, 0.0, e ) );

				vec3 normal = normalize( vNormal + 0.05 * vec3( n - nx, n - ny, n - nz ) / e );

				vec3 vLightWeighting = vec3( 0.1 );

				vec4 lDirection = viewMatrix * vec4( normalize( vec3( 1.0, 0.0, 0.5 ) ), 0.0 );
				float directionalLightWeighting = dot( normal, normalize( lDirection.xyz ) ) * 0.25 + 0.75;
				vLightWeighting += vec3( 1.0 ) * directionalLightWeighting;

				vec3 dirHalfVector = normalize( lDirection.xyz + normalize( vViewPosition ) );

				float dirDotNormalHalf = dot( normal, dirHalfVector );

				float dirSpecularWeight = 0.0;
				if ( dirDotNormalHalf >= 0.0 )
					dirSpecularWeight = ( 1.0 - n ) * pow( dirDotNormalHalf, 5.0 );

				vLightWeighting += vec3( 1.0, 0.5, 0.0 ) * dirSpecularWeight * n * 2.0;

				gl_FragColor *= vec4( vLightWeighting, 1.0 );

			}
`}function qy(){return`
        uniform float uSize;
        uniform float uTime;
        uniform float uHoleSize;

        attribute float aScale;
        attribute vec3 aRandomness;

        varying vec3 vColor;

        void main() {
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);

            // Spin
            float angle = atan(modelPosition.x, modelPosition.z);
            float distanceToCenter = length(modelPosition.xz) + uHoleSize;
            float uTimeOffset = uTime + (uHoleSize * 30.0);
            float angleOffset = (1.0 / distanceToCenter) * uTimeOffset * 0.2;
            angle += angleOffset;

            modelPosition.x = cos(angle) * distanceToCenter;
            modelPosition.z = sin(angle) * distanceToCenter;
            modelPosition.xyz += aRandomness;

            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;


            gl_Position = projectedPosition;
            float scale = uSize * aScale;

            gl_PointSize = scale;
            gl_PointSize *= ( 1.0 / - viewPosition.z );
            vColor = color;
        }
`}function Yy(){return`
        varying vec3 vColor;
        varying vec2 vUv;
        uniform sampler2D uTexture;

        void main() {
            gl_FragColor = vec4( vColor, 1.0 );
            gl_FragColor = gl_FragColor * texture2D(uTexture, vec2( gl_PointCoord.x, gl_PointCoord.y ) );
            gl_FragColor = gl_FragColor * vec4( vColor, 1.0 );
        }
    `}class Zy extends kn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new e_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new c_(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=pn.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new As(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=e;else if(pn.decodeText(new Uint8Array(e,0,4))===pf){try{o[Oe.KHR_BINARY_GLTF]=new u_(e)}catch(u){i&&i(u);return}s=o[Oe.KHR_BINARY_GLTF].content}else s=pn.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new b_(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],f=l.extensionsRequired||[];switch(u){case Oe.KHR_MATERIALS_UNLIT:o[u]=new $y;break;case Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[u]=new d_;break;case Oe.KHR_DRACO_MESH_COMPRESSION:o[u]=new h_(l,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:o[u]=new f_;break;case Oe.KHR_MESH_QUANTIZATION:o[u]=new p_;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Ky(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Jy{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ee(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Lh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fo(h),c.distance=u;break;case"spot":c=new Ah(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class $y{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return vt}extendParams(e,t,n){const i=[];e.color=new Ee(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ge))}return Promise.all(i)}}class Qy{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class e_{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(a,a)}return Promise.all(s)}}class t_{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class n_{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ge)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class i_{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class s_{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee(a[0],a[1],a[2]),Promise.all(s)}}class r_{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class o_{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ge)),Promise.all(s)}}class a_{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class l_{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class c_{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new ArrayBuffer(h*u),p=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(f),h,u,p,i.mode,i.filter),f})}else return null}}const pf="glTF",js=12,ku={JSON:1313821514,BIN:5130562};class u_{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,js);if(this.header={magic:pn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-js,i=new DataView(e,js);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===ku.JSON){const l=new Uint8Array(e,js+s,o);this.content=pn.decodeText(l)}else if(a===ku.BIN){const l=js+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class h_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Qa[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Qa[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],p=pr[f.componentType];c[u]=p,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const g=f.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}u(f)},a,c)})})}}class f_{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $a extends Ss{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Ee().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class d_{constructor(){this.name=Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return $a}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Ee(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture,Ge)),e.emissive=new Ee(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Ee(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const o=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o,Ge))}return Promise.all(s)}createMaterial(e){const t=new $a(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=So,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class p_{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class mf extends xr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,p=f*u,g=e*c,m=g-c,d=-2*p+3*f,v=p-f,x=1-d,w=v-f+u;for(let _=0;_!==a;_++){const M=o[m+_+a],b=o[m+_+l]*h,E=o[g+_+a],y=o[g+_]*h;s[_]=x*M+w*b+d*E+v*y}return s}}const m_=new Gt;class g_ extends mf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return m_.fromArray(s).normalize().toArray(s),s}}const Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zu={9728:Mt,9729:Ft,9984:Fa,9985:Ku,9986:Na,9987:ys},Bu={33071:Nt,33648:co,10497:ni},Uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},v_={CUBICSPLINE:void 0,LINEAR:fs,STEP:sr},La={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ss({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),r.DefaultMaterial}function Xs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function __(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function M_(r){const e=r.extensions&&r.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Vu(e.attributes):t=r.indices+":"+Vu(r.attributes)+":"+r.mode,t}function Vu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function el(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function w_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class b_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new ai(this.options.manager):this.textureLoader=new Ox(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new As(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Xs(s,a,i),gi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(pn.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Uu[i.type],c=pr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,d;if(p&&p!==u){const v=Math.floor(f/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let w=t.cache.get(x);w||(m=new c(a,v*p,i.count*p/h),w=new zv(m,p/h),t.cache.add(x,w)),d=new dl(w,l,f%p/h,g)}else a===null?m=new c(i.count*l):m=new c(a,f,i.count*l),d=new xt(m,l,g);if(i.sparse!==void 0){const v=Uu.SCALAR,x=pr[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new x(o[1],w,i.sparse.count*v),b=new c(o[2],_,i.sparse.count*l);a!==null&&(d=new xt(d.array.slice(),d.itemSize,d.normalized));for(let E=0,y=M.length;E<y;E++){const A=M[E];if(d.setX(A,b[E*l]),l>=2&&d.setY(A,b[E*l+1]),l>=3&&d.setZ(A,b[E*l+2]),l>=4&&d.setW(A,b[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,o.name&&(h.name=o.name);const f=(s.samplers||{})[o.sampler]||{};return h.magFilter=zu[f.magFilter]||Ft,h.minFilter=zu[f.minFilter]||ys,h.wrapS=Bu[f.wrapS]||ni,h.wrapT=Bu[f.wrapT]||ni,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const d=new wt(m);d.needsUpdate=!0,f(d)}),t.load(pn.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||w_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ns,kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new os,kt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ss}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else if(l[Oe.KHR_MATERIALS_UNLIT]){const u=i[Oe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ge)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Pt);const h=s.alphaMode||La.OPAQUE;if(h===La.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===La.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==vt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new oe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&o!==vt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==vt&&(a.emissive=new Ee().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==vt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ge)),Promise.all(c).then(function(){let u;return o===$a?u=i[Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new o(a),s.name&&(u.name=s.name),gi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Xs(i,u,s),u})}createUniqueName(e){const t=He.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=M_(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Gu(new rt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?x_(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const m=h[p],d=o[p];let v;const x=c[p];if(d.mode===Ln.TRIANGLES||d.mode===Ln.TRIANGLE_STRIP||d.mode===Ln.TRIANGLE_FAN||d.mode===void 0)v=s.isSkinnedMesh===!0?new mh(m,x):new Je(m,x),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),d.mode===Ln.TRIANGLE_STRIP?v.geometry=Hu(v.geometry,Md):d.mode===Ln.TRIANGLE_FAN&&(v.geometry=Hu(v.geometry,$u));else if(d.mode===Ln.LINES)v=new Ua(m,x);else if(d.mode===Ln.LINE_STRIP)v=new Co(m,x);else if(d.mode===Ln.LINE_LOOP)v=new Gv(m,x);else if(d.mode===Ln.POINTS)v=new Js(m,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(v.geometry.morphAttributes).length>0&&__(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),gi(v,s),d.extensions&&Xs(i,v,d),t.assignFinalMaterial(v),u.push(v)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return u[0];const f=new rn;t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(nn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Eo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],f=n.samplers[u.sampler],p=u.target,g=p.node!==void 0?p.node:p.id,m=n.parameters!==void 0?n.parameters[f.input]:f.input,d=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),a.push(f),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2],p=c[3],g=c[4],m=[];for(let v=0,x=h.length;v<x;v++){const w=h[v],_=u[v],M=f[v],b=p[v],E=g[v];if(w===void 0)continue;w.updateMatrix();let y;switch(Zn[E.path]){case Zn.weights:y=ps;break;case Zn.rotation:y=ri;break;case Zn.position:case Zn.scale:default:y=ms;break}const A=w.name?w.name:w.uuid,k=b.interpolation!==void 0?v_[b.interpolation]:fs,V=[];Zn[E.path]===Zn.weights?w.traverse(function(K){K.morphTargetInfluences&&V.push(K.name?K.name:K.uuid)}):V.push(A);let X=M.array;if(M.normalized){const K=el(X.constructor),z=new Float32Array(X.length);for(let Y=0,q=X.length;Y<q;Y++)z[Y]=X[Y]*K;X=z}for(let K=0,z=V.length;K<z;K++){const Y=new y(V[K]+"."+Zn[E.path],_.array,X,k);b.interpolation==="CUBICSPLINE"&&(Y.createInterpolant=function(W){const B=this instanceof ri?g_:mf;return new B(this.times,this.values,this.getValueSize()/3,W)},Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(Y)}}const d=n.name?n.name:"animation_"+e;return new Eh(d,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new ho:a.length>1?l=new rn:a.length===1?l=a[0]:l=new nt,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),gi(l,s),s.extensions&&Xs(n,l,s),s.matrix!==void 0){const c=new Ae;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,o=new rn;i.name&&(o.name=s.createUniqueName(i.name)),gi(o,i),i.extensions&&Xs(n,o,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(gf(a[c],o,t,s));return Promise.all(l).then(function(){const c=h=>{const u=new Map;for(const[f,p]of s.associations)(f instanceof kt||f instanceof wt)&&u.set(f,p);return h.traverse(f=>{const p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=c(o),o})}}function gf(r,e,t,n){const i=t.nodes[r];return n.getDependency("node",r).then(function(s){if(i.skin===void 0)return s;let o;return n.getDependency("skin",i.skin).then(function(a){o=a;const l=[];for(let c=0,h=o.joints.length;c<h;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,f=a.length;u<f;u++){const p=a[u];if(p){c.push(p);const g=new Ae;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,u*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[u])}l.bind(new Lo(c,h),l.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];o.push(gf(h,s,t,n))}}return Promise.all(o)})}function S_(r,e,t){const n=e.attributes,i=new _s;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=el(pr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,l=new D;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const m=el(pr[f.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ms;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Gu(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Qa[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return gi(r,e),S_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?y_(r,e.targets,t):r})}function Hu(r,e){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===$u)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s}let tl="https://public-2e3.pages.dev/";document.location.href.includes("/localhost")&&(tl="");const T_=new Zy,_t={count:5e5,radius:160,branches:4,randomness:.5,randomnessPower:40,insideColor:"#FFFFFF",outsideColor:"#2d2e30"},E_=async(r,e,t)=>{const n=(await T_.loadAsync(tl+"blackhole/blackholeSphere.gltf")).scene.children[0];n.position.set(0,-1e3,0),n.rotation.set(105.25,0,0),n.scale.multiplyScalar(2.5),n.name="blackholeSphere",e.add(n);let i=null,s=null,o=null;const a=r.load(tl+"blackhole/blackholeStar.png");o!==null&&(i.dispose(),s.dispose(),e.remove(o)),i=new rt;const l=new Float32Array(_t.count*3),c=new Float32Array(_t.count*3),h=new Float32Array(_t.count),u=new Float32Array(_t.count*3),f=new Ee(_t.insideColor),p=new Ee(_t.outsideColor);for(let g=0;g<_t.count;g++){const m=g*3,d=Math.random()*_t.radius,v=g%_t.branches/_t.branches*Math.PI*2,x=Math.pow(Math.random(),_t.randomnessPower)*(Math.random()<.5?1:-1)*_t.randomness*d,w=Math.pow(Math.random(),_t.randomnessPower)*(Math.random()<.5?1:-1)*_t.randomness*d,_=Math.pow(Math.random(),_t.randomnessPower)*(Math.random()<.5?1:-1)*_t.randomness*d;l[m]=Math.cos(v)*d,l[m+1]=0,l[m+2]=Math.sin(v)*d,u[m]=x,u[m+1]=w-1e3,u[m+2]=_;const M=f.clone();M.lerp(p,d/_t.radius),c[m]=M.r,c[m+1]=M.g,c[m+2]=M.b,h[g]=Math.random()}return i.setAttribute("position",new xt(l,3)),i.setAttribute("color",new xt(c,3)),i.setAttribute("aScale",new xt(h,1)),i.setAttribute("aRandomness",new xt(u,3)),s=new mn({depthWrite:!1,blending:ao,vertexColors:!0,vertexShader:qy(),fragmentShader:Yy(),transparent:!0,uniforms:{uTime:{value:0},uSize:{value:100*t.getPixelRatio()},uHoleSize:{value:40},uTexture:{value:a},size:{value:15}}}),o=new Js(i,s),o.scale.multiplyScalar(15),o.rotation.set(0,25.03,0),e.add(o),{material:s,points:o,blackholeSphere:n}},A_=E_,Wu=document.getElementById("music");function L_(){if(window.location.href.includes("localhost"))return;let r=setInterval(()=>{Wu.volume=.1,Wu.play().then(()=>{clearInterval(r)}).catch(e=>{})},1e3)}function C_(r,e,t,n){document.getElementById("goHelp").addEventListener("click",async function(c){Swal.fire(document.location.href.includes("/en")?"Tips":"Astuces",document.location.href.includes("/en")?"Click on the moon to return to the menu.<br>All elements are clickable":"Cliquez sur la lune pour revenir au menu.<br>Tous les \xE9l\xE9ments sont cliquables.","info")},!1),document.getElementById("goHome").addEventListener("click",async function(c){window.selectedPlanet="",document.getElementById("presentation").classList.add("hidden"),document.getElementById("parcours").classList.add("hidden"),document.getElementById("projects").classList.add("hidden"),document.getElementById("me").classList.add("hidden"),document.getElementById("aboutMe").classList.add("hidden"),aboutMe=0,n.enabled=!1,n.maxDistance=2499,await gsap.to(e.position,{duration:3,y:0,z:150,x:0}),n.enabled=!0},!1),window.addEventListener("resize",c=>{t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),e.updateProjectionMatrix()}),window.addEventListener("mouseup",c=>{window.clickOne=0,clickTwo.length&&(r.x=c.clientX/window.innerWidth*2-1,r.y=-(c.clientY/window.innerHeight)*2+1,window.clicked=1,setTimeout(()=>{window.clicked=0},100))}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?window.addEventListener("click",c=>{r.x=c.clientX/window.innerWidth*2-1,r.y=-(c.clientY/window.innerHeight)*2+1,window.clicked=1,window.clickOne=1,window.clickTwo=1,setTimeout(()=>{window.clicked=0,window.clickOne=0,window.clickTwo=0},100)}):(window.addEventListener("mousedown",c=>{window.clickOne=1}),window.addEventListener("mouseup",c=>{window.clickOne=0,clickTwo.length&&(r.x=c.clientX/window.innerWidth*2-1,r.y=-(c.clientY/window.innerHeight)*2+1,window.clicked=1,setTimeout(()=>{window.clicked=0},100))})),window.addEventListener("pointermove",c=>{r.x=c.clientX/window.innerWidth*2-1,r.y=-(c.clientY/window.innerHeight)*2+1}),setTimeout(()=>{},1e3),Swal.mixin({toast:!0,position:"center",showConfirmButton:!1,timerProgressBar:!0,timer:6e3}).fire({icon:"success",title:"Cookies - RGPD",text:document.location.href.includes("/en")?"By continuing on bellottoeric.fr, you accept RGPD":"En continuant sur bellottoeric.fr, vous acceptez les RGPD",footer:'<a target="_blank" href="https://github.com/bellottoeric/bellottoeric.github.io/blob/main/rgpd">bellottoeric.fr/RGPD</a>'});let i=0;setTimeout(()=>{R_(document.getElementById("launch3D")),Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timerProgressBar:!0,timer:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?5e3:5e5,didOpen:c=>{c.addEventListener("click",()=>{document.getElementById("launch3D").click()})}}).fire({icon:"success",title:document.location.href.includes("/en")?"3D Experience is ready":"L'exp\xE9rience en 3D est pr\xEAte",text:document.location.href.includes("/en")?"Click to start !":"Cliquez pour d\xE9marrer !"})},1e3*8),document.getElementById("launch3D").addEventListener("click",async function(c){document.getElementsByClassName("swal2-top-end")&&document.getElementsByClassName("swal2-top-end")[0]&&ju(document.getElementsByClassName("swal2-top-end")[0]),ju(document.getElementById("divCV")),document.getElementById("launch3D").style.display="none";let h=window.innerWidth,u=window.innerHeight;document.getElementsByTagName("h2")[0].style.opacity="0";let f=u+h,p=10;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(p=1.5,f=f/3);for(let g=0;g<f;g=g+p)g>h&&g>u||i||(document.getElementById("inLoader").style.height=g+"px",document.getElementById("loader").style.height=g+"px",document.getElementById("inLoader").style.width=g+"px",document.getElementById("loader").style.width=g+"px",await new Promise(m=>setTimeout(m,10)));animate(),P_(),gsap.to(e.position,{duration:1.5,z:150,y:0})},!1),document.getElementById("buttonProjects").addEventListener("click",function(c){toggleProjects()},!1);const s=document.querySelectorAll(".card-buttons button"),o=document.querySelectorAll(".card-section"),a=document.querySelector(".card"),l=c=>{const h=c.target.getAttribute("data-section"),u=document.querySelector(h);h!=="#about"?a.classList.add("is-active"):a.classList.remove("is-active"),a.setAttribute("data-state",h),o.forEach(f=>f.classList.remove("is-active")),s.forEach(f=>f.classList.remove("is-active")),c.target.classList.add("is-active"),u.classList.add("is-active")};s.forEach(c=>{c.addEventListener("click",l)})}window.toggleProjects=function(){document.getElementById("buttonProjects").classList.toString().includes("active")?document.getElementById("buttonProjects").classList.remove("active"):document.getElementById("buttonProjects").classList.add("active"),document.getElementById("titleProjects").classList.toString().includes("active")?document.getElementById("titleProjects").classList.remove("active"):document.getElementById("titleProjects").classList.add("active"),document.getElementById("navProjects").classList.toString().includes("active")?document.getElementById("navProjects").classList.remove("active"):document.getElementById("navProjects").classList.add("active")};function P_(){L_(),document.getElementById("lineLoader").style.display="none",document.getElementById("lineLoader").classList.add("cinematicLineLoader"),document.getElementById("lineLoader").classList.remove("lineLoader"),document.getElementById("lineLoader").style.backgroundColor="black",cinematicOn||(document.getElementById("goHome").classList.remove("hidden"),document.getElementById("goHelp").classList.remove("hidden")),document.getElementById("parentLoader").classList.add("hidden"),document.getElementById("bg").classList.remove("hidden"),localStorage.getItem("cinematicated")||(localStorage.setItem("cinematicated",1),cinematic()),inactivity=Math.floor(new Date().getTime()/1e3)+10,setTimeout(()=>{document.addEventListener("mousedown",r),document.addEventListener("mousemove",r),document.addEventListener("touchstart",r),document.addEventListener("scroll",r),document.addEventListener("DOMMouseScroll",r),document.addEventListener("mousewheel",r),document.addEventListener("keydown",r)},1e3*10);function r(e){inactivity=Math.floor(new Date().getTime()/1e3)+10}setInterval(()=>{Math.floor(new Date().getTime()/1e3)-inactivity>10&&(inactivity=Math.floor(new Date().getTime()/1e3)-inactivity>5)},1e3)}function ju(r){let e=1;const t=setInterval(function(){e<=.1&&(clearInterval(t),r.style.display="none"),r.style.opacity=e,r.style.filter="alpha(opacity="+e*100+")",e-=e*.1},50)}function R_(r){r.style.display="block";let e=.1;r.style.display="block";const t=setInterval(function(){e>=1&&clearInterval(t),r.style.opacity=e,r.style.filter="alpha(opacity="+e*100+")",e+=e*.03},10)}document.addEventListener("DOMContentLoaded",function(){document.getElementsByTagName("audio")[0].volume=.04,document.getElementsByTagName("audio")[1].volume=.04,this.addEventListener("click",r=>{let e=r.target;if(e.hasAttribute("data-dl")){const t=document.createElement("a");document.location.href.includes("/en")?(t.setAttribute("href","/CV/Bellotto Eric - CV - Developer Full Stack JS - CDD Mars 2023 - AOUT 2023.pdf"),t.setAttribute("download","Bellotto Eric - CV - Developer Full Stack JS - CDD Mars 2023 - AOUT 2023.pdf")):(t.setAttribute("href","/CV/Bellotto Eric - CV - D\xE9veloppeur Full Stack JS - CDD Mars 2023 - AOUT 2023.pdf"),t.setAttribute("download","Bellotto Eric - CV - D\xE9veloppeur Full Stack JS - CDD Mars 2023 - AOUT 2023.pdf")),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t);let n="dl-working";if(!e.classList.contains(n)){let i=e.querySelector("span:last-child"),s=i.textContent,o=I_("--dur",":root");e.classList.add(n),i.textContent="Downloading...",e.disabled=!0,setTimeout(()=>{i.textContent="Completed!"},o*.9),setTimeout(()=>{e.classList.remove(n),i.textContent=s,e.disabled=!1},o+1e3)}}})});function I_(r,e){let t=window.getComputedStyle(document.querySelector(e)),n=t.getPropertyValue(r),i=n.indexOf("ms"),s=n.indexOf("s");if(i>-1)return n.substr(0,i);if(s>-1)return n.substr(0,s)*1e3}function fn(r,e){return Math.random()*(e-r)+r}let vn="https://public-2e3.pages.dev/";document.location.href.includes("/localhost")&&(vn="");const Ct=new fl,Os=new fl,mr=new ph({canvas:document.querySelector("#bg")}),No=new Tt(75,window.innerWidth/window.innerHeight,.1,6e3),D_=new Zx,vf=new Ay,F_=new Fo,xf=new ai,N_=new Wy,Fl=[],_i=[],yf=[],_f=new fo("#ffffff",1,1e5),ks=new Qx(No,mr.domElement),O_=new qx,k_=new oe;ks.minDistance=50;ks.maxDistance=2499;ks.enableDamping=!0;ks.dampingFactor=.25;ks.touches={ONE:di.ROTATE};Ct.add(new Do(16777215,1));Os.add(new Do(16777215,.3));_f.position.set(0,0,100);Os.add(_f);mr.render(Ct,No);mr.autoClear=!1;async function z_(){return new Promise(async(r,e)=>{try{let t=await A_(xf,Ct,mr),n=1,i=7,s=42;Kn("play.fbx",s/i*n),n++,Kn("music.fbx",s/i*n),n++,document.location.href.includes("/en")?Kn("pallete.fbx",s/i*n):Kn("tea.fbx",s/i*n),n++,Kn("/assets/me.png",s/i*n,[5,32],"circle"),n++,Kn("parcours.fbx",s/i*n),n++,Kn("projects.fbx",s/i*n),n++,Kn("contact.fbx",s/i*n),n=1,Ca("gym.fbx",.08,[-25,50]),Ca("chess.fbx",.08,[0,50]),Ca("eth.fbx",.08,[25,50]),H_(),eo("1"),eo("2"),eo("3"),eo("4");let o=G_();Ct.add(o),_i.push(o);let a=V_();Ct.add(a),_i.push(a);for(let l of _i)l.name==="earth"&&l.orderTime!==-1&&l.add(a);D_.load("/fonts/nazalisation.json",function(l){B_(l),U_(l),document.location.href.includes("/en")?cn(l,"Cinematic",s/i*n):cn(l,"Cin\xE9matique",s/i*n),n++,cn(l,"Sound on/off",s/i*n),n++,document.location.href.includes("/en")?(cn(l,"Version fran\xE7aise",s/i*n),n++,cn(l,"About me",s/i*n)):(cn(l,"English version",s/i*n),n++,cn(l,"\xC0 propos",s/i*n)),n++,cn(l,"parcours",s/i*n),n++,cn(l,"Projects",s/i*n),n++,cn(l,"Contact",s/i*n),Cn("sun",0,[.75,64,32],l),Cn("mercury",21,[12,12,12],l),Cn("venus",42,[22,22,22],l),Cn("earth",63,[30,30,30],l),Cn("mars",84,[22,22,22],l),Cn("jupiter",105,[100,100,100],l),Cn("saturn",126,[90,90,90],l),Cn("uranus",147,[62,62,62],l),Cn("neptune",168,[60,60,60],l)}),r([Ct,Os,mr,No,Fl,ks,O_,k_,_i,yf,t])}catch(t){console.log("Error in function",t)}})}function B_(r){const e=["aquarius","aries","cancer","capricorn","gemini","leo","libra","pisces","sagittarius","scorpio","taurus","virgo"],o=[],a=2*Math.PI/12;for(let h=0;h<2*Math.PI;h+=a){const u=-300+2e3*Math.cos(h),f=-300+2e3*Math.sin(h),p=3100,g=-300+(2e3-750)*Math.cos(h)+300,m=-300+(2e3-750)*Math.sin(h)+300;o.push({x:u,y:p,z:f,xText:g,zText:m})}let l=0;function c(h,u){F_.load(vn+"constellations/"+h+".svg",function(f){const p=f.paths,g=new rn;for(let _=0;_<p.length;_++){const M=p[_],b=new vt({color:M.color,side:Pt,depthWrite:!1}),E=Fo.createShapes(M);for(let y=0;y<E.length;y++){const A=E[y],k=new si(A),V=new Je(k,b);V.name="constellations",g.add(V)}}g.scale.multiplyScalar(6),g.rotation.set(1.6,0,0),g.position.set(o[u].x,o[u].y,o[u].z),g.name="constellations";const m=new vt({color:"#ffffff",transparent:!1,opacity:1,side:Pt});let d,v=r.generateShapes(h,75),x=new si(v);x.computeBoundingBox();let w=-.5*(x.boundingBox.max.x-x.boundingBox.min.x);x.translate(w,0,0),d=new Je(x,m),d.position.x=o[u].xText,d.position.y=o[u].y,d.position.z=o[u].zText,d.rotation.set(1.6,0,0),d.lookAtMe=1,d.material.transparent=!0,d.visible=!0,d.name="constellations",Ct.add(g,d)},function(f){},function(f){})}for(let h of e)c(h,l),l++}async function Ca(r,e,t){let n=await vf.loadAsync(vn+"aboutMeFBX/"+r);n.scale.multiplyScalar(e),r=r.replace(".fbx","");let i=0;n.traverse(function(s){if(s.name=r,s.material&&s.material.length)for(let o in s.material)s.material[o]=Mo(r,i),i++;else s.material&&(s.material=Mo(r,i))}),n.rotation.x=180,n.position.x=t[0],n.position.z=t[1],n.position.y=2890,Os.add(n),yf.push(n)}function U_(r){let e=[{name:"spiral",pos:[2450,-1050,0],rot:[0,-1.8,0]},{name:"irregular",pos:[-2450,-1050,0],rot:[0,1.8,0]},{name:"activecor",pos:[0,-1050,2450],rot:[0,60,0]},{name:"lenticular",pos:[0,-1050,-2450],rot:[0,0,0]}];const t=new vt({color:"#ffffff",transparent:!1,opacity:1,side:Pt});for(let n of e){let i=new Po(300,1600),s=new ai().load(vn+"galaxies/"+n.name+".jpg"),o=new vt({map:s}),a=new Je(i,o);a.position.set(n.pos[0],n.pos[1],n.pos[2]),a.rotation.set(n.rot[0],n.rot[1],n.rot[2]),a.name="galaxy-"+n;let l,c=r.generateShapes(document.location.href.includes("/en")?"Galaxy "+n.name:"Galaxie "+n.name,50);i=new si(c),i.computeBoundingBox();let h=-.5*(i.boundingBox.max.x-i.boundingBox.min.x);i.translate(h,0,0),l=new Je(i,t),l.position.x=n.pos[0],l.position.y=n.pos[1]-500,l.position.z=n.pos[2],l.lookAt(0,0,0),l.lookAtMe=1,l.material.transparent=!0,l.visible=!0,l.name="galaxy-"+n,Ct.add(a,l)}}function V_(){const r=new ai().load(vn+"planetTexture/moon.jpg"),e=new bs(12,64,32),t=new Ss({map:r});let n=new Je(e,t);return n.name="moon",n.isDescription=-1,n.type="planet",n}function G_(){let e=new ai().load(vn+"planetTexture/saturnRing.png"),t=.98,n=new vl(45*t,90*t,60*32,80,0,Math.PI*2),i=new vt({map:e,side:Pt,transparent:!0,opacity:.7}),s=new Je(n,i);return s.scale.multiplyScalar(2.5),s.name="ring",s.type="planet",s.rotation.x=-180,s}async function Cn(r,e,t,n){const i=new ai().load(vn+"planetTexture/"+r+".jpg"),s=new bs(t[0],t[1],t[2]);let o=new Ss({color:16777215,map:i}),a=new Je(s,o);if(r==="sun"){let w={time:{type:"f",value:1},scale:{type:"f",value:1.5}},_=new Date().getTime();setInterval(()=>{const b=new Date().getTime(),E=.001*(b-_);_=b,w.time.value+=.175*E},1e3/60);const M=new mn({uniforms:w,vertexShader:jy(),fragmentShader:Xy()});a=new Je(s,M),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?a.scale.multiplyScalar(8):a.scale.multiplyScalar(20)}a.orderTime=e,a.name=r,a.type="planet";let l=[];l.sun=0,l.mercury=0,l.venus=3.08923,l.earth=.408407,l.mars=.439823,l.jupiter=.0541052,l.saturn=.4660029,l.uranus=1.706932,l.neptune=.4939282,a.rotateX(l[r]),r!=="sun"?Os.add(a):Ct.add(a),_i.push(a);const c=new vt({color:"#ffffff",transparent:!1,opacity:1,side:Pt});let h,u=n.generateShapes(r==="sun"?" ":r,r==="sun"?5:25),f=new si(u);f.computeBoundingBox();let p=-.5*(f.boundingBox.max.x-f.boundingBox.min.x);f.translate(p,0,0),h=new Je(f,c),h.position.x=50,h.position.y=-10,h.position.z=0,h.lookAtMe=1,h.isText=1,h.orderTime=-1,h.name=r,h.type="planet",h.isDescription=-1,h.material.opacity=1,h.material.transparent=!0,h.visible=!0,h.isDescription=0,_i.push(h),Ct.add(h);const g=new vt({color:"#ffffff",transparent:!1,opacity:1,side:Pt});let m,d=n.generateShapes(yn[r],17);document.location.href.includes("/en")&&(d=n.generateShapes(_n[r],17));const v=new si(d);v.computeBoundingBox();const x=-.5*(v.boundingBox.max.x-v.boundingBox.min.x);v.translate(x,0,0),m=new Je(v,g),m.position.x=50,m.position.y=-10,m.position.z=0,m.lookAtMe=1,m.isText=1,m.orderTime=-1,m.name=r,m.type="planet",m.isDescription=1,_i.push(m),Ct.add(m)}async function cn(r,e,t,n){const i=new vt({color:"#ffffff",transparent:!0,opacity:.8,side:Pt});let s;const o=r.generateShapes(e,2),a=new si(o);a.computeBoundingBox();const l=-.5*(a.boundingBox.max.x-a.boundingBox.min.x);a.translate(l,0,0),s=new Je(a,i),s.position.x=50,s.position.y=-150,s.position.z=0,s.lookAtMe=1,s.isText=1,s.orderTime=t,s.name=e,n&&(s.position.x=n[0],s.position.y=n[1],s.position.z=n[2]),Fl.push(s),Ct.add(s)}async function Kn(r,e,t,n){const i=new ai().load(r);let s;if(n==="sphere")s=new Je(new bs(t[0],t[1],t[2]),new vt({map:i}));else if(n==="circle")s=new Je(new Po(t[0],t[1]),new vt({map:i})),s.material.side=Pt,s.dicons=1;else{s=await vf.loadAsync(vn+"aroundMeFBX/"+r),s.scale.multiplyScalar(.085),s.dicons=1,r=r.replace(".fbx","");let o=0;s.traverse(function(a){if(a.name=r,a.material&&a.material.length)for(let l in a.material)a.material[l]=Mo(r,o),o++;else a.material&&(a.material=Mo(r,o))})}s.name=r,s.orderTime=e,r==="/assets/me.png"?Os.add(s):Ct.add(s),Fl.push(s)}function Mo(r,e){let t=[];t.play=[3751494],t.music=[15751460],t.contact=[15751460],t.parcours=[2238513,15751460],t.projects=[2238513,15856113,15751460,15751460,3751494],t.gym=[2238513,15751460,15751460,15751460,3751494],t.chess=[2238513,15751460,15751460,15751460,3751494],t.mobile=[2238513,15751460,15751460,15751460,3751494],t.eth=[3751494,15751460,15751460,15751460,15751460],t.pallete=[3751494,15751460,15751460,15751460,3751494],t.tea=[3751494,15751460,3751494,2238513,3751494];let n=t[r][e],i=`
    uniform vec3 viewVector;
    uniform float c;
    uniform float p;
    varying float intensity;
    void main()
    {
        vec3 vNormal = normalize( normalMatrix * normal );
        vec3 vNormel = normalize( normalMatrix * viewVector );
        intensity = pow( c - dot(vNormal, vNormel), p ) + 0.5;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,s=`
    uniform vec3 glowColor;
    varying float intensity;
    void main()
    {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4( glow, 1.2 );
    }`;return new mn({uniforms:{c:{type:"f",value:1.2},p:{type:"f",value:1.2},glowColor:{type:"c",value:new Ee(n)},viewVector:{type:"v3",value:No.position}},vertexShader:i,fragmentShader:s,side:Si,blending:ao,transparent:!1})}async function eo(r){const[e,t]=await Promise.all([xf.loadAsync(vn+"/asteroids/"+r+".jpg"),N_.loadAsync(vn+"/asteroids/"+r+".obj")]);t.traverse(function(i){i.isMesh&&(i.material.map=e,i.geometry.computeVertexNormals())}),r==="1"&&t.scale.multiplyScalar(.1),(r==="3"||r==="4")&&t.scale.multiplyScalar(4);let n=new gh(t.children[0].geometry,t.children[0].material,100);Ct.add(n);for(let i=0;i<n.count;i++){const s=Math.random()*Math.PI*2;let o=fn(.005,.02);t.scale.multiplyScalar(o),t.rotation.y=fn(1,360),t.rotation.x=fn(1,360),t.position.z=Math.sin(s)*fn(800,875),t.position.x=Math.cos(s)*fn(800,875),t.position.y=Math.cos(s)*fn(50,150)*1.5,t.updateMatrix(),n.setMatrixAt(i,t.matrix),t.scale.multiplyScalar(1/o)}n.instanceMatrix.needsUpdate=!0}async function H_(){let r=new bs(.5,32,32),e=new vt({color:16777215}),t=new Je(r,e,250),n=new gh(r,e,250);Ct.add(n);for(let i=0;i<n.count;i++){t.position.x=fn(-4e3,4e3),t.position.y=fn(-4e3,4e3),t.position.z=fn(-4e3,4e3),t.scale.x=t.scale.y=fn(8,16);let s=t.position.x-0,o=t.position.y-0,a=t.position.z-0;Math.sqrt(s*s+o*o+a*a)<2500||(t.updateMatrix(),n.setMatrixAt(i,t.matrix))}n.instanceMatrix.needsUpdate=!0}window.cinematicOn=0;window.clicked=0;window.selectedPlanet="";window.clickOne=0;window.clickTwo="";window.aboutMe=0;window.inactivity=0;let Ki=0,nr=0;var $n,[ls,gr,Dn,$e,Nl,Ot,nl,il,ht,Mf,es]="";const W_=new kx;j_();async function j_(){return new Promise(async(r,e)=>{try{[ls,gr,Dn,$e,Nl,Ot,nl,il,ht,Mf,es]=await z_(),C_(il,$e,Dn,Ot),Dn.setPixelRatio(window.devicePixelRatio),Dn.setSize(window.innerWidth,window.innerHeight)}catch(t){console.log("Error in function",t)}})}setInterval(()=>{},1);window.animate=function(){requestAnimationFrame(animate);let r=performance.now()*5e-4+22e3;Y_(),$_(r),J_(r),Z_(),X_(),q_(r),Ot.update(),Dn.clear(),Dn.render(ls,$e),Dn.render(gr,$e),$n&&Dn.render($n,$e)};function X_(){const r=W_.getElapsedTime()*10;es.material&&(es.material.uniforms.uTime.value=r),es.points&&es.points.rotation.set(0,25.03,0),es.blackholeSphere.rotation.z+=.03}function q_(r){if(inactivity===!0&&!cinematicOn&&Ot.maxDistance!==3e3){let e=new bf(Math.cos(r*.1)*250+$e.position.z,Math.sin(r*.1)*250+$e.position.x,0+$e.position.y);e=e.map((t,n)=>t+e[n]),$e.position.z-=e[0]/100,$e.position.x-=e[1]/100,$e.position.y-=e[2]/100}}function Y_(){nl.setFromCamera(il,$e);const r=nl.intersectObjects(ls.children.concat(gr.children));r.length||(clickOne="",clickTwo="",cinematicOn?document.getElementsByTagName("html")[0].style.cursor="none":document.getElementsByTagName("html")[0].style.cursor="move");for(let e=0;e<r.length;e++){let t=r[e].object.name,n=r[e].object.type;t.length&&Ot.enabled&&!t.includes("sphere")&&!t.includes("asteroid")&&(document.getElementsByTagName("html")[0].style.cursor="pointer"),t.length&&Ot.enabled&&clickOne?clickOne=1:clickOne=0,t.length&&Ot.enabled&&clickOne&&(clickTwo=t),t.length&&clicked&&Ot.enabled&&(window.clicked=0,selectedPlanet="",t==="play"?cinematic():t.includes("music")?(document.getElementsByTagName("audio")[0].style.opacity="1",setTimeout(()=>{document.getElementsByTagName("audio")[0].style.opacity="0"},5e3)):t.includes("parcours")||t.includes("projects")||t.includes("contact")||t.includes("assets/me")?Q_(t):t.includes("tea")?window.open("https://bellottoeric.fr/en.html","_self"):t.includes("pallete")?window.open("https://bellottoeric.fr/","_self"):n==="planet"?K_(t):t.includes("Object_")?gsap.to($e.position,{duration:2,x:0,y:-1190,z:0}):t==="constellations"&&gsap.to($e.position,{duration:2,x:0,y:-200,z:0}))}}let Pa=1,Ra=0,wf=450,sl=.04;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(sl=.05,wf=250);function Z_(r){for(let e of Mf)aboutMe?e.visible=!0:e.visible=!1,e.rotation.y+=.01,e.name==="gym"&&(e.position.x+=sl*Pa*-1),e.name==="eth"&&(e.position.x+=sl*Pa);Ra++,Ra>wf&&(Ra=0,Pa*=-1)}async function K_(r){r==="ring"&&(r="saturn"),r==="moon"&&(r="earth"),selectedPlanet=r;for(let e of ht)if(e.name===r){let t=new bf(0+e.position.x,0+e.position.z);if(t=t.map((s,o)=>s+t[o]),nr)continue;nr=1,Ot.enabled=!1;let n=.7;e.position.distanceTo({x:0,y:0,z:0})<301?n=1.6:e.position.distanceTo({x:0,y:0,z:0})<451?n=1.2:e.position.distanceTo({x:0,y:0,z:0})<601?n=1:e.position.distanceTo({x:0,y:0,z:0})<1001?n=.9:e.position.distanceTo({x:0,y:0,z:0})<1351&&(n=.8),t[0]===0&&(t=[425,425]);let i=400;e.position.y>100&&(i=0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(n+=.2),gsap.to($e.position,{duration:2,x:t[0]*n,y:e.position.y-i,z:t[1]*n}),setTimeout(()=>{nr=0,Ot.enabled=!0},1e3*2)}}function J_(r){let e,t;for(let n of ht)n.name==="ring"&&(e=n),n.name==="moon"&&(t=n);for(let n of ht){if(n.name==="ring"||n.name==="moon"||n.isText)continue;let i=r;if(n.orderTime&&(i=r+n.orderTime),nr&&(Ki=1),!Ki){let o=[];o.sun=0,o.mercury=300,o.venus=450,o.earth=600,o.mars=750,o.jupiter=1e3,o.saturn=1300,o.uranus=1600,o.neptune=1800;let a=[];a.sun=0,a.mercury=.08727,a.venus=.063636,a.earth=.05454,a.mars=.043636,a.jupiter=.02363,a.saturn=.01763,a.uranus=.01236,a.neptune=.01,n.position.z=Math.cos(i*a[n.name])*o[n.name],n.position.x=Math.sin(i*a[n.name])*o[n.name],n.position.y=Math.cos(i*a[n.name])*o[n.name]/1.5}let s=[];s.sun=.0006172839,s.mercury=.0002873563,s.venus=685871e-10,s.earth=.0166666666,s.mars=.016,s.jupiter=.04,s.saturn=.0363636363,s.uranus=.0235294117,s.neptune=.025,n.rotation.y+=s[n.name],n.name==="saturn"&&(n.children.length||n.add(e),e.rotation.y-=s.saturn,e.rotation.x=0,e.rotation.z+=.005),n.name==="earth"&&(n.children.length||n.add(t),t.position.set(0,0,0),t.rotateY(.001),t.translateX(50),t.rotation.x+=.002,t.rotation.y+=.002);for(let o of ht)o.name===n.name&&o.lookAtMe&&(o.lookAt($e.position),o.orderTime===-1&&(o.position.x=n.position.x,o.position.z=n.position.z,o.isDescription?o.position.y=n.position.y-170:o.position.y=n.position.y-150))}selectedPlanet.length?Ki=1:Ki=0;for(let n of ht)n.lookAtMe&&n.orderTime===-1&&(n.isDescription||(n.material.opacity=1,n.material.transparent=!1,n.visible=!0));if(!cinematicOn){for(let n of ht)if(n.lookAtMe&&n.orderTime===-1)if(n.isDescription||(n.material.opacity=1,n.material.transparent=!1),selectedPlanet===n.name)if(n.material.opacity=1,n.material.transparent=!1,n.visible=!0,n.position.distanceTo($e.position)>1e3&&n.isDescription?(Ki=0,n.material.opacity=0,n.material.transparent=!1,n.visible=!1):Ki=1,n.position.distanceTo($e.position)<1e3)for(let i of ht)i.lookAtMe&&i.orderTime===-1&&selectedPlanet!==i.name&&!i.isDescription&&(i.material.opacity=0,i.material.transparent=!0,i.visible=!1);else for(let i of ht)i.lookAtMe&&i.orderTime===-1&&selectedPlanet!==i.name&&!i.isDescription&&(i.material.opacity=1,i.material.transparent=!1,i.visible=!0);else n.isDescription&&(n.material.transparent=!0,n.material.opacity=0,n.visible=!1)}$e.position.distanceTo({x:0,y:0,z:0})>170&&document.getElementById("goHome")&&!cinematicOn?document.getElementById("goHome").classList.remove("hidden"):document.getElementById("goHome")&&!document.getElementById("goHome").classList.toString().includes("hidden")&&document.getElementById("goHome").classList.add("hidden"),nr&&document.getElementById("goHome").classList.add("hidden")}function $_(r){for(let e of Nl){let t=r;e.orderTime&&(t=r+e.orderTime),e.orderTime!==-1&&(e.position.x=Math.sin(t*.15)*50),e.lookAtMe?(e.lookAt($e.position),e.orderTime!==-1&&(e.position.y=Math.cos(t*.15)*50-12)):(e.rotation.x+=5/1e3,e.rotation.y+=5/1e3,e.dicons&&(e.rotation.x=0),e.position.y=Math.cos(t*.15)*50,e.name==="/assets/me.png"&&(e.lookAt($e.position),e.position.x=e.position.x+.1))}}function Q_(r){r.includes("assets/me")&&(aboutMe=1),Ot.enabled=!1,clicked=0,setTimeout(()=>{document.getElementById("presentation").classList.remove("hidden"),r.includes("parcours")?document.getElementById("parcours").classList.remove("hidden"):r.includes("projects")?(document.getElementById("projects").classList.remove("hidden"),document.getElementById("buttonProjects").classList.remove("active"),document.getElementById("titleProjects").classList.remove("active"),document.getElementById("navProjects").classList.remove("active"),setTimeout(()=>{toggleProjects()},650)):r.includes("contact")&&document.getElementById("me").classList.remove("hidden"),aboutMe&&document.getElementById("aboutMe").classList.remove("hidden")},1e3),Ot.maxDistance=3e3,gsap.to($e.position,{duration:3,y:3e3,x:0,z:0})}window.cinematic=async function(){document.getElementById("lineLoader").style.display="block",document.getElementById("goHelp").classList.add("hidden"),document.location.href.includes("/en")?document.getElementById("audioSource").src="/audio/introen.mp3":document.getElementById("audioSource").src="/audio/introfr.mp3",document.getElementById("intro").load(),document.getElementById("intro").play(),document.getElementsByTagName("html")[0].style.cursor="none",cinematicOn=1,document.querySelector("body").requestFullscreen().then(function(){}).catch(function(n){}),Ot.enabled=!1,ls.visible=!1,gr.visible=!1,$n=new fl,$n.add(new Do(16777215,1)),Dn.render($n,$e);let r=ht.constructor(),e=0;for(let n in ht)if(ht.hasOwnProperty(n)){if(ht[n].name==="ring"||ht[n].name==="moon"||ht[n].isText||ht[n].name==="sun")continue;r[e]=ht[n],e++}const t=gsap.timeline();for(let n of r){await t.to($e.position,{duration:1.5,x:n.position.x*-1/10,y:n.position.y*-1/10,z:n.position.z*-1/10});for(let i of ht)i.isText&&i.name===n.name&&!i.isDescription&&$n.add(i);n.material.opacity=0,n.material.transparent=!0,n.visible=!0,n.name!=="sun"&&$n.add(n),TweenMax.to(n.material,2,{opacity:1}),n.children.length&&(n.children[0].material.opacity=0,n.children[0].material.transparent=!0,n.children[0].visible=!0,TweenMax.to(n.children[0].material,2,{opacity:1})),await t.to($e.position,{duration:1,x:n.position.x*-1/10,y:n.position.y*-1/10,z:n.position.z*-1/10,ease:"none"})}$n=null,ls.visible=!0,gr.visible=!0;for(let n of Nl)n.visible=!0;for(let n of ht)n.material&&TweenMax.to(n.material,.1,{opacity:1}),n.visible=!0,ls.add(n);for(let n of ht)n.lookAtMe&&n.orderTime===-1&&n.isDescription&&(n.material.opacity=0,n.material.transparent=!1,n.visible=!1);await t.to($e.position,{duration:4.5,y:-1500,z:0,x:0,ease:"none"}),await t.to($e.position,{duration:4.5,y:1e3,z:0,x:0,ease:"none"}),await t.to($e.position,{duration:3,y:0,z:150,x:0,ease:"none"}),Ot.enabled=!0,document.exitFullscreen().then(function(){}).catch(function(n){}),cinematicOn=0,document.getElementById("lineLoader").style.display="none",document.getElementById("goHelp").classList.remove("hidden")};class bf extends Array{add(e){return this.map((t,n)=>t+e[n])}}
