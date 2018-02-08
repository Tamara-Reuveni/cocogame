(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"cocoNofarTamara_atlas_", frames: [[3212,0,513,428],[2562,0,648,540],[2749,1133,185,53],[2562,1098,185,54],[2801,1024,130,107],[2696,1154,47,38],[2562,1154,65,57],[2629,1154,65,57],[2562,1024,237,72],[3212,430,237,72],[0,1465,1600,1067],[2749,1098,32,32],[1602,1465,1280,853],[0,0,2560,1463],[2562,542,660,480]]}
];


// symbols:



(lib.Anefo_9303763_Moshe_Dayan_270719792 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BenGurion2 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7_1 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9_1 = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cn = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.itflagpng = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mx = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.דגל_ישראל = function() {
	this.spriteSheet = ss["cocoNofarTamara_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pauseMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-20,-8,0.873,0.658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-8,41,25);


(lib.pauseBackgMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("קח מספרים רגעים למנוחה אך חזור במהרה, הקוף מחכה לך!", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 454;
	this.text.parent = this;
	this.text.setTransform(0,-19.1);

	this.text_1 = new cjs.Text("זמן להפסקה?", "bold 24px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 238;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-90.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhK/ArwMAAAhXfMCV/AAAMAAABXfgEgqfAbCMBVAAAAMAAAgy+MhVAAAAg");
	this.shape.setTransform(0,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgqfAZfMAAAgy9MBU/AAAMAAAAy9g");
	this.shape_1.setTransform(0.1,36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pauseBackgMC, new cjs.Rectangle(-480,-253,960,560), null);


(lib.closebtnMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-118,-35,0.633,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.closebtnMC, new cjs.Rectangle(-118,-35,150,45), null);


(lib.X = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.432,0.403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.1,23);


(lib.xodotMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap7_1();
	this.instance.parent = this;
	this.instance.setTransform(-14,-11,0.432,0.403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-11,28.1,23);


(lib.odotrectMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(71,71,71,0.008)").s().p("AmqCwIAAlfINVAAIAAFfg");
	this.shape.setTransform(42.7,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotrectMC, new cjs.Rectangle(0,0,85.4,35.2), null);


(lib.odotclick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.odot = new cjs.Text("אודות", "14px 'Arial'");
	this.odot.name = "odot";
	this.odot.textAlign = "center";
	this.odot.lineHeight = 18;
	this.odot.lineWidth = 51;
	this.odot.parent = this;
	this.odot.setTransform(0,-16.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(211,233,249,0.008)").s().p("AkNCwIAAlfIIbAAIAAFfg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.odot}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,-18.6,55.5,37.2);


(lib.myLinkOdot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt5
	this.txt5 = new cjs.Text("הפקולטה לטכנולוגיות למידה", "bold 13px 'Arial'", "#006666");
	this.txt5.name = "txt5";
	this.txt5.textAlign = "center";
	this.txt5.lineHeight = 17;
	this.txt5.lineWidth = 231;
	this.txt5.parent = this;
	this.txt5.setTransform(117.5,2);

	this.timeline.addTween(cjs.Tween.get(this.txt5).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006666").p("AroAAIXRAA");
	this.shape.setTransform(117.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235,18.9);


(lib.Monkeywalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F6548").s().p("AiuC+QhIhPAAhvQAAhvBIhOQBJhQBlAAQBmAABIBQQBJBOAABvQAABvhJBPQhIBPhmAAQhlAAhJhPg");
	this.shape.setTransform(42,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F6548").s().p("AAIBiQADgxgTgpQgUgogmgXQgigUAUgoQAUgnAjAUQA3AiAfA/QAgA/gFBIQgCAsgoAAQgoAAACgsg");
	this.shape_1.setTransform(52.2,106.2,1.017,1.292);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F6548").s().p("Ai0BrQAAgwAtgDQAygCBLg3QBKg4Aig8QAOgZATgIQARgGAOALQAjAZgdA2QgxBXhbBBQhYA/hKAEIgEAAQgpAAgBgug");
	this.shape_2.setTransform(63.9,48.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F6548").s().p("AhXBiQgEhIAfg/QAgg/A3giQAigUAUAnQAUAogiAUQgmAXgUAoQgTAoADAyQADAsgoAAQgoAAgDgsg");
	this.shape_3.setTransform(29.3,105.6,1.017,1.292);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8F6548").s().p("Ah5CgQgyhCAAheQAAhcAyhCQAzhDBGAAQBHAAAzBDQAyBCAABcQAABegyBCQgzBChHAAQhGAAgzhCg");
	this.shape_4.setTransform(39.8,74.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8F6548").s().p("AB0CMQhigUhahCQhYhBgbhFQgRgqAugPQAugQARAqQASAvBNA2QBLA1BFAOQAcAFANARQALAOgFARQgMAggnAAQgLAAgNgCg");
	this.shape_5.setTransform(19.3,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8F6548").s().p("Ag6A7QgYgZAAgiQAAghAYgZQAYgZAiABQAigBAZAZQAYAZAAAhQAAAigYAZQgZAYgiAAQgiAAgYgYg");
	this.shape_6.setTransform(68.7,18.8,1.017,1.112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8F6548").s().p("AhCA7QgcgZAAgiQAAghAcgZQAbgZAnABQAogBAbAZQAcAZAAAhQAAAigcAZQgbAYgoAAQgnAAgbgYg");
	this.shape_7.setTransform(14.3,18.8,1.017,1.112);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8F6548").s().p("AhFCvQgpgGAGg5QAIhcArhMQAqhNA+gjQAmgWAOA1QAMA2glAVQgrAYgcAwQgZAygGA/QgEA0giAAIgHAAg");
	this.shape_8.setTransform(26.3,104.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8F6548").s().p("Ah3CQQgyg7ABhVQgBhTAyg7QAyg9BFAAQBGAAAyA9QAxA7AABTQAABVgxA7QgyA8hGgBQhFABgyg8g");
	this.shape_9.setTransform(40.3,75.3,1.017,1.112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:14.3,y:18.8,skewY:0}},{t:this.shape_6,p:{x:68.7,y:18.8,skewY:0}},{t:this.shape_5,p:{x:19.3,y:48,skewY:0}},{t:this.shape_4},{t:this.shape_3,p:{rotation:0,x:29.3,y:105.6,skewX:0,skewY:0}},{t:this.shape_2,p:{x:63.9,y:48.1,skewY:0}},{t:this.shape_1,p:{x:52.2,y:106.2,skewY:0}},{t:this.shape,p:{x:42,y:27,skewY:0}}]}).to({state:[{t:this.shape_7,p:{x:14.8,y:19.5,skewY:0}},{t:this.shape_6,p:{x:69.2,y:19.5,skewY:0}},{t:this.shape_5,p:{x:19.8,y:48.7,skewY:0}},{t:this.shape_9,p:{y:75.3,x:40.3,skewY:0}},{t:this.shape_8,p:{skewY:0,x:26.3}},{t:this.shape_2,p:{x:64.4,y:48.8,skewY:0}},{t:this.shape_1,p:{x:52.5,y:106.1,skewY:0}},{t:this.shape,p:{x:42.5,y:27.7,skewY:0}}]},3).to({state:[{t:this.shape_7,p:{x:14.8,y:19.5,skewY:0}},{t:this.shape_6,p:{x:69.2,y:19.5,skewY:0}},{t:this.shape_5,p:{x:19.8,y:48.7,skewY:0}},{t:this.shape_9,p:{y:75.3,x:40.3,skewY:0}},{t:this.shape_3,p:{rotation:15,x:23.2,y:104.1,skewX:0,skewY:0}},{t:this.shape_2,p:{x:64.4,y:48.8,skewY:0}},{t:this.shape_1,p:{x:52.5,y:106.1,skewY:0}},{t:this.shape,p:{x:42.5,y:27.7,skewY:0}}]},3).to({state:[{t:this.shape_7,p:{x:14.8,y:19.8,skewY:0}},{t:this.shape_6,p:{x:69.2,y:19.8,skewY:0}},{t:this.shape_5,p:{x:19.8,y:49,skewY:0}},{t:this.shape_9,p:{y:75.6,x:40.3,skewY:0}},{t:this.shape_3,p:{rotation:15,x:21.6,y:103.6,skewX:0,skewY:0}},{t:this.shape_2,p:{x:64.4,y:49.1,skewY:0}},{t:this.shape_1,p:{x:52.5,y:105.7,skewY:0}},{t:this.shape,p:{x:42.5,y:28,skewY:0}}]},3).to({state:[{t:this.shape_7,p:{x:14.3,y:18.8,skewY:0}},{t:this.shape_6,p:{x:68.7,y:18.8,skewY:0}},{t:this.shape_5,p:{x:19.3,y:48,skewY:0}},{t:this.shape_9,p:{y:74.6,x:39.8,skewY:0}},{t:this.shape_3,p:{rotation:0,x:29.3,y:105.6,skewX:0,skewY:0}},{t:this.shape_2,p:{x:63.9,y:48.1,skewY:0}},{t:this.shape_1,p:{x:52.2,y:106.2,skewY:0}},{t:this.shape,p:{x:42,y:27,skewY:0}}]},3).to({state:[{t:this.shape_7,p:{x:68.2,y:19.5,skewY:180}},{t:this.shape_6,p:{x:13.8,y:19.5,skewY:180}},{t:this.shape_5,p:{x:63.2,y:48.7,skewY:180}},{t:this.shape_9,p:{y:75.3,x:42.7,skewY:180}},{t:this.shape_8,p:{skewY:180,x:56.7}},{t:this.shape_2,p:{x:18.6,y:48.8,skewY:180}},{t:this.shape_1,p:{x:30.5,y:106.1,skewY:180}},{t:this.shape,p:{x:40.5,y:27.7,skewY:180}}]},3).to({state:[{t:this.shape_7,p:{x:68.2,y:19.5,skewY:180}},{t:this.shape_6,p:{x:13.8,y:19.5,skewY:180}},{t:this.shape_5,p:{x:63.2,y:48.7,skewY:180}},{t:this.shape_9,p:{y:75.3,x:42.7,skewY:180}},{t:this.shape_3,p:{rotation:0,x:59.8,y:104.1,skewX:-15,skewY:165}},{t:this.shape_2,p:{x:18.6,y:48.8,skewY:180}},{t:this.shape_1,p:{x:30.5,y:106.1,skewY:180}},{t:this.shape,p:{x:40.5,y:27.7,skewY:180}}]},3).to({state:[{t:this.shape_7,p:{x:68.2,y:19.8,skewY:180}},{t:this.shape_6,p:{x:13.8,y:19.8,skewY:180}},{t:this.shape_5,p:{x:63.2,y:49,skewY:180}},{t:this.shape_9,p:{y:75.6,x:42.7,skewY:180}},{t:this.shape_3,p:{rotation:0,x:61.4,y:103.6,skewX:-15,skewY:165}},{t:this.shape_2,p:{x:18.6,y:49.1,skewY:180}},{t:this.shape_1,p:{x:30.5,y:105.7,skewY:180}},{t:this.shape,p:{x:40.5,y:28,skewY:180}}]},3).to({state:[{t:this.shape_7,p:{x:14.3,y:18.8,skewY:0}},{t:this.shape_6,p:{x:68.7,y:18.8,skewY:0}},{t:this.shape_5,p:{x:19.3,y:48,skewY:0}},{t:this.shape_9,p:{y:74.6,x:39.8,skewY:0}},{t:this.shape_3,p:{rotation:0,x:29.3,y:105.6,skewX:0,skewY:0}},{t:this.shape_2,p:{x:63.9,y:48.1,skewY:0}},{t:this.shape_1,p:{x:52.2,y:106.2,skewY:0}},{t:this.shape,p:{x:42,y:27,skewY:0}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,124.5);


(lib.starMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgqAiIAVgXIAGgFIgVgFIgQgEIAIgZQAUAHAPAKQgEgYAAgPIAZAAQAAALgEAcIANgGIAYgKIAIAbIgmAGIASAUIAIAJIgWAPIgTggIgUAhg");
	this.shape.setTransform(73.7,-40.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.starMC, new cjs.Rectangle(66,-52.7,15.8,37.5), null);


(lib.rectMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.endText = new cjs.Text("", "16px 'Arial'");
	this.endText.name = "endText";
	this.endText.textAlign = "right";
	this.endText.lineHeight = 19;
	this.endText.lineWidth = 162;
	this.endText.parent = this;
	this.endText.setTransform(81.2,-37.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApTCiIAAlDISnAAIAAFDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.endText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rectMC, new cjs.Rectangle(-83.2,-39.4,166.5,55.7), null);


(lib.backG2MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A0A0A0").p("EAk6AAAMhJzAAA");
	this.shape.setTransform(-0.4,-56.4,1.26,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A0A0A0").p("AAAxzMAAAAjn");
	this.shape_1.setTransform(-0.5,64.3,1,1.403);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D8EBF9","#B4E2F9","#A8E0F9"],[0,0.776,1],0,2.5,0,-2.4).s().p("AgXAAQAAgYAXAAQAYAAAAAYQAAAZgYAAQgXAAAAgZg");
	this.shape_2.setTransform(-91,30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9F7F7").s().p("Egk5AR0MAAAgjnMBJzAAAMAAAAjng");
	this.shape_3.setTransform(-0.3,63.8,1.262,1.404);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backG2MC, new cjs.Rectangle(-299,-96.7,597.3,322), null);


(lib.btnRestartMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-60,-20,0.649,0.741);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-20,120,40);


(lib.btnEndMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-60,-20,0.649,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-20,120,40);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(154,97,3,0.8)","rgba(179,119,19,0.8)","rgba(232,166,42,0.8)"],[0,0.357,1],-0.6,16.8,0.9,-26.5).s().p("Eg3WACwIAAlfMButAAAIAAFfg");
	this.shape.setTransform(354.3,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,708.6,35.2), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(229,162,87,0.8)","rgba(193,144,90,0.8)","rgba(126,116,93,0.8)"],[0,0.341,1],-12.5,-0.8,-66.6,-0.2).s().p("ApgVJIhogCQgCnfBOm4QBNmwCVljQCWlnDRjzQDWj6EChqQAvgNBIgYQAUgGACAIQASBACFBJQjjAkjqDRQjxDWiyFRQjCFshOGtQhWHdBFHwQgmADgxAAIhBgBg");
	this.shape.setTransform(71.3,135.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0.2,142.6,270.8), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#603813").s().p("AhWBUQglgjAAgxQAAgwAlgjQAjgjAzAAQAzAAAkAjQAlAjAAAwQAAAxglAjQgkAjgzAAQgzAAgjgjg");
	this.shape.setTransform(12.4,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,24.8,23.9), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#603813").s().p("AhcBUQgfghAAgzQAAgwAlgjQAjgjAzAAQAzAAAkAjQAlAjAAAwQAAAwgqAkQgoAjgzAAQgzAAgggjg");
	this.shape.setTransform(12.4,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,24.8,23.8), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#603813").s().p("AhhBeQgogngBg3QABg2AognQApgnA4AAQA5AAApAnQApAnAAA2QAAA3gpAnQgpAng5AAQg4AAgpgng");
	this.shape.setTransform(13.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,27.7,26.7), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("Am3CqQAmiRByiZQBzibFBAAQChAACLAfIAGBxIjNBtIgVg7IgKBJIh3A0IgUiSIgZCmIhtAxIgViRIgWCkIhxAzIgOixIg1DPIiwBPQgEgqAShIg");
	this.shape.setTransform(45.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,91,56.8), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AEFCJIhBiKIAOB+IhWgVIgmhwIAFBoIhTgUIgphxIAGBpIhagWIgRgxIgHArIj5g6IgGhdQBygiCGgPQELgfBnBdQBlBeAvBfQAYAwACAeg");
	this.shape.setTransform(39.7,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,79.3,33.8), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AEeFVIgrjQIAECSIinheIAxiJIhOBqIhKhPIAuiLIhNBqIhRhVIAVg8IgrAmIjgjtIBFhdQCXAwCeBRQE7CiAlCiQAkCjgEBoQgCA0gJATg");
	this.shape.setTransform(38.2,39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,76.4,79.3), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AAAEQIBah+IhoBOIgahTIBQhaIhZA8IgZhQIBPhbIhaA7IgbhWIAkgoIgrARIhKjtIBQg0QBZBNBRBnQCkDOgfCDQgfCEg/BYQgfAsgZASg");
	this.shape.setTransform(19.4,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,38.9,80), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("ABvBzIAUgpIgrAhIhYgeIBChUIhjBJIhRgcIBBhUIhhBKIhUgcIBVhiIiHBSIiDgsQATgXAvgdQBeg4CLgYQCJgYDQCnQBnBSBMBYIg5BLg");
	this.shape.setTransform(41.2,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,82.5,39.2), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(229,162,87,0.8)","rgba(193,144,90,0.8)","rgba(126,116,93,0.8)"],[0,0.341,1],9.3,-0.1,48.9,-0.6).s().p("AFWTZQA/nQgymxQgtmQiHlIQiAk3i4jAQi5i/jKggQB4hEAQg7QACgIARAGQBCAXArAMQG4C5C/KvQCfI+gFPfQgLgBg7AHQglAEgjAAIgpgCg");
	this.shape.setTransform(52.5,124.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0.1,105,248.6), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#603813").s().p("AhOBOQghghAAgtQAAgsAhghQAhggAtAAQAuAAAhAgQAhAhAAAsQAAAtghAhQghAgguAAQgtAAghggg");
	this.shape.setTransform(11.2,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,22.4,22), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#603813").s().p("AhKBOQglghAAgtQABgsAgghQAhggAtAAQAuAAAhAgQAgAhABAsQAAAvgcAfQgdAgguAAQguAAglggg");
	this.shape.setTransform(11.2,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,22.3,22.1), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AC/DUIgVjFIgZChIhQg+IgCiZIgbCCIhMg8IgEibIgbCDIhThAIgBhEIgVAzIiNh/IAOhnQBogJB3AWQDrAsBHCcQBICcAPCJQAIBEgHAlg");
	this.shape.setTransform(31.8,30.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,-0.1,63.5,61.5), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AlNBUQAqhYBchWQBchWDxAcQB5AOBmAfIgEBWIjhA2IgHgoIgPAuIhSAUIAGhhIgkBoIhMATIAGhhIgjBoIhOATIANh0Ig7B/Ih6AeQADgbAVgtg");
	this.shape.setTransform(35.8,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,71.5,31.3), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AkrEJQgEhUAdiGQAciED4iEQB9hBB3goIA2BNIiwDAIgigfIARAyIhABFIg9hXIAlBxIg7BBIg9hXIAnBwIiEBNIADh4IghCqIhCAtQgIgQgBgqg");
	this.shape.setTransform(30.1,32.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,60.1,64.6), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AhbE+Qg5hSgbh7Qgch7CZjDQBLhhBShIIBJAwIhGDfIgngQIAgAlIgZBRIhTg3IBJBUIgXBMIhTg3IBKBTIgZBNIhfhIIBSB1IgmB5QgXgQgcgpg");
	this.shape.setTransform(18,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,36.1,75), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AlOCxQAshgBFhiQCKjGB+gMQB+gLBgAcQAwAOAWAQIhnBGIiJgoIBiBDIhCAtIhngrIBOA8IhAArIhngpIBNA7IhEAwIgugTIAbAfIi/CDg");
	this.shape.setTransform(33.5,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,67.1,46.2), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("Al8A2QBWg+Btg1QDahpB0AzQB0AzBFBGQAkAjALAZIh9ALIhjhkIA0BpIhQAHIhEhXIAmBaIhOAHIhFhXIAnBaIhVAIIgegnIAJApIjoAVg");
	this.shape.setTransform(38.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,76.2,26.6), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AFsGoIASkuIhcDrIh/hyIAojpIhXC/Ih6hvIAkjrIhXC+IiFh2IAShnIg0BHIlulIIBOinQDfAqDwBeQHfC6BWD/QBVD9gLDTQgGBqgXA2g");
	this.shape.setTransform(59.1,60.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,118.2,120.3), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AHaHcIAGADIAAjrIg6C9IhAgzIAPkaIh7DBIhShCIAcjhIhLC7Ih6hkIAXjlIhKC7IiFhrIALhkIguBHIlwkqIBDilQDZAfDsBOQHWCdBdDxQBeDvAADMQgBBlgTA2g");
	this.shape.setTransform(58.9,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,117.7,110.6), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("ACKHPIAhj4IgxCnIiIieIBkiLIh2BgIgwhwIBiiOIh2BgIg0h5IAsg+Ig5AfIiPlQIBphVQCJBlCDCLQEJEWgXDDQgXDDgqB0QgVA6gRASg");
	this.shape.setTransform(30.9,55.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,61.9,110.1), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AiHGnQhQh+ghi9Qghi9DdjqQBuh1B1hQIBWBJIg9DgIg5gZIAuA6IgrB6Ih5hWIBoCFIgoBxIh3hWIBoCCIgpB1IiKhxIBxC2Ig/C3QghgagnhAg");
	this.shape.setTransform(25.3,51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,50.7,102.5), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#603813").s().p("Ah3B4QgxgyAAhGQAAhFAxgyQAygxBFAAQBGAAAyAxQAxAyAABFQAABGgxAyQgyAxhGAAQhEAAgzgxg");
	this.shape.setTransform(16.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,33.8,33.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48B749").s().p("AADKKIACAGICLi9IidB2IgVhPICyjaIjVBSIgahlICbilIirBqIgoiaICbipIirBqIgsimIBFhJIhQAeIh3nKICYhdQCcCYCODLQEfGVhDD5QhDD5h5CkQg9BSgvAfg");
	this.shape.setTransform(34.2,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,68.3,153.7), null);


(lib.mxflagMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mx();
	this.instance.parent = this;
	this.instance.setTransform(-60,-40,0.047,0.055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mxflagMC, new cjs.Rectangle(-60,-40,120,80), null);


(lib.dayanMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Anefo_9303763_Moshe_Dayan_270719792();
	this.instance.parent = this;
	this.instance.setTransform(-54,-45,0.211,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dayanMC, new cjs.Rectangle(-54,-45,108,90), null);


(lib.itflagMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.itflagpng();
	this.instance.parent = this;
	this.instance.setTransform(-54,-41,0.084,0.095);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.itflagMC, new cjs.Rectangle(-54,-41,108,81), null);


(lib.isflagMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.דגל_ישראל();
	this.instance.parent = this;
	this.instance.setTransform(-54,-40,0.164,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.isflagMC, new cjs.Rectangle(-54,-40,108,80), null);


(lib.cnflagMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cn();
	this.instance.parent = this;
	this.instance.setTransform(-53,-40,0.066,0.075);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cnflagMC, new cjs.Rectangle(-53,-40,105,80), null);


(lib.gurionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BenGurion2();
	this.instance.parent = this;
	this.instance.setTransform(-54,-45,0.167,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gurionMC, new cjs.Rectangle(-54,-45,108,90), null);


(lib.monkeyslide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(1,1).p("AD9hCQgKAfgoAfQhOA+iPAIQiOAJhchG");
	this.shape.setTransform(76.7,99,1.169,1.431);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(0.8).p("AhKAQIAYgQQAbgRAXABQAVACAcAPQAOAIAJAI");
	this.shape_1.setTransform(73,73.3,1.8,2.179);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24201F").s().p("AgegBQAAgOAHgHQAHgJALABQAkAAAAAeQACAfggAAIgCAAQgdAAAAggg");
	this.shape_2.setTransform(67.4,78.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252121").s().p("AAAAfQgbAAgDgfQADgeAbAAQAgAAAAAdQgBAggcAAIgDAAg");
	this.shape_3.setTransform(76.7,78.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C39A6C").s().p("AkpDTQh8hXAAh7QAAh7B8hYQB7hXCuAAQCuAAB8BXQB8BYAAB7QAAB7h8BXQh7BXivAAQiuAAh7hXg");
	this.shape_4.setTransform(81.6,96.3,0.826,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#26201F").s().p("AgOAWQgHgJAAgNQgBgLAHgJQAGgJAJgBQAIAAAHAJQAHAJAAAMQABAMgHAJQgGAJgJAAIgBABQgIAAgGgJg");
	this.shape_5.setTransform(52,54.9,2.179,2.179);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#26201F").s().p("AgOAWQgHgJAAgNQgBgLAHgJQAGgJAJgBQAJAAAGAJQAHAJAAAMQABAMgHAJQgGAJgJAAIgBABQgIAAgGgJg");
	this.shape_6.setTransform(102.7,53.8,2.179,2.179);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B5D3B").s().p("Ai8CcQgagCgPgSQgMgRACgWQACgXAQgPQARgRAbACQBAAFBlg1QBlg1AyhBQAVgcAZgFQAWgFARAPQAQAOABAYQAAAbgVAbQhIBch6A+QhtA4hYAAIgRgBg");
	this.shape_7.setTransform(52.4,172.9,2.179,2.179);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C39A6C").s().p("AhFBzQgdgvAAhEQAAhDAdgvQAdgwAoAAQApAAAdAwQAdAvAABDQAABEgdAvQgdAwgpAAQgoAAgdgwg");
	this.shape_8.setTransform(58.8,182.2,0.869,2.179);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B5D3B").s().p("AsgJEQgghZBbglQDOhVCJj9QAlhGBDiVQBAiSAkhDQBwjJDLhSQDchbDVBpQBeAuBDBYQBDBXAUBhQAtDnjeBkQheArhjgZQhagVg+hAQg9hDABhQQAChYBPhGQBIg+BMA+QAhAZACAiQAEAlgiAdQgeAaAIAZQAIAUAgAJQBVAVAkhPQAghIgwhOQgrhGhOgnQiXhLiMBSQh2BDhLCTIh1DyQhGCQg3BZQifD9j5BmQgbALgWAAQgzAAgWg+g");
	this.shape_9.setTransform(207.8,167.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B5D3B").s().p("AkjFqQgogdADg2QALi8B/iuQCBiwDGhmQA5gdA0ANQAuAMAXAoQAXAogPAqQgPAvg6AeQiKBFhSBuQhRBwgICCQgDA2gsAjQgoAhg2AEIgSABQgrAAgegUg");
	this.shape_10.setTransform(50.7,267.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8B5D3B").s().p("AiZDGQhAhSAAh0QAAhzBAhRQBAhSBZAAQBaAABABSQBABRAABzQAAB0hABSQhABShaAAQhZAAhAhSg");
	this.shape_11.setTransform(99.4,189.5,2.179,2.179);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C39A6C").s().p("AgmARQgKgTAKgTQAFgMAhgCQAhgCAFALQAZA5hOAFIgBAAQgNAAgJgTg");
	this.shape_12.setTransform(179.6,36.5,2.179,2.179);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C39A6C").s().p("AgugcQAFgOAoAAQAnABAIANQANAWgLAZQgKAYgQAAQheAAAahHg");
	this.shape_13.setTransform(22.9,38.1,2.179,2.179);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C39A6C").s().p("AkyDwQg6gkgwg8Qhgh3A1h1QBejVB7ATQAqAHAxAjQAaAUAoAiQAfgbA1gbQBMgmBHgJQDRgdBiDeQA0B1hgB3QgdAlgqAiIhQA7IjhhqIg9AAIiZBOIhWA4g");
	this.shape_14.setTransform(85.2,52.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B5D3B").s().p("AjiDhQhlhdAAiEQAAgRADgVIgDAAQg2AAgpglQgqgnALgxQAQhGBOAAQAeAAAbAKQAbALAIAOQAygsBRgkQBXgnBAAAQA7AABZAiQBTAgAvAjQAXgZA3AKQA/ALASA5QAOAogiAlQgfAiguALQAEAYAAARQAACEhlBdQhlBdiOAAQiNAAhkhdg");
	this.shape_15.setTransform(99.4,69.4,2.179,2.179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.monkeyslide, new cjs.Rectangle(0,0,288.8,305.3), null);


(lib.monkey2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26201F").s().p("AgOAWQgHgJAAgNQgBgLAHgJQAGgJAJgBQAIAAAHAJQAHAJAAAMQABAMgHAJQgGAJgJAAIgBABQgIAAgGgJg");
	this.shape.setTransform(75.4,54.9,2.179,2.179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#26201F").s().p("AgOAWQgHgJAAgNQgBgLAHgJQAGgJAJgBQAJAAAGAJQAHAJAAAMQABAMgHAJQgGAJgJAAIgBABQgIAAgGgJg");
	this.shape_1.setTransform(126.2,53.8,2.179,2.179);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#26201F").s().p("AgPAWQgGgJgBgNQABgMAGgJQAHgJAIAAQAJAAAHAJQAGAJABAMQgBANgGAJQgHAJgJAAQgIAAgHgJg");
	this.shape_2.setTransform(126.2,53.9,2.179,2.179);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").ss(1,1).p("AB/geQgEAOgSAPQgjAchAADQg/AEgpggIgcgg");
	this.shape_3.setTransform(104.2,99,2.179,2.179);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(0.8).p("AhKAQIAYgQQAbgRAXABQAVACAcAPQAOAIAJAI");
	this.shape_4.setTransform(99.9,70.1,2.179,2.179);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C39A6C").s().p("AgmARQgKgTAKgTQAFgMAhgCQAhgCAFALQAZA5hOAFIgBAAQgNAAgJgTg");
	this.shape_5.setTransform(179.6,36.5,2.179,2.179);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C39A6C").s().p("AgugcQAFgOAoAAQAnABAIANQANAWgLAZQgKAYgQAAQheAAAahHg");
	this.shape_6.setTransform(22.9,38.1,2.179,2.179);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24201F").s().p("AgQAAQAAgGAEgEQAEgEAGABQATAAAAANQABAOgRAAIgBAAQgQAAAAgOg");
	this.shape_7.setTransform(95.2,78.7,2.179,2.179);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#252121").s().p("AAAAOQgPAAgCgOQACgNAPAAQASAAAAANQgBAOgPAAIgCAAg");
	this.shape_8.setTransform(106.5,78.7,2.179,2.179);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C39A6C").s().p("AiwBxQgigRgbgbQg3g3Aeg1QA2hjBeAEQA4ACA5AkQA1gkA5gEQBigIA4BmQAeA1g3A3QgRARgYAPIguAbIiCgwIgjAAIhYAkIgxAZg");
	this.shape_9.setTransform(100.6,49.8,2.179,2.179);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C39A6C").s().p("AiIBhQg5goAAg5QAAg3A5gpQA5goBPAAQBQAAA5AoQA5ApAAA3QAAA5g5AoQg5AohQAAQhPAAg5gog");
	this.shape_10.setTransform(103.5,96.3,2.179,2.179);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8B5D3B").s().p("AjiDhQhlhdAAiEQAAgRADgVIgDAAQg2AAgpglQgqgnALgxQAQhGBOAAQAeAAAbAKQAbALAIAOQAygsBRgkQBXgnBAAAQA7AABZAiQBTAgAvAjQAXgZA3AKQA/ALASA5QAOAogiAlQgfAiguALQAEAYAAARQAACEhlBdQhlBdiOAAQiNAAhkhdg");
	this.shape_11.setTransform(99.4,69.4,2.179,2.179);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8B5D3B").s().p("AnFGoQgigVgFgrQgDgtAcgoQAggrA8gQQCPgnDLiuQDKitBVidQAjhDA2gbQAwgaAqAPQAqAOALAsQAMAzgkBBQh5Dij2DNQjyDKjSA5QgYAHgUAAQggAAgYgPg");
	this.shape_12.setTransform(169.3,119.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C39A6C").s().p("Ai7D7QhNhnAAiUQAAiTBNhnQBPhpBtAAQBuAABNBpQBNBnABCTQgBCUhNBnQhNBphuAAQhtAAhPhpg");
	this.shape_13.setTransform(97,185);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B5D3B").s().p("AsgJEQgghZBbglQDOhVCJj9QAlhGBDiVQBAiSAkhDQBwjJDLhSQDchbDVBpQBeAuBDBYQBDBXAUBhQAtDnjeBkQheArhjgZQhagVg+hAQg9hDABhQQAChYBPhGQBIg+BMA+QAhAZACAiQAEAlgiAdQgeAaAIAZQAIAUAgAJQBVAVAkhPQAghIgwhOQgrhGhOgnQiXhLiMBSQh2BDhLCTIh1DyQhGCQg3BZQifD9j5BmQgbALgWAAQgzAAgWg+g");
	this.shape_14.setTransform(213,178.6,1,1,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B5D3B").s().p("AkjFqQgogdADg2QALi8B/iuQCBiwDGhmQA5gdA0ANQAuAMAXAoQAXAogPAqQgPAvg6AeQiKBFhSBuQhRBwgICCQgDA2gsAjQgoAhg2AEIgSABQgrAAgegUg");
	this.shape_15.setTransform(122.6,269.2,1,1,120);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B5D3B").s().p("AiZDGQhAhSAAh0QAAhzBAhRQBAhSBZAAQBaAABABSQBABRAABzQAAB0hABSQhABShaAAQhZAAhAhSg");
	this.shape_16.setTransform(99.4,192.3,2.179,2.179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.monkey2, new cjs.Rectangle(0,0,296.4,312.9), null);


(lib.coconutmove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#603813").s().p("AifC8QhOhCgIhmQgIhlBChOQBDhOBlgIQBlgIBOBCQBOBCAIBnQAIBkhCBOQhCBOhmAIIgVABQhZAAhFg7g");
	this.shape.setTransform(24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.coconutmove, new cjs.Rectangle(0,0,49.5,49.4), null);


(lib.basket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D3B").s().p("Ag0COQAqg9ANgYQATgfgSglQgPgighgWQgigWgQgaQgPgZAHgQQAIgRAbADQAeAEAtAdQAoAaAaArQAaArAEAtQAJBrhrAjQgbAJgQAAQgcAAANgdg");
	this.shape.setTransform(65.8,29.4,2.179,2.179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D19414").s().p("AheEfQgjAAgcgTQgdgTgNgfQgbhCgwhuQgIgSAHgRQAOghBAgIQgVhcAYg+QAnhhCQgBQCQABAxBhQAgA+gLBbQA+AIAMAjQAGASgIARQgkBbgeBSQgMAggdATQgeATgjABgAh8iJQgMArAQA3ID3AAQAJg5gRgpQgchFhhAAQhhAAgVBFg");
	this.shape_1.setTransform(60.9,94.3,2.179,2.179);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#603813").s().p("AABDpQgyAdg/AFQhvAJhVhIQhVhIgIhvQgJhtBIhVQBJhVBugJQBVgGBGApQAygeA/gFQBvgIBVBIQBVBIAJBvQAIBthIBVQhIBVhvAIIgZABQhHAAg7gjg");
	this.shape_2.setTransform(33.5,99.4,1,1,0,0,0,-24.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.basket, new cjs.Rectangle(0,-7.9,121.8,164.7), null);


(lib.backlegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D3B").s().p("AhdC6QgRgSgCgdQgFhnAphaQAohbBHgwQAVgNAUAJQATAJAKAXQALAWgEAYQgEAZgVAOQgxAhgaA5QgYA6ADBHQACAegPARQgOAPgVAAQgVAAgPgPg");
	this.shape.setTransform(34.6,138.9,2.179,2.179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B5D3B").s().p("AjaBtQgXgCgMgSQgMgSAGgXQAHgaAbgVQBfhFCFgcQCEgaBZAfQAaAJAIAVQAIAUgIAVQgIAUgTAKQgVAMgagJQg8gUhwAXQhvAZhCAxQgZATgYAAIgEAAg");
	this.shape_1.setTransform(60.3,23.8,2.179,2.179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backlegs, new cjs.Rectangle(3.2,0,114.3,182.8), null);


(lib.armleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D3B").s().p("AiOGlQgmgFgaglQgcgrADhAQAKjfBbi7QBbi7CMhVQAogYAkAaQAgAXAPA1QAPAzgLAyQgNA2goAYQhhA7g6B3Qg4B4gGCZQgDBBgfAiQgYAZgeAAIgMgBg");
	this.shape.setTransform(86.2,127.8,1.075,1.083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B5D3B").s().p("AjaBtQgXgCgMgSQgMgSAGgXQAHgaAbgVQBfhFCFgcQCEgaBZAfQAaAJAIAVQAIAUgIAVQgIAUgTAKQgVAMgagJQg8gUhwAXQhvAZhCAxQgZATgYAAIgEAAg");
	this.shape_1.setTransform(58.3,21.5,2.179,2.179,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.armleg, new cjs.Rectangle(0,0,116.2,173.5), null);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.comboMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.comboMC, null, null);


(lib.comboBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בחר", "20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50.1,5.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Aq5CgIAAk/IVzAAIAAE/g");
	this.shape.setTransform(52.6,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.comboBtn, new cjs.Rectangle(-17.2,1.1,139.6,32), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.closebtnMC_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Bitmap9_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118,-35,0.633,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.closebtnMC_1, new cjs.Rectangle(-118,-35,150,45), null);


(lib.an_Button = function(options) {
	this._element = new $.an.Button(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_1_1, null, null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(154,97,3,0.8)","rgba(179,119,19,0.8)","rgba(232,166,42,0.8)"],[0,0.357,1],-0.9,27.8,1.6,-44.3).s().p("EhK/AFLIAAqVMCV/AAAIAAKVg");
	this.shape_1.setTransform(480,33.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,960,66.3), null);


(lib.tavitcocoMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqTI/IAAx6QCUAeC4gGQBugDDagWQDZgXBugEQC4gFCUAeIAAR7QiUgei4AFQhuADjZAXQjaAXhuADIg4ABQiXAAh9gag");
	this.shape.setTransform(66,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tavitcocoMC, new cjs.Rectangle(0,0,132,120.1), null);


(lib.brownfill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D59A00").s().p("AmkD2IAAnrINJAAIAAHrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.brownfill, new cjs.Rectangle(-42.1,-24.5,84.3,49.2), null);


(lib.basketMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AmaHtIAAvZIM1AAIAAPZg");
	this.shape.setTransform(0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.basketMC, new cjs.Rectangle(-40.6,-48.8,82.3,98.7), null);


(lib.sandMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("EhK/AExIAAphMCV/AAAIAAJhg");
	this.shape.setTransform(-148.1,27.1,1,2.053);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sandMC, new cjs.Rectangle(-628.1,-35.4,960,125.1), null);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(230,165,95,0.8)","rgba(195,148,98,0.8)","rgba(131,121,100,0.8)"],[0,0.341,1],12.2,-0.2,62.3,-0.8).s().p("AGbbcQBcrMgrp0QgppOidnKQiYm6jvkIQjwkGklgyQCVhYAWgKQAhgPAJAUQAXAxAQAQQAxAzBxAiQFMCTDFEjQC4EQBZG0QBNF6AWJSQAOGAgFNTQgRgBhNADIg7ACQgxAAgxgEg");
	this.shape_1.setTransform(66.3,176.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0.2,132.7,351.9), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(157,104,42,0.8)","rgba(181,124,47,0.8)","rgba(233,169,60,0.8)"],[0,0.357,1],-0.6,16.8,0.9,-26.5).s().p("Eg3WACwIAAlfMButAAAIAAFfg");
	this.shape.setTransform(354.3,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,708.6,35.2), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52B953").s().p("AFsGoIASkuIhcDrIh/hyIAojoIhXC+Ih6huIAkjsIhXC+IiFh2IAShnIg0BIIlulJIBOinQDfAqDwBeQHfC7BWD+QBVD+gLDSQgGBqgXA2g");
	this.shape.setTransform(59.1,60.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,118.2,120.3), null);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(230,165,95,0.8)","rgba(195,148,98,0.8)","rgba(131,121,100,0.8)"],[0,0.341,1],-10.7,-0.6,-54.4,0).s().p("AntdfQhIgEgOABQgEt/AKmMQASqVBDmyQBQoDCjk8QC0ldEqiSQA5gSBWgjQAQgGAEABQAEAAACAJQAUBaCgBoQkJAxjVEgQjSEciCHbQiGHmggJpQghKJBVLPQgxADgvAAIgvAAg");
	this.shape_1.setTransform(58.2,188.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0.1,0,116.3,377.5), null);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52B953").s().p("AqGFfQAUjSB7juQB6juH2hxQD8g4DjgIIA0CxImbEOIgphPIABBoIiVBhIg5jJIABDuIiKBbIg6jJIAFDsIiOBdIg4j3IgcEuIjeCRQgOg5ALhpg");
	this.shape_1.setTransform(65.1,51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,130.4,102.7), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52B953").s().p("AHaHcIAFAEIAAjrIg5C9Ig/g0IAPkaIh8DBIhRhBIAcjiIhMC7Ih6hlIAXjjIhKC7IiFhsIALhjIguBGIlwkqIBDilQDZAfDrBOQHWCdBeDwQBeDxgBDLQAABlgTA2g");
	this.shape_1.setTransform(58.9,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,117.7,110.5), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52B953").s().p("AhZIGQg3hEhFi4QhFi4C9lNQBeinBtiDIB6A5Ig6FnIg/gPIA6AyIgVCBIiLhBICDBzIgUB5IiJhCICCBwIhfC5IhXiVIA+CdIgoBsIgCABQgOAAgaggg");
	this.shape_1.setTransform(23.2,55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,46.5,109.9), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52B953").s().p("ACKHPIAhj4IgxCnIiIieIBkiLIh2BgIgwhwIBiiPIh2BhIg0h5IAsg+Ig5AeIiPlPIBphVQCJBlCDCLQEJEWgXDDQgXDDgqB0QgVA6gRASg");
	this.shape_1.setTransform(30.9,55.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,61.9,110.1), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52B953").s().p("AByFuIBUjHIh2CJIg6hrIBTiTIhpBrIg3hoIBQiVIhnBrIg9hvIAkhBIg0AjIink0IBcheQCMBSCKB5QEXDwgEC/QgEC/g6CLQgdBGgcAfg");
	this.shape_2.setTransform(32.3,53.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,64.6,106.6), null);


(lib.instructionsMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.rightleft = new cjs.Text(" ימינה  →  שמאלה  ← ", "14px 'Arial'");
	this.rightleft.name = "rightleft";
	this.rightleft.textAlign = "center";
	this.rightleft.lineHeight = 18;
	this.rightleft.lineWidth = 196;
	this.rightleft.parent = this;
	this.rightleft.setTransform(0,35.2);

	this.timeline.addTween(cjs.Tween.get(this.rightleft).wait(1));

}).prototype = getMCSymbolPrototype(lib.instructionsMC, new cjs.Rectangle(-99.9,33.2,200,21.9), null);


(lib.Path_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(229,162,87,0.8)","rgba(193,144,90,0.8)","rgba(126,116,93,0.8)"],[0,0.341,1],-8.7,-0.5,-40,-0.1).s().p("EgEaAhNQhYgFgPABQgCllgUxXQgOsQANmHQATohBNlFQBXluC1i6QBjgnA8g6QAgggAhgqQAYgXArAVQAqAVB+BhQkCA4iPFDQiDEqgwIwQgpHpARMNQAMIsA3QkQgnAEgsAAQglAAgogDg");
	this.shape_2.setTransform(41.6,212.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0.1,0.2,83,425.6), null);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(229,162,87,0.8)","rgba(193,144,90,0.8)","rgba(126,116,93,0.8)"],[0,0.341,1],12.4,-0.1,62.8,-0.7).s().p("EAF3AivQBctPgnsQQglrpiXpUQiUpJjqlfQjulmkig6QCVhoAWgMQAUgLAJACQAIABAFAOQAXA5AQAUQAxA8BxAoQFPCvDEFUQC7FFBcIUQBRHYAYL5QAQITgFRfIh3AFIhAACQg6AAg2gFg");
	this.shape_1.setTransform(67.1,222.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,134.3,445.5), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#48B749").s().p("AqGGeQAVj4B6kYQB6kaH2iEQD8hCDjgKIAzDRImaE+IgphdIABB7IiUByIg6jtIABEZIiKBrIg5jtIAEEWIiPBuIg3kjIgcFkIjeCrQgNhDAKh8g");
	this.shape_1.setTransform(65.1,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,130.3,121.1), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#48B749").s().p("AhZJjQg3hQhFjZQhFjZC9mJQBejFBtiaIB6BDIg6GoIg/gSIA6A6IgVCZIiMhMICECHIgUCOIiKhNICDCEIhfDaIhXiwIA+C6IgoB/IgCAAQgOAAgaglg");
	this.shape_1.setTransform(23.2,64.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,46.5,129.7), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#48B749").s().p("AFsH0IASllIhcEWIh/iGIApkTIhYDhIh6iCIAkkWIhXDgIiEiMIARh5Ig0BVIlumEIBOjFQDfAyDxBuQHfDcBVEtQBVErgLD4QgGB9gWBAg");
	this.shape_2.setTransform(59.1,70.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,118.2,141.8), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#48B749").s().p("AHaIxIAFAEIAAkVIg5DeIhAg8IAPlMIh7DkIhRhOIAbkKIhLDcIh6h2IAXkNIhKDdIiGh/IAMh2IgvBVIlvlgIBDjDQDZAkDrBcQHWC6BeEbQBeEbgBDvQAAB4gTBAg");
	this.shape_2.setTransform(58.9,65.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,117.7,130.3), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#48B749").s().p("AAyIuIBCkeIhHC9IhxjIIB2iYIiDBjIggiJIB1ibIiCBjIgjiUIA0hDIg9AcIhgmYIB0hXQB6CFBvCyQDhFkgxDiQgyDig6CDQgdBBgTAUg");
	this.shape_2.setTransform(26.7,66.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,53.5,133.7), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(154,97,3,0.8)","rgba(179,119,19,0.8)","rgba(232,166,42,0.8)"],[0,0.357,1],-0.6,17.1,0.9,-27.1).s().p("Eg78ACrIAAlWMB35AAAIAAFWg");
	this.shape_3.setTransform(383.7,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,767.5,34.3), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#754C28").ss(2,1).p("AIvgGIxdAN");
	this.shape.setTransform(56.9,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#754C28").ss(2,1).p("AA9i/Ih3BwIB3EP");
	this.shape_1.setTransform(119,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,126.2,40.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#754C28").ss(2,1).p("AnVgFIOrAK");
	this.shape.setTransform(60.3,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#754C28").ss(2,1).p("Ag8i/IB3BwIh3EP");
	this.shape_1.setTransform(7.1,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,108.3,40.5), null);


(lib.telemUrl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.myLinkOdot();
	this.instance.parent = this;
	this.instance.setTransform(117.5,11.7,1,1,0,0,0,117.5,11.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.telemUrl, new cjs.Rectangle(0,0,235,18.9), null);


(lib.odotMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Xodot = new lib.X();
	this.Xodot.name = "Xodot";
	this.Xodot.parent = this;
	this.Xodot.setTransform(-259,-149.5,1,1,0,0,0,14,11.5);
	new cjs.ButtonHelper(this.Xodot, 0, 1, 1);

	this.txt5 = new lib.telemUrl();
	this.txt5.name = "txt5";
	this.txt5.parent = this;
	this.txt5.setTransform(1.6,17.4,1,1,0,0,0,117.5,11.7);
	new cjs.ButtonHelper(this.txt5, 0, 1, 1);

	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(79,2,0.635,0.556);

	this.txt6 = new cjs.Text("מכון טכנולוגי חולון", "bold 13px 'Arial'");
	this.txt6.name = "txt6";
	this.txt6.textAlign = "center";
	this.txt6.lineHeight = 17;
	this.txt6.lineWidth = 196;
	this.txt6.parent = this;
	this.txt6.setTransform(25.3,37.8);

	this.txt4 = new cjs.Text("פותח במסגרת פרויקט בקורסים:\nסביבות לימוד אינטראקטיביות 1 & אנימציה, תשע\"ח ", "bold 14px 'Arial'");
	this.txt4.name = "txt4";
	this.txt4.textAlign = "center";
	this.txt4.lineHeight = 18;
	this.txt4.lineWidth = 391;
	this.txt4.parent = this;
	this.txt4.setTransform(15.8,-49.4);

	this.txt3 = new cjs.Text("תמרה ראובני ונופר כהן", "italic bold 18px 'Arial'", "#666666");
	this.txt3.name = "txt3";
	this.txt3.lineHeight = 22;
	this.txt3.lineWidth = 173;
	this.txt3.parent = this;
	this.txt3.setTransform(-123.7,-93.4);

	this.txt2 = new cjs.Text("אפיון ופיתוח:", "bold 18px 'Arial'");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "right";
	this.txt2.lineHeight = 22;
	this.txt2.lineWidth = 270;
	this.txt2.parent = this;
	this.txt2.setTransform(146,-93.9);

	this.text = new cjs.Text("תפוס את הקוקוס", "bold 16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 236;
	this.text.parent = this;
	this.text.setTransform(8.3,-124.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").p("EgpkgSoIAAi3MBTJAAAIAAC3MAAAAoGIAAAHEgpkAVkIAAgGMAAAgoGUApkABTAplgBTEAplAVeMhTJAAA");
	this.shape.setTransform(0.5,-23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgpYAZTIAAgGQADABADAFgEgpkARsMAAAgoGUApkABTAplgBTUgplABTgpkgBTIAAi4MBTJAAAIAAC4MAAAAoGg");
	this.shape_1.setTransform(0.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.txt2},{t:this.txt3},{t:this.txt4},{t:this.txt6},{t:this.instance},{t:this.txt5},{t:this.Xodot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotMC, new cjs.Rectangle(-273,-162.3,540.6,324.8), null);


(lib.odotMC_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.odotMC();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.2,-116.2,1,1,0,0,0,-3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotMC_1, new cjs.Rectangle(-268.8,-278.3,540.1,324.3), null);


(lib.monkeyMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(2).call(this.frame_5).wait(2));

	// monkey and inside of basket
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,69,69,0)").ss(1,1,1).p("AEwhcQg6hGhZAAQhUgBhFA5QgtAlhcBYQhWBHhUAAQgmAAgDAlQgCAlAkAAQBmAABfhEQAhgXAugrQBFg9AIgIQAxgqA0gHQA8gIApAyQAVAZAEAfQAFAkgXAUQgZAYgagVQgJgHABgJQAAgLAPgEQAigNgQggQgRgjgjANQgmANgPAfQgMAdALAhQALAhAcAVQAeAXAngBQBdgDAUhbQAIgmgJgoQgLgqgZgfg");
	this.shape.setTransform(35.2,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F6548").s().p("AlYB/QADglAmAAQBUAABWhHQBchYAtglQBFg5BUABQBZAAA6BGQAZAeALAqQAJApgIAmQgUBahdAEQgnABgegXQgcgVgLghQgLghAMgeQAPgeAmgOQAjgMARAjQAQAggiANQgPAEAAALQgBAIAJAIQAaAUAZgXQAXgVgFgjQgEgggVgZQgpgxg8AIQg0AHgxAqIhNBFQguArghAWQhfBFhmAAQgkAAACglg");
	this.shape_1.setTransform(35.2,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{skewY:0,x:35.2}},{t:this.shape,p:{skewY:0,x:35.2}}]}).to({state:[{t:this.shape_1,p:{skewY:180,x:-17.4}},{t:this.shape,p:{skewY:180,x:-17.4}}]},4).to({state:[{t:this.shape_1,p:{skewY:0,x:40.6}},{t:this.shape,p:{skewY:0,x:40.6}}]},1).to({state:[{t:this.shape_1,p:{skewY:0,x:35.2}},{t:this.shape,p:{skewY:0,x:35.2}}]},1).wait(1));

	// monkey and inside of basket
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.8).p("Ag4ANIASgNQAVgMARABQAcACAdAW");
	this.shape_2.setTransform(1.4,-32.4,1,1,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C39A6C").s().p("AgdANQgIgPAIgPQAEgIAZgCQAagCADAJQATArg7AFIgBAAQgKAAgHgPg");
	this.shape_3.setTransform(25.9,-36.5,1,1,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C39A6C").s().p("AgkgWQAEgKAgAAQAeAAAGAKQAKARgIATQgIATgNAAQhJAAAUg3g");
	this.shape_4.setTransform(-22.1,-50.4,1,1,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24201F").s().p("AgNAAQAAgFADgCQAEgEAEABQAQAAgBAKQABALgNAAIgBAAQgMAAgBgLg");
	this.shape_5.setTransform(-0.9,-29.8,1,1,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#252121").s().p("AgMAAQABgKALAAQAOAAAAAKQAAALgOAAQgLAAgBgLg");
	this.shape_6.setTransform(2.9,-28.8,1,1,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#251F1E").s().p("AAgATQgQgcgJgCQgIgCgeAUIgFAEQgCABgDgCQgDgDACgFQADgJAUgJQATgKANADQANACAJANQAKAMgBAPIgEAGIgCAAQgDAAgDgGg");
	this.shape_7.setTransform(12.2,-36.9,1,1,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#26201F").s().p("AgigNQAZgaAdARQAiAUgPAbIgPgZQgIgNgPgBQgSAAgGAOQgDAFgCAYQgagYAUgSg");
	this.shape_8.setTransform(-5.8,-41.2,1,1,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#25201F").s().p("AAQAsQgygBhEgbIgZgMIgYgLQgKgRASADQBhBEB0gXQAXgFANgHQASgLAIgSIAGgHQABgBAEgMQACgIAFADQAIADgDAJIgHAOQgCAFgFAIIgJALQgzAkg+AAIgDAAg");
	this.shape_9.setTransform(-1,-24.7,1,1,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C39A6C").s().p("AiIBXQgagNgWgVQgqgrAXgoQArhNBIADQAsACAsAcQAogcAsgEQBNgGArBPQAXApgrArIhDAuIhkgmIgbAAIhEAcIgnAUg");
	this.shape_10.setTransform(3.6,-39.2,1,1,15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C39A6C").s().p("AhpBLQgsgfAAgsQAAgrAsgfQAsgfA9AAQA+AAAsAfQAsAfAAArQAAAsgsAfQgsAfg+AAQg9AAgsgfg");
	this.shape_11.setTransform(0.3,-23,1,1,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8B5D3B").s().p("AivCvQhOhJAAhmIACgdIgCAAQgqAAgggdQgggeAIgnQANg1A8gBQA2AAARAbQAnghA+gcQBFgeAxgBQAtAABFAbQBAAZAlAcQARgUArAHQAxAJAOArQAKAggaAdQgXAagkAJQADARAAAOQAABmhOBJQhOBHhuABQhtgBhOhHg");
	this.shape_12.setTransform(1.3,-32.7,1,1,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(0.8).p("AgugZIAVgCQAYAAAMAKQAVAPAKAi");
	this.shape_13.setTransform(0.8,-31.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#24201F").s().p("AgEAKQgLgGAGgKQAGgIAHAFQAMAIgFAIQgEAFgFAAQgCAAgEgCg");
	this.shape_14.setTransform(-1.7,-30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252121").s().p("AgGAJQgJgGAFgJQAHgJAJAGQAKAHgFAIQgEAGgGAAQgCAAgFgDg");
	this.shape_15.setTransform(1.5,-28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#251F1E").s().p("AAEAgQgUgBgJgIQgJgIgBgPQAAgQAIgMQAEgEACABQAEAAAAAIQgDAgAGAGQAHAGAhgEIAGgBQAAAAABAAQABAAAAAAQABABAAAAQAAABABAAQABAEgFAEQgGAGgRAAIgFAAg");
	this.shape_16.setTransform(-3.6,-41.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#26201F").s().p("AgdAOQgSgfAbgRIgBAdQAAAOAMAIQANAIAMgJQAFgEAOgSQAJAggZAHQgJACgIAAQgUAAgLgVg");
	this.shape_17.setTransform(11.4,-32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#25201F").s().p("ABeBKQgXhjhVgjQgRgGgOAAQgRAAgQAMIgIADQgCABgJAIQgGAFgCgEQgDgGAHgGQAKgFADgDIAZgOQA3gGAnAeQAgAYAbAzQAEAIAFANIAIAWQgCAKgFAAQgDAAgDgDg");
	this.shape_18.setTransform(-5,-19.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C39A6C").s().p("AAlCRIg5hRIgVgOIhtgNIgEgaQgNgXgGgcQgKg5AogYQBKgsA3AnQAgAXATAtQAwgCAkASQA/AhgJBXQgEAvg5APIg3AFg");
	this.shape_19.setTransform(5.5,-39);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C39A6C").s().p("Ag4BZQgxgegRgwQgRgvAXglQAYglAzgFQAxgEAxAfQAwAfASAwQARAvgXAlQgYAlgzAEIgNAAQgrAAgqgbg");
	this.shape_20.setTransform(-2.7,-24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C39A6C").s().p("AAFAeQgLAAgUgLQgJgFACgQQACgRAOgJQAJgFAVANQAXAMgCAIQgEAegYAAIgBAAg");
	this.shape_21.setTransform(34.5,-27);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C39A6C").s().p("AgIAhQgUgMgCgKQgDgOAcgbQAGgIAQALQAQAKgCAKQgEARgPAOQgLAKgFAAIgEgBg");
	this.shape_22.setTransform(-11,-55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B5D3B").s().p("AiyDyQhbg6gZhlQgZhlA3hWQAHgLALgNIgCgBQgigWgKgpQgLgrAcgbQAngnAxAfQAtAdgBAfQAzgIBBAJQBHAKAqAbQAlAXAqA7QAoA2APAqQAZgHAfAcQAjAhgMAsQgIAgglAKQgiAKghgLQgIAQgIAMQg3BWhnAVQgZAFgaAAQhJAAhDgrg");
	this.shape_23.setTransform(10.5,-34.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#231F20").ss(0.8,1).p("AAYADQgDgFgFgFQgKgLgJAEQgKAEgGANQgDAHgBAG");
	this.shape_24.setTransform(-14,-41);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C39A6C").s().p("AgTADQAGgNAKgEQAJgEAKALQAFAFADAFIgvANQABgGADgHg");
	this.shape_25.setTransform(-14,-41);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgGARQgDgHgBgKQABgJADgHQADgHADAAQAEAAADAHQAEAHAAAJQAAAKgEAHQgDAHgEAAQgDAAgDgHg");
	this.shape_26.setTransform(-13.6,-36.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#231F20").ss(0.8,1).p("AgdADIAKgKQANgLALAEQAMAEAIANQAEAHABAG");
	this.shape_27.setTransform(-0.4,-41);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C39A6C").s().p("AgdADIAKgKQANgLALAEQAMAEAIANIAFANg");
	this.shape_28.setTransform(-0.4,-41);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgJARQgDgHAAgKQAAgJADgHQAEgHAFAAQAFAAAEAHQAEAHAAAJQAAAKgEAHQgEAHgFAAQgFAAgEgHg");
	this.shape_29.setTransform(-0.8,-36.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#252121").s().p("AgLAWQgHgIgCgLQgBgLAFgJQAFgJAJgBQAHgBAHAIQAHAHACAMQABAKgFAJQgFAJgJABIgCAAQgGAAgGgGg");
	this.shape_30.setTransform(-9.7,-19.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#231F20").ss(0.8,1).p("Ag4APQAHgHAKgIQAVgNASAAQAQgBAXALQALAFAHAF");
	this.shape_31.setTransform(-9.5,-32.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#24201F").s().p("AgMAAQgBgEADgDQADgDAFAAQAPAAAAAKQABALgNAAIgBAAQgMAAAAgLg");
	this.shape_32.setTransform(-11.1,-30.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#252121").s().p("AgNAAQABgKAMAAQANAAABAKQAAALgOAAQgLAAgCgLg");
	this.shape_33.setTransform(-7.1,-30.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C39A6C").s().p("AhfBLQgogdABgnQAAgsAWgeQAcgjA0AAQA/AAAxAVQA3AYABAlQAAAqgnAnQgpAqg3AAQg3AAgpgcg");
	this.shape_34.setTransform(-7.5,-23.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C39A6C").s().p("ABKBXIg2gaIgWAAIg6AcIghATIgQgTQgQgOgMgWQgXgrATgpQAkhMAiAFQAMACAOAMIAVATQAnggAcgFQA8gKAlBPQAUApgRAtQgIAXgMAPIggAVg");
	this.shape_35.setTransform(-4.7,-38.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C39A6C").s().p("AgYANQgGgPAGgPQAEgIAUgCQAVgCADAJQAQArgxAFIgBAAQgIAAgGgPg");
	this.shape_36.setTransform(22.1,-43.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C39A6C").s().p("AgdgWQADgKAaAAQAYAAAFAKQAJASgHATQgGASgLAAQg8AAARg3g");
	this.shape_37.setTransform(-25.1,-43.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8B5D3B").s().p("AiQCvQhAhJAAhmQAAgOACgPIgCAAQgiAAgagdQgbgeAHgnQALg1AxgBQAsAAAPAbQAgghAygcQA4geApgBQAlAAA5AbQA1AYAeAcQAOgUAjAIQAoAJAMArQAIAggVAdQgTAageAJIACAfQAABmhABJQhABHhaABQhagBhAhHg");
	this.shape_38.setTransform(-0.9,-32.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8B5D3B").s().p("AijCuQhAhIAAhmIACggQgegIgTgbQgVgdAIgeQAMgtAogIQAjgHAOATQAegbA1gZQA5gbAlAAQApAAA4AfQAyAbAgAjQAPgbAsAAQAxAAALA2QAHAlgbAfQgaAdgiAAIgCAAQACAOAAAPQAABmhABIQhABIhaAAQhaAAhAhIg");
	this.shape_39.setTransform(18.7,-32.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#231F20").ss(0.5).p("Agyg1IArgGQAsgBAHAeQAOBCg1ATQgQAFgVABIgSgB");
	this.shape_40.setTransform(9.7,-29.2,1,1,15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#231F20").ss(1,1).p("Ag9gCQAQALAXAFQAtAJAngm");
	this.shape_41.setTransform(-21,-28,1,1,15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#231F20").ss(0.8,1).p("AAMAQQAAgHgEgIQgHgPgMgC");
	this.shape_42.setTransform(-5.2,-44.3,1,1,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C39A6C").s().p("AgLgQQAMACAHAPQAEAIAAAHg");
	this.shape_43.setTransform(-5.2,-44.3,1,1,15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AgKAVQgEgCAAgHQABgIAFgIQAEgJAFgFQAGgEAEACQAEACAAAHQgBAIgFAIQgEAJgFAFQgEADgDAAIgDgBg");
	this.shape_44.setTransform(-9.5,-42.4,1,1,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#24201F").s().p("AgCALQgNgFAEgKQABgFAEgBQAEgCADACQAQAFgEAJQgDAIgHAAIgFgBg");
	this.shape_45.setTransform(-16.9,-38.3,1,1,15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C39A6C").s().p("AglBlQgpgRgTglQgTgmAPgkQAQgqAcgVQAhgYAlAPQAuASAcAiQAfAmgNAiQgQAngqAZQgdARgaAAQgPAAgOgFg");
	this.shape_46.setTransform(-16,-30.7,1,1,15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C39A6C").s().p("AAEBIIg2gVIgYABQARg4AZgqQAyhVAqBKQAXApgNAtQgGAYgLAPIgeAZg");
	this.shape_47.setTransform(-7.8,-43.5,1,1,15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C39A6C").s().p("AgSAZQgIgCgBgQQgBgQAKgNQAGgHAUAFQAVAFAAAJQABAlgfAAQgHAAgKgCg");
	this.shape_48.setTransform(8.7,-30.1,1,1,15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8B5D3B").s().p("AhODhQhYgUglhHQgkhGAXhjQACgFAQgJQARgIABgFQAGgzAgguQA/hbCDAYQBJANAzA3QBOBTgtCJQgeBfhWAtQg3Aeg6AAQgdAAgdgHg");
	this.shape_49.setTransform(2.7,-30.8,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_38},{t:this.shape_37,p:{skewY:0,x:-25.1}},{t:this.shape_36,p:{skewY:0,x:22.1}},{t:this.shape_35,p:{skewY:0,x:-4.7}},{t:this.shape_34,p:{skewY:0,x:-7.5}},{t:this.shape_33,p:{skewY:0,x:-7.1}},{t:this.shape_32,p:{skewY:0,x:-11.1}},{t:this.shape_31,p:{skewY:0,x:-9.5}},{t:this.shape_30,p:{skewY:0,x:-9.7}},{t:this.shape_29,p:{skewY:0,x:-0.8}},{t:this.shape_28,p:{skewY:0,x:-0.4}},{t:this.shape_27,p:{skewY:0,x:-0.4}},{t:this.shape_26,p:{skewY:0,x:-13.6}},{t:this.shape_25,p:{skewY:0,x:-14}},{t:this.shape_24,p:{skewY:0,x:-14}}]},1).to({state:[{t:this.shape_39},{t:this.shape_37,p:{skewY:180,x:42.9}},{t:this.shape_36,p:{skewY:180,x:-4.3}},{t:this.shape_35,p:{skewY:180,x:22.5}},{t:this.shape_34,p:{skewY:180,x:25.4}},{t:this.shape_33,p:{skewY:180,x:24.9}},{t:this.shape_32,p:{skewY:180,x:28.9}},{t:this.shape_31,p:{skewY:180,x:27.3}},{t:this.shape_30,p:{skewY:180,x:27.5}},{t:this.shape_29,p:{skewY:180,x:18.6}},{t:this.shape_28,p:{skewY:180,x:18.2}},{t:this.shape_27,p:{skewY:180,x:18.2}},{t:this.shape_26,p:{skewY:180,x:31.4}},{t:this.shape_25,p:{skewY:180,x:31.8}},{t:this.shape_24,p:{skewY:180,x:31.8}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8F6548").s().p("AAIBiQADgxgTgpQgUgogmgXQgigUAUgoQAUgnAjAUQA3AiAfA/QAgA/gFBIQgCAsgoAAQgoAAACgsg");
	this.shape_50.setTransform(11.4,41.3,1.017,1.292);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8F6548").s().p("AhXBiQgEhIAfg/QAgg/A3giQAigUAUAnQAUAogiAUQgmAXgUAoQgTAoADAyQADAsgoAAQgoAAgDgsg");
	this.shape_51.setTransform(-11.5,40.7,1.017,1.292);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8F6548").s().p("AiuC+QhIhPAAhvQAAhvBIhOQBJhQBlAAQBmAABIBQQBJBOAABvQAABvhJBPQhIBPhmAAQhlAAhJhPg");
	this.shape_52.setTransform(0.9,-38.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8F6548").s().p("Ai0BrQAAgwAtgDQAygCBLg3QBKg4Aig8QAOgZATgIQARgGAOALQAjAZgdA2QgxBXhbBBQhYA/hKAEIgEAAQgpAAgBgug");
	this.shape_53.setTransform(22.7,-17.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8F6548").s().p("Ah3CQQgyg7ABhVQgBhTAyg7QAyg9BFAAQBGAAAyA9QAxA7AABTQAABVgxA7QgyA8hGgBQhFABgyg8g");
	this.shape_54.setTransform(-1.3,9.4,1.017,1.112);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8F6548").s().p("AB0CMQhigUhahCQhYhBgbhFQgRgqAugPQAugQARAqQASAvBNA2QBLA1BFAOQAcAFANARQALAOgFARQgMAggnAAQgLAAgNgCg");
	this.shape_55.setTransform(-21.9,-17.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8F6548").s().p("Ag6A7QgYgZAAgiQAAghAYgZQAYgZAiABQAigBAZAZQAYAZAAAhQAAAigYAZQgZAYgiAAQgiAAgYgYg");
	this.shape_56.setTransform(27.6,-46.4,1.017,1.112);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8F6548").s().p("AhCA7QgcgZAAgiQAAghAcgZQAbgZAnABQAogBAbAZQAcAZAAAhQAAAigcAZQgbAYgoAAQgnAAgbgYg");
	this.shape_57.setTransform(-26.9,-46.4,1.017,1.112);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8F6548").s().p("AixBgQAAgrAsgDQAxgCBKgxQBJgyAhg2QAOgXASgHQARgFAOAJQAjAXgdAxQgwBNhZA7QhXA5hJAEIgEAAQgoAAgBgqg");
	this.shape_58.setTransform(-29.8,-1.8,1.017,1.112,45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8F6548").s().p("AiXCMQgkgWAbgyQArhPBWhAQBUg9BIgIQAsgEADArQAEAsgsAEQgyAFhHA1QhGA2geA4QgMAYgTAHQgHADgHAAQgJAAgIgFg");
	this.shape_59.setTransform(-22.9,-10.5,1.017,1.112,0,165,-15);

	this.instance = new lib.Monkeywalk();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,-2.7,1,1,0,0,0,41,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:-1.3,y:9.4,skewY:0}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:-11.5,skewY:0}},{t:this.shape_50,p:{x:11.4,skewY:0}}]}).to({state:[{t:this.shape_59,p:{y:-10.5,rotation:0,skewX:165,skewY:-15,x:-22.9}},{t:this.shape_54,p:{x:-0.3,y:10.4,skewY:0}},{t:this.shape_58,p:{y:-1.8,rotation:45,skewX:0,skewY:0,x:-29.8}},{t:this.shape_51,p:{x:-12,skewY:0}},{t:this.shape_50,p:{x:10.9,skewY:0}}]},1).to({state:[{t:this.shape_59,p:{y:-11.5,rotation:0,skewX:165,skewY:-15,x:-22.9}},{t:this.shape_54,p:{x:-0.3,y:9.4,skewY:0}},{t:this.shape_58,p:{y:-2.8,rotation:45,skewX:0,skewY:0,x:-29.8}},{t:this.shape_51,p:{x:-12,skewY:0}},{t:this.shape_50,p:{x:10.9,skewY:0}}]},1).to({state:[{t:this.shape_59,p:{y:-11.5,rotation:0,skewX:165,skewY:-15,x:-22.9}},{t:this.shape_54,p:{x:-0.3,y:9.4,skewY:0}},{t:this.shape_58,p:{y:-2.8,rotation:45,skewX:0,skewY:0,x:-29.8}},{t:this.shape_51,p:{x:-11.5,skewY:0}},{t:this.shape_50,p:{x:11.4,skewY:0}}]},1).to({state:[{t:this.shape_59,p:{y:-11.5,rotation:-165,skewX:0,skewY:0,x:40.7}},{t:this.shape_54,p:{x:18.1,y:9.4,skewY:180}},{t:this.shape_58,p:{y:-2.8,rotation:0,skewX:-45,skewY:135,x:47.6}},{t:this.shape_51,p:{x:29.3,skewY:180}},{t:this.shape_50,p:{x:6.4,skewY:180}}]},1).to({state:[{t:this.shape_59,p:{y:-11.5,rotation:0,skewX:165,skewY:-15,x:-22.9}},{t:this.shape_54,p:{x:-0.3,y:9.4,skewY:0}},{t:this.shape_58,p:{y:-2.8,rotation:45,skewX:0,skewY:0,x:-29.8}},{t:this.shape_51,p:{x:-12,skewY:0}},{t:this.shape_50,p:{x:10.9,skewY:0}}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-65.1,111.8,124.8);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3WAcyMAAAg5jMButAAAMAAAA5jg");
	mask.setTransform(354.3,276.4);

	// Layer_3
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(86,76.8,1,1,0,0,0,34.1,76.8);
	this.instance.alpha = 0.922;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.9,96,1,1,0,0,0,16.9,16.9);
	this.instance_1.alpha = 0.809;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.5,104.5,1,1,0,0,0,25.3,51.3);
	this.instance_2.alpha = 0.891;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(576.9,95.5,1,1,0,0,0,30.9,55.1);
	this.instance_3.alpha = 0.859;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(618.1,87.1,1,1,0,0,0,58.9,55.3);
	this.instance_4.alpha = 0.859;

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(591.8,98.8,1,1,0,0,0,59.1,60.1);
	this.instance_5.alpha = 0.859;

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(563.4,170.4,1,1,0,0,0,38.1,13.3);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.Path_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(547.3,159.4,1,1,0,0,0,33.5,23.1);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.Path_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(506.5,215.5,1,1,0,0,0,18,37.5);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.Path_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(491.7,207.8,1,1,0,0,0,30.1,32.3);
	this.instance_9.alpha = 0.699;

	this.instance_10 = new lib.Path_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(481.7,186,1,1,0,0,0,35.8,15.6);
	this.instance_10.alpha = 0.699;

	this.instance_11 = new lib.Path_13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(550.8,205.1,1,1,0,0,0,31.8,30.7);
	this.instance_11.alpha = 0.891;

	this.instance_12 = new lib.Path_14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(542.2,202.5,1,1,0,0,0,11.2,11);
	this.instance_12.alpha = 0.809;

	this.instance_13 = new lib.Path_15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(525,204.3,1,1,0,0,0,11.2,11);
	this.instance_13.alpha = 0.809;

	this.instance_14 = new lib.Path_16();
	this.instance_14.parent = this;
	this.instance_14.setTransform(543.3,303.2,1,1,0,0,0,52.5,124.4);
	this.instance_14.alpha = 0.801;

	this.instance_15 = new lib.Path_17();
	this.instance_15.parent = this;
	this.instance_15.setTransform(129,140.4,1,1,0,0,0,41.2,19.6);
	this.instance_15.alpha = 0.699;

	this.instance_16 = new lib.Path_18();
	this.instance_16.parent = this;
	this.instance_16.setTransform(177.7,193.5,1,1,0,0,0,19.4,40);
	this.instance_16.alpha = 0.699;

	this.instance_17 = new lib.Path_19();
	this.instance_17.parent = this;
	this.instance_17.setTransform(204.6,193,1,1,0,0,0,38.1,39.6);
	this.instance_17.alpha = 0.699;

	this.instance_18 = new lib.Path_20();
	this.instance_18.parent = this;
	this.instance_18.setTransform(209.6,164.7,1,1,0,0,0,39.6,16.9);
	this.instance_18.alpha = 0.699;

	this.instance_19 = new lib.Path_23();
	this.instance_19.parent = this;
	this.instance_19.setTransform(128.5,178.7,1,1,0,0,0,45.5,28.4);
	this.instance_19.alpha = 0.891;

	this.instance_20 = new lib.Path_24();
	this.instance_20.parent = this;
	this.instance_20.setTransform(147.7,190.1,1,1,0,0,0,13.8,13.3);
	this.instance_20.alpha = 0.809;

	this.instance_21 = new lib.Path_25();
	this.instance_21.parent = this;
	this.instance_21.setTransform(127.5,181.5,1,1,0,0,0,12.4,11.9);
	this.instance_21.alpha = 0.809;

	this.instance_22 = new lib.Path_26();
	this.instance_22.parent = this;
	this.instance_22.setTransform(161.6,184.4,1,1,0,0,0,12.4,11.9);
	this.instance_22.alpha = 0.809;

	this.instance_23 = new lib.Path_27();
	this.instance_23.parent = this;
	this.instance_23.setTransform(128.2,292.3,1,1,0,0,0,71.3,135.5);
	this.instance_23.alpha = 0.801;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(229,162,87,0.8)","rgba(193,144,90,0.8)","rgba(126,116,93,0.8)"],[0,0.341,1],-9.5,-0.7,-48.8,-0.2).s().p("AmpbkQhOgDgRABQgZ1UB+rvQA5lUBlk6QBMjvCQlYQCpg1Bfg5QAygeAhgfQAQgLAjAXQB3BPAxAdQkcAxiqD9QieDuhPHCQhFGLgVKIQgPG9ADOdQgyADgxAAIg6gBg");
	this.shape.setTransform(69.7,251.2);

	this.instance_24 = new lib.Path_30();
	this.instance_24.parent = this;
	this.instance_24.setTransform(354.3,443.8,1,1,0,0,0,354.3,17.6);
	this.instance_24.alpha = 0.801;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(229,162,87,0.8)","rgba(193,144,90,0.8)","rgba(126,116,93,0.8)"],[0,0.341,1],12.2,-0.2,62.3,-0.8).s().p("AGbbcQBcrMgrp0QgppOidnKQiYm6jvkIQjwkGklgyQCVhYAWgKQAhgPAJAUQAXAxAQAQQAxAzBxAiQFMCTDFEjQC4EQBZG0QBNF6AWJSQAOGAgFNTQgRgBhNADIg7ACQgxAAgxgEg");
	this.shape_1.setTransform(626.7,251.3);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.shape,this.instance_24,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_24},{t:this.shape},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,92.2,708.6,368.4), null);


(lib.endanimationMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// basket
	this.instance = new lib.basket();
	this.instance.parent = this;
	this.instance.setTransform(490.4,-195.5,1,1,0,0,0,60.9,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:74.4,scaleX:1,scaleY:1,x:490.5,y:-189.4},0).wait(1).to({scaleX:1,scaleY:1,x:490.6,y:-179.4},0).wait(1).to({scaleX:1,scaleY:1,x:490.8,y:-169.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:490.9,y:-159.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:491,y:-149.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:491.1,y:-139.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:491.3,y:-129.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:491.4,y:-119.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:491.5,y:-109.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:491.6,y:-99.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:491.7,y:-89.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:491.8,y:-79.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:491.9,y:-69.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:492.1,y:-59.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:492.2,y:-49.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:492.3,y:-39},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:492.4,y:-29},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:492.5,y:-19},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:492.6,y:-8.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:492.8,y:1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:492.9,y:11.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:493,y:21.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:493.1,y:31.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:493.2,y:41.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:493.3,y:51.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:493.5,y:61.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:493.6,y:71.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:493.7,y:81.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:493.8,y:91.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:494,y:101.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:494.1,y:111.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:494.2,y:121.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:494.3,y:131.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:494.4,y:141.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:494.6,y:151.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:494.7,y:161.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:494.8,y:171.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:494.9,y:181.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:495,y:191.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:495.2,y:201.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:495.3,y:211.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:495.4,y:221.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:495.5,y:231.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:495.6,y:241.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:495.7,y:251.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:495.8,y:261.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:496,y:271.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:496.1,y:281.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:496.2,y:291.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:496.3,y:301.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:496.4,y:311.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:496.5,y:321.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:496.7,y:331.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:496.8,y:341.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:496.9,y:351.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:497,y:362},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:497.2,y:372},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:497.3,y:382},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:497.4,y:392.1},0).wait(1).to({regY:78.3,x:500.4,y:392.3},0).to({_off:true},11).wait(231));

	// arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D3B").s().p("Ai8CcQgagCgPgSQgMgRACgWQACgXAQgPQARgRAbACQBAAFBlg1QBlg1AyhBQAVgcAZgFQAWgFARAPQAQAOABAYQAAAbgVAbQhIBch6A+QhtA4hYAAIgRgBg");
	this.shape.setTransform(593.5,370.8,2.179,2.179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B5D3B").s().p("AmJFWQg5gFgggoIgKgQQgRgeAEgnQAGgsAdgeIAHgGQAngiA5AEQCHAGC3hhIAkgUQCThVBVhjQAhgmAdgnQAUgdAZgRQAagTAdgFQAxgLAlAfQAkAeADAzIABACQADA5goA4QhoCgi5B6QgzAhg4AeQgvAYgsAUQiZBBiIAMQgYACgXAAIgogCg");
	this.shape_1.setTransform(596.2,370.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8B5D3B").s().p("Al3FYQg5gGgggoQgGgIgEgIQgRgfAEglIAAgBQAGgsAfgbIAHgGQAoghA4AEQCPADCshhQARgLAPgLQCJhVBEhlIA2hNIAAgBQATgdAagQQAbgTAdgFQAwgKAmAeQAkAcAGAyIAAACQAHA4gjA3QhWCiiyB8QgwAjg5AfQgtAZguAUQiXBCiKALQgYADgWAAQgVAAgTgCg");
	this.shape_2.setTransform(599,370);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B5D3B").s().p("AlmFZQg5gGgggpIgKgPQgSgfAFglQAHgsAhgaIAGgGQApgeA4ADQCXABCghjQAQgLANgLQB+hWAzhoQAWgmAZgnQASgdAbgRQAbgSAdgFQAwgKAmAdQAlAcAIAxIABACQAJA2geA2QhCCjisCAQgvAkg4AfQgtAaguAVQiUBCiMAMQgXACgVAAQgWAAgVgCg");
	this.shape_3.setTransform(601.8,369.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B5D3B").s().p("AlVFbQg5gHgggpQgGgHgEgIQgSggAFgkQAHgrAjgYIAGgGQAqgdA4ADQCegCCVhjQANgMANgMQByhWAjhqQARgnAXgnQAQgdAcgRQAbgRAegFQAwgJAmAcQAlAbALAvIABACQAMA1gZA1QgvCkilCEQguAlg3AgQgsAbgvAVQiSBCiPANQgWACgWAAQgVAAgVgCg");
	this.shape_4.setTransform(604.6,369.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8B5D3B").s().p("AlEFcQg4gHghgpIgKgPQgTggAGgkIAAAAQAHgqAlgXIAHgFQArgbA3ABQClgDCJhlQANgMALgNQBnhXAShsQAMgnAVgmIAAgBQAPgdAdgRQAbgRAegEQAvgIAoAbQAlAaANAuIABACQAQA0gUAzQgdClieCHQgsAng3AhQgsAbgvAVQiQBDiRAOQgVACgVAAQgXAAgVgDg");
	this.shape_5.setTransform(607.4,368.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B5D3B").s().p("Ak0FeQg4gIgggpQgGgHgFgIQgTghAGgjIAAAAQAIgpAmgWIAIgEQArgaA2ABQCugGB8hlQANgNAJgNQBchYAChuQAFgoAUgmIAAAAQANgeAegRQAcgQAegEQAvgIAoAbQAmAZAPAsIABACQATAzgPAyQgKCmiYCLQgpAog3AiQgrAbgvAWQiPBDiTAPQgUACgTAAQgZAAgWgDg");
	this.shape_6.setTransform(610.3,368.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B5D3B").s().p("AklFfQg3gIghgpIgKgQQgUggAGgjQAJgoAogUIAHgEQAtgYA1AAQC1gIByhnQALgNAIgOQBQhYgPhxQAAgnASgnQAMgeAfgQQAcgQAegEQAvgHApAZQAmAZARArIACACQAWAxgKAyQAJCmiRCPQgpApg2AjQgqAcgwAWQiMBDiWAPQgUADgTAAQgYAAgXgEg");
	this.shape_7.setTransform(613.3,368);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8B5D3B").s().p("AkYFhQg3gJghgpQgGgHgEgJQgVghAIghIAAgBQAJgnApgTIAIgEQAtgWA1AAQC9gLBmhnQAKgOAGgPQBFhYgghzQgFgoAQgmIAAgBQALgeAggQQAcgPAegEQAvgHApAZQAmAXAUAqIACACQAZAwgFAxQAcCoiKCRQgnArg2AkQgqAcgvAXQiLBDiYAQQgTACgTAAQgYAAgYgDg");
	this.shape_8.setTransform(616.5,367.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B5D3B").s().p("AkNFjQg3gJghgqQgGgHgFgJQgVghAIghIAAgBQAKgmArgRIAHgEQAvgUA0gBQDFgNBahoQAJgPAEgPQA6hagwh1QgLgoAOgmIAAAAQAKgfAhgQQAcgPAegDQAvgGAqAYQAmAWAWApIACACQAdAvAAAvQAvCqiECUQglAsg2AlQgpAdgwAXQiIBEiaAQQgUACgTAAQgYAAgXgDg");
	this.shape_9.setTransform(620,367.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B5D3B").s().p("AkEFkQg2gJgigqIgLgQQgVghAIghIAAgBQAKgmAtgPIAIgDQAvgSA0gCQDMgQBPhpQAHgPAEgQQAuhahBh4QgQgoALglIAAgBQAJgfAjgQQAcgOAegDQAvgGAqAXQAnAWAYAnIADACQAfAuAFAuQBCCrh+CXQgjAug1AmQgoAdgwAYQiHBEicARQgUACgTAAQgZAAgWgEg");
	this.shape_10.setTransform(623.6,366.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8B5D3B").s().p("Aj9FmQg1gKgigqIgLgQQgWgiAJggIAAgBQALglAugNIAIgEQAwgQAzgCQDTgSBFhqQAGgQABgRQAjhahRh6QgWgpAKglIAAgBQAHgfAkgQQAcgNAfgDQAugFArAWQAnAVAbAlIACACQAjAtAKAtQBVCsh3CbQgiAvg0AnQgoAegwAYQiFBEifASQgTACgSAAQgaAAgXgEg");
	this.shape_11.setTransform(627.4,366.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8B5D3B").s().p("Aj2FnQg1gKgjgqIgKgQQgXgiAJggIAAAAQAMglAwgMIAIgDQAxgOAzgDQDagVA5hrQAFgQAAgRQAYhchih8QgagoAHgmIAAAAQAGgfAkgQQAdgOAfgCQAtgFAsAWQAoAUAdAkIACACQAmAsAPArQBoCthxCfQggAwg0AoQgnAegwAZQiEBEigASQgUADgSAAQgZAAgXgFg");
	this.shape_12.setTransform(631.2,366);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8B5D3B").s().p("AjwFpQg1gLgjgqIgLgQQgXgjAKgfIAAAAQAMgkAygKIAIgDQAygNAygDQDigXAuhsQAEgRgCgSQAMhchxh+QghgpAGglIAAgBQAFgfAkgQQAdgNAfgCQAugEAsAVQAoATAfAiIADACQApArAUAqQB6CuhpCiQgeAyg0ApQgnAfgwAZQiDBEiiATQgSADgSAAQgaAAgXgFg");
	this.shape_13.setTransform(635.2,365.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B5D3B").s().p("AjrFqQg1gLgigqIgMgQQgXgjAKgeIAAgBQANgjAzgJIAJgCQAzgLAxgEQDqgaAihtQADgRgEgTQABhciCiBQgmgpAEglIAAgBQADgfAngQQAcgMAfgCQAtgDAtATQApASAhAiIADACQAtApAYApQCOCvhjCmQgdAygzArQgmAfgxAaQiABEilAUQgRACgRAAQgbAAgYgFg");
	this.shape_14.setTransform(639.2,365.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B5D3B").s().p("AjnFsQg0gMgjgqIgLgQQgYgjALgeIAAgBQANgiA1gHIAJgCQA0gJAwgFQDygcAWhuQACgSgFgTQgKhdiTiDQgsgpACglIAAgBQADggAngPQAegMAfgCQAsgCAtATQApARAkAgIADACQAwAoAdAoQChCwhdCpQgbA0gyArQgmAggxAaQh+BFinAUQgSACgSAAQgaAAgYgFg");
	this.shape_15.setTransform(643.2,364.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B5D3B").s().p("AjjFuQgzgNgjgqIgMgQQgYgkALgdIAAAAQAOgiA3gGIAIgBQA1gIAwgFQD6geALhvQAAgTgHgTQgVheikiFQgxgqAAglIAAAAQABggApgQQAegLAfgCQAsgCAuASQApARAmAeIAEACQAyAnAjAnQCzCxhWCtQgZA1gyAsQglAggyAbQh8BFipAVQgRACgRAAQgbAAgZgFg");
	this.shape_16.setTransform(647.3,364.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8B5D3B").s().p("AjfFvQgzgNgkgqIgLgQQgZgkAMgcIAAgBQAOghA5gEIAIgBIBlgMQECghgBhwQgBgTgIgUQghhei0iIQg3gqgBgkIAAgBQAAggApgQQAegKAggCQAsgBAuARQApAPApAeIADACQA2AlAoAmQDGCyhPCwQgYA3gyAtQgkAhgyAbQh6BFirAWQgSACgRAAQgbAAgYgGg");
	this.shape_17.setTransform(651.5,364);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8B5D3B").s().p("AgtCDQg3gggxhAQgigsAWguQAJgTAOgBQAQgBAOAWQBhCQAxglQAngcAMiGQADgiANgKQANgIAQAOQAoAigEBJQgJC1hqAPIgRABQgnAAgsgag");
	this.shape_18.setTransform(652,368.8,2.179,2.179,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},103).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(181));

	// coco
	this.instance_1 = new lib.coconutmove();
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.7,378.1,1,1,0,0,0,24.7,24.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).wait(1).to({x:533.5},0).wait(1).to({x:538.3},0).wait(1).to({x:543.1},0).wait(1).to({x:547.9},0).wait(1).to({x:552.7},0).wait(1).to({x:557.4},0).wait(1).to({x:562.2},0).wait(1).to({x:567},0).wait(1).to({x:571.8},0).wait(1).to({x:576.6},0).wait(1).to({x:581.4},0).wait(1).to({x:586.2},0).wait(1).to({x:591},0).wait(1).to({x:595.8},0).wait(1).to({x:600.6},0).wait(1).to({x:605.4},0).wait(1).to({x:610.2},0).wait(17).to({x:613.6,y:381},0).wait(165));

	// Layer_2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8B5D3B").s().p("AjaBtQgXgCgMgSQgMgSAGgXQAHgaAbgVQBfhFCFgcQCEgaBZAfQAaAJAIAVQAIAUgIAVQgIAUgTAKQgVAMgagJQg8gUhwAXQhvAZhCAxQgZATgYAAIgEAAg");
	this.shape_19.setTransform(543.3,346.4,2.179,2.179);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8B5D3B").s().p("AA9CWQg1gHgXgJQhcgigVg5QgSgwAjg2QAggwA5gcQA5gcArAPQA2ATABAqQABArg2gCQgTgBgfAEQgnAHgRAMQg0AlCtBNQAbAMAIALQAKANgLAWQgDAGgVAAQgRAAgbgEg");
	this.shape_20.setTransform(571.5,362.2,2.179,2.179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},103).to({state:[{t:this.shape_20}]},11).to({state:[{t:this.shape_20}]},35).to({state:[{t:this.shape_20}]},152).wait(1));

	// monkey
	this.instance_2 = new lib.monkeyslide();
	this.instance_2.parent = this;
	this.instance_2.setTransform(377,-232.2,1,1,0,0,0,146.8,152.7);

	this.instance_3 = new lib.monkey2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(378.7,362.4,1,1,0,0,0,148.2,156.5);
	this.instance_3._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#26201F").s().p("AgOAWQgHgJAAgNQgBgLAHgJQAGgJAJgBQAIAAAHAJQAHAJAAAMQABAMgHAJQgGAJgJAAIgBABQgIAAgGgJg");
	this.shape_21.setTransform(589.3,249,2.179,2.179);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#26201F").s().p("AgOAWQgHgJAAgNQgBgLAHgJQAGgJAJgBQAJAAAGAJQAHAJAAAMQABAMgHAJQgGAJgJAAIgBABQgIAAgGgJg");
	this.shape_22.setTransform(640.1,247.9,2.179,2.179);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#26201F").s().p("AgPAWQgGgJgBgNQABgMAGgJQAHgJAIAAQAJAAAHAJQAGAJABAMQgBANgGAJQgHAJgJAAQgIAAgHgJg");
	this.shape_23.setTransform(640.1,247.9,2.179,2.179);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8B5D3B").s().p("Ai8CcQgagCgPgSQgMgRACgWQACgXAQgPQARgRAbACQBAAFBlg1QBlg1AyhBQAVgcAZgFQAWgFARAPQAQAOABAYQAAAbgVAbQhIBch6A+QhtA4hYAAIgRgBg");
	this.shape_24.setTransform(597.5,370.8,2.179,2.179);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#603813").s().p("AhPBeQgnghgEgzQgEgyAhgnQAignAygEQAygEAnAhQAnAhAEAzQAEAyghAnQghAngzAEIgKAAQgsAAgjgdg");
	this.shape_25.setTransform(533.2,380.9,2.003,2.003);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#231F20").ss(1,1).p("AB/geQgEAOgSAPQgjAchAADQg/AEgpggIgcgg");
	this.shape_26.setTransform(618.1,293,2.179,2.179);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C39A6C").s().p("AhFBzQgdgvAAhEQAAhDAdgvQAdgwAoAAQApAAAdAwQAdAvAABDQAABEgdAvQgdAwgpAAQgoAAgdgwg");
	this.shape_27.setTransform(613.4,376.3,2.179,2.179);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8B5D3B").s().p("AmCDqQgJgqArgNQBigcBMhsQAUgeAmhAQAlg/AUgcQA+hWBggbQBpgeBcA7QAoAaAaArQAaArAEAuQAJBqhrAjQgtAOgsgQQgogOgYghQgZghAFgkQAFgoAogcQAkgZAgAhQANANgBAPQAAARgRAMQgPAKADAMQACAKAOAFQAmANAUghQATgfgSgmQgQgighgWQhBgqhFAeQg5AYgqBAIhBBnQgnA+geAmQhWBrh3AhQgKADgIAAQgcAAgHggg");
	this.shape_28.setTransform(725.4,371.9,2.179,2.179);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8B5D3B").s().p("AAXC6QgPgRABgeQAEhHgYg6Qgag5gxghQgVgOgEgZQgEgYALgWQAKgXASgJQAVgJAVANQBHAwAoBbQApBagGBnQgBAdgRASQgQAPgVAAQgVAAgNgPg");
	this.shape_29.setTransform(654.1,461.3,2.179,2.179);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8B5D3B").s().p("AhdC6QgRgSgCgdQgFhnAphaQAohbBHgwQAVgNAUAJQATAJAKAXQALAWgEAYQgEAZgVAOQgxAhgaA5QgYA6ADBHQACAegPARQgOAPgVAAQgVAAgPgPg");
	this.shape_30.setTransform(581.2,461.3,2.179,2.179);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8B5D3B").s().p("AiZDGQhAhSAAh0QAAhzBAhRQBAhSBZAAQBaAABABSQBABRAABzQAAB0hABSQhABShaAAQhZAAhAhSg");
	this.shape_31.setTransform(613.3,383.5,2.179,2.179);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8B5D3B").s().p("AjaBtQgXgCgMgSQgMgSAGgXQAHgaAbgVQBfhFCFgcQCEgaBZAfQAaAJAIAVQAIAUgIAVQgIAUgTAKQgVAMgagJQg8gUhwAXQhvAZhCAxQgZATgYAAIgEAAg");
	this.shape_32.setTransform(549.4,346.2,2.179,2.179);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#231F20").ss(0.8).p("AhKAQIAYgQQAbgRAXABQAVACAcAPQAOAIAJAI");
	this.shape_33.setTransform(613.8,264.2,2.179,2.179);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C39A6C").s().p("AgmARQgKgTAKgTQAFgMAhgCQAhgCAFALQAZA5hOAFIgBAAQgNAAgJgTg");
	this.shape_34.setTransform(693.5,230.6,2.179,2.179);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C39A6C").s().p("AgugcQAFgOAoAAQAnABAIANQANAWgLAZQgKAYgQAAQheAAAahHg");
	this.shape_35.setTransform(536.8,232.2,2.179,2.179);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#24201F").s().p("AgQAAQAAgGAEgEQAEgEAGABQATAAAAANQABAOgRAAIgBAAQgQAAAAgOg");
	this.shape_36.setTransform(609.1,272.8,2.179,2.179);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#252121").s().p("AAAAOQgPAAgCgOQACgNAPAAQASAAAAANQgBAOgPAAIgCAAg");
	this.shape_37.setTransform(620.4,272.8,2.179,2.179);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C39A6C").s().p("AiwBxQgigRgbgbQg3g3Aeg1QA2hjBeAEQA4ACA5AkQA1gkA5gEQBigIA4BmQAeA1g3A3QgRARgYAPIguAbIiCgwIgjAAIhYAkIgxAZg");
	this.shape_38.setTransform(614.5,243.8,2.179,2.179);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C39A6C").s().p("AiIBhQg5goAAg5QAAg3A5gpQA5goBPAAQBQAAA5AoQA5ApAAA3QAAA5g5AoQg5AohQAAQhPAAg5gog");
	this.shape_39.setTransform(617.4,290.3,2.179,2.179);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8B5D3B").s().p("AjiDhQhlhdAAiEQAAgRADgVIgDAAQg2AAgpglQgqgnALgxQAQhGBOAAQAeAAAbAKQAbALAIAOQAygsBRgkQBXgnBAAAQA7AABZAiQBTAgAvAjQAXgZA3AKQA/ALASA5QAOAogiAlQgfAiguALQAEAYAAARQAACEhlBdQhlBdiOAAQiNAAhkhdg");
	this.shape_40.setTransform(613.3,263.4,2.179,2.179);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C39A6C").s().p("AiXD7Qg/hnAAiUQAAiTA/hnQA/hpBZAAQBZAAA+BpQA/BnAACTQAACUg/BnQg+BphZAAQhZAAg/hpg");
	this.shape_41.setTransform(613.4,376.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8B5D3B").s().p("AlPGvQiMizAAj8QAAj8CMiyQCLiyDFAAQDEAACLCyQCMCyAAD8QAAD8iMCzQiLCyjEAAQjFAAiLiyg");
	this.shape_42.setTransform(613.3,383.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#26201F").s().p("AgWANQABgNAGgIQAHgJAIAAQAJAAAHAJQAGAIABANQAAAIgHgHQgIgLgGAAQgFAAgLALQgDAEgCAAQgCAAgBgFg");
	this.shape_43.setTransform(594.4,247.5,5.036,2.179,0,-15,165,0.4,0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#26201F").s().p("AgWANQABgNAGgIQAHgJAIAAQAJAAAHAJQAGAIABANQAAAIgHgHQgIgLgGAAQgFAAgLALQgDAEgCAAQgCAAgBgFg");
	this.shape_44.setTransform(640,246,5.036,2.179,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#231F20").ss(0.8,1).p("AgOgLIAMAGQAMAHAFAK");
	this.shape_45.setTransform(643,297.4,2.179,2.179);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D23E45").s().p("AgBArQgUgDgPgRQgMgOALgLQAGgHAUgOQAJgIAJgLQAHgFANAOQAPARABATQABAUgNAMQgKAJgOAAIgIgBg");
	this.shape_46.setTransform(642.7,298.2,2.179,2.179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_42},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_41},{t:this.shape_26},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},9).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},18).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_46},{t:this.shape_45},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_44},{t:this.shape_43}]},28).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_46},{t:this.shape_45},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_44},{t:this.shape_43}]},152).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:144.4,regY:152.6,x:374.6,y:-222.2},0).wait(1).to({x:374.7,y:-212.1},0).wait(1).to({y:-202},0).wait(1).to({x:374.8,y:-192},0).wait(1).to({y:-181.9},0).wait(1).to({x:374.9,y:-171.8},0).wait(1).to({y:-161.7},0).wait(1).to({x:375,y:-151.7},0).wait(1).to({y:-141.6},0).wait(1).to({x:375.1,y:-131.5},0).wait(1).to({y:-121.4},0).wait(1).to({x:375.2,y:-111.4},0).wait(1).to({y:-101.3},0).wait(1).to({x:375.3,y:-91.2},0).wait(1).to({y:-81.2},0).wait(1).to({x:375.4,y:-71.1},0).wait(1).to({y:-61},0).wait(1).to({x:375.5,y:-50.9},0).wait(1).to({y:-40.8},0).wait(1).to({x:375.6,y:-30.8},0).wait(1).to({y:-20.7},0).wait(1).to({x:375.7,y:-10.6},0).wait(1).to({y:-0.6},0).wait(1).to({x:375.8,y:9.5},0).wait(1).to({y:19.6},0).wait(1).to({y:29.7},0).wait(1).to({x:375.9,y:39.7},0).wait(1).to({x:376,y:49.8},0).wait(1).to({y:59.9},0).wait(1).to({y:70},0).wait(1).to({x:376.1,y:80},0).wait(1).to({x:376.2,y:90.1},0).wait(1).to({y:100.2},0).wait(1).to({x:376.3,y:110.3},0).wait(1).to({y:120.3},0).wait(1).to({x:376.4,y:130.4},0).wait(1).to({y:140.5},0).wait(1).to({x:376.5,y:150.6},0).wait(1).to({y:160.6},0).wait(1).to({x:376.6,y:170.6},0).wait(1).to({y:180.7},0).wait(1).to({x:376.7,y:190.8},0).wait(1).to({y:200.9},0).wait(1).to({x:376.8,y:210.9},0).wait(1).to({y:221},0).wait(1).to({x:376.9,y:231.1},0).wait(1).to({y:241.2},0).wait(1).to({x:377,y:251.2},0).wait(1).to({y:261.3},0).wait(1).to({y:271.4},0).wait(1).to({x:377.1,y:281.5},0).wait(1).to({y:291.5},0).wait(1).to({x:377.2,y:301.6},0).wait(1).to({y:311.7},0).wait(1).to({x:377.3,y:321.8},0).wait(1).to({x:377.4,y:331.8},0).wait(1).to({y:341.9},0).wait(1).to({x:377.5,y:352},0).wait(1).to({y:362.1},0).wait(1).to({regX:146.8,regY:152.7,x:383.1,y:358.5},0).to({_off:true},11).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).wait(1).to({regX:151.4,regY:158.4,x:400.7,y:351.6},0).wait(1).to({x:421.7,y:339},0).wait(1).to({x:442.7,y:327.6},0).wait(1).to({x:464.2,y:317.5},0).wait(1).to({x:486.4,y:308.7},0).wait(1).to({x:509.1,y:301.7},0).wait(1).to({x:532.5,y:297.2},0).wait(1).to({x:556.3,y:296.2},0).wait(1).to({x:580.3,y:299.3},0).wait(1).to({x:603.8,y:303.7},0).wait(1).to({x:627.2,y:309.5},0).wait(1).to({x:650,y:317.8},0).wait(1).to({x:668.8,y:331.3},0).wait(1).to({x:682.1,y:347.8},0).wait(8).to({_off:true},1).wait(208));

	// tree
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#C1A067","#B09465","#85775D","#7E745D"],[0,0.286,0.922,1],-11.4,-10.4,-42.5,-10).s().p("EgCRAksQjWgJgiACQgDpLgN7iQgHvzADmFQAEnxAVjHQAVjAA1guQHrAAB5gHQBGgEAvACQAAAqgUA+QgdBUgUA9QhSD9gvFhUgCgAS4AC2ApKQhgAHhqAAQhXAAhfgFg");
	this.shape_47.setTransform(278.5,255.4,1,1.09);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#C1A067","#B09465","#85775D","#7E745D"],[0,0.286,0.922,1],-9.9,-0.6,-41,-0.2).s().p("EgCCAmOQjWgJgiACQgFvhgN1tQgLxaABljQAAoiATjdQATjhA0gtQIUAABOACQA0ABA+AFQAAAqgTBGIgvCmQhNEhgsF+UgCVAUVAC2ApLQhgAGhrAAQhWAAhfgEg");
	this.shape_48.setTransform(277,244.7,1,1.09);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47}]}).to({state:[{t:this.shape_48}]},301).wait(1));

	// backlegs
	this.instance_4 = new lib.backlegs();
	this.instance_4.parent = this;
	this.instance_4.setTransform(273.4,-169.8,1,1,0,0,0,58.7,91.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.armleg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(266.3,432,1,1,0,0,0,58.1,84.5);
	this.instance_5._off = true;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8B5D3B").s().p("AiOGlQgmgFgaglQgcgrADhAQAKjfBbi7QBbi7CMhVQAogYAkAaQAgAXAPA1QAPAzgLAyQgNA2goAYQhhA7g6B3Qg4B4gGCZQgDBBgfAiQgYAZgeAAIgMgBg");
	this.shape_49.setTransform(601.1,455.7,1.075,1.083);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8B5D3B").s().p("AjaBtQgXgCgMgSQgMgSAGgXQAHgaAbgVQBfhFCFgcQCEgaBZAfQAaAJAIAVQAIAUgIAVQgIAUgTAKQgVAMgagJQg8gUhwAXQhvAZhCAxQgZATgYAAIgEAAg");
	this.shape_50.setTransform(573.2,349.4,2.179,2.179,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.instance_5}]},7).to({state:[]},1).wait(208));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({regX:60.3,x:275,y:-159.6},0).wait(1).to({y:-149.4},0).wait(1).to({y:-139.2},0).wait(1).to({y:-129},0).wait(1).to({y:-118.9},0).wait(1).to({y:-108.7},0).wait(1).to({y:-98.5},0).wait(1).to({y:-88.3},0).wait(1).to({y:-78.1},0).wait(1).to({y:-67.9},0).wait(1).to({y:-57.7},0).wait(1).to({y:-47.5},0).wait(1).to({y:-37.3},0).wait(1).to({y:-27.1},0).wait(1).to({y:-17},0).wait(1).to({y:-6.8},0).wait(1).to({y:3.4},0).wait(1).to({y:13.6},0).wait(1).to({y:23.8},0).wait(1).to({y:34},0).wait(1).to({y:44.2},0).wait(1).to({y:54.4},0).wait(1).to({y:64.6},0).wait(1).to({y:74.8},0).wait(1).to({y:84.9},0).wait(1).to({y:95.1},0).wait(1).to({y:105.3},0).wait(1).to({y:115.5},0).wait(1).to({y:125.7},0).wait(1).to({y:135.8},0).wait(1).to({y:146},0).wait(1).to({y:156.2},0).wait(1).to({y:166.4},0).wait(1).to({y:176.6},0).wait(1).to({y:186.8},0).wait(1).to({y:197},0).wait(1).to({y:207.2},0).wait(1).to({y:217.4},0).wait(1).to({y:227.5},0).wait(1).to({y:237.7},0).wait(1).to({y:247.9},0).wait(1).to({y:258.1},0).wait(1).to({y:268.3},0).wait(1).to({y:278.5},0).wait(1).to({y:288.7},0).wait(1).to({y:298.9},0).wait(1).to({y:309.1},0).wait(1).to({y:319.3},0).wait(1).to({y:329.4},0).wait(1).to({y:339.6},0).wait(1).to({y:349.8},0).wait(1).to({y:360},0).wait(1).to({y:370.2},0).wait(1).to({y:380.4},0).wait(1).to({y:390.6},0).wait(1).to({y:400.8},0).wait(1).to({y:411},0).wait(1).to({y:421.2},0).wait(1).to({regX:58.7,regY:91.5,rotation:6.2,x:272.4,y:419.4},0).to({_off:true},11).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).wait(1).to({regX:58.3,regY:82.6,x:285.1,y:416.6},0).wait(1).to({x:305.9,y:403.2},0).wait(1).to({x:326.8,y:391},0).wait(1).to({x:348.3,y:380.1},0).wait(1).to({x:370.4,y:370.6},0).wait(1).to({x:393.3,y:362.9},0).wait(1).to({x:416.8,y:357.9},0).wait(1).to({x:440.8,y:356.5},0).wait(1).to({x:465,y:359.7},0).wait(1).to({x:488.7,y:364.2},0).wait(1).to({x:512.2,y:370},0).wait(1).to({x:535.2,y:378.1},0).wait(1).to({x:556,y:390.4},0).wait(1).to({x:570,y:407.9},0).to({_off:true},1).wait(7).to({_off:false,regX:58.1,regY:84.5,x:575.6,y:411.9},0).to({_off:true},1).wait(208));

	// basketbehind
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D19414").s().p("AheEfQgjAAgcgTQgdgTgNgfQgbhCgwhuQgIgSAHgRQAOghBAgIQgVhcAYg+QAnhhCQgBQCQABAxBhQAgA+gLBbQA+AIAMAjQAGASgIARQgkBbgeBSQgMAggdATQgeATgjABgAh8iJQgMArAQA3ID3AAQAJg5gRgpQgchFhhAAQhhAAgVBFg");
	this.shape_51.setTransform(499.2,432.9,2.179,2.179);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#603813").s().p("AABDpQgyAdg/AFQhvAJhVhIQhVhIgIhvQgJhtBIhVQBJhVBugJQBVgGBGApQAygeA/gFQBvgIBVBIQBVBIAJBvQAIBthIBVQhIBVhvAIIgZABQhHAAg7gjg");
	this.shape_52.setTransform(471.8,438,1,1,0,0,0,-24.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51}]},71).to({state:[{t:this.shape_52},{t:this.shape_51}]},78).to({state:[{t:this.shape_52},{t:this.shape_51}]},152).wait(1));

	// background
	this.instance_6 = new lib.Path_11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(480,521.9,1,1,0,0,0,480,33.1);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.Path_1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(317.5,245.1,1,1,0,0,0,40.8,245.1);
	this.instance_7.alpha = 0.801;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#D7EAF9","#B2E1F9","#A5DFF9"],[0,0.776,1],-0.1,243,0.1,-234).s().p("EhK/AmMMAAAhMYMCV/AAAMAAABMYg");
	this.shape_53.setTransform(480,244.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.shape_53},{t:this.instance_7},{t:this.instance_6}]},301).wait(1));

	// background
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("EhLaAr6MAAAhXzMCW0AAAMAAABXzg");
	this.shape_54.setTransform(479.5,277.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(302));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-384.9,965.3,943.6);


(lib.btnMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.startGame = new lib.an_Button({'id': 'startGame', 'label':'Button', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.startGame.setTransform(1,-8.9,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.startGame).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-20.4,101,23);


(lib.forcomboMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myStyle.css'});

	this.instance.setTransform(171,33,1,1,0,0,0,50,11);

	this.startbtn = new lib.comboBtn();
	this.startbtn.name = "startbtn";
	this.startbtn.parent = this;
	this.startbtn.setTransform(-38.6,49,0.737,0.605);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, 0, מדינות ביבשת אסיה, 1, היסטוריה של מדינת ישראל, 2, , ', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(-0.2,11,1.96,1,0,0,0,49.9,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomboMC, new cjs.Rectangle(-99,-0.5,320.5,69.5), null);


(lib.cocoMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.tavitTextShort = new cjs.Text("", "16px 'Arial'");
	this.tavitTextShort.name = "tavitTextShort";
	this.tavitTextShort.textAlign = "center";
	this.tavitTextShort.lineHeight = 19;
	this.tavitTextShort.lineWidth = 98;
	this.tavitTextShort.parent = this;
	this.tavitTextShort.setTransform(0,-14.7);

	this.tavitTextLong = new cjs.Text("", "16px 'Arial'");
	this.tavitTextLong.name = "tavitTextLong";
	this.tavitTextLong.textAlign = "right";
	this.tavitTextLong.lineHeight = 19;
	this.tavitTextLong.lineWidth = 114;
	this.tavitTextLong.parent = this;
	this.tavitTextLong.setTransform(56.8,-51.7);

	this.tavit = new lib.tavitcocoMC();
	this.tavit.name = "tavit";
	this.tavit.parent = this;
	this.tavit.setTransform(0,-0.1,1,1.016,0,0,0,66,60);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgFDyIAAnkQAAgFAFAAQAGAAAAAFIAAHkQAAAHgGAAQgFAAAAgHg");
	this.shape.setTransform(-0.3,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67462F").s().p("AhdBeQgognAAg3QAAg2AogoQAngnA2ABQA3gBAoAnQAnAoAAA2QAAA3gnAnQgoAng3AAQg2AAgngng");
	this.shape_1.setTransform(-0.3,105.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.tavit},{t:this.tavitTextLong},{t:this.tavitTextShort}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cocoMC, new cjs.Rectangle(-66,-61.1,132,179.9), null);


(lib.basketnewMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiOGwQg0AAgsgdQgrgcgTguQgphkhIimQgNgbALgaQAVgyBhgNQggiJAlheQA6iTDZAAQDZAABLCTQAwBegRCJQBeAMASA1QAIAagLAbQg3CJgtB7QgTAwgrAdQgtAeg1AAgAi7jPQgTBBAZBTIF0AAQAOhVgZg/QgrhpiSAAQiSAAggBpg");
	mask.setTransform(0,-39.4);

	// Layer_1
	this.brown = new lib.brownfill();
	this.brown.name = "brown";
	this.brown.parent = this;
	this.brown.setTransform(-0.3,-45.7,1.001,0.999,0,0,0,-0.3,-24.9);

	var maskedShapeInstanceList = [this.brown];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.brown).wait(1));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D59A00").s().p("AothRQBvkYGgAAQGgAACOEYQBdCzgiEGIjbgKQAcijgxh5QhSjHkXAAQkZAAg7DHQgkB5AuCjIjeAMQg+kHBHi0g");
	this.shape.setTransform(-0.2,-63.7,0.522,0.522);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#432918").s().p("AheCjQgjAAgdgTQgdgTgMgeQgqhoghhIQgIgSAHgRQANghBBgJIBNgEID2AAIBMADQA/AJAMAjQAFASgHARIhDCsQgLAggeATQgdAUgkAAg");
	this.shape_1.setTransform(0,-20.8,1.506,1.505);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.basketnewMC, new cjs.Rectangle(-42.1,-82.5,84.3,86.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg3WAczMAAAg5lMButAAAMAAAA5lg");
	mask_1.setTransform(354.3,253.8);

	// Layer_3
	this.instance_25 = new lib.Path_21();
	this.instance_25.parent = this;
	this.instance_25.setTransform(80.1,69.7,1,1,0,0,0,32.3,53.3);
	this.instance_25.alpha = 0.699;

	this.instance_26 = new lib.Path_1_2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(578.9,69.3,1,1,0,0,0,30.9,55.1);
	this.instance_26.alpha = 0.699;

	this.instance_27 = new lib.Path_2_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(77,68.2,1,1,0,0,0,23.2,55);
	this.instance_27.alpha = 0.699;

	this.instance_28 = new lib.Path_3_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(629.4,55.3,1,1,0,0,0,58.9,55.3);
	this.instance_28.alpha = 0.699;

	this.instance_29 = new lib.Path_9_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(82.7,65.4,1,1,0,0,0,65.1,51.3);
	this.instance_29.alpha = 0.699;

	this.instance_30 = new lib.Path_10_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(79.4,215.5,1,1,0,0,0,58.2,188.8);
	this.instance_30.alpha = 0.801;

	this.instance_31 = new lib.Path_11_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(593.8,72.6,1,1,0,0,0,59.1,60.1);
	this.instance_31.alpha = 0.699;

	this.instance_32 = new lib.Path_12();
	this.instance_32.parent = this;
	this.instance_32.setTransform(354.3,421.2,1,1,0,0,0,354.3,17.6);
	this.instance_32.alpha = 0.699;

	this.instance_33 = new lib.Path_13_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(626.7,228.7,1,1,0,0,0,66.3,176.1);
	this.instance_33.alpha = 0.801;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D8EBF9","#B4E2F9","#A8E0F9"],[0,0.776,1],0,166.1,0.1,-159.8).s().p("Eg3WAaGMAAAg0LMButAAAMAAAA0Lg");
	this.shape_2.setTransform(354.3,236.7);

	var maskedShapeInstanceList = [this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,69.5,708.6,368.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg78AinMAAAhFNMB35AAAMAAABFNg");
	mask_2.setTransform(383.7,298.8);

	// Layer_3
	this.instance_34 = new lib.Path_22();
	this.instance_34.parent = this;
	this.instance_34.setTransform(383.7,503.2,1,1,0,0,0,383.7,17.2);
	this.instance_34.alpha = 0.699;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F0E5").s().p("EggsAESQBAiZAAh5QgBh4g/iZUAgsgASAgtAASQhACZAAB4QAAB5BACZQwXAJwWAAQwWAAwWgJg");
	this.shape_3.setTransform(383.2,105.7);

	this.instance_35 = new lib.Path_1_3();
	this.instance_35.parent = this;
	this.instance_35.setTransform(633.3,81.8,1,1,0,0,0,26.8,66.8);
	this.instance_35.alpha = 0.699;

	this.instance_36 = new lib.Path_2_2();
	this.instance_36.parent = this;
	this.instance_36.setTransform(685.5,65.2,1,1,0,0,0,58.9,65.2);
	this.instance_36.alpha = 0.699;

	this.instance_37 = new lib.Path_3_2();
	this.instance_37.parent = this;
	this.instance_37.setTransform(649.8,85.6,1,1,0,0,0,59.1,70.9);
	this.instance_37.alpha = 0.801;

	this.instance_38 = new lib.Path_4_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(88,80.3,1,1,0,0,0,23.2,64.8);
	this.instance_38.alpha = 0.801;

	this.instance_39 = new lib.Path_5_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(93.7,77.1,1,1,0,0,0,65.1,60.5);
	this.instance_39.alpha = 0.699;

	this.instance_40 = new lib.Group();
	this.instance_40.parent = this;
	this.instance_40.setTransform(639.2,104.8,1,1,0,0,0,54.1,20.2);
	this.instance_40.alpha = 0.5;

	this.instance_41 = new lib.Group_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(116.2,104.8,1,1,0,0,0,63.1,20.2);
	this.instance_41.alpha = 0.5;

	this.instance_42 = new lib.Path_8_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(677.2,264,1,1,0,0,0,67.1,222.8);
	this.instance_42.alpha = 0.801;

	this.instance_43 = new lib.Path_9_2();
	this.instance_43.parent = this;
	this.instance_43.setTransform(72.2,274,1,1,0,0,0,41.6,212.9);
	this.instance_43.alpha = 0.801;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#754C28").ss(2,2).p("AEiAKIpDgT");
	this.shape_4.setTransform(83.6,66.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D7EAF9","#B2E1F9","#A5DFF9"],[0,0.776,1],0,203.2,0.1,-195.6).s().p("Eg78Af8MAAAg/3MB35AAAMAAAA/3g");
	this.shape_5.setTransform(383.7,281.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#754C28").ss(2,1).p("AEOgFIobAL");
	this.shape_6.setTransform(81.1,98);

	var maskedShapeInstanceList = [this.instance_34,this.shape_3,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.shape_3},{t:this.instance_34}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,77.4,767.5,442.9), null);


(lib.backGMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.insText = new cjs.Text("", "16px 'Arial'");
	this.insText.name = "insText";
	this.insText.textAlign = "center";
	this.insText.lineHeight = 19;
	this.insText.lineWidth = 493;
	this.insText.parent = this;
	this.insText.setTransform(1,-252.2);

	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(-479.9,289.9,1.257,1.236,0,0,0,0,520.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.insText}]}).to({state:[]},1).wait(2));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D3B").s().p("AmZEhQgPgKgEgTQgFgTAJgRQAKgSAXgGQBtgfBUh4QAXgiAqhHQAohGAXggQBEhfBqgeQB1ghBmBCQAtAcAdAxQAdAvAEAzQAKB2h3AmQgyAQgwgRQgtgQgbglQgbglAFgoQAGgsAtgfQAogcAiAlQAPAOgBARQAAATgTANQgQAMADAMQACAMAQAFQAqAPAWglQAVgigUgrQgSgmglgXQhIgvhMAhQg/AbgvBGIhIBzQgsBFghApQhfB3iDAmQgJACgIAAQgNAAgKgGg");
	this.shape.setTransform(-64.2,185.6,1.066,1.066);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B5D3B").s().p("AAXC6QgPgRABgeQAEhHgYg6Qgag5gxghQgVgOgEgZQgEgYALgWQAKgXASgJQAVgJAVANQBHAwAoBbQApBagGBnQgBAdgRASQgQAPgVAAQgVAAgNgPg");
	this.shape_1.setTransform(-95.4,232.8,1.128,1.128);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8B5D3B").s().p("AhdC6QgRgSgCgdQgFhnAphaQAohbBHgwQAVgNAUAJQATAJAKAXQALAWgEAYQgEAZgVAOQgxAhgaA5QgYA6ADBHQACAegPARQgOAPgVAAQgVAAgPgPg");
	this.shape_2.setTransform(-133.1,232.8,1.128,1.128);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#26201F").s().p("AgOAWQgHgJAAgNQgBgLAHgJQAGgJAJgBQAIAAAHAJQAHAJAAAMQABAMgHAJQgGAJgJAAIgBABQgIAAgGgJg");
	this.shape_3.setTransform(-128.9,122.9,1.128,1.128);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#26201F").s().p("AgOAWQgHgJAAgNQgBgLAHgJQAGgJAJgBQAJAAAGAJQAHAJAAAMQABAMgHAJQgGAJgJAAIgBABQgIAAgGgJg");
	this.shape_4.setTransform(-102.6,122.3,1.128,1.128);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#26201F").s().p("AgPAWQgHgJABgNQgBgMAHgJQAGgJAJAAQAJAAAHAJQAHAJAAAMQAAANgHAJQgHAJgJAAQgJAAgGgJg");
	this.shape_5.setTransform(-102.6,122.4,1.128,1.128);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B5D3B").s().p("Aj+DTQgkgCgUgZQgRgXADgeQADgfAVgVQAYgWAkADQBWAGCKhHQCIhJBDhYQAdglAigHQAegGAWATQAXATAAAhQABAkgcAlQhiB9ilBUQiUBLh3AAIgWgBg");
	this.shape_6.setTransform(-124.7,185.9,0.834,0.834);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#603813").s().p("AhPBeQgnghgEgzQgEgyAhgnQAhgnAzgEQAygEAnAhQAnAhAEAzQAEAyghAnQghAngzAEIgKAAQgsAAgjgdg");
	this.shape_7.setTransform(-158,191.2,1.128,1.128);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(1,1).p("AB/geIgWAdQgjAchAADQg/AEgpggIgcgg");
	this.shape_8.setTransform(-114,145.7,1.128,1.128);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B5D3B").s().p("AgtAyQgTgVAAgdQAAgcATgUQATgVAaAAQAbAAATAVQATAUAAAcQAAAdgTAVQgTAUgbAAQgaAAgTgUg");
	this.shape_9.setTransform(-173.5,179.7,1.128,1.128);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D19414").s().p("AheEeQgjABgcgUQgdgSgNgfQgbhCgwhuQgIgSAHgSQAOggBAgIQgVhbAYhAQAnhgCQAAQCQAAAxBgQAgA/gLBbQA+AIAMAjQAGARgIASQgkBbgeBRQgMAggdAUQgeATgjAAgAh8iJQgMArAQA3ID3AAQAJg4gRgqQgchFhhgBQhhABgVBFg");
	this.shape_10.setTransform(-172.6,199.9,1.128,1.128);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C39A6C").s().p("AhFBzQgdgvAAhEQAAhDAdgvQAdgwAoAAQApAAAdAwQAdAvAABDQAABEgdAvQgdAwgpAAQgoAAgdgwg");
	this.shape_11.setTransform(-116.5,188.8,1.128,1.128);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8B5D3B").s().p("AiZDFQhAhRAAh0QAAhzBAhSQBAhSBZAAQBaAABABSQBABSAABzQAAB0hABRQhABShaAAQhZAAhAhSg");
	this.shape_12.setTransform(-116.5,192.5,1.128,1.128);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8B5D3B").s().p("AjaBtQgXgCgMgSQgMgSAGgXQAHgaAbgVQBfhFCFgcQCEgaBZAfQAaAJAIAVQAIAUgIAVQgIAUgTAKQgVAMgagJQg8gUhwAXQhvAZhCAxQgZATgYAAIgEAAg");
	this.shape_13.setTransform(-149.6,173.2,1.128,1.128);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(0.8,1).p("AgOgLIAMAGQANAHAFAK");
	this.shape_14.setTransform(-101.1,148,1.128,1.128);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D23E45").s().p("AgBArQgUgDgPgRQgMgOALgLQASgNAIgIQANgQAFgDQAHgFANAOQAPARABATQABAUgNAMQgKAJgOAAIgIgBg");
	this.shape_15.setTransform(-101.3,148.4,1.128,1.128);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(0.8).p("AhIAQQAJgJAOgHQAbgRAWABQAXACAcAPQANAIAKAI");
	this.shape_16.setTransform(-116.4,130.7,1.128,1.128);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C39A6C").s().p("AgmARQgKgTAKgTQAFgMAhgCQAhgCAFALQAZA5hOAFIgBAAQgNAAgJgTg");
	this.shape_17.setTransform(-75,113.4,1.128,1.128);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C39A6C").s().p("AgugdQAFgNAoAAQAnAAAIANQANAXgLAZQgKAYgQAAQheAAAahIg");
	this.shape_18.setTransform(-156.1,114.2,1.128,1.128);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#24201F").s().p("AgQAAQAAgGAEgEQAEgEAGABQATAAAAANQABAOgRAAIgBAAQgQAAAAgOg");
	this.shape_19.setTransform(-118.7,135.2,1.128,1.128);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#252121").s().p("AAAAOQgPAAgBgOQABgNAPAAQARAAABANQAAAOgQAAIgCAAg");
	this.shape_20.setTransform(-112.8,135.2,1.128,1.128);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C39A6C").s().p("AiwBxQghgRgcgbQg3g3Aeg1QA2hjBeAEQA3ACA6AkQA1gkA5gEQBigIA4BmQAeA1g3A3QgcAbghARIgaAPIiCgwIgjAAIhYAkIgxAZg");
	this.shape_21.setTransform(-115.9,120.2,1.128,1.128);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C39A6C").s().p("AiIBhQg5goAAg5QAAg3A5gpQA5goBPAAQBQAAA5AoQA5ApAAA3QAAA5g5AoQg5AohQAAQhPAAg5gog");
	this.shape_22.setTransform(-114.4,144.3,1.128,1.128);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B5D3B").s().p("AjiDhQhlhdAAiEQAAgRADgVIgDAAQg2AAgpglQgqgnALgxQAQhGBOAAQAeAAAbAKQAbALAIAOQAygsBRgkQBXgnBAAAQA7AABZAiQBTAgAvAjQAXgZA3AKQA/ALASA5QAOAogiAlQgfAiguALQAEAYAAARQAACEhlBdQhlBdiOAAQiNAAhkhdg");
	this.shape_23.setTransform(-116.5,130.4,1.128,1.128);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-477.9,-253.9,1.352,1.495,0,0,0,0,92.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#D7EAF9","#B2E1F9","#A5DFF9"],[0,0.776,1],-0.1,248,0,-238.7).s().p("EhK1Am+MAAAhN8MCVqAAAMAAABN8g");
	this.shape_24.setTransform(1.1,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.instance_1},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_4
	this.gradeText = new cjs.Text("", "17px 'Arial'");
	this.gradeText.name = "gradeText";
	this.gradeText.textAlign = "center";
	this.gradeText.lineHeight = 21;
	this.gradeText.lineWidth = 195;
	this.gradeText.parent = this;
	this.gradeText.setTransform(-93,-183.9,0.936,0.944);
	this.gradeText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gradeText).wait(2).to({_off:false},0).wait(1));

	// Layer_2
	this.wrongText = new cjs.Text("", "bold 15px 'Arial'");
	this.wrongText.name = "wrongText";
	this.wrongText.textAlign = "center";
	this.wrongText.lineHeight = 19;
	this.wrongText.lineWidth = 376;
	this.wrongText.parent = this;
	this.wrongText.setTransform(-191,-94.9);

	this.correctText = new cjs.Text("", "bold 15px 'Arial'");
	this.correctText.name = "correctText";
	this.correctText.textAlign = "center";
	this.correctText.lineHeight = 19;
	this.correctText.lineWidth = 376;
	this.correctText.parent = this;
	this.correctText.setTransform(189,-94.9);

	this.txtend2 = new cjs.Text("", "16px 'Arial'", "#FF0000");
	this.txtend2.name = "txtend2";
	this.txtend2.textAlign = "center";
	this.txtend2.lineHeight = 20;
	this.txtend2.lineWidth = 463;
	this.txtend2.parent = this;
	this.txtend2.setTransform(0.5,-125.9);

	this.txtend1 = new cjs.Text("", "16px 'Arial'");
	this.txtend1.name = "txtend1";
	this.txtend1.textAlign = "center";
	this.txtend1.lineHeight = 20;
	this.txtend1.lineWidth = 481;
	this.txtend1.parent = this;
	this.txtend1.setTransform(-0.5,-145.4);

	this.text = new cjs.Text("", "16px 'ArialMT'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 433;
	this.text.parent = this;
	this.text.setTransform(0.5,-18.2,1,0.752);

	this.text_1 = new cjs.Text("", "16px 'ArialMT'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 450;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-20.7);

	this.timeText = new cjs.Text("", "17px 'Arial'");
	this.timeText.name = "timeText";
	this.timeText.textAlign = "center";
	this.timeText.lineHeight = 21;
	this.timeText.lineWidth = 188;
	this.timeText.parent = this;
	this.timeText.setTransform(95,-183.9);

	this.titleText = new cjs.Text("", "25px 'Arial'");
	this.titleText.name = "titleText";
	this.titleText.textAlign = "center";
	this.titleText.lineHeight = 30;
	this.titleText.lineWidth = 376;
	this.titleText.parent = this;
	this.titleText.setTransform(1,-232.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A0A0A0").p("EAk6AAAMhJzAAA");
	this.shape_25.setTransform(-0.3,-69.7,1.61,0.945);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A0A0A0").p("AAAxzMAAAAjn");
	this.shape_26.setTransform(-0.5,70.5,1,1.519);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#D8EBF9","#B4E2F9","#A8E0F9"],[0,0.776,1],0,2.5,0,-2.5).s().p("AgXAAQAAgYAXAAQAYAAAAAYQAAAZgYAAQgXAAAAgZg");
	this.shape_27.setTransform(-91,27.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9F7F7").s().p("Eg7iAcjMAAAg5EMB3FAAAMAAAA5Eg");
	this.shape_28.setTransform(-0.3,69.9,1,0.945);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-30.1,1.362,1.485,0,0,0,354.3,219.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.titleText},{t:this.timeText},{t:this.text_1},{t:this.text},{t:this.txtend1},{t:this.txtend2},{t:this.correctText},{t:this.wrongText}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.9,-353,964.9,643.1);


// stage content:
(lib.cocoNofarTamara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		$("#canvas").css("direction", "rtl"); //הגדרת כיוון הטקסא
		var home = this;
		var stageWidth = parseInt(canvas.style.width); //משתנים לשמירת גובה ורוחב הבמה
		var stageHeight = parseInt(canvas.style.height);
		var cocoStartY = 30; //משתנה המגדיר את הגובה ההתחלתי של הקוקוסים המתחילים ליפול מעל לבמה
		var cocoStartX = 0; //משתנה להגדרת המיקומ הרוחבי של הקוקוס
		var cocoMovement = 1; //משתנה להגדרת מהירות התזוזה של הקוקוס
		var monkeyMove = 6; //הגדרה למהירות התזוזה של הקוף
		var directionY; //משתנה להגדרה התנועה האנחית של הקוקוס בזריקה לסל
		var directionX; //משתנה להגדרה התנועה האופקית של הקוקוס בזריקה לסל
		createjs.Ticker.addEventListener("tick", tick); //הוספת הליסנר לטיקר
		createjs.Ticker.paused = true; //השהיית הטיקר 
		var moveInterval; //הגדרת אינטרוול גלובלי לזריקת הקוקוס לסל
		var cocoFallInt; //הגדרה של אינטרוול גלובלי לבדיקה האם קיים קוקוס על הבמה
		window.addEventListener("keydown", handlekeypress); //הוספת מאזין לליחצת מקשים
		window.addEventListener("keyup", stopmove); //הוספת מאזין לעזיבת מקשים
		var cocoOut = true; //הגדרת משתנה הקובע האם קיים קוקוס על הבמה כדי לקרוא לפונקציה להספת קקוקס חדש
		var timeSCounter; //משתנה לספירת השניות בטיימר
		var timeMCounter; //משתנה לספירת הדקות בטיימר
		var wrongY; //משתנה לקביעת המיקום האחחי בהדפסת הפריטים במשוב
		var correctY; //משתנה לקביעת המיקום האופיק בהדפסת הפריטים במשוב
		var countcorrect; //משתנה לספירת הפריטים הנכונים ההודפסו במשוב המסכם
		var countwrong; // משתנה לספירת הפריטים הלא נכונים ההודפדו במשוב ה
		var countmistakes; //משתנה לספירת הטעויות
		myCombo(); //קריאה לפונקציית הקומבו
		
		var cocoArray; //הגדרה גלובלית של המערך עם הפריטים למשחק
		var cocoArray2; //הגדרה גלובלית של המערך עם הפריטים למשוב המסכם
		
		var upScale; //הגדרה גלובלית של משתנה המגדיר את מילוי הסל
		var rnditem; //הגדרה גלובלית של המשתנה המגריל את הפריטים מתוך המערך
		home.odotclickMC.addEventListener("click", myOdot); //הוספת מאזין לכפתור האודות
		var game = 0; //הגרה התחלתית של המשחק הנבחר (משחק ריק)
		
		var fl_TF = new createjs.Text(); //הוספת תוכן לקומבו
		fl_TF.x = 200;
		fl_TF.y = 100;
		fl_TF.color = "#ff7700";
		fl_TF.font = "20px Arial";
		stage.addChild(fl_TF);
		fl_TF.name = "myFl_TF";
		
		var myBackG = new lib.backGMC(); //הוספת רקע לבמה
		stage.addChildAt(myBackG, 0); //הגדרת השכבה של הרקע: השכבה הנמוכה ביותר
		myBackG.x = stageWidth / 2; //מירכוז
		myBackG.y = stageHeight / 2;
		myBackG.gotoAndStop(1); //קביעת הפריים ההתחלתי של קליפ הרקע
		myBackG.name = "backGround";
		
		function myCombo() { //פונקציה המוסיפה את אלמנט הקומבו לבמה
			var forcombo = new lib.forcomboMC();
			forcombo.x = stageWidth / 2;
			forcombo.y = 200;
			stage.addChildAt(forcombo, 1);
			forcombo.name = "myForcombo";
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.3;
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		};
		
		function mycb_change(evt) { //פונקציה לשינוי הבחירה בקומבו
			var forcombo = stage.getChildByName("myForcombo");
			game = evt.currentTarget.value; //משתנה המכיל את מספר הבחירה בקומבו
			if (game == 0) { //אם לא נבחר אחד המשחקים, לא ניתן ללחוץ על הכפתור והוא בפייד
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", fl_Click);
			} else { //רק במקרה שנבחר משחק קיים, ניתן ללחוץ על הכפתור
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_Click);
			}
		}
		
		function fl_Click() { //בלחיצה על הכפתור מופעלת פונקציית ההתחלה
			start();
		}
		
		function start() { //פונקציית התחלה
		
			timeSCounter = 0; //איפוס כל משתני הבחירה כדי שבמשחק חוזר הם יתרחילו מערכם המקורי
			timeMCounter = 0;
			wrongY = 200;
			correctY = 200;
			countcorrect = 0;
			countwrong = 0;
			countmistakes = 0;
		
			cocoArray = [ //מערך דו מימדי המכיל את פריטי המשחק
				[0], //במעמד החיצוני כל תא מכיל משחק. התא הראשון הוא ריק כדי להתאים למספרי הפניות בקומבו
				[
					[lib.isflagMC, 11, 0], //במימד הפנימי קיימים פריטי כל משחק. כל פריט מכיל תא עם הפריט עצמו, תא המגדיר האם מדובר בתמונה או טקסט ותא המגדיר האם הפריט נכון או לא נכון.
					[lib.cnflagMC, 11, 0],
					[lib.itflagMC, 11, 1],
					[lib.mxflagMC, 11, 1],
					["קניה", 00, 1],
					["ברזיל", 00, 1],
					["צרפת", 00, 1],
					["טיוואן", 00, 0],
					["אינדונזיה", 00, 0],
					["פקיסטאן", 00, 0]
				],
				[
					["גולדה מאיר הייתה ראש ממשלת ישראל בין השנים 1969-1974", 00, 0],
					["ישראל גובלת במדינות הבאות: מצרים, ירדן, סוריה ולבנון.", 00, 0],
					["הכרזת העצמאות של מדינת ישראל נערכה ביום שישי, ה' באייר הת'ש''ח 14 במאי 1948.", 00, 0],
					[lib.gurionMC, 11, 0],
					[lib.dayanMC, 11, 0],
					["מלחמת יום כיפור נערכה בשנת 1974.", 00, 1],
					["בתכנית ההתנתקות פונו אזרחים יישראלים מישובים ברמת הגולן.", 00, 1],
					["יזהר כהן ייצג את מדינת ישראל באולימפיידת בייג'ינג כשחיין אולימפי.", 00, 1],
					["אריאל שרון ז''ל כיהן כראש ממשלת ישראל בין השנים 2010-2015.", 00, 1],
					["מבצע משה הוא מבצע עליית יהודי מרוקו.", 00, 1]
				]
			];
		
			cocoArray2 = [ // המערך השני מיועד לשמירת הפריטים להדפסה במשוב המסכם, והוא אני מושפע מפעולות ספלייס המוכלות על המערך השני
				[0],
				[
					[lib.isflagMC, 11, 0], //מערך זה מכיל תא נוסף לכל פריט המגדיר האם הפריט זוהה נכון בפעם הראשונה או לא
					[lib.cnflagMC, 11, 0],
					[lib.itflagMC, 11, 1],
					[lib.mxflagMC, 11, 1],
					["קניה", 00, 1],
					["ברזיל", 00, 1],
					["צרפת", 00, 1],
					["טיוואן", 00, 0],
					["אינדונזיה", 00, 0],
					["פקיסטאן", 00, 0]
				],
				[
					["גולדה מאיר הייתה ראש ממשלת ישראל בין השנים 1969-1974", 00, 0],
					["ישראל גובלת במדינות הבאות: מצרים, ירדן, סוריה ולבנון.", 00, 0],
					["הכרזת העצמאות של מדינת ישראל נערכה ביום שישי, ה' באייר הת'ש''ח 14 במאי 1948.", 00, 0],
					[lib.gurionMC, 11, 0],
					[lib.dayanMC, 11, 0],
					["מלחמת יום כיפור נערכה בשנת 1974.", 00, 1],
					["בתכנית ההתנתקות פונו אזרחים יישראלים מישובים ברמת הגולן.", 00, 1],
					["יזהר כהן ייצג את מדינת ישראל באולימפיידת בייג'ינג כשחיין אולימפי.", 00, 1],
					["אריאל שרון ז''ל כיהן כראש ממשלת ישראל בין השנים 2010-2015.", 00, 1],
					["מבצע משה הוא מבצע עליית יהודי מרוקו.", 00, 1]
				]
			];
			upScale = cocoArray[game].length; //הגדרת המשתנה למילוי הסל לפי מספר הפריטים במערך בהתאם למשחק הנבחר
			stage.removeChild(stage.getChildByName("myForcombo")); //הסרת הקומבו מהבמה
			stage.removeChild(stage.getChildByName("myFl_TF"));
		
			myBackG.gotoAndStop(0); //שינוי הפריים המוצג של הרקע
			// שינוי גודל ותוכן ההנחיות  למשחק בהתאם למשחק שנבחר
			if (game == 1) {
				myBackG.insText.text = "עזור לקוף לתפוס את הקוקוסים עם הדגל/השם של מדינה ביבשת אסיה בלבד";
				var myInstruct = new lib.instructionsMC();
				stage.addChild(myInstruct);
				myInstruct.x = stageWidth / 2;
				myInstruct.y = 55;
				myInstruct.name = "instruct";
		
			} else {
				myBackG.insText.text = "עזור לקוף לתפוס את הקוקוסים עם הדמות/האירוע המתאים להיסטוריית מדינת ישראל בלבד";
				var myInstruct = new lib.instructionsMC();
				stage.addChild(myInstruct);
				myInstruct.x = stageWidth / 2;
				myInstruct.y = 65;
				myInstruct.name = "instruct";
			}
			//הגדרת משתנה לחול והוספת האלמנט לבמה
			var mySand = new lib.sandMC();
			stage.addChild(mySand);
			mySand.x = 481.75;
			mySand.y = 584.45;
			mySand.name = "sand";
			//הגדרת משתנה לסל והוספת האלמנט לבמה
			var myBasket = new lib.basketMC();
			stage.addChild(myBasket);
			myBasket.x = 170;
			myBasket.y = 110;
			myBasket.name = "basket";
			//הגדרת משתנה לכפתור ההפסקה והוספת האלמנט לבמה
			
			var myNewbasket = new lib.basketnewMC(); //הגדרת משתנה לסל והוספתו לבמה. סל זה משמש למילוי הסל 
			stage.addChildAt(myNewbasket, 4);
			myNewbasket.x = 169;
			myNewbasket.y = 148;
			myNewbasket.name = "newbasket";
			
			var myPause = new lib.pauseMC();
			stage.addChild(myPause);
			myPause.x = 110;
			myPause.y = 18;
			myPause.name = "pause";
			myPause.addEventListener("click", mypauseB);
		
			cocoOut = false; //עדכון המשתנה המגדיר כי לא קיים קוקוס על הבמה כדי שהפונקציה להוספת קוקוס חדש תוכל לפעול 
			cocoFall(); //קריאה לנפילת הקוקוס
		}
		
		gameTime = setInterval(function () { // הפעלת אינטרוול הטיימר והוספה של דקות ושניות בהתאם להתקדמותו
			timeSCounter++;
			if (timeSCounter == 60) {
				timeSCounter = 0;
				timeMCounter++;
			}
		}, 1000);
		
		function cocoFall() {
			var myMonkey = new lib.monkeyMC(); //הגדרת משתנה לקופ והוספתו לבמה
			stage.addChildAt(myMonkey, 6);
			myMonkey.x = stageWidth / 2;
			myMonkey.y = 500;
			myMonkey.gotoAndStop(0);
			myMonkey.name = "monkey";
		
		
			cocoFallInt = setInterval(function () { // הגדרת אינטרוול הבודק האם נמצא קוקוס על הבמה ומפאיל בהתאם את פונקציית הוספת קוקוס חדש
				if (cocoOut == false) {
					var myCoco = new lib.cocoMC(); //הגדרת משתנה לקוקוס והספתו לבמה
					stage.addChildAt(myCoco, 5);
					cocoStartX = (Math.floor(Math.random() * (stageWidth / 2 + 100 || stageWidth / 2 - 100)) + 1); //הגרלת מיקום אופקי לנקודת ההתחלה של הקוקוס
					myCoco.x = (cocoStartX + 100);
					myCoco.y = cocoStartY; //מיקום התחלתי על ציר הווי בהתאם למשתנה שהוגדר גלובלית
					myCoco.name = "coco";
					cocoOut = true; //לאחר יצירת הקוקוס, עדכון המשתנה כדי למנוע יצירה של קוקוס נוסף
					createjs.Ticker.paused = false; //הרצת הטיקר
		
					rnditem = Math.floor((Math.random() * cocoArray[game].length)); //הגרלת פריט מתוך המעמד הפנימי של המערך  הראשון
					if (cocoArray[game][rnditem][1] == 11) { //בדיקה האם מדובר בתמונה
						var item = new cocoArray[game][rnditem][0](); //הגדרת משתנה המכיל את התמונה והספתה לבמה לאחר התאמת הגודל
						var scaleValue = 0;
						scaleValue = resizeImage(myCoco, item);
						item.scaleX = scaleValue;
						item.scaleY = scaleValue;
						myCoco.addChild(item);
					}
		
					if (cocoArray[game][rnditem][1] == 00) { //במקרה של פריט טקסט, גודל הפונט שונה בהתאם למשחק כיוון שמשחק 1 מכיל פריטי טקסט קצרים יותר
						if (game == 1) {
		
							myCoco.tavitTextShort.font = "16pt Arial"
							myCoco.tavitTextShort.text = cocoArray[game][rnditem][0];
						};
						if (game == 2) {
							myCoco.tavitTextLong.font = "12pt Arial"
							myCoco.tavitTextLong.text = cocoArray[game][rnditem][0];
		
						};
		
					}
					myMonkey.gotoAndStop(0); //קביעת הפריים הראשוני של הקוף
				}
			}, 1000); //קביעת תדירות האינטרוול
		}
		
		function resizeImage(tavit, content) { //פונקציה המתאימה את גודל התמונות לגודל תווית הקוקוס
			//משתנים לגבולות של המסגרת והתוכן
			var tavitBounds = tavit.nominalBounds;
			var contentBounds = content.nominalBounds;
			//מציאת הערך לפיו יש לשנות את גודל התמונה בהתאם לכיוון התמונה- לאורך או לרוחב
			var toScale = 0;
			if (tavitBounds.height / contentBounds.height < tavitBounds.width / contentBounds.width) {
				toScale = tavitBounds.height / contentBounds.height;
			} else {
				toScale = tavitBounds.width / contentBounds.width;
			}
			return toScale;
		}
		
		function handlekeypress(e) { //פונקציה להפעלת המקשים
			var myBackG = stage.getChildByName("backGround");
			var myMonkey = stage.getChildByName("monkey");
			var myCoco = stage.getChildByName("coco");
			var mySand = stage.getChildByName("sand");
			var myPause = stage.getChildByName("pause");
			var myBasket = stage.getChildByName("basket");
			var myBackG = stage.getChildByName("backGround");
		
		
			if (createjs.Ticker.paused == false) { //רק אם הטיקר לא במצב עצור - כלומר אנחנו לא במצב השהייה בעקבות פגיעה
				if (e.keyCode == 37) //פעולה במקרה של בחירת מקש שמאל
				{
					if (myMonkey.x >= 65) { // גבול שמאלי
						myMonkey.x -= monkeyMove; //כל עוד לא הגיע לגבול תתבצע תנועה שמאלה
						myMonkey.gotoAndStop(6);
					}
				}
				if (e.keyCode == 39) { //פעולה במקרה של בחירת מקש ימין
					if (myMonkey.x <= (stageWidth - 80)) { // גבול ימני
						myMonkey.x += monkeyMove; //כל עוד לא הגיע לגבול תתבצע תנועה ימינה
						myMonkey.gotoAndStop(6); //פינה לפריים בו נמצא מוביקליפ פנימי המכיל את הליכת הקוף
					}
				}
		
				//stage.removeChild(stage.getChildByName("instruct")); 
			}
		
		}
		
		function stopmove() { //פונקציה להפסקת הזזת הרקליים של הקוף
			var myMonkey = stage.getChildByName("monkey");
			if (createjs.Ticker.paused == false) {
				myMonkey.gotoAndStop(0); //חזרה לפריים של הקוף העומד
			}
		}
		
		function move() // פונקציית קליעה לסל
		{
			var myBasket = stage.getChildByName("basket");
			var myNewbasket = stage.getChildByName("newbasket");
			var myCoco = stage.getChildByName("coco");
			if (myCoco.x < 180 && myCoco.x > 160 && myCoco.y < 120) { //בדיקה של הגעת הקוקס למיקום הסל
				directionX = 0;
				directionY = 0;
				remove(); //קריאה לפונקציית הסרת הקוקס
				myNewbasket.brown.scaleY -= 1 / upScale; //מילוי הסל : הקטנת הריבוע המסתיר את החלק המלא של הסל במאסק
				cocoArray[game].splice(rnditem, 1); //הסרת הפריט מן המערך
				clearInterval(moveInterval); //עצירת אינטרוול ההזזה לסל
			}
			myCoco.x += directionX; // התזוזה עצמה
			myCoco.y += directionY; // התזוזה עצמה	
		}
		
		function remove() { //פונקציה להסרת הקוקוס
			stage.removeChild(stage.getChildByName("coco"));
			cocoOut = false; //עדכון המשתנה המגדיר כי לא קיים קוקוס על הבמה באותו הרגע כדי להפעיל את פונקציית נפילת קוקוס חדש
		}
		
		function tick() { //פונקציית טיקר
			var myBasket = stage.getChildByName("basket");
			var myNewbasket = stage.getChildByName("newbasket");
			var mySand = stage.getChildByName("sand");
			var myMonkey = stage.getChildByName("monkey");
			var myCoco = stage.getChildByName("coco");
			if (createjs.Ticker.paused == false) { //במידה והטיקר לא במצב מושהה
				myCoco.y += 1; //תנועה רציפה של המטרה לפי כיוון
				//בדיקת פגיעה באמצעות הגדרת פרמטרים מוגדרים כדי שהפגיעה תהיה מדויקת ומתאימה
				if (myCoco.x < myMonkey.x + 60 &&
					myCoco.x > myMonkey.x - 60 &&
					myCoco.y < myMonkey.y + 150 &&
					myCoco.y > myMonkey.y - 120) {
		
					createjs.Ticker.paused = true; // עצירת הטיקר
		
					if (cocoArray[game][rnditem][2] == 0) { //אם התשובה היא נכונה				
						myMonkey.gotoAndStop(1); //תוצג תגובה באמצעות חיוך של הקוף
						directionX = (myBasket.x - myCoco.x) / 250; // וחישוב כמות התזוזה בציר איקס
						directionY = (myBasket.y - myCoco.y) / 250; //חישוב כמות התזוזה בציר הווי
						moveInterval = setInterval(move, 5); //הפעלת פונקציה המזיזה את הקוקוס לסל בהתאם למיקומים. בכל הפעלה של הטינטרוול הקוקוס מבצע יחידת תזוזה אחת לכיוון הסל
		
					} else if (cocoArray[game][rnditem][2] == 1) { //לולאה העוברת על המערך השני ומשווה את התא שהוגרל מתוך המערך הראשון כדי למצוא את התא המתאים במערך השני כדי לוודא שלא נוצרת אי התאמה בגלל הספלייד
						myMonkey.gotoAndStop(2); //תגובה של קוף עצוב
						for (i = 0; i < cocoArray2[game].length; i++) {
							if (cocoArray2[game][i][0] == cocoArray[game][rnditem][0]) {
								cocoArray2[game][i].splice(3, 1, "star");
							};
						};
						countmistakes++; //הוספת שגיעה לספירת השגיעות
						myCoco.x = myMonkey.x - 50; //הזזה של הקוקוס לידיים של הקוף
						var stop = setTimeout(remove, 3000); //השהיה של התגובה למשך 3 שניות לפני קריאה לפונקציה המסירה את הקוקוס
					};
				}
		
		
				if (intersect(myCoco, mySand)) { //במקרה של פגיעה של הקוקוס בחול
					createjs.Ticker.paused = true;
					if (cocoArray[game][rnditem][2] == 0) { //בדיקה האם הפריט נכון
						if (myMonkey.x > myCoco.x) { //תגובה "מופתעת" - פניה לפריים המתאים בהתאם למיקום הקוקוס ביחס לקוף
							myMonkey.gotoAndStop(3)
						};
						if (myMonkey.x < myCoco.x) {
							myMonkey.gotoAndStop(4)
						};
						for (i = 0; i < cocoArray2[game].length; i++) { //לולאה העוברת על המערך השני ומשווה את התא שהוגרל מתוך המערך הראשון כדי למצוא את התא המתאים במערך השני כדי לוודא שלא נוצרת אי התאמה בגלל הספלייד
							if (cocoArray2[game][i][0] == cocoArray[game][rnditem][0]) {
								cocoArray2[game][i].splice(3, 1, "star"); //אם יש התאמה בין שני התאים, התא המתאים במערך השני מסומן כדי להוסיף לו כוכבית במשוב המסכם
							};
						};
						countmistakes++; //הוספת שגיעה לספירת השגיעות
						var stop = setTimeout(remove, 3000); //השהיה של 2 שניות על שהקוקוס יוסר והמשחק ימשיך
					};
					if (cocoArray[game][rnditem][2] == 1) {
						cocoArray[game].splice(rnditem, 1); //הסרה של פריט מהמערך
						myNewbasket.brown.scaleY -= 1 / upScale; // הקטנת האלמנט בתוך הסל המסתיר את מילוי הסל (הסל מתמלא)
						remove() //קריאה לפונקציה המסירה את הקוקוס
					};
				}
				// כאשר לא נותרים פריטים במערך הפריטים, האלמנטים מוסרים מן הבמה ואינטרוול הזריקה לסל נפסק
				if (cocoArray[game].length < 1) {
					clearInterval(moveInterval);
					createjs.Ticker.paused = true;
					stage.removeChild(stage.getChildByName("monkey"));
					stage.removeChild(stage.getChildByName("coco"));
					stage.removeChild(stage.getChildByName("instruct"));
					stage.removeChild(stage.getChildByName("basket"));
					stage.removeChild(stage.getChildByName("newbasket"));
					stage.removeChild(stage.getChildByName("pause"));
					cocoOut = true;
					endAnimation(); //קריאה לפונקציה המכילה את אנימציית הסיום
				}
			}
		}
		
		function endAnimation() { //פונקציה המכילה את אנימציית הסיום
			var myAnimation = new lib.endanimationMC();
			stage.addChild(myAnimation);
			myAnimation.y = 50;
			myAnimation.name = "animation";
		
			var finish = setTimeout(End, 4500); //קריאה לפונקציית המשוב המסכם לאחר סיום האנימציה
		}
		function End() { //פונקצית המשוב המסכם והמאבחן
			clearInterval(cocoFallInt); //ניקוי האינטרוול נפילת הקוקוס
			stage.removeChild(stage.getChildByName("animation")); //הסרת אנימציית הסיום
			var myBackG = stage.getChildByName("backGround");
			myBackG.gotoAndStop(2);
		
			myBackG.titleText.text = "הביצועים שלך";
		
			for (i = 0; i < cocoArray2[game].length; i++) { //לולאה העוברת על המערך השני ומיועדת להדפסת הפריטים במשוב המסכם
				var rectangle = new lib.rectMC();
				//מיקום הדפסת הפריטים נקבע על פי כמות הפריטים שכבר הוספסו מאותו הסוג (נכון או לא נכון)כדי שבכל שורה יודפסו שני פריטים מכל סוג בצורה מיושרת
				if (cocoArray2[game][i][2] == 1) {
					countwrong++;
					if ((countwrong + 1) % 2 == 0) {
						rectangle.x = 200;
						wrongY += 100;
					} else {
						rectangle.x = 380;
					}
					rectangle.y = wrongY;
				}
				if (cocoArray2[game][i][2] == 0) {
					countcorrect++;
					if ((countcorrect + 1) % 2 == 0) {
						rectangle.x = stageWidth / 2 + 280;
						correctY += 100;
					} else {
						rectangle.x = stageWidth / 2 + 80;
					}
					rectangle.y = correctY;
				}
				//הוספת מלבנים לבמה היכילו את הפריטים במיקומם ה נכון,מיספור המלבנים כדי לאפשר פניה חוזרת לשם הסרתם
				stage.addChild(rectangle);
				rectangle.name = "rectangle" + i;
				if (cocoArray2[game][i][1] == 11) {
					var enditem = new cocoArray2[game][i][0]();
					rectangle.addChild(enditem);
				}
				//הדפסת פריט מסוג טקסט
				if (cocoArray2[game][i][1] == 00) {
					if (game == 1) {
						rectangle.endText.font = "16pt Arial";
						rectangle.endText.x -= 25;
					}
					if (game == 2) {
						rectangle.endText.font = "11pt Arial";
					}
					rectangle.endText.text = cocoArray2[game][i][0];
					//הדפסת כוכבית ליד פריטים שאינם זוהו נכון בפעם הראשונה והמכילים תא עם כוכבית במערך השני
				}
				if (cocoArray2[game][i][3] == "star") {
					var mystar = new lib.starMC();
					rectangle.addChild(mystar);
				}
			}
			//חישוב הציון בעמצעות המשתנה לספירת השגיעות וכמות הפריטים הקיימת במערך השני
			var grade = 100 * (1 - countmistakes / cocoArray2[game].length);
			var graderound = Math.round(grade);
			//הדפסת הזמן+ציון
			myBackG.gradeText.text = "ציון:" + " " + graderound;
			if (timeMCounter == 0) {
				myBackG.timeText.text = "זמן:" + " " + timeSCounter;
		
			} else {
				myBackG.timeText.text = "זמן:" + " " + timeMCounter + ":" + timeSCounter;
			}
		
			//תנאי להופעת תוכן המשוב אם מדובר על משחק מס'1 או 2
			if (game == 1) {
				myBackG.correctText.text = "מדינות ביבשת אסיה";
				myBackG.wrongText.text = "מדינות לא ביבשת אסיה";
				myBackG.txtend1.text = "זיהית את כל הפריטים וסיימת את המשחק מדינות ביבשת אסיה.";
				myBackG.txtend2.text = "פריטים שלא זיהית בפעם הראשונה מסומנים ב*";
			}
			if (game == 2) {
				myBackG.correctText.text = "אירועים ודמויות המתאימים להיסטוריית מדינת ישראל";
				myBackG.wrongText.text = "אירועים ודמויות שאינם מתאימים להיסטוריית מדינת ישראל";
				myBackG.txtend1.text = "זיהית את כל הפריטים וסיימת את משחק היסטוריית מדינת ישראל.";
				myBackG.txtend2.text = "פריטים שלא זיהית בפעם הראשונה מסומנים ב*";
			}
			//יצירת כפתור סיום
			var BTNend = new lib.btnEndMC();
			BTNend.x = stageWidth / 2 - 100;
			BTNend.y = 570;
			stage.addChild(BTNend);
			BTNend.name = "endbutton";
			BTNend.addEventListener('click', exit);
			//יצירת כפתור שחק שוב
			var BTNrestart = new lib.btnRestartMC();
			BTNrestart.x = stageWidth / 2 + 100;
			BTNrestart.y = 570;
			stage.addChild(BTNrestart);
			BTNrestart.name = "restartbutton";
			BTNrestart.addEventListener('click', restart);
		};
		
		function restart() { //פונקציה המסירה את כל הפריטים מהבמה ומתחילה את המשחק מחדש
			for (i = 0; i < cocoArray2[game].length; i++) {
				stage.removeChild(stage.getChildByName("rectangle" + i));
			}
			//מחיקת אלמנטים מהבמה
			stage.removeChild(stage.getChildByName("myBackG"));
			stage.removeChild(stage.getChildByName("endbutton"));
			stage.removeChild(stage.getChildByName("restartbutton"));
		
			start();
		}
		
		function exit() { //פונקציה המסירה את כל הפריטים מהבמה ויוצאת מן המשחק
			for (i = 0; i < cocoArray2[game].length; i++) {
				stage.removeChild(stage.getChildByName("rectangle" + i));
			}
			var myBackg = stage.getChildByName("myBackG");
			//מחיקת אלמנטים מהבמה
			stage.removeChild(stage.getChildByName("endbutton"));
			stage.removeChild(stage.getChildByName("restartbutton"));
			myBackG.gotoAndStop(1);
		
			myCombo();
		}
		
		function intersect(obj1, obj2) { //פונקציה לפגיעה בין שני אלמנטים(קוקוס וחול),(קוקוס והסל)
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
		
			if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
				return false;
			}
		
			if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			}
		
			if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
				return false;
			}
		
			if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
			return true;
		}
		
		function mypauseB() { //פונקציה לפתיחת מסך השהייה
			//השהיית הטיקר,אינטרוול-זמן
			clearInterval(gameTime);
			clearInterval(cocoFallInt);
			createjs.Ticker.paused = true;
			var pauseBack = new lib.pauseBackgMC();
			stage.addChild(pauseBack);
			pauseBack.x = stageWidth / 2;
			pauseBack.y = stageHeight / 2 - 10;
			pauseBack.name = "pauseBackg";
			cocoOut = true;
			stage.removeChild(stage.getChildByName("coco"));
			stage.removeChild(stage.getChildByName("monkey"));
		
			var closeBtn = new lib.closebtnMC();
			stage.addChild(closeBtn);
			closeBtn.x = stageWidth / 2 + 50;
			closeBtn.y = stageHeight / 2 + 125;
			closeBtn.name = "closeBtnpause";
			closeBtn.addEventListener('click', closePause);
		}
		
		function closePause() { //פונקציה לסגירת מסך השהייה
			stage.removeChild(stage.getChildByName("closeBtnpause"));
			stage.removeChild(stage.getChildByName("pauseBackg"));
			var myCoco = stage.getChildByName("coco");
			var myMonkey = stage.getChildByName("monkey");
			gameTime = setInterval(function () {
				timeSCounter++;
				if (timeSCounter == 60) {
					timeSCounter = 0;
					timeMCounter++;
				}
			}, 1000);
			stage.removeChild(stage.getChildByName("pauseScreen"));
			cocoOut = false;
			cocoFall();
		}
		
		function myOdot() { //פונקצית ליצירת מסך אודות
			var Odot = new lib.odotMC();
			stage.addChild(Odot);
			Odot.x = stageWidth / 2;
			Odot.y = stageHeight / 2;
			Odot.name = "myodot";
		
			Odot.Xodot.addEventListener('click', myOdotClose);
			Odot.txt5.addEventListener('click', telemUrl);
			Odot.addEventListener('pressmove', dragFunc);
			//מחיקת אלמנטים מהבמה
			stage.removeChild(stage.getChildByName("myForcombo"));
			stage.removeChild(stage.getChildByName("myFl_TF"));
		}
		
		function myOdotClose() { //פונקציה לסגירת מסך אודות
			stage.removeChild(stage.getChildByName("myodot"));
			stage.removeChild(stage.getChildByName("myXodot"));
			var forcombo = stage.getChildByName("myForcombo");
			var Fl_TF = stage.getChildByName("myFl_TF");
		}
		
		function dragFunc(evt) { //פונקציה לגרירת מסך אודות
			evt.currentTarget.x = (home.globalToLocal(stage.mouseX, stage.mouseY)).x;
			evt.currentTarget.y = (home.globalToLocal(stage.mouseX, stage.mouseY)).y;
		};
		
		
		function telemUrl() { //קישור במסך אודות לאתר טל"מ
			window.open("http://www.hit.ac.il/telem/overview", "_blank");
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.odotclickMC = new lib.odotclick();
	this.odotclickMC.name = "odotclickMC";
	this.odotclickMC.parent = this;
	this.odotclickMC.setTransform(47.6,31.6);
	new cjs.ButtonHelper(this.odotclickMC, 0, 1, 1);

	this.gameName = new cjs.Text("תפוס את הקוקוס", "bold 16px 'Arial'");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "right";
	this.gameName.lineHeight = 20;
	this.gameName.lineWidth = 117;
	this.gameName.parent = this;
	this.gameName.setTransform(889,15.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1).p("AhhgQIAXASQAiASAwgDQAygDAZgPQANgIACgH");
	this.shape.setTransform(926.1,30.9,0.519,0.582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3736").s().p("AgMASQgGgHgBgKQAAgKAFgHQAFgIAJAAQAHgBAGAIQAGAHABAKQABAJgGAIQgFAIgJAAIgBAAQgGAAgGgHg");
	this.shape_1.setTransform(930.5,19.7,0.519,0.582);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3736").s().p("AgNASQgFgHgBgKQAAgKAFgHQAGgIAIAAQAIgBAGAIQAFAHABAKQAAAJgFAIQgGAIgIAAIgBAAQgGAAgHgHg");
	this.shape_2.setTransform(920.6,19.7,0.519,0.582);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#373535").ss(0.8).p("Ag4ANIASgNQAVgMARABQAcACAdAW");
	this.shape_3.setTransform(925.2,23.5,0.519,0.582);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C59D72").s().p("AgdANQgIgPAIgPQAEgIAZgCQAagCAEAJQASArg7AFIgBAAQgKAAgHgPg");
	this.shape_4.setTransform(940,16.6,0.519,0.582);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C59D72").s().p("AgkgWQAEgKAgAAQAeAAAGAKQAKASgIASQgIATgNAAQhJAAAUg3g");
	this.shape_5.setTransform(911.1,16.9,0.519,0.582);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#393636").s().p("AgMAAQABgLAKABQAPAAAAAKQAAALgNAAIgBAAQgMAAAAgLg");
	this.shape_6.setTransform(924.4,25.3,0.519,0.582);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#393636").s().p("AgNAAQABgKAMAAQANAAAAAKQABALgOAAQgMAAgBgLg");
	this.shape_7.setTransform(926.5,25.3,0.519,0.582);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C59D72").s().p("AiIBXQgagNgVgVQgrgrAXgoQAqhNBJADQAsACArAcQApgcAsgEQBMgGAsBPQAXApgrArIgvAiIgUAMIhlgmIgaAAIhFAcIgmAUg");
	this.shape_8.setTransform(925.4,19.3,0.519,0.582);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C59D72").s().p("AhpBLQgsgfAAgsQAAgrAsgfQAsgfA9AAQA+AAAsAfQAsAfAAArQAAAsgsAfQgsAfg+AAQg9AAgsgfg");
	this.shape_9.setTransform(925.9,29,0.519,0.582);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8F6548").s().p("AivCvQhOhJAAhmIACgdIgCAAQgqAAgfgdQghgeAJgnQAMg1A8gBQA2AAASAcQAmgjA+gbQBFgfAxABQAtgBBFAbQBAAYAlAdQARgUArAHQAxAJAOArQAKAfgaAeQgXAagkAJQADARAAAOQAABmhOBJQhOBIhuAAQhtAAhOhIg");
	this.shape_10.setTransform(925.2,23.4,0.519,0.582);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0)").s().p("EhLUAJiIAAzDMBgQAAAIAAMfMA2ZAAAIAAGkg");
	this.shape_11.setTransform(482.1,548.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.gameName},{t:this.odotclickMC}]}).wait(1));

	// layer
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myStyle.css'});

	this.instance.setTransform(480,305.5,1,1,0,0,0,50,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(211,233,249,0.149)").s().p("EhKvAD6IAAnzMCVfAAAIAAHzg");
	this.shape_12.setTransform(479.7,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,305,964.3,609.3);
// library properties:
lib.properties = {
	id: 'D28C2C9BFDD15D4CBE1796E4FAD6AE21',
	width: 960,
	height: 610,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cocoNofarTamara_atlas_.png?1518119166857", id:"cocoNofarTamara_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1518119167066", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1518119167066", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1518119167066", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1518119167066", id:"an.ComboBox"},
		{src:"components/ui/src/button.js?1518119167066", id:"an.Button"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D28C2C9BFDD15D4CBE1796E4FAD6AE21'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;