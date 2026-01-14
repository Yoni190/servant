import React from "react";
import { useTranslation } from "react-i18next";


const ProjectInfoCard = ({ project }) => {

  const { t } = useTranslation()

  return (
    <div className="max-w-5xl p-6 space-y-8 border rounded-xl bg-white shadow-lg">
      {/* Title */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {t('projectTitle')}
        </h2>
        <p className="text-gray-600">{project?.title}</p>
      </section>

      {/* Description */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {t('projectDescription')}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {project?.description}
        </p>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {t('projectServices')}
        </h2>

        <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">{t('serviceName')}</th>
                <th className="px-4 py-3">{t('link')}</th>
                <th className="px-4 py-3">{t('email')}</th>
                <th className="px-4 py-3">{t('password')}</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {project?.services.map((service, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium">
                    {service?.name}
                  </td>
                  <td className="px-4 py-3 text-blue-600 truncate">
                    <a href={!service?.link.startsWith("https://") ? "https://" + service?.link : service?.link} target="_blank">
                        {service?.link}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    {service?.email}
                  </td>
                  <td className="px-4 py-3 font-mono">
                    {service?.password}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile Services Cards */}
        <div className="md:hidden space-y-4">
          {project?.services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-3"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {service?.name}
                </h3>
                <span className="text-xs text-gray-500">
                  #{index + 1}
                </span>
              </div>

              {/* Link */}
              <div className="text-sm">
                <p className="text-gray-500 dark:text-gray-400">
                  {t('link')}
                </p>
                <a
                  href={
                    !service?.link?.startsWith("https://")
                      ? "https://" + service?.link
                      : service?.link
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 break-all hover:underline"
                >
                  {service?.link}
                </a>
              </div>

              {/* Email */}
              <div className="text-sm">
                <p className="text-gray-500 dark:text-gray-400">
                  {t('email')}
                </p>
                <p className="text-gray-900 dark:text-white break-all">
                  {service?.email}
                </p>
              </div>

              {/* Password */}
              <div className="text-sm">
                <p className="text-gray-500 dark:text-gray-400">
                  {t('password')}
                </p>
                <p className="font-mono text-gray-900 dark:text-white break-all">
                  {service?.password}
                </p>
              </div>
            </div>
          ))}

          {project?.services.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('noServicesFound')}
            </p>
          )}
        </div>

      </section>

      {/* Members */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {t('projectMembers')}
        </h2>
        <p className="text-gray-600">{project?.members}</p>
      </section>
    </div>
  );
};

export default ProjectInfoCard;
