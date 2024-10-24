import React from 'react'

interface Skill {
  technology: string
  progress: number
  color: string
}

const skills: Skill[] = [
  { technology: 'React / Native', progress: 90, color: 'bg-blue-500' },
  { technology: 'C#', progress: 90, color: 'bg-purple-600' },
  { technology: 'WPF (MVVM)', progress: 90, color: 'bg-purple-600' },
  { technology: 'HTML,CSS,JS', progress: 90, color: 'bg-orange-500' },
  {
    technology: 'API RESTful (.NET Core, DRF)',
    progress: 90,
    color: 'bg-blue-500',
  },
  { technology: 'Git', progress: 90, color: 'bg-black' },
  { technology: 'Python', progress: 85, color: 'bg-teal-500' },
  { technology: 'Jira', progress: 85, color: 'bg-blue-500' },
  { technology: 'Routing & Switching', progress: 85, color: 'bg-blue-500' },
  { technology: 'SQL Server', progress: 80, color: 'bg-gray-500' },
  { technology: 'MySQL', progress: 75, color: 'bg-gray-500' },
  { technology: 'IoT', progress: 70, color: 'bg-blue-500' },
  { technology: 'Docker', progress: 50, color: 'bg-blue-500' },
  { technology: 'Vue', progress: 30, color: 'bg-green-500' },
  { technology: 'Angular', progress: 30, color: 'bg-red-500' },
  { technology: 'AWS', progress: 20, color: 'bg-orange-500' },
]

const SkillsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg bg-white shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-3 text-left font-semibold text-gray-600">
              Technology
            </th>
            <th className="px-3 py-3 text-left font-semibold text-gray-600">
              Progress
            </th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.technology} className="border-b">
              <td className="px-3 py-3">{skill.technology}</td>
              <td className="px-3 py-3">
                <div className="relative h-6 w-full rounded-full bg-gray-200">
                  <div
                    className={`absolute left-0 top-0 h-6 rounded-full ${skill.color}`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center font-semibold text-white">
                    {skill.progress}%
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SkillsTable
