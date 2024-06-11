import { ReactNode } from "react";

interface DraftBoxProps {
  demo: ReactNode;
  tag: string;
  isTag?: boolean;
}

const DraftBox = ({ demo, tag, isTag = true }: DraftBoxProps) => {
  return (
    <div className="draft-box">
      <div className="draft-box__demo">{demo}</div>
      <span className={isTag ? "tag" : undefined}>{tag}</span>
    </div>
  );
};

export default DraftBox;
