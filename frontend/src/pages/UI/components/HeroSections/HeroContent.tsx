const HeroContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
          ⭐ #1 Learning Platform
        </span>
      </div>

      <div>
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          Learn Smarter,
          <br />
          Build Your
          <span className="text-blue-600"> Future</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Learn from expert teachers with interactive courses,
          live classes, quizzes, certificates and career guidance.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold">
          🚀 Start Learning
        </button>

        <button className="px-8 py-4 border border-gray-300 rounded-2xl font-semibold">
          ▶ Watch Demo
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 pt-4">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">
            50K+
          </h3>
          <p className="text-gray-500">
            Students
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">
            500+
          </h3>
          <p className="text-gray-500">
            Courses
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">
            150+
          </h3>
          <p className="text-gray-500">
            Teachers
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;