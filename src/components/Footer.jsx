const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6 sm:py-8 px-4 sm:px-6 w-full">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; 2024 GoTrucks. All rights reserved.</p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
