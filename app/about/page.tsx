const fetchTodos = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if(!res.ok) throw new Error("bad response");
  const data = await res.json();
  return data;
}

type data = {
  id: string;
  completed: string;
  title: string;
  userId: string;
}

const AboutPage = async() => {

  const data: data[] = await fetchTodos();

  return (
    <>
      {data.map((item, index) => {
        return <li key={index}>{item.title}</li>
      })}
    </>
  );
};
export default AboutPage;
