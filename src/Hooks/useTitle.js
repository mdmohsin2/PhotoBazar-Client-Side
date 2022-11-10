import { useEffect } from "react"


const useTitle =title=>{
    useEffect(()=>{
        document.title = `${title} - Photo Bazar`
    },[title])
}

export default useTitle;