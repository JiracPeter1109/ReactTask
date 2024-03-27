function DropDownMenu() {
  const navStyle = {
    backgroundColor: "black",
    justifyContent: "center",
    height: "70px",
    AlignItem: "center",
  };
  return (
    <div className="flex" style={navStyle}>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        <span
          style={{ fontSize: "18px", color: "#9c9c9c", fontWeight: "bold" }}
        >
          DEMOS
        </span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        <span
          style={{ fontSize: "18px", color: "#9c9c9c", fontWeight: "bold" }}
        >
          LATEST
        </span>

        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        <span
          style={{ fontSize: "18px", color: "#9c9c9c", fontWeight: "bold" }}
        >
          COLLECTIONS
        </span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        <span
          style={{ fontSize: "18px", color: "#9c9c9c", fontWeight: "bold" }}
        >
          CATEGORIES
        </span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        <span
          style={{ fontSize: "18px", color: "#9c9c9c", fontWeight: "bold" }}
        >
          PAGES
        </span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        <span
          style={{ fontSize: "18px", color: "#9c9c9c", fontWeight: "bold" }}
        >
          BLOGS
        </span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
    </div>
  );
}

export default DropDownMenu;
