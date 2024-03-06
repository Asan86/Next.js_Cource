import React from "react";
import { notFound } from "next/navigation";
function ReviewDetail({
  params,
}: {
  params: {
    productid: string;
    reviewid: string;
  };
}) {
  if (parseInt(params.reviewid) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.productid} for product {params.reviewid}
    </h1>
  );
}

export default ReviewDetail;
