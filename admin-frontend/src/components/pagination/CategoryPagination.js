import { Pagination } from "antd";
import { useSelector } from "react-redux";
const CategoryPagination = () => {
   
    return (
        <div className="row">
            <div className="d-flex justify-content-end">
            <Pagination   defaultCurrent={1} total={10} />
            </div>
        </div>
    )
} ;
export default CategoryPagination;

