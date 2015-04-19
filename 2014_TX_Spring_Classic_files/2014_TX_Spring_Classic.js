// Created by iWeb 3.0.4 local-build-20140513

setTransparentGifURL('/Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.00,offset:2.00}),stroke_0:new IWEmptyStroke(),stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,190),url:'/2014_TX_Spring_Classic_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'/2014_TX_Spring_Classic_files/stroke_1.png'},{rect:new IWRect(1,-1,255,2),url:'/2014_TX_Spring_Classic_files/stroke_2.png'},{rect:new IWRect(256,-1,2,2),url:'/2014_TX_Spring_Classic_files/stroke_3.png'},{rect:new IWRect(256,1,2,190),url:'/2014_TX_Spring_Classic_files/stroke_4.png'},{rect:new IWRect(256,191,2,2),url:'/2014_TX_Spring_Classic_files/stroke_5.png'},{rect:new IWRect(1,191,255,2),url:'/2014_TX_Spring_Classic_files/stroke_6.png'},{rect:new IWRect(-1,191,2,2),url:'/2014_TX_Spring_Classic_files/stroke_7.png'}],new IWSize(257,192))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('/2014_TX_Spring_Classic_files/2014_TX_Spring_ClassicMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');IMpreload('/2014_TX_Spring_Classic_files','shapeimage_4','0');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
