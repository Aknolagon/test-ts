import { PropsWithChildren } from "react";

type MessageVariant = "RIGHT" | "LEFT";

type MessageProps = PropsWithChildren<{
  author: string;
  variant?: MessageVariant;
}>;

export const Message = ({
  author,
  children,
  variant = "RIGHT",
}: MessageProps) => {
  return (
    <div>
      <p style={{ display: "flex", flexDirection: variant === "RIGHT" ? "row" : "row-reverse",
    }}>
      <b>{author}</b> : {children}
      </p>
    </div>
  );
};
