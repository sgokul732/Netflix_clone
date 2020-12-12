import React from "react";
import { useHistory } from "react-router-dom";
const SerialInfo = (props) => {
  const {
    id,
    image: { medium },
    summary,
    name,
  } = props.item;
  const history = useHistory();
  const url = `/serials/${id}`;
  return (
    <>
      <img className="mr-3" src={medium} alt="Data Not Available" />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{name}</h5>
        <p>{summary}</p>
        <button className="btn btn-primary" onClick={() => history.push(url)}>
          View Episodes
        </button>
      </div>
    </>
  );
};

export default SerialInfo;
