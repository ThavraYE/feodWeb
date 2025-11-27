import viceDeanIamge from "../../assets/image/vicedean.png";
function ViceDean() {
  return (
    <>
      <div className="grid grid-cols-3 w-full">
        <div className="mt-5">
          <div className="profile ms-[15px] rounded-md overflow-hidden shadow-xl w-[450px] h-[250px]">
            <img src={viceDeanIamge} alt="" />
          </div>
        </div>
        <div className="col-span-2 mt-5">
          <div className="profileDetail ">
            <span className="pt-serif-regular">
              <h1 className="pt-serif-bold text-start ms-[25px]">
                Associate Prof. Dr.Mam Socheath
              </h1>
              has worked in the field of education since 2005 through secondary
              education level as a teacher of English and tertiary education
              level as a lecturer and researcher. He graduated his Ph.D. in
              Development Education from Chulalongkorn University after earning
              his Bachelor of Education in TEFL and Master of Education in
              Educational Research and Evaluation, and attending the teacher
              training courses for Teacher of Basic Education and Teacher with
              Higher Education degrees. The areas of his interests include
              educational policy and leadership, educational evaluation,
              teaching methodology and pedagogy, teacher education, and
              education for sustainable development. His major publication
              relates to research and teaching about sustainability in Cambodia
              universities, capacity building of faculty members to promote
              sustainability in Cambodian HEIs, and university student
              engagement in local communities towards sustainability in
              Cambodia.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViceDean;
