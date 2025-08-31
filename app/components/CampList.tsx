import { fetchCamp } from "@/utils/actions"

const CampList = async() => {

    const camps = await fetchCamp();
  return (
    <div>
        {
            camps.map((item, index) => {
                return <li key={index}>{item.title}</li>
            })
        }
    </div>
  )
}
export default CampList