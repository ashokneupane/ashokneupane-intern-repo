import { useEffect } from "react";
export default function UseEffectHook() {
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);
}
