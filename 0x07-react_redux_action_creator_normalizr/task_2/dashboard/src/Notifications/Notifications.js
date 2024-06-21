import React, { Component, PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
