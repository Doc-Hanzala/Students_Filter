import { useState } from "react";
import students from "../data";
import Student from "./Student";

const Students = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="text"
        className="p-3 text-center  rounded-md outline-none w-40 mx-auto mb-5 block border-4  "
        placeholder="...search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        className="max-w-3xl flex mx-auto flex-wrap justify-center
      "
      >
        {students
          .filter((student) => {
            if (search === "") {
              return student;
            } else if (
              student.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return student;
            }
          })
          .map((student, index) => {
            return <Student key={index} {...student} />;
          })}
      </div>
    </>
  );
};

export default Students;
