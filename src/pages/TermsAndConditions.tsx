import React from "react";
import { Helmet } from "react-helmet";
import AppLayout from "@/components/AppLayout";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";
import tpc_grp0 from "@/assets/images/banner-about.jpg";

const TermsAndConditions = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>Terms & Conditions | Torres Pest Control Davao</title>
        <meta
          name="description"
          content="Review the terms and conditions for using Torres Pest Control services and website. Transparency and customer trust are our priority."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://torrespestcontrol.ph/terms" />
      </Helmet>

      <div className="w-full">
        <section
          className="relative h-[65vh] justify-center text-center bg-black text-white flex items-end bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${tpc_grp0})`,
          }}
        >
          <div
            className="max-w-4xl px-4 mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Welcome to Torres Pest Control! By accessing or using our services
              and website, you agree to be bound by the following terms and
              conditions.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto space-y-16 pt-3">
          <SiteBreadcrumbs />
        </div>

        <section className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <h2>1. Services</h2>
              <p>
                Our pest control services are provided in accordance with
                applicable laws and safety regulations. Service schedules, fees,
                and warranties are discussed and agreed upon with each client
                before treatment.
              </p>

              <h2>2. Appointments & Cancellations</h2>
              <p>
                Appointments must be scheduled in advance. Cancellations or
                rescheduling should be made at least 24 hours prior. Failure to
                do so may result in a fee.
              </p>

              <h2>3. Website Use</h2>
              <p>
                Content on our website is for informational purposes.
                Unauthorized copying, distribution, or use of our materials is
                strictly prohibited.
              </p>

              <h2>4. Liability</h2>
              <p>
                While we strive for safe and effective treatments, we are not
                liable for damages due to misinformation provided by the
                customer or external environmental factors.
              </p>

              <h2>5. Privacy</h2>
              <p>
                Customer information is kept confidential and only used to
                facilitate services, invoicing, and communication. For more, see
                our Privacy Policy.
              </p>

              <h2>6. Changes</h2>
              <p>
                Torres Pest Control reserves the right to update these terms
                without prior notice. Continued use of our services implies
                agreement to the revised terms.
              </p>

              <p className="mt-8">
                If you have any questions or concerns, please contact us at:
                <br />
                <strong>Phone:</strong> +63 917 139 1908
                <br />
                <strong>Email:</strong> torrespestcontrolph@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default TermsAndConditions;
