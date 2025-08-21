const AboutDetailsPage = async ({ params }) => {
  const { id } = await params;

  return(
    <>
    <div>AboutDetailsPage</div>
    <p>{id}</p>
    </>
  );
};
export default AboutDetailsPage;
