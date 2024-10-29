export function MainContent({ domain }) {
    return (
      <div className="flex-1 flex items-center justify-center animate-custom-pulse">
        <h1 className="text-4xl font-bold text-white text-center">
          welcome to{' '}
          <span className="text-blue-400">
            {domain || 'testing.xyz'}
          </span>
        </h1>
      </div>
    );
}