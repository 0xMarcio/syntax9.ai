export default function Footer() {
  return (
    <footer className="relative py-16 bg-gradient-to-t from-gray-900 to-black">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
        
        <p className="text-gray-400 text-sm tracking-wider">
          © SYNTAX9. ALL RIGHTS RESERVED.
        </p>
        
        <div className="mt-6 flex justify-center space-x-8">
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </footer>
  )
}
