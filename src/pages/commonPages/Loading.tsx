import React from "react";
import { Flex, Spin } from "antd";

const Loading: React.FC = () => (
  <Flex gap="middle" vertical>
    <Spin tip="Loading..." size="large"></Spin>
  </Flex>
);

export default Loading;
