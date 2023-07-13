import useGetAllCourse from "@/hooks/course/useGetAllCourse";
import { useEffect, useState } from "react";
import Card from "@/components/card/card";

interface CourseList {
  id: string;
  name: string;
  description: string;
}

const ListingCours = () => {
  const coursesListing = useGetAllCourse();
  const [courses, setCourses] = useState<CourseList[]>([
    {
      id: "",
      name: "",
      description: ""
    }
  ]);

  useEffect(() => {
    coursesListing.fetchData();
  }, []);

  useEffect(() => {
    if (coursesListing.data && Array.isArray(coursesListing.data)) {
      setCourses(coursesListing.data);
      console.log(coursesListing.data);
    } else if (coursesListing.error) {
      console.log("probleme");
    }
  }, [coursesListing.data, coursesListing.error]);

  return (
    <>
      {courses.map((course, index) => (
        <Card
          key={index}
          title={course.name}
          href={`/course/${course.name}/${course.id}`}
          author={"Maxime"}
          desc={course.description}
          tagLink={"TagLink"}
        />
      ))}
    </>
  );
};
export default ListingCours;
