import { useEffect, useState } from "react";

export default function OutsideDivClick(ref, setShow) {
    const [isClicked, setIsClicked] = useState(true);
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShow(true);
            } else {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return isClicked;
}
