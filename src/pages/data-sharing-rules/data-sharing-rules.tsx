import { Box, Typography } from "@mui/material";
import Title from "../../components/title/title.component";
import NarrowPage from "../../components/narrow-page/narrow-page";
import { useLocales } from "../../context/locales.context";

const DataSharingRules = () => {
  const { intl } = useLocales();

  return (
    <NarrowPage>
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <Title>{intl.get("DATA_SHARING_RULES")}</Title>
        <Typography
          variant="body1"
          align="center"
          sx={{
            marginTop: "20px",
          }}
        >
          {intl.get("DATA_SHARING_RULES_DESCRIPTION")}
        </Typography>
      </Box>
    </NarrowPage>
  );
};

export default DataSharingRules;
