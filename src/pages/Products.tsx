import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return <div className="p-6">جزئیات محصول شماره {id}</div>;
}
