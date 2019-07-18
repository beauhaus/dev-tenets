import React from 'react';
import './GlobalStyles.css';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="global-styles">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      {children}
    </div>
  );
};
