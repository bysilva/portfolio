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
      return 'bg-green-600'
    case 'Intermedio':
      return 'bg-yellow-500'
    case 'Básico':
      return 'bg-red-500'
    default:
      return 'bg-gray-400'
  }
}

const SkillsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg bg-white shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Tecnología
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Nivel
            </th>
          </tr>
        </thead>
        <tbody>
          {skills.map((group) => (
            <React.Fragment key={group.category}>
              <tr className="bg-gray-50">
                <td colSpan={2} className="px-4 py-3 font-bold text-zinc-700">
                  {group.category}
                </td>
              </tr>
              {group.items.map((skill) => (
                <tr
                  key={skill.technology}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{skill.technology}</td>
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
