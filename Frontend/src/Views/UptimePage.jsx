import { memo } from "react";
import React from 'react';
import Uptime from "../Components/Uptime";
const UptimePage = memo(() => {
  const apiKeys = window.Config.apiKeys;
  return <div className="page">
      {apiKeys.map(key => <Uptime key={key} apiKey={key} />)}
    </div>;
});
export default UptimePage;