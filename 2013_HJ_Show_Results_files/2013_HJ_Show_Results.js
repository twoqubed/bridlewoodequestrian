// Created by iWeb 3.0.4 local-build-20140923

setTransparentGifURL('Media/transparent.gif');
function applyEffects() {
    var registry = IWCreateEffectRegistry();
    registry.registerEffects({
        stroke_2: new IWStrokeParts([{
            rect: new IWRect(-1, 1, 2, 518),
            url: '/2013_HJ_Show_Results_files/stroke_8.png'
        }, {
            rect: new IWRect(-1, -1, 2, 2),
            url: '/2013_HJ_Show_Results_files/stroke_9.png'
        }, {
            rect: new IWRect(1, -1, 743, 2),
            url: '/2013_HJ_Show_Results_files/stroke_10.png'
        }, {
            rect: new IWRect(744, -1, 2, 2),
            url: '/2013_HJ_Show_Results_files/stroke_11.png'
        }, {
            rect: new IWRect(744, 1, 2, 518),
            url: '/2013_HJ_Show_Results_files/stroke_12.png'
        }, {
            rect: new IWRect(744, 519, 2, 2),
            url: '/2013_HJ_Show_Results_files/stroke_13.png'
        }, {
            rect: new IWRect(1, 519, 743, 2),
            url: '/2013_HJ_Show_Results_files/stroke_14.png'
        }, {rect: new IWRect(-1, 519, 2, 2), url: '/2013_HJ_Show_Results_files/stroke_15.png'}], new IWSize(745, 520)),
        stroke_0: new IWEmptyStroke(),
        reflection_0: new IWReflection({opacity: 0.00, offset: 2.00}),
        stroke_1: new IWStrokeParts([{
            rect: new IWRect(-1, 1, 2, 190),
            url: '/2013_HJ_Show_Results_files/stroke.png'
        }, {
            rect: new IWRect(-1, -1, 2, 2),
            url: '/2013_HJ_Show_Results_files/stroke_1.png'
        }, {
            rect: new IWRect(1, -1, 255, 2),
            url: '/2013_HJ_Show_Results_files/stroke_2.png'
        }, {
            rect: new IWRect(256, -1, 2, 2),
            url: '/2013_HJ_Show_Results_files/stroke_3.png'
        }, {
            rect: new IWRect(256, 1, 2, 190),
            url: '/2013_HJ_Show_Results_files/stroke_4.png'
        }, {
            rect: new IWRect(256, 191, 2, 2),
            url: '/2013_HJ_Show_Results_files/stroke_5.png'
        }, {
            rect: new IWRect(1, 191, 255, 2),
            url: '/2013_HJ_Show_Results_files/stroke_6.png'
        }, {rect: new IWRect(-1, 191, 2, 2), url: '/2013_HJ_Show_Results_files/stroke_7.png'}], new IWSize(257, 192)),
        stroke_3: new IWPhotoFrame([IWCreateImage('/2013_HJ_Show_Results_files/kid_frame-1_01.jpg'), IWCreateImage('/2013_HJ_Show_Results_files/kid_frame-1_02.jpg'), IWCreateImage('/2013_HJ_Show_Results_files/kid_frame-1_03.jpg'), IWCreateImage('/2013_HJ_Show_Results_files/kid_frame-1_06.jpg'), IWCreateImage('/2013_HJ_Show_Results_files/kid_frame-1_09.jpg'), IWCreateImage('/2013_HJ_Show_Results_files/kid_frame-1_08.jpg'), IWCreateImage('/2013_HJ_Show_Results_files/kid_frame-1_07.jpg'), IWCreateImage('/2013_HJ_Show_Results_files/kid_frame-1_04.jpg')], null, 0, 1.000000, 0.000000, 0.000000, 0.000000, 0.000000, 13.000000, 13.000000, 13.000000, 12.000000, 121.000000, 120.000000, 121.000000, 120.000000, null, null, null, 0.500000),
        shadow_0: new IWShadow({
            blurRadius: 1,
            offset: new IWPoint(0.7071, 0.7071),
            color: '#000000',
            opacity: 0.740000
        })
    });
    registry.applyEffects();
}
function hostedOnDM() {
    return false;
}
function onPageLoad() {
    loadMozillaCSS('/2013_HJ_Show_Results_files/2013_HJ_Show_ResultsMoz.css')
    adjustLineHeightIfTooBig('id2');
    adjustFontSizeIfTooBig('id2');
    adjustLineHeightIfTooBig('id3');
    adjustFontSizeIfTooBig('id3');
    adjustLineHeightIfTooBig('id4');
    adjustFontSizeIfTooBig('id4');
    detectBrowser();
    fixAllIEPNGs('Media/transparent.gif');
    fixupIECSS3Opacity('id1');
    Widget.onload();
    applyEffects()
}
function onPageUnload() {
    Widget.onunload();
}
