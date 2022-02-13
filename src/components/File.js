import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SvgIcon from '@mui/material/SvgIcon';
import './Folder.css'
const File = ({ content, depth }) => (
  <div style={{paddingLeft:`${depth}px`}} className="folder">
    <div className="icon-container">
      <SvgIcon>
        <InsertDriveFileIcon />
      </SvgIcon>
    </div>
    <div>
      <p>{content.name}</p>
    </div>
  </div>
  );
  export default File;
  