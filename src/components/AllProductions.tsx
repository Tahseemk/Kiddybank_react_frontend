import React, { useEffect, useState } from "react";
import { Container, Pagination, Form } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { authAxios } from "../config/config";
import { toast } from "react-toastify";
import IsLoadingHOC from "../Common/IsLoadingHOC";

interface CardData {
  productName: string;
  description: string;
  planType: string;
  price: number;
  image: string;
}

interface MyComponentProps {
  setLoading: (isComponentLoading: boolean) => void;
}


const MainPage: React.FC<MyComponentProps> = (props) => {
  const cardsPerPage = 3; // Adjust the number of cards per page as needed
  const [activePage, setActivePage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const { setLoading } = props;
  const [products, setProducts] = useState<CardData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10); // Set your desired page limit here
  const [totalPages, setTotalPages] = useState(0);

  console.log("products" , products)

  useEffect(() => {
    getProductsListData();
  }, [pageNumber, pageLimit]);

  const getProductsListData = async () => {
    setLoading(true);
    await authAxios()
      .post(`/admin/productList/${pageLimit}/${pageNumber}`)
      .then(
        (response) => {
          setLoading(false);
          if (response.data.status === "true") {
            const resData = response.data.data;
            setProducts(resData.docs);
            setTotalPages(resData.pages);
          }
        },
        (error) => {
          setLoading(false);
          toast.error(error.response.data.message);
        }
      )
      .catch((error) => {
        console.log("errorrrr", error);
      });
  };

  const handlePageChange = (page: number) => {
    setPageNumber(page);
  };

  const handleFilterChange = (e: any) => {
    setSelectedFilter(e.target.value);
    setActivePage(1); // Reset page when the filter changes
  };
  const handleNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };



  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-center mb-3 w-100">
        <Form className="d-flex justify-content-center mb-3 w-50">
          <Form.Control
            className=""
            as="select"
            onChange={handleFilterChange}
            value={selectedFilter}
          >
            <option value="All">All Plan Type</option>
            <option value="Basic">Risk</option>
            <option value="Pro">High Rish</option>
            <option value="Pro">Secure</option>
            <option value="Pro">Secure and Safe</option>
            {/* Add more filter options as needed */}
          </Form.Control>
        </Form>
      </div>
      <div className="row">
        {products.map((card: CardData, index) => (
          <CardComponent key={index} {...card} />
        ))}
      
      </div>
      <Pagination className="mt-5 d-flex justify-content-center">
        <Pagination.Prev
          style={{ width: "auto", fontSize: "15px" }}
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
        >
        </Pagination.Prev>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === pageNumber}
            onClick={() => handlePageChange(index + 1)}
            style={{ width: "30px", height: "70px", fontSize: "15px" }}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          style={{ width: "auto", fontSize: "15px" }}
          onClick={handleNextPage}
          disabled={pageNumber === totalPages}
        >
          
        </Pagination.Next>
      </Pagination>
    </Container>
  );
};

export default IsLoadingHOC(MainPage);
