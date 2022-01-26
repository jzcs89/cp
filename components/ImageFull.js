import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://cerampakhsh.com/files/img/lazy/lazygray.jpg?w=${300}&q=${75}`
}

const ImageFull = (props) => {
    let width = parseInt(Number(parseFloat(props.width)))
    let height = parseInt(Number(parseFloat(props.height)))

    if (props.type == 'decor' && (!(width && height))) {
        width = 500
        height = 285
    }
    if (props.type == 'product' && (!(width && height))) {
        width = 300
        height = 300
    }

    return ( <
        Image
        // loader={myLoader}
        // {...props}
        alt = { props.alt ?? '' }
        src = { props.src }
        className = { props.className }
        //   alt={props.alt}
        //   title={props.title}
        // width={(width != 'NAN' && width > 0) ? width : 300}
        // height={(height != 'NAN' && height > 0) ? height : 300}
        // width={Number(parseFloat(props.height)) > 0 ? Number(parseFloat(props.height)) : 300}
        // width={300}
        // width={300}
        {...(
                (props.width && props.height) || props.type == 'product' || props.type == 'decor' ? {
                    // bsStyle: 'success',
                    width: (width != 'NAN' && width > 0) ? width : 300,
                    height: (height != 'NAN' && height > 0) ? height : 300
                } : {
                    layout: "fill"
                }
            )
        }

        />
    )
}

export default ImageFull