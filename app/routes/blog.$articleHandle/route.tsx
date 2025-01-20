import { MetaFunction, useParams } from '@remix-run/react';
import { blogPosts } from '~/data/blogPosts';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Blog') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function BlogArticlePage() {
  const params = useParams();

  const blogPost = blogPosts.find((post) => post.slug === params.articleHandle);

  if (!blogPost) {
    return (
      <div>
        <p>Not found</p>
      </div>
    );
  }

  return (
    <main>
      <section className="relative pt-14">
        <div className="mx-auto w-full max-w-xl px-4 md:max-w-3xl md:px-2 lg:max-w-5xl">
          <h1 className="font-manrope mb-7 text-4xl font-semibold leading-snug text-black sm:text-5xl">
            {blogPost.title}
          </h1>
          <img
            src={`/blog-posts/${blogPost.image.src}`}
            alt={blogPost.image.alt}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
      <section className="relative py-16">
        <div className="mx-auto w-full max-w-xl px-4 md:max-w-3xl md:px-2 lg:max-w-5xl">
          <h4 className="font-manrope mb-6 text-2xl font-semibold leading-9 text-black">
            Save up to 40% compared to a merchant cash advance and other online
            lenders.
          </h4>

          <p className="mb-6 text-lg font-normal leading-8 text-gray-600">
            The &#39;Fast Services Business Loans&#39; component in our UI
            design system embodies swift and efficient access to financial
            solutions tailored for businesses. This module integrates visually
            engaging elements and intuitive functionalities to streamline the
            process of acquiring loans with unparalleled speed. Offering a
            user-centric interface, it presents a seamless journey for
            businesses seeking rapid financial support. Through clear and
            concise layouts, optimized forms, and interactive tools, this
            component expedites the application and approval process,
            emphasizing agility without compromising on reliability or
            thoroughness. Designed to align with our brand&#39;s commitment to
            responsive services, this UI module serves as a catalyst for
            businesses in need, providing a quick and hassle-free avenue to
            secure vital financial assistance.
          </p>

          <p className="text-lg font-normal leading-8 text-gray-600">
            This description aims to highlight the UI component&#39;s emphasis
            on speed, user-friendliness, and alignment with the brand&#39;s
            commitment to responsive services in facilitating business loans.
          </p>
        </div>
      </section>
      <section className="relative pb-16">
        <div className="mx-auto w-full max-w-xl px-4 md:max-w-3xl md:px-2 lg:max-w-5xl">
          <div className="head-1 mb-11">
            <h2 className="font-manrope mb-4 text-5xl font-semibold leading-tight text-black">
              Small Business Administration (SBA) Loans:
            </h2>
            <p className="text-lg font-normal leading-8 text-gray-600">
              SBA loans are government-backed loans designed to support small
              businesses. They offer flexible terms, lower down payments, and
              competitive rates. These loans cater to various business needs,
              including working capital, real estate purchase, or equipment
              financing, with longer repayment periods and favorable terms.
            </p>
          </div>

          <div className="head-2 mb-11">
            <h3 className="font-manrope mb-5 text-4xl font-medium text-black">
              Term Loans:
            </h3>
            <p className="text-lg font-normal leading-8 text-gray-600">
              Term loans involve borrowing a lump sum of money that is repaid
              over a specified period with a fixed or variable interest rate.
              These loans are suitable for specific purposes such as expansion,
              equipment purchases, or covering operational costs. They typically
              have set monthly payments and a defined repayment schedule.
            </p>
          </div>

          <div className="head-3 mb-11">
            <h4 className="font-manrope mb-5 text-3xl font-normal leading-10 text-black">
              Lines of Credit:
            </h4>
            <p className="text-lg font-normal leading-8 text-gray-600">
              A business line of credit provides access to a set amount of funds
              that can be used as needed. Similar to a credit card, it offers
              flexibility in borrowing and repaying. Interest is charged only on
              the amount used, making it ideal for managing short-term expenses,
              covering gaps in cash flow, or handling unexpected costs.
            </p>
          </div>

          <div className="head-3">
            <h5 className="font-manrope mb-5 text-2xl font-normal leading-9 text-black">
              Equipment Financing:
            </h5>
            <p className="text-lg font-normal leading-8 text-gray-600">
              Equipment financing specifically covers the purchase or lease of
              machinery, vehicles, or other essential equipment. This loan
              allows businesses to acquire necessary assets without tying up
              large amounts of capital. The equipment itself serves as
              collateral, often leading to favorable terms.
            </p>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="mx-auto w-full max-w-xl px-4 md:max-w-3xl md:px-2 lg:max-w-5xl">
          <div className="topics mb-10 lg:mb-16">
            <h5 className="font-manrope mb-5 text-2xl font-semibold leading-9 text-gray-900">
              Views on Topics
            </h5>

            <ul className="ml-5 list-outside list-disc">
              <li className="pl-1 text-lg font-normal leading-8 text-gray-600">
                Loan Terms and Conditions
              </li>
              <li className="pl-1 text-lg font-normal leading-8 text-gray-600">
                Credit Scores and Requirements
              </li>
              <li className="pl-1 text-lg font-normal leading-8 text-gray-600">
                Financial Management
              </li>
              <li className="pl-1 text-lg font-normal leading-8 text-gray-600">
                Loan Repayment Strategies
              </li>
              <li className="pl-1 text-lg font-normal leading-8 text-gray-600">
                Risk Assessment and Contingency Planning
              </li>
            </ul>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-y-4 min-[560px]:grid-cols-2 md:grid-cols-4">
            <img
              src="https://pagedone.io/asset/uploads/1702359706.png"
              alt="money"
              className="mx-auto object-cover"
            />
            <img
              src="https://pagedone.io/asset/uploads/1702359720.png"
              alt="piggy bank"
              className="mx-auto object-cover"
            />
            <img
              src="https://pagedone.io/asset/uploads/1702359733.png"
              alt="papper and pen"
              className="mx-auto object-cover"
            />
            <img
              src="https://pagedone.io/asset/uploads/1702359746.png"
              alt="bitcoin"
              className="mx-auto object-cover"
            />
          </div>

          <h5 className="font-manrope mb-6 text-2xl font-semibold leading-9 text-gray-900">
            Digital financial planner and management
          </h5>
          <p className="mb-16 text-lg font-normal leading-8 text-gray-600">
            This content aims to provide valuable information to users visiting
            the blog detail page within the UI design system, guiding them
            through various aspects of business loans in a clear and informative
            manner.
          </p>

          <div className="mb-5 flex items-center justify-center">
            <svg
              width="51"
              height="46"
              viewBox="0 0 51 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6815 46L23.6815 24.6429L15.5707 24.6429C11.6771 16.1 18.274 10.6786 22.0591 9.03571L22.0591 -1.92847e-06C-5.84525 1.97143 -1.4649 31.4881 4.21331 46L23.6815 46Z"
                fill="url(#paint0_linear_9563_63459)"
              />
              <path
                d="M50.0018 46L50.0018 24.6429L41.891 24.6429C37.9974 16.1 44.5943 10.6786 48.3794 9.03571L48.3794 -1.92847e-06C20.4751 1.97143 24.8554 31.4881 30.5336 46L50.0018 46Z"
                fill="url(#paint1_linear_9563_63459)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9563_63459"
                  x1="23.6815"
                  y1="2.63542"
                  x2="-11.8743"
                  y2="18.7117"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7C3AED" />
                  <stop offset="0.993738" stopColor="#4F46E5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9563_63459"
                  x1="50.0018"
                  y1="2.63542"
                  x2="14.446"
                  y2="18.7117"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7C3AED" />
                  <stop offset="0.993738" stopColor="#4F46E5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="font-manrope mb-16 text-center text-3xl font-semibold leading-snug text-gray-900 sm:text-5xl">
            Let your children be as so many flowers, borrowed from God. If the
            flowers die or wither, thank God for a summer loan of them.
          </h2>

          <p className="mb-16 text-lg font-normal leading-8 text-gray-600">
            The &#39;Fast Services Business Loans&#39; component in our UI
            design system embodies swift and efficient access to financial
            solutions tailored for businesses. This module integrates visually
            engaging elements and intuitive functionalities to streamline the
            process of acquiring loans with unparalleled speed. Offering a
            user-centric interface, it presents a seamless journey for
            businesses seeking rapid financial support. Through clear and
            concise layouts, optimized forms, and interactive tools, this
            component expedites the application and approval process,
            emphasizing agility without compromising on reliability or
            thoroughness. Designed to align with our brand&#39;s commitment to
            responsive services, this UI module serves as a catalyst for
            businesses in need, providing a quick and hassle-free avenue to
            secure vital financial assistance.
          </p>
        </div>
      </section>
      <section className="relative">
        <div className="mx-auto w-full max-w-xl px-4 md:max-w-3xl md:px-2 lg:max-w-5xl">
          <div className="mb-5 flex items-center gap-8">
            <span className="text-xl font-medium leading-8 text-black">
              Share:
            </span>
            <div className="flex items-center gap-5">
              <a href="/" className="">
                <svg
                  className="h-10 w-10 text-black"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="/" className="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4234 19.8791C15.4234 17.3223 17.526 15.2491 20.1203 15.2491C22.7146 15.2491 24.8183 17.3223 24.8183 19.8791C24.8183 22.4359 22.7146 24.5091 20.1203 24.5091C17.526 24.5091 15.4234 22.4359 15.4234 19.8791ZM12.8837 19.8791C12.8837 23.818 16.1235 27.0109 20.1203 27.0109C24.1171 27.0109 27.3569 23.818 27.3569 19.8791C27.3569 15.9402 24.1171 12.7473 20.1203 12.7473C16.1235 12.7473 12.8837 15.9402 12.8837 19.8791ZM25.9522 12.4646C25.9521 12.7942 26.0511 13.1165 26.2368 13.3906C26.4225 13.6648 26.6866 13.8785 26.9955 14.0048C27.3045 14.131 27.6445 14.1642 27.9726 14.1C28.3007 14.0358 28.6021 13.8772 28.8387 13.6442C29.0753 13.4112 29.2365 13.1143 29.3019 12.791C29.3673 12.4678 29.3339 12.1326 29.206 11.828C29.0781 11.5235 28.8615 11.2631 28.5835 11.0798C28.3054 10.8966 27.9785 10.7987 27.644 10.7986H27.6433C27.195 10.7988 26.7651 10.9743 26.448 11.2867C26.1309 11.5991 25.9526 12.0227 25.9522 12.4646ZM14.4267 31.1843C13.0527 31.1227 12.3059 30.8971 11.8096 30.7066C11.1517 30.4541 10.6822 30.1535 10.1886 29.6677C9.69501 29.1819 9.38947 28.7197 9.13445 28.0712C8.94098 27.5823 8.71211 26.8461 8.64965 25.492C8.58133 24.028 8.56768 23.5882 8.56768 19.8792C8.56768 16.1702 8.58245 15.7317 8.64965 14.2665C8.71222 12.9123 8.94278 12.1776 9.13445 11.6872C9.3906 11.0388 9.69568 10.5761 10.1886 10.0897C10.6815 9.60323 11.1505 9.30212 11.8096 9.05079C12.3057 8.86012 13.0527 8.63457 14.4267 8.57301C15.9123 8.50568 16.3585 8.49223 20.1203 8.49223C23.8821 8.49223 24.3288 8.50679 25.8155 8.57301C27.1896 8.63468 27.9351 8.8619 28.4327 9.05079C29.0906 9.30212 29.5601 9.6039 30.0537 10.0897C30.5473 10.5755 30.8517 11.0388 31.1078 11.6872C31.3013 12.1761 31.5302 12.9123 31.5926 14.2665C31.661 15.7317 31.6746 16.1702 31.6746 19.8792C31.6746 23.5882 31.661 24.0268 31.5926 25.492C31.5301 26.8461 31.3001 27.5821 31.1078 28.0712C30.8517 28.7197 30.5466 29.1823 30.0537 29.6677C29.5608 30.153 29.0906 30.4541 28.4327 30.7066C27.9366 30.8972 27.1896 31.1228 25.8155 31.1843C24.33 31.2517 23.8838 31.2651 20.1203 31.2651C16.3568 31.2651 15.9118 31.2517 14.4267 31.1843ZM14.3101 6.07435C12.8098 6.14168 11.7846 6.37612 10.8893 6.71946C9.9621 7.07401 9.17718 7.54968 8.39282 8.32146C7.60846 9.09323 7.12705 9.86801 6.76728 10.7818C6.4189 11.6647 6.18101 12.6745 6.11269 14.153C6.04324 15.6339 6.02734 16.1073 6.02734 19.8791C6.02734 23.6509 6.04324 24.1243 6.11269 25.6052C6.18101 27.0839 6.4189 28.0936 6.76728 28.9765C7.12705 29.8897 7.60857 30.6653 8.39282 31.4368C9.17706 32.2082 9.9621 32.6832 10.8893 33.0388C11.7863 33.3821 12.8098 33.6166 14.3101 33.6839C15.8135 33.7512 16.2931 33.768 20.1203 33.768C23.9475 33.768 24.4279 33.7523 25.9305 33.6839C27.4309 33.6166 28.4554 33.3821 29.3513 33.0388C30.2779 32.6832 31.0634 32.2086 31.8478 31.4368C32.6321 30.665 33.1125 29.8897 33.4733 28.9765C33.8217 28.0936 34.0607 27.0838 34.1279 25.6052C34.1962 24.1232 34.2121 23.6509 34.2121 19.8791C34.2121 16.1073 34.1962 15.6339 34.1279 14.153C34.0596 12.6743 33.8217 11.6641 33.4733 10.7818C33.1125 9.86857 32.6309 9.09446 31.8478 8.32146C31.0647 7.54846 30.2779 7.07401 29.3524 6.71946C28.4554 6.37612 27.4308 6.14057 25.9317 6.07435C24.429 6.00701 23.9486 5.99023 20.1214 5.99023C16.2942 5.99023 15.8135 6.0059 14.3101 6.07435Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="/" className="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7568 31.1112V15.7426H8.63583V31.1112H13.7574H13.7568ZM11.1974 13.6446C12.9828 13.6446 14.0944 12.4645 14.0944 10.9896C14.061 9.48118 12.9828 8.33398 11.2314 8.33398C9.47869 8.33398 8.33398 9.48118 8.33398 10.9895C8.33398 12.4643 9.44513 13.6445 11.1639 13.6445H11.197L11.1974 13.6446ZM16.5914 31.1112H21.712V22.5296C21.712 22.0709 21.7454 21.611 21.8807 21.2833C22.2507 20.3652 23.0933 19.4148 24.5083 19.4148C26.3609 19.4148 27.1024 20.8241 27.1024 22.8903V31.1112H32.2229V22.2993C32.2229 17.5789 29.6969 15.3822 26.3277 15.3822C23.5655 15.3822 22.3523 16.9223 21.6783 17.9712H21.7124V15.7431H16.5917C16.6585 17.1849 16.5913 31.1118 16.5913 31.1118L16.5914 31.1112Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="/" className="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7491 7.24717C14.5623 7.71898 10.3903 11.1384 10.2181 16.0229C10.1098 19.0052 10.9487 21.2426 13.7604 21.8709C14.9805 19.6981 13.3668 19.2188 13.1159 17.6469C12.0852 11.2054 20.476 6.8126 24.867 11.3097C27.905 14.4237 25.905 24.004 21.0049 23.0082C16.3113 22.0571 23.3024 14.4311 19.556 12.9338C16.5106 11.717 14.8919 16.6561 16.3359 19.1095C15.4897 23.3285 13.6669 27.3042 14.4049 32.5959C16.7984 30.8428 17.6052 27.4855 18.267 23.9841C19.4699 24.7216 20.1119 25.4889 21.6469 25.6081C27.3072 26.0502 30.4682 19.9042 29.6958 14.235C29.0095 9.20891 24.0404 6.65119 18.7491 7.24717Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
