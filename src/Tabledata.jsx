import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import { getSuppliers, useGetAllSuppliers } from "./gql/GetAllSuppliers";
import { useQuery } from "@apollo/client";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "nameArabic",
    dataIndex: "nameArabic",
  },
];

function Tabledata() {
  //   const { error, data, loading, fetchMore } = useGetAllSuppliers();
  const { error, data, loading, fetchMore } = useQuery(getSuppliers, {
    variables: {
      first: 5,
      after: null,
    },
  });

  const [tabledata, settableData] = useState([]);

  useEffect(() => {
    if (data) {
      settableData(data.suppliers.nodes);
    }
  }, [data]);

  console.log(fetchMore);
  const handlePageChange = () => {
    const { endCursor } = data.suppliers.pageInfo;
    console.log(endCursor);
    fetchMore({
      variables: { after: endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        console.log(prevResult, fetchMoreResult);
        settableData([
          ...prevResult.suppliers.nodes,
          ...fetchMoreResult.suppliers.nodes,
        ]);
      },
    });
  };
  function showTotal(total) {
    return `Showing: 7 of ${total}`;
  }
  //   console.log(data.suppliers);
  if (error) return error;
  if (loading) return loading;
  return (
    <div>
      <Table
        // dataSource={data.suppliers.nodes}
        dataSource={tabledata}
        columns={columns}
        onChange={handlePageChange}
        pagination={{
          //   pageSize: 4,
          //   simple: true,
          pageSize: 2,
          //   showTotal: (total, currentSize) =>
          //     `Showing: ${currentSize[1]} of ${total}`,
          size: "small",
          //   itemRender: (page, prev, originalElement) => {
          //     <div>item </div>;
          //   },
          simple: true,
          // hideOnSinglePage: true,
          // showQuickJumper: false,
          // showLessItems: true,
        }}
      />
    </div>
  );
}

export default Tabledata;
