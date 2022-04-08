import { NpmsIO } from "npms.io";

const npmClient = new NpmsIO();

const plugins = await searchKeywords("keywords:eleventy-plugin not:deprecated");
console.log(JSON.stringify(plugins, null, 2));

async function searchKeywords(query = "", size = 75) {
  const packages = [];

  const _fetcher = async () => {
    console.info(`Fetching next ${size} packages (from: ${packages.length})`);
    const {results,total} = await npmClient.api.search.searchPackage(query, {size, from:packages.length});
    packages.push(...results);
    if (packages.length < total) {
      return _fetcher();
    }
    return packages;
  }

  return _fetcher();
}
