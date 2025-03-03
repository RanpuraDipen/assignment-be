/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const responseCodes = [
    {
      response_code: 100,
      description: "Continue",
      image_url: "https://http.dog/100.jpg",
    },
    {
      response_code: 101,
      description: "Switching Protocols",
      image_url: "https://http.dog/101.jpg",
    },
    {
      response_code: 102,
      description: "Processing",
      image_url: "https://http.dog/102.jpg",
    },
    {
      response_code: 103,
      description: "Early Hints",
      image_url: "https://http.dog/103.jpg",
    },
    {
      response_code: 200,
      description: "OK",
      image_url: "https://http.dog/200.jpg",
    },
    {
      response_code: 201,
      description: "Created",
      image_url: "https://http.dog/201.jpg",
    },
    {
      response_code: 202,
      description: "Accepted",
      image_url: "https://http.dog/202.jpg",
    },
    {
      response_code: 203,
      description: "Non-Authoritative Information",
      image_url: "https://http.dog/203.jpg",
    },
    {
      response_code: 204,
      description: "No Content",
      image_url: "https://http.dog/204.jpg",
    },
    {
      response_code: 205,
      description: "Reset Content",
      image_url: "https://http.dog/205.jpg",
    },
    {
      response_code: 206,
      description: "Partial Content",
      image_url: "https://http.dog/206.jpg",
    },
    {
      response_code: 207,
      description: "Multi-Status",
      image_url: "https://http.dog/207.jpg",
    },
    {
      response_code: 208,
      description: "Already Reported",
      image_url: "https://http.dog/208.jpg",
    },
    {
      response_code: 218,
      description: "This is fine",
      image_url: "https://http.dog/218.jpg",
    },
    {
      response_code: 226,
      description: "TM Used",
      image_url: "https://http.dog/226.jpg",
    },
    {
      response_code: 300,
      description: "Multiple Choices",
      image_url: "https://http.dog/300.jpg",
    },
    {
      response_code: 301,
      description: "Moved Permanently",
      image_url: "https://http.dog/301.jpg",
    },
    {
      response_code: 302,
      description: "Found",
      image_url: "https://http.dog/302.jpg",
    },
    {
      response_code: 303,
      description: "See Other",
      image_url: "https://http.dog/303.jpg",
    },
    {
      response_code: 304,
      description: "Not Modified",
      image_url: "https://http.dog/304.jpg",
    },
    {
      response_code: 305,
      description: "Use Proxy",
      image_url: "https://http.dog/305.jpg",
    },
    {
      response_code: 306,
      description: "Switch Proxy",
      image_url: "https://http.dog/306.jpg",
    },
    {
      response_code: 307,
      description: "Temporary Redirect",
      image_url: "https://http.dog/307.jpg",
    },
    {
      response_code: 308,
      description: "Permanent Redirect",
      image_url: "https://http.dog/308.jpg",
    },
    {
      response_code: 400,
      description: "Bad Request",
      image_url: "https://http.dog/400.jpg",
    },
    {
      response_code: 401,
      description: "Unauthorized",
      image_url: "https://http.dog/401.jpg",
    },
    {
      response_code: 402,
      description: "Payment Required",
      image_url: "https://http.dog/402.jpg",
    },
    {
      response_code: 403,
      description: "Forbidden",
      image_url: "https://http.dog/403.jpg",
    },
    {
      response_code: 404,
      description: "Not Found",
      image_url: "https://http.dog/404.jpg",
    },
    {
      response_code: 405,
      description: "Method Not Allowed",
      image_url: "https://http.dog/405.jpg",
    },
    {
      response_code: 406,
      description: "Not Acceptable",
      image_url: "https://http.dog/406.jpg",
    },
    {
      response_code: 407,
      description: "Proxy Authentication Required",
      image_url: "https://http.dog/407.jpg",
    },
    {
      response_code: 408,
      description: "Request Timeout",
      image_url: "https://http.dog/408.jpg",
    },
    {
      response_code: 409,
      description: "Conflict",
      image_url: "https://http.dog/409.jpg",
    },
    {
      response_code: 410,
      description: "Gone",
      image_url: "https://http.dog/410.jpg",
    },
    {
      response_code: 411,
      description: "Length Required",
      image_url: "https://http.dog/411.jpg",
    },
    {
      response_code: 412,
      description: "Precondition Failed",
      image_url: "https://http.dog/412.jpg",
    },
    {
      response_code: 413,
      description: "Payload Too Large",
      image_url: "https://http.dog/413.jpg",
    },
    {
      response_code: 414,
      description: "URI Too Long",
      image_url: "https://http.dog/414.jpg",
    },
    {
      response_code: 415,
      description: "Unsupported Media Type",
      image_url: "https://http.dog/415.jpg",
    },
    {
      response_code: 416,
      description: "Range Not Satisfiable",
      image_url: "https://http.dog/416.jpg",
    },
    {
      response_code: 417,
      description: "Expectation Failed",
      image_url: "https://http.dog/417.jpg",
    },
    {
      response_code: 418,
      description: "I'm a teapot",
      image_url: "https://http.dog/418.jpg",
    },
    {
      response_code: 419,
      description: "Page Expired",
      image_url: "https://http.dog/419.jpg",
    },
    {
      response_code: 420,
      description: "Enhance Your Calm",
      image_url: "https://http.dog/420.jpg",
    },
    {
      response_code: 421,
      description: "Misdirected Request",
      image_url: "https://http.dog/421.jpg",
    },
    {
      response_code: 422,
      description: "Unprocessable Entity",
      image_url: "https://http.dog/422.jpg",
    },
    {
      response_code: 423,
      description: "Locked",
      image_url: "https://http.dog/423.jpg",
    },
    {
      response_code: 424,
      description: "Failed Dependency",
      image_url: "https://http.dog/424.jpg",
    },
    {
      response_code: 425,
      description: "Too Early",
      image_url: "https://http.dog/425.jpg",
    },
    {
      response_code: 426,
      description: "Upgrade Required",
      image_url: "https://http.dog/426.jpg",
    },
    {
      response_code: 428,
      description: "Precondition Required",
      image_url: "https://http.dog/428.jpg",
    },
    {
      response_code: 429,
      description: "Too Many Requests",
      image_url: "https://http.dog/429.jpg",
    },
    {
      response_code: 430,
      description: "Request Header Fields Too Large",
      image_url: "https://http.dog/430.jpg",
    },
    {
      response_code: 431,
      description: "Request Header Fields Too Large",
      image_url: "https://http.dog/431.jpg",
    },

    {
      response_code: 440,
      description: "Login Time-out",
      image_url: "https://http.dog/440.jpg",
    },
    {
      response_code: 444,
      description: "No Response",
      image_url: "https://http.dog/444.jpg",
    },
    {
      response_code: 449,
      description: "Retry With",
      image_url: "https://http.dog/449.jpg",
    },
    {
      response_code: 450,
      description: "Blocked by Windows Parental Controls",
      image_url: "https://http.dog/450.jpg",
    },
    {
      response_code: 451,
      description: "Unavailable For Legal Reasons",
      image_url: "https://http.dog/451.jpg",
    },
    {
      response_code: 460,
      description: "Client closed connection prematurely",
      image_url: "https://http.dog/460.jpg",
    },
    {
      response_code: 463,
      description: "Too many forwarded IP addresses",
      image_url: "https://http.dog/463.jpg",
    },
    {
      response_code: 464,
      description: "Incompatible protocol",
      image_url: "https://http.dog/464.jpg",
    },
    {
      response_code: 494,
      description: "Request header too large",
      image_url: "https://http.dog/494.jpg",
    },
    {
      response_code: 495,
      description: "SSL Certificate Error",
      image_url: "https://http.dog/495.jpg",
    },
    {
      response_code: 496,
      description: "SSL Certificate Required",
      image_url: "https://http.dog/496.jpg",
    },
    {
      response_code: 497,
      description: "HTTP Request Sent to HTTPS Port",
      image_url: "https://http.dog/497.jpg",
    },
    {
      response_code: 498,
      description: "Invalid Token",
      image_url: "https://http.dog/498.jpg",
    },
    {
      response_code: 499,
      description: "Client Closed Request",
      image_url: "https://http.dog/499.jpg",
    },
    {
      response_code: 500,
      description: "Internal Server Error",
      image_url: "https://http.dog/500.jpg",
    },
    {
      response_code: 501,
      description: "Not Implemented",
      image_url: "https://http.dog/501.jpg",
    },
    {
      response_code: 502,
      description: "Bad Gateway",
      image_url: "https://http.dog/502.jpg",
    },
    {
      response_code: 503,
      description: "Service Unavailable",
      image_url: "https://http.dog/503.jpg",
    },
    {
      response_code: 504,
      description: "Gateway Timeout",
      image_url: "https://http.dog/504.jpg",
    },
    {
      response_code: 505,
      description: "HTTP Version Not Supported",
      image_url: "https://http.dog/505.jpg",
    },
    {
      response_code: 506,
      description: "Variant Also Negotiates",
      image_url: "https://http.dog/506.jpg",
    },
    {
      response_code: 507,
      description: "Insufficient Storage",
      image_url: "https://http.dog/507.jpg",
    },
    {
      response_code: 508,
      description: "Loop Detected",
      image_url: "https://http.dog/508.jpg",
    },
    {
      response_code: 509,
      description: "Bandwidth Limit Exceeded",
      image_url: "https://http.dog/509.jpg",
    },
    {
      response_code: 510,
      description: "Not Extended",
      image_url: "https://http.dog/510.jpg",
    },
    {
      response_code: 511,
      description: "Network Authentication Required",
      image_url: "https://http.dog/511.jpg",
    },

    {
      response_code: 520,
      description: "Web server is returning an unknown error",
      image_url: "https://http.dog/520.jpg",
    },
    {
      response_code: 521,
      description: "Web server is down",
      image_url: "https://http.dog/521.jpg",
    },
    {
      response_code: 522,
      description: "Connection timed out",
      image_url: "https://http.dog/522.jpg",
    },
    {
      response_code: 523,
      description: "Origin is unreachable",
      image_url: "https://http.dog/523.jpg",
    },
    {
      response_code: 524,
      description: "A Timeout Occurred",
      image_url: "https://http.dog/524.jpg",
    },
    {
      response_code: 525,
      description: "SSL handshake failed",
      image_url: "https://http.dog/525.jpg",
    },
    {
      response_code: 526,
      description: "Invalid SSL certificate",
      image_url: "https://http.dog/526.jpg",
    },
    {
      response_code: 527,
      description: "Railgun Listener to Origin",
      image_url: "https://http.dog/527.jpg",
    },
    {
      response_code: 529,
      description: "The service is overloaded",
      image_url: "https://http.dog/529.jpg",
    },
    {
      response_code: 530,
      description: "Site Frozen",
      image_url: "https://http.dog/530.jpg",
    },
    {
      response_code: 561,
      description: "Unauthorized",
      image_url: "https://http.dog/561.jpg",
    },
    {
      response_code: 598,
      description: "Network read timeout error",
      image_url: "https://http.dog/598.jpg",
    },
    {
      response_code: 599,
      description: "Network Connect Timeout Error",
      image_url: "https://http.dog/599.jpg",
    },
    {
      response_code: 999,
      description: "Request Denied",
      image_url: "https://http.dog/999.jpg",
    },
  ];

  await knex("response_codes").insert(responseCodes);
};
