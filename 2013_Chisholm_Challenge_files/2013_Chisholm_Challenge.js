// Created by iWeb 3.0.4 local-build-20140318

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.00,offset:2.00}),stroke_1:new IWEmptyStroke(),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,190),url:'2013_Chisholm_Challenge_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'2013_Chisholm_Challenge_files/stroke_1.png'},{rect:new IWRect(1,-1,255,2),url:'2013_Chisholm_Challenge_files/stroke_2.png'},{rect:new IWRect(256,-1,2,2),url:'2013_Chisholm_Challenge_files/stroke_3.png'},{rect:new IWRect(256,1,2,190),url:'2013_Chisholm_Challenge_files/stroke_4.png'},{rect:new IWRect(256,191,2,2),url:'2013_Chisholm_Challenge_files/stroke_5.png'},{rect:new IWRect(1,191,255,2),url:'2013_Chisholm_Challenge_files/stroke_6.png'},{rect:new IWRect(-1,191,2,2),url:'2013_Chisholm_Challenge_files/stroke_7.png'}],new IWSize(257,192))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('2013_Chisholm_Challenge_files/2013_Chisholm_ChallengeMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixupIECSS3Opacity('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();IMpreload('2013_Chisholm_Challenge_files','shapeimage_2','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
