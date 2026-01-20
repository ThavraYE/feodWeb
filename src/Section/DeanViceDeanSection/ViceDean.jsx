import viceDeanIamge from "../../assets/image/vicedean.png";
function ViceDean() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center mt-10">
        <div className="flex justify-center ms-4  mt-2">
          <div className="profile rounded-xl  overflow-hidden shadow-xl w-full max-w-[450px] aspect-4/3 md:aspect-auto md:h-full transition-transform duration-300 hover:scale-[1.02]">
            <img src={viceDeanIamge} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="md:col-span-2 bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl ">
          <div className="profileDetail ms-5">
            <h1 className="pt-serif-bold text-2xl md:text-3xl lg:text-4xl  mb-4 text-center md:text-left border-b-2 border-blue-100 pb-2 inline-block md:block w-full">
                Associate Prof. Dr.Mam Socheath
              </h1>
            <p className="pt-serif-regular text-sm md:text-base lg:text-lg leading-relaxed text-justify md:text-left">
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
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViceDean;
