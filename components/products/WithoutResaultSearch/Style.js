import React from 'react';

function Style(props) {
    return (
        <style jsx global>{`
        
        .wonder-full-btn .importantkashi-img {
            filter: brightness(19.5);
            color: white;
            font-weight:300;
        }
        .wonder-full-btn .importantkashi-img h6 {
            color: white;
            /* font-weight: 300; */
            font-size: 14px !important;
        }
        
        .Search-Result .search-resault-img {
            max-width: 700px;
            margin: auto;
        }

.Search-Result .Search-Result-Box .alert1 {
    border: 1px solid #f6ed96;
    background: #fcfcd2;
}

.Search-Result .dastebandi .col-dastebandi h6 {
    font-size: 13px;
}

.Search-Result .dastebandi .col-dastebandi .importantkashi-img img {
    width: 42px;
}

.Search-Result .better-result .square {
    background: #23c4bb;
    width: 12px;
    margin: auto;
    margin-top: 4px;
    height: 12px;
    top: 11%;
}

.Search-Result .body-of-typeoftile {
    max-width: 145px;
}
.bg-khakestari {
    background: #f3f3f3;
}
@media (min-width: 1200px) and (max-width:1400px) {
    .col-dastebandi {
        flex: 0 0 12.666667%;
        max-width: 16.666667%;
    }
}

@media (min-width: 320px) and (max-width:575px) {
    .Search-Result p {
        font-size: 13px;
    }
}


      `}</style>
    );
}

export default Style;