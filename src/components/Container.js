import React from "react";
import Folder from "./Folder";
import File from "./File";
import './Folder.css'
const Container = ({ data, depth }) => {
  if(!data)
  return null;
  return(<div >
    {data.map((item) => {
      return item?.folder?.length > 0 ? (
        <Folder depth={depth} key={item.id} content={item} />
      ) : (
        <File depth={depth} key={item.id} content={item} />
      );
    })}
  </div>)
};
export default Container;
