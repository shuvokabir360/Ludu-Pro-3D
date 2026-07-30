var _d=Object.defineProperty;var gd=(r,t,e)=>t in r?_d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var va=(r,t,e)=>gd(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="160",Hi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vd=0,bl=1,xd=2,Th=1,bh=2,kn=3,ui=0,Ge=1,yn=2,ai=0,dr=1,wl=2,Al=3,Rl=4,Md=5,wi=100,yd=101,Sd=102,Cl=103,Pl=104,Ed=200,Td=201,bd=202,wd=203,co=204,ho=205,Ad=206,Rd=207,Cd=208,Pd=209,Ld=210,Dd=211,Id=212,Ud=213,Nd=214,Od=0,Fd=1,Bd=2,Xs=3,zd=4,kd=5,Gd=6,Hd=7,wh=0,Vd=1,Wd=2,oi=0,Xd=1,Yd=2,qd=3,Ah=4,jd=5,Kd=6,Rh=300,gr=301,vr=302,uo=303,fo=304,aa=306,po=1e3,Sn=1001,mo=1002,Be=1003,Ll=1004,xa=1005,cn=1006,Zd=1007,Yr=1008,li=1009,$d=1010,Jd=1011,Go=1012,Ch=1013,ei=1014,ni=1015,qr=1016,Ph=1017,Lh=1018,Ci=1020,Qd=1021,En=1023,tf=1024,ef=1025,Pi=1026,xr=1027,nf=1028,Dh=1029,rf=1030,Ih=1031,Uh=1033,Ma=33776,ya=33777,Sa=33778,Ea=33779,Dl=35840,Il=35841,Ul=35842,Nl=35843,Nh=36196,Ol=37492,Fl=37496,Bl=37808,zl=37809,kl=37810,Gl=37811,Hl=37812,Vl=37813,Wl=37814,Xl=37815,Yl=37816,ql=37817,jl=37818,Kl=37819,Zl=37820,$l=37821,Ta=36492,Jl=36494,Ql=36495,sf=36283,tc=36284,ec=36285,nc=36286,Oh=3e3,Li=3001,af=3200,of=3201,Fh=0,lf=1,un="",Te="srgb",Yn="srgb-linear",Ho="display-p3",oa="display-p3-linear",Ys="linear",te="srgb",qs="rec709",js="p3",Wi=7680,ic=519,cf=512,hf=513,uf=514,Bh=515,df=516,ff=517,pf=518,mf=519,rc=35044,sc="300 es",_o=1035,Xn=2e3,Ks=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,go=180/Math.PI;function Ar(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[r&255]+Le[r>>8&255]+Le[r>>16&255]+Le[r>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function xe(r,t,e){return Math.max(t,Math.min(e,r))}function _f(r,t){return(r%t+t)%t}function ba(r,t,e){return(1-e)*r+e*t}function ac(r){return(r&r-1)===0&&r!==0}function vo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gf={DEG2RAD:Bs};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,s,a,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],y=i[7],w=i[2],A=i[5],E=i[8];return s[0]=a*_+o*x+l*w,s[3]=a*m+o*v+l*A,s[6]=a*p+o*y+l*E,s[1]=c*_+h*x+u*w,s[4]=c*m+h*v+u*A,s[7]=c*p+h*y+u*E,s[2]=d*_+f*x+g*w,s[5]=d*m+f*v+g*A,s[8]=d*p+f*y+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Gt;function zh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vf(){const r=Zs("canvas");return r.style.display="block",r}const oc={};function zr(r){r in oc||(oc[r]=!0,console.warn(r))}const lc=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cc=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[Yn]:{transfer:Ys,primaries:qs,toReference:r=>r,fromReference:r=>r},[Te]:{transfer:te,primaries:qs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[oa]:{transfer:Ys,primaries:js,toReference:r=>r.applyMatrix3(cc),fromReference:r=>r.applyMatrix3(lc)},[Ho]:{transfer:te,primaries:js,toReference:r=>r.convertSRGBToLinear().applyMatrix3(cc),fromReference:r=>r.applyMatrix3(lc).convertLinearToSRGB()}},xf=new Set([Yn,oa]),Kt={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!xf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=us[t].toReference,i=us[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return us[r].primaries},getTransfer:function(r){return r===un?Ys:us[r].transfer}};function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Aa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xi;class kh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Zs("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=fr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fr(e[n]/255)*255):e[n]=fr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mf=0;class Gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ar(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ra(i[a].image)):s.push(Ra(i[a]))}else s=Ra(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ra(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yf=0;class tn extends ki{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Sn,i=Sn,s=cn,a=Yr,o=En,l=li,c=tn.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Ar(),this.name="",this.source=new Gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Li?Te:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Li:Oh}set encoding(t){zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?Te:un}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Rh;tn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(f+1)/2,w=(p+1)/2,A=(h+d)/4,E=(u+_)/4,I=(g+m)/4;return v>y&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=E/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=I/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=I/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sf extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Li?Te:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Sf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hh extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ef extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),A=Math.atan2(w,p*x);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const y=o*x;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new D,hc=new Fi;class ss{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),fs.subVectors(this.max,Dr),Yi.subVectors(t.a,Dr),qi.subVectors(t.b,Dr),ji.subVectors(t.c,Dr),Kn.subVectors(qi,Yi),Zn.subVectors(ji,qi),vi.subVectors(Yi,ji);let e=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-vi.z,vi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,vi.z,0,-vi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-vi.y,vi.x,0];return!Pa(e,Yi,qi,ji,fs)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,Yi,qi,ji,fs))?!1:(ps.crossVectors(Kn,Zn),e=[ps.x,ps.y,ps.z],Pa(e,Yi,qi,ji,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,ds=new ss,Yi=new D,qi=new D,ji=new D,Kn=new D,Zn=new D,vi=new D,Dr=new D,fs=new D,ps=new D,xi=new D;function Pa(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){xi.fromArray(r,s);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tf=new ss,Ir=new D,La=new D;class Vo{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);const e=Ir.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ir,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(La)),this.expandByPoint(Ir.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new D,Da=new D,ms=new D,$n=new D,Ia=new D,_s=new D,Ua=new D;class Wo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Da.copy(t).add(e).multiplyScalar(.5),ms.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Da);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ms),o=$n.dot(this.direction),l=-$n.dot(ms),c=$n.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Da).addScaledVector(ms,d),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,s){Ia.subVectors(e,t),_s.subVectors(n,t),Ua.crossVectors(Ia,_s);let a=this.direction.dot(Ua),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const l=o*this.direction.dot(_s.crossVectors($n,_s));if(l<0)return null;const c=o*this.direction.dot(Ia.cross($n));if(c<0||l+c>a)return null;const h=-o*$n.dot(Ua);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ki.setFromMatrixColumn(t,0).length(),s=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,wf)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Jn.crossVectors(n,je),Jn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Jn.crossVectors(n,je)),Jn.normalize(),gs.crossVectors(je,Jn),i[0]=Jn.x,i[4]=gs.x,i[8]=je.x,i[1]=Jn.y,i[5]=gs.y,i[9]=je.y,i[2]=Jn.z,i[6]=gs.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],y=n[11],w=n[15],A=i[0],E=i[4],I=i[8],M=i[12],T=i[1],O=i[5],F=i[9],q=i[13],P=i[2],N=i[6],B=i[10],X=i[14],Y=i[3],j=i[7],K=i[11],nt=i[15];return s[0]=a*A+o*T+l*P+c*Y,s[4]=a*E+o*O+l*N+c*j,s[8]=a*I+o*F+l*B+c*K,s[12]=a*M+o*q+l*X+c*nt,s[1]=h*A+u*T+d*P+f*Y,s[5]=h*E+u*O+d*N+f*j,s[9]=h*I+u*F+d*B+f*K,s[13]=h*M+u*q+d*X+f*nt,s[2]=g*A+_*T+m*P+p*Y,s[6]=g*E+_*O+m*N+p*j,s[10]=g*I+_*F+m*B+p*K,s[14]=g*M+_*q+m*X+p*nt,s[3]=x*A+v*T+y*P+w*Y,s[7]=x*E+v*O+y*N+w*j,s[11]=x*I+v*F+y*B+w*K,s[15]=x*M+v*q+y*X+w*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,w=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=e*x+n*v+i*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=x*E,t[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*E,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*E,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*E,t[4]=v*E,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*E,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*p-e*l*p)*E,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*E,t[8]=y*E,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*p-e*u*p)*E,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*E,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=w*E,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*E,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,x=l*c,v=l*h,y=l*u,w=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+y)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+v)*E,i[9]=(m-x)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const c=1/s,h=1/a,u=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Xn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Xn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ks)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Xn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===Xn)g=(a+s)*u,_=-2*u;else if(o===Ks)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new D,vn=new ve,bf=new D(0,0,0),wf=new D(1,1,1),Jn=new D,gs=new D,je=new D,uc=new ve,dc=new Fi;class An{constructor(t=0,e=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dc.setFromEuler(this),this.setFromQuaternion(dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Af=0;const fc=new D,Zi=new Fi,Fn=new ve,vs=new D,Ur=new D,Rf=new D,Cf=new Fi,pc=new D(1,0,0),mc=new D(0,1,0),_c=new D(0,0,1),Pf={type:"added"},Lf={type:"removed"};class Ne extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new D,e=new An,n=new Fi,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Gt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(pc,t)}rotateY(t){return this.rotateOnAxis(mc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return fc.copy(t).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pc,t)}translateY(t){return this.translateOnAxis(mc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ur,vs,this.up):Fn.lookAt(vs,Ur,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ne.DEFAULT_UP=new D(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new D,Bn=new D,Na=new D,zn=new D,$i=new D,Ji=new D,gc=new D,Oa=new D,Fa=new D,Ba=new D;let xs=!1;class Mn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){xn.subVectors(i,e),Bn.subVectors(n,e),Na.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Bn),l=xn.dot(Na),c=Bn.dot(Bn),h=Bn.dot(Na),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(t,e,n,i,s,a,o,l){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),Bn.subVectors(t,e),xn.cross(Bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;$i.subVectors(i,n),Ji.subVectors(s,n),Oa.subVectors(t,n);const l=$i.dot(Oa),c=Ji.dot(Oa);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,i);const h=$i.dot(Fa),u=Ji.dot(Fa);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector($i,a);Ba.subVectors(t,s);const f=$i.dot(Ba),g=Ji.dot(Ba);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ji,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return gc.subVectors(s,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(gc,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector($i,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function za(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=_f(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=za(a,s,t+1/3),this.g=za(a,s,t),this.b=za(a,s,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Kt.fromWorkingColorSpace(De.copy(this),t),Math.round(xe(De.r*255,0,255))*65536+Math.round(xe(De.g*255,0,255))*256+Math.round(xe(De.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,s=De.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Te){Kt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Ms);const n=ba(Qn.h,Ms.h,e),i=ba(Qn.s,Ms.s,e),s=ba(Qn.l,Ms.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ht;Ht.NAMES=Vh;let Df=0;class as extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=dr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=ho,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Rr extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new D,ys=new at;class Ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}}class Wh extends Ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xh extends Ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let If=0;const an=new ve,ka=new Ne,Qi=new D,Ke=new ss,Nr=new ss,Ee=new D;class _n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?Xh:Wh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ke.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ke.min,Nr.min),Ke.expandByPoint(Ee),Ee.addVectors(Ke.max,Nr.max),Ke.expandByPoint(Ee)):(Ke.expandByPoint(Nr.min),Ke.expandByPoint(Nr.max))}Ke.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),Ee.add(Qi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new D,h[T]=new D;const u=new D,d=new D,f=new D,g=new at,_=new at,m=new at,p=new D,x=new D;function v(T,O,F){u.fromArray(i,T*3),d.fromArray(i,O*3),f.fromArray(i,F*3),g.fromArray(a,T*2),_.fromArray(a,O*2),m.fromArray(a,F*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(q),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(q),c[T].add(p),c[O].add(p),c[F].add(p),h[T].add(x),h[O].add(x),h[F].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,O=y.length;T<O;++T){const F=y[T],q=F.start,P=F.count;for(let N=q,B=q+P;N<B;N+=3)v(n[N+0],n[N+1],n[N+2])}const w=new D,A=new D,E=new D,I=new D;function M(T){E.fromArray(s,T*3),I.copy(E);const O=c[T];w.copy(O),w.sub(E.multiplyScalar(E.dot(O))).normalize(),A.crossVectors(I,O);const q=A.dot(h[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=q}for(let T=0,O=y.length;T<O;++T){const F=y[T],q=F.start,P=F.count;for(let N=q,B=q+P;N<B;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ln(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new ve,Mi=new Wo,Ss=new Vo,xc=new D,tr=new D,er=new D,nr=new D,Ga=new D,Es=new D,Ts=new at,bs=new at,ws=new at,Mc=new D,yc=new D,Sc=new D,As=new D,Rs=new D;class Jt extends Ne{constructor(t=new _n,e=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ga.fromBufferAttribute(u,t),a?Es.addScaledVector(Ga,h):Es.addScaledVector(Ga.sub(e),h))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),Mi.copy(t.ray).recast(t.near),!(Ss.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ss,xc)===null||Mi.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(vc.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,w=v;y<w;y+=3){const A=o.getX(y),E=o.getX(y+1),I=o.getX(y+2);i=Cs(this,p,t,n,c,h,u,A,E,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=Cs(this,a,t,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,w=v;y<w;y+=3){const A=y,E=y+1,I=y+2;i=Cs(this,p,t,n,c,h,u,A,E,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,y=m+2;i=Cs(this,a,t,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Uf(r,t,e,n,i,s,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ui,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:r}}function Cs(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,tr),r.getVertexPosition(l,er),r.getVertexPosition(c,nr);const h=Uf(r,t,e,n,tr,er,nr,As);if(h){i&&(Ts.fromBufferAttribute(i,o),bs.fromBufferAttribute(i,l),ws.fromBufferAttribute(i,c),h.uv=Mn.getInterpolation(As,tr,er,nr,Ts,bs,ws,new at)),s&&(Ts.fromBufferAttribute(s,o),bs.fromBufferAttribute(s,l),ws.fromBufferAttribute(s,c),h.uv1=Mn.getInterpolation(As,tr,er,nr,Ts,bs,ws,new at),h.uv2=h.uv1),a&&(Mc.fromBufferAttribute(a,o),yc.fromBufferAttribute(a,l),Sc.fromBufferAttribute(a,c),h.normal=Mn.getInterpolation(As,tr,er,nr,Mc,yc,Sc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};Mn.getNormal(tr,er,nr,u.normal),h.face=u}return h}class dn extends _n{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(_,m,p,x,v,y,w,A,E,I,M){const T=y/E,O=w/I,F=y/2,q=w/2,P=A/2,N=E+1,B=I+1;let X=0,Y=0;const j=new D;for(let K=0;K<B;K++){const nt=K*O-q;for(let it=0;it<N;it++){const W=it*T-F;j[_]=W*x,j[m]=nt*v,j[p]=P,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=A>0?1:-1,h.push(j.x,j.y,j.z),u.push(it/E),u.push(1-K/I),X+=1}}for(let K=0;K<I;K++)for(let nt=0;nt<E;nt++){const it=d+nt+N*K,W=d+nt+N*(K+1),Z=d+(nt+1)+N*(K+1),lt=d+(nt+1)+N*K;l.push(it,W,lt),l.push(W,Z,lt),Y+=6}o.addGroup(f,Y,M),f+=Y,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(r){const t={};for(let e=0;e<r.length;e++){const n=Mr(r[e]);for(const i in n)t[i]=n[i]}return t}function Nf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Yh(r){return r.getRenderTarget()===null?r.outputColorSpace:Kt.workingColorSpace}const Of={clone:Mr,merge:Fe};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qh extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends qh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ir=-90,rr=1;class zf extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(ir,rr,t,e);i.layers=this.layers,this.add(i);const s=new hn(ir,rr,t,e);s.layers=this.layers,this.add(s);const a=new hn(ir,rr,t,e);a.layers=this.layers,this.add(a);const o=new hn(ir,rr,t,e);o.layers=this.layers,this.add(o);const l=new hn(ir,rr,t,e);l.layers=this.layers,this.add(l);const c=new hn(ir,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jh extends tn{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kf extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?Te:un),this.texture=new jh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new dn(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:ai});s.uniforms.tEquirect.value=e;const a=new Jt(i,s),o=e.minFilter;return e.minFilter===Yr&&(e.minFilter=cn),new zf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Ha=new D,Gf=new D,Hf=new Gt;class ti{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ha.subVectors(n,e).cross(Gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hf.getNormalMatrix(t),i=this.coplanarPoint(Ha).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Vo,Ps=new D;class Yo{constructor(t=new ti,e=new ti,n=new ti,i=new ti,s=new ti,a=new ti){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-f,y-p).normalize(),n[1].setComponents(l+s,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+x).normalize(),n[3].setComponents(l-a,d-h,m-g,y-x).normalize(),n[4].setComponents(l-o,d-u,m-_,y-v).normalize(),e===Xn)n[5].setComponents(l+o,d+u,m+_,y+v).normalize();else if(e===Ks)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ps.x=i.normal.x>0?t.max.x:t.min.x,Ps.y=i.normal.y>0?t.max.y:t.min.y,Ps.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Vf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),f.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class qo extends _n{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let v=0;v<c;v++){const y=v*u-s;g.push(y,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const v=x+c*p,y=x+c*(p+1),w=x+1+c*(p+1),A=x+1+c*p;f.push(v,y,A),f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`
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
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,r_=`uniform vec3 diffuse;
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
}`,s_=`#define LAMBERT
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
}`,a_=`#define LAMBERT
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
}`,o_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,h_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,__=`#define TOON
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
}`,g_=`uniform float size;
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
}`,v_=`uniform vec3 diffuse;
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
}`,x_=`#include <common>
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
}`,M_=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,S_=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:Yf,alphamap_pars_fragment:qf,alphatest_fragment:jf,alphatest_pars_fragment:Kf,aomap_fragment:Zf,aomap_pars_fragment:$f,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:rp,clipping_planes_fragment:sp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:_p,displacementmap_vertex:gp,emissivemap_fragment:vp,emissivemap_pars_fragment:xp,colorspace_fragment:Mp,colorspace_pars_fragment:yp,envmap_fragment:Sp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Tp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Fp,envmap_vertex:wp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Lp,lightmap_fragment:Dp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Np,lights_pars_begin:Op,lights_toon_fragment:Bp,lights_toon_pars_fragment:zp,lights_phong_fragment:kp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:Yp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Zp,map_fragment:$p,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:nm,morphcolor_vertex:im,morphnormal_vertex:rm,morphtarget_pars_vertex:sm,morphtarget_vertex:am,normal_fragment_begin:om,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:_m,opaque_fragment:gm,packing:vm,premultiplied_alpha_fragment:xm,project_vertex:Mm,dithering_fragment:ym,dithering_pars_fragment:Sm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:wm,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Lm,skinnormal_vertex:Dm,specularmap_fragment:Im,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Om,transmission_fragment:Fm,transmission_pars_fragment:Bm,uv_pars_fragment:zm,uv_pars_vertex:km,uv_vertex:Gm,worldpos_vertex:Hm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:Ym,cube_vert:qm,cube_frag:jm,depth_vert:Km,depth_frag:Zm,distanceRGBA_vert:$m,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:r_,meshlambert_vert:s_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:__,points_vert:g_,points_frag:v_,shadow_vert:x_,shadow_frag:M_,sprite_vert:y_,sprite_frag:S_},ot={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Rn={basic:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Fe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Fe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Fe([ot.points,ot.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Fe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Fe([ot.common,ot.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Fe([ot.sprite,ot.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Fe([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Fe([ot.lights,ot.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Rn.physical={uniforms:Fe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ls={r:0,b:0,g:0};function E_(r,t,e,n,i,s,a){const o=new Ht(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===aa)?(h===void 0&&(h=new Jt(new dn(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Mr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(v.colorSpace)!==te,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jt(new qo(2,2),new Bi({name:"BackgroundMaterial",uniforms:Mr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ls,Yh(r)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function T_(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function u(P,N,B,X,Y){let j=!1;if(a){const K=_(X,B,N);c!==K&&(c=K,f(c.object)),j=p(P,X,B,Y),j&&x(P,X,B,Y)}else{const K=N.wireframe===!0;(c.geometry!==X.id||c.program!==B.id||c.wireframe!==K)&&(c.geometry=X.id,c.program=B.id,c.wireframe=K,j=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,I(P,N,B,X),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,N,B){const X=B.wireframe===!0;let Y=o[P.id];Y===void 0&&(Y={},o[P.id]=Y);let j=Y[N.id];j===void 0&&(j={},Y[N.id]=j);let K=j[X];return K===void 0&&(K=m(d()),j[X]=K),K}function m(P){const N=[],B=[],X=[];for(let Y=0;Y<i;Y++)N[Y]=0,B[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,N,B,X){const Y=c.attributes,j=N.attributes;let K=0;const nt=B.getAttributes();for(const it in nt)if(nt[it].location>=0){const Z=Y[it];let lt=j[it];if(lt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),Z===void 0||Z.attribute!==lt||lt&&Z.data!==lt.data)return!0;K++}return c.attributesNum!==K||c.index!==X}function x(P,N,B,X){const Y={},j=N.attributes;let K=0;const nt=B.getAttributes();for(const it in nt)if(nt[it].location>=0){let Z=j[it];Z===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const lt={};lt.attribute=Z,Z&&Z.data&&(lt.data=Z.data),Y[it]=lt,K++}c.attributes=Y,c.attributesNum=K,c.index=X}function v(){const P=c.newAttributes;for(let N=0,B=P.length;N<B;N++)P[N]=0}function y(P){w(P,0)}function w(P,N){const B=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;B[P]=1,X[P]===0&&(r.enableVertexAttribArray(P),X[P]=1),Y[P]!==N&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),Y[P]=N)}function A(){const P=c.newAttributes,N=c.enabledAttributes;for(let B=0,X=N.length;B<X;B++)N[B]!==P[B]&&(r.disableVertexAttribArray(B),N[B]=0)}function E(P,N,B,X,Y,j,K){K===!0?r.vertexAttribIPointer(P,N,B,Y,j):r.vertexAttribPointer(P,N,B,X,Y,j)}function I(P,N,B,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=X.attributes,j=B.getAttributes(),K=N.defaultAttributeValues;for(const nt in j){const it=j[nt];if(it.location>=0){let W=Y[nt];if(W===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const Z=W.normalized,lt=W.itemSize,xt=e.get(W);if(xt===void 0)continue;const gt=xt.buffer,Lt=xt.type,Dt=xt.bytesPerElement,bt=n.isWebGL2===!0&&(Lt===r.INT||Lt===r.UNSIGNED_INT||W.gpuType===Ch);if(W.isInterleavedBufferAttribute){const Vt=W.data,k=Vt.stride,Ae=W.offset;if(Vt.isInstancedInterleavedBuffer){for(let St=0;St<it.locationSize;St++)w(it.location+St,Vt.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let St=0;St<it.locationSize;St++)y(it.location+St);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let St=0;St<it.locationSize;St++)E(it.location+St,lt/it.locationSize,Lt,Z,k*Dt,(Ae+lt/it.locationSize*St)*Dt,bt)}else{if(W.isInstancedBufferAttribute){for(let Vt=0;Vt<it.locationSize;Vt++)w(it.location+Vt,W.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Vt=0;Vt<it.locationSize;Vt++)y(it.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Vt=0;Vt<it.locationSize;Vt++)E(it.location+Vt,lt/it.locationSize,Lt,Z,lt*Dt,lt/it.locationSize*Vt*Dt,bt)}}else if(K!==void 0){const Z=K[nt];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(it.location,Z);break;case 3:r.vertexAttrib3fv(it.location,Z);break;case 4:r.vertexAttrib4fv(it.location,Z);break;default:r.vertexAttrib1fv(it.location,Z)}}}}A()}function M(){F();for(const P in o){const N=o[P];for(const B in N){const X=N[B];for(const Y in X)g(X[Y].object),delete X[Y];delete N[B]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const N=o[P.id];for(const B in N){const X=N[B];for(const Y in X)g(X[Y].object),delete X[Y];delete N[B]}delete o[P.id]}function O(P){for(const N in o){const B=o[N];if(B[P.id]===void 0)continue;const X=B[P.id];for(const Y in X)g(X[Y].object),delete X[Y];delete B[P.id]}}function F(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function b_(r,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function w_(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=a||t.has("OES_texture_float"),w=v&&y,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:A}}function A_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new ti,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,v=x*4;let y=p.clippingState||null;l.value=y,y=h(g,d,v,f);for(let w=0;w!==v;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function R_(r){let t=new WeakMap;function e(a,o){return o===uo?a.mapping=gr:o===fo&&(a.mapping=vr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===uo||o===fo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kf(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Zh extends qh{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const or=4,Ec=[.125,.215,.35,.446,.526,.582],Ai=20,Va=new Zh,Tc=new Ht;let Wa=null,Xa=0,Ya=0;const Ti=(1+Math.sqrt(5))/2,sr=1/Ti,bc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ti,sr),new D(0,Ti,-sr),new D(sr,0,Ti),new D(-sr,0,Ti),new D(Ti,sr,0),new D(-Ti,sr,0)];class xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa,Xa,Ya),t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gr||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:qr,format:En,colorSpace:Yn,depthBuffer:!1},i=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C_(s)),this._blurMaterial=P_(s,t,e)}return i}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,i){const o=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Tc),h.toneMapping=oi,h.autoClear=!1;const f=new Rr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Jt(new dn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Tc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Ds(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gr||t.mapping===vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=bc[(i-1)%bc.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let x=0;for(let E=0;E<Ai;++E){const I=E/_,M=Math.exp(-I*I/2);p.push(M),E===0?x+=M:E<m&&(x+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],w=3*y*(i>v-or?i-v+or:0),A=4*(this._cubeSize-y);Ds(e,w,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Va)}}function C_(r){const t=[],e=[],n=[];let i=r;const s=r-or+1+Ec.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-or?l=Ec[a-r+or-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,I=A>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];x.set(M,_*g*A),v.set(d,m*g*A);const T=[A,A,A,A,A,A];y.set(T,p*g*A)}const w=new _n;w.setAttribute("position",new Ln(x,_)),w.setAttribute("uv",new Ln(v,m)),w.setAttribute("faceIndex",new Ln(y,p)),t.push(w),i>or&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(r,t,e){const n=new Oi(r,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function P_(r,t,e){const n=new Float32Array(Ai),i=new D(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ac(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Rc(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}function L_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===uo||l===fo,h=l===gr||l===vr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new xo(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new xo(r));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function D_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I_(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,y=x.length;v<y;v+=3){const w=x[v+0],A=x[v+1],E=x[v+2];d.push(w,A,A,E,E,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const w=v+0,A=v+1,E=v+2;d.push(w,A,A,E,E,w)}}else return;const m=new(zh(d)?Xh:Wh)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function U_(r,t,e,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){r.drawElements(s,g,o,f*l),e.update(g,s,1)}function u(f,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,f*l,_),e.update(g,s,_)}function d(f,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];e.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function N_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function O_(r,t){return r[0]-t[0]}function F_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function B_(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new be,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let N=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var f=N;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let T=h.attributes.position.count*M,O=1;T>t.maxTextureSize&&(O=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const F=new Float32Array(T*O*4*_),q=new Hh(F,T,O,_);q.type=ni,q.needsUpdate=!0;const P=M*4;for(let B=0;B<_;B++){const X=A[B],Y=E[B],j=I[B],K=T*O*4*B;for(let nt=0;nt<X.count;nt++){const it=nt*P;v===!0&&(a.fromBufferAttribute(X,nt),F[K+it+0]=a.x,F[K+it+1]=a.y,F[K+it+2]=a.z,F[K+it+3]=0),y===!0&&(a.fromBufferAttribute(Y,nt),F[K+it+4]=a.x,F[K+it+5]=a.y,F[K+it+6]=a.z,F[K+it+7]=0),w===!0&&(a.fromBufferAttribute(j,nt),F[K+it+8]=a.x,F[K+it+9]=a.y,F[K+it+10]=a.z,F[K+it+11]=j.itemSize===4?a.w:1)}}m={count:_,texture:q,size:new at(T,O)},s.set(h,m),h.addEventListener("dispose",N)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const w=_[y];w[0]=y,w[1]=d[y]}_.sort(F_);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(O_);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const w=o[y],A=w[0],E=w[1];A!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+y)!==m[A]&&h.setAttribute("morphTarget"+y,m[A]),p&&h.getAttribute("morphNormal"+y)!==p[A]&&h.setAttribute("morphNormal"+y,p[A]),i[y]=E,x+=E):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function z_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class $h extends tn{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Pi,h!==Pi&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=ei),n===void 0&&h===xr&&(n=Ci),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jh=new tn,Qh=new $h(1,1);Qh.compareFunction=Bh;const tu=new Hh,eu=new Ef,nu=new jh,Cc=[],Pc=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Ic=new Float32Array(4);function Cr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Cc[i];if(s===void 0&&(s=new Float32Array(i),Cc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ye(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function la(r,t){let e=Pc[t];e===void 0&&(e=new Int32Array(t),Pc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function k_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function G_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2fv(this.addr,t),ye(e,t)}}function H_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;r.uniform3fv(this.addr,t),ye(e,t)}}function V_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4fv(this.addr,t),ye(e,t)}}function W_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;Ic.set(n),r.uniformMatrix2fv(this.addr,!1,Ic),ye(e,n)}}function X_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;Dc.set(n),r.uniformMatrix3fv(this.addr,!1,Dc),ye(e,n)}}function Y_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;Lc.set(n),r.uniformMatrix4fv(this.addr,!1,Lc),ye(e,n)}}function q_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function j_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2iv(this.addr,t),ye(e,t)}}function K_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3iv(this.addr,t),ye(e,t)}}function Z_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4iv(this.addr,t),ye(e,t)}}function $_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function J_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2uiv(this.addr,t),ye(e,t)}}function Q_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3uiv(this.addr,t),ye(e,t)}}function tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4uiv(this.addr,t),ye(e,t)}}function eg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Qh:Jh;e.setTexture2D(t||s,i)}function ng(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||eu,i)}function ig(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||nu,i)}function rg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||tu,i)}function sg(r){switch(r){case 5126:return k_;case 35664:return G_;case 35665:return H_;case 35666:return V_;case 35674:return W_;case 35675:return X_;case 35676:return Y_;case 5124:case 35670:return q_;case 35667:case 35671:return j_;case 35668:case 35672:return K_;case 35669:case 35673:return Z_;case 5125:return $_;case 36294:return J_;case 36295:return Q_;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return rg}}function ag(r,t){r.uniform1fv(this.addr,t)}function og(r,t){const e=Cr(t,this.size,2);r.uniform2fv(this.addr,e)}function lg(r,t){const e=Cr(t,this.size,3);r.uniform3fv(this.addr,e)}function cg(r,t){const e=Cr(t,this.size,4);r.uniform4fv(this.addr,e)}function hg(r,t){const e=Cr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ug(r,t){const e=Cr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function dg(r,t){const e=Cr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function fg(r,t){r.uniform1iv(this.addr,t)}function pg(r,t){r.uniform2iv(this.addr,t)}function mg(r,t){r.uniform3iv(this.addr,t)}function _g(r,t){r.uniform4iv(this.addr,t)}function gg(r,t){r.uniform1uiv(this.addr,t)}function vg(r,t){r.uniform2uiv(this.addr,t)}function xg(r,t){r.uniform3uiv(this.addr,t)}function Mg(r,t){r.uniform4uiv(this.addr,t)}function yg(r,t,e){const n=this.cache,i=t.length,s=la(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Jh,s[a])}function Sg(r,t,e){const n=this.cache,i=t.length,s=la(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||eu,s[a])}function Eg(r,t,e){const n=this.cache,i=t.length,s=la(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||nu,s[a])}function Tg(r,t,e){const n=this.cache,i=t.length,s=la(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||tu,s[a])}function bg(r){switch(r){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return _g;case 5125:return gg;case 36294:return vg;case 36295:return xg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}class wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}}class Ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bg(e.type)}}class Rg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Uc(r,t){r.seq.push(t),r.map[t.id]=t}function Cg(r,t,e){const n=r.name,i=n.length;for(qa.lastIndex=0;;){const s=qa.exec(n),a=qa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Uc(e,c===void 0?new wg(o,r,t):new Ag(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Rg(o),Uc(e,u)),e=u}}}class zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Cg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Nc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Pg=37297;let Lg=0;function Dg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ig(r){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(r);let n;switch(t===e?n="":t===js&&e===qs?n="LinearDisplayP3ToLinearSRGB":t===qs&&e===js&&(n="LinearSRGBToLinearDisplayP3"),r){case Yn:case oa:return[n,"LinearTransferOETF"];case Te:case Ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Oc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Dg(r.getShaderSource(t),a)}else return i}function Ug(r,t){const e=Ig(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ng(r,t){let e;switch(t){case Xd:e="Linear";break;case Yd:e="Reinhard";break;case qd:e="OptimizedCineon";break;case Ah:e="ACESFilmic";break;case Kd:e="AgX";break;case jd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Og(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function Fg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lr).join(`
`)}function Bg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function lr(r){return r!==""}function Fc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(r){return r.replace(kg,Hg)}const Gg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hg(r,t){let e=Ft[t];if(e===void 0){const n=Gg.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mo(e)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(r){return r.replace(Vg,Wg)}function Wg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gr:case vr:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vr:t="ENVMAP_MODE_REFRACTION";break}return t}function jg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wh:t="ENVMAP_BLENDING_MULTIPLY";break;case Vd:t="ENVMAP_BLENDING_MIX";break;case Wd:t="ENVMAP_BLENDING_ADD";break}return t}function Kg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zg(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Xg(e),c=Yg(e),h=qg(e),u=jg(e),d=Kg(e),f=e.isWebGL2?"":Og(e),g=Fg(e),_=Bg(s),m=i.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lr).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lr).join(`
`),x.length>0&&(x+=`
`)):(p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),x=[f,kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==oi?Ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=Mo(a),a=Fc(a,e),a=Bc(a,e),o=Mo(o),o=Fc(o,e),o=Bc(o,e),a=zc(a),o=zc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+p+a,w=v+x+o,A=Nc(i,i.VERTEX_SHADER,y),E=Nc(i,i.FRAGMENT_SHADER,w);i.attachShader(m,A),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(F){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(E).trim();let B=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,E);else{const Y=Oc(i,A,"vertex"),j=Oc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Y+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||N==="")&&(X=!1);X&&(F.diagnostics={runnable:B,programLog:q,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:x}})}i.deleteShader(A),i.deleteShader(E),M=new zs(i,m),T=zg(i,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,Pg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=E,this}let $g=0;class Jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qg(t),e.set(t,n)),n}}class Qg{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}}function t0(r,t,e,n,i,s,a){const o=new Xo,l=new Jg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,T,O,F,q){const P=F.fog,N=q.geometry,B=M.isMeshStandardMaterial?F.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),Y=X&&X.mapping===aa?X.image.height:null,j=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,nt=K!==void 0?K.length:0;let it=0;N.morphAttributes.position!==void 0&&(it=1),N.morphAttributes.normal!==void 0&&(it=2),N.morphAttributes.color!==void 0&&(it=3);let W,Z,lt,xt;if(j){const de=Rn[j];W=de.vertexShader,Z=de.fragmentShader}else W=M.vertexShader,Z=M.fragmentShader,l.update(M),lt=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);const gt=r.getRenderTarget(),Lt=q.isInstancedMesh===!0,Dt=q.isBatchedMesh===!0,bt=!!M.map,Vt=!!M.matcap,k=!!X,Ae=!!M.aoMap,St=!!M.lightMap,Rt=!!M.bumpMap,mt=!!M.normalMap,Qt=!!M.displacementMap,Ut=!!M.emissiveMap,R=!!M.metalnessMap,S=!!M.roughnessMap,z=M.anisotropy>0,tt=M.clearcoat>0,J=M.iridescence>0,et=M.sheen>0,_t=M.transmission>0,ht=z&&!!M.anisotropyMap,pt=tt&&!!M.clearcoatMap,Tt=tt&&!!M.clearcoatNormalMap,Nt=tt&&!!M.clearcoatRoughnessMap,$=J&&!!M.iridescenceMap,jt=J&&!!M.iridescenceThicknessMap,Bt=et&&!!M.sheenColorMap,Ct=et&&!!M.sheenRoughnessMap,yt=!!M.specularMap,ut=!!M.specularColorMap,C=!!M.specularIntensityMap,rt=_t&&!!M.transmissionMap,vt=_t&&!!M.thicknessMap,ft=!!M.gradientMap,Q=!!M.alphaMap,L=M.alphaTest>0,st=!!M.alphaHash,ct=!!M.extensions,wt=!!N.attributes.uv1,Et=!!N.attributes.uv2,Wt=!!N.attributes.uv3;let Xt=oi;return M.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Xt=r.toneMapping),{isWebGL2:h,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:Z,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Dt,instancing:Lt,instancingColor:Lt&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Yn,map:bt,matcap:Vt,envMap:k,envMapMode:k&&X.mapping,envMapCubeUVHeight:Y,aoMap:Ae,lightMap:St,bumpMap:Rt,normalMap:mt,displacementMap:d&&Qt,emissiveMap:Ut,normalMapObjectSpace:mt&&M.normalMapType===lf,normalMapTangentSpace:mt&&M.normalMapType===Fh,metalnessMap:R,roughnessMap:S,anisotropy:z,anisotropyMap:ht,clearcoat:tt,clearcoatMap:pt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Nt,iridescence:J,iridescenceMap:$,iridescenceThicknessMap:jt,sheen:et,sheenColorMap:Bt,sheenRoughnessMap:Ct,specularMap:yt,specularColorMap:ut,specularIntensityMap:C,transmission:_t,transmissionMap:rt,thicknessMap:vt,gradientMap:ft,opaque:M.transparent===!1&&M.blending===dr,alphaMap:Q,alphaTest:L,alphaHash:st,combine:M.combine,mapUv:bt&&_(M.map.channel),aoMapUv:Ae&&_(M.aoMap.channel),lightMapUv:St&&_(M.lightMap.channel),bumpMapUv:Rt&&_(M.bumpMap.channel),normalMapUv:mt&&_(M.normalMap.channel),displacementMapUv:Qt&&_(M.displacementMap.channel),emissiveMapUv:Ut&&_(M.emissiveMap.channel),metalnessMapUv:R&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:ht&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:yt&&_(M.specularMap.channel),specularColorMapUv:ut&&_(M.specularColorMap.channel),specularIntensityMapUv:C&&_(M.specularIntensityMap.channel),transmissionMapUv:rt&&_(M.transmissionMap.channel),thicknessMapUv:vt&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(mt||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:wt,vertexUv2s:Et,vertexUv3s:Wt,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(bt||Q),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:it,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yn,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ct&&M.extensions.derivatives===!0,extensionFragDepth:ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)T.push(O),T.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(x(T,M),v(T,M),T.push(r.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const T=g[M.type];let O;if(T){const F=Rn[T];O=Of.clone(F.uniforms)}else O=M.uniforms;return O}function w(M,T){let O;for(let F=0,q=c.length;F<q;F++){const P=c[F];if(P.cacheKey===T){O=P,++O.usedTimes;break}}return O===void 0&&(O=new Zg(r,T,M,s),c.push(O)),O}function A(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:I}}function e0(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function n0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Gc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Hc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||n0),n.length>1&&n.sort(d||Gc),i.length>1&&i.sort(d||Gc)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function i0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Hc,r.set(n,[a])):i>=s.length?(a=new Hc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function r0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function s0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let a0=0;function o0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function l0(r,t){const e=new r0,n=s0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,a=new ve,o=new ve;function l(h,u){let d=0,f=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,m=0,p=0,x=0,v=0,y=0,w=0,A=0,E=0,I=0,M=0;h.sort(o0);const T=u===!0?Math.PI:1;for(let F=0,q=h.length;F<q;F++){const P=h[F],N=P.color,B=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*B*T,f+=N.g*B*T,g+=N.b*B*T;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],B);M++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const K=P.shadow,nt=n.get(P);nt.shadowBias=K.bias,nt.shadowNormalBias=K.normalBias,nt.shadowRadius=K.radius,nt.shadowMapSize=K.mapSize,i.directionalShadow[_]=nt,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=P.shadow.matrix,y++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(N).multiplyScalar(B*T),j.distance=X,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[p]=j;const K=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,K.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[p]=K.matrix,P.castShadow){const nt=n.get(P);nt.shadowBias=K.bias,nt.shadowNormalBias=K.normalBias,nt.shadowRadius=K.radius,nt.shadowMapSize=K.mapSize,i.spotShadow[p]=nt,i.spotShadowMap[p]=Y,A++}p++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(N).multiplyScalar(B),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=j,x++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*T),j.distance=P.distance,j.decay=P.decay,P.castShadow){const K=P.shadow,nt=n.get(P);nt.shadowBias=K.bias,nt.shadowNormalBias=K.normalBias,nt.shadowRadius=K.radius,nt.shadowMapSize=K.mapSize,nt.shadowCameraNear=K.camera.near,nt.shadowCameraFar=K.camera.far,i.pointShadow[m]=nt,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=P.shadow.matrix,w++}i.point[m]=j,m++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(B*T),j.groundColor.copy(P.groundColor).multiplyScalar(B*T),i.hemi[v]=j,v++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==w||O.numSpotShadows!==A||O.numSpotMaps!==E||O.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=M,O.directionalLength=_,O.pointLength=m,O.spotLength=p,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=w,O.numSpotShadows=A,O.numSpotMaps=E,O.numLightProbes=M,i.version=a0++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const y=h[x];if(y.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Vc(r,t){const e=new l0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function c0(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Vc(r,t),e.set(s,[l])):a>=o.length?(l=new Vc(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class h0 extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class u0 extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
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
}`;function p0(r,t,e){let n=new Yo;const i=new at,s=new at,a=new be,o=new h0({depthPacking:of}),l=new u0,c={},h=e.maxTextureSize,u={[ui]:Ge,[Ge]:ui,[yn]:yn},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let p=this.type;this.render=function(A,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),T=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),F=r.state;F.setBlending(ai),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=p!==kn&&this.type===kn,P=p===kn&&this.type!==kn;for(let N=0,B=A.length;N<B;N++){const X=A[N],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const j=Y.getFrameExtents();if(i.multiply(j),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,Y.mapSize.y=s.y)),Y.map===null||q===!0||P===!0){const nt=this.type!==kn?{minFilter:Be,magFilter:Be}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Oi(i.x,i.y,nt),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const K=Y.getViewportCount();for(let nt=0;nt<K;nt++){const it=Y.getViewport(nt);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),F.viewport(a),Y.updateMatrices(X,nt),n=Y.getFrustum(),y(E,I,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===kn&&x(Y,I),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,T,O)};function x(A,E){const I=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Oi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,I,f,_,null)}function v(A,E,I,M){let T=null;const O=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)T=O;else if(T=I.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=T.uuid,q=E.uuid;let P=c[F];P===void 0&&(P={},c[F]=P);let N=P[q];N===void 0&&(N=T.clone(),P[q]=N,E.addEventListener("dispose",w)),T=N}if(T.visible=E.visible,T.wireframe=E.wireframe,M===kn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=r.properties.get(T);F.light=I}return T}function y(A,E,I,M,T){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const q=t.update(A),P=A.material;if(Array.isArray(P)){const N=q.groups;for(let B=0,X=N.length;B<X;B++){const Y=N[B],j=P[Y.materialIndex];if(j&&j.visible){const K=v(A,j,M,T);A.onBeforeShadow(r,A,E,I,q,K,Y),r.renderBufferDirect(I,null,q,K,A,Y),A.onAfterShadow(r,A,E,I,q,K,Y)}}}else if(P.visible){const N=v(A,P,M,T);A.onBeforeShadow(r,A,E,I,q,N,null),r.renderBufferDirect(I,null,q,N,A,null),A.onAfterShadow(r,A,E,I,q,N,null)}}const F=A.children;for(let q=0,P=F.length;q<P;q++)y(F[q],E,I,M,T)}function w(A){A.target.removeEventListener("dispose",w);for(const I in c){const M=c[I],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function m0(r,t,e){const n=e.isWebGL2;function i(){let L=!1;const st=new be;let ct=null;const wt=new be(0,0,0,0);return{setMask:function(Et){ct!==Et&&!L&&(r.colorMask(Et,Et,Et,Et),ct=Et)},setLocked:function(Et){L=Et},setClear:function(Et,Wt,Xt,le,de){de===!0&&(Et*=le,Wt*=le,Xt*=le),st.set(Et,Wt,Xt,le),wt.equals(st)===!1&&(r.clearColor(Et,Wt,Xt,le),wt.copy(st))},reset:function(){L=!1,ct=null,wt.set(-1,0,0,0)}}}function s(){let L=!1,st=null,ct=null,wt=null;return{setTest:function(Et){Et?Dt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(Et){st!==Et&&!L&&(r.depthMask(Et),st=Et)},setFunc:function(Et){if(ct!==Et){switch(Et){case Od:r.depthFunc(r.NEVER);break;case Fd:r.depthFunc(r.ALWAYS);break;case Bd:r.depthFunc(r.LESS);break;case Xs:r.depthFunc(r.LEQUAL);break;case zd:r.depthFunc(r.EQUAL);break;case kd:r.depthFunc(r.GEQUAL);break;case Gd:r.depthFunc(r.GREATER);break;case Hd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=Et}},setLocked:function(Et){L=Et},setClear:function(Et){wt!==Et&&(r.clearDepth(Et),wt=Et)},reset:function(){L=!1,st=null,ct=null,wt=null}}}function a(){let L=!1,st=null,ct=null,wt=null,Et=null,Wt=null,Xt=null,le=null,de=null;return{setTest:function(qt){L||(qt?Dt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(qt){st!==qt&&!L&&(r.stencilMask(qt),st=qt)},setFunc:function(qt,me,Tn){(ct!==qt||wt!==me||Et!==Tn)&&(r.stencilFunc(qt,me,Tn),ct=qt,wt=me,Et=Tn)},setOp:function(qt,me,Tn){(Wt!==qt||Xt!==me||le!==Tn)&&(r.stencilOp(qt,me,Tn),Wt=qt,Xt=me,le=Tn)},setLocked:function(qt){L=qt},setClear:function(qt){de!==qt&&(r.clearStencil(qt),de=qt)},reset:function(){L=!1,st=null,ct=null,wt=null,Et=null,Wt=null,Xt=null,le=null,de=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,y=null,w=null,A=null,E=null,I=null,M=new Ht(0,0,0),T=0,O=!1,F=null,q=null,P=null,N=null,B=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=j>=2);let nt=null,it={};const W=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),lt=new be().fromArray(W),xt=new be().fromArray(Z);function gt(L,st,ct,wt){const Et=new Uint8Array(4),Wt=r.createTexture();r.bindTexture(L,Wt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<ct;Xt++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(st,0,r.RGBA,1,1,wt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(st+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return Wt}const Lt={};Lt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Lt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Lt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Dt(r.DEPTH_TEST),l.setFunc(Xs),Ut(!1),R(bl),Dt(r.CULL_FACE),mt(ai);function Dt(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function bt(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Vt(L,st){return f[L]!==st?(r.bindFramebuffer(L,st),f[L]=st,n&&(L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=st),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=st)),!0):!1}function k(L,st){let ct=_,wt=!1;if(L)if(ct=g.get(st),ct===void 0&&(ct=[],g.set(st,ct)),L.isWebGLMultipleRenderTargets){const Et=L.texture;if(ct.length!==Et.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let Wt=0,Xt=Et.length;Wt<Xt;Wt++)ct[Wt]=r.COLOR_ATTACHMENT0+Wt;ct.length=Et.length,wt=!0}}else ct[0]!==r.COLOR_ATTACHMENT0&&(ct[0]=r.COLOR_ATTACHMENT0,wt=!0);else ct[0]!==r.BACK&&(ct[0]=r.BACK,wt=!0);wt&&(e.isWebGL2?r.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function Ae(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const St={[wi]:r.FUNC_ADD,[yd]:r.FUNC_SUBTRACT,[Sd]:r.FUNC_REVERSE_SUBTRACT};if(n)St[Cl]=r.MIN,St[Pl]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(St[Cl]=L.MIN_EXT,St[Pl]=L.MAX_EXT)}const Rt={[Ed]:r.ZERO,[Td]:r.ONE,[bd]:r.SRC_COLOR,[co]:r.SRC_ALPHA,[Ld]:r.SRC_ALPHA_SATURATE,[Cd]:r.DST_COLOR,[Ad]:r.DST_ALPHA,[wd]:r.ONE_MINUS_SRC_COLOR,[ho]:r.ONE_MINUS_SRC_ALPHA,[Pd]:r.ONE_MINUS_DST_COLOR,[Rd]:r.ONE_MINUS_DST_ALPHA,[Dd]:r.CONSTANT_COLOR,[Id]:r.ONE_MINUS_CONSTANT_COLOR,[Ud]:r.CONSTANT_ALPHA,[Nd]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(L,st,ct,wt,Et,Wt,Xt,le,de,qt){if(L===ai){p===!0&&(bt(r.BLEND),p=!1);return}if(p===!1&&(Dt(r.BLEND),p=!0),L!==Md){if(L!==x||qt!==O){if((v!==wi||A!==wi)&&(r.blendEquation(r.FUNC_ADD),v=wi,A=wi),qt)switch(L){case dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wl:r.blendFunc(r.ONE,r.ONE);break;case Al:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Al:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,w=null,E=null,I=null,M.set(0,0,0),T=0,x=L,O=qt}return}Et=Et||st,Wt=Wt||ct,Xt=Xt||wt,(st!==v||Et!==A)&&(r.blendEquationSeparate(St[st],St[Et]),v=st,A=Et),(ct!==y||wt!==w||Wt!==E||Xt!==I)&&(r.blendFuncSeparate(Rt[ct],Rt[wt],Rt[Wt],Rt[Xt]),y=ct,w=wt,E=Wt,I=Xt),(le.equals(M)===!1||de!==T)&&(r.blendColor(le.r,le.g,le.b,de),M.copy(le),T=de),x=L,O=!1}function Qt(L,st){L.side===yn?bt(r.CULL_FACE):Dt(r.CULL_FACE);let ct=L.side===Ge;st&&(ct=!ct),Ut(ct),L.blending===dr&&L.transparent===!1?mt(ai):mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const wt=L.stencilWrite;c.setTest(wt),wt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Dt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(L){F!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),F=L)}function R(L){L!==vd?(Dt(r.CULL_FACE),L!==q&&(L===bl?r.cullFace(r.BACK):L===xd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),q=L}function S(L){L!==P&&(Y&&r.lineWidth(L),P=L)}function z(L,st,ct){L?(Dt(r.POLYGON_OFFSET_FILL),(N!==st||B!==ct)&&(r.polygonOffset(st,ct),N=st,B=ct)):bt(r.POLYGON_OFFSET_FILL)}function tt(L){L?Dt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function J(L){L===void 0&&(L=r.TEXTURE0+X-1),nt!==L&&(r.activeTexture(L),nt=L)}function et(L,st,ct){ct===void 0&&(nt===null?ct=r.TEXTURE0+X-1:ct=nt);let wt=it[ct];wt===void 0&&(wt={type:void 0,texture:void 0},it[ct]=wt),(wt.type!==L||wt.texture!==st)&&(nt!==ct&&(r.activeTexture(ct),nt=ct),r.bindTexture(L,st||Lt[L]),wt.type=L,wt.texture=st)}function _t(){const L=it[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(L){lt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),lt.copy(L))}function rt(L){xt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),xt.copy(L))}function vt(L,st){let ct=u.get(st);ct===void 0&&(ct=new WeakMap,u.set(st,ct));let wt=ct.get(L);wt===void 0&&(wt=r.getUniformBlockIndex(st,L.name),ct.set(L,wt))}function ft(L,st){const wt=u.get(st).get(L);h.get(st)!==wt&&(r.uniformBlockBinding(st,wt,L.__bindingPointIndex),h.set(st,wt))}function Q(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},nt=null,it={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,y=null,w=null,A=null,E=null,I=null,M=new Ht(0,0,0),T=0,O=!1,F=null,q=null,P=null,N=null,B=null,lt.set(0,0,r.canvas.width,r.canvas.height),xt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Dt,disable:bt,bindFramebuffer:Vt,drawBuffers:k,useProgram:Ae,setBlending:mt,setMaterial:Qt,setFlipSided:Ut,setCullFace:R,setLineWidth:S,setPolygonOffset:z,setScissorTest:tt,activeTexture:J,bindTexture:et,unbindTexture:_t,compressedTexImage2D:ht,compressedTexImage3D:pt,texImage2D:yt,texImage3D:ut,updateUBOMapping:vt,uniformBlockBinding:ft,texStorage2D:Bt,texStorage3D:Ct,texSubImage2D:Tt,texSubImage3D:Nt,compressedTexSubImage2D:$,compressedTexSubImage3D:jt,scissor:C,viewport:rt,reset:Q}}function _0(r,t,e,n,i,s,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):Zs("canvas")}function _(R,S,z,tt){let J=1;if((R.width>tt||R.height>tt)&&(J=tt/Math.max(R.width,R.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const et=S?vo:Math.floor,_t=et(J*R.width),ht=et(J*R.height);u===void 0&&(u=g(_t,ht));const pt=z?g(_t,ht):u;return pt.width=_t,pt.height=ht,pt.getContext("2d").drawImage(R,0,0,_t,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_t+"x"+ht+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return ac(R.width)&&ac(R.height)}function p(R){return o?!1:R.wrapS!==Sn||R.wrapT!==Sn||R.minFilter!==Be&&R.minFilter!==cn}function x(R,S){return R.generateMipmaps&&S&&R.minFilter!==Be&&R.minFilter!==cn}function v(R){r.generateMipmap(R)}function y(R,S,z,tt,J=!1){if(o===!1)return S;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=S;if(S===r.RED&&(z===r.FLOAT&&(et=r.R32F),z===r.HALF_FLOAT&&(et=r.R16F),z===r.UNSIGNED_BYTE&&(et=r.R8)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(et=r.R8UI),z===r.UNSIGNED_SHORT&&(et=r.R16UI),z===r.UNSIGNED_INT&&(et=r.R32UI),z===r.BYTE&&(et=r.R8I),z===r.SHORT&&(et=r.R16I),z===r.INT&&(et=r.R32I)),S===r.RG&&(z===r.FLOAT&&(et=r.RG32F),z===r.HALF_FLOAT&&(et=r.RG16F),z===r.UNSIGNED_BYTE&&(et=r.RG8)),S===r.RGBA){const _t=J?Ys:Kt.getTransfer(tt);z===r.FLOAT&&(et=r.RGBA32F),z===r.HALF_FLOAT&&(et=r.RGBA16F),z===r.UNSIGNED_BYTE&&(et=_t===te?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function w(R,S,z){return x(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==Be&&R.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){return R===Be||R===Ll||R===xa?r.NEAREST:r.LINEAR}function E(R){const S=R.target;S.removeEventListener("dispose",E),M(S),S.isVideoTexture&&h.delete(S)}function I(R){const S=R.target;S.removeEventListener("dispose",I),O(S)}function M(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,tt=d.get(z);if(tt){const J=tt[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(R),Object.keys(tt).length===0&&d.delete(z)}n.remove(R)}function T(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const z=R.source,tt=d.get(z);delete tt[S.__cacheKey],a.memory.textures--}function O(R){const S=R.texture,z=n.get(R),tt=n.get(S);if(tt.__webglTexture!==void 0&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(z.__webglFramebuffer[J]))for(let et=0;et<z.__webglFramebuffer[J].length;et++)r.deleteFramebuffer(z.__webglFramebuffer[J][et]);else r.deleteFramebuffer(z.__webglFramebuffer[J]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[J])}else{if(Array.isArray(z.__webglFramebuffer))for(let J=0;J<z.__webglFramebuffer.length;J++)r.deleteFramebuffer(z.__webglFramebuffer[J]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let J=0;J<z.__webglColorRenderbuffer.length;J++)z.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[J]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let J=0,et=S.length;J<et;J++){const _t=n.get(S[J]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(R)}let F=0;function q(){F=0}function P(){const R=F;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function N(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function B(R,S){const z=n.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(z,R,S);return}}e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}function X(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){lt(z,R,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)}function Y(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){lt(z,R,S);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)}function j(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){xt(z,R,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)}const K={[po]:r.REPEAT,[Sn]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},nt={[Be]:r.NEAREST,[Ll]:r.NEAREST_MIPMAP_NEAREST,[xa]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[Zd]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},it={[cf]:r.NEVER,[mf]:r.ALWAYS,[hf]:r.LESS,[Bh]:r.LEQUAL,[uf]:r.EQUAL,[pf]:r.GEQUAL,[df]:r.GREATER,[ff]:r.NOTEQUAL};function W(R,S,z){if(z?(r.texParameteri(R,r.TEXTURE_WRAP_S,K[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,K[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,K[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,nt[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,nt[S.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Sn||S.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,A(S.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Be&&S.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Be||S.minFilter!==xa&&S.minFilter!==Yr||S.type===ni&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===qr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(R,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Z(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const tt=S.source;let J=d.get(tt);J===void 0&&(J={},d.set(tt,J));const et=N(S);if(et!==R.__cacheKey){J[et]===void 0&&(J[et]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[et].usedTimes++;const _t=J[R.__cacheKey];_t!==void 0&&(J[R.__cacheKey].usedTimes--,_t.usedTimes===0&&T(S)),R.__cacheKey=et,R.__webglTexture=J[et].texture}return z}function lt(R,S,z){let tt=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=r.TEXTURE_3D);const J=Z(R,S),et=S.source;e.bindTexture(tt,R.__webglTexture,r.TEXTURE0+z);const _t=n.get(et);if(et.version!==_t.__version||J===!0){e.activeTexture(r.TEXTURE0+z);const ht=Kt.getPrimaries(Kt.workingColorSpace),pt=S.colorSpace===un?null:Kt.getPrimaries(S.colorSpace),Tt=S.colorSpace===un||ht===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Nt=p(S)&&m(S.image)===!1;let $=_(S.image,Nt,!1,i.maxTextureSize);$=Ut(S,$);const jt=m($)||o,Bt=s.convert(S.format,S.colorSpace);let Ct=s.convert(S.type),yt=y(S.internalFormat,Bt,Ct,S.colorSpace,S.isVideoTexture);W(tt,S,jt);let ut;const C=S.mipmaps,rt=o&&S.isVideoTexture!==!0&&yt!==Nh,vt=_t.__version===void 0||J===!0,ft=w(S,$,jt);if(S.isDepthTexture)yt=r.DEPTH_COMPONENT,o?S.type===ni?yt=r.DEPTH_COMPONENT32F:S.type===ei?yt=r.DEPTH_COMPONENT24:S.type===Ci?yt=r.DEPTH24_STENCIL8:yt=r.DEPTH_COMPONENT16:S.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Pi&&yt===r.DEPTH_COMPONENT&&S.type!==Go&&S.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ei,Ct=s.convert(S.type)),S.format===xr&&yt===r.DEPTH_COMPONENT&&(yt=r.DEPTH_STENCIL,S.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ci,Ct=s.convert(S.type))),vt&&(rt?e.texStorage2D(r.TEXTURE_2D,1,yt,$.width,$.height):e.texImage2D(r.TEXTURE_2D,0,yt,$.width,$.height,0,Bt,Ct,null));else if(S.isDataTexture)if(C.length>0&&jt){rt&&vt&&e.texStorage2D(r.TEXTURE_2D,ft,yt,C[0].width,C[0].height);for(let Q=0,L=C.length;Q<L;Q++)ut=C[Q],rt?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,ut.width,ut.height,Bt,Ct,ut.data):e.texImage2D(r.TEXTURE_2D,Q,yt,ut.width,ut.height,0,Bt,Ct,ut.data);S.generateMipmaps=!1}else rt?(vt&&e.texStorage2D(r.TEXTURE_2D,ft,yt,$.width,$.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,Bt,Ct,$.data)):e.texImage2D(r.TEXTURE_2D,0,yt,$.width,$.height,0,Bt,Ct,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,yt,C[0].width,C[0].height,$.depth);for(let Q=0,L=C.length;Q<L;Q++)ut=C[Q],S.format!==En?Bt!==null?rt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,$.depth,Bt,ut.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,yt,ut.width,ut.height,$.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,$.depth,Bt,Ct,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Q,yt,ut.width,ut.height,$.depth,0,Bt,Ct,ut.data)}else{rt&&vt&&e.texStorage2D(r.TEXTURE_2D,ft,yt,C[0].width,C[0].height);for(let Q=0,L=C.length;Q<L;Q++)ut=C[Q],S.format!==En?Bt!==null?rt?e.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,ut.width,ut.height,Bt,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,Q,yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,ut.width,ut.height,Bt,Ct,ut.data):e.texImage2D(r.TEXTURE_2D,Q,yt,ut.width,ut.height,0,Bt,Ct,ut.data)}else if(S.isDataArrayTexture)rt?(vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,yt,$.width,$.height,$.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Bt,Ct,$.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,yt,$.width,$.height,$.depth,0,Bt,Ct,$.data);else if(S.isData3DTexture)rt?(vt&&e.texStorage3D(r.TEXTURE_3D,ft,yt,$.width,$.height,$.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Bt,Ct,$.data)):e.texImage3D(r.TEXTURE_3D,0,yt,$.width,$.height,$.depth,0,Bt,Ct,$.data);else if(S.isFramebufferTexture){if(vt)if(rt)e.texStorage2D(r.TEXTURE_2D,ft,yt,$.width,$.height);else{let Q=$.width,L=$.height;for(let st=0;st<ft;st++)e.texImage2D(r.TEXTURE_2D,st,yt,Q,L,0,Bt,Ct,null),Q>>=1,L>>=1}}else if(C.length>0&&jt){rt&&vt&&e.texStorage2D(r.TEXTURE_2D,ft,yt,C[0].width,C[0].height);for(let Q=0,L=C.length;Q<L;Q++)ut=C[Q],rt?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,Bt,Ct,ut):e.texImage2D(r.TEXTURE_2D,Q,yt,Bt,Ct,ut);S.generateMipmaps=!1}else rt?(vt&&e.texStorage2D(r.TEXTURE_2D,ft,yt,$.width,$.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Ct,$)):e.texImage2D(r.TEXTURE_2D,0,yt,Bt,Ct,$);x(S,jt)&&v(tt),_t.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xt(R,S,z){if(S.image.length!==6)return;const tt=Z(R,S),J=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const et=n.get(J);if(J.version!==et.__version||tt===!0){e.activeTexture(r.TEXTURE0+z);const _t=Kt.getPrimaries(Kt.workingColorSpace),ht=S.colorSpace===un?null:Kt.getPrimaries(S.colorSpace),pt=S.colorSpace===un||_t===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,Nt=S.image[0]&&S.image[0].isDataTexture,$=[];for(let Q=0;Q<6;Q++)!Tt&&!Nt?$[Q]=_(S.image[Q],!1,!0,i.maxCubemapSize):$[Q]=Nt?S.image[Q].image:S.image[Q],$[Q]=Ut(S,$[Q]);const jt=$[0],Bt=m(jt)||o,Ct=s.convert(S.format,S.colorSpace),yt=s.convert(S.type),ut=y(S.internalFormat,Ct,yt,S.colorSpace),C=o&&S.isVideoTexture!==!0,rt=et.__version===void 0||tt===!0;let vt=w(S,jt,Bt);W(r.TEXTURE_CUBE_MAP,S,Bt);let ft;if(Tt){C&&rt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,ut,jt.width,jt.height);for(let Q=0;Q<6;Q++){ft=$[Q].mipmaps;for(let L=0;L<ft.length;L++){const st=ft[L];S.format!==En?Ct!==null?C?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,st.width,st.height,Ct,st.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,st.width,st.height,Ct,yt,st.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,ut,st.width,st.height,0,Ct,yt,st.data)}}}else{ft=S.mipmaps,C&&rt&&(ft.length>0&&vt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,ut,$[0].width,$[0].height));for(let Q=0;Q<6;Q++)if(Nt){C?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,$[Q].width,$[Q].height,Ct,yt,$[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,$[Q].width,$[Q].height,0,Ct,yt,$[Q].data);for(let L=0;L<ft.length;L++){const ct=ft[L].image[Q].image;C?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,ct.width,ct.height,Ct,yt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,ut,ct.width,ct.height,0,Ct,yt,ct.data)}}else{C?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ct,yt,$[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,Ct,yt,$[Q]);for(let L=0;L<ft.length;L++){const st=ft[L];C?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,Ct,yt,st.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,ut,Ct,yt,st.image[Q])}}}x(S,Bt)&&v(r.TEXTURE_CUBE_MAP),et.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function gt(R,S,z,tt,J,et){const _t=s.convert(z.format,z.colorSpace),ht=s.convert(z.type),pt=y(z.internalFormat,_t,ht,z.colorSpace);if(!n.get(S).__hasExternalTextures){const Nt=Math.max(1,S.width>>et),$=Math.max(1,S.height>>et);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,et,pt,Nt,$,S.depth,0,_t,ht,null):e.texImage2D(J,et,pt,Nt,$,0,_t,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),mt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,J,n.get(z).__webglTexture,0,Rt(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,J,n.get(z).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(R,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let tt=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||mt(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===ni?tt=r.DEPTH_COMPONENT32F:J.type===ei&&(tt=r.DEPTH_COMPONENT24));const et=Rt(S);mt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,tt,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,et,tt,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,tt,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const tt=Rt(S);z&&mt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,r.DEPTH24_STENCIL8,S.width,S.height):mt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const tt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<tt.length;J++){const et=tt[J],_t=s.convert(et.format,et.colorSpace),ht=s.convert(et.type),pt=y(et.internalFormat,_t,ht,et.colorSpace),Tt=Rt(S);z&&mt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt,pt,S.width,S.height):mt(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt,pt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Dt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const tt=n.get(S.depthTexture).__webglTexture,J=Rt(S);if(S.depthTexture.format===Pi)mt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(S.depthTexture.format===xr)mt(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function bt(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Dt(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=r.createRenderbuffer(),Lt(S.__webglDepthbuffer[tt],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Lt(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(R,S,z){const tt=n.get(R);S!==void 0&&gt(tt.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&bt(R)}function k(R){const S=R.texture,z=n.get(R),tt=n.get(S);R.addEventListener("dispose",I),R.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=S.version,a.memory.textures++);const J=R.isWebGLCubeRenderTarget===!0,et=R.isWebGLMultipleRenderTargets===!0,_t=m(R)||o;if(J){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let pt=0;pt<S.mipmaps.length;pt++)z.__webglFramebuffer[ht][pt]=r.createFramebuffer()}else z.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)z.__webglFramebuffer[ht]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(et)if(i.drawBuffers){const ht=R.texture;for(let pt=0,Tt=ht.length;pt<Tt;pt++){const Nt=n.get(ht[pt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&mt(R)===!1){const ht=et?S:[S];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pt=0;pt<ht.length;pt++){const Tt=ht[pt];z.__webglColorRenderbuffer[pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[pt]);const Nt=s.convert(Tt.format,Tt.colorSpace),$=s.convert(Tt.type),jt=y(Tt.internalFormat,Nt,$,Tt.colorSpace,R.isXRRenderTarget===!0),Bt=Rt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,jt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,z.__webglColorRenderbuffer[pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),W(r.TEXTURE_CUBE_MAP,S,_t);for(let ht=0;ht<6;ht++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)gt(z.__webglFramebuffer[ht][pt],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else gt(z.__webglFramebuffer[ht],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(S,_t)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const ht=R.texture;for(let pt=0,Tt=ht.length;pt<Tt;pt++){const Nt=ht[pt],$=n.get(Nt);e.bindTexture(r.TEXTURE_2D,$.__webglTexture),W(r.TEXTURE_2D,Nt,_t),gt(z.__webglFramebuffer,R,Nt,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,0),x(Nt,_t)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ht=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,tt.__webglTexture),W(ht,S,_t),o&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)gt(z.__webglFramebuffer[pt],R,S,r.COLOR_ATTACHMENT0,ht,pt);else gt(z.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ht,0);x(S,_t)&&v(ht),e.unbindTexture()}R.depthBuffer&&bt(R)}function Ae(R){const S=m(R)||o,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let tt=0,J=z.length;tt<J;tt++){const et=z[tt];if(x(et,S)){const _t=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ht=n.get(et).__webglTexture;e.bindTexture(_t,ht),v(_t),e.unbindTexture()}}}function St(R){if(o&&R.samples>0&&mt(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,tt=R.height;let J=r.COLOR_BUFFER_BIT;const et=[],_t=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(R),pt=R.isWebGLMultipleRenderTargets===!0;if(pt)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){et.push(r.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&et.push(_t);const Nt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Nt===!1&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),pt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]),Nt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[_t]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_t])),pt){const $=n.get(S[Tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,z,tt,0,0,z,tt,J,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pt)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]);const Nt=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,Nt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Rt(R){return Math.min(i.maxSamples,R.samples)}function mt(R){const S=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Qt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ut(R,S){const z=R.colorSpace,tt=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===_o||z!==Yn&&z!==un&&(Kt.getTransfer(z)===te?o===!1?t.has("EXT_sRGB")===!0&&tt===En?(R.format=_o,R.minFilter=cn,R.generateMipmaps=!1):S=kh.sRGBToLinear(S):(tt!==En||J!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Vt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=mt}function g0(r,t,e){const n=e.isWebGL2;function i(s,a=un){let o;const l=Kt.getTransfer(a);if(s===li)return r.UNSIGNED_BYTE;if(s===Ph)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Lh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$d)return r.BYTE;if(s===Jd)return r.SHORT;if(s===Go)return r.UNSIGNED_SHORT;if(s===Ch)return r.INT;if(s===ei)return r.UNSIGNED_INT;if(s===ni)return r.FLOAT;if(s===qr)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Qd)return r.ALPHA;if(s===En)return r.RGBA;if(s===tf)return r.LUMINANCE;if(s===ef)return r.LUMINANCE_ALPHA;if(s===Pi)return r.DEPTH_COMPONENT;if(s===xr)return r.DEPTH_STENCIL;if(s===_o)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===nf)return r.RED;if(s===Dh)return r.RED_INTEGER;if(s===rf)return r.RG;if(s===Ih)return r.RG_INTEGER;if(s===Uh)return r.RGBA_INTEGER;if(s===Ma||s===ya||s===Sa||s===Ea)if(l===te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ma)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ma)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ya)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dl||s===Il||s===Ul||s===Nl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Dl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Il)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ol||s===Fl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ol)return l===te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Fl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bl||s===zl||s===kl||s===Gl||s===Hl||s===Vl||s===Wl||s===Xl||s===Yl||s===ql||s===jl||s===Kl||s===Zl||s===$l)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Bl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ql)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$l)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ta||s===Jl||s===Ql)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ta)return l===te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ql)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sf||s===tc||s===ec||s===nc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ta)return o.COMPRESSED_RED_RGTC1_EXT;if(s===tc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ec)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===nc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ci?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class v0 extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fn extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x0={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class M0 extends ki{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const x=[],v=[],y=new at;let w=null;const A=new hn;A.layers.enable(1),A.viewport=new be;const E=new hn;E.layers.enable(2),E.viewport=new be;const I=[A,E],M=new v0;M.layers.enable(1),M.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=x[W];return Z===void 0&&(Z=new ja,x[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=x[W];return Z===void 0&&(Z=new ja,x[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=x[W];return Z===void 0&&(Z=new ja,x[W]=Z),Z.getHandSpace()};function F(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const lt=x[Z];lt!==void 0&&(lt.update(W.inputSource,W.frame,c||a),lt.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",P);for(let W=0;W<x.length;W++){const Z=v[W];Z!==null&&(v[W]=null,x[W].disconnect(Z))}T=null,O=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Oi(f.framebufferWidth,f.framebufferHeight,{format:En,type:li,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,lt=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?xr:Pi,lt=_.stencil?Ci:ei);const gt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Oi(d.textureWidth,d.textureHeight,{format:En,type:li,depthTexture:new $h(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Lt=t.properties.get(p);Lt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(W){for(let Z=0;Z<W.removed.length;Z++){const lt=W.removed[Z],xt=v.indexOf(lt);xt>=0&&(v[xt]=null,x[xt].disconnect(lt))}for(let Z=0;Z<W.added.length;Z++){const lt=W.added[Z];let xt=v.indexOf(lt);if(xt===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=v.length){v.push(lt),xt=Lt;break}else if(v[Lt]===null){v[Lt]=lt,xt=Lt;break}if(xt===-1)break}const gt=x[xt];gt&&gt.connect(lt)}}const N=new D,B=new D;function X(W,Z,lt){N.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(lt.matrixWorld);const xt=N.distanceTo(B),gt=Z.projectionMatrix.elements,Lt=lt.projectionMatrix.elements,Dt=gt[14]/(gt[10]-1),bt=gt[14]/(gt[10]+1),Vt=(gt[9]+1)/gt[5],k=(gt[9]-1)/gt[5],Ae=(gt[8]-1)/gt[0],St=(Lt[8]+1)/Lt[0],Rt=Dt*Ae,mt=Dt*St,Qt=xt/(-Ae+St),Ut=Qt*-Ae;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ut),W.translateZ(Qt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const R=Dt+Qt,S=bt+Qt,z=Rt-Ut,tt=mt+(xt-Ut),J=Vt*bt/S*R,et=k*bt/S*R;W.projectionMatrix.makePerspective(z,tt,J,et,R,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;M.near=E.near=A.near=W.near,M.far=E.far=A.far=W.far,(T!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,O=M.far);const Z=W.parent,lt=M.cameras;Y(M,Z);for(let xt=0;xt<lt.length;xt++)Y(lt[xt],Z);lt.length===2?X(M,A,E):M.projectionMatrix.copy(A.projectionMatrix),j(W,M,Z)};function j(W,Z,lt){lt===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(lt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=go*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let K=null;function nt(W,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let xt=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,xt=!0);for(let gt=0;gt<lt.length;gt++){const Lt=lt[gt];let Dt=null;if(f!==null)Dt=f.getViewport(Lt);else{const Vt=u.getViewSubImage(d,Lt);Dt=Vt.viewport,gt===0&&(t.setRenderTargetTextures(p,Vt.colorTexture,d.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(p))}let bt=I[gt];bt===void 0&&(bt=new hn,bt.layers.enable(gt),bt.viewport=new be,I[gt]=bt),bt.matrix.fromArray(Lt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Lt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),gt===0&&(M.matrix.copy(bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xt===!0&&M.cameras.push(bt)}}for(let lt=0;lt<x.length;lt++){const xt=v[lt],gt=x[lt];xt!==null&&gt!==void 0&&gt.update(xt,Z,c||a)}K&&K(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const it=new Kh;it.setAnimationLoop(nt),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function y0(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S0(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(x,w);const A=t.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const y=r.createBuffer(),w=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],y=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,E=y.length;A<E;A++){const I=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,T=I.length;M<T;M++){const O=I[M];if(f(O,A,M,w)===!0){const F=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let N=0;N<q.length;N++){const B=q[N],X=_(B);typeof B=="number"||typeof B=="boolean"?(O.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,F+P,O.__data)):B.isMatrix3?(O.__data[0]=B.elements[0],O.__data[1]=B.elements[1],O.__data[2]=B.elements[2],O.__data[3]=0,O.__data[4]=B.elements[3],O.__data[5]=B.elements[4],O.__data[6]=B.elements[5],O.__data[7]=0,O.__data[8]=B.elements[6],O.__data[9]=B.elements[7],O.__data[10]=B.elements[8],O.__data[11]=0):(B.toArray(O.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,y,w){const A=x.value,E=v+"_"+y;if(w[E]===void 0)return typeof A=="number"||typeof A=="boolean"?w[E]=A:w[E]=A.clone(),!0;{const I=w[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return w[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(x){const v=x.uniforms;let y=0;const w=16;for(let E=0,I=v.length;E<I;E++){const M=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,O=M.length;T<O;T++){const F=M[T],q=Array.isArray(F.value)?F.value:[F.value];for(let P=0,N=q.length;P<N;P++){const B=q[P],X=_(B),Y=y%w;Y!==0&&w-Y<X.boundary&&(y+=w-Y),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=X.storage}}}const A=y%w;return A>0&&(y+=w-A),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ko{constructor(t={}){const{canvas:e=vf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const v=this;let y=!1,w=0,A=0,E=null,I=-1,M=null;const T=new be,O=new be;let F=null;const q=new Ht(0);let P=0,N=e.width,B=e.height,X=1,Y=null,j=null;const K=new be(0,0,N,B),nt=new be(0,0,N,B);let it=!1;const W=new Yo;let Z=!1,lt=!1,xt=null;const gt=new ve,Lt=new at,Dt=new D,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return E===null?X:1}let k=n;function Ae(b,U){for(let H=0;H<b.length;H++){const V=b[H],G=e.getContext(V,U);if(G!==null)return G}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",st,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),k=Ae(U,b),k===null)throw Ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let St,Rt,mt,Qt,Ut,R,S,z,tt,J,et,_t,ht,pt,Tt,Nt,$,jt,Bt,Ct,yt,ut,C,rt;function vt(){St=new D_(k),Rt=new w_(k,St,t),St.init(Rt),ut=new g0(k,St,Rt),mt=new m0(k,St,Rt),Qt=new N_(k),Ut=new e0,R=new _0(k,St,mt,Ut,Rt,ut,Qt),S=new R_(v),z=new L_(v),tt=new Vf(k,Rt),C=new T_(k,St,tt,Rt),J=new I_(k,tt,Qt,C),et=new z_(k,J,tt,Qt),Bt=new B_(k,Rt,R),Nt=new A_(Ut),_t=new t0(v,S,z,St,Rt,C,Nt),ht=new y0(v,Ut),pt=new i0,Tt=new c0(St,Rt),jt=new E_(v,S,z,mt,et,d,l),$=new p0(v,et,Rt),rt=new S0(k,Qt,Rt,mt),Ct=new b_(k,St,Qt,Rt),yt=new U_(k,St,Qt,Rt),Qt.programs=_t.programs,v.capabilities=Rt,v.extensions=St,v.properties=Ut,v.renderLists=pt,v.shadowMap=$,v.state=mt,v.info=Qt}vt();const ft=new M0(v,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(N,B,!1))},this.getSize=function(b){return b.set(N,B)},this.setSize=function(b,U,H=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,B=U,e.width=Math.floor(b*X),e.height=Math.floor(U*X),H===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(N*X,B*X).floor()},this.setDrawingBufferSize=function(b,U,H){N=b,B=U,X=H,e.width=Math.floor(b*H),e.height=Math.floor(U*H),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,U,H,V){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,U,H,V),mt.viewport(T.copy(K).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,U,H,V){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,U,H,V),mt.scissor(O.copy(nt).multiplyScalar(X).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(b){mt.setScissorTest(it=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(b=!0,U=!0,H=!0){let V=0;if(b){let G=!1;if(E!==null){const dt=E.texture.format;G=dt===Uh||dt===Ih||dt===Dh}if(G){const dt=E.texture.type,Mt=dt===li||dt===ei||dt===Go||dt===Ci||dt===Ph||dt===Lh,At=jt.getClearColor(),Pt=jt.getClearAlpha(),zt=At.r,It=At.g,Ot=At.b;Mt?(f[0]=zt,f[1]=It,f[2]=Ot,f[3]=Pt,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=zt,g[1]=It,g[2]=Ot,g[3]=Pt,k.clearBufferiv(k.COLOR,0,g))}else V|=k.COLOR_BUFFER_BIT}U&&(V|=k.DEPTH_BUFFER_BIT),H&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",st,!1),pt.dispose(),Tt.dispose(),Ut.dispose(),S.dispose(),z.dispose(),et.dispose(),C.dispose(),rt.dispose(),_t.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",de),ft.removeEventListener("sessionend",qt),xt&&(xt.dispose(),xt=null),me.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Qt.autoReset,U=$.enabled,H=$.autoUpdate,V=$.needsUpdate,G=$.type;vt(),Qt.autoReset=b,$.enabled=U,$.autoUpdate=H,$.needsUpdate=V,$.type=G}function st(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const U=b.target;U.removeEventListener("dispose",ct),wt(U)}function wt(b){Et(b),Ut.remove(b)}function Et(b){const U=Ut.get(b).programs;U!==void 0&&(U.forEach(function(H){_t.releaseProgram(H)}),b.isShaderMaterial&&_t.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,H,V,G,dt){U===null&&(U=bt);const Mt=G.isMesh&&G.matrixWorld.determinant()<0,At=dd(b,U,H,V,G);mt.setMaterial(V,Mt);let Pt=H.index,zt=1;if(V.wireframe===!0){if(Pt=J.getWireframeAttribute(H),Pt===void 0)return;zt=2}const It=H.drawRange,Ot=H.attributes.position;let fe=It.start*zt,qe=(It.start+It.count)*zt;dt!==null&&(fe=Math.max(fe,dt.start*zt),qe=Math.min(qe,(dt.start+dt.count)*zt)),Pt!==null?(fe=Math.max(fe,0),qe=Math.min(qe,Pt.count)):Ot!=null&&(fe=Math.max(fe,0),qe=Math.min(qe,Ot.count));const Se=qe-fe;if(Se<0||Se===1/0)return;C.setup(G,V,At,H,Pt);let Un,ne=Ct;if(Pt!==null&&(Un=tt.get(Pt),ne=yt,ne.setIndex(Un)),G.isMesh)V.wireframe===!0?(mt.setLineWidth(V.wireframeLinewidth*Vt()),ne.setMode(k.LINES)):ne.setMode(k.TRIANGLES);else if(G.isLine){let kt=V.linewidth;kt===void 0&&(kt=1),mt.setLineWidth(kt*Vt()),G.isLineSegments?ne.setMode(k.LINES):G.isLineLoop?ne.setMode(k.LINE_LOOP):ne.setMode(k.LINE_STRIP)}else G.isPoints?ne.setMode(k.POINTS):G.isSprite&&ne.setMode(k.TRIANGLES);if(G.isBatchedMesh)ne.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ne.renderInstances(fe,Se,G.count);else if(H.isInstancedBufferGeometry){const kt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pa=Math.min(H.instanceCount,kt);ne.renderInstances(fe,Se,pa)}else ne.render(fe,Se)};function Wt(b,U,H){b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,hs(b,U,H),b.side=ui,b.needsUpdate=!0,hs(b,U,H),b.side=yn):hs(b,U,H)}this.compile=function(b,U,H=null){H===null&&(H=b),m=Tt.get(H),m.init(),x.push(m),H.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),b!==H&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);const V=new Set;return b.traverse(function(G){const dt=G.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const At=dt[Mt];Wt(At,H,G),V.add(At)}else Wt(dt,H,G),V.add(dt)}),x.pop(),m=null,V},this.compileAsync=function(b,U,H=null){const V=this.compile(b,U,H);return new Promise(G=>{function dt(){if(V.forEach(function(Mt){Ut.get(Mt).currentProgram.isReady()&&V.delete(Mt)}),V.size===0){G(b);return}setTimeout(dt,10)}St.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Xt=null;function le(b){Xt&&Xt(b)}function de(){me.stop()}function qt(){me.start()}const me=new Kh;me.setAnimationLoop(le),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(b){Xt=b,ft.setAnimationLoop(b),b===null?me.stop():me.start()},ft.addEventListener("sessionstart",de),ft.addEventListener("sessionend",qt),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(U),U=ft.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,E),m=Tt.get(b,x.length),m.init(),x.push(m),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(gt),lt=this.localClippingEnabled,Z=Nt.init(this.clippingPlanes,lt),_=pt.get(b,p.length),_.init(),p.push(_),Tn(b,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,j),this.info.render.frame++,Z===!0&&Nt.beginShadows();const H=m.state.shadowsArray;if($.render(H,b,U),Z===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(_,b),m.setupLights(v._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let G=0,dt=V.length;G<dt;G++){const Mt=V[G];xl(_,b,Mt,Mt.viewport)}}else xl(_,b,U);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(v,b,U),C.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Tn(b,U,H,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){V&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const Mt=et.update(b),At=b.material;At.visible&&_.push(b,Mt,At,H,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const Mt=et.update(b),At=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Dt.copy(Mt.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(At)){const Pt=Mt.groups;for(let zt=0,It=Pt.length;zt<It;zt++){const Ot=Pt[zt],fe=At[Ot.materialIndex];fe&&fe.visible&&_.push(b,Mt,fe,H,Dt.z,Ot)}}else At.visible&&_.push(b,Mt,At,H,Dt.z,null)}}const dt=b.children;for(let Mt=0,At=dt.length;Mt<At;Mt++)Tn(dt[Mt],U,H,V)}function xl(b,U,H,V){const G=b.opaque,dt=b.transmissive,Mt=b.transparent;m.setupLightsView(H),Z===!0&&Nt.setGlobalState(v.clippingPlanes,H),dt.length>0&&ud(G,dt,U,H),V&&mt.viewport(T.copy(V)),G.length>0&&cs(G,U,H),dt.length>0&&cs(dt,U,H),Mt.length>0&&cs(Mt,U,H),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function ud(b,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const dt=Rt.isWebGL2;xt===null&&(xt=new Oi(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?qr:li,minFilter:Yr,samples:dt?4:0})),v.getDrawingBufferSize(Lt),dt?xt.setSize(Lt.x,Lt.y):xt.setSize(vo(Lt.x),vo(Lt.y));const Mt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const At=v.toneMapping;v.toneMapping=oi,cs(b,H,V),R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt);let Pt=!1;for(let zt=0,It=U.length;zt<It;zt++){const Ot=U[zt],fe=Ot.object,qe=Ot.geometry,Se=Ot.material,Un=Ot.group;if(Se.side===yn&&fe.layers.test(V.layers)){const ne=Se.side;Se.side=Ge,Se.needsUpdate=!0,Ml(fe,H,V,qe,Se,Un),Se.side=ne,Se.needsUpdate=!0,Pt=!0}}Pt===!0&&(R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt)),v.setRenderTarget(Mt),v.setClearColor(q,P),v.toneMapping=At}function cs(b,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let G=0,dt=b.length;G<dt;G++){const Mt=b[G],At=Mt.object,Pt=Mt.geometry,zt=V===null?Mt.material:V,It=Mt.group;At.layers.test(H.layers)&&Ml(At,U,H,Pt,zt,It)}}function Ml(b,U,H,V,G,dt){b.onBeforeRender(v,U,H,V,G,dt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(v,U,H,V,b,dt),G.transparent===!0&&G.side===yn&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,v.renderBufferDirect(H,U,V,G,b,dt),G.side=ui,G.needsUpdate=!0,v.renderBufferDirect(H,U,V,G,b,dt),G.side=yn):v.renderBufferDirect(H,U,V,G,b,dt),b.onAfterRender(v,U,H,V,G,dt)}function hs(b,U,H){U.isScene!==!0&&(U=bt);const V=Ut.get(b),G=m.state.lights,dt=m.state.shadowsArray,Mt=G.state.version,At=_t.getParameters(b,G.state,dt,U,H),Pt=_t.getProgramCacheKey(At);let zt=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?z:S).get(b.envMap||V.environment),zt===void 0&&(b.addEventListener("dispose",ct),zt=new Map,V.programs=zt);let It=zt.get(Pt);if(It!==void 0){if(V.currentProgram===It&&V.lightsStateVersion===Mt)return Sl(b,At),It}else At.uniforms=_t.getUniforms(b),b.onBuild(H,At,v),b.onBeforeCompile(At,v),It=_t.acquireProgram(At,Pt),zt.set(Pt,It),V.uniforms=At.uniforms;const Ot=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=Nt.uniform),Sl(b,At),V.needsLights=pd(b),V.lightsStateVersion=Mt,V.needsLights&&(Ot.ambientLightColor.value=G.state.ambient,Ot.lightProbe.value=G.state.probe,Ot.directionalLights.value=G.state.directional,Ot.directionalLightShadows.value=G.state.directionalShadow,Ot.spotLights.value=G.state.spot,Ot.spotLightShadows.value=G.state.spotShadow,Ot.rectAreaLights.value=G.state.rectArea,Ot.ltc_1.value=G.state.rectAreaLTC1,Ot.ltc_2.value=G.state.rectAreaLTC2,Ot.pointLights.value=G.state.point,Ot.pointLightShadows.value=G.state.pointShadow,Ot.hemisphereLights.value=G.state.hemi,Ot.directionalShadowMap.value=G.state.directionalShadowMap,Ot.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ot.spotShadowMap.value=G.state.spotShadowMap,Ot.spotLightMatrix.value=G.state.spotLightMatrix,Ot.spotLightMap.value=G.state.spotLightMap,Ot.pointShadowMap.value=G.state.pointShadowMap,Ot.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=It,V.uniformsList=null,It}function yl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=zs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Sl(b,U){const H=Ut.get(b);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function dd(b,U,H,V,G){U.isScene!==!0&&(U=bt),R.resetTextureUnits();const dt=U.fog,Mt=V.isMeshStandardMaterial?U.environment:null,At=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Yn,Pt=(V.isMeshStandardMaterial?z:S).get(V.envMap||Mt),zt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ot=!!H.morphAttributes.position,fe=!!H.morphAttributes.normal,qe=!!H.morphAttributes.color;let Se=oi;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Se=v.toneMapping);const Un=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=Un!==void 0?Un.length:0,kt=Ut.get(V),pa=m.state.lights;if(Z===!0&&(lt===!0||b!==M)){const sn=b===M&&V.id===I;Nt.setState(V,b,sn)}let ce=!1;V.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==pa.state.version||kt.outputColorSpace!==At||G.isBatchedMesh&&kt.batching===!1||!G.isBatchedMesh&&kt.batching===!0||G.isInstancedMesh&&kt.instancing===!1||!G.isInstancedMesh&&kt.instancing===!0||G.isSkinnedMesh&&kt.skinning===!1||!G.isSkinnedMesh&&kt.skinning===!0||G.isInstancedMesh&&kt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&kt.instancingColor===!1&&G.instanceColor!==null||kt.envMap!==Pt||V.fog===!0&&kt.fog!==dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Nt.numPlanes||kt.numIntersection!==Nt.numIntersection)||kt.vertexAlphas!==zt||kt.vertexTangents!==It||kt.morphTargets!==Ot||kt.morphNormals!==fe||kt.morphColors!==qe||kt.toneMapping!==Se||Rt.isWebGL2===!0&&kt.morphTargetsCount!==ne)&&(ce=!0):(ce=!0,kt.__version=V.version);let _i=kt.currentProgram;ce===!0&&(_i=hs(V,U,G));let El=!1,Pr=!1,ma=!1;const Pe=_i.getUniforms(),gi=kt.uniforms;if(mt.useProgram(_i.program)&&(El=!0,Pr=!0,ma=!0),V.id!==I&&(I=V.id,Pr=!0),El||M!==b){Pe.setValue(k,"projectionMatrix",b.projectionMatrix),Pe.setValue(k,"viewMatrix",b.matrixWorldInverse);const sn=Pe.map.cameraPosition;sn!==void 0&&sn.setValue(k,Dt.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&Pe.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pe.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Pr=!0,ma=!0)}if(G.isSkinnedMesh){Pe.setOptional(k,G,"bindMatrix"),Pe.setOptional(k,G,"bindMatrixInverse");const sn=G.skeleton;sn&&(Rt.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Pe.setValue(k,"boneTexture",sn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Pe.setOptional(k,G,"batchingTexture"),Pe.setValue(k,"batchingTexture",G._matricesTexture,R));const _a=H.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0&&Rt.isWebGL2===!0)&&Bt.update(G,H,_i),(Pr||kt.receiveShadow!==G.receiveShadow)&&(kt.receiveShadow=G.receiveShadow,Pe.setValue(k,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gi.envMap.value=Pt,gi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Pr&&(Pe.setValue(k,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&fd(gi,ma),dt&&V.fog===!0&&ht.refreshFogUniforms(gi,dt),ht.refreshMaterialUniforms(gi,V,X,B,xt),zs.upload(k,yl(kt),gi,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zs.upload(k,yl(kt),gi,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pe.setValue(k,"center",G.center),Pe.setValue(k,"modelViewMatrix",G.modelViewMatrix),Pe.setValue(k,"normalMatrix",G.normalMatrix),Pe.setValue(k,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const sn=V.uniformsGroups;for(let ga=0,md=sn.length;ga<md;ga++)if(Rt.isWebGL2){const Tl=sn[ga];rt.update(Tl,_i),rt.bind(Tl,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function fd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function pd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,U,H){Ut.get(b.texture).__webglTexture=U,Ut.get(b.depthTexture).__webglTexture=H;const V=Ut.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){const H=Ut.get(b);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,H=0){E=b,w=U,A=H;let V=!0,G=null,dt=!1,Mt=!1;if(b){const Pt=Ut.get(b);Pt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(k.FRAMEBUFFER,null),V=!1):Pt.__webglFramebuffer===void 0?R.setupRenderTarget(b):Pt.__hasExternalTextures&&R.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);const zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);const It=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[U])?G=It[U][H]:G=It[U],dt=!0):Rt.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?G=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?G=It[H]:G=It,T.copy(b.viewport),O.copy(b.scissor),F=b.scissorTest}else T.copy(K).multiplyScalar(X).floor(),O.copy(nt).multiplyScalar(X).floor(),F=it;if(mt.bindFramebuffer(k.FRAMEBUFFER,G)&&Rt.drawBuffers&&V&&mt.drawBuffers(b,G),mt.viewport(T),mt.scissor(O),mt.setScissorTest(F),dt){const Pt=Ut.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,H)}else if(Mt){const Pt=Ut.get(b.texture),zt=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,H||0,zt)}I=-1},this.readRenderTargetPixels=function(b,U,H,V,G,dt,Mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){mt.bindFramebuffer(k.FRAMEBUFFER,At);try{const Pt=b.texture,zt=Pt.format,It=Pt.type;if(zt!==En&&ut.convert(zt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=It===qr&&(St.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&St.has("EXT_color_buffer_float"));if(It!==li&&ut.convert(It)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===ni&&(Rt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&H>=0&&H<=b.height-G&&k.readPixels(U,H,V,G,ut.convert(zt),ut.convert(It),dt)}finally{const Pt=E!==null?Ut.get(E).__webglFramebuffer:null;mt.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(b,U,H=0){const V=Math.pow(2,-H),G=Math.floor(U.image.width*V),dt=Math.floor(U.image.height*V);R.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,b.x,b.y,G,dt),mt.unbindTexture()},this.copyTextureToTexture=function(b,U,H,V=0){const G=U.image.width,dt=U.image.height,Mt=ut.convert(H.format),At=ut.convert(H.type);R.setTexture2D(H,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,V,b.x,b.y,G,dt,Mt,At,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,V,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,V,b.x,b.y,Mt,At,U.image),V===0&&H.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,H,V,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=b.max.x-b.min.x+1,Mt=b.max.y-b.min.y+1,At=b.max.z-b.min.z+1,Pt=ut.convert(V.format),zt=ut.convert(V.type);let It;if(V.isData3DTexture)R.setTexture3D(V,0),It=k.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)R.setTexture2DArray(V,0),It=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const Ot=k.getParameter(k.UNPACK_ROW_LENGTH),fe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),qe=k.getParameter(k.UNPACK_SKIP_PIXELS),Se=k.getParameter(k.UNPACK_SKIP_ROWS),Un=k.getParameter(k.UNPACK_SKIP_IMAGES),ne=H.isCompressedTexture?H.mipmaps[G]:H.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ne.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ne.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(It,G,U.x,U.y,U.z,dt,Mt,At,Pt,zt,ne.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(It,G,U.x,U.y,U.z,dt,Mt,At,Pt,ne.data)):k.texSubImage3D(It,G,U.x,U.y,U.z,dt,Mt,At,Pt,zt,ne),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Se),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Un),G===0&&V.generateMipmaps&&k.generateMipmap(It),mt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){w=0,A=0,E=null,mt.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ho?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Li:Oh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?Te:Yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class E0 extends Ko{}E0.prototype.isWebGL1Renderer=!0;class Zo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wc extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new at:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],s=[],a=[],o=new D,l=new ve;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(xe(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $o extends In{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new at,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class T0 extends $o{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Jo(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Is=new D,Ka=new Jo,Za=new Jo,$a=new Jo;class b0 extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Is.subVectors(i[0],i[1]).add(i[0]),c=Is);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Is.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Is),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ka.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Za.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),$a.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Za.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$a.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ka.calc(l),Za.calc(l),$a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xc(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function w0(r,t){const e=1-r;return e*e*t}function A0(r,t){return 2*(1-r)*r*t}function R0(r,t){return r*r*t}function kr(r,t,e,n){return w0(r,t)+A0(r,e)+R0(r,n)}function C0(r,t){const e=1-r;return e*e*e*t}function P0(r,t){const e=1-r;return 3*e*e*r*t}function L0(r,t){return 3*(1-r)*r*r*t}function D0(r,t){return r*r*r*t}function Gr(r,t,e,n,i){return C0(r,t)+P0(r,e)+L0(r,n)+D0(r,i)}class iu extends In{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,i.x,s.x,a.x,o.x),Gr(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class I0 extends In{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,i.x,s.x,a.x,o.x),Gr(t,i.y,s.y,a.y,o.y),Gr(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ru extends In{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U0 extends In{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class su extends In{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(kr(t,i.x,s.x,a.x),kr(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class N0 extends In{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(kr(t,i.x,s.x,a.x),kr(t,i.y,s.y,a.y),kr(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Xc(o,l.x,c.x,h.x,u.x),Xc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var Yc=Object.freeze({__proto__:null,ArcCurve:T0,CatmullRomCurve3:b0,CubicBezierCurve:iu,CubicBezierCurve3:I0,EllipseCurve:$o,LineCurve:ru,LineCurve3:U0,QuadraticBezierCurve:su,QuadraticBezierCurve3:N0,SplineCurve:au});class O0 extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Yc[i.type]().fromJSON(i))}return this}}class qc extends O0{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ru(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new su(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new iu(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new au(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new $o(t,e,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qo extends _n{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=xe(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,d=new at,f=new D,g=new D,_=new D;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=e;x++){const v=n+x*h*i,y=Math.sin(v),w=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*w,a.push(u.x,u.y,u.z),d.x=x/e,d.y=A/(t.length-1),o.push(d.x,d.y);const E=l[3*A+0]*y,I=l[3*A+1],M=l[3*A+0]*w;c.push(E,I,M)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const y=v+x*t.length,w=y,A=y+t.length,E=y+t.length+1,I=y+1;s.push(w,A,I),s.push(E,I,A)}this.setIndex(s),this.setAttribute("position",new ue(a,3)),this.setAttribute("uv",new ue(o,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.points,t.segments,t.phiStart,t.phiLength)}}class tl extends _n{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function x(){const y=new D,w=new D;let A=0;const E=(e-t)/n;for(let I=0;I<=s;I++){const M=[],T=I/s,O=T*(e-t)+t;for(let F=0;F<=i;F++){const q=F/i,P=q*l+o,N=Math.sin(P),B=Math.cos(P);w.x=O*N,w.y=-T*n+m,w.z=O*B,u.push(w.x,w.y,w.z),y.set(N,E,B).normalize(),d.push(y.x,y.y,y.z),f.push(q,1-T),M.push(g++)}_.push(M)}for(let I=0;I<i;I++)for(let M=0;M<s;M++){const T=_[M][I],O=_[M+1][I],F=_[M+1][I+1],q=_[M][I+1];h.push(T,O,q),h.push(O,F,q),A+=6}c.addGroup(p,A,0),p+=A}function v(y){const w=g,A=new at,E=new D;let I=0;const M=y===!0?t:e,T=y===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;const O=g;for(let F=0;F<=i;F++){const P=F/i*l+o,N=Math.cos(P),B=Math.sin(P);E.x=M*B,E.y=m*T,E.z=M*N,u.push(E.x,E.y,E.z),d.push(0,T,0),A.x=N*.5+.5,A.y=B*.5*T+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){const q=w+F,P=O+F;y===!0?h.push(P,P+1,q):h.push(P+1,P,q),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yo extends qc{constructor(t){super(t),this.uuid=Ar(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new qc().fromJSON(i))}return this}}const F0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=ou(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(n&&(s=H0(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return jr(s,a,e,o,l,f,0),a}};function ou(r,t,e,n,i){let s,a;if(i===Q0(r,t,e,n)>0)for(s=t;s<e;s+=n)a=jc(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=jc(s,r[s],r[s+1],a);return a&&ca(a,a.next)&&(Zr(a),a=a.next),a}function zi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ca(e,e.next)||ae(e.prev,e,e.next)===0)){if(Zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jr(r,t,e,n,i,s,a){if(!r)return;!a&&s&&q0(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?z0(r,n,i,s):B0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Zr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=k0(zi(r),t,e),jr(r,t,e,n,i,s,2)):a===2&&G0(r,t,e,n,i,s):jr(zi(r),t,e,n,i,s,1);break}}}function B0(r){const t=r.prev,e=r,n=r.next;if(ae(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&cr(i,o,s,l,a,c,g.x,g.y)&&ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z0(r,t,e,n){const i=r.prev,s=r,a=r.next;if(ae(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=So(f,g,t,e,n),x=So(_,m,t,e,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&cr(o,h,l,u,c,d,v.x,v.y)&&ae(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&cr(o,h,l,u,c,d,y.x,y.y)&&ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&cr(o,h,l,u,c,d,v.x,v.y)&&ae(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&cr(o,h,l,u,c,d,y.x,y.y)&&ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function k0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!ca(i,s)&&lu(i,n,n.next,s)&&Kr(i,s)&&Kr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Zr(n),Zr(n.next),n=r=s),n=n.next}while(n!==r);return zi(n)}function G0(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Z0(a,o)){let l=cu(a,o);a=zi(a,a.next),l=zi(l,l.next),jr(a,t,e,n,i,s,0),jr(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function H0(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=ou(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(K0(c));for(i.sort(V0),s=0;s<i.length;s++)e=W0(i[s],e);return e}function V0(r,t){return r.x-t.x}function W0(r,t){const e=X0(r,t);if(!e)return t;const n=cu(e,r);return zi(n,n.next),zi(e,e.next)}function X0(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&cr(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),Kr(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Y0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Y0(r,t){return ae(r.prev,r,t.prev)<0&&ae(t.next,r,r.next)<0}function q0(r,t,e,n){let i=r;do i.z===0&&(i.z=So(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,j0(i)}function j0(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function So(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function K0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function cr(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function Z0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!$0(r,t)&&(Kr(r,t)&&Kr(t,r)&&J0(r,t)&&(ae(r.prev,r,t.prev)||ae(r,t.prev,t))||ca(r,t)&&ae(r.prev,r,r.next)>0&&ae(t.prev,t,t.next)>0)}function ae(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ca(r,t){return r.x===t.x&&r.y===t.y}function lu(r,t,e,n){const i=Ns(ae(r,t,e)),s=Ns(ae(r,t,n)),a=Ns(ae(e,n,r)),o=Ns(ae(e,n,t));return!!(i!==s&&a!==o||i===0&&Us(r,e,t)||s===0&&Us(r,n,t)||a===0&&Us(e,r,n)||o===0&&Us(e,t,n))}function Us(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ns(r){return r>0?1:r<0?-1:0}function $0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&lu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Kr(r,t){return ae(r.prev,r,r.next)<0?ae(r,t,r.next)>=0&&ae(r,r.prev,t)>=0:ae(r,t,r.prev)<0||ae(r,r.next,t)<0}function J0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function cu(r,t){const e=new Eo(r.i,r.x,r.y),n=new Eo(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function jc(r,t,e,n){const i=new Eo(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Eo(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q0(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Hr{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Hr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Kc(t),Zc(n,t);let a=t.length;e.forEach(Kc);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Zc(n,e[l]);const o=F0.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Kc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Zc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ha extends _n{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new D,g=new at;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,y=x+n+1,w=x+n+2,A=x+1;o.push(v,y,A),o.push(y,w,A)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $s extends _n{constructor(t=new yo([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ue(i,3)),this.setAttribute("normal",new ue(s,3)),this.setAttribute("uv",new ue(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Hr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Hr.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Hr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],v=x[0]+u,y=x[1]+u,w=x[2]+u;n.push(v,y,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return tv(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const a=e[t.shapes[i]];n.push(a)}return new $s(n,t.curveSegments)}}function tv(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class os extends _n{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const A=w/e;u.x=-t*Math.cos(i+A*s)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+A*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+y,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=h[p][x+1],y=h[p][x],w=h[p+1][x],A=h[p+1][x+1];(p!==0||a>0)&&f.push(v,y,A),(p!==n-1||l<Math.PI)&&f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ie extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ev extends Ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class hu extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ja=new ve,$c=new D,Jc=new D;class nv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iv extends nv{constructor(){super(new Zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class To extends hu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rv extends hu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qc(){return(typeof performance>"u"?Date:performance).now()}class av{constructor(t,e,n=0,i=1/0){this.ray=new Wo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return bo(t,this,n,e),n.sort(th),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)bo(t[i],this,n,e);return n.sort(th),n}}function th(r,t){return r.distance-t.distance}function bo(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)bo(i[s],t,e,!0)}}class eh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);class ov{constructor(t){this.container=t,this.threeRenderer=new Ko({antialias:!0,powerPreference:"high-performance",alpha:!1,precision:"mediump",stencil:!1,depth:!0}),this.threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.threeRenderer.setSize(window.innerWidth,window.innerHeight),this.threeRenderer.outputColorSpace=Te,this.threeRenderer.toneMapping=Ah,this.threeRenderer.toneMappingExposure=1.15,this.threeRenderer.shadowMap.enabled=!0,this.threeRenderer.shadowMap.type=bh,this.container.appendChild(this.threeRenderer.domElement)}resize(t){const e=window.innerWidth,n=window.innerHeight;this.threeRenderer.setSize(e,n),t&&(t.aspect=e/n,e<n?t.fov=68:t.fov=e/n<1.6?62:56,t.updateProjectionMatrix())}render(t,e){this.threeRenderer.render(t,e)}}class lv{constructor(){this.scene=new Wc,this.scene.background=new Ht(988970),this.scene.fog=new Zo(988970,.025),this.createEnvironmentMap()}createEnvironmentMap(){const t=new xo(new Ko({antialias:!1})),e=new Wc;e.background=new Ht(1976635);const n=new To(16777215,2);n.position.set(5,10,5),e.add(n);const i=t.fromScene(e).texture;this.scene.environment=i,t.dispose()}}const nh={type:"change"},Qa={type:"start"},ih={type:"end"},Os=new Wo,rh=new ti,cv=Math.cos(70*gf.DEG2RAD);class hv extends ki{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Tt),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nh),n.update(),s=i.NONE},this.update=function(){const C=new D,rt=new Fi().setFromUnitVectors(t.up,new D(0,1,0)),vt=rt.clone().invert(),ft=new D,Q=new Fi,L=new D,st=2*Math.PI;return function(wt=null){const Et=n.object.position;C.copy(Et).sub(n.target),C.applyQuaternion(rt),o.setFromVector3(C),n.autoRotate&&s===i.NONE&&F(T(wt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Wt=n.minAzimuthAngle,Xt=n.maxAzimuthAngle;isFinite(Wt)&&isFinite(Xt)&&(Wt<-Math.PI?Wt+=st:Wt>Math.PI&&(Wt-=st),Xt<-Math.PI?Xt+=st:Xt>Math.PI&&(Xt-=st),Wt<=Xt?o.theta=Math.max(Wt,Math.min(Xt,o.theta)):o.theta=o.theta>(Wt+Xt)/2?Math.max(Wt,o.theta):Math.min(Xt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(vt),Et.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let le=!1;if(n.zoomToCursor&&A){let de=null;if(n.object.isPerspectiveCamera){const qt=C.length();de=K(qt*c);const me=qt-de;n.object.position.addScaledVector(y,me),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const qt=new D(w.x,w.y,0);qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),le=!0;const me=new D(w.x,w.y,0);me.unproject(n.object),n.object.position.sub(me).add(qt),n.object.updateMatrixWorld(),de=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;de!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(de).add(n.object.position):(Os.origin.copy(n.object.position),Os.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Os.direction))<cv?t.lookAt(n.target):(rh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Os.intersectPlane(rh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),le=!0);return c=1,A=!1,le||ft.distanceToSquared(n.object.position)>a||8*(1-Q.dot(n.object.quaternion))>a||L.distanceToSquared(n.target)>0?(n.dispatchEvent(nh),ft.copy(n.object.position),Q.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",jt),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new eh,l=new eh;let c=1;const h=new D,u=new at,d=new at,f=new at,g=new at,_=new at,m=new at,p=new at,x=new at,v=new at,y=new D,w=new at;let A=!1;const E=[],I={};let M=!1;function T(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function O(C){const rt=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*rt)}function F(C){l.theta-=C}function q(C){l.phi-=C}const P=function(){const C=new D;return function(vt,ft){C.setFromMatrixColumn(ft,0),C.multiplyScalar(-vt),h.add(C)}}(),N=function(){const C=new D;return function(vt,ft){n.screenSpacePanning===!0?C.setFromMatrixColumn(ft,1):(C.setFromMatrixColumn(ft,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(vt),h.add(C)}}(),B=function(){const C=new D;return function(vt,ft){const Q=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;C.copy(L).sub(n.target);let st=C.length();st*=Math.tan(n.object.fov/2*Math.PI/180),P(2*vt*st/Q.clientHeight,n.object.matrix),N(2*ft*st/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(vt*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),N(ft*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(C,rt){if(!n.zoomToCursor)return;A=!0;const vt=n.domElement.getBoundingClientRect(),ft=C-vt.left,Q=rt-vt.top,L=vt.width,st=vt.height;w.x=ft/L*2-1,w.y=-(Q/st)*2+1,y.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function nt(C){u.set(C.clientX,C.clientY)}function it(C){j(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function W(C){g.set(C.clientX,C.clientY)}function Z(C){d.set(C.clientX,C.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const rt=n.domElement;F(2*Math.PI*f.x/rt.clientHeight),q(2*Math.PI*f.y/rt.clientHeight),u.copy(d),n.update()}function lt(C){x.set(C.clientX,C.clientY),v.subVectors(x,p),v.y>0?X(O(v.y)):v.y<0&&Y(O(v.y)),p.copy(x),n.update()}function xt(C){_.set(C.clientX,C.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_),n.update()}function gt(C){j(C.clientX,C.clientY),C.deltaY<0?Y(O(C.deltaY)):C.deltaY>0&&X(O(C.deltaY)),n.update()}function Lt(C){let rt=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),rt=!0;break}rt&&(C.preventDefault(),n.update())}function Dt(C){if(E.length===1)u.set(C.pageX,C.pageY);else{const rt=ut(C),vt=.5*(C.pageX+rt.x),ft=.5*(C.pageY+rt.y);u.set(vt,ft)}}function bt(C){if(E.length===1)g.set(C.pageX,C.pageY);else{const rt=ut(C),vt=.5*(C.pageX+rt.x),ft=.5*(C.pageY+rt.y);g.set(vt,ft)}}function Vt(C){const rt=ut(C),vt=C.pageX-rt.x,ft=C.pageY-rt.y,Q=Math.sqrt(vt*vt+ft*ft);p.set(0,Q)}function k(C){n.enableZoom&&Vt(C),n.enablePan&&bt(C)}function Ae(C){n.enableZoom&&Vt(C),n.enableRotate&&Dt(C)}function St(C){if(E.length==1)d.set(C.pageX,C.pageY);else{const vt=ut(C),ft=.5*(C.pageX+vt.x),Q=.5*(C.pageY+vt.y);d.set(ft,Q)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const rt=n.domElement;F(2*Math.PI*f.x/rt.clientHeight),q(2*Math.PI*f.y/rt.clientHeight),u.copy(d)}function Rt(C){if(E.length===1)_.set(C.pageX,C.pageY);else{const rt=ut(C),vt=.5*(C.pageX+rt.x),ft=.5*(C.pageY+rt.y);_.set(vt,ft)}m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_)}function mt(C){const rt=ut(C),vt=C.pageX-rt.x,ft=C.pageY-rt.y,Q=Math.sqrt(vt*vt+ft*ft);x.set(0,Q),v.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),X(v.y),p.copy(x);const L=(C.pageX+rt.x)*.5,st=(C.pageY+rt.y)*.5;j(L,st)}function Qt(C){n.enableZoom&&mt(C),n.enablePan&&Rt(C)}function Ut(C){n.enableZoom&&mt(C),n.enableRotate&&St(C)}function R(C){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",z)),Bt(C),C.pointerType==="touch"?Nt(C):tt(C))}function S(C){n.enabled!==!1&&(C.pointerType==="touch"?$(C):J(C))}function z(C){Ct(C),E.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(ih),s=i.NONE}function tt(C){let rt;switch(C.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case Hi.DOLLY:if(n.enableZoom===!1)return;it(C),s=i.DOLLY;break;case Hi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;W(C),s=i.PAN}else{if(n.enableRotate===!1)return;nt(C),s=i.ROTATE}break;case Hi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;nt(C),s=i.ROTATE}else{if(n.enablePan===!1)return;W(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Qa)}function J(C){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(C);break;case i.DOLLY:if(n.enableZoom===!1)return;lt(C);break;case i.PAN:if(n.enablePan===!1)return;xt(C);break}}function et(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(C.preventDefault(),n.dispatchEvent(Qa),gt(_t(C)),n.dispatchEvent(ih))}function _t(C){const rt=C.deltaMode,vt={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(rt){case 1:vt.deltaY*=16;break;case 2:vt.deltaY*=100;break}return C.ctrlKey&&!M&&(vt.deltaY*=10),vt}function ht(C){C.key==="Control"&&(M=!0,document.addEventListener("keyup",pt,{passive:!0,capture:!0}))}function pt(C){C.key==="Control"&&(M=!1,document.removeEventListener("keyup",pt,{passive:!0,capture:!0}))}function Tt(C){n.enabled===!1||n.enablePan===!1||Lt(C)}function Nt(C){switch(yt(C),E.length){case 1:switch(n.touches.ONE){case Vi.ROTATE:if(n.enableRotate===!1)return;Dt(C),s=i.TOUCH_ROTATE;break;case Vi.PAN:if(n.enablePan===!1)return;bt(C),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(C),s=i.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(C),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Qa)}function $(C){switch(yt(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;St(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Rt(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qt(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ut(C),n.update();break;default:s=i.NONE}}function jt(C){n.enabled!==!1&&C.preventDefault()}function Bt(C){E.push(C.pointerId)}function Ct(C){delete I[C.pointerId];for(let rt=0;rt<E.length;rt++)if(E[rt]==C.pointerId){E.splice(rt,1);return}}function yt(C){let rt=I[C.pointerId];rt===void 0&&(rt=new at,I[C.pointerId]=rt),rt.set(C.pageX,C.pageY)}function ut(C){const rt=C.pointerId===E[0]?E[1]:E[0];return I[rt]}n.domElement.addEventListener("contextmenu",jt),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",et,{passive:!1}),document.addEventListener("keydown",ht,{passive:!0,capture:!0}),this.update()}}class uv{constructor(t){this.camera=new hn(58,window.innerWidth/window.innerHeight,.1,100),this.defaultPos=new D(0,13,.2),this.defaultLookAt=new D(0,0,0),this.camera.position.copy(this.defaultPos),this.camera.lookAt(this.defaultLookAt),this.controls=new hv(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2.3,this.controls.minDistance=4,this.controls.maxDistance=22,this.controls.target.copy(this.defaultLookAt),this.controls.update()}focusPlayerCorner(t){}zoomInAction(t){}zoomOutReset(t=0){}update(){this.controls&&this.controls.update()}}class dv{constructor(t){this.scene=t;const e=new rv(16777215,.7);this.scene.add(e),this.dirLight=new To(16774634,1.8),this.dirLight.position.set(8,16,10),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=35,this.dirLight.shadow.camera.left=-10,this.dirLight.shadow.camera.right=10,this.dirLight.shadow.camera.top=10,this.dirLight.shadow.camera.bottom=-10,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight);const n=new To(6333946,.6);n.position.set(-10,10,-10),this.scene.add(n)}}const Gn=.85,Re=.2,uu={0:{name:"Red",hex:14034984,css:"#d62828",label:"RED"},1:{name:"Green",hex:2855752,css:"#2b9348",label:"GREEN"},2:{name:"Yellow",hex:16436245,css:"#facc15",label:"YELLOW"},3:{name:"Blue",hex:1914199,css:"#1d3557",label:"BLUE"}},du=[0,8,13,21,26,34,39,47];function ie(r,t,e=Re){const n=(r-7)*Gn,i=(t-7)*Gn;return new D(n,e,i)}const Js={0:[ie(2,2,Re+.05),ie(4,2,Re+.05),ie(2,4,Re+.05),ie(4,4,Re+.05)],1:[ie(10,2,Re+.05),ie(12,2,Re+.05),ie(10,4,Re+.05),ie(12,4,Re+.05)],2:[ie(10,10,Re+.05),ie(12,10,Re+.05),ie(10,12,Re+.05),ie(12,12,Re+.05)],3:[ie(2,10,Re+.05),ie(4,10,Re+.05),ie(2,12,Re+.05),ie(4,12,Re+.05)]},fu=[{col:1,row:6},{col:2,row:6},{col:3,row:6},{col:4,row:6},{col:5,row:6},{col:6,row:5},{col:6,row:4},{col:6,row:3},{col:6,row:2},{col:6,row:1},{col:6,row:0},{col:7,row:0},{col:8,row:0},{col:8,row:1},{col:8,row:2},{col:8,row:3},{col:8,row:4},{col:8,row:5},{col:9,row:6},{col:10,row:6},{col:11,row:6},{col:12,row:6},{col:13,row:6},{col:14,row:6},{col:14,row:7},{col:14,row:8},{col:13,row:8},{col:12,row:8},{col:11,row:8},{col:10,row:8},{col:9,row:8},{col:8,row:9},{col:8,row:10},{col:8,row:11},{col:8,row:12},{col:8,row:13},{col:8,row:14},{col:7,row:14},{col:6,row:14},{col:6,row:13},{col:6,row:12},{col:6,row:11},{col:6,row:10},{col:6,row:9},{col:5,row:8},{col:4,row:8},{col:3,row:8},{col:2,row:8},{col:1,row:8},{col:0,row:8},{col:0,row:7},{col:0,row:6}],fv={0:[{col:1,row:7},{col:2,row:7},{col:3,row:7},{col:4,row:7},{col:5,row:7},{col:6,row:7},{col:7,row:7}],1:[{col:7,row:1},{col:7,row:2},{col:7,row:3},{col:7,row:4},{col:7,row:5},{col:7,row:6},{col:7,row:7}],2:[{col:13,row:7},{col:12,row:7},{col:11,row:7},{col:10,row:7},{col:9,row:7},{col:8,row:7},{col:7,row:7}],3:[{col:7,row:13},{col:7,row:12},{col:7,row:11},{col:7,row:10},{col:7,row:9},{col:7,row:8},{col:7,row:7}]},ks={0:0,1:12,2:25,3:38},to=51;function pu(r){const t=fu[r%52];return ie(t.col,t.row)}function pv(r,t){const e=fv[r],n=Math.min(t,e.length-1),i=e[n];return ie(i.col,i.row)}class mv{constructor(t){this.scene=t,this.boardGroup=new fn,this.boardGroup.name="LudoBoard3D",this.safeStars=[],this.createBoardMaterials(),this.buildWoodenFrame(),this.buildMarbleSurface(),this.buildBaseYards(),this.buildTrackCells(),this.buildCenterTriangles(),this.boardGroup.matrixAutoUpdate=!1,this.boardGroup.updateMatrix(),this.scene.add(this.boardGroup)}createBoardMaterials(){this.woodMaterial=new Ie({color:2824208,roughness:.35,metalness:.15}),this.goldMaterial=new Ie({color:16436245,roughness:.2,metalness:.9}),this.marbleMaterial=new Ie({color:16777215,roughness:.1,metalness:.05}),this.playerMaterials={0:new Ie({color:14034984,roughness:.2}),1:new Ie({color:2855752,roughness:.2}),2:new Ie({color:16436245,roughness:.2}),3:new Ie({color:1914199,roughness:.2})},this.whiteTileMaterial=new Ie({color:16777215,roughness:.1,metalness:.05}),this.gridBorderMaterial=new Rr({color:0}),this.sharedBoxGeo=new dn(Gn-.03,.04,Gn-.03)}buildWoodenFrame(){const t=15*Gn+.8,e=.5,n=new dn(t,e,t),i=new Jt(n,this.woodMaterial);i.position.y=-e/2,i.receiveShadow=!0,i.matrixAutoUpdate=!1,i.updateMatrix(),this.boardGroup.add(i)}buildMarbleSurface(){const t=15*Gn,e=new dn(t,.2,t),n=new Jt(e,this.marbleMaterial);n.position.y=.1,n.receiveShadow=!0,n.matrixAutoUpdate=!1,n.updateMatrix(),this.boardGroup.add(n)}buildBaseYards(){[{col:3,row:3,playerIdx:0},{col:11,row:3,playerIdx:1},{col:11,row:11,playerIdx:2},{col:3,row:11,playerIdx:3}].forEach(({col:e,row:n,playerIdx:i})=>{const s=ie(e,n,.21),a=6*Gn,o=new dn(a,.05,a),l=new Jt(o,this.playerMaterials[i]);l.position.copy(s),l.receiveShadow=!0,l.matrixAutoUpdate=!1,l.updateMatrix(),this.boardGroup.add(l);const c=4*Gn,h=new dn(c,.06,c),u=new Jt(h,this.whiteTileMaterial);u.position.set(s.x,s.y+.01,s.z),u.receiveShadow=!0,u.matrixAutoUpdate=!1,u.updateMatrix(),this.boardGroup.add(u),[{c:e-1,r:n-1},{c:e+1,r:n-1},{c:e-1,r:n+1},{c:e+1,r:n+1}].forEach(f=>{const g=ie(f.c,f.r,.24);this.addBaseStarBadge(g,this.playerMaterials[i])})})}addBaseStarBadge(t,e){const n=new fn;n.position.set(t.x,t.y+.01,t.z);const i=new yo,s=5,a=.28,o=.12;for(let h=0;h<s*2;h++){const u=h%2===0?a:o,d=h/(s*2)*Math.PI*2-Math.PI/2,f=Math.cos(d)*u,g=Math.sin(d)*u;h===0?i.moveTo(f,g):i.lineTo(f,g)}i.closePath();const l=new $s(i),c=new Jt(l,e);c.rotation.x=-Math.PI/2,n.add(c),n.matrixAutoUpdate=!1,n.updateMatrix(),this.boardGroup.add(n)}buildTrackCells(){fu.forEach((t,e)=>{const n=ie(t.col,t.row,.21);let i=this.whiteTileMaterial;e===0?i=this.playerMaterials[0]:e===12?i=this.playerMaterials[1]:e===25?i=this.playerMaterials[2]:e===38&&(i=this.playerMaterials[3]);const s=new Jt(this.sharedBoxGeo,i);s.position.copy(n),s.receiveShadow=!0,s.matrixAutoUpdate=!1,s.updateMatrix(),this.boardGroup.add(s)}),[0,1,2,3].forEach(t=>{for(let e=0;e<6;e++){let n=7,i=7;t===0?n=1+e:t===1?i=1+e:t===2?n=13-e:t===3&&(i=13-e);const s=ie(n,i,.22),a=new Jt(this.sharedBoxGeo,this.playerMaterials[t]);a.position.copy(s),a.receiveShadow=!0,a.matrixAutoUpdate=!1,a.updateMatrix(),this.boardGroup.add(a)}})}buildCenterTriangles(){const t=ie(7,7,.23),e=new fn;e.position.copy(t);const n=3*Gn/2;[{color:14034984,rot:0},{color:2855752,rot:Math.PI/2},{color:16436245,rot:Math.PI},{color:1914199,rot:-Math.PI/2}].forEach(({color:s,rot:a})=>{const o=new yo;o.moveTo(0,0),o.lineTo(-n,-n),o.lineTo(-n,n),o.closePath();const l=new $s(o),c=new Ie({color:s,roughness:.2}),h=new Jt(l,c);h.rotation.x=-Math.PI/2,h.rotation.z=a,e.add(h)}),e.matrixAutoUpdate=!1,e.updateMatrix(),this.boardGroup.add(e)}}class _v{constructor(t){this.boardBuilder=t,this.time=0}update(t){this.time+=t*3,this.boardBuilder.safeStars&&this.boardBuilder.safeStars.forEach((e,n)=>{e.rotation.y=this.time*.5+n,e.position.y=.24+Math.sin(this.time*2+n)*.015}),this.boardBuilder.centerCrown&&(this.boardBuilder.centerCrown.rotation.y=this.time*.4)}}class gv{constructor(t,e){this.playerIdx=t,this.tokenIdx=e,this.id=`pawn_${t}_${e}`,this.meshGroup=new fn,this.meshGroup.name=this.id,this.isSelectable=!1,this.isHovered=!1,this.trackIndex=-1,this.homeStepIndex=-1,this.isFinished=!1,this.buildTokenMesh()}buildTokenMesh(){const t=uu[this.playerIdx],e=new tl(.28,.32,.1,24),n=new Ie({color:14251782,roughness:.2,metalness:.9,envMapIntensity:1.5}),i=new Jt(e,n);i.position.y=.05,i.castShadow=!0,i.receiveShadow=!0,this.meshGroup.add(i);const s=[];s.push(new at(.26,.08)),s.push(new at(.22,.25)),s.push(new at(.12,.45)),s.push(new at(.16,.55)),s.push(new at(.2,.65)),s.push(new at(.15,.72)),s.push(new at(0,.75));const a=new Qo(s,24);this.bodyMaterial=new ev({color:t.hex,roughness:.1,metalness:.1,transmission:.7,thickness:.3,ior:1.4,transparent:!0,opacity:.9,clearcoat:1,clearcoatRoughness:.1});const o=new Jt(a,this.bodyMaterial);o.castShadow=!0,o.receiveShadow=!0,this.meshGroup.add(o);const l=new os(.1,16,16);this.coreMaterial=new Ie({color:t.hex,emissive:t.hex,emissiveIntensity:.6,roughness:.1});const c=new Jt(l,this.coreMaterial);c.position.y=.35,this.meshGroup.add(c);const h=new ha(.35,.45,32);this.haloMaterial=new Rr({color:16777215,side:yn,transparent:!0,opacity:0}),this.haloMesh=new Jt(h,this.haloMaterial),this.haloMesh.rotation.x=-Math.PI/2,this.haloMesh.position.y=.01,this.meshGroup.add(this.haloMesh)}setSelectable(t){this.isSelectable=t,t?(this.haloMaterial.opacity=.9,this.haloMaterial.color.setHex(16777215),this.coreMaterial.emissiveIntensity=1.2):(this.haloMaterial.opacity=0,this.coreMaterial.emissiveIntensity=.6)}setPosition(t){this.meshGroup.position.copy(t)}updateIdle(t){this.isSelectable&&(this.meshGroup.position.y+=Math.sin(t*5+this.tokenIdx)*.003,this.haloMesh.rotation.z=t*2)}}function Hn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var en={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$r={duration:.5,overwrite:!1,delay:0},el,Ce,ee,pn=1e8,$t=1/pn,wo=Math.PI*2,vv=wo/4,xv=0,_u=Math.sqrt,Mv=Math.cos,yv=Math.sin,we=function(t){return typeof t=="string"},he=function(t){return typeof t=="function"},qn=function(t){return typeof t=="number"},nl=function(t){return typeof t>"u"},Dn=function(t){return typeof t=="object"},He=function(t){return t!==!1},il=function(){return typeof window<"u"},Fs=function(t){return he(t)||we(t)},gu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Oe=Array.isArray,Sv=/random\([^)]+\)/g,Ev=/,\s*/g,sh=/(?:-?\.?\d|\.)+/gi,vu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xu=/[+-]=-?[.\d]+/,Tv=/[^,'"\[\]\s]+/gi,bv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,se,wn,Ao,rl,nn={},Qs={},Mu,yu=function(t){return(Qs=yr(t,nn))&&Ye},sl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Jr=function(t,e){return!e&&console.warn(t)},Su=function(t,e){return t&&(nn[t]=e)&&Qs&&(Qs[t]=e)||nn},Qr=function(){return 0},wv={suppressEvents:!0,isStart:!0,kill:!1},Gs={suppressEvents:!0,kill:!1},Av={suppressEvents:!0},al={},ci=[],Ro={},Eu,Ze={},no={},ah=30,Hs=[],ol="",ll=function(t){var e=t[0],n,i;if(Dn(e)||he(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Hs.length;i--&&!Hs[i].targetTest(e););n=Hs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Xu(t[i],n)))||t.splice(i,1);return t},Di=function(t){return t._gsap||ll(mn(t))[0]._gsap},Tu=function(t,e,n){return(n=t[e])&&he(n)?t[e]():nl(n)&&t.getAttribute&&t.getAttribute(e)||n},Ve=function(t,e){return(t=t.split(",")).forEach(e)||t},pe=function(t){return Math.round(t*1e5)/1e5||0},re=function(t){return Math.round(t*1e7)/1e7||0},pr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Rv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ta=function(){var t=ci.length,e=ci.slice(0),n,i;for(Ro={},ci.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cl=function(t){return!!(t._initted||t._startAt||t.add)},bu=function(t,e,n,i){ci.length&&!Ce&&ta(),t.render(e,n,!!(Ce&&e<0&&cl(t))),ci.length&&!Ce&&ta()},wu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Tv).length<2?e:we(t)?t.trim():t},Au=function(t){return t},rn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Cv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},yr=function(t,e){for(var n in e)t[n]=e[n];return t},oh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Dn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ea=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Vr=function(t){var e=t.parent||se,n=t.keyframes?Cv(Oe(t.keyframes)):rn;if(He(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Pv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ru=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ua=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},di=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ii=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Lv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Co=function(t,e,n,i){return t._startAt&&(Ce?t._startAt.revert(Gs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Dv=function r(t){return!t||t._ts&&r(t.parent)},lh=function(t){return t._repeat?Sr(t._tTime,t=t.duration()+t._rDelay)*t:0},Sr=function(t,e){var n=Math.floor(t=re(t/e));return t&&n===t?n-1:n},na=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},da=function(t){return t._end=re(t._start+(t._tDur/Math.abs(t._ts||t._rts||$t)||0))},fa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=re(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),da(t),n._dirty||Ii(n,t)),t},Cu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=na(t.rawTime(),e),(!e._dur||ls(0,e.totalDuration(),n)-e._tTime>$t)&&e.render(n,!0)),Ii(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-$t}},Cn=function(t,e,n,i){return e.parent&&di(e),e._start=re((qn(n)?n:n||t!==se?on(t,n,e):t._time)+e._delay),e._end=re(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ru(t,e,"_first","_last",t._sort?"_start":0),Po(e)||(t._recent=e),i||Cu(t,e),t._ts<0&&fa(t,t._tTime),t},Pu=function(t,e){return(nn.ScrollTrigger||sl("scrollTrigger",e))&&nn.ScrollTrigger.create(e,t)},Lu=function(t,e,n,i,s){if(ul(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Eu!==$e.frame)return ci.push(t),t._lazy=[s,i],1},Iv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Po=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Uv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Iv(t)&&!(!t._initted&&Po(t))||(t._ts<0||t._dp._ts<0)&&!Po(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ls(0,t._tDur,e),h=Sr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Sr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ce||i||t._zTime===$t||!e&&t._zTime){if(!t._initted&&Lu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?$t:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Co(t,e,n,!0),t._onUpdate&&!n&&Je(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Je(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&di(t,1),!n&&!Ce&&(Je(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Nv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Er=function(t,e,n,i){var s=t._repeat,a=re(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:re(a*(s+1)+t._rDelay*s):a,o>0&&!i&&fa(t,t._tTime=t._tDur*o),t.parent&&da(t),n||Ii(t.parent,t),t},ch=function(t){return t instanceof ke?Ii(t):Er(t,t._dur)},Ov={_start:0,endTime:Qr,totalDuration:Qr},on=function r(t,e,n){var i=t.labels,s=t._recent||Ov,a=t.duration()>=pn?s.endTime(!1):t._dur,o,l,c;return we(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Oe(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Wr=function(t,e,n){var i=qn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=He(l.vars.inherit)&&l.parent;a.immediateRender=He(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ge(e[0],a,e[s+1])},mi=function(t,e){return t||t===0?e(t):e},ls=function(t,e,n){return n<t?t:n>e?e:n},Ue=function(t,e){return!we(t)||!(e=bv.exec(t))?"":e[1]},Fv=function(t,e,n){return mi(n,function(i){return ls(t,e,i)})},Lo=[].slice,Du=function(t,e){return t&&Dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Dn(t[0]))&&!t.nodeType&&t!==wn},Bv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return we(i)&&!e||Du(i,1)?(s=n).push.apply(s,mn(i)):n.push(i)})||n},mn=function(t,e,n){return ee&&!e&&ee.selector?ee.selector(t):we(t)&&!n&&(Ao||!Tr())?Lo.call((e||rl).querySelectorAll(t),0):Oe(t)?Bv(t,n):Du(t)?Lo.call(t,0):t?[t]:[]},Do=function(t){return t=mn(t)[0]||Jr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return mn(e,n.querySelectorAll?n:n===t?Jr("Invalid scope")||rl.createElement("div"):t)}},Iu=function(t){return t.sort(function(){return .5-Math.random()})},Uu=function(t){if(he(t))return t;var e=Dn(t)?t:{each:t},n=Ui(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return we(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=a[_],p,x,v,y,w,A,E,I,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,pn])[1],!M){for(E=-pn;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*h-.5:i%M,x=M===pn?0:l?_*u/M-.5:i/M|0,E=0,I=pn,A=0;A<_;A++)v=A%M-p,y=x-(A/M|0),m[A]=w=c?Math.abs(c==="y"?y:v):_u(v*v+y*y),w>E&&(E=w),w<I&&(I=w);i==="random"&&Iu(m),m.max=E-I,m.min=I,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ue(e.amount||e.each)||0,n=n&&_<0?$v(n):n}return _=(m[d]-m.min)/m.max||0,re(m.b+(n?n(_):_)*m.v)+m.u}},Io=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=re(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(qn(n)?0:Ue(n))}},Nu=function(t,e){var n=Oe(t),i,s;return!n&&Dn(t)&&(i=n=t.radius||pn,t.values?(t=mn(t.values),(s=!qn(t[0]))&&(i*=i)):t=Io(t.increment)),mi(e,n?he(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||qn(a)?h:h+Ue(a)}:Io(t))},Ou=function(t,e,n,i){return mi(Oe(t)?!e:n===!0?!!(n=0):!i,function(){return Oe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},zv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},kv=function(t,e){return function(n){return t(parseFloat(n))+(e||Ue(n))}},Gv=function(t,e,n){return Bu(t,e,0,1,n)},Fu=function(t,e,n){return mi(n,function(i){return t[~~e(i)]})},Hv=function r(t,e,n){var i=e-t;return Oe(t)?Fu(t,r(0,t.length),e):mi(n,function(s){return(i+(s-t)%i)%i+t})},Vv=function r(t,e,n){var i=e-t,s=i*2;return Oe(t)?Fu(t,r(0,t.length-1),e):mi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ts=function(t){return t.replace(Sv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Ev);return Ou(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Bu=function(t,e,n,i,s){var a=e-t,o=i-n;return mi(s,function(l){return n+((l-t)/a*o||0)})},Wv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=we(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Oe(t)&&!Oe(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=yr(Oe(t)?[]:{},t));if(!h){for(l in e)hl.call(o,t,l,"get",e[l]);s=function(g){return pl(g,o)||(a?t.p:t)}}}return mi(n,s)},hh=function(t,e,n){var i=t.labels,s=pn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Je=function(t,e,n){var i=t.vars,s=i[e],a=ee,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ci.length&&ta(),o&&(ee=o),h=l?s.apply(c,l):s.call(c),ee=a,h},Fr=function(t){return di(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ce),t.progress()<1&&Je(t,"onInterrupt"),t},ur,zu=[],ku=function(t){if(t)if(t=!t.name&&t.default||t,il()||t.headless){var e=t.name,n=he(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Qr,render:pl,add:hl,kill:ox,modifier:ax,rawVars:0},a={targetTest:0,get:0,getSetter:fl,aliases:{},register:0};if(Tr(),t!==i){if(Ze[e])return;rn(i,rn(ea(t,s),a)),yr(i.prototype,yr(s,ea(t,a))),Ze[i.prop=e]=i,t.targetTest&&(Hs.push(i),al[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Su(e,i),t.register&&t.register(Ye,i,We)}else zu.push(t)},Zt=255,Br={aqua:[0,Zt,Zt],lime:[0,Zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Zt],navy:[0,0,128],white:[Zt,Zt,Zt],olive:[128,128,0],yellow:[Zt,Zt,0],orange:[Zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Zt,0,0],pink:[Zt,192,203],cyan:[0,Zt,Zt],transparent:[Zt,Zt,Zt,0]},io=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Zt+.5|0},Gu=function(t,e,n){var i=t?qn(t)?[t>>16,t>>8&Zt,t&Zt]:0:Br.black,s,a,o,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Br[t])i=Br[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Zt,i&Zt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Zt,t&Zt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(sh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=io(l+1/3,s,a),i[1]=io(l,s,a),i[2]=io(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(vu),n&&i.length<4&&(i[3]=1),i}else i=t.match(sh)||Br.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Zt,a=i[1]/Zt,o=i[2]/Zt,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Hu=function(t){var e=[],n=[],i=-1;return t.split(hi).forEach(function(s){var a=s.match(hr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},uh=function(t,e,n){var i="",s=(t+i).match(hi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Gu(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Hu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(hi,"1").split(hr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(hi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},hi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Br)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Xv=/hsl[a]?\(/,Vu=function(t){var e=t.join(" "),n;if(hi.lastIndex=0,hi.test(e))return n=Xv.test(e),t[1]=uh(t[1],n),t[0]=uh(t[0],n,Hu(t[1])),!0},es,$e=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,x=m===!0,v,y,w,A;if((p>t||p<0)&&(n+=p-e),i+=p,w=i-n,v=w-a,(v>0||x)&&(A=++u.frame,d=w-u.time*1e3,u.time=w=w/1e3,a+=v+(v>=s?4:s-v),y=1),x||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](w,d,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Mu&&(!Ao&&il()&&(wn=Ao=window,rl=wn.document||{},nn.gsap=Ye,(wn.gsapVersions||(wn.gsapVersions=[])).push(Ye.version),yu(Qs||wn.GreenSockGlobals||!wn.gsap&&wn||{}),zu.forEach(ku)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},es=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),es=0,c=Qr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,x){var v=p?function(y,w,A,E){m(y,w,A,E),u.remove(v)}:m;return u.remove(m),o[x?"unshift":"push"](v),Tr(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Tr=function(){return!es&&$e.wake()},Yt={},Yv=/^[\d.\-M][\d.\-,\s]/,qv=/["']/g,jv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(qv,"").trim():+c,i=l.substr(o+1).trim();return e},Kv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Zv=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[jv(e[1])]:Kv(t).split(",").map(wu)):Yt._CE&&Yv.test(t)?Yt._CE("",t):n},$v=function(t){return function(e){return 1-t(1-e)}},Ui=function(t,e){return t&&(he(t)?t:Yt[t]||Zv(t))||e},Gi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Ve(t,function(o){Yt[o]=nn[o]=s,Yt[a=o.toLowerCase()]=n;for(var l in s)Yt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Yt[o+"."+l]=s[l]}),s},Wu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ro=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/wo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*yv((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Wu(o);return s=wo/s,l.config=function(c,h){return r(t,c,h)},l},so=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Wu(n);return i.config=function(s){return r(t,s)},i};Ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Gi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Gi("Elastic",ro("in"),ro("out"),ro());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Gi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Gi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gi("Circ",function(r){return-(_u(1-r*r)-1)});Gi("Sine",function(r){return r===1?1:-Mv(r*vv)+1});Gi("Back",so("in"),so("out"),so());Yt.SteppedEase=Yt.steps=nn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-$t;return function(o){return((i*ls(0,a,o)|0)+s)*n}}};$r.ease=Yt["quad.out"];Ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ol+=r+","+r+"Params,"});var Xu=function(t,e){this.id=xv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Tu,this.set=e?e.getSetter:fl},ns=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Er(this,+e.duration,1,1),this.data=e.data,ee&&(this._ctx=ee,ee.data.push(this)),es||$e.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Tr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fa(this,n),!s._dp||s.parent||Cu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$t||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Sr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-$t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?na(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$t?0:this._rts,this.totalTime(ls(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),da(this),Lv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=re(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Cn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(He(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?na(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Av);var i=Ce;return Ce=n,cl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ce=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ch(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ch(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(on(this,n),He(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,He(i)),this._dur||(this._zTime=-$t),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$t:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$t,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$t)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=he(n)?n:Au,l=function(){var h=i.then;i.then=null,s&&s(),he(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Fr(this)},r}();rn(ns.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$t,_prom:0,_ps:!1,_rts:1});var ke=function(r){mu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=He(n.sortChildren),se&&Cn(n.parent||se,Hn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Pu(Hn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Wr(0,arguments,this),this},e.from=function(i,s,a){return Wr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Wr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Vr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ge(i,s,on(this,a),1),this},e.call=function(i,s,a){return Cn(this,ge.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ge(i,a,on(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Vr(a).immediateRender=He(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Vr(o).immediateRender=He(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:re(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,x,v,y,w,A,E;if(this!==se&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,y=this._start,v=this._ts,p=!v,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=re(h%m),h===l?(_=this._repeat,d=c):(w=re(h/m),_=~~w,_&&_===w&&(d=c,_--),d>c&&(d=c)),w=Sr(this._tTime,m),!o&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(d=c-d,E=1),_!==w&&!this._lock){var I=A&&w&1,M=I===(A&&_&1);if(_<w&&(I=!I),o=I?0:h%c?c:h,this._lock=1,this.render(o||(E?0:re(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Je(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Nv(this,re(o),re(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!w&&(Je(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=-$t);break}}f=g}else{f=this._last;for(var T=i<0?i:d;f;){if(g=f._prev,(f._act||T<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,s,a||Ce&&cl(f)),d!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=T?-$t:$t);break}}f=g}}if(x&&!s&&(this.pause(),x.render(d>=o?0:-$t)._zTime=d>=o?1:-1,this._ts))return this._start=y,da(this),this.render(i,s,a);this._onUpdate&&!s&&Je(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&di(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Je(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(qn(s)||(s=on(this,s,i)),!(i instanceof ns)){if(Oe(i))return i.forEach(function(o){return a.add(o,s)}),this;if(we(i))return this.addLabel(i,s);if(he(i))i=ge.delayedCall(0,i);else return this}return this!==i?Cn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ge?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return we(i)?this.removeLabel(i):he(i)?this.killTweensOf(i):(i.parent===this&&ua(this,i),i===this._recent&&(this._recent=this._last),Ii(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=re($e.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=on(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ge.delayedCall(0,s||Qr,a);return o.data="isPause",this._hasPause=1,Cn(this,o,on(this,i))},e.removePause=function(i){var s=this._first;for(i=on(this,i);s;)s._start===i&&s.data==="isPause"&&di(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ii!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=mn(i),l=this._first,c=qn(s),h;l;)l instanceof ge?Rv(l._targets,o)&&(c?(!ii||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=on(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=ge.to(a,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||$t,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Er(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,rn({startAt:{time:on(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),hh(this,on(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),hh(this,on(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$t)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=re(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ii(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ii(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=pn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Cn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=re(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Er(a,a===se&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(se._ts&&(bu(se,na(i,se)),Eu=$e.frame),$e.frame>=ah){ah+=en.autoSleep||120;var s=se._first;if((!s||!s._ts)&&en.autoSleep&&$e._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$e.sleep()}}},t}(ns);rn(ke.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jv=function(t,e,n,i,s,a,o){var l=new We(this._pt,t,e,0,1,$u,null,s),c=0,h=0,u,d,f,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ts(i)),a&&(x=[n,i],a(x,t,e),n=x[0],i=x[1]),d=n.match(eo)||[];u=eo.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?pr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=eo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(xu.test(i)||p)&&(l.e=0),this._pt=l,l},hl=function(t,e,n,i,s,a,o,l,c,h){he(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:he(u)?c?t[e.indexOf("set")||!he(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=he(u)?c?ix:Ku:dl,g;if(we(i)&&(~i.indexOf("random(")&&(i=ts(i)),i.charAt(1)==="="&&(g=pr(d,i)+(Ue(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Uo)return!isNaN(d*i)&&i!==""?(g=new We(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?sx:Zu,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&sl(e,i),Jv.call(this,t,e,d,i,f,l||en.stringFilter,c))},Qv=function(t,e,n,i,s){if(he(t)&&(t=Xr(t,s,e,n,i)),!Dn(t)||t.style&&t.nodeType||Oe(t)||gu(t))return we(t)?Xr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Xr(t[o],s,e,n,i);return a},Yu=function(t,e,n,i,s,a){var o,l,c,h;if(Ze[t]&&(o=new Ze[t]).init(s,o.rawVars?e[t]:Qv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new We(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ur))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ii,Uo,ul=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!el,y=t.timeline,w=i.easeReverse||u,A,E,I,M,T,O,F,q,P,N,B,X,Y;if(y&&(!d||!s)&&(s="none"),t._ease=Ui(s,$r.ease),t._rEase=w&&(Ui(w)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||d&&!i.stagger){if(q=m[0]?Di(m[0]).harness:0,X=q&&i[q.prop],A=ea(i,al),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?Gs:wv),_._lazy=0),a){if(di(t._startAt=ge.set(m,rn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&He(l),startAt:null,delay:0,onUpdate:c&&function(){return Je(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce||!o&&!f)&&t._startAt.revert(Gs),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),I=rn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&He(l),immediateRender:o,stagger:0,parent:p},A),X&&(I[q.prop]=X),di(t._startAt=ge.set(m,I)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce?t._startAt.revert(Gs):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,$t,$t);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&He(l)||l&&!g,E=0;E<m.length;E++){if(T=m[E],F=T._gsap||ll(m)[E]._gsap,t._ptLookup[E]=N={},Ro[F.id]&&ci.length&&ta(),B=x===m?E:x.indexOf(T),q&&(P=new q).init(T,X||A,t,B,x)!==!1&&(t._pt=M=new We(t._pt,T,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(j){N[j]=M}),P.priority&&(O=1)),!q||X)for(I in A)Ze[I]&&(P=Yu(I,A,t,B,T,x))?P.priority&&(O=1):N[I]=M=hl.call(t,T,I,"get",A[I],B,x,0,i.stringFilter);t._op&&t._op[E]&&t.kill(T,t._op[E]),v&&t._pt&&(ii=t,se.killTweensOf(T,N,t.globalTime(e)),Y=!t.parent,ii=0),t._pt&&l&&(Ro[F.id]=1)}O&&Ju(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,d&&e<=0&&y.render(pn,!0,!0)},tx=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Uo=1,t.vars[e]="+=0",ul(t,o),Uo=0,l?Jr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=pe(n)+Ue(u.e)),u.b&&(u.b=h.s+Ue(u.b))},ex=function(t,e){var n=t[0]?Di(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=yr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},nx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Oe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Xr=function(t,e,n,i,s){return he(t)?t.call(e,n,i,s):we(t)&&~t.indexOf("random(")?ts(t):t},qu=ol+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ju={};Ve(qu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ju[r]=1});var ge=function(r){mu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Vr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||se,x=(Oe(n)||gu(n)?qn(n[0]):"length"in i)?[n]:mn(n),v,y,w,A,E,I,M,T;if(o._targets=x.length?ll(x):Jr("GSAP target "+n+" not found. https://gsap.com",!en.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Fs(c)||Fs(h)){i=o.vars;var O=i.easeReverse||i.yoyoEase;if(v=o.timeline=new ke({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),v.kill(),v.parent=v._dp=Hn(o),v._start=0,d||Fs(c)||Fs(h)){if(A=x.length,M=d&&Uu(d),Dn(d))for(E in d)~qu.indexOf(E)&&(T||(T={}),T[E]=d[E]);for(y=0;y<A;y++)w=ea(i,ju),w.stagger=0,O&&(w.easeReverse=O),T&&yr(w,T),I=x[y],w.duration=+Xr(c,Hn(o),y,I,x),w.delay=(+Xr(h,Hn(o),y,I,x)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),v.to(I,w,M?M(y,I,x):0),v._ease=Yt.none;v.duration()?c=h=0:o.timeline=0}else if(g){Vr(rn(v.vars.defaults,{ease:"none"})),v._ease=Ui(g.ease||i.ease||"none");var F=0,q,P,N;if(Oe(g))g.forEach(function(B){return v.to(x,B,">")}),v.duration();else{w={};for(E in g)E==="ease"||E==="easeEach"||nx(E,g[E],w,g.easeEach);for(E in w)for(q=w[E].sort(function(B,X){return B.t-X.t}),F=0,y=0;y<q.length;y++)P=q[y],N={ease:P.e,duration:(P.t-(y?q[y-1].t:0))/100*c},N[E]=P.v,v.to(x,N,F),F+=N.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!el&&(ii=Hn(o),se.killTweensOf(x),ii=0),Cn(p,Hn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===re(p._time)&&He(u)&&Dv(Hn(o))&&p.data!=="nested")&&(o._tTime=-$t,o.render(Math.max(0,-h)||0)),m&&Pu(Hn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-$t&&!h?l:i<$t?0:i,d,f,g,_,m,p,x,v;if(!c)Uv(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(d=re(u%_),u===l?(g=this._repeat,d=c):(m=re(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=Sr(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(re(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Lu(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=d<o;if(y!==this._inv){var w=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(Je(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Co(this,i,s,a),Je(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Je(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Co(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&di(this,1),!s&&!(h&&!o)&&(u||o||p)&&(Je(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){es||$e.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ul(this,c),h=this._ease(c/this._dur),tx(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(fa(this,0),this.parent||Ru(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ce),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ii&&ii.vars.overwrite!==!0)._first||Fr(this),this.parent&&a!==this.timeline.totalDuration()&&Er(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?mn(i):o,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&Pv(o,l))return s==="all"&&(this._pt=0),Fr(this);for(u=this._op=this._op||[],s!=="all"&&(we(s)&&(_={},Ve(s,function(x){return _[x]=1}),s=_),s=ex(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ua(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Fr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Wr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Wr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return se.killTweensOf(i,s,a)},t}(ns);rn(ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ve("staggerTo,staggerFrom,staggerFromTo",function(r){ge[r]=function(){var t=new ke,e=Lo.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var dl=function(t,e,n){return t[e]=n},Ku=function(t,e,n){return t[e](n)},ix=function(t,e,n,i){return t[e](i.fp,n)},rx=function(t,e,n){return t.setAttribute(e,n)},fl=function(t,e){return he(t[e])?Ku:nl(t[e])&&t.setAttribute?rx:dl},Zu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},sx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},$u=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},pl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ax=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},ox=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ua(this,e,"_pt"):e.dep||(n=1),e=i;return!n},lx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ju=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},We=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Zu,this.d=l||this,this.set=c||dl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=lx,this.m=n,this.mt=s,this.tween=i},r}();Ve(ol+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return al[r]=1});nn.TweenMax=nn.TweenLite=ge;nn.TimelineLite=nn.TimelineMax=ke;se=new ke({sortChildren:!1,defaults:$r,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});en.stringFilter=Vu;var Ni=[],Vs={},cx=[],dh=0,hx=0,ao=function(t){return(Vs[t]||cx).map(function(e){return e()})},No=function(){var t=Date.now(),e=[];t-dh>2&&(ao("matchMediaInit"),Ni.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=wn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ao("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),dh=t,ao("matchMedia"))},Qu=function(){function r(e,n){this.selector=n&&Do(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){he(n)&&(s=i,i=n,n=he);var a=this,o=function(){var c=ee,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Do(s)),ee=a,u=i.apply(a,arguments),he(u)&&a._r.push(u),ee=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===he?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ee;ee=null,n(this),ee=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ke?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ge)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ni.length;a--;)Ni[a].id===this.id&&Ni.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),ux=function(){function r(e){this.contexts=[],this.scope=e,ee&&ee.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Dn(n)||(n={matches:n});var a=new Qu(0,s||this.scope),o=a.conditions={},l,c,h;ee&&!a.selector&&(a.selector=ee.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=wn.matchMedia(n[c]),l&&(Ni.indexOf(a)<0&&Ni.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(No):l.addEventListener("change",No)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ia={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ku(i)})},timeline:function(t){return new ke(t)},getTweensOf:function(t,e){return se.getTweensOf(t,e)},getProperty:function(t,e,n,i){we(t)&&(t=mn(t)[0]);var s=Di(t||{}).get,a=n?Au:wu;return n==="native"&&(n=""),t&&(e?a((Ze[e]&&Ze[e].get||s)(t,e,n,i)):function(o,l,c){return a((Ze[o]&&Ze[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=mn(t),t.length>1){var i=t.map(function(h){return Ye.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=Ze[e],o=Di(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;ur._pt=0,u.init(t,n?h+n:h,ur,0,[t]),u.render(1,u),ur._pt&&pl(1,ur)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Ye.to(t,rn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return se.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ui(t.ease,$r.ease)),oh($r,t||{})},config:function(t){return oh(en,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ze[o]&&!nn[o]&&Jr(e+" effect requires "+o+" plugin.")}),no[e]=function(o,l,c){return n(mn(o),rn(l||{},s),c)},a&&(ke.prototype[e]=function(o,l,c){return this.add(no[e](o,Dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Yt[t]=Ui(e)},parseEase:function(t,e){return arguments.length?Ui(t,e):Yt},getById:function(t){return se.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ke(t),i,s;for(n.smoothChildTiming=He(t.smoothChildTiming),se.remove(n),n._dp=0,n._time=n._tTime=se._time,i=se._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ge&&i.vars.onComplete===i._targets[0]))&&Cn(n,i,i._start-i._delay),i=s;return Cn(se,n,0),n},context:function(t,e){return t?new Qu(t,e):ee},matchMedia:function(t){return new ux(t)},matchMediaRefresh:function(){return Ni.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||No()},addEventListener:function(t,e){var n=Vs[t]||(Vs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Vs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Hv,wrapYoyo:Vv,distribute:Uu,random:Ou,snap:Nu,normalize:Gv,getUnit:Ue,clamp:Fv,splitColor:Gu,toArray:mn,selector:Do,mapRange:Bu,pipe:zv,unitize:kv,interpolate:Wv,shuffle:Iu},install:yu,effects:no,ticker:$e,updateRoot:ke.updateRoot,plugins:Ze,globalTimeline:se,core:{PropTween:We,globals:Su,Tween:ge,Timeline:ke,Animation:ns,getCache:Di,_removeLinkedListItem:ua,reverting:function(){return Ce},context:function(t){return t&&ee&&(ee.data.push(t),t._ctx=ee),ee},suppressOverwrites:function(t){return el=t}}};Ve("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ia[r]=ge[r]});$e.add(ke.updateRoot);ur=ia.to({},{duration:0});var dx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},fx=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=dx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},oo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(we(s)&&(l={},Ve(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}fx(o,s)}}}},Ye=ia.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},oo("roundProps",Io),oo("modifiers"),oo("snap",Nu))||ia;ge.version=ke.version=Ye.version="3.15.0";Mu=1;il()&&Tr();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fh,ri,mr,ml,Ri,ph,_l,px=function(){return typeof window<"u"},jn={},bi=180/Math.PI,_r=Math.PI/180,ar=Math.atan2,mh=1e8,gl=/([A-Z])/g,mx=/(left|right|width|margin|padding|x)/i,_x=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Mx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},td=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ed=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yx=function(t,e,n){return t.style[e]=n},Sx=function(t,e,n){return t.style.setProperty(e,n)},Ex=function(t,e,n){return t._gsap[e]=n},Tx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},bx=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},wx=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},oe="transform",Xe=oe+"Origin",Ax=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in jn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Pn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Vn(i,o)}):this.tfm[t]=a.x?a[t]:Vn(i,t),t===Xe&&(this.tfm.zOrigin=a.zOrigin);else return Pn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(oe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xe,e,"")),t=oe}(s||e)&&this.props.push(t,e,s[t])},nd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Rx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(gl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=_l(),(!s||!s.isStart)&&!n[oe]&&(nd(n),i.zOrigin&&n[Xe]&&(n[Xe]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},id=function(t,e){var n={target:t,props:[],revert:Rx,save:Ax};return t._gsap||Ye.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},rd,Fo=function(t,e){var n=ri.createElementNS?ri.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ri.createElement(t);return n&&n.style?n:ri.createElement(t)},Qe=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(gl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,br(e)||e,1)||""},_h="O,Moz,ms,Ms,Webkit".split(","),br=function(t,e,n){var i=e||Ri,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(_h[a]+t in s););return a<0?null:(a===3?"ms":a>=0?_h[a]:"")+t},Bo=function(){px()&&window.document&&(fh=window,ri=fh.document,mr=ri.documentElement,Ri=Fo("div")||{style:{}},Fo("div"),oe=br(oe),Xe=oe+"Origin",Ri.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rd=!!br("perspective"),_l=Ye.core.reverting,ml=1)},gh=function(t){var e=t.ownerSVGElement,n=Fo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),mr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),mr.removeChild(n),s},vh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},sd=function(t){var e,n;try{e=t.getBBox()}catch{e=gh(t),n=1}return e&&(e.width||e.height)||n||(e=gh(t)),e&&!e.width&&!e.x&&!e.y?{x:+vh(t,["x","cx","x1"])||0,y:+vh(t,["y","cy","y1"])||0,width:0,height:0}:e},ad=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&sd(t))},fi=function(t,e){if(e){var n=t.style,i;e in jn&&e!==Xe&&(e=oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(gl,"-$1").toLowerCase())):n.removeAttribute(e)}},si=function(t,e,n,i,s,a){var o=new We(t._pt,e,n,0,1,a?ed:td);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},xh={deg:1,rad:1,turn:1},Cx={grid:1,flex:1},pi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ri.style,l=mx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||xh[i]||xh[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&ad(t),(f||a==="%")&&(jn[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],pe(f?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(d?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ri||!_.appendChild)&&(_=ri.body),m=_._gsap,m&&f&&m.width&&l&&m.time===$e.time&&!m.uncache)return pe(s/m.width*u);if(f&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,g=t[h],x?t.style[e]=x:fi(t,e)}else(f||a==="%")&&!Cx[Qe(_,"display")]&&(o.position=Qe(t,"position")),_===t&&(o.position="static"),_.appendChild(Ri),g=Ri[h],_.removeChild(Ri),o.position="absolute";return l&&f&&(m=Di(_),m.time=$e.time,m.width=_[h]),pe(d?g*s/u:g&&s?u/g*s:0)},Vn=function(t,e,n,i){var s;return ml||Bo(),e in Pn&&e!=="transform"&&(e=Pn[e],~e.indexOf(",")&&(e=e.split(",")[0])),jn[e]&&e!=="transform"?(s=rs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:sa(Qe(t,Xe))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ra[e]&&ra[e](t,e,n)||Qe(t,e)||Tu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?pi(t,e,s,n)+n:s},Px=function(t,e,n,i){if(!n||n==="none"){var s=br(e,t,1),a=s&&Qe(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Qe(t,"borderTopColor"))}var o=new We(this._pt,t.style,e,0,1,$u),l=0,c=0,h,u,d,f,g,_,m,p,x,v,y,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Qe(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Qe(t,e)||i,_?t.style[e]=_:fi(t,e)),h=[n,i],Vu(h),n=h[0],i=h[1],d=n.match(hr)||[],w=i.match(hr)||[],w.length){for(;u=hr.exec(i);)m=u[0],x=i.substring(l,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=pr(f,m)+y),p=parseFloat(m),v=m.substr((p+"").length),l=hr.lastIndex-v.length,v||(v=v||en.units[e]||y,l===i.length&&(i+=v,o.e+=v)),y!==v&&(f=pi(t,e,_,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?ed:td;return xu.test(i)&&(o.e=0),this._pt=o,o},Mh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Mh[n]||n,e[1]=Mh[i]||i,e.join(" ")},Dx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],jn[o]&&(l=1,o=o==="transformOrigin"?Xe:oe),fi(n,o);l&&(fi(n,oe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",rs(n,1),a.uncache=1,nd(i)))}},ra={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new We(t._pt,e,n,0,0,Dx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},is=[1,0,0,1,0,0],od={},ld=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},yh=function(t){var e=Qe(t,oe);return ld(e)?is:e.substr(7).match(vu).map(pe)},vl=function(t,e){var n=t._gsap||Di(t),i=t.style,s=yh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?is:s):(s===is&&!t.offsetParent&&t!==mr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,mr.appendChild(t)),s=yh(t),l?i.display=l:fi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):mr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zo=function(t,e,n,i,s,a){var o=t._gsap,l=s||vl(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],v=e.split(" "),y=parseFloat(v[0])||0,w=parseFloat(v[1])||0,A,E,I,M;n?l!==is&&(E=f*m-g*_)&&(I=y*(m/E)+w*(-_/E)+(_*x-m*p)/E,M=y*(-g/E)+w*(f/E)-(f*x-g*p)/E,y=I,w=M):(A=sd(t),y=A.x+(~v[0].indexOf("%")?y/100*A.width:y),w=A.y+(~(v[1]||v[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&o.smooth?(p=y-c,x=w-h,o.xOffset=u+(p*f+x*_)-p,o.yOffset=d+(p*g+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=w,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Xe]="0px 0px",a&&(si(a,o,"xOrigin",c,y),si(a,o,"yOrigin",h,w),si(a,o,"xOffset",u,o.xOffset),si(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+w)},rs=function(t,e){var n=t._gsap||new Xu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Qe(t,Xe)||"0",h,u,d,f,g,_,m,p,x,v,y,w,A,E,I,M,T,O,F,q,P,N,B,X,Y,j,K,nt,it,W,Z,lt;return h=u=d=_=m=p=x=v=y=0,f=g=1,n.svg=!!(t.getCTM&&ad(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[oe]!=="none"?l[oe]:"")),i.scale=i.rotate=i.translate="none"),E=vl(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),zo(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,A=n.yOrigin||0,E!==is&&(O=E[0],F=E[1],q=E[2],P=E[3],h=N=E[4],u=B=E[5],E.length===6?(f=Math.sqrt(O*O+F*F),g=Math.sqrt(P*P+q*q),_=O||F?ar(F,O)*bi:0,x=q||P?ar(q,P)*bi+_:0,x&&(g*=Math.abs(Math.cos(x*_r))),n.svg&&(h-=w-(w*O+A*q),u-=A-(w*F+A*P))):(lt=E[6],W=E[7],K=E[8],nt=E[9],it=E[10],Z=E[11],h=E[12],u=E[13],d=E[14],I=ar(lt,it),m=I*bi,I&&(M=Math.cos(-I),T=Math.sin(-I),X=N*M+K*T,Y=B*M+nt*T,j=lt*M+it*T,K=N*-T+K*M,nt=B*-T+nt*M,it=lt*-T+it*M,Z=W*-T+Z*M,N=X,B=Y,lt=j),I=ar(-q,it),p=I*bi,I&&(M=Math.cos(-I),T=Math.sin(-I),X=O*M-K*T,Y=F*M-nt*T,j=q*M-it*T,Z=P*T+Z*M,O=X,F=Y,q=j),I=ar(F,O),_=I*bi,I&&(M=Math.cos(I),T=Math.sin(I),X=O*M+F*T,Y=N*M+B*T,F=F*M-O*T,B=B*M-N*T,O=X,N=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=pe(Math.sqrt(O*O+F*F+q*q)),g=pe(Math.sqrt(B*B+lt*lt)),I=ar(N,B),x=Math.abs(I)>2e-4?I*bi:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!ld(Qe(t,oe)),X&&t.setAttribute("transform",X))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=pe(f),n.scaleY=pe(g),n.rotation=pe(_)+o,n.rotationX=pe(m)+o,n.rotationY=pe(p)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Xe]=sa(c)),n.xOffset=n.yOffset=0,n.force3D=en.force3D,n.renderTransform=n.svg?Ux:rd?cd:Ix,n.uncache=0,n},sa=function(t){return(t=t.split(" "))[0]+" "+t[1]},lo=function(t,e,n){var i=Ue(e);return pe(parseFloat(e)+parseFloat(pi(t,"x",n+"px",i)))+i},Ix=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,cd(t,e)},Si="0deg",Or="0px",Ei=") ",cd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,y="",w=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==Si||h!==Si)){var A=parseFloat(h)*_r,E=Math.sin(A),I=Math.cos(A),M;A=parseFloat(u)*_r,M=Math.cos(A),a=lo(x,a,E*M*-v),o=lo(x,o,-Math.sin(A)*-v),l=lo(x,l,I*M*-v+v)}m!==Or&&(y+="perspective("+m+Ei),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(w||a!==Or||o!==Or||l!==Or)&&(y+=l!==Or||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==Si&&(y+="rotate("+c+Ei),h!==Si&&(y+="rotateY("+h+Ei),u!==Si&&(y+="rotateX("+u+Ei),(d!==Si||f!==Si)&&(y+="skew("+d+", "+f+Ei),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ei),x.style[oe]=y||"translate(0, 0)"},Ux=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(a),y=parseFloat(o),w,A,E,I,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=_r,c*=_r,w=Math.cos(l)*u,A=Math.sin(l)*u,E=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(h*=_r,M=Math.tan(c-h),M=Math.sqrt(1+M*M),E*=M,I*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),w*=M,A*=M)),w=pe(w),A=pe(A),E=pe(E),I=pe(I)):(w=u,I=d,A=E=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=pi(f,"x",a,"px"),y=pi(f,"y",o,"px")),(g||_||m||p)&&(v=pe(v+g-(g*w+_*E)+m),y=pe(y+_-(g*A+_*I)+p)),(i||s)&&(M=f.getBBox(),v=pe(v+i/100*M.width),y=pe(y+s/100*M.height)),M="matrix("+w+","+A+","+E+","+I+","+v+","+y+")",f.setAttribute("transform",M),x&&(f.style[oe]=M)},Nx=function(t,e,n,i,s){var a=360,o=we(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?bi:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*mh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*mh)%a-~~(c/a)*a)),t._pt=d=new We(t._pt,e,n,i,c,gx),d.e=h,d.u="deg",t._props.push(n),d},Sh=function(t,e){for(var n in e)t[n]=e[n];return t},Ox=function(t,e,n){var i=Sh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[oe]=e,o=rs(n,1),fi(n,oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[oe],a[oe]=e,o=rs(n,1),a[oe]=c);for(l in jn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Ue(c),g=Ue(h),u=f!==g?pi(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new We(t._pt,o,l,u,d-u,Oo),t._pt.u=g||0,t._props.push(l));Sh(o,i)};Ve("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ra[t>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(g){return Vn(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,u)}});var hd={name:"css",register:Bo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,x,v,y,w,A,E,I,M;ml||Bo(),this.styles=this.styles||id(t),I=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Ze[_]&&Yu(_,e,n,i,t,s)))){if(f=typeof h,g=ra[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ts(h)),g)g(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",hi.lastIndex=0,hi.test(c)||(m=Ue(c),p=Ue(h),p?m!==p&&(c=pi(t,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),I.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],we(c)&&~c.indexOf("random(")&&(c=ts(c)),Ue(c+"")||c==="auto"||(c+=en.units[_]||Ue(Vn(t,_))||""),(c+"").charAt(1)==="="&&(c=Vn(t,_))):c=Vn(t,_),d=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Pn&&(_==="autoAlpha"&&(d===1&&Vn(t,"visibility")==="hidden"&&u&&(d=0),I.push("visibility",0,o.visibility),si(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Pn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in jn,v){if(this.styles.save(_),M=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Qe(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=Qe(t,"perspective"),T?t.style.perspective=T:fi(t,"perspective")}u=parseFloat(h)}if(y||(w=t._gsap,w.renderTransform&&!e.parseTransform||rs(t,e.parseTransform),A=e.smoothOrigin!==!1&&w.smooth,y=this._pt=new We(this._pt,o,oe,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new We(this._pt,w,"scaleY",w.scaleY,(x?pr(w.scaleY,x+u):u)-w.scaleY||0,Oo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Xe,0,o[Xe]),h=Lx(h),w.svg?zo(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&si(this,w,"zOrigin",w.zOrigin,p),si(this,o,_,sa(c),sa(h)));continue}else if(_==="svgOrigin"){zo(t,h,1,A,0,this);continue}else if(_ in od){Nx(this,w,_,d,x?pr(d,x+h):h);continue}else if(_==="smoothOrigin"){si(this,w,"smooth",w.smooth,h);continue}else if(_==="force3D"){w[_]=h;continue}else if(_==="transform"){Ox(this,h,t);continue}}else _ in o||(_=br(_)||_);if(v||(u||u===0)&&(d||d===0)&&!_x.test(h)&&_ in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ue(h)||(_ in en.units?en.units[_]:m),m!==p&&(d=pi(t,_,c,p)),this._pt=new We(this._pt,v?w:o,_,d,(x?pr(d,x+u):u)-d,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Mx:Oo),this._pt.u=p||0,v&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=xx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=vx);else if(_ in o)Px.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,s);else if(_!=="parseTransform"){sl(_,h);continue}v||(_ in o?I.push(_,0,o[_]):typeof t[_]=="function"?I.push(_,2,t[_]()):I.push(_,1,c||t[_])),a.push(_)}}E&&Ju(this)},render:function(t,e){if(e.tween._time||!_l())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vn,aliases:Pn,getSetter:function(t,e,n){var i=Pn[e];return i&&i.indexOf(",")<0&&(e=i),e in jn&&e!==Xe&&(t._gsap.x||Vn(t,"x"))?n&&ph===n?e==="scale"?Tx:Ex:(ph=n||{})&&(e==="scale"?bx:wx):t.style&&!nl(t.style[e])?yx:~e.indexOf("-")?Sx:fl(t,e)},core:{_removeProperty:fi,_getMatrix:vl}};Ye.utils.checkPrefix=br;Ye.core.getStyleSaver=id;(function(r,t,e,n){var i=Ve(r+","+t+","+e,function(s){jn[s]=1});Ve(t,function(s){en.units[s]="deg",od[s]=1}),Pn[i[13]]=r+","+t,Ve(n,function(s){var a=s.split(":");Pn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){en.units[r]="px"});Ye.registerPlugin(hd);var Wn=Ye.registerPlugin(hd)||Ye;Wn.core.Tween;class Fx{constructor(){this.ctx=null,this.enabled=!0,this.sfxVolume=.9,this.musicVolume=.6,this.bgmOscillator=null,this.bgmGain=null,this.isBgmPlaying=!1,this.initAudioContext()}initAudioContext(){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}resumeContext(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolumes(t,e){this.sfxVolume=t,this.musicVolume=e,this.bgmGain&&this.bgmGain.gain.setValueAtTime(this.musicVolume*.15,this.ctx?this.ctx.currentTime:0)}playButtonClick(){if(!this.enabled||!this.ctx)return;this.resumeContext();const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(600,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.08),e.gain.setValueAtTime(this.sfxVolume*.4,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.08)}playDiceRoll(){if(!this.enabled||!this.ctx)return;this.resumeContext();const t=this.ctx.currentTime,e=.7,n=this.ctx.sampleRate*e,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<n;c++)s[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1200,t),o.Q.setValueAtTime(3,t);const l=this.ctx.createGain();l.gain.setValueAtTime(this.sfxVolume*.5,t),l.gain.exponentialRampToValueAtTime(.01,t+e),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t),a.stop(t+e),setTimeout(()=>this.playDiceLand(),600)}playDiceLand(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(150,t),e.frequency.exponentialRampToValueAtTime(40,t+.12),n.gain.setValueAtTime(this.sfxVolume*.7,t),n.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.12)}playTokenStep(t=0){if(!this.enabled||!this.ctx)return;this.resumeContext();const e=this.ctx.currentTime,n=440+t*20,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(n,e),i.frequency.exponentialRampToValueAtTime(n*1.5,e+.06),s.gain.setValueAtTime(this.sfxVolume*.5,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.08)}playCapture(){if(!this.enabled||!this.ctx)return;this.resumeContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(30,t+.25),n.gain.setValueAtTime(this.sfxVolume*.8,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.25)}playVictory(){if(!this.enabled||!this.ctx)return;this.resumeContext(),[523.25,659.25,783.99,1046.5].forEach((e,n)=>{setTimeout(()=>{if(!this.ctx)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(this.sfxVolume*.6,i),a.gain.exponentialRampToValueAtTime(.001,i+.3),s.connect(a),a.connect(this.ctx.destination),s.start(i),s.stop(i+.3)},n*120)})}playCoinReward(){if(!this.enabled||!this.ctx)return;this.resumeContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",n.type="sine",e.frequency.setValueAtTime(987.77,t),n.frequency.setValueAtTime(1318.51,t+.08),i.gain.setValueAtTime(this.sfxVolume*.5,t),i.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(i),n.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.1),n.start(t+.08),n.stop(t+.25)}startBGM(){if(this.isBgmPlaying||!this.ctx)return;this.resumeContext(),this.isBgmPlaying=!0;const t=this.ctx.currentTime;this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.setValueAtTime(this.musicVolume*.1,t),this.bgmGain.connect(this.ctx.destination),[130.81,164.81,196].forEach(n=>{const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(n,t),i.connect(this.bgmGain),i.start(t)})}stopBGM(){this.isBgmPlaying&&(this.isBgmPlaying=!1,this.bgmGain&&this.bgmGain.gain.exponentialRampToValueAtTime(1e-4,this.ctx?this.ctx.currentTime+.5:0))}}const wr=new Fx;class Bx{constructor(t){this.cameraManager=t}animatePath(t,e,n){if(!e||e.length===0){n&&n();return}let i=0;const s=()=>{if(i>=e.length){n&&n();return}const a=e[i];t.meshGroup.position.clone().distanceTo(a);const l=.22;wr.playTokenStep(i),Wn.to(t.meshGroup.position,{x:a.x,z:a.z,duration:l,ease:"power1.inOut"}),Wn.to(t.meshGroup.position,{y:a.y+.45,duration:l/2,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{Wn.to(t.meshGroup.scale,{x:1.15,y:.85,z:1.15,duration:.05,yoyo:!0,repeat:1,ease:"power1.inOut"}),i++,s()}})};s()}animateCapture(t,e,n){wr.playCapture(),Wn.to(t.meshGroup.position,{x:e.x,z:e.z,duration:.6,ease:"power2.inOut"}),Wn.to(t.meshGroup.position,{y:e.y+1.5,duration:.3,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{t.setPosition(e),n&&n()}})}}class zx{constructor(t,e){this.scene=t,this.cameraManager=e,this.pathAnimator=new Bx(e),this.tokensGroup=new fn,this.tokensGroup.name="AllTokens",this.tokens={},this.playerTokens={0:[],1:[],2:[],3:[]},this.createAllTokens(),this.scene.add(this.tokensGroup)}createAllTokens(){[0,1,2,3].forEach(t=>{for(let e=0;e<4;e++){const n=new gv(t,e),i=Js[t][e];n.setPosition(i),this.tokens[n.id]=n,this.playerTokens[t].push(n),this.tokensGroup.add(n.meshGroup)}})}resetAllTokens(){[0,1,2,3].forEach(t=>{this.playerTokens[t].forEach((e,n)=>{e.trackIndex=-1,e.homeStepIndex=-1,e.isFinished=!1,e.setSelectable(!1);const i=Js[t][n];e.setPosition(i)})})}getToken(t,e){return this.tokens[`pawn_${t}_${e}`]}clearSelectableTokens(){Object.values(this.tokens).forEach(t=>t.setSelectable(!1))}setSelectableTokens(t,e){this.clearSelectableTokens(),e.forEach(n=>{const i=this.getToken(t,n);i&&i.setSelectable(!0)})}raycastToken(t){const e=[];Object.values(this.tokens).forEach(i=>{i.isSelectable&&e.push(...i.meshGroup.children)});const n=t.intersectObjects(e,!0);if(n.length>0){let i=n[0].object;for(;i.parent&&!i.name.startsWith("pawn_");)i=i.parent;if(i.name&&this.tokens[i.name])return this.tokens[i.name]}return null}updateStackedTokenPositions(){const t={};Object.values(this.tokens).forEach(e=>{e.trackIndex>=0&&!e.isFinished&&(t[e.trackIndex]||(t[e.trackIndex]=[]),t[e.trackIndex].push(e))}),Object.entries(t).forEach(([e,n])=>{if(n.length>1){const i=pu(parseInt(e)),s=.15;n.forEach((a,o)=>{const l=o/n.length*Math.PI*2;a.meshGroup.position.x=i.x+Math.cos(l)*s,a.meshGroup.position.z=i.z+Math.sin(l)*s})}})}update(t,e){Object.values(this.tokens).forEach(n=>n.updateIdle(e))}}class kx{constructor(t){this.scene=t,this.diceGroup=new fn,this.diceGroup.name="Dice3DGroup",this.isRolling=!1,this.isClickable=!1,this.currentColorHex=15680580,this.buildDiceMesh(),this.scene.add(this.diceGroup),this.diceGroup.position.set(0,.6,0)}buildDiceMesh(){const t=new dn(.7,.7,.7,4,4,4);this.boxMat=new Ie({color:16777215,roughness:.15,metalness:.1,envMapIntensity:1.2}),this.diceMesh=new Jt(t,this.boxMat),this.diceMesh.castShadow=!0,this.diceMesh.receiveShadow=!0,this.diceGroup.add(this.diceMesh),this.pipMaterial=new Ie({color:15680580,emissive:15680580,emissiveIntensity:.5,roughness:.2,metalness:.8}),this.addPips();const e=new ha(.55,.7,32);this.ringMat=new Rr({color:15680580,side:yn,transparent:!0,opacity:0}),this.ringMesh=new Jt(e,this.ringMat),this.ringMesh.rotation.x=-Math.PI/2,this.ringMesh.position.y=-.34,this.diceGroup.add(this.ringMesh)}addPips(){const t=new os(.055,12,12),e=(s,a,o)=>{const l=new Jt(t,this.pipMaterial);l.position.set(s,a,o),this.diceMesh.add(l)},n=.18,i=.352;e(0,0,i),e(-n,n,-i),e(n,n,-i),e(-n,0,-i),e(n,0,-i),e(-n,-n,-i),e(n,-n,-i),e(i,n,-n),e(i,-n,n),e(-i,0,0),e(-i,n,n),e(-i,n,-n),e(-i,-n,n),e(-i,-n,-n),e(-n,i,-n),e(0,i,0),e(n,i,n),e(-n,-i,-n),e(n,-i,-n),e(-n,-i,n),e(n,-i,n)}setActivePlayerColor(t){this.currentColorHex=t,this.pipMaterial.color.setHex(t),this.pipMaterial.emissive.setHex(t),this.ringMat.color.setHex(t)}setClickable(t){this.isClickable=t,t?this.ringMat.opacity=.95:this.ringMat.opacity=0}update(t){this.isClickable&&!this.isRolling&&(this.diceGroup.position.y=.6+Math.sin(t*6)*.05,this.ringMesh.rotation.z=t*3)}}class Gx{constructor(t){this.scene=t,this.particles=[],this.pool=[],this.particleGroup=new fn,this.particleGroup.name="ParticleSystemGroup",this.scene.add(this.particleGroup),this.particleGeo=new os(.04,6,6),this.sparkleMat=new Ie({color:16436245,emissive:16436245,emissiveIntensity:1,transparent:!0,opacity:.9}),this.captureMat=new Ie({color:15680580,emissive:15680580,emissiveIntensity:1.2,transparent:!0,opacity:.9}),this.preallocatePool(50)}preallocatePool(t){for(let e=0;e<t;e++){const n=new Jt(this.particleGeo,this.sparkleMat);n.visible=!1,this.particleGroup.add(n),this.pool.push(n)}}getParticleMesh(t){let e=this.pool.pop();return e?e.material=t:(e=new Jt(this.particleGeo,t),this.particleGroup.add(e)),e.visible=!0,e.scale.set(1,1,1),e}spawnSparkles(t,e=10){for(let n=0;n<e;n++){const i=this.getParticleMesh(this.sparkleMat);i.position.copy(t);const s=new D((Math.random()-.5)*.08,Math.random()*.1+.05,(Math.random()-.5)*.08);this.particles.push({mesh:i,velocity:s,life:1,decay:.03})}}spawnCaptureBurst(t,e=16){for(let n=0;n<e;n++){const i=this.getParticleMesh(this.captureMat);i.position.copy(t);const s=new D((Math.random()-.5)*.14,Math.random()*.18+.06,(Math.random()-.5)*.14);this.particles.push({mesh:i,velocity:s,life:1,decay:.04})}}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life-=n.decay,n.mesh.position.add(n.velocity),n.mesh.scale.multiplyScalar(.95),n.life<=0&&(n.mesh.visible=!1,this.pool.push(n.mesh),this.particles.splice(e,1))}}}class Hx{constructor(t){this.scene=t,this.fireworksGroup=new fn,this.fireworksGroup.name="FireworksGroup",this.scene.add(this.fireworksGroup),this.particles=[],this.isSpawning=!1,this.spawnTimer=null}startFireworks(){this.isSpawning=!0,this.spawnTimer=setInterval(()=>{if(this.isSpawning){const t=(Math.random()-.5)*8,e=Math.random()*4+4,n=(Math.random()-.5)*8;this.createBurst(new D(t,e,n))}},400)}stopFireworks(){this.isSpawning=!1,this.spawnTimer&&(clearInterval(this.spawnTimer),this.spawnTimer=null)}createBurst(t){const e=[15680580,2278750,15381256,3900150,11032055,15485081],n=e[Math.floor(Math.random()*e.length)],i=35,s=new dn(.06,.06,.06),a=new Rr({color:n});for(let o=0;o<i;o++){const l=new Jt(s,a);l.position.copy(t);const c=Math.random()*Math.PI*2,h=Math.random()*Math.PI,u=Math.random()*.12+.05,d=new D(Math.sin(h)*Math.cos(c)*u,Math.cos(h)*u+.02,Math.sin(h)*Math.sin(c)*u);this.fireworksGroup.add(l),this.particles.push({mesh:l,velocity:d,life:1,decay:.02})}}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life-=n.decay,n.velocity.y-=.002,n.mesh.position.add(n.velocity),n.life<=0&&(this.fireworksGroup.remove(n.mesh),this.particles.splice(e,1))}}}class ln{static load(){try{const t=localStorage.getItem(this.STORAGE_KEY);if(!t)return JSON.parse(JSON.stringify(this.defaultData));const e=JSON.parse(t);return{...this.defaultData,...e}}catch(t){return console.warn("Failed to load local storage data, using defaults:",t),JSON.parse(JSON.stringify(this.defaultData))}}static save(t){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t))}catch(e){console.error("Failed to save to local storage:",e)}}static updateCoins(t,e){return t.profile.coins=Math.max(0,t.profile.coins+e),this.save(t),t.profile.coins}static updateGems(t,e){return t.profile.gems=Math.max(0,t.profile.gems+e),this.save(t),t.profile.gems}static addXp(t,e){t.profile.xp+=e;const n=t.profile.level*200;t.profile.xp>=n&&(t.profile.level+=1,t.profile.xp-=n,t.profile.coins+=500),this.save(t)}}va(ln,"STORAGE_KEY","LUDO_PRO_3D_DATA_V1"),va(ln,"defaultData",{profile:{name:"Player 1",avatar:"👑",level:1,xp:120,coins:2500,gems:50,gamesPlayed:14,wins:8,captures:32},settings:{musicVolume:.7,sfxVolume:.9,haptics:!0,aiDifficulty:"Medium",cameraAutoRotate:!0,graphicsQuality:"High"},inventory:{equippedBoard:"classic_luxury",equippedPawn:"crystal_gem",equippedDice:"royal_gold",ownedBoards:["classic_luxury"],ownedPawns:["crystal_gem"],ownedDice:["royal_gold"]},dailyRewards:{lastClaimedDate:null,streak:0},luckySpin:{lastSpinTime:null,spinsAvailable:1},achievements:{first_win:{unlocked:!0,claimed:!0,progress:1,total:1},capturer_10:{unlocked:!0,claimed:!1,progress:10,total:10},dice_master_6:{unlocked:!1,claimed:!1,progress:4,total:10},games_played_20:{unlocked:!1,claimed:!1,progress:14,total:20},coin_collector:{unlocked:!1,claimed:!1,progress:2500,total:1e4}}});class Vx{constructor(t){this.uiManager=t,this.screens={},this.currentScreen=null,this.createScreenDOMs()}createScreenDOMs(){const t=document.getElementById("app"),e=document.createElement("div");e.id="screen-splash",e.className="screen-overlay screen-full splash-screen",e.innerHTML=`
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
    `,t.appendChild(i),this.screens.mode_select=i;const s=document.createElement("div");s.id="screen-victory",s.className="screen-overlay screen-full victory-screen hidden",s.innerHTML=`
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
    `,t.appendChild(s),this.screens.victory=s,this.bindEvents()}bindEvents(){document.getElementById("btn-start-game").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.showScreen("home")}),document.getElementById("btn-mode-select").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.showScreen("mode_select")}),document.getElementById("btn-back-home").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.showScreen("home")}),document.querySelectorAll(".segmented-control").forEach(t=>{t.querySelectorAll(".seg-btn").forEach(e=>{e.addEventListener("click",n=>{t.querySelectorAll(".seg-btn").forEach(i=>i.classList.remove("active")),n.target.classList.add("active")})})}),document.getElementById("btn-start-vs-ai").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick();const t=parseInt(document.querySelector("#ai-player-count .seg-btn.active").dataset.val),e=document.querySelector("#ai-difficulty-select .seg-btn.active").dataset.val;this.uiManager.gameController.startNewGame("vs_ai",t,e,this.uiManager.data.profile)}),document.getElementById("btn-start-pass-play").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick();const t=parseInt(document.querySelector("#pass-player-count .seg-btn.active").dataset.val);this.uiManager.gameController.startNewGame("pass_play",t,"Medium",this.uiManager.data.profile)}),document.getElementById("btn-victory-rematch").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.uiManager.gameController.startNewGame("vs_ai",4,"Medium",this.uiManager.data.profile)}),document.getElementById("btn-victory-home").addEventListener("click",()=>{this.uiManager.soundManager.playButtonClick(),this.showScreen("home")})}showScreen(t){Object.values(this.screens).forEach(e=>e.classList.add("hidden")),document.getElementById("gameplay-hud").classList.add("hidden"),t==="gameplay"?document.getElementById("gameplay-hud").classList.remove("hidden"):this.screens[t]&&this.screens[t].classList.remove("hidden"),this.currentScreen=t}populateVictoryScreen(t,e){const n=document.getElementById("podium-ranks-list");n.innerHTML="";const i=["🥇 1st Place","🥈 2nd Place","🥉 3rd Place","4th Place"];t.forEach((s,a)=>{const o=e[s],l=document.createElement("div");l.className="podium-row",l.innerHTML=`
        <span class="podium-medal">${i[a]||`${a+1}th`}</span>
        <span class="podium-avatar">${o.avatar}</span>
        <span class="podium-name">${o.name}</span>
      `,n.appendChild(l)}),this.showScreen("victory")}}class Wx{constructor(t){this.uiManager=t,this.hudContainer=null,this.rollBtn=null,this.rollBadge=null,this.timerRing=null,this.playerBanner=null,this.createHUDDOM()}createHUDDOM(){this.hudContainer=document.createElement("div"),this.hudContainer.id="gameplay-hud",this.hudContainer.className="screen-overlay hud-screen hidden",this.hudContainer.innerHTML=`
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
    `,document.getElementById("app").appendChild(this.hudContainer),this.rollBtn=document.getElementById("btn-roll-dice"),this.rollBadge=document.getElementById("dice-roll-badge"),this.timerRing=document.getElementById("timer-progress-path"),this.playerBanner=document.getElementById("player-turn-card"),this.bindEvents()}bindEvents(){this.rollBtn.addEventListener("click",()=>{this.uiManager.emit("onRollClicked")}),document.getElementById("btn-pause-game").addEventListener("click",()=>{this.uiManager.modals.showPauseModal()});const t=document.getElementById("btn-chat-emoji"),e=document.getElementById("chat-popup");t.addEventListener("click",()=>{e.classList.toggle("hidden")}),document.querySelectorAll(".emoji-btn").forEach(n=>{n.addEventListener("click",i=>{const s=i.target.getAttribute("data-emoji");e.classList.add("hidden"),this.uiManager.showFloatingText(s,window.innerWidth/2,window.innerHeight/2-100)})})}updatePlayerTurn(t){document.getElementById("hud-player-avatar").innerText=t.avatar,document.getElementById("hud-player-name").innerText=t.name,document.getElementById("hud-turn-status").innerText=t.isAI?"Thinking...":"Your Turn",this.playerBanner.style.borderColor=t.color.css,this.rollBadge.classList.add("hidden")}updateTimer(t){const e=Math.max(0,t/15*100);this.timerRing.setAttribute("stroke-dasharray",`${e}, 100`)}setRollButtonEnabled(t){this.rollBtn.disabled=!t,t?this.rollBtn.classList.remove("disabled"):this.rollBtn.classList.add("disabled")}showRollResultBadge(t){this.rollBadge.innerText=t,this.rollBadge.classList.remove("hidden"),this.rollBadge.classList.add("pop-anim"),setTimeout(()=>{this.rollBadge.classList.remove("pop-anim")},400)}}const Eh={boards:[{id:"classic_luxury",name:"Classic Luxury",subtitle:"Mahogany Frame & Polish Marble",price:0,currency:"coins",icon:"🪵",previewColor:"#8b4513"},{id:"cyberpunk_glow",name:"Neon Cyberpunk",subtitle:"Obsidian & Holographic Neon Trails",price:2500,currency:"coins",icon:"⚡",previewColor:"#00f0ff"},{id:"royal_gold",name:"Royal Palace",subtitle:"Pure Gold Inlays & White Quartz",price:50,currency:"gems",icon:"👑",previewColor:"#ffd700"},{id:"emerald_forest",name:"Emerald Forest",subtitle:"Deep Jade & Brass Trim",price:4e3,currency:"coins",icon:"🌲",previewColor:"#00a86b"}],pawns:[{id:"crystal_gem",name:"Crystal Gem",subtitle:"Translucent Glass with Brass Rim",price:0,currency:"coins",icon:"💎",previewColor:"#60a5fa"},{id:"metallic_chrome",name:"Chrome Steel",subtitle:"Reflective Polished Alloy",price:1500,currency:"coins",icon:"🛡️",previewColor:"#94a3b8"},{id:"neon_light",name:"Neon Core",subtitle:"Pulsing Fiber-Optic Glass",price:3e3,currency:"coins",icon:"🔮",previewColor:"#a855f7"},{id:"gold_statue",name:"Imperial Gold",subtitle:"Hand-crafted 24k Gold Pawns",price:40,currency:"gems",icon:"⚜️",previewColor:"#fbbf24"}],dice:[{id:"royal_gold",name:"Gold Inlaid Dice",subtitle:"Rounded Ivory Cube & Golden Pips",price:0,currency:"coins",icon:"🎲",previewColor:"#f59e0b"},{id:"ruby_translucent",name:"Translucent Ruby",subtitle:"Glowing Crimson Crystal",price:1200,currency:"coins",icon:"♦️",previewColor:"#ef4444"},{id:"obsidian_dark",name:"Obsidian Black",subtitle:"Volcanic Glass with Metallic Dots",price:2500,currency:"coins",icon:"🖤",previewColor:"#1e293b"}]},Xx=[{id:"first_win",title:"First Victory",description:"Win your first Ludo match against bots or real players",rewardCoins:500,rewardGems:10,icon:"🏆"},{id:"capturer_10",title:"Master Capturer",description:"Capture 10 opponent tokens on track safe zones",rewardCoins:800,rewardGems:15,icon:"⚔️"},{id:"dice_master_6",title:"Lucky Sixes",description:"Roll a 6 ten times in gameplay",rewardCoins:600,rewardGems:10,icon:"🎯"},{id:"games_played_20",title:"Ludo Veteran",description:"Complete 20 full Ludo matches",rewardCoins:1200,rewardGems:25,icon:"🎖️"},{id:"coin_collector",title:"Tycoon",description:"Accumulate 10,000 total gold coins",rewardCoins:2e3,rewardGems:50,icon:"💰"}];class Yx{constructor(t){this.uiManager=t,this.modalContainer=null,this.createModalsDOM()}createModalsDOM(){this.modalContainer=document.createElement("div"),this.modalContainer.id="modals-overlay-container",this.modalContainer.className="modals-container hidden",this.modalContainer.innerHTML=`
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
    `;this.openModal(e),this.bindStoreEvents()}renderStoreItems(t,e){const n=Eh[t]||[],i=e.inventory[`owned${t.charAt(0).toUpperCase()+t.slice(1)}`]||[],s=e.inventory[`equipped${t.charAt(0).toUpperCase()+t.slice(1,-1)}`]||"";return n.map(a=>{const o=i.includes(a.id),l=s===a.id,c=a.currency==="gems"?"💎":"🪙";let h=l?"EQUIPPED":o?"EQUIP":`${c} ${a.price}`,u=l?"btn-disabled":o?"btn-secondary-glass":"btn-primary-glow";return`
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
      `}).join("")}bindStoreEvents(){const t=document.getElementById("modal-dynamic-body");t.querySelectorAll(".store-tab-btn").forEach(e=>{e.addEventListener("click",n=>{t.querySelectorAll(".store-tab-btn").forEach(s=>s.classList.remove("active")),n.target.classList.add("active");const i=n.target.dataset.tab;document.getElementById("store-grid-content").innerHTML=this.renderStoreItems(i,this.uiManager.data),this.bindStoreEvents()})}),t.querySelectorAll(".store-buy-btn").forEach(e=>{e.addEventListener("click",n=>{const i=n.target.dataset.cat,s=n.target.dataset.id,a=Eh[i].find(c=>c.id===s),o=`owned${i.charAt(0).toUpperCase()+i.slice(1)}`,l=`equipped${i.charAt(0).toUpperCase()+i.slice(1,-1)}`;this.uiManager.data.inventory[o].includes(s)?(this.uiManager.data.inventory[l]=s,ln.save(this.uiManager.data),this.uiManager.showToast(`Equipped ${a.name}!`,"success")):a.currency==="coins"&&this.uiManager.data.profile.coins>=a.price?(ln.updateCoins(this.uiManager.data,-a.price),this.uiManager.data.inventory[o].push(s),this.uiManager.data.inventory[l]=s,ln.save(this.uiManager.data),this.uiManager.showToast(`Unlocked ${a.name}!`,"success")):a.currency==="gems"&&this.uiManager.data.profile.gems>=a.price?(ln.updateGems(this.uiManager.data,-a.price),this.uiManager.data.inventory[o].push(s),this.uiManager.data.inventory[l]=s,ln.save(this.uiManager.data),this.uiManager.showToast(`Unlocked ${a.name}!`,"success")):this.uiManager.showToast("Insufficient Currency!","warning"),this.uiManager.updateWalletUI(),document.getElementById("store-grid-content").innerHTML=this.renderStoreItems(i,this.uiManager.data),this.bindStoreEvents()})})}showLuckySpinModal(){this.openModal(`
      <h2 class="modal-title">LUCKY SPIN WHEEL</h2>
      <div class="spin-wheel-wrapper">
        <canvas id="lucky-spin-canvas" width="280" height="280"></canvas>
        <div class="wheel-pointer">▼</div>
      </div>
      <button id="btn-trigger-spin" class="btn-primary-glow btn-large mt-4">
        SPIN NOW
      </button>
    `),this.initSpinWheelCanvas()}initSpinWheelCanvas(){const t=document.getElementById("lucky-spin-canvas");if(!t)return;const e=t.getContext("2d"),n=[100,250,500,1e3,50,2e3],i=["#ef4444","#22c55e","#eab308","#3b82f6","#a855f7","#ec4899"];let s=0;const a=o=>{const l=n.length,c=Math.PI*2/l;e.clearRect(0,0,280,280);for(let h=0;h<l;h++)e.beginPath(),e.fillStyle=i[h],e.moveTo(140,140),e.arc(140,140,130,o+h*c,o+(h+1)*c),e.fill(),e.stroke(),e.save(),e.translate(140,140),e.rotate(o+(h+.5)*c),e.fillStyle="#ffffff",e.font="bold 16px Inter, sans-serif",e.fillText(`🪙 ${n[h]}`,50,5),e.restore()};a(s),document.getElementById("btn-trigger-spin").addEventListener("click",()=>{const o=document.getElementById("btn-trigger-spin");o.disabled=!0;let l=.4,c=.985;const h=setInterval(()=>{if(s+=l,l*=c,a(s),l<.005){clearInterval(h);const u=n[Math.floor(Math.random()*n.length)];ln.updateCoins(this.uiManager.data,u),this.uiManager.updateWalletUI(),this.uiManager.showToast(`You won 🪙 ${u} Coins!`,"success"),o.disabled=!1}},16)})}showDailyRewardsModal(){const e=`
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
    `;this.openModal(e),document.getElementById("btn-claim-daily").addEventListener("click",()=>{ln.updateCoins(this.uiManager.data,500),this.uiManager.updateWalletUI(),this.uiManager.showToast("Claimed 🪙 500 Daily Bonus!","success"),this.closeModal()})}showLeaderboardModal(){const e=`
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
        ${Xx.map(e=>`
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
    `;this.openModal(t),document.querySelectorAll(".ach-claim-btn").forEach(e=>{e.addEventListener("click",()=>{ln.updateCoins(this.uiManager.data,500),this.uiManager.updateWalletUI(),this.uiManager.showToast("Claimed 🪙 500 Reward!","success"),e.disabled=!0,e.innerText="CLAIMED"})})}showSettingsModal(){const t=this.uiManager.data.settings,e=`
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
    `;this.openModal(e),document.getElementById("btn-save-settings").addEventListener("click",()=>{t.sfxVolume=parseFloat(document.getElementById("slider-sfx").value),t.musicVolume=parseFloat(document.getElementById("slider-bgm").value),t.haptics=document.getElementById("check-haptics").checked,ln.save(this.uiManager.data),this.uiManager.soundManager.setVolumes(t.sfxVolume,t.musicVolume),this.uiManager.showToast("Settings Saved!","success"),this.closeModal()})}showPauseModal(){this.openModal(`
      <h2 class="modal-title">GAME PAUSED</h2>
      <div class="pause-actions">
        <button id="btn-resume-game" class="btn-primary-glow btn-large w-full">RESUME MATCH</button>
        <button id="btn-quit-match" class="btn-secondary-glass btn-large w-full mt-3">QUIT TO MAIN MENU</button>
      </div>
    `),document.getElementById("btn-resume-game").addEventListener("click",()=>this.closeModal()),document.getElementById("btn-quit-match").addEventListener("click",()=>{this.closeModal(),this.uiManager.screens.showScreen("home")})}}class qx{constructor(){this.data=ln.load(),this.soundManager=wr,this.gameController=null,this.listeners={},this.hud=new Wx(this),this.screens=new Vx(this),this.modals=new Yx(this),this.toastContainer=null,this.createToastDOM(),this.updateWalletUI(),this.bindHomeEvents()}setGameController(t){this.gameController=t}createToastDOM(){this.toastContainer=document.createElement("div"),this.toastContainer.id="toast-container",this.toastContainer.className="toast-container",document.getElementById("app").appendChild(this.toastContainer)}updateWalletUI(){const t=document.getElementById("home-coins-text"),e=document.getElementById("home-gems-text"),n=document.getElementById("home-user-name"),i=document.getElementById("home-user-level"),s=document.getElementById("home-user-avatar");t&&(t.innerText=this.data.profile.coins.toLocaleString()),e&&(e.innerText=this.data.profile.gems.toLocaleString()),n&&(n.innerText=this.data.profile.name),i&&(i.innerText=`Lvl ${this.data.profile.level}`),s&&(s.innerText=this.data.profile.avatar)}bindHomeEvents(){const t=e=>document.getElementById(e);t("btn-open-store")&&(t("btn-open-store").onclick=()=>this.modals.showStoreModal()),t("btn-lucky-spin")&&(t("btn-lucky-spin").onclick=()=>this.modals.showLuckySpinModal()),t("btn-daily-rewards")&&(t("btn-daily-rewards").onclick=()=>this.modals.showDailyRewardsModal()),t("btn-leaderboard")&&(t("btn-leaderboard").onclick=()=>this.modals.showLeaderboardModal()),t("btn-achievements")&&(t("btn-achievements").onclick=()=>this.modals.showAchievementsModal()),t("btn-settings")&&(t("btn-settings").onclick=()=>this.modals.showSettingsModal())}showToast(t,e="info"){const n=document.createElement("div");n.className=`toast-item toast-${e}`,n.innerHTML=`<span>${t}</span>`,this.toastContainer.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),400)},2200)}showFloatingText(t,e,n){const i=document.createElement("div");i.className="floating-text-item",i.style.left=`${e}px`,i.style.top=`${n}px`,i.innerText=t,document.getElementById("app").appendChild(i),setTimeout(()=>i.remove(),1200)}showScreen(t){this.screens.showScreen(t)}showVictoryModal(t,e){this.screens.populateVictoryScreen(t,e)}on(t,e){this.listeners[t]=e}emit(t,e){this.listeners[t]&&this.listeners[t](e)}}class jx{constructor(){this.playerCount=4,this.activePlayerIdx=0,this.players=[],this.rankings=[]}setupPlayers(t="vs_ai",e=4,n="Medium",i=null){this.playerCount=e,this.rankings=[],this.activePlayerIdx=0,this.players=[];const s=["Red Commander","Green Bot","Yellow Bot","Blue Bot"],a=["👑","🤖","🦊","⚡"],o=e===2?[0,2]:e===3?[0,1,2]:[0,1,2,3];[0,1,2,3].forEach(l=>{const c=o.includes(l);let h=!0,u=s[l],d=a[l];l===0?(h=!1,i&&(u=i.name||"Player 1",d=i.avatar||"👑")):t==="pass_play"&&(h=!1,u=`Player ${l+1}`,d=["🔴","🟢","🟡","🔵"][l]),this.players.push({idx:l,color:uu[l],name:u,avatar:d,isAI:h,isActiveSlot:c,aiDifficulty:n,finishedCount:0,rank:null})})}getActivePlayer(){return this.players[this.activePlayerIdx]}nextTurn(){const t=this.playerCount===2?[0,2]:this.playerCount===3?[0,1,2]:[0,1,2,3];let e=0;do this.activePlayerIdx=(this.activePlayerIdx+1)%4,e++;while((!t.includes(this.activePlayerIdx)||this.players[this.activePlayerIdx].rank!==null)&&e<10);return this.getActivePlayer()}registerPlayerFinished(t){const e=this.players[t];return e.rank===null&&(this.rankings.push(t),e.rank=this.rankings.length),e.rank}isGameOver(){return(this.playerCount===2?[0,2]:this.playerCount===3?[0,1,2]:[0,1,2,3]).filter(n=>this.players[n].rank===null).length<=1}}class Ws{static calculateMovePath(t,e,n){const{getTrackWorldPosition:i,getHomeStretchWorldPosition:s,BASE_YARD_POSITIONS:a}=n,o=t.playerIdx,l=[];let c=t.trackIndex,h=t.homeStepIndex;if(c===-1&&h===-1){if(e===6){const _=ks[o];return l.push(i(_)),{pathPoints:l,newTrackIndex:_,newHomeStepIndex:-1,isFinished:!1}}return null}if(h>=0){if(h+e>6)return null;for(let m=1;m<=e;m++)l.push(s(o,h+m));const _=h+e;return{pathPoints:l,newTrackIndex:-1,newHomeStepIndex:_,isFinished:_===6}}const u=ks[o];let d=(c-u+52)%52,f=c,g=-1;for(let _=1;_<=e;_++)if(d++,d>to){const m=d-to-1;if(m>6)return null;f=-1,g=m,l.push(s(o,m))}else f=(c+_)%52,l.push(i(f));return{pathPoints:l,newTrackIndex:f,newHomeStepIndex:g,isFinished:g===6}}static checkForCapture(t,e,n){if(e<0||du.includes(e))return null;let i=null;return Object.values(n).forEach(s=>{s.playerIdx!==t.playerIdx&&s.trackIndex===e&&!s.isFinished&&(i=s)}),i}static getValidMoveTokens(t,e,n){const i=[];return e.forEach((s,a)=>{if(s.isFinished)return;if(s.trackIndex===-1&&s.homeStepIndex===-1){n===6&&i.push(a);return}if(s.homeStepIndex>=0){s.homeStepIndex+n<=6&&i.push(a);return}const o=ks[t];(s.trackIndex-o+52)%52+n<=to+6&&i.push(a)}),i}}class Kx{static selectBestMove(t,e,n,i,s,a="Medium"){if(!e||e.length===0)return null;if(e.length===1)return e[0];if(a==="Easy"){const c=Math.floor(Math.random()*e.length);return e[c]}let o=e[0],l=-1/0;return e.forEach(c=>{const h=n[c];let u=0;if(h.trackIndex===-1&&h.homeStepIndex===-1&&s===6&&(u+=100),h.trackIndex>=0){const d=ks[t],f=(h.trackIndex-d+52)%52,g=f+s;h.homeStepIndex+s===6&&(u+=150),f<51&&g>=51&&(u+=80);const _=(h.trackIndex+s)%52;Ws.checkForCapture(h,_,i)&&(u+=a==="Hard"?200:120),du.includes(_)&&(u+=50),a==="Hard"&&(u+=f*2)}u>l&&(l=u,o=c)}),o}}class Zx{constructor(t){this.dice3D=t,this.faceRotations={1:new An(-Math.PI/2,0,0),6:new An(Math.PI/2,0,0),2:new An(0,0,Math.PI/2),5:new An(0,0,-Math.PI/2),3:new An(0,0,0),4:new An(Math.PI,0,0)}}roll(t=null,e=null){if(this.dice3D.isRolling)return;this.dice3D.isRolling=!0,this.dice3D.setClickable(!1);const n=t||Math.floor(Math.random()*6)+1;wr.playDiceRoll();const i=this.dice3D.diceGroup,s=this.dice3D.diceMesh;Wn.to(i.position,{y:2.2,duration:.35,ease:"power2.out",yoyo:!0,repeat:1});const a=(Math.floor(Math.random()*3)+2)*Math.PI*2,o=(Math.floor(Math.random()*3)+2)*Math.PI*2,l=(Math.floor(Math.random()*3)+2)*Math.PI*2,c=this.faceRotations[n];Wn.to(s.rotation,{x:a+c.x,y:o+c.y,z:l+c.z,duration:.7,ease:"cubic.out",onComplete:()=>{Wn.to(i.scale,{x:1.2,y:.8,z:1.2,duration:.08,yoyo:!0,repeat:1,ease:"power1.inOut",onComplete:()=>{this.dice3D.isRolling=!1,e&&e(n)}})}})}}const bn={IDLE:"IDLE",WAITING_FOR_ROLL:"WAITING_FOR_ROLL",ROLLING:"ROLLING",SELECTING_TOKEN:"SELECTING_TOKEN",MOVING_TOKEN:"MOVING_TOKEN",GAME_OVER:"GAME_OVER"};class $x{constructor(t,e,n,i,s,a,o){this.sceneManager=t,this.cameraManager=e,this.tokenManager=n,this.dice3D=i,this.uiManager=s,this.particleSystem=a,this.fireworks=o,this.dicePhysics=new Zx(i),this.playerManager=new jx,this.currentState=bn.IDLE,this.lastRollValue=0,this.consecutiveSixes=0,this.validTokens=[],this.turnTimer=null,this.turnTimeRemaining=15,this.bindEvents()}bindEvents(){this.uiManager.on("onRollClicked",()=>this.handleRollDice()),this.uiManager.on("onTokenSelected",t=>this.handleTokenSelected(t))}startNewGame(t="vs_ai",e=4,n="Medium",i=null){this.playerManager.setupPlayers(t,e,n,i),this.tokenManager.resetAllTokens(),this.consecutiveSixes=0,this.uiManager.showScreen("gameplay"),this.beginTurn()}beginTurn(){const t=this.playerManager.getActivePlayer();this.currentState=bn.WAITING_FOR_ROLL,this.dice3D.setActivePlayerColor(t.color.hex),this.cameraManager.focusPlayerCorner(t.idx),this.uiManager.hud.updatePlayerTurn(t),this.startTurnTimer(),t.isAI?(this.dice3D.setClickable(!1),setTimeout(()=>this.handleRollDice(),900)):(this.dice3D.setClickable(!0),this.uiManager.hud.setRollButtonEnabled(!0))}startTurnTimer(){this.stopTurnTimer(),this.turnTimeRemaining=15,this.uiManager.hud.updateTimer(this.turnTimeRemaining),this.turnTimer=setInterval(()=>{this.turnTimeRemaining--,this.uiManager.hud.updateTimer(this.turnTimeRemaining),this.turnTimeRemaining<=0&&(this.stopTurnTimer(),this.handleTurnTimeout())},1e3)}stopTurnTimer(){this.turnTimer&&(clearInterval(this.turnTimer),this.turnTimer=null)}handleTurnTimeout(){const t=this.playerManager.getActivePlayer();if(this.currentState===bn.WAITING_FOR_ROLL)this.handleRollDice();else if(this.currentState===bn.SELECTING_TOKEN&&this.validTokens.length>0){const e=this.tokenManager.getToken(t.idx,this.validTokens[0]);this.handleTokenSelected(e)}}handleRollDice(){this.currentState===bn.WAITING_FOR_ROLL&&(this.currentState=bn.ROLLING,this.uiManager.hud.setRollButtonEnabled(!1),this.dicePhysics.roll(null,t=>{if(this.lastRollValue=t,this.uiManager.hud.showRollResultBadge(t),t===6){if(this.consecutiveSixes++,this.consecutiveSixes>=3){this.uiManager.showToast("3 Consecutive Sixes! Turn Forfeited","warning"),this.consecutiveSixes=0,setTimeout(()=>this.endTurn(),1200);return}}else this.consecutiveSixes=0;this.evaluateTurnMoves()}))}evaluateTurnMoves(){const t=this.playerManager.getActivePlayer(),e=this.tokenManager.playerTokens[t.idx];if(this.validTokens=Ws.getValidMoveTokens(t.idx,e,this.lastRollValue),this.validTokens.length===0){this.uiManager.showToast(`No moves for ${t.name}`,"info"),setTimeout(()=>this.endTurn(),1200);return}if(this.currentState=bn.SELECTING_TOKEN,t.isAI){const n=Kx.selectBestMove(t.idx,this.validTokens,e,this.tokenManager.tokens,this.lastRollValue,t.aiDifficulty),i=this.tokenManager.getToken(t.idx,n);setTimeout(()=>this.handleTokenSelected(i),700)}else if(this.tokenManager.setSelectableTokens(t.idx,this.validTokens),this.validTokens.length===1){const n=this.tokenManager.getToken(t.idx,this.validTokens[0]);setTimeout(()=>this.handleTokenSelected(n),400)}}handleTokenSelected(t){if(this.currentState!==bn.SELECTING_TOKEN||!t||!t.isSelectable)return;this.stopTurnTimer(),this.currentState=bn.MOVING_TOKEN,this.tokenManager.clearSelectableTokens();const e={getTrackWorldPosition:pu,getHomeStretchWorldPosition:pv,BASE_YARD_POSITIONS:Js},n=Ws.calculateMovePath(t,this.lastRollValue,e);if(!n){this.endTurn();return}this.cameraManager.zoomInAction(t.meshGroup.position),this.tokenManager.pathAnimator.animatePath(t,n.pathPoints,()=>{t.trackIndex=n.newTrackIndex,t.homeStepIndex=n.newHomeStepIndex,t.isFinished=n.isFinished,this.tokenManager.updateStackedTokenPositions(),this.cameraManager.zoomOutReset(),this.processMoveConsequences(t,n)})}processMoveConsequences(t,e){const n=this.playerManager.getActivePlayer();let i=this.lastRollValue===6;if(e.isFinished&&(i=!0,n.finishedCount++,wr.playVictory(),this.particleSystem.spawnSparkles(t.meshGroup.position),this.uiManager.showToast(`${n.name}'s token reached Home!`,"success"),n.finishedCount===4&&(this.playerManager.registerPlayerFinished(n.idx),this.playerManager.isGameOver()))){this.handleGameOver();return}const s=Ws.checkForCapture(t,e.newTrackIndex,this.tokenManager.tokens);if(s){i=!0;const a=Js[s.playerIdx][s.tokenIdx];s.trackIndex=-1,s.homeStepIndex=-1,this.particleSystem.spawnCaptureBurst(t.meshGroup.position),this.uiManager.showToast(`Captured ${this.playerManager.players[s.playerIdx].name}'s pawn!`,"capture"),this.tokenManager.pathAnimator.animateCapture(s,a,()=>{i?(this.uiManager.showToast("Extra Turn Granted!","success"),this.beginTurn()):this.endTurn()});return}i&&n.finishedCount<4?(this.uiManager.showToast("Extra Turn Granted!","success"),this.beginTurn()):this.endTurn()}endTurn(){this.stopTurnTimer(),this.tokenManager.clearSelectableTokens(),this.playerManager.nextTurn(),this.beginTurn()}handleGameOver(){this.stopTurnTimer(),this.currentState=bn.GAME_OVER,this.fireworks.startFireworks(),wr.playVictory(),setTimeout(()=>{this.uiManager.showVictoryModal(this.playerManager.rankings,this.playerManager.players)},1500)}}class Jx{constructor(){this.clock=new sv,this.raycaster=new av,this.mouse=new at,this.initEngine(),this.initScene(),this.initGame(),this.bindWindowEvents(),this.animate()}initEngine(){const t=document.getElementById("webgl-container");this.renderer=new ov(t),this.sceneManager=new lv,this.cameraManager=new uv(this.renderer.threeRenderer.domElement),this.lighting=new dv(this.sceneManager.scene)}initScene(){this.boardBuilder=new mv(this.sceneManager.scene),this.safeZoneManager=new _v(this.boardBuilder),this.tokenManager=new zx(this.sceneManager.scene,this.cameraManager),this.dice3D=new kx(this.sceneManager.scene),this.particleSystem=new Gx(this.sceneManager.scene),this.fireworks=new Hx(this.sceneManager.scene)}initGame(){this.uiManager=new qx,this.gameController=new $x(this.sceneManager,this.cameraManager,this.tokenManager,this.dice3D,this.uiManager,this.particleSystem,this.fireworks),this.uiManager.setGameController(this.gameController),this.uiManager.showScreen("splash")}bindWindowEvents(){window.addEventListener("resize",()=>{this.renderer.resize(this.cameraManager.camera)});const t=this.renderer.threeRenderer.domElement,e=(n,i)=>{if(this.mouse.x=n/window.innerWidth*2-1,this.mouse.y=-(i/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.cameraManager.camera),this.dice3D.isClickable&&this.raycaster.intersectObjects(this.dice3D.diceGroup.children,!0).length>0){this.gameController.handleRollDice();return}const s=this.tokenManager.raycastToken(this.raycaster);s&&this.gameController.handleTokenSelected(s)};t.addEventListener("click",n=>e(n.clientX,n.clientY)),t.addEventListener("touchstart",n=>{n.touches.length>0&&e(n.touches[0].clientX,n.touches[0].clientY)})}animate(){requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.cameraManager.update(),this.safeZoneManager.update(t),this.tokenManager.update(t,e),this.dice3D.update(e),this.particleSystem.update(t),this.fireworks.update(t),this.renderer.render(this.sceneManager.scene,this.cameraManager.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Jx});
