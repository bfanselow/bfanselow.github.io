import Box, { BoxProps } from "@material-ui/core/Box";
import mainLogo from "../assets/logo.png";

type LogoProps = {
  colored?: boolean;
  size?: number;
} & BoxProps;

const Logo = ({ colored = false, size = 80, ...boxProps }: LogoProps) => {
  return (
    <Box {...boxProps}>
      <img height={size} width={size} src={mainLogo} alt="mainLogo" />
    </Box>
  );
};

export default Logo;
