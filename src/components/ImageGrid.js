import React from "react";
import useFireStore from "../hooks/useFireStore";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFireStore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="Imagem" />
          </div>
        ))}
    </div>
  );
}
