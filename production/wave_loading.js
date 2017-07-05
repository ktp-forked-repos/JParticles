+function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}}(),o=JParticles,r=o.utils,n=o.Base,a=(Math.random,Math.abs,Math.PI),l=Math.sin,f=Math.ceil,h=2*a,c=(r.pInt,r.limitRandom,r.calcSpeed,r.scaleValue),p=(r.randomColor,r.isArray,r.isFunction,r.isPlainObject),u=r.isUndefined,y=r.resize,d=r.defineReadOnlyProperty,m=r.registerListener,g=function(o){function r(s,i){return t(this,r),e(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,s,i))}return s(r,o),i(r,[{key:"version",get:function(){return"2.0.0"}}]),i(r,[{key:"init",value:function(){this.c.style.borderRadius="50%",this.progress=0,this.set.offsetTop=this.ch,this.halfCH=this.ch/2,this.progressListeners=[],this.finishedListeners=[],this.attrNormalize(),this.createDots(),this.draw()}},{key:"attrNormalize",value:function(){var t=this;["offsetLeft","crestHeight"].forEach(function(e){t.set[e]=c(t.set[e],"offsetLeft"===e?t.cw:t.ch)})}},{key:"createDots",value:function(){for(var t=this.cw,e=this.dots=[],s=t/this.set.rippleNum,i=h/s,o=0;o<=t;o++)e.push({x:o,y:o*i})}},{key:"draw",value:function(){this.calcOffsetTop(),this.drawWave(),this.drawText(),this.calcProgress(),this.progress<=100?this.requestAnimationFrame():(this.progress=100,this.calcOffsetTop(),this.drawWave(),this.drawText(),this.finishedListeners.forEach(function(t){return t()}))}},{key:"drawWave",value:function(){var t=this.cxt,e=this.cw,s=this.ch,i=this.set,o=i.opacity,r=i.crestHeight,n=i.offsetLeft,a=i.offsetTop,f=i.fillColor,h=i.speed;t.clearRect(0,0,e,s),t.globalAlpha=o,t.save(),t.beginPath(),this.dots.forEach(function(e,s){t[s?"lineTo":"moveTo"](e.x,r*l(e.y+n)+a),e.y-=h}),t.lineTo(e,s),t.lineTo(0,s),t.closePath(),t.fillStyle=f,t.fill(),t.restore()}},{key:"drawText",value:function(){var t=this,e=this.cxt,s=this.cw,i=this.halfCH,o=this.progress,r=this.set,n=r.font,a=r.smallFont,l=r.color,h=r.smallFontOffsetTop,c="%",y=f(o);this.progressListeners.forEach(function(e){var s=e(t.progress);u(s)||(p(s)?(y=s.text,c=s.smallText||""):(y=s,c=""))}),e.font=n;var d=e.measureText(y).width;e.font=a;var m=e.measureText(c).width,g=(s-d-m)/2;e.textBaseline="middle",e.fillStyle=l,e.font=n,e.fillText(y,g,i),e.font=a,e.fillText(c,g+d,i+h)}},{key:"calcProgress",value:function(){if(this.immediatelyComplete)return this.progress+=this.immediatelyComplete,void(this.immediatelyComplete+=.5);if(!(this.progress>=99)){var t=this.set,e=t.easing,s=t.duration;this.startTime||(this.startTime=Date.now());var i=Date.now()-this.startTime,o=i/s;o<=1&&(this.progress=JParticles.easing[e](o,i,0,100,s),this.progress>=99&&(this.progress=99))}}},{key:"calcOffsetTop",value:function(){(this.immediatelyComplete||99!==this.progress)&&(100===this.progress?this.set.offsetTop=-this.set.crestHeight:this.set.offsetTop=f((100-this.progress)/100*this.ch+this.set.crestHeight))}},{key:"resize",value:function(){var t=this;y(this,function(e,s){["offsetLeft","offsetTop","crestHeight"].forEach(function(i){t.set[i]*="offsetLeft"===i?e:s}),t.halfCH=t.ch/2,100===t.progress&&t.draw()})}},{key:"setOptions",value:function(t){if(this.set&&p(t))for(var e in t)"offsetTop"!==e&&e in this.set&&(this.set[e]=t[e])}},{key:"done",value:function(){this.set&&!this.immediatelyComplete&&(this.immediatelyComplete=1)}},{key:"onProgress",value:function(){return m.apply(void 0,[this,this.progressListeners].concat(Array.prototype.slice.call(arguments)))}},{key:"onFinished",value:function(){return m.apply(void 0,[this,this.finishedListeners].concat(Array.prototype.slice.call(arguments)))}}]),r}(n);g.defaultConfig={font:"normal 900 20px Arial",smallFont:"normal 900 14px Arial",smallFontOffsetTop:1,color:"#333",fillColor:"#27C9E5",offsetLeft:0,crestHeight:4,rippleNum:1,speed:.3,duration:5e3,easing:"swing"},delete g.prototype.pause,delete g.prototype.open,d(g,"waveLoading")}();