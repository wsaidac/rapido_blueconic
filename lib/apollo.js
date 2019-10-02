import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";

const config = {
  link: new HttpLink({
    uri: "https://api-hub.eu-west-1.acceptance.cgaws.cloud", // Server URL (must be absolute)
    opts: {
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    },
    headers: {
      "X-Cms-Context": "rapido-en-us",
      "X-Authorization-Context": 11,
    }
  })
};


export default withData(config);