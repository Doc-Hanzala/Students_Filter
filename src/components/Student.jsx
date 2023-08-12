const Student = ({ name, rotation, age }) => {
  return (
    <div className="  h-40 bg-purple-700 m-2 my-5 p-3 text-white max-w-xs text-center  rounded-lg flex justify-center flex-col hover:shadow-2xl cursor-pointer ">
      <h2> name : {name}</h2>
      <h3>age : {age}</h3>
      <p>ward : {rotation}</p>
    </div>
  );
};

export default Student;
