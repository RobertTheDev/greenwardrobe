import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Basket') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function BasketPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-manrope w-full text-start text-3xl font-semibold leading-normal text-gray-900">
              Cart
            </h2>

            <div className="my-8 flex w-full flex-col items-center justify-start gap-16 border-b border-gray-200 pb-8 md:flex-row">
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
                    Color :{' '}
                    <span className="font-semibold text-gray-900">Black</span>
                  </h6>
                  <h6 className="text-base font-normal leading-relaxed text-gray-600">
                    Size :{' '}
                    <span className="font-semibold text-gray-900">L</span>
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
            <div className="flex w-full flex-col items-start justify-start gap-8 md:flex-row">
              <button className="flex w-full items-center justify-start gap-3 rounded-xl border border-gray-200 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                >
                  <g id="Group 356">
                    <g id="Vector">
                      <path
                        d="M5.13545 8.73625C5.30457 8.56789 5.57816 8.5685 5.74652 8.73763C5.91489 8.90675 5.91427 9.18033 5.74515 9.3487C5.57602 9.51706 5.30244 9.51645 5.13407 9.34732C4.96571 9.1782 4.96633 8.90461 5.13545 8.73625Z"
                        fill="#064E3B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.62853 3.68676C1.95584 3.64328 2.35711 3.64405 2.78974 3.64488L4.97059 3.6487C5.66309 3.64921 6.22447 3.64962 6.74107 3.86414C7.25768 4.07867 7.65421 4.47605 8.14336 4.96624L14.8798 11.7029C15.5134 12.3364 16.0453 12.8682 16.4113 13.348C16.799 13.856 17.0753 14.3987 17.0753 15.0581C17.0753 15.7176 16.799 16.2602 16.4113 16.7683C16.0453 17.2481 15.5134 17.7799 14.8798 18.4134L14.8022 18.4911C14.1687 19.1246 13.6369 19.6565 13.157 20.0226C12.649 20.4102 12.1064 20.6866 11.4469 20.6866C10.7874 20.6866 10.2448 20.4102 9.73676 20.0226C9.25694 19.6565 8.72514 19.1246 8.09161 18.4911L1.35415 11.7537C0.864336 11.265 0.467264 10.8687 0.252751 10.3526C0.0382368 9.8364 0.0375137 9.27545 0.0366217 8.58348L0.0315796 6.40459C0.0305046 5.97196 0.0295076 5.57069 0.0728034 5.24336C0.120707 4.88119 0.235399 4.49169 0.556178 4.17073C0.876956 3.84977 1.26639 3.73486 1.62853 3.68676ZM6.88044 7.6088C6.08864 6.81344 4.80199 6.81054 4.00663 7.60234C3.21126 8.39413 3.20837 9.68078 4.00016 10.4761C4.79195 11.2715 6.0786 11.2744 6.87397 10.4826C7.66933 9.69082 7.67223 8.40417 6.88044 7.6088Z"
                        fill="#064E3B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.56245 2.51476C7.37611 2.43758 7.15758 2.42342 6.2748 2.42342L2.72516 2.42342C2.28333 2.42342 1.92516 2.06525 1.92516 1.62342C1.92516 1.18159 2.28333 0.823419 2.72516 0.823419L6.2748 0.823416C6.31694 0.823416 6.35859 0.823372 6.39978 0.823328C7.09397 0.822587 7.65674 0.821986 8.17474 1.03655C8.69275 1.25112 9.09027 1.64948 9.58061 2.14087C9.6097 2.17003 9.63913 2.19951 9.66892 2.2293L17.2908 9.85123C17.6033 10.1636 17.6033 10.6702 17.2908 10.9826C16.9784 11.295 16.4719 11.295 16.1595 10.9826L8.53755 3.36067C7.91333 2.73646 7.74879 2.59194 7.56245 2.51476Z"
                        fill="#064E3B"
                      />
                    </g>
                  </g>
                </svg>
                <span className="text-start text-base font-semibold leading-relaxed text-gray-900">
                  35% on Selected Styles
                </span>
              </button>
              <button className="flex w-full items-center justify-start gap-3 rounded-xl border border-gray-200 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.9727 17.8997C14.9727 19.2804 16.0919 20.3997 17.4727 20.3997C18.8534 20.3997 19.9727 19.2804 19.9727 17.8997C19.9727 16.5189 18.8534 15.3997 17.4727 15.3997C16.0919 15.3997 14.9727 16.5189 14.9727 17.8997Z"
                    fill="#064E3B"
                  />
                  <path
                    d="M5.97266 17.8997C5.97266 19.2804 7.09194 20.3997 8.47266 20.3997C9.85337 20.3997 10.9727 19.2804 10.9727 17.8997C10.9727 16.5189 9.85337 15.3997 8.47266 15.3997C7.09194 15.3997 5.97266 16.5189 5.97266 17.8997Z"
                    fill="#064E3B"
                  />
                  <path
                    d="M10.8203 3.88692V14.5367C11.4187 14.9549 11.9003 15.5288 12.2063 16.1996L13.7421 16.1996C14.3881 14.7837 15.8163 13.7996 17.4742 13.7996C18.8482 13.7996 20.0643 14.4754 20.8083 15.5128C20.8577 15.4711 20.9061 15.4267 20.9533 15.3795C21.4196 14.9132 21.6079 14.3341 21.6931 13.7008C21.7735 13.1026 21.7735 12.3504 21.7734 11.4545V8.3446C21.7735 7.44868 21.7735 6.69659 21.6931 6.09848C21.6079 5.46514 21.4196 4.88603 20.9533 4.41972C20.487 3.95341 19.9079 3.76512 19.2746 3.67997C18.6765 3.59956 17.9243 3.59958 17.0283 3.59961H13.9184C13.0225 3.59958 12.2704 3.59956 11.6723 3.67997C11.3743 3.72004 11.0882 3.78295 10.8203 3.88692Z"
                    fill="#064E3B"
                  />
                  <path
                    d="M15.6411 16.1996L17.0283 16.1996C17.9045 16.1997 18.6431 16.1997 19.2346 16.1245C18.7828 15.6764 18.1608 15.3996 17.4742 15.3996C16.75 15.3996 16.0977 15.7075 15.6411 16.1996Z"
                    fill="#064E3B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.22031 13.8673C8.97838 13.8228 8.72901 13.7996 8.47422 13.7996C6.86158 13.7996 5.46639 14.7306 4.79686 16.0845C4.75664 16.0799 4.71708 16.075 4.67817 16.0698C4.05037 15.9854 3.48358 15.7997 3.0281 15.3442C2.57264 14.8888 2.38696 14.322 2.30256 13.6942C2.2226 13.0994 2.22262 12.3503 2.22265 11.4519L2.22265 10.3002L2.22254 10.2338C2.22188 9.96214 2.22117 9.66954 2.31737 9.38915C2.41357 9.10877 2.59378 8.87824 2.76108 8.66421L2.80193 8.61186L4.33778 6.6372L4.38454 6.57686C4.57298 6.3332 4.77556 6.07128 5.0586 5.90075C5.14598 5.8481 5.2378 5.80319 5.333 5.76654C5.64139 5.64782 5.9725 5.64872 6.28052 5.64956L6.35686 5.6497L6.39831 5.6497C7.1205 5.64968 7.72305 5.64966 8.20889 5.70281C8.56739 5.74202 8.90645 5.81378 9.22031 5.95917V13.8673ZM6.47265 9.59966C6.03083 9.59966 5.67265 9.95783 5.67265 10.3997V12.3997C5.67265 12.8415 6.03083 13.1997 6.47265 13.1997C6.91448 13.1997 7.27265 12.8415 7.27265 12.3997V10.3997C7.27265 9.95783 6.91448 9.59966 6.47265 9.59966Z"
                    fill="#064E3B"
                  />
                  <path
                    d="M9.22031 16.1996H9.17343V16.1497L6.68877 16.1497C7.14251 15.6868 7.77482 15.3996 8.47422 15.3996C8.73408 15.3996 8.98468 15.4392 9.22031 15.5128V16.1996Z"
                    fill="#064E3B"
                  />
                </svg>
                <span className="text-start text-base font-semibold leading-relaxed text-gray-900">
                  Free Shipping for Members
                </span>
              </button>
            </div>
          </div>

          <div className="inline-flex flex-col items-start justify-start gap-8 lg:col-span-4">
            <h2 className="font-manrope text-3xl font-semibold leading-normal text-gray-900">
              Order Summary
            </h2>
            <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 p-5">
              <div className="inline-flex w-full items-center justify-between">
                <h6 className="text-lg font-normal leading-8 text-gray-600">
                  Subtotal:
                </h6>
                <h6 className="text-right text-lg font-semibold leading-8 text-gray-900">
                  ₹2000.00
                </h6>
              </div>
              <div className="inline-flex w-full items-center justify-between gap-6">
                <h6 className="text-lg font-normal leading-8 text-gray-600">
                  Delivery:
                </h6>
                <h6 className="text-right text-lg font-semibold leading-8 text-gray-900">
                  ₹22.00
                </h6>
              </div>
              <div className="inline-flex w-full items-center justify-between gap-6 border-b border-gray-200 pb-4">
                <h6 className="text-lg font-normal leading-8 text-gray-600">
                  Tax:
                </h6>
                <h6 className="text-right text-lg font-semibold leading-8 text-gray-900">
                  ₹0
                </h6>
              </div>
              <div className="inline-flex w-full items-center justify-between gap-6">
                <h6 className="text-lg font-normal leading-8 text-gray-600">
                  Total:
                </h6>
                <h6 className="text-right text-lg font-semibold leading-8 text-gray-900">
                  ₹2022.00
                </h6>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8">
              <button className="flex w-full items-center justify-center rounded-xl bg-emerald-900 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-emerald-950">
                <span className="px-2 text-lg font-semibold leading-8 text-white">
                  Check Out
                </span>
              </button>

              <div className="inline-flex items-center justify-center gap-5">
                <a
                  href="/"
                  className="relative flex h-10 w-[58px] items-center justify-center rounded-md border border-gray-100 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="14"
                    viewBox="0 0 40 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.91708 13.4304H6.48418L3.90993 3.32063C3.78774 2.85558 3.52831 2.44444 3.14669 2.25067C2.19431 1.76372 1.14486 1.37618 0 1.18072V0.791494H5.53013C6.29337 0.791494 6.8658 1.37618 6.96121 2.05522L8.29688 9.34775L11.7281 0.791494H15.0656L9.91708 13.4304ZM16.9737 13.4304H13.7316L16.4013 0.791494H19.6434L16.9737 13.4304ZM23.8378 4.29286C23.9332 3.61213 24.5057 3.2229 25.1735 3.2229C26.223 3.12518 27.3661 3.32063 28.3202 3.8059L28.8926 1.08468C27.9386 0.695456 26.8891 0.5 25.9367 0.5C22.7901 0.5 20.5003 2.25068 20.5003 4.6804C20.5003 6.52881 22.1222 7.49934 23.2671 8.08403C24.5057 8.66703 24.9827 9.05625 24.8873 9.63925C24.8873 10.5137 23.9332 10.903 22.9809 10.903C21.836 10.903 20.6911 10.6115 19.6434 10.1245L19.0709 12.8474C20.2158 13.3327 21.4544 13.5281 22.5992 13.5281C26.1276 13.6242 28.3202 11.8752 28.3202 9.25002C28.3202 5.94412 23.8378 5.75035 23.8378 4.29286ZM39.6667 13.4304L37.0924 0.791494H34.3273C33.7549 0.791494 33.1825 1.18072 32.9917 1.76372L28.2248 13.4304H31.5623L32.2284 11.5837H36.3292L36.7108 13.4304H39.6667ZM34.8044 4.19514L35.7567 8.95854H33.0871L34.8044 4.19514Z"
                      fill="#172B85"
                    />
                  </svg>
                </a>
                <a
                  href="/"
                  className="relative flex h-10 w-[58px] items-center justify-center rounded-lg border border-gray-100 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="19"
                    viewBox="0 0 43 19"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00822 2.90559C7.51598 3.49209 6.72839 3.95467 5.9408 3.88859C5.84236 3.09558 6.22795 2.25301 6.67917 1.7326C7.17141 1.12958 8.03284 0.700034 8.73018 0.666992C8.81222 1.49304 8.49226 2.30257 8.00822 2.90559ZM8.72191 4.04553C8.02806 4.00533 7.39495 4.25564 6.88357 4.45782C6.55449 4.58793 6.27581 4.69811 6.0638 4.69811C5.82588 4.69811 5.5357 4.58204 5.2099 4.45172C4.78299 4.28096 4.29491 4.08573 3.78308 4.0951C2.6099 4.11162 1.51876 4.78072 0.919864 5.84632C-0.310743 7.97753 0.599906 11.133 1.78949 12.8677C2.37198 13.7268 3.06932 14.6685 3.98818 14.6355C4.39242 14.6201 4.6832 14.4959 4.98414 14.3673C5.3306 14.2193 5.69052 14.0655 6.25249 14.0655C6.79499 14.0655 7.13916 14.2153 7.46955 14.359C7.78369 14.4957 8.08537 14.627 8.53322 14.619C9.48489 14.6024 10.0838 13.7599 10.6663 12.9008C11.2949 11.9788 11.5711 11.0789 11.613 10.9423L11.6179 10.9265C11.6169 10.9255 11.6092 10.9219 11.5955 10.9156C11.3853 10.8188 9.77923 10.0784 9.76383 8.09318C9.74836 6.42685 11.0378 5.58258 11.2407 5.44968C11.2531 5.44159 11.2614 5.43614 11.2652 5.4333C10.4448 4.21074 9.16493 4.07858 8.72191 4.04553ZM15.3098 14.5281V1.64999H20.1092C22.5868 1.64999 24.3179 3.36818 24.3179 5.87937C24.3179 8.39056 22.554 10.1253 20.0436 10.1253H17.2952V14.5281H15.3098ZM17.295 3.33513H19.584C21.3068 3.33513 22.2913 4.2603 22.2913 5.88762C22.2913 7.51494 21.3068 8.44838 19.5758 8.44838H17.295V3.33513ZM30.873 12.9834C30.3479 13.9912 29.1912 14.6272 27.9442 14.6272C26.0982 14.6272 24.8102 13.5203 24.8102 11.8517C24.8102 10.1996 26.0572 9.24965 28.3626 9.10923L30.8402 8.96054V8.25013C30.8402 7.20105 30.1592 6.63108 28.945 6.63108C27.9442 6.63108 27.214 7.15149 27.0663 7.9445H25.2778C25.3353 6.27588 26.894 5.06158 29.0025 5.06158C31.275 5.06158 32.7517 6.25936 32.7517 8.11797V14.5281H30.914V12.9834H30.873ZM28.4773 13.099C27.419 13.099 26.7462 12.5869 26.7462 11.8021C26.7462 10.9926 27.3943 10.5218 28.6332 10.4474L30.84 10.307V11.0339C30.84 12.2399 29.8227 13.099 28.4773 13.099ZM38.8473 15.032C38.0515 17.2871 37.1408 18.0306 35.2047 18.0306C35.057 18.0306 34.5647 18.0141 34.4499 17.981V16.4363C34.5729 16.4528 34.8765 16.4693 35.0324 16.4693C35.9102 16.4693 36.4024 16.0976 36.706 15.1311L36.8865 14.5612L33.5228 5.1855H35.5984L37.9366 12.7934H37.9776L40.3158 5.1855H42.334L38.8473 15.032Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a
                  href="/"
                  className="flex h-10 w-[58px] items-center justify-center rounded-md border border-gray-100 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="23"
                    viewBox="0 0 38 23"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.6316 20.0486C16.6582 21.712 14.0984 22.7161 11.3011 22.7161C5.0597 22.7161 0 17.7167 0 11.5495C0 5.3823 5.0597 0.382812 11.3011 0.382812C14.0984 0.382812 16.6582 1.38698 18.6316 3.05038C20.605 1.38698 23.1649 0.382812 25.9621 0.382812C32.2036 0.382812 37.2632 5.3823 37.2632 11.5495C37.2632 17.7167 32.2036 22.7161 25.9621 22.7161C23.1649 22.7161 20.605 21.712 18.6316 20.0486Z"
                      fill="#ED0006"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.6309 20.0486C21.0608 18.0004 22.6015 14.9527 22.6015 11.5495C22.6015 8.14622 21.0608 5.09855 18.6309 3.05038C20.6043 1.38697 23.1641 0.382812 25.9613 0.382812C32.2028 0.382812 37.2625 5.3823 37.2625 11.5495C37.2625 17.7167 32.2028 22.7161 25.9613 22.7161C23.1641 22.7161 20.6043 21.712 18.6309 20.0486Z"
                      fill="#F9A000"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.6308 20.0489C21.0607 18.0007 22.6014 14.9531 22.6014 11.5498C22.6014 8.14661 21.0607 5.09895 18.6308 3.05078C16.2009 5.09895 14.6602 8.14661 14.6602 11.5498C14.6602 14.9531 16.2009 18.0007 18.6308 20.0489Z"
                      fill="#FF5E00"
                    />
                  </svg>
                </a>
                <a
                  href="/"
                  className="flex h-10 w-[58px] items-center justify-center rounded-md border border-gray-100 bg-white transition-all duration-700 ease-in-out hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.35703 21.7465L5.7249 19.3313L4.90541 19.3116H0.992188L3.71174 1.48885C3.72021 1.43488 3.7476 1.38478 3.7876 1.34914C3.8278 1.3135 3.87903 1.29395 3.93262 1.29395H10.5309C12.7216 1.29395 14.2333 1.76501 15.0225 2.69491C15.3925 3.13114 15.6282 3.58713 15.7423 4.08874C15.8619 4.6152 15.8638 5.24409 15.7472 6.01127L15.7387 6.06707V6.5587L16.1087 6.7754C16.4203 6.94626 16.6679 7.14178 16.8579 7.3656C17.1743 7.7387 17.3791 8.21281 17.4656 8.7747C17.555 9.35268 17.5255 10.0406 17.3791 10.8194C17.2102 11.7151 16.9373 12.4953 16.5686 13.1336C16.2297 13.7218 15.7978 14.2097 15.2849 14.5877C14.7953 14.947 14.2136 15.2197 13.5559 15.3942C12.9185 15.5657 12.1918 15.6522 11.3947 15.6522H10.8813C10.5142 15.6522 10.1575 15.7889 9.87753 16.0339C9.59675 16.284 9.41114 16.6257 9.35419 16.9994L9.31538 17.2169L8.66534 21.474L8.63598 21.6302C8.6281 21.6797 8.6147 21.7043 8.595 21.721C8.57746 21.7363 8.55224 21.7465 8.52761 21.7465H5.35703Z"
                      fill="#28356A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4595 6.12402C16.44 6.25416 16.4173 6.38715 16.3921 6.5238C15.5219 11.1415 12.5449 12.7368 8.74276 12.7368H6.80684C6.34182 12.7368 5.94991 13.0857 5.8776 13.5598L4.6057 21.8985C4.5586 22.2099 4.79072 22.4904 5.09456 22.4904H8.52819C8.93468 22.4904 9.28009 22.1851 9.34413 21.7706L9.37783 21.5904L10.0243 17.35L10.0659 17.1175C10.1291 16.7016 10.4753 16.3961 10.8818 16.3961H11.3953C14.722 16.3961 17.3263 15.0002 18.0874 10.9605C18.4052 9.27298 18.2407 7.86387 17.3994 6.87287C17.1448 6.57411 16.8289 6.32605 16.4595 6.12402Z"
                      fill="#298FC2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5487 5.74956C15.4157 5.70943 15.2785 5.67318 15.1379 5.64039C14.9964 5.60842 14.8516 5.58011 14.7024 5.55527C14.1804 5.4681 13.6084 5.42676 12.9958 5.42676H7.82411C7.69662 5.42676 7.57564 5.45649 7.46746 5.51026C7.22885 5.62879 7.05171 5.86218 7.00875 6.14791L5.90848 13.3505L5.87695 13.5604C5.94927 13.0863 6.34118 12.7375 6.8062 12.7375H8.74212C12.5442 12.7375 15.5213 11.1414 16.3914 6.52447C16.4174 6.38782 16.4393 6.25483 16.4588 6.12469C16.2387 6.00392 16.0003 5.90067 15.7436 5.81269C15.6801 5.7909 15.6147 5.76992 15.5487 5.74956Z"
                      fill="#22284F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.00906 6.14754C7.05201 5.86181 7.22915 5.62842 7.46777 5.5107C7.57673 5.45673 7.69693 5.427 7.82441 5.427H12.9961C13.6087 5.427 14.1807 5.46855 14.7027 5.55571C14.8519 5.58036 14.9967 5.60887 15.1382 5.64084C15.2788 5.67343 15.416 5.70988 15.549 5.7498C15.615 5.77016 15.6804 5.79134 15.7445 5.81232C16.0012 5.9003 16.2398 6.00437 16.4599 6.12432C16.7188 4.41788 16.4577 3.25601 15.5652 2.20391C14.5809 1.04551 12.8048 0.549805 10.5319 0.549805H3.93345C3.46922 0.549805 3.07317 0.89867 3.00145 1.3736L0.253127 19.3796C0.198941 19.7358 0.464749 20.0572 0.812328 20.0572H4.88594L7.00906 6.14754Z"
                      fill="#28356A"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
