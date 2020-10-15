import React, { Component } from "react";

import { connect } from "react-redux";

import { MainContainerWrap } from "../container/Style";

import SamplePage from "../CommonComponents/SamplePage";

import Loader from "../CommonComponents/Loader/Loader";

class DashBoard extends Component {

  render() {
    const { error, loading } = this.props;
    if (error) {
      return <div>Something went wrong !!!!!</div>;
    }

    if (loading) {
      return <Loader />;
    }
    return (
      <MainContainerWrap>
        <SamplePage />
      </MainContainerWrap>
    );
  }
}
const mapStateToProps = (state) => ({
  myFeedItems: state.myFeedItems,
  carouselData: state.carouselData,
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps)(DashBoard);
