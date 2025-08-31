"use client"
import { createCamps } from "@/utils/actions"
import Button from "./Button";
import { useActionState } from "react"

const Form = () => {
    const [message, formAction] = useActionState(createCamps, null);
  return (
    <>
    {message && <h1>{message}</h1>}
    <form action={formAction}>
        <input placeholder="Camping Name" name="title" className="border" defaultValue="Hello world" />
        <input placeholder="location" name="location" className="border" defaultValue="location" />
        <Button />
    </form>
    </>
  )
}
export default Form