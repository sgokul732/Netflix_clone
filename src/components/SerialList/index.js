import React from "react";
import SerialInfo from "../SerialInfo";
import { connect } from "react-redux";
import loading from "../../assets/images/loading.png";
import noData from "../../assets/images/no-data.png";
import "./style.css";
const SerialList = (props) => {
  if (props.loading || !props.getSerials)
    return <img src={loading} alt="Loading" />;
  if (props.error || !props.getSerials.length)
    return <img src={noData} alt="No Data Available" />;
  return props.getSerials.map((item, index) => {
    return (
      <ul key={index}>
        <li className="media">
          <SerialInfo item={item} />
        </li>
      </ul>
    );
  });
};
const mapStateToProps = (state) => {
  return {
    getSerials: state.SearchSerialReducer.data,
    loading: state.SearchSerialReducer.loading,
    error: state.SearchSerialReducer.error,
  };
};
export default connect(mapStateToProps, null)(SerialList);
