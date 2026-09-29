import { Star } from "lucide-react";

export type Course = {
  title: string;
  image: string;
  rating: string;
  author: string;
};
export const courses: Course[] = [
  {
    title: "Learn Figma from Basic",
    image: "/images/Frame.png",
    rating: "4.5",
    author: "purepearl studio",
  },
  {
    title: "Build Digital Asset",
    image: "/images/Frame (1).png",
    rating: "4.5",
    author: "purepearl studio",
  },
  {
    title: "The Power of Big Data",
    image: "/images/Frame (2).png",
    rating: "4.5",
    author: "purepearl studio",
  },
  {
    title: "Balancing Productivity and Focus",
    image: "/images/Frame (3).png",
    rating: "4.5",
    author: "purepearl studio",
  },
  {
    title: "Mastering Money Management",
    image: "/images/Frame (4).png",
    rating: "4.5",
    author: "purepearl studio",
  },
  {
    title: "From Idea to Startup Success",
    image: "/images/Frame (5).png",
    rating: "4.5",
    author: "purepearl studio",
  },
];
export const avatarUrls = [
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80",
  "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=80",
  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80",
];
export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <div className="course-chips">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>

      <div className="course-body">
        <div className="course-title-row">
          <h3>{course.title}</h3>
          <span className="course-rating">
            {course.rating} <Star size={14} fill="#c8c8c8" stroke="none" />
          </span>
        </div>
        <p className="course-author">
          by <a href="#courses">{course.author}</a>
        </p>

        <div className="course-info">
          <span className="level-pill">
            <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
              <rect x="0" y="7" width="2.6" height="5" rx="1" fill="#555" />
              <rect x="4.7" y="4" width="2.6" height="8" rx="1" fill="#555" />
              <rect x="9.4" y="0" width="2.6" height="12" rx="1" fill="#555" />
            </svg>
            Beginner
          </span>
          <span className="avatars">
            {avatarUrls.map((url) => (
              <i key={url} style={{ backgroundImage: `url(${url})` }} />
            ))}
            <em>26+</em>
          </span>
        </div>

        <p className="course-price">
          <b>$25</b>
          <small>/lifetime</small>
        </p>
      </div>
    </article>
  );
}
