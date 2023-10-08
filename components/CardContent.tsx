import { CardContentProps } from "@/types";
export default function CardContent({ content }: CardContentProps) {
  return <p className="text-sm whitespace-pre-wrap mt-2 lg:mt-3">{content}</p>;
}
