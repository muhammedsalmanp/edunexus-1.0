import { useState } from 'react';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
} from 'lucide-react';
import logo from '../../../assets/logo.png';

import { validators } from '../../../validations/authValidation';
import { useFormValidation } from '../../../hook/auth/useFormValidation';

const Login = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { errors, validate } =
    useFormValidation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const isValid = validate(formData, {
      email: validators.email,
      password: validators.password,
    });

    if (!isValid) return;

    console.log('Login Success');

    // dispatch(loginThunk(formData))
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 relative overflow-hidden">
        <div className="flex flex-col justify-between h-full p-16 text-white">
          <div className="flex items-center gap-3">
            <GraduationCap size={40} />

            <div>
              <h2 className="text-3xl font-bold">
                EDUNEXUS
              </h2>

              <p className="text-blue-200">
                Learn. Grow. Succeed.
              </p>
            </div>
          </div>

          <div className="max-w-lg">
            <h1 className="text-6xl font-bold mb-4">
              Welcome back!
            </h1>

            <h2 className="text-5xl font-bold text-blue-400 mb-8">
              Continue your learning
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed">
              Access your courses, track your
              progress and achieve your goals.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={logo}
              alt="Education"
              className="max-w-md w-full"
            />
          </div>
        </div>

        <div className="absolute top-0 right-[-120px] w-[250px] h-full bg-slate-100 rounded-l-full" />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl p-10">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-slate-900">
              Login
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Welcome back! Please login to your
              account.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full h-14 pl-12 pr-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block font-semibold mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full h-14 pl-12 pr-12 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password}
                </p>
              )}

              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Login
            </button>

            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                className="text-blue-600 font-semibold"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;