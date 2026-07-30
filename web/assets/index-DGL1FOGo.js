var Ed=Object.defineProperty;var Td=(s,t,e)=>t in s?Ed(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Ma=(s,t,e)=>Td(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="160",Hi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,Ll=1,wd=2,Lh=1,Dh=2,Gn=3,ui=0,He=1,dn=2,ai=0,ds=1,Dl=2,Il=3,Ul=4,Ad=5,wi=100,Rd=101,Cd=102,Nl=103,Ol=104,Pd=200,Ld=201,Dd=202,Id=203,fo=204,po=205,Ud=206,Nd=207,Od=208,Fd=209,Bd=210,zd=211,kd=212,Gd=213,Hd=214,Vd=0,Wd=1,Xd=2,Kr=3,qd=4,Yd=5,jd=6,Kd=7,Ih=0,Zd=1,$d=2,oi=0,Jd=1,Qd=2,tf=3,Uh=4,ef=5,nf=6,Nh=300,gs=301,vs=302,mo=303,_o=304,ca=306,go=1e3,Sn=1001,vo=1002,ze=1003,Fl=1004,ya=1005,un=1006,sf=1007,js=1008,li=1009,rf=1010,af=1011,Wo=1012,Oh=1013,ei=1014,ni=1015,Ks=1016,Fh=1017,Bh=1018,Ci=1020,of=1021,En=1023,lf=1024,cf=1025,Pi=1026,xs=1027,hf=1028,zh=1029,uf=1030,kh=1031,Gh=1033,Sa=33776,Ea=33777,Ta=33778,ba=33779,Bl=35840,zl=35841,kl=35842,Gl=35843,Hh=36196,Hl=37492,Vl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,jl=37812,Kl=37813,Zl=37814,$l=37815,Jl=37816,Ql=37817,tc=37818,ec=37819,nc=37820,ic=37821,wa=36492,sc=36494,rc=36495,df=36283,ac=36284,oc=36285,lc=36286,Vh=3e3,Li=3001,ff=3200,pf=3201,Wh=0,mf=1,fn="",we="srgb",qn="srgb-linear",Xo="display-p3",ha="display-p3-linear",Zr="linear",ee="srgb",$r="rec709",Jr="p3",Wi=7680,cc=519,_f=512,gf=513,vf=514,Xh=515,xf=516,Mf=517,yf=518,Sf=519,hc=35044,uc="300 es",xo=1035,Xn=2e3,Qr=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,Mo=180/Math.PI;function As(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function Ef(s,t){return(s%t+t)%t}function Aa(s,t,e){return(1-e)*s+e*t}function dc(s){return(s&s-1)===0&&s!==0}function yo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ls(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tf={DEG2RAD:Hr};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],v=i[4],y=i[7],A=i[2],R=i[5],E=i[8];return r[0]=a*_+o*M+l*A,r[3]=a*m+o*v+l*R,r[6]=a*p+o*y+l*E,r[1]=c*_+h*M+u*A,r[4]=c*m+h*v+u*R,r[7]=c*p+h*y+u*E,r[2]=d*_+f*M+g*A,r[5]=d*m+f*v+g*R,r[8]=d*p+f*y+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Wt;function qh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bf(){const s=ta("canvas");return s.style.display="block",s}const fc={};function ks(s){s in fc||(fc[s]=!0,console.warn(s))}const pc=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mc=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[qn]:{transfer:Zr,primaries:$r,toReference:s=>s,fromReference:s=>s},[we]:{transfer:ee,primaries:$r,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ha]:{transfer:Zr,primaries:Jr,toReference:s=>s.applyMatrix3(mc),fromReference:s=>s.applyMatrix3(pc)},[Xo]:{transfer:ee,primaries:Jr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(mc),fromReference:s=>s.applyMatrix3(pc).convertLinearToSRGB()}},wf=new Set([qn,ha]),Jt={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!wf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=mr[t].toReference,i=mr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return mr[s].primaries},getTransfer:function(s){return s===fn?Zr:mr[s].transfer}};function fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ca(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xi;class Yh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=ta("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ta("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Af=0;class jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=As(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Pa(i[a].image)):r.push(Pa(i[a]))}else r=Pa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rf=0;class nn extends ki{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Sn,i=Sn,r=un,a=js,o=En,l=li,c=nn.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=As(),this.name="",this.source=new jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Li?we:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case go:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case go:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===we?Li:Vh}set encoding(t){ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?we:fn}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Nh;nn.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(f+1)/2,A=(p+1)/2,R=(h+d)/4,E=(u+_)/4,U=(g+m)/4;return v>y&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=E/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=R/i,r=U/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=U/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Li?we:fn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Cf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kh extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pf extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),R=Math.atan2(A,p*M);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}const y=o*M;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new D,_c=new Fi;class or{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),gr.subVectors(this.max,Ds),qi.subVectors(t.a,Ds),Yi.subVectors(t.b,Ds),ji.subVectors(t.c,Ds),Kn.subVectors(Yi,qi),Zn.subVectors(ji,Yi),vi.subVectors(qi,ji);let e=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-vi.z,vi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,vi.z,0,-vi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-vi.y,vi.x,0];return!Da(e,qi,Yi,ji,gr)||(e=[1,0,0,0,1,0,0,0,1],!Da(e,qi,Yi,ji,gr))?!1:(vr.crossVectors(Kn,Zn),e=[vr.x,vr.y,vr.z],Da(e,qi,Yi,ji,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,_r=new or,qi=new D,Yi=new D,ji=new D,Kn=new D,Zn=new D,vi=new D,Ds=new D,gr=new D,vr=new D,xi=new D;function Da(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){xi.fromArray(s,r);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lf=new or,Is=new D,Ia=new D;class qo{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Ia)),this.expandByPoint(Is.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new D,Ua=new D,xr=new D,$n=new D,Na=new D,Mr=new D,Oa=new D;class Yo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ua.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Ua);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xr),o=$n.dot(this.direction),l=-$n.dot(xr),c=$n.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ua).addScaledVector(xr,d),f}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,r){Na.subVectors(e,t),Mr.subVectors(n,t),Oa.crossVectors(Na,Mr);let a=this.direction.dot(Oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const l=o*this.direction.dot(Mr.crossVectors($n,Mr));if(l<0)return null;const c=o*this.direction.dot(Na.cross($n));if(c<0||l+c>a)return null;const h=-o*$n.dot(Oa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,If)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Jn.crossVectors(n,Ke),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Jn.crossVectors(n,Ke)),Jn.normalize(),yr.crossVectors(Ke,Jn),i[0]=Jn.x,i[4]=yr.x,i[8]=Ke.x,i[1]=Jn.y,i[5]=yr.y,i[9]=Ke.y,i[2]=Jn.z,i[6]=yr.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],y=n[11],A=n[15],R=i[0],E=i[4],U=i[8],x=i[12],T=i[1],O=i[5],k=i[9],q=i[13],P=i[2],N=i[6],z=i[10],X=i[14],Y=i[3],K=i[7],$=i[11],tt=i[15];return r[0]=a*R+o*T+l*P+c*Y,r[4]=a*E+o*O+l*N+c*K,r[8]=a*U+o*k+l*z+c*$,r[12]=a*x+o*q+l*X+c*tt,r[1]=h*R+u*T+d*P+f*Y,r[5]=h*E+u*O+d*N+f*K,r[9]=h*U+u*k+d*z+f*$,r[13]=h*x+u*q+d*X+f*tt,r[2]=g*R+_*T+m*P+p*Y,r[6]=g*E+_*O+m*N+p*K,r[10]=g*U+_*k+m*z+p*$,r[14]=g*x+_*q+m*X+p*tt,r[3]=M*R+v*T+y*P+A*Y,r[7]=M*E+v*O+y*N+A*K,r[11]=M*U+v*k+y*z+A*$,r[15]=M*x+v*q+y*X+A*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,A=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,R=e*M+n*v+i*y+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=M*E,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*E,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*E,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*E,t[4]=v*E,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*E,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*E,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*E,t[8]=y*E,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*E,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=A*E,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*E,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,M=l*c,v=l*h,y=l*u,A=n.x,R=n.y,E=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+y)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(f-y)*R,i[5]=(1-(d+p))*R,i[6]=(m+M)*R,i[7]=0,i[8]=(g+v)*E,i[9]=(m-M)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);const c=1/r,h=1/a,u=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Xn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Xn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Xn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===Xn)g=(a+r)*u,_=-2*u;else if(o===Qr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new D,xn=new _e,Df=new D(0,0,0),If=new D(1,1,1),Jn=new D,yr=new D,Ke=new D,gc=new _e,vc=new Fi;class Rn{constructor(t=0,e=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uf=0;const xc=new D,Zi=new Fi,Bn=new _e,Sr=new D,Us=new D,Nf=new D,Of=new Fi,Mc=new D(1,0,0),yc=new D(0,1,0),Sc=new D(0,0,1),Ff={type:"added"},Bf={type:"removed"};class Ne extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new D,e=new Rn,n=new Fi,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Wt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Us,Sr,this.up):Bn.lookAt(Sr,Us,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ne.DEFAULT_UP=new D(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,zn=new D,Fa=new D,kn=new D,$i=new D,Ji=new D,Ec=new D,Ba=new D,za=new D,ka=new D;let Er=!1;class yn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Mn.subVectors(i,e),zn.subVectors(n,e),Fa.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(zn),l=Mn.dot(Fa),c=zn.dot(zn),h=zn.dot(Fa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(t,e,n,i,r,a,o,l){return Er===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Er=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),zn.subVectors(t,e),Mn.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Mn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Er===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Er=!0),yn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;$i.subVectors(i,n),Ji.subVectors(r,n),Ba.subVectors(t,n);const l=$i.dot(Ba),c=Ji.dot(Ba);if(l<=0&&c<=0)return e.copy(n);za.subVectors(t,i);const h=$i.dot(za),u=Ji.dot(za);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector($i,a);ka.subVectors(t,r);const f=$i.dot(ka),g=Ji.dot(ka);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ji,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ec.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ec,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector($i,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Ga(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Ef(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ga(a,r,t+1/3),this.g=Ga(a,r,t),this.b=Ga(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Jt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(ye(Ie.r*255,0,255))*65536+Math.round(ye(Ie.g*255,0,255))*256+Math.round(ye(Ie.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=we){Jt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Tr);const n=Aa(Qn.h,Tr.h,e),i=Aa(Qn.s,Tr.s,e),r=Aa(Qn.l,Tr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Xt;Xt.NAMES=Zh;let zf=0;class lr extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=As(),this.name="",this.type="Material",this.blending=ds,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cr extends lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new D,br=new it;class Dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class $h extends Dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jh extends Dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kf=0;const ln=new _e,Ha=new Ne,Qi=new D,Ze=new or,Ns=new or,be=new D;class gn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Jh:$h)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Ze.min,Ns.min),Ze.expandByPoint(be),be.addVectors(Ze.max,Ns.max),Ze.expandByPoint(be)):(Ze.expandByPoint(Ns.min),Ze.expandByPoint(Ns.max))}Ze.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),be.add(Qi)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new D,h[T]=new D;const u=new D,d=new D,f=new D,g=new it,_=new it,m=new it,p=new D,M=new D;function v(T,O,k){u.fromArray(i,T*3),d.fromArray(i,O*3),f.fromArray(i,k*3),g.fromArray(a,T*2),_.fromArray(a,O*2),m.fromArray(a,k*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(q),M.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(q),c[T].add(p),c[O].add(p),c[k].add(p),h[T].add(M),h[O].add(M),h[k].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,O=y.length;T<O;++T){const k=y[T],q=k.start,P=k.count;for(let N=q,z=q+P;N<z;N+=3)v(n[N+0],n[N+1],n[N+2])}const A=new D,R=new D,E=new D,U=new D;function x(T){E.fromArray(r,T*3),U.copy(E);const O=c[T];A.copy(O),A.sub(E.multiplyScalar(E.dot(O))).normalize(),R.crossVectors(U,O);const q=R.dot(h[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=q}for(let T=0,O=y.length;T<O;++T){const k=y[T],q=k.start,P=k.count;for(let N=q,z=q+P;N<z;N+=3)x(n[N+0]),x(n[N+1]),x(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new _e,Mi=new Yo,wr=new qo,bc=new D,ts=new D,es=new D,ns=new D,Va=new D,Ar=new D,Rr=new it,Cr=new it,Pr=new it,wc=new D,Ac=new D,Rc=new D,Lr=new D,Dr=new D;class $t extends Ne{constructor(t=new gn,e=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Va.fromBufferAttribute(u,t),a?Ar.addScaledVector(Va,h):Ar.addScaledVector(Va.sub(e),h))}e.add(Ar)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(wr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(wr,bc)===null||Mi.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,A=v;y<A;y+=3){const R=o.getX(y),E=o.getX(y+1),U=o.getX(y+2);i=Ir(this,p,t,n,c,h,u,R,E,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=Ir(this,a,t,n,c,h,u,M,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,A=v;y<A;y+=3){const R=y,E=y+1,U=y+2;i=Ir(this,p,t,n,c,h,u,R,E,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,y=m+2;i=Ir(this,a,t,n,c,h,u,M,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Gf(s,t,e,n,i,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ui,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:s}}function Ir(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ts),s.getVertexPosition(l,es),s.getVertexPosition(c,ns);const h=Gf(s,t,e,n,ts,es,ns,Lr);if(h){i&&(Rr.fromBufferAttribute(i,o),Cr.fromBufferAttribute(i,l),Pr.fromBufferAttribute(i,c),h.uv=yn.getInterpolation(Lr,ts,es,ns,Rr,Cr,Pr,new it)),r&&(Rr.fromBufferAttribute(r,o),Cr.fromBufferAttribute(r,l),Pr.fromBufferAttribute(r,c),h.uv1=yn.getInterpolation(Lr,ts,es,ns,Rr,Cr,Pr,new it),h.uv2=h.uv1),a&&(wc.fromBufferAttribute(a,o),Ac.fromBufferAttribute(a,l),Rc.fromBufferAttribute(a,c),h.normal=yn.getInterpolation(Lr,ts,es,ns,wc,Ac,Rc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};yn.getNormal(ts,es,ns,u.normal),h.face=u}return h}class Be extends gn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function g(_,m,p,M,v,y,A,R,E,U,x){const T=y/E,O=A/U,k=y/2,q=A/2,P=R/2,N=E+1,z=U+1;let X=0,Y=0;const K=new D;for(let $=0;$<z;$++){const tt=$*O-q;for(let at=0;at<N;at++){const W=at*T-k;K[_]=W*M,K[m]=tt*v,K[p]=P,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=R>0?1:-1,h.push(K.x,K.y,K.z),u.push(at/E),u.push(1-$/U),X+=1}}for(let $=0;$<U;$++)for(let tt=0;tt<E;tt++){const at=d+tt+N*$,W=d+tt+N*($+1),J=d+(tt+1)+N*($+1),ut=d+(tt+1)+N*$;l.push(at,W,ut),l.push(W,J,ut),Y+=6}o.addGroup(f,Y,x),f+=Y,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){const t={};for(let e=0;e<s.length;e++){const n=Ms(s[e]);for(const i in n)t[i]=n[i]}return t}function Hf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qh(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}const Vf={clone:Ms,merge:Fe};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tu extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Je extends tu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class qf extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Je(is,ss,t,e);i.layers=this.layers,this.add(i);const r=new Je(is,ss,t,e);r.layers=this.layers,this.add(r);const a=new Je(is,ss,t,e);a.layers=this.layers,this.add(a);const o=new Je(is,ss,t,e);o.layers=this.layers,this.add(o);const l=new Je(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new Je(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class eu extends nn{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yf extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?we:fn),this.texture=new eu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Be(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ai});r.uniforms.tEquirect.value=e;const a=new $t(i,r),o=e.minFilter;return e.minFilter===js&&(e.minFilter=un),new qf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Wa=new D,jf=new D,Kf=new Wt;class ti{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Wa.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kf.getNormalMatrix(t),i=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new qo,Ur=new D;class Ko{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+M).normalize(),n[3].setComponents(l-a,d-h,m-g,y-M).normalize(),n[4].setComponents(l-o,d-u,m-_,y-v).normalize(),e===Xn)n[5].setComponents(l+o,d+u,m+_,y+v).normalize();else if(e===Qr)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ur.x=i.normal.x>0?t.max.x:t.min.x,Ur.y=i.normal.y>0?t.max.y:t.min.y,Ur.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zf(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Zo extends gn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let v=0;v<c;v++){const y=v*u-r;g.push(y,-M,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const v=M+c*p,y=M+c*(p+1),A=M+1+c*(p+1),R=M+1+c*p;f.push(v,y,R),f.push(y,A,R)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.width,t.height,t.widthSegments,t.heightSegments)}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mp=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zp=`struct PhysicalMaterial {
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,$p=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,i_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,s_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,r_=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,f_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,m_=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,x_=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,E_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R_=`uniform float rotation;
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
}`,C_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:$f,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:ap,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:_p,color_pars_fragment:gp,color_pars_vertex:vp,color_vertex:xp,common:Mp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Tp,emissivemap_fragment:bp,emissivemap_pars_fragment:wp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Wp,envmap_vertex:Ip,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Op,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_fragment:zp,lightmap_pars_fragment:kp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Xp,lights_toon_pars_fragment:qp,lights_phong_fragment:Yp,lights_phong_pars_fragment:jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Zp,lights_fragment_begin:$p,lights_fragment_maps:Jp,lights_fragment_end:Qp,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:_m,normal_pars_vertex:gm,normal_vertex:vm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:Em,opaque_fragment:Tm,packing:bm,premultiplied_alpha_fragment:wm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Im,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Om,skinning_pars_vertex:Fm,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:km,specularmap_pars_fragment:Gm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:jm,worldpos_vertex:Km,background_vert:Zm,background_frag:$m,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:t_,cube_frag:e_,depth_vert:n_,depth_frag:i_,distanceRGBA_vert:s_,distanceRGBA_frag:r_,equirect_vert:a_,equirect_frag:o_,linedashed_vert:l_,linedashed_frag:c_,meshbasic_vert:h_,meshbasic_frag:u_,meshlambert_vert:d_,meshlambert_frag:f_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:__,meshnormal_frag:g_,meshphong_vert:v_,meshphong_frag:x_,meshphysical_vert:M_,meshphysical_frag:y_,meshtoon_vert:S_,meshtoon_frag:E_,points_vert:T_,points_frag:b_,shadow_vert:w_,shadow_frag:A_,sprite_vert:R_,sprite_frag:C_},dt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Cn={basic:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Fe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Fe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Fe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Fe([dt.points,dt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Fe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Fe([dt.common,dt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Fe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Fe([dt.sprite,dt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Fe([dt.common,dt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Fe([dt.lights,dt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Cn.physical={uniforms:Fe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Nr={r:0,b:0,g:0};function P_(s,t,e,n,i,r,a){const o=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),M=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ca)?(h===void 0&&(h=new $t(new Be(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Ms(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(v.colorSpace)!==ee,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $t(new Zo(2,2),new Bi({name:"BackgroundMaterial",uniforms:Ms(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Nr,Qh(s)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function L_(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(P,N,z,X,Y){let K=!1;if(a){const $=_(X,z,N);c!==$&&(c=$,f(c.object)),K=p(P,X,z,Y),K&&M(P,X,z,Y)}else{const $=N.wireframe===!0;(c.geometry!==X.id||c.program!==z.id||c.wireframe!==$)&&(c.geometry=X.id,c.program=z.id,c.wireframe=$,K=!0)}Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,U(P,N,z,X),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,N,z){const X=z.wireframe===!0;let Y=o[P.id];Y===void 0&&(Y={},o[P.id]=Y);let K=Y[N.id];K===void 0&&(K={},Y[N.id]=K);let $=K[X];return $===void 0&&($=m(d()),K[X]=$),$}function m(P){const N=[],z=[],X=[];for(let Y=0;Y<i;Y++)N[Y]=0,z[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,N,z,X){const Y=c.attributes,K=N.attributes;let $=0;const tt=z.getAttributes();for(const at in tt)if(tt[at].location>=0){const J=Y[at];let ut=K[at];if(ut===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor)),J===void 0||J.attribute!==ut||ut&&J.data!==ut.data)return!0;$++}return c.attributesNum!==$||c.index!==X}function M(P,N,z,X){const Y={},K=N.attributes;let $=0;const tt=z.getAttributes();for(const at in tt)if(tt[at].location>=0){let J=K[at];J===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const ut={};ut.attribute=J,J&&J.data&&(ut.data=J.data),Y[at]=ut,$++}c.attributes=Y,c.attributesNum=$,c.index=X}function v(){const P=c.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function y(P){A(P,0)}function A(P,N){const z=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;z[P]=1,X[P]===0&&(s.enableVertexAttribArray(P),X[P]=1),Y[P]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),Y[P]=N)}function R(){const P=c.newAttributes,N=c.enabledAttributes;for(let z=0,X=N.length;z<X;z++)N[z]!==P[z]&&(s.disableVertexAttribArray(z),N[z]=0)}function E(P,N,z,X,Y,K,$){$===!0?s.vertexAttribIPointer(P,N,z,Y,K):s.vertexAttribPointer(P,N,z,X,Y,K)}function U(P,N,z,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=X.attributes,K=z.getAttributes(),$=N.defaultAttributeValues;for(const tt in K){const at=K[tt];if(at.location>=0){let W=Y[tt];if(W===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const J=W.normalized,ut=W.itemSize,Et=e.get(W);if(Et===void 0)continue;const xt=Et.buffer,Pt=Et.type,Ut=Et.bytesPerElement,St=n.isWebGL2===!0&&(Pt===s.INT||Pt===s.UNSIGNED_INT||W.gpuType===Oh);if(W.isInterleavedBufferAttribute){const It=W.data,L=It.stride,ht=W.offset;if(It.isInstancedInterleavedBuffer){for(let Z=0;Z<at.locationSize;Z++)A(at.location+Z,It.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Z=0;Z<at.locationSize;Z++)y(at.location+Z);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let Z=0;Z<at.locationSize;Z++)E(at.location+Z,ut/at.locationSize,Pt,J,L*Ut,(ht+ut/at.locationSize*Z)*Ut,St)}else{if(W.isInstancedBufferAttribute){for(let It=0;It<at.locationSize;It++)A(at.location+It,W.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let It=0;It<at.locationSize;It++)y(at.location+It);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let It=0;It<at.locationSize;It++)E(at.location+It,ut/at.locationSize,Pt,J,ut*Ut,ut/at.locationSize*It*Ut,St)}}else if($!==void 0){const J=$[tt];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(at.location,J);break;case 3:s.vertexAttrib3fv(at.location,J);break;case 4:s.vertexAttrib4fv(at.location,J);break;default:s.vertexAttrib1fv(at.location,J)}}}}R()}function x(){k();for(const P in o){const N=o[P];for(const z in N){const X=N[z];for(const Y in X)g(X[Y].object),delete X[Y];delete N[z]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const N=o[P.id];for(const z in N){const X=N[z];for(const Y in X)g(X[Y].object),delete X[Y];delete N[z]}delete o[P.id]}function O(P){for(const N in o){const z=o[N];if(z[P.id]===void 0)continue;const X=z[P.id];for(const Y in X)g(X[Y].object),delete X[Y];delete z[P.id]}}function k(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:q,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:R}}function D_(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function I_(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=a||t.has("OES_texture_float"),A=v&&y,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:R}}function U_(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ti,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,v=M*4;let y=p.clippingState||null;l.value=y,y=h(g,d,v,f);for(let A=0;A!==v;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function N_(s){let t=new WeakMap;function e(a,o){return o===mo?a.mapping=gs:o===_o&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===mo||o===_o)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yf(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class iu extends tu{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const os=4,Cc=[.125,.215,.35,.446,.526,.582],Ai=20,Xa=new iu,Pc=new Xt;let qa=null,Ya=0,ja=0;const Ti=(1+Math.sqrt(5))/2,rs=1/Ti,Lc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ti,rs),new D(0,Ti,-rs),new D(rs,0,Ti),new D(-rs,0,Ti),new D(Ti,rs,0),new D(-Ti,rs,0)];class So{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ya,ja),t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ks,format:En,colorSpace:qn,depthBuffer:!1},i=Dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O_(r)),this._blurMaterial=F_(r,t,e)}return i}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,i){const o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pc),h.toneMapping=oi,h.autoClear=!1;const f=new cr({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new $t(new Be,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Pc),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Or(i,M*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gs||t.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Lc[(i-1)%Lc.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $t(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let M=0;for(let E=0;E<Ai;++E){const U=E/_,x=Math.exp(-U*U/2);p.push(x),E===0?M+=x:E<m&&(M+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],A=3*y*(i>v-os?i-v+os:0),R=4*(this._cubeSize-y);Or(e,A,R,3*y,2*y),l.setRenderTarget(e),l.render(u,Xa)}}function O_(s){const t=[],e=[],n=[];let i=s;const r=s-os+1+Cc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-os?l=Cc[a-s+os-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let R=0;R<f;R++){const E=R%3*2/3-1,U=R>2?0:-1,x=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];M.set(x,_*g*R),v.set(d,m*g*R);const T=[R,R,R,R,R,R];y.set(T,p*g*R)}const A=new gn;A.setAttribute("position",new Dn(M,_)),A.setAttribute("uv",new Dn(v,m)),A.setAttribute("faceIndex",new Dn(y,p)),t.push(A),i>os&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dc(s,t,e){const n=new Oi(s,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function F_(s,t,e){const n=new Float32Array(Ai),i=new D(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$o(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ic(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Uc(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function $o(){return`

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
	`}function B_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===mo||l===_o,h=l===gs||l===vs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new So(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new So(s));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function z_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function k_(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,y=M.length;v<y;v+=3){const A=M[v+0],R=M[v+1],E=M[v+2];d.push(A,R,R,E,E,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const A=v+0,R=v+1,E=v+2;d.push(A,R,R,E,E,A)}}else return;const m=new(qh(d)?Jh:$h)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function G_(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*l),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,_),e.update(g,r,_)}function d(f,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function H_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function V_(s,t){return s[0]-t[0]}function W_(s,t){return Math.abs(t[1])-Math.abs(s[1])}function X_(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ne,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let N=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var f=N;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),A===!0&&(x=3);let T=h.attributes.position.count*x,O=1;T>t.maxTextureSize&&(O=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const k=new Float32Array(T*O*4*_),q=new Kh(k,T,O,_);q.type=ni,q.needsUpdate=!0;const P=x*4;for(let z=0;z<_;z++){const X=R[z],Y=E[z],K=U[z],$=T*O*4*z;for(let tt=0;tt<X.count;tt++){const at=tt*P;v===!0&&(a.fromBufferAttribute(X,tt),k[$+at+0]=a.x,k[$+at+1]=a.y,k[$+at+2]=a.z,k[$+at+3]=0),y===!0&&(a.fromBufferAttribute(Y,tt),k[$+at+4]=a.x,k[$+at+5]=a.y,k[$+at+6]=a.z,k[$+at+7]=0),A===!0&&(a.fromBufferAttribute(K,tt),k[$+at+8]=a.x,k[$+at+9]=a.y,k[$+at+10]=a.z,k[$+at+11]=K.itemSize===4?a.w:1)}}m={count:_,texture:q,size:new it(T,O)},r.set(h,m),h.addEventListener("dispose",N)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const M=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const A=_[y];A[0]=y,A[1]=d[y]}_.sort(W_);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(V_);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const A=o[y],R=A[0],E=A[1];R!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+y)!==m[R]&&h.setAttribute("morphTarget"+y,m[R]),p&&h.getAttribute("morphNormal"+y)!==p[R]&&h.setAttribute("morphNormal"+y,p[R]),i[y]=E,M+=E):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const v=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function q_(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class su extends nn{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Pi,h!==Pi&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=ei),n===void 0&&h===xs&&(n=Ci),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ru=new nn,au=new su(1,1);au.compareFunction=Xh;const ou=new Kh,lu=new Pf,cu=new eu,Nc=[],Oc=[],Fc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function Rs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Nc[i];if(r===void 0&&(r=new Float32Array(i),Nc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ua(s,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Y_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function j_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function K_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function Z_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function $_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;zc.set(n),s.uniformMatrix2fv(this.addr,!1,zc),Ee(e,n)}}function J_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Bc.set(n),s.uniformMatrix3fv(this.addr,!1,Bc),Ee(e,n)}}function Q_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Fc.set(n),s.uniformMatrix4fv(this.addr,!1,Fc),Ee(e,n)}}function tg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function sg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function lg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?au:ru;e.setTexture2D(t||r,i)}function cg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lu,i)}function hg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cu,i)}function ug(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ou,i)}function dg(s){switch(s){case 5126:return Y_;case 35664:return j_;case 35665:return K_;case 35666:return Z_;case 35674:return $_;case 35675:return J_;case 35676:return Q_;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}function fg(s,t){s.uniform1fv(this.addr,t)}function pg(s,t){const e=Rs(t,this.size,2);s.uniform2fv(this.addr,e)}function mg(s,t){const e=Rs(t,this.size,3);s.uniform3fv(this.addr,e)}function _g(s,t){const e=Rs(t,this.size,4);s.uniform4fv(this.addr,e)}function gg(s,t){const e=Rs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function vg(s,t){const e=Rs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function xg(s,t){const e=Rs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Mg(s,t){s.uniform1iv(this.addr,t)}function yg(s,t){s.uniform2iv(this.addr,t)}function Sg(s,t){s.uniform3iv(this.addr,t)}function Eg(s,t){s.uniform4iv(this.addr,t)}function Tg(s,t){s.uniform1uiv(this.addr,t)}function bg(s,t){s.uniform2uiv(this.addr,t)}function wg(s,t){s.uniform3uiv(this.addr,t)}function Ag(s,t){s.uniform4uiv(this.addr,t)}function Rg(s,t,e){const n=this.cache,i=t.length,r=ua(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ru,r[a])}function Cg(s,t,e){const n=this.cache,i=t.length,r=ua(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||lu,r[a])}function Pg(s,t,e){const n=this.cache,i=t.length,r=ua(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||cu,r[a])}function Lg(s,t,e){const n=this.cache,i=t.length,r=ua(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ou,r[a])}function Dg(s){switch(s){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return _g;case 35674:return gg;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return Sg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return bg;case 36295:return wg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}class Ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}}class Ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function kc(s,t){s.seq.push(t),s.map[t.id]=t}function Og(s,t,e){const n=s.name,i=n.length;for(Ka.lastIndex=0;;){const r=Ka.exec(n),a=Ka.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){kc(e,c===void 0?new Ig(o,s,t):new Ug(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Ng(o),kc(e,u)),e=u}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Og(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Gc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Fg=37297;let Bg=0;function zg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function kg(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let n;switch(t===e?n="":t===Jr&&e===$r?n="LinearDisplayP3ToLinearSRGB":t===$r&&e===Jr&&(n="LinearSRGBToLinearDisplayP3"),s){case qn:case ha:return[n,"LinearTransferOETF"];case we:case Xo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Hc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+zg(s.getShaderSource(t),a)}else return i}function Gg(s,t){const e=kg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hg(s,t){let e;switch(t){case Jd:e="Linear";break;case Qd:e="Reinhard";break;case tf:e="OptimizedCineon";break;case Uh:e="ACESFilmic";break;case nf:e="AgX";break;case ef:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Vg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function Wg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ls).join(`
`)}function Xg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ls(s){return s!==""}function Vc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(s){return s.replace(Yg,Kg)}const jg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kg(s,t){let e=kt[t];if(e===void 0){const n=jg.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Eo(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(s){return s.replace(Zg,$g)}function $g(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gs:case vs:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function e0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ih:t="ENVMAP_BLENDING_MULTIPLY";break;case Zd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function n0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function i0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Jg(e),c=Qg(e),h=t0(e),u=e0(e),d=n0(e),f=e.isWebGL2?"":Vg(e),g=Wg(e),_=Xg(r),m=i.createProgram();let p,M,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ls).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ls).join(`
`),M.length>0&&(M+=`
`)):(p=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),M=[f,qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?kt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=Eo(a),a=Vc(a,e),a=Wc(a,e),o=Eo(o),o=Vc(o,e),o=Wc(o,e),a=Xc(a),o=Xc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=v+p+a,A=v+M+o,R=Gc(i,i.VERTEX_SHADER,y),E=Gc(i,i.FRAGMENT_SHADER,A);i.attachShader(m,R),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function U(k){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(R).trim(),N=i.getShaderInfoLog(E).trim();let z=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,R,E);else{const Y=Hc(i,R,"vertex"),K=Hc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Y+`
`+K)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||N==="")&&(X=!1);X&&(k.diagnostics={runnable:z,programLog:q,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:M}})}i.deleteShader(R),i.deleteShader(E),x=new Vr(i,m),T=qg(i,m)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,Fg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=E,this}let s0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new a0(t),e.set(t,n)),n}}class a0{constructor(t){this.id=s0++,this.code=t,this.usedTimes=0}}function o0(s,t,e,n,i,r,a){const o=new jo,l=new r0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,T,O,k,q){const P=k.fog,N=q.geometry,z=x.isMeshStandardMaterial?k.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||z),Y=X&&X.mapping===ca?X.image.height:null,K=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,tt=$!==void 0?$.length:0;let at=0;N.morphAttributes.position!==void 0&&(at=1),N.morphAttributes.normal!==void 0&&(at=2),N.morphAttributes.color!==void 0&&(at=3);let W,J,ut,Et;if(K){const fe=Cn[K];W=fe.vertexShader,J=fe.fragmentShader}else W=x.vertexShader,J=x.fragmentShader,l.update(x),ut=l.getVertexShaderID(x),Et=l.getFragmentShaderID(x);const xt=s.getRenderTarget(),Pt=q.isInstancedMesh===!0,Ut=q.isBatchedMesh===!0,St=!!x.map,It=!!x.matcap,L=!!X,ht=!!x.aoMap,Z=!!x.lightMap,ot=!!x.bumpMap,j=!!x.normalMap,Tt=!!x.displacementMap,mt=!!x.emissiveMap,b=!!x.metalnessMap,S=!!x.roughnessMap,F=x.anisotropy>0,st=x.clearcoat>0,et=x.iridescence>0,Q=x.sheen>0,yt=x.transmission>0,ft=F&&!!x.anisotropyMap,gt=st&&!!x.clearcoatMap,Rt=st&&!!x.clearcoatNormalMap,Ft=st&&!!x.clearcoatRoughnessMap,nt=et&&!!x.iridescenceMap,Kt=et&&!!x.iridescenceThicknessMap,Gt=Q&&!!x.sheenColorMap,Nt=Q&&!!x.sheenRoughnessMap,At=!!x.specularMap,_t=!!x.specularColorMap,C=!!x.specularIntensityMap,lt=yt&&!!x.transmissionMap,bt=yt&&!!x.thicknessMap,Mt=!!x.gradientMap,rt=!!x.alphaMap,I=x.alphaTest>0,ct=!!x.alphaHash,pt=!!x.extensions,Lt=!!N.attributes.uv1,Ct=!!N.attributes.uv2,qt=!!N.attributes.uv3;let Yt=oi;return x.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Yt=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:J,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:Et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ut,instancing:Pt,instancingColor:Pt&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xt===null?s.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:qn,map:St,matcap:It,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:Y,aoMap:ht,lightMap:Z,bumpMap:ot,normalMap:j,displacementMap:d&&Tt,emissiveMap:mt,normalMapObjectSpace:j&&x.normalMapType===mf,normalMapTangentSpace:j&&x.normalMapType===Wh,metalnessMap:b,roughnessMap:S,anisotropy:F,anisotropyMap:ft,clearcoat:st,clearcoatMap:gt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Ft,iridescence:et,iridescenceMap:nt,iridescenceThicknessMap:Kt,sheen:Q,sheenColorMap:Gt,sheenRoughnessMap:Nt,specularMap:At,specularColorMap:_t,specularIntensityMap:C,transmission:yt,transmissionMap:lt,thicknessMap:bt,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===ds,alphaMap:rt,alphaTest:I,alphaHash:ct,combine:x.combine,mapUv:St&&_(x.map.channel),aoMapUv:ht&&_(x.aoMap.channel),lightMapUv:Z&&_(x.lightMap.channel),bumpMapUv:ot&&_(x.bumpMap.channel),normalMapUv:j&&_(x.normalMap.channel),displacementMapUv:Tt&&_(x.displacementMap.channel),emissiveMapUv:mt&&_(x.emissiveMap.channel),metalnessMapUv:b&&_(x.metalnessMap.channel),roughnessMapUv:S&&_(x.roughnessMap.channel),anisotropyMapUv:ft&&_(x.anisotropyMap.channel),clearcoatMapUv:gt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(x.sheenRoughnessMap.channel),specularMapUv:At&&_(x.specularMap.channel),specularColorMapUv:_t&&_(x.specularColorMap.channel),specularIntensityMapUv:C&&_(x.specularIntensityMap.channel),transmissionMapUv:lt&&_(x.transmissionMap.channel),thicknessMapUv:bt&&_(x.thicknessMap.channel),alphaMapUv:rt&&_(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(j||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:Ct,vertexUv3s:qt,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(St||rt),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:at,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:St&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===He,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:pt&&x.extensions.derivatives===!0,extensionFragDepth:pt&&x.extensions.fragDepth===!0,extensionDrawBuffers:pt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)T.push(O),T.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(M(T,x),v(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function M(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function y(x){const T=g[x.type];let O;if(T){const k=Cn[T];O=Vf.clone(k.uniforms)}else O=x.uniforms;return O}function A(x,T){let O;for(let k=0,q=c.length;k<q;k++){const P=c[k];if(P.cacheKey===T){O=P,++O.usedTimes;break}}return O===void 0&&(O=new i0(s,T,x,r),c.push(O)),O}function R(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:U}}function l0(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function c0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Yc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function jc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||c0),n.length>1&&n.sort(d||Yc),i.length>1&&i.sort(d||Yc)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function h0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new jc,s.set(n,[a])):i>=r.length?(a=new jc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function u0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Xt};break;case"SpotLight":e={position:new D,direction:new D,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function d0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let f0=0;function p0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function m0(s,t){const e=new u0,n=d0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,a=new _e,o=new _e;function l(h,u){let d=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,m=0,p=0,M=0,v=0,y=0,A=0,R=0,E=0,U=0,x=0;h.sort(p0);const T=u===!0?Math.PI:1;for(let k=0,q=h.length;k<q;k++){const P=h[k],N=P.color,z=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*z*T,f+=N.g*z*T,g+=N.b*z*T;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],z);x++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const $=P.shadow,tt=n.get(P);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=P.shadow.matrix,y++}i.directional[_]=K,_++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(N).multiplyScalar(z*T),K.distance=X,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[p]=K;const $=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&U++),i.spotLightMatrix[p]=$.matrix,P.castShadow){const tt=n.get(P);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.spotShadow[p]=tt,i.spotShadowMap[p]=Y,R++}p++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(N).multiplyScalar(z),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=K,M++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),K.distance=P.distance,K.decay=P.decay,P.castShadow){const $=P.shadow,tt=n.get(P);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=P.shadow.matrix,A++}i.point[m]=K,m++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(z*T),K.groundColor.copy(P.groundColor).multiplyScalar(z*T),i.hemi[v]=K,v++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==M||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==A||O.numSpotShadows!==R||O.numSpotMaps!==E||O.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=R+E-U,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=x,O.directionalLength=_,O.pointLength=m,O.spotLength=p,O.rectAreaLength=M,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=A,O.numSpotShadows=R,O.numSpotMaps=E,O.numLightProbes=x,i.version=f0++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const y=h[M];if(y.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(y.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Kc(s,t){const e=new m0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _0(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Kc(s,t),e.set(r,[l])):a>=o.length?(l=new Kc(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class g0 extends lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class v0 extends lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
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
}`;function y0(s,t,e){let n=new Ko;const i=new it,r=new it,a=new ne,o=new g0({depthPacking:pf}),l=new v0,c={},h=e.maxTextureSize,u={[ui]:He,[He]:ui,[dn]:dn},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:x0,fragmentShader:M0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(R,E,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const x=s.getRenderTarget(),T=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),k=s.state;k.setBlending(ai),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=p!==Gn&&this.type===Gn,P=p===Gn&&this.type!==Gn;for(let N=0,z=R.length;N<z;N++){const X=R[N],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const K=Y.getFrameExtents();if(i.multiply(K),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,Y.mapSize.y=r.y)),Y.map===null||q===!0||P===!0){const tt=this.type!==Gn?{minFilter:ze,magFilter:ze}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Oi(i.x,i.y,tt),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const $=Y.getViewportCount();for(let tt=0;tt<$;tt++){const at=Y.getViewport(tt);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),k.viewport(a),Y.updateMatrices(X,tt),n=Y.getFrustum(),y(E,U,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===Gn&&M(Y,U),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,T,O)};function M(R,E){const U=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Oi(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(E,null,U,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(E,null,U,f,_,null)}function v(R,E,U,x){let T=null;const O=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)T=O;else if(T=U.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=T.uuid,q=E.uuid;let P=c[k];P===void 0&&(P={},c[k]=P);let N=P[q];N===void 0&&(N=T.clone(),P[q]=N,E.addEventListener("dispose",A)),T=N}if(T.visible=E.visible,T.wireframe=E.wireframe,x===Gn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=s.properties.get(T);k.light=U}return T}function y(R,E,U,x,T){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Gn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const q=t.update(R),P=R.material;if(Array.isArray(P)){const N=q.groups;for(let z=0,X=N.length;z<X;z++){const Y=N[z],K=P[Y.materialIndex];if(K&&K.visible){const $=v(R,K,x,T);R.onBeforeShadow(s,R,E,U,q,$,Y),s.renderBufferDirect(U,null,q,$,R,Y),R.onAfterShadow(s,R,E,U,q,$,Y)}}}else if(P.visible){const N=v(R,P,x,T);R.onBeforeShadow(s,R,E,U,q,N,null),s.renderBufferDirect(U,null,q,N,R,null),R.onAfterShadow(s,R,E,U,q,N,null)}}const k=R.children;for(let q=0,P=k.length;q<P;q++)y(k[q],E,U,x,T)}function A(R){R.target.removeEventListener("dispose",A);for(const U in c){const x=c[U],T=R.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}function S0(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const ct=new ne;let pt=null;const Lt=new ne(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!I&&(s.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){I=Ct},setClear:function(Ct,qt,Yt,ce,fe){fe===!0&&(Ct*=ce,qt*=ce,Yt*=ce),ct.set(Ct,qt,Yt,ce),Lt.equals(ct)===!1&&(s.clearColor(Ct,qt,Yt,ce),Lt.copy(ct))},reset:function(){I=!1,pt=null,Lt.set(-1,0,0,0)}}}function r(){let I=!1,ct=null,pt=null,Lt=null;return{setTest:function(Ct){Ct?Ut(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(Ct){ct!==Ct&&!I&&(s.depthMask(Ct),ct=Ct)},setFunc:function(Ct){if(pt!==Ct){switch(Ct){case Vd:s.depthFunc(s.NEVER);break;case Wd:s.depthFunc(s.ALWAYS);break;case Xd:s.depthFunc(s.LESS);break;case Kr:s.depthFunc(s.LEQUAL);break;case qd:s.depthFunc(s.EQUAL);break;case Yd:s.depthFunc(s.GEQUAL);break;case jd:s.depthFunc(s.GREATER);break;case Kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=Ct}},setLocked:function(Ct){I=Ct},setClear:function(Ct){Lt!==Ct&&(s.clearDepth(Ct),Lt=Ct)},reset:function(){I=!1,ct=null,pt=null,Lt=null}}}function a(){let I=!1,ct=null,pt=null,Lt=null,Ct=null,qt=null,Yt=null,ce=null,fe=null;return{setTest:function(Zt){I||(Zt?Ut(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(Zt){ct!==Zt&&!I&&(s.stencilMask(Zt),ct=Zt)},setFunc:function(Zt,ve,Tn){(pt!==Zt||Lt!==ve||Ct!==Tn)&&(s.stencilFunc(Zt,ve,Tn),pt=Zt,Lt=ve,Ct=Tn)},setOp:function(Zt,ve,Tn){(qt!==Zt||Yt!==ve||ce!==Tn)&&(s.stencilOp(Zt,ve,Tn),qt=Zt,Yt=ve,ce=Tn)},setLocked:function(Zt){I=Zt},setClear:function(Zt){fe!==Zt&&(s.clearStencil(Zt),fe=Zt)},reset:function(){I=!1,ct=null,pt=null,Lt=null,Ct=null,qt=null,Yt=null,ce=null,fe=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,v=null,y=null,A=null,R=null,E=null,U=null,x=new Xt(0,0,0),T=0,O=!1,k=null,q=null,P=null,N=null,z=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=K>=2);let tt=null,at={};const W=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),ut=new ne().fromArray(W),Et=new ne().fromArray(J);function xt(I,ct,pt,Lt){const Ct=new Uint8Array(4),qt=s.createTexture();s.bindTexture(I,qt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<pt;Yt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ct,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(ct+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return qt}const Pt={};Pt[s.TEXTURE_2D]=xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pt[s.TEXTURE_2D_ARRAY]=xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(s.DEPTH_TEST),l.setFunc(Kr),mt(!1),b(Ll),Ut(s.CULL_FACE),j(ai);function Ut(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function St(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function It(I,ct){return f[I]!==ct?(s.bindFramebuffer(I,ct),f[I]=ct,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ct),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ct)),!0):!1}function L(I,ct){let pt=_,Lt=!1;if(I)if(pt=g.get(ct),pt===void 0&&(pt=[],g.set(ct,pt)),I.isWebGLMultipleRenderTargets){const Ct=I.texture;if(pt.length!==Ct.length||pt[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,Yt=Ct.length;qt<Yt;qt++)pt[qt]=s.COLOR_ATTACHMENT0+qt;pt.length=Ct.length,Lt=!0}}else pt[0]!==s.COLOR_ATTACHMENT0&&(pt[0]=s.COLOR_ATTACHMENT0,Lt=!0);else pt[0]!==s.BACK&&(pt[0]=s.BACK,Lt=!0);Lt&&(e.isWebGL2?s.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function ht(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const Z={[wi]:s.FUNC_ADD,[Rd]:s.FUNC_SUBTRACT,[Cd]:s.FUNC_REVERSE_SUBTRACT};if(n)Z[Nl]=s.MIN,Z[Ol]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(Z[Nl]=I.MIN_EXT,Z[Ol]=I.MAX_EXT)}const ot={[Pd]:s.ZERO,[Ld]:s.ONE,[Dd]:s.SRC_COLOR,[fo]:s.SRC_ALPHA,[Bd]:s.SRC_ALPHA_SATURATE,[Od]:s.DST_COLOR,[Ud]:s.DST_ALPHA,[Id]:s.ONE_MINUS_SRC_COLOR,[po]:s.ONE_MINUS_SRC_ALPHA,[Fd]:s.ONE_MINUS_DST_COLOR,[Nd]:s.ONE_MINUS_DST_ALPHA,[zd]:s.CONSTANT_COLOR,[kd]:s.ONE_MINUS_CONSTANT_COLOR,[Gd]:s.CONSTANT_ALPHA,[Hd]:s.ONE_MINUS_CONSTANT_ALPHA};function j(I,ct,pt,Lt,Ct,qt,Yt,ce,fe,Zt){if(I===ai){p===!0&&(St(s.BLEND),p=!1);return}if(p===!1&&(Ut(s.BLEND),p=!0),I!==Ad){if(I!==M||Zt!==O){if((v!==wi||R!==wi)&&(s.blendEquation(s.FUNC_ADD),v=wi,R=wi),Zt)switch(I){case ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dl:s.blendFunc(s.ONE,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ul:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,A=null,E=null,U=null,x.set(0,0,0),T=0,M=I,O=Zt}return}Ct=Ct||ct,qt=qt||pt,Yt=Yt||Lt,(ct!==v||Ct!==R)&&(s.blendEquationSeparate(Z[ct],Z[Ct]),v=ct,R=Ct),(pt!==y||Lt!==A||qt!==E||Yt!==U)&&(s.blendFuncSeparate(ot[pt],ot[Lt],ot[qt],ot[Yt]),y=pt,A=Lt,E=qt,U=Yt),(ce.equals(x)===!1||fe!==T)&&(s.blendColor(ce.r,ce.g,ce.b,fe),x.copy(ce),T=fe),M=I,O=!1}function Tt(I,ct){I.side===dn?St(s.CULL_FACE):Ut(s.CULL_FACE);let pt=I.side===He;ct&&(pt=!pt),mt(pt),I.blending===ds&&I.transparent===!1?j(ai):j(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Lt=I.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ut(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(I){k!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),k=I)}function b(I){I!==bd?(Ut(s.CULL_FACE),I!==q&&(I===Ll?s.cullFace(s.BACK):I===wd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),q=I}function S(I){I!==P&&(Y&&s.lineWidth(I),P=I)}function F(I,ct,pt){I?(Ut(s.POLYGON_OFFSET_FILL),(N!==ct||z!==pt)&&(s.polygonOffset(ct,pt),N=ct,z=pt)):St(s.POLYGON_OFFSET_FILL)}function st(I){I?Ut(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function et(I){I===void 0&&(I=s.TEXTURE0+X-1),tt!==I&&(s.activeTexture(I),tt=I)}function Q(I,ct,pt){pt===void 0&&(tt===null?pt=s.TEXTURE0+X-1:pt=tt);let Lt=at[pt];Lt===void 0&&(Lt={type:void 0,texture:void 0},at[pt]=Lt),(Lt.type!==I||Lt.texture!==ct)&&(tt!==pt&&(s.activeTexture(pt),tt=pt),s.bindTexture(I,ct||Pt[I]),Lt.type=I,Lt.texture=ct)}function yt(){const I=at[tt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ft(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(I){ut.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ut.copy(I))}function lt(I){Et.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Et.copy(I))}function bt(I,ct){let pt=u.get(ct);pt===void 0&&(pt=new WeakMap,u.set(ct,pt));let Lt=pt.get(I);Lt===void 0&&(Lt=s.getUniformBlockIndex(ct,I.name),pt.set(I,Lt))}function Mt(I,ct){const Lt=u.get(ct).get(I);h.get(ct)!==Lt&&(s.uniformBlockBinding(ct,Lt,I.__bindingPointIndex),h.set(ct,Lt))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},tt=null,at={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,v=null,y=null,A=null,R=null,E=null,U=null,x=new Xt(0,0,0),T=0,O=!1,k=null,q=null,P=null,N=null,z=null,ut.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ut,disable:St,bindFramebuffer:It,drawBuffers:L,useProgram:ht,setBlending:j,setMaterial:Tt,setFlipSided:mt,setCullFace:b,setLineWidth:S,setPolygonOffset:F,setScissorTest:st,activeTexture:et,bindTexture:Q,unbindTexture:yt,compressedTexImage2D:ft,compressedTexImage3D:gt,texImage2D:At,texImage3D:_t,updateUBOMapping:bt,uniformBlockBinding:Mt,texStorage2D:Gt,texStorage3D:Nt,texSubImage2D:Rt,texSubImage3D:Ft,compressedTexSubImage2D:nt,compressedTexSubImage3D:Kt,scissor:C,viewport:lt,reset:rt}}function E0(s,t,e,n,i,r,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return f?new OffscreenCanvas(b,S):ta("canvas")}function _(b,S,F,st){let et=1;if((b.width>st||b.height>st)&&(et=st/Math.max(b.width,b.height)),et<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const Q=S?yo:Math.floor,yt=Q(et*b.width),ft=Q(et*b.height);u===void 0&&(u=g(yt,ft));const gt=F?g(yt,ft):u;return gt.width=yt,gt.height=ft,gt.getContext("2d").drawImage(b,0,0,yt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+yt+"x"+ft+")."),gt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return dc(b.width)&&dc(b.height)}function p(b){return o?!1:b.wrapS!==Sn||b.wrapT!==Sn||b.minFilter!==ze&&b.minFilter!==un}function M(b,S){return b.generateMipmaps&&S&&b.minFilter!==ze&&b.minFilter!==un}function v(b){s.generateMipmap(b)}function y(b,S,F,st,et=!1){if(o===!1)return S;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=S;if(S===s.RED&&(F===s.FLOAT&&(Q=s.R32F),F===s.HALF_FLOAT&&(Q=s.R16F),F===s.UNSIGNED_BYTE&&(Q=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Q=s.R8UI),F===s.UNSIGNED_SHORT&&(Q=s.R16UI),F===s.UNSIGNED_INT&&(Q=s.R32UI),F===s.BYTE&&(Q=s.R8I),F===s.SHORT&&(Q=s.R16I),F===s.INT&&(Q=s.R32I)),S===s.RG&&(F===s.FLOAT&&(Q=s.RG32F),F===s.HALF_FLOAT&&(Q=s.RG16F),F===s.UNSIGNED_BYTE&&(Q=s.RG8)),S===s.RGBA){const yt=et?Zr:Jt.getTransfer(st);F===s.FLOAT&&(Q=s.RGBA32F),F===s.HALF_FLOAT&&(Q=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Q=yt===ee?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function A(b,S,F){return M(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==ze&&b.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){return b===ze||b===Fl||b===ya?s.NEAREST:s.LINEAR}function E(b){const S=b.target;S.removeEventListener("dispose",E),x(S),S.isVideoTexture&&h.delete(S)}function U(b){const S=b.target;S.removeEventListener("dispose",U),O(S)}function x(b){const S=n.get(b);if(S.__webglInit===void 0)return;const F=b.source,st=d.get(F);if(st){const et=st[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(b),Object.keys(st).length===0&&d.delete(F)}n.remove(b)}function T(b){const S=n.get(b);s.deleteTexture(S.__webglTexture);const F=b.source,st=d.get(F);delete st[S.__cacheKey],a.memory.textures--}function O(b){const S=b.texture,F=n.get(b),st=n.get(S);if(st.__webglTexture!==void 0&&(s.deleteTexture(st.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(F.__webglFramebuffer[et]))for(let Q=0;Q<F.__webglFramebuffer[et].length;Q++)s.deleteFramebuffer(F.__webglFramebuffer[et][Q]);else s.deleteFramebuffer(F.__webglFramebuffer[et]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[et])}else{if(Array.isArray(F.__webglFramebuffer))for(let et=0;et<F.__webglFramebuffer.length;et++)s.deleteFramebuffer(F.__webglFramebuffer[et]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let et=0;et<F.__webglColorRenderbuffer.length;et++)F.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[et]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let et=0,Q=S.length;et<Q;et++){const yt=n.get(S[et]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(S[et])}n.remove(S),n.remove(b)}let k=0;function q(){k=0}function P(){const b=k;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),k+=1,b}function N(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function z(b,S){const F=n.get(b);if(b.isVideoTexture&&Tt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const st=b.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(F,b,S);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function X(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ut(F,b,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function Y(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ut(F,b,S);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function K(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Et(F,b,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}const $={[go]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[vo]:s.MIRRORED_REPEAT},tt={[ze]:s.NEAREST,[Fl]:s.NEAREST_MIPMAP_NEAREST,[ya]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[sf]:s.LINEAR_MIPMAP_NEAREST,[js]:s.LINEAR_MIPMAP_LINEAR},at={[_f]:s.NEVER,[Sf]:s.ALWAYS,[gf]:s.LESS,[Xh]:s.LEQUAL,[vf]:s.EQUAL,[yf]:s.GEQUAL,[xf]:s.GREATER,[Mf]:s.NOTEQUAL};function W(b,S,F){if(F?(s.texParameteri(b,s.TEXTURE_WRAP_S,$[S.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,$[S.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,$[S.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,tt[S.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,tt[S.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Sn||S.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,R(S.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==ze&&S.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ze||S.minFilter!==ya&&S.minFilter!==js||S.type===ni&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ks&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(b,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function J(b,S){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",E));const st=S.source;let et=d.get(st);et===void 0&&(et={},d.set(st,et));const Q=N(S);if(Q!==b.__cacheKey){et[Q]===void 0&&(et[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),et[Q].usedTimes++;const yt=et[b.__cacheKey];yt!==void 0&&(et[b.__cacheKey].usedTimes--,yt.usedTimes===0&&T(S)),b.__cacheKey=Q,b.__webglTexture=et[Q].texture}return F}function ut(b,S,F){let st=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=s.TEXTURE_3D);const et=J(b,S),Q=S.source;e.bindTexture(st,b.__webglTexture,s.TEXTURE0+F);const yt=n.get(Q);if(Q.version!==yt.__version||et===!0){e.activeTexture(s.TEXTURE0+F);const ft=Jt.getPrimaries(Jt.workingColorSpace),gt=S.colorSpace===fn?null:Jt.getPrimaries(S.colorSpace),Rt=S.colorSpace===fn||ft===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ft=p(S)&&m(S.image)===!1;let nt=_(S.image,Ft,!1,i.maxTextureSize);nt=mt(S,nt);const Kt=m(nt)||o,Gt=r.convert(S.format,S.colorSpace);let Nt=r.convert(S.type),At=y(S.internalFormat,Gt,Nt,S.colorSpace,S.isVideoTexture);W(st,S,Kt);let _t;const C=S.mipmaps,lt=o&&S.isVideoTexture!==!0&&At!==Hh,bt=yt.__version===void 0||et===!0,Mt=A(S,nt,Kt);if(S.isDepthTexture)At=s.DEPTH_COMPONENT,o?S.type===ni?At=s.DEPTH_COMPONENT32F:S.type===ei?At=s.DEPTH_COMPONENT24:S.type===Ci?At=s.DEPTH24_STENCIL8:At=s.DEPTH_COMPONENT16:S.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Pi&&At===s.DEPTH_COMPONENT&&S.type!==Wo&&S.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ei,Nt=r.convert(S.type)),S.format===xs&&At===s.DEPTH_COMPONENT&&(At=s.DEPTH_STENCIL,S.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ci,Nt=r.convert(S.type))),bt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,At,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,At,nt.width,nt.height,0,Gt,Nt,null));else if(S.isDataTexture)if(C.length>0&&Kt){lt&&bt&&e.texStorage2D(s.TEXTURE_2D,Mt,At,C[0].width,C[0].height);for(let rt=0,I=C.length;rt<I;rt++)_t=C[rt],lt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,_t.width,_t.height,Gt,Nt,_t.data):e.texImage2D(s.TEXTURE_2D,rt,At,_t.width,_t.height,0,Gt,Nt,_t.data);S.generateMipmaps=!1}else lt?(bt&&e.texStorage2D(s.TEXTURE_2D,Mt,At,nt.width,nt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,Gt,Nt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,At,nt.width,nt.height,0,Gt,Nt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,At,C[0].width,C[0].height,nt.depth);for(let rt=0,I=C.length;rt<I;rt++)_t=C[rt],S.format!==En?Gt!==null?lt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,nt.depth,Gt,_t.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,At,_t.width,_t.height,nt.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,nt.depth,Gt,Nt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,At,_t.width,_t.height,nt.depth,0,Gt,Nt,_t.data)}else{lt&&bt&&e.texStorage2D(s.TEXTURE_2D,Mt,At,C[0].width,C[0].height);for(let rt=0,I=C.length;rt<I;rt++)_t=C[rt],S.format!==En?Gt!==null?lt?e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,_t.width,_t.height,Gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,At,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,_t.width,_t.height,Gt,Nt,_t.data):e.texImage2D(s.TEXTURE_2D,rt,At,_t.width,_t.height,0,Gt,Nt,_t.data)}else if(S.isDataArrayTexture)lt?(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,At,nt.width,nt.height,nt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Gt,Nt,nt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,Gt,Nt,nt.data);else if(S.isData3DTexture)lt?(bt&&e.texStorage3D(s.TEXTURE_3D,Mt,At,nt.width,nt.height,nt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Gt,Nt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,Gt,Nt,nt.data);else if(S.isFramebufferTexture){if(bt)if(lt)e.texStorage2D(s.TEXTURE_2D,Mt,At,nt.width,nt.height);else{let rt=nt.width,I=nt.height;for(let ct=0;ct<Mt;ct++)e.texImage2D(s.TEXTURE_2D,ct,At,rt,I,0,Gt,Nt,null),rt>>=1,I>>=1}}else if(C.length>0&&Kt){lt&&bt&&e.texStorage2D(s.TEXTURE_2D,Mt,At,C[0].width,C[0].height);for(let rt=0,I=C.length;rt<I;rt++)_t=C[rt],lt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Gt,Nt,_t):e.texImage2D(s.TEXTURE_2D,rt,At,Gt,Nt,_t);S.generateMipmaps=!1}else lt?(bt&&e.texStorage2D(s.TEXTURE_2D,Mt,At,nt.width,nt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Gt,Nt,nt)):e.texImage2D(s.TEXTURE_2D,0,At,Gt,Nt,nt);M(S,Kt)&&v(st),yt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Et(b,S,F){if(S.image.length!==6)return;const st=J(b,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+F);const Q=n.get(et);if(et.version!==Q.__version||st===!0){e.activeTexture(s.TEXTURE0+F);const yt=Jt.getPrimaries(Jt.workingColorSpace),ft=S.colorSpace===fn?null:Jt.getPrimaries(S.colorSpace),gt=S.colorSpace===fn||yt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,Ft=S.image[0]&&S.image[0].isDataTexture,nt=[];for(let rt=0;rt<6;rt++)!Rt&&!Ft?nt[rt]=_(S.image[rt],!1,!0,i.maxCubemapSize):nt[rt]=Ft?S.image[rt].image:S.image[rt],nt[rt]=mt(S,nt[rt]);const Kt=nt[0],Gt=m(Kt)||o,Nt=r.convert(S.format,S.colorSpace),At=r.convert(S.type),_t=y(S.internalFormat,Nt,At,S.colorSpace),C=o&&S.isVideoTexture!==!0,lt=Q.__version===void 0||st===!0;let bt=A(S,Kt,Gt);W(s.TEXTURE_CUBE_MAP,S,Gt);let Mt;if(Rt){C&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,_t,Kt.width,Kt.height);for(let rt=0;rt<6;rt++){Mt=nt[rt].mipmaps;for(let I=0;I<Mt.length;I++){const ct=Mt[I];S.format!==En?Nt!==null?C?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,ct.width,ct.height,Nt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,_t,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,ct.width,ct.height,Nt,At,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,_t,ct.width,ct.height,0,Nt,At,ct.data)}}}else{Mt=S.mipmaps,C&&lt&&(Mt.length>0&&bt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,_t,nt[0].width,nt[0].height));for(let rt=0;rt<6;rt++)if(Ft){C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,nt[rt].width,nt[rt].height,Nt,At,nt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,_t,nt[rt].width,nt[rt].height,0,Nt,At,nt[rt].data);for(let I=0;I<Mt.length;I++){const pt=Mt[I].image[rt].image;C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,pt.width,pt.height,Nt,At,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,_t,pt.width,pt.height,0,Nt,At,pt.data)}}else{C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Nt,At,nt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,_t,Nt,At,nt[rt]);for(let I=0;I<Mt.length;I++){const ct=Mt[I];C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,Nt,At,ct.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,_t,Nt,At,ct.image[rt])}}}M(S,Gt)&&v(s.TEXTURE_CUBE_MAP),Q.__version=et.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function xt(b,S,F,st,et,Q){const yt=r.convert(F.format,F.colorSpace),ft=r.convert(F.type),gt=y(F.internalFormat,yt,ft,F.colorSpace);if(!n.get(S).__hasExternalTextures){const Ft=Math.max(1,S.width>>Q),nt=Math.max(1,S.height>>Q);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,gt,Ft,nt,S.depth,0,yt,ft,null):e.texImage2D(et,Q,gt,Ft,nt,0,yt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),j(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,et,n.get(F).__webglTexture,0,ot(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,et,n.get(F).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(b,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let st=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||j(S)){const et=S.depthTexture;et&&et.isDepthTexture&&(et.type===ni?st=s.DEPTH_COMPONENT32F:et.type===ei&&(st=s.DEPTH_COMPONENT24));const Q=ot(S);j(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,st,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,st,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,st,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const st=ot(S);F&&j(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,s.DEPTH24_STENCIL8,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const st=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0;et<st.length;et++){const Q=st[et],yt=r.convert(Q.format,Q.colorSpace),ft=r.convert(Q.type),gt=y(Q.internalFormat,yt,ft,Q.colorSpace),Rt=ot(S);F&&j(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,gt,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,gt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,gt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const st=n.get(S.depthTexture).__webglTexture,et=ot(S);if(S.depthTexture.format===Pi)j(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(S.depthTexture.format===xs)j(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function St(b){const S=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,b)}else if(F){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]=s.createRenderbuffer(),Pt(S.__webglDepthbuffer[st],b,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Pt(S.__webglDepthbuffer,b,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(b,S,F){const st=n.get(b);S!==void 0&&xt(st.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&St(b)}function L(b){const S=b.texture,F=n.get(b),st=n.get(S);b.addEventListener("dispose",U),b.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=S.version,a.memory.textures++);const et=b.isWebGLCubeRenderTarget===!0,Q=b.isWebGLMultipleRenderTargets===!0,yt=m(b)||o;if(et){F.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ft]=[];for(let gt=0;gt<S.mipmaps.length;gt++)F.__webglFramebuffer[ft][gt]=s.createFramebuffer()}else F.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)F.__webglFramebuffer[ft]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){const ft=b.texture;for(let gt=0,Rt=ft.length;gt<Rt;gt++){const Ft=n.get(ft[gt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&j(b)===!1){const ft=Q?S:[S];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let gt=0;gt<ft.length;gt++){const Rt=ft[gt];F.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[gt]);const Ft=r.convert(Rt.format,Rt.colorSpace),nt=r.convert(Rt.type),Kt=y(Rt.internalFormat,Ft,nt,Rt.colorSpace,b.isXRRenderTarget===!0),Gt=ot(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,Kt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,F.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),W(s.TEXTURE_CUBE_MAP,S,yt);for(let ft=0;ft<6;ft++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)xt(F.__webglFramebuffer[ft][gt],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt);else xt(F.__webglFramebuffer[ft],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);M(S,yt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const ft=b.texture;for(let gt=0,Rt=ft.length;gt<Rt;gt++){const Ft=ft[gt],nt=n.get(Ft);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),W(s.TEXTURE_2D,Ft,yt),xt(F.__webglFramebuffer,b,Ft,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),M(Ft,yt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ft=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,st.__webglTexture),W(ft,S,yt),o&&S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)xt(F.__webglFramebuffer[gt],b,S,s.COLOR_ATTACHMENT0,ft,gt);else xt(F.__webglFramebuffer,b,S,s.COLOR_ATTACHMENT0,ft,0);M(S,yt)&&v(ft),e.unbindTexture()}b.depthBuffer&&St(b)}function ht(b){const S=m(b)||o,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let st=0,et=F.length;st<et;st++){const Q=F[st];if(M(Q,S)){const yt=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ft=n.get(Q).__webglTexture;e.bindTexture(yt,ft),v(yt),e.unbindTexture()}}}function Z(b){if(o&&b.samples>0&&j(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,st=b.height;let et=s.COLOR_BUFFER_BIT;const Q=[],yt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=n.get(b),gt=b.isWebGLMultipleRenderTargets===!0;if(gt)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){Q.push(s.COLOR_ATTACHMENT0+Rt),b.depthBuffer&&Q.push(yt);const Ft=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(Ft===!1&&(b.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),gt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Rt]),Ft===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[yt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[yt])),gt){const nt=n.get(S[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,F,st,0,0,F,st,et,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Rt]);const Ft=n.get(S[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function ot(b){return Math.min(i.maxSamples,b.samples)}function j(b){const S=n.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(b){const S=a.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function mt(b,S){const F=b.colorSpace,st=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===xo||F!==qn&&F!==fn&&(Jt.getTransfer(F)===ee?o===!1?t.has("EXT_sRGB")===!0&&st===En?(b.format=xo,b.minFilter=un,b.generateMipmaps=!1):S=Yh.sRGBToLinear(S):(st!==En||et!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=It,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=j}function T0(s,t,e){const n=e.isWebGL2;function i(r,a=fn){let o;const l=Jt.getTransfer(a);if(r===li)return s.UNSIGNED_BYTE;if(r===Fh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===rf)return s.BYTE;if(r===af)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Oh)return s.INT;if(r===ei)return s.UNSIGNED_INT;if(r===ni)return s.FLOAT;if(r===Ks)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===of)return s.ALPHA;if(r===En)return s.RGBA;if(r===lf)return s.LUMINANCE;if(r===cf)return s.LUMINANCE_ALPHA;if(r===Pi)return s.DEPTH_COMPONENT;if(r===xs)return s.DEPTH_STENCIL;if(r===xo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===hf)return s.RED;if(r===zh)return s.RED_INTEGER;if(r===uf)return s.RG;if(r===kh)return s.RG_INTEGER;if(r===Gh)return s.RGBA_INTEGER;if(r===Sa||r===Ea||r===Ta||r===ba)if(l===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ba)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bl||r===zl||r===kl||r===Gl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hl||r===Vl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Hl)return l===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Vl)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wl||r===Xl||r===ql||r===Yl||r===jl||r===Kl||r===Zl||r===$l||r===Jl||r===Ql||r===tc||r===ec||r===nc||r===ic)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Wl)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xl)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ql)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yl)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jl)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kl)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zl)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$l)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jl)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ql)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ec)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ic)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wa||r===sc||r===rc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===wa)return l===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===df||r===ac||r===oc||r===lc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===wa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===oc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ci?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class b0 extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pn extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w0={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class A0 extends ki{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const M=[],v=[],y=new it;let A=null;const R=new Je;R.layers.enable(1),R.viewport=new ne;const E=new Je;E.layers.enable(2),E.viewport=new ne;const U=[R,E],x=new b0;x.layers.enable(1),x.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=M[W];return J===void 0&&(J=new Za,M[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=M[W];return J===void 0&&(J=new Za,M[W]=J),J.getGripSpace()},this.getHand=function(W){let J=M[W];return J===void 0&&(J=new Za,M[W]=J),J.getHandSpace()};function k(W){const J=v.indexOf(W.inputSource);if(J===-1)return;const ut=M[J];ut!==void 0&&(ut.update(W.inputSource,W.frame,c||a),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",P);for(let W=0;W<M.length;W++){const J=v[W];J!==null&&(v[W]=null,M[W].disconnect(J))}T=null,O=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",q),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Oi(f.framebufferWidth,f.framebufferHeight,{format:En,type:li,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,ut=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=_.stencil?xs:Pi,ut=_.stencil?Ci:ei);const xt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(xt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Oi(d.textureWidth,d.textureHeight,{format:En,type:li,depthTexture:new su(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Pt=t.properties.get(p);Pt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(W){for(let J=0;J<W.removed.length;J++){const ut=W.removed[J],Et=v.indexOf(ut);Et>=0&&(v[Et]=null,M[Et].disconnect(ut))}for(let J=0;J<W.added.length;J++){const ut=W.added[J];let Et=v.indexOf(ut);if(Et===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=v.length){v.push(ut),Et=Pt;break}else if(v[Pt]===null){v[Pt]=ut,Et=Pt;break}if(Et===-1)break}const xt=M[Et];xt&&xt.connect(ut)}}const N=new D,z=new D;function X(W,J,ut){N.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(ut.matrixWorld);const Et=N.distanceTo(z),xt=J.projectionMatrix.elements,Pt=ut.projectionMatrix.elements,Ut=xt[14]/(xt[10]-1),St=xt[14]/(xt[10]+1),It=(xt[9]+1)/xt[5],L=(xt[9]-1)/xt[5],ht=(xt[8]-1)/xt[0],Z=(Pt[8]+1)/Pt[0],ot=Ut*ht,j=Ut*Z,Tt=Et/(-ht+Z),mt=Tt*-ht;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(mt),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const b=Ut+Tt,S=St+Tt,F=ot-mt,st=j+(Et-mt),et=It*St/S*b,Q=L*St/S*b;W.projectionMatrix.makePerspective(F,st,et,Q,b,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;x.near=E.near=R.near=W.near,x.far=E.far=R.far=W.far,(T!==x.near||O!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,O=x.far);const J=W.parent,ut=x.cameras;Y(x,J);for(let Et=0;Et<ut.length;Et++)Y(ut[Et],J);ut.length===2?X(x,R,E):x.projectionMatrix.copy(R.projectionMatrix),K(W,x,J)};function K(W,J,ut){ut===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Mo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let $=null;function tt(W,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Et=!1;ut.length!==x.cameras.length&&(x.cameras.length=0,Et=!0);for(let xt=0;xt<ut.length;xt++){const Pt=ut[xt];let Ut=null;if(f!==null)Ut=f.getViewport(Pt);else{const It=u.getViewSubImage(d,Pt);Ut=It.viewport,xt===0&&(t.setRenderTargetTextures(p,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(p))}let St=U[xt];St===void 0&&(St=new Je,St.layers.enable(xt),St.viewport=new ne,U[xt]=St),St.matrix.fromArray(Pt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Pt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),xt===0&&(x.matrix.copy(St.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Et===!0&&x.cameras.push(St)}}for(let ut=0;ut<M.length;ut++){const Et=v[ut],xt=M[ut];Et!==null&&xt!==void 0&&xt.update(Et,J,c||a)}$&&$(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const at=new nu;at.setAnimationLoop(tt),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function R0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C0(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(M,A);const R=t.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function h(M){const v=u();M.__bindingPointIndex=v;const y=s.createBuffer(),A=M.__size,R=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=i[M.id],y=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,E=y.length;R<E;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,T=U.length;x<T;x++){const O=U[x];if(f(O,R,x,A)===!0){const k=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let N=0;N<q.length;N++){const z=q[N],X=_(z);typeof z=="number"||typeof z=="boolean"?(O.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,k+P,O.__data)):z.isMatrix3?(O.__data[0]=z.elements[0],O.__data[1]=z.elements[1],O.__data[2]=z.elements[2],O.__data[3]=0,O.__data[4]=z.elements[3],O.__data[5]=z.elements[4],O.__data[6]=z.elements[5],O.__data[7]=0,O.__data[8]=z.elements[6],O.__data[9]=z.elements[7],O.__data[10]=z.elements[8],O.__data[11]=0):(z.toArray(O.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,y,A){const R=M.value,E=v+"_"+y;if(A[E]===void 0)return typeof R=="number"||typeof R=="boolean"?A[E]=R:A[E]=R.clone(),!0;{const U=A[E];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return A[E]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(M){const v=M.uniforms;let y=0;const A=16;for(let E=0,U=v.length;E<U;E++){const x=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,O=x.length;T<O;T++){const k=x[T],q=Array.isArray(k.value)?k.value:[k.value];for(let P=0,N=q.length;P<N;P++){const z=q[P],X=_(z),Y=y%A;Y!==0&&A-Y<X.boundary&&(y+=A-Y),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=X.storage}}}const R=y%A;return R>0&&(y+=A-R),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Jo{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const v=this;let y=!1,A=0,R=0,E=null,U=-1,x=null;const T=new ne,O=new ne;let k=null;const q=new Xt(0);let P=0,N=e.width,z=e.height,X=1,Y=null,K=null;const $=new ne(0,0,N,z),tt=new ne(0,0,N,z);let at=!1;const W=new Ko;let J=!1,ut=!1,Et=null;const xt=new _e,Pt=new it,Ut=new D,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return E===null?X:1}let L=n;function ht(w,B){for(let H=0;H<w.length;H++){const V=w[H],G=e.getContext(V,B);if(G!==null)return G}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ct,!1),L===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),L=ht(B,w),L===null)throw ht(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Z,ot,j,Tt,mt,b,S,F,st,et,Q,yt,ft,gt,Rt,Ft,nt,Kt,Gt,Nt,At,_t,C,lt;function bt(){Z=new z_(L),ot=new I_(L,Z,t),Z.init(ot),_t=new T0(L,Z,ot),j=new S0(L,Z,ot),Tt=new H_(L),mt=new l0,b=new E0(L,Z,j,mt,ot,_t,Tt),S=new N_(v),F=new B_(v),st=new Zf(L,ot),C=new L_(L,Z,st,ot),et=new k_(L,st,Tt,C),Q=new q_(L,et,st,Tt),Gt=new X_(L,ot,b),Ft=new U_(mt),yt=new o0(v,S,F,Z,ot,C,Ft),ft=new R0(v,mt),gt=new h0,Rt=new _0(Z,ot),Kt=new P_(v,S,F,j,Q,d,l),nt=new y0(v,Q,ot),lt=new C0(L,Tt,ot,j),Nt=new D_(L,Z,Tt,ot),At=new G_(L,Z,Tt,ot),Tt.programs=yt.programs,v.capabilities=ot,v.extensions=Z,v.properties=mt,v.renderLists=gt,v.shadowMap=nt,v.state=j,v.info=Tt}bt();const Mt=new A0(v,L);this.xr=Mt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(N,z,!1))},this.getSize=function(w){return w.set(N,z)},this.setSize=function(w,B,H=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,z=B,e.width=Math.floor(w*X),e.height=Math.floor(B*X),H===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(N*X,z*X).floor()},this.setDrawingBufferSize=function(w,B,H){N=w,z=B,X=H,e.width=Math.floor(w*H),e.height=Math.floor(B*H),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,B,H,V){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,B,H,V),j.viewport(T.copy($).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(tt)},this.setScissor=function(w,B,H,V){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,B,H,V),j.scissor(O.copy(tt).multiplyScalar(X).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(w){j.setScissorTest(at=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(w=!0,B=!0,H=!0){let V=0;if(w){let G=!1;if(E!==null){const vt=E.texture.format;G=vt===Gh||vt===kh||vt===zh}if(G){const vt=E.texture.type,wt=vt===li||vt===ei||vt===Wo||vt===Ci||vt===Fh||vt===Bh,Dt=Kt.getClearColor(),Ot=Kt.getClearAlpha(),Ht=Dt.r,Bt=Dt.g,zt=Dt.b;wt?(f[0]=Ht,f[1]=Bt,f[2]=zt,f[3]=Ot,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ht,g[1]=Bt,g[2]=zt,g[3]=Ot,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}B&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),gt.dispose(),Rt.dispose(),mt.dispose(),S.dispose(),F.dispose(),Q.dispose(),C.dispose(),lt.dispose(),yt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",fe),Mt.removeEventListener("sessionend",Zt),Et&&(Et.dispose(),Et=null),ve.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Tt.autoReset,B=nt.enabled,H=nt.autoUpdate,V=nt.needsUpdate,G=nt.type;bt(),Tt.autoReset=w,nt.enabled=B,nt.autoUpdate=H,nt.needsUpdate=V,nt.type=G}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pt(w){const B=w.target;B.removeEventListener("dispose",pt),Lt(B)}function Lt(w){Ct(w),mt.remove(w)}function Ct(w){const B=mt.get(w).programs;B!==void 0&&(B.forEach(function(H){yt.releaseProgram(H)}),w.isShaderMaterial&&yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,H,V,G,vt){B===null&&(B=St);const wt=G.isMesh&&G.matrixWorld.determinant()<0,Dt=xd(w,B,H,V,G);j.setMaterial(V,wt);let Ot=H.index,Ht=1;if(V.wireframe===!0){if(Ot=et.getWireframeAttribute(H),Ot===void 0)return;Ht=2}const Bt=H.drawRange,zt=H.attributes.position;let pe=Bt.start*Ht,je=(Bt.start+Bt.count)*Ht;vt!==null&&(pe=Math.max(pe,vt.start*Ht),je=Math.min(je,(vt.start+vt.count)*Ht)),Ot!==null?(pe=Math.max(pe,0),je=Math.min(je,Ot.count)):zt!=null&&(pe=Math.max(pe,0),je=Math.min(je,zt.count));const Te=je-pe;if(Te<0||Te===1/0)return;C.setup(G,V,Dt,H,Ot);let Nn,se=Nt;if(Ot!==null&&(Nn=st.get(Ot),se=At,se.setIndex(Nn)),G.isMesh)V.wireframe===!0?(j.setLineWidth(V.wireframeLinewidth*It()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(G.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),j.setLineWidth(Vt*It()),G.isLineSegments?se.setMode(L.LINES):G.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else G.isPoints?se.setMode(L.POINTS):G.isSprite&&se.setMode(L.TRIANGLES);if(G.isBatchedMesh)se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)se.renderInstances(pe,Te,G.count);else if(H.isInstancedBufferGeometry){const Vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_a=Math.min(H.instanceCount,Vt);se.renderInstances(pe,Te,_a)}else se.render(pe,Te)};function qt(w,B,H){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=He,w.needsUpdate=!0,pr(w,B,H),w.side=ui,w.needsUpdate=!0,pr(w,B,H),w.side=dn):pr(w,B,H)}this.compile=function(w,B,H=null){H===null&&(H=w),m=Rt.get(H),m.init(),M.push(m),H.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),w!==H&&w.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);const V=new Set;return w.traverse(function(G){const vt=G.material;if(vt)if(Array.isArray(vt))for(let wt=0;wt<vt.length;wt++){const Dt=vt[wt];qt(Dt,H,G),V.add(Dt)}else qt(vt,H,G),V.add(vt)}),M.pop(),m=null,V},this.compileAsync=function(w,B,H=null){const V=this.compile(w,B,H);return new Promise(G=>{function vt(){if(V.forEach(function(wt){mt.get(wt).currentProgram.isReady()&&V.delete(wt)}),V.size===0){G(w);return}setTimeout(vt,10)}Z.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Yt=null;function ce(w){Yt&&Yt(w)}function fe(){ve.stop()}function Zt(){ve.start()}const ve=new nu;ve.setAnimationLoop(ce),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(w){Yt=w,Mt.setAnimationLoop(w),w===null?ve.stop():ve.start()},Mt.addEventListener("sessionstart",fe),Mt.addEventListener("sessionend",Zt),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(B),B=Mt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,E),m=Rt.get(w,M.length),m.init(),M.push(m),xt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(xt),ut=this.localClippingEnabled,J=Ft.init(this.clippingPlanes,ut),_=gt.get(w,p.length),_.init(),p.push(_),Tn(w,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,K),this.info.render.frame++,J===!0&&Ft.beginShadows();const H=m.state.shadowsArray;if(nt.render(H,w,B),J===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(_,w),m.setupLights(v._useLegacyLights),B.isArrayCamera){const V=B.cameras;for(let G=0,vt=V.length;G<vt;G++){const wt=V[G];bl(_,w,wt,wt.viewport)}}else bl(_,w,B);E!==null&&(b.updateMultisampleRenderTarget(E),b.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,B),C.resetDefaultState(),U=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Tn(w,B,H,V){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){V&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);const wt=Q.update(w),Dt=w.material;Dt.visible&&_.push(w,wt,Dt,H,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const wt=Q.update(w),Dt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ut.copy(wt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(Dt)){const Ot=wt.groups;for(let Ht=0,Bt=Ot.length;Ht<Bt;Ht++){const zt=Ot[Ht],pe=Dt[zt.materialIndex];pe&&pe.visible&&_.push(w,wt,pe,H,Ut.z,zt)}}else Dt.visible&&_.push(w,wt,Dt,H,Ut.z,null)}}const vt=w.children;for(let wt=0,Dt=vt.length;wt<Dt;wt++)Tn(vt[wt],B,H,V)}function bl(w,B,H,V){const G=w.opaque,vt=w.transmissive,wt=w.transparent;m.setupLightsView(H),J===!0&&Ft.setGlobalState(v.clippingPlanes,H),vt.length>0&&vd(G,vt,B,H),V&&j.viewport(T.copy(V)),G.length>0&&fr(G,B,H),vt.length>0&&fr(vt,B,H),wt.length>0&&fr(wt,B,H),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function vd(w,B,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const vt=ot.isWebGL2;Et===null&&(Et=new Oi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Ks:li,minFilter:js,samples:vt?4:0})),v.getDrawingBufferSize(Pt),vt?Et.setSize(Pt.x,Pt.y):Et.setSize(yo(Pt.x),yo(Pt.y));const wt=v.getRenderTarget();v.setRenderTarget(Et),v.getClearColor(q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Dt=v.toneMapping;v.toneMapping=oi,fr(w,H,V),b.updateMultisampleRenderTarget(Et),b.updateRenderTargetMipmap(Et);let Ot=!1;for(let Ht=0,Bt=B.length;Ht<Bt;Ht++){const zt=B[Ht],pe=zt.object,je=zt.geometry,Te=zt.material,Nn=zt.group;if(Te.side===dn&&pe.layers.test(V.layers)){const se=Te.side;Te.side=He,Te.needsUpdate=!0,wl(pe,H,V,je,Te,Nn),Te.side=se,Te.needsUpdate=!0,Ot=!0}}Ot===!0&&(b.updateMultisampleRenderTarget(Et),b.updateRenderTargetMipmap(Et)),v.setRenderTarget(wt),v.setClearColor(q,P),v.toneMapping=Dt}function fr(w,B,H){const V=B.isScene===!0?B.overrideMaterial:null;for(let G=0,vt=w.length;G<vt;G++){const wt=w[G],Dt=wt.object,Ot=wt.geometry,Ht=V===null?wt.material:V,Bt=wt.group;Dt.layers.test(H.layers)&&wl(Dt,B,H,Ot,Ht,Bt)}}function wl(w,B,H,V,G,vt){w.onBeforeRender(v,B,H,V,G,vt),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(v,B,H,V,w,vt),G.transparent===!0&&G.side===dn&&G.forceSinglePass===!1?(G.side=He,G.needsUpdate=!0,v.renderBufferDirect(H,B,V,G,w,vt),G.side=ui,G.needsUpdate=!0,v.renderBufferDirect(H,B,V,G,w,vt),G.side=dn):v.renderBufferDirect(H,B,V,G,w,vt),w.onAfterRender(v,B,H,V,G,vt)}function pr(w,B,H){B.isScene!==!0&&(B=St);const V=mt.get(w),G=m.state.lights,vt=m.state.shadowsArray,wt=G.state.version,Dt=yt.getParameters(w,G.state,vt,B,H),Ot=yt.getProgramCacheKey(Dt);let Ht=V.programs;V.environment=w.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(w.isMeshStandardMaterial?F:S).get(w.envMap||V.environment),Ht===void 0&&(w.addEventListener("dispose",pt),Ht=new Map,V.programs=Ht);let Bt=Ht.get(Ot);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===wt)return Rl(w,Dt),Bt}else Dt.uniforms=yt.getUniforms(w),w.onBuild(H,Dt,v),w.onBeforeCompile(Dt,v),Bt=yt.acquireProgram(Dt,Ot),Ht.set(Ot,Bt),V.uniforms=Dt.uniforms;const zt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=Ft.uniform),Rl(w,Dt),V.needsLights=yd(w),V.lightsStateVersion=wt,V.needsLights&&(zt.ambientLightColor.value=G.state.ambient,zt.lightProbe.value=G.state.probe,zt.directionalLights.value=G.state.directional,zt.directionalLightShadows.value=G.state.directionalShadow,zt.spotLights.value=G.state.spot,zt.spotLightShadows.value=G.state.spotShadow,zt.rectAreaLights.value=G.state.rectArea,zt.ltc_1.value=G.state.rectAreaLTC1,zt.ltc_2.value=G.state.rectAreaLTC2,zt.pointLights.value=G.state.point,zt.pointLightShadows.value=G.state.pointShadow,zt.hemisphereLights.value=G.state.hemi,zt.directionalShadowMap.value=G.state.directionalShadowMap,zt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,zt.spotShadowMap.value=G.state.spotShadowMap,zt.spotLightMatrix.value=G.state.spotLightMatrix,zt.spotLightMap.value=G.state.spotLightMap,zt.pointShadowMap.value=G.state.pointShadowMap,zt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function Al(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Vr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Rl(w,B){const H=mt.get(w);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function xd(w,B,H,V,G){B.isScene!==!0&&(B=St),b.resetTextureUnits();const vt=B.fog,wt=V.isMeshStandardMaterial?B.environment:null,Dt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:qn,Ot=(V.isMeshStandardMaterial?F:S).get(V.envMap||wt),Ht=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Bt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),zt=!!H.morphAttributes.position,pe=!!H.morphAttributes.normal,je=!!H.morphAttributes.color;let Te=oi;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Te=v.toneMapping);const Nn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Nn!==void 0?Nn.length:0,Vt=mt.get(V),_a=m.state.lights;if(J===!0&&(ut===!0||w!==x)){const on=w===x&&V.id===U;Ft.setState(V,w,on)}let he=!1;V.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==_a.state.version||Vt.outputColorSpace!==Dt||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||Vt.envMap!==Ot||V.fog===!0&&Vt.fog!==vt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ft.numPlanes||Vt.numIntersection!==Ft.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Bt||Vt.morphTargets!==zt||Vt.morphNormals!==pe||Vt.morphColors!==je||Vt.toneMapping!==Te||ot.isWebGL2===!0&&Vt.morphTargetsCount!==se)&&(he=!0):(he=!0,Vt.__version=V.version);let _i=Vt.currentProgram;he===!0&&(_i=pr(V,B,G));let Cl=!1,Ps=!1,ga=!1;const Le=_i.getUniforms(),gi=Vt.uniforms;if(j.useProgram(_i.program)&&(Cl=!0,Ps=!0,ga=!0),V.id!==U&&(U=V.id,Ps=!0),Cl||x!==w){Le.setValue(L,"projectionMatrix",w.projectionMatrix),Le.setValue(L,"viewMatrix",w.matrixWorldInverse);const on=Le.map.cameraPosition;on!==void 0&&on.setValue(L,Ut.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&Le.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Le.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Ps=!0,ga=!0)}if(G.isSkinnedMesh){Le.setOptional(L,G,"bindMatrix"),Le.setOptional(L,G,"bindMatrixInverse");const on=G.skeleton;on&&(ot.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Le.setValue(L,"boneTexture",on.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Le.setOptional(L,G,"batchingTexture"),Le.setValue(L,"batchingTexture",G._matricesTexture,b));const va=H.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&ot.isWebGL2===!0)&&Gt.update(G,H,_i),(Ps||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,Le.setValue(L,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gi.envMap.value=Ot,gi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Ps&&(Le.setValue(L,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Md(gi,ga),vt&&V.fog===!0&&ft.refreshFogUniforms(gi,vt),ft.refreshMaterialUniforms(gi,V,X,z,Et),Vr.upload(L,Al(Vt),gi,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Vr.upload(L,Al(Vt),gi,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Le.setValue(L,"center",G.center),Le.setValue(L,"modelViewMatrix",G.modelViewMatrix),Le.setValue(L,"normalMatrix",G.normalMatrix),Le.setValue(L,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const on=V.uniformsGroups;for(let xa=0,Sd=on.length;xa<Sd;xa++)if(ot.isWebGL2){const Pl=on[xa];lt.update(Pl,_i),lt.bind(Pl,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Md(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function yd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,B,H){mt.get(w.texture).__webglTexture=B,mt.get(w.depthTexture).__webglTexture=H;const V=mt.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){const H=mt.get(w);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,H=0){E=w,A=B,R=H;let V=!0,G=null,vt=!1,wt=!1;if(w){const Ot=mt.get(w);Ot.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):Ot.__webglFramebuffer===void 0?b.setupRenderTarget(w):Ot.__hasExternalTextures&&b.rebindTextures(w,mt.get(w.texture).__webglTexture,mt.get(w.depthTexture).__webglTexture);const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);const Bt=mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[B])?G=Bt[B][H]:G=Bt[B],vt=!0):ot.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?G=mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?G=Bt[H]:G=Bt,T.copy(w.viewport),O.copy(w.scissor),k=w.scissorTest}else T.copy($).multiplyScalar(X).floor(),O.copy(tt).multiplyScalar(X).floor(),k=at;if(j.bindFramebuffer(L.FRAMEBUFFER,G)&&ot.drawBuffers&&V&&j.drawBuffers(w,G),j.viewport(T),j.scissor(O),j.setScissorTest(k),vt){const Ot=mt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ot.__webglTexture,H)}else if(wt){const Ot=mt.get(w.texture),Ht=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,H||0,Ht)}U=-1},this.readRenderTargetPixels=function(w,B,H,V,G,vt,wt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){j.bindFramebuffer(L.FRAMEBUFFER,Dt);try{const Ot=w.texture,Ht=Ot.format,Bt=Ot.type;if(Ht!==En&&_t.convert(Ht)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Bt===Ks&&(Z.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Bt!==li&&_t.convert(Bt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===ni&&(ot.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-V&&H>=0&&H<=w.height-G&&L.readPixels(B,H,V,G,_t.convert(Ht),_t.convert(Bt),vt)}finally{const Ot=E!==null?mt.get(E).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(w,B,H=0){const V=Math.pow(2,-H),G=Math.floor(B.image.width*V),vt=Math.floor(B.image.height*V);b.setTexture2D(B,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,w.x,w.y,G,vt),j.unbindTexture()},this.copyTextureToTexture=function(w,B,H,V=0){const G=B.image.width,vt=B.image.height,wt=_t.convert(H.format),Dt=_t.convert(H.type);b.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment),B.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,w.x,w.y,G,vt,wt,Dt,B.image.data):B.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,wt,B.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,V,w.x,w.y,wt,Dt,B.image),V===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(w,B,H,V,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=w.max.x-w.min.x+1,wt=w.max.y-w.min.y+1,Dt=w.max.z-w.min.z+1,Ot=_t.convert(V.format),Ht=_t.convert(V.type);let Bt;if(V.isData3DTexture)b.setTexture3D(V,0),Bt=L.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)b.setTexture2DArray(V,0),Bt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);const zt=L.getParameter(L.UNPACK_ROW_LENGTH),pe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),je=L.getParameter(L.UNPACK_SKIP_PIXELS),Te=L.getParameter(L.UNPACK_SKIP_ROWS),Nn=L.getParameter(L.UNPACK_SKIP_IMAGES),se=H.isCompressedTexture?H.mipmaps[G]:H.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,w.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,w.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?L.texSubImage3D(Bt,G,B.x,B.y,B.z,vt,wt,Dt,Ot,Ht,se.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Bt,G,B.x,B.y,B.z,vt,wt,Dt,Ot,se.data)):L.texSubImage3D(Bt,G,B.x,B.y,B.z,vt,wt,Dt,Ot,Ht,se),L.pixelStorei(L.UNPACK_ROW_LENGTH,zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nn),G===0&&V.generateMipmaps&&L.generateMipmap(Bt),j.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),j.unbindTexture()},this.resetState=function(){A=0,R=0,E=null,j.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Xo?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===we?Li:Vh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?we:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class P0 extends Jo{}P0.prototype.isWebGL1Renderer=!0;class Qo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new Qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zc extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new it:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],a=[],o=new D,l=new _e;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ye(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tl extends Un{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new it,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class L0 extends tl{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function el(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Fr=new D,$a=new el,Ja=new el,Qa=new el;class D0 extends Un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Fr.subVectors(i[0],i[1]).add(i[0]),c=Fr);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Fr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),$a.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ja.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Qa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ja.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set($a.calc(l),Ja.calc(l),Qa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $c(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function I0(s,t){const e=1-s;return e*e*t}function U0(s,t){return 2*(1-s)*s*t}function N0(s,t){return s*s*t}function Gs(s,t,e,n){return I0(s,t)+U0(s,e)+N0(s,n)}function O0(s,t){const e=1-s;return e*e*e*t}function F0(s,t){const e=1-s;return 3*e*e*s*t}function B0(s,t){return 3*(1-s)*s*s*t}function z0(s,t){return s*s*s*t}function Hs(s,t,e,n,i){return O0(s,t)+F0(s,e)+B0(s,n)+z0(s,i)}class hu extends Un{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,i.x,r.x,a.x,o.x),Hs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class k0 extends Un{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,i.x,r.x,a.x,o.x),Hs(t,i.y,r.y,a.y,o.y),Hs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uu extends Un{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class G0 extends Un{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends Un{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,i.x,r.x,a.x),Gs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H0 extends Un{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,i.x,r.x,a.x),Gs(t,i.y,r.y,a.y),Gs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fu extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set($c(o,l.x,c.x,h.x,u.x),$c(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new it().fromArray(i))}return this}}var To=Object.freeze({__proto__:null,ArcCurve:L0,CatmullRomCurve3:D0,CubicBezierCurve:hu,CubicBezierCurve3:k0,EllipseCurve:tl,LineCurve:uu,LineCurve3:G0,QuadraticBezierCurve:du,QuadraticBezierCurve3:H0,SplineCurve:fu});class V0 extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new To[i.type]().fromJSON(i))}return this}}class Jc extends V0{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new uu(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new du(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new hu(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new fu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new tl(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nl extends gn{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ye(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,d=new it,f=new D,g=new D,_=new D;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const v=n+M*h*i,y=Math.sin(v),A=Math.cos(v);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*y,u.y=t[R].y,u.z=t[R].x*A,a.push(u.x,u.y,u.z),d.x=M/e,d.y=R/(t.length-1),o.push(d.x,d.y);const E=l[3*R+0]*y,U=l[3*R+1],x=l[3*R+0]*A;c.push(E,U,x)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const y=v+M*t.length,A=y,R=y+t.length,E=y+t.length+1,U=y+1;r.push(A,R,U),r.push(E,U,R)}this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.points,t.segments,t.phiStart,t.phiLength)}}class hr extends gn{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function M(){const y=new D,A=new D;let R=0;const E=(e-t)/n;for(let U=0;U<=r;U++){const x=[],T=U/r,O=T*(e-t)+t;for(let k=0;k<=i;k++){const q=k/i,P=q*l+o,N=Math.sin(P),z=Math.cos(P);A.x=O*N,A.y=-T*n+m,A.z=O*z,u.push(A.x,A.y,A.z),y.set(N,E,z).normalize(),d.push(y.x,y.y,y.z),f.push(q,1-T),x.push(g++)}_.push(x)}for(let U=0;U<i;U++)for(let x=0;x<r;x++){const T=_[x][U],O=_[x+1][U],k=_[x+1][U+1],q=_[x][U+1];h.push(T,O,q),h.push(O,k,q),R+=6}c.addGroup(p,R,0),p+=R}function v(y){const A=g,R=new it,E=new D;let U=0;const x=y===!0?t:e,T=y===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;const O=g;for(let k=0;k<=i;k++){const P=k/i*l+o,N=Math.cos(P),z=Math.sin(P);E.x=x*z,E.y=m*T,E.z=x*N,u.push(E.x,E.y,E.z),d.push(0,T,0),R.x=N*.5+.5,R.y=z*.5*T+.5,f.push(R.x,R.y),g++}for(let k=0;k<i;k++){const q=A+k,P=O+k;y===!0?h.push(P,P+1,q):h.push(P+1,P,q),U+=3}c.addGroup(p,U,y===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class il extends hr{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new il(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pu extends Jc{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Jc().fromJSON(i))}return this}}const W0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=mu(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=K0(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Zs(r,a,e,o,l,f,0),a}};function mu(s,t,e,n,i){let r,a;if(i===av(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Qc(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Qc(r,s[r],s[r+1],a);return a&&da(a,a.next)&&(Js(a),a=a.next),a}function zi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(da(e,e.next)||oe(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(s,t,e,n,i,r,a){if(!s)return;!a&&r&&tv(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?q0(s,n,i,r):X0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Js(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Y0(zi(s),t,e),Zs(s,t,e,n,i,r,2)):a===2&&j0(s,t,e,n,i,r):Zs(zi(s),t,e,n,i,r,1);break}}}function X0(s){const t=s.prev,e=s,n=s.next;if(oe(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&cs(i,o,r,l,a,c,g.x,g.y)&&oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function q0(s,t,e,n){const i=s.prev,r=s,a=s.next;if(oe(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=bo(f,g,t,e,n),M=bo(_,m,t,e,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&cs(o,h,l,u,c,d,v.x,v.y)&&oe(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&cs(o,h,l,u,c,d,y.x,y.y)&&oe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&cs(o,h,l,u,c,d,v.x,v.y)&&oe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&cs(o,h,l,u,c,d,y.x,y.y)&&oe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Y0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!da(i,r)&&_u(i,n,n.next,r)&&$s(i,r)&&$s(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Js(n),Js(n.next),n=s=r),n=n.next}while(n!==s);return zi(n)}function j0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&iv(a,o)){let l=gu(a,o);a=zi(a,a.next),l=zi(l,l.next),Zs(a,t,e,n,i,r,0),Zs(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function K0(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=mu(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(nv(c));for(i.sort(Z0),r=0;r<i.length;r++)e=$0(i[r],e);return e}function Z0(s,t){return s.x-t.x}function $0(s,t){const e=J0(s,t);if(!e)return t;const n=gu(e,s);return zi(n,n.next),zi(e,e.next)}function J0(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&cs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),$s(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Q0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Q0(s,t){return oe(s.prev,s,t.prev)<0&&oe(t.next,s,s.next)<0}function tv(s,t,e,n){let i=s;do i.z===0&&(i.z=bo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ev(i)}function ev(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function bo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function nv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function cs(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function iv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!sv(s,t)&&($s(s,t)&&$s(t,s)&&rv(s,t)&&(oe(s.prev,s,t.prev)||oe(s,t.prev,t))||da(s,t)&&oe(s.prev,s,s.next)>0&&oe(t.prev,t,t.next)>0)}function oe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function da(s,t){return s.x===t.x&&s.y===t.y}function _u(s,t,e,n){const i=zr(oe(s,t,e)),r=zr(oe(s,t,n)),a=zr(oe(e,n,s)),o=zr(oe(e,n,t));return!!(i!==r&&a!==o||i===0&&Br(s,e,t)||r===0&&Br(s,n,t)||a===0&&Br(e,s,n)||o===0&&Br(e,t,n))}function Br(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function zr(s){return s>0?1:s<0?-1:0}function sv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function $s(s,t){return oe(s.prev,s,s.next)<0?oe(s,t,s.next)>=0&&oe(s,s.prev,t)>=0:oe(s,t,s.prev)<0||oe(s,s.next,t)<0}function rv(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function gu(s,t){const e=new wo(s.i,s.x,s.y),n=new wo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qc(s,t,e,n){const i=new wo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Js(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function av(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Vs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Vs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];th(t),eh(n,t);let a=t.length;e.forEach(th);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,eh(n,e[l]);const o=W0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function th(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function eh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class sl extends gn{constructor(t=new pu([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ge(i,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:ov;let v,y=!1,A,R,E,U;p&&(v=p.getSpacedPoints(h),y=!0,d=!1,A=p.computeFrenetFrames(h,!1),R=new D,E=new D,U=new D),d||(m=0,f=0,g=0,_=0);const x=o.extractPoints(c);let T=x.shape;const O=x.holes;if(!Vs.isClockWise(T)){T=T.reverse();for(let L=0,ht=O.length;L<ht;L++){const Z=O[L];Vs.isClockWise(Z)&&(O[L]=Z.reverse())}}const q=Vs.triangulateShape(T,O),P=T;for(let L=0,ht=O.length;L<ht;L++){const Z=O[L];T=T.concat(Z)}function N(L,ht,Z){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ht,Z)}const z=T.length,X=q.length;function Y(L,ht,Z){let ot,j,Tt;const mt=L.x-ht.x,b=L.y-ht.y,S=Z.x-L.x,F=Z.y-L.y,st=mt*mt+b*b,et=mt*F-b*S;if(Math.abs(et)>Number.EPSILON){const Q=Math.sqrt(st),yt=Math.sqrt(S*S+F*F),ft=ht.x-b/Q,gt=ht.y+mt/Q,Rt=Z.x-F/yt,Ft=Z.y+S/yt,nt=((Rt-ft)*F-(Ft-gt)*S)/(mt*F-b*S);ot=ft+mt*nt-L.x,j=gt+b*nt-L.y;const Kt=ot*ot+j*j;if(Kt<=2)return new it(ot,j);Tt=Math.sqrt(Kt/2)}else{let Q=!1;mt>Number.EPSILON?S>Number.EPSILON&&(Q=!0):mt<-Number.EPSILON?S<-Number.EPSILON&&(Q=!0):Math.sign(b)===Math.sign(F)&&(Q=!0),Q?(ot=-b,j=mt,Tt=Math.sqrt(st)):(ot=mt,j=b,Tt=Math.sqrt(st/2))}return new it(ot/Tt,j/Tt)}const K=[];for(let L=0,ht=P.length,Z=ht-1,ot=L+1;L<ht;L++,Z++,ot++)Z===ht&&(Z=0),ot===ht&&(ot=0),K[L]=Y(P[L],P[Z],P[ot]);const $=[];let tt,at=K.concat();for(let L=0,ht=O.length;L<ht;L++){const Z=O[L];tt=[];for(let ot=0,j=Z.length,Tt=j-1,mt=ot+1;ot<j;ot++,Tt++,mt++)Tt===j&&(Tt=0),mt===j&&(mt=0),tt[ot]=Y(Z[ot],Z[Tt],Z[mt]);$.push(tt),at=at.concat(tt)}for(let L=0;L<m;L++){const ht=L/m,Z=f*Math.cos(ht*Math.PI/2),ot=g*Math.sin(ht*Math.PI/2)+_;for(let j=0,Tt=P.length;j<Tt;j++){const mt=N(P[j],K[j],ot);xt(mt.x,mt.y,-Z)}for(let j=0,Tt=O.length;j<Tt;j++){const mt=O[j];tt=$[j];for(let b=0,S=mt.length;b<S;b++){const F=N(mt[b],tt[b],ot);xt(F.x,F.y,-Z)}}}const W=g+_;for(let L=0;L<z;L++){const ht=d?N(T[L],at[L],W):T[L];y?(E.copy(A.normals[0]).multiplyScalar(ht.x),R.copy(A.binormals[0]).multiplyScalar(ht.y),U.copy(v[0]).add(E).add(R),xt(U.x,U.y,U.z)):xt(ht.x,ht.y,0)}for(let L=1;L<=h;L++)for(let ht=0;ht<z;ht++){const Z=d?N(T[ht],at[ht],W):T[ht];y?(E.copy(A.normals[L]).multiplyScalar(Z.x),R.copy(A.binormals[L]).multiplyScalar(Z.y),U.copy(v[L]).add(E).add(R),xt(U.x,U.y,U.z)):xt(Z.x,Z.y,u/h*L)}for(let L=m-1;L>=0;L--){const ht=L/m,Z=f*Math.cos(ht*Math.PI/2),ot=g*Math.sin(ht*Math.PI/2)+_;for(let j=0,Tt=P.length;j<Tt;j++){const mt=N(P[j],K[j],ot);xt(mt.x,mt.y,u+Z)}for(let j=0,Tt=O.length;j<Tt;j++){const mt=O[j];tt=$[j];for(let b=0,S=mt.length;b<S;b++){const F=N(mt[b],tt[b],ot);y?xt(F.x,F.y+v[h-1].y,v[h-1].x+Z):xt(F.x,F.y,u+Z)}}}J(),ut();function J(){const L=i.length/3;if(d){let ht=0,Z=z*ht;for(let ot=0;ot<X;ot++){const j=q[ot];Pt(j[2]+Z,j[1]+Z,j[0]+Z)}ht=h+m*2,Z=z*ht;for(let ot=0;ot<X;ot++){const j=q[ot];Pt(j[0]+Z,j[1]+Z,j[2]+Z)}}else{for(let ht=0;ht<X;ht++){const Z=q[ht];Pt(Z[2],Z[1],Z[0])}for(let ht=0;ht<X;ht++){const Z=q[ht];Pt(Z[0]+z*h,Z[1]+z*h,Z[2]+z*h)}}n.addGroup(L,i.length/3-L,0)}function ut(){const L=i.length/3;let ht=0;Et(P,ht),ht+=P.length;for(let Z=0,ot=O.length;Z<ot;Z++){const j=O[Z];Et(j,ht),ht+=j.length}n.addGroup(L,i.length/3-L,1)}function Et(L,ht){let Z=L.length;for(;--Z>=0;){const ot=Z;let j=Z-1;j<0&&(j=L.length-1);for(let Tt=0,mt=h+m*2;Tt<mt;Tt++){const b=z*Tt,S=z*(Tt+1),F=ht+ot+b,st=ht+j+b,et=ht+j+S,Q=ht+ot+S;Ut(F,st,et,Q)}}}function xt(L,ht,Z){l.push(L),l.push(ht),l.push(Z)}function Pt(L,ht,Z){St(L),St(ht),St(Z);const ot=i.length/3,j=M.generateTopUV(n,i,ot-3,ot-2,ot-1);It(j[0]),It(j[1]),It(j[2])}function Ut(L,ht,Z,ot){St(L),St(ht),St(ot),St(ht),St(Z),St(ot);const j=i.length/3,Tt=M.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);It(Tt[0]),It(Tt[1]),It(Tt[3]),It(Tt[1]),It(Tt[2]),It(Tt[3])}function St(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function It(L){r.push(L.x),r.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new To[i.type]().fromJSON(i)),new sl(n,t.options)}}const ov={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new it(r,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-u),new it(d,1-g),new it(_,1-p)]:[new it(o,1-l),new it(h,1-u),new it(f,1-g),new it(m,1-p)]}};function lv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ur extends gn{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new D,g=new it;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,v=M,y=M+n+1,A=M+n+2,R=M+1;o.push(v,y,R),o.push(y,A,R)}}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Cs extends gn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(i+R*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+R*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+y,1-v),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const v=h[p][M+1],y=h[p][M],A=h[p+1][M],R=h[p+1][M+1];(p!==0||a>0)&&f.push(v,y,R),(p!==n-1||l<Math.PI)&&f.push(y,A,R)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ce extends lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vu extends Ce{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class rl extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const to=new _e,nh=new D,ih=new D;class xu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sh=new _e,Os=new D,eo=new D;class cv extends xu{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),n.position.copy(Os),eo.copy(n.position),eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(eo),n.updateMatrixWorld(),i.makeTranslation(-Os.x,-Os.y,-Os.z),sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh)}}class rh extends rl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hv extends xu{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ao extends rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new hv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uv extends rl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ah();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ah(){return(typeof performance>"u"?Date:performance).now()}class fv{constructor(t,e,n=0,i=1/0){this.ray=new Yo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ro(t,this,n,e),n.sort(oh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ro(t[i],this,n,e);return n.sort(oh),n}}function oh(s,t){return s.distance-t.distance}function Ro(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Ro(i[r],t,e,!0)}}class lh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);class pv{constructor(t){this.container=t,this.threeRenderer=new Jo({antialias:!0,powerPreference:"high-performance",alpha:!1,precision:"mediump",stencil:!1,depth:!0}),this.threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.threeRenderer.setSize(window.innerWidth,window.innerHeight),this.threeRenderer.outputColorSpace=we,this.threeRenderer.toneMapping=Uh,this.threeRenderer.toneMappingExposure=1.15,this.threeRenderer.shadowMap.enabled=!0,this.threeRenderer.shadowMap.type=Dh,this.container.appendChild(this.threeRenderer.domElement)}resize(t){const e=window.innerWidth,n=window.innerHeight;this.threeRenderer.setSize(e,n),t&&(t.aspect=e/n,e<n?t.fov=60:t.fov=e/n<1.4?52:45,t.updateProjectionMatrix())}render(t,e){this.threeRenderer.render(t,e)}}class mv{constructor(){this.scene=new Zc,this.scene.background=new Xt(988970),this.scene.fog=new Qo(988970,.025),this.createEnvironmentMap()}createEnvironmentMap(){const t=new So(new Jo({antialias:!1})),e=new Zc;e.background=new Xt(1976635);const n=new Ao(16777215,2);n.position.set(5,10,5),e.add(n);const i=t.fromScene(e).texture;this.scene.environment=i,t.dispose()}}const ch={type:"change"},no={type:"start"},hh={type:"end"},kr=new Yo,uh=new ti,_v=Math.cos(70*Tf.DEG2RAD);class gv extends ki{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Rt),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ch),n.update(),r=i.NONE},this.update=function(){const C=new D,lt=new Fi().setFromUnitVectors(t.up,new D(0,1,0)),bt=lt.clone().invert(),Mt=new D,rt=new Fi,I=new D,ct=2*Math.PI;return function(Lt=null){const Ct=n.object.position;C.copy(Ct).sub(n.target),C.applyQuaternion(lt),o.setFromVector3(C),n.autoRotate&&r===i.NONE&&k(T(Lt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let qt=n.minAzimuthAngle,Yt=n.maxAzimuthAngle;isFinite(qt)&&isFinite(Yt)&&(qt<-Math.PI?qt+=ct:qt>Math.PI&&(qt-=ct),Yt<-Math.PI?Yt+=ct:Yt>Math.PI&&(Yt-=ct),qt<=Yt?o.theta=Math.max(qt,Math.min(Yt,o.theta)):o.theta=o.theta>(qt+Yt)/2?Math.max(qt,o.theta):Math.min(Yt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?o.radius=$(o.radius):o.radius=$(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(bt),Ct.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ce=!1;if(n.zoomToCursor&&R){let fe=null;if(n.object.isPerspectiveCamera){const Zt=C.length();fe=$(Zt*c);const ve=Zt-fe;n.object.position.addScaledVector(y,ve),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Zt=new D(A.x,A.y,0);Zt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ce=!0;const ve=new D(A.x,A.y,0);ve.unproject(n.object),n.object.position.sub(ve).add(Zt),n.object.updateMatrixWorld(),fe=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;fe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(fe).add(n.object.position):(kr.origin.copy(n.object.position),kr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(kr.direction))<_v?t.lookAt(n.target):(uh.setFromNormalAndCoplanarPoint(n.object.up,n.target),kr.intersectPlane(uh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ce=!0);return c=1,R=!1,ce||Mt.distanceToSquared(n.object.position)>a||8*(1-rt.dot(n.object.quaternion))>a||I.distanceToSquared(n.target)>0?(n.dispatchEvent(ch),Mt.copy(n.object.position),rt.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Kt),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Rt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new lh,l=new lh;let c=1;const h=new D,u=new it,d=new it,f=new it,g=new it,_=new it,m=new it,p=new it,M=new it,v=new it,y=new D,A=new it;let R=!1;const E=[],U={};let x=!1;function T(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function O(C){const lt=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*lt)}function k(C){l.theta-=C}function q(C){l.phi-=C}const P=function(){const C=new D;return function(bt,Mt){C.setFromMatrixColumn(Mt,0),C.multiplyScalar(-bt),h.add(C)}}(),N=function(){const C=new D;return function(bt,Mt){n.screenSpacePanning===!0?C.setFromMatrixColumn(Mt,1):(C.setFromMatrixColumn(Mt,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(bt),h.add(C)}}(),z=function(){const C=new D;return function(bt,Mt){const rt=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;C.copy(I).sub(n.target);let ct=C.length();ct*=Math.tan(n.object.fov/2*Math.PI/180),P(2*bt*ct/rt.clientHeight,n.object.matrix),N(2*Mt*ct/rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(bt*(n.object.right-n.object.left)/n.object.zoom/rt.clientWidth,n.object.matrix),N(Mt*(n.object.top-n.object.bottom)/n.object.zoom/rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(C,lt){if(!n.zoomToCursor)return;R=!0;const bt=n.domElement.getBoundingClientRect(),Mt=C-bt.left,rt=lt-bt.top,I=bt.width,ct=bt.height;A.x=Mt/I*2-1,A.y=-(rt/ct)*2+1,y.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function tt(C){u.set(C.clientX,C.clientY)}function at(C){K(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function W(C){g.set(C.clientX,C.clientY)}function J(C){d.set(C.clientX,C.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const lt=n.domElement;k(2*Math.PI*f.x/lt.clientHeight),q(2*Math.PI*f.y/lt.clientHeight),u.copy(d),n.update()}function ut(C){M.set(C.clientX,C.clientY),v.subVectors(M,p),v.y>0?X(O(v.y)):v.y<0&&Y(O(v.y)),p.copy(M),n.update()}function Et(C){_.set(C.clientX,C.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(_),n.update()}function xt(C){K(C.clientX,C.clientY),C.deltaY<0?Y(O(C.deltaY)):C.deltaY>0&&X(O(C.deltaY)),n.update()}function Pt(C){let lt=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),lt=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),lt=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),lt=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),lt=!0;break}lt&&(C.preventDefault(),n.update())}function Ut(C){if(E.length===1)u.set(C.pageX,C.pageY);else{const lt=_t(C),bt=.5*(C.pageX+lt.x),Mt=.5*(C.pageY+lt.y);u.set(bt,Mt)}}function St(C){if(E.length===1)g.set(C.pageX,C.pageY);else{const lt=_t(C),bt=.5*(C.pageX+lt.x),Mt=.5*(C.pageY+lt.y);g.set(bt,Mt)}}function It(C){const lt=_t(C),bt=C.pageX-lt.x,Mt=C.pageY-lt.y,rt=Math.sqrt(bt*bt+Mt*Mt);p.set(0,rt)}function L(C){n.enableZoom&&It(C),n.enablePan&&St(C)}function ht(C){n.enableZoom&&It(C),n.enableRotate&&Ut(C)}function Z(C){if(E.length==1)d.set(C.pageX,C.pageY);else{const bt=_t(C),Mt=.5*(C.pageX+bt.x),rt=.5*(C.pageY+bt.y);d.set(Mt,rt)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const lt=n.domElement;k(2*Math.PI*f.x/lt.clientHeight),q(2*Math.PI*f.y/lt.clientHeight),u.copy(d)}function ot(C){if(E.length===1)_.set(C.pageX,C.pageY);else{const lt=_t(C),bt=.5*(C.pageX+lt.x),Mt=.5*(C.pageY+lt.y);_.set(bt,Mt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(_)}function j(C){const lt=_t(C),bt=C.pageX-lt.x,Mt=C.pageY-lt.y,rt=Math.sqrt(bt*bt+Mt*Mt);M.set(0,rt),v.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),X(v.y),p.copy(M);const I=(C.pageX+lt.x)*.5,ct=(C.pageY+lt.y)*.5;K(I,ct)}function Tt(C){n.enableZoom&&j(C),n.enablePan&&ot(C)}function mt(C){n.enableZoom&&j(C),n.enableRotate&&Z(C)}function b(C){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",F)),Gt(C),C.pointerType==="touch"?Ft(C):st(C))}function S(C){n.enabled!==!1&&(C.pointerType==="touch"?nt(C):et(C))}function F(C){Nt(C),E.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(hh),r=i.NONE}function st(C){let lt;switch(C.button){case 0:lt=n.mouseButtons.LEFT;break;case 1:lt=n.mouseButtons.MIDDLE;break;case 2:lt=n.mouseButtons.RIGHT;break;default:lt=-1}switch(lt){case Hi.DOLLY:if(n.enableZoom===!1)return;at(C),r=i.DOLLY;break;case Hi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;W(C),r=i.PAN}else{if(n.enableRotate===!1)return;tt(C),r=i.ROTATE}break;case Hi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;tt(C),r=i.ROTATE}else{if(n.enablePan===!1)return;W(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(no)}function et(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(C);break;case i.DOLLY:if(n.enableZoom===!1)return;ut(C);break;case i.PAN:if(n.enablePan===!1)return;Et(C);break}}function Q(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(no),xt(yt(C)),n.dispatchEvent(hh))}function yt(C){const lt=C.deltaMode,bt={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(lt){case 1:bt.deltaY*=16;break;case 2:bt.deltaY*=100;break}return C.ctrlKey&&!x&&(bt.deltaY*=10),bt}function ft(C){C.key==="Control"&&(x=!0,document.addEventListener("keyup",gt,{passive:!0,capture:!0}))}function gt(C){C.key==="Control"&&(x=!1,document.removeEventListener("keyup",gt,{passive:!0,capture:!0}))}function Rt(C){n.enabled===!1||n.enablePan===!1||Pt(C)}function Ft(C){switch(At(C),E.length){case 1:switch(n.touches.ONE){case Vi.ROTATE:if(n.enableRotate===!1)return;Ut(C),r=i.TOUCH_ROTATE;break;case Vi.PAN:if(n.enablePan===!1)return;St(C),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(C),r=i.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ht(C),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(no)}function nt(C){switch(At(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Z(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ot(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Tt(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(C),n.update();break;default:r=i.NONE}}function Kt(C){n.enabled!==!1&&C.preventDefault()}function Gt(C){E.push(C.pointerId)}function Nt(C){delete U[C.pointerId];for(let lt=0;lt<E.length;lt++)if(E[lt]==C.pointerId){E.splice(lt,1);return}}function At(C){let lt=U[C.pointerId];lt===void 0&&(lt=new it,U[C.pointerId]=lt),lt.set(C.pageX,C.pageY)}function _t(C){const lt=C.pointerId===E[0]?E[1]:E[0];return U[lt]}n.domElement.addEventListener("contextmenu",Kt),n.domElement.addEventListener("pointerdown",b),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",Q,{passive:!1}),document.addEventListener("keydown",ft,{passive:!0,capture:!0}),this.update()}}class vv{constructor(t){this.camera=new Je(48,window.innerWidth/window.innerHeight,.1,100),this.defaultPos=new D(0,9.2,9.8),this.defaultLookAt=new D(0,0,0),this.camera.position.copy(this.defaultPos),this.controls=new gv(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2.25,this.controls.minDistance=4.5,this.controls.maxDistance=20,this.controls.target.copy(this.defaultLookAt),this.controls.update()}focusPlayerCorner(t){}zoomInAction(t){}zoomOutReset(t=0){}update(){this.controls&&this.controls.update()}}class xv{constructor(t){this.scene=t;const e=new uv(16777215,.7);this.scene.add(e),this.dirLight=new Ao(16774634,1.8),this.dirLight.position.set(8,16,10),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=35,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight);const n=new Ao(6333946,.6);n.position.set(-10,10,-10),this.scene.add(n)}}const wn=.85,Re=.2,Ws={0:{name:"Red",hex:15680580,css:"#ef4444",label:"RED"},1:{name:"Green",hex:2278750,css:"#22c55e",label:"GREEN"},2:{name:"Yellow",hex:15381256,css:"#eab308",label:"YELLOW"},3:{name:"Blue",hex:3900150,css:"#3b82f6",label:"BLUE"}},al=[0,8,13,21,26,34,39,47];function ue(s,t,e=Re){const n=(s-7)*wn,i=(t-7)*wn;return new D(n,e,i)}const ea={0:[ue(2,10,Re+.05),ue(4,10,Re+.05),ue(2,12,Re+.05),ue(4,12,Re+.05)],1:[ue(2,2,Re+.05),ue(4,2,Re+.05),ue(2,4,Re+.05),ue(4,4,Re+.05)],2:[ue(10,2,Re+.05),ue(12,2,Re+.05),ue(10,4,Re+.05),ue(12,4,Re+.05)],3:[ue(10,10,Re+.05),ue(12,10,Re+.05),ue(10,12,Re+.05),ue(12,12,Re+.05)]},Mu=[{col:6,row:13},{col:6,row:12},{col:6,row:11},{col:6,row:10},{col:6,row:9},{col:6,row:8},{col:5,row:6},{col:4,row:6},{col:3,row:6},{col:2,row:6},{col:1,row:6},{col:0,row:6},{col:0,row:7},{col:0,row:8},{col:1,row:8},{col:2,row:8},{col:3,row:8},{col:4,row:8},{col:5,row:8},{col:6,row:5},{col:6,row:4},{col:6,row:3},{col:6,row:2},{col:6,row:1},{col:6,row:0},{col:7,row:0},{col:8,row:0},{col:8,row:1},{col:8,row:2},{col:8,row:3},{col:8,row:4},{col:8,row:5},{col:9,row:6},{col:10,row:6},{col:11,row:6},{col:12,row:6},{col:13,row:6},{col:14,row:6},{col:14,row:7},{col:14,row:8},{col:13,row:8},{col:12,row:8},{col:11,row:8},{col:10,row:8},{col:9,row:8},{col:8,row:9},{col:8,row:10},{col:8,row:11},{col:8,row:12},{col:8,row:13},{col:8,row:14},{col:7,row:14}],Mv={0:[{col:7,row:13},{col:7,row:12},{col:7,row:11},{col:7,row:10},{col:7,row:9},{col:7,row:8},{col:7,row:7}],1:[{col:1,row:7},{col:2,row:7},{col:3,row:7},{col:4,row:7},{col:5,row:7},{col:6,row:7},{col:7,row:7}],2:[{col:7,row:1},{col:7,row:2},{col:7,row:3},{col:7,row:4},{col:7,row:5},{col:7,row:6},{col:7,row:7}],3:[{col:13,row:7},{col:12,row:7},{col:11,row:7},{col:10,row:7},{col:9,row:7},{col:8,row:7},{col:7,row:7}]},Wr={0:0,1:13,2:26,3:39},io=51;function yu(s){const t=Mu[s%52];return ue(t.col,t.row)}function yv(s,t){const e=Mv[s],n=Math.min(t,e.length-1),i=e[n];return ue(i.col,i.row)}class Sv{constructor(t){this.scene=t,this.boardGroup=new pn,this.boardGroup.name="LudoBoard3D",this.safeStars=[],this.homeYardLights=[],this.createBoardMaterials(),this.buildWoodenFrame(),this.buildMarbleSurface(),this.buildBaseYards(),this.buildTrackCells(),this.buildCenterCrown(),this.boardGroup.matrixAutoUpdate=!1,this.boardGroup.updateMatrix(),this.scene.add(this.boardGroup)}createBoardMaterials(){this.woodMaterial=new Ce({color:4005392,roughness:.35,metalness:.15}),this.goldMaterial=new Ce({color:16096779,roughness:.2,metalness:.9,envMapIntensity:1.5}),this.marbleMaterial=new Ce({color:16317180,roughness:.1,metalness:.05,envMapIntensity:1.2}),this.playerMaterials={0:new Ce({color:15680580,roughness:.2,metalness:.3}),1:new Ce({color:2278750,roughness:.2,metalness:.3}),2:new Ce({color:15381256,roughness:.2,metalness:.3}),3:new Ce({color:3900150,roughness:.2,metalness:.3})},this.glassTileMaterial=new vu({color:16777215,roughness:.05,transmission:.6,thickness:.2,ior:1.5}),this.starMaterial=new Ce({color:16436245,emissive:15381256,emissiveIntensity:.4,metalness:.8,roughness:.2}),this.sharedBoxGeo=new Be(wn-.05,.04,wn-.05),this.sharedStretchGeo=new Be(wn-.05,.045,wn-.05)}buildWoodenFrame(){const t=15*wn+1.2,e=.6,n=new Be(t,e,t),i=new $t(n,this.woodMaterial);i.position.y=-e/2,i.receiveShadow=!0,i.castShadow=!0,i.matrixAutoUpdate=!1,i.updateMatrix(),this.boardGroup.add(i);const r=new Be(t+.1,.08,t+.1),a=new $t(r,this.goldMaterial);a.position.y=.02,a.matrixAutoUpdate=!1,a.updateMatrix(),this.boardGroup.add(a)}buildMarbleSurface(){const t=15*wn,e=new Be(t,.2,t),n=new $t(e,this.marbleMaterial);n.position.y=.1,n.receiveShadow=!0,n.matrixAutoUpdate=!1,n.updateMatrix(),this.boardGroup.add(n)}buildBaseYards(){[{col:3,row:11,playerIdx:0},{col:3,row:3,playerIdx:1},{col:11,row:3,playerIdx:2},{col:11,row:11,playerIdx:3}].forEach(({col:e,row:n,playerIdx:i})=>{const r=ue(e,n,.21),a=6*wn-.2,o=new Be(a,.06,a),l=new $t(o,this.playerMaterials[i]);l.position.copy(r),l.receiveShadow=!0,l.matrixAutoUpdate=!1,l.updateMatrix(),this.boardGroup.add(l);const c=a-.4,h=new Be(c,.07,c),u=new $t(h,this.marbleMaterial);u.position.set(r.x,r.y+.01,r.z),u.receiveShadow=!0,u.matrixAutoUpdate=!1,u.updateMatrix(),this.boardGroup.add(u);const d=new ur(.8,.95,24),f=new Ce({color:Ws[i].hex,emissive:Ws[i].hex,emissiveIntensity:.3,side:dn}),g=new $t(d,f);g.rotation.x=-Math.PI/2,g.position.set(r.x,r.y+.045,r.z),g.matrixAutoUpdate=!1,g.updateMatrix(),this.boardGroup.add(g);const _=new rh(Ws[i].hex,.9,3.5);_.position.set(r.x,r.y+.5,r.z),this.boardGroup.add(_),this.homeYardLights.push(_)})}buildTrackCells(){Mu.forEach((t,e)=>{const n=ue(t.col,t.row,.21),i=al.includes(e);let r=this.glassTileMaterial;e===0?r=this.playerMaterials[0]:e===13?r=this.playerMaterials[1]:e===26?r=this.playerMaterials[2]:e===39&&(r=this.playerMaterials[3]);const a=new $t(this.sharedBoxGeo,r);a.position.copy(n),a.receiveShadow=!0,a.matrixAutoUpdate=!1,a.updateMatrix(),this.boardGroup.add(a),i&&this.addStarBadge(n)}),[0,1,2,3].forEach(t=>{for(let e=0;e<6;e++){let n=7,i=7;t===0?i=13-e:t===1?n=1+e:t===2?i=1+e:t===3&&(n=13-e);const r=ue(n,i,.22),a=new $t(this.sharedStretchGeo,this.playerMaterials[t]);a.position.copy(r),a.receiveShadow=!0,a.matrixAutoUpdate=!1,a.updateMatrix(),this.boardGroup.add(a)}})}addStarBadge(t){const e=new pn;e.position.set(t.x,t.y+.03,t.z);const n=new pu,i=5,r=.22,a=.1;for(let h=0;h<i*2;h++){const u=h%2===0?r:a,d=h/(i*2)*Math.PI*2-Math.PI/2,f=Math.cos(d)*u,g=Math.sin(d)*u;h===0?n.moveTo(f,g):n.lineTo(f,g)}n.closePath();const o={depth:.04,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.01,bevelThickness:.01},l=new sl(n,o),c=new $t(l,this.starMaterial);c.rotation.x=-Math.PI/2,c.castShadow=!0,e.add(c),this.boardGroup.add(e),this.safeStars.push(e)}buildCenterCrown(){const t=ue(7,7,.23),e=3*wn-.1,n=new Be(e,.05,e),i=new $t(n,this.marbleMaterial);i.position.copy(t),i.matrixAutoUpdate=!1,i.updateMatrix(),this.boardGroup.add(i);const r=new pn;r.position.set(t.x,t.y+.1,t.z);const a=new hr(.4,.45,.1,16),o=new $t(a,this.goldMaterial);r.add(o);const l=5;for(let h=0;h<l;h++){const u=h/l*Math.PI*2,d=new il(.08,.25,8),f=new $t(d,this.goldMaterial);f.position.set(Math.cos(u)*.3,.15,Math.sin(u)*.3),r.add(f);const g=new Cs(.04,8,8),_=new Ce({color:15680580,emissive:15680580,emissiveIntensity:.8}),m=new $t(g,_);m.position.set(Math.cos(u)*.3,.3,Math.sin(u)*.3),r.add(m)}const c=new rh(16766720,1.5,5);c.position.set(t.x,t.y+.8,t.z),this.boardGroup.add(c),this.boardGroup.add(r),this.centerCrown=r}}class Ev{constructor(t){this.boardBuilder=t,this.time=0}update(t){this.time+=t*3,this.boardBuilder.safeStars&&this.boardBuilder.safeStars.forEach((e,n)=>{e.rotation.y=this.time*.5+n,e.position.y=.24+Math.sin(this.time*2+n)*.015}),this.boardBuilder.centerCrown&&(this.boardBuilder.centerCrown.rotation.y=this.time*.4)}}class Tv{constructor(t,e){this.playerIdx=t,this.tokenIdx=e,this.id=`pawn_${t}_${e}`,this.meshGroup=new pn,this.meshGroup.name=this.id,this.isSelectable=!1,this.isHovered=!1,this.trackIndex=-1,this.homeStepIndex=-1,this.isFinished=!1,this.buildTokenMesh()}buildTokenMesh(){const t=Ws[this.playerIdx],e=new hr(.28,.32,.1,24),n=new Ce({color:14251782,roughness:.2,metalness:.9,envMapIntensity:1.5}),i=new $t(e,n);i.position.y=.05,i.castShadow=!0,i.receiveShadow=!0,this.meshGroup.add(i);const r=[];r.push(new it(.26,.08)),r.push(new it(.22,.25)),r.push(new it(.12,.45)),r.push(new it(.16,.55)),r.push(new it(.2,.65)),r.push(new it(.15,.72)),r.push(new it(0,.75));const a=new nl(r,24);this.bodyMaterial=new vu({color:t.hex,roughness:.1,metalness:.1,transmission:.7,thickness:.3,ior:1.4,transparent:!0,opacity:.9,clearcoat:1,clearcoatRoughness:.1});const o=new $t(a,this.bodyMaterial);o.castShadow=!0,o.receiveShadow=!0,this.meshGroup.add(o);const l=new Cs(.1,16,16);this.coreMaterial=new Ce({color:t.hex,emissive:t.hex,emissiveIntensity:.6,roughness:.1});const c=new $t(l,this.coreMaterial);c.position.y=.35,this.meshGroup.add(c);const h=new ur(.35,.45,32);this.haloMaterial=new cr({color:16777215,side:dn,transparent:!0,opacity:0}),this.haloMesh=new $t(h,this.haloMaterial),this.haloMesh.rotation.x=-Math.PI/2,this.haloMesh.position.y=.01,this.meshGroup.add(this.haloMesh)}setSelectable(t){this.isSelectable=t,t?(this.haloMaterial.opacity=.9,this.haloMaterial.color.setHex(16777215),this.coreMaterial.emissiveIntensity=1.2):(this.haloMaterial.opacity=0,this.coreMaterial.emissiveIntensity=.6)}setPosition(t){this.meshGroup.position.copy(t)}updateIdle(t){this.isSelectable&&(this.meshGroup.position.y+=Math.sin(t*5+this.tokenIdx)*.003,this.haloMesh.rotation.z=t*2)}}function Hn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Su(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qs={duration:.5,overwrite:!1,delay:0},ol,Pe,ie,mn=1e8,te=1/mn,Co=Math.PI*2,bv=Co/4,wv=0,Eu=Math.sqrt,Av=Math.cos,Rv=Math.sin,Ae=function(t){return typeof t=="string"},de=function(t){return typeof t=="function"},Yn=function(t){return typeof t=="number"},ll=function(t){return typeof t>"u"},In=function(t){return typeof t=="object"},Ve=function(t){return t!==!1},cl=function(){return typeof window<"u"},Gr=function(t){return de(t)||Ae(t)},Tu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Oe=Array.isArray,Cv=/random\([^)]+\)/g,Pv=/,\s*/g,dh=/(?:-?\.?\d|\.)+/gi,bu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,so=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wu=/[+-]=-?[.\d]+/,Lv=/[^,'"\[\]\s]+/gi,Dv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ae,An,Po,hl,rn={},na={},Au,Ru=function(t){return(na=ys(t,rn))&&Ye},ul=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},tr=function(t,e){return!e&&console.warn(t)},Cu=function(t,e){return t&&(rn[t]=e)&&na&&(na[t]=e)||rn},er=function(){return 0},Iv={suppressEvents:!0,isStart:!0,kill:!1},Xr={suppressEvents:!0,kill:!1},Uv={suppressEvents:!0},dl={},ci=[],Lo={},Pu,$e={},ro={},fh=30,qr=[],fl="",pl=function(t){var e=t[0],n,i;if(In(e)||de(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=qr.length;i--&&!qr[i].targetTest(e););n=qr[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ju(t[i],n)))||t.splice(i,1);return t},Di=function(t){return t._gsap||pl(_n(t))[0]._gsap},Lu=function(t,e,n){return(n=t[e])&&de(n)?t[e]():ll(n)&&t.getAttribute&&t.getAttribute(e)||n},We=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},re=function(t){return Math.round(t*1e7)/1e7||0},ps=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Nv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ia=function(){var t=ci.length,e=ci.slice(0),n,i;for(Lo={},ci.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ml=function(t){return!!(t._initted||t._startAt||t.add)},Du=function(t,e,n,i){ci.length&&!Pe&&ia(),t.render(e,n,!!(Pe&&e<0&&ml(t))),ci.length&&!Pe&&ia()},Iu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Lv).length<2?e:Ae(t)?t.trim():t},Uu=function(t){return t},an=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ov=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ys=function(t,e){for(var n in e)t[n]=e[n];return t},ph=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=In(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},sa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Xs=function(t){var e=t.parent||ae,n=t.keyframes?Ov(Oe(t.keyframes)):an;if(Ve(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Fv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Nu=function(t,e,n,i,r){var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},fa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},di=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ii=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Bv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Do=function(t,e,n,i){return t._startAt&&(Pe?t._startAt.revert(Xr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},zv=function s(t){return!t||t._ts&&s(t.parent)},mh=function(t){return t._repeat?Ss(t._tTime,t=t.duration()+t._rDelay)*t:0},Ss=function(t,e){var n=Math.floor(t=re(t/e));return t&&n===t?n-1:n},ra=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},pa=function(t){return t._end=re(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},ma=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=re(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),pa(t),n._dirty||Ii(n,t)),t},Ou=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ra(t.rawTime(),e),(!e._dur||dr(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Ii(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},Pn=function(t,e,n,i){return e.parent&&di(e),e._start=re((Yn(n)?n:n||t!==ae?cn(t,n,e):t._time)+e._delay),e._end=re(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Nu(t,e,"_first","_last",t._sort?"_start":0),Io(e)||(t._recent=e),i||Ou(t,e),t._ts<0&&ma(t,t._tTime),t},Fu=function(t,e){return(rn.ScrollTrigger||ul("scrollTrigger",e))&&rn.ScrollTrigger.create(e,t)},Bu=function(t,e,n,i,r){if(gl(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Pe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Pu!==Qe.frame)return ci.push(t),t._lazy=[r,i],1},kv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Io=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gv=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&kv(t)&&!(!t._initted&&Io(t))||(t._ts<0||t._dp._ts<0)&&!Io(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=dr(0,t._tDur,e),h=Ss(l,o),t._yoyo&&h&1&&(a=1-a),h!==Ss(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Pe||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&Bu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Do(t,e,n,!0),t._onUpdate&&!n&&tn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&tn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&di(t,1),!n&&!Pe&&(tn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Hv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Es=function(t,e,n,i){var r=t._repeat,a=re(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:re(a*(r+1)+t._rDelay*r):a,o>0&&!i&&ma(t,t._tTime=t._tDur*o),t.parent&&pa(t),n||Ii(t.parent,t),t},_h=function(t){return t instanceof Ge?Ii(t):Es(t,t._dur)},Vv={_start:0,endTime:er,totalDuration:er},cn=function s(t,e,n){var i=t.labels,r=t._recent||Vv,a=t.duration()>=mn?r.endTime(!1):t._dur,o,l,c;return Ae(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Oe(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},qs=function(t,e,n){var i=Yn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ve(l.vars.inherit)&&l.parent;a.immediateRender=Ve(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Me(e[0],a,e[r+1])},mi=function(t,e){return t||t===0?e(t):e},dr=function(t,e,n){return n<t?t:n>e?e:n},Ue=function(t,e){return!Ae(t)||!(e=Dv.exec(t))?"":e[1]},Wv=function(t,e,n){return mi(n,function(i){return dr(t,e,i)})},Uo=[].slice,zu=function(t,e){return t&&In(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&In(t[0]))&&!t.nodeType&&t!==An},Xv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ae(i)&&!e||zu(i,1)?(r=n).push.apply(r,_n(i)):n.push(i)})||n},_n=function(t,e,n){return ie&&!e&&ie.selector?ie.selector(t):Ae(t)&&!n&&(Po||!Ts())?Uo.call((e||hl).querySelectorAll(t),0):Oe(t)?Xv(t,n):zu(t)?Uo.call(t,0):t?[t]:[]},No=function(t){return t=_n(t)[0]||tr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return _n(e,n.querySelectorAll?n:n===t?tr("Invalid scope")||hl.createElement("div"):t)}},ku=function(t){return t.sort(function(){return .5-Math.random()})},Gu=function(t){if(de(t))return t;var e=In(t)?t:{each:t},n=Ui(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Ae(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=a[_],p,M,v,y,A,R,E,U,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,mn])[1],!x){for(E=-mn;E<(E=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*h-.5:i%x,M=x===mn?0:l?_*u/x-.5:i/x|0,E=0,U=mn,R=0;R<_;R++)v=R%x-p,y=M-(R/x|0),m[R]=A=c?Math.abs(c==="y"?y:v):Eu(v*v+y*y),A>E&&(E=A),A<U&&(U=A);i==="random"&&ku(m),m.max=E-U,m.min=U,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Ue(e.amount||e.each)||0,n=n&&_<0?sx(n):n}return _=(m[d]-m.min)/m.max||0,re(m.b+(n?n(_):_)*m.v)+m.u}},Oo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=re(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Yn(n)?0:Ue(n))}},Hu=function(t,e){var n=Oe(t),i,r;return!n&&In(t)&&(i=n=t.radius||mn,t.values?(t=_n(t.values),(r=!Yn(t[0]))&&(i*=i)):t=Oo(t.increment)),mi(e,n?de(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=mn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,r||h===a||Yn(a)?h:h+Ue(a)}:Oo(t))},Vu=function(t,e,n,i){return mi(Oe(t)?!e:n===!0?!!(n=0):!i,function(){return Oe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},qv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Yv=function(t,e){return function(n){return t(parseFloat(n))+(e||Ue(n))}},jv=function(t,e,n){return Xu(t,e,0,1,n)},Wu=function(t,e,n){return mi(n,function(i){return t[~~e(i)]})},Kv=function s(t,e,n){var i=e-t;return Oe(t)?Wu(t,s(0,t.length),e):mi(n,function(r){return(i+(r-t)%i)%i+t})},Zv=function s(t,e,n){var i=e-t,r=i*2;return Oe(t)?Wu(t,s(0,t.length-1),e):mi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},nr=function(t){return t.replace(Cv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Pv);return Vu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Xu=function(t,e,n,i,r){var a=e-t,o=i-n;return mi(r,function(l){return n+((l-t)/a*o||0)})},$v=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=Ae(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Oe(t)&&!Oe(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=ys(Oe(t)?[]:{},t));if(!h){for(l in e)_l.call(o,t,l,"get",e[l]);r=function(g){return Ml(g,o)||(a?t.p:t)}}}return mi(n,r)},gh=function(t,e,n){var i=t.labels,r=mn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},tn=function(t,e,n){var i=t.vars,r=i[e],a=ie,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ci.length&&ia(),o&&(ie=o),h=l?r.apply(c,l):r.call(c),ie=a,h},Bs=function(t){return di(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pe),t.progress()<1&&tn(t,"onInterrupt"),t},us,qu=[],Yu=function(t){if(t)if(t=!t.name&&t.default||t,cl()||t.headless){var e=t.name,n=de(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:er,render:Ml,add:_l,kill:px,modifier:fx,rawVars:0},a={targetTest:0,get:0,getSetter:xl,aliases:{},register:0};if(Ts(),t!==i){if($e[e])return;an(i,an(sa(t,r),a)),ys(i.prototype,ys(r,sa(t,a))),$e[i.prop=e]=i,t.targetTest&&(qr.push(i),dl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Cu(e,i),t.register&&t.register(Ye,i,Xe)}else qu.push(t)},Qt=255,zs={aqua:[0,Qt,Qt],lime:[0,Qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qt],navy:[0,0,128],white:[Qt,Qt,Qt],olive:[128,128,0],yellow:[Qt,Qt,0],orange:[Qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qt,0,0],pink:[Qt,192,203],cyan:[0,Qt,Qt],transparent:[Qt,Qt,Qt,0]},ao=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Qt+.5|0},ju=function(t,e,n){var i=t?Yn(t)?[t>>16,t>>8&Qt,t&Qt]:0:zs.black,r,a,o,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),zs[t])i=zs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Qt,i&Qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Qt,t&Qt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(dh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=ao(l+1/3,r,a),i[1]=ao(l,r,a),i[2]=ao(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(bu),n&&i.length<4&&(i[3]=1),i}else i=t.match(dh)||zs.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Qt,a=i[1]/Qt,o=i[2]/Qt,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ku=function(t){var e=[],n=[],i=-1;return t.split(hi).forEach(function(r){var a=r.match(hs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},vh=function(t,e,n){var i="",r=(t+i).match(hi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=ju(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Ku(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(hi,"1").split(hs),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(hi),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},hi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in zs)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Jv=/hsl[a]?\(/,Zu=function(t){var e=t.join(" "),n;if(hi.lastIndex=0,hi.test(e))return n=Jv.test(e),t[1]=vh(t[1],n),t[0]=vh(t[0],n,Ku(t[1])),!0},ir,Qe=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,d,f,g=function _(m){var p=s()-i,M=m===!0,v,y,A,R;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,v=A-a,(v>0||M)&&(R=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,a+=v+(v>=r?4:r-v),y=1),M||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](A,d,R,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Au&&(!Po&&cl()&&(An=Po=window,hl=An.document||{},rn.gsap=Ye,(An.gsapVersions||(An.gsapVersions=[])).push(Ye.version),Ru(na||An.GreenSockGlobals||!An.gsap&&An||{}),qu.forEach(Yu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ir=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ir=0,c=er},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,M){var v=p?function(y,A,R,E){m(y,A,R,E),u.remove(v)}:m;return u.remove(m),o[M?"unshift":"push"](v),Ts(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Ts=function(){return!ir&&Qe.wake()},jt={},Qv=/^[\d.\-M][\d.\-,\s]/,tx=/["']/g,ex=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(tx,"").trim():+c,i=l.substr(o+1).trim();return e},nx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ix=function(t){var e=(t+"").split("("),n=jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ex(e[1])]:nx(t).split(",").map(Iu)):jt._CE&&Qv.test(t)?jt._CE("",t):n},sx=function(t){return function(e){return 1-t(1-e)}},Ui=function(t,e){return t&&(de(t)?t:jt[t]||ix(t))||e},Gi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return We(t,function(o){jt[o]=rn[o]=r,jt[a=o.toLowerCase()]=n;for(var l in r)jt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=jt[o+"."+l]=r[l]}),r},$u=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},oo=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Co*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Rv((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:$u(o);return r=Co/r,l.config=function(c,h){return s(t,c,h)},l},lo=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:$u(n);return i.config=function(r){return s(t,r)},i};We("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Gi(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});jt.Linear.easeNone=jt.none=jt.Linear.easeIn;Gi("Elastic",oo("in"),oo("out"),oo());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Gi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Gi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Gi("Circ",function(s){return-(Eu(1-s*s)-1)});Gi("Sine",function(s){return s===1?1:-Av(s*bv)+1});Gi("Back",lo("in"),lo("out"),lo());jt.SteppedEase=jt.steps=rn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-te;return function(o){return((i*dr(0,a,o)|0)+r)*n}}};Qs.ease=jt["quad.out"];We("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return fl+=s+","+s+"Params,"});var Ju=function(t,e){this.id=wv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Lu,this.set=e?e.getSetter:xl},sr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Es(this,+e.duration,1,1),this.data=e.data,ie&&(this._ctx=ie,ie.data.push(this)),ir||Qe.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Es(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ts(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ma(this,n),!r._dp||r.parent||Ou(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Du(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+mh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+mh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ss(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ra(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(dr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),pa(this),Bv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ts(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=re(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ve(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ra(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Uv);var i=Pe;return Pe=n,ml(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_h(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_h(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),Ve(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ve(i)),this._dur||(this._zTime=-te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-te)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=de(n)?n:Uu,l=function(){var h=i.then;i.then=null,r&&r(),de(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Bs(this)},s}();an(sr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var Ge=function(s){Su(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ve(n.sortChildren),ae&&Pn(n.parent||ae,Hn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Fu(Hn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return qs(0,arguments,this),this},e.from=function(i,r,a){return qs(1,arguments,this),this},e.fromTo=function(i,r,a,o){return qs(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Xs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Me(i,r,cn(this,a),1),this},e.call=function(i,r,a){return Pn(this,Me.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Me(i,a,cn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Xs(a).immediateRender=Ve(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Xs(o).immediateRender=Ve(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:re(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,M,v,y,A,R,E;if(this!==ae&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,y=this._start,v=this._ts,p=!v,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(d=re(h%m),h===l?(_=this._repeat,d=c):(A=re(h/m),_=~~A,_&&_===A&&(d=c,_--),d>c&&(d=c)),A=Ss(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),R&&_&1&&(d=c-d,E=1),_!==A&&!this._lock){var U=R&&A&1,x=U===(R&&_&1);if(_<A&&(U=!U),o=U?0:h%c?c:h,this._lock=1,this.render(o||(E?0:re(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&tn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=U?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Hv(this,re(o),re(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!A&&(tn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=-te);break}}f=g}else{f=this._last;for(var T=i<0?i:d;f;){if(g=f._prev,(f._act||T<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,r,a||Pe&&ml(f)),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=T?-te:te);break}}f=g}}if(M&&!r&&(this.pause(),M.render(d>=o?0:-te)._zTime=d>=o?1:-1,this._ts))return this._start=y,pa(this),this.render(i,r,a);this._onUpdate&&!r&&tn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&di(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(tn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Yn(r)||(r=cn(this,r,i)),!(i instanceof sr)){if(Oe(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ae(i))return this.addLabel(i,r);if(de(i))i=Me.delayedCall(0,i);else return this}return this!==i?Pn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-mn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Me?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ae(i)?this.removeLabel(i):de(i)?this.killTweensOf(i):(i.parent===this&&fa(this,i),i===this._recent&&(this._recent=this._last),Ii(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=re(Qe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=cn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Me.delayedCall(0,r||er,a);return o.data="isPause",this._hasPause=1,Pn(this,o,cn(this,i))},e.removePause=function(i){var r=this._first;for(i=cn(this,i);r;)r._start===i&&r.data==="isPause"&&di(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ii!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=_n(i),l=this._first,c=Yn(r),h;l;)l instanceof Me?Nv(l._targets,o)&&(c?(!ii||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=cn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Me.to(a,an({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||te,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Es(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,an({startAt:{time:cn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),gh(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),gh(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=re(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Ii(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ii(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=mn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=re(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Es(a,a===ae&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ae._ts&&(Du(ae,ra(i,ae)),Pu=Qe.frame),Qe.frame>=fh){fh+=sn.autoSleep||120;var r=ae._first;if((!r||!r._ts)&&sn.autoSleep&&Qe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Qe.sleep()}}},t}(sr);an(Ge.prototype,{_lock:0,_hasPause:0,_forcing:0});var rx=function(t,e,n,i,r,a,o){var l=new Xe(this._pt,t,e,0,1,sd,null,r),c=0,h=0,u,d,f,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=nr(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),d=n.match(so)||[];u=so.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?ps(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=so.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(wu.test(i)||p)&&(l.e=0),this._pt=l,l},_l=function(t,e,n,i,r,a,o,l,c,h){de(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:de(u)?c?t[e.indexOf("set")||!de(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=de(u)?c?hx:nd:vl,g;if(Ae(i)&&(~i.indexOf("random(")&&(i=nr(i)),i.charAt(1)==="="&&(g=ps(d,i)+(Ue(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Fo)return!isNaN(d*i)&&i!==""?(g=new Xe(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?dx:id,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&ul(e,i),rx.call(this,t,e,d,i,f,l||sn.stringFilter,c))},ax=function(t,e,n,i,r){if(de(t)&&(t=Ys(t,r,e,n,i)),!In(t)||t.style&&t.nodeType||Oe(t)||Tu(t))return Ae(t)?Ys(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Ys(t[o],r,e,n,i);return a},Qu=function(t,e,n,i,r,a){var o,l,c,h;if($e[t]&&(o=new $e[t]).init(r,o.rawVars?e[t]:ax(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Xe(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==us))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ii,Fo,gl=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!ol,y=t.timeline,A=i.easeReverse||u,R,E,U,x,T,O,k,q,P,N,z,X,Y;if(y&&(!d||!r)&&(r="none"),t._ease=Ui(r,Qs.ease),t._rEase=A&&(Ui(A)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||d&&!i.stagger){if(q=m[0]?Di(m[0]).harness:0,X=q&&i[q.prop],R=sa(i,dl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?Xr:Iv),_._lazy=0),a){if(di(t._startAt=Me.set(m,an({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ve(l),startAt:null,delay:0,onUpdate:c&&function(){return tn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pe||!o&&!f)&&t._startAt.revert(Xr),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),U=an({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ve(l),immediateRender:o,stagger:0,parent:p},R),X&&(U[q.prop]=X),di(t._startAt=Me.set(m,U)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pe?t._startAt.revert(Xr):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Ve(l)||l&&!g,E=0;E<m.length;E++){if(T=m[E],k=T._gsap||pl(m)[E]._gsap,t._ptLookup[E]=N={},Lo[k.id]&&ci.length&&ia(),z=M===m?E:M.indexOf(T),q&&(P=new q).init(T,X||R,t,z,M)!==!1&&(t._pt=x=new Xe(t._pt,T,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(K){N[K]=x}),P.priority&&(O=1)),!q||X)for(U in R)$e[U]&&(P=Qu(U,R,t,z,T,M))?P.priority&&(O=1):N[U]=x=_l.call(t,T,U,"get",R[U],z,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(T,t._op[E]),v&&t._pt&&(ii=t,ae.killTweensOf(T,N,t.globalTime(e)),Y=!t.parent,ii=0),t._pt&&l&&(Lo[k.id]=1)}O&&rd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,d&&e<=0&&y.render(mn,!0,!0)},ox=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Fo=1,t.vars[e]="+=0",gl(t,o),Fo=0,l?tr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=me(n)+Ue(u.e)),u.b&&(u.b=h.s+Ue(u.b))},lx=function(t,e){var n=t[0]?Di(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=ys({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},cx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Oe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Ys=function(t,e,n,i,r){return de(t)?t.call(e,n,i,r):Ae(t)&&~t.indexOf("random(")?nr(t):t},td=fl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ed={};We(td+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ed[s]=1});var Me=function(s){Su(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Xs(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||ae,M=(Oe(n)||Tu(n)?Yn(n[0]):"length"in i)?[n]:_n(n),v,y,A,R,E,U,x,T;if(o._targets=M.length?pl(M):tr("GSAP target "+n+" not found. https://gsap.com",!sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Gr(c)||Gr(h)){i=o.vars;var O=i.easeReverse||i.yoyoEase;if(v=o.timeline=new Ge({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),v.kill(),v.parent=v._dp=Hn(o),v._start=0,d||Gr(c)||Gr(h)){if(R=M.length,x=d&&Gu(d),In(d))for(E in d)~td.indexOf(E)&&(T||(T={}),T[E]=d[E]);for(y=0;y<R;y++)A=sa(i,ed),A.stagger=0,O&&(A.easeReverse=O),T&&ys(A,T),U=M[y],A.duration=+Ys(c,Hn(o),y,U,M),A.delay=(+Ys(h,Hn(o),y,U,M)||0)-o._delay,!d&&R===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),v.to(U,A,x?x(y,U,M):0),v._ease=jt.none;v.duration()?c=h=0:o.timeline=0}else if(g){Xs(an(v.vars.defaults,{ease:"none"})),v._ease=Ui(g.ease||i.ease||"none");var k=0,q,P,N;if(Oe(g))g.forEach(function(z){return v.to(M,z,">")}),v.duration();else{A={};for(E in g)E==="ease"||E==="easeEach"||cx(E,g[E],A,g.easeEach);for(E in A)for(q=A[E].sort(function(z,X){return z.t-X.t}),k=0,y=0;y<q.length;y++)P=q[y],N={ease:P.e,duration:(P.t-(y?q[y-1].t:0))/100*c},N[E]=P.v,v.to(M,N,k),k+=N.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!ol&&(ii=Hn(o),ae.killTweensOf(M),ii=0),Pn(p,Hn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===re(p._time)&&Ve(u)&&zv(Hn(o))&&p.data!=="nested")&&(o._tTime=-te,o.render(Math.max(0,-h)||0)),m&&Fu(Hn(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-te&&!h?l:i<te?0:i,d,f,g,_,m,p,M,v;if(!c)Gv(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(d=re(u%_),u===l?(g=this._repeat,d=c):(m=re(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=Ss(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(re(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Bu(this,h?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var y=d<o;if(y!==this._inv){var A=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(y?-1:1)/A:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!m&&(tn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Do(this,i,r,a),tn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&tn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Do(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&di(this,1),!r&&!(h&&!o)&&(u||o||p)&&(tn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){ir||Qe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||gl(this,c),h=this._ease(c/this._dur),ox(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(ma(this,0),this.parent||Nu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Bs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ii&&ii.vars.overwrite!==!0)._first||Bs(this),this.parent&&a!==this.timeline.totalDuration()&&Es(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?_n(i):o,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!r||r==="all")&&Fv(o,l))return r==="all"&&(this._pt=0),Bs(this);for(u=this._op=this._op||[],r!=="all"&&(Ae(r)&&(_={},We(r,function(M){return _[M]=1}),r=_),r=lx(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],r==="all"?(u[p]=r,g=d,f={}):(f=u[p]=u[p]||{},g=r);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&fa(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Bs(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return qs(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return qs(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return ae.killTweensOf(i,r,a)},t}(sr);an(Me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});We("staggerTo,staggerFrom,staggerFromTo",function(s){Me[s]=function(){var t=new Ge,e=Uo.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var vl=function(t,e,n){return t[e]=n},nd=function(t,e,n){return t[e](n)},hx=function(t,e,n,i){return t[e](i.fp,n)},ux=function(t,e,n){return t.setAttribute(e,n)},xl=function(t,e){return de(t[e])?nd:ll(t[e])&&t.setAttribute?ux:vl},id=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},dx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},sd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ml=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},fx=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},px=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?fa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},mx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},rd=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Xe=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||id,this.d=l||this,this.set=c||vl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=mx,this.m=n,this.mt=r,this.tween=i},s}();We(fl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return dl[s]=1});rn.TweenMax=rn.TweenLite=Me;rn.TimelineLite=rn.TimelineMax=Ge;ae=new Ge({sortChildren:!1,defaults:Qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=Zu;var Ni=[],Yr={},_x=[],xh=0,gx=0,co=function(t){return(Yr[t]||_x).map(function(e){return e()})},Bo=function(){var t=Date.now(),e=[];t-xh>2&&(co("matchMediaInit"),Ni.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=An.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),co("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xh=t,co("matchMedia"))},ad=function(){function s(e,n){this.selector=n&&No(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){de(n)&&(r=i,i=n,n=de);var a=this,o=function(){var c=ie,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=No(r)),ie=a,u=i.apply(a,arguments),de(u)&&a._r.push(u),ie=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===de?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ie;ie=null,n(this),ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Me&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ge?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Me)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ni.length;a--;)Ni[a].id===this.id&&Ni.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),vx=function(){function s(e){this.contexts=[],this.scope=e,ie&&ie.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){In(n)||(n={matches:n});var a=new ad(0,r||this.scope),o=a.conditions={},l,c,h;ie&&!a.selector&&(a.selector=ie.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=An.matchMedia(n[c]),l&&(Ni.indexOf(a)<0&&Ni.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Bo):l.addEventListener("change",Bo)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),aa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Yu(i)})},timeline:function(t){return new Ge(t)},getTweensOf:function(t,e){return ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ae(t)&&(t=_n(t)[0]);var r=Di(t||{}).get,a=n?Uu:Iu;return n==="native"&&(n=""),t&&(e?a(($e[e]&&$e[e].get||r)(t,e,n,i)):function(o,l,c){return a(($e[o]&&$e[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=_n(t),t.length>1){var i=t.map(function(h){return Ye.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=$e[e],o=Di(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;us._pt=0,u.init(t,n?h+n:h,us,0,[t]),u.render(1,u),us._pt&&Ml(1,us)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Ye.to(t,an((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ui(t.ease,Qs.ease)),ph(Qs,t||{})},config:function(t){return ph(sn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!$e[o]&&!rn[o]&&tr(e+" effect requires "+o+" plugin.")}),ro[e]=function(o,l,c){return n(_n(o),an(l||{},r),c)},a&&(Ge.prototype[e]=function(o,l,c){return this.add(ro[e](o,In(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){jt[t]=Ui(e)},parseEase:function(t,e){return arguments.length?Ui(t,e):jt},getById:function(t){return ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ge(t),i,r;for(n.smoothChildTiming=Ve(t.smoothChildTiming),ae.remove(n),n._dp=0,n._time=n._tTime=ae._time,i=ae._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Me&&i.vars.onComplete===i._targets[0]))&&Pn(n,i,i._start-i._delay),i=r;return Pn(ae,n,0),n},context:function(t,e){return t?new ad(t,e):ie},matchMedia:function(t){return new vx(t)},matchMediaRefresh:function(){return Ni.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Bo()},addEventListener:function(t,e){var n=Yr[t]||(Yr[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Yr[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Kv,wrapYoyo:Zv,distribute:Gu,random:Vu,snap:Hu,normalize:jv,getUnit:Ue,clamp:Wv,splitColor:ju,toArray:_n,selector:No,mapRange:Xu,pipe:qv,unitize:Yv,interpolate:$v,shuffle:ku},install:Ru,effects:ro,ticker:Qe,updateRoot:Ge.updateRoot,plugins:$e,globalTimeline:ae,core:{PropTween:Xe,globals:Cu,Tween:Me,Timeline:Ge,Animation:sr,getCache:Di,_removeLinkedListItem:fa,reverting:function(){return Pe},context:function(t){return t&&ie&&(ie.data.push(t),t._ctx=ie),ie},suppressOverwrites:function(t){return ol=t}}};We("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return aa[s]=Me[s]});Qe.add(Ge.updateRoot);us=aa.to({},{duration:0});var xx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Mx=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=xx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},ho=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ae(r)&&(l={},We(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Mx(o,r)}}}},Ye=aa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Pe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ho("roundProps",Oo),ho("modifiers"),ho("snap",Hu))||aa;Me.version=Ge.version=Ye.version="3.15.0";Au=1;cl()&&Ts();jt.Power0;jt.Power1;jt.Power2;jt.Power3;jt.Power4;jt.Linear;jt.Quad;jt.Cubic;jt.Quart;jt.Quint;jt.Strong;jt.Elastic;jt.Back;jt.SteppedEase;jt.Bounce;jt.Sine;jt.Expo;jt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mh,si,ms,yl,Ri,yh,Sl,yx=function(){return typeof window<"u"},jn={},bi=180/Math.PI,_s=Math.PI/180,as=Math.atan2,Sh=1e8,El=/([A-Z])/g,Sx=/(left|right|width|margin|padding|x)/i,Ex=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Tx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},bx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},wx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ax=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},od=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ld=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Rx=function(t,e,n){return t.style[e]=n},Cx=function(t,e,n){return t.style.setProperty(e,n)},Px=function(t,e,n){return t._gsap[e]=n},Lx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Dx=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Ix=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},le="transform",qe=le+"Origin",Ux=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in jn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ln[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Vn(i,o)}):this.tfm[t]=a.x?a[t]:Vn(i,t),t===qe&&(this.tfm.zOrigin=a.zOrigin);else return Ln.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qe,e,"")),t=le}(r||e)&&this.props.push(t,e,r[t])},cd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Nx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(El,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Sl(),(!r||!r.isStart)&&!n[le]&&(cd(n),i.zOrigin&&n[qe]&&(n[qe]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hd=function(t,e){var n={target:t,props:[],revert:Nx,save:Ux};return t._gsap||Ye.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},ud,ko=function(t,e){var n=si.createElementNS?si.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):si.createElement(t);return n&&n.style?n:si.createElement(t)},en=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(El,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,bs(e)||e,1)||""},Eh="O,Moz,ms,Ms,Webkit".split(","),bs=function(t,e,n){var i=e||Ri,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Eh[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Eh[a]:"")+t},Go=function(){yx()&&window.document&&(Mh=window,si=Mh.document,ms=si.documentElement,Ri=ko("div")||{style:{}},ko("div"),le=bs(le),qe=le+"Origin",Ri.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ud=!!bs("perspective"),Sl=Ye.core.reverting,yl=1)},Th=function(t){var e=t.ownerSVGElement,n=ko("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ms.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ms.removeChild(n),r},bh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},dd=function(t){var e,n;try{e=t.getBBox()}catch{e=Th(t),n=1}return e&&(e.width||e.height)||n||(e=Th(t)),e&&!e.width&&!e.x&&!e.y?{x:+bh(t,["x","cx","x1"])||0,y:+bh(t,["y","cy","y1"])||0,width:0,height:0}:e},fd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&dd(t))},fi=function(t,e){if(e){var n=t.style,i;e in jn&&e!==qe&&(e=le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(El,"-$1").toLowerCase())):n.removeAttribute(e)}},ri=function(t,e,n,i,r,a){var o=new Xe(t._pt,e,n,0,1,a?ld:od);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},wh={deg:1,rad:1,turn:1},Ox={grid:1,flex:1},pi=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ri.style,l=Sx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===a||!r||wh[i]||wh[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&fd(t),(f||a==="%")&&(jn[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],me(f?r/g*u:r/100*g);if(o[l?"width":"height"]=u+(d?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===si||!_.appendChild)&&(_=si.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Qe.time&&!m.uncache)return me(r/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:fi(t,e)}else(f||a==="%")&&!Ox[en(_,"display")]&&(o.position=en(t,"position")),_===t&&(o.position="static"),_.appendChild(Ri),g=Ri[h],_.removeChild(Ri),o.position="absolute";return l&&f&&(m=Di(_),m.time=Qe.time,m.width=_[h]),me(d?g*r/u:g&&r?u/g*r:0)},Vn=function(t,e,n,i){var r;return yl||Go(),e in Ln&&e!=="transform"&&(e=Ln[e],~e.indexOf(",")&&(e=e.split(",")[0])),jn[e]&&e!=="transform"?(r=ar(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:la(en(t,qe))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=oa[e]&&oa[e](t,e,n)||en(t,e)||Lu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?pi(t,e,r,n)+n:r},Fx=function(t,e,n,i){if(!n||n==="none"){var r=bs(e,t,1),a=r&&en(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=en(t,"borderTopColor"))}var o=new Xe(this._pt,t.style,e,0,1,sd),l=0,c=0,h,u,d,f,g,_,m,p,M,v,y,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=en(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=en(t,e)||i,_?t.style[e]=_:fi(t,e)),h=[n,i],Zu(h),n=h[0],i=h[1],d=n.match(hs)||[],A=i.match(hs)||[],A.length){for(;u=hs.exec(i);)m=u[0],M=i.substring(l,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=ps(f,m)+y),p=parseFloat(m),v=m.substr((p+"").length),l=hs.lastIndex-v.length,v||(v=v||sn.units[e]||y,l===i.length&&(i+=v,o.e+=v)),y!==v&&(f=pi(t,e,_,v)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?ld:od;return wu.test(i)&&(o.e=0),this._pt=o,o},Ah={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ah[n]||n,e[1]=Ah[i]||i,e.join(" ")},zx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],jn[o]&&(l=1,o=o==="transformOrigin"?qe:le),fi(n,o);l&&(fi(n,le),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ar(n,1),a.uncache=1,cd(i)))}},oa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Xe(t._pt,e,n,0,0,zx);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},rr=[1,0,0,1,0,0],pd={},md=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Rh=function(t){var e=en(t,le);return md(e)?rr:e.substr(7).match(bu).map(me)},Tl=function(t,e){var n=t._gsap||Di(t),i=t.style,r=Rh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?rr:r):(r===rr&&!t.offsetParent&&t!==ms&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ms.appendChild(t)),r=Rh(t),l?i.display=l:fi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ms.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ho=function(t,e,n,i,r,a){var o=t._gsap,l=r||Tl(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],v=e.split(" "),y=parseFloat(v[0])||0,A=parseFloat(v[1])||0,R,E,U,x;n?l!==rr&&(E=f*m-g*_)&&(U=y*(m/E)+A*(-_/E)+(_*M-m*p)/E,x=y*(-g/E)+A*(f/E)-(f*M-g*p)/E,y=U,A=x):(R=dd(t),y=R.x+(~v[0].indexOf("%")?y/100*R.width:y),A=R.y+(~(v[1]||v[0]).indexOf("%")?A/100*R.height:A)),i||i!==!1&&o.smooth?(p=y-c,M=A-h,o.xOffset=u+(p*f+M*_)-p,o.yOffset=d+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[qe]="0px 0px",a&&(ri(a,o,"xOrigin",c,y),ri(a,o,"yOrigin",h,A),ri(a,o,"xOffset",u,o.xOffset),ri(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+A)},ar=function(t,e){var n=t._gsap||new Ju(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=en(t,qe)||"0",h,u,d,f,g,_,m,p,M,v,y,A,R,E,U,x,T,O,k,q,P,N,z,X,Y,K,$,tt,at,W,J,ut;return h=u=d=_=m=p=M=v=y=0,f=g=1,n.svg=!!(t.getCTM&&fd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[le]!=="none"?l[le]:"")),i.scale=i.rotate=i.translate="none"),E=Tl(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Ho(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,R=n.yOrigin||0,E!==rr&&(O=E[0],k=E[1],q=E[2],P=E[3],h=N=E[4],u=z=E[5],E.length===6?(f=Math.sqrt(O*O+k*k),g=Math.sqrt(P*P+q*q),_=O||k?as(k,O)*bi:0,M=q||P?as(q,P)*bi+_:0,M&&(g*=Math.abs(Math.cos(M*_s))),n.svg&&(h-=A-(A*O+R*q),u-=R-(A*k+R*P))):(ut=E[6],W=E[7],$=E[8],tt=E[9],at=E[10],J=E[11],h=E[12],u=E[13],d=E[14],U=as(ut,at),m=U*bi,U&&(x=Math.cos(-U),T=Math.sin(-U),X=N*x+$*T,Y=z*x+tt*T,K=ut*x+at*T,$=N*-T+$*x,tt=z*-T+tt*x,at=ut*-T+at*x,J=W*-T+J*x,N=X,z=Y,ut=K),U=as(-q,at),p=U*bi,U&&(x=Math.cos(-U),T=Math.sin(-U),X=O*x-$*T,Y=k*x-tt*T,K=q*x-at*T,J=P*T+J*x,O=X,k=Y,q=K),U=as(k,O),_=U*bi,U&&(x=Math.cos(U),T=Math.sin(U),X=O*x+k*T,Y=N*x+z*T,k=k*x-O*T,z=z*x-N*T,O=X,N=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=me(Math.sqrt(O*O+k*k+q*q)),g=me(Math.sqrt(z*z+ut*ut)),U=as(N,z),M=Math.abs(U)>2e-4?U*bi:0,y=J?1/(J<0?-J:J):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!md(en(t,le)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=me(f),n.scaleY=me(g),n.rotation=me(_)+o,n.rotationX=me(m)+o,n.rotationY=me(p)+o,n.skewX=M+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[qe]=la(c)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?Gx:ud?_d:kx,n.uncache=0,n},la=function(t){return(t=t.split(" "))[0]+" "+t[1]},uo=function(t,e,n){var i=Ue(e);return me(parseFloat(e)+parseFloat(pi(t,"x",n+"px",i)))+i},kx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_d(t,e)},Si="0deg",Fs="0px",Ei=") ",_d=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,y="",A=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==Si||h!==Si)){var R=parseFloat(h)*_s,E=Math.sin(R),U=Math.cos(R),x;R=parseFloat(u)*_s,x=Math.cos(R),a=uo(M,a,E*x*-v),o=uo(M,o,-Math.sin(R)*-v),l=uo(M,l,U*x*-v+v)}m!==Fs&&(y+="perspective("+m+Ei),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(A||a!==Fs||o!==Fs||l!==Fs)&&(y+=l!==Fs||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==Si&&(y+="rotate("+c+Ei),h!==Si&&(y+="rotateY("+h+Ei),u!==Si&&(y+="rotateX("+u+Ei),(d!==Si||f!==Si)&&(y+="skew("+d+", "+f+Ei),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ei),M.style[le]=y||"translate(0, 0)"},Gx=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(a),y=parseFloat(o),A,R,E,U,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=_s,c*=_s,A=Math.cos(l)*u,R=Math.sin(l)*u,E=Math.sin(l-c)*-d,U=Math.cos(l-c)*d,c&&(h*=_s,x=Math.tan(c-h),x=Math.sqrt(1+x*x),E*=x,U*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),A*=x,R*=x)),A=me(A),R=me(R),E=me(E),U=me(U)):(A=u,U=d,R=E=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=pi(f,"x",a,"px"),y=pi(f,"y",o,"px")),(g||_||m||p)&&(v=me(v+g-(g*A+_*E)+m),y=me(y+_-(g*R+_*U)+p)),(i||r)&&(x=f.getBBox(),v=me(v+i/100*x.width),y=me(y+r/100*x.height)),x="matrix("+A+","+R+","+E+","+U+","+v+","+y+")",f.setAttribute("transform",x),M&&(f.style[le]=x)},Hx=function(t,e,n,i,r){var a=360,o=Ae(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?bi:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Sh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Sh)%a-~~(c/a)*a)),t._pt=d=new Xe(t._pt,e,n,i,c,Tx),d.e=h,d.u="deg",t._props.push(n),d},Ch=function(t,e){for(var n in e)t[n]=e[n];return t},Vx=function(t,e,n){var i=Ch({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[le]=e,o=ar(n,1),fi(n,le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[le],a[le]=e,o=ar(n,1),a[le]=c);for(l in jn)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Ue(c),g=Ue(h),u=f!==g?pi(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new Xe(t._pt,o,l,u,d-u,zo),t._pt.u=g||0,t._props.push(l));Ch(o,i)};We("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});oa[t>1?"border"+s:s]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(g){return Vn(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,u)}});var gd={name:"css",register:Go,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,M,v,y,A,R,E,U,x;yl||Go(),this.styles=this.styles||hd(t),U=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!($e[_]&&Qu(_,e,n,i,t,r)))){if(f=typeof h,g=oa[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=nr(h)),g)g(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",hi.lastIndex=0,hi.test(c)||(m=Ue(c),p=Ue(h),p?m!==p&&(c=pi(t,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),U.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],Ae(c)&&~c.indexOf("random(")&&(c=nr(c)),Ue(c+"")||c==="auto"||(c+=sn.units[_]||Ue(Vn(t,_))||""),(c+"").charAt(1)==="="&&(c=Vn(t,_))):c=Vn(t,_),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in Ln&&(_==="autoAlpha"&&(d===1&&Vn(t,"visibility")==="hidden"&&u&&(d=0),U.push("visibility",0,o.visibility),ri(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Ln[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in jn,v){if(this.styles.save(_),x=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=en(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=en(t,"perspective"),T?t.style.perspective=T:fi(t,"perspective")}u=parseFloat(h)}if(y||(A=t._gsap,A.renderTransform&&!e.parseTransform||ar(t,e.parseTransform),R=e.smoothOrigin!==!1&&A.smooth,y=this._pt=new Xe(this._pt,o,le,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new Xe(this._pt,A,"scaleY",A.scaleY,(M?ps(A.scaleY,M+u):u)-A.scaleY||0,zo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(qe,0,o[qe]),h=Bx(h),A.svg?Ho(t,h,0,R,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&ri(this,A,"zOrigin",A.zOrigin,p),ri(this,o,_,la(c),la(h)));continue}else if(_==="svgOrigin"){Ho(t,h,1,R,0,this);continue}else if(_ in pd){Hx(this,A,_,d,M?ps(d,M+h):h);continue}else if(_==="smoothOrigin"){ri(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){Vx(this,h,t);continue}}else _ in o||(_=bs(_)||_);if(v||(u||u===0)&&(d||d===0)&&!Ex.test(h)&&_ in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ue(h)||(_ in sn.units?sn.units[_]:m),m!==p&&(d=pi(t,_,c,p)),this._pt=new Xe(this._pt,v?A:o,_,d,(M?ps(d,M+u):u)-d,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Ax:zo),this._pt.u=p||0,v&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=wx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=bx);else if(_ in o)Fx.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,r);else if(_!=="parseTransform"){ul(_,h);continue}v||(_ in o?U.push(_,0,o[_]):typeof t[_]=="function"?U.push(_,2,t[_]()):U.push(_,1,c||t[_])),a.push(_)}}E&&rd(this)},render:function(t,e){if(e.tween._time||!Sl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vn,aliases:Ln,getSetter:function(t,e,n){var i=Ln[e];return i&&i.indexOf(",")<0&&(e=i),e in jn&&e!==qe&&(t._gsap.x||Vn(t,"x"))?n&&yh===n?e==="scale"?Lx:Px:(yh=n||{})&&(e==="scale"?Dx:Ix):t.style&&!ll(t.style[e])?Rx:~e.indexOf("-")?Cx:xl(t,e)},core:{_removeProperty:fi,_getMatrix:Tl}};Ye.utils.checkPrefix=bs;Ye.core.getStyleSaver=hd;(function(s,t,e,n){var i=We(s+","+t+","+e,function(r){jn[r]=1});We(t,function(r){sn.units[r]="deg",pd[r]=1}),Ln[i[13]]=s+","+t,We(n,function(r){var a=r.split(":");Ln[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");We("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){sn.units[s]="px"});Ye.registerPlugin(gd);var Wn=Ye.registerPlugin(gd)||Ye;Wn.core.Tween;class Wx{constructor(){this.ctx=null,this.enabled=!0,this.sfxVolume=.9,this.musicVolume=.6,this.bgmOscillator=null,this.bgmGain=null,this.isBgmPlaying=!1,this.initAudioContext()}initAudioContext(){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}resumeContext(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolumes(t,e){this.sfxVolume=t,this.musicVolume=e,this.bgmGain&&this.bgmGain.gain.setValueAtTime(this.musicVolume*.15,this.ctx?this.ctx.currentTime:0)}playButtonClick(){if(!this.enabled||!this.ctx)return;this.resumeContext();const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(600,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.08),e.gain.setValueAtTime(this.sfxVolume*.4,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.08)}playDiceRoll(){if(!this.enabled||!this.ctx)return;this.resumeContext();const t=this.ctx.currentTime,e=.7,n=this.ctx.sampleRate*e,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1200,t),o.Q.setValueAtTime(3,t);const l=this.ctx.createGain();l.gain.setValueAtTime(this.sfxVolume*.5,t),l.gain.exponentialRampToValueAtTime(.01,t+e),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t),a.stop(t+e),setTimeout(()=>this.playDiceLand(),600)}playDiceLand(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(150,t),e.frequency.exponentialRampToValueAtTime(40,t+.12),n.gain.setValueAtTime(this.sfxVolume*.7,t),n.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.12)}playTokenStep(t=0){if(!this.enabled||!this.ctx)return;this.resumeContext();const e=this.ctx.currentTime,n=440+t*20,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(n,e),i.frequency.exponentialRampToValueAtTime(n*1.5,e+.06),r.gain.setValueAtTime(this.sfxVolume*.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.08),i.connect(r),r.connect(this.ctx.destination),i.start(e),i.stop(e+.08)}playCapture(){if(!this.enabled||!this.ctx)return;this.resumeContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(30,t+.25),n.gain.setValueAtTime(this.sfxVolume*.8,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.25)}playVictory(){if(!this.enabled||!this.ctx)return;this.resumeContext(),[523.25,659.25,783.99,1046.5].forEach((e,n)=>{setTimeout(()=>{if(!this.ctx)return;const i=this.ctx.currentTime,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(this.sfxVolume*.6,i),a.gain.exponentialRampToValueAtTime(.001,i+.3),r.connect(a),a.connect(this.ctx.destination),r.start(i),r.stop(i+.3)},n*120)})}playCoinReward(){if(!this.enabled||!this.ctx)return;this.resumeContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",n.type="sine",e.frequency.setValueAtTime(987.77,t),n.frequency.setValueAtTime(1318.51,t+.08),i.gain.setValueAtTime(this.sfxVolume*.5,t),i.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(i),n.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.1),n.start(t+.08),n.stop(t+.25)}startBGM(){if(this.isBgmPlaying||!this.ctx)return;this.resumeContext(),this.isBgmPlaying=!0;const t=this.ctx.currentTime;this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.setValueAtTime(this.musicVolume*.1,t),this.bgmGain.connect(this.ctx.destination),[130.81,164.81,196].forEach(n=>{const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(n,t),i.connect(this.bgmGain),i.start(t)})}stopBGM(){this.isBgmPlaying&&(this.isBgmPlaying=!1,this.bgmGain&&this.bgmGain.gain.exponentialRampToValueAtTime(1e-4,this.ctx?this.ctx.currentTime+.5:0))}}const ws=new Wx;class Xx{constructor(t){this.cameraManager=t}animatePath(t,e,n){if(!e||e.length===0){n&&n();return}let i=0;const r=()=>{if(i>=e.length){n&&n();return}const a=e[i];t.meshGroup.position.clone().distanceTo(a);const l=.22;ws.playTokenStep(i),Wn.to(t.meshGroup.position,{x:a.x,z:a.z,duration:l,ease:"power1.inOut"}),Wn.to(t.meshGroup.position,{y:a.y+.45,duration:l/2,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{Wn.to(t.meshGroup.scale,{x:1.15,y:.85,z:1.15,duration:.05,yoyo:!0,repeat:1,ease:"power1.inOut"}),i++,r()}})};r()}animateCapture(t,e,n){ws.playCapture(),Wn.to(t.meshGroup.position,{x:e.x,z:e.z,duration:.6,ease:"power2.inOut"}),Wn.to(t.meshGroup.position,{y:e.y+1.5,duration:.3,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{t.setPosition(e),n&&n()}})}}class qx{constructor(t,e){this.scene=t,this.cameraManager=e,this.pathAnimator=new Xx(e),this.tokensGroup=new pn,this.tokensGroup.name="AllTokens",this.tokens={},this.playerTokens={0:[],1:[],2:[],3:[]},this.createAllTokens(),this.scene.add(this.tokensGroup)}createAllTokens(){[0,1,2,3].forEach(t=>{for(let e=0;e<4;e++){const n=new Tv(t,e),i=ea[t][e];n.setPosition(i),this.tokens[n.id]=n,this.playerTokens[t].push(n),this.tokensGroup.add(n.meshGroup)}})}resetAllTokens(){[0,1,2,3].forEach(t=>{this.playerTokens[t].forEach((e,n)=>{e.trackIndex=-1,e.homeStepIndex=-1,e.isFinished=!1,e.setSelectable(!1);const i=ea[t][n];e.setPosition(i)})})}getToken(t,e){return this.tokens[`pawn_${t}_${e}`]}clearSelectableTokens(){Object.values(this.tokens).forEach(t=>t.setSelectable(!1))}setSelectableTokens(t,e){this.clearSelectableTokens(),e.forEach(n=>{const i=this.getToken(t,n);i&&i.setSelectable(!0)})}raycastToken(t){const e=[];Object.values(this.tokens).forEach(i=>{i.isSelectable&&e.push(...i.meshGroup.children)});const n=t.intersectObjects(e,!0);if(n.length>0){let i=n[0].object;for(;i.parent&&!i.name.startsWith("pawn_");)i=i.parent;if(i.name&&this.tokens[i.name])return this.tokens[i.name]}return null}updateStackedTokenPositions(){const t={};Object.values(this.tokens).forEach(e=>{e.trackIndex>=0&&!e.isFinished&&(t[e.trackIndex]||(t[e.trackIndex]=[]),t[e.trackIndex].push(e))}),Object.entries(t).forEach(([e,n])=>{if(n.length>1){const i=yu(parseInt(e)),r=.15;n.forEach((a,o)=>{const l=o/n.length*Math.PI*2;a.meshGroup.position.x=i.x+Math.cos(l)*r,a.meshGroup.position.z=i.z+Math.sin(l)*r})}})}update(t,e){Object.values(this.tokens).forEach(n=>n.updateIdle(e))}}class Yx{constructor(t){this.scene=t,this.diceGroup=new pn,this.diceGroup.name="Dice3DGroup",this.isRolling=!1,this.isClickable=!1,this.currentColorHex=15680580,this.buildDiceMesh(),this.scene.add(this.diceGroup),this.diceGroup.position.set(0,.6,0)}buildDiceMesh(){const t=new Be(.7,.7,.7,4,4,4);this.boxMat=new Ce({color:16777215,roughness:.15,metalness:.1,envMapIntensity:1.2}),this.diceMesh=new $t(t,this.boxMat),this.diceMesh.castShadow=!0,this.diceMesh.receiveShadow=!0,this.diceGroup.add(this.diceMesh),this.pipMaterial=new Ce({color:15680580,emissive:15680580,emissiveIntensity:.5,roughness:.2,metalness:.8}),this.addPips();const e=new ur(.55,.7,32);this.ringMat=new cr({color:15680580,side:dn,transparent:!0,opacity:0}),this.ringMesh=new $t(e,this.ringMat),this.ringMesh.rotation.x=-Math.PI/2,this.ringMesh.position.y=-.34,this.diceGroup.add(this.ringMesh)}addPips(){const t=new Cs(.055,12,12),e=(r,a,o)=>{const l=new $t(t,this.pipMaterial);l.position.set(r,a,o),this.diceMesh.add(l)},n=.18,i=.352;e(0,0,i),e(-n,n,-i),e(n,n,-i),e(-n,0,-i),e(n,0,-i),e(-n,-n,-i),e(n,-n,-i),e(i,n,-n),e(i,-n,n),e(-i,0,0),e(-i,n,n),e(-i,n,-n),e(-i,-n,n),e(-i,-n,-n),e(-n,i,-n),e(0,i,0),e(n,i,n),e(-n,-i,-n),e(n,-i,-n),e(-n,-i,n),e(n,-i,n)}setActivePlayerColor(t){this.currentColorHex=t,this.pipMaterial.color.setHex(t),this.pipMaterial.emissive.setHex(t),this.ringMat.color.setHex(t)}setClickable(t){this.isClickable=t,t?this.ringMat.opacity=.95:this.ringMat.opacity=0}update(t){this.isClickable&&!this.isRolling&&(this.diceGroup.position.y=.6+Math.sin(t*6)*.05,this.ringMesh.rotation.z=t*3)}}class jx{constructor(t){this.scene=t,this.particles=[],this.pool=[],this.particleGroup=new pn,this.particleGroup.name="ParticleSystemGroup",this.scene.add(this.particleGroup),this.particleGeo=new Cs(.04,6,6),this.sparkleMat=new Ce({color:16436245,emissive:16436245,emissiveIntensity:1,transparent:!0,opacity:.9}),this.captureMat=new Ce({color:15680580,emissive:15680580,emissiveIntensity:1.2,transparent:!0,opacity:.9}),this.preallocatePool(50)}preallocatePool(t){for(let e=0;e<t;e++){const n=new $t(this.particleGeo,this.sparkleMat);n.visible=!1,this.particleGroup.add(n),this.pool.push(n)}}getParticleMesh(t){let e=this.pool.pop();return e?e.material=t:(e=new $t(this.particleGeo,t),this.particleGroup.add(e)),e.visible=!0,e.scale.set(1,1,1),e}spawnSparkles(t,e=10){for(let n=0;n<e;n++){const i=this.getParticleMesh(this.sparkleMat);i.position.copy(t);const r=new D((Math.random()-.5)*.08,Math.random()*.1+.05,(Math.random()-.5)*.08);this.particles.push({mesh:i,velocity:r,life:1,decay:.03})}}spawnCaptureBurst(t,e=16){for(let n=0;n<e;n++){const i=this.getParticleMesh(this.captureMat);i.position.copy(t);const r=new D((Math.random()-.5)*.14,Math.random()*.18+.06,(Math.random()-.5)*.14);this.particles.push({mesh:i,velocity:r,life:1,decay:.04})}}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life-=n.decay,n.mesh.position.add(n.velocity),n.mesh.scale.multiplyScalar(.95),n.life<=0&&(n.mesh.visible=!1,this.pool.push(n.mesh),this.particles.splice(e,1))}}}class Kx{constructor(t){this.scene=t,this.fireworksGroup=new pn,this.fireworksGroup.name="FireworksGroup",this.scene.add(this.fireworksGroup),this.particles=[],this.isSpawning=!1,this.spawnTimer=null}startFireworks(){this.isSpawning=!0,this.spawnTimer=setInterval(()=>{if(this.isSpawning){const t=(Math.random()-.5)*8,e=Math.random()*4+4,n=(Math.random()-.5)*8;this.createBurst(new D(t,e,n))}},400)}stopFireworks(){this.isSpawning=!1,this.spawnTimer&&(clearInterval(this.spawnTimer),this.spawnTimer=null)}createBurst(t){const e=[15680580,2278750,15381256,3900150,11032055,15485081],n=e[Math.floor(Math.random()*e.length)],i=35,r=new Be(.06,.06,.06),a=new cr({color:n});for(let o=0;o<i;o++){const l=new $t(r,a);l.position.copy(t);const c=Math.random()*Math.PI*2,h=Math.random()*Math.PI,u=Math.random()*.12+.05,d=new D(Math.sin(h)*Math.cos(c)*u,Math.cos(h)*u+.02,Math.sin(h)*Math.sin(c)*u);this.fireworksGroup.add(l),this.particles.push({mesh:l,velocity:d,life:1,decay:.02})}}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life-=n.decay,n.velocity.y-=.002,n.mesh.position.add(n.velocity),n.life<=0&&(this.fireworksGroup.remove(n.mesh),this.particles.splice(e,1))}}}class hn{static load(){try{const t=localStorage.getItem(this.STORAGE_KEY);if(!t)return JSON.parse(JSON.stringify(this.defaultData));const e=JSON.parse(t);return{...this.defaultData,...e}}catch(t){return console.warn("Failed to load local storage data, using defaults:",t),JSON.parse(JSON.stringify(this.defaultData))}}static save(t){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t))}catch(e){console.error("Failed to save to local storage:",e)}}static updateCoins(t,e){return t.profile.coins=Math.max(0,t.profile.coins+e),this.save(t),t.profile.coins}static updateGems(t,e){return t.profile.gems=Math.max(0,t.profile.gems+e),this.save(t),t.profile.gems}static addXp(t,e){t.profile.xp+=e;const n=t.profile.level*200;t.profile.xp>=n&&(t.profile.level+=1,t.profile.xp-=n,t.profile.coins+=500),this.save(t)}}Ma(hn,"STORAGE_KEY","LUDO_PRO_3D_DATA_V1"),Ma(hn,"defaultData",{profile:{name:"Player 1",avatar:"👑",level:1,xp:120,coins:2500,gems:50,gamesPlayed:14,wins:8,captures:32},settings:{musicVolume:.7,sfxVolume:.9,haptics:!0,aiDifficulty:"Medium",cameraAutoRotate:!0,graphicsQuality:"High"},inventory:{equippedBoard:"classic_luxury",equippedPawn:"crystal_gem",equippedDice:"royal_gold",ownedBoards:["classic_luxury"],ownedPawns:["crystal_gem"],ownedDice:["royal_gold"]},dailyRewards:{lastClaimedDate:null,streak:0},luckySpin:{lastSpinTime:null,spinsAvailable:1},achievements:{first_win:{unlocked:!0,claimed:!0,progress:1,total:1},capturer_10:{unlocked:!0,claimed:!1,progress:10,total:10},dice_master_6:{unlocked:!1,claimed:!1,progress:4,total:10},games_played_20:{unlocked:!1,claimed:!1,progress:14,total:20},coin_collector:{unlocked:!1,claimed:!1,progress:2500,total:1e4}}});class Zx{constructor(t){this.uiManager=t,this.screens={},this.currentScreen=null,this.createScreenDOMs()}createScreenDOMs(){const t=document.getElementById("app"),e=document.createElement("div");e.id="screen-splash",e.className="screen-overlay screen-full splash-screen",e.innerHTML=`
      <div class="splash-content">
        <div class="logo-container">
          <div class="logo-icon">🎲</div>
          <h1 class="logo-title">LUDO PRO 3D</h1>
          <p class="logo-subtitle">ULTIMATE LUXURY EXPERIENCE</p>
        </div>
        <div class="tap-to-start">
          <button id="btn-start-game" class="btn-primary-glow btn-large">
            TAP TO PLAY
          </button>
        </div>
      </div>
    `,t.appendChild(e),this.screens.splash=e;const n=document.createElement("div");n.id="screen-home",n.className="screen-overlay screen-full home-screen hidden",n.innerHTML=`
      <!-- Top Profile & Wallet Bar -->
      <div class="home-top-bar">
        <div id="user-profile-widget" class="glass-card profile-card">
          <span id="home-user-avatar" class="avatar-icon">👑</span>
          <div class="profile-details">
            <span id="home-user-name" class="user-name">Player 1</span>
            <div class="level-progress-bar">
              <div id="home-level-fill" class="level-fill" style="width: 60%"></div>
            </div>
            <span id="home-user-level" class="user-level">Lvl 1</span>
          </div>
        </div>

        <div class="wallet-container">
          <div class="glass-card wallet-item">
            <span>🪙</span>
            <span id="home-coins-text">2,500</span>
          </div>
          <div class="glass-card wallet-item">
            <span>💎</span>
            <span id="home-gems-text">50</span>
          </div>
        </div>
      </div>

      <!-- Main Home Navigation Grid -->
      <div class="home-center-content">
        <div class="quick-play-section">
          <button id="btn-mode-select" class="btn-hero-glow">
            <span class="hero-icon">⚔️</span>
            <div class="hero-text">
              <span class="hero-title">PLAY NOW</span>
              <span class="hero-sub">VS AI & Pass & Play</span>
            </div>
          </button>
        </div>

        <div class="menu-grid">
          <button id="btn-lucky-spin" class="glass-btn-tile">
            <span class="tile-icon">🎡</span>
            <span>Lucky Spin</span>
          </button>
          <button id="btn-daily-rewards" class="glass-btn-tile">
            <span class="tile-icon">🎁</span>
            <span>Daily Reward</span>
          </button>
          <button id="btn-open-store" class="glass-btn-tile">
            <span class="tile-icon">🛒</span>
            <span>Store</span>
          </button>
          <button id="btn-leaderboard" class="glass-btn-tile">
            <span class="tile-icon">🏆</span>
            <span>Leaderboard</span>
          </button>
          <button id="btn-achievements" class="glass-btn-tile">
            <span class="tile-icon">📜</span>
            <span>Achievements</span>
          </button>
          <button id="btn-settings" class="glass-btn-tile">
            <span class="tile-icon">⚙️</span>
            <span>Settings</span>
          </button>
        </div>
      </div>
    `,t.appendChild(n),this.screens.home=n;const i=document.createElement("div");i.id="screen-mode-select",i.className="screen-overlay screen-full mode-screen hidden",i.innerHTML=`
      <div class="mode-header">
        <button id="btn-back-home" class="btn-icon-glass">⬅️</button>
        <h2>SELECT GAME MODE</h2>
        <div></div>
      </div>

      <div class="mode-cards-container">
        <!-- Vs AI Card -->
        <div class="glass-card mode-card">
          <div class="mode-card-header">
            <span>🤖</span>
            <h3>HUMAN VS AI</h3>
          </div>
          <p>Play against smart AI bots with custom difficulty</p>

          <div class="mode-options">
            <label>Players:</label>
            <div class="segmented-control" id="ai-player-count">
              <button class="seg-btn" data-val="2">2P</button>
              <button class="seg-btn" data-val="3">3P</button>
              <button class="seg-btn active" data-val="4">4P</button>
            </div>

            <label>Difficulty:</label>
            <div class="segmented-control" id="ai-difficulty-select">
              <button class="seg-btn" data-val="Easy">Easy</button>
              <button class="seg-btn active" data-val="Medium">Medium</button>
              <button class="seg-btn" data-val="Hard">Hard</button>
            </div>
          </div>

          <button id="btn-start-vs-ai" class="btn-primary-glow w-full">START AI MATCH</button>
        </div>

        <!-- Pass & Play Offline -->
        <div class="glass-card mode-card">
          <div class="mode-card-header">
            <span>👥</span>
            <h3>PASS & PLAY</h3>
          </div>
          <p>Play offline with friends on a single device</p>
          <div class="mode-options">
            <label>Players:</label>
            <div class="segmented-control" id="pass-player-count">
              <button class="seg-btn" data-val="2">2P</button>
              <button class="seg-btn" data-val="3">3P</button>
              <button class="seg-btn active" data-val="4">4P</button>
            </div>
          </div>
          <button id="btn-start-pass-play" class="btn-primary-glow w-full">START PASS & PLAY</button>
        </div>

        <!-- Online Multiplayer (Modular Architecture) -->
        <div class="glass-card mode-card">
          <div class="mode-card-header">
            <span>🌐</span>
            <h3>ONLINE MULTIPLAYER</h3>
          </div>
          <p>Create private rooms or match with online players</p>
          <div class="mode-btn-group">
            <button id="btn-create-room" class="btn-secondary-glass">Create Room</button>
            <button id="btn-join-room" class="btn-secondary-glass">Join Room</button>
          </div>
        </div>
      </div>
    `,t.appendChild(i),this.screens.mode_select=i;const r=document.createElement("div");r.id="screen-victory",r.className="screen-overlay screen-full victory-screen hidden",r.innerHTML=`
      <div class="victory-content glass-card">
        <h1 class="victory-title">MATCH FINISHED!</h1>
        <p class="victory-sub">Congratulations to the winners!</p>

        <!-- Podium Ranks -->
        <div id="podium-ranks-list" class="podium-list">
          <!-- Populated dynamically -->
        </div>

        <div class="victory-reward-badge">
          <span>🪙 Reward: +500 Coins</span>
        </div>

        <div class="victory-actions">
          <button id="btn-victory-rematch" class="btn-primary-glow">REMATCH</button>
          <button id="btn-victory-home" class="btn-secondary-glass">MAIN MENU</button>
        </div>
      </div>
    `,t.appendChild(r),this.screens.victory=r,this.bindEvents()}bindEvents(){document.getElementById("btn-start-game").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.showScreen("home")}),document.getElementById("btn-mode-select").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.showScreen("mode_select")}),document.getElementById("btn-back-home").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.showScreen("home")}),document.querySelectorAll(".segmented-control").forEach(t=>{t.querySelectorAll(".seg-btn").forEach(e=>{e.addEventListener("click",n=>{t.querySelectorAll(".seg-btn").forEach(i=>i.classList.remove("active")),n.target.classList.add("active")})})}),document.getElementById("btn-start-vs-ai").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick();const t=parseInt(document.querySelector("#ai-player-count .seg-btn.active").dataset.val),e=document.querySelector("#ai-difficulty-select .seg-btn.active").dataset.val;this.uiManager.gameController.startNewGame("vs_ai",t,e,this.uiManager.data.profile)}),document.getElementById("btn-start-pass-play").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick();const t=parseInt(document.querySelector("#pass-player-count .seg-btn.active").dataset.val);this.uiManager.gameController.startNewGame("pass_play",t,"Medium",this.uiManager.data.profile)}),document.getElementById("btn-victory-rematch").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.uiManager.gameController.startNewGame("vs_ai",4,"Medium",this.uiManager.data.profile)}),document.getElementById("btn-victory-home").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.showScreen("home")})}showScreen(t){Object.values(this.screens).forEach(e=>e.classList.add("hidden")),document.getElementById("gameplay-hud").classList.add("hidden"),t==="gameplay"?document.getElementById("gameplay-hud").classList.remove("hidden"):this.screens[t]&&this.screens[t].classList.remove("hidden"),this.currentScreen=t}populateVictoryScreen(t,e){const n=document.getElementById("podium-ranks-list");n.innerHTML="";const i=["🥇 1st Place","🥈 2nd Place","🥉 3rd Place","4th Place"];t.forEach((r,a)=>{const o=e[r],l=document.createElement("div");l.className="podium-row",l.innerHTML=`
        <span class="podium-medal">${i[a]||`${a+1}th`}</span>
        <span class="podium-avatar">${o.avatar}</span>
        <span class="podium-name">${o.name}</span>
      `,n.appendChild(l)}),this.showScreen("victory")}}class $x{constructor(t){this.uiManager=t,this.hudContainer=null,this.rollBtn=null,this.rollBadge=null,this.timerRing=null,this.playerBanner=null,this.createHUDDOM()}createHUDDOM(){this.hudContainer=document.createElement("div"),this.hudContainer.id="gameplay-hud",this.hudContainer.className="screen-overlay hud-screen hidden",this.hudContainer.innerHTML=`
      <!-- Top Left HUD: Active Player Banner & Timer -->
      <div class="hud-top-bar">
        <button id="btn-pause-game" class="btn-icon-glass" title="Pause">
          <span>⏸️</span>
        </button>

        <div id="player-turn-card" class="player-turn-glass">
          <div class="player-avatar-wrapper">
            <span id="hud-player-avatar">👑</span>
            <svg class="timer-svg" viewBox="0 0 36 36">
              <path class="timer-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path id="timer-progress-path" class="timer-progress" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <div class="player-info-meta">
            <span id="hud-player-name" class="hud-name">Player 1</span>
            <span id="hud-turn-status" class="hud-status">Your Turn</span>
          </div>
        </div>

        <!-- Emoji Quick Chat Button -->
        <button id="btn-chat-emoji" class="btn-icon-glass" title="Chat">
          <span>💬</span>
        </button>
      </div>

      <!-- Quick Chat Emojis Popup -->
      <div id="chat-popup" class="chat-popup-glass hidden">
        <button class="emoji-btn" data-emoji="👏">👏</button>
        <button class="emoji-btn" data-emoji="🔥">🔥</button>
        <button class="emoji-btn" data-emoji="😎">😎</button>
        <button class="emoji-btn" data-emoji="😭">😭</button>
        <button class="emoji-btn" data-emoji="🎯">🎯</button>
      </div>

      <!-- Center Floating Roll Result Badge -->
      <div id="dice-roll-badge" class="roll-result-badge hidden">6</div>

      <!-- Bottom HUD: 3D Roll Dice Trigger Button -->
      <div class="hud-bottom-bar">
        <button id="btn-roll-dice" class="btn-primary-glow btn-roll">
          <span class="dice-icon">🎲</span>
          <span>ROLL DICE</span>
        </button>
      </div>
    `,document.getElementById("app").appendChild(this.hudContainer),this.rollBtn=document.getElementById("btn-roll-dice"),this.rollBadge=document.getElementById("dice-roll-badge"),this.timerRing=document.getElementById("timer-progress-path"),this.playerBanner=document.getElementById("player-turn-card"),this.bindEvents()}bindEvents(){this.rollBtn.addEventListener("click",()=>{this.uiManager.emit("onRollClicked")}),document.getElementById("btn-pause-game").addEventListener("click",()=>{this.uiManager.modals.showPauseModal()});const t=document.getElementById("btn-chat-emoji"),e=document.getElementById("chat-popup");t.addEventListener("click",()=>{e.classList.toggle("hidden")}),document.querySelectorAll(".emoji-btn").forEach(n=>{n.addEventListener("click",i=>{const r=i.target.getAttribute("data-emoji");e.classList.add("hidden"),this.uiManager.showFloatingText(r,window.innerWidth/2,window.innerHeight/2-100)})})}updatePlayerTurn(t){document.getElementById("hud-player-avatar").innerText=t.avatar,document.getElementById("hud-player-name").innerText=t.name,document.getElementById("hud-turn-status").innerText=t.isAI?"Thinking...":"Your Turn",this.playerBanner.style.borderColor=t.color.css,this.rollBadge.classList.add("hidden")}updateTimer(t){const e=Math.max(0,t/15*100);this.timerRing.setAttribute("stroke-dasharray",`${e}, 100`)}setRollButtonEnabled(t){this.rollBtn.disabled=!t,t?this.rollBtn.classList.remove("disabled"):this.rollBtn.classList.add("disabled")}showRollResultBadge(t){this.rollBadge.innerText=t,this.rollBadge.classList.remove("hidden"),this.rollBadge.classList.add("pop-anim"),setTimeout(()=>{this.rollBadge.classList.remove("pop-anim")},400)}}const Ph={boards:[{id:"classic_luxury",name:"Classic Luxury",subtitle:"Mahogany Frame & Polish Marble",price:0,currency:"coins",icon:"🪵",previewColor:"#8b4513"},{id:"cyberpunk_glow",name:"Neon Cyberpunk",subtitle:"Obsidian & Holographic Neon Trails",price:2500,currency:"coins",icon:"⚡",previewColor:"#00f0ff"},{id:"royal_gold",name:"Royal Palace",subtitle:"Pure Gold Inlays & White Quartz",price:50,currency:"gems",icon:"👑",previewColor:"#ffd700"},{id:"emerald_forest",name:"Emerald Forest",subtitle:"Deep Jade & Brass Trim",price:4e3,currency:"coins",icon:"🌲",previewColor:"#00a86b"}],pawns:[{id:"crystal_gem",name:"Crystal Gem",subtitle:"Translucent Glass with Brass Rim",price:0,currency:"coins",icon:"💎",previewColor:"#60a5fa"},{id:"metallic_chrome",name:"Chrome Steel",subtitle:"Reflective Polished Alloy",price:1500,currency:"coins",icon:"🛡️",previewColor:"#94a3b8"},{id:"neon_light",name:"Neon Core",subtitle:"Pulsing Fiber-Optic Glass",price:3e3,currency:"coins",icon:"🔮",previewColor:"#a855f7"},{id:"gold_statue",name:"Imperial Gold",subtitle:"Hand-crafted 24k Gold Pawns",price:40,currency:"gems",icon:"⚜️",previewColor:"#fbbf24"}],dice:[{id:"royal_gold",name:"Gold Inlaid Dice",subtitle:"Rounded Ivory Cube & Golden Pips",price:0,currency:"coins",icon:"🎲",previewColor:"#f59e0b"},{id:"ruby_translucent",name:"Translucent Ruby",subtitle:"Glowing Crimson Crystal",price:1200,currency:"coins",icon:"♦️",previewColor:"#ef4444"},{id:"obsidian_dark",name:"Obsidian Black",subtitle:"Volcanic Glass with Metallic Dots",price:2500,currency:"coins",icon:"🖤",previewColor:"#1e293b"}]},Jx=[{id:"first_win",title:"First Victory",description:"Win your first Ludo match against bots or real players",rewardCoins:500,rewardGems:10,icon:"🏆"},{id:"capturer_10",title:"Master Capturer",description:"Capture 10 opponent tokens on track safe zones",rewardCoins:800,rewardGems:15,icon:"⚔️"},{id:"dice_master_6",title:"Lucky Sixes",description:"Roll a 6 ten times in gameplay",rewardCoins:600,rewardGems:10,icon:"🎯"},{id:"games_played_20",title:"Ludo Veteran",description:"Complete 20 full Ludo matches",rewardCoins:1200,rewardGems:25,icon:"🎖️"},{id:"coin_collector",title:"Tycoon",description:"Accumulate 10,000 total gold coins",rewardCoins:2e3,rewardGems:50,icon:"💰"}];class Qx{constructor(t){this.uiManager=t,this.modalContainer=null,this.createModalsDOM()}createModalsDOM(){this.modalContainer=document.createElement("div"),this.modalContainer.id="modals-overlay-container",this.modalContainer.className="modals-container hidden",this.modalContainer.innerHTML=`
      <div class="modal-backdrop"></div>
      <div id="active-modal-wrapper" class="glass-card modal-wrapper">
        <button id="btn-close-modal" class="btn-close-glass">✖</button>
        <div id="modal-dynamic-body" class="modal-body">
          <!-- Dynamic Content Rendered Here -->
        </div>
      </div>
    `,document.getElementById("app").appendChild(this.modalContainer),document.getElementById("btn-close-modal").addEventListener("click",()=>this.closeModal()),this.modalContainer.querySelector(".modal-backdrop").addEventListener("click",()=>this.closeModal())}openModal(t){document.getElementById("modal-dynamic-body").innerHTML=t,this.modalContainer.classList.remove("hidden"),this.uiManager.soundManager.playButtonClick()}closeModal(){this.modalContainer.classList.add("hidden"),this.uiManager.soundManager.playButtonClick()}showStoreModal(){const t=this.uiManager.data,e=`
      <h2 class="modal-title">LUXURY STORE</h2>
      <div class="store-tabs">
        <button class="store-tab-btn active" data-tab="boards">Boards</button>
        <button class="store-tab-btn" data-tab="pawns">Pawns</button>
        <button class="store-tab-btn" data-tab="dice">Dice</button>
      </div>

      <div id="store-grid-content" class="store-grid">
        ${this.renderStoreItems("boards",t)}
      </div>
    `;this.openModal(e),this.bindStoreEvents()}renderStoreItems(t,e){const n=Ph[t]||[],i=e.inventory[`owned${t.charAt(0).toUpperCase()+t.slice(1)}`]||[],r=e.inventory[`equipped${t.charAt(0).toUpperCase()+t.slice(1,-1)}`]||"";return n.map(a=>{const o=i.includes(a.id),l=r===a.id,c=a.currency==="gems"?"💎":"🪙";let h=l?"EQUIPPED":o?"EQUIP":`${c} ${a.price}`,u=l?"btn-disabled":o?"btn-secondary-glass":"btn-primary-glow";return`
        <div class="glass-card store-item-card">
          <div class="store-item-icon">${a.icon}</div>
          <div class="store-item-details">
            <span class="store-item-name">${a.name}</span>
            <span class="store-item-sub">${a.subtitle}</span>
          </div>
          <button class="store-buy-btn ${u}" data-cat="${t}" data-id="${a.id}" ${l?"disabled":""}>
            ${h}
          </button>
        </div>
      `}).join("")}bindStoreEvents(){const t=document.getElementById("modal-dynamic-body");t.querySelectorAll(".store-tab-btn").forEach(e=>{e.addEventListener("click",n=>{t.querySelectorAll(".store-tab-btn").forEach(r=>r.classList.remove("active")),n.target.classList.add("active");const i=n.target.dataset.tab;document.getElementById("store-grid-content").innerHTML=this.renderStoreItems(i,this.uiManager.data),this.bindStoreEvents()})}),t.querySelectorAll(".store-buy-btn").forEach(e=>{e.addEventListener("click",n=>{const i=n.target.dataset.cat,r=n.target.dataset.id,a=Ph[i].find(c=>c.id===r),o=`owned${i.charAt(0).toUpperCase()+i.slice(1)}`,l=`equipped${i.charAt(0).toUpperCase()+i.slice(1,-1)}`;this.uiManager.data.inventory[o].includes(r)?(this.uiManager.data.inventory[l]=r,hn.save(this.uiManager.data),this.uiManager.showToast(`Equipped ${a.name}!`,"success")):a.currency==="coins"&&this.uiManager.data.profile.coins>=a.price?(hn.updateCoins(this.uiManager.data,-a.price),this.uiManager.data.inventory[o].push(r),this.uiManager.data.inventory[l]=r,hn.save(this.uiManager.data),this.uiManager.showToast(`Unlocked ${a.name}!`,"success")):a.currency==="gems"&&this.uiManager.data.profile.gems>=a.price?(hn.updateGems(this.uiManager.data,-a.price),this.uiManager.data.inventory[o].push(r),this.uiManager.data.inventory[l]=r,hn.save(this.uiManager.data),this.uiManager.showToast(`Unlocked ${a.name}!`,"success")):this.uiManager.showToast("Insufficient Currency!","warning"),this.uiManager.updateWalletUI(),document.getElementById("store-grid-content").innerHTML=this.renderStoreItems(i,this.uiManager.data),this.bindStoreEvents()})})}showLuckySpinModal(){this.openModal(`
      <h2 class="modal-title">LUCKY SPIN WHEEL</h2>
      <div class="spin-wheel-wrapper">
        <canvas id="lucky-spin-canvas" width="280" height="280"></canvas>
        <div class="wheel-pointer">▼</div>
      </div>
      <button id="btn-trigger-spin" class="btn-primary-glow btn-large mt-4">
        SPIN NOW
      </button>
    `),this.initSpinWheelCanvas()}initSpinWheelCanvas(){const t=document.getElementById("lucky-spin-canvas");if(!t)return;const e=t.getContext("2d"),n=[100,250,500,1e3,50,2e3],i=["#ef4444","#22c55e","#eab308","#3b82f6","#a855f7","#ec4899"];let r=0;const a=o=>{const l=n.length,c=Math.PI*2/l;e.clearRect(0,0,280,280);for(let h=0;h<l;h++)e.beginPath(),e.fillStyle=i[h],e.moveTo(140,140),e.arc(140,140,130,o+h*c,o+(h+1)*c),e.fill(),e.stroke(),e.save(),e.translate(140,140),e.rotate(o+(h+.5)*c),e.fillStyle="#ffffff",e.font="bold 16px Inter, sans-serif",e.fillText(`🪙 ${n[h]}`,50,5),e.restore()};a(r),document.getElementById("btn-trigger-spin").addEventListener("click",()=>{const o=document.getElementById("btn-trigger-spin");o.disabled=!0;let l=.4,c=.985;const h=setInterval(()=>{if(r+=l,l*=c,a(r),l<.005){clearInterval(h);const u=n[Math.floor(Math.random()*n.length)];hn.updateCoins(this.uiManager.data,u),this.uiManager.updateWalletUI(),this.uiManager.showToast(`You won 🪙 ${u} Coins!`,"success"),o.disabled=!1}},16)})}showDailyRewardsModal(){const e=`
      <h2 class="modal-title">DAILY LOG-IN REWARDS</h2>
      <div class="daily-grid">
        ${[{day:1,reward:"🪙 200"},{day:2,reward:"🪙 400"},{day:3,reward:"💎 10"},{day:4,reward:"🪙 800"},{day:5,reward:"🪙 1200"},{day:6,reward:"💎 25"},{day:7,reward:"🪙 5000"}].map(n=>`
          <div class="glass-card daily-card ${n.day===1?"active":""}">
            <span class="day-num">Day ${n.day}</span>
            <span class="day-reward">${n.reward}</span>
          </div>
        `).join("")}
      </div>
      <button id="btn-claim-daily" class="btn-primary-glow btn-large mt-4">CLAIM TODAY'S REWARD</button>
    `;this.openModal(e),document.getElementById("btn-claim-daily").addEventListener("click",()=>{hn.updateCoins(this.uiManager.data,500),this.uiManager.updateWalletUI(),this.uiManager.showToast("Claimed 🪙 500 Daily Bonus!","success"),this.closeModal()})}showLeaderboardModal(){const e=`
      <h2 class="modal-title">GLOBAL LEADERBOARD</h2>
      <div class="leaderboard-list">
        ${[{rank:1,name:"LudoKing99",coins:"142,500",avatar:"👑"},{rank:2,name:"MasterRoller",coins:"98,200",avatar:"🔥"},{rank:3,name:"CyberPawn",coins:"76,400",avatar:"⚡"},{rank:4,name:"Player 1 (You)",coins:"2,500",avatar:"👑"}].map(n=>`
          <div class="glass-card rank-row ${n.rank===4?"highlight":""}">
            <span class="rank-num">#${n.rank}</span>
            <span class="rank-avatar">${n.avatar}</span>
            <span class="rank-name">${n.name}</span>
            <span class="rank-coins">🪙 ${n.coins}</span>
          </div>
        `).join("")}
      </div>
    `;this.openModal(e)}showAchievementsModal(){const t=`
      <h2 class="modal-title">ACHIEVEMENTS</h2>
      <div class="achievements-list">
        ${Jx.map(e=>`
          <div class="glass-card ach-card">
            <div class="ach-icon">${e.icon}</div>
            <div class="ach-info">
              <span class="ach-title">${e.title}</span>
              <span class="ach-sub">${e.description}</span>
            </div>
            <button class="btn-secondary-glass ach-claim-btn" data-id="${e.id}">
              🪙 ${e.rewardCoins}
            </button>
          </div>
        `).join("")}
      </div>
    `;this.openModal(t),document.querySelectorAll(".ach-claim-btn").forEach(e=>{e.addEventListener("click",()=>{hn.updateCoins(this.uiManager.data,500),this.uiManager.updateWalletUI(),this.uiManager.showToast("Claimed 🪙 500 Reward!","success"),e.disabled=!0,e.innerText="CLAIMED"})})}showSettingsModal(){const t=this.uiManager.data.settings,e=`
      <h2 class="modal-title">SETTINGS</h2>
      <div class="settings-form">
        <div class="setting-row">
          <label>Sound SFX</label>
          <input type="range" id="slider-sfx" min="0" max="1" step="0.1" value="${t.sfxVolume}">
        </div>
        <div class="setting-row">
          <label>Music BGM</label>
          <input type="range" id="slider-bgm" min="0" max="1" step="0.1" value="${t.musicVolume}">
        </div>
        <div class="setting-row">
          <label>Haptics & Vibration</label>
          <input type="checkbox" id="check-haptics" ${t.haptics?"checked":""}>
        </div>
      </div>
      <button id="btn-save-settings" class="btn-primary-glow w-full mt-4">SAVE SETTINGS</button>
    `;this.openModal(e),document.getElementById("btn-save-settings").addEventListener("click",()=>{t.sfxVolume=parseFloat(document.getElementById("slider-sfx").value),t.musicVolume=parseFloat(document.getElementById("slider-bgm").value),t.haptics=document.getElementById("check-haptics").checked,hn.save(this.uiManager.data),this.uiManager.soundManager.setVolumes(t.sfxVolume,t.musicVolume),this.uiManager.showToast("Settings Saved!","success"),this.closeModal()})}showPauseModal(){this.openModal(`
      <h2 class="modal-title">GAME PAUSED</h2>
      <div class="pause-actions">
        <button id="btn-resume-game" class="btn-primary-glow btn-large w-full">RESUME MATCH</button>
        <button id="btn-quit-match" class="btn-secondary-glass btn-large w-full mt-3">QUIT TO MAIN MENU</button>
      </div>
    `),document.getElementById("btn-resume-game").addEventListener("click",()=>this.closeModal()),document.getElementById("btn-quit-match").addEventListener("click",()=>{this.closeModal(),this.uiManager.screens.showScreen("home")})}}class tM{constructor(){this.data=hn.load(),this.soundManager=ws,this.gameController=null,this.listeners={},this.hud=new $x(this),this.screens=new Zx(this),this.modals=new Qx(this),this.toastContainer=null,this.createToastDOM(),this.updateWalletUI(),this.bindHomeEvents()}setGameController(t){this.gameController=t}createToastDOM(){this.toastContainer=document.createElement("div"),this.toastContainer.id="toast-container",this.toastContainer.className="toast-container",document.getElementById("app").appendChild(this.toastContainer)}updateWalletUI(){const t=document.getElementById("home-coins-text"),e=document.getElementById("home-gems-text"),n=document.getElementById("home-user-name"),i=document.getElementById("home-user-level"),r=document.getElementById("home-user-avatar");t&&(t.innerText=this.data.profile.coins.toLocaleString()),e&&(e.innerText=this.data.profile.gems.toLocaleString()),n&&(n.innerText=this.data.profile.name),i&&(i.innerText=`Lvl ${this.data.profile.level}`),r&&(r.innerText=this.data.profile.avatar)}bindHomeEvents(){const t=e=>document.getElementById(e);t("btn-open-store")&&(t("btn-open-store").onclick=()=>this.modals.showStoreModal()),t("btn-lucky-spin")&&(t("btn-lucky-spin").onclick=()=>this.modals.showLuckySpinModal()),t("btn-daily-rewards")&&(t("btn-daily-rewards").onclick=()=>this.modals.showDailyRewardsModal()),t("btn-leaderboard")&&(t("btn-leaderboard").onclick=()=>this.modals.showLeaderboardModal()),t("btn-achievements")&&(t("btn-achievements").onclick=()=>this.modals.showAchievementsModal()),t("btn-settings")&&(t("btn-settings").onclick=()=>this.modals.showSettingsModal())}showToast(t,e="info"){const n=document.createElement("div");n.className=`toast-item toast-${e}`,n.innerHTML=`<span>${t}</span>`,this.toastContainer.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),400)},2200)}showFloatingText(t,e,n){const i=document.createElement("div");i.className="floating-text-item",i.style.left=`${e}px`,i.style.top=`${n}px`,i.innerText=t,document.getElementById("app").appendChild(i),setTimeout(()=>i.remove(),1200)}showScreen(t){this.screens.showScreen(t)}showVictoryModal(t,e){this.screens.populateVictoryScreen(t,e)}on(t,e){this.listeners[t]=e}emit(t,e){this.listeners[t]&&this.listeners[t](e)}}class eM{constructor(){this.playerCount=4,this.activePlayerIdx=0,this.players=[],this.rankings=[]}setupPlayers(t="vs_ai",e=4,n="Medium",i=null){this.playerCount=e,this.rankings=[],this.activePlayerIdx=0,this.players=[];const r=["Red Commander","Green Bot","Yellow Bot","Blue Bot"],a=["👑","🤖","🦊","⚡"],o=e===2?[0,2]:e===3?[0,1,2]:[0,1,2,3];[0,1,2,3].forEach(l=>{const c=o.includes(l);let h=!0,u=r[l],d=a[l];l===0?(h=!1,i&&(u=i.name||"Player 1",d=i.avatar||"👑")):t==="pass_play"&&(h=!1,u=`Player ${l+1}`,d=["🔴","🟢","🟡","🔵"][l]),this.players.push({idx:l,color:Ws[l],name:u,avatar:d,isAI:h,isActiveSlot:c,aiDifficulty:n,finishedCount:0,rank:null})})}getActivePlayer(){return this.players[this.activePlayerIdx]}nextTurn(){const t=this.playerCount===2?[0,2]:this.playerCount===3?[0,1,2]:[0,1,2,3];let e=0;do this.activePlayerIdx=(this.activePlayerIdx+1)%4,e++;while((!t.includes(this.activePlayerIdx)||this.players[this.activePlayerIdx].rank!==null)&&e<10);return this.getActivePlayer()}registerPlayerFinished(t){const e=this.players[t];return e.rank===null&&(this.rankings.push(t),e.rank=this.rankings.length),e.rank}isGameOver(){return(this.playerCount===2?[0,2]:this.playerCount===3?[0,1,2]:[0,1,2,3]).filter(n=>this.players[n].rank===null).length<=1}}class jr{static calculateMovePath(t,e,n){const{getTrackWorldPosition:i,getHomeStretchWorldPosition:r,BASE_YARD_POSITIONS:a}=n,o=t.playerIdx,l=[];let c=t.trackIndex,h=t.homeStepIndex;if(c===-1&&h===-1){if(e===6){const _=Wr[o];return l.push(i(_)),{pathPoints:l,newTrackIndex:_,newHomeStepIndex:-1,isFinished:!1}}return null}if(h>=0){if(h+e>6)return null;for(let m=1;m<=e;m++)l.push(r(o,h+m));const _=h+e;return{pathPoints:l,newTrackIndex:-1,newHomeStepIndex:_,isFinished:_===6}}const u=Wr[o];let d=(c-u+52)%52,f=c,g=-1;for(let _=1;_<=e;_++)if(d++,d>io){const m=d-io-1;if(m>6)return null;f=-1,g=m,l.push(r(o,m))}else f=(c+_)%52,l.push(i(f));return{pathPoints:l,newTrackIndex:f,newHomeStepIndex:g,isFinished:g===6}}static checkForCapture(t,e,n){if(e<0||al.includes(e))return null;let i=null;return Object.values(n).forEach(r=>{r.playerIdx!==t.playerIdx&&r.trackIndex===e&&!r.isFinished&&(i=r)}),i}static getValidMoveTokens(t,e,n){const i=[];return e.forEach((r,a)=>{if(r.isFinished)return;if(r.trackIndex===-1&&r.homeStepIndex===-1){n===6&&i.push(a);return}if(r.homeStepIndex>=0){r.homeStepIndex+n<=6&&i.push(a);return}const o=Wr[t];(r.trackIndex-o+52)%52+n<=io+6&&i.push(a)}),i}}class nM{static selectBestMove(t,e,n,i,r,a="Medium"){if(!e||e.length===0)return null;if(e.length===1)return e[0];if(a==="Easy"){const c=Math.floor(Math.random()*e.length);return e[c]}let o=e[0],l=-1/0;return e.forEach(c=>{const h=n[c];let u=0;if(h.trackIndex===-1&&h.homeStepIndex===-1&&r===6&&(u+=100),h.trackIndex>=0){const d=Wr[t],f=(h.trackIndex-d+52)%52,g=f+r;h.homeStepIndex+r===6&&(u+=150),f<51&&g>=51&&(u+=80);const _=(h.trackIndex+r)%52;jr.checkForCapture(h,_,i)&&(u+=a==="Hard"?200:120),al.includes(_)&&(u+=50),a==="Hard"&&(u+=f*2)}u>l&&(l=u,o=c)}),o}}class iM{constructor(t){this.dice3D=t,this.faceRotations={1:new Rn(-Math.PI/2,0,0),6:new Rn(Math.PI/2,0,0),2:new Rn(0,0,Math.PI/2),5:new Rn(0,0,-Math.PI/2),3:new Rn(0,0,0),4:new Rn(Math.PI,0,0)}}roll(t=null,e=null){if(this.dice3D.isRolling)return;this.dice3D.isRolling=!0,this.dice3D.setClickable(!1);const n=t||Math.floor(Math.random()*6)+1;ws.playDiceRoll();const i=this.dice3D.diceGroup,r=this.dice3D.diceMesh;Wn.to(i.position,{y:2.2,duration:.35,ease:"power2.out",yoyo:!0,repeat:1});const a=(Math.floor(Math.random()*3)+2)*Math.PI*2,o=(Math.floor(Math.random()*3)+2)*Math.PI*2,l=(Math.floor(Math.random()*3)+2)*Math.PI*2,c=this.faceRotations[n];Wn.to(r.rotation,{x:a+c.x,y:o+c.y,z:l+c.z,duration:.7,ease:"cubic.out",onComplete:()=>{Wn.to(i.scale,{x:1.2,y:.8,z:1.2,duration:.08,yoyo:!0,repeat:1,ease:"power1.inOut",onComplete:()=>{this.dice3D.isRolling=!1,e&&e(n)}})}})}}const bn={IDLE:"IDLE",WAITING_FOR_ROLL:"WAITING_FOR_ROLL",ROLLING:"ROLLING",SELECTING_TOKEN:"SELECTING_TOKEN",MOVING_TOKEN:"MOVING_TOKEN",GAME_OVER:"GAME_OVER"};class sM{constructor(t,e,n,i,r,a,o){this.sceneManager=t,this.cameraManager=e,this.tokenManager=n,this.dice3D=i,this.uiManager=r,this.particleSystem=a,this.fireworks=o,this.dicePhysics=new iM(i),this.playerManager=new eM,this.currentState=bn.IDLE,this.lastRollValue=0,this.consecutiveSixes=0,this.validTokens=[],this.turnTimer=null,this.turnTimeRemaining=15,this.bindEvents()}bindEvents(){this.uiManager.on("onRollClicked",()=>this.handleRollDice()),this.uiManager.on("onTokenSelected",t=>this.handleTokenSelected(t))}startNewGame(t="vs_ai",e=4,n="Medium",i=null){this.playerManager.setupPlayers(t,e,n,i),this.tokenManager.resetAllTokens(),this.consecutiveSixes=0,this.uiManager.showScreen("gameplay"),this.beginTurn()}beginTurn(){const t=this.playerManager.getActivePlayer();this.currentState=bn.WAITING_FOR_ROLL,this.dice3D.setActivePlayerColor(t.color.hex),this.cameraManager.focusPlayerCorner(t.idx),this.uiManager.hud.updatePlayerTurn(t),this.startTurnTimer(),t.isAI?(this.dice3D.setClickable(!1),setTimeout(()=>this.handleRollDice(),900)):(this.dice3D.setClickable(!0),this.uiManager.hud.setRollButtonEnabled(!0))}startTurnTimer(){this.stopTurnTimer(),this.turnTimeRemaining=15,this.uiManager.hud.updateTimer(this.turnTimeRemaining),this.turnTimer=setInterval(()=>{this.turnTimeRemaining--,this.uiManager.hud.updateTimer(this.turnTimeRemaining),this.turnTimeRemaining<=0&&(this.stopTurnTimer(),this.handleTurnTimeout())},1e3)}stopTurnTimer(){this.turnTimer&&(clearInterval(this.turnTimer),this.turnTimer=null)}handleTurnTimeout(){const t=this.playerManager.getActivePlayer();if(this.currentState===bn.WAITING_FOR_ROLL)this.handleRollDice();else if(this.currentState===bn.SELECTING_TOKEN&&this.validTokens.length>0){const e=this.tokenManager.getToken(t.idx,this.validTokens[0]);this.handleTokenSelected(e)}}handleRollDice(){this.currentState===bn.WAITING_FOR_ROLL&&(this.currentState=bn.ROLLING,this.uiManager.hud.setRollButtonEnabled(!1),this.dicePhysics.roll(null,t=>{if(this.lastRollValue=t,this.uiManager.hud.showRollResultBadge(t),t===6){if(this.consecutiveSixes++,this.consecutiveSixes>=3){this.uiManager.showToast("3 Consecutive Sixes! Turn Forfeited","warning"),this.consecutiveSixes=0,setTimeout(()=>this.endTurn(),1200);return}}else this.consecutiveSixes=0;this.evaluateTurnMoves()}))}evaluateTurnMoves(){const t=this.playerManager.getActivePlayer(),e=this.tokenManager.playerTokens[t.idx];if(this.validTokens=jr.getValidMoveTokens(t.idx,e,this.lastRollValue),this.validTokens.length===0){this.uiManager.showToast(`No moves for ${t.name}`,"info"),setTimeout(()=>this.endTurn(),1200);return}if(this.currentState=bn.SELECTING_TOKEN,t.isAI){const n=nM.selectBestMove(t.idx,this.validTokens,e,this.tokenManager.tokens,this.lastRollValue,t.aiDifficulty),i=this.tokenManager.getToken(t.idx,n);setTimeout(()=>this.handleTokenSelected(i),700)}else if(this.tokenManager.setSelectableTokens(t.idx,this.validTokens),this.validTokens.length===1){const n=this.tokenManager.getToken(t.idx,this.validTokens[0]);setTimeout(()=>this.handleTokenSelected(n),400)}}handleTokenSelected(t){if(this.currentState!==bn.SELECTING_TOKEN||!t||!t.isSelectable)return;this.stopTurnTimer(),this.currentState=bn.MOVING_TOKEN,this.tokenManager.clearSelectableTokens();const e={getTrackWorldPosition:yu,getHomeStretchWorldPosition:yv,BASE_YARD_POSITIONS:ea},n=jr.calculateMovePath(t,this.lastRollValue,e);if(!n){this.endTurn();return}this.cameraManager.zoomInAction(t.meshGroup.position),this.tokenManager.pathAnimator.animatePath(t,n.pathPoints,()=>{t.trackIndex=n.newTrackIndex,t.homeStepIndex=n.newHomeStepIndex,t.isFinished=n.isFinished,this.tokenManager.updateStackedTokenPositions(),this.cameraManager.zoomOutReset(),this.processMoveConsequences(t,n)})}processMoveConsequences(t,e){const n=this.playerManager.getActivePlayer();let i=this.lastRollValue===6;if(e.isFinished&&(i=!0,n.finishedCount++,ws.playVictory(),this.particleSystem.spawnSparkles(t.meshGroup.position),this.uiManager.showToast(`${n.name}'s token reached Home!`,"success"),n.finishedCount===4&&(this.playerManager.registerPlayerFinished(n.idx),this.playerManager.isGameOver()))){this.handleGameOver();return}const r=jr.checkForCapture(t,e.newTrackIndex,this.tokenManager.tokens);if(r){i=!0;const a=ea[r.playerIdx][r.tokenIdx];r.trackIndex=-1,r.homeStepIndex=-1,this.particleSystem.spawnCaptureBurst(t.meshGroup.position),this.uiManager.showToast(`Captured ${this.playerManager.players[r.playerIdx].name}'s pawn!`,"capture"),this.tokenManager.pathAnimator.animateCapture(r,a,()=>{i?(this.uiManager.showToast("Extra Turn Granted!","success"),this.beginTurn()):this.endTurn()});return}i&&n.finishedCount<4?(this.uiManager.showToast("Extra Turn Granted!","success"),this.beginTurn()):this.endTurn()}endTurn(){this.stopTurnTimer(),this.tokenManager.clearSelectableTokens(),this.playerManager.nextTurn(),this.beginTurn()}handleGameOver(){this.stopTurnTimer(),this.currentState=bn.GAME_OVER,this.fireworks.startFireworks(),ws.playVictory(),setTimeout(()=>{this.uiManager.showVictoryModal(this.playerManager.rankings,this.playerManager.players)},1500)}}class rM{constructor(){this.clock=new dv,this.raycaster=new fv,this.mouse=new it,this.initEngine(),this.initScene(),this.initGame(),this.bindWindowEvents(),this.animate()}initEngine(){const t=document.getElementById("webgl-container");this.renderer=new pv(t),this.sceneManager=new mv,this.cameraManager=new vv(this.renderer.threeRenderer.domElement),this.lighting=new xv(this.sceneManager.scene)}initScene(){this.boardBuilder=new Sv(this.sceneManager.scene),this.safeZoneManager=new Ev(this.boardBuilder),this.tokenManager=new qx(this.sceneManager.scene,this.cameraManager),this.dice3D=new Yx(this.sceneManager.scene),this.particleSystem=new jx(this.sceneManager.scene),this.fireworks=new Kx(this.sceneManager.scene)}initGame(){this.uiManager=new tM,this.gameController=new sM(this.sceneManager,this.cameraManager,this.tokenManager,this.dice3D,this.uiManager,this.particleSystem,this.fireworks),this.uiManager.setGameController(this.gameController),this.uiManager.showScreen("splash")}bindWindowEvents(){window.addEventListener("resize",()=>{this.renderer.resize(this.cameraManager.camera)});const t=this.renderer.threeRenderer.domElement,e=(n,i)=>{if(this.mouse.x=n/window.innerWidth*2-1,this.mouse.y=-(i/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.cameraManager.camera),this.dice3D.isClickable&&this.raycaster.intersectObjects(this.dice3D.diceGroup.children,!0).length>0){this.gameController.handleRollDice();return}const r=this.tokenManager.raycastToken(this.raycaster);r&&this.gameController.handleTokenSelected(r)};t.addEventListener("click",n=>e(n.clientX,n.clientY)),t.addEventListener("touchstart",n=>{n.touches.length>0&&e(n.touches[0].clientX,n.touches[0].clientY)})}animate(){requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.cameraManager.update(),this.safeZoneManager.update(t),this.tokenManager.update(t,e),this.dice3D.update(e),this.particleSystem.update(t),this.fireworks.update(t),this.renderer.render(this.sceneManager.scene,this.cameraManager.camera)}}window.addEventListener("DOMContentLoaded",()=>{new rM});
