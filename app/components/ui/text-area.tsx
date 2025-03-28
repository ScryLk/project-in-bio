import { cn } from "@/app/lib/utils";
import React from "react";

export default function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return <textarea {...props} className={cn("bg-background_secondary text-white placeholder:text-content_placeholder rounded-xl border border-transparent hover:border border-secondary hover:text-content_body active:border-border-tertiary", props.className )}></textarea>;
}