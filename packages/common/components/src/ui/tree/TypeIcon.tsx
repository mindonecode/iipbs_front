import React from "react";
import { images } from "@common/assets";

type Props = {
  droppable?: boolean;
  isOpen?: boolean;
};

export const TypeIcon: React.FC<Props> = (props) => {
  if (props.droppable) {
    return (
      <img
        src={props.isOpen ? images.iconFolderOn : images.iconFolderOff}
        width={30}
      />
    );
  }
  return <img src={images.iconFile} width={22} />;
};
