// src/components/Card.js
import { useLoaderData } from "@remix-run/react";
const ProjectPortfolio = () => {
  const loaderData = useLoaderData() as any;
  return (
    <>
      <div className="portfolio-container ">
        <div className="portfolio-summary-card">
          <p  className="portfolio-text">
          {loaderData?.s3_countryCount}
          </p>
          <p className="portfolio-titles">
          Country
          </p>
        </div>
        <div>
          <svg width="2" height="100%" className="hidden md:block" viewBox="0 0 2 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1.00001" height="150" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1.33398 0)" fill="url(#paint0_linear_3845_49658)"/>
            <rect x="1.33398" y="300" width="1.00001" height="150" transform="rotate(-180 1.33398 300)" fill="url(#paint1_linear_3845_49658)"/>
            <defs>
            <linearGradient id="paint0_linear_3845_49658" x1="1.50002" y1="148.882" x2="1.50002" y2="-2.68256" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CDBCFF"/>
            <stop offset="1" stop-color="#8B2BB8" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3845_49658" x1="2.834" y1="448.882" x2="2.834" y2="297.317" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CDBCFF"/>
            <stop offset="1" stop-color="#8B2BB8" stop-opacity="0"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="portfolio-summary-card">
        <p  className="portfolio-text ">
          {loaderData?.s3_projectDelieverdCount}
          </p>
          <p className="portfolio-titles">
          Projects Delivered
          </p>
        </div>
        <div>
           <svg width="2" height="100%" className="hidden md:block" viewBox="0 0 2 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1.00001" height="150" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1.33398 0)" fill="url(#paint0_linear_3845_49658)"/>
            <rect x="1.33398" y="300" width="1.00001" height="150" transform="rotate(-180 1.33398 300)" fill="url(#paint1_linear_3845_49658)"/>
            <defs>
            <linearGradient id="paint0_linear_3845_49658" x1="1.50002" y1="148.882" x2="1.50002" y2="-2.68256" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CDBCFF"/>
            <stop offset="1" stop-color="#8B2BB8" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3845_49658" x1="2.834" y1="448.882" x2="2.834" y2="297.317" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CDBCFF"/>
            <stop offset="1" stop-color="#8B2BB8" stop-opacity="0"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="portfolio-summary-card">
        <p  className="portfolio-text">
          {loaderData?.s3_TotalProjectCount}
          </p>
          <p className="portfolio-titles">
          Total projects
          </p>
        </div>
      </div>
    </>
  );
};
export default ProjectPortfolio;
