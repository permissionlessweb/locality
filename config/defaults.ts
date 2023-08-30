import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const chainName = 'stargaze';

export const CONSTANTS = {
  LOCALITY_TWITTER: "https://twitter.com/",
  LOCALITY_DISCORD: "https://discord.gg/",
  LOCALITY_IG: "https://github.com/",

  SPONSOR_LINK: "https://patreon.com/anubra266",
  AUTHOR_GITHUB: "https://github.com/anubra266",
  AUTHOR_TWITTER: "https://twitter.com/anubra266",
  AUTHOR_LINKEDIN: "https://linkedin.com/in/anubra266",
  AUTHOR_EMAIL: "abraham@anubra266.com",
};

export const marketplaceContract =
  'stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl';

export const chainassets: AssetList = assets.find(
  (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
  (asset) => asset.base === 'ustars'
) as Asset;

export const exponent = coin.denom_units.find(
  (unit) => unit.denom === coin.display
)?.exponent as number;
