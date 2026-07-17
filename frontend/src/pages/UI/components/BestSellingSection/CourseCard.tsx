import { motion } from "framer-motion";
import { Star, Users, Flame } from "lucide-react";
import type { Course } from "../../../../types/course";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {course.isBestSeller && (
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <Flame size={14} />
            Bestseller
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
            {course.title}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {course.instructor}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-semibold">
              {course.rating}
            </span>

            <span className="text-slate-400">
              ({course.totalRatings.toLocaleString()})
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <Users size={16} />
            {course.students.toLocaleString()}
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-2">
          <h4 className="text-2xl font-bold text-blue-600">
            ₹{course.price.toLocaleString()}
          </h4>

          <button
            className="
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            Enroll
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default CourseCard;