import React from "react";
import { useTranslation } from "react-i18next";


const ProjectInfo = ({ project }) => {

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

        <div className="overflow-x-auto rounded-lg border border-gray-200">
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

export default ProjectInfo;
