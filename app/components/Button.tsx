"use client"

import { useFormStatus} from "react-dom"

const Button = () => {
    const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="border">{
        pending ? "Submitting..." : "Submit"    
    }</button>
  )
}
export default Button