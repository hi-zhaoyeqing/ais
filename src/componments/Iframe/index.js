import React from "react";

const IframeRenderer = ({ url }) => (
  <iframe id="iframe" src={url} title="你是谁" />
);

export default IframeRenderer;
