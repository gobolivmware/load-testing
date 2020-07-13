// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";



export let options = {
  insecureSkipTLSVerify: true,
  batch: 38,
};




export default function () {
  let response;

  group("page_1 - http://pathfinder.vmware.com/", function () {
    response = http.get("http://pathfinder.vmware.com/", {
      headers: {
        Host: "pathfinder.vmware.com",
        Connection: "keep-alive",
        DNT: "1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
        Cookie:
          "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416",
      },
    });
    response = http.get("https://pathfinder.vmware.com/", {
      headers: {
        Host: "pathfinder.vmware.com",
        Connection: "keep-alive",
        DNT: "1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
        Cookie:
          "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; ___utmvmVVBuRLiSB=gdkRhxUqItr; ___utmvbVVBuRLiSB=pZh XemOball: gtD",
      },
    });
    response = http.get(
      "https://pathfinder.vmware.com/metropolis-light.c17c4d7ea2bd30d6bf9d.woff",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Origin: "https://pathfinder.vmware.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "font",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/metropolis-medium.a9473d1d9caf6a4d52a7.woff",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Origin: "https://pathfinder.vmware.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "font",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/metropolis-regular.f8395bb795d877fc4b7b.woff",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Origin: "https://pathfinder.vmware.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "font",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/metropolis-semibold.024816cd16c84f437353.woff",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Origin: "https://pathfinder.vmware.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "font",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/metropolis-light.18ab748831fb5f8c2d21.woff2",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Origin: "https://pathfinder.vmware.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "font",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/metropolis-medium.33c06468ed60f8a8accc.woff2",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Origin: "https://pathfinder.vmware.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "font",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/metropolis-regular.baa64064c4ec59e7a891.woff2",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Origin: "https://pathfinder.vmware.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "font",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/metropolis-semibold.e4583b7d81944e8ce984.woff2",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Origin: "https://pathfinder.vmware.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "font",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/styles.5e7342c094c2a4d200db.css",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "text/css,*/*;q=0.1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "style",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/runtime.b1b3b5f1d92a3143775f.js",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/polyfills.5b82d9c001bbf8f74a4d.js",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/main.072c742194f408a07a35.js",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/_Incapsula_Resource?SWJIYLWA=719d34d31c8e3a6e6fffd425f7e032f3&ns=2&cb=540400412",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/common.dffd3ea03d9982fa6edc.js",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/10.110776ffe7a246198587.js",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647909|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/_Incapsula_Resource?SWKMTFSR=1&e=0.09086193208990223",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; ___utmvc=nRzVBsFF+Ac4v7yW2tBVU3mrGa186SQiacCyfuGMJNVJW7AmiAQGOzB775yDfq2+gQpZ3U1Id/POw9/Di+oOPZ7sffeKF6ZeKsmAWFNEddOuN9GH5aTPhpQTc3YimRQO4Rgj24P2dgW3UDc0DxaHbWRHWwZe/svG2TOy4kPRRpO+IJSgns42adJdSk3IAhkOb1JISefgMJi+JPIN+yuJgbA/eo+s0g4nO5pB7GLadqmT6HJak4HiFTsDuWzM+zz4KrsMDbr5zMQ+7o/6Dc/0YQ94VxKt/WBnKJyXUz68JfQbHTKaihDEw0z1wczfDKU1ixNKkX7qgmnKukcu0nnFwTMjOCA16yjK2m3JE05TsxXuS0xLX3u3Z5XZ/YY9ZKiWbVsA5k2+MrRoxQt6+vCXdsJKKIz+eYIhmQdMPL+hYoIqah2+eiZsqEwQDQRZJaLfwHkTedEJbm0uy74FU7RCkV4SYLK6h9usVuP/7GhCUkBGtGhieHUacMdWY5/XoJYULK6h9g57nyDMTX16YjOHWDIcypZ1LAb63XA8tDvkzQyQjb4s1dTL3ntkdEPqPiSAl/Z7K2opjnPpCFGOfw61E/o/uVTfLyJ/piImxeCuMbfGvYtHVZWN29Hti2C9x2tQ+nMp1/qxKisuBzaFfE7G3WWAjNOlbbrLrvypQRgUSg1AyEnbhPwyuEtTIh6/ppWHdY0b0szHh8hpRMxaSNMnq1OzUjh9Kk5YIaWPd2GmE8bgoErlDptS7m0CZahTrdClc4IYzljZVpI1ITmRL/RjcabCp1Cde7w+AGLOmhHa7xpJSBLgnYaZZZ4mdSBm57nNSwqmWOXsVYIGTqpE4goGZfl89akPc2+zKgUAZncE438eTPUw0p8o0ZdFCHXtCS93a/aVXUu4NE7ZPddBF3tSWCHUNDrl4RyqxbBHHf3t4o3RrTnlAR+1O++nug9yDmh0IICM92f+uUiqPCk3ojPio2O0f062MjYYSWR72spQo/hW+98VJkX45C7Zo+6Duztt0gfVDC8bu6NRm3eXtC7mJRxJoy8lYUpOqD9riHRMsF7/bZ9UvW4iaz6V/hR7szdncsFMd+NMLgWw28i6yasfFtUMmVap5IXKt0Xv9+MMEHeu99V79LKSLr1SWoyoQHO9cGwf2exMi7i5XHLyIZttSiXr81Uw5Lrg3G/DXW9KjeSDIbpcyoATeonwTEXp/+wgeF9XUuv+nXbdGJg7t+03zvtWYHjQsG8qKr4xqd2EXb2wma6X0/TK0KOnorvbDuz3LTwZQ6KNQZqN/zPLwAAa4VwLIpAMdf1Irk6xLh0/ZkUGw7QC3LqtPAVfYBzekmN8Vv4ePdtrieUyr0Jv8p9wQiv4ntzytqPJ6JKTrLSdCfn3rXc0EPl1IbX0PJmTZK8/A/2UG0zivQwPpDuFNu8x7bcYuJEeN0X4Iq2lyFj81BIzZVNR1JhcTr2uILqHItWLK07W9ST3ylj0KkGTsa6Mu+5S2GPVvWZkH0vv8vjzf42MwMVPcTrfnfqQKRSkxPxxYcx+KuIyT2gVV18VmXCucSI5SyD4lAFMeCmYg/D6Yu71L7U/Utr0ynDpKWtlkVEOnwigQ3knoZFKpgHmhGplx3eaqBti0unOALgsZGlnZXN0PTExNDc2MCxzPTZhNjU5YmE2ODg4ODg0ODY5NzhhODQ5NDg3ODM4NjhmYWE4Njk1OTU4NTdmYWE3YThiODg2YjliOWE2MzdjNWM4OGFkOWRhMTk2ODI3MTc0",
        },
      }
    );
    response = http.get(
      "https://content.pathfinder.vmware.com/cms/v1/content/en-us/redirects",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          dnt: "1",
          origin: "https://pathfinder.vmware.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://pathfinder.vmware.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        },
      }
    );
    response = http.get(
      "https://content.pathfinder.vmware.com/cms/v1/content/en-us/core_v1",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          dnt: "1",
          origin: "https://pathfinder.vmware.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://pathfinder.vmware.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/vmware-logo.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/world-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/angle-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:2$_ss:0$_st:1594647849074$ses_id:1594646036246%3Bexp-session$_pn:2%3Bexp-session; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; s_tp=416; s_ppv=vmware%2520%253A%2520pathfinder%2520%253A%2520stg%2C100%2C100%2C416; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835",
        },
      }
    );
    response = http.options(
      "https://portal.pathfinder.vmware.com/api/v1/paths",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "authorization,x-enable-tracking",
          origin: "https://pathfinder.vmware.com",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          referer: "https://pathfinder.vmware.com/",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        },
      }
    );
    response = http.get(
      "https://content.pathfinder.vmware.com/cms/v1/content/en-us/home_page_v2",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          dnt: "1",
          origin: "https://pathfinder.vmware.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://pathfinder.vmware.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        },
      }
    );
    response = http.get("https://portal.pathfinder.vmware.com/api/v1/paths", {
      headers: {
        accept: "application/json, text/plain, */*",
        "x-enable-tracking": "false",
        authorization: "Bearer null",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
        dnt: "1",
        origin: "https://pathfinder.vmware.com",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://pathfinder.vmware.com/",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9,pt;q=0.8",
      },
    });
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/dashboard-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/bundle-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/calculator-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/video-gallery-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/file-group-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/flask-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/cursor-hand-click-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/sections/background.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/sections/homepage-path-section.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/icons/wider-angle-line.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
    response = http.get(
      "https://pathfinder.vmware.com/assets/img/heroes/new-home-page-full.svg",
      {
        headers: {
          Host: "pathfinder.vmware.com",
          Connection: "keep-alive",
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          DNT: "1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://pathfinder.vmware.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
          Cookie:
            "check=true; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; mboxEdgeCluster=34; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=1585540135%7CMCIDTS%7C18457%7CMCMID%7C17162026035107665441224886117683072669%7CMCAAMLH-1595250833%7C4%7CMCAAMB-1595250833%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1594653233s%7CNONE%7CMCSYNCSOP%7C411-18464%7CvVersion%7C4.4.0; _ga=GA1.2.349007161.1594646036; _gid=GA1.2.1780688317.1594646036; SC_LINKS=%5B%5BB%5D%5D; s_tbm=true; s_cc=true; _fbp=fb.1.1594646036843.8250261; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1594646036900-53872; AAMC_vmwareinc_0=REGION%7C4; _gat_gtag_UA_134446051_2=1; ajs_anonymous_id=%2247512d76-b1d4-4790-94c0-ba3b0758b49d%22; _gat=1; visid_incap_1822734=PmhbL2dZRLKXhOIBD7mSQ3JeDF8AAAAAQUIPAAAAAAAMC2AH6hkQQoKfm7nCHE3i; nlbi_1822734=3Xy9M/Cq+ABXUTUP7LWLVwAAAAAbHzbKZDigwhJGniSNHuFp; incap_ses_1254_1822734=bUybdjWJVxnvt1bQZhpnEXJeDF8AAAAANZypJJBdqcQcDvYWNob1NQ==; mbox=session#7c5e5713c1d449de9818ffc5af500ae0#1594647926|PC#7c5e5713c1d449de9818ffc5af500ae0.34_0#1657890835; rxVisitor=1594646067754TOFGGK38L1Q5GUBJQKP5C2NPJFJ0BCD8; dtSa=-; dtLatC=87; dtPC=-20$446067747_564h-vTLAQFPXTPFPRMMSWEQGOAAEIRRVGXOKZ; rxvt=1594647868018|1594646067759; dtCookie=6$JFQL3CIQA28LCEOG0N28063GLNL3FBDS|e78de6a921f47466|1; s_tp=415; s_ppv=vmware%2520%253A%2520pathfinder%2C100%2C100%2C415; _uetsid=3906ace5-f93a-84f8-3b57-75b4ede5fc56; _uetvid=cf240a45-7d92-0811-c693-349dde41f298; utag_main=v_id:0173484f7f1400010ec2418c019c03073002106b00bd0$_sn:1$_se:4$_ss:0$_st:1594647868690$ses_id:1594646036246%3Bexp-session$_pn:3%3Bexp-session",
        },
      }
    );
  });

  sleep(1);
}
