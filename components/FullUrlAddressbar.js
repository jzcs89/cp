import { useRouter } from "next/router"
import { website } from "../Services/Helper"

const FullUrlAddressbar = () =>{
    let router = useRouter()

    return website+router.asPath;
}
export default FullUrlAddressbar