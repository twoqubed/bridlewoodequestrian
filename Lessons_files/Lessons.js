setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,190),url:'Lessons_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Lessons_files/stroke_1.png'},{rect:new IWRect(1,-1,255,2),url:'Lessons_files/stroke_2.png'},{rect:new IWRect(256,-1,2,2),url:'Lessons_files/stroke_3.png'},{rect:new IWRect(256,1,2,190),url:'Lessons_files/stroke_4.png'},{rect:new IWRect(256,191,2,2),url:'Lessons_files/stroke_5.png'},{rect:new IWRect(1,191,255,2),url:'Lessons_files/stroke_6.png'},{rect:new IWRect(-1,191,2,2),url:'Lessons_files/stroke_7.png'}],new IWSize(257,192)),reflection_0:new IWReflection({opacity:0.00,offset:2.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Lessons_files/LessonsMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
