import { Link } from "react-router-dom"



export const ToId = ({id}) => {
  return (
    <Link to={`/detail/${id}`} >
    {id}
    </Link>
  )
}
