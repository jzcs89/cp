import Document, { Html, Head, Main, NextScript } from 'next/document'
import Config from '../configs/Cerampakhsh'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="fa">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="content-Type" content="text/html; charset=UTF-8" />

                    <meta name="theme-color" content="#000000" />
                   
                    <meta name="msvalidate.01" content="" />
                    <meta name="twitter:site" content="@rastegarimasoud" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />


                    <meta property="og:image" content={Config.logo} />
                    <meta property="og:url" content="https://cerampakhsh.com" />
                    <meta property="og:title" content={Config.title} />
                    <meta property="og:description" content=" سرام پخش معتبرترین فروشگاه اینترنتی کاشی و سرامیک است که خرید و فروش آنلاین انواع کاشی های آشپزخانه، سرویس بهداشتی، استخری، پرسلان را با دکوراسیون های زیبا و به همراه نظرات و مشاوره تخصصی و رایگان، امکان پذیر کرده است. ما به سه اصل: پرداخت در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا پایبند هستیم."
                    />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:image" content={Config.logo} />
                    <meta name="twitter:url" content="https://cerampakhsh.com" />
                    <meta name="twitter:title" content={Config.title} />
                    <meta name="twitter:description" content=" سرام پخش معتبرترین فروشگاه اینترنتی کاشی و سرامیک است که خرید و فروش آنلاین انواع کاشی های آشپزخانه، سرویس بهداشتی، استخری، پرسلان را با دکوراسیون های زیبا و به همراه نظرات و مشاوره تخصصی و رایگان، امکان پذیر کرده است. ما به سه اصل: پرداخت در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا پایبند هستیم."
                    />
                    <meta name="twitter:type" content="website" />
                    <meta name="twitter:card" content="https://cerampakhsh.com/files/img/cplogo.png" />

                    <link rel="shortcut icon" href={Config.faveicon} type="image/icon" />

                    <meta property="og:site_name" content={Config.title} />

                    <link rel="icon" href={Config.faveicon} />
                    
                    <link rel="apple-touch-icon" href={Config.logo} />



                    {/* ///////////////////////////////////// */}

                    <link rel="manifest" href="/manifest.json" />
                    <meta name="twitter:creator" content="@rastegarimasoud" />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "url": "http://cerampakhsh.com",
                                "name": "فروشگاه اینترنتی کاشی و سرامیک سرام پخش.",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+98-35-38274760",
                                    "contactType": "فروش انلاین کاشی و سرامیک و اکسسوری"
                                },
                                "sameAs": [
                                    "https://twitter.com/rastegarimasoud",
                                    "https://www.facebook.com/Cerampakhsh-462283141174293",
                                    "https://www.instagram.com/cerampakhsh/?hl=en",
                                    "https://www.linkedin.com/in/iranmara/"
                                ],
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "یزد، صفائیه، بلوار دانشگاه، ساختمان کالج، طبقه دوم، واحد 9",
                                    "postalCode": "8915835404",
                                    "addressCountry": "IR"
                                }
                            })
                        }}
                    />




                    <link rel="preload" href="https://cerampakhsh.com/static/media/iranyekan.66f1e683.woff2" as="font" type="font/woff2" crossOrigin="true" />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w, d, s, l, i) {
                                w[l] = w[l] || [];
                                w[l].push({
                                    'gtm.start': new Date().getTime(),
                                    event: 'gtm.js'
                                });
                                var f = d.getElementsByTagName(s)[0],
                                    j = d.createElement(s),
                                    dl = l != 'dataLayer' ? '&l=' + l : '';
                                j.async = true;
                                j.src =
                                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                                f.parentNode.insertBefore(j, f);
                            })(window, document, 'script', 'dataLayer', 'GTM-TWFFBP3');`
                        }}
                    />
                </Head>
                <body>
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWFFBP3"
                        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>


                    <Main />
                    <NextScript />


                    <script
                        dangerouslySetInnerHTML={{
                            __html: `$(function() {
                                $('[data-toggle="tooltip"]').tooltip()
                                    // $(document).on('dropdown', '.dropdown-toggle')
                                $('.dropdown-toggle').dropdown()
    
    
                                $('[data-toggle="popover"]').popover();
    
                            })`
                        }}
                    />

                </body>
            </Html>
        )
    }
}

export default MyDocument