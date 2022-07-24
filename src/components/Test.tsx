import React from "react";
import { FilterBar } from "./FilterBar";
import { Header } from "./Header";
import { InfiniteQuery } from "./InfiniteQuery";
import { InfiniteScrollV2 } from "./infiniteScrollV2";
import { Data } from "./data";

export const Test = () => {
  const path = `http://kjh.pricegolf.co.kr:8080/api/v1/market-price/models`;
  return (
    <div>
      <Header />
      <InfiniteQuery path={path} />
      <Data />
    </div>
  );
};
