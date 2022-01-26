export function ArrowNext(props) {
    return (
        <button type="button" className="fad fa-angle-left fa-slick fa-slick-left" onClick={props.onClick}>‹</button>
    )
}
export function ArrowPrev(props) {
    return (
        <button type="button" className="fad fa-angle-right fa-slick fa-slick-right" onClick={props.onClick}>›</button>
    )
}