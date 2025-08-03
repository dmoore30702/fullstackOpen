import Part from "./Part";

const Course = ({course}) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return(
    <div>
        <h1>{course.name}</h1>
        {course.parts.map(part => <Part key={part.id} part={part}/>)}
        <strong>Total of {totalExercises} exercises</strong>
    </div>
  )
}

export default Course;