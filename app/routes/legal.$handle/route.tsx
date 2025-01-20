import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import LegalPageMenu from './LegalPageMenu';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Policy') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ShopLegalPage() {
  return (
    <main className="relative w-full overflow-hidden py-16 lg:py-28">
      <div className="px-12 xl:px-20">
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <LegalPageMenu />
          <div className="tab-pane w-full max-md:px-4">
            <h2 className="font-manrope mb-5 text-3xl font-bold text-gray-900 lg:text-4xl">
              Terms of Use
            </h2>
            <div className="mb-8 flex items-center gap-3 lg:mb-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0054 8V12.5322C12.0054 12.8286 12.1369 13.1098 12.3645 13.2998L15 15.5M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xl font-medium leading-8 text-indigo-600">
                Last updated: May 26, 2023
              </p>
            </div>
            <p className="mb-8 text-lg font-normal leading-8 text-gray-500 lg:mb-10">
              These are terms and conditions (the Terms) on which we supply
              products to you including digital content and services. Please
              read these Terms carefully before you access our digital content
              or use our services. These Terms together with our referenced
              Privacy Policy and Cookies Policy detail how we will provide
              digital content and/or services to you, how you and we may change
              or end the contract, what do in the event of a problem and other
              important information. <br />
              <br /> Who we are - We are Pagedone. <br />
              <br /> How to contact us - You can contact us by telephoning our
              customer service team at [contact number] or by writing to us
              [email address].
            </p>
            <h5 className="font-manrope mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              Contents
            </h5>
            <ul className="mb-8 ml-8 lg:mb-10">
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">
                  Your Agreement to these Terms through Your Access of the Site
                  or Your Use of the Site.
                </a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Content and Services</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">
                  agedone Does Not Offer and Does Not Provide Legal Advice
                </a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">
                  Pagedone is Not a Law Firm. Pagedone is not offering legal
                  representation
                </a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Pagedone is Not a Referral Service</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">
                  There is No Attorney-Client relationship between You and
                  Pagedone and You Agree that You
                </a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Attorney Users Are Not Employees of Pagedone</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">
                  All Legal Fees Are Paid to Attorney Users, Not to Pagedone
                </a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">
                  There Is No Fee to Pagedone for Finding EngagementsThere Is No
                  Fee to Pagedone for Finding Engagements
                </a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Non-circumvention</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Expectations</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Your Responsibilities</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Your Use and Restrictions</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Confidentiality</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Indemnification</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Communication and Other Data</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Electronic Notices and Agreements</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Premium Services </a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Hyperlinks</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Copyright and Limited Use</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Changes</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Your Content</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Copyright Complaints</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Disclaimer</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">
                  Limitation of Liability. Pagedone provides the Site and the
                  Service “as is”, without warranty of any kind
                </a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Entire agreement</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Assignability</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Arbitration</a>
              </li>
              <li className="list-decimal text-lg font-normal text-gray-500">
                <a href="/">Minimum Age for Use</a>
              </li>
            </ul>
            <ul className="font-manrope ml-8 flex list-outside list-decimal flex-col gap-10 text-3xl font-bold">
              <li id="01" className="list-decimal">
                <h2 className="font-manrope text-2xl font-bold text-gray-900 lg:text-3xl">
                  Your Agreement to these Terms through Your Access of the Site
                  or Your Use of the Site.
                </h2>
                <p className="mt-5 text-lg font-normal leading-8 text-gray-500">
                  These Terms govern your use of the Site, both as a visitor and
                  as a registered user (each visitor and each registered user is
                  referred to generally for purposes of these Terms as a Client
                  User). BY USING THE SITE, AND/OR BY REGISTERING WITH US, YOU
                  AGREE TO THESE TERMS OF USE, You consent to the information
                  practices disclosed in our Privacy Policy and our Cookies
                  Policy which are incorporated herein by reference, and that
                  you consent to resolve in the State of New York pursuant to
                  the terms set forth herein any dispute that you may have with
                  us, or the Site. Please note that we offer the Site AS IS and
                  without warranties. If you are registering an account or using
                  the Site on behalf of an individual or entity other than
                  yourself, you represent that you are authorized by such
                  individual or entity to accept these Terms on such
                  individual&#39;s or entity&#39;s behalf.
                </p>
              </li>
              <li id="02" className="list-decimal">
                <h2 className="font-manrope text-2xl font-bold text-gray-900 lg:text-3xl">
                  Content and Services
                </h2>
                <p className="mt-5 text-lg font-normal leading-8 text-gray-500">
                  Everything we offer on and through the Site is referred to in
                  these Terms collectively as the Services. <br />
                  <br /> Some of what is on the Site is viewable without
                  registering with us, but to actively participate or store your
                  information, you must register as a member and authorize the
                  use and disclosure of your personal and legal information
                  pursuant to the terms of our Privacy Policy for purposes of
                  allowing us to provide the Services and as otherwise disclosed
                  in our Privacy Policy available at
                  <span className="cursor-pointer underline underline-offset-4">
                    www.pagedone.io/disclaimers-privacy.
                  </span>
                  Pagedone is an online platform that connects legal
                  professionals (Attorney Users) with potential Client Users
                  seeking legal services. Pagedone itself does not provide legal
                  advice and does not provide legal services of any nature
                  whatsoever. And Pagedone does not guarantee that Client Users
                  will find legal representation through its system. Pagedone
                  offers no opinion nor does it take a position on when or if an
                  attorney-client relationship has been formed between its
                  Client Users and Attorney Users. Pagedone is not a party to
                  the agreements between Client Users and Attorney Users
                  governing the attorney-client relationship nor is Pagedone
                  involved in the actual representation of clients. As a result,
                  Pagedone cannot ensure the completion of agreements between
                  the Client User and Attorney User, the accuracy or
                  completeness of the work-product of the Attorney User, or the
                  integrity of either party. The Client User is responsible for
                  evaluating the integrity and abilities of all Attorney Users
                  with whom the Client User communicates using the Site. You
                  acknowledge that although some of the content, text, data,
                  graphics, images, information, suggestions, guidance, and
                  other material (collectively, Information) that is provided to
                  you on the Site (including Information provided in direct
                  response to your questions or postings) may be provided by
                  individuals in the legal profession, the provision of such
                  Information does not create an attorney-client relationship
                  and does not constitute an opinion or legal advice, but is
                  provided to assist you with locating an appropriate legal
                  professional. Any form of use of the Site by potential clients
                  or subscribing Attorney Users is not intended to and will not
                  create an attorney-client relationship between or among any
                  person, entity, and Pagedone. Any electronic communication
                  sent to anyone at Pagedone other than an Attorney User will
                  not create an attorney-client relationship between the Client
                  User and Pagedone.
                </p>
              </li>
              <li id="03" className="list-decimal">
                <h2 className="font-manrope text-2xl font-bold text-gray-900 lg:text-3xl">
                  Pagedone Does Not Offer and Does Not Provide Legal Advice
                </h2>
                <p className="mt-5 text-lg font-normal leading-8 text-gray-500">
                  The information that you receive from Pagedone, and its
                  affiliates is for informational and scheduling purposes only.
                  Pagedone is not a design firm nor does it offer you design
                  advice, recommendations, consultations or any kind of
                  counseling. Pagedone makes its Designers available to you and
                  any information provided to you by Pagedone (other than
                  through a Designer that you hire to work with you) is (i)
                  provided by independent design professionals and organizations
                  representing the interests of Pagedone, (ii) is for
                  informational purposes only, and (iii) does not establish any
                  designer-client relationship between you and Pagedone.
                </p>
              </li>
            </ul>
            <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3.5 text-center text-base font-semibold text-white transition-all duration-700 hover:bg-indigo-700">
              Load More
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L8.58578 11.0858C9.25245 11.7525 9.58579 12.0858 10 12.0858C10.4142 12.0858 10.7475 11.7525 11.4142 11.0858L15 7.5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
