import CustomerList from "./CustomerList";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../../../store/slices/customersSlice";
import Loading from "../../../../components/shared-components/Loading";
export const CustomersFetch = () => {

    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.customers);

    const isCustomersLoading = status === "loading";

    useEffect(() => {
        dispatch(fetchCustomers())
    }, [])

    return <>
        {isCustomersLoading ? <Loading /> :<CustomerList data={data} isCustomersLoading={isCustomersLoading} /> }
    </>

}

export default CustomersFetch