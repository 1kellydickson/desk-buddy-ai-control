
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container py-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-lg">DeskMate AI</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your Personal Desktop Assistant - Talk to your PC like a friend.
            </p>
          </div>
          
          <FooterLinkGroup title="Product">
            <FooterLink to="/features">Features</FooterLink>
            <FooterLink to="/download">Download</FooterLink>
            <FooterLink to="/docs">Documentation</FooterLink>
            <FooterLink to="/pricing">Pricing</FooterLink>
          </FooterLinkGroup>
          
          <FooterLinkGroup title="Company">
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinkGroup>
          
          <FooterLinkGroup title="Legal">
            <FooterLink to="/terms">Terms of Service</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/licenses">Licenses</FooterLink>
          </FooterLinkGroup>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} DeskMate AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary">
              Twitter
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary">
              GitHub
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinkGroup = ({ title, children }) => {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold">{title}</h4>
      <div className="flex flex-col space-y-2">
        {children}
      </div>
    </div>
  );
};

const FooterLink = ({ to, children }) => {
  return (
    <Link to={to} className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
      {children}
    </Link>
  );
};

export default Footer;
