import React from 'react';

function Style(props) {
    return ( < style jsx global > { `
        .spc-brands {
            background: url("https://cerampakhsh.com/files/img/svg/Factory.svg");
            background-position: bottom;
            background-size: contain;
            background-repeat: no-repeat;
            padding-bottom: 8%;
            overflow-y: hidden;
        }
        
        .spc-brands .spc-brands-header {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            font-size: 16px !important;
            border-bottom: 1px solid #f5f5f5;
            font-weight: 400;
            margin: auto;
            border: 0;
            text-align: right;
            color: #525252;
            z-index: 9;
            font-family: "iranyekanregular";
            font-weight: bold;
            position: relative;
            line-height: 41px;
        }
        
        .spc-brands .spc-brands-header .spc-barnds-title p {
            padding-right: 1.5rem;
            font-weight: bold;
            margin-bottom: 0;
            font-size: 19px;
            color: #262626de;
            padding: 10px 30px;
        }
        
        .spc-brands .spc-brands-header::before {
            content: "";
            right: 0px;
            width: 14px;
            height: 75%;
            position: absolute;
            top: 13%;
            background: #00bcd4;
            border-radius: 4px 0 0 4px;
        }
        
        .spc-brands .spc-brands-header .spc-barnds-title a {
            padding-right: 1.5rem;
            font-weight: bold;
            margin-bottom: 0;
            font-size: 19px;
            line-height: 41px;
            color: #262626de;
            padding: 10px 30px;
        }
        
        .spc-brands .spc-brands-header .read-more .read-more-home a {
            font-size: 19px;
        }
        
        .spc-brands .spc-barnds-title::before {
            content: "";
            right: 0;
            width: 14px;
            height: 75%;
            position: absolute;
            top: 13%;
            background: #00bcd4;
            border-radius: 4px 0 0 4px;
        }
        
        .spc-brands .boxoff-txt .read-more.read-more-home a,
        .spc-brands .boxoff-txt-hdr .read-more.read-more-home a {
            color: #222 !important;
            position: relative;
            padding: 4px 10px 4px 10px;
            border-radius: 9px;
            margin-left: -6px;
            position: absolute;
            left: 0px;
            top: calc(50% - 14px);
            background: #d9f4f2;
            line-height: 27px;
            font-weight: 100;
        }
        
        .spc-brands .spc-brands-cards .spc-brands-card {
            box-shadow: 1px 2px 6px 1px #00000013;
            max-width: 185px;
            margin: 0.5rem;
        }
        
        .spc-brands .spc-brands-cards {
            margin-top: 3rem;
        }
        /* .spc-brands .spc-brands-header .read-more-spcbrand {
            font-size: 15px;
            padding: 0.5rem 0.5rem;
            background: #ebf2fa;
            border-radius: 10px;
            height: 36px;
            margin-top: 12px;
            margin-right: 23px;
        }
        
        @media (max-width:463px) {
            .spc-brands .spc-brands-header .read-more-spcbrand {
                font-size: 13px;
                font-weight: 300px;
                margin-top: 0px;
            }
        } */
        /* .spc-brands .read-more-spcbrand AngleLeft {
            fill: #58c1b0;
        }
         */
        
        .spc-brands .spc-barnds-title .read-more-spcbrand span {
            color: #000;
        }
        
        .spc-brands .spc-brand-img img {
            width: 100%;
        }
        
        .spc-brands .spc-brand-img .spc-brands-card-icon {
            width: 30%;
        }
        
        .spc-brands .spc-brand-img {
            position: relative;
        }
        
        .spc-brands .spc-brands-card p {
            line-height: 16px;
        }
        
        .spc-brands .spc-brand-img .spc-brand-img-border-bottom1 {
            border-bottom: 2px solid #15b3aa;
        }
        
        .spc-brands .spc-brand-img .spc-brand-img-border-bottom2 {
            border-bottom: 2px solid #ab5104;
        }
        
        .spc-brands .spc-brand-img .spc-brand-img-border-bottom3 {
            border-bottom: 2px solid #0d9b7a;
        }
        
        .spc-brands .spc-brand-img .spc-brand-img-border-bottom4 {
            border-bottom: 2px solid #8f3501;
        }
        
        .spc-brands .spc-brand-img .spc-brand-img-border-bottom5 {
            border-bottom: 2px solid #e57074;
        }
        
        .spc-brands .spc-brand-img .spc-brands-card-icon {
            position: absolute;
            bottom: 9%;
            left: 50%;
            transform: translate(-50%, 59%);
            width: 57px;
        }
        
        .spc-brands .spc-brand-img .spc-brands-card-icon img {
            border-radius: 12px;
            box-shadow: 1px 2px 6px 1px #00000012;
        }
        
        .spc-brands .item-spc-brands-img {
            border: 1px solid #f3f1f2;
            border-radius: 5px;
            padding: 5px;
            margin: 2px;
            height: auto;
        }
        
        .spc-brands .spc-brands-card {
            border-radius: 4px;
        }
        
        .spc-brands .spc-brands-card .spc-brands-cards {
            margin: auto;
        }
        
        .spc-brands .spc-brands-cards .spc-brands-card a {
            color: #fff;
        }
        
        .spc-brands .spc-brands-cards .spc-brands-card svg path {
            fill: #fff;
        }
        
        .col-ak {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
        
        .container-full-screen {
            width: 100%;
            padding-right: 0;
            padding-left: 0;
            margin-right: auto;
            margin-left: auto;
        }
        
        .spc-brands .spc-brands-cards .bg-btn1 {
            background: linear-gradient( 45deg, #2bb7e8 1%, #1ecad6);
        }
        
        .spc-brands .spc-brands-cards .bg-btn2 {
            background: linear-gradient( 45deg, #de9d43 1%, #ab8449);
        }
        
        .spc-brands .spc-brands-cards .bg-btn3 {
            background: linear-gradient( 45deg, #30c6bd 1%, #0f8e85);
        }
        
        .spc-brands .spc-brands-cards .bg-btn4 {
            background: linear-gradient( 45deg, #cb987d 1%, #ad6743);
        }
        
        .spc-brands .spc-brands-cards .bg-btn5 {
            background: linear-gradient( 45deg, #e78f92 1%, #e56b6f);
        }
        
        .spc-brands .spc-brands-cards .btn-spcbrand {
            font-size: 13px;
            padding: 12px 5px;
            display: block;
            direction: rtl;
            text-align: center;
            width: 100%;
        }
        
        .spc-brands .read-more-spcbrand.read-more-home svg {
            fill: #0d9b7a !important;
        }
        
        input[type=range] {
            height: 25px;
            -webkit-appearance: none;
            margin: 10px 0;
            min-width: 200px;
            background: transparent;
        }
        
        input[type=range]:focus {
            outline: none;
        }
        
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 5px;
            cursor: pointer;
            animate: 0.2s;
            box-shadow: 0px 0px 0px #000000;
            background: #2497E3;
            border-radius: 3px;
            border: 0px solid #000000;
        }
        
        input[type=range]::-webkit-slider-thumb {
            box-shadow: 0px 0px 0px #000000;
            border: 1px solid #2497E3;
            height: 18px;
            width: 18px;
            border-radius: 25px;
            background: #A1D0FF;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -7px;
        }
        
        input[type=range]:focus::-webkit-slider-runnable-track {
            background: #2497E3;
        }
        
        input[type=range]::-moz-range-track {
            width: 100%;
            height: 5px;
            cursor: pointer;
            animate: 0.2s;
            box-shadow: 0px 0px 0px #000000;
            background: #2497E3;
            border-radius: 1px;
            border: 0px solid #000000;
        }
        
        input[type=range]::-moz-range-thumb {
            box-shadow: 0px 0px 0px #000000;
            border: 1px solid #2497E3;
            height: 18px;
            width: 18px;
            border-radius: 25px;
            background: #A1D0FF;
            cursor: pointer;
        }
        
        input[type=range]::-ms-track {
            width: 100%;
            height: 5px;
            cursor: pointer;
            animate: 0.2s;
            background: transparent;
            border-color: transparent;
            color: transparent;
        }
        
        input[type=range]::-ms-fill-lower {
            background: #2497E3;
            border: 0px solid #000000;
            border-radius: 2px;
            box-shadow: 0px 0px 0px #000000;
        }
        
        input[type=range]::-ms-fill-upper {
            background: #2497E3;
            border: 0px solid #000000;
            border-radius: 2px;
            box-shadow: 0px 0px 0px #000000;
        }
        
        input[type=range]::-ms-thumb {
            margin-top: 1px;
            box-shadow: 0px 0px 0px #000000;
            border: 1px solid #2497E3;
            height: 18px;
            width: 18px;
            border-radius: 25px;
            background: #A1D0FF;
            cursor: pointer;
        }
        
        input[type=range]:focus::-ms-fill-lower {
            background: #2497E3;
        }
        
        input[type=range]:focus::-ms-fill-upper {
            background: #2497E3;
        }
        /* //Responsive */
        
        @media (max-width:600px) {
            .p-mobile-0 {
                padding: 0!important;
            }
        }
        
        @media (max-width:991px) {
            .spc-brands .spc-brands-cards .spc-brands-card p {
                font-size: 0.7rem;
            }
            .spc-brands .spc-brands-cards .spc-brands-card a span {
                font-size: 0.7rem;
            }
        }
        
        @media (min-width:1200px) and (max-width:3000px) {
            .spc-brands .spc-brands-cards {
                margin: 3rem 9rem;
            }
        }
        
        @media (min-width:1024px) and (max-width:1200px) {
            .spc-brands .spc-brands-cards {
                margin: 3rem 3.2rem;
            }
        }
        
        @media (min-width:900px) and (max-width:1023px) {
            .spc-brands .spc-brands-cards {
                margin: 3rem 2.5rem;
            }
        }
        
        @media (min-width:768px) and (max-width:899px) {
            .spc-brands .spc-brands-cards {
                margin: 3rem 0.5rem;
            }
        }
        
        @media (min-width:200px) and (max-width:1023px) {
            .spc-brands .spc-brands-cards .spc-brands-card {
                margin: auto;
            }
        }
        `}</style>
        );
    }
    
    export default Style;