import React, { useEffect, useState } from "react";

import moment from "moment";

function DeliveryScheduler() {
  const saleInvoiceDeliverySchedule = [
    {
      __typename: "SaleInvoiceItemSchedule",
      itemId: 29,
      itemNameArabic: null,
      itemNameEnglish: "expensive product",
      remainingQuantity: 4,
      totalQuantity: 10,
      dates: [
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: "2022-05-25T11:55:09.855Z",
          quantity: 4,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: null,
          quantity: 0,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: "2022-05-26T12:39:13.041Z",
          quantity: 2,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: null,
          quantity: 0,
        },
      ],
    },
    {
      __typename: "SaleInvoiceItemSchedule",
      itemId: 36,
      itemNameArabic: "",
      itemNameEnglish: "Lane Peck",
      remainingQuantity: 7,
      totalQuantity: 10,
      dates: [
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: "2022-05-25T11:55:09.855Z",
          quantity: 7,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: "2022-05-25T11:55:09.855Z",
          quantity: 4,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: null,
          quantity: 0,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: null,
          quantity: 0,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: "2022-05-27T12:47:30.398Z",
          quantity: 2,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: null,
          quantity: 0,
        },
      ],
    },
    {
      __typename: "SaleInvoiceItemSchedule",
      itemId: 47,
      itemNameArabic: null,
      itemNameEnglish: "Return Test",
      remainingQuantity: 3,
      totalQuantity: 5,
      dates: [
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: "2022-05-28T11:55:09.855Z",
          quantity: 1,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: null,
          quantity: 0,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: null,
          quantity: 0,
        },
        {
          __typename: "SaleInvoiceItemScheduleDate",
          date: null,
          quantity: 0,
        },
      ],
    },
  ];
  const [UniqueDate, SetUniqueDate] = useState([]);
  useEffect(() => {
    // const newItemDate = [];
    // saleInvoiceDeliverySchedule.map((fullitem) => {
    //   fullitem.dates.map((dateitem) => {
    //     const isvalidDate = moment(dateitem.date);
    //     // console.log(isvalidDate.isValid());
    //     if (isvalidDate.isValid()) {
    //       const onlydateString = moment(dateitem.date).format("YYYY-MM-DD");
    //       //   console.log(onlydateString, "only date string");
    //       if (UniqueDate.length == 0) {
    //         SetUniqueDate([...UniqueDate, onlydateString]);
    //       } else if (UniqueDate.length > 0) {
    //         if (!UniqueDate.includes(onlydateString)) {
    //           console.log(onlydateString, "here are unique dates");
    //           SetUniqueDate([...UniqueDate, onlydateString]);
    //         }
    //       }
    //       const SingleDateIdObj = {
    //         date: onlydateString,
    //         itemId: fullitem.itemId,
    //         quantity: dateitem.quantity,
    //         itemNameArabic: fullitem.itemNameArabic,
    //         itemNameEnglish: fullitem.itemNameEnglish,
    //         remainingQuantity: fullitem.remainingQuantity,
    //         totalQuantity: fullitem.totalQuantity,
    //       };
    //       newItemDate.push(SingleDateIdObj);
    //     }
    //   });
    // });
    // // console.log(newItemDate, "new item date");
    // let output = [];
    // let itemIdToIndexMap = {};
    let rawDates = [];
    saleInvoiceDeliverySchedule.map((ids) =>
      ids.dates.map((date) => {
        if (date.date) {
          rawDates.push(moment(date.date).format("DD-MM-YYYY"));
        }
      })
    );

    let uniqueArray = rawDates.filter(function (item, pos, self) {
      //   console.log(item, pos, self, self.indexOf(item));
      return self.indexOf(item) == pos;
    });
    console.log(uniqueArray);
  }, []);

  return (
    <div className="main-list">
      <div className="header">
        <p className="h-item">Header 1</p>
        <p className="h-item">Header 2</p>
        <p className="h-item">Header 3</p>
      </div>
      <div className="content">
        <p className="m-item">content 1</p>
        <p className="m-item">content 1</p>
        <p className="m-item">content 1</p>
      </div>
    </div>
  );
}

export default DeliveryScheduler;
