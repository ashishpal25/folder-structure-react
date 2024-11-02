import { useState } from "react";

const Folder = ({ data,trees }) => {
  // console.log(trees)
  // console.log(data);
  const [expand, setExpand] = useState(false);
  const [show, setShow] = useState({
    visiable: false,
      isFolder:null,
  });

  const stop = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShow({
      visiable: true,
      isFolder,
    });
  };

  const add=(e)=>{
    if(e.keyCode===13 && e.target.value){
     trees(data.id,e.target.value,show.isFolder)
    setShow({
      ...show,visiable:false
    })
  }
  }

  if (data.isFolder) {
    return (
      <div>
        <div
          className="d-flex p-2 bg-info m-2"
          onClick={() => setExpand(!expand)}
        >
          <span> 📁{data.name}</span>
          <div className="ms-3 d-flex gap-2">
            <button onClick={(e) => stop(e, true)} className="btn-danger">
              folder +
            </button>
            <button onClick={(e) => stop(e, false)}>file +</button>
          </div>
        </div>

        <div className="ms-4" style={{ display: expand ? "block" : "none" }}>
          {show.visiable && (
            <div>
              <span>{show.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={add}
                autoFocus
                onBlur={() => setShow({ ...show, visiable: false })}
              />
            </div>
          )}
          {data.items.map((item) => {
            return <Folder trees={trees}  key={item.id} data={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="d-flex flex-column"> 📄{data.name}</span>;
  }
};

export default Folder;
