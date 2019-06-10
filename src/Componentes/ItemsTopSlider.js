import React from 'react';
const ItemsTopSlider = props =>(
    props.sections.map((section, index) =>(
       <li key={index} data-index={'rs-690'+index} data-transition="fadethroughdark" data-slotamount="default" data-easein="default"
       data-easeout="default" data-masterspeed={props.speed || 2000} data-thumb={section.img} data-rotate="0"
       data-saveperformance="off" data-title={section.name} data-param1={index+1} data-description="">
       <img src={section.img} alt="" data-bgposition="center center" data-bgfit="cover"
           data-bgrepeat="no-repeat" data-bgparallax="4" className="rev-slidebg" data-no-retina />

       <div className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-tobggroup" id="slide-690-layer-1"
           data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
           data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full"
           data-height="full" data-whitespace="nowrap" data-transform_idle="o:1;"
           data-transform_in="opacity:0;s:1500;e:Power2.easeInOut;"
           data-transform_out="opacity:0;s:1500;e:Power2.easeInOut;s:1500;e:Power2.easeInOut;" data-start={props.timeStart || 150}
           data-basealign="slide" data-responsive_offset="off" data-responsive="off"
           style={{zIndex: 5, backgroundColor:'rgba(18, 12, 20, 0.4)', borderColor:'rgba(0, 0, 0, 0)'}}>
       </div>

       <div className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-3" id="slide-690-layer-4"
           data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
           data-y="['middle','middle','middle','middle']" data-voffset="['-178','-178','-168','-141']"
           data-width="1" data-height="100" data-whitespace="nowrap" data-transform_idle="o:1;"
           data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
           data-transform_out="y:[100%];s:500;e:Power1.easeIn;s:500;e:Power1.easeIn;"
           data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
           data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={props.timeStart + 500 || 150}
           data-responsive_offset="on" data-responsive="off"
           style={{zIndex: 6, backgroundColor:'#9f5539',borderColor:'rgba(0, 0, 0, 0)'}}>
       </div>

       <div className="tp-caption Creative-SubTitle tp-resizeme rs-parallaxlevel-2" id="slide-690-layer-3"
           data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
           data-y="['middle','middle','middle','middle']" data-voffset="['-91','-91','-81','-64']"
           data-fontsize="['14','14','14','12']" data-lineheight="['14','14','14','12']" data-width="none"
           data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;"
           data-transform_in="y:50px;opacity:0;s:1500;e:Power3.easeOut;"
           data-transform_out="x:0;y:0;z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
           data-start={props.timeStart + 1000 || 150} data-splitin="none" data-splitout="none" data-responsive_offset="on"
           style={{zIndex: 7, whiteSpace: 'nowrap', textAlign:'center'}}>{section.title1}
       </div>

       <div className="tp-caption Creative-Title tp-resizeme rs-parallaxlevel-1" id="slide-690-layer-2"
           data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
           data-y="['middle','middle','middle','middle']" data-voffset="['-10','-10','-10','-10']"
           data-fontsize="['70','70','50','40']" data-lineheight="['70','70','55','45']"
           data-width="['none','none','none','320']" data-height="none" data-whitespace="nowrap"
           data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:1500;e:Power3.easeOut;"
           data-transform_out="x:0;y:0;z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
           data-start={props.timeStart+1500 || 150} data-splitin="none" data-splitout="none" data-responsive_offset="on"
           style={{zIndex: 8, whiteSpace: 'nowrap', textAlign:'center'}}>
               {section.title2}
       </div>

       <div className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-3" id="slide-690-layer-5"
           data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
           data-y="['middle','middle','middle','middle']" data-voffset="['137','137','119','100']"
           data-width="1" data-height="100" data-whitespace="nowrap" data-transform_idle="o:1;"
           data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
           data-transform_out="y:[-100%];s:500;e:Power1.easeIn;s:500;e:Power1.easeIn;"
           data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
           data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={props.timeStart+2000 || 150}
           data-responsive_offset="on" data-responsive="off"
           style={{zIndex: 9, backgroundColor:'#9f5539', borderColor:'rgba(0, 0, 0, 0)'}}>
       </div>

       <div className="tp-caption Creative-Button rev-btn rs-parallaxlevel-15" id="slide-690-layer-6"
           data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
           data-y="['top','top','top','top']" data-voffset="['694','611','689','540']"
           data-fontweight="['400','500','500','500']" data-width="none" data-height="none"
           data-whitespace="nowrap" data-transform_idle="o:1;"
           data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"
           data-style_hover="c:rgba(205, 176, 131, 1.00);bc:rgba(205, 176, 131, 1.00);cursor:pointer;"
           data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power2.easeOut;"
           data-transform_out="x:0;y:0;z:0;rX:0;rY:0;rZ:0;sX:0.75;sY:0.75;skX:0;skY:0;opacity:0;s:500;e:Power1.easeIn;s:500;e:Power1.easeIn;"
           data-start={props.timeStart+2500 || 150} data-splitin="none" data-splitout="none"
           data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'
           data-responsive_offset="on" data-responsive="off"
           style={{zIndex: 10, whiteSpace: 'nowrap',outline:'none', boxShadow:'none', boxSizing:'border-box',MozBoxSizing:'border-box', WebkitBoxSizing:'border-box'}}>
           {section.labelbottom}
       </div>
   </li>
    ))
);
export default ItemsTopSlider;