import React, { useState } from 'react';
import ReactJoyride from 'react-joyride';

const OnboardingSteps = () => {
  const [joyride, setJoyride] = useState({
    run: false,
    steps: [
      {
        // title: "Welcome to react-joyride!",
        target: "body",
        placement: "center",
        content: <div ><h1 className="fontS-16 mb-2">نقشه نمایندگی </h1><p className="text-justify mb-0 fontS-12">مطمنا برای شما هم پیش امده که به دنبال یک نمایندگی یا برند خاص از محصولات حوزه مصالح ساختمانی از جمله کاشی سرامیک و ... بودید ولی به نتیجه ای نرسیده باشید .
        در همین راستا سرام پخش اولین نقشه هوشمند فعالان صنف مصالح ساختمانی ایران را طراحی و پیاده سازی کرده تا کاربران با مراجعه به این نقشه بتوانند به راحتی و با چند کلیک به اطلاعات کاملی نمایندگی های فروش مصالح ساختمانی کل ایران دسترسی داشته باشند .
        </p></div>,
        disableBeacon: true,
        locale: { back: 'قبلی', close: 'خروج', last: 'پایان', next: 'بعدی', open: 'باز کن', skip: 'رد کن' }
      },
      {
        title: "انتخاب تامین کننده",
        target: ".item-num1",
        content: <p className="text-justify mb-0">با کلیک بر روی این قسمت می توانید از لیست تامین کنندگان، برند مورد نظر خود را جستجو کنید.</p>,
        placement: "right-start",
        locale: { back: 'قبلی', close: 'خروج', last: 'پایان', next: 'بعدی', open: 'باز کن', skip: 'رد کن' }
      },
      {
        title: "انتخاب استان",
        target: ".item-num2",
        placement: "right-start",
        content:<p className="text-justify mb-0">از این قسمت استان نمایندگی مد نظر خود را پیدا کنید.</p>,
        locale: { back: 'قبلی', close: 'خروج', last: 'پایان', next: 'بعدی', open: 'باز کن', skip: 'رد کن' }

      },
      {
        title: "انتخاب نمایندگی",
        target: ".item-num3",
        placement: "right-start",
        content: <p className="text-justify mb-0"> با فعال کردن این دکمه به لیست نمایندگی ها برای جستجوی نمایندگی مورد نظر خود برسید.</p>,
        locale: { back: 'قبلی', close: 'خروج', last: 'پایان', next: 'بعدی', open: 'باز کن', skip: 'رد کن' }

      },
    ]
  });

  return (<React.Fragment>
    <div className="joybtn" style={{ margin: "auto" }}>
      <button
        onClick={() => { setJoyride({ ...joyride, run: !joyride.run }) }}
        style={{
          // display: "block", position: "relative", color: "#FA434B", textDecoration: "none", overflow: "hidden", padding: "5px", borderRadius: "5px",  margin: "auto",      
          // backgroundColor: "#ff0044", color: "white", border: "none", fontSize: "24px", padding: "15px 32px", cursor: "pointer", borderRadius: "10px"
         }}>راهنمای نقشه</button>
    </div>
    <ReactJoyride
      steps={joyride.steps}
      run={joyride.run}
      continuous
      showProgress
      showSkipButton />
  </React.Fragment>);
};

export default OnboardingSteps