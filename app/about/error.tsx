"use client"
const error = ({error}:{error: Error}) => {
  console.log(error);
  return (
    <div>Something went wrong</div>
  )
}
export default error