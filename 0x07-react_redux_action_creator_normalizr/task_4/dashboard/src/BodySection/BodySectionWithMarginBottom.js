import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}
