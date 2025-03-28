import { cn } from "@/app/lib/utils";

export default function TextInput(  props: React.InputHTMLAttributes<HTMLInputElement>
){
  return (
    <input {...props} className={cn("w-full p-3 bg-background_secondary text-white placeholder:text-content_placeholder rounded-xl border border-transparent hover:border-border-secondary hover:text-content_body active:border-border-tertiary", props.className)}/>
  )
}