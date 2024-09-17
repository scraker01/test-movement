System.register("chunks:///_virtual/AnimationController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,i,r,e;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,i=t._decorator,r=t.Animation,e=t.Component}],execute:function(){var c;o._RF.push({},"3b037ewr3VP3ZvY1pV7wG3v","AnimationController",void 0);var a=i.ccclass;i.property,t("AnimationController",a("AnimationController")(c=function(t){function o(){for(var n,o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))||this).objectAnimation=void 0,n.currentClip=void 0,n}n(o,t);var i=o.prototype;return i.playAnimation=function(t){this.currentClip!=t&&(this.objectAnimation.play(t),this.currentClip=t)},i.setObjectToAnimation=function(t){this.objectAnimation=t.getComponent(r),this.currentClip=this.objectAnimation.defaultClip.toString()},o}(e))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/CameraController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,a,o,s,n,l,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,n=e.Node,l=e.CCFloat,c=e.Vec3,p=e.Component}],execute:function(){var u,y,h,m,P,C,f,g,b;o._RF.push({},"ab6194SAhBKkJdVisAC66EO","CameraController",void 0);var d=s.ccclass,v=s.property;e("CameraController",(u=d("CameraController"),y=v({type:n}),h=v({type:n}),m=v({type:l}),u((f=t((C=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,i(t,"camera",f,a(t)),i(t,"player",g,a(t)),i(t,"camAngle",b,a(t)),t.playerPos=void 0,t.currentCamPos=void 0,t.camToPlayerDist=void 0,t}r(t,e);var o=t.prototype;return o.start=function(){this.currentCamPos=this.camera.getPosition(),this.playerPos=this.player.getPosition(),this.camToPlayerDist=new c(this.playerPos.x-this.currentCamPos.x,this.playerPos.y-this.currentCamPos.y,this.playerPos.z-this.currentCamPos.z)},o.update=function(e){this.currentCamPos=this.camera.getPosition(),this.playerPos=this.player.getPosition(),this.camera.setPosition(new c(this.playerPos.x-this.camToPlayerDist.x,this.currentCamPos.y,this.playerPos.z-this.camToPlayerDist.z))},t}(p)).prototype,"camera",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(C.prototype,"player",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(C.prototype,"camAngle",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=C))||P));o._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerMovementController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,e,s,o,n,h,a,r,c,d,g,v,p,l,M;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,s=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){n=i.cclegacy,h=i._decorator,a=i.CCFloat,r=i.input,c=i.Input,d=i.RigidBody,g=i.Animation,v=i.Vec3,p=i.lerp,l=i.KeyCode,M=i.Component}],execute:function(){var u,y,f,R,m;n._RF.push({},"79592yVEyBIv5Ig0JMAUk1H","PlayerMovementController",void 0);var k=h.ccclass,w=h.property;i("PlayerMovementController",(u=k("PlayerMovementController"),y=w({type:a}),u((m=t((R=function(i){function t(){for(var t,e=arguments.length,n=new Array(e),h=0;h<e;h++)n[h]=arguments[h];return t=i.call.apply(i,[this].concat(n))||this,s(t,"speed",m,o(t)),t.xRotation=void 0,t.zRotation=void 0,t.isMovingLeft=void 0,t.isMovingRight=void 0,t.isMovingForward=void 0,t.isMovingBackward=void 0,t.zSpeed=void 0,t.xSpeed=void 0,t.rb=void 0,t.objectAnimation=void 0,t.currentClip=void 0,t.isFacingRight=void 0,t}e(t,i);var n=t.prototype;return n.onLoad=function(){r.on(c.EventType.KEY_DOWN,this.movement,this),r.on(c.EventType.KEY_UP,this.releaseMovement,this),this.xRotation=0,this.zRotation=0,this.xSpeed=0,this.zSpeed=0,this.isMovingLeft=!1,this.isMovingRight=!1,this.isMovingForward=!1,this.isMovingBackward=!1,this.isFacingRight=!1},n.start=function(){this.rb=this.node.getComponent(d),this.objectAnimation=this.getComponent(g),this.currentClip=this.objectAnimation.defaultClip.toString()},n.update=function(i){this.xSpeed=this.speed*this.xRotation,this.zSpeed=this.speed*this.zRotation,this.checkIsMoving?(this.rb.setLinearVelocity(new v(p(0,this.xSpeed,this.speed*i),this.rb.linearFactor.y,p(0,this.zSpeed,this.speed*i))),console.log(p(0,this.xSpeed,this.speed*i)),this.zSpeed<0?this.playAnimation("forward"):(Math.abs(this.xSpeed)>0||this.zSpeed>0)&&this.playAnimation("sideways-walk")):(this.rb.setLinearVelocity(new v(p(this.xSpeed,0,this.speed*i),this.rb.linearFactor.y,p(this.zSpeed,0,this.speed*i))),this.playAnimation("idle")),this.checkIsMovingXDimension(),this.checkIsMovingZDimension()},n.movement=function(i){switch(i.keyCode){case l.KEY_D:this.isMovingRight=!0,this.isFacingRight&&this.flip();break;case l.KEY_A:this.isMovingLeft=!0,this.isFacingRight||this.flip();break;case l.KEY_W:this.isMovingForward=!0;break;case l.KEY_S:this.isMovingBackward=!0}},n.releaseMovement=function(i){switch(i.keyCode){case l.KEY_D:this.isMovingRight=!1;break;case l.KEY_A:this.isMovingLeft=!1;break;case l.KEY_W:this.isMovingForward=!1;break;case l.KEY_S:this.isMovingBackward=!1}},n.checkIsMoving=function(){return!!(this.isMovingBackward||this.isMovingForward||this.isMovingLeft||this.isMovingRight)},n.checkIsMovingXDimension=function(){return this.isMovingLeft||this.isMovingRight?(this.isMovingLeft&&!this.isMovingRight?this.xRotation=-1:!this.isMovingLeft&&this.isMovingRight&&(this.xRotation=1),!0):(this.xRotation=0,!1)},n.checkIsMovingZDimension=function(){return this.isMovingBackward||this.isMovingForward?(this.isMovingBackward&&!this.isMovingForward?this.zRotation=1:!this.isMovingBackward&&this.isMovingForward&&(this.zRotation=-1),!0):(this.zRotation=0,!1)},n.playAnimation=function(i){this.currentClip!=i&&(this.objectAnimation.play(i),this.currentClip=i)},n.flip=function(){var i=this.node.getScale();this.node.setScale(-1*i.x,i.y,i.z),this.isFacingRight=!this.isFacingRight},t}(M)).prototype,"speed",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=R))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./AnimationController.ts","./CameraController.ts","./PlayerMovementController.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});