import React from "react";

import styled from "styled-components";
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";

const CustomBox = styled.div``;

function TestPage() {


  return (
    <CustomBox>
      <Layout>
        <Helmet>
          <body id="body" className="test" />
        </Helmet>

        <div className="scroll-container">

        </div>
      </Layout>
    </CustomBox>
  );
}









export default TestPage;
