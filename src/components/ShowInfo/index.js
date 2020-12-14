import React, { useEffect } from "react";
import { fetchShowDetails } from "../../actions/SearchSerial";
import { connect } from "react-redux";
import loadingImg from "../../assets/images/loading.png";
import noData from "../../assets/images/no-data.png";
import "./style.css";
const ShowInfo = (props) => {
  const {
    match: {
      params: { id },
    },
    getSerialDetail,
    details,
    error,
    loading,
  } = props;
  useEffect(() => {
    getSerialDetail(id);
  }, [id]);

  if (loading || !details) {
    return <img src={loadingImg} alt="Loading" />;
  }
  if (error) return <img src={noData} alt="No Data Available" />;

  let thumbnail=noData;
  if(details.image && details.image.original){
    thumbnail=details.image.original
  }
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <p className="card-text">{details.summary}</p>
      </div>
      <img
        className="card-img-bottom"
        src={thumbnail}
        alt="Serial Not Available"
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    details: state.ShowDetailReducer.data,
    loading: state.ShowDetailReducer.loading,
    error: state.ShowDetailReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSerialDetail: (key) => dispatch(fetchShowDetails(key)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowInfo);
