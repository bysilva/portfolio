import React from 'react'

interface SkillItem {
  technology: string
  level: 'Básico' | 'Intermedio' | 'Avanzado'
}

interface SkillCategory {
  category: string
  items: SkillItem[]
}

const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { technology: 'React / Native', level: 'Avanzado' },
      { technology: 'HTML, CSS, JS', level: 'Avanzado' },
      { technology: 'Angular', level: 'Intermedio' },
      { technology: 'Vue', level: 'Básico' },
      { technology: 'Tailwind CSS', level: 'Avanzado' },
      { technology: 'Framer Motion', level: 'Intermedio' },
      { technology: 'Electron', level: 'Intermedio' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { technology: 'C#', level: 'Avanzado' },
      { technology: 'WPF (MVVM)', level: 'Avanzado' },
      { technology: 'API RESTful (.NET Core, DRF)', level: 'Avanzado' },
      { technology: 'Python', level: 'Avanzado' },
      { technology: 'Django', level: 'Avanzado' },
    ],
  },
  {
    category: 'Base de Datos',
    items: [
      { technology: 'SQL Server', level: 'Avanzado' },
      { technology: 'MySQL / SQLite', level: 'Intermedio' },
    ],
  },
  {
    category: 'DevOps / Infraestructura',
    items: [
      { technology: 'Docker', level: 'Básico' },
      { technology: 'NGINX', level: 'Intermedio' },
      { technology: 'Ubuntu Server', level: 'Intermedio' },
      { technology: 'AWS', level: 'Básico' },
    ],
  },
  {
    category: 'Control de Versiones y Gestión',
    items: [
      { technology: 'Git', level: 'Avanzado' },
      { technology: 'Jira', level: 'Avanzado' },
    ],
  },
  {
    category: 'Redes y Sistemas',
    items: [
      { technology: 'Routing & Switching', level: 'Avanzado' },
      { technology: 'SCADA Systems', level: 'Intermedio' },
      { technology: 'IoT / IFM Sensors', level: 'Avanzado' },
    ],
  },
]

const getColorByLevel = (level: string) => {
  switch (level) {
    case 'Avanzado':
      return 'bg-green-600 dark:bg-green-500'
    case 'Intermedio':
      return 'bg-yellow-500 dark:bg-yellow-400 text-black'
    case 'Básico':
      return 'bg-red-500 dark:bg-red-400'
    default:
      return 'bg-gray-400 dark:bg-gray-600'
  }
}

const SkillsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg bg-white shadow-md dark:bg-zinc-900">
        <thead className="bg-gray-100 dark:bg-zinc-800">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
              Tecnología
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
              Nivel
            </th>
          </tr>
        </thead>
        <tbody>
          {skills.map((group) => (
            <React.Fragment key={group.category}>
              <tr className="bg-gray-50 dark:bg-zinc-800">
                <td
                  colSpan={2}
                  className="px-4 py-3 font-bold text-zinc-700 dark:text-zinc-200"
                >
                  {group.category}
                </td>
              </tr>
              {group.items.map((skill) => (
                <tr
                  key={skill.technology}
                  className="border-b border-gray-200 hover:bg-gray-50 dark:border-zinc-700 dark:hover:bg-zinc-700"
                >
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                    {skill.technology}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${getColorByLevel(
                        skill.level,
                      )}`}
                      style={{ width: '7rem', textAlign: 'center' }}
                    >
                      {skill.level}
                    </span>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SkillsTable
