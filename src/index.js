import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "antd/dist/antd.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import DeliveryScheduler from "./DeliveryScheduler";

const client = new ApolloClient({
  uri: "http://3.109.130.89:8080/graphql/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <DeliveryScheduler />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
