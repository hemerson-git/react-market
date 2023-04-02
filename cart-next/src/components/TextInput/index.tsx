import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & {

}

export function TextInput({ ...rest }: Props) {
  return (
    <input className="placeholder-gray-400 text-zinc-900 rounded-md py-1 px-2 w-full" {...rest}/>
  )
}
