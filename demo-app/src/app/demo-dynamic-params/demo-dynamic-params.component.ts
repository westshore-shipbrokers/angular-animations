import { Component, OnInit } from '@angular/core';

import {
  bounceAnimation,
  flashAnimation,
  pulseAnimation,
  rubberBandAnimation,
  shakeAnimation,
  swingAnimation,
  tadaAnimation,
  wobbleAnimation,
  jelloAnimation,
  bounceInAnimation,
  bounceInDownAnimation,
  bounceInLeftAnimation,
  bounceInRightAnimation,
  bounceInUpAnimation,
  bounceOutAnimation,
  bounceOutDownAnimation,
  bounceOutLeftAnimation,
  bounceOutRightAnimation,
  bounceOutUpAnimation,
  fadeInAnimation,
  fadeInDownAnimation,
  fadeInDownBigAnimation,
  fadeInLeftAnimation,
  fadeInLeftBigAnimation,
  fadeInRightAnimation,
  fadeInRightBigAnimation,
  fadeInUpAnimation,
  fadeInUpBigAnimation,
  fadeOutAnimation,
  fadeOutDownAnimation,
  fadeOutDownBigAnimation,
  fadeOutLeftAnimation,
  fadeOutLeftBigAnimation,
  fadeOutRightAnimation,
  fadeOutRightBigAnimation,
  fadeOutUpAnimation,
  fadeOutUpBigAnimation,
  flipAnimation,
  flipInXAnimation,
  flipInYAnimation,
  flipOutXAnimation,
  flipOutYAnimation,
  lightSpeedInAnimation,
  lightSpeedOutAnimation,
  rotateInAnimation,
  rotateInDownLeftAnimation,
  rotateInDownRightAnimation,
  rotateInUpLeftAnimation,
  rotateInUpRightAnimation,
  rotateOutAnimation,
  rotateOutDownLeftAnimation,
  rotateOutDownRightAnimation,
  rotateOutUpLeftAnimation,
  rotateOutUpRightAnimation,
  slideInDownAnimation,
  slideInLeftAnimation,
  slideInRightAnimation,
  slideInUpAnimation,
  slideOutDownAnimation,
  slideOutLeftAnimation,
  slideOutRightAnimation,
  slideOutUpAnimation,
  zoomInAnimation,
  zoomInDownAnimation,
  zoomInLeftAnimation,
  zoomInRightAnimation,
  zoomInUpAnimation,
  zoomOutAnimation,
  zoomOutDownAnimation,
  zoomOutLeftAnimation,
  zoomOutRightAnimation,
  zoomOutUpAnimation,
  hingeAnimation,
  jackInTheBoxAnimation,
  rollInAnimation,
  rollOutAnimation,
  // other
  collapseAnimation,
  rotateAnimation,
  hueRotateAnimation
} from '../../../../lib/';

@Component({
  selector: 'app-demo-dynamic-params',
  templateUrl: './demo-dynamic-params.component.html',
  styleUrls: ['./demo-dynamic-params.component.scss'],
  animations: [
    bounceAnimation(),
    flashAnimation(),
    pulseAnimation({ anchor: 'pulse' }),
    rubberBandAnimation(),
    shakeAnimation(),
    swingAnimation(),
    tadaAnimation(),
    wobbleAnimation(),
    jelloAnimation(),
    bounceInAnimation(),
    bounceInDownAnimation(),
    bounceInLeftAnimation(),
    bounceInRightAnimation(),
    bounceInUpAnimation(),
    bounceOutAnimation(),
    bounceOutDownAnimation(),
    bounceOutLeftAnimation(),
    bounceOutRightAnimation(),
    bounceOutUpAnimation(),
    fadeInAnimation(),
    fadeInDownAnimation(),
    fadeInDownBigAnimation(),
    fadeInLeftAnimation(),
    fadeInLeftBigAnimation(),
    fadeInRightAnimation(),
    fadeInRightBigAnimation(),
    fadeInUpAnimation(),
    fadeInUpBigAnimation(),
    fadeOutAnimation(),
    fadeOutDownAnimation(),
    fadeOutDownBigAnimation(),
    fadeOutLeftAnimation(),
    fadeOutLeftBigAnimation(),
    fadeOutRightAnimation(),
    fadeOutRightBigAnimation(),
    fadeOutUpAnimation(),
    fadeOutUpBigAnimation(),
    flipAnimation(),
    flipInXAnimation(),
    flipInYAnimation(),
    flipOutXAnimation(),
    flipOutYAnimation(),
    lightSpeedInAnimation(),
    lightSpeedOutAnimation(),
    rotateInAnimation(),
    rotateInDownLeftAnimation(),
    rotateInDownRightAnimation(),
    rotateInUpLeftAnimation(),
    rotateInUpRightAnimation(),
    rotateOutAnimation(),
    rotateOutDownLeftAnimation(),
    rotateOutDownRightAnimation(),
    rotateOutUpLeftAnimation(),
    rotateOutUpRightAnimation(),
    slideInDownAnimation(),
    slideInLeftAnimation(),
    slideInRightAnimation(),
    slideInUpAnimation(),
    slideOutDownAnimation(),
    slideOutLeftAnimation(),
    slideOutRightAnimation(),
    slideOutUpAnimation(),
    zoomInAnimation(),
    zoomInDownAnimation(),
    zoomInLeftAnimation(),
    zoomInRightAnimation(),
    zoomInUpAnimation(),
    zoomOutAnimation(),
    zoomOutDownAnimation(),
    zoomOutLeftAnimation(),
    zoomOutRightAnimation(),
    zoomOutUpAnimation(),
    hingeAnimation(),
    jackInTheBoxAnimation(),
    rollInAnimation(),
    rollOutAnimation(),
    // other
    collapseAnimation(),
    rotateAnimation(),
    rotateAnimation({ anchor: 'rotate90', degrees: 90 }),
    hueRotateAnimation(),
    hueRotateAnimation({ anchor: 'hueButton', duration: 20000 })
  ]
})
export class DemoDynamicParamsComponent implements OnInit {
  delay: number;
  duration: number;
  scale: number;
  translate: string;
  degrees: number;

  options = [
    {
      label: 'Attention Seekers',
      animations: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello']
    },
    {
      label: 'Bouncing Entrances',
      animations: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp']
    },
    {
      label: 'Bouncing Exits',
      animations: ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp']
    },
    {
      label: 'Fading Entrances',
      animations: [
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig'
      ]
    },
    {
      label: 'Fading Exits',
      animations: [
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig'
      ]
    },
    {
      label: 'Flippers',
      animations: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY']
    },
    {
      label: 'Lightspeed',
      animations: ['lightSpeedIn', 'lightSpeedOut']
    },
    {
      label: 'Rotating Entrances',
      animations: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight']
    },
    {
      label: 'Rotating Exits',
      animations: ['rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight']
    },
    {
      label: 'Sliding Entrances',
      animations: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight']
    },
    {
      label: 'Sliding Exits',
      animations: ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight']
    },
    {
      label: 'Zoom Entrances',
      animations: ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp']
    },
    {
      label: 'Zoom Exits',
      animations: ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp']
    },
    {
      label: 'Specials',
      animations: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut']
    },
    {
      label: 'Other',
      animations: ['collapse', 'rotate', 'rotate90', 'rotate720', 'hueRotate']
    }
  ];
  animation = 'flipInX';
  animationState = false;

  animate() {
    this.animationState = !this.animationState;
  }

  animationChanged() {
    this.setDefaultParams();
    this.animateAfterChange();
  }

  setDefaultParams() {
    this.duration = 1000;
    this.delay = 0;
    switch (this.animation) {
      case 'pulse': {
        this.scale = 1.05;
        break;
      }
      case 'shake': {
        this.translate = '10px';
        break;
      }
      case 'fadeInDown':
      case 'fadeInUp':
      case 'fadeInLeft':
      case 'fadeInRight':
      case 'fadeOutDown':
      case 'fadeOutUp':
      case 'fadeOutLeft':
      case 'fadeOutRight': {
        this.translate = '100%';
        break;
      }
      case 'fadeInDownBig':
      case 'fadeInUpBig':
      case 'fadeInLeftBig':
      case 'fadeInRightBig':
      case 'fadeOutDownBig':
      case 'fadeOutUpBig':
      case 'fadeOutLeftBig':
      case 'fadeOutRightBig': {
        this.translate = '2000px';
        break;
      }
      case 'flipInX':
      case 'flipInY':
      case 'flipOutX':
      case 'flipOutY': {
        this.degrees = 90;
        break;
      }
    }
  }

  animateAfterChange() {
    setTimeout(() => {
      this.animate();
    }, 1);
  }

  ngOnInit() {
    this.setDefaultParams();
  }
}
