/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Adrian2 on 1/13/2017.
	 */
	// var Diaporama = require('diaporama');
	
	var slideshow = __webpack_require__(/*! ./diaporama_simplified.json */ 1);
	var transitions = __webpack_require__(/*! glsl-transitions */ 2);
	slideshow.transitions = transitions;
	
	var audio = document.getElementById('audio');
	
	window.diaporama = null;
	var div = document.getElementById("diaporama");
	
	var diaporama = Diaporama(div, {
	    data: slideshow,
	    autoplay: false,
	    loop: false,
	    width: 800,
	    height: 600
	});
	
	document.body.addEventListener("keydown", function (e) {
	    switch (e.which) {
	        case 38:
	            // Up
	            diaporama.playbackRate *= 1.5;
	            break;
	        case 40:
	            // Down
	            diaporama.playbackRate /= 1.5;
	            break;
	        case 37:
	            // Left
	            diaporama.prev();
	            break;
	        case 39:
	            // Right
	            diaporama.next();
	            break;
	        case 32:
	            // Space
	            diaporama.paused = !diaporama.paused;
	            if (!audio.paused) {
	                audio.pause();
	            } else {
	                audio.play();
	            }
	            break;
	    }
	});
	window.diaporama = diaporama;
	
	window.diaporama.on('ended', function () {
	    audio.pause();
	});
	
	window.diaporama.on('transition', replayAudio);
	window.diaporama.on('transitionEnd', replayAudio);
	window.diaporama.on('slide', replayAudio);
	window.diaporama.on('slideEnd', replayAudio);
	
	function replayAudio() {
	    if (diaporama.paused) {
	        return;
	    }
	    if (audio.paused) {
	        audio.play();
	    }
	}

/***/ },
/* 1 */
/*!***********************************!*\
  !*** ./diaporama_simplified.json ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = {
		"timeline": [
			{
				"image": "cafes.jpeg",
				"duration": 1000,
				"transitionNext": {
					"uniforms": {
						"smoothness": 0.03
					},
					"name": "undulating burn out",
					"duration": 1000
				}
			},
			{
				"image": "le_long_du_lac.jpeg",
				"duration": 1000,
				"transitionNext": {
					"name": "CrossZoom",
					"duration": 1000
				}
			},
			{
				"image": "champ_sauvage.jpeg",
				"duration": 1000,
				"transitionNext": {
					"name": "PageCurl",
					"duration": 1000
				}
			},
			{
				"image": "moutons.jpg",
				"duration": 1000,
				"transitionNext": {
					"name": "AdvancedMosaic",
					"duration": 1000
				}
			},
			{
				"image": "leopard.jpeg",
				"duration": 1000,
				"transitionNext": {
					"name": "Glitch Memories",
					"duration": 1000
				}
			},
			{
				"image": "shaggy.jpeg",
				"duration": 1000,
				"transitionNext": {
					"name": "doorway",
					"duration": 1000
				}
			},
			{
				"image": "galets.jpeg",
				"duration": 1000,
				"transitionNext": {
					"name": "swap",
					"duration": 1000
				}
			},
			{
				"image": "mer_agite.jpeg",
				"duration": 1000,
				"transitionNext": {
					"name": "cube",
					"duration": 1000
				}
			},
			{
				"image": "sous_le_ponton.jpg",
				"duration": 1000,
				"transitionNext": {
					"name": "ripple",
					"duration": 1000
				}
			},
			{
				"image": "phare.jpeg",
				"duration": 1000,
				"transitionNext": {
					"duration": 1000
				}
			}
		]
	};

/***/ },
/* 2 */
/*!*************************************!*\
  !*** ./~/glsl-transitions/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./transitions.min.json */ 3);


/***/ },
/* 3 */
/*!*************************************************!*\
  !*** ./~/glsl-transitions/transitions.min.json ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "c08c1995cb370520f251",
			"name": "Bounce",
			"owner": "adrian-purser",
			"uniforms": {
				"bounce": 2.5,
				"shadow": 0.075,
				"shadow_colour": [
					0,
					0,
					0,
					0.8
				]
			},
			"html_url": "https://gist.github.com/c08c1995cb370520f251",
			"created_at": "2015-12-18T16:30:58Z",
			"updated_at": "2015-12-18T16:31:28Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float bounce;uniform float shadow;uniform vec4 shadow_colour;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float phase=progress*3.14159265358*bounce;float y=(abs(cos(phase)))*(1.0-sin(progress*(3.14159265358/2.0)));if(progress==0.0) gl_FragColor=texture2D(from,p);else if(p.y<y){float d=y-p.y;if(d>shadow) gl_FragColor=texture2D(from,p);else{float a=((d/shadow)*shadow_colour.a)+(1.0-shadow_colour.a);gl_FragColor=mix(shadow_colour,texture2D(from,p),a);}}else gl_FragColor=texture2D(to,vec2(p.x,p.y-y));}"
		},
		{
			"id": "7ffa32c097c9321533cb",
			"name": "Raytraced Sphere",
			"owner": "Romejanic",
			"uniforms": {},
			"html_url": "https://gist.github.com/7ffa32c097c9321533cb",
			"created_at": "2015-08-28T12:25:49Z",
			"updated_at": "2015-10-20T12:17:20Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;\n#define EPSILON .001\n\n#define REFRACT_INDICIES .33\n\n#define FRESNEL_STRENGTH .8\nstruct Ray{vec3 origin;vec3 direction;};struct RaycastHit{vec3 point;vec3 normal;float det;int type;};vec3 light=vec3(2.,3.,0.);RaycastHit intersectSphere(vec3 position,float radius,const Ray ray){float a=dot(ray.direction,ray.direction);float b=2.*dot(ray.direction,ray.origin-position);float c=dot(ray.origin-position,ray.origin-position)-(radius*radius);float det=(b*b)-4.*a*c;float lambda=(-b-sqrt(det))/(2.*a);vec3 p=ray.origin+lambda*ray.direction;vec3 n=p-position;RaycastHit hit;hit.point=p;hit.normal=normalize(n);hit.det=det;hit.type=(det>=0.&&lambda>=0.)?0:-1;return hit;}float rand(vec2 uv){float a=dot(uv,vec2(92.,80.));float b=dot(uv,vec2(41.,62.));float x=sin(a)+cos(b)*51.;return fract(x);}vec4 shade(Ray ray,vec2 uv){vec3 spherePos=vec3(0.,0.,4.);RaycastHit sphere=intersectSphere(spherePos,1.5,ray);vec3 bg=mix(texture2D(from,uv),texture2D(to,uv),progress).xyz;if(sphere.type==0){vec3 reflectDir=reflect(ray.direction,sphere.normal);Ray reflectRay=Ray(sphere.point+(reflectDir*EPSILON),reflectDir);vec3 l=light-sphere.point;float dif=pow(max(dot(normalize(l),sphere.normal),0.),1.);float spec=0.;spec+=pow(max(dot(normalize(reflectRay.direction),normalize(l)),0.),15.);float ndotr=dot(sphere.normal,ray.direction);float fresnel=pow(1.-abs(ndotr),FRESNEL_STRENGTH);fresnel=mix(.001,1.0,fresnel);uv=vec2(rand(uv),rand(uv))*.05;bg=mix(texture2D(from,uv),texture2D(to,uv),progress).xyz;vec3 ambient=vec3(.2);vec3 diffuse=bg*dif;vec3 specular=vec3(1.)*spec;vec3 final=ambient+diffuse+spec;return vec4(final.xyz,1.);}return vec4(bg,1.);}void main(){vec2 uv=(gl_FragCoord.xy-(resolution.xy/2.))/resolution.y;light.x=2.*progress;vec3 ori=vec3(0.);vec3 dir=vec3(uv.xy,1.);Ray ray=Ray(ori,dir);gl_FragColor=shade(ray,gl_FragCoord.xy/resolution.xy);}"
		},
		{
			"id": "1f6e25d1075bb82e21db",
			"name": "Blur",
			"owner": "giangchau92",
			"uniforms": {
				"size": 0
			},
			"html_url": "https://gist.github.com/1f6e25d1075bb82e21db",
			"created_at": "2015-05-03T16:04:27Z",
			"updated_at": "2015-08-29T14:20:28Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define QUALITY 32\n\n#define N 20\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float size;const float GOLDEN_ANGLE=2.399963229728653;vec4 blur(sampler2D t,vec2 c,float radius){vec4 sum=vec4(0.0);float q=float(QUALITY);for(int i=0;i<QUALITY;++i){float fi=float(i);float a=fi*GOLDEN_ANGLE;float r=sqrt(fi/q)*radius;vec2 p=c+r*vec2(cos(a),sin(a));sum+=texture2D(t,p);}return sum/q;}vec4 blur2(sampler2D t,vec2 p){vec4 sum=vec4(0.0);int count=0;vec2 delta=vec2(1.0,1.0)/resolution.xy;for(int i=-N;i<N;i++){for(int j=-N;j<N;j++){vec2 uv;uv.x=p.x+float(i)*delta.x;uv.y=p.y+float(j)*delta.y;sum+=texture2D(t,uv);count++;}}return sum/float(count);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;gl_FragColor=blur2(from,p);}"
		},
		{
			"id": "1b4862e4e2050a3abebe",
			"name": "glitch displace",
			"owner": "mattdesl",
			"uniforms": {},
			"html_url": "https://gist.github.com/1b4862e4e2050a3abebe",
			"created_at": "2015-01-15T19:48:03Z",
			"updated_at": "2015-08-29T14:13:32Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;highp float random(vec2 co){highp float a=12.9898;highp float b=78.233;highp float c=43758.5453;highp float dt=dot(co.xy,vec2(a,b));highp float sn=mod(dt,3.14);return fract(sin(sn)*c);}float voronoi(in vec2 x){vec2 p=floor(x);vec2 f=fract(x);float res=8.0;for(float j=-1.;j<=1.;j++)for(float i=-1.;i<=1.;i++){vec2 b=vec2(i,j);vec2 r=b-f+random(p+b);float d=dot(r,r);res=min(res,d);}return sqrt(res);}vec2 displace(vec4 tex,vec2 texCoord,float dotDepth,float textureDepth,float strength){float b=voronoi(.003*texCoord+2.0);float g=voronoi(0.2*texCoord);float r=voronoi(texCoord-1.0);vec4 dt=tex*1.0;vec4 dis=dt*dotDepth+1.0-tex*textureDepth;dis.x=dis.x-1.0+textureDepth*dotDepth;dis.y=dis.y-1.0+textureDepth*dotDepth;dis.x*=strength;dis.y*=strength;vec2 res_uv=texCoord;res_uv.x=res_uv.x+dis.x-0.0;res_uv.y=res_uv.y+dis.y;return res_uv;}float ease1(float t){return t==0.0||t==1.0?t:t<0.5?+0.5*pow(2.0,(20.0*t)-10.0):-0.5*pow(2.0,10.0-(t*20.0))+1.0;}float ease2(float t){return t==1.0?t:1.0-pow(2.0,-10.0*t);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec4 color1=texture2D(from,p);vec4 color2=texture2D(to,p);vec2 disp=displace(color1,p,0.33,0.7,1.0-ease1(progress));vec2 disp2=displace(color2,p,0.33,0.5,ease2(progress));vec4 dColor1=texture2D(to,disp);vec4 dColor2=texture2D(from,disp2);float val=ease1(progress);vec3 gray=vec3(dot(min(dColor2,dColor1).rgb,vec3(0.299,0.587,0.114)));dColor2=vec4(gray,1.0);dColor2*=2.0;color1=mix(color1,dColor2,smoothstep(0.0,0.5,progress));color2=mix(color2,dColor1,smoothstep(1.0,0.5,progress));gl_FragColor=mix(color1,color2,val);}"
		},
		{
			"id": "04fd9a7de4012cbb03f6",
			"name": "crosshatch",
			"owner": "pthrasher",
			"uniforms": {},
			"html_url": "https://gist.github.com/04fd9a7de4012cbb03f6",
			"created_at": "2014-12-17T03:04:51Z",
			"updated_at": "2015-08-29T14:11:34Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;const vec2 center=vec2(0.5,0.5);float quadraticInOut(float t){float p=2.0*t*t;return t<0.5?p:-p+(4.0*t)-1.0;}float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;if(progress==0.0){gl_FragColor=texture2D(from,p);}else if(progress==1.0){gl_FragColor=texture2D(to,p);}else{float x=progress;float dist=distance(center,p);float r=x-min(rand(vec2(p.y,0.0)),rand(vec2(0.0,p.x)));float m=dist<=r?1.0:0.0;gl_FragColor=mix(texture2D(from,p),texture2D(to,p),m);}}"
		},
		{
			"id": "8e6226b215548ba12734",
			"name": "undulating burn out",
			"owner": "pthrasher",
			"uniforms": {
				"smoothness": 0.02
			},
			"html_url": "https://gist.github.com/8e6226b215548ba12734",
			"created_at": "2014-12-16T23:01:57Z",
			"updated_at": "2015-08-29T14:11:34Z",
			"stars": 2,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define \tM_PI   3.14159265358979323846\t/* pi */\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float smoothness;const vec2 center=vec2(0.5,0.5);float quadraticInOut(float t){float p=2.0*t*t;return t<0.5?p:-p+(4.0*t)-1.0;}float linearInterp(vec2 range,vec2 domain,float x){return mix(range.x,range.y,smoothstep(domain.x,domain.y,clamp(x,domain.x,domain.y)));}float getGradient(float r,float dist){float grad=smoothstep(-smoothness,0.0,r-dist*(1.0+smoothness));if(r-dist<0.005&&r-dist>-0.005){return -1.0;}else if(r-dist<0.01&&r-dist>-0.005){return -2.0;}return grad;}float round(float a){return floor(a+0.5);}float getWave(vec2 p){vec2 _p=p-center;float rads=atan(_p.y,_p.x);float degs=degrees(rads)+180.0;vec2 range=vec2(0.0,M_PI*30.0);vec2 domain=vec2(0.0,360.0);float ratio=(M_PI*30.0)/360.0;degs=degs*ratio;float x=progress;float magnitude=mix(0.02,0.09,smoothstep(0.0,1.0,x));float offset=mix(40.0,30.0,smoothstep(0.0,1.0,x));float ease_degs=quadraticInOut(sin(degs));float deg_wave_pos=(ease_degs*magnitude)*sin(x*offset);return x+deg_wave_pos;}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;if(progress==0.0){gl_FragColor=texture2D(from,p);}else if(progress==1.0){gl_FragColor=texture2D(to,p);}else{float dist=distance(center,p);float m=getGradient(getWave(p),dist);if(m==-2.0){gl_FragColor=mix(texture2D(from,p),vec4(0.0,0.0,0.0,1.0),0.75);}else{gl_FragColor=mix(texture2D(from,p),texture2D(to,p),m);}}}"
		},
		{
			"id": "b3aa4a8b4f88dc228d4a",
			"name": "test",
			"owner": "brandonyoyo",
			"uniforms": {},
			"html_url": "https://gist.github.com/b3aa4a8b4f88dc228d4a",
			"created_at": "2014-10-26T16:46:18Z",
			"updated_at": "2015-08-29T14:08:09Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;gl_FragColor=mix(texture2D(from,p),texture2D(to,p),progress);}"
		},
		{
			"id": "d1f891c5585fc40b55ea",
			"name": "Star Wipe",
			"owner": "MemoryStomp",
			"uniforms": {},
			"html_url": "https://gist.github.com/d1f891c5585fc40b55ea",
			"created_at": "2014-07-01T06:58:45Z",
			"updated_at": "2015-08-29T14:03:17Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;vec2 circlePoint(float ang){ang+=6.28318*0.15;return vec2(cos(ang),sin(ang));}float cross2d(vec2 a,vec2 b){return (a.x*b.y-a.y*b.x);}float star(vec2 p,float size){if(size<=0.0){return 0.0;}p/=size;vec2 p0=circlePoint(0.0);vec2 p1=circlePoint(6.28318*1.0/5.0);vec2 p2=circlePoint(6.28318*2.0/5.0);vec2 p3=circlePoint(6.28318*3.0/5.0);vec2 p4=circlePoint(6.28318*4.0/5.0);float s0=(cross2d(p1-p0,p-p0));float s1=(cross2d(p2-p1,p-p1));float s2=(cross2d(p3-p2,p-p2));float s3=(cross2d(p4-p3,p-p3));float s4=(cross2d(p0-p4,p-p4));float s5=min(min(min(s0,s1),min(s2,s3)),s4);float s=max(1.0-sign(s0*s1*s2*s3*s4)+sign(s5),0.0);s=sign(2.6-length(p))*s;return max(s,0.0);}void main(){vec2 p=(gl_FragCoord.xy/resolution.xy);vec2 o=p*2.0-1.0;float t=progress*1.4;float c1=star(o,t);float c2=star(o,t-0.1);float border=max(c1-c2,0.0);gl_FragColor=mix(texture2D(from,p),texture2D(to,p),c1)+vec4(border,border,border,0.0);}"
		},
		{
			"id": "5a4d1fb6711076d17e2e",
			"name": "morph",
			"owner": "paniq",
			"uniforms": {},
			"html_url": "https://gist.github.com/5a4d1fb6711076d17e2e",
			"created_at": "2014-07-01T04:52:25Z",
			"updated_at": "2015-08-29T14:03:17Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;const float strength=0.1;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec4 ca=texture2D(from,p);vec4 cb=texture2D(to,p);vec2 oa=(((ca.rg+ca.b)*0.5)*2.0-1.0);vec2 ob=(((cb.rg+cb.b)*0.5)*2.0-1.0);vec2 oc=mix(oa,ob,0.5)*strength;float w0=progress;float w1=1.0-w0;gl_FragColor=mix(texture2D(from,p+oc*w0),texture2D(to,p-oc*w1),progress);}"
		},
		{
			"id": "00973cee8e0353c73305",
			"name": "LumaWipe",
			"owner": "rectalogic",
			"uniforms": {
				"lumaTex": "conical-asym.png",
				"invertLuma": true,
				"softness": 0.25
			},
			"html_url": "https://gist.github.com/00973cee8e0353c73305",
			"created_at": "2014-06-17T02:11:27Z",
			"updated_at": "2015-08-29T14:02:38Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform sampler2D lumaTex;uniform bool invertLuma;uniform float softness;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float luma=texture2D(lumaTex,p).x;if(invertLuma) luma=1.0-luma;vec4 fromColor=texture2D(from,p);vec4 toColor=texture2D(to,p);float time=mix(0.0,1.0+softness,progress);if(luma<=time-softness) gl_FragColor=toColor;else if(luma>=time) gl_FragColor=fromColor;else{float alpha=(time-luma)/softness;gl_FragColor=mix(fromColor,toColor,alpha);}}"
		},
		{
			"id": "0141a38779af3a652c22",
			"name": "simple luma",
			"owner": "gre",
			"uniforms": {
				"luma": "spiral-1.png"
			},
			"html_url": "https://gist.github.com/0141a38779af3a652c22",
			"created_at": "2014-06-13T08:16:10Z",
			"updated_at": "2015-08-29T14:02:31Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform sampler2D luma;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;gl_FragColor=mix(texture2D(from,p),texture2D(to,p),step(texture2D(luma,p).r,progress));}"
		},
		{
			"id": "ee15128c2b87d0e74dee",
			"name": "cube",
			"owner": "gre",
			"uniforms": {
				"persp": 0.7,
				"unzoom": 0.3,
				"reflection": 0.4,
				"floating": 3
			},
			"html_url": "https://gist.github.com/ee15128c2b87d0e74dee",
			"created_at": "2014-06-12T17:13:17Z",
			"updated_at": "2015-12-18T16:20:47Z",
			"stars": 2,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float persp;uniform float unzoom;uniform float reflection;uniform float floating;vec2 project(vec2 p){return p*vec2(1.0,-1.2)+vec2(0.0,-floating/100.);}bool inBounds(vec2 p){return all(lessThan(vec2(0.0),p))&&all(lessThan(p,vec2(1.0)));}vec4 bgColor(vec2 p,vec2 pfr,vec2 pto){vec4 c=vec4(0.0,0.0,0.0,1.0);pfr=project(pfr);if(inBounds(pfr)){c+=mix(vec4(0.0),texture2D(from,pfr),reflection*mix(1.0,0.0,pfr.y));}pto=project(pto);if(inBounds(pto)){c+=mix(vec4(0.0),texture2D(to,pto),reflection*mix(1.0,0.0,pto.y));}return c;}vec2 xskew(vec2 p,float persp,float center){float x=mix(p.x,1.0-p.x,center);return ((vec2(x,(p.y-0.5*(1.0-persp)*x)/(1.0+(persp-1.0)*x))-vec2(0.5-distance(center,0.5),0.0))*vec2(0.5/distance(center,0.5)*(center<0.5?1.0:-1.0),1.0)+vec2(center<0.5?0.0:1.0,0.0));}void main(){vec2 op=gl_FragCoord.xy/resolution.xy;float uz=unzoom*2.0*(0.5-distance(0.5,progress));vec2 p=-uz*0.5+(1.0+uz)*op;vec2 fromP=xskew((p-vec2(progress,0.0))/vec2(1.0-progress,1.0),1.0-mix(progress,0.0,persp),0.0);vec2 toP=xskew(p/vec2(progress,1.0),mix(pow(progress,2.0),1.0,persp),1.0);if(inBounds(fromP)){gl_FragColor=texture2D(from,fromP);}else if(inBounds(toP)){gl_FragColor=texture2D(to,toP);}else{gl_FragColor=bgColor(op,fromP,toP);}}"
		},
		{
			"id": "9b99fc01fd5705008a5b",
			"name": "Glitch Memories",
			"owner": "niseh",
			"uniforms": {},
			"html_url": "https://gist.github.com/9b99fc01fd5705008a5b",
			"created_at": "2014-05-29T19:32:52Z",
			"updated_at": "2015-12-04T07:11:52Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void glitch_memories(sampler2D pic){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 block=floor(gl_FragCoord.xy/vec2(16));vec2 uv_noise=block/vec2(64);uv_noise+=floor(vec2(progress)*vec2(1200.0,3500.0))/vec2(64);float block_thresh=pow(fract(progress*1200.0),2.0)*0.2;float line_thresh=pow(fract(progress*2200.0),3.0)*0.7;vec2 red=p,green=p,blue=p,o=p;vec2 dist=(fract(uv_noise)-0.5)*0.3;red+=dist*0.1;green+=dist*0.2;blue+=dist*0.125;gl_FragColor.r=texture2D(pic,red).r;gl_FragColor.g=texture2D(pic,green).g;gl_FragColor.b=texture2D(pic,blue).b;gl_FragColor.a=1.0;}void main(void){float smoothed=smoothstep(0.,1.,progress);if((smoothed<0.4&&smoothed>0.1)){glitch_memories(from);}else if((smoothed>0.6&&smoothed<0.9)){glitch_memories(to);}else{vec2 p=gl_FragCoord.xy/resolution.xy;gl_FragColor=mix(texture2D(from,p),texture2D(to,p),progress);}}"
		},
		{
			"id": "fe67b3b5149738069537",
			"name": "potleaf",
			"owner": "Flexi23",
			"uniforms": {},
			"html_url": "https://gist.github.com/fe67b3b5149738069537",
			"created_at": "2014-05-28T09:58:30Z",
			"updated_at": "2015-08-29T14:01:55Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec2 leaf_uv=(uv-vec2(0.5))/10./pow(progress,3.5);leaf_uv.y+=0.35;float r=0.18;float o=atan(leaf_uv.y,leaf_uv.x);gl_FragColor=mix(texture2D(from,uv),texture2D(to,uv),1.-step(1.-length(leaf_uv)+r*(1.+sin(o))*(1.+0.9*cos(8.*o))*(1.+0.1*cos(24.*o))*(0.9+0.05*cos(200.*o)),1.));}"
		},
		{
			"id": "b86b90161503a0023231",
			"name": "CrossZoom",
			"owner": "rectalogic",
			"uniforms": {
				"strength": 0.4
			},
			"html_url": "https://gist.github.com/b86b90161503a0023231",
			"created_at": "2014-05-25T01:24:39Z",
			"updated_at": "2015-12-18T16:20:34Z",
			"stars": 4,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float strength;const float PI=3.141592653589793;float Linear_ease(in float begin,in float change,in float duration,in float time){return change*time/duration+begin;}float Exponential_easeInOut(in float begin,in float change,in float duration,in float time){if(time==0.0) return begin;else if(time==duration) return begin+change;time=time/(duration/2.0);if(time<1.0) return change/2.0*pow(2.0,10.0*(time-1.0))+begin;return change/2.0*(-pow(2.0,-10.0*(time-1.0))+2.0)+begin;}float Sinusoidal_easeInOut(in float begin,in float change,in float duration,in float time){return -change/2.0*(cos(PI*time/duration)-1.0)+begin;}float random(in vec3 scale,in float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}vec3 crossFade(in vec2 uv,in float dissolve){return mix(texture2D(from,uv).rgb,texture2D(to,uv).rgb,dissolve);}void main(){vec2 texCoord=gl_FragCoord.xy/resolution.xy;vec2 center=vec2(Linear_ease(0.25,0.5,1.0,progress),0.5);float dissolve=Exponential_easeInOut(0.0,1.0,1.0,progress);float strength=Sinusoidal_easeInOut(0.0,strength,0.5,progress);vec3 color=vec3(0.0);float total=0.0;vec2 toCenter=center-texCoord;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=0.0;t<=40.0;t++){float percent=(t+offset)/40.0;float weight=4.0*(percent-percent*percent);color+=crossFade(texCoord+toCenter*percent*strength,dissolve)*weight;total+=weight;}gl_FragColor=vec4(color/total,1.0);}"
		},
		{
			"id": "ce9279de351984f0ad27",
			"name": "Slide",
			"owner": "rectalogic",
			"uniforms": {
				"translateX": 1,
				"translateY": 0
			},
			"html_url": "https://gist.github.com/ce9279de351984f0ad27",
			"created_at": "2014-05-25T01:13:20Z",
			"updated_at": "2015-08-29T14:01:48Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float translateX;uniform float translateY;void main(){vec2 texCoord=gl_FragCoord.xy/resolution.xy;float x=progress*translateX;float y=progress*translateY;if(x>=0.0&&y>=0.0){if(texCoord.x>=x&&texCoord.y>=y){gl_FragColor=texture2D(from,texCoord-vec2(x,y));}else{vec2 uv;if(x>0.0) uv=vec2(x-1.0,y);else if(y>0.0) uv=vec2(x,y-1.0);gl_FragColor=texture2D(to,texCoord-uv);}}else if(x<=0.0&&y<=0.0){if(texCoord.x<=(1.0+x)&&texCoord.y<=(1.0+y)) gl_FragColor=texture2D(from,texCoord-vec2(x,y));else{vec2 uv;if(x<0.0) uv=vec2(x+1.0,y);else if(y<0.0) uv=vec2(x,y+1.0);gl_FragColor=texture2D(to,texCoord-uv);}}else gl_FragColor=vec4(0.0);}"
		},
		{
			"id": "154a99fbe5300fb5c279",
			"name": "pinwheel",
			"owner": "mrspeaker",
			"uniforms": {},
			"html_url": "https://gist.github.com/154a99fbe5300fb5c279",
			"created_at": "2014-05-23T21:56:59Z",
			"updated_at": "2015-08-29T14:01:45Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float circPos=atan(p.y-0.5,p.x-0.5)+progress;float modPos=mod(circPos,3.1415/4.);float signed=sign(progress-modPos);float smoothed=smoothstep(0.,1.,signed);if(smoothed>0.5){gl_FragColor=texture2D(to,p);}else{gl_FragColor=texture2D(from,p);}}"
		},
		{
			"id": "e54a807cdb66c8b16a34",
			"name": "Kaleidoscope",
			"owner": "nwoeanhinnogaehr",
			"uniforms": {
				"speed": 1,
				"angle": 2,
				"power": 2
			},
			"html_url": "https://gist.github.com/e54a807cdb66c8b16a34",
			"created_at": "2014-05-23T19:02:46Z",
			"updated_at": "2015-08-29T14:01:44Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float speed;uniform float angle;uniform float power;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 q=p;float t=pow(progress,power)*speed;p=p-0.5;for(int i=0;i<7;i++){p=vec2(sin(t)*p.x+cos(t)*p.y,sin(t)*p.y-cos(t)*p.x);t+=angle;p=abs(mod(p,2.0)-1.0);}abs(mod(p,1.0));gl_FragColor=mix(mix(texture2D(from,q),texture2D(to,q),progress),mix(texture2D(from,p),texture2D(to,p),progress),1.0-2.0*abs(progress-0.5));}"
		},
		{
			"id": "408045772d255df97520",
			"name": "SimpleFlip",
			"owner": "nwoeanhinnogaehr",
			"uniforms": {},
			"html_url": "https://gist.github.com/408045772d255df97520",
			"created_at": "2014-05-23T18:42:58Z",
			"updated_at": "2015-08-29T14:01:44Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 q=p;p.x=(p.x-0.5)/abs(progress-0.5)*0.5+0.5;vec4 a=texture2D(from,p);vec4 b=texture2D(to,p);gl_FragColor=vec4(mix(a,b,step(0.5,progress)).rgb*step(abs(q.x-0.5),abs(progress-0.5)),1.0);}"
		},
		{
			"id": "a070cbd69e2535e757f1",
			"name": "DoomScreenTransition",
			"owner": "zeh",
			"uniforms": {
				"barWidth": 10,
				"noise": 0.2,
				"amplitude": 2,
				"frequency": 1
			},
			"html_url": "https://gist.github.com/a070cbd69e2535e757f1",
			"created_at": "2014-05-23T18:00:18Z",
			"updated_at": "2015-08-29T14:01:44Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform int barWidth;uniform float amplitude;uniform float noise;uniform float frequency;float rand(int num){return fract(mod(float(num)*67123.313,12.0)*sin(float(num)*10.3)*cos(float(num)));}float wave(int num){float fn=float(num)*frequency*0.1*float(barWidth);return cos(fn*0.5)*cos(fn*0.13)*sin((fn+10.0)*0.3)/2.0+0.5;}float pos(int num){return noise==0.0?wave(num):mix(wave(num),rand(num),noise);}void main(){int bar=int(gl_FragCoord.x)/barWidth;float scale=1.0+pos(bar)*amplitude;float phase=progress*scale;float posY=gl_FragCoord.y/resolution.y;vec2 p;vec4 c;if(phase+posY<1.0){p=vec2(gl_FragCoord.x,gl_FragCoord.y+mix(0.0,resolution.y,phase))/resolution.xy;c=texture2D(from,p);}else{p=gl_FragCoord.xy/resolution.xy;c=texture2D(to,p);}gl_FragColor=c;}"
		},
		{
			"id": "a830822b23e846e25d2d",
			"name": "DreamyZoom",
			"owner": "zeh",
			"uniforms": {
				"rotation": 6,
				"scale": 1.2
			},
			"html_url": "https://gist.github.com/a830822b23e846e25d2d",
			"created_at": "2014-05-23T15:27:25Z",
			"updated_at": "2015-08-29T14:01:44Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define DEG2RAD 0.03926990816987241548078304229099 // 1/180*PI\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float rotation;uniform float scale;void main(){float phase=progress<0.5?progress*2.0:(progress-0.5)*2.0;float angleOffset=progress<0.5?mix(0.0,rotation*DEG2RAD,phase):mix(-rotation*DEG2RAD,0.0,phase);float newScale=progress<0.5?mix(1.0,scale,phase):mix(scale,1.0,phase);vec2 center=vec2(0,0);float maxRes=max(resolution.x,resolution.y);float resX=resolution.x/maxRes*0.5;float resY=resolution.y/maxRes*0.5;vec2 p=(gl_FragCoord.xy/maxRes-vec2(resX,resY))/newScale;float angle=atan(p.y,p.x)+angleOffset;float dist=distance(center,p);p.x=cos(angle)*dist+resX;p.y=sin(angle)*dist+resY;vec4 c=progress<0.5?texture2D(from,p):texture2D(to,p);gl_FragColor=c+(progress<0.5?mix(0.0,1.0,phase):mix(1.0,0.0,phase));}"
		},
		{
			"id": "b6720916aa3f035949bc",
			"name": "squareswipe",
			"owner": "gre",
			"uniforms": {
				"squares": [
					10,
					10
				],
				"direction": [
					1,
					-0.5
				],
				"smoothness": 1.6
			},
			"html_url": "https://gist.github.com/b6720916aa3f035949bc",
			"created_at": "2014-05-23T12:09:38Z",
			"updated_at": "2015-08-29T14:01:44Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform ivec2 squares;uniform vec2 direction;uniform float smoothness;const vec2 center=vec2(0.5,0.5);void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 v=normalize(direction);if(v!=vec2(0.0)) v/=abs(v.x)+abs(v.y);float d=v.x*center.x+v.y*center.y;float offset=smoothness;float pr=smoothstep(-offset,0.0,v.x*p.x+v.y*p.y-(d-0.5+progress*(1.+offset)));vec2 squarep=fract(p*vec2(squares));vec2 squaremin=vec2(pr/2.0);vec2 squaremax=vec2(1.0-pr/2.0);float a=all(lessThan(squaremin,squarep))&&all(lessThan(squarep,squaremax))?1.0:0.0;gl_FragColor=mix(texture2D(from,p),texture2D(to,p),a);}"
		},
		{
			"id": "169781bb76f310e2bfde",
			"name": "TilesWaveBottomLeftToTopRight",
			"owner": "numb3r23",
			"uniforms": {
				"tileSize": [
					64,
					64
				],
				"checkerDistance": 0,
				"flipX": false,
				"flipY": false,
				"preTileSingleColor": false,
				"postTileSingleColor": false
			},
			"html_url": "https://gist.github.com/169781bb76f310e2bfde",
			"created_at": "2014-05-21T22:50:48Z",
			"updated_at": "2015-08-29T14:01:42Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform vec2 tileSize;uniform float checkerDistance;uniform bool flipX;uniform bool flipY;uniform bool preTileSingleColor;uniform bool postTileSingleColor;vec2 tile2Global(vec2 tex,vec2 tileNum,bool tileSingleColor){vec2 perTile=tileSize/resolution.xy;return tileNum*perTile+(tileSingleColor?vec2(0):tex*perTile);}void main(void){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 fragColor=vec4(1,1,0,1);vec2 posInTile=mod(vec2(gl_FragCoord),tileSize);vec2 tileNum=floor(vec2(gl_FragCoord)/tileSize);int num=int(tileNum.x);vec2 totalTiles=ceil(resolution.xy/tileSize);float countTiles=totalTiles.x*totalTiles.y;vec2 perTile=ceil(tileSize/resolution.xy);float offset=0.0;offset=(tileNum.y+tileNum.x*perTile.y)/(sqrt(countTiles)*2.0);float timeOffset=(progress-offset)*countTiles;timeOffset=clamp(timeOffset,0.0,0.5);float sinTime=1.0-abs(cos(fract(timeOffset)*3.1415926));fragColor.rg=uv;fragColor.b=sinTime;vec2 texC=posInTile/tileSize;if(sinTime<=0.5){if(flipX){if((texC.x<sinTime)||(texC.x>1.0-sinTime)){discard;}if(texC.x<0.5){texC.x=(texC.x-sinTime)*0.5/(0.5-sinTime);}else{texC.x=(texC.x-0.5)*0.5/(0.5-sinTime)+0.5;}}if(flipY){if((texC.y<sinTime)||(texC.y>1.0-sinTime)){discard;}if(texC.y<0.5){texC.y=(texC.y-sinTime)*0.5/(0.5-sinTime);}else{texC.y=(texC.y-0.5)*0.5/(0.5-sinTime)+0.5;}}fragColor=texture2D(from,tile2Global(texC,tileNum,preTileSingleColor));}else{if(flipX){if((texC.x>sinTime)||(texC.x<1.0-sinTime)){discard;}if(texC.x<0.5){texC.x=(texC.x-sinTime)*0.5/(0.5-sinTime);}else{texC.x=(texC.x-0.5)*0.5/(0.5-sinTime)+0.5;}texC.x=1.0-texC.x;}if(flipY){if((texC.y>sinTime)||(texC.y<1.0-sinTime)){discard;}if(texC.y<0.5){texC.y=(texC.y-sinTime)*0.5/(0.5-sinTime);}else{texC.y=(texC.y-0.5)*0.5/(0.5-sinTime)+0.5;}texC.y=1.0-texC.y;}fragColor.rgb=texture2D(to,tile2Global(texC,tileNum,postTileSingleColor)).rgb;}gl_FragColor=fragColor;}"
		},
		{
			"id": "5ebd3442a208861c7a8a",
			"name": "TilesScanline",
			"owner": "numb3r23",
			"uniforms": {},
			"html_url": "https://gist.github.com/5ebd3442a208861c7a8a",
			"created_at": "2014-05-21T22:49:22Z",
			"updated_at": "2015-08-29T14:01:42Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;const vec2 tileSize=vec2(64,64);const float checkerDistance=0.015;const bool flipX=true;const bool flipY=false;const bool preTileSingleColor=false;const bool postTileSingleColor=false;vec2 tile2Global(vec2 tex,vec2 tileNum,bool tileSingleColor){vec2 perTile=tileSize/resolution.xy;return tileNum*perTile+(tileSingleColor?vec2(0):tex*perTile);}void main(void){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 fragColor=vec4(1,1,0,1);vec2 posInTile=mod(vec2(gl_FragCoord),tileSize);vec2 tileNum=floor(vec2(gl_FragCoord)/tileSize);int num=int(tileNum.x);vec2 totalTiles=ceil(resolution.xy/tileSize);float countTiles=totalTiles.x*totalTiles.y;vec2 perTile=ceil(tileSize/resolution.xy);float offset=0.0;offset=(tileNum.x+tileNum.y*totalTiles.x)/countTiles;float timeOffset=(progress-offset)*countTiles;timeOffset=clamp(timeOffset,0.0,0.5);float sinTime=1.0-abs(cos(fract(timeOffset)*3.1415926));fragColor.rg=uv;fragColor.b=sinTime;vec2 texC=posInTile/tileSize;if(sinTime<=0.5){if(flipX){if((texC.x<sinTime)||(texC.x>1.0-sinTime)){discard;}if(texC.x<0.5){texC.x=(texC.x-sinTime)*0.5/(0.5-sinTime);}else{texC.x=(texC.x-0.5)*0.5/(0.5-sinTime)+0.5;}}if(flipY){if((texC.y<sinTime)||(texC.y>1.0-sinTime)){discard;}if(texC.y<0.5){texC.y=(texC.y-sinTime)*0.5/(0.5-sinTime);}else{texC.y=(texC.y-0.5)*0.5/(0.5-sinTime)+0.5;}}fragColor=texture2D(from,tile2Global(texC,tileNum,preTileSingleColor));}else{if(flipX){if((texC.x>sinTime)||(texC.x<1.0-sinTime)){discard;}if(texC.x<0.5){texC.x=(texC.x-sinTime)*0.5/(0.5-sinTime);}else{texC.x=(texC.x-0.5)*0.5/(0.5-sinTime)+0.5;}texC.x=1.0-texC.x;}if(flipY){if((texC.y>sinTime)||(texC.y<1.0-sinTime)){discard;}if(texC.y<0.5){texC.y=(texC.y-sinTime)*0.5/(0.5-sinTime);}else{texC.y=(texC.y-0.5)*0.5/(0.5-sinTime)+0.5;}texC.y=1.0-texC.y;}fragColor.rgb=texture2D(to,tile2Global(texC,tileNum,postTileSingleColor)).rgb;}gl_FragColor=fragColor;}"
		},
		{
			"id": "9e86d2712e123542758b",
			"name": "Dreamy",
			"owner": "mikolalysenko",
			"uniforms": {},
			"html_url": "https://gist.github.com/9e86d2712e123542758b",
			"created_at": "2014-05-21T14:55:01Z",
			"updated_at": "2015-08-29T14:01:39Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;vec2 offset(float progress,float x,float theta){float phase=progress*progress+progress+theta;float shifty=0.03*progress*cos(10.0*(progress+x));return vec2(0,shifty);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;gl_FragColor=mix(texture2D(from,p+offset(progress,p.x,0.0)),texture2D(to,p+offset(1.0-progress,p.x,3.14)),progress);}"
		},
		{
			"id": "21d2fdd24c706952dc8c",
			"name": "AdvancedMosaic",
			"owner": "corporateshark",
			"uniforms": {},
			"html_url": "https://gist.github.com/21d2fdd24c706952dc8c",
			"created_at": "2014-05-21T14:45:52Z",
			"updated_at": "2015-08-29T14:01:39Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void main(void){vec2 p=gl_FragCoord.xy/resolution.xy;float T=progress;float S0=1.0;float S1=50.0;float S2=1.0;float Half=0.5;float PixelSize=(T<Half)?mix(S0,S1,T/Half):mix(S1,S2,(T-Half)/Half);vec2 D=PixelSize/resolution.xy;vec2 UV=(p+vec2(-0.5))/D;vec2 Coord=clamp(D*(ceil(UV+vec2(-0.5)))+vec2(0.5),vec2(0.0),vec2(1.0));vec4 C0=texture2D(from,Coord);vec4 C1=texture2D(to,Coord);gl_FragColor=mix(C0,C1,T);}"
		},
		{
			"id": "cacfedb8cca0f5ce3f7c",
			"name": "Swirl",
			"owner": "corporateshark",
			"uniforms": {},
			"html_url": "https://gist.github.com/cacfedb8cca0f5ce3f7c",
			"created_at": "2014-05-21T14:43:04Z",
			"updated_at": "2015-08-29T14:01:39Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void main(void){float Radius=1.0;float T=progress;vec2 UV=gl_FragCoord.xy/resolution.xy;UV-=vec2(0.5,0.5);float Dist=length(UV);if(Dist<Radius){float Percent=(Radius-Dist)/Radius;float A=(T<=0.5)?mix(0.0,1.0,T/0.5):mix(1.0,0.0,(T-0.5)/0.5);float Theta=Percent*Percent*A*8.0*3.14159;float S=sin(Theta);float C=cos(Theta);UV=vec2(dot(UV,vec2(C,-S)),dot(UV,vec2(S,C)));}UV+=vec2(0.5,0.5);vec4 C0=texture2D(from,UV);vec4 C1=texture2D(to,UV);gl_FragColor=mix(C0,C1,T);}"
		},
		{
			"id": "b9f8e5675c647e615419",
			"name": "DefocusBlur",
			"owner": "corporateshark",
			"uniforms": {},
			"html_url": "https://gist.github.com/b9f8e5675c647e615419",
			"created_at": "2014-05-21T10:12:14Z",
			"updated_at": "2015-12-04T07:14:06Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform float progress;uniform vec2 resolution;uniform sampler2D from;uniform sampler2D to;void main(void){vec2 p=gl_FragCoord.xy/resolution.xy;float T=progress;float S0=1.0;float S1=50.0;float S2=1.0;float Half=0.5;float PixelSize=(T<Half)?mix(S0,S1,T/Half):mix(S1,S2,(T-Half)/Half);vec2 D=PixelSize/resolution.xy;vec2 UV=(gl_FragCoord.xy/resolution.xy);const int NumTaps=12;vec2 Disk[NumTaps];Disk[0]=vec2(-.326,-.406);Disk[1]=vec2(-.840,-.074);Disk[2]=vec2(-.696,.457);Disk[3]=vec2(-.203,.621);Disk[4]=vec2(.962,-.195);Disk[5]=vec2(.473,-.480);Disk[6]=vec2(.519,.767);Disk[7]=vec2(.185,-.893);Disk[8]=vec2(.507,.064);Disk[9]=vec2(.896,.412);Disk[10]=vec2(-.322,-.933);Disk[11]=vec2(-.792,-.598);vec4 C0=texture2D(from,UV);vec4 C1=texture2D(to,UV);for(int i=0;i!=NumTaps;i++){C0+=texture2D(from,Disk[i]*D+UV);C1+=texture2D(to,Disk[i]*D+UV);}C0/=float(NumTaps+1);C1/=float(NumTaps+1);gl_FragColor=mix(C0,C1,T);}"
		},
		{
			"id": "2a5fa2f77c883dd661f9",
			"name": "colourDistance",
			"owner": "P-Seebauer",
			"uniforms": {
				"interpolationPower": 5
			},
			"html_url": "https://gist.github.com/2a5fa2f77c883dd661f9",
			"created_at": "2014-05-21T07:10:21Z",
			"updated_at": "2015-12-04T07:10:31Z",
			"stars": 2,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float interpolationPower;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec4 fTex=texture2D(from,p);vec4 tTex=texture2D(to,p);gl_FragColor=mix(distance(fTex,tTex)>progress?fTex:tTex,tTex,pow(progress,interpolationPower));}"
		},
		{
			"id": "b93818de23d4511fde10",
			"name": "Dissolve",
			"owner": "nwoeanhinnogaehr",
			"uniforms": {
				"blocksize": 1
			},
			"html_url": "https://gist.github.com/b93818de23d4511fde10",
			"created_at": "2014-05-20T23:40:57Z",
			"updated_at": "2015-08-29T14:01:38Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float blocksize;float rand(vec2 co){return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;gl_FragColor=mix(texture2D(from,p),texture2D(to,p),step(rand(floor(gl_FragCoord.xy/blocksize)),progress));}"
		},
		{
			"id": "b185145363d65751009b",
			"name": "HSVfade",
			"owner": "nwoeanhinnogaehr",
			"uniforms": {},
			"html_url": "https://gist.github.com/b185145363d65751009b",
			"created_at": "2014-05-20T23:21:27Z",
			"updated_at": "2015-12-04T07:14:09Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;vec3 hsv2rgb(vec3 c){const vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(c.xxx+K.xyz)*6.0-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);}vec3 rgb2hsv(vec3 c){const vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y);return vec3(abs(q.z+(q.w-q.y)/(6.0*d+0.001)),d/(q.x+0.001),q.x);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec3 a=rgb2hsv(texture2D(from,p).rgb);vec3 b=rgb2hsv(texture2D(to,p).rgb);vec3 m=mix(a,b,progress);gl_FragColor=vec4(hsv2rgb(m),1.0);}"
		},
		{
			"id": "f6fc39f4cfcbb97f96a6",
			"name": "Fold",
			"owner": "nwoeanhinnogaehr",
			"uniforms": {},
			"html_url": "https://gist.github.com/f6fc39f4cfcbb97f96a6",
			"created_at": "2014-05-20T23:14:23Z",
			"updated_at": "2015-08-29T14:01:38Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec4 a=texture2D(from,(p-vec2(progress,0.0))/vec2(1.0-progress,1.0));vec4 b=texture2D(to,p/vec2(progress,1.0));gl_FragColor=mix(a,b,step(p.x,progress));}"
		},
		{
			"id": "80c2d40cac3f98453176",
			"name": "linearblur",
			"owner": "gre",
			"uniforms": {
				"intensity": 0.1
			},
			"html_url": "https://gist.github.com/80c2d40cac3f98453176",
			"created_at": "2014-05-20T22:02:35Z",
			"updated_at": "2015-12-04T07:14:08Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float intensity;const int PASSES=8;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec4 c1=vec4(0.0),c2=vec4(0.0);float disp=intensity*(0.5-distance(0.5,progress));for(int xi=0;xi<PASSES;++xi){float x=float(xi)/float(PASSES)-0.5;for(int yi=0;yi<PASSES;++yi){float y=float(yi)/float(PASSES)-0.5;vec2 v=vec2(x,y);float d=disp;c1+=texture2D(from,p+d*v);c2+=texture2D(to,p+d*v);}}c1/=float(PASSES*PASSES);c2/=float(PASSES*PASSES);gl_FragColor=mix(c1,c2,progress);}"
		},
		{
			"id": "c528607361d90a072e98",
			"name": "pixelize",
			"owner": "benraziel",
			"uniforms": {},
			"html_url": "https://gist.github.com/c528607361d90a072e98",
			"created_at": "2014-05-20T19:32:42Z",
			"updated_at": "2015-12-04T07:14:14Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){float revProgress=(1.0-progress);float distFromEdges=min(progress,revProgress);float squareSize=(50.0*distFromEdges)+1.0;vec2 p=(floor((gl_FragCoord.xy+squareSize*0.5)/squareSize)*squareSize)/resolution.xy;vec4 fromColor=texture2D(from,p);vec4 toColor=texture2D(to,p);gl_FragColor=mix(fromColor,toColor,progress);}"
		},
		{
			"id": "abd06f4d23ab2ff4ed7a",
			"name": "random_squares",
			"owner": "benraziel",
			"uniforms": {},
			"html_url": "https://gist.github.com/abd06f4d23ab2ff4ed7a",
			"created_at": "2014-05-20T19:07:25Z",
			"updated_at": "2015-12-04T07:14:11Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){float revProgress=(1.0-progress);float distFromEdges=min(progress,revProgress);vec2 p=gl_FragCoord.xy/resolution.xy;vec4 fromColor=texture2D(from,p);vec4 toColor=texture2D(to,p);float squareSize=20.0;float flickerSpeed=60.0;vec2 seed=floor(gl_FragCoord.xy/squareSize)*floor(distFromEdges*flickerSpeed);gl_FragColor=mix(fromColor,toColor,progress)+rand(seed)*distFromEdges*0.5;}"
		},
		{
			"id": "791d0f058ae6a83e0c15",
			"name": "PolkaDotsCurtain",
			"owner": "bobylito",
			"uniforms": {
				"center": [
					1,
					1
				],
				"dots": 20
			},
			"html_url": "https://gist.github.com/791d0f058ae6a83e0c15",
			"created_at": "2014-05-20T16:55:46Z",
			"updated_at": "2015-08-29T14:01:38Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;const float SQRT_2=1.414213562373;uniform float dots;uniform vec2 center;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float x=progress/2.0;bool nextImage=distance(fract(p*dots),vec2(0.5,0.5))<(2.0*x/distance(p,center));if(nextImage) gl_FragColor=texture2D(to,p);else gl_FragColor=texture2D(from,p);}"
		},
		{
			"id": "166e496a19a4fdbf1aae",
			"name": "PageCurl",
			"owner": "corporateshark",
			"uniforms": {},
			"html_url": "https://gist.github.com/166e496a19a4fdbf1aae",
			"created_at": "2014-05-20T12:37:15Z",
			"updated_at": "2015-08-29T14:01:37Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;const float MIN_AMOUNT=-0.16;const float MAX_AMOUNT=1.3;float amount=progress*(MAX_AMOUNT-MIN_AMOUNT)+MIN_AMOUNT;const float PI=3.141592653589793;const float scale=512.0;const float sharpness=3.0;float cylinderCenter=amount;float cylinderAngle=2.0*PI*amount;const float cylinderRadius=1.0/PI/2.0;vec3 hitPoint(float hitAngle,float yc,vec3 point,mat3 rrotation){float hitPoint=hitAngle/(2.0*PI);point.y=hitPoint;return rrotation*point;}vec4 antiAlias(vec4 color1,vec4 color2,float distanc){distanc*=scale;if(distanc<0.0) return color2;if(distanc>2.0) return color1;float dd=pow(1.0-distanc/2.0,sharpness);return ((color2-color1)*dd)+color1;}float distanceToEdge(vec3 point){float dx=abs(point.x>0.5?1.0-point.x:point.x);float dy=abs(point.y>0.5?1.0-point.y:point.y);if(point.x<0.0) dx=-point.x;if(point.x>1.0) dx=point.x-1.0;if(point.y<0.0) dy=-point.y;if(point.y>1.0) dy=point.y-1.0;if((point.x<0.0||point.x>1.0)&&(point.y<0.0||point.y>1.0)) return sqrt(dx*dx+dy*dy);return min(dx,dy);}vec4 seeThrough(float yc,vec2 p,mat3 rotation,mat3 rrotation){float hitAngle=PI-(acos(yc/cylinderRadius)-cylinderAngle);vec3 point=hitPoint(hitAngle,yc,rotation*vec3(p,1.0),rrotation);if(yc<=0.0&&(point.x<0.0||point.y<0.0||point.x>1.0||point.y>1.0)){vec2 texCoord=gl_FragCoord.xy/resolution.xy;return texture2D(to,texCoord);}if(yc>0.0) return texture2D(from,p);vec4 color=texture2D(from,point.xy);vec4 tcolor=vec4(0.0);return antiAlias(color,tcolor,distanceToEdge(point));}vec4 seeThroughWithShadow(float yc,vec2 p,vec3 point,mat3 rotation,mat3 rrotation){float shadow=distanceToEdge(point)*30.0;shadow=(1.0-shadow)/3.0;if(shadow<0.0) shadow=0.0;else shadow*=amount;vec4 shadowColor=seeThrough(yc,p,rotation,rrotation);shadowColor.r-=shadow;shadowColor.g-=shadow;shadowColor.b-=shadow;return shadowColor;}vec4 backside(float yc,vec3 point){vec4 color=texture2D(from,point.xy);float gray=(color.r+color.b+color.g)/15.0;gray+=(8.0/10.0)*(pow(1.0-abs(yc/cylinderRadius),2.0/10.0)/2.0+(5.0/10.0));color.rgb=vec3(gray);return color;}vec4 behindSurface(float yc,vec3 point,mat3 rrotation){float shado=(1.0-((-cylinderRadius-yc)/amount*7.0))/6.0;shado*=1.0-abs(point.x-0.5);yc=(-cylinderRadius-cylinderRadius-yc);float hitAngle=(acos(yc/cylinderRadius)+cylinderAngle)-PI;point=hitPoint(hitAngle,yc,point,rrotation);if(yc<0.0&&point.x>=0.0&&point.y>=0.0&&point.x<=1.0&&point.y<=1.0&&(hitAngle<PI||amount>0.5)){shado=1.0-(sqrt(pow(point.x-0.5,2.0)+pow(point.y-0.5,2.0))/(71.0/100.0));shado*=pow(-yc/cylinderRadius,3.0);shado*=0.5;}else{shado=0.0;}vec2 texCoord=gl_FragCoord.xy/resolution.xy;return vec4(texture2D(to,texCoord).rgb-shado,1.0);}void main(){vec2 texCoord=gl_FragCoord.xy/resolution.xy;const float angle=30.0*PI/180.0;float c=cos(-angle);float s=sin(-angle);mat3 rotation=mat3(c,s,0,-s,c,0,0.12,0.258,1);c=cos(angle);s=sin(angle);mat3 rrotation=mat3(c,s,0,-s,c,0,0.15,-0.5,1);vec3 point=rotation*vec3(texCoord,1.0);float yc=point.y-cylinderCenter;if(yc<-cylinderRadius){gl_FragColor=behindSurface(yc,point,rrotation);return;}if(yc>cylinderRadius){gl_FragColor=texture2D(from,texCoord);return;}float hitAngle=(acos(yc/cylinderRadius)+cylinderAngle)-PI;float hitAngleMod=mod(hitAngle,2.0*PI);if((hitAngleMod>PI&&amount<0.5)||(hitAngleMod>PI/2.0&&amount<0.0)){gl_FragColor=seeThrough(yc,texCoord,rotation,rrotation);return;}point=hitPoint(hitAngle,yc,point,rrotation);if(point.x<0.0||point.y<0.0||point.x>1.0||point.y>1.0){gl_FragColor=seeThroughWithShadow(yc,texCoord,point,rotation,rrotation);return;}vec4 color=backside(yc,point);vec4 otherColor;if(yc<0.0){float shado=1.0-(sqrt(pow(point.x-0.5,2.0)+pow(point.y-0.5,2.0))/0.71);shado*=pow(-yc/cylinderRadius,3.0);shado*=0.5;otherColor=vec4(0.0,0.0,0.0,shado);}else{otherColor=texture2D(from,texCoord);}color=antiAlias(color,otherColor,cylinderRadius-abs(yc));vec4 cl=seeThroughWithShadow(yc,texCoord,point,rotation,rrotation);float dist=distanceToEdge(point);gl_FragColor=antiAlias(color,cl,dist);}"
		},
		{
			"id": "06450f79cab706705bf9",
			"name": "Polka_dots",
			"owner": "bobylito",
			"uniforms": {
				"dots": 5
			},
			"html_url": "https://gist.github.com/06450f79cab706705bf9",
			"created_at": "2014-05-20T12:09:38Z",
			"updated_at": "2015-08-29T14:01:37Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float dots;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float x=progress;bool nextImage=distance(fract(p*dots),vec2(0.5,0.5))<x;if(nextImage) gl_FragColor=texture2D(to,p);else gl_FragColor=texture2D(from,p);}"
		},
		{
			"id": "3da654388c3f3cd031c0",
			"name": "burn",
			"owner": "gre",
			"uniforms": {
				"color": [
					0.9,
					0.4,
					0.2
				]
			},
			"html_url": "https://gist.github.com/3da654388c3f3cd031c0",
			"created_at": "2014-05-20T09:06:02Z",
			"updated_at": "2015-12-04T07:14:12Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform vec3 color;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;gl_FragColor=mix(texture2D(from,p)+vec4(progress*color,1.0),texture2D(to,p)+vec4((1.0-progress)*color,1.0),progress);}"
		},
		{
			"id": "e5f807b5dffb09fc7527",
			"name": "FinalGaussianNoise",
			"owner": "mandubian",
			"uniforms": {},
			"html_url": "https://gist.github.com/e5f807b5dffb09fc7527",
			"created_at": "2014-05-19T21:34:07Z",
			"updated_at": "2015-12-04T07:10:35Z",
			"stars": 2,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;float Rand(vec2 v){return fract(sin(dot(v.xy,vec2(12.9898,78.233)))*43758.5453);}float Gaussian(float p,float center,float c){return 0.75*exp(-pow((p-center)/c,2.));}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float c=cos(Gaussian(progress*(1.+Gaussian(progress*Rand(p),0.5,0.5)),0.5,0.25));vec2 d=p*c;gl_FragColor=mix(texture2D(from,d),texture2D(to,d),progress);}"
		},
		{
			"id": "130bb7b7affedbda9df5",
			"name": "Mosaic",
			"owner": "Xaychru",
			"uniforms": {
				"endx": 0,
				"endy": -1
			},
			"html_url": "https://gist.github.com/130bb7b7affedbda9df5",
			"created_at": "2014-05-19T16:51:58Z",
			"updated_at": "2015-08-29T14:01:36Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define PI 3.14159265358979323\n\n#define POW2(X) X*X\n\n#define POW3(X) X*X*X\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform int endx;uniform int endy;float Rand(vec2 v){return fract(sin(dot(v.xy,vec2(12.9898,78.233)))*43758.5453);}vec2 Rotate(vec2 v,float a){mat2 rm=mat2(cos(a),-sin(a),sin(a),cos(a));return rm*v;}float CosInterpolation(float x){return -cos(x*PI)/2.+.5;}void main(){vec2 p=gl_FragCoord.xy/resolution.xy-.5;vec2 rp=p;float rpr=(progress*2.-1.);float z=-(rpr*rpr*2.)+3.;float az=abs(z);rp*=az;rp+=mix(vec2(.5,.5),vec2(float(endx)+.5,float(endy)+.5),POW2(CosInterpolation(progress)));vec2 mrp=mod(rp,1.);vec2 crp=rp;bool onEnd=int(floor(crp.x))==endx&&int(floor(crp.y))==endy;if(!onEnd){float ang=float(int(Rand(floor(crp))*4.))*.5*PI;mrp=vec2(.5)+Rotate(mrp-vec2(.5),ang);}if(onEnd||Rand(floor(crp))>.5){gl_FragColor=texture2D(to,mrp);}else{gl_FragColor=texture2D(from,mrp);}}"
		},
		{
			"id": "ce1d48f0ce00bb379750",
			"name": "Radial",
			"owner": "Xaychru",
			"uniforms": {},
			"html_url": "https://gist.github.com/ce1d48f0ce00bb379750",
			"created_at": "2014-05-19T15:18:28Z",
			"updated_at": "2015-08-29T14:01:36Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define PI 3.141592653589\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 rp=p*2.-1.;float a=atan(rp.y,rp.x);float pa=progress*PI*2.5-PI*1.25;vec4 fromc=texture2D(from,p);vec4 toc=texture2D(to,p);if(a>pa){gl_FragColor=mix(toc,fromc,smoothstep(0.,1.,(a-pa)));}else{gl_FragColor=toc;}}"
		},
		{
			"id": "c3bc914de09227713787",
			"name": "ButterflyWaveScrawler",
			"owner": "mandubian",
			"uniforms": {
				"amplitude": 1,
				"waves": 30,
				"colorSeparation": 0.3
			},
			"html_url": "https://gist.github.com/c3bc914de09227713787",
			"created_at": "2014-05-19T11:48:15Z",
			"updated_at": "2015-08-29T14:01:36Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float amplitude;uniform float waves;uniform float colorSeparation;float PI=3.14159265358979323846264;float compute(vec2 p,float progress,vec2 center){vec2 o=p*sin(progress*amplitude)-center;vec2 h=vec2(1.,0.);float theta=acos(dot(o,h))*waves;return (exp(cos(theta))-2.*cos(4.*theta)+pow(sin((2.*theta-PI)/24.),5.))/10.;}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float inv=1.-progress;vec2 dir=p-vec2(.5);float dist=length(dir);float disp=compute(p,progress,vec2(0.5,0.5));vec4 texTo=texture2D(to,p+inv*disp);vec4 texFrom=vec4(texture2D(from,p+progress*disp*(1.0-colorSeparation)).r,texture2D(from,p+progress*disp).g,texture2D(from,p+progress*disp*(1.0+colorSeparation)).b,1.0);gl_FragColor=texTo*progress+texFrom*inv;}"
		},
		{
			"id": "4268c81d39bd4ca00ae2",
			"name": "CrazyParametricFun",
			"owner": "mandubian",
			"uniforms": {
				"a": 4,
				"b": 1,
				"amplitude": 120,
				"smoothness": 0.1
			},
			"html_url": "https://gist.github.com/4268c81d39bd4ca00ae2",
			"created_at": "2014-05-19T08:04:52Z",
			"updated_at": "2015-08-29T14:01:36Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float a;uniform float b;uniform float amplitude;uniform float smoothness;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 dir=p-vec2(.5);float dist=length(dir);float x=(a-b)*cos(progress)+b*cos(progress*((a/b)-1.));float y=(a-b)*sin(progress)-b*sin(progress*((a/b)-1.));vec2 offset=dir*vec2(sin(progress*dist*amplitude*x),sin(progress*dist*amplitude*y))/smoothness;gl_FragColor=mix(texture2D(from,p+offset),texture2D(to,p),smoothstep(0.2,1.0,progress));}"
		},
		{
			"id": "2bcfb59096fcaed82355",
			"name": "powerdisformation",
			"owner": "gre",
			"uniforms": {
				"power": 3,
				"powerDest": true
			},
			"html_url": "https://gist.github.com/2bcfb59096fcaed82355",
			"created_at": "2014-05-17T10:58:29Z",
			"updated_at": "2015-08-29T14:01:31Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from,to;uniform float progress;uniform vec2 resolution;uniform float power;uniform bool powerDest;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 p2=mix(p,vec2(pow(p.x,power),pow(p.y,power)),(powerDest?0.5:1.0)-distance(progress,powerDest?0.5:1.0));gl_FragColor=mix(texture2D(from,p2),texture2D(to,powerDest?p2:p),progress);}"
		},
		{
			"id": "2a3f2e907e1c0a152e60",
			"name": "swap",
			"owner": "gre",
			"uniforms": {
				"reflection": 0.4,
				"perspective": 0.2,
				"depth": 3
			},
			"html_url": "https://gist.github.com/2a3f2e907e1c0a152e60",
			"created_at": "2014-05-16T13:59:07Z",
			"updated_at": "2015-08-29T14:01:30Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float reflection;uniform float perspective;uniform float depth;const vec4 black=vec4(0.0,0.0,0.0,1.0);const vec2 boundMin=vec2(0.0,0.0);const vec2 boundMax=vec2(1.0,1.0);bool inBounds(vec2 p){return all(lessThan(boundMin,p))&&all(lessThan(p,boundMax));}vec2 project(vec2 p){return p*vec2(1.0,-1.2)+vec2(0.0,-0.02);}vec4 bgColor(vec2 p,vec2 pfr,vec2 pto){vec4 c=black;pfr=project(pfr);if(inBounds(pfr)){c+=mix(black,texture2D(from,pfr),reflection*mix(1.0,0.0,pfr.y));}pto=project(pto);if(inBounds(pto)){c+=mix(black,texture2D(to,pto),reflection*mix(1.0,0.0,pto.y));}return c;}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 pfr,pto=vec2(-1.);float size=mix(1.0,depth,progress);float persp=perspective*progress;pfr=(p+vec2(-0.0,-0.5))*vec2(size/(1.0-perspective*progress),size/(1.0-size*persp*p.x))+vec2(0.0,0.5);size=mix(1.0,depth,1.-progress);persp=perspective*(1.-progress);pto=(p+vec2(-1.0,-0.5))*vec2(size/(1.0-perspective*(1.0-progress)),size/(1.0-size*persp*(0.5-p.x)))+vec2(1.0,0.5);bool fromOver=progress<0.5;if(fromOver){if(inBounds(pfr)){gl_FragColor=texture2D(from,pfr);}else if(inBounds(pto)){gl_FragColor=texture2D(to,pto);}else{gl_FragColor=bgColor(p,pfr,pto);}}else{if(inBounds(pto)){gl_FragColor=texture2D(to,pto);}else if(inBounds(pfr)){gl_FragColor=texture2D(from,pfr);}else{gl_FragColor=bgColor(p,pfr,pto);}}}"
		},
		{
			"id": "94ffa2725b65aa8b9979",
			"name": "ripple",
			"owner": "gre",
			"uniforms": {
				"amplitude": 100,
				"speed": 50
			},
			"html_url": "https://gist.github.com/94ffa2725b65aa8b9979",
			"created_at": "2014-05-16T13:58:42Z",
			"updated_at": "2015-08-29T14:01:30Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float amplitude;uniform float speed;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 dir=p-vec2(.5);float dist=length(dir);vec2 offset=dir*(sin(progress*dist*amplitude-progress*speed)+.5)/30.;gl_FragColor=mix(texture2D(from,p+offset),texture2D(to,p),smoothstep(0.2,1.0,progress));}"
		},
		{
			"id": "99bced7d9b5311fd166e",
			"name": "flash",
			"owner": "gre",
			"uniforms": {
				"flashPhase": 0.3,
				"flashIntensity": 3,
				"flashZoomEffect": 0.5
			},
			"html_url": "https://gist.github.com/99bced7d9b5311fd166e",
			"created_at": "2014-05-16T13:58:17Z",
			"updated_at": "2015-12-04T07:14:45Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float flashPhase;uniform float flashIntensity;uniform float flashZoomEffect;const vec3 flashColor=vec3(1.0,0.8,0.3);const float flashVelocity=3.0;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec4 fc=texture2D(from,p);vec4 tc=texture2D(to,p);float intensity=mix(1.0,2.0*distance(p,vec2(0.5,0.5)),flashZoomEffect)*flashIntensity*pow(smoothstep(flashPhase,0.0,distance(0.5,progress)),flashVelocity);vec4 c=mix(texture2D(from,p),texture2D(to,p),smoothstep(0.5*(1.0-flashPhase),0.5*(1.0+flashPhase),progress));c+=intensity*vec4(flashColor,1.0);gl_FragColor=c;}"
		},
		{
			"id": "81c6f2e6fce88f9075d2",
			"name": "flyeye",
			"owner": "gre",
			"uniforms": {
				"size": 0.04,
				"zoom": 30,
				"colorSeparation": 0.3
			},
			"html_url": "https://gist.github.com/81c6f2e6fce88f9075d2",
			"created_at": "2014-05-16T13:56:53Z",
			"updated_at": "2015-12-04T07:14:48Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float size;uniform float zoom;uniform float colorSeparation;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float inv=1.-progress;vec2 disp=size*vec2(cos(zoom*p.x),sin(zoom*p.y));vec4 texTo=texture2D(to,p+inv*disp);vec4 texFrom=vec4(texture2D(from,p+progress*disp*(1.0-colorSeparation)).r,texture2D(from,p+progress*disp).g,texture2D(from,p+progress*disp*(1.0+colorSeparation)).b,1.0);gl_FragColor=texTo*progress+texFrom*inv;}"
		},
		{
			"id": "979934722820b5e715fa",
			"name": "doorway",
			"owner": "gre",
			"uniforms": {
				"reflection": 0.4,
				"perspective": 0.4,
				"depth": 3
			},
			"html_url": "https://gist.github.com/979934722820b5e715fa",
			"created_at": "2014-05-16T13:54:38Z",
			"updated_at": "2015-08-29T14:01:30Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float reflection;uniform float perspective;uniform float depth;const vec4 black=vec4(0.0,0.0,0.0,1.0);const vec2 boundMin=vec2(0.0,0.0);const vec2 boundMax=vec2(1.0,1.0);bool inBounds(vec2 p){return all(lessThan(boundMin,p))&&all(lessThan(p,boundMax));}vec2 project(vec2 p){return p*vec2(1.0,-1.2)+vec2(0.0,-0.02);}vec4 bgColor(vec2 p,vec2 pto){vec4 c=black;pto=project(pto);if(inBounds(pto)){c+=mix(black,texture2D(to,pto),reflection*mix(1.0,0.0,pto.y));}return c;}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 pfr=vec2(-1.),pto=vec2(-1.);float middleSlit=2.0*abs(p.x-0.5)-progress;if(middleSlit>0.0){pfr=p+(p.x>0.5?-1.0:1.0)*vec2(0.5*progress,0.0);float d=1.0/(1.0+perspective*progress*(1.0-middleSlit));pfr.y-=d/2.;pfr.y*=d;pfr.y+=d/2.;}float size=mix(1.0,depth,1.-progress);pto=(p+vec2(-0.5,-0.5))*vec2(size,size)+vec2(0.5,0.5);if(inBounds(pfr)){gl_FragColor=texture2D(from,pfr);}else if(inBounds(pto)){gl_FragColor=texture2D(to,pto);}else{gl_FragColor=bgColor(p,pto);}}"
		},
		{
			"id": "731fcad4f8956866f34a",
			"name": "randomsquares",
			"owner": "gre",
			"uniforms": {
				"size": [
					10,
					10
				],
				"smoothness": 0.5
			},
			"html_url": "https://gist.github.com/731fcad4f8956866f34a",
			"created_at": "2014-05-16T13:52:46Z",
			"updated_at": "2015-12-04T07:14:49Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform ivec2 size;uniform float smoothness;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float r=rand(floor(vec2(size)*p));float m=smoothstep(0.0,-smoothness,r-(progress*(1.0+smoothness)));gl_FragColor=mix(texture2D(from,p),texture2D(to,p),m);}"
		},
		{
			"id": "df8797fd112e8e429064",
			"name": "squeeze",
			"owner": "gre",
			"uniforms": {
				"colorSeparation": 0.02
			},
			"html_url": "https://gist.github.com/df8797fd112e8e429064",
			"created_at": "2014-05-16T13:51:39Z",
			"updated_at": "2015-08-29T14:01:30Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float colorSeparation;float progressY(float y){return 0.5+(y-0.5)/(1.0-progress);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float y=progressY(p.y);if(y<0.0||y>1.0){gl_FragColor=texture2D(to,p);}else{vec2 fp=vec2(p.x,y);vec3 c=vec3(texture2D(from,fp-progress*vec2(0.0,colorSeparation)).r,texture2D(from,fp).g,texture2D(from,fp+progress*vec2(0.0,colorSeparation)).b);gl_FragColor=vec4(c,1.0);}}"
		},
		{
			"id": "90000743fedc953f11a4",
			"name": "directionalwipe",
			"owner": "gre",
			"uniforms": {
				"direction": [
					1,
					-1
				],
				"smoothness": 0.5
			},
			"html_url": "https://gist.github.com/90000743fedc953f11a4",
			"created_at": "2014-05-16T13:50:51Z",
			"updated_at": "2015-08-29T14:01:30Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform vec2 direction;uniform float smoothness;const vec2 center=vec2(0.5,0.5);void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec2 v=normalize(direction);v/=abs(v.x)+abs(v.y);float d=v.x*center.x+v.y*center.y;float m=smoothstep(-smoothness,0.0,v.x*p.x+v.y*p.y-(d-0.5+progress*(1.+smoothness)));gl_FragColor=mix(texture2D(to,p),texture2D(from,p),m);}"
		},
		{
			"id": "7de3f4b9482d2b0bf7bb",
			"name": "wind",
			"owner": "gre",
			"uniforms": {
				"size": 0.2
			},
			"html_url": "https://gist.github.com/7de3f4b9482d2b0bf7bb",
			"created_at": "2014-05-16T13:49:36Z",
			"updated_at": "2015-08-29T14:01:30Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float size;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float r=rand(vec2(0,p.y));float m=smoothstep(0.0,-size,p.x*(1.0-size)+size*r-(progress*(1.0+size)));gl_FragColor=mix(texture2D(from,p),texture2D(to,p),m);}"
		},
		{
			"id": "d9f8b4df19584f1f0474",
			"name": "fadegrayscale",
			"owner": "gre",
			"uniforms": {
				"grayPhase": 0.3
			},
			"html_url": "https://gist.github.com/d9f8b4df19584f1f0474",
			"created_at": "2014-05-16T13:49:13Z",
			"updated_at": "2015-12-04T07:14:52Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float grayPhase;vec3 grayscale(vec3 color){return vec3(0.2126*color.r+0.7152*color.g+0.0722*color.b);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;vec4 fc=texture2D(from,p);vec4 tc=texture2D(to,p);gl_FragColor=mix(mix(vec4(grayscale(fc.rgb),1.0),texture2D(from,p),smoothstep(1.0-grayPhase,0.0,progress)),mix(vec4(grayscale(tc.rgb),1.0),texture2D(to,p),smoothstep(grayPhase,1.0,progress)),progress);}"
		},
		{
			"id": "206b96128ad6085f9911",
			"name": "dispersionblur",
			"owner": "gre",
			"uniforms": {
				"size": 0.6
			},
			"html_url": "https://gist.github.com/206b96128ad6085f9911",
			"created_at": "2014-05-16T13:47:09Z",
			"updated_at": "2015-12-04T07:11:02Z",
			"stars": 2,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define QUALITY 32\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float size;const float GOLDEN_ANGLE=2.399963229728653;vec4 blur(sampler2D t,vec2 c,float radius){vec4 sum=vec4(0.0);float q=float(QUALITY);for(int i=0;i<QUALITY;++i){float fi=float(i);float a=fi*GOLDEN_ANGLE;float r=sqrt(fi/q)*radius;vec2 p=c+r*vec2(cos(a),sin(a));sum+=texture2D(t,p);}return sum/q;}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float inv=1.-progress;gl_FragColor=inv*blur(from,p,progress*size)+progress*blur(to,p,inv*size);}"
		},
		{
			"id": "d71472a550601b96d69d",
			"name": "heartwipe",
			"owner": "gre",
			"uniforms": {},
			"html_url": "https://gist.github.com/d71472a550601b96d69d",
			"created_at": "2014-05-16T13:46:31Z",
			"updated_at": "2015-08-29T14:01:30Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;bool inHeart(vec2 p,vec2 center,float size){if(size==0.0) return false;vec2 o=(p-center)/(1.6*size);return pow(o.x*o.x+o.y*o.y-0.3,3.0)<o.x*o.x*pow(o.y,3.0);}void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float m=inHeart(p,vec2(0.5,0.4),progress)?1.0:0.0;gl_FragColor=mix(texture2D(from,p),texture2D(to,p),m);}"
		},
		{
			"id": "f24651a01bf574e90122",
			"name": "fadecolor",
			"owner": "gre",
			"uniforms": {
				"color": [
					0,
					0,
					0
				],
				"colorPhase": 0.4
			},
			"html_url": "https://gist.github.com/f24651a01bf574e90122",
			"created_at": "2014-05-16T13:45:46Z",
			"updated_at": "2015-12-04T07:08:36Z",
			"stars": 1,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform vec3 color;uniform float colorPhase;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;gl_FragColor=mix(mix(vec4(color,1.0),texture2D(from,p),smoothstep(1.0-colorPhase,0.0,progress)),mix(vec4(color,1.0),texture2D(to,p),smoothstep(colorPhase,1.0,progress)),progress);}"
		},
		{
			"id": "35e8c18557995c77278e",
			"name": "circleopen",
			"owner": "gre",
			"uniforms": {
				"smoothness": 0.3,
				"opening": true
			},
			"html_url": "https://gist.github.com/35e8c18557995c77278e",
			"created_at": "2014-05-16T13:40:51Z",
			"updated_at": "2015-12-19T09:32:03Z",
			"stars": 0,
			"glsl": "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D from;uniform sampler2D to;uniform float progress;uniform vec2 resolution;uniform float smoothness;uniform bool opening;const vec2 center=vec2(0.5,0.5);const float SQRT_2=1.414213562373;void main(){vec2 p=gl_FragCoord.xy/resolution.xy;float x=opening?progress:1.-progress;float m=smoothstep(-smoothness,0.0,SQRT_2*distance(center,p)-x*(1.+smoothness));gl_FragColor=mix(texture2D(from,p),texture2D(to,p),opening?1.-m:m);}"
		}
	];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map