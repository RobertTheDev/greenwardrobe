export default function BasketListItemCard() {
  return (
    <div className="my-8 flex w-full flex-col items-center justify-start gap-16 border-b border-gray-200 pb-8 last:border-b-0 md:flex-row">
      <img
        className="mx-auto rounded-xl object-cover"
        src="https://pagedone.io/asset/uploads/1712571255.png"
        alt="shopping cart section"
      />
      <div className="inline-flex w-full flex-col items-start justify-between gap-6">
        <div className="inline-flex w-full items-center justify-between">
          <h3 className="font-manrope text-2xl font-bold leading-9 text-gray-900">
            Man T-shirt
          </h3>
          <h4 className="text-right text-xl font-semibold leading-loose text-emerald-900">
            ₹2,000
          </h4>
        </div>
        <div className="inline-flex flex-col items-start justify-start gap-2">
          <h6 className="text-base font-normal leading-relaxed text-gray-600">
            Color : <span className="font-semibold text-gray-900">Black</span>
          </h6>
          <h6 className="text-base font-normal leading-relaxed text-gray-600">
            Size : <span className="font-semibold text-gray-900">L</span>
          </h6>
          <h6 className="text-base font-normal leading-relaxed text-gray-600">
            Material :{' '}
            <span className="font-semibold text-gray-900">Cotton</span>
          </h6>
        </div>
        <div className="inline-flex w-full items-end justify-between border-t border-gray-200 pt-6">
          <div className="mx-auto flex w-full items-center justify-start">
            <button className="group flex items-center justify-center rounded-l-lg border border-gray-300 px-4 py-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50">
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              className="h-12 w-14 border-y border-gray-300 bg-transparent px-6 text-center text-lg font-semibold leading-snug text-gray-900 outline-none placeholder:text-gray-900"
              placeholder="1"
            />
            <button className="group flex items-center justify-center rounded-r-lg border border-gray-300 px-4 py-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50">
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
          <button className="group inline-flex items-start justify-start rounded-lg border border-gray-300 p-3 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-red-700">
            <svg
              className="text-red-700 transition-all duration-700 ease-in-out group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.8 6.60007V5.80007H4V6.60007H4.8ZM19.2 6.60007H20V5.80007H19.2V6.60007ZM3 5.80007C2.55817 5.80007 2.2 6.15824 2.2 6.60007C2.2 7.04189 2.55817 7.40007 3 7.40007V5.80007ZM21 6.60007V7.40007C21.4418 7.40007 21.8 7.0419 21.8 6.60007C21.8 6.15825 21.4418 5.80007 21 5.80007L21 6.60007ZM11 11.1C11 10.6582 10.6418 10.3 10.2 10.3C9.75815 10.3 9.39998 10.6582 9.39998 11.1H11ZM9.39998 16.5C9.39998 16.9419 9.75815 17.3 10.2 17.3C10.6418 17.3 11 16.9419 11 16.5H9.39998ZM14.6001 11.1C14.6001 10.6582 14.2419 10.3 13.8001 10.3C13.3582 10.3 13.0001 10.6582 13.0001 11.1H14.6001ZM13.0001 16.5C13.0001 16.9419 13.3582 17.3 13.8001 17.3C14.2419 17.3 14.6001 16.9419 14.6001 16.5H13.0001ZM4.8 7.40007H19.2V5.80007H4.8V7.40007ZM18.4 6.60007V15.0001H20V6.60007H18.4ZM13.2 20.2001H10.8V21.8001H13.2V20.2001ZM5.6 15.0001V6.60007H4V15.0001H5.6ZM10.8 20.2001C9.36317 20.2001 8.36603 20.1984 7.61478 20.0974C6.88655 19.9995 6.51029 19.8216 6.24437 19.5557L5.11299 20.6871C5.72575 21.2998 6.49593 21.5613 7.40159 21.6831C8.28423 21.8018 9.4084 21.8001 10.8 21.8001V20.2001ZM4 15.0001C4 16.3917 3.9983 17.5158 4.11697 18.3985C4.23873 19.3041 4.50024 20.0743 5.11299 20.6871L6.24437 19.5557C5.97844 19.2898 5.80061 18.9135 5.7027 18.1853C5.6017 17.434 5.6 16.4369 5.6 15.0001H4ZM18.4 15.0001C18.4 16.4369 18.3983 17.434 18.2973 18.1853C18.1994 18.9135 18.0216 19.2898 17.7556 19.5557L18.887 20.6871C19.4998 20.0743 19.7613 19.3041 19.883 18.3985C20.0017 17.5158 20 16.3917 20 15.0001H18.4ZM13.2 21.8001C14.5916 21.8001 15.7158 21.8018 16.5984 21.6831C17.5041 21.5613 18.2743 21.2998 18.887 20.6871L17.7556 19.5557C17.4897 19.8216 17.1134 19.9995 16.3852 20.0974C15.634 20.1984 14.6368 20.2001 13.2 20.2001V21.8001ZM3 7.40007H21V5.80007H3V7.40007ZM8.29997 6.6V5H6.69997V6.6H8.29997ZM9.49997 3.8H14.5V2.2H9.49997V3.8ZM15.7 5V6.6H17.3V5H15.7ZM14.5 3.8C15.1627 3.8 15.7 4.33726 15.7 5H17.3C17.3 3.4536 16.0464 2.2 14.5 2.2V3.8ZM8.29997 5C8.29997 4.33726 8.83723 3.8 9.49997 3.8V2.2C7.95357 2.2 6.69997 3.4536 6.69997 5H8.29997ZM3 7.40007C5.62184 7.40005 7.70721 7.40004 9.74999 7.40003C11.8212 7.40002 13.8497 7.40001 16.5 7.4L16.5 5.8C13.8639 5.80001 11.807 5.80002 9.74998 5.80003C7.69301 5.80004 5.63603 5.80005 3 5.80007L3 7.40007ZM16.5 7.4L21 7.40007L21 5.80007L16.5 5.8L16.5 7.4ZM9.39998 11.1V16.5H11V11.1H9.39998ZM13.0001 11.1V16.5H14.6001V11.1H13.0001Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
