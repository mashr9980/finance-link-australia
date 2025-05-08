import { Link } from "react-router-dom";

export const LegalButtons = () => {
  return (
    <>
      <section className="apply-form-section py-16 md:py-24 grayscale">
        <Link to="https://fintelligence.com.au/privacy-policy/">
          <button
            type="submit"
            className="quote-btn w-full py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition duration-300 font-medium"
          >
            Privacy & Ploicy
          </button>
        </Link>
        <Link to="https://fintelligence.com.au/wp-content/uploads/2020/11/Complaint-Handling-Policy-Fintelligence_24112020.pdf">
          <button
            type="submit"
            className="mt-4 quote-btn w-full py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition duration-300 font-medium"
          >
            Complaints Policy
          </button>
        </Link>
        <Link to="https://static1.squarespace.com/static/6491303c412377594c5b04bc/t/656d29db9dbd5452e869e255/1701652956251/Credit+Guide.pdf">
          <button
            type="submit"
            className="mt-4 quote-btn w-full py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition duration-300 font-medium"
          >
            Click Here for Credit Guide
          </button>
        </Link>
      </section>
    </>
  );
}