import { useEffect, useState } from "react";


export function useOrigin() {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const origin = typeof window !== "undefined" &&  window.location.origin ? location.origin : ""

    if (!isMounted) return ""

    return origin
}