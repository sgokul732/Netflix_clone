import React from "react";
import { useHistory } from "react-router-dom";
import noData from "../../assets/images/no-data.png";
const SerialInfo = (props) => {
  const { id, image, summary, name } = props.item;
  const history = useHistory();
  const url = `/serials/${id}`;
  let thumbnail = noData;
  if (image && image.medium) {
    thumbnail = image.medium;
  }

  return (
    <>
      <img className="mr-3" src={thumbnail} alt="Data Not Available" />
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
