import { memo } from "react";
import React from 'react';
import Cert from '../Components/Cert';
const CertStatusPage = memo(() => {
  const monitorDomains = window.Config.monitorDomains;
  return <div className="page">
      {monitorDomains.map(domain => <Cert key={domain} domain={domain} />)}
    </div>;
});
export default CertStatusPage;