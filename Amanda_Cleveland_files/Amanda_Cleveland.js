setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWEmptyStroke(),reflection_0:new IWReflection({opacity:0.00,offset:2.00}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,190),url:'Amanda_Cleveland_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Amanda_Cleveland_files/stroke_1.png'},{rect:new IWRect(1,-1,255,2),url:'Amanda_Cleveland_files/stroke_2.png'},{rect:new IWRect(256,-1,2,2),url:'Amanda_Cleveland_files/stroke_3.png'},{rect:new IWRect(256,1,2,190),url:'Amanda_Cleveland_files/stroke_4.png'},{rect:new IWRect(256,191,2,2),url:'Amanda_Cleveland_files/stroke_5.png'},{rect:new IWRect(1,191,255,2),url:'Amanda_Cleveland_files/stroke_6.png'},{rect:new IWRect(-1,191,2,2),url:'Amanda_Cleveland_files/stroke_7.png'}],new IWSize(257,192))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Amanda_Cleveland_files/Amanda_ClevelandMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupIECSS3Opacity('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
