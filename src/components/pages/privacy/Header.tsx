import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <PageHeader
      headerText="CribMD - Privacy Policy"
      rider={`
      WWW.CRIBMD.COM
      <br /><br />
      Last updated: September, 2021
      <br /><br />
      <strong>
        PLEASE READ THE PRIVACY POLICY CAREFULLY
      </strong>
      `}
    />
  );
};

export default Header;
