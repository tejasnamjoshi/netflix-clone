import Layout from "../components/Layout/layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-5xl font-bold text-white max-w-xl tracking-wider">
        Unlimited movies, TV shows and more.
      </h1>
      <h2 className="text-2xl mt-4 text-white">
        Watch anywhere. Cancel anytime.
      </h2>

      <p className="text-white mt-8 text-x">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex mt-4 md:flex-row flex-col">
        <input
          type="text"
          placeholder="Email Address"
          className="focus:outline-none focus:ring focus:border-blue-300 rounded-l-sm md:min-w-[500px] md:w-[unset]  w-96 text-lg p-4"
        />
        <button className="flex items-center bg-netflix-red text-white rounded text-xl px-8 py-4 md:mt-0 mt-4">
          Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
}
