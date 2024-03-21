import React from "react";
import styled from "styled-components";

interface FooterProps {
  className?: string;
}

const FooterContainer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <div>
        <span>&#169; {new Date().getFullYear()} Company Inc. All Rights Reserved</span>
        <div>
          <a
            href="https://github.com/martindavid/flask-react-docker-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

const CustomFooter = styled(FooterContainer)`
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 60px;
  background-color: #f5f5f5;
  color: #ffffff;
  padding: 0 20px;
`;

export const Footer: React.FC = () => {
  return <CustomFooter className="bg-dark" />;
};

Footer.displayName = "Footer";

export default Footer;
