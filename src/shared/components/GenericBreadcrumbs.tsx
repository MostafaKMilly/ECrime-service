import React from "react";
import Breadcrumbs, { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface GenericBreadcrumbsProps extends BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const GenericBreadcrumbs: React.FC<GenericBreadcrumbsProps> = ({
  items,
  separator = <NavigateNextIcon fontSize="small" />,
  ...props
}) => {
  return (
    <Breadcrumbs separator={separator} {...props}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <Typography
              key={index}
              color="textPrimary"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                color: "#555",
              }}
            >
              {item.icon && (
                <span
                  style={{
                    marginRight: 5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </span>
              )}
              {item.label}
            </Typography>
          );
        }

        return (
          <Link
            key={index}
            color="inherit"
            href={item.href}
            sx={{
              display: "flex",
              alignItems: "end",
              textDecoration: "none",
              fontSize: "12px",
              color: "#555",
              "&:hover": {
                textDecoration: "underline",
                color: "primary.main",
              },
            }}
          >
            {item.icon && (
              <span
                style={{
                  marginRight: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </span>
            )}
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default GenericBreadcrumbs;
