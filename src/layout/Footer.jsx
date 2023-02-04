function Footer() {
    const aYear = new Date().getFullYear()
  return (
    <footer className='footer p-5 bg-white font-bold text-black footer-center'>
        <div>
            <p>
                &copy; {aYear} Polygon Guild Logo Generator. All right Reserved. 
            </p>
        </div>
    </footer>
  )
}

export default Footer