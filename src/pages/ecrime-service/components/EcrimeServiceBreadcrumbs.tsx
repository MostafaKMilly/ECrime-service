import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { GenericBreadcrumbs } from "../../../shared/components";

const breadcrumbItems = [
  { label: "Home", href: "/", icon: <HomeIcon fontSize="small" /> },
  { label: "Services", href: "/services" },
  { label: "ECrime" },
];

const EcrimeServiceBreadcrumbs: React.FC = () => {
  return <GenericBreadcrumbs items={breadcrumbItems} />;
};

export default EcrimeServiceBreadcrumbs;
