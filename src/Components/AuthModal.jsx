import { useState } from "react";

function AuthModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [openSocial, setOpenSocial] = useState(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40"
      onClick={onClose}
    >
      {/* modal */}
      <div
        className="border border-gray-400 bg-white/90 p-6 w-full max-w-2xl rounded-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>

        {/* tabs */}
        <ul className="flex font-bold text-gray-900 text-lg mb-8">
          <li
            onClick={() => setActiveTab("login")}
            className={`px-4 py-2 cursor-pointer ${activeTab === "login" ? "border-b-2 border-blue-600" : ""}`}
          >
            Login
          </li>
          <li
            onClick={() => setActiveTab("register")}
            className={`px-4 py-2 cursor-pointer ${activeTab === "register" ? "border-b-2 border-blue-600" : ""}`}
          >
            Register
          </li>
        </ul>

        {/* Login Tab */}
        {activeTab === "login" && (
          <div>
            {/* social login */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <h3 className="text-xl font-bold">Login with:</h3>
              <div className="flex gap-4 items-center">

                {/* Twitter */}
                <div
                  onClick={() => setOpenSocial("twitter")}
                  className="hover:scale-125 transition-transform duration-200 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>

                {/* Facebook */}
                <div
                  onClick={() => setOpenSocial("facebook")}
                  className="hover:scale-125 transition-transform duration-200 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                  </svg>
                </div>

                {/* Gmail */}
                <div
                  onClick={() => setOpenSocial("gmail")}
                  className="hover:scale-125 transition-transform duration-200 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 7L2 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* social modal */}
            {openSocial && (
              <div
                className={`fixed inset-0 z-50 flex items-center justify-center
                  ${openSocial === "twitter" ? "bg-gray-900/30" : ""}
                  ${openSocial === "facebook" ? "bg-blue-700/30" : ""}
                  ${openSocial === "gmail" ? "bg-red-700/20" : ""}
                `}
                onClick={() => setOpenSocial(null)}
              >
                <div
                  className="rounded-xl flex overflow-hidden max-w-xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* رنگ سمت چپ */}
                  <div className={`flex w-1/3 h-40 items-center justify-center
                    ${openSocial === "twitter" ? "bg-black" : ""}
                    ${openSocial === "facebook" ? "bg-blue-600" : ""}
                    ${openSocial === "gmail" ? "bg-red-500" : ""}
                  `}>
                    {openSocial === "twitter" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {openSocial === "facebook" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                      </svg>
                    )}
                    {openSocial === "gmail" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-10 7L2 7" />
                      </svg>
                    )}
                  </div>

                  {/* فرم ایمیل */}
                  <div className="relative w-2/3 h-40 flex items-center justify-center bg-white/90">
                    <button
                      onClick={() => setOpenSocial(null)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
                    >
                      ✕
                    </button>
                    <div className="flex flex-col w-full px-6">
                      <label className="text-sm font-medium mb-1">E-Mail</label>
                      <input
                        type="email"
                        placeholder="Enter Your E-Mail"
                        className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                      />
                      <button className="mt-3 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition">
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* فرم login */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Username</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition">
              Log In
            </button>
          </div>
        )}

        {/* Register Tab */}
        {activeTab === "register" && (
          <div>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">E-Mail</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthModal;