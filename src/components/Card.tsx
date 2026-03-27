import Button from './Button'

interface CardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
}

const Card = ({ title, description, techStack, githubUrl, liveUrl }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(githubUrl, '_blank')}
            className="flex items-center space-x-2"
          >
            <span>GitHub</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(liveUrl, '_blank')}
            className="flex items-center space-x-2"
          >
            <span>Live Demo</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card