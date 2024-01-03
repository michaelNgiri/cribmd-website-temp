import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <PageHeader
      headerText="CribMD - TERMS OF USE"
      rider={`
      WWW.CRIBMD.COM
      <br /><br />
      Last updated: October, 2021
      <br /><br />
      <strong>
        PLEASE READ THESE TERMS OF USE CAREFULLY
      </strong>
      `}
    />
  );
};

export default Header;
