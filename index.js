import { NpmsIO } from "npms.io";

const npmClient = new NpmsIO();

const plugins = await searchKeywords("keywords:eleventy-plugin not:deprecated");
console.log(JSON.stringify(plugins, null, 2));

async function searchKeywords(query = "", size = 75) {
  const packages = [];
  let _total;

  try {
    do {
      console.info(`Fetching next ${size} packages (from: ${packages.length})`);
      const { results, total } = await npmClient.api.search.searchPackage(
        query,
        {
          size,
          from: packages.length,
        }
      );
      packages.push(...results);
      _total = total;
    } while (packages.length < _total);
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }
  return packages;
}
