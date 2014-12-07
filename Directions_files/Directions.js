// Created by iWeb 3.0.4 local-build-20140923

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.00,offset:2.00}),stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,190),url:'Directions_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Directions_files/stroke_1.png'},{rect:new IWRect(1,-1,255,2),url:'Directions_files/stroke_2.png'},{rect:new IWRect(256,-1,2,2),url:'Directions_files/stroke_3.png'},{rect:new IWRect(256,1,2,190),url:'Directions_files/stroke_4.png'},{rect:new IWRect(256,191,2,2),url:'Directions_files/stroke_5.png'},{rect:new IWRect(1,191,255,2),url:'Directions_files/stroke_6.png'},{rect:new IWRect(-1,191,2,2),url:'Directions_files/stroke_7.png'}],new IWSize(257,192)),stroke_0:new IWEmptyStroke(),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Directions_files/DirectionsMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
