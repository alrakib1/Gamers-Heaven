

const Footer = () => {
    return (
        <div className="mt-10">
           <footer className="footer p-10 bg-[#2B3440] text-white ">
  <aside>
    <img src="https://i.ibb.co/5xKV4Pc/download-removebg-preview.png" alt="" />
    <p><br/>Providing reliable service since 2010</p>
  </aside> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
        </div>
    );
};

export default Footer;