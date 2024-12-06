import { secondary } from "@/theme/colors";
import { Box, Card, Stack, Typography, type StackProps } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

interface Props extends StackProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  primary?: boolean;
}

export default function ContentCard({
  icon,
  title,
  content,
  primary = false,
  sx,
}: Props) {
  const PrimaryContainer = primary ? Card : Fragment;
  return (
    <Stack
      spacing={5}
      sx={{
        textAlign: "center",
        py: primary ? undefined : 10,
        px: primary ? undefined : 5,
        display: "grid",
        width: "fit-content",
        ...sx,
      }}
    >
      <PrimaryContainer
        {...(primary && {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            px: 5,
            py: 10,
          },
          className: "content-card",
        })}
      >
        <Box sx={{ mx: "auto", display: "flex", justifyContent: "center" }}>
          {icon}
        </Box>
        <Stack spacing={2} sx={{ maxWidth: 256 }}>
          <Typography
            sx={{
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: secondary.text }}
            className="text-secondary-foreground"
          >
            {content}
          </Typography>
        </Stack>
      </PrimaryContainer>
    </Stack>
  );
}
