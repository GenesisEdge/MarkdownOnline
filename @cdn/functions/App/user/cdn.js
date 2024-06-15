export const cdnDomains = [
    "cdn.jsdmirror.com",
    "jsd.onmicrosoft.cn",
    "fastly.jsdelivr.net",
    "cdn.jsdelivr.net",
];
export const cdnDomainsNpm = ["npm.elemecdn.com"];
export default function cdnInit() {
    window._cdn = { failed: [], index: 0, cdn: cdnDomains };
}
