import { gql, useQuery } from "@apollo/client";

export const getSuppliers = gql`
  query suppliers($first: Int, $after: String) {
    suppliers(first: $first, after: $after) {
      nodes {
        id
        nameArabic
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const useGetAllSuppliers = () => {
  const { error, data, loading, fetchMore } = useQuery(getSuppliers, {
    variables: {
      first: 7,
    },
  });
  return {
    error,
    data,
    loading,
    fetchMore,
  };
};
