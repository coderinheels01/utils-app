import { useState } from "react";

const Folder = ({ folder }) => {
  const [expanded, setExpended] = useState(false);
  if (folder.isFolder) {
    return (
      <div>
        <div onClick={() => setExpended(prev => !prev)}>
          <i
            className="fa fa-folder"
            aria-hidden="true"
            style={{ paddingRight: "10px" }}
          />
          {folder.name}
        </div>
        <div
          style={{
            display: expanded ? "block" : "none",
            paddingLeft: "10px"
          }}
        >
          {folder.items.map(data => {
            return <Folder key={data.name} folder={data} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <i
          className="fa fa-file"
          aria-hidden="true"
          style={{ paddingRight: "10px" }}
        />
        {folder.name}
      </div>
    );
  }
};
export default Folder;
