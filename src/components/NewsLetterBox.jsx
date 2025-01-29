import React from "react";

const NewsLetterBox = () => {
  const handSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("Form submitted");
  };
  return (
    <div className="text-center">
      <p className="text-gray-800  font-medium text-2xl">
        Subscribe now & get 20% offer
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
        molestiae?
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        onSubmit={handSubmitHandler}
      >
        <input
          type="text"
          id="email"
          placeholder="Enter Your Email"
          className="sm:flex-1 w-full outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
