import React, { useState } from "react";
import Container from "./Container";
import FolderIcon from '@mui/icons-material/Folder';
import SvgIcon from '@mui/material/SvgIcon';
import './Folder.css'
const Folder = ({ content, depth }) => {
  const [stateContainer, setStateContainer] = useState(null);
  return (
    <div style={{paddingLeft:`${depth}px`}} className="">
      <div className="folder">
        <div className="icon-container">
          <SvgIcon>
            <FolderIcon />
          </SvgIcon>
        </div>
        <p
          onClick={() =>
            setStateContainer((prev) =>
              prev === null ? <Container depth={depth+20} data={content.folder} /> : null
            )
          }
          className='folder-recurse'
        >
          {content.name}
        </p>
      </div>
      {stateContainer}
    </div>
  );
};

export default Folder;
