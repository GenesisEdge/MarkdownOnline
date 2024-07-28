export const cdnDomains = [
    "fastly.jsdelivr.net",
    "cdn.jsdelivr.net",
    "jsd.onmicrosoft.cn",
];
export const cdnDomainsNpm = ["npm.elemecdn.com"];
export default function cdnInit() {
    window._cdn = { failed: [], index: 0, cdn: cdnDomains };
}
