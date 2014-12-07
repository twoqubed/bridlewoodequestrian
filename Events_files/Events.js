// Created by iWeb 3.0.4 local-build-20140318

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,189),url:'Events_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Events_files/stroke_1.png'},{rect:new IWRect(1,-1,255,2),url:'Events_files/stroke_2.png'},{rect:new IWRect(256,-1,2,2),url:'Events_files/stroke_3.png'},{rect:new IWRect(256,1,2,189),url:'Events_files/stroke_4.png'},{rect:new IWRect(256,190,2,2),url:'Events_files/stroke_5.png'},{rect:new IWRect(1,190,255,2),url:'Events_files/stroke_6.png'},{rect:new IWRect(-1,190,2,2),url:'Events_files/stroke_7.png'}],new IWSize(257,191)),reflection_0:new IWReflection({opacity:0.00,offset:2.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Events_files/EventsMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
